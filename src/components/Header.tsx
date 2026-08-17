import React, { useState, useEffect } from 'react';
import { BASQAT_IMAGES } from '../data/basqatData';
import { BasqatLogo } from './BasqatLogo';
import { Menu, X, ArrowLeft, UserPlus, Calendar } from 'lucide-react';

interface HeaderProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
  onOpenConsultantModal: () => void;
  onOpenStartJourneyModal?: () => void;
  onOpenContactModal: () => void;
  onNavigateToAssessment?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath = '/',
  onNavigate,
  onOpenConsultantModal,
  onOpenStartJourneyModal,
  onOpenContactModal,
  onNavigateToAssessment,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'الرئيسية' },
    { path: '/consulting', label: 'الاستشارات' },
    { path: '/programs', label: 'ريادة الاعمال' },
    { path: '/workshops', label: 'الورش ' },
    { path: '/spaces', label: 'المساحات والقاعات' },
    // { path: '/consultants', label: 'المستشارون' },
    { path: '/about', label: 'عن باسقات' },
    { path: '/contact', label: 'تواصل معنا' },
  ];

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 w-full z-50 transition-all duration-300 bg-[#F7F5EE]/95 backdrop-blur-md border-b border-[#E5E0D2] ${
          isScrolled ? 'py-2 sm:py-2.5 shadow-xs' : 'py-2.5 sm:py-3.5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <nav className="flex items-center justify-between">
            {/* Logo - 3x Size */}
            <button
              onClick={() => handleNavClick('/')}
              className="flex items-center gap-3 group transition-transform hover:scale-[1.02] shrink-0 text-right cursor-pointer bg-transparent border-0 p-0"
              id="brand-logo"
            >
              <BasqatLogo size="3xl" variant="dark" />
            </button>

            {/* Desktop Navigation Links */}
            <ul className="hidden xl:flex items-center gap-5 2xl:gap-6 text-[#192A27] font-medium text-sm">
              {navLinks.map((link) => {
                const isActive = currentPath === link.path;
                return (
                  <li key={link.path}>
                    <button
                      onClick={() => handleNavClick(link.path)}
                      className={`transition-colors py-1 relative cursor-pointer ${
                        isActive
                          ? 'text-[#1A634F] font-bold'
                          : 'text-[#556965] hover:text-[#1A634F]'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute -bottom-1.5 right-0 left-0 h-0.5 bg-[#1A634F] rounded-full" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-2.5">
              <button
                id="header-consultant-btn"
                onClick={() => {
                  if (onNavigate) handleNavClick('/join-consultant');
                  else onOpenConsultantModal();
                }}
                className={`px-4 py-2 rounded-md font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs ${
                  currentPath === '/join-consultant'
                    ? 'bg-[#1A634F] text-white border border-[#1A634F]'
                    : 'bg-white hover:bg-[#EAE6DB] text-[#1A634F] border border-[#D5D0C0]'
                }`}
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>انضم كمستشار</span>
              </button>

              <button
                id="header-book-consultation-btn"
                onClick={onOpenContactModal}
                className="bg-[#54421F] hover:bg-[#423418] text-white px-4 py-2 rounded-md font-bold text-xs sm:text-sm transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>احجز استشارتك</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                onClick={onOpenContactModal}
                className="bg-[#54421F] text-white px-3 py-1.5 rounded-md font-bold text-xs shadow-xs"
              >
                <span>احجز استشارتك</span>
              </button>
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#1A634F] p-2 rounded-lg hover:bg-[#EAE6DB] transition-colors focus:outline-none cursor-pointer"
                aria-label="القائمة الرئيسية"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 xl:hidden bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#1A634F] text-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-white/10">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <BasqatLogo size="sm" variant="white" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white p-1 cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="py-5 space-y-1.5">
                {navLinks.map((link) => {
                  const isActive = currentPath === link.path;
                  return (
                    <button
                      key={link.path}
                      onClick={() => handleNavClick(link.path)}
                      className={`w-full text-right py-2 px-3 rounded-lg transition-all text-sm font-medium flex items-center justify-between ${
                        isActive
                          ? 'bg-white/15 text-white font-bold'
                          : 'text-gray-200 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowLeft className="w-4 h-4 opacity-50 rtl:rotate-0" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Drawer Actions */}
            <div className="pt-5 border-t border-white/10 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContactModal();
                }}
                className="w-full bg-[#54421F] hover:bg-[#423418] text-white py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>احجز استشارتك</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigate) handleNavClick('/join-consultant');
                  else onOpenConsultantModal();
                }}
                className="w-full bg-white/15 hover:bg-white/25 text-white py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <UserPlus className="w-4 h-4" />
                <span>انضم كمستشار</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
