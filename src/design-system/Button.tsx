import React from 'react';
import { Loader2 } from 'lucide-react';

export type ButtonVariant =
  | 'primary'      // Forest green (#1A634F)
  | 'gold'         // Bronze gold (#54421F)
  | 'outline'      // Bordered neutral (#E5E0D2)
  | 'outline-primary' // Bordered green
  | 'ghost'        // Flat no border
  | 'dark'         // Semi-transparent for dark hero sections
  | 'danger';      // Error red

export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isFullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  isFullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  // Base classes: whitespace-nowrap, transitions, cursor, font styling
  const baseClasses =
    'inline-flex items-center justify-center font-bold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98] whitespace-nowrap';

  // Variant classes
  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      'bg-[#1A634F] hover:bg-[#124a39] text-white shadow-xs hover:shadow-md border border-[#1A634F]',
    gold:
      'bg-[#54421F] hover:bg-[#423418] text-white shadow-xs hover:shadow-md border border-[#54421F]',
    outline:
      'bg-white hover:bg-[#F7F5EE] text-[#192A27] border border-[#E5E0D2] hover:border-[#D5D0C0] shadow-2xs',
    'outline-primary':
      'bg-transparent hover:bg-[#1A634F]/10 text-[#1A634F] border border-[#1A634F]',
    ghost:
      'bg-transparent hover:bg-[#1A634F]/10 text-[#192A27] hover:text-[#1A634F]',
    dark:
      'bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow-xs backdrop-blur-xs',
    danger:
      'bg-red-600 hover:bg-red-700 text-white shadow-xs',
  };

  // Size classes (2x horizontal padding rule)
  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'px-3.5 py-1.5 text-xs rounded-lg gap-1.5',
    md: 'px-5 py-2.5 text-xs sm:text-sm rounded-xl gap-2',
    lg: 'px-7 py-3.5 text-sm sm:text-base rounded-xl gap-2.5 font-bold',
    icon: 'p-2.5 rounded-xl',
  };

  const widthClass = isFullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="w-4 h-4 animate-spin shrink-0" />}
      {!isLoading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
      {children && <span>{children}</span>}
      {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
};
