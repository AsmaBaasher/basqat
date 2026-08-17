import React from 'react';

export type BadgeVariant =
  | 'primary'      // Green tint
  | 'gold'         // Gold/Bronze tint
  | 'sage'         // Light green growth
  | 'neutral'      // White/gray tint
  | 'outline'      // Border only
  | 'dark';        // Dark mode badge

export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  dot = false,
  icon,
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center font-bold tracking-tight rounded-full whitespace-nowrap select-none shrink-0';

  const variantClasses: Record<BadgeVariant, string> = {
    primary: 'bg-[#1A634F]/10 text-[#1A634F] border border-[#1A634F]/20',
    gold: 'bg-[#876134]/10 text-[#876134] border border-[#876134]/20',
    sage: 'bg-[#c8b6a2]/15 text-[#1A634F] border border-[#c8b6a2]/30',
    neutral: 'bg-white text-[#192A27] border border-[#E5E0D2]',
    outline: 'bg-transparent text-[#556965] border border-[#E5E0D2]',
    dark: 'bg-white/10 text-emerald-300 border border-white/20',
  };

  const sizeClasses: Record<BadgeSize, string> = {
    sm: 'text-[11px] px-2.5 py-0.5 gap-1',
    md: 'text-xs px-3 py-1 gap-1.5',
    lg: 'text-xs sm:text-sm px-4 py-1.5 gap-2',
  };

  const dotClasses: Record<BadgeVariant, string> = {
    primary: 'bg-[#1A634F]',
    gold: 'bg-[#876134]',
    sage: 'bg-[#c8b6a2]',
    neutral: 'bg-[#556965]',
    outline: 'bg-[#556965]',
    dark: 'bg-emerald-400',
  };

  return (
    <span
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotClasses[variant]}`} />}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
