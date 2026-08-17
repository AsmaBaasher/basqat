import React from 'react';
import { TESTIMONIALS_DATA } from '../data/basqatData';
import { Quote, TrendingUp, Building } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="stories" className="py-20 sm:py-28 bg-white relative border-b border-[#E5E0D2]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#1A634F] mb-3">
            <span>قصص وتجارب النجاح</span>
            <span className="w-8 h-[1.5px] bg-[#1A634F] inline-block" />
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#192A27] mb-4 leading-tight">
            تجارب من مشاريع عملنا معها
          </h2>
          <p className="text-[#556965] text-base sm:text-lg leading-relaxed">
            نماذج لمشاريع استفادت من استشارات وبرامج باسقات للأعمال في تحقيق نتائج ملموسة ونمو مستدام.
          </p>
        </div>

        {/* 3 Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((story) => (
            <div
              key={story.id}
              className="bg-[#F7F5EE] border border-[#E5E0D2] rounded-3xl p-8 flex flex-col justify-between hover:border-[#1A634F] hover:shadow-xl transition-all duration-300 relative group"
            >
              <div>
                {/* Metric Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-1.5 bg-[#1A634F]/10 text-[#1A634F] px-3 py-1.5 rounded-full text-xs font-bold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{story.growthMetric}</span>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white border border-[#E5E0D2] flex items-center justify-center text-[#54421F]">
                    <Quote className="w-4 h-4" />
                  </div>
                </div>

                {/* Quote */}
                <p className="text-[#192A27] text-base sm:text-lg font-bold leading-relaxed mb-6 font-editorial">
                  "{story.quote}"
                </p>

                {/* Sector */}
                <div className="text-xs text-[#556965] mb-6 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-[#1A634F]" />
                  <span>{story.sector}</span>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-5 border-t border-[#E5E0D2] flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white border border-[#E5E0D2] shrink-0">
                  {story.image ? (
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#1A634F]/10 flex items-center justify-center font-bold text-sm text-[#1A634F]">
                      {story.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#192A27]">
                    {story.name}
                  </h4>
                  <p className="text-xs text-[#556965]">
                    {story.role} · <span className="font-semibold text-[#1A634F]">{story.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
