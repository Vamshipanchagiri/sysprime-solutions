import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Sysprime Solutions Private Limited</h3>
            <p className="text-sm mb-2">
              5th Floor, Building 12, Raheja Mindspace<br />
              Madhapur, Hyderabad – 500081<br />
              Telangana, India
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <p className="text-sm">
              Email: <a href="mailto:info@sysprimesolutions.in" className="hover:text-white transition-colors">info@sysprimesolutions.in</a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2020 Sysprime Solutions Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;