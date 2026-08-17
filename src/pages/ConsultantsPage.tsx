import React, { useState, useEffect } from 'react';
import { EXPERTS_DATA } from '../data/basqatData';
import { ExpertConsultant } from '../types';
import { UserCheck, Award, Calendar, UserPlus, ArrowLeft, Star, ShieldCheck } from 'lucide-react';
import { FAQSection } from '../components/FAQSection';
import { motion, AnimatePresence } from 'motion/react';

interface ConsultantsPageProps {
  initialCategory?: string;
  onNavigate: (page: string, params?: Record<string, any>) => void;
  onBookExpert: (expert: ExpertConsultant) => void;
  onOpenConsultantModal: () => void;
  onBookConsultation: (subject?: string) => void;
}

export const ConsultantsPage: React.FC<ConsultantsPageProps> = ({
  initialCategory = 'all',
  onNavigate,
  onBookExpert,
  onOpenConsultantModal,
  onBookConsultation,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory || 'all');

  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  const categories = [
    { key: 'all', label: 'جميع التخصصات' },
    { key: 'management', label: 'الإدارة والتطوير المؤسسي' },
    { key: 'finance', label: 'المالية والاستثمار' },
    { key: 'marketing', label: 'التسويق والنمو' },
  ];

  const filteredExperts = activeCategory === 'all'
    ? EXPERTS_DATA
    : EXPERTS_DATA.filter((e) => e.category === activeCategory || e.id === activeCategory);

  const consultantsFaqs = [
    {
      question: "كيف أختار المستشار المناسب لمشروعي؟",
      answer: "يمكنك مراجعة نبذة كل مستشار وخبراته السابقة وتخصصاته الدقيقة، واختيار المستشار الذي يطابق مجاله المرحلة والتحدي الذي يمر به مشروعك."
    },
    {
      question: "هل الاستشارات حضورية أم عن بُعد؟",
      answer: "تتوفر الاستشارات بحسب جدول المستشار وخيار العميل، سواء حضورياً في قاعات باسقات أو عن بُعد عبر جلسات اتصال مرئية آمنة."
    },
    {
      question: "كيف يمكنني الانضمام كمستشار معتمد في باسقات؟",
      answer: "نرحب بالخبراء والمستشارين الممارسين، يمكنك التقديم عبر صفحة انضم كمستشار لمراجعة ملفك وخبراتك واعتمادك في المنظومة."
    },
    {
      question: "ماذا تشمل الجلسة الاستشارية؟",
      answer: "تشمل الجلسة تشخيص التحديات، الإجابة عن التساؤلات، تحليل الخيارات، والخروج بتوصيات وخارطة طريق عملية قابلة للتنفيذ."
    }
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#1A634F] mb-3">
            <span>فريق الخبراء والمستشارين</span>
            <span className="w-8 h-[1.5px] bg-[#1A634F] inline-block" />
          </div>
          <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#192A27] mb-4 leading-tight">
            دليل المستشارين المعتمدين
          </h1>
          <p className="text-[#556965] text-base sm:text-lg leading-relaxed">
            خبرات متخصصة في مختلف مجالات الأعمال. شبكة من المستشارين والخبراء الممارسين لمساعدتك على اتخاذ قرارات أفضل في مشروعك.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-14">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-[#1A634F] text-white shadow-md'
                  : 'bg-[#F7F5EE] text-[#556965] hover:bg-[#EAE6DB] hover:text-[#192A27]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Consultants Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <AnimatePresence mode="popLayout">
            {filteredExperts.map((expert) => (
              <motion.div
                key={expert.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-[#F7F5EE] border border-[#E5E0D2] rounded-3xl p-7 flex flex-col justify-between hover:border-[#1A634F] hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  {/* Avatar & Experience */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white border border-[#E5E0D2] shrink-0 shadow-xs">
                      {expert.image ? (
                        <img
                          src={expert.image}
                          alt={expert.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-bold text-lg text-[#1A634F] bg-[#1A634F]/10">
                          {expert.initials}
                        </div>
                      )}
                    </div>

                    <div>
                      <h2 className="font-editorial text-xl font-bold text-[#192A27] group-hover:text-[#1A634F] transition-colors">
                        {expert.name}
                      </h2>
                      <p className="text-xs font-bold text-[#1A634F] mb-1.5">
                        {expert.title}
                      </p>
                      <div className="inline-flex items-center gap-1 text-[11px] text-[#556965] bg-white px-2 py-0.5 rounded-md border border-[#E5E0D2]">
                        <Award className="w-3 h-3 text-[#54421F]" />
                        <span>{expert.experience}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-xs sm:text-sm text-[#556965] leading-relaxed mb-6 font-normal">
                    {expert.bio}
                  </p>

                  {/* Specialties Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {expert.specialties.map((spec, idx) => (
                      <span
                        key={idx}
                        className="bg-white text-[#192A27] border border-[#E5E0D2] text-[11px] font-semibold px-2.5 py-1 rounded-md"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Rate & CTA */}
                <div className="pt-4 border-t border-[#E5E0D2] flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] text-[#556965] block">قيمة الاستشارة</span>
                    <span className="text-xs sm:text-sm font-black text-[#192A27]">
                      {expert.rate}
                    </span>
                  </div>

                  <button
                    onClick={() => onBookExpert(expert)}
                    className="bg-[#54421F] hover:bg-[#423418] text-white px-4 py-2 rounded-xl font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>احجز استشارة</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Join as Consultant Banner -> Leads to /join-consultant */}
        <div className="bg-[#192A27] text-white rounded-3xl p-8 sm:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1A634F]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="text-right relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase mb-2">
              <UserPlus className="w-4 h-4" />
              <span>انضم إلى شبكة المستشارين المعتمدين</span>
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white mb-2">
              هل تمتلك خبرة استشارية وتود الانضمام إلينا؟
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm max-w-xl leading-relaxed">
              إذا كنت تمتلك خبرة عملية في مجالات الأعمال وترغب في الانضمام إلى شبكة مستشاري باسقات، نسعد باستقبال طلبك ومراجعته وتفعيل ملفك لتقديم الجلسات الاستشارية.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/join-consultant')}
            className="bg-[#54421F] hover:bg-[#423418] text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-all shrink-0 cursor-pointer shadow-md inline-flex items-center gap-2 relative z-10"
          >
            <span>انضم كمستشار</span>
            <ArrowLeft className="w-4 h-4 rtl:rotate-0" />
          </button>
        </div>

        {/* Contextual FAQs */}
        <FAQSection
          customFaqs={consultantsFaqs}
          title="أسئلة شائعة حول المستشارين"
          subtitle="معلومات عن اختيار المستشار، أسعار الجلسات، وآليات حجز المواعيد"
          badge="الأسئلة الشائعة للمستشارين"
          onOpenContact={() => onBookConsultation('استفسار عن شبكة المستشارين')}
        />

      </div>
    </div>
  );
};
