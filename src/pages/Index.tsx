
import React from 'react';
import { ArrowRight, Code, Layout, Zap, Globe, Clock, Medal, CheckCircle2, SquareCode, ArrowDown } from 'lucide-react';
import Button from '../components/Button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-dots-pattern bg-[size:20px_20px]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-venux-light">
        {/* Background Elements */}
        <div className="blob-shape bg-venux-purple/5 w-[800px] h-[800px] -top-[400px] -right-[400px]"></div>
        <div className="blob-shape bg-venux-teal/5 w-[600px] h-[600px] -bottom-[300px] -left-[300px]"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 gradient-bg animate-pulse-slow">Website in 3 Days</Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Stunning websites that <span className="gradient-text">captivate & convert</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              No long waits. No excessive costs. Get a professional, high-performance website 
              built by experts in just 3 days.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                externalLink="mailto:venuxwebstudio@gmail.com" 
                size="lg"
                className="shadow-lg"
              >
                Start Your Project
                <ArrowRight size={18} />
              </Button>
              
              <Button 
                href="/portfolio" 
                variant="outline"
                size="lg"
              >
                View Our Work
              </Button>
            </div>
            
            <div className="mt-16 flex flex-wrap justify-center gap-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-green-500" />
                <span className="text-gray-600">3-Day Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-green-500" />
                <span className="text-gray-600">Mobile Responsive</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-green-500" />
                <span className="text-gray-600">SEO Optimized</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-green-500" />
                <span className="text-gray-600">Modern Design</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#benefits" className="text-gray-400 hover:text-venux-purple transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section id="benefits" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits of working with <span className="gradient-text">Venux</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine creativity, speed, and technical excellence to deliver websites that not only look 
              stunning but also drive results for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="feature-icon">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Lightning Fast Delivery</h3>
              <p className="text-gray-600">
                Get your website up and running in just 3 days, without compromising on quality or features.
              </p>
            </div>
            
            <div className="feature-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon">
                <Layout size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Beautiful UX/UI Design</h3>
              <p className="text-gray-600">
                Eye-catching designs that are not just visually appealing but also intuitive and user-friendly.
              </p>
            </div>
            
            <div className="feature-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="feature-icon">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Search Engine Optimized</h3>
              <p className="text-gray-600">
                Every website is built with SEO best practices to help you rank higher in search results.
              </p>
            </div>
            
            <div className="feature-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="feature-icon">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">High-Performance</h3>
              <p className="text-gray-600">
                Fast-loading websites optimized for performance across all devices and connection speeds.
              </p>
            </div>
            
            <div className="feature-card animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="feature-icon">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Clean Code</h3>
              <p className="text-gray-600">
                Well-structured, maintainable code that ensures your website runs smoothly for years to come.
              </p>
            </div>
            
            <div className="feature-card animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="feature-icon">
                <Medal size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                Professional-grade design and development that rivals expensive agency work at a fraction of the cost.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="section-padding bg-dots-pattern bg-[size:20px_20px]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4">Simple Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How we create your <span className="gradient-text">perfect website</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures we deliver your website on time without compromising on quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            <div className="relative flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="h-20 w-20 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-2xl mb-6 relative z-10 animate-float">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Discovery</h3>
              <p className="text-gray-600">
                We'll discuss your goals, brand, and vision for your website to understand exactly what you need.
              </p>
              
              {/* Connector line (visible on desktop) */}
              <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-200 -z-10"></div>
            </div>
            
            <div className="relative flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="h-20 w-20 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-2xl mb-6 relative z-10 animate-float" style={{ animationDelay: '1s' }}>
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Design & Development</h3>
              <p className="text-gray-600">
                Our experts get to work creating your stunning website with all the features you need.
              </p>
              
              {/* Connector line (visible on desktop) */}
              <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-200 -z-10"></div>
            </div>
            
            <div className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="h-20 w-20 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-2xl mb-6 animate-float" style={{ animationDelay: '2s' }}>
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Launch</h3>
              <p className="text-gray-600">
                Within 3 days, your professional website goes live, ready to attract and convert visitors.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button 
              href="/contact" 
              size="lg"
              className="shadow-lg animate-fade-in" 
              style={{ animationDelay: '0.7s' }}
            >
              Start Your 3-Day Project
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Tech Stack Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4">Technologies</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built with modern <span className="gradient-text">tech stack</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We use cutting-edge technologies to build websites that are fast, secure, and future-proof.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white shadow-sm hover:shadow-md transition-all text-center py-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-4 flex flex-col items-center">
                <SquareCode size={48} className="text-venux-purple mb-4" />
                <h3 className="font-bold">React</h3>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm hover:shadow-md transition-all text-center py-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-4 flex flex-col items-center">
                <SquareCode size={48} className="text-venux-purple mb-4" />
                <h3 className="font-bold">Next.js</h3>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm hover:shadow-md transition-all text-center py-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-4 flex flex-col items-center">
                <SquareCode size={48} className="text-venux-purple mb-4" />
                <h3 className="font-bold">Tailwind CSS</h3>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm hover:shadow-md transition-all text-center py-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-4 flex flex-col items-center">
                <SquareCode size={48} className="text-venux-purple mb-4" />
                <h3 className="font-bold">TypeScript</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding bg-dots-pattern bg-[size:20px_20px]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What our clients <span className="gradient-text">say about us</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it – hear from our satisfied clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">Fitness Studio Owner</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Venux delivered my website in just 3 days, and it exceeded all my expectations. The design is beautiful, and I've already seen an increase in client inquiries!"
              </p>
            </div>
            
            <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-bold">Michael Chang</h4>
                  <p className="text-gray-600 text-sm">Restaurant Owner</p>
                </div>
              </div>
              <p className="text-gray-600">
                "I was skeptical about the 3-day timeline, but Venux delivered as promised. My restaurant's online presence has never looked better, and our online orders have increased by 30%."
              </p>
            </div>
            
            <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-bold">Emma Davis</h4>
                  <p className="text-gray-600 text-sm">Photographer</p>
                </div>
              </div>
              <p className="text-gray-600">
                "As a photographer, I needed a website that showcased my work beautifully. Venux understood my vision perfectly and created a stunning portfolio that has helped me attract new clients."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for your website transformation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's build your professional website in just 3 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              externalLink="mailto:venuxwebstudio@gmail.com" 
              variant="accent"
              size="lg"
              className="border-white/20"
            >
              Get Started Now
              <ArrowRight size={18} />
            </Button>
            <Button 
              href="/portfolio" 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white hover:bg-white/20"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
