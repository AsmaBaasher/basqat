import React from 'react';
import { SPACES_DATA, SPACE_FEATURES } from '../data/basqatData';
import { SpaceItem } from '../types';
import { Laptop, Users, Presentation, Sparkles, CheckCircle2, ArrowLeft, Building2 } from 'lucide-react';

interface SpacesSectionProps {
  onBookSpace: (space: SpaceItem) => void;
}

export const SpacesSection: React.FC<SpacesSectionProps> = ({ onBookSpace }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop':
        return Laptop;
      case 'Users':
        return Users;
      case 'Presentation':
        return Presentation;
      case 'Sparkles':
      default:
        return Sparkles;
    }
  };

  return (
    <section id="spaces" className="py-20 sm:py-28 bg-[#F7F5EE] relative border-b border-[#E5E0D2]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#1A634F] mb-3">
            <span>بيئة أعمال متكاملة</span>
            <span className="w-8 h-[1.5px] bg-[#1A634F] inline-block" />
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#192A27] mb-4 leading-tight">
            المساحات والقاعات
          </h2>
          <p className="text-[#556965] text-base sm:text-lg leading-relaxed">
            مساحة مناسبة لاجتماعاتك وأعمالك. مساحات عمل وقاعات مجهزة للاجتماعات، التدريب، ورش العمل والفعاليات المهنية، بخيارات مرنة تناسب احتياجاتك.
          </p>
        </div>

        {/* 4 Spaces Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SPACES_DATA.map((space) => {
            const Icon = getIcon(space.iconName);
            return (
              <div
                key={space.id}
                className="bg-white border border-[#E5E0D2] rounded-3xl p-7 flex flex-col justify-between hover:border-[#1A634F] hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#F7F5EE] border border-[#E5E0D2] text-[#1A634F] flex items-center justify-center mb-6 group-hover:bg-[#1A634F] group-hover:text-white transition-all">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="font-editorial text-2xl font-bold text-[#192A27] mb-3">
                    {space.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#556965] leading-relaxed mb-6">
                    {space.description}
                  </p>

                  {/* Suitable For */}
                  <div className="pt-4 border-t border-[#E5E0D2] mb-6">
                    <div className="text-xs font-bold text-[#192A27] mb-2.5">
                      مناسبة لـ:
                    </div>
                    <ul className="space-y-1.5">
                      {space.suitableFor.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-[#556965]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1A634F] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => onBookSpace(space)}
                  className="w-full bg-[#54421F] hover:bg-[#423418] text-white py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>{space.ctaText}</span>
                  <ArrowLeft className="w-4 h-4 rtl:rotate-0" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Space Features Bar */}
        <div className="bg-white rounded-2xl border border-[#E5E0D2] p-6 sm:p-8 max-w-5xl mx-auto shadow-xs">
          <div className="text-center mb-6">
            <h4 className="font-editorial text-xl font-bold text-[#192A27]">
              مميزات المساحات والقاعات
            </h4>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {SPACE_FEATURES.map((feature, idx) => (
              <div key={idx} className="p-3 bg-[#F7F5EE] rounded-xl text-xs font-bold text-[#192A27] flex items-center justify-center">
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
