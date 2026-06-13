import { FileText, Calculator, Building2, Users, TrendingUp, ShieldCheck, Award, ClipboardCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicesProps {
  navigate: (path: string) => void;
}

const Services = ({ navigate }: ServicesProps) => {
  const services = [
  {
    icon: FileText,
    title: 'GST Services',
    description:
      'Comprehensive GST solutions to ensure complete compliance and optimize your tax benefits.',
    benefits: [
      'GST Registration & GST Returns Filings',
      'GST Annual Returns Filings',
      'GST Audits & Reconciliation',
      'Advisory on GST',
    ],
  },

  {
    icon: Calculator,
    title: 'Income Tax Services',
    description:
      'Expert income tax planning and filing services for individuals and businesses.',
    benefits: [
      'Income Tax Returns Filings',
      'Income Tax Audits',
      'Tax Planning & Optimization',
      'Appeals & Litigation Supports',
    ],
  },

  {
    icon: TrendingUp,
    title: 'Accounting Services',
    description:
      'Professional bookkeeping and accounting services tailored to your business needs.',
    benefits: [
      'Financial Accounts Preparations',
      'Regular Accounts Maintenance',
      'Bookkeeping Maintenance Services',
      'Accounts Payables / Receivable',
      'Provisionals & Projection Reports',
    ],
  },

  {
    icon: Building2,
    title: 'Registrations',
    description:
      'Hassle-free registration services for all types of business entities and compliance requirements.',
    benefits: [
      'Partnership Registrations',
      'Sole Proprietorship Registration',
      'Income Tax Registrations',
      'PF & ESI Registrations',
      'Private Limited Company Registrations',
      'LLP Registrations',
      'One Person Company (OPC)',
      'MSME Certification Registrations',
      'Labour License Certifications',
      'Food License Registrations',
      'Trade Mark Registrations',
    ],
  },

  {
    icon: Users,
    title: 'Other Services',
    description:
      'Complete compliance, registration, and documentation services for businesses and individuals.',
    benefits: [
      'TDS Returns Filings',
      'PF & ESI Registration & Returns Filings',
      'Payroll Services',
      'Professional Tax Registrations & Returns',
      'PAN Card Services',
      'TAN Card Services',
      'DSC Certificates',
    ],
  },

  

  {
    icon: Award,
    title: 'Certification Services',
    description:
      'Professional certification services for financial, educational, and business requirements.',
    benefits: [
      'Turnover Certificates',
      'Students Visa Certification',
      'Net Worth Certification',
      'Income Certification',
      'Solvency Certification',
    ],
  },

  
];

  const whyChooseUs = [
    'Experienced Team of Certified Professionals',
    'Timely Service Delivery',
    'Competitive Pricing',
    'Personalized Attention',
    'Latest Technology Integration',
    'Complete Confidentiality',
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 dark:from-primary-800 dark:via-primary-900 dark:to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100">
              Comprehensive financial and auditing solutions designed to help your business thrive
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 dark:from-primary-600 dark:to-primary-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => navigate('/contact')}
                    className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
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
              Why Choose SVM Associates?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We combine expertise, technology, and personalized service to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg flex items-center gap-4 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium text-lg">
                  {reason}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-700 dark:to-primary-900 rounded-3xl p-12 text-white text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Let our experts help you navigate the complexities of taxation and compliance while you
              focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Book Free Consultation
              </button>
              <button
                onClick={() => navigate('/about')}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-all duration-300"
              >
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
