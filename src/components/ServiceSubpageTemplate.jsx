import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Briefcase, Layers } from 'lucide-react';

const ServiceSubpageTemplate = ({
  title,
  metaDescription,
  overview,
  useCases,
  benefits,
  deliveryApproach
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <Helmet>
        <title>{title} - Sysprime Solutions Private Limited</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="bg-white"
      >
        {/* Hero Section */}
        <div className="bg-slate-50 py-20 border-b border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              {title}
            </motion.h1>
            <motion.div variants={itemVariants} className="w-20 h-1 bg-navy-blue mb-8 rounded-full"></motion.div>
          </div>
        </div>

        <div className="container mx-auto px-6 max-w-5xl py-16">
          {/* Overview Section */}
          <motion.section variants={itemVariants} className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              Service Overview
            </h2>
            <div className="text-lg text-slate-700 leading-relaxed space-y-6">
              {overview.map((paragraph, index) => (
                <p key={index} className="text-slate-700">{paragraph}</p>
              ))}
            </div>
          </motion.section>

          {/* Use Cases Section */}
          <motion.section variants={itemVariants} className="mb-20">
            <div className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-100 shadow-sm">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <Briefcase className="text-navy-blue" size={28} />
                Business Use Cases
              </h2>
              <div className="grid gap-6">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-navy-blue" />
                    <p className="text-lg text-slate-700 m-0">{useCase}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Benefits Section */}
          <motion.section variants={itemVariants} className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Key Business Benefits</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg text-slate-700 m-0 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Delivery Approach Section */}
          <motion.section variants={itemVariants} className="mb-20">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-lg shadow-slate-100">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <Layers className="text-navy-blue" size={28} />
                Our Delivery Approach
              </h2>
              <div className="space-y-8 relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200">
                {deliveryApproach.map((paragraph, index) => (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-0 top-1.5 w-8 h-8 bg-white border-2 border-navy-blue rounded-full flex items-center justify-center text-sm font-bold text-navy-blue z-10">
                      {index + 1}
                    </div>
                    <p className="text-lg text-slate-700 m-0">{paragraph}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section variants={itemVariants} className="text-center py-12 bg-navy-blue rounded-2xl shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to start your project?</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Partner with Sysprime Solutions for reliable, professional IT services tailored to your business needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-navy-blue px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
            >
              Contact Us <ArrowRight size={20} />
            </Link>
          </motion.section>
        </div>
      </motion.div>
    </>
  );
};

export default ServiceSubpageTemplate;