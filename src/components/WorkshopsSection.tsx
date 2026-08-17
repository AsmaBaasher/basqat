import React from 'react';
import { WORKSHOPS_DATA } from '../data/basqatData';
import { WorkshopItem } from '../types';
import { Calendar, Clock, MapPin, ArrowLeft, GraduationCap } from 'lucide-react';

interface WorkshopsSectionProps {
  onRegisterWorkshop: (workshop: WorkshopItem) => void;
}

export const WorkshopsSection: React.FC<WorkshopsSectionProps> = ({ onRegisterWorkshop }) => {
  return (
    <section id="workshops" className="py-20 sm:py-28 bg-white relative border-b border-[#E5E0D2]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#1A634F] mb-3">
            <span>التطوير وبناء القدرات</span>
            <span className="w-8 h-[1.5px] bg-[#1A634F] inline-block" />
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#192A27] mb-4 leading-tight">
            الورش والفعاليات
          </h2>
          <p className="text-[#556965] text-base sm:text-lg leading-relaxed">
            معرفة عملية يمكنك تطبيقها. ورش عمل وفعاليات مهنية يقدمها متخصصون في مجالات الأعمال، وتتناول موضوعات عملية يحتاجها أصحاب المشاريع وفرق العمل.
          </p>
        </div>

        {/* Workshops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {WORKSHOPS_DATA.map((workshop) => (
            <div
              key={workshop.id}
              className="bg-[#F7F5EE] border border-[#E5E0D2] rounded-3xl p-7 flex flex-col justify-between hover:border-[#1A634F] hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="bg-[#1A634F]/10 text-[#1A634F] text-xs font-bold px-3 py-1 rounded-full">
                    {workshop.category}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E0D2] flex items-center justify-center text-[#1A634F]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-editorial text-2xl font-bold text-[#192A27] mb-2 group-hover:text-[#1A634F] transition-colors">
                  {workshop.title}
                </h3>
                
                {workshop.subtitle && (
                  <p className="text-xs font-bold text-[#54421F] mb-3">
                    {workshop.subtitle}
                  </p>
                )}

                <p className="text-xs sm:text-sm text-[#556965] leading-relaxed mb-6">
                  {workshop.description}
                </p>

                {/* Event Metadata */}
                <div className="space-y-2.5 pt-4 border-t border-[#E5E0D2] mb-6 text-xs text-[#192A27] font-semibold">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#1A634F]" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#1A634F]" />
                    <span>{workshop.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#1A634F]" />
                    <span>{workshop.mode}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onRegisterWorkshop(workshop)}
                className="w-full bg-[#1A634F] hover:bg-[#124a39] text-white py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>احجز مقعدك في الورشة</span>
                <ArrowLeft className="w-4 h-4 rtl:rotate-0" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
