import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, Clock, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'استشارة عامة',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: 'استشارة عامة',
          message: '',
        });
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F7F5EE] relative border-b border-[#E5E0D2]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (in RTL): Info & Working Hours */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 text-right"
          >
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#1A634F] mb-4">
              <span>تواصل مباشر</span>
              <span className="w-8 h-[1.5px] bg-[#1A634F] inline-block" />
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#192A27] mb-6 leading-tight tracking-tight">
              أرسل لنا رسالة
              <br />
              وابدأ استشارتك
            </h2>

            <p className="text-[#556965] text-sm sm:text-base leading-relaxed mb-8">
              يسعدنا الترحيب بك والإجابة عن جميع استفساراتك حول برامجنا وخدماتنا الاستشارية. فريقنا جاهز لتقديم التحليل المبدئي وتوجيهك إلى المسار الأنسب.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-[#E5E0D2]">
                <div className="w-10 h-10 rounded-lg bg-[#F7F5EE] text-[#1A634F] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#556965]">الهاتف والواتساب الموحد</div>
                  <div dir="ltr" className="text-sm font-bold text-[#192A27] font-mono">+966 9200 12345</div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-[#E5E0D2]">
                <div className="w-10 h-10 rounded-lg bg-[#F7F5EE] text-[#1A634F] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#556965]">البريد الإلكتروني</div>
                  <div className="text-sm font-bold text-[#192A27]">info@basqat.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-[#E5E0D2]">
                <div className="w-10 h-10 rounded-lg bg-[#F7F5EE] text-[#1A634F] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#556965]">ساعات العمل الرسمية</div>
                  <div className="text-sm font-bold text-[#192A27]">الأحد - الخميس: 9:00 ص - 6:00 م</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (in RTL): The Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-[#E5E0D2] shadow-sm"
          >
            {isSubmitted ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 bg-[#1A634F]/10 text-[#1A634F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-editorial text-2xl font-bold text-[#192A27] mb-2">
                  تم استلام رسالتك بنجاح!
                </h3>
                <p className="text-[#556965] text-sm max-w-md mx-auto leading-relaxed">
                  شكراً لتواصلك مع باسقات للأعمال. سيقوم أحد مستشارينا بالتواصل معك خلال 24 ساعة لمناقشة تفاصيل طلبك.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#192A27] mb-2">
                      الاسم الأول <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="محمد"
                      className="w-full bg-[#F7F5EE] border border-[#E5E0D2] rounded-lg px-4 py-3 text-sm text-[#192A27] focus:outline-none focus:border-[#1A634F] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#192A27] mb-2">
                      اسم العائلة <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="الغامدي"
                      className="w-full bg-[#F7F5EE] border border-[#E5E0D2] rounded-lg px-4 py-3 text-sm text-[#192A27] focus:outline-none focus:border-[#1A634F] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#192A27] mb-2">
                      البريد الإلكتروني <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full bg-[#F7F5EE] border border-[#E5E0D2] rounded-lg px-4 py-3 text-sm text-[#192A27] focus:outline-none focus:border-[#1A634F] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#192A27] mb-2">
                      رقم الجوال <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0501234567"
                      dir="ltr"
                      className="w-full bg-[#F7F5EE] border border-[#E5E0D2] rounded-lg px-4 py-3 text-sm text-[#192A27] focus:outline-none focus:border-[#1A634F] transition-colors text-right"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#192A27] mb-2">
                    المجال المطلوب للاستشارة
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#F7F5EE] border border-[#E5E0D2] rounded-lg px-4 py-3 text-sm text-[#192A27] focus:outline-none focus:border-[#1A634F] transition-colors"
                  >
                    <option value="استشارة عامة">استشارة عامة وتحليل أولي</option>
                    <option value="استشارات الحوكمة والتطوير">استشارات الحوكمة والتطوير المؤسسي</option>
                    <option value="دراسات الجدوى ونموذج العمل">دراسات الجدوى ونماذج العمل</option>
                    <option value="التأهيل الاستثماري">التأهيل الاستثماري وجولات التمويل</option>
                    <option value="برامج التسريع وبناء القدرات">برامج التسريع والتدريب</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#192A27] mb-2">
                    تفاصيل المشروع أو الاستفسار <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="يرجى كتابة نبذة موجزة عن مشروعك أو التحديات التي ترغب في معالجتها..."
                    className="w-full bg-[#F7F5EE] border border-[#E5E0D2] rounded-lg px-4 py-3 text-sm text-[#192A27] focus:outline-none focus:border-[#1A634F] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1A634F] hover:bg-[#124a39] text-white py-3.5 rounded-md font-bold text-sm sm:text-base transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>جاري الإرسال...</span>
                  ) : (
                    <>
                      <span>إرسال الرسالة الآن</span>
                      <Send className="w-4 h-4 rtl:rotate-180" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
import React, { useState } from 'react';
import { EXPERTS_DATA } from '../data/basqatData';
import { ExpertConsultant } from '../types';
import { UserCheck, Award, Tag, Calendar, UserPlus, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ConsultantsSectionProps {
  onBookExpert: (expert: ExpertConsultant) => void;
  onOpenConsultantModal: () => void;
}

export const ConsultantsSection: React.FC<ConsultantsSectionProps> = ({
  onBookExpert,
  onOpenConsultantModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'جميع التخصصات' },
    { key: 'management', label: 'الإدارة والتطوير المؤسسي' },
    { key: 'finance', label: 'المالية والاستثمار' },
    { key: 'marketing', label: 'التسويق والنمو' },
  ];

  const filteredExperts = activeCategory === 'all'
    ? EXPERTS_DATA
    : EXPERTS_DATA.filter((e) => e.category === activeCategory);

  return (
    <section id="consultants" className="py-20 sm:py-28 bg-white relative border-b border-[#E5E0D2]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#1A634F] mb-3">
            <span>فريق الخبراء</span>
            <span className="w-8 h-[1.5px] bg-[#1A634F] inline-block" />
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#192A27] mb-4 leading-tight">
            المستشارون
          </h2>
          <p className="text-[#556965] text-base sm:text-lg leading-relaxed">
            خبرات متخصصة في مختلف مجالات الأعمال. شبكة من المستشارين والخبراء الممارسين لمساعدتك على اتخاذ قرارات أفضل في مشروعك.
          </p>
        </div>

        {/* Categories */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-14">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-[#1A634F] text-white shadow-md'
                  : 'bg-[#F7F5EE] text-[#556965] hover:bg-[#EAE6DB] hover:text-[#192A27]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Consultants Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence mode="popLayout">
            {filteredExperts.map((expert) => (
              <motion.div
                key={expert.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-[#F7F5EE] border border-[#E5E0D2] rounded-3xl p-7 flex flex-col justify-between hover:border-[#1A634F] hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  {/* Avatar & Experience */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white border border-[#E5E0D2] shrink-0 shadow-xs">
                      {expert.image ? (
                        <img
                          src={expert.image}
                          alt={expert.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-bold text-lg text-[#1A634F] bg-[#1A634F]/10">
                          {expert.initials}
                        </div>
                      )}
                    </div>

                    <div>
                      <h3 className="font-editorial text-xl font-bold text-[#192A27] group-hover:text-[#1A634F] transition-colors">
                        {expert.name}
                      </h3>
                      <p className="text-xs font-bold text-[#1A634F] mb-1.5">
                        {expert.title}
                      </p>
                      <div className="inline-flex items-center gap-1 text-[11px] text-[#556965] bg-white px-2 py-0.5 rounded-md border border-[#E5E0D2]">
                        <Award className="w-3 h-3 text-[#54421F]" />
                        <span>{expert.experience}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-xs sm:text-sm text-[#556965] leading-relaxed mb-6 font-normal">
                    {expert.bio}
                  </p>

                  {/* Specialties Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {expert.specialties.map((spec, idx) => (
                      <span
                        key={idx}
                        className="bg-white text-[#192A27] border border-[#E5E0D2] text-[11px] font-semibold px-2.5 py-1 rounded-md"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Rate & CTA */}
                <div className="pt-4 border-t border-[#E5E0D2] flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] text-[#556965] block">قيمة الاستشارة</span>
                    <span className="text-xs sm:text-sm font-black text-[#192A27]">
                      {expert.rate}
                    </span>
                  </div>

                  <button
                    onClick={() => onBookExpert(expert)}
                    className="bg-[#54421F] hover:bg-[#423418] text-white px-4 py-2 rounded-xl font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>احجز استشارة</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Join as Consultant Banner */}
        <div className="bg-[#192A27] text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-right">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase mb-2">
              <UserPlus className="w-4 h-4" />
              <span>انضم إلى شبكة المستشارين</span>
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white mb-2">
              هل تمتلك خبرة استشارية؟
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm max-w-xl">
              إذا كنت تمتلك خبرة عملية في مجالات الأعمال وترغب في الانضمام إلى شبكة مستشاري باسقات، نسعد باستقبال طلبك ومراجعته وفق معاييرنا.
            </p>
          </div>

          <button
            onClick={onOpenConsultantModal}
            className="bg-[#54421F] hover:bg-[#423418] text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-all shrink-0 cursor-pointer shadow-md inline-flex items-center gap-2"
          >
            <span>انضم كمستشار</span>
            <ArrowLeft className="w-4 h-4 rtl:rotate-0" />
          </button>
        </div>

      </div>
    </section>
  );
};

