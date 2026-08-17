import React, { forwardRef } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isFullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      isFullWidth = true,
      className = '',
      id,
      required,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputId = id || (label ? `input-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);

    return (
      <div className={`space-y-1.5 text-right ${isFullWidth ? 'w-full' : ''}`}>
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs font-bold text-[#192A27] select-none"
          >
            {label} {required && <span className="text-[#1A634F]">*</span>}
          </label>
        )}

        <div className="relative flex items-center">
          {rightIcon && (
            <div className="absolute right-3.5 pointer-events-none text-[#556965]">
              {rightIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={`
              w-full bg-white text-[#192A27] text-xs sm:text-sm font-medium
              border rounded-xl px-4 py-2.5 outline-hidden transition-all duration-200
              placeholder:text-[#889895] placeholder:text-xs
              focus:ring-2 focus:ring-[#1A634F]/10 focus:border-[#1A634F]
              disabled:bg-[#EAE6DB]/50 disabled:text-[#889895] disabled:cursor-not-allowed
              ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : 'border-[#E5E0D2]'}
              ${rightIcon ? 'pr-10' : ''}
              ${leftIcon ? 'pl-10' : ''}
              ${className}
            `}
            {...props}
          />

          {leftIcon && (
            <div className="absolute left-3.5 pointer-events-none text-[#556965]">
              {leftIcon}
            </div>
          )}
        </div>

        {error ? (
          <p className="text-[11px] font-bold text-red-600 animate-fade-in">{error}</p>
        ) : helperText ? (
          <p className="text-[11px] text-[#556965]">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';
