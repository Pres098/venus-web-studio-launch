
import React from 'react';
import { ArrowDown, Check } from 'lucide-react';
import Button from '../components/Button';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 lg:py-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              <span className="gradient-text">Get a Professional WordPress Website in 3 Days</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Don't waste time or money. I'll build you a fast, mobile-friendly, SEO-ready WordPress site for your business or brand.
            </p>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                externalLink="mailto:venuxwebstudio@gmail.com" 
                size="lg"
              >
                Get Started
              </Button>
            </div>
            
            <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <a href="#what-you-get" className="flex flex-col items-center text-gray-600 hover:text-venus-purple transition-colors">
                <span className="mb-2">Learn More</span>
                <ArrowDown className="animate-bounce" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* What You'll Get Section */}
      <section id="what-you-get" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8">What You'll Get:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-3xl mx-auto text-left">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full gradient-bg flex-shrink-0 flex items-center justify-center text-white mr-3">
                  <Check size={16} />
                </div>
                <p className="text-lg">3-5 Page WordPress Website</p>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full gradient-bg flex-shrink-0 flex items-center justify-center text-white mr-3">
                  <Check size={16} />
                </div>
                <p className="text-lg">Mobile Responsive Design</p>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full gradient-bg flex-shrink-0 flex items-center justify-center text-white mr-3">
                  <Check size={16} />
                </div>
                <p className="text-lg">Contact Form Integration</p>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full gradient-bg flex-shrink-0 flex items-center justify-center text-white mr-3">
                  <Check size={16} />
                </div>
                <p className="text-lg">Fast Loading Speed</p>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full gradient-bg flex-shrink-0 flex items-center justify-center text-white mr-3">
                  <Check size={16} />
                </div>
                <p className="text-lg">SEO Plugin Setup</p>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full gradient-bg flex-shrink-0 flex items-center justify-center text-white mr-3">
                  <Check size={16} />
                </div>
                <p className="text-lg">Free SSL (If hosting supports)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8">Pricing:</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-duration-300">
                <h3 className="text-2xl font-bold mb-2 gradient-text">Basic</h3>
                <div className="text-3xl font-bold mb-4">$50</div>
                <ul className="text-gray-600 space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check size={18} className="text-green-500 mr-2" />
                    <span>3 Pages</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="text-green-500 mr-2" />
                    <span>Mobile Responsive</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="text-green-500 mr-2" />
                    <span>Contact Form</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="text-green-500 mr-2" />
                    <span>Delivered in 3 Days</span>
                  </li>
                </ul>
                <Button 
                  externalLink="mailto:venuxwebstudio@gmail.com?subject=Basic WordPress Package" 
                  className="w-full"
                >Choose Plan</Button>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border border-venus-purple transform -translate-y-4">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3 bg-venus-purple text-white text-sm px-4 py-1 rounded-full">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold mb-2 gradient-text">Standard</h3>
                <div className="text-3xl font-bold mb-4">$75</div>
                <ul className="text-gray-600 space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check size={18} className="text-green-500 mr-2" />
                    <span>5 Pages</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="text-green-500 mr-2" />
                    <span>Mobile Responsive</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="text-green-500 mr-2" />
                    <span>Contact Form</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="text-green-500 mr-2" />
                    <span>SEO Plugin Setup</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="text-green-500 mr-2" />
                    <span>Delivered in 3 Days</span>
                  </li>
                </ul>
                <Button 
                  externalLink="mailto:venuxwebstudio@gmail.com?subject=Standard WordPress Package" 
                  className="w-full"
                >Choose Plan</Button>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-duration-300">
                <h3 className="text-2xl font-bold mb-2 gradient-text">Premium</h3>
                <div className="text-3xl font-bold mb-4">$120</div>
                <ul className="text-gray-600 space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check size={18} className="text-green-500 mr-2" />
                    <span>Full Website</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="text-green-500 mr-2" />
                    <span>Mobile Responsive</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="text-green-500 mr-2" />
                    <span>Custom Contact Form</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="text-green-500 mr-2" />
                    <span>SEO Plugin Setup</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="text-green-500 mr-2" />
                    <span>Speed Optimization</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="text-green-500 mr-2" />
                    <span>Priority Delivery</span>
                  </li>
                </ul>
                <Button 
                  externalLink="mailto:venuxwebstudio@gmail.com?subject=Premium WordPress Package" 
                  className="w-full"
                >Choose Plan</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8">How It Works:</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="relative">
                <div className="h-16 w-16 rounded-full gradient-bg flex items-center justify-center text-white mx-auto mb-6">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">You Pick a Package</h3>
                <p className="text-gray-600">
                  Select the service package that best fits your needs and budget from our options.
                </p>
                {/* Line connector (visible on desktop) */}
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gray-200"></div>
              </div>
              
              <div className="relative">
                <div className="h-16 w-16 rounded-full gradient-bg flex items-center justify-center text-white mx-auto mb-6">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Send Your Content</h3>
                <p className="text-gray-600">
                  Provide your text, images, logo, and any specific requirements for your website.
                </p>
                {/* Line connector (visible on desktop) */}
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gray-200"></div>
              </div>
              
              <div>
                <div className="h-16 w-16 rounded-full gradient-bg flex items-center justify-center text-white mx-auto mb-6">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Get Your Site in 3 Days</h3>
                <p className="text-gray-600">
                  Your professional WordPress site will be delivered and ready to launch in just 3 days.
                </p>
              </div>
            </div>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              externalLink="mailto:venuxwebstudio@gmail.com" 
              variant="secondary"
              size="lg"
            >
              Get Started Now
            </Button>
            <Button 
              href="/contact" 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white hover:bg-white/20"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
