import React, { useState } from 'react';
import { FAQS_DATA } from '../data/basqatData';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  onOpenContact: () => void;
  customFaqs?: FAQItem[];
  title?: string;
  subtitle?: string;
  badge?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  onOpenContact,
  customFaqs,
  title = "كل ما تود معرفته عن باسقات",
  subtitle = "إجابات واضحة على أبرز الأسئلة المتكررة حول برامجنا والخدمات الاستشارية.",
  badge = "الأسئلة الشائعة والمعلومات"
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = customFaqs || FAQS_DATA;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FFFFFF] relative border-b border-[#E5E0D2]">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#1A634F] mb-4">
            <span>{badge}</span>
            <span className="w-8 h-[1.5px] bg-[#1A634F] inline-block" />
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#192A27] mb-4 leading-tight tracking-tight">
            {title}
          </h2>
          <p className="text-[#556965] text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Accordion List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-4"
        >
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#1A634F] bg-[#F7F5EE] shadow-xs'
                    : 'border-[#E5E0D2] bg-white hover:border-[#1A634F]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-right p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#192A27] cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-md bg-[#1A634F] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <span className="font-editorial font-bold">{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#1A634F] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-[#556965] text-sm sm:text-base leading-relaxed border-t border-[#E5E0D2] pr-14 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Contact Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center p-6 bg-[#F7F5EE] rounded-xl border border-[#E5E0D2] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-right">
            <h4 className="font-editorial font-bold text-base text-[#192A27]">لديك استفسار خاص أو حالة غير مذكورة؟</h4>
            <p className="text-xs text-[#556965]">فريق المستشارين لدينا جاهز للرد على جميع تساؤلاتك.</p>
          </div>
          <button
            onClick={onOpenContact}
            className="bg-[#1A634F] hover:bg-[#124a39] text-white px-6 py-2.5 rounded-md text-xs sm:text-sm font-bold transition-colors flex items-center gap-2 cursor-pointer shrink-0"
          >
            <MessageSquare className="w-4 h-4 text-white" />
            <span>تواصل مع مستشار</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
