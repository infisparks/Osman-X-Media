import React from 'react';

interface SectionLayoutProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: 'white' | 'gray' | 'navy';
}

export const SectionLayout: React.FC<SectionLayoutProps> = ({ 
  children, 
  className = '', 
  id,
  bg = 'white' 
}) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    navy: 'bg-primary-navy text-white'
  };

  return (
    <section id={id} className={`py-20 md:py-32 ${bgColors[bg]} ${className}`}>
      <div className="container mx-auto px-6 md:px-12">
        {children}
      </div>
    </section>
  );
};
