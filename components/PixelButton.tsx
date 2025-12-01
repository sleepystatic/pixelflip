'use client';

import React from 'react';

interface PixelButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export const PixelButton: React.FC<PixelButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
}) => {
  const baseStyles = 'font-bold font-mono relative transition-transform duration-100';
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantStyles = {
    primary: `
      bg-brand-primary text-white
      ${!disabled && 'hover:bg-[#6a4391]'}
    `,
    secondary: `
      bg-brand-secondary text-white
      ${!disabled && 'hover:bg-[#5a6dd8]'}
    `,
    outline: `
      bg-transparent text-brand-primary border-3 border-brand-primary
      ${!disabled && 'hover:bg-brand-primary hover:text-white'}
    `,
  };

  const boxShadow = disabled
    ? 'none'
    : `
      0 0 0 3px #2D3748,
      3px 0 0 3px #2D3748,
      -3px 0 0 3px #2D3748,
      0 3px 0 3px #2D3748,
      0 -3px 0 3px #2D3748,
      0 5px 0 0 #2D3748,
      0 6px 0 0 rgba(0,0,0,0.4)
    `;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      style={{
        boxShadow,
        imageRendering: 'pixelated',
      }}
      onMouseDown={(e) => !disabled && (e.currentTarget.style.transform = 'translateY(3px)')}
      onMouseUp={(e) => !disabled && (e.currentTarget.style.transform = 'translateY(0)')}
      onMouseLeave={(e) => !disabled && (e.currentTarget.style.transform = 'translateY(0)')}
    >
      {children}
    </button>
  );
};