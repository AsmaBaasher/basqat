import React from 'react';

export type CardSurface =
  | 'canvas'      // #F7F5EE background (default warm ivory)
  | 'white'       // #FFFFFF background
  | 'dark'        // #192A27 background (Executive dark)
  | 'interactive';// #F7F5EE with hover green glow & border shift

export type CardPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export type CardRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  surface?: CardSurface;
  padding?: CardPadding;
  radius?: CardRadius;
  hasBorder?: boolean;
  isHoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  surface = 'canvas',
  padding = 'lg',
  radius = '3xl',
  hasBorder = true,
  isHoverable = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'transition-all duration-300 relative overflow-hidden';

  const surfaceClasses: Record<CardSurface, string> = {
    canvas: 'bg-[#F7F5EE] text-[#192A27]',
    white: 'bg-white text-[#192A27] shadow-xs',
    dark: 'bg-[#192A27] text-white shadow-xl',
    interactive:
      'bg-[#F7F5EE] text-[#192A27] hover:border-[#1A634F] hover:shadow-xl hover:-translate-y-0.5 group',
  };

  const paddingClasses: Record<CardPadding, string> = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-7 sm:p-8',
    xl: 'p-8 sm:p-12',
  };

  const radiusClasses: Record<CardRadius, string> = {
    none: 'rounded-none',
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    xl: 'rounded-3xl',
    '2xl': 'rounded-3xl',
    '3xl': 'rounded-3xl',
  };

  const borderClass = hasBorder
    ? surface === 'dark'
      ? 'border border-white/10'
      : 'border border-[#E5E0D2]'
    : 'border-0';

  const hoverClass = isHoverable
    ? 'hover:border-[#1A634F] hover:shadow-lg transition-all duration-300'
    : '';

  return (
    <div
      className={`${baseClasses} ${surfaceClasses[surface]} ${paddingClasses[padding]} ${radiusClasses[radius]} ${borderClass} ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
