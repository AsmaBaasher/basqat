import React, { useState } from 'react';
import { X, UserPlus, CheckCircle2, Upload, Send } from 'lucide-react';
import { Button, Input, Select, Textarea, Badge } from '../../design-system';

interface ConsultantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultantModal: React.FC<ConsultantModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: 'الرياض',
    specialty: 'التخطيط الاستراتيجي وتطوير الأعمال',
    yearsOfExperience: '+7 سنوات',
    linkedinUrl: '',
    bio: '',
    availableHours: '5-10 ساعات أسبوعياً',
  });
  const [cvUploaded, setCvUploaded] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const specialties = [
    { value: 'التخطيط الاستراتيجي وتطوير الأعمال', label: 'التخطيط الاستراتيجي وتطوير الأعمال' },
    { value: 'النمذجة المالية ودراسات الجدوى', label: 'النمذجة المالية ودراسات الجدوى' },
    { value: 'التسويق الرقمي وقرصنة النمو', label: 'التسويق الرقمي وقرصنة النمو' },
    { value: 'العمليات التشغيلية وسلاسل الإمداد', label: 'العمليات التشغيلية وسلاسل الإمداد' },
    { value: 'استشارات الاستثمار الجريء والتمويل', label: 'استشارات الاستثمار الجريء والتمويل' },
    { value: 'التحول الرقمي والذكاء الاصطناعي', label: 'التحول الرقمي والذكاء الاصطناعي' },
    { value: 'الحوكمة والأنظمة القانونية للشركات', label: 'الحوكمة والأنظمة القانونية للشركات' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setStep(1);
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#E5E0D2] relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 left-5 w-8 h-8 rounded-full bg-[#F7F5EE] hover:bg-[#EAE6DB] text-[#192A27] flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#1A634F] text-white flex items-center justify-center shadow-xs shrink-0">
                <UserPlus className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#1A634F] uppercase tracking-wider block">
                  شبكة خبراء باسقات
                </span>
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#192A27]">
                  انضم كمستشار معتمد
                </h3>
              </div>
            </div>

            {/* Stepper indicator */}
            <div className="flex items-center justify-between mb-8 px-2 text-xs font-bold text-[#556965]">
              <div className={`flex items-center gap-1.5 ${step >= 1 ? 'text-[#1A634F]' : ''}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? 'bg-[#1A634F] text-white' : 'bg-[#E5E0D2]'}`}>1</span>
                <span>البيانات الأساسية</span>
              </div>
              <div className="h-0.5 bg-[#E5E0D2] flex-1 mx-2" />
              <div className={`flex items-center gap-1.5 ${step >= 2 ? 'text-[#1A634F]' : ''}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step >= 2 ? 'bg-[#1A634F] text-white' : 'bg-[#E5E0D2]'}`}>2</span>
                <span>التخصص والخبرة</span>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-4 animate-fade-in">
                  <Input
                    label="الاسم الثلاثي"
                    required
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="الاسم الكامل"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="البريد الإلكتروني المهني"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="consultant@domain.com"
                    />
                    <Input
                      label="رقم الهاتف"
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="05XXXXXXXX"
                      dir="ltr"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="المدينة / الدولة"
                      required
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="الرياض، المملكة العربية السعودية"
                    />
                    <Input
                      label="رابط لينكد إن (LinkedIn)"
                      required
                      type="url"
                      value={formData.linkedinUrl}
                      onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                      placeholder="https://linkedin.com/in/username"
                      dir="ltr"
                    />
                  </div>

                  <Button
                    type="button"
                    variant="primary"
                    size="lg"
                    isFullWidth
                    onClick={() => {
                      if (formData.fullName && formData.email && formData.phone) {
                        setStep(2);
                      }
                    }}
                    className="mt-4"
                  >
                    الانتقال لتفاصيل الخبرة
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-fade-in">
                  <Select
                    label="المجال الاستشاري الأساسي"
                    required
                    value={formData.specialty}
                    onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                    options={specialties}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Select
                      label="سنوات الخبرة العملية"
                      required
                      value={formData.yearsOfExperience}
                      onChange={(e) => setFormData({ ...formData, yearsOfExperience: e.target.value })}
                      options={[
                        { value: '3-5 سنوات', label: '3 - 5 سنوات' },
                        { value: '5-8 سنوات', label: '5 - 8 سنوات' },
                        { value: '+8 سنوات', label: '+8 سنوات (خبير أول)' },
                        { value: '+12 سنة', label: '+12 سنة (مستشار تنفيذي)' },
                      ]}
                    />
                    <Select
                      label="الساعات المتاحة أسبوعياً"
                      required
                      value={formData.availableHours}
                      onChange={(e) => setFormData({ ...formData, availableHours: e.target.value })}
                      options={[
                        { value: '2-4 ساعات', label: '2 - 4 ساعات أسبوعياً' },
                        { value: '5-10 ساعات', label: '5 - 10 ساعات أسبوعياً' },
                        { value: '+10 ساعات', label: '+10 ساعات أسبوعياً' },
                      ]}
                    />
                  </div>

                  {/* CV Upload Box */}
                  <div>
                    <label className="block text-xs font-bold text-[#192A27] mb-1">السيرة الذاتية (CV / Portfolio)</label>
                    <div
                      onClick={() => setCvUploaded(!cvUploaded)}
                      className={`border-2 border-dashed rounded-2xl p-4 text-center cursor-pointer transition-all ${
                        cvUploaded
                          ? 'border-[#1A634F] bg-[#1A634F]/5'
                          : 'border-[#E5E0D2] hover:border-[#1A634F] bg-[#F7F5EE]'
                      }`}
                    >
                      {cvUploaded ? (
                        <div className="flex items-center justify-center gap-2 text-[#1A634F] text-xs font-bold">
                          <CheckCircle2 className="w-5 h-5" />
                          <span>تم إرفاق السيرة الذاتية: Consultant_CV.pdf</span>
                        </div>
                      ) : (
                        <div className="space-y-1">
                          <Upload className="w-6 h-6 text-[#556965] mx-auto" />
                          <span className="block text-xs font-bold text-[#192A27]">
                            اضغط لإرفاق ملف السيرة الذاتية
                          </span>
                          <span className="text-[10px] text-[#556965]">PDF, DOCX حتى 10MB</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <Textarea
                    label="نبذة عن أبرز إنجازاتك والمشاريع التي أرشدتها"
                    rows={3}
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    placeholder="اذكر بإيجاز خبرتك في تمكين الشركات الناشئة..."
                  />

                  <div className="flex items-center gap-3 pt-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="md"
                      onClick={() => setStep(1)}
                      className="w-1/3"
                    >
                      السابق
                    </Button>
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      isFullWidth
                      className="w-2/3"
                      rightIcon={<Send className="w-4 h-4 rtl:rotate-180" />}
                    >
                      إرسال طلب الانضمام
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>
        ) : (
          /* Confirmation View */
          <div className="py-8 text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#1A634F]/10 border border-[#1A634F]/20 text-[#1A634F] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h4 className="font-editorial text-2xl font-bold text-[#192A27]">تم استلام طلبك بنجاح!</h4>
            <p className="text-xs sm:text-sm text-[#556965] max-w-md mx-auto leading-relaxed">
              شكراً لرغبتك في الانضمام إلى شبكة مستشاري باسقات. سيقوم فريق استقطاب الكفاءات بمراجعة ملفك والتواصل معك خلال 48 ساعة عبر البريد الإلكتروني لتنسيق المقابلة الاستطلاعية.
            </p>
            <Button
              variant="primary"
              size="md"
              onClick={handleClose}
            >
              إغلاق
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
