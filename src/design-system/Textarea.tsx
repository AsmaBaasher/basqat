import React, { forwardRef } from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  isFullWidth?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      helperText,
      isFullWidth = true,
      className = '',
      id,
      required,
      disabled,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const textareaId = id || (label ? `textarea-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);

    return (
      <div className={`space-y-1.5 text-right ${isFullWidth ? 'w-full' : ''}`}>
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-xs font-bold text-[#192A27] select-none"
          >
            {label} {required && <span className="text-[#1A634F]">*</span>}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          disabled={disabled}
          className={`
            w-full bg-white text-[#192A27] text-xs sm:text-sm font-medium
            border rounded-xl p-3.5 outline-hidden transition-all duration-200 resize-none
            placeholder:text-[#889895] placeholder:text-xs
            focus:ring-2 focus:ring-[#1A634F]/10 focus:border-[#1A634F]
            disabled:bg-[#EAE6DB]/50 disabled:text-[#889895] disabled:cursor-not-allowed
            ${error ? 'border-red-500 focus:border-red-500' : 'border-[#E5E0D2]'}
            ${className}
          `}
          {...props}
        />

        {error ? (
          <p className="text-[11px] font-bold text-red-600 animate-fade-in">{error}</p>
        ) : helperText ? (
          <p className="text-[11px] text-[#556965]">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
