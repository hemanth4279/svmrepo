import { useState } from 'react';
import { Calendar, User, ArrowRight, ArrowLeft, Tag } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  published_at: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding GST Returns: A Complete Guide for Businesses',
    slug: 'understanding-gst-returns',
    excerpt:
      'Learn about the different types of GST returns, filing deadlines, and compliance requirements to keep your business running smoothly.',
    content: `Goods and Services Tax (GST) has transformed the Indian taxation landscape since its introduction in 2017. As a business owner, understanding GST returns is crucial for maintaining compliance and avoiding penalties.

Types of GST Returns

GSTR-1: This return captures all outward supplies (sales) made during the tax period. It must be filed monthly by regular taxpayers by the 11th of the following month.

GSTR-3B: A simplified monthly return where taxpayers declare summarized GST liabilities and pay the tax. The due date is the 20th of the following month.

GSTR-9: This is the annual return that consolidates all monthly/quarterly returns filed during the financial year. It must be filed by December 31st of the year following the financial year.

Key Compliance Tips

1. File returns on time to avoid late fees and penalties
2. Reconcile your purchase and sales data regularly
3. Maintain proper documentation for all transactions
4. Use the GST portal's pre-filled data to minimize errors
5. Consider engaging a professional for complex return filings

Common Mistakes to Avoid

Many businesses make errors in Input Tax Credit (ITC) claims, miss reconciliation deadlines, or fail to match their GSTR-1 with GSTR-2A. These mistakes can lead to notices from the GST department and potential financial penalties.

At SVM Associates, we help businesses navigate the complexities of GST compliance, ensuring timely and accurate return filings. Contact us today for expert assistance.`,
    category: 'GST',
    author: 'K.UmaMaheswara Reddy B.com, (CA)',
    published_at: '2024-12-15',
  },
  {
    id: '2',
    title: 'Income Tax Planning Strategies for Small Businesses',
    slug: 'income-tax-planning-small-businesses',
    excerpt:
      'Discover effective tax planning strategies that can help small businesses minimize their tax liability while staying fully compliant.',
    content: `Tax planning is an essential aspect of running a successful small business. With the right strategies, you can significantly reduce your tax burden while remaining fully compliant with Indian tax laws.

Deductions You Shouldn't Miss

Section 80C: Investments in PPF, ELSS, NSC, and life insurance premiums up to Rs. 1.5 lakh.

Section 80D: Health insurance premiums for yourself, family, and parents.

Section 80E: Interest on education loans with no upper limit.

Business Expense Deductions

• Office rent and utilities
• Employee salaries and benefits
• Depreciation on business assets
• Travel and conveyance expenses
• Professional fees and consultancy charges
• Marketing and advertising costs

Choosing the Right Business Structure

The structure of your business—sole proprietorship, partnership, LLP, or private limited company—significantly impacts your tax liability. Each structure has its own tax rates and compliance requirements.

Advance Tax Planning

If your tax liability exceeds Rs. 10,000 in a financial year, you must pay advance tax in quarterly installments. Failing to do so results in interest charges under Section 234C.

Professional Guidance

Tax laws change frequently, and staying updated can be challenging for business owners. Professional guidance ensures you take advantage of all available deductions while maintaining compliance.

At SVM Associates, we provide comprehensive tax planning services tailored to your business needs. Schedule a consultation today to optimize your tax strategy.`,
    category: 'Income Tax',
    author: 'K.UmaMaheswara Reddy B.com, (CA)',
    published_at: '2024-11-28',
  },
  {
    id: '3',
    title: 'The Importance of Statutory Audits for Growing Companies',
    slug: 'importance-of-statutory-audits',
    excerpt:
      'Understand why statutory audits are critical for business growth, investor confidence, and regulatory compliance.',
    content: `As your company grows, statutory audits become not just a legal requirement but a powerful tool for business improvement and stakeholder confidence.

What is a Statutory Audit?

A statutory audit is a legally required review of the accuracy of a company's financial statements and records. Under the Companies Act, 2013, all private limited companies and LLPs meeting certain criteria must undergo statutory audits.

Who Needs a Statutory Audit?

• All private limited companies (regardless of turnover)
• LLPs with annual turnover exceeding Rs. 40 lakhs or contribution exceeding Rs. 25 lakhs
• Companies with annual turnover exceeding Rs. 1 crore (tax audit)
• Professionals with gross receipts exceeding Rs. 50 lakhs (tax audit)

Benefits Beyond Compliance

1. Financial Health Assessment: Audits provide a clear picture of your company's financial position, helping identify areas of strength and weakness.

2. Fraud Detection: Regular audits act as a deterrent to fraud and help detect any irregularities in financial records.

3. Investor Confidence: Audited financial statements are essential for attracting investors and securing loans from financial institutions.

4. Tax Planning: Audits help identify legitimate tax-saving opportunities and ensure compliance with tax regulations.

5. Process Improvement: Auditors often recommend improvements to accounting systems and internal controls.

Common Audit Findings

Many growing companies face issues with inadequate documentation, inconsistent accounting practices, and poor internal controls. Addressing these findings proactively can save significant time and money.

At SVM Associates, our experienced audit team provides thorough statutory audits with actionable insights for business improvement.`,
    category: 'Audit',
    author: 'K.UmaMaheswara Reddy B.com, (CA)',
    published_at: '2024-10-20',
  },
  {
    id: '4',
    title: 'MSME Registration: Benefits and Step-by-Step Process',
    slug: 'msme-registration-guide',
    excerpt:
      'Learn how MSME registration can unlock government benefits, subsidies, and easier access to credit for your business.',
    content: `Micro, Small, and Medium Enterprises (MSME) registration, now known as Udyam Registration, is a government initiative that provides numerous benefits to small businesses in India.

Eligibility Criteria

Micro Enterprise: Investment up to Rs. 1 crore and turnover up to Rs. 5 crores.

Small Enterprise: Investment up to Rs. 10 crores and turnover up to Rs. 50 crores.

Medium Enterprise: Investment up to Rs. 50 crores and turnover up to Rs. 250 crores.

Key Benefits of MSME Registration

1. Priority Sector Lending: Banks provide collateral-free loans up to Rs. 2 crores under various government schemes.

2. Interest Subsidy: Eligible MSMEs can avail interest subsidies on loans from banks and financial institutions.

3. Tax Benefits: Various direct and indirect tax benefits are available exclusively for registered MSMEs.

4. Government Tenders: MSMEs get preference in government procurement and can participate in reserved tenders.

5. Subsidy for Patent Registration: Up to 50% subsidy for patent registration and ISO certification.

6. Credit Guarantee Scheme: Collateral-free credit facility from banks up to Rs. 2 crores.

Registration Process

Step 1: Visit the Udyam Registration portal
Step 2: Enter your Aadhaar number and verify OTP
Step 3: Fill in business details including PAN, GST, and bank account
Step 4: Submit the application
Step 5: Receive your Udyam Registration Certificate instantly

Documents Required

• Aadhaar card of the applicant
• PAN card
• Business address proof
• Bank account details
• GST registration (if applicable)

At SVM Associates, we assist businesses with hassle-free MSME registration and help them maximize the benefits available.`,
    category: 'Registration',
    author: 'K.UmaMaheswara Reddy B.com, (CA)',
    published_at: '2024-09-15',
  },
  {
    id: '5',
    title: 'Company Registration in India: Choosing the Right Business Structure',
    slug: 'company-registration-guide',
    excerpt:
      'A comprehensive guide to different business structures in India and how to choose the one that best fits your goals.',
    content: `Starting a business in India begins with choosing the right legal structure. This decision impacts everything from tax liability to compliance requirements and personal liability.

Types of Business Structures

Sole Proprietorship
The simplest form with minimal compliance. The owner has unlimited personal liability. Best for small businesses and freelancers.

Partnership Firm
Two or more partners share profits and liabilities. Easy to form with a partnership deed. Suitable for professional services and small trading businesses.

Limited Liability Partnership (LLP)
Combines partnership flexibility with limited liability protection. Partners are not personally liable for the LLP's debts. Ideal for professional services and consultancies.

Private Limited Company
The most preferred structure for startups and growing businesses. Offers limited liability, easier fundraising, and strong brand credibility. Requires at least 2 directors and 2 shareholders.

One Person Company (OPC)
A private limited company with a single member. Provides limited liability while maintaining sole ownership. Great for solo entrepreneurs who want corporate benefits.

Comparison Factors

• Liability Protection: OPC, Pvt Ltd, and LLP offer limited liability
• Compliance Burden: Sole proprietorship has least; Pvt Ltd has most
• Tax Rates: Companies pay 25-30%; others are taxed at individual rates
• Funding: Pvt Ltd is most preferred by investors
• Transferability: Pvt Ltd shares are easily transferable

Registration Timeline

Most registrations can be completed within 7-15 business days, depending on the structure and documentation readiness.

At SVM Associates, we guide you through the entire registration process, from choosing the right structure to obtaining all necessary certifications.`,
    category: 'Registration',
    author: 'K.UmaMaheswara Reddy B.com, (CA)',
    published_at: '2024-08-10',
  },
  {
    id: '6',
    title: 'TDS Compliance: What Every Business Needs to Know',
    slug: 'tds-compliance-guide',
    excerpt:
      'Master the essentials of Tax Deducted at Source (TDS) to ensure compliance and avoid costly penalties.',
    content: `Tax Deducted at Source (TDS) is a mechanism where the payer deducts tax before making certain payments and deposits it with the government. Understanding TDS is critical for every business.

Key TDS Sections

Section 194A: TDS on interest other than securities (10%)
Section 194C: TDS on payments to contractors (1-2%)
Section 194H: TDS on commission (5%)
Section 194I: TDS on rent (10%)
Section 194J: TDS on professional fees (10%)

TAN Registration

Before deducting TDS, you must obtain a Tax Deduction Account Number (TAN). This 10-digit alphanumeric number is mandatory for all TDS-related activities.

Filing TDS Returns

TDS returns must be filed quarterly using Form 24Q (salary), 26Q (non-salary), and 27EQ (TCS). The due dates are:

• Q1 (Apr-Jun): July 31
• Q2 (Jul-Sep): October 31
• Q3 (Oct-Dec): January 31
• Q4 (Jan-Mar): May 31

Issuing TDS Certificates

Form 16: For salary TDS (annual)
Form 16A: For non-salary TDS (quarterly)

These must be issued within the prescribed timelines to help deductees claim their TDS credit.

Common Penalties

• Late filing fee: Rs. 200 per day under Section 234E
• Late TDS deposit: Interest at 1.5% per month under Section 201
• Non-filing of returns: Penalty from Rs. 10,000 to Rs. 1,00,000
• Non-issuance of certificates: Penalty of Rs. 100 per day per certificate

Best Practices

1. Maintain a TDS calendar for all due dates
2. Verify PAN details of deductees before deducting TDS
3. File returns on time to avoid penalties
4. Reconcile TDS claimed with Form 26AS
5. Issue certificates within prescribed timelines

SVM Associates provides comprehensive TDS compliance services to keep your business penalty-free.`,
    category: 'Tax Compliance',
    author: 'K.UmaMaheswara Reddy B.com, (CA)',
    published_at: '2024-07-25',
  },
];

interface BlogProps {
  navigate: (path: string) => void;
}

const Blog = ({ navigate }: BlogProps) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(blogPosts.map((post) => post.category)))];

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (selectedPost) {
    return (
      <div className="min-h-screen pt-20 bg-white dark:bg-gray-900">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={() => setSelectedPost(null)}
            className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </button>

          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(selectedPost.published_at)}
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {selectedPost.author}
              </span>
              <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                {selectedPost.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {selectedPost.title}
            </h1>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {selectedPost.content}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => navigate('/contact')}
              className="w-full md:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Need Help With This Topic?
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 dark:from-primary-800 dark:via-primary-900 dark:to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-xl text-blue-100">
              Stay updated with the latest news, tips, and insights on taxation, finance, and
              business compliance
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No blog posts found in this category.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 group cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                      <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                        {post.category}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.published_at)}
                      </span>
                      <span className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                    </div>

                    <button className="text-primary-600 dark:text-primary-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Get the latest updates on tax regulations, financial tips, and business insights
            delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            />
            <button className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
