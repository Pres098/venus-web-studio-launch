
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  externalLink?: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  externalLink,
  className = '',
  onClick,
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50';
  
  const variantStyles = {
    primary: 'gradient-bg text-white hover:bg-opacity-90',
    secondary: 'bg-venus-teal text-white hover:bg-opacity-90',
    outline: 'border border-venus-purple text-venus-purple hover:bg-venus-purple/10'
  };
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  if (externalLink) {
    return (
      <a
        href={externalLink}
        target="_blank"
        rel="noopener noreferrer"
        className={styles}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  
  if (href) {
    return (
      <Link to={href} className={styles} onClick={onClick}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
