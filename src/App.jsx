import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import CustomSoftwareSubpage from '@/pages/services/CustomSoftwareSubpage';
import WebApplicationsSubpage from '@/pages/services/WebApplicationsSubpage';
import CloudInfrastructureSubpage from '@/pages/services/CloudInfrastructureSubpage';
import EnterpriseIntegrationSubpage from '@/pages/services/EnterpriseIntegrationSubpage';
import MaintenanceSubpage from '@/pages/services/MaintenanceSubpage';
import WhySysprimePage from '@/pages/WhySysprimePage';
import OurProcessPage from '@/pages/OurProcessPage';
import ContactPage from '@/pages/ContactPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/custom-software-engineering" element={<CustomSoftwareSubpage />} />
          <Route path="/services/web-business-applications" element={<WebApplicationsSubpage />} />
          <Route path="/services/cloud-infrastructure" element={<CloudInfrastructureSubpage />} />
          <Route path="/services/enterprise-system-integration" element={<EnterpriseIntegrationSubpage />} />
          <Route path="/services/application-maintenance" element={<MaintenanceSubpage />} />
          <Route path="/why-sysprime" element={<WhySysprimePage />} />
          <Route path="/our-process" element={<OurProcessPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;