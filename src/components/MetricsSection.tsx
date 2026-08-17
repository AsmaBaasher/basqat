import React from 'react';
import { Clock, Users, TrendingUp, Star } from 'lucide-react';
import { motion } from 'motion/react';

export const MetricsSection: React.FC = () => {
  const metrics = [
    {
      id: 'years',
      number: '+12 عامًا',
      label: 'من الخبرة',
      description: 'في استشارات وتمكين الأعمال',
      icon: Clock,
    },
    {
      id: 'projects',
      number: '+500 مشروع',
      label: 'مشروع ريادي',
      description: 'تم دعمه وتطويره',
      icon: TrendingUp,
    },
    {
      id: 'consultants',
      number: '+120 مستشارًا وخبيرًا',
      label: 'خبير ومستشار',
      description: 'في تخصصات الأعمال المختلفة',
      icon: Users,
    },
    {
      id: 'rating',
      number: '4.9 / 5',
      label: 'تقييم العملاء',
      description: 'متوسط تقييم العملاء',
      icon: Star,
    },
  ];

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
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section className="bg-white relative border-b border-[#E5E0D2]">
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-[#EAE8DD]"
          >
            {metrics.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className={`text-center px-4 transition-transform duration-300 hover:scale-[1.02] ${
                    idx > 1 ? 'pt-4 sm:pt-0' : ''
                  }`}
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#1A634F]/10 border border-[#1A634F]/20 flex items-center justify-center text-[#1A634F] mb-3">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#192A27] font-editorial mb-1">
                    {item.number}
                  </div>
                  <p className="text-xs sm:text-sm text-[#556965] font-medium max-w-[200px] mx-auto">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
