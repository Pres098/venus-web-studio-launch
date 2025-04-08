
import React from 'react';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import { Briefcase, Image, Phone } from 'lucide-react';

const Services = () => {
  const basicFeatures = [
    { text: "One-page responsive website" },
    { text: "Domain setup assistance" },
    { text: "Contact form integration" },
    { text: "Delivery within 3 days" },
    { text: "Basic SEO optimization" }
  ];
  
  const standardFeatures = [
    { text: "Up to 3 pages of content" },
    { text: "Custom responsive design" },
    { text: "Social media integration" },
    { text: "Contact form integration" },
    { text: "Basic SEO optimization" },
    { text: "5 stock images included" },
    { text: "Delivery within 3 days" }
  ];
  
  const premiumFeatures = [
    { text: "Up to 5 pages of content" },
    { text: "Premium responsive design" },
    { text: "Social media integration" },
    { text: "Custom contact form" },
    { text: "Enhanced SEO optimization" },
    { text: "10 stock images included" },
    { text: "Logo design assistance" },
    { text: "Priority delivery (2 days)" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the package that fits your needs and budget. All services include fast 3-day delivery.
          </p>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Basic"
              price="$50"
              features={basicFeatures}
              icon={<Briefcase size={24} className="text-venus-purple" />}
              delay={0.1}
            />
            
            <ServiceCard
              title="Standard"
              price="$75"
              features={standardFeatures}
              icon={<Image size={24} className="text-venus-purple" />}
              isPopular={true}
              delay={0.2}
            />
            
            <ServiceCard
              title="Premium"
              price="$120"
              features={premiumFeatures}
              icon={<Phone size={24} className="text-venus-purple" />}
              delay={0.3}
            />
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our simple 3-step process makes getting your website quick and hassle-free.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="mb-4 h-12 w-12 rounded-full gradient-bg flex items-center justify-center text-white">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Choose a Package</h3>
              <p className="text-gray-600">
                Select the service package that best fits your needs and budget from our options.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="mb-4 h-12 w-12 rounded-full gradient-bg flex items-center justify-center text-white">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Share Your Vision</h3>
              <p className="text-gray-600">
                Tell us about your business and what you want from your website. Provide any materials you already have.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="mb-4 h-12 w-12 rounded-full gradient-bg flex items-center justify-center text-white">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Review & Launch</h3>
              <p className="text-gray-600">
                We'll deliver your website within 3 days. After your approval and payment, your site goes live!
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your website needs and get the process started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              externalLink="mailto:venuswebstudio@gmail.com" 
              variant="secondary"
              size="lg"
            >
              Email Us
            </Button>
            <Button 
              href="/contact" 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white hover:bg-white/20"
            >
              Contact Page
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
