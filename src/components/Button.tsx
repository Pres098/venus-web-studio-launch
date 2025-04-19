
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
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
  const baseStyles = 'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 button-hover-effect';
  
  const variantStyles = {
    primary: 'gradient-bg text-white hover:shadow-lg',
    secondary: 'bg-venux-teal text-white hover:shadow-lg',
    accent: 'bg-venux-accent text-white hover:shadow-lg',
    outline: 'border-2 border-venux-purple text-venux-purple hover:bg-venux-purple/5'
  };
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3 text-lg'
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
