import React, { useState } from 'react';
import {
  colors,
  typography,
  designRules,
  Button,
  Badge,
  Card,
  Input,
  Select,
  Textarea,
  FormField,
  SectionHeader,
  Tabs,
  StatCard,
} from '../design-system';
import {
  Palette,
  Type,
  Square,
  FormInput,
  Layers,
  BookOpen,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
  ArrowLeft,
  Mail,
  Lock,
  Search,
  Calendar,
  Users,
  Award,
  TrendingUp,
  Building2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const DesignSystemPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('colors');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const [demoInput, setDemoInput] = useState('');
  const [demoSelect, setDemoSelect] = useState('option1');
  const [demoTextarea, setDemoTextarea] = useState('');
  const [demoLoading, setDemoLoading] = useState(false);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const navTabs = [
    { key: 'colors', label: 'الألوان (Colors)', icon: <Palette className="w-4 h-4" /> },
    { key: 'typography', label: 'الخطوط والطباعة (Typography)', icon: <Type className="w-4 h-4" /> },
    { key: 'buttons', label: 'الأزرار (Buttons)', icon: <Square className="w-4 h-4" /> },
    { key: 'forms', label: 'النماذج والحقول (Forms & Inputs)', icon: <FormInput className="w-4 h-4" /> },
    { key: 'cards', label: 'البطاقات والحاويات (Cards)', icon: <Layers className="w-4 h-4" /> },
    { key: 'rules', label: 'قواعد ومعايير التصميم (Rules)', icon: <BookOpen className="w-4 h-4" /> },
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Page Header */}
        <SectionHeader
          eyebrow="نظام التصميم والمكتبة البرمجية الموحدة"
          title="Basqat Design System & Component Library"
          subtitle="الدليل التأسيسي الشامل للهوية البصرية، الألوان، الخطوط، الأزرار، النماذج، والبطاقات المعتمدة لمنصة باسقات للأعمال."
          align="center"
          titleLevel="h1"
        />

        {/* Tab Navigation */}
        <div className="mb-14">
          <Tabs
            tabs={navTabs}
            activeKey={activeTab}
            onChange={(key) => setActiveTab(key)}
            className="justify-center"
          />
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {/* TAB 1: COLORS */}
          {activeTab === 'colors' && (
            <motion.div
              key="colors"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-12"
            >
              {/* Primary Palette */}
              <div>
                <h3 className="font-editorial text-2xl font-bold text-[#192A27] mb-2">
                  1. لون الهوية الأساسي (Primary Forest Green)
                </h3>
                <p className="text-xs sm:text-sm text-[#556965] mb-6">
                  يعكس الرصانة والنمو والاستدامة المهنية. يُستخدم في أزرار الإجراء الأساسية (Primary CTAs)، العناوين الفرعية، والعناصر النشطة.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white border border-[#E5E0D2] rounded-2xl p-4 shadow-xs">
                    <div className="h-24 rounded-xl bg-[#1A634F] mb-3 flex items-end p-2.5 text-white font-mono text-xs font-bold justify-between">
                      <span>DEFAULT</span>
                      <span>#1A634F</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#192A27]">أخضر باسقات الأساسي</span>
                      <button
                        onClick={() => copyToClipboard('#1A634F', 'c1')}
                        className="text-[#556965] hover:text-[#1A634F] p-1 cursor-pointer"
                      >
                        {copiedCode === 'c1' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <div className="bg-white border border-[#E5E0D2] rounded-2xl p-4 shadow-xs">
                    <div className="h-24 rounded-xl bg-[#124a39] mb-3 flex items-end p-2.5 text-white font-mono text-xs font-bold justify-between">
                      <span>DARK / HOVER</span>
                      <span>#124a39</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#192A27]">حالة التمرير الداكنة</span>
                      <button
                        onClick={() => copyToClipboard('#124a39', 'c2')}
                        className="text-[#556965] hover:text-[#1A634F] p-1 cursor-pointer"
                      >
                        {copiedCode === 'c2' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <div className="bg-white border border-[#E5E0D2] rounded-2xl p-4 shadow-xs">
                    <div className="h-24 rounded-xl bg-[#0D372B] mb-3 flex items-end p-2.5 text-white font-mono text-xs font-bold justify-between">
                      <span>DEEP TEAL</span>
                      <span>#0D372B</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#192A27]">غابي عميق</span>
                      <button
                        onClick={() => copyToClipboard('#0D372B', 'c3')}
                        className="text-[#556965] hover:text-[#1A634F] p-1 cursor-pointer"
                      >
                        {copiedCode === 'c3' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <div className="bg-white border border-[#E5E0D2] rounded-2xl p-4 shadow-xs">
                    <div className="h-24 rounded-xl bg-[#1A634F]/10 border border-[#1A634F]/20 mb-3 flex items-end p-2.5 text-[#1A634F] font-mono text-xs font-bold justify-between">
                      <span>TINT (10%)</span>
                      <span>rgba(26,99,79,0.1)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#192A27]">وسوم وخلفيات الشارات</span>
                      <button
                        onClick={() => copyToClipboard('rgba(26, 99, 79, 0.1)', 'c4')}
                        className="text-[#556965] hover:text-[#1A634F] p-1 cursor-pointer"
                      >
                        {copiedCode === 'c4' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Palette: Gold/Bronze */}
              <div>
                <h3 className="font-editorial text-2xl font-bold text-[#192A27] mb-2">
                  2. لون التمييز الذهبي البرونزي (Warm Bronze Gold)
                </h3>
                <p className="text-xs sm:text-sm text-[#556965] mb-6">
                  يمنح طابعاً استشارياً فاخراً وموثوقاً. يُستخدم لحجز الاستشارات المميزة، شارات التميز، والإجراءات الخاصة.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white border border-[#E5E0D2] rounded-2xl p-4 shadow-xs">
                    <div className="h-24 rounded-xl bg-[#54421F] mb-3 flex items-end p-2.5 text-white font-mono text-xs font-bold justify-between">
                      <span>DEFAULT GOLD</span>
                      <span>#54421F</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#192A27]">الذهبي البرونزي</span>
                      <button
                        onClick={() => copyToClipboard('#54421F', 'g1')}
                        className="text-[#556965] hover:text-[#1A634F] p-1 cursor-pointer"
                      >
                        {copiedCode === 'g1' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <div className="bg-white border border-[#E5E0D2] rounded-2xl p-4 shadow-xs">
                    <div className="h-24 rounded-xl bg-[#423418] mb-3 flex items-end p-2.5 text-white font-mono text-xs font-bold justify-between">
                      <span>DARK / HOVER</span>
                      <span>#423418</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#192A27]">حالة التمرير للذهبي</span>
                      <button
                        onClick={() => copyToClipboard('#423418', 'g2')}
                        className="text-[#556965] hover:text-[#1A634F] p-1 cursor-pointer"
                      >
                        {copiedCode === 'g2' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <div className="bg-white border border-[#E5E0D2] rounded-2xl p-4 shadow-xs">
                    <div className="h-24 rounded-xl bg-[#54421F]/10 border border-[#54421F]/20 mb-3 flex items-end p-2.5 text-[#54421F] font-mono text-xs font-bold justify-between">
                      <span>GOLD TINT (10%)</span>
                      <span>rgba(84,66,31,0.1)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#192A27]">تظليل شارات المقاعد</span>
                      <button
                        onClick={() => copyToClipboard('rgba(84, 66, 31, 0.1)', 'g3')}
                        className="text-[#556965] hover:text-[#1A634F] p-1 cursor-pointer"
                      >
                        {copiedCode === 'g3' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <div className="bg-white border border-[#E5E0D2] rounded-2xl p-4 shadow-xs">
                    <div className="h-24 rounded-xl bg-[#8EB568] mb-3 flex items-end p-2.5 text-[#192A27] font-mono text-xs font-bold justify-between">
                      <span>SAGE GREEN</span>
                      <span>#8EB568</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#192A27]">أخضر النمو والتقييم</span>
                      <button
                        onClick={() => copyToClipboard('#8EB568', 'g4')}
                        className="text-[#556965] hover:text-[#1A634F] p-1 cursor-pointer"
                      >
                        {copiedCode === 'g4' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Surfaces & Neutrals */}
              <div>
                <h3 className="font-editorial text-2xl font-bold text-[#192A27] mb-2">
                  3. الأسطح والخلفيات والحياديات (Surfaces & Neutrals)
                </h3>
                <p className="text-xs sm:text-sm text-[#556965] mb-6">
                  مبنية على درجات العاجي الدافئ والرمادي المريح للعين لمنع السطوع الأبيض الحاد وتحقيق الراحة البصرية الفائقة.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white border border-[#E5E0D2] rounded-2xl p-4 shadow-xs">
                    <div className="h-24 rounded-xl bg-[#F7F5EE] border border-[#E5E0D2] mb-3 flex items-end p-2.5 text-[#192A27] font-mono text-xs font-bold justify-between">
                      <span>CANVAS IVORY</span>
                      <span>#F7F5EE</span>
                    </div>
                    <div className="text-xs font-bold text-[#192A27]">خلفية المنصة الأساسية</div>
                  </div>

                  <div className="bg-white border border-[#E5E0D2] rounded-2xl p-4 shadow-xs">
                    <div className="h-24 rounded-xl bg-[#192A27] mb-3 flex items-end p-2.5 text-white font-mono text-xs font-bold justify-between">
                      <span>EXECUTIVE DARK</span>
                      <span>#192A27</span>
                    </div>
                    <div className="text-xs font-bold text-[#192A27]">الخلفيات الداكنة والنصوص</div>
                  </div>

                  <div className="bg-white border border-[#E5E0D2] rounded-2xl p-4 shadow-xs">
                    <div className="h-24 rounded-xl bg-[#E5E0D2] mb-3 flex items-end p-2.5 text-[#192A27] font-mono text-xs font-bold justify-between">
                      <span>BORDER SUBTLE</span>
                      <span>#E5E0D2</span>
                    </div>
                    <div className="text-xs font-bold text-[#192A27]">الحدود والفواصل القياسية</div>
                  </div>

                  <div className="bg-white border border-[#E5E0D2] rounded-2xl p-4 shadow-xs">
                    <div className="h-24 rounded-xl bg-[#556965] mb-3 flex items-end p-2.5 text-white font-mono text-xs font-bold justify-between">
                      <span>BODY TEXT</span>
                      <span>#556965</span>
                    </div>
                    <div className="text-xs font-bold text-[#192A27]">النصوص الوصفية والفقرات</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: TYPOGRAPHY */}
          {activeTab === 'typography' && (
            <motion.div
              key="typography"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              <Card surface="white" padding="lg">
                <div className="border-b border-[#E5E0D2] pb-4 mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-editorial text-xl font-bold text-[#192A27]">
                      عائلة الخط المعتمدة: خط كايرو (Cairo Font Family)
                    </h3>
                    <p className="text-xs text-[#556965]">
                      خط هندسي عصري متزن، مصمم خصيصاً للقراءة الرقمية والعناوين التحريرية الرفيعة.
                    </p>
                  </div>
                  <Badge variant="primary" dot>
                    Arabic + Latin
                  </Badge>
                </div>

                <div className="space-y-6">
                  {/* Display */}
                  <div className="p-4 bg-[#F7F5EE] rounded-2xl border border-[#E5E0D2]">
                    <div className="text-[11px] font-bold text-[#556965] uppercase mb-1">
                      Display / Hero Headline (48px - 60px)
                    </div>
                    <div className="font-editorial text-4xl sm:text-5xl font-black text-[#192A27] leading-tight">
                      من فكرة ملهمة إلى أثر ملموس
                    </div>
                  </div>

                  {/* Heading 1 */}
                  <div className="p-4 bg-[#F7F5EE] rounded-2xl border border-[#E5E0D2]">
                    <div className="text-[11px] font-bold text-[#556965] uppercase mb-1">
                      Heading 1 / Page Title (32px - 40px)
                    </div>
                    <div className="font-editorial text-3xl font-bold text-[#192A27]">
                      الاستشارات والحلول المؤسسية للمشاريع
                    </div>
                  </div>

                  {/* Heading 2 */}
                  <div className="p-4 bg-[#F7F5EE] rounded-2xl border border-[#E5E0D2]">
                    <div className="text-[11px] font-bold text-[#556965] uppercase mb-1">
                      Heading 2 / Section Title (24px - 30px)
                    </div>
                    <div className="font-editorial text-2xl font-bold text-[#192A27]">
                      برامج الحاضنة ومسرعة الأعمال
                    </div>
                  </div>

                  {/* Heading 3 */}
                  <div className="p-4 bg-[#F7F5EE] rounded-2xl border border-[#E5E0D2]">
                    <div className="text-[11px] font-bold text-[#556965] uppercase mb-1">
                      Heading 3 / Card Title (18px - 22px)
                    </div>
                    <div className="font-editorial text-xl font-bold text-[#192A27]">
                      تطوير نموذج العمل التجاري
                    </div>
                  </div>

                  {/* Body Text */}
                  <div className="p-4 bg-[#F7F5EE] rounded-2xl border border-[#E5E0D2]">
                    <div className="text-[11px] font-bold text-[#556965] uppercase mb-1">
                      Body Regular (14px - 16px, Line Height 1.6)
                    </div>
                    <p className="text-sm sm:text-base text-[#556965] leading-relaxed max-w-3xl">
                      نقدم استشارات وتدريباً عملياً يساعد رواد الأعمال وأصحاب المنشآت على بناء خطط تشغيلية ومالية متينة، وتحقيق النمو المستدام، والجاهزية العالية لجذب المستثمرين والشركاء الاستراتيجيين.
                    </p>
                  </div>

                  {/* Meta / Caption */}
                  <div className="p-4 bg-[#F7F5EE] rounded-2xl border border-[#E5E0D2]">
                    <div className="text-[11px] font-bold text-[#556965] uppercase mb-1">
                      Caption & Micro Labels (11px - 12px)
                    </div>
                    <div className="flex gap-3 items-center">
                      <span className="text-xs font-bold text-[#1A634F]">الأحد – الخميس | 9:00 ص – 6:00 م</span>
                      <span className="text-[11px] font-bold bg-[#1A634F]/10 text-[#1A634F] px-2.5 py-0.5 rounded-full">
                        متبقي 4 مقاعد فقط
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* TAB 3: BUTTONS */}
          {activeTab === 'buttons' && (
            <motion.div
              key="buttons"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              {/* Variants Showcase */}
              <Card surface="white" padding="lg">
                <h3 className="font-editorial text-xl font-bold text-[#192A27] mb-2">
                  أنواع وأشكال الأزرار الموحدة (Button Variants)
                </h3>
                <p className="text-xs text-[#556965] mb-6">
                  تم تصميم الأزرار بحشوات هندسية بنسبة 2x للعرض مقارنة بالارتفاع، مع تأثيرات حركية خفيفة عند النقر والتمرير.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Primary */}
                  <div className="p-5 bg-[#F7F5EE] rounded-2xl border border-[#E5E0D2] space-y-3">
                    <span className="text-xs font-bold text-[#556965] block">Primary (أخضر باسقات)</span>
                    <Button variant="primary" isFullWidth rightIcon={<ArrowLeft className="w-4 h-4 rtl:rotate-0" />}>
                      احجز استشارتك الآن
                    </Button>
                  </div>

                  {/* Gold */}
                  <div className="p-5 bg-[#F7F5EE] rounded-2xl border border-[#E5E0D2] space-y-3">
                    <span className="text-xs font-bold text-[#556965] block">Gold (الذهبي البرونزي)</span>
                    <Button variant="gold" isFullWidth leftIcon={<Calendar className="w-4 h-4" />}>
                      حجز جلسة مع مستشار
                    </Button>
                  </div>

                  {/* Outline */}
                  <div className="p-5 bg-[#F7F5EE] rounded-2xl border border-[#E5E0D2] space-y-3">
                    <span className="text-xs font-bold text-[#556965] block">Outline (حدود حيادية)</span>
                    <Button variant="outline" isFullWidth leftIcon={<Users className="w-4 h-4" />}>
                      استعراض دليل الخبراء
                    </Button>
                  </div>

                  {/* Outline Primary */}
                  <div className="p-5 bg-[#F7F5EE] rounded-2xl border border-[#E5E0D2] space-y-3">
                    <span className="text-xs font-bold text-[#556965] block">Outline Primary (حدود خضراء)</span>
                    <Button variant="outline-primary" isFullWidth>
                      تحميل الحقيبة التدريبية
                    </Button>
                  </div>

                  {/* Ghost */}
                  <div className="p-5 bg-[#F7F5EE] rounded-2xl border border-[#E5E0D2] space-y-3">
                    <span className="text-xs font-bold text-[#556965] block">Ghost (شفاف)</span>
                    <Button variant="ghost" isFullWidth rightIcon={<ArrowLeft className="w-4 h-4 rtl:rotate-0" />}>
                      معرفة المزيد
                    </Button>
                  </div>

                  {/* Dark Mode Variant */}
                  <div className="p-5 bg-[#192A27] rounded-2xl border border-white/10 space-y-3">
                    <span className="text-xs font-bold text-gray-300 block">Dark / Inverted (للهيدر الداكن)</span>
                    <Button variant="dark" isFullWidth leftIcon={<Sparkles className="w-4 h-4" />}>
                      اكتشف البرامج
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Sizes & States */}
              <Card surface="white" padding="lg">
                <h3 className="font-editorial text-xl font-bold text-[#192A27] mb-2">
                  المقاسات والحالات (Sizes & Loading States)
                </h3>
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Button size="sm" variant="primary">
                    زر صغير (Small)
                  </Button>
                  <Button size="md" variant="primary">
                    زر متوسط (Medium)
                  </Button>
                  <Button size="lg" variant="primary">
                    زر كبير (Large)
                  </Button>
                  <Button
                    size="md"
                    variant="gold"
                    isLoading={demoLoading}
                    onClick={() => {
                      setDemoLoading(true);
                      setTimeout(() => setDemoLoading(false), 2000);
                    }}
                  >
                    {demoLoading ? 'جاري المعالجة...' : 'انقر لتجربة التحميل'}
                  </Button>
                  <Button size="md" variant="primary" disabled>
                    معطل (Disabled)
                  </Button>
                </div>
              </Card>

              {/* Badges */}
              <Card surface="white" padding="lg">
                <h3 className="font-editorial text-xl font-bold text-[#192A27] mb-2">
                  الشارات والوسوم (Badges & Pills)
                </h3>
                <p className="text-xs text-[#556965] mb-6">
                  تلتزم بقاعدة السطر الواحد التام وعدم التفاف النصوص (No-Wrap).
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="primary" dot>
                    استشارة معتمدة
                  </Badge>
                  <Badge variant="gold">
                    متبقي 3 مقاعد فقط
                  </Badge>
                  <Badge variant="sage" icon={<TrendingUp className="w-3 h-3" />}>
                    نمو +40%
                  </Badge>
                  <Badge variant="neutral" icon={<Award className="w-3 h-3" />}>
                    12 عام خبرة
                  </Badge>
                  <Badge variant="outline">
                    حضور افتراضي
                  </Badge>
                  <Badge variant="dark">
                    المقر الرئيسي - الرياض
                  </Badge>
                </div>
              </Card>
            </motion.div>
          )}

          {/* TAB 4: FORMS */}
          {activeTab === 'forms' && (
            <motion.div
              key="forms"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              <Card surface="white" padding="lg">
                <h3 className="font-editorial text-xl font-bold text-[#192A27] mb-2">
                  عناصر النماذج والحقول التفاعلية (Inputs, Selects & Textareas)
                </h3>
                <p className="text-xs text-[#556965] mb-8">
                  تتميز بحواف ناعمة rounded-xl، حدود متناسقة، مؤشرات التركيز الواضحة بلون الهوية، ودعم كامل للغة العربية والاتجاه من اليمين لليسار.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                  {/* Standard Text Input */}
                  <Input
                    label="الاسم الكامل"
                    required
                    placeholder="مثال: عبدالمحسن الشمري"
                    value={demoInput}
                    onChange={(e) => setDemoInput(e.target.value)}
                    helperText="أدخل اسمك كما ترغب بظهوره في شهادات الورش والجلسات"
                  />

                  {/* Input with Right Icon */}
                  <Input
                    label="البريد الإلكتروني المهني"
                    required
                    type="email"
                    placeholder="name@company.com"
                    rightIcon={<Mail className="w-4 h-4" />}
                  />

                  {/* Input with Search */}
                  <Input
                    label="البحث السريع عن خدمة أو مستشار"
                    placeholder="ابحث بالاسم أو التخصص..."
                    rightIcon={<Search className="w-4 h-4" />}
                  />

                  {/* Select Dropdown */}
                  <Select
                    label="المسار الاستشاري المطلوب"
                    required
                    value={demoSelect}
                    onChange={(e) => setDemoSelect(e.target.value)}
                    options={[
                      { value: 'option1', label: 'تطوير نموذج العمل التجاري والاستراتيجية' },
                      { value: 'option2', label: 'الاستشارات المالية وهيكلة الاستثمار' },
                      { value: 'option3', label: 'استراتيجيات التسويق والنمو والمبيعات' },
                      { value: 'option4', label: 'برامج الحاضنة ومسرعة الأعمال' },
                    ]}
                  />

                  {/* Error State Demo */}
                  <Input
                    label="رقم الهاتف الجوال (حالة الخطأ)"
                    placeholder="05XXXXXXXX"
                    defaultValue="12345"
                    error="يرجى إدخال رقم جوال سعودي صحيح يبدأ بـ 05 ويتكون من 10 أرقام"
                  />

                  {/* Disabled Input */}
                  <Input
                    label="حالة التعطيل (Disabled State)"
                    disabled
                    value="قيمة غير قابلة للتعديل"
                    helperText="هذا الحقل مفعل للقراءة فقط"
                  />

                  {/* Textarea (Full row) */}
                  <div className="md:col-span-2">
                    <Textarea
                      label="تفاصيل الاستفسار أو التحدي في مشروعك"
                      required
                      placeholder="صف بإيجاز المرحلة الحالية لمشروعك وأبرز النقاط التي ترغب بمناقشتها مع المستشار..."
                      value={demoTextarea}
                      onChange={(e) => setDemoTextarea(e.target.value)}
                      rows={3}
                    />
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E5E0D2] flex justify-end">
                  <Button variant="primary" rightIcon={<ArrowLeft className="w-4 h-4 rtl:rotate-0" />}>
                    تجربة إرسال النموذج
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}

          {/* TAB 5: CARDS & SURFACES */}
          {activeTab === 'cards' && (
            <motion.div
              key="cards"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Canvas Surface Card */}
                <Card surface="canvas" padding="lg">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E0D2] text-[#1A634F] flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-editorial text-xl font-bold text-[#192A27] mb-2">
                    بطاقة العاجي (Canvas Card)
                  </h4>
                  <p className="text-xs text-[#556965] leading-relaxed mb-4">
                    تستخدم كخلفية قياسية لبطاقات الخدمات والمستشارين، تحقق الدفء والهدوء البصري.
                  </p>
                  <Button size="sm" variant="outline-primary">
                    استكشف البطاقة
                  </Button>
                </Card>

                {/* White Elevated Card */}
                <Card surface="white" padding="lg">
                  <div className="w-12 h-12 rounded-xl bg-[#1A634F]/10 text-[#1A634F] flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h4 className="font-editorial text-xl font-bold text-[#192A27] mb-2">
                    البطاقة البيضاء (White Surface)
                  </h4>
                  <p className="text-xs text-[#556965] leading-relaxed mb-4">
                    تمنح تبايناً ناصعاً للأقسام والنماذج والمحتوى الذي يتطلب تركيزاً بصرياً دقيقاً.
                  </p>
                  <Button size="sm" variant="primary">
                    استكشف البطاقة
                  </Button>
                </Card>

                {/* Executive Dark Card */}
                <Card surface="dark" padding="lg">
                  <div className="w-12 h-12 rounded-xl bg-white/10 text-emerald-300 flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h4 className="font-editorial text-xl font-bold text-white mb-2">
                    البطاقة الداكنة (Executive Dark)
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed mb-4">
                    للبانرات الترويجية الحصرية، دعوات الانضمام، والمساحات ذات التأثير القيادي العالي.
                  </p>
                  <Button size="sm" variant="gold">
                    انضم للمنظومة
                  </Button>
                </Card>
              </div>

              {/* Metric Stat Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <StatCard value="+12" label="عاماً من الخبرة والتمكين" variant="white" />
                <StatCard value="+500" label="مشروع وشركة ناشئة" variant="white" />
                <StatCard value="+120" label="مستشاراً وخبيراً معتمداً" variant="white" />
                <StatCard value="4.9 / 5" label="معدل رضا المستفيدين" trend="تقييم استثنائي" variant="white" />
              </div>
            </motion.div>
          )}

          {/* TAB 6: RULES */}
          {activeTab === 'rules' && (
            <motion.div
              key="rules"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <Card surface="white" padding="lg">
                <h3 className="font-editorial text-2xl font-bold text-[#192A27] mb-2">
                  المعايير والقواعد المعمارية لنظام تصميم باسقات
                </h3>
                <p className="text-xs sm:text-sm text-[#556965] mb-8">
                  تضمن هذه القواعد الاتساق البصري والبرمجي عبر جميع صفحات ومكونات المنصة:
                </p>

                <div className="space-y-4">
                  {designRules.map((rule, idx) => (
                    <div
                      key={idx}
                      className="p-5 bg-[#F7F5EE] border border-[#E5E0D2] rounded-2xl flex items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#1A634F] text-white flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-editorial text-base font-bold text-[#192A27] mb-1">
                          {rule.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#556965] leading-relaxed">
                          {rule.rule}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
