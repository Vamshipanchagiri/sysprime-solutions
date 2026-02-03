import React from 'react';
import ServiceSubpageTemplate from '@/components/ServiceSubpageTemplate';

const EnterpriseIntegrationSubpage = () => {
  const content = {
    title: 'Enterprise System Integration',
    metaDescription: 'Seamless enterprise system integration services. We connect ERP, CRM, and legacy systems to create a unified data landscape for your business.',
    overview: [
      'Modern enterprises run on a diverse ecosystem of specialized applications—ERP for finance, CRM for sales, WMS for logistics, and more. When these systems operate in silos, data becomes fragmented, leading to manual errors and inefficient processes. Our Integration services dismantle these silos.',
      'We design and build robust middleware solutions and API layers that enable disparate systems to "speak" to each other in real-time. By automating the flow of data across your organization, we create a single source of truth and streamline complex business workflows.',
      'Our expertise spans modern API-led connectivity, legacy file-based integrations, and event-driven architectures. We ensure that your integration landscape is resilient, handling data transformations and error scenarios gracefully without disrupting business operations.'
    ],
    useCases: [
      'Order-to-Cash Automation: Automatically syncing orders from e-commerce platforms to ERP systems for fulfillment and invoicing.',
      'Customer 360 View: Aggregating customer interactions from support tickets, sales emails, and marketing campaigns into a unified CRM profile.',
      'Supply Chain Visibility: Connecting supplier inventory systems with your internal manufacturing planning software for just-in-time production.',
      'HR Onboarding: Automating the creation of user accounts across email, payroll, and security systems when a new employee is added to the HRIS.',
      'Mergers & Acquisitions: Rapidly integrating the IT systems of a newly acquired company to unify financial reporting and operational tracking.'
    ],
    benefits: [
      'Elimination of manual data entry, significantly reducing labor costs and human error rates.',
      'Real-time data visibility enabling faster, data-driven decision making across departments.',
      'Improved customer experience by ensuring support and sales teams always have access to current order and account status.',
      'Increased agility to adopt new SaaS tools, as they can be easily plugged into the existing integration architecture.',
      'Reduced process latency, accelerating core business cycles like order fulfillment and revenue recognition.'
    ],
    deliveryApproach: [
      'Integration Analysis: We map out your current system landscape and identify data flows, formats, and integration points.',
      'Pattern Selection: We determine the appropriate integration patterns (Real-time API, Batch, Event-driven) for each use case.',
      'Middleware Development: We build the integration flows using enterprise service buses (ESB) or custom microservices, handling data transformation and validation logic.',
      'Testing & Exception Handling: We rigorously test for edge cases and ensure robust error handling mechanisms are in place (retries, alerts, logging).',
      'Monitoring Setup: We implement monitoring tools to track the health of integration flows and alert administrators to any failures immediately.'
    ]
  };

  return <ServiceSubpageTemplate {...content} />;
};

export default EnterpriseIntegrationSubpage;