import React, { useState } from 'react';
import { Program } from '../../types';
import { X, Calendar, Clock, Users, CheckCircle2, Award, Sparkles, Send, Check } from 'lucide-react';

interface ProgramDetailsModalProps {
  program: Program | null;
  onClose: () => void;
  onEnrollSuccess?: (programTitle: string) => void;
}

export const ProgramDetailsModal: React.FC<ProgramDetailsModalProps> = ({
  program,
  onClose,
  onEnrollSuccess,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'syllabus' | 'register'>('overview');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectStage: 'فكرة أولية',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!program) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (onEnrollSuccess) onEnrollSuccess(program.title);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-gray-100 overflow-hidden relative">
        {/* Header with image banner */}
        <div className="relative h-44 sm:h-52 bg-gray-900 shrink-0">
          <img
            alt={program.title}
            className="w-full h-full object-cover opacity-70"
            src={program.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#124a39] via-[#124a39]/60 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 left-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 right-6 left-6 text-white">
            <span className="bg-[#54421F] text-white text-[11px] font-extrabold px-3 py-1 rounded-full inline-block mb-2">
              {program.categoryLabel}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold">{program.title}</h3>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-[#EAE8DD] px-6 bg-[#F8F7F0] shrink-0">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3.5 px-4 font-bold text-xs sm:text-sm border-b-2 transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'border-[#1A634F] text-[#1A634F]'
                : 'border-transparent text-[#556965] hover:text-[#1A634F]'
            }`}
          >
            نظرة عامة
          </button>
          <button
            onClick={() => setActiveTab('syllabus')}
            className={`py-3.5 px-4 font-bold text-xs sm:text-sm border-b-2 transition-all cursor-pointer ${
              activeTab === 'syllabus'
                ? 'border-[#1A634F] text-[#1A634F]'
                : 'border-transparent text-[#556965] hover:text-[#1A634F]'
            }`}
          >
            محاور الاستشارة
          </button>
          <button
            onClick={() => setActiveTab('register')}
            className={`py-3.5 px-4 font-bold text-xs sm:text-sm border-b-2 transition-all cursor-pointer ${
              activeTab === 'register'
                ? 'border-[#1A634F] text-[#1A634F]'
                : 'border-transparent text-[#556965] hover:text-[#1A634F]'
            }`}
          >
            احجز جلستك الآن
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Key Specs Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-[#F8F7F0] border border-[#EAE8DD] p-4 rounded-2xl text-xs">
                <div>
                  <span className="text-[#6B7E79] block">تفاصيل الجلسات / الباقة:</span>
                  <span className="font-bold text-[#192A27] flex items-center gap-1 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-[#1A634F]" />
                    {program.duration}
                  </span>
                </div>
                <div>
                  <span className="text-[#6B7E79] block">طريقة تقديم الجلسات:</span>
                  <span className="font-bold text-[#192A27] mt-0.5 block">{program.mode}</span>
                </div>
                <div>
                  <span className="text-[#6B7E79] block">حالة التوفر:</span>
                  <span className="font-bold text-[#1A634F] flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1A634F]" />
                    متاح خلال 48 ساعة
                  </span>
                </div>
              </div>

              {/* Full Description */}
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#192A27] mb-2">عن هذه الاستشارة</h4>
                <p className="text-[#556965] text-xs sm:text-sm leading-relaxed">
                  {program.fullDescription}
                </p>
              </div>

              {/* Target Audience */}
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#192A27] mb-2">الفئات المستهدفة</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#556965]">
                  {program.targetAudience.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1A634F] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features / Benefits */}
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#192A27] mb-2">مزايا الاستشارة ومخرجاتها</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                  {program.features.map((feat, idx) => (
                    <div key={idx} className="p-3 bg-[#F8F7F0] border border-[#EAE8DD] rounded-xl flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#1A634F] shrink-0" />
                      <span className="text-[#192A27]">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mentor Profile if available */}
              {program.mentorName && (
                <div className="p-4 rounded-2xl bg-[#F4ECE1] border border-[#c6b59f]/60 flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#1A634F] text-white flex items-center justify-center overflow-hidden shrink-0 border border-[#c6b59f]">
                      <img
                        src="/who us.jpeg"
                        alt={program.mentorName}
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          e.currentTarget.src = '/man2.png';
                        }}
                      />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#1A634F] font-bold block">إشراف وتوجيه المستشار المباشر:</span>
                      <h5 className="font-bold text-sm text-[#192A27]">{program.mentorName}</h5>
                      <p className="text-xs text-[#556965]">{program.mentorTitle}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-bold shrink-0">
                    <span className="bg-white px-3 py-1 rounded-lg border border-[#c6b59f]/50 text-[#1A634F]">
                      {program.mentorExperience || '21 سنة خبرة'}
                    </span>
                    <span className="bg-[#1A634F] text-white px-3 py-1 rounded-lg">
                      {program.mentorRate || '350 ر.س/ساعة'}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'syllabus' && (
            <div className="space-y-4">
              <h4 className="font-bold text-sm sm:text-base text-[#192A27] mb-2">محاور الاستشارة والجلسات</h4>
              {program.syllabus.map((s, idx) => (
                <div key={idx} className="p-4 bg-[#F8F7F0] rounded-2xl border border-[#EAE8DD]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#4F635F]">{s.week}</span>
                  </div>
                  <h5 className="font-bold text-sm text-[#192A27] mb-1">{s.title}</h5>
                  <p className="text-xs text-[#556965] leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'register' && (
            <div>
              {isSubmitted ? (
                <div className="py-10 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#F4ECE1] border border-[#c6b59f]/50 text-[#1A634F] mx-auto flex items-center justify-center">
                    <Check className="w-8 h-8 text-[#1A634F]" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#192A27]">تم استلام طلب حجزك بنجاح!</h4>
                  <p className="text-xs sm:text-sm text-[#556965] max-w-md mx-auto leading-relaxed">
                    شكراً لطلبك حجز <strong className="text-[#192A27]">{program.title}</strong>. سيقوم فريق الاستشارات بالتواصل معك عبر الواتساب لتأكيد الموعد وتزويدك برابط الجلسة.
                  </p>
                  <button
                    onClick={onClose}
                    className="bg-[#1A634F] hover:bg-[#124a39] text-white px-8 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                  >
                    إغلاق
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#192A27] mb-1">الاسم الكامل *</label>
                      <input
                        required
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="مثال: عبدالله الشمري"
                        className="w-full bg-[#F8F7F0] border border-[#EAE8DD] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#c6b59f]"
                      />
                    </div>
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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#192A27] mb-1">رقم الجوال (واتساب) *</label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="05XXXXXXXX"
                        className="w-full bg-[#F8F7F0] border border-[#EAE8DD] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#c6b59f]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#192A27] mb-1">مرحلة المشروع الحالية *</label>
                      <select
                        value={formData.projectStage}
                        onChange={(e) => setFormData({ ...formData, projectStage: e.target.value })}
                        className="w-full bg-[#F8F7F0] border border-[#EAE8DD] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#c6b59f]"
                      >
                        <option value="فكرة أولية">فكرة أولية قيد التخطيط</option>
                        <option value="نموذج أولي">نموذج أولي (MVP)</option>
                        <option value="مشروع قائم ومبيعات">مشروع قائم ولديه مبيعات</option>
                        <option value="توسع واستثمار">مرحلة التوسع والاستثمار</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#192A27] mb-1">تحدي أو سؤال المشروع الأساسي</label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="ما هو التحدي الرئيسي الذي تود مناقشته في الجلسة الاستشارية؟"
                      className="w-full bg-[#F8F7F0] border border-[#EAE8DD] rounded-xl p-3 text-xs sm:text-sm focus:outline-none focus:border-[#c6b59f]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1A634F] hover:bg-[#124a39] text-white py-3.5 rounded-full font-bold text-sm transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#c6b59f]" />
                    <span>تأكيد طلب حجز الجلسة</span>
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Footer actions */}
        {activeTab !== 'register' && (
          <div className="p-4 bg-[#F8F7F0] border-t border-[#EAE8DD] flex items-center justify-between shrink-0">
            <span className="text-xs font-bold text-[#192A27]">
              التسعير: <span className="text-[#1A634F] font-extrabold">{program.price || 'حسب الباقة'}</span>
            </span>
            <button
              onClick={() => setActiveTab('register')}
              className="bg-[#1A634F] hover:bg-[#124a39] text-white px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-colors cursor-pointer"
            >
              احجز جلستك الآن
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
