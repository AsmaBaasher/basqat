/**
 * Basqat Design System - Tokens & Constants
 * نظام تصميم باسقات للأعمال - المحددات والمتغيرات الموحدة
 */

export const colors = {
  // Brand Primary (أخضر باسقات الغابي - Forest Green)
  primary: {
    DEFAULT: '#1A634F',
    light: '#227b60',
    dark: '#124a39',
    deep: '#0D372B',
    hover: '#165342',
    tint: 'rgba(26, 99, 79, 0.08)',
    tintStrong: 'rgba(26, 99, 79, 0.15)',
  },

  // Brand Secondary (ذهبي برونزي دافئ - Warm Bronze Gold)
  gold: {
    DEFAULT: '#54421F',
    hover: '#423418',
    light: '#6E572B',
    tint: 'rgba(84, 66, 31, 0.08)',
    tintStrong: 'rgba(84, 66, 31, 0.15)',
  },

  // Accent Growth (أخضر نمو ناعم - Sage Growth)
  sage: {
    DEFAULT: '#c8b6a2',
    light: '#f0e9e1',
    dark: '#b09a87',
    tint: 'rgba(200, 182, 162, 0.15)',
  },

  // Backgrounds & Surfaces (الخلفيات والأسطح)
  surface: {
    canvas: '#F7F5EE', // Warm Ivory / عاجي دافئ
    canvasMuted: '#EFECE1', // Slightly darker warm ivory
    card: '#FFFFFF', // Pure White / أبيض ناصع
    cardMuted: '#F7F5EE', // Warm card surface
    dark: '#192A27', // Executive Deep Teal-Black / كحلي غابي داكن
    darkCard: 'rgba(255, 255, 255, 0.06)',
    pill: '#EAE6DB', // Sand pill background
  },

  // Typography & Neutrals (النصوص والحياديات)
  neutral: {
    title: '#192A27', // High contrast headline
    body: '#556965', // Standard readable body text
    muted: '#7A8C88', // Captions and secondary notes
    border: '#E5E0D2', // Standard border
    borderSubtle: '#EFECE1', // Subtle divider
    borderStrong: '#D5D0C0', // Strong interactive border
    inverse: '#FFFFFF', // White text on dark
    inverseMuted: '#D1D5DB', // Muted text on dark
  },

  // Status & Feedback (حالات النظام)
  status: {
    success: '#10B981',
    successBg: '#ECFDF5',
    warning: '#F59E0B',
    warningBg: '#FFFBEB',
    error: '#EF4444',
    errorBg: '#FEF2F2',
    info: '#3B82F6',
    infoBg: '#EFF6FF',
  }
} as const;

export const typography = {
  fontFamily: {
    cairo: "'Cairo', sans-serif",
  },
  fontSize: {
    display: 'text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight',
    h1: 'text-3xl sm:text-4xl md:text-5xl font-bold leading-tight',
    h2: 'text-2xl sm:text-3xl font-bold leading-snug',
    h3: 'text-xl sm:text-2xl font-bold leading-snug',
    h4: 'text-lg sm:text-xl font-bold',
    bodyLg: 'text-base sm:text-lg leading-relaxed',
    body: 'text-sm sm:text-base leading-relaxed',
    bodySm: 'text-xs sm:text-sm leading-relaxed',
    caption: 'text-xs font-semibold',
    micro: 'text-[11px] font-bold tracking-wide',
  },
  lineHeight: {
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.65,
  }
} as const;

export const spacing = {
  containerPadding: 'px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto',
  sectionPadding: 'py-12 sm:py-16 lg:py-20',
  sectionPaddingSm: 'py-8 sm:py-12',
} as const;

export const radius = {
  outerCard: 'rounded-3xl', // 24px
  innerCard: 'rounded-2xl', // 16px (matches Outer - Padding rule)
  button: 'rounded-xl', // 12px
  pill: 'rounded-full', // 9999px
  input: 'rounded-xl', // 12px
  badge: 'rounded-full', // 9999px
} as const;

export const shadows = {
  xs: 'shadow-xs',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  cardHover: 'hover:shadow-xl transition-shadow duration-300',
} as const;

export const designRules = [
  {
    title: 'قاعدة التعشيش الحسابي للانحناءات (Corner Radius Math)',
    rule: 'نصف القطر الداخلي = نصف القطر الخارجي - المسافة البينية (Padding). إذا كان الكرت الخارجي rounded-3xl (24px) والـ Padding مقداره 8px فإن العنصر الداخلي يكون rounded-2xl (16px).',
  },
  {
    title: 'قاعدة عدم التفاف نصوص الشارات والأزرار (No Wrap Labels)',
    rule: 'جميع النصوص داخل الأزرار، والوسوم، والشارات يجب أن تكون على سطر واحد تماماً (whitespace-nowrap) مع تناسب حشوات التباعد 2x للعرض مقارنة بالارتفاع.',
  },
  {
    title: 'قاعدة التباين والسهولة البصرية (WCAG AA Contrast)',
    rule: 'تحقيق تباين لا يقل عن 4.5:1 للنصوص مع الخلفيات. منع وضع نصوص رمادية باهتة على خلفيات ملونة، واستخدام نصوص داكنة حادة (#192A27) على العاجي (#F7F5EE).',
  },
  {
    title: 'نظام التباعد القياسي (8pt Spacing Grid)',
    rule: 'جميع التباعدات مبنية على مضاعفات 4 و 8 بكسل (gap-2 = 8px, gap-4 = 16px, p-6 = 24px, p-8 = 32px) لخلق إيقاع بصري متوازن.',
  },
  {
    title: 'قواعد التفاعل السلس (Micro-Interactions)',
    rule: 'تضمين حالات hover واضحة مع scale طفيف (1.02) أو تغير حدود لونية مع انتقال ناعم duration-200 / duration-300.',
  },
];
