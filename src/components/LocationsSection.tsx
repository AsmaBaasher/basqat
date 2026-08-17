import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

interface LocationsSectionProps {
  onOpenContactModal: () => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onOpenContactModal }) => {
  const offices = [
    {
      id: 'riyadh',
      city: 'الرياض',
      title: 'المقر الرئيسي - مركز الأعمال',
      address: 'طريق الملك فهد، حي الصحافة، الرياض، المملكة العربية السعودية',
      phone: '+966 11 234 5678',
      email: 'riyadh@basqat.com',
      hours: 'الأحد - الخميس: 9:00 ص - 6:00 م',
      lat: 24.774265,
      lng: 46.638541,
    },
    {
      id: 'jeddah',
      city: 'جدة',
      title: 'فرع المنطقة الغربية',
      address: 'طريق الملك عبدالعزيز، حي الشاطئ، جدة، المملكة العربية السعودية',
      phone: '+966 12 654 3210',
      email: 'jeddah@basqat.com',
      hours: 'الأحد - الخميس: 9:00 ص - 5:00 م',
      lat: 21.581554,
      lng: 39.123456,
    },
    {
      id: 'khobar',
      city: 'الخبر',
      title: 'فرع المنطقة الشرقية',
      address: 'طريق الأمير تركي، حي الكورنيش، الخبر، المملكة العربية السعودية',
      phone: '+966 13 890 1234',
      email: 'khobar@basqat.com',
      hours: 'الأحد - الخميس: 9:00 ص - 5:00 م',
      lat: 26.288639,
      lng: 50.208447,
    },
  ];

  return (
    <section id="locations" className="py-20 md:py-28 bg-[#FFFFFF] relative border-b border-[#E5E0D2]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#1A634F] mb-4">
            <span>مواقعنا وفروعنا</span>
            <span className="w-8 h-[1.5px] bg-[#1A634F] inline-block" />
          </div>
          
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#192A27] mb-4 leading-tight tracking-tight">
            تفضل بزيارتنا في أي من فروعنا
          </h2>
          <p className="text-[#556965] text-sm sm:text-base leading-relaxed">
            يسعدنا استقبالك في مكاتبنا لخوض تجربة استشارية متخصصة ومباشرة مع خبرائنا في ريادة وتطوير الأعمال.
          </p>
        </motion.div>

        {/* 2-Column Split: Office Cards on Right (in RTL), Interactive Map on Left */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Office Cards List */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            {offices.map((office) => (
              <div
                key={office.id}
                className="bg-[#F7F5EE] rounded-xl p-6 border border-[#E5E0D2] hover:border-[#1A634F] transition-all duration-300 shadow-2xs hover:shadow-md group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#1A634F] text-white text-xs font-bold px-3 py-1 rounded-md">
                        {office.city}
                      </span>
                      <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#192A27]">
                        {office.title}
                      </h3>
                    </div>
                    
                    <a
                      href={`https://maps.google.com/?q=${office.lat},${office.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full border border-[#D5D0C0] flex items-center justify-center text-[#556965] hover:bg-[#1A634F] hover:text-white hover:border-[#1A634F] transition-all"
                      title="فتح على خرائط جوجل"
                    >
                      <Navigation className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-xs sm:text-sm text-[#556965] mb-4 flex items-start gap-2 leading-relaxed">
                    <MapPin className="w-4 h-4 text-[#1A634F] shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#556965] pt-3 border-t border-[#E5E0D2]">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#1A634F]" />
                      <span dir="ltr" className="font-mono">{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#1A634F]" />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E5E0D2] flex justify-end">
                  <button
                    onClick={onOpenContactModal}
                    className="bg-[#1A634F] hover:bg-[#124a39] text-white px-5 py-2 rounded-md text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>تواصل مع الفرع</span>
                    <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-90" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Map Visual (Stylized to match the reference map block) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="w-full h-full min-h-[380px] rounded-2xl overflow-hidden border border-[#E5E0D2] bg-[#EAE6DB] relative shadow-md flex flex-col justify-between">
              
              {/* Map embed iframe for Saudi Arabia */}
              <iframe
                title="خريطة مواقع فروع باسقات للأعمال"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.503764835824!2d46.638541375924714!3d24.774265448559094!2m3!1f0!2f0!3f0!3m2!1i1024!2i788!4f13.1!3m3!1m2!1s0x3e2ee312d8a4f911%3A0x7d0a273b4d4a8e63!2sKing%20Fahd%20Rd%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa"
                className="w-full h-full min-h-[380px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Overlay Badge on Map */}
              <div className="absolute bottom-4 right-4 left-4 sm:left-auto bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#E5E0D2] shadow-xl max-w-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1A634F] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-editorial text-sm font-bold text-[#192A27]">
                      فروعنا تغطي المملكة
                    </h4>
                    <p className="text-xs text-[#556965]">
                      نوفر استشارات وجلسات حضورية وافتراضية لكافة مناطق المملكة.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
