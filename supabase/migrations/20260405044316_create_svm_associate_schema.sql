/*
  # SVM Associate Website Schema

  ## Overview
  This migration creates the database schema for the SVM Associate portfolio website,
  including tables for blog posts and contact form submissions.

  ## New Tables
  
  ### `blog_posts`
  - `id` (uuid, primary key) - Unique identifier for each blog post
  - `title` (text) - Blog post title
  - `slug` (text, unique) - URL-friendly identifier
  - `excerpt` (text) - Short description for listing pages
  - `content` (text) - Full blog post content
  - `category` (text) - Category (e.g., "Tax Updates", "GST", "Finance Tips")
  - `author` (text) - Author name
  - `published_at` (timestamptz) - Publication date
  - `created_at` (timestamptz) - Record creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp
  
  ### `contact_submissions`
  - `id` (uuid, primary key) - Unique identifier for each submission
  - `name` (text) - Contact name
  - `email` (text) - Contact email address
  - `phone` (text) - Contact phone number
  - `message` (text) - Message content
  - `created_at` (timestamptz) - Submission timestamp
  - `status` (text) - Submission status (default: 'new')

  ## Security
  - Enable RLS on all tables
  - Blog posts: Public read access, no write access from client
  - Contact submissions: Public insert only, no read access from client
*/

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  category text NOT NULL DEFAULT 'General',
  author text NOT NULL DEFAULT 'SVM Associate',
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Blog posts policies (public read access)
CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts
  FOR SELECT
  TO anon
  USING (published_at <= now());

-- Contact submissions policies (public insert only)
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);

-- Insert sample blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, category, author) VALUES
(
  'Understanding GST Compliance in 2024',
  'understanding-gst-compliance-2024',
  'A comprehensive guide to GST compliance requirements and best practices for businesses in the current fiscal year.',
  'Goods and Services Tax (GST) compliance is crucial for businesses operating in India. In this detailed guide, we cover everything you need to know about GST filing, returns, and compliance requirements for 2024. From understanding input tax credits to managing invoices effectively, we provide practical insights to help your business stay compliant and avoid penalties.',
  'GST',
  'CA Rajesh Kumar'
),
(
  'Income Tax Deductions You Should Not Miss',
  'income-tax-deductions-guide',
  'Maximize your tax savings by understanding all available deductions under the Income Tax Act.',
  'Tax planning is essential for optimizing your financial health. This article explores various deductions available under Section 80C, 80D, and other provisions of the Income Tax Act. Learn about deductions for insurance premiums, home loan interest, education loans, and investments that can significantly reduce your tax liability while building wealth.',
  'Income Tax',
  'CA Priya Sharma'
),
(
  'The Importance of Regular Financial Audits',
  'importance-financial-audits',
  'Discover why regular financial audits are essential for business growth and compliance.',
  'Financial audits are not just about compliance—they are strategic tools for business improvement. Regular audits help identify inefficiencies, ensure accuracy in financial reporting, detect fraud, and provide stakeholders with confidence in your financial statements. Learn about different types of audits and how they can benefit your organization.',
  'Audit Services',
  'CA Amit Patel'
),
(
  'Company Registration: A Step-by-Step Guide',
  'company-registration-guide',
  'Everything you need to know about registering your company in India.',
  'Starting a new business? This comprehensive guide walks you through the entire company registration process in India. From choosing the right business structure (Private Limited, LLP, OPC) to obtaining DIN, DSC, and filing incorporation documents, we cover every step. Learn about registration timelines, required documents, and compliance requirements for new companies.',
  'Company Registration',
  'SVM Associate'
);
