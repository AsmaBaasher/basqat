import React from 'react';

export interface FormFieldProps {
  id?: string;
  label?: string;
  required?: boolean;
  helperText?: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  required = false,
  helperText,
  error,
  children,
  className = '',
}) => {
  return (
    <div className={`space-y-1.5 text-right ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="block text-xs font-bold text-[#192A27] select-none"
        >
          {label} {required && <span className="text-[#1A634F]">*</span>}
        </label>
      )}
      {children}
      {error ? (
        <p className="text-[11px] font-bold text-red-600 animate-fade-in">{error}</p>
      ) : helperText ? (
        <p className="text-[11px] text-[#556965]">{helperText}</p>
      ) : null}
    </div>
  );
};
