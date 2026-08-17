import React, { useState } from 'react';
import { UserPlus, ShieldCheck, Award, Briefcase, CheckCircle2, ArrowLeft, Send, Users, Sparkles, Clock, Globe } from 'lucide-react';
import { FAQSection } from '../components/FAQSection';
import { motion } from 'motion/react';

interface JoinConsultantPageProps {
  onNavigate: (page: string) => void;
}

export const JoinConsultantPage: React.FC<JoinConsultantPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    specialty: 'الإدارة والتطوير المؤسسي',
    experienceYears: '5-10 سنوات',
    currentRole: '',
    linkedinUrl: '',
    summary: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const consultantFaqs = [
    {
      question: "ما هي المعايير الأساسية لقبول انضمام المستشارين؟",
      answer: "نشترط وجود خبرة عملية لا تقل عن 5 سنوات في مجال التخصص، وسجل إنجاز مثبت في مساعدة المشاريع أو إدارة الشركات، إضافة إلى اجتياز المقابلة المهنية والامتثال لمعايير جودة باسقات."
    },
    {
      question: "هل يتطلب الانضمام لشبكة باسقات التفرغ الكامل؟",
      answer: "لا، يقدم المستشارون جلساتهم بمرونة وفق أوقات فراغهم وجداولهم المتاحة، سواء بالحضور في قاعات باسقات أو عن بُعد."
    },
    {
      question: "كيف يتم تحديد قيمة وأتعاب الجلسات الاستشارية؟",
      answer: "يتم الاتفاق على هيكل الأتعاب بما يتناسب مع درجة المستشار وسنوات خبرته والقطاع المستهدف وفق نموذج عادل وشفاف."
    },
    {
      question: "ما هي الخطوات بعد إرسال طلب الانضمام؟",
      answer: "يقوم فريق مراجعة المستشارين بفحص طلبك وسيرتك الذاتية خلال 3 أيام عمل، ثم يتم التواصل معك لترتيب مقابلة تقييمية وتفعيل ملفك في المنصة."
    }
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#1A634F] mb-3">
            <span>برنامج انضمام الخبراء</span>
            <span className="w-8 h-[1.5px] bg-[#1A634F] inline-block" />
          </div>
          <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#192A27] mb-4 leading-tight">
            انضم إلى شبكة مستشاري باسقات للأعمال
          </h1>
          <p className="text-[#556965] text-base sm:text-lg leading-relaxed">
            إذا كنت تمتلك خبرة استشارية وتطبيقية عميقة في مجالات الأعمال وترغب في تقديم الجلسات والبرامج والمشاركة في تمكين رواد الأعمال والمشاريع، نرحب بانضمامك.
          </p>
        </div>

        {/* 4 Value Pillars for Consultants */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="bg-[#F7F5EE] border border-[#E5E0D2] rounded-3xl p-6 flex flex-col justify-between hover:border-[#1A634F] transition-all shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E0D2] text-[#1A634F] flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="font-editorial text-lg font-bold text-[#192A27] mb-2">
                مشاريع نوعية وجادة
              </h2>
              <p className="text-xs text-[#556965] leading-relaxed">
                الوصول إلى نخبة من رواد الأعمال والشركات الناشئة والمشاريع التي تبحث عن أثر حقيقي ونمو مستدام.
              </p>
            </div>
          </div>

          <div className="bg-[#F7F5EE] border border-[#E5E0D2] rounded-3xl p-6 flex flex-col justify-between hover:border-[#1A634F] transition-all shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E0D2] text-[#1A634F] flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h2 className="font-editorial text-lg font-bold text-[#192A27] mb-2">
                مرونة تامة في الجدول
              </h2>
              <p className="text-xs text-[#556965] leading-relaxed">
                تحكم كامل في أوقات فراغك، مع إمكانية تقديم الجلسات حضورياً في قاعاتنا أو افتراضياً عن بُعد.
              </p>
            </div>
          </div>

          <div className="bg-[#F7F5EE] border border-[#E5E0D2] rounded-3xl p-6 flex flex-col justify-between hover:border-[#1A634F] transition-all shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E0D2] text-[#1A634F] flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="font-editorial text-lg font-bold text-[#192A27] mb-2">
                بنية تحتية وتشغيل متكامل
              </h2>
              <p className="text-xs text-[#556965] leading-relaxed">
                نتولى إدارة الحجوزات، التحصيل المالي، الدعم الفني، وتوفير القاعات لتتفرغ لتقديم خبرتك.
              </p>
            </div>
          </div>

          <div className="bg-[#F7F5EE] border border-[#E5E0D2] rounded-3xl p-6 flex flex-col justify-between hover:border-[#1A634F] transition-all shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E0D2] text-[#1A634F] flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="font-editorial text-lg font-bold text-[#192A27] mb-2">
                مجتمع خبراء رائد
              </h2>
              <p className="text-xs text-[#556965] leading-relaxed">
                تبادل الخبرات وتوسيع شبكة علاقاتك مع أكثر من 120 مستشاراً وخبيراً في مختلف القطاعات.
              </p>
            </div>
          </div>
        </div>

        {/* Application Form + Criteria */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Form */}
          <div className="lg:col-span-8 bg-[#F7F5EE] border border-[#E5E0D2] rounded-3xl p-8 sm:p-10 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#1A634F] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="font-editorial text-2xl font-bold text-[#192A27] mb-2">
                  تم استلام طلب انضمامك بنجاح!
                </h2>
                <p className="text-xs sm:text-sm text-[#556965] max-w-md mx-auto mb-6 leading-relaxed">
                  شكراً لاهتمامك بالانضمام إلى شبكة مستشاري باسقات. سيقوم فريق تقييم المستشارين بمراجعة ملفك وخبراتك والتواصل معك خلال 3 أيام عمل لترتيب الخطوات التالية.
                </p>
                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => onNavigate('/consultants')}
                    className="bg-[#1A634F] hover:bg-[#124a39] text-white px-6 py-2.5 rounded-xl font-bold text-xs cursor-pointer transition-colors"
                  >
                    استعراض دليل المستشارين
                  </button>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ fullName: '', email: '', phone: '', specialty: 'الإدارة والتطوير المؤسسي', experienceYears: '5-10 سنوات', currentRole: '', linkedinUrl: '', summary: '' });
                    }}
                    className="bg-white text-[#192A27] border border-[#E5E0D2] px-6 py-2.5 rounded-xl font-bold text-xs cursor-pointer transition-colors"
                  >
                    تقديم طلب جديد
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="font-editorial text-2xl font-bold text-[#192A27] mb-1">
                    نموذج طلب الانضمام كخبير ومستشار
                  </h2>
                  <p className="text-xs text-[#556965] mb-6">
                    الرجاء ملء البيانات التالية بدقة لنتمكن من دراسة طلبك واعتماده.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#192A27] mb-1.5">الاسم الثلاثي *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="د. خالد بن عبدالله الشمري"
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
                    <label className="block text-xs font-bold text-[#192A27] mb-1.5">البريد الإلكتروني المهني *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="consultant@domain.com"
                      className="w-full bg-white border border-[#E5E0D2] focus:border-[#1A634F] rounded-xl px-4 py-2.5 text-xs text-[#192A27] outline-hidden transition-all text-right"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#192A27] mb-1.5">المسمى المهني الحالي *</label>
                    <input
                      type="text"
                      required
                      value={formData.currentRole}
                      onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
                      placeholder="مستشار تطوير أعمال / مدير تنفيذي"
                      className="w-full bg-white border border-[#E5E0D2] focus:border-[#1A634F] rounded-xl px-4 py-2.5 text-xs text-[#192A27] outline-hidden transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#192A27] mb-1.5">مجال الاستشارة الأساسي *</label>
                    <select
                      value={formData.specialty}
                      onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                      className="w-full bg-white border border-[#E5E0D2] focus:border-[#1A634F] rounded-xl px-4 py-2.5 text-xs text-[#192A27] outline-hidden transition-all cursor-pointer"
                    >
                      <option value="الإدارة والتطوير المؤسسي">الإدارة والتطوير المؤسسي</option>
                      <option value="المالية والمحاسبة">المالية والمحاسبة</option>
                      <option value="التسويق والنمو">التسويق والنمو</option>
                      <option value="تطوير الأعمال والاستراتيجية">تطوير الأعمال والاستراتيجية</option>
                      <option value="الاستثمار والتمويل">الاستثمار والتمويل</option>
                      <option value="التشغيل وتحسين الأداء">التشغيل وتحسين الأداء</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#192A27] mb-1.5">سنوات الخبرة في المجال *</label>
                    <select
                      value={formData.experienceYears}
                      onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                      className="w-full bg-white border border-[#E5E0D2] focus:border-[#1A634F] rounded-xl px-4 py-2.5 text-xs text-[#192A27] outline-hidden transition-all cursor-pointer"
                    >
                      <option value="5-10 سنوات">من 5 إلى 10 سنوات</option>
                      <option value="10-15 سنة">من 10 إلى 15 سنة</option>
                      <option value="أكثر من 15 سنة">أكثر من 15 سنة</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#192A27] mb-1.5">رابط الملف المهني (LinkedIn) أو السيرة الذاتية *</label>
                  <input
                    type="url"
                    required
                    value={formData.linkedinUrl}
                    onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full bg-white border border-[#E5E0D2] focus:border-[#1A634F] rounded-xl px-4 py-2.5 text-xs text-[#192A27] outline-hidden transition-all text-right"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#192A27] mb-1.5">نبذة عن أبرز إنجازاتك وخبراتك الاستشارية *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.summary}
                    onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                    placeholder="اذكر ملخصاً عن الشركات أو المشاريع التي قدمت لها استشارات وأبرز النتائج المحققة..."
                    className="w-full bg-white border border-[#E5E0D2] focus:border-[#1A634F] rounded-xl p-3.5 text-xs text-[#192A27] outline-hidden transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1A634F] hover:bg-[#124a39] text-white py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>إرسال طلب الانضمام</span>
                </button>
              </form>
            )}
          </div>

          {/* Criteria & Standards */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div className="bg-[#192A27] text-white rounded-3xl p-8 shadow-xl relative overflow-hidden flex-1">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#1A634F]/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase mb-3">
                  <ShieldCheck className="w-4 h-4" />
                  <span>معايير وشروط القبول</span>
                </div>
                <h3 className="font-editorial text-xl font-bold text-white mb-6">
                  ماذا نبحث عنه في مستشاري باسقات؟
                </h3>

                <ul className="space-y-4 text-xs text-gray-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>خبرة لا تقل عن 5 سنوات في مجالات الإدارة، المالية، التسويق، أو الاستثمار.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>سجل إنجاز استشاري أو قيادي ملموس في بيئة الأعمال السعودية أو الإقليمية.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>القدرة على تشخيص التحديات وتقديم توصيات تنفيذية قابلة للتطبيق.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>الالتزام بمعايير الخصوصية والسرية وسلوكيات العمل المهنية المعتمدة.</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                  <span className="text-[11px] text-gray-400 block mb-2">لديك استفسار حول معايير الانضمام؟</span>
                  <a
                    href="mailto:consultants@basqat.sa"
                    className="text-xs font-bold text-emerald-300 hover:underline"
                  >
                    consultants@basqat.sa
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Contextual FAQs */}
        <FAQSection
          customFaqs={consultantFaqs}
          title="أسئلة شائعة حول انضمام المستشارين"
          subtitle="معلومات تفصيلية حول معايير الاعتماد وإدارة الجلسات والأتعاب"
          badge="الأسئلة الشائعة للانضمام"
          onOpenContact={() => onNavigate('/contact')}
        />

      </div>
    </div>
  );
};
