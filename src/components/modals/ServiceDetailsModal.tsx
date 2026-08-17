import React, { useState } from 'react';
import { Service } from '../../types';
import { X, CheckCircle2, Send, Calendar, Clock, Sparkles, MessageCircle } from 'lucide-react';

interface ServiceDetailsModalProps {
  service: Service | null;
  onClose: () => void;
  onRequestSuccess?: (serviceTitle: string) => void;
}

export const ServiceDetailsModal: React.FC<ServiceDetailsModalProps> = ({
  service,
  onClose,
  onRequestSuccess,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    companyName: '',
    requirements: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!service) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (onRequestSuccess) onRequestSuccess(service.title);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#EAE8DD]">
          <div className="w-14 h-14 rounded-2xl bg-[#1A634F] text-[#c6b59f] flex items-center justify-center font-bold text-xl shrink-0 border border-[#c6b59f]/40">
            <Sparkles className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-bold text-[#4F635F] uppercase tracking-wider block">
              حلول باسقات المتكاملة
            </span>
            <h3 className="text-2xl font-extrabold text-[#192A27]">خدمة {service.title}</h3>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-sm text-[#192A27] mb-2">وصف الخدمة والمنهجية</h4>
            <p className="text-[#556965] text-xs sm:text-sm leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Features */}
          <div className="bg-[#F8F7F0] border border-[#EAE8DD] p-5 rounded-2xl">
            <h4 className="font-bold text-sm text-[#192A27] mb-3">ما الذي نغطيه في هذه الخدمة؟</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#556965]">
              {service.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1A634F] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="font-bold text-sm text-[#192A27] mb-3">المخرجات والتسليمات الملموسة</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {service.deliverables.map((deliv, idx) => (
                <div key={idx} className="p-3.5 bg-[#F4ECE1] border border-[#c6b59f]/60 rounded-xl text-center">
                  <span className="w-6 h-6 rounded-full bg-[#1A634F] text-white flex items-center justify-center text-xs font-bold mx-auto mb-2">
                    {idx + 1}
                  </span>
                  <p className="text-xs font-bold text-[#192A27]">{deliv}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Request Form */}
          <div className="pt-6 border-t border-[#EAE8DD]">
            <h4 className="font-bold text-sm sm:text-base text-[#192A27] mb-4">
              طلب استشارة أو عرض سعر مخصص
            </h4>

            {isSubmitted ? (
              <div className="p-6 bg-[#F4ECE1] text-[#1A634F] rounded-2xl text-center space-y-2 border border-[#c6b59f]/50">
                <CheckCircle2 className="w-8 h-8 mx-auto text-[#1A634F]" />
                <h5 className="font-bold text-base">تم استلام طلبك بنجاح!</h5>
                <p className="text-xs">سيتواصل معك المستشار المختص خلال 24 ساعة عمل.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#192A27] mb-1">الاسم الكريم *</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="الاسم"
                      className="w-full bg-[#F8F7F0] border border-[#EAE8DD] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#c6b59f]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#192A27] mb-1">رقم التواصل (واتساب) *</label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="05XXXXXXXX"
                      className="w-full bg-[#F8F7F0] border border-[#EAE8DD] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#c6b59f]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#192A27] mb-1">البريد الإلكتروني *</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full bg-[#F8F7F0] border border-[#EAE8DD] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#c6b59f]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#192A27] mb-1">اسم المشروع / المنشأة</label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="اسم الشركة أو الفكرة"
                      className="w-full bg-[#F8F7F0] border border-[#EAE8DD] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#c6b59f]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#192A27] mb-1">تفاصيل التحدي أو الاحتياج</label>
                  <textarea
                    rows={2}
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    placeholder="وضح بإيجاز ما تحتاج تحقيقه مع مستشارينا..."
                    className="w-full bg-[#F8F7F0] border border-[#EAE8DD] rounded-xl p-3 text-xs sm:text-sm focus:outline-none focus:border-[#c6b59f]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1A634F] hover:bg-[#124a39] text-white py-3 rounded-full font-bold text-xs sm:text-sm transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#c6b59f]" />
                  <span>إرسال طلب الاستشارة</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
