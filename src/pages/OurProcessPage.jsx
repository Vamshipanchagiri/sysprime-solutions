import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const OurProcessPage = () => {
  const steps = [
    {
      number: '01',
      title: 'Requirement Understanding',
      description: 'The foundation of success. We don’t just take orders; we seek to understand the "why" behind your project.',
      details: [
        'In-depth stakeholder workshops to capture business goals.',
        'Analysis of existing systems and technical constraints.',
        'Definition of functional and non-functional requirements.',
        'Creation of a project charter and scope definition.'
      ]
    },
    {
      number: '02',
      title: 'Technical Planning & Architecture',
      description: 'Blueprint before bricklaying. We design a robust technical strategy that ensures scalability and security.',
      details: [
        'Selection of technology stack (frontend, backend, database).',
        'Database schema design and API contract definition.',
        'Cloud infrastructure and security architecture planning.',
        'Identification of potential risks and mitigation strategies.'
      ]
    },
    {
      number: '03',
      title: 'Design & Prototyping',
      description: 'Visualizing the solution. We ensure the user experience is intuitive and aligned with your brand.',
      details: [
        'Creation of wireframes to define user journeys.',
        'High-fidelity UI design and interactive prototypes.',
        'Design system creation for consistency.',
        'Stakeholder review and approval of visual assets.'
      ]
    },
    {
      number: '04',
      title: 'Agile Development',
      description: 'Building with precision. Our iterative coding process delivers working software frequently.',
      details: [
        'Two-week sprints with clear deliverables.',
        'Daily stand-ups to track progress and remove blockers.',
        'Code reviews and continuous integration (CI) implementation.',
        'Regular demos to gather feedback and adjust course.'
      ]
    },
    {
      number: '05',
      title: 'Quality Assurance',
      description: 'Zero tolerance for defects. We rigorously test to ensure reliability and performance.',
      details: [
        'Automated unit and integration testing.',
        'Manual functional testing and edge-case validation.',
        'Performance load testing and security vulnerability scanning.',
        'User Acceptance Testing (UAT) support.'
      ]
    },
    {
      number: '06',
      title: 'Deployment & Launch',
      description: 'Go-live with confidence. We manage the transition to production smoothly.',
      details: [
        'Creation of production environments and data migration.',
        'Dry-run rehearsals of the deployment process.',
        'Go-live execution and immediate post-launch monitoring.',
        'Configuration of backup and disaster recovery systems.'
      ]
    },
    {
      number: '07',
      title: 'Support & Maintenance',
      description: 'Long-term partnership. We ensure your software continues to deliver value.',
      details: [
        'User training and comprehensive documentation handover.',
        'SLA-based support for incident resolution.',
        'Proactive monitoring and performance tuning.',
        'Regular updates and feature enhancements.'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Development Process - Sysprime Solutions</title>
        <meta name="description" content="Explore the structured software delivery process at Sysprime Solutions. From requirements to deployment, we ensure quality and predictability." />
      </Helmet>

      <div className="bg-white min-h-screen">
        <div className="bg-slate-900 py-24">
          <div className="container mx-auto px-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Our Delivery Process
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto"
            >
              A proven, structured methodology designed to minimize risk and maximize quality. We remove the guesswork from software development.
            </motion.p>
          </div>
        </div>

        <div className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-slate-200 hidden md:block"></div>
              
              <div className="space-y-16">
                {steps.map((step, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex flex-col md:flex-row gap-8 md:gap-12"
                  >
                    {/* Number Indicator */}
                    <div className="flex-shrink-0 z-10">
                      <div className="w-16 h-16 md:w-24 md:h-24 bg-white border-4 border-navy-blue rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-2xl md:text-3xl font-bold text-navy-blue">{step.number}</span>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-grow bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h2>
                      <p className="text-lg text-slate-600 mb-6 italic">{step.description}</p>
                      
                      <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                        <h3 className="font-semibold text-slate-900 mb-4 uppercase text-sm tracking-wider">Key Activities</h3>
                        <ul className="space-y-3">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start text-slate-700">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProcessPage;