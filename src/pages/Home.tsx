import { ArrowRight, FileText, Calculator, Building2, Users, TrendingUp, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

interface HomeProps {
  navigate: (path: string) => void;
}

const Home = ({ navigate }: HomeProps) => {
  const services = [
    {
      icon: FileText,
      title: 'GST Services',
      description: 'Complete GST compliance, filling, and advisory services for your business.',
    },
    {
      icon: Calculator,
      title: 'Income Tax',
      description: 'Expert income tax planning, filling, and consultation services.',
    },
    {
      icon: Building2,
      title: 'Company Registration',
      description: 'Hassle-free company registration and business setup solutions.',
    },
    {
      icon: Users,
      title: 'Payroll Services',
      description: 'Comprehensive TDS, ESI, PF, and payroll management services.',
    },
    {
      icon: TrendingUp,
      title: 'Accounting',
      description: 'Professional bookkeeping and accounting services tailored to your needs.',
    },
    {
      icon: ShieldCheck,
      title: 'Audit Services',
      description: 'Thorough audit and assurance services for compliance and transparency.',
    },
  ];

  const stats = [
    { number: '100+', label: 'Clients Served' },
    { number: '5+', label: 'Years Experience' },
    { number: '01+', label: 'Expert Team' },
    { number: '98%', label: 'Client Satisfaction' },
  ];

  const testimonials = [
    
  {
    name: 'G. Hemanth Kumar Reddy',
    role: 'Client',
    content:
      'SVM Associates provided excellent guidance for my tax filing and financial planning. Their team was responsive, professional, and ensured every detail was handled accurately.',
  },
  {
    name: 'K. Veera Govardhan Reddy',
    role: 'Client',
    content:
      'The team at SVM Associates helped me navigate complex compliance requirements with ease. Their expertise and timely support gave me complete confidence throughout the process.',
  },
  {
    name: 'Y. Subba Reddy',
    role: 'Client',
    content:
      'I am highly satisfied with the accounting and advisory services provided by SVM Associates. Their attention to detail and commitment to client success truly sets them apart.',
  },
  {
    name: 'P. Nagendra',
    role: 'Client',
    content:
      'SVM Associates delivered outstanding professional service for my business needs. Their practical advice, transparency, and dedication made the entire experience smooth and stress-free.',
  }

    
   
  ];

  const features = [
    'Expert Team of Certified Professionals',
    'Timely and Accurate Service Delivery',
    '24/7 Customer Support',
    'Competitive and Transparent Pricing',
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-white dark:bg-gray-900 pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="flex justify-center mb-8">
              <div className="dark:bg-white/10 dark:backdrop-blur-sm dark:rounded-2xl dark:p-5 dark:ring-1 dark:ring-white/15 transition-all">
                <img
                  src="/svm_logo_Big_1-01.png"
                  alt="SVM Associates – Accounts & Tax Services"
                  className="h-32 md:h-44 w-auto object-contain mix-blend-multiply dark:mix-blend-multiply"
                  style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.08))' }}
                />
              </div>
            </div>
            <h1 className="text-[1.2rem] md:text-[1.35rem] lg:text-[1.5rem] font-bold mb-6 leading-tight text-gray-900 dark:text-white">
  Trusted Financial & Audit Solutions
</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Expert guidance for your business growth. Comprehensive auditing, taxation, and financial services you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 flex items-center gap-2 shadow-xl hover:shadow-2xl group"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigate('/services')}
                className="px-8 py-4 bg-transparent border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300"
              >
                Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[1.35rem] md:text-[1.5rem] lg:text-[1.65rem] font-bold text-gray-900 dark:text-white mb-4">
  About SVM ASSOCIATES
</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              With over 5+ years of excellence in financial services, we provide comprehensive solutions
              for businesses of all sizes. Our team of certified professionals is dedicated to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <Award className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To empower businesses with accurate financial insights, ensuring compliance and fostering
                growth through expert guidance and innovative solutions.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <TrendingUp className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To be the most trusted financial partner for businesses across India, setting industry
                standards in quality, ethics, and client satisfaction.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group cursor-pointer"
                  onClick={() => navigate('/services')}
                >
                  <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <button className="text-primary-600 dark:text-primary-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/services')}
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Trusted by hundreds of businesses across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
            Let's discuss how we can help your business achieve its financial goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Contact Us Today
            </button>
            <button
              onClick={() => navigate('/services')}
              className="px-8 py-4 bg-transparent border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300"
            >
              Explore Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
