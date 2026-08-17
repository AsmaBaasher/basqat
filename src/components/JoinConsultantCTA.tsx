import React from 'react';
import { UserPlus } from 'lucide-react';
import { motion } from 'motion/react';

interface JoinConsultantCTAProps {
  onOpenConsultantModal: () => void;
}

export const JoinConsultantCTA: React.FC<JoinConsultantCTAProps> = ({ onOpenConsultantModal }) => {
  return (
    <section id="join-consultant" className="py-20 md:py-28 bg-[#1A634F] text-white relative overflow-hidden border-y border-[#124a39]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Framed Image on One Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-[#124a39] border-4 border-white/20">
              <img
                src="/man2.png"
                alt="انضم إلى نخبة مستشاري باسقات"
                className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Text & CTA on Other Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-right"
          >
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#c8b6a2] mb-4">
              <span>انضمام الكفاءات والخبراء</span>
              <span className="w-8 h-[1.5px] bg-[#c8b6a2] inline-block" />
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5.5xl font-bold text-white mb-6 leading-tight tracking-tight">
              انضم إلى نخبة مستشاري
              <br />
              وشركاء باسقات للأعمال
            </h2>

            <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              شارك خبراتك الميدانية في تمكين جيل جديد من رواد الأعمال، وساهم في تقديم حلول استشارية تدعم استدامة ونمو المشاريع في المنطقة.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                id="cta-join-consultant-btn"
                onClick={onOpenConsultantModal}
                className="bg-[#54421F] hover:bg-[#423418] text-white px-8 py-3.5 rounded-md font-bold text-sm sm:text-base transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 cursor-pointer"
              >
                <span>انضم كمستشار معتمد</span>
                <UserPlus className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};



