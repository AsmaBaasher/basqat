import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { ConsultingPage } from './pages/ConsultingPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { WorkshopsPage } from './pages/WorkshopsPage';
import { SpacesPage } from './pages/SpacesPage';
import { ConsultantsPage } from './pages/ConsultantsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { JoinConsultantPage } from './pages/JoinConsultantPage';

// Modals
import { ProgramDetailsModal } from './components/modals/ProgramDetailsModal';
import { ConsultantModal } from './components/modals/ConsultantModal';
import { ServiceDetailsModal } from './components/modals/ServiceDetailsModal';
import { ContactModal } from './components/modals/ContactModal';
import { LegalModal } from './components/modals/LegalModal';

import { Program, Service, WorkshopItem, SpaceItem, ExpertConsultant } from './types';
import { MessageCircle, ArrowUp, CheckCircle } from 'lucide-react';

export default function App() {
  // Routing State
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined' && window.location.pathname) {
      const p = window.location.pathname;
      return p === '' ? '/' : p;
    }
    return '/';
  });

  const [routeParams, setRouteParams] = useState<Record<string, any>>({});

  // Sync with browser history back/forward
  useEffect(() => {
    const handlePopState = () => {
      const p = window.location.pathname || '/';
      setCurrentPath(p);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string, params?: Record<string, any>) => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    setCurrentPath(cleanPath);
    if (params) setRouteParams(params);
    else setRouteParams({});

    try {
      if (window.location.pathname !== cleanPath) {
        window.history.pushState(null, '', cleanPath);
      }
    } catch {
      // safe fallback in iframe environments
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Modal states
  const [isConsultantModalOpen, setIsConsultantModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState<string>('احجز استشارتك');
  const [contactNotes, setContactNotes] = useState<string>('');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleBookConsultation = (subjectOrNotes?: string) => {
    if (subjectOrNotes) {
      setContactSubject(`استشارة: ${subjectOrNotes}`);
      setContactNotes(`طلب استشارة في مجال: ${subjectOrNotes}`);
    } else {
      setContactSubject('احجز استشارتك');
      setContactNotes('');
    }
    setIsContactModalOpen(true);
  };

  const handleBookExpert = (expert: ExpertConsultant) => {
    setContactSubject(`حجز استشارة مع ${expert.name}`);
    setContactNotes(`طلب حجز جلسة استشارية مع ${expert.name} (${expert.title}) - التكلفة: ${expert.rate}`);
    setIsContactModalOpen(true);
  };

  const handleRegisterWorkshop = (workshop: WorkshopItem) => {
    setContactSubject(`التسجيل في: ${workshop.title}`);
    setContactNotes(`طلب حجز مقعد في ${workshop.title} (التاريخ: ${workshop.date} - ${workshop.mode})`);
    setIsContactModalOpen(true);
  };

  const handleBookSpace = (space: SpaceItem) => {
    setContactSubject(`حجز: ${space.title}`);
    setContactNotes(`طلب حجز أو استفسار عن ${space.title}`);
    setIsContactModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render current view based on path
  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/consulting':
        return (
          <ConsultingPage
            onNavigate={navigate}
            onBookConsultation={handleBookConsultation}
          />
        );

      case '/programs':
        return (
          <ProgramsPage
            onNavigate={navigate}
            onSelectProgram={(program) => setSelectedProgram(program)}
            onBookConsultation={handleBookConsultation}
          />
        );

      case '/workshops':
        return (
          <WorkshopsPage
            onRegisterWorkshop={handleRegisterWorkshop}
            onBookConsultation={handleBookConsultation}
          />
        );

      case '/spaces':
        return (
          <SpacesPage
            onBookSpace={handleBookSpace}
            onBookConsultation={handleBookConsultation}
          />
        );

      case '/consultants':
        return (
          <ConsultantsPage
            initialCategory={routeParams.category || 'all'}
            onNavigate={navigate}
            onBookExpert={handleBookExpert}
            onOpenConsultantModal={() => navigate('/join-consultant')}
            onBookConsultation={handleBookConsultation}
          />
        );

      case '/about':
        return (
          <AboutPage
            onNavigate={navigate}
            onBookConsultation={handleBookConsultation}
          />
        );

      case '/contact':
        return (
          <ContactPage
            onBookConsultation={handleBookConsultation}
          />
        );

      case '/join-consultant':
        return (
          <JoinConsultantPage
            onNavigate={navigate}
          />
        );

      case '/':
      default:
        return (
          <HomePage
            onNavigate={navigate}
            onBookConsultation={handleBookConsultation}
            onSelectService={(service) => setSelectedService(service)}
            onSelectProgram={(program) => setSelectedProgram(program)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F5EE] text-[#192A27] font-sans antialiased selection:bg-[#54421F] selection:text-white relative flex flex-col justify-between">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#1A634F] text-white px-6 py-3 rounded-full shadow-2xl border border-white/20 flex items-center gap-3 animate-fade-in text-xs sm:text-sm font-bold">
          <CheckCircle className="w-5 h-5 text-emerald-300" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Navigation Header */}
      <Header
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenConsultantModal={() => navigate('/join-consultant')}
        onOpenStartJourneyModal={() => handleBookConsultation()}
        onOpenContactModal={() => handleBookConsultation()}
        onNavigateToAssessment={() => navigate('/programs')}
      />

      {/* Main Page Body (with pt-20 to clear fixed header) */}
      <main className="flex-1 pt-16 sm:pt-20">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onNavigateSection={(section) => navigate(`/${section}`)}
        onNavigate={navigate}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
        {/* WhatsApp Quick Consultation */}
        <button
          onClick={() => handleBookConsultation('واتساب مباشر')}
          className="w-12 h-12 rounded-full bg-[#1A634F] hover:bg-[#124a39] text-white shadow-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="احجز استشارتك"
          title="احجز استشارتك"
        >
          <MessageCircle className="w-6 h-6" />
        </button>

        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#192A27] border border-[#E5E0D2] shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="العودة للأعلى"
          title="العودة للأعلى"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      {/* Application Modals */}
      <ProgramDetailsModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onEnrollSuccess={(title) => {
          showToast(`تم استلام طلب تسجيلك في ${title} بنجاح!`);
        }}
      />

      <ConsultantModal
        isOpen={isConsultantModalOpen}
        onClose={() => setIsConsultantModalOpen(false)}
      />

      <ServiceDetailsModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestSuccess={(title) => {
          showToast(`تم استلام طلبك لخدمة ${title} بنجاح!`);
        }}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        initialSubject={contactSubject}
        initialNotes={contactNotes}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
