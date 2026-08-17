import React from 'react';
import { CONSULTING_SPECIALTIES, CONSULTATION_STEPS } from '../data/basqatData';
import { Building2, BadgeDollarSign, TrendingUp, Compass, Coins, Cpu, ArrowLeft, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface ConsultingSectionProps {
  onBookConsultation: (specialtyTitle?: string) => void;
}

export const ConsultingSection: React.FC<ConsultingSectionProps> = ({ onBookConsultation }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return Building2;
      case 'BadgeDollarSign':
        return BadgeDollarSign;
      case 'TrendingUp':
        return TrendingUp;
      case 'Compass':
        return Compass;
      case 'Coins':
        return Coins;
      case 'Cpu':
      default:
        return Cpu;
    }
  };

  return (
    <section id="consulting-details" className="py-20 sm:py-28 bg-white relative border-b border-[#E5E0D2]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#1A634F] mb-3">
            <span>استشارات أعمال متخصصة</span>
            <span className="w-8 h-[1.5px] bg-[#1A634F] inline-block" />
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#192A27] mb-4 leading-tight">
            تخصصات الاستشارات
          </h2>
          <p className="text-[#556965] text-base sm:text-lg leading-relaxed">
            نساعدك على تشخيص التحديات، فهم أسبابها، تحديد الأولويات، وبناء توصيات عملية تساعدك على اتخاذ قرارات أفضل.
          </p>
        </div>

        {/* 6 Consulting Specializations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {CONSULTING_SPECIALTIES.map((spec) => {
            const Icon = getIcon(spec.icon);
            return (
              <div
                key={spec.id}
                className="bg-[#F7F5EE] border border-[#E5E0D2] rounded-2xl p-7 hover:border-[#1A634F] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E0D2] text-[#1A634F] flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-[#1A634F] group-hover:text-white transition-all shadow-2xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-editorial text-xl font-bold text-[#192A27] mb-2 group-hover:text-[#1A634F] transition-colors">
                    {spec.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#556965] leading-relaxed mb-6">
                    {spec.description}
                  </p>
                </div>
                
                <button
                  onClick={() => onBookConsultation(spec.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1A634F] hover:text-[#54421F] transition-colors cursor-pointer pt-3 border-t border-[#E5E0D2]"
                >
                  <span>طلب استشارة في هذا المجال</span>
                  <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-0" />
                </button>
              </div>
            );
          })}
        </div>

        {/* 5 Consultation Steps */}
        <div className="bg-[#192A27] text-white rounded-3xl p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-xl">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1A634F]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold tracking-wider text-emerald-300 uppercase mb-2 block">
                مسار تقديم الخدمة
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
                كيف تسير الاستشارة؟
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                خطوات واضحة وبسيطة من تحديد الاحتياج وحتى الحصول على التوصيات العملية
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
              {CONSULTATION_STEPS.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-xs border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:bg-white/10 transition-all"
                >
                  <div>
                    <div className="text-2xl font-black text-emerald-400 font-editorial mb-3">
                      {item.step}
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button
                onClick={() => onBookConsultation()}
                className="bg-[#54421F] hover:bg-[#423418] text-white px-8 py-3.5 rounded-lg font-bold text-sm sm:text-base transition-all shadow-lg inline-flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>احجز استشارتك الآن</span>
                <ArrowLeft className="w-4 h-4 rtl:rotate-0" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
