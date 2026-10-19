/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './types';
import { translations } from './data';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { PlatformSection } from './components/PlatformSection';
import { PillarsSection } from './components/PillarsSection';
import { ModulesSection } from './components/ModulesSection';
import { VoucherSection } from './components/VoucherSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingPage } from './components/PricingPage';
import { SecurityBand } from './components/SecurityBand';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackendDashboard } from './components/BackendDashboard';

function WhatsAppFAB({ lang }: { lang: Language }) {
  const phoneNumber = "6281932415455";
  const defaultMsg = lang === 'id' ? "Halo, saya tertarik dengan solusi KHAYR OS." : "Hello, I am interested in KHAYR OS solutions.";
  const message = encodeURIComponent(defaultMsg);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-[60px] h-[60px] bg-[#25D366] text-white rounded-full shadow-xl hover:scale-110 active:scale-95 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-9 h-9"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
      </svg>
    </a>
  );
}

export default function App() {
  // Config state for language selection: default 'id' (Indonesian) as per spec
  const [lang, setLang] = useState<Language>('id');
  
  // Current page view state ('home' | 'pricing')
  const [currentPage, setCurrentPage] = useState<'home' | 'pricing'>('home');

  // Connect pricing selection to contact form size selection
  const [preselectedClinicSize, setPreselectedClinicSize] = useState<string>('');

  // Active session state for back office
  const [loggedInUser, setLoggedInUser] = useState<{ email: string; role: string; roleLabel: string; name: string } | null>(null);

  const t = translations[lang];

  // Router and scrolling handler
  const handleNav = (page: 'home' | 'pricing', hash?: string) => {
    setCurrentPage(page);
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Plan selection from separate PricingPage
  const handleSelectPlanOnPricingPage = (planName: string, sizeOption: string) => {
    setPreselectedClinicSize(sizeOption);
    handleNav('home', '#contact');
  };

  return (
    <div className="min-h-screen bg-white text-[#141928] selection:bg-[#1B3A7A] selection:text-white antialiased transition-all">
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        t={t} 
        loggedInUser={loggedInUser} 
        setLoggedInUser={setLoggedInUser} 
        currentPage={currentPage}
        onNavigate={handleNav}
      />
      
      <main>
        {loggedInUser && (
          <div className="max-w-7xl mx-auto px-6 pt-4">
            <BackendDashboard 
              lang={lang} 
              userRole={loggedInUser.role} 
              userName={loggedInUser.name} 
              onClose={() => setLoggedInUser(null)} 
            />
          </div>
        )}

        {currentPage === 'home' ? (
          <>
            <Hero t={t} />
            <TrustBar t={t} />
            <PlatformSection t={t} />
            <PillarsSection t={t} />
            <ModulesSection t={t} />
            <VoucherSection t={t} lang={lang} />
            <TestimonialsSection t={t} />
            <SecurityBand t={t} />
            <ContactSection t={t} preselectedClinicSize={preselectedClinicSize} />
          </>
        ) : (
          <PricingPage 
            t={t} 
            lang={lang} 
            onSelectPlan={handleSelectPlanOnPricingPage} 
            onBackToHome={() => handleNav('home')} 
          />
        )}
      </main>

      <Footer t={t} onNavigate={handleNav} />
      
      <WhatsAppFAB lang={lang} />
    </div>
  );
}

