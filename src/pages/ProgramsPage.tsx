import React from 'react';
import { PROGRAMS_DATA } from '../data/basqatData';
import { Program } from '../types';
import { Rocket, Sparkles, CheckCircle2, Clock, Globe, ArrowLeft, Award, Calendar } from 'lucide-react';
import { AssessmentSection } from '../components/AssessmentSection';
import { FAQSection } from '../components/FAQSection';
import { motion } from 'motion/react';

interface ProgramsPageProps {
  onNavigate: (page: string, params?: Record<string, any>) => void;
  onSelectProgram: (program: Program) => void;
  onBookConsultation: (subject?: string) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({
  onNavigate,
  onSelectProgram,
  onBookConsultation,
}) => {
  const programsFaqs = [
    {
      question: "هل تقدم باسقات تمويلاً مباشراً للمشاريع؟",
      answer: "تركز برامج باسقات على التأهيل وتطوير نموذج العمل والجاهزية الاستثمارية والتشبيك مع المستثمرين والصناديق التمويلية الشريكة."
    },
    {
      question: "كيف أختار بين الحاضنة والمسرعة؟",
      answer: "إذا كان مشروعك في مرحلة الفكرة أو النموذج الأولي فبرنامج الحاضنة هو الأنسب لك. أما إذا كان لديك مشروع قائم ومبيعات وتبحث عن التوسع فالتحق بالمسرعة، كما يمكنك استخدام مقياس الجاهزية أدناه للمساعدة."
    },
    {
      question: "هل البرامج حضورية أم عن بُعد؟",
      answer: "تُقدم البرامج بنمط هجين يجمع بين الجلسات والورش الحضورية في مقرات باسقات، مع إمكانية المتابعة والاستشارات الافتراضية المرنة عن بُعد."
    },
    {
      question: "هل تتطلب البرامج التفرغ الكامل؟",
      answer: "صُممت البرامج لتكون مرنة بما يتناسب مع رواد الأعمال وأصحاب المشاريع، مع اشتراط الالتزام بحضور الورش والجلسات الاستشارية المجدولة."
    }
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#1A634F] mb-3">
            <span>برامج التأسيس والنمو</span>
            <span className="w-8 h-[1.5px] bg-[#1A634F] inline-block" />
          </div>
          <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#192A27] mb-4 leading-tight">
            برامج الحاضنة والمسرعة
          </h1>
          <p className="text-[#556965] text-base sm:text-lg leading-relaxed">
            مسارات متخصصة لمساعدة المشاريع في مراحل التأسيس والنمو على تطوير نموذج العمل، تحسين الأداء، والاستعداد للمرحلة القادمة بثقة.
          </p>
        </div>

        {/* 2 Programs Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto mb-20">
          {PROGRAMS_DATA.map((prog) => {
            const isIncubator = prog.id === 'incubator';
            return (
              <div
                key={prog.id}
                id={`program-card-${prog.id}`}
                className={`bg-[#F7F5EE] rounded-3xl p-8 sm:p-10 border transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between relative group ${
                  isIncubator ? 'border-[#E5E0D2] hover:border-[#1A634F]' : 'border-[#1A634F]/40 hover:border-[#1A634F] bg-white'
                }`}
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-[#E5E0D2] text-[#1A634F] flex items-center justify-center shadow-2xs">
                      {isIncubator ? <Sparkles className="w-7 h-7" /> : <Rocket className="w-7 h-7" />}
                    </div>
                    <span className="bg-[#1A634F] text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xs">
                      {prog.categoryLabel}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h2 className="font-editorial text-3xl font-bold text-[#192A27] mb-2">
                    {prog.title}
                  </h2>
                  <p className="text-sm font-bold text-[#1A634F] mb-4">
                    {prog.subtitle}
                  </p>

                  <p className="text-sm text-[#556965] leading-relaxed mb-6">
                    {prog.shortDescription}
                  </p>

                  {/* Meta Specs */}
                  <div className="flex flex-wrap items-center gap-4 py-3 px-4 bg-white border border-[#E5E0D2] rounded-xl text-xs font-semibold text-[#192A27] mb-6">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#1A634F]" />
                      <span>{prog.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Globe className="w-4 h-4 text-[#1A634F]" />
                      <span>{prog.mode}</span>
                    </div>
                  </div>

                  {/* Suitable If List */}
                  <div className="mb-8">
                    <div className="text-xs font-bold text-[#192A27] mb-3">
                      هذا البرنامج مناسب لك إذا:
                    </div>
                    <ul className="space-y-2.5">
                      {prog.suitableIf.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#556965]">
                          <CheckCircle2 className="w-4 h-4 text-[#1A634F] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-4 border-t border-[#E5E0D2] flex flex-col gap-2.5">
                  <button
                    onClick={() => onSelectProgram(prog)}
                    className="w-full bg-[#1A634F] hover:bg-[#124a39] text-white py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>{prog.ctaText || 'قدّم على البرنامج'}</span>
                    <ArrowLeft className="w-4 h-4 rtl:rotate-0" />
                  </button>
                  <button
                    onClick={() => onBookConsultation(`استفسار عن ${prog.title}`)}
                    className="w-full bg-white hover:bg-[#EAE6DB] text-[#192A27] border border-[#D5D0C0] py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#54421F]" />
                    <span>طلب استشارة حول البرنامج</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Diagnostic Assessment Section for Programs */}
        <div className="mb-20">
          <AssessmentSection onBookConsultation={(notes) => onBookConsultation(notes)} />
        </div>

        {/* Contextual FAQs */}
        <FAQSection
          customFaqs={programsFaqs}
          title="أسئلة شائعة حول الحاضنة والمسرعة"
          subtitle="إجابات عن شروط القبول، التمويل، وآليات التدريب والتوجيه في برامج باسقات"
          badge="الأسئلة الشائعة للبرامج"
          onOpenContact={() => onBookConsultation('استفسار عن برامج الحاضنة والمسرعة')}
        />

      </div>
    </div>
  );
};
