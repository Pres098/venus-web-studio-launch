
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

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
      className="glass-card overflow-hidden group animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 w-full">
            <a 
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white rounded-xl py-2 hover:bg-white/30 transition-colors w-full"
            >
              <span>View Live Demo</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-venux-purple transition-colors">{title}</h3>
        
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {technologies.map((tech, index) => (
            <Badge 
              key={index}
              variant="outline"
              className="bg-gray-50 text-gray-700 border-gray-200"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
