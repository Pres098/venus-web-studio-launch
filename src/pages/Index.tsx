
import React from 'react';
import { ArrowDown, Check, Code, Layout, Zap, Globe, Award, Clock } from 'lucide-react';
import Button from '../components/Button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 lg:py-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              <span className="gradient-text">Get a Professional Website in 3 Days</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Don't waste time or money. I'll build you a fast, mobile-friendly, SEO-ready site for your business or brand.
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
                <p className="text-lg">3-5 Page Custom Website</p>
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
                <p className="text-lg">SEO Optimization</p>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full gradient-bg flex-shrink-0 flex items-center justify-center text-white mr-3">
                  <Check size={16} />
                </div>
                <p className="text-lg">Free SSL Certificate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Venux WebStudio?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-full gradient-bg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Lightning Fast Delivery</h3>
                <p className="text-gray-600">
                  No long waiting periods. Get your professional website up and running in just 3 days or less.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-full gradient-bg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Layout size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Stunning Design</h3>
                <p className="text-gray-600">
                  Visually appealing, modern designs that captivate your audience and represent your brand perfectly.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-full gradient-bg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Clean Code</h3>
                <p className="text-gray-600">
                  Optimized, well-structured code ensuring your website loads quickly and functions flawlessly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Our Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8">Our Simple Process:</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="relative">
                <div className="h-16 w-16 rounded-full gradient-bg flex items-center justify-center text-white mx-auto mb-6">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Choose Your Package</h3>
                <p className="text-gray-600">
                  Select the service package that best fits your needs and budget from our flexible options.
                </p>
                {/* Line connector (visible on desktop) */}
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gray-200"></div>
              </div>
              
              <div className="relative">
                <div className="h-16 w-16 rounded-full gradient-bg flex items-center justify-center text-white mx-auto mb-6">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Provide Your Content</h3>
                <p className="text-gray-600">
                  Share your branding, images, text content, and any specific requirements for your website.
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
                  Your professional website will be delivered and ready to launch in just 3 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Advanced Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
              <Globe className="h-10 w-10 text-venus-purple mb-4" />
              <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">
                Websites optimized for international audiences with multi-language support available.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
              <Award className="h-10 w-10 text-venus-purple mb-4" />
              <h3 className="text-lg font-semibold mb-2">Award-Winning Design</h3>
              <p className="text-gray-600">
                Modern, clean aesthetics that follow the latest design trends and best practices.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
              <Clock className="h-10 w-10 text-venus-purple mb-4" />
              <h3 className="text-lg font-semibold mb-2">Timely Updates</h3>
              <p className="text-gray-600">
                Quick turnaround on content updates and maintenance requests when you need them.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
              <Zap className="h-10 w-10 text-venus-purple mb-4" />
              <h3 className="text-lg font-semibold mb-2">Performance Optimized</h3>
              <p className="text-gray-600">
                Websites built for speed with optimized images, code, and server response times.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Website?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step toward establishing your online presence with Venux WebStudio today.
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
