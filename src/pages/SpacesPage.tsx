import React from 'react';
import { SPACES_DATA, SPACE_FEATURES, BRANCHES_DATA } from '../data/basqatData';
import { SpaceItem } from '../types';
import { Laptop, Users, Presentation, Sparkles, CheckCircle2, ArrowLeft, Building2, MapPin, Phone, ShieldCheck, Wifi } from 'lucide-react';
import { FAQSection } from '../components/FAQSection';
import { motion } from 'motion/react';

interface SpacesPageProps {
  onBookSpace: (space: SpaceItem) => void;
  onBookConsultation: (subject?: string) => void;
}

export const SpacesPage: React.FC<SpacesPageProps> = ({
  onBookSpace,
  onBookConsultation,
}) => {
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

  const spacesFaqs = [
    {
      question: "هل يمكن حجز قاعة لاجتماع أو ورشة عمل؟",
      answer: "نعم، توفر باسقات خيارات حجز مرنة بالساعة أو باليوم لقاعات الاجتماعات وقاعات التدريب وورش العمل في جميع فروعنا."
    },
    {
      question: "ما هي التجهيزات المتاحة في القاعات والمساحات؟",
      answer: "جميع القاعات مجهزة بشاشات عرض تفاعلية ذكية، أجهزة صوتيات متقدمة، إنترنت عالي السرعة، سبورات كتابية، وخدمات الضيافة."
    },
    {
      question: "كيف يتم الحجز والاستفسار عن الأسعار والسعة؟",
      answer: "يمكنك الضغط على زر الحجز أو الاستفسار لتحديد نوع القاعة والتاريخ والوقت المطلوب، وسيقوم فريق خدمة العملاء بالتواصل معك لتأكيد الحجز."
    },
    {
      question: "هل تتوفر مساحات مخصصة للفعاليات الكبيرة والملتقيات؟",
      answer: "نعم، نوفر مساحات فعاليات قابلة للتهيئة وفق طبيعة الفعالية وعدد الحضور المطلوب مع توفير الدعم الفني والتنظيمي الكامل."
    }
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#1A634F] mb-3">
            <span>بيئة أعمال متكاملة</span>
            <span className="w-8 h-[1.5px] bg-[#1A634F] inline-block" />
          </div>
          <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#192A27] mb-4 leading-tight">
            المساحات والقاعات
          </h1>
          <p className="text-[#556965] text-base sm:text-lg leading-relaxed">
            مساحة مناسبة لاجتماعاتك وأعمالك. مساحات عمل وقاعات مجهزة للاجتماعات، التدريب، ورش العمل والفعاليات المهنية، بخيارات مرنة تناسب احتياجاتك.
          </p>
        </div>

        {/* 4 Spaces Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {SPACES_DATA.map((space) => {
            const Icon = getIcon(space.iconName);
            const isEvent = space.id === 'event-spaces';
            return (
              <div
                key={space.id}
                className={`bg-[#F7F5EE] border rounded-3xl p-7 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group ${
                  isEvent ? 'border-[#54421F]/40 hover:border-[#54421F]' : 'border-[#E5E0D2] hover:border-[#1A634F]'
                }`}
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white border border-[#E5E0D2] text-[#1A634F] flex items-center justify-center mb-6 group-hover:bg-[#1A634F] group-hover:text-white transition-all shadow-2xs">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h2 className="font-editorial text-2xl font-bold text-[#192A27] mb-3">
                    {space.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#556965] leading-relaxed mb-6">
                    {space.description}
                  </p>

                  {/* Clarification line for event spaces */}
                  {isEvent && (
                    <div className="bg-[#54421F]/10 border border-[#54421F]/20 rounded-xl p-3 text-[11px] text-[#54421F] font-bold mb-6">
                      تحتاج تجهيزاً خاصاً وتخصيصاً وفق عدد الحضور، تواصل معنا لتفاصيل السعة والتسعير.
                    </div>
                  )}

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
                  className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                    isEvent
                      ? 'bg-[#54421F] hover:bg-[#423418] text-white'
                      : 'bg-[#1A634F] hover:bg-[#124a39] text-white'
                  }`}
                >
                  <span>{space.ctaText}</span>
                  <ArrowLeft className="w-4 h-4 rtl:rotate-0" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Space Features Bar */}
        <div className="bg-white rounded-3xl border border-[#E5E0D2] p-8 sm:p-10 mb-20 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#192A27] mb-2">
              مميزات وتجهيزات المساحات والقاعات
            </h3>
            <p className="text-[#556965] text-xs sm:text-sm">
              نوفر لك كافة المتطلبات التقنية واللوجستية لضمان تجربة مهنية متكاملة
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {SPACE_FEATURES.map((feature, idx) => (
              <div key={idx} className="p-4 bg-[#F7F5EE] border border-[#E5E0D2] rounded-2xl text-xs font-bold text-[#192A27] flex items-center justify-center shadow-2xs">
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Branches Offering Spaces */}
        <div className="bg-[#192A27] text-white rounded-3xl p-8 sm:p-12 mb-20 shadow-xl relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-emerald-300 uppercase mb-2 block">
              فروعنا ومواقعنا
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white mb-2">
              تتوفر مساحاتنا وقاعاتنا في 3 مدن رئيسية
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BRANCHES_DATA.map((branch) => (
              <div key={branch.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-editorial text-xl font-bold text-white">{branch.city}</h4>
                    <span className="text-[11px] font-bold bg-[#1A634F] text-emerald-200 px-2.5 py-0.5 rounded-md">
                      {branch.tag}
                    </span>
                  </div>
                  <div className="space-y-2 text-xs text-gray-300 mb-6">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{branch.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span dir="ltr">{branch.phone}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onBookConsultation(`استفسار عن حجز مساحة في فرع ${branch.city}`)}
                  className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 py-2 rounded-xl text-xs font-bold transition-colors text-center cursor-pointer"
                >
                  احجز في فرع {branch.city}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contextual FAQs */}
        <FAQSection
          customFaqs={spacesFaqs}
          title="أسئلة شائعة حول المساحات والقاعات"
          subtitle="تفاصيل الحجز بالساعة واليوم والتجهيزات التقنية المتاحة"
          badge="الأسئلة الشائعة للمساحات"
          onOpenContact={() => onBookConsultation('استفسار عن المساحات والقاعات')}
        />

      </div>
    </div>
  );
};
