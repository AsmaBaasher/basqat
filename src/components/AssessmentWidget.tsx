import React, { useState } from 'react';
import { ASSESSMENT_QUESTIONS, PROGRAMS_DATA } from '../data/basqatData';
import { Program } from '../types';
import { ArrowRight, CheckCircle2, RotateCcw, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AssessmentWidgetProps {
  onSelectProgram: (program: Program) => void;
}

export const AssessmentWidget: React.FC<AssessmentWidgetProps> = ({ onSelectProgram }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [recommendedProgramId, setRecommendedProgramId] = useState<string | null>(null);

  const questions = ASSESSMENT_QUESTIONS;
  const currentQ = questions[currentStep];

  const handleSelectOption = (index: number, programId: string) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = index;
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Quiz complete!
      setRecommendedProgramId(programId);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setRecommendedProgramId(null);
  };

  const recommendedProgram = recommendedProgramId
    ? PROGRAMS_DATA.find((p) => p.id === recommendedProgramId) || PROGRAMS_DATA[0]
    : null;

  return (
    <section id="assessment" className="py-20 bg-[#1A634F] text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute -top-32 right-10 w-96 h-96 bg-[#c6b59f]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-10 w-96 h-96 bg-[#227b60] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-[#c6b59f] mb-4">
            <Compass className="w-4 h-4 text-[#c6b59f]" />
            <span>مقياس جاهزية المشروع — المدة المتوقعة: دقيقتان</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            اكتشف جاهزية مشروعك
            <span className="text-[#c6b59f] mr-2 text-2xl font-normal">//</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
            أجب عن 3 أسئلة قصيرة لنحدد مرحلتك ونقترح لك المسار الأنسب من برامج باسقات.
          </p>
        </motion.div>

        {/* Assessment Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="bg-white text-[#192A27] rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/20"
        >
          {!recommendedProgram ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
              >
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center text-xs font-bold text-[#6B7E79] mb-2">
                    <span>السؤال {currentStep + 1} من {questions.length}</span>
                    <span>{Math.round(((currentStep + 1) / questions.length) * 100)}%</span>
                  </div>
                  <div className="w-full bg-[#EAE8DD] h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#c6b59f] h-full transition-all duration-500 rounded-full"
                      style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Question Title */}
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#192A27] mb-1">
                    {currentQ.question}
                  </h3>
                  <p className="text-[#556965] text-xs sm:text-sm">{currentQ.subtitle}</p>
                </div>

                {/* Options */}
                <div className="space-y-3 mb-8">
                  {currentQ.options.map((option, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => handleSelectOption(idx, option.recommendedProgramId)}
                      className="w-full text-right p-4 sm:p-5 rounded-2xl border border-[#EAE8DD] hover:border-[#c6b59f] hover:bg-[#F8F7F0] transition-all flex items-start gap-4 group cursor-pointer"
                    >
                      <span className="w-7 h-7 rounded-full bg-[#F8F7F0] group-hover:bg-[#1A634F] group-hover:text-white flex items-center justify-center font-bold text-xs shrink-0 text-[#1A634F] transition-colors">
                        {idx + 1}
                      </span>
                      <div>
                        <span className="font-bold text-sm sm:text-base text-[#192A27] group-hover:text-[#1A634F] block mb-1">
                          {option.label}
                        </span>
                        <span className="text-xs text-[#556965]">
                          {option.description}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Back button */}
                {currentStep > 0 && (
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="inline-flex items-center gap-1.5 text-xs text-[#556965] hover:text-[#1A634F] font-semibold cursor-pointer"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                    <span>السؤال السابق</span>
                  </button>
                )}
              </motion.div>
            </AnimatePresence>
          ) : (
            /* Result View */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center py-4"
            >
              <div className="w-16 h-16 rounded-full bg-[#F4ECE1] border border-[#c6b59f]/50 text-[#1A634F] mx-auto flex items-center justify-center mb-4 shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <span className="text-xs font-bold text-[#4F635F] uppercase tracking-wider block mb-1">
                نتيجة التقييم
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#192A27] mb-3">
                المسار المقترح لمشروعك
              </h3>

              {/* Recommended Program Box */}
              <div className="bg-[#F8F7F0] border-2 border-[#c6b59f]/60 rounded-2xl p-6 mb-8 text-right max-w-xl mx-auto shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    alt={recommendedProgram.title}
                    className="w-20 h-20 rounded-xl object-cover"
                    src={recommendedProgram.image}
                  />
                  <div>
                    <span className="text-[11px] font-bold bg-[#1A634F] text-white px-2.5 py-0.5 rounded-full inline-block mb-1">
                      {recommendedProgram.categoryLabel}
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-[#192A27]">
                      {recommendedProgram.title}
                    </h4>
                    <span className="text-xs text-[#556965] block">
                      المدة: {recommendedProgram.duration} • النمط: {recommendedProgram.mode}
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#556965] leading-relaxed mb-4">
                  {recommendedProgram.shortDescription}
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => onSelectProgram(recommendedProgram)}
                    className="flex-1 bg-[#1A634F] hover:bg-[#124a39] text-white py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-colors text-center cursor-pointer shadow-sm"
                  >
                    احجز هذه الاستشارة الآن
                  </button>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs text-[#556965] hover:text-[#1A634F] font-semibold cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>إعادة التقييم</span>
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
