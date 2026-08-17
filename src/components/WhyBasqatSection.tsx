import React from 'react';
import { WHY_BASQAT_PILLARS } from '../data/basqatData';
import { Compass, UserCheck, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

export const WhyBasqatSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return Compass;
      case 'UserCheck':
        return UserCheck;
      case 'CheckCircle2':
        return CheckCircle2;
      case 'Sparkles':
        return Sparkles;
      case 'ShieldCheck':
      default:
        return ShieldCheck;
    }
  };

  return (
    <section id="why-basqat" className="py-20 sm:py-28 bg-[#F7F5EE] relative border-b border-[#E5E0D2]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#1A634F] mb-3">
            <span>القيمة والأثر</span>
            <span className="w-8 h-[1.5px] bg-[#1A634F] inline-block" />
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#192A27] mb-4 leading-tight">
            لماذا باسقات للأعمال؟
          </h2>
          <p className="text-[#556965] text-base sm:text-lg leading-relaxed">
            شريكك في اتخاذ قرارات أفضل. نعمل معك على فهم التحديات وبناء حلول عملية تدعم نمو واستقرار مشروعك.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {WHY_BASQAT_PILLARS.map((pillar, idx) => {
            const Icon = getIcon(pillar.icon);
            return (
              <div
                key={idx}
                className="bg-white border border-[#E5E0D2] rounded-3xl p-6 text-center flex flex-col items-center justify-between hover:border-[#1A634F] hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#F7F5EE] border border-[#E5E0D2] text-[#1A634F] flex items-center justify-center mb-5 group-hover:bg-[#1A634F] group-hover:text-white transition-all">
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="font-editorial text-xl font-bold text-[#192A27] mb-2 group-hover:text-[#1A634F] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#556965] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
