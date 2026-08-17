import React, { useState } from 'react';
import { WORKSHOPS_DATA } from '../data/basqatData';
import { WorkshopItem } from '../types';
import { Calendar, Clock, MapPin, ArrowLeft, GraduationCap, Users, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { FAQSection } from '../components/FAQSection';
import { motion, AnimatePresence } from 'motion/react';

interface WorkshopsPageProps {
  onRegisterWorkshop: (workshop: WorkshopItem) => void;
  onBookConsultation: (subject?: string) => void;
}

export const WorkshopsPage: React.FC<WorkshopsPageProps> = ({
  onRegisterWorkshop,
  onBookConsultation,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'جميع الورش' },
    { key: 'تطوير الأعمال', label: 'تطوير الأعمال' },
    { key: 'المالية والاستثمار', label: 'المالية والاستثمار' },
    { key: 'النمو والتسويق', label: 'النمو والتسويق' },
  ];

  const filteredWorkshops = activeCategory === 'all'
    ? WORKSHOPS_DATA
    : WORKSHOPS_DATA.filter((w) => w.category === activeCategory);

  const workshopsFaqs = [
    {
      question: "هل يمكنني حضور الورش عن بُعد؟",
      answer: "نعم، نقدم العديد من الورش بنمط افتراضي أو هجين يتيح الحضور التفاعلي عن بُعد، ويتم توضيح نمط كل ورشة في بطاقة التسجيل."
    },
    {
      question: "هل تقدم باسقات شهادات لحضور الورش؟",
      answer: "نعم، يحصل كل مشارك يكمل متطلبات الورشة وحضور ساعاتها المعتمدة على شهادة حضور مهنية معتمدة من باسقات للأعمال."
    },
    {
      question: "كيف يتم تأكيد حجز المقعد في الورشة؟",
      answer: "بمجرد تقديم طلب التسجيل عبر الموقع، يتواصل معك فريقنا لتأكيد التسجيل وإرسال الحقيبة التدريبية وموقع القاعة أو رابط البث."
    },
    {
      question: "هل أحصل على أدوات ونماذج عمل قابلة للتطبيق؟",
      answer: "بالتأكيد، صُممت ورش باسقات لتكون تطبيقية وتزود المشاركين بنماذج عمل وأدوات تنفيذية جاهزة للتطبيق الفوري في مشاريعهم."
    }
  ];

  // Remaining seats mapping for realistic conversion
  const seatsRemaining: Record<string, number> = {
    'business-model-workshop': 6,
    'financial-planning-workshop': 4,
    'growth-strategies-workshop': 9,
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#1A634F] mb-3">
            <span>التطوير وبناء القدرات</span>
            <span className="w-8 h-[1.5px] bg-[#1A634F] inline-block" />
          </div>
          <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#192A27] mb-4 leading-tight">
            الورش والفعاليات المهنية
          </h1>
          <p className="text-[#556965] text-base sm:text-lg leading-relaxed">
            معرفة عملية يمكنك تطبيقها مباشرة. ورش عمل وفعاليات مهنية يقدمها متخصصون وممارسون في مجالات الأعمال لمساعدتك على قيادة مشروعك بكفاءة.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
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

        {/* Workshops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          <AnimatePresence mode="popLayout">
            {filteredWorkshops.map((workshop) => {
              const seats = seatsRemaining[workshop.id] || 5;
              return (
                <motion.div
                  key={workshop.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#F7F5EE] border border-[#E5E0D2] rounded-3xl p-7 flex flex-col justify-between hover:border-[#1A634F] hover:shadow-xl transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="bg-[#1A634F]/10 text-[#1A634F] text-xs font-bold px-3 py-1 rounded-full">
                        {workshop.category}
                      </span>
                      <span className="bg-[#54421F]/10 text-[#54421F] text-[11px] font-bold px-2.5 py-1 rounded-full border border-[#54421F]/20">
                        متبقي {seats} مقاعد فقط
                      </span>
                    </div>

                    <h2 className="font-editorial text-2xl font-bold text-[#192A27] mb-2 group-hover:text-[#1A634F] transition-colors">
                      {workshop.title}
                    </h2>
                    
                    {workshop.subtitle && (
                      <p className="text-xs font-bold text-[#54421F] mb-3">
                        {workshop.subtitle}
                      </p>
                    )}

                    <p className="text-xs sm:text-sm text-[#556965] leading-relaxed mb-6">
                      {workshop.description}
                    </p>

                    {/* Event Metadata */}
                    <div className="space-y-2.5 pt-4 border-t border-[#E5E0D2] mb-6 text-xs text-[#192A27] font-semibold bg-white p-4 rounded-2xl border">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#1A634F]" />
                        <span>التاريخ: {workshop.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#1A634F]" />
                        <span>المدة: {workshop.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#1A634F]" />
                        <span>نمط الحضور: {workshop.mode}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onRegisterWorkshop(workshop)}
                    className="w-full bg-[#1A634F] hover:bg-[#124a39] text-white py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>احجز مقعدك في الورشة</span>
                    <ArrowLeft className="w-4 h-4 rtl:rotate-0" />
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Benefits of Basqat Workshops */}
        <div className="bg-[#192A27] text-white rounded-3xl p-8 sm:p-12 mb-20 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white mb-8">
              ماذا تمنحك ورش باسقات المهنية؟
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-right">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-white mb-2">تطبيق عملي فوري</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  أنشطة وحالات دراسية تركز على تطبيق المفاهيم على مشروعك الفعلي أثناء الجلسة.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-white mb-2">نماذج وأدوات تنفيذية</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  قوالب عمل جاهزة ونماذج مالية وتسويقية مجهزة للاستخدام المباشر.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-white mb-2">لقاء الخبراء ونخبة الرواد</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  تواصل مباشر مع المستشارين وتبادل الخبرات وبناء علاقات نوعية في مجتمع الأعمال.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contextual FAQs */}
        <FAQSection
          customFaqs={workshopsFaqs}
          title="أسئلة شائعة حول الورش والفعاليات"
          subtitle="إجابات تفصيلية عن التسجيل، الحضور عن بُعد، والشهادات المعتمدة"
          badge="الأسئلة الشائعة للورش"
          onOpenContact={() => onBookConsultation('استفسار عن الورش والفعاليات')}
        />

      </div>
    </div>
  );
};
