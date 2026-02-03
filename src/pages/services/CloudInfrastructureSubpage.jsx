import React from 'react';
import ServiceSubpageTemplate from '@/components/ServiceSubpageTemplate';

const CloudInfrastructureSubpage = () => {
  const content = {
    title: 'Cloud Infrastructure',
    metaDescription: 'Strategic cloud infrastructure services. Migration, optimization, and management of scalable cloud environments on AWS, Azure, and Google Cloud.',
    overview: [
      'The cloud is no longer just a hosting option; it is the foundation of digital agility. Our Cloud Infrastructure services assist organizations in designing, deploying, and managing robust cloud environments that are secure, scalable, and cost-efficient.',
      'We move beyond simple "lift and shift" migrations to help you leverage true cloud-native capabilities. This includes implementing auto-scaling architectures, serverless computing, and managed database services that reduce operational overhead and improve system resilience.',
      'Security and compliance are woven into our infrastructure designs from day one. We implement industry best practices for network segmentation, identity management, and data encryption to ensure your cloud environment meets stringent enterprise standards.'
    ],
    useCases: [
      'Cloud Migration Strategy: Analyzing on-premise workloads and executing a phased migration plan to AWS, Azure, or Google Cloud with minimal downtime.',
      'Disaster Recovery (DR) implementation using cloud redundancy to ensure business continuity in the event of primary site failures.',
      'DevOps Infrastructure setup: Building automated CI/CD pipelines and container orchestration clusters (Kubernetes) to accelerate software delivery.',
      'High-Traffic Web Hosting: Architecting auto-scaling infrastructure that can handle unpredictable traffic spikes for e-commerce or media sites.',
      'Data Lake Implementation: Setting up scalable storage and processing environments for big data analytics and machine learning workloads.'
    ],
    benefits: [
      'Elastic scalability that automatically adjusts resources to match demand, preventing performance bottlenecks and over-provisioning.',
      'Significant cost savings through optimized resource utilization and the elimination of upfront hardware capital expenditures.',
      'Enhanced business continuity with built-in redundancy and automated backup solutions across multiple geographic zones.',
      'Faster time-to-market for new applications by rapidly provisioning development and testing environments.',
      'Reduced IT burden as cloud providers manage the underlying physical hardware and networking layers.'
    ],
    deliveryApproach: [
      'Infrastructure Assessment: We audit your current IT landscape to understand dependencies, performance requirements, and compliance needs.',
      'Solution Architecture: We design a target cloud architecture that balances performance, cost, and security, creating a detailed migration roadmap.',
      'Infrastructure as Code (IaC): We use tools like Terraform or CloudFormation to provision environments programmatically, ensuring consistency and repeatability.',
      'Migration & Validation: We execute the migration in controlled waves, validating data integrity and application performance at every step.',
      'Optimization & Handoff: Post-migration, we fine-tune resource allocation for cost efficiency and set up monitoring dashboards before handing over control to your team.'
    ]
  };

  return <ServiceSubpageTemplate {...content} />;
};

export default CloudInfrastructureSubpage;