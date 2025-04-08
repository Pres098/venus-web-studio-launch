
import React from 'react';
import { ArrowDown } from 'lucide-react';
import Button from '../components/Button';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 lg:py-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              <span className="gradient-text">Affordable Website Setup</span> 
              <br />in 3 Days
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Professional. Fast. Mobile-Friendly.
            </p>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                externalLink="mailto:venuswebstudio@gmail.com" 
                size="lg"
              >
                Get Started
              </Button>
            </div>
            
            <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <a href="#why-us" className="flex flex-col items-center text-gray-600 hover:text-venus-purple transition-colors">
                <span className="mb-2">Learn More</span>
                <ArrowDown className="animate-bounce" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section id="why-us" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Venus WebStudio?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver high-quality websites that help your business stand out online.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="mb-4 h-12 w-12 rounded-full gradient-bg flex items-center justify-center text-white">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Turnaround</h3>
              <p className="text-gray-600">
                Get your website up and running in just 3 days, perfect for businesses who need to establish their online presence quickly.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="mb-4 h-12 w-12 rounded-full gradient-bg flex items-center justify-center text-white">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Affordable Pricing</h3>
              <p className="text-gray-600">
                Professional web design doesn't have to break the bank. Our packages start at just $50 with options to fit every budget.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="mb-4 h-12 w-12 rounded-full gradient-bg flex items-center justify-center text-white">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Mobile Friendly</h3>
              <p className="text-gray-600">
                All our websites are fully responsive and look great on all devices, ensuring you don't miss out on mobile traffic.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button href="/services">See Our Services</Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Website?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step toward establishing your online presence with Venus WebStudio today.
          </p>
          <Button 
            externalLink="mailto:venuswebstudio@gmail.com" 
            variant="secondary"
            size="lg"
          >
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
