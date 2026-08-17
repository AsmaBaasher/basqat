import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 left-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#1A634F] text-[#c6b59f] flex items-center justify-center border border-[#c6b59f]/40">
            {isPrivacy ? <Shield className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
          </div>
          <div>
            <span className="text-[11px] font-bold text-[#4F635F] uppercase tracking-wider block">
              باسقات للأعمال
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#192A27]">
              {isPrivacy ? 'سياسة الخصوصية وحماية البيانات' : 'شروط وأحكام الاستخدام'}
            </h3>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#556965] leading-relaxed border-t border-[#EAE8DD] pt-4">
          {isPrivacy ? (
            <>
              <p>
                نحن في <strong className="text-[#192A27]">باسقات للأعمال</strong> نلتزم بأعلى معايير حماية وخصوصية بيانات رواد الأعمال والمستشارين والشركاء المسجلين لدينا وفقاً للأنظمة واللوائح المعمول بها في المملكة العربية السعودية.
              </p>
              <h5 className="font-bold text-[#192A27] text-sm">1. جمع واستخدام البيانات</h5>
              <p>
                تُجمع المعلومات الشخصية (مثل الاسم، البريد، الهاتف، تفاصيل المشاريع) فقط لغرض تقديم الخدمات التدريبية والاستشارية المناسبة، وإجراء عمليات التسجيل والمتابعة.
              </p>
              <h5 className="font-bold text-[#192A27] text-sm">2. سرية الأفكار ونماذج الأعمال</h5>
              <p>
                تخضع جميع خطط العمل، البيانات المالية، والأفكار الريادية المقدمة من المشتركين لاتفاقيات سرية تامة (Non-Disclosure Agreement) ملزمة لجميع المستشارين ومنسوبي باسقات.
              </p>
              <h5 className="font-bold text-[#192A27] text-sm">3. الأمان التقني</h5>
              <p>
                نستخدم أحدث بروتوكولات التشفير وحماية البيانات لمنع أي وصول غير مصرح به.
              </p>
            </>
          ) : (
            <>
              <p>
                أهلاً بكم في منصة <strong className="text-[#192A27]">باسقات للأعمال</strong>. يُعد استخدامك لهذه المنصة أو التسجيل في برامجنا موافقة صريحة على الشروط والأحكام التالية:
              </p>
              <h5 className="font-bold text-[#192A27] text-sm">1. الأهلية والالتزام</h5>
              <p>
                يتعهد المسجل في البرامج التدريبية أو الاستشارية بتقديم معلومات دقيقة وصحيحة، والالتزام بحضور الجلسات المقررة وتسليم المخرجات وفق الجدول الزمني للبرنامج.
              </p>
              <h5 className="font-bold text-[#192A27] text-sm">2. الملكية الفكرية</h5>
              <p>
                جميع المواد التدريبية، الحقائب المعرفية، والعلامات التجارية المنشورة هي ملك حصري لباسقات للأعمال ولا يجوز إعادة نشرها أو استخدامها لأغراض تجارية دون إذن كتابي مسبق.
              </p>
              <h5 className="font-bold text-[#192A27] text-sm">3. الإلغاء والاسترداد</h5>
              <p>
                تخضع الرسوم للسياسات المعلنة لكل برنامج بشكل منفصل في استمارة التسجيل.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-[#EAE8DD]">
          <button
            onClick={onClose}
            className="w-full bg-[#1A634F] hover:bg-[#124a39] text-white py-2.5 rounded-full font-bold text-xs sm:text-sm transition-colors cursor-pointer"
          >
            فهمت وموافق
          </button>
        </div>
      </div>
    </div>
  );
};
