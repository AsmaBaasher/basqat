import React, { useState } from 'react';
import { BRANCHES_DATA } from '../data/basqatData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, Building2, Calendar } from 'lucide-react';
import { FAQSection } from '../components/FAQSection';
import { motion } from 'motion/react';

interface ContactPageProps {
  onBookConsultation: (subject?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBookConsultation }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'استشارة أعمال',
    branch: 'الرياض',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const contactFaqs = [
    {
      question: "ما هي أوقات العمل الرسمية في فروع باسقات؟",
      answer: "نستقبلكم من الأحد إلى الخميس، من الساعة 9:00 صباحاً حتى 6:00 مساءً في المقر الرئيسي بالرياض، وحتى 5:00 مساءً في فرعي جدة والخبر."
    },
    {
      question: "ما المدة المتوقعة للرد على طلبات التواصل والاستشارة؟",
      answer: "يقوم فريق خدمة المستفيدين بالتواصل معك خلال 24 ساعة عمل من إرسال النموذج لتأكيد التفاصيل ومتابعة طلبك."
    },
    {
      question: "هل يمكنني زيارة المقر دون موعد مسبق؟",
      answer: "نرحب بزيارتكم دائماً، ونفضل حجز موعد مسبق لضمان تفرغ المستشار المختص أو تجهيز القاعة المطلوبة لاحتياجكم."
    }
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#1A634F] mb-3">
            <span>قنوات التواصل المباشر</span>
            <span className="w-8 h-[1.5px] bg-[#1A634F] inline-block" />
          </div>
          <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#192A27] mb-4 leading-tight">
            تواصل مع فريق باسقات للأعمال
          </h1>
          <p className="text-[#556965] text-base sm:text-lg leading-relaxed">
            سواء كان لديك استفسار عن خدماتنا، ترغب في حجز استشارة أو مساحة، أو تحتاج إلى مساعدة في اختيار المسار الأنسب لمشروعك، يسعدنا تواصلك.
          </p>
        </div>

        {/* 2-Column: Form + Direct Contact Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#F7F5EE] border border-[#E5E0D2] rounded-3xl p-8 sm:p-10 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#1A634F] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-editorial text-2xl font-bold text-[#192A27] mb-2">
                  تم استلام رسالتك بنجاح!
                </h3>
                <p className="text-xs sm:text-sm text-[#556965] max-w-md mx-auto mb-6">
                  شكراً لتواصلك مع باسقات للأعمال. سيقوم أحد مستشارينا أو مسؤولي الخدمة بالتواصل معك هاتفياً أو عبر البريد الإلكتروني في أقرب وقت.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', subject: 'استشارة أعمال', branch: 'الرياض', message: '' });
                  }}
                  className="bg-[#1A634F] hover:bg-[#124a39] text-white px-6 py-2.5 rounded-xl font-bold text-xs cursor-pointer transition-colors"
                >
                  إرسال استفسار آخر
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="font-editorial text-2xl font-bold text-[#192A27] mb-2">
                  أرسل لنا استفسارك أو طلبك
                </h2>
                <p className="text-xs text-[#556965] mb-6">
                  املأ البيانات التالية وسيتواصل معك الفريق المختص خلال 24 ساعة.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#192A27] mb-1.5">الاسم الكامل *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="محمد عبدالله"
                      className="w-full bg-white border border-[#E5E0D2] focus:border-[#1A634F] rounded-xl px-4 py-2.5 text-xs text-[#192A27] outline-hidden transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#192A27] mb-1.5">رقم الجوال *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="05XXXXXXXX"
                      className="w-full bg-white border border-[#E5E0D2] focus:border-[#1A634F] rounded-xl px-4 py-2.5 text-xs text-[#192A27] outline-hidden transition-all text-right"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#192A27] mb-1.5">البريد الإلكتروني</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@mail.com"
                      className="w-full bg-white border border-[#E5E0D2] focus:border-[#1A634F] rounded-xl px-4 py-2.5 text-xs text-[#192A27] outline-hidden transition-all text-right"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#192A27] mb-1.5">موضوع الاستفسار *</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white border border-[#E5E0D2] focus:border-[#1A634F] rounded-xl px-4 py-2.5 text-xs text-[#192A27] outline-hidden transition-all cursor-pointer"
                    >
                      <option value="استشارة أعمال">استشارة أعمال</option>
                      <option value="برامج الحاضنة والمسرعة">برامج الحاضنة والمسرعة</option>
                      <option value="الورش والفعاليات المهنية">الورش والفعاليات المهنية</option>
                      <option value="حجز المساحات والقاعات">حجز المساحات والقاعات</option>
                      <option value="الانضمام كمستشار">الانضمام كمستشار</option>
                      <option value="استفسار عام">استفسار عام</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#192A27] mb-1.5">الفرع الأقرب إليك</label>
                  <select
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    className="w-full bg-white border border-[#E5E0D2] focus:border-[#1A634F] rounded-xl px-4 py-2.5 text-xs text-[#192A27] outline-hidden transition-all cursor-pointer"
                  >
                    <option value="الرياض">الرياض - المقر الرئيسي</option>
                    <option value="جدة">جدة - فرع المنطقة الغربية</option>
                    <option value="الخبر">الخبر - فرع المنطقة الشرقية</option>
                    <option value="عن بُعد">عن بُعد (افتراضي)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#192A27] mb-1.5">تفاصيل الاستفسار أو نبذة عن مشروعك *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="اكتب تفاصيل استفسارك أو التحدي الذي يواجه مشروعك..."
                    className="w-full bg-white border border-[#E5E0D2] focus:border-[#1A634F] rounded-xl p-3.5 text-xs text-[#192A27] outline-hidden transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1A634F] hover:bg-[#124a39] text-white py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>إرسال الطلب</span>
                </button>
              </form>
            )}
          </div>

          {/* Direct Details & Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="bg-[#192A27] text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden flex-1">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#1A634F]/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10">
                <span className="text-xs font-bold tracking-wider text-emerald-300 uppercase mb-2 block">
                  معلومات الاتصال
                </span>
                <h3 className="font-editorial text-2xl font-bold text-white mb-6">
                  يسعدنا استقبالكم والإجابة عن استفساراتكم
                </h3>

                <div className="space-y-5 text-xs sm:text-sm text-gray-300">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 text-emerald-400 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[11px]">الهاتف الموحد:</span>
                      <span className="font-bold text-white" dir="ltr">+966 11 234 5678</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 text-emerald-400 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[11px]">البريد الإلكتروني:</span>
                      <span className="font-bold text-white">info@basqat.sa</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 text-emerald-400 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[11px]">ساعات العمل:</span>
                      <span className="font-bold text-white">الأحد – الخميس | 9:00 ص – 6:00 م</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <button
                    onClick={() => onBookConsultation()}
                    className="w-full bg-[#54421F] hover:bg-[#423418] text-white py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>حجز استشارة مباشرة أونلاين</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Branches Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-[#1A634F] uppercase mb-2 block">
              فروع ومقرات باسقات
            </span>
            <h2 className="font-editorial text-3xl font-bold text-[#192A27]">
              تفضل بزيارتنا في فروعنا
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BRANCHES_DATA.map((branch) => (
              <div
                key={branch.id}
                className="bg-[#F7F5EE] border border-[#E5E0D2] rounded-3xl p-7 flex flex-col justify-between hover:border-[#1A634F] hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-editorial text-2xl font-bold text-[#192A27]">{branch.city}</h3>
                    <span className="text-xs font-bold bg-[#1A634F]/10 text-[#1A634F] px-3 py-1 rounded-full">
                      {branch.tag}
                    </span>
                  </div>

                  <div className="space-y-3 text-xs text-[#556965] mb-6">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#1A634F] shrink-0 mt-0.5" />
                      <span>{branch.address}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-[#1A634F] shrink-0" />
                      <span>{branch.hours}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-[#1A634F] shrink-0" />
                      <span dir="ltr" className="font-bold text-[#192A27]">{branch.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contextual FAQs */}
        <FAQSection
          customFaqs={contactFaqs}
          title="أسئلة شائعة حول التواصل والزيارة"
          subtitle="معلومات عن المواعيد، الفروع، وسرعة الاستجابة"
          badge="الأسئلة الشائعة للتواصل"
          onOpenContact={() => onBookConsultation()}
        />

      </div>
    </div>
  );
};
