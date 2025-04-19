
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-xl gradient-bg flex items-center justify-center text-white font-bold">
                V
              </div>
              <span className="text-2xl font-bold gradient-text">Venux</span>
            </div>
            <p className="text-gray-600 mb-6">
              Transforming your ideas into stunning digital realities. Get your professional website up and running in just 3 days.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-gray-200 hover:bg-venux-purple hover:text-white transition-colors flex items-center justify-center text-gray-600">
                <Twitter size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-200 hover:bg-venux-purple hover:text-white transition-colors flex items-center justify-center text-gray-600">
                <Instagram size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-200 hover:bg-venux-purple hover:text-white transition-colors flex items-center justify-center text-gray-600">
                <Linkedin size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-200 hover:bg-venux-purple hover:text-white transition-colors flex items-center justify-center text-gray-600">
                <Github size={18} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-venux-purple transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-venux-purple transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-600 hover:text-venux-purple transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-venux-purple transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-venux-purple transition-colors">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-venux-purple transition-colors">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-venux-purple transition-colors">
                  Landing Pages
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-venux-purple transition-colors">
                  SEO Optimization
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-venux-purple" />
                <a href="mailto:venuxwebstudio@gmail.com" className="text-gray-600 hover:text-venux-purple transition-colors">
                  venuxwebstudio@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-venux-purple" />
                <a href="tel:+2348130434105" className="text-gray-600 hover:text-venux-purple transition-colors">
                  +234 813 043 4105
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-venux-purple mt-1" />
                <span className="text-gray-600">
                  Global remote services available worldwide
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-600">
            © {currentYear} Venux. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
