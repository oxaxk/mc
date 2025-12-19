import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  href,
  type,
  target,
  rel
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 cursor-pointer whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--page-bg)] rounded-full';
  
  const variants = {
    primary:
      'bg-[color:var(--accent-solid)] text-white border border-[rgba(var(--accent),0.55)] shadow-[0_18px_40px_rgba(15,23,42,0.18)] hover:shadow-[0_24px_55px_rgba(15,23,42,0.22)] hover:brightness-105 focus:ring-[rgba(var(--accent),0.45)]',
    secondary:
      'bg-[rgba(var(--accent),0.10)] text-[color:var(--page-fg)] border border-[rgba(var(--accent),0.28)] shadow-[0_10px_28px_rgba(15,23,42,0.12)] hover:border-[rgba(var(--accent),0.55)] hover:bg-[rgba(var(--accent),0.16)] focus:ring-[rgba(var(--accent),0.25)]',
    outline:
      'bg-transparent text-[color:var(--page-fg)] border border-[rgba(var(--accent),0.40)] hover:bg-[rgba(var(--accent),0.12)] hover:border-[rgba(var(--accent),0.60)] focus:ring-[rgba(var(--accent),0.25)]'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-7 py-3.5 text-lg'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const isInternal = typeof href === 'string' && (href.startsWith('/') || href.startsWith('#'));
  
  if (href) {
    if (isInternal) {
      return (
        <Link to={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
      </a>
    );
  }
  
  return (
    <button type={type ?? 'button'} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
