import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Code, Globe, Cloud, Network, Settings, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const services = [
    {
      icon: Code,
      title: 'Custom Software Engineering',
      description: 'Bespoke software solutions architected for your specific business logic. We build robust, scalable applications that solve complex operational challenges.',
      link: '/services/custom-software-engineering',
      features: ['Legacy Modernization', 'Enterprise Applications', 'API Development']
    },
    {
      icon: Globe,
      title: 'Web & Business Applications',
      description: 'Modern, responsive web applications that drive business value. From internal portals to customer-facing platforms, we focus on usability and performance.',
      link: '/services/web-business-applications',
      features: ['Customer Portals', 'SaaS Products', 'Internal Tools']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'End-to-end cloud services including strategy, migration, and management. We optimize your infrastructure for security, cost, and scalability.',
      link: '/services/cloud-infrastructure',
      features: ['Cloud Migration', 'DevOps Implementation', 'Cost Optimization']
    },
    {
      icon: Network,
      title: 'Enterprise System Integration',
      description: 'Connect your fragmented software landscape. We create seamless data flows between ERP, CRM, and other critical business systems.',
      link: '/services/enterprise-system-integration',
      features: ['API Management', 'Data Synchronization', 'Workflow Automation']
    },
    {
      icon: Settings,
      title: 'Application Maintenance',
      description: 'Comprehensive support services to keep your applications running smoothly. We handle updates, security patches, and performance tuning.',
      link: '/services/application-maintenance',
      features: ['24/7 Monitoring', 'Security Patching', 'Performance Tuning']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional IT Services - Sysprime Solutions</title>
        <meta name="description" content="Explore our comprehensive IT services including custom software, web applications, cloud infrastructure, and enterprise integration." />
      </Helmet>

      <div className="bg-white min-h-screen">
        {/* Header */}
        <div className="bg-slate-900 py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-blue to-slate-900 opacity-90"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Our Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 max-w-2xl mx-auto"
            >
              Strategic technology solutions designed to empower your business growth and operational efficiency.
            </motion.p>
          </div>
        </div>

        {/* Services List */}
        <div className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            >
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    variants={item}
                    className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-slate-200 flex flex-col h-full"
                  >
                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                      <IconComponent className="text-navy-blue" size={28} />
                    </div>
                    
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h2>
                    <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{service.description}</p>
                    
                    <div className="mb-8 space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-slate-500">
                          <CheckCircle2 size={16} className="text-blue-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Link
                      to={service.link}
                      className="inline-flex items-center justify-center w-full bg-slate-50 text-navy-blue py-3 rounded-lg font-semibold hover:bg-navy-blue hover:text-white transition-all duration-300 group"
                    >
                      Explore Service <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;