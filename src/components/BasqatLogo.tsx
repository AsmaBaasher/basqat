import React from 'react';

interface BasqatLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'white' | 'icon-only';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
}

export const BasqatLogo: React.FC<BasqatLogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
}) => {
  const heightMap = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-12 sm:h-14',
    xl: 'h-14 sm:h-16',
    '2xl': 'h-16 sm:h-20',
    '3xl': 'h-16 sm:h-20 lg:h-24',
    '4xl': 'h-24 sm:h-32 lg:h-36',
  };

  // Determine logo source based on requested variant
  let logoSrc = '/logo.png';
  let fallbackSrc = '/logo.png';

  if (variant === 'white' || variant === 'light') {
    logoSrc = '/logow.png';
    fallbackSrc = '/logow.png';
  } else if (variant === 'icon-only') {
    logoSrc = '/logoonly.png';
    fallbackSrc = '/logoonly.png';
  } else {
    logoSrc = '/logo.png';
    fallbackSrc = '/logo.png';
  }

  return (
    <div className={`inline-flex items-center select-none ${heightMap[size]} ${className}`}>
      <img
        src={logoSrc}
        alt="شعار باسقات للأعمال"
        className={`${heightMap[size]} w-auto object-contain shrink-0`}
        onError={(e) => {
          const target = e.currentTarget;
          if (target.src !== fallbackSrc) {
            target.src = fallbackSrc;
          }
        }}
      />
    </div>
  );
};


