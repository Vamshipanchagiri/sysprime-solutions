import React from 'react';
import ServiceSubpageTemplate from '@/components/ServiceSubpageTemplate';

const MaintenanceSubpage = () => {
  const content = {
    title: 'Application Maintenance',
    metaDescription: 'Reliable application maintenance and support services. We ensure your critical software remains secure, stable, and up-to-date.',
    overview: [
      'Software is not a "set it and forget it" asset. As operating systems update, security threats evolve, and business volumes grow, applications require consistent care to remain effective. Our Application Maintenance services provide the technical stewardship your software needs to thrive.',
      'We offer more than just break-fix support. We take a proactive approach to maintenance, regularly monitoring performance metrics, applying preventative patches, and refactoring code to prevent technical debt accumulation. Our goal is to extend the lifespan of your software investment.',
      'Our team integrates seamlessly with your internal operations, acting as an extension of your IT department. We adhere to strict Service Level Agreements (SLAs) to guarantee response times, ensuring that your critical business functions are never left vulnerable to prolonged downtime.'
    ],
    useCases: [
      'L3 Production Support: providing expert-level troubleshooting for complex issues that cannot be resolved by helpdesk staff.',
      'Security Patch Management: Regularly scanning for vulnerabilities and applying critical security updates to frameworks and dependencies.',
      'Performance Optimization: analyzing database queries and code execution paths to speed up slow-loading reports or transactions.',
      'Compliance Updates: Modifying system logic to adhere to new regulatory requirements (e.g., changing tax calculation rules or data privacy features).',
      'Platform Upgrades: Managing the migration of applications to newer versions of underlying languages (e.g., .NET, Java, Node.js) to maintain supportability.'
    ],
    benefits: [
      'Maximized uptime and reliability, protecting your revenue streams and reputation.',
      'Predictable IT spending with fixed-cost maintenance models, avoiding the shock of emergency repair bills.',
      'Enhanced security posture, reducing the risk of data breaches and cyber attacks.',
      'Extended application lifecycle, delaying the need for costly complete system replacements.',
      'Freedom for your internal team to focus on strategic innovation rather than day-to-day troubleshooting.'
    ],
    deliveryApproach: [
      'Knowledge Transition: We conduct a thorough handover phase to study your codebase, documentation, and deployment architecture.',
      'Environment Setup: We establish mirrored staging environments to safely reproduce issues and test fixes without impacting production.',
      'SLA Definition: We mutually agree on incident priority levels (P1 to P4) and corresponding response and resolution time targets.',
      'Proactive Monitoring: We implement tools to track application health and receive alerts before users report issues.',
      'Continuous Improvement: We provide monthly reports on support activities and recommend long-term improvements to reduce incident volume.'
    ]
  };

  return <ServiceSubpageTemplate {...content} />;
};

export default MaintenanceSubpage;