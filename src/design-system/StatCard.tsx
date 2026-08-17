import React from 'react';
import { Card } from './Card';

export interface StatCardProps {
  value: string;
  label: string;
  trend?: string;
  icon?: React.ReactNode;
  variant?: 'canvas' | 'white' | 'dark';
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  trend,
  icon,
  variant = 'canvas',
  className = '',
}) => {
  return (
    <Card
      surface={variant}
      padding="md"
      radius="2xl"
      className={`text-center flex flex-col items-center justify-center ${className}`}
    >
      {icon && (
        <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E0D2] text-[#1A634F] flex items-center justify-center mb-3">
          {icon}
        </div>
      )}

      <div className="font-editorial text-3xl sm:text-4xl font-black text-[#192A27] mb-1 leading-none tracking-tight">
        {value}
      </div>

      <div className="text-xs sm:text-sm font-bold text-[#556965]">
        {label}
      </div>

      {trend && (
        <div className="mt-2 text-[11px] font-bold text-[#1A634F] bg-[#1A634F]/10 px-2 py-0.5 rounded-full">
          {trend}
        </div>
      )}
    </Card>
  );
};
