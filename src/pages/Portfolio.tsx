
import React from 'react';
import PortfolioItem from '../components/PortfolioItem';
import Button from '../components/Button';

const Portfolio = () => {
  // Sample portfolio data
  const portfolioItems = [
    {
      title: "Fitness Studio Website",
      description: "A clean, modern website for a fitness studio with online booking capabilities and class schedules.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop",
      demoUrl: "#",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive"],
      delay: 0.1
    },
    {
      title: "Restaurant Landing Page",
      description: "An elegant website for a high-end restaurant featuring menu display, photo gallery, and reservation system.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
      demoUrl: "#",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive"],
      delay: 0.2
    },
    {
      title: "Photography Portfolio",
      description: "A visually stunning portfolio website for a professional photographer with gallery and contact form.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop",
      demoUrl: "#",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive"],
      delay: 0.3
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Our Portfolio</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our recent website projects and see the quality of our work.
          </p>
        </div>
      </section>
      
      {/* Portfolio Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <PortfolioItem
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                demoUrl={item.demoUrl}
                technologies={item.technologies}
                delay={item.delay}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Want a Website Like These?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We can create a beautiful, functional website for your business too. Get in touch today!
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

export default Portfolio;
