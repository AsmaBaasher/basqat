import React from 'react';

export interface TabItem {
  key: string;
  label: string;
  count?: number;
  icon?: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  activeKey: string;
  onChange: (key: string) => void;
  className?: string;
  variant?: 'pill' | 'underline';
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeKey,
  onChange,
  className = '',
  variant = 'pill',
}) => {
  return (
    <div
      className={`flex items-center justify-center gap-2 flex-wrap select-none ${className}`}
      role="tablist"
    >
      {tabs.map((tab) => {
        const isActive = activeKey === tab.key;

        if (variant === 'underline') {
          return (
            <button
              key={tab.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(tab.key)}
              className={`pb-2.5 px-4 text-xs sm:text-sm font-bold transition-all relative cursor-pointer flex items-center gap-2 ${
                isActive
                  ? 'text-[#1A634F]'
                  : 'text-[#556965] hover:text-[#192A27]'
              }`}
            >
              {tab.icon && <span>{tab.icon}</span>}
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#1A634F]/10 text-[#1A634F]">
                  {tab.count}
                </span>
              )}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1A634F] rounded-full" />
              )}
            </button>
          );
        }

        // Pill variant
        return (
          <button
            key={tab.key}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.key)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 shadow-2xs ${
              isActive
                ? 'bg-[#1A634F] text-white shadow-md'
                : 'bg-white text-[#556965] hover:bg-[#EAE6DB] hover:text-[#192A27] border border-[#E5E0D2]'
            }`}
          >
            {tab.icon && <span>{tab.icon}</span>}
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-[#1A634F]/10 text-[#1A634F]'
                }`}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
