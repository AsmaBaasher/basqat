import React from 'react';
import { CONSULTING_SPECIALTIES, CONSULTATION_STEPS } from '../data/basqatData';
import { Building2, BadgeDollarSign, TrendingUp, Compass, Coins, Cpu, ArrowLeft, Calendar, UserCheck, CheckCircle2, Users } from 'lucide-react';
import { FAQSection } from '../components/FAQSection';
import { motion } from 'motion/react';

interface ConsultingPageProps {
  onNavigate: (page: string, params?: Record<string, any>) => void;
  onBookConsultation: (specialtyTitle?: string) => void;
}

export const ConsultingPage: React.FC<ConsultingPageProps> = ({
  onNavigate,
  onBookConsultation,
}) => {
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

  const consultingFaqs = [
    {
      question: "كيف أعرف نوع الاستشارة المناسبة لمشروعي؟",
      answer: "يمكنك استخدام مقياس جاهزية المشروع في صفحة البرامج، أو مراجعة تخصصات الاستشارات الستة، أو التواصل مع فريقنا لمساعدتك على تحديد المسار التشخيصي الأنسب لاحتياجك."
    },
    {
      question: "كيف أختار المستشار المناسب؟",
      answer: "يمكنك تصفح دليل المستشارين في صفحة المستشارين والاطلاع على خبراتهم وتخصصاتهم وسنوات خبرتهم واختيار الخبير الأنسب لطبيعة تحديات مشروعك."
    },
    {
      question: "هل يمكنني حجز استشارة في أكثر من مجال؟",
      answer: "نعم، يمكنك حجز جلسات استشارية متعددة لتغطية مختلف جوانب مشروعك كالإدارة والمالية والتسويق وفق خطة متكاملة."
    },
    {
      question: "هل الاستشارات حضورية أم عن بُعد؟",
      answer: "تتوفر الاستشارات بحسب تفضيلك وجدول المستشار، حيث نوفر خيارات الحضور المباشر في قاعات باسقات أو الجلسات الافتراضية المرئية عن بُعد."
    }
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#1A634F] mb-3">
            <span>استشارات أعمال متخصصة</span>
            <span className="w-8 h-[1.5px] bg-[#1A634F] inline-block" />
          </div>
          <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#192A27] mb-4 leading-tight">
            تخصصات الاستشارات
          </h1>
          <p className="text-[#556965] text-base sm:text-lg leading-relaxed">
            نساعدك على تشخيص التحديات، فهم أسبابها، تحديد الأولويات، وبناء توصيات عملية تساعدك على اتخاذ قرارات أفضل لمشروعك.
          </p>
        </div>

        {/* 6 Consulting Specializations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {CONSULTING_SPECIALTIES.map((spec) => {
            const Icon = getIcon(spec.icon);
            return (
              <div
                key={spec.id}
                className="bg-[#F7F5EE] border border-[#E5E0D2] rounded-3xl p-7 hover:border-[#1A634F] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
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
                
                {/* Actions: Direct Book or View Filtered Consultants */}
                <div className="pt-4 border-t border-[#E5E0D2] flex flex-col gap-2.5">
                  <button
                    onClick={() => onNavigate('/consultants', { category: spec.id })}
                    className="w-full bg-[#1A634F] hover:bg-[#124a39] text-white py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>استعرض مستشاري هذا التخصص</span>
                    <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-0" />
                  </button>

                  <button
                    onClick={() => onBookConsultation(spec.title)}
                    className="w-full bg-white hover:bg-[#EAE6DB] text-[#192A27] border border-[#D5D0C0] py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#54421F]" />
                    <span>طلب استشارة مباشرة</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 5 Consultation Steps Section */}
        <div className="bg-[#192A27] text-white rounded-3xl p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-xl mb-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1A634F]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold tracking-wider text-emerald-300 uppercase mb-2 block">
                مسار تقديم الخدمة
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
                كيف تسير الاستشارة في باسقات؟
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm">
                خطوات واضحة وبسيطة من تحديد الاحتياج وحتى الحصول على التوصيات العملية وخطة العمل
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
                    <h3 className="text-base font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onBookConsultation()}
                className="bg-[#54421F] hover:bg-[#423418] text-white px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all shadow-lg inline-flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>احجز استشارتك الآن</span>
                <ArrowLeft className="w-4 h-4 rtl:rotate-0" />
              </button>

              <button
                onClick={() => onNavigate('/consultants')}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <Users className="w-4 h-4" />
                <span>تصفح دليل المستشارين</span>
              </button>
            </div>
          </div>
        </div>

        {/* Contextual FAQs */}
        <FAQSection
          customFaqs={consultingFaqs}
          title="أسئلة شائعة حول الاستشارات"
          subtitle="كل ما تود معرفته حول آليات حجز وتنفيذ الجلسات الاستشارية في باسقات"
          badge="الأسئلة الشائعة للاستشارات"
          onOpenContact={() => onBookConsultation()}
        />

      </div>
    </div>
  );
};
