import React from 'react';
import { AboutSection } from '../components/AboutSection';
import { WhyBasqatSection } from '../components/WhyBasqatSection';
import { MetricsSection } from '../components/MetricsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ArrowLeft, Calendar, Users, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutPageProps {
  onNavigate: (page: string, params?: Record<string, any>) => void;
  onBookConsultation: (subject?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onBookConsultation,
}) => {
  return (
    <div>
      {/* 1. About Story, Vision, Mission */}
      <AboutSection />

      {/* 2. Key Metrics & Track Record */}
      <MetricsSection />

      {/* 3. Why Basqat Pillars */}
      <WhyBasqatSection />

      {/* 4. Success Stories & Real Project Results */}
      <TestimonialsSection />

      {/* 5. Bottom Call to Action */}
      <section className="py-16 bg-[#192A27] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1A634F]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10 text-center">
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            انضم إلى قصة نجاح جديدة مع باسقات
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            سواء كنت في مرحلة الفكرة أو تدير مشروعاً قائماً يسعى للتوسع، فريقنا الاستشاري مستعد لتمكينك من تحقيق أهدافك.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
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
              <span>تعرف على خبرائنا</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
