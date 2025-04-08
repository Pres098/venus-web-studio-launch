
import React from 'react';
import Button from './Button';

interface PortfolioItemProps {
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  technologies: string[];
  delay?: number;
}

const PortfolioItem = ({ 
  title, 
  description, 
  image,
  demoUrl,
  technologies,
  delay = 0
}: PortfolioItemProps) => {
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <Button 
          externalLink={demoUrl} 
          variant="outline"
        >
          View Live Demo
        </Button>
      </div>
    </div>
  );
};

export default PortfolioItem;
