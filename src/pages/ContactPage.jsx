import React from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Mail } from 'lucide-react';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Sysprime Solutions Private Limited</title>
        <meta name="description" content="Contact Sysprime Solutions for IT services and software development. Located in Hyderabad, Telangana, India." />
      </Helmet>

      <div className="bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">Contact Sysprime Solutions</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">Office Address</h2>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Sysprime Solutions Private Limited</strong><br />
                    5th Floor, Building 12<br />
                    Raheja Mindspace<br />
                    Madhapur<br />
                    Hyderabad – 500081<br />
                    Telangana, India
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">Email</h2>
                  <p className="text-gray-700">
                    For inquiries about our services or to discuss your project requirements, please contact us at:
                  </p>
                  <a 
                    href="mailto:info@sysprimesolutions.in"
                    className="text-navy-blue font-semibold hover:underline text-lg mt-2 inline-block"
                  >
                    info@sysprimesolutions.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Business Hours</h2>
            <p className="text-gray-700 mb-4">
              We respond to email inquiries during normal business hours, Monday through Friday, 9:00 AM to 6:00 PM IST.
            </p>
            <p className="text-gray-700">
              For existing clients with active support agreements, please refer to your service level agreement for support contact procedures and response times.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;