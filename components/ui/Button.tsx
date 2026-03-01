import React from 'react';
import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  size?: string;
  fullWidth?: boolean;
  className?: string;
}



const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'primary', 
    size = 'md', 
    fullWidth = false, 
    className = '', 
    children, 
    ...props 
  }, ref) => {
    const baseClass = 'btn';
    const variantClass = `${baseClass}--${variant}`;
    const sizeClass = `${baseClass}--${size}`;
    const fullWidthClass = fullWidth ? `${baseClass}--full-width` : '';
    
    const combinedClasses = [
      baseClass,
      variantClass,
      sizeClass,
      fullWidthClass,
      className
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button ref={ref} className={combinedClasses} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
