import React, { useState, useEffect } from 'react';
import { X, Mail, Phone, MapPin, Send, CheckCircle2, Calendar } from 'lucide-react';
import { Button, Input, Select, Textarea, Badge } from '../../design-system';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
  initialNotes?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialSubject = 'احجز استشارتك',
  initialNotes = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: initialSubject,
    message: initialNotes,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        subject: initialSubject || 'احجز استشارتك',
        message: initialNotes || prev.message,
      }));
    }
  }, [isOpen, initialSubject, initialNotes]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#E5E0D2] relative">
        <button
          onClick={handleClose}
          className="absolute top-5 left-5 w-8 h-8 rounded-full bg-[#F7F5EE] hover:bg-[#EAE6DB] text-[#192A27] flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#54421F] text-white flex items-center justify-center shadow-xs shrink-0">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-[#1A634F] uppercase tracking-wider block">
              باسقات للأعمال
            </span>
            <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#192A27]">
              {formData.subject.includes('استشار') ? 'احجز استشارتك' : 'تواصل معنا'}
            </h3>
          </div>
        </div>

        {/* Contact Info Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <div className="p-3 bg-[#F7F5EE] border border-[#E5E0D2] rounded-xl text-center">
            <Mail className="w-4 h-4 text-[#1A634F] mx-auto mb-1" />
            <span className="text-[10px] text-[#556965] block">البريد الإلكتروني</span>
            <span className="text-xs font-bold text-[#192A27]">info@basqat.com</span>
          </div>
          <div className="p-3 bg-[#F7F5EE] border border-[#E5E0D2] rounded-xl text-center">
            <Phone className="w-4 h-4 text-[#1A634F] mx-auto mb-1" />
            <span className="text-[10px] text-[#556965] block">الهاتف الموحد</span>
            <span className="text-xs font-bold text-[#192A27]" dir="ltr">+966 9200 12345</span>
          </div>
          <div className="p-3 bg-[#F7F5EE] border border-[#E5E0D2] rounded-xl text-center">
            <MapPin className="w-4 h-4 text-[#1A634F] mx-auto mb-1" />
            <span className="text-[10px] text-[#556965] block">المقر الرئيسي</span>
            <span className="text-xs font-bold text-[#192A27]">الرياض، السعودية</span>
          </div>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#1A634F]/10 border border-[#1A634F]/20 text-[#1A634F] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9 text-[#1A634F]" />
            </div>
            <h4 className="font-editorial text-2xl font-bold text-[#192A27]">تم استلام طلبك بنجاح!</h4>
            <p className="text-xs sm:text-sm text-[#556965] max-w-sm mx-auto leading-relaxed">
              شكراً لتواصلك مع باسقات للأعمال. سيقوم فريقنا بالتواصل معك لتأكيد الموعد ومناقشة تفاصيل مشروعك.
            </p>
            <Button
              variant="primary"
              size="md"
              onClick={handleClose}
            >
              إغلاق
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="الاسم الكامل"
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="محمد العبدالله"
              />

              <Input
                label="رقم الجوال"
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
                label="البريد الإلكتروني"
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@example.com"
              />

              <Select
                label="نوع الطلب"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                options={[
                  { value: 'احجز استشارتك', label: 'حجز استشارة أعمال' },
                  { value: 'الإدارة والتطوير المؤسسي', label: 'استشارة الإدارة والتطوير المؤسسي' },
                  { value: 'المالية والمحاسبة', label: 'استشارة المالية والمحاسبة' },
                  { value: 'التسويق والنمو', label: 'استشارة التسويق والنمو' },
                  { value: 'تطوير الأعمال والاستراتيجية', label: 'استشارة تطوير الأعمال والاستراتيجية' },
                  { value: 'الاستثمار والتمويل', label: 'استشارة الاستثمار والتمويل' },
                  { value: 'التشغيل وتحسين الأداء', label: 'استشارة التشغيل وتحسين الأداء' },
                  { value: 'برنامج الحاضنة', label: 'برنامج تأسيس المشاريع (الحاضنة)' },
                  { value: 'برنامج المسرعة', label: 'برنامج النمو المتسارع (المسرعة)' },
                  { value: 'حجز مساحة أو قاعة', label: 'حجز مساحات وقاعات' },
                  { value: 'التسجيل في ورشة عمل', label: 'التسجيل في ورشة عمل' },
                  { value: 'استفسار عام', label: 'استفسار عام' },
                ]}
              />
            </div>

            <Textarea
              label="نبذة عن المشروع أو التحدي"
              required
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="شاركنا طبيعة مشروعك والتحدي الذي ترغب في معالجته أو نوع الدعم المطلوب..."
            />

            <Button
              type="submit"
              variant="gold"
              size="lg"
              isFullWidth
              rightIcon={<Send className="w-4 h-4 rtl:rotate-180" />}
            >
              إرسال الطلب الآن
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};
