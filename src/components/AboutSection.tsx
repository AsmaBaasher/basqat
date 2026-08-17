import React from 'react';
import { ArrowLeft, CheckCircle2, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FFFFFF] relative overflow-hidden border-b border-[#E5E0D2]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Framed Portrait Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl bg-[#EAE6DB] border-4 border-[#F7F5EE]">
              <img
                alt="فريق مستشاري باسقات للأعمال"
                className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-700"
                src="/who us.jpeg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#124a39]/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-6 text-right"
          >
            {/* Top Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#1A634F] mb-4">
              <span>عن باسقات للأعمال</span>
              <span className="w-8 h-[1.5px] bg-[#1A634F] inline-block" />
            </div>

            {/* Main Heading */}
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#192A27] mb-6 leading-tight tracking-tight">
              شريكك في التطوير،
              <br />
              <span className="text-[#1A634F]">من الفكرة إلى النمو</span>
            </h2>

            {/* Descriptive Body Paragraphs */}
            <div className="space-y-4 text-[#556965] text-sm sm:text-base leading-relaxed mb-8 font-normal">
              <p>
                تأسست باسقات للأعمال لتكون شريكًا عمليًا لأصحاب المشاريع والشركات في مختلف مراحلها. نؤمن بأن نجاح المشاريع لا يعتمد على الأفكار وحدها، بل على وضوح القرارات، وجودة التخطيط، والقدرة على مواجهة التحديات في الوقت المناسب.
              </p>
              <p>
                نجمع بين الاستشارات المتخصصة، البرامج التطويرية، الورش المهنية، والمساحات المجهزة، لنقدم بيئة متكاملة تدعم رواد الأعمال وتساعدهم على تحقيق نتائج ملموسة.
              </p>
            </div>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                'استشارات متخصصة وعملية',
                'برامج تأسيس ونمو موجهة',
                'ورش عمل تطبيقية',
                'مساحات مهنية وقاعات مجهزة',
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#192A27]">
                  <CheckCircle2 className="w-4 h-4 text-[#1A634F] shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Action CTA Button */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenContact}
                className="bg-[#54421F] hover:bg-[#423418] text-white px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all shadow-xs hover:shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>احجز استشارتك الآن</span>
                <ArrowLeft className="w-4 h-4 rtl:rotate-0" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
