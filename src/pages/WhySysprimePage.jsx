import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, Target, Users, MessageSquare, Clock } from 'lucide-react';

const WhySysprimePage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const differentiators = [
    {
      icon: Shield,
      title: 'Engineering Discipline',
      content: [
        'We view software development as an engineering discipline, not just an artistic endeavor. This means we adhere to strict architectural patterns, coding standards, and rigorous testing methodologies. Our code is written to be read, maintained, and scaled.',
        'We invest time in upfront design and documentation. While this may seem to slow the start, it drastically reduces rework and bugs later in the lifecycle. We believe that quality is cheaper than speed in the long run.'
      ]
    },
    {
      icon: Target,
      title: 'Clear Processes',
      content: [
        'Ambiguity is the enemy of delivery. We have established clear, repeatable processes for every stage of engagement—from requirement gathering to deployment. You will never have to guess what happens next.',
        'Our project management is transparent. We use industry-standard tools to track progress, and you have visibility into our sprints. We define "Done" strictly, ensuring that a feature is not marked complete until it is tested and verified.'
      ]
    },
    {
      icon: Users,
      title: 'Accountability',
      content: [
        'We take extreme ownership of our work. If a bug slips through, we own it and fix it. We do not shift blame to third-party libraries or ambiguous requirements. We stand behind the quality of our deliverables.',
        'Your success is our success. We align our incentives with yours, focusing on delivering business value rather than just billable hours. We are committed to building long-term partnerships based on trust.'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Transparent Communication',
      content: [
        'We believe in radical transparency. If a project is at risk of delay, you will know immediately, along with our mitigation plan. We do not hide bad news until the deadline.',
        'We communicate in plain English, not technical jargon. We explain technical trade-offs in terms of business impact, empowering you to make informed decisions about your product.'
      ]
    },
    {
      icon: Clock,
      title: 'Predictable Delivery',
      content: [
        'Our estimation is based on data and experience, not optimism. We provide realistic timelines and stick to them. By managing scope and risk proactively, we ensure that launch dates are met.',
        'Consistency is key. Whether it is a small patch or a major release, our delivery quality remains constant. You can rely on us to be a steady hand in the often chaotic world of software development.'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Why Sysprime Solutions - Our Differentiators</title>
        <meta name="description" content="Discover why Sysprime Solutions is the preferred technology partner for enterprises. Engineering discipline, clear processes, and unwavering accountability." />
      </Helmet>

      <div className="bg-white min-h-screen">
        <div className="bg-slate-900 py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-blue to-slate-900 opacity-90"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Why Sysprime Solutions?
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto"
            >
              In a market saturated with promises, we deliver certainty. Our core values define how we work, how we treat our clients, and the quality of software we produce.
            </motion.p>
          </div>
        </div>

        <div className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-16"
            >
              {differentiators.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.section 
                    key={index}
                    variants={itemVariant}
                    className="flex flex-col md:flex-row gap-8 items-start border-b border-slate-100 pb-12 last:border-0"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                      <Icon className="text-navy-blue" size={32} />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">{item.title}</h2>
                      <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                        {item.content.map((paragraph, pIndex) => (
                          <p key={pIndex}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </motion.section>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhySysprimePage;