import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Award,
  Star,
  Calendar,
  Rocket,
  Building,
  Layers,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Activity,
  Pause,
  Play
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroSectionProps {
  onBookConsultation: (subject?: string) => void;
  onExploreServices: () => void;
  onExploreWorkshops?: () => void;
  onExplorePrograms?: () => void;
  onBookSpace?: () => void;
  onSelectIncubator?: () => void;
  onSelectAccelerator?: () => void;
}

interface SlideItem {
  id: string;
  eyebrow: string;
  title: string;
  text1: string;
  text2: string;
  primaryCtaText: string;
  primaryCtaIcon: 'Calendar' | 'Rocket' | 'Building';
  secondaryCtaText: string;
  stats: string[];
  image: string;
  fallbackImage: string;
  topBadge: {
    title: string;
    subtitle: string;
    icon: 'ShieldCheck' | 'Layers' | 'Building';
  };
  bottomBar: {
    title: string;
    value: string;
    icon: 'Award' | 'Activity' | 'Sparkles';
  };
  rating: {
    score: string;
    label: string;
  };
}

const HERO_SLIDES: SlideItem[] = [
  // 1️⃣ Slide 1: الاستشارات
  {
    id: 'consulting-slide',
    eyebrow: '── منظومة باسقات للأعمال',
    title: 'استشارات أعمال تساعدك على اتخاذ القرار بثقة',
    text1: 'شريكك الاستراتيجي في تطوير الأعمال، من تشخيص التحديات وتحديد الأولويات إلى بناء حلول عملية تدعم النمو والاستدامة.',
    text2: 'نقدّم استشارات متخصصة في الإدارة، المالية، التسويق، تطوير الأعمال، والاستثمار، وفق احتياج مشروعك ومرحلته.',
    primaryCtaText: 'احجز استشارتك',
    primaryCtaIcon: 'Calendar',
    secondaryCtaText: 'استكشف خدماتنا',
    stats: [
      '+12 عامًا من الخبرة',
      '+500 مشروع مدعوم',
      '+120 مستشارًا وخبيرًا',
    ],
    image: '/hero.jpeg',
    fallbackImage: '/who us.jpeg',
    topBadge: {
      title: 'منظومة معتمدة',
      subtitle: '120+ مستشارًا وخبيرًا',
      icon: 'ShieldCheck',
    },
    bottomBar: {
      title: 'الخبرة والأثر الراسخ',
      value: '500+ مشروع تم دعمه وتطويره',
      icon: 'Award',
    },
    rating: {
      score: '4.9/5',
      label: 'تقييم العملاء',
    },
  },

  // 2️⃣ Slide 2: الورش والقاعات
  {
    id: 'workshops-spaces-slide',
    eyebrow: '── ورش باسقات وقاعاتها المجهّزة',
    title: 'ورش تدريبية وقاعات مجهّزة تصنع تجربة تستحق الحضور',
    text1: 'من ورش عمل تطبيقية يقودها مدربون معتمدون، إلى قاعات مجهّزة بأحدث تقنيات العرض والصوت — بيئة مصممة لتحويل التدريب إلى نتائج ملموسة.',
    text2: 'احجز قاعتك لفعاليتك القادمة، أو انضم لورشة تدريبية تطوّر مهاراتك ومهارات فريقك.',
    primaryCtaText: 'احجز قاعتك',
    primaryCtaIcon: 'Building',
    secondaryCtaText: 'تصفح الورش القادمة',
    stats: [
      '+40 ورشة وبرنامج تدريبي',
      'قاعات مجهزة بالكامل',
      'مدربون معتمدون',
    ],
    image: '/space.png',
    fallbackImage: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=1200&auto=format&fit=crop&q=80',
    topBadge: {
      title: 'قاعات مجهزة',
      subtitle: 'تقنيات عرض وصوت حديثة',
      icon: 'Building',
    },
    bottomBar: {
      title: 'أثر يُقاس',
      value: '40+ ورشة نُفذت في قاعات باسقات',
      icon: 'Activity',
    },
    rating: {
      score: '4.9/5',
      label: 'تقييم الحضور',
    },
  },

  // 3️⃣ Slide 3: ريادة الأعمال (حاضنة ومسرّعة)
  {
    id: 'entrepreneurship-slide',
    eyebrow: '── حاضنة ومسرّعة باسقات لريادة الأعمال',
    title: 'من الفكرة إلى مشروع جاهز للاستثمار',
    text1: 'نرافقك بمرحلتين: حاضنة تبني أساس مشروعك من الفكرة حتى أول عميل، ومسرّعة توسّع نطاقه وتؤهله لجذب التمويل.',
    text2: 'فريق من الخبراء يوجهك خطوة بخطوة، من التحقق من الفكرة إلى الاستعداد لعرضها على المستثمرين.',
    primaryCtaText: 'التحق بالحاضنة',
    primaryCtaIcon: 'Rocket',
    secondaryCtaText: 'تعرف على مسرّعة النمو',
    stats: [
      '+500 مشروع تم تأسيسه وتسريع نموه',
      '8 أسابيع للحاضنة',
      'جولات استثمارية ناجحة',
    ],
    image: 'space.jpg',
    fallbackImage: '/future.png',
    topBadge: {
      title: 'حاضنة معتمدة',
      subtitle: 'من الفكرة إلى أول عميل',
      icon: 'Layers',
    },
    bottomBar: {
      title: 'أثر مستدام',
      value: '500+ مشروع تم دعمه وتطويره',
      icon: 'Sparkles',
    },
    rating: {
      score: '4.9/5',
      label: 'تقييم رواد الأعمال',
    },
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onBookConsultation,
  onExploreServices,
  onExploreWorkshops,
  onExplorePrograms,
  onBookSpace,
  onSelectIncubator,
  onSelectAccelerator,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState<number>(1);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);

  // Touch swipe support
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 50;

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlideIndex ? 1 : -1);
    setCurrentSlideIndex(index);
  };

  // Autoplay effect
  useEffect(() => {
    if (isAutoPlayPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 7000);

    return () => clearInterval(interval);
  }, [isAutoPlayPaused, handleNext]);

  // Touch handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
    setIsAutoPlayPaused(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) {
      setIsAutoPlayPaused(false);
      return;
    }
    const distance = touchStartX.current - touchEndX.current;
    const isSwipe = Math.abs(distance) > minSwipeDistance;

    if (isSwipe) {
      if (distance > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setIsAutoPlayPaused(false);
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Action dispatcher based on active slide
  const handlePrimaryCta = () => {
    if (currentSlideIndex === 0) {
      onBookConsultation('استشارات الأعمال');
    } else if (currentSlideIndex === 1) {
      if (onBookSpace) {
        onBookSpace();
      } else {
        onBookConsultation('حجز قاعة أو مساحة');
      }
    } else if (currentSlideIndex === 2) {
      if (onSelectIncubator) {
        onSelectIncubator();
      } else if (onExplorePrograms) {
        onExplorePrograms();
      } else {
        onBookConsultation('الانضمام للحاضنة');
      }
    }
  };

  const handleSecondaryCta = () => {
    if (currentSlideIndex === 0) {
      onExploreServices();
    } else if (currentSlideIndex === 1) {
      if (onExploreWorkshops) {
        onExploreWorkshops();
      } else {
        onExploreServices();
      }
    } else if (currentSlideIndex === 2) {
      if (onSelectAccelerator) {
        onSelectAccelerator();
      } else if (onExplorePrograms) {
        onExplorePrograms();
      } else {
        onExploreServices();
      }
    }
  };

  return (
    <section
      id="hero"
      aria-label="القسم الرئيسي - باسقات للأعمال"
      onMouseEnter={() => setIsAutoPlayPaused(true)}
      onMouseLeave={() => setIsAutoPlayPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className="relative bg-[#F7F5EE] overflow-hidden border-b border-[#E5E0D2] min-h-[85vh] lg:min-h-[720px] flex items-center select-none"
    >
      {/* LEFT HALF BACKGROUND IMAGE (Desktop: left half; Mobile: background overlay) */}
      <div className="absolute top-0 left-0 bottom-0 w-full lg:w-1/2 h-full z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id + '-img'}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full h-full relative"
          >
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000 ease-out"
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== currentSlide.fallbackImage) {
                  target.src = currentSlide.fallbackImage;
                }
              }}
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-[#F7F5EE]/94 lg:bg-transparent block lg:hidden" />
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black/40 via-black/15 to-transparent pointer-events-none" />
            <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-28 bg-gradient-to-l from-[#F7F5EE] to-transparent pointer-events-none" />
            <div className="hidden lg:block absolute inset-0 border-r border-[#E5E0D2]/50 pointer-events-none" />

            {/* Floating Top Badge on the image (Desktop) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="hidden lg:flex absolute top-28 left-8 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/40 shadow-xl items-center gap-2.5 text-xs font-bold text-[#192A27]"
            >
              <div className="w-7 h-7 rounded-full bg-[#1A634F]/10 text-[#1A634F] flex items-center justify-center">
                {currentSlide.topBadge.icon === 'ShieldCheck' && <ShieldCheck className="w-4 h-4 text-[#1A634F]" />}
                {currentSlide.topBadge.icon === 'Building' && <Building className="w-4 h-4 text-[#1A634F]" />}
                {currentSlide.topBadge.icon === 'Layers' && <Layers className="w-4 h-4 text-[#1A634F]" />}
              </div>
              <div>
                <div className="text-[10px] text-[#556965] font-normal">{currentSlide.topBadge.title}</div>
                <div className="text-xs font-bold">{currentSlide.topBadge.subtitle}</div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* FLOATING NAVIGATION CONTROLS OVER IMAGE */}
        <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 z-20 flex items-center gap-3">
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-1.5">
            {/* Prev Button (In RTL: Right arrow navigates backward) */}
            <button
              onClick={handlePrev}
              aria-label="الشريحة السابقة"
              className="w-10 h-10 rounded-full bg-black/40 hover:bg-[#1A634F] text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95 hover:border-white/40"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Next Button (In RTL: Left arrow navigates forward) */}
            <button
              onClick={handleNext}
              aria-label="الشريحة التالية"
              className="w-10 h-10 rounded-full bg-black/40 hover:bg-[#1A634F] text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95 hover:border-white/40"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          {/* Slide Indicator & Dots */}
          <div className="flex items-center gap-2 bg-black/35 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full text-white">
            <div className="flex items-center gap-1.5">
              {HERO_SLIDES.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  aria-label={`الانتقال إلى الشريحة ${index + 1}: ${slide.title}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlideIndex === index
                      ? 'w-5 bg-[#c8b6a2]'
                      : 'w-1.5 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
            <span className="text-[11px] font-mono font-bold text-white/90 mr-1">
              0{currentSlideIndex + 1} / 0{HERO_SLIDES.length}
            </span>
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsAutoPlayPaused(!isAutoPlayPaused)}
            aria-label={isAutoPlayPaused ? 'تشغيل التمرير التلقائي' : 'إيقاف التمرير التلقائي مؤقتًا'}
            className="w-8 h-8 rounded-full bg-black/35 hover:bg-black/60 text-white/80 hover:text-white border border-white/15 backdrop-blur-md flex items-center justify-center text-xs transition-colors cursor-pointer"
            title={isAutoPlayPaused ? 'تشغيل التمرير التلقائي' : 'إيقاف مؤقت'}
          >
            {isAutoPlayPaused ? <Play className="w-3.5 h-3.5 ml-0.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>

        </div>
      </div>

      {/* RIGHT HALF CONTENT CONTAINER */}
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 pt-28 pb-14 md:pt-36 md:pb-20 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Right Text Column */}
          <div className="lg:col-span-7 xl:col-span-6 text-right">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, x: direction > 0 ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -20 : 20 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                {/* 1. Top Eyebrow */}
                <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#1A634F] mb-4 bg-white/80 lg:bg-transparent px-3 py-1 lg:px-0 lg:py-0 rounded-full lg:rounded-none w-fit">
                  <span>{currentSlide.eyebrow}</span>
                </div>

                {/* 2. Main Editorial Headline (SEO: H1 for Slide 0, H2 for other slides with identical visual styling) */}
                {currentSlideIndex === 0 ? (
                  <h1 className="font-editorial text-3xl sm:text-4.5xl md:text-5xl lg:text-[3.15rem] font-bold text-[#192A27] leading-[1.25] mb-5 tracking-tight min-h-[4.5rem] sm:min-h-[5.5rem] flex items-center">
                    <span>{currentSlide.title}</span>
                  </h1>
                ) : (
                  <h2 className="font-editorial text-3xl sm:text-4.5xl md:text-5xl lg:text-[3.15rem] font-bold text-[#192A27] leading-[1.25] mb-5 tracking-tight min-h-[4.5rem] sm:min-h-[5.5rem] flex items-center">
                    <span>{currentSlide.title}</span>
                  </h2>
                )}

                {/* 3. Subtitle & Description */}
                <p className="text-[#556965] text-base sm:text-lg leading-relaxed mb-3 max-w-xl font-normal min-h-[3.8rem]">
                  {currentSlide.text1}
                </p>

                <p className="text-[#192A27] text-sm sm:text-base leading-relaxed mb-7 max-w-xl font-medium min-h-[2.8rem]">
                  {currentSlide.text2}
                </p>

                {/* 4. CTA Buttons - Aligned right */}
                <div className="flex flex-wrap items-center justify-start gap-3.5 mb-8">
                  {/* Primary CTA */}
                  <button
                    id={`hero-cta-primary-${currentSlideIndex}`}
                    onClick={handlePrimaryCta}
                    className="bg-[#54421F] hover:bg-[#423418] text-white px-7 py-3.5 rounded-md font-bold text-sm sm:text-base transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center gap-2 active:scale-98"
                  >
                    {currentSlide.primaryCtaIcon === 'Calendar' && <Calendar className="w-4 h-4" />}
                    {currentSlide.primaryCtaIcon === 'Building' && <Building className="w-4 h-4" />}
                    {currentSlide.primaryCtaIcon === 'Rocket' && <Rocket className="w-4 h-4" />}
                    <span>{currentSlide.primaryCtaText}</span>
                    <ArrowLeft className="w-4 h-4 rtl:rotate-0" />
                  </button>

                  {/* Secondary CTA */}
                  <button
                    id={`hero-cta-secondary-${currentSlideIndex}`}
                    onClick={handleSecondaryCta}
                    className="bg-white hover:bg-[#EAE6DB] text-[#192A27] border border-[#D5D0C0] px-6 py-3.5 rounded-md font-bold text-sm sm:text-base transition-all cursor-pointer shadow-xs active:scale-98"
                  >
                    <span>{currentSlide.secondaryCtaText}</span>
                  </button>
                </div>

                {/* 5. Trust Badges / Stats Bar */}
                <div className="pt-5 border-t border-[#E5E0D2] flex flex-wrap items-center justify-start gap-5 sm:gap-6 text-xs sm:text-sm text-[#556965]">
                  {currentSlide.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1A634F] shrink-0" />
                      <span className="font-semibold text-[#192A27]">{stat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Spacer for desktop layout */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6 pointer-events-none" />

        </div>
      </div>
    </section>
  );
};
