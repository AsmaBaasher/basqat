import React from 'react';
import { SERVICES_DATA } from '../data/basqatData';
import { Service } from '../types';
import { Users, Rocket, GraduationCap, Building, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesSectionProps {
  onSelectService: (service: Service) => void;
  onBookConsultation: () => void;
  onExplorePrograms: () => void;
  onExploreWorkshops: () => void;
  onExploreSpaces: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onBookConsultation,
  onExplorePrograms,
  onExploreWorkshops,
  onExploreSpaces,
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'consulting':
        return Users;
      case 'programs':
        return Rocket;
      case 'workshops':
        return GraduationCap;
      case 'spaces':
      default:
        return Building;
    }
  };

  const handleCardAction = (service: Service) => {
    if (service.id === 'consulting') {
      onBookConsultation();
    } else if (service.id === 'programs') {
      onExplorePrograms();
    } else if (service.id === 'workshops') {
      onExploreWorkshops();
    } else if (service.id === 'spaces') {
      onExploreSpaces();
    } else {
      onSelectService(service);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="consulting" className="py-20 sm:py-24 bg-[#F7F5EE] relative border-b border-[#E5E0D2]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#1A634F] mb-3">
            <span>منظومة باسقات للأعمال</span>
            <span className="w-8 h-[1.5px] bg-[#1A634F] inline-block" />
          </div>
          
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#192A27] mb-4 leading-tight">
            حلول متخصصة تناسب احتياج مشروعك
          </h2>
          <p className="text-[#556965] text-base sm:text-lg leading-relaxed">
            كل مشروع يمر بتحديات مختلفة. لذلك نوفر لك مجموعة من الخدمات التي تساعدك على الوصول إلى الخبرة والمسار المناسبين في الوقت المناسب.
          </p>
        </motion.div>

        {/* 4 Ecosystem Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {SERVICES_DATA.map((service) => {
            const Icon = getIcon(service.id);
            const isHighlighted = service.isHighlighted;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                id={`ecosystem-card-${service.id}`}
                className={`rounded-2xl p-7 transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between relative group border ${
                  isHighlighted
                    ? 'bg-[#1A634F] text-white border-transparent'
                    : 'bg-white text-[#192A27] border-[#E5E0D2] hover:border-[#1A634F]'
                }`}
              >
                <div>
                  {/* Top Bar: Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-xs transition-transform group-hover:scale-105 ${
                        isHighlighted
                          ? 'bg-white/15 text-white'
                          : 'bg-[#F7F5EE] text-[#1A634F] border border-[#E5E0D2]'
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    {isHighlighted && (
                      <span className="bg-[#54421F] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                        الخدمة الأساسية
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    className={`font-editorial text-2xl font-bold mb-2 transition-colors ${
                      isHighlighted ? 'text-white' : 'text-[#192A27]'
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-xs font-bold mb-3 ${
                      isHighlighted ? 'text-emerald-200' : 'text-[#1A634F]'
                    }`}
                  >
                    {service.subtitle}
                  </p>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 font-normal ${
                      isHighlighted ? 'text-emerald-50' : 'text-[#556965]'
                    }`}
                  >
                    {service.summary}
                  </p>

                  {/* Bullet points if any */}
                  {service.features && service.features.length > 0 && (
                    <div className="mb-6 space-y-2 pt-4 border-t border-black/5 dark:border-white/10">
                      <div className={`text-xs font-bold ${isHighlighted ? 'text-white' : 'text-[#192A27]'}`}>
                        {service.id === 'consulting' ? 'تشمل الاستشارات:' : 'المميزات والمسارات:'}
                      </div>
                      <ul className="space-y-1.5">
                        {service.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs">
                            <CheckCircle2
                              className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                                isHighlighted ? 'text-emerald-300' : 'text-[#1A634F]'
                              }`}
                            />
                            <span className={isHighlighted ? 'text-emerald-50' : 'text-[#556965]'}>
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-4 mt-auto">
                  <button
                    onClick={() => handleCardAction(service)}
                    className={`w-full py-3 rounded-lg font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                      isHighlighted
                        ? 'bg-[#54421F] hover:bg-[#423418] text-white'
                        : 'bg-[#1A634F] hover:bg-[#124a39] text-white'
                    }`}
                  >
                    <span>{service.ctaText}</span>
                    <ArrowLeft className="w-4 h-4 rtl:rotate-0 transition-transform group-hover:-translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
