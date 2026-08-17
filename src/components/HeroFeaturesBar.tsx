import React from 'react';

interface HeroFeaturesBarProps {
  onSelectCategory: (categoryKey: string) => void;
}

export const HeroFeaturesBar: React.FC<HeroFeaturesBarProps> = ({ onSelectCategory }) => {
  const items = [
    { title: 'تأسيس وتطوير المشاريع', key: 'incubation' },
    { title: 'استشارات مالية وإدارية', key: 'consulting' },
    { title: 'دراسات الجدوى ونماذج العمل', key: 'incubation' },
    { title: 'مسرعات وحاضنات الأعمال', key: 'acceleration' },
    { title: 'تأهيل الاستثمار والشراكات', key: 'finance' },
    { title: 'استراتيجيات النمو والتوسع', key: 'acceleration' },
    { title: 'بناء القدرات والتدريب المتخصص', key: 'training' },
    { title: 'الحوكمة وإعادة الهيكلة', key: 'governance' },
  ];

  return (
    <section className="bg-[#1A634F] py-4 border-y border-[#124a39] text-white overflow-hidden select-none relative z-20 shadow-md">
      <div className="flex whitespace-nowrap overflow-hidden">
        {/* Infinite scrolling animation or clean flex marquee */}
        <div className="flex items-center gap-8 text-sm sm:text-base font-semibold tracking-wide animate-[marquee_35s_linear_infinite]">
          {[...items, ...items, ...items].map((item, index) => (
            <button
              key={index}
              onClick={() => onSelectCategory(item.key)}
              className="inline-flex items-center gap-8 hover:text-[#c8b6a2] transition-colors cursor-pointer"
            >
              <span>{item.title}</span>
              <span className="text-[#c8b6a2] text-lg font-bold">✻</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};


