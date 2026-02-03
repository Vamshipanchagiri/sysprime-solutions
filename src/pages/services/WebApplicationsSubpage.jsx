import React from 'react';
import ServiceSubpageTemplate from '@/components/ServiceSubpageTemplate';

const WebApplicationsSubpage = () => {
  const content = {
    title: 'Web & Business Applications',
    metaDescription: 'Modern web application development for enterprise efficiency. We create responsive, secure, and scalable web solutions for internal and external users.',
    overview: [
      'Web applications have become the backbone of modern enterprise operations, offering accessibility across devices and locations without the friction of installation. We specialize in building sophisticated web-based platforms that combine the interactivity of desktop software with the reach of the internet.',
      'Our approach focuses on two critical pillars: User Experience (UX) and Technical Performance. We believe that business applications should be as intuitive as consumer products, reducing training time and increasing user adoption. Simultaneously, we engineer the backend for speed, security, and reliability.',
      'Whether you need a customer-facing portal to drive revenue or an internal tool to streamline operations, our full-stack capabilities cover the entire spectrum. We utilize modern frameworks like React and robust backend technologies to deliver responsive, high-performance applications.'
    ],
    useCases: [
      'Self-service customer portals allowing users to manage accounts, track orders, and access support, significantly reducing call center volume.',
      'B2B e-commerce platforms with complex pricing tiers, bulk ordering capabilities, and integration with inventory management systems.',
      'Internal HR and administrative dashboards for managing employee data, leave requests, and performance reviews in a centralized location.',
      'Data visualization and reporting tools that aggregate information from various sources into interactive, real-time business intelligence dashboards.',
      'Collaborative project management tools customized for specific industry workflows, such as construction planning or legal case management.'
    ],
    benefits: [
      'Universal accessibility from any device with a web browser, supporting remote work and field operations.',
      'Centralized maintenance where updates are deployed instantly to all users without requiring individual device installations.',
      'Lower total cost of ownership compared to maintaining multiple native applications for different operating systems.',
      'Seamless integration capabilities with other web-based services and internal APIs.',
      'Modern, responsive interfaces that improve user satisfaction and productivity.'
    ],
    deliveryApproach: [
      'User Research & Profiling: We start by identifying who will use the application and in what context. Understanding user personas drives our design decisions.',
      'UX/UI Design: We create wireframes and high-fidelity mockups that prioritize intuitive navigation and efficient task completion flows.',
      'Frontend & Backend Development: We build the application using a component-based architecture for the frontend and scalable microservices or modular monoliths for the backend.',
      'Integration & Security: We securely connect the application to your existing databases and third-party services, implementing robust authentication and authorization protocols.',
      'Launch & Optimization: After a controlled release, we monitor application performance and user behavior to identify areas for further optimization and feature enhancement.'
    ]
  };

  return <ServiceSubpageTemplate {...content} />;
};

export default WebApplicationsSubpage;