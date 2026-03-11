import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  href, 
  className = '',
  onClick,
  type = "button",
  disabled = false,
}) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 font-montserrat font-bold rounded-lg transition-all duration-300";
  
  const variants = {
    primary: "bg-gold-gradient text-primary-navy hover:shadow-lg hover:scale-[1.02]",
    secondary: "bg-primary-navy text-white hover:bg-opacity-90",
    outline: "border-2 border-accent-goldBase text-accent-goldBase hover:bg-accent-goldBase hover:text-primary-navy"
  };

  const combinedClassName = `${baseStyle} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName} onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}>
        {children}
      </Link>
    );
  }

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={combinedClassName} 
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};
