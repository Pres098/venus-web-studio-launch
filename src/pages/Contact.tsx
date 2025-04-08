
import React from 'react';
import ContactForm from '../components/ContactForm';
import { MessageSquare, Phone, Telegram, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for a free consultation or to discuss your website project.
          </p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our services? Need a quote for your project? 
                Reach out to us using any of the methods below:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full gradient-bg flex items-center justify-center text-white mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <a 
                      href="mailto:venuxwebstudio@gmail.com" 
                      className="text-venus-purple hover:underline"
                    >
                      venuxwebstudio@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full gradient-bg flex items-center justify-center text-white mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">WhatsApp</h3>
                    <a 
                      href="https://wa.me/2348130434105" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-venus-purple hover:underline"
                    >
                      +234 813 043 4105
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full gradient-bg flex items-center justify-center text-white mr-4">
                    <Telegram size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Telegram</h3>
                    <a 
                      href="https://t.me/VenuxWebStudio" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-venus-purple hover:underline"
                    >
                      @VenuxWebStudio
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-100">
                <h3 className="text-lg font-semibold mb-3">Our Response Time</h3>
                <p className="text-gray-600">
                  We typically respond to all inquiries within 24 hours. For urgent matters,
                  please reach out via WhatsApp for the fastest response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
