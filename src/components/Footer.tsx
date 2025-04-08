
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Venux WebStudio</h3>
            <p className="text-gray-600 mb-4">
              Professional website design at affordable prices. Get your website up and running in just 3 days.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-venus-purple transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-venus-purple transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-600 hover:text-venus-purple transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-venus-purple transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-2">
              Email: venuxwebstudio@gmail.com
            </p>
            <p className="text-gray-600 mb-2">
              WhatsApp: +2348130434105
            </p>
            <p className="text-gray-600">
              Telegram: @VenuxWebStudio
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-gray-600">
            © {currentYear} Venux WebStudio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
