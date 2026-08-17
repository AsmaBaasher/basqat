import React from 'react';

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'right';
  className?: string;
  titleLevel?: 'h1' | 'h2' | 'h3';
  children?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
  titleLevel = 'h2',
  children,
}) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-right';

  const TitleTag = titleLevel;

  const titleClasses = {
    h1: 'font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#192A27] leading-tight mb-4',
    h2: 'font-editorial text-2xl sm:text-3xl md:text-4xl font-bold text-[#192A27] leading-tight mb-3',
    h3: 'font-editorial text-xl sm:text-2xl md:text-3xl font-bold text-[#192A27] leading-snug mb-2',
  };

  return (
    <div className={`max-w-3xl mb-12 sm:mb-14 ${alignClass} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#1A634F] mb-3">
          <span>{eyebrow}</span>
          <span className="w-8 h-[1.5px] bg-[#1A634F] inline-block" />
        </div>
      )}

      <TitleTag className={titleClasses[titleLevel]}>
        {title}
      </TitleTag>

      {subtitle && (
        <p className="text-[#556965] text-sm sm:text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}

      {children}
    </div>
  );
};
