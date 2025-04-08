
import React from 'react';
import { Check } from 'lucide-react';
import Button from './Button';

interface ServiceFeature {
  text: string;
}

interface ServiceCardProps {
  title: string;
  price: string;
  features: ServiceFeature[];
  icon: React.ReactNode;
  isPopular?: boolean;
  delay?: number;
}

const ServiceCard = ({ 
  title, 
  price, 
  features, 
  icon, 
  isPopular = false,
  delay = 0
}: ServiceCardProps) => {
  return (
    <div 
      className={`
        bg-white rounded-lg p-6 border transition-all duration-300
        ${isPopular 
          ? 'border-venus-purple shadow-md -translate-y-2 md:-translate-y-4' 
          : 'border-gray-200 hover:border-venus-purple hover:shadow'}
        animate-fade-in
      `}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 rounded-full bg-gray-100">{icon}</div>
        {isPopular && (
          <span className="px-3 py-1 bg-venus-purple text-white text-xs rounded-full">
            Most Popular
          </span>
        )}
      </div>
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      
      <div className="mb-6">
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-gray-500"> / one-time</span>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 text-green-500 mt-0.5">
              <Check size={16} />
            </span>
            <span className="text-gray-600">{feature.text}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        externalLink="mailto:venuswebstudio@gmail.com?subject=Service Inquiry: {title}" 
        variant={isPopular ? 'primary' : 'outline'}
        className="w-full"
      >
        Choose Plan
      </Button>
    </div>
  );
};

export default ServiceCard;
