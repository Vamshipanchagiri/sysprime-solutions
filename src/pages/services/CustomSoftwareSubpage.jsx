import React from 'react';
import ServiceSubpageTemplate from '@/components/ServiceSubpageTemplate';

const CustomSoftwareSubpage = () => {
  const content = {
    title: 'Custom Software Engineering',
    metaDescription: 'Expert custom software development services. We build scalable, secure enterprise applications tailored to your specific business requirements.',
    overview: [
      'In today\'s competitive landscape, off-the-shelf software often forces businesses to compromise on their unique operational workflows. Our custom software engineering service bridges this gap by delivering solutions architected specifically for your organization\'s needs, goals, and technical environment.',
      'We adopt a product-centric mindset, viewing your software not just as a project but as a strategic asset that must evolve with your business. Our engineering team collaborates deeply with your stakeholders to uncover latent requirements and design systems that improve efficiency, reduce manual effort, and unlock new capabilities.',
      'From complex enterprise resource planning modules to specialized industry tools, we leverage modern technology stacks and proven design patterns. This ensures your software is not only functional upon delivery but remains maintainable, secure, and scalable for years to come.'
    ],
    useCases: [
      'Enterprise Resource Planning (ERP) modules customized for niche manufacturing processes or unique supply chain workflows.',
      'Legacy system modernization projects that migrate critical data and business logic from outdated mainframes to modern cloud-native architectures.',
      'High-performance proprietary trading platforms or financial analysis tools requiring low latency and extreme data accuracy.',
      'Specialized healthcare management systems that must comply with strict regulatory standards while ensuring seamless patient data flow.',
      'Internal operational dashboards and workflow automation tools that integrate multiple departments into a unified digital ecosystem.'
    ],
    benefits: [
      'Perfect alignment with your business processes, eliminating the need for awkward workarounds common with generic software.',
      'Full ownership of the intellectual property, avoiding vendor lock-in and perpetual licensing fees.',
      'Enhanced security posture designed specifically for your data sensitivity and compliance requirements.',
      'Unlimited scalability allowing the software to grow in complexity and user load alongside your business.',
      'Competitive advantage derived from proprietary features that your competitors cannot simply purchase off the shelf.'
    ],
    deliveryApproach: [
      'Discovery & Strategy: We conduct intensive workshops to map your business processes, define technical requirements, and establish success metrics. This phase ensures we build the right solution for the right problem.',
      'Architecture & Design: Our architects create a blueprint for the system, selecting the optimal technology stack and designing data models. We create interactive prototypes to validate user experience before a single line of code is written.',
      'Agile Development: We employ an iterative development methodology with two-week sprints. This provides you with regular visibility into progress and allows us to incorporate feedback early and often.',
      'Rigorous Testing: Our QA team performs automated and manual testing throughout the lifecycle, including functional, performance, and security testing, to ensure a defect-free release.',
      'Deployment & Enablement: We execute a carefully planned rollout strategy to minimize operational disruption. Comprehensive documentation and training sessions ensure your team can effectively utilize and manage the new system.'
    ]
  };

  return <ServiceSubpageTemplate {...content} />;
};

export default CustomSoftwareSubpage;