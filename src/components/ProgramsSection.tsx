import React from 'react';
import { PROGRAMS_DATA } from '../data/basqatData';
import { Program } from '../types';
import { Rocket, Sparkles, CheckCircle2, Clock, Globe, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

interface ProgramsSectionProps {
  onSelectProgram: (program: Program) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectProgram }) => {
  return (
    <section id="programs" className="py-20 sm:py-28 bg-[#F7F5EE] relative border-b border-[#E5E0D2]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#1A634F] mb-3">
            <span>برامج التأسيس والنمو</span>
            <span className="w-8 h-[1.5px] bg-[#1A634F] inline-block" />
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#192A27] mb-4 leading-tight">
            برامج الحاضنة والمسرعة
          </h2>
          <p className="text-[#556965] text-base sm:text-lg leading-relaxed">
            مسارات متخصصة لمساعدة المشاريع في مراحل التأسيس والنمو على تطوير نموذج العمل، تحسين الأداء، والاستعداد للمرحلة القادمة.
          </p>
        </div>

        {/* 2 Programs Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {PROGRAMS_DATA.map((prog) => {
            const isIncubator = prog.id === 'incubator';
            return (
              <div
                key={prog.id}
                id={`program-card-${prog.id}`}
                className={`bg-white rounded-3xl p-8 sm:p-10 border transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between relative group ${
                  isIncubator ? 'border-[#E5E0D2] hover:border-[#1A634F]' : 'border-[#1A634F]/30 hover:border-[#1A634F]'
                }`}
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#F7F5EE] border border-[#E5E0D2] text-[#1A634F] flex items-center justify-center">
                      {isIncubator ? <Sparkles className="w-7 h-7" /> : <Rocket className="w-7 h-7" />}
                    </div>
                    <span className="bg-[#1A634F]/10 text-[#1A634F] text-xs font-bold px-3 py-1.5 rounded-full">
                      {prog.categoryLabel}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-editorial text-3xl font-bold text-[#192A27] mb-2">
                    {prog.title}
                  </h3>
                  <p className="text-sm font-bold text-[#1A634F] mb-4">
                    {prog.subtitle}
                  </p>

                  <p className="text-sm text-[#556965] leading-relaxed mb-6">
                    {prog.shortDescription}
                  </p>

                  {/* Meta Specs */}
                  <div className="flex flex-wrap items-center gap-4 py-3 px-4 bg-[#F7F5EE] rounded-xl text-xs font-semibold text-[#192A27] mb-6">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#1A634F]" />
                      <span>{prog.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Globe className="w-4 h-4 text-[#1A634F]" />
                      <span>{prog.mode}</span>
                    </div>
                  </div>

                  {/* Suitable If List */}
                  <div className="mb-8">
                    <div className="text-xs font-bold text-[#192A27] mb-3">
                      هذا البرنامج مناسب لك إذا:
                    </div>
                    <ul className="space-y-2">
                      {prog.suitableIf.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#556965]">
                          <CheckCircle2 className="w-4 h-4 text-[#1A634F] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-4 border-t border-[#E5E0D2]">
                  <button
                    onClick={() => onSelectProgram(prog)}
                    className="w-full bg-[#1A634F] hover:bg-[#124a39] text-white py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>{prog.ctaText || 'اكتشف البرنامج'}</span>
                    <ArrowLeft className="w-4 h-4 rtl:rotate-0" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
