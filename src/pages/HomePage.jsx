import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Code, Globe, Cloud, Network, Settings, ArrowRight, ShieldCheck, Clock, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    {
      icon: Code,
      title: 'Custom Software Engineering',
      description: 'Enterprise-grade software solutions tailored to your unique operational requirements and business goals.',
      link: '/services/custom-software-engineering'
    },
    {
      icon: Globe,
      title: 'Web & Business Applications',
      description: 'Secure, scalable web applications designed to enhance productivity and streamline customer engagement.',
      link: '/services/web-business-applications'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Robust cloud deployment strategies ensuring scalability, reliability, and cost-effective operations.',
      link: '/services/cloud-infrastructure'
    },
    {
      icon: Network,
      title: 'Enterprise System Integration',
      description: 'Seamless integration architecture connecting disparate systems for unified data flow and operations.',
      link: '/services/enterprise-system-integration'
    },
    {
      icon: Settings,
      title: 'Application Maintenance',
      description: 'Proactive support and maintenance ensuring maximum uptime, security, and performance stability.',
      link: '/services/application-maintenance'
    }
  ];

  const differentiators = [
    {
      icon: ShieldCheck,
      title: 'Engineering Discipline',
      description: 'We adhere to rigorous development methodologies and architectural standards to ensure robust, maintainable code.'
    },
    {
      icon: Clock,
      title: 'Clear Processes',
      description: 'Our structured delivery framework provides transparency and predictability from requirements to deployment.'
    },
    {
      icon: Users,
      title: 'Accountability',
      description: 'We take full ownership of our deliverables, ensuring that every solution meets the highest quality standards.'
    },
    {
      icon: Zap,
      title: 'Transparent Communication',
      description: 'Open, honest, and regular communication keeps you informed and in control throughout the project lifecycle.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sysprime Solutions - Premier IT Services & Technology Partner</title>
        <meta name="description" content="Sysprime Solutions delivers enterprise-grade custom software, cloud infrastructure, and system integration services. Your reliable technology partner in Hyderabad." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-32 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-blue via-slate-900 to-slate-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
              Engineering Excellence for<br />
              <span className="text-blue-400">Modern Enterprise</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              We are a reliable IT partner delivering practical software solutions, robust cloud infrastructure, and seamless system integration for forward-thinking businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center gap-2 bg-white text-navy-blue px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors text-lg"
              >
                Explore Services
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 border border-slate-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-colors text-lg"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Who We Are</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Reliable Technology Partners</h3>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                At Sysprime Solutions, we bridge the gap between complex business challenges and practical technology implementation. We specialize in developing custom software, modernizing web applications, and managing cloud infrastructure.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our approach is grounded in engineering discipline and clear processes. We don't just write code; we build stable, scalable systems that support your operational needs and drive business continuity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Capabilities</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Comprehensive technology services designed to support your entire digital ecosystem.</p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-slate-100 group"
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-navy-blue transition-colors duration-300">
                    <IconComponent className="text-navy-blue group-hover:text-white transition-colors duration-300" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group-hover:translate-x-1 duration-300"
                  >
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Enterprises Choose Sysprime</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                In a crowded market of IT service providers, we distinguish ourselves through our commitment to quality, transparency, and engineering rigor. We focus on long-term value rather than quick fixes.
              </p>
              <Link 
                to="/why-sysprime"
                className="inline-flex items-center justify-center gap-2 bg-navy-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
              >
                Our Philosophy
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {differentiators.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-slate-50 p-6 rounded-xl border border-slate-100"
                  >
                    <Icon className="text-blue-600 mb-4" size={32} />
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;