import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { MetricsSection } from '../components/MetricsSection';
import { ServicesSection } from '../components/ServicesSection';
import { WhyBasqatSection } from '../components/WhyBasqatSection';
import { AssessmentSection } from '../components/AssessmentSection';
import { FAQSection } from '../components/FAQSection';
import { Service, Program } from '../types';
import { TESTIMONIALS_DATA, PROGRAMS_DATA } from '../data/basqatData';
import { Quote, TrendingUp, ArrowLeft, Building, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

interface HomePageProps {
  onNavigate: (page: string, params?: Record<string, any>) => void;
  onBookConsultation: (subject?: string) => void;
  onSelectService: (service: Service) => void;
  onSelectProgram: (program: Program) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onBookConsultation,
  onSelectService,
  onSelectProgram,
}) => {
  // One prominent featured testimonial for homepage
  const featuredStory = TESTIMONIALS_DATA[0]; // Noura Al-Qahtani

  const homeFaqs = [
    {
      question: "ما الخدمات التي تقدمها باسقات للأعمال؟",
      answer: "نقدم استشارات أعمال متخصصة في الإدارة، المالية، التسويق والنمو، تطوير الأعمال، الاستثمار والتمويل، إلى جانب البرامج والورش والمساحات والقاعات."
    },
    {
      question: "كيف أعرف نوع الاستشارة المناسبة لمشروعي؟",
      answer: "يمكنك استخدام مقياس جاهزية المشروع والإجابة عن 3 أسئلة قصيرة، أو التواصل معنا مباشرة لمساعدتك في تحديد المجال الأنسب لاحتياجك."
    },
    {
      question: "هل الاستشارات حضورية أم عن بُعد؟",
      answer: "تتوفر الاستشارات بحسب طبيعة الخدمة والمستشار، ويمكن تقديمها حضوريًا أو عن بُعد وفق الخيارات المتاحة عند الحجز."
    }
  ];

  return (
    <div>
      {/* 1. Hero Section Slider (3 slides) */}
      <HeroSection
        onBookConsultation={(subject) => onBookConsultation(subject)}
        onExploreServices={() => onNavigate('/consulting')}
        onExploreWorkshops={() => onNavigate('/workshops')}
        onExplorePrograms={() => onNavigate('/programs')}
        onBookSpace={() => onNavigate('/spaces')}
        onSelectIncubator={() => {
          const incubator = PROGRAMS_DATA.find((p) => p.id === 'incubator');
          if (incubator) onSelectProgram(incubator);
        }}
        onSelectAccelerator={() => {
          const accelerator = PROGRAMS_DATA.find((p) => p.id === 'accelerator');
          if (accelerator) onSelectProgram(accelerator);
        }}
      />

      {/* 2. Trust Bar / Metrics (+12 years / +500 projects / +120 consultants / 4.9 rating) */}
      <MetricsSection />

      {/* 3. 4 Services Ecosystem Overview (Teaser with exploration buttons) */}
      <ServicesSection
        onSelectService={(service) => {
          if (service.id === 'consulting') onNavigate('/consulting');
          else if (service.id === 'programs') onNavigate('/programs');
          else if (service.id === 'workshops') onNavigate('/workshops');
          else if (service.id === 'spaces') onNavigate('/spaces');
          else onSelectService(service);
        }}
        onBookConsultation={() => onBookConsultation()}
        onExplorePrograms={() => onNavigate('/programs')}
        onExploreWorkshops={() => onNavigate('/workshops')}
        onExploreSpaces={() => onNavigate('/spaces')}
      />

      {/* 4. Why Basqat (5 Pillars Summary) */}
      <WhyBasqatSection />

      {/* 5. Featured Single Impactful Testimonial */}
      <section className="py-20 sm:py-24 bg-white relative border-b border-[#E5E0D2]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#1A634F] mb-3">
              <span>قصص الأثر والنمو</span>
              <span className="w-8 h-[1.5px] bg-[#1A634F] inline-block" />
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#192A27]">
              تجارب حقيقية من مشاريع واعدة
            </h2>
          </div>

          <div className="bg-[#F7F5EE] border border-[#E5E0D2] rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-sm hover:border-[#1A634F] transition-all">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Photo & Growth badge */}
              <div className="shrink-0 flex flex-col items-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 bg-white">
                  <img
                    src={featuredStory.image}
                    alt={featuredStory.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="inline-flex items-center gap-1.5 bg-[#1A634F] text-white px-3.5 py-1 rounded-full text-xs font-bold shadow-xs">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-300" />
                  <span>{featuredStory.growthMetric}</span>
                </div>
              </div>

              {/* Quote & Details */}
              <div className="flex-1 text-center md:text-right">
                <div className="w-10 h-10 rounded-full bg-white text-[#54421F] border border-[#E5E0D2] flex items-center justify-center mb-4 mx-auto md:mx-0 shadow-2xs">
                  <Quote className="w-5 h-5" />
                </div>
                <blockquote className="font-editorial text-xl sm:text-2xl font-bold text-[#192A27] mb-4 leading-relaxed">
                  "{featuredStory.quote}"
                </blockquote>
                <p className="text-xs sm:text-sm text-[#556965] mb-6 leading-relaxed">
                  {featuredStory.fullStory}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E5E0D2]">
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-[#192A27]">{featuredStory.name}</h3>
                    <p className="text-xs text-[#556965]">{featuredStory.role} · <span className="font-semibold text-[#1A634F]">{featuredStory.company}</span></p>
                  </div>

                  <button
                    onClick={() => onNavigate('/about')}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1A634F] hover:text-[#54421F] transition-colors cursor-pointer"
                  >
                    <span>استكشف المزيد من قصص النجاح</span>
                    <ArrowLeft className="w-4 h-4 rtl:rotate-0" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* 7. Homepage FAQs (Contextual/Concise) */}
      <FAQSection
        customFaqs={homeFaqs}
        title="الأسئلة الأكثر شيوعاً"
        subtitle="إجابات سريعة وواضحة لمساعدتك على بدء رحلتك مع باسقات"
        badge="الأسئلة الشائعة"
        onOpenContact={() => onBookConsultation()}
      />

      {/* 8. Main CTA Bar */}
      <section className="py-16 bg-[#192A27] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1A634F]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10 text-center">
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            جاهز لاتخاذ قرار أفضل لمشروعك؟
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            احجز استشارتك مع نخبة من المستشارين والخبراء الممارسين، وابدأ بتطوير مشروعك برؤية واضحة وخطوات عملية.
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
              <span>استعرض المستشارين</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
