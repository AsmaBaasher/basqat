import React, { useState } from 'react';
import { BASQAT_IMAGES } from '../data/basqatData';
import { BasqatLogo } from './BasqatLogo';
import { Check, Send, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onNavigateSection: (sectionId: string) => void;
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onNavigateSection,
  onNavigate,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNav = (target: string) => {
    if (onNavigate) {
      if (target === 'consulting') onNavigate('/consulting');
      else if (target === 'programs') onNavigate('/programs');
      else if (target === 'workshops') onNavigate('/workshops');
      else if (target === 'spaces') onNavigate('/spaces');
      else if (target === 'consultants') onNavigate('/consultants');
      else if (target === 'join-consultant') onNavigate('/join-consultant');
      else if (target === 'about' || target === 'stories') onNavigate('/about');
      else if (target === 'contact' || target === 'locations') onNavigate('/contact');
      else if (target === 'faq') onNavigate('/consulting');
      else onNavigate(target.startsWith('/') ? target : `/${target}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onNavigateSection(target);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 5000);
    }
  };

  return (
    <footer className="bg-[#192A27] pt-20 pb-8 text-white border-t border-[#E5E0D2]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <BasqatLogo size="2xl" variant="white" />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-xs sm:text-sm">
              استشارات أعمال متخصصة تساعدك على اتخاذ القرار بثقة. نجمع بين الاستشارات، البرامج، الورش، والمساحات المجهزة لتمكين المشاريع الريادية.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-2.5">
              <a
                aria-label="منصة إكس"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#1A634F] hover:text-white transition-colors"
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                aria-label="لينكد إن"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#1A634F] hover:text-white transition-colors"
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                aria-label="إنستغرام"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#1A634F] hover:text-white transition-colors"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* 2. Services Navigation */}
          <div>
            <h4 className="font-editorial text-base font-bold mb-5 text-white">منظومة باسقات</h4>
            <ul className="space-y-2.5 text-gray-300 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleNav('consulting')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  استشارات الأعمال
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('programs')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  برامج الحاضنة والمسرعة
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('workshops')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  الورش والفعاليات المهنية
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('spaces')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  المساحات والقاعات
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('consultants')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  شبكة المستشارين
                </button>
              </li>
            </ul>
          </div>

          {/* 3. Quick Links & Tools */}
          <div>
            <h4 className="font-editorial text-base font-bold mb-5 text-white">روابط سريعة</h4>
            <ul className="space-y-2.5 text-gray-300 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleNav('join-consultant')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  انضم كمستشار
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  عن باسقات للأعمال
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('stories')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  تجارب وقصص المشاريع
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  الأسئلة الشائعة
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('locations')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  فروعنا
                </button>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter */}
          <div>
            <h4 className="font-editorial text-base font-bold mb-5 text-white">اشترك في نشرتنا</h4>
            <p className="text-gray-300 text-xs mb-4 leading-relaxed">
              كن على اطلاع بآخر الورش والفعاليات والبرامج الاستشارية.
            </p>
            {subscribed ? (
              <div className="bg-white/10 border border-white/20 p-3.5 rounded-xl text-center text-xs text-white flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-[#c8b6a2]" />
                <span>شكراً لاشتراكك! ستصلك أحدث المستجدات.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5">
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="أدخل بريدك الإلكتروني"
                  className="bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-[#1A634F] text-xs w-full"
                />
                <button
                  type="submit"
                  className="bg-[#54421F] hover:bg-[#423418] text-white font-bold py-2.5 rounded-xl transition-colors text-xs shadow-xs cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>اشترك الآن</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>جميع الحقوق محفوظة © {new Date().getFullYear()} باسقات للأعمال</p>
          <div className="flex gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              سياسة الخصوصية
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              شروط الاستخدام
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
