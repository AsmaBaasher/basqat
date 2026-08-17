import React, { useState } from 'react';
import { ASSESSMENT_QUESTIONS } from '../data/basqatData';
import { Sparkles, CheckCircle2, ArrowLeft, ArrowRight, RotateCcw, Calendar, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AssessmentSectionProps {
  onBookConsultation: (customNotes?: string) => void;
}

export const AssessmentSection: React.FC<AssessmentSectionProps> = ({ onBookConsultation }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    const newAnswers = { ...answers, [questionId]: optionIndex };
    setAnswers(newAnswers);

    if (currentStep < ASSESSMENT_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  // Generate tailored recommendation summary
  const getRecommendation = () => {
    const q1Ans = answers[1] ?? 0;
    const q2Ans = answers[2] ?? 0;
    const q3Ans = answers[3] ?? 0;

    let pathTitle = "استشارات الأعمال وتطوير المشروع";
    let pathDesc = "بناءً على إجاباتك، نوصي ببدء جلسة استشارية مركزة لتشخيص التحديات وتحديد خطة العمل التنفيذية.";

    if (q1Ans === 0 || q3Ans === 1) {
      pathTitle = "برنامج الحاضنة وتأسيس المشاريع";
      pathDesc = "مشروعك في مرحلة التأسيس المثالية للاستفادة من مسار الحاضنة لتطوير نموذج العمل وبناء الأساس الصلب.";
    } else if (q1Ans === 3 || q2Ans === 3) {
      pathTitle = "برنامج المسرعة واستشارات النمو والاستثمار";
      pathDesc = "مشروعك جاهز للتوسع والنمو المتسارع وتحسين الأداء التشغيلي والمالي والتهيئة للفرص الاستثمارية.";
    } else if (q2Ans === 1) {
      pathTitle = "استشارات التخطيط المالي والنمذجة المالية";
      pathDesc = "التركيز على التدفقات النقدية وهيكلة التكاليف والتسعير هو الخطوة المحورية لمشروعك الآن.";
    } else if (q2Ans === 2) {
      pathTitle = "استشارات التسويق وتطوير قنوات النمو";
      pathDesc = "ننصح بالتركيز على استراتيجيات جذب العملاء وبناء القنوات البيعية الفعالة لرفع الإيرادات.";
    }

    return { pathTitle, pathDesc };
  };

  const { pathTitle, pathDesc } = getRecommendation();
  const currentQ = ASSESSMENT_QUESTIONS[currentStep];

  return (
    <section id="assessment" className="py-20 sm:py-28 bg-[#F7F5EE] relative border-b border-[#E5E0D2]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#1A634F] mb-3">
            <Sparkles className="w-4 h-4" />
            <span>مقياس جاهزية المشروع</span>
            <span className="w-8 h-[1.5px] bg-[#1A634F] inline-block" />
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#192A27] mb-3 leading-tight">
            3 أسئلة قصيرة تحدد المسار الأنسب
          </h2>
          <p className="text-[#556965] text-xs sm:text-sm leading-relaxed">
            اختر الإجابات التي تصف وضع مشروعك بدقة، وسنساعدك على تحديد نوع الدعم أو الاستشارة الأنسب لك.
          </p>
        </div>

        {/* Diagnostic Box */}
        <div className="bg-white border border-[#E5E0D2] rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
          
          {!isCompleted ? (
            <div>
              {/* Progress Bar */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E5E0D2]">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold text-[#1A634F] bg-[#1A634F]/10 px-3 py-1 rounded-full">
                    السؤال {currentStep + 1} من {ASSESSMENT_QUESTIONS.length}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  {ASSESSMENT_QUESTIONS.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentStep
                          ? 'w-8 bg-[#1A634F]'
                          : idx < currentStep
                          ? 'w-2.5 bg-[#c8b6a2]'
                          : 'w-2.5 bg-[#E5E0D2]'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Question */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#192A27] mb-2">
                    {currentQ.question}
                  </h3>
                  {currentQ.subtitle && (
                    <p className="text-xs sm:text-sm text-[#556965] mb-6">
                      {currentQ.subtitle}
                    </p>
                  )}

                  {/* Options */}
                  <div className="space-y-3 mb-8">
                    {currentQ.options.map((option, optIdx) => {
                      const isSelected = answers[currentQ.id] === optIdx;
                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectOption(currentQ.id, optIdx)}
                          className={`w-full text-right p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-start justify-between cursor-pointer ${
                            isSelected
                              ? 'border-[#1A634F] bg-[#1A634F]/5 text-[#192A27] shadow-xs'
                              : 'border-[#E5E0D2] hover:border-[#1A634F]/50 hover:bg-[#F7F5EE] text-[#192A27]'
                          }`}
                        >
                          <div className="flex-1 pl-4">
                            <div className="font-bold text-sm sm:text-base mb-1">
                              {option.label}
                            </div>
                            {option.description && (
                              <div className="text-xs text-[#556965]">
                                {option.description}
                              </div>
                            )}
                          </div>
                          
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                              isSelected
                                ? 'border-[#1A634F] bg-[#1A634F] text-white'
                                : 'border-[#D5D0C0] bg-white'
                            }`}
                          >
                            {isSelected && <CheckCircle2 className="w-4 h-4" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Step Navigation buttons if user wants to step back */}
                  {currentStep > 0 && (
                    <div className="flex justify-start">
                      <button
                        onClick={() => setCurrentStep(currentStep - 1)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#556965] hover:text-[#192A27] transition-colors cursor-pointer py-1"
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                        <span>السابق</span>
                      </button>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            /* Result Screen */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center py-4"
            >
              <div className="w-16 h-16 rounded-full bg-[#1A634F]/10 border border-[#1A634F]/20 text-[#1A634F] flex items-center justify-center mx-auto mb-5">
                <Award className="w-8 h-8" />
              </div>

              <span className="text-xs font-bold text-[#54421F] bg-[#54421F]/10 px-3.5 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
                نتيجة التقييم والتوصية
              </span>

              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#192A27] mb-3">
                {pathTitle}
              </h3>

              <p className="text-sm sm:text-base text-[#556965] leading-relaxed max-w-xl mx-auto mb-8">
                {pathDesc}
              </p>

              <div className="bg-[#F7F5EE] border border-[#E5E0D2] rounded-2xl p-5 max-w-lg mx-auto mb-8 text-right text-xs space-y-2">
                <div className="font-bold text-[#192A27]">الملخص الاستشاري المقترح:</div>
                <ul className="space-y-1.5 text-[#556965]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1A634F]" />
                    <span>جلسة تشخيصية مباشرة مع مستشار متخصص في هذا المجال</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1A634F]" />
                    <span>تحديد التحديات وترتيب الأولويات وخارطة طريق تنفيذية</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => onBookConsultation(`توصية المقياس: ${pathTitle}`)}
                  className="w-full sm:w-auto bg-[#54421F] hover:bg-[#423418] text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>احجز استشارتك بناءً على النتيجة</span>
                  <ArrowLeft className="w-4 h-4 rtl:rotate-0" />
                </button>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto bg-white hover:bg-[#F7F5EE] text-[#556965] border border-[#D5D0C0] px-5 py-3.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>إعادة التقييم</span>
                </button>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
};
