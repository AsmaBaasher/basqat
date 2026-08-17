import React, { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options?: SelectOption[];
  error?: string;
  helperText?: string;
  isFullWidth?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      options,
      children,
      error,
      helperText,
      isFullWidth = true,
      className = '',
      id,
      required,
      disabled,
      ...props
    },
    ref
  ) => {
    const selectId = id || (label ? `select-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);

    return (
      <div className={`space-y-1.5 text-right ${isFullWidth ? 'w-full' : ''}`}>
        {label && (
          <label
            htmlFor={selectId}
            className="block text-xs font-bold text-[#192A27] select-none"
          >
            {label} {required && <span className="text-[#1A634F]">*</span>}
          </label>
        )}

        <div className="relative flex items-center">
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            className={`
              w-full bg-white text-[#192A27] text-xs sm:text-sm font-medium
              border rounded-xl px-4 py-2.5 pl-10 outline-hidden transition-all duration-200
              appearance-none cursor-pointer
              focus:ring-2 focus:ring-[#1A634F]/10 focus:border-[#1A634F]
              disabled:bg-[#EAE6DB]/50 disabled:text-[#889895] disabled:cursor-not-allowed
              ${error ? 'border-red-500 focus:border-red-500' : 'border-[#E5E0D2]'}
              ${className}
            `}
            {...props}
          >
            {options
              ? options.map((opt) => (
                  <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                    {opt.label}
                  </option>
                ))
              : children}
          </select>

          <div className="absolute left-3.5 pointer-events-none text-[#556965]">
            <ChevronDown className="w-4 h-4" />
          </div>
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

Select.displayName = 'Select';
