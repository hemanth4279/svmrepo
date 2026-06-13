import { Target, Eye, Award, Users, TrendingUp, Shield, CheckCircle2, Briefcase } from 'lucide-react';

interface AboutProps {
  navigate: (path: string) => void;
}

const About = ({ navigate }: AboutProps) => {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We uphold the highest standards of honesty and transparency in all our dealings.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every service we provide to our clients.',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our priority. We tailor our services to meet your unique needs.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We embrace technology and innovative solutions to serve you better.',
    },
  ];

  const team = [
    {
      name: 'K.UmaMaheswara Reddy',
      role: 'Founder & Managing Partner',
      expertise: 'Taxation & Audit',
      experience: '5+ years',
    }
    
  ];

  const milestones = [
    { year: '2020', event: 'SVM Associates Founded' },
    { year: '2021', event: '100+ Clients Milestone' },
    { year: '2023', event: 'Expanded to Multiple Cities' },
    { year: '2024', event: 'Digital Transformation Initiative' },
    { year: '2026', event: '100+ Happy Clients' },
  ];

  const expertise = [
    'Direct & Indirect Taxation',
    'Statutory & Internal Audits',
    'Corporate Law Compliance',
    'Financial Planning & Analysis',
    'Business Advisory Services',
    'Risk Management',
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 dark:from-primary-800 dark:via-primary-900 dark:to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About SVM Associates</h1>
            <p className="text-xl text-blue-100">
              Your trusted partner in financial excellence since 2020
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                SVM Associates is a leading firm of Chartered Accountants, established in 2021 with
                a vision to provide comprehensive financial and auditing solutions to businesses
                across India.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                With over 15 years of experience, we have built a reputation for excellence,
                integrity, and client-focused service. Our team of certified professionals brings
                together diverse expertise in taxation, auditing, accounting, and business advisory.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We serve clients ranging from startups and SMEs to large corporations, helping them
                navigate complex financial regulations while optimizing their business performance.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  100+
                </div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">
                  Clients Served
                </div>
              </div>
              <div className="bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-accent-600 dark:text-accent-400 mb-2">
                  5+
                </div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">
                  Years Experience
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                  01+
                </div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">
                  Team Members
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  98%
                </div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">
                  Satisfaction Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-10 shadow-lg">
              <Target className="w-16 h-16 text-primary-600 dark:text-primary-400 mb-6" />
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                To empower businesses with accurate financial insights, exceptional service quality,
                and strategic guidance that drives sustainable growth. We are committed to ensuring
                compliance while maximizing value for our clients through innovative solutions and
                personalized attention.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-10 shadow-lg">
              <Eye className="w-16 h-16 text-primary-600 dark:text-primary-400 mb-6" />
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Vision
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                To be recognized as the most trusted and preferred financial advisory firm in India,
                setting benchmarks in professional excellence, ethical practices, and client
                satisfaction. We aspire to be the catalyst for our clients' financial success and
                business transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Comprehensive financial services across multiple domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg flex items-center gap-4 hover:shadow-xl transition-shadow duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 font-medium text-lg">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 dark:border-gray-700"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Briefcase className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  {member.expertise}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {member.experience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Key milestones in our growth story
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 dark:bg-primary-800"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col gap-8`}
                >
                  <div className="flex-1 md:text-right text-center">
                    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg inline-block">
                      <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                        {milestone.year}
                      </div>
                      <div className="text-gray-700 dark:text-gray-300 font-medium">
                        {milestone.event}
                      </div>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-600 dark:bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner With Us
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Experience the difference that professional expertise and personalized service can make
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
