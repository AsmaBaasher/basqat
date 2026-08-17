import React, { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS_DATA } from '../data/basqatData';
import { Testimonial } from '../types';
import { ChevronRight, ChevronLeft, TrendingUp, Pause, Play, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SuccessStoriesSectionProps {
  onSelectStory?: (story: Testimonial) => void;
}

export const SuccessStoriesSection: React.FC<SuccessStoriesSectionProps> = ({ onSelectStory }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [selectedStory, setSelectedStory] = useState<Testimonial | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const stories = TESTIMONIALS_DATA;
  const total = stories.length;

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying || isHovered || total <= 1) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4500);

    return () => clearInterval(timer);
  }, [isAutoPlaying, isHovered, total]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Touch handlers for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swiped left (in RTL: next comment)
        handleNext();
      } else {
        // Swiped right (in RTL: prev comment)
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  // Get 3 visible items for desktop sliding view
  const getVisibleStories = () => {
    if (total <= 3) return stories;
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(stories[(currentIndex + i) % total]);
    }
    return items;
  };

  const visibleStories = getVisibleStories();
  const currentMobileStory = stories[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? -40 : 40,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.35, ease: 'easeOut' },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
      scale: 0.96,
      transition: { duration: 0.25, ease: 'easeIn' },
    }),
  };

  return (
    <section
      id="stories"
      className="py-20 sm:py-24 bg-[#F8F7F0] relative overflow-hidden border-t border-[#EAE8DD]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative background glows */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-[#c6b59f]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-24 w-96 h-96 bg-[#1A634F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header with Navigation Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-16 gap-6"
        >
          <div className="text-center md:text-right">
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#1A634F] mb-3">
              <span>قصص نجاح وشراكات مثمرة</span>
              <span className="w-8 h-[1.5px] bg-[#1A634F] inline-block" />
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#192A27] mt-2">
              مشاريع كبرت معنا
            </h2>
            <p className="text-[#556965] text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
              نماذج حية من مشاريع ورواد أعمال ساهمت برامجنا واستشاراتنا في تسريع وتيرة نموهم.
            </p>
          </div>

          {/* Desktop Carousel Arrows & Play/Pause Button */}
          <div className="hidden md:flex items-center justify-end gap-3 shrink-0">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              aria-label={isAutoPlaying ? "إيقاف التحريك التلقائي" : "تشغيل التحريك التلقائي"}
              title={isAutoPlaying ? "إيقاف التحريك التلقائي" : "تشغيل التحريك التلقائي"}
              className="w-10 h-10 rounded-full bg-white hover:bg-[#EAE8DD] border border-[#EAE8DD] text-[#1A634F] flex items-center justify-center shadow-2xs transition-all cursor-pointer"
            >
              {isAutoPlaying ? (
                <Pause className="w-4 h-4 text-[#556965]" />
              ) : (
                <Play className="w-4 h-4 text-[#1A634F] fill-[#1A634F]" />
              )}
            </button>

            <button
              onClick={handlePrev}
              aria-label="القصة السابقة"
              className="w-11 h-11 rounded-full bg-white hover:bg-[#1A634F] hover:text-white border border-[#EAE8DD] text-[#1A634F] flex items-center justify-center shadow-2xs transition-all cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-5 h-5 rtl:rotate-0" />
            </button>

            <button
              onClick={handleNext}
              aria-label="القصة التالية"
              className="w-11 h-11 rounded-full bg-white hover:bg-[#1A634F] hover:text-white border border-[#EAE8DD] text-[#1A634F] flex items-center justify-center shadow-2xs transition-all cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-5 h-5 rtl:rotate-0" />
            </button>
          </div>
        </motion.div>

        {/* MOBILE VIEW: Single Comment with Right & Left Navigation Buttons */}
        <div className="block md:hidden relative">
          <div
            className="relative px-2"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`mobile-${currentMobileStory.id}-${currentIndex}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                onClick={() => {
                  setSelectedStory(currentMobileStory);
                  if (onSelectStory) onSelectStory(currentMobileStory);
                }}
                id={`mobile-testimonial-card-${currentMobileStory.id}`}
                className="bg-white border border-[#EAE8DD] rounded-2xl p-6 shadow-md relative flex flex-col justify-between group cursor-pointer"
              >
                {/* Decorative Quote Icon */}
                <div className="absolute -top-3 right-5 text-5xl text-[#EAE8DD] font-serif leading-none select-none pointer-events-none">
                  &ldquo;
                </div>

                <div>
                  {/* Growth Metric Pill & Sector */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    {currentMobileStory.growthMetric && (
                      <div className="inline-flex items-center gap-1.5 bg-[#F4ECE1] text-[#1A634F] text-[11px] font-bold px-3 py-1 rounded-full border border-[#c6b59f]/40">
                        <TrendingUp className="w-3.5 h-3.5 text-[#1A634F] shrink-0" />
                        <span>{currentMobileStory.growthMetric}</span>
                      </div>
                    )}
                    <span className="text-[11px] text-[#4F635F] font-bold">
                      قطاع {currentMobileStory.sector}
                    </span>
                  </div>

                  {/* Quote Text */}
                  <p className="text-[#334642] leading-relaxed text-sm sm:text-base mb-6 relative z-10 font-medium">
                    &ldquo;{currentMobileStory.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between border-t border-[#F0EFE6] pt-4 mt-auto">
                  <div className="flex items-center gap-3">
                    <img
                      alt={currentMobileStory.name}
                      className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover object-center ring-2 ring-[#c6b59f]/60 shrink-0"
                      src={currentMobileStory.image}
                      onError={(e) => {
                        e.currentTarget.src = '/image man .png';
                      }}
                    />
                    <div>
                      <h4 className="font-bold text-sm text-[#192A27] leading-snug">
                        {currentMobileStory.name}
                      </h4>
                      <p className="text-[11px] text-[#6B7E79]">{currentMobileStory.role}</p>
                      <p className="text-[11px] text-[#1A634F] font-bold">{currentMobileStory.company}</p>
                    </div>
                  </div>

                  <span className="text-[11px] font-bold text-[#1A634F] bg-[#F4ECE1] px-2.5 py-1 rounded-lg">
                    عرض التفاصيل
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Right & Left Navigation Buttons Bar */}
          <div className="flex items-center justify-between gap-3 mt-5 px-2">
            {/* Move to Previous / Right Button */}
            <button
              onClick={handlePrev}
              aria-label="التعليق السابق"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-[#1A634F] hover:text-white border border-[#EAE8DD] text-[#1A634F] font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-4 h-4 rtl:rotate-0" />
              <span>السابق</span>
            </button>

            {/* Current Counter & Play/Pause */}
            <div className="flex items-center gap-2 shrink-0 px-2 py-2 bg-white rounded-xl border border-[#EAE8DD]">
              <span className="text-xs font-extrabold text-[#1A634F] min-w-[36px] text-center" dir="ltr">
                {currentIndex + 1} / {total}
              </span>
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                aria-label={isAutoPlaying ? "إيقاف التمرير التلقائي" : "تشغيل التمرير التلقائي"}
                className="w-7 h-7 rounded-lg bg-[#F8F7F0] text-[#1A634F] flex items-center justify-center cursor-pointer"
              >
                {isAutoPlaying ? (
                  <Pause className="w-3.5 h-3.5 text-[#556965]" />
                ) : (
                  <Play className="w-3.5 h-3.5 text-[#1A634F] fill-[#1A634F]" />
                )}
              </button>
            </div>

            {/* Move to Next / Left Button */}
            <button
              onClick={handleNext}
              aria-label="التعليق التالي"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-[#1A634F] hover:text-white border border-[#EAE8DD] text-[#1A634F] font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer active:scale-95"
            >
              <span>التالي</span>
              <ChevronLeft className="w-4 h-4 rtl:rotate-0" />
            </button>
          </div>
        </div>

        {/* DESKTOP VIEW: 3-column Grid Moving Testimonials Carousel */}
        <div
          className="hidden md:block relative"
        >
          <div className="grid grid-cols-3 gap-6 lg:gap-8 items-stretch">
            <AnimatePresence mode="popLayout">
              {visibleStories.map((item, idx) => (
                <motion.div
                  key={`${item.id}-${currentIndex}-${idx}`}
                  initial={{ opacity: 0, x: 20, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  onClick={() => {
                    setSelectedStory(item);
                    if (onSelectStory) onSelectStory(item);
                  }}
                  id={`testimonial-card-${item.id}`}
                  className="bg-white border border-[#EAE8DD] rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group cursor-pointer hover:-translate-y-1.5"
                >
                  {/* Decorative Big Quote Icon */}
                  <div className="absolute -top-3 right-6 text-6xl text-[#EAE8DD] font-serif leading-none select-none pointer-events-none group-hover:text-[#c6b59f]/60 transition-colors">
                    &ldquo;
                  </div>

                  <div>
                    {/* Growth Metric Pill */}
                    {item.growthMetric && (
                      <div className="inline-flex items-center gap-1.5 bg-[#F4ECE1] text-[#1A634F] text-[11px] sm:text-xs font-bold px-3.5 py-1 rounded-full mb-4 border border-[#c6b59f]/40 shadow-2xs">
                        <TrendingUp className="w-3.5 h-3.5 text-[#1A634F] shrink-0" />
                        <span>{item.growthMetric}</span>
                      </div>
                    )}

                    {/* Sector Badge */}
                    <span className="block text-[11px] text-[#4F635F] font-bold mb-2">
                      قطاع {item.sector}
                    </span>

                    {/* Quote Text */}
                    <p className="text-[#556965] leading-relaxed text-sm sm:text-base mb-6 relative z-10">
                      {item.quote}
                    </p>
                  </div>

                  {/* Author / Founder Info */}
                  <div className="flex items-center justify-between border-t border-[#F0EFE6] pt-5 mt-auto">
                    <div className="flex items-center gap-3">
                      <img
                        alt={item.name}
                        className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover object-center ring-2 ring-[#c6b59f]/60 shrink-0"
                        src={item.image}
                        onError={(e) => {
                          e.currentTarget.src = '/image man .png';
                        }}
                      />
                      <div>
                        <h4 className="font-bold text-sm sm:text-base text-[#192A27] group-hover:text-[#1A634F] transition-colors leading-snug">
                          {item.name}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-[#6B7E79]">{item.role}</p>
                        <p className="text-[11px] text-[#1A634F] font-semibold">{item.company}</p>
                      </div>
                    </div>

                    <span className="text-[11px] font-bold text-[#1A634F] group-hover:translate-x-[-4px] transition-transform hidden sm:inline-block">
                      تفاصيل القصة ←
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Indicators / Dots */}
        <div className="flex justify-center items-center gap-2 mt-8 sm:mt-10">
          {stories.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              aria-label={`الانتقال إلى القصة ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === i
                  ? 'w-8 bg-[#1A634F]'
                  : 'w-2.5 bg-[#D5D2C4] hover:bg-[#BDB9A6]'
              }`}
            />
          ))}
        </div>

        {/* Detailed Story Modal */}
        {selectedStory && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#EAE8DD] relative">
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 left-4 w-8 h-8 rounded-full bg-[#F8F7F0] hover:bg-[#EAE8DD] text-[#1A634F] flex items-center justify-center text-sm font-bold cursor-pointer transition-colors"
                aria-label="إغلاق"
              >
                ✕
              </button>

              <div className="flex items-center gap-4 mb-6">
                <img
                  alt={selectedStory.name}
                  className="w-16 h-16 rounded-full border-2 border-[#c6b59f] object-cover shrink-0 shadow-md"
                  src={selectedStory.image}
                  onError={(e) => {
                    e.currentTarget.src = '/image man .png';
                  }}
                />
                <div>
                  <h3 className="text-xl font-bold text-[#192A27]">{selectedStory.name}</h3>
                  <p className="text-xs text-[#6B7E79]">{selectedStory.role} • {selectedStory.company}</p>
                  <span className="inline-block mt-1 bg-[#F4ECE1] text-[#1A634F] text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-[#c6b59f]/40">
                    قطاع {selectedStory.sector}
                  </span>
                </div>
              </div>

              <div className="bg-[#F8F7F0] p-4 rounded-2xl mb-6 border border-[#EAE8DD]">
                <span className="text-xs font-bold text-[#192A27] block mb-1">الأثر والنتيجة المحققة:</span>
                <span className="text-base font-extrabold text-[#1A634F]">{selectedStory.growthMetric}</span>
              </div>

              <div className="space-y-3 text-sm text-[#556965] leading-relaxed mb-6">
                <p className="font-semibold text-[#192A27]">&ldquo;{selectedStory.quote}&rdquo;</p>
                {selectedStory.fullStory && (
                  <p className="text-[#556965]">{selectedStory.fullStory}</p>
                )}
              </div>

              <button
                onClick={() => setSelectedStory(null)}
                className="w-full bg-[#1A634F] hover:bg-[#124a39] text-white py-3.5 rounded-xl font-bold text-sm transition-colors cursor-pointer"
              >
                إغلاق
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};


