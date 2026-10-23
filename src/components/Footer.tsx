/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TranslationSet } from '../types';

interface FooterProps {
  t: TranslationSet;
  onNavigate?: (page: 'home' | 'pricing', hash?: string) => void;
}

export function Footer({ t, onNavigate }: FooterProps) {
  const isId = t.nav_pricing === "Harga";
  const defaultMsg = isId ? "Halo, saya tertarik dengan solusi KHAYR OS." : "Hello, I am interested in KHAYR OS solutions.";
  const waUrl = `https://wa.me/6281932415455?text=${encodeURIComponent(defaultMsg)}`;

  const handleScrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      if (id === '#pricing') {
        onNavigate('pricing');
      } else {
        onNavigate('home', id);
      }
    } else {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#0D1B42] text-[#ffffff8c] pt-16 pb-8 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img 
                src="https://lh3.googleusercontent.com/d/150WvQCwLbSMGadPl2eVEdXoK-zB7j813" 
                alt="KHAYR Logo" 
                className="h-[76px] w-auto object-contain flex-shrink-0" 
                referrerPolicy="no-referrer"
              />
            </div>
            
            <p className="text-[12px] leading-[1.75] text-white/40 max-w-[340px] font-medium">
              {t.footer_desc}
            </p>
          </div>

          {/* Col 2: Platform */}
          <div className="flex flex-col gap-3.5">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[1.5px] mb-1">
              {t.footer_col1}
            </h4>
            <a href="#platform" onClick={(e) => handleScrollToSection('#platform', e)} className="text-[12px] text-white/40 hover:text-white transition-colors font-medium">
              {t.footer_f1_1}
            </a>
            <a href="#modules" onClick={(e) => handleScrollToSection('#modules', e)} className="text-[12px] text-white/40 hover:text-white transition-colors font-medium">
              {t.footer_f1_2}
            </a>
            <a href="#voucher" onClick={(e) => handleScrollToSection('#voucher', e)} className="text-[12px] text-white/40 hover:text-white transition-colors font-medium">
              {isId ? 'Voucher Promosi' : 'Promotional Vouchers'}
            </a>
            <a href="#contact" onClick={(e) => handleScrollToSection('#contact', e)} className="text-[12px] text-white/40 hover:text-white transition-colors font-medium">
              {t.footer_f1_4}
            </a>
            <a href="#platform" onClick={(e) => handleScrollToSection('#platform', e)} className="text-[12px] text-white/40 hover:text-white transition-colors font-medium">
              {t.footer_f1_5}
            </a>
          </div>

          {/* Col 3: Company */}
          <div className="flex flex-col gap-3.5">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[1.5px] mb-1">
              {t.footer_col2}
            </h4>
            <a href="#contact" onClick={(e) => handleScrollToSection('#contact', e)} className="text-[12px] text-white/40 hover:text-white transition-colors font-medium">
              {t.footer_f2_1}
            </a>
            <a href="#contact" onClick={(e) => handleScrollToSection('#contact', e)} className="text-[12px] text-white/40 hover:text-white transition-colors font-medium">
              {t.footer_f2_2}
            </a>
            <a href="#contact" onClick={(e) => handleScrollToSection('#contact', e)} className="text-[12px] text-white/40 hover:text-white transition-colors font-medium">
              {t.footer_f2_3}
            </a>
            <a href="#contact" onClick={(e) => handleScrollToSection('#contact', e)} className="text-[12px] text-white/40 hover:text-white transition-colors font-medium">
              {t.footer_f2_4}
            </a>
            <a href="#contact" onClick={(e) => handleScrollToSection('#contact', e)} className="text-[12px] text-white/40 hover:text-white transition-colors font-medium">
              {t.footer_f2_5}
            </a>
          </div>

          {/* Col 4: Support */}
          <div className="flex flex-col gap-3.5">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[1.5px] mb-1">
              {t.footer_col3}
            </h4>
            <a href="#contact" onClick={(e) => handleScrollToSection('#contact', e)} className="text-[12px] text-white/40 hover:text-white transition-colors font-medium">
              {t.footer_f3_1}
            </a>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="text-[12px] text-white/40 hover:text-white transition-colors font-medium">
              {t.footer_f3_2}
            </a>
            <a href="#contact" onClick={(e) => handleScrollToSection('#contact', e)} className="text-[12px] text-white/40 hover:text-white transition-colors font-medium">
              {t.footer_f3_3}
            </a>
            <a href="#contact" onClick={(e) => handleScrollToSection('#contact', e)} className="text-[12px] text-white/40 hover:text-white transition-colors font-medium">
              {t.footer_f3_4}
            </a>
            <a href="#contact" onClick={(e) => handleScrollToSection('#contact', e)} className="text-[12px] text-white/40 hover:text-white transition-colors font-medium">
              {t.footer_f3_5}
            </a>
          </div>

        </div>

        {/* Bottom copyright & SATUSEHAT segment */}
        <div className="border-t border-white/7 pt-6.5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-medium leading-none">
          
          <span>{t.footer_copy}</span>

          <div className="flex flex-wrap items-center gap-3.5">
            <img
              src="/assets/aistudio/KOMDIGI_and_PSE_with_white_Logos_on_Transparent_Background_27084cb2.png"
              alt="KOMDIGI & PSE Lingkup Privat"
              className="h-[51px] w-auto object-contain"
            />

            {/* SATUSEHAT Integration Badge */}
            <div className="flex items-center gap-3 bg-white/8 border border-white/18 rounded-[10px] px-3.5 py-1.5 select-none">
              <img
                src="/assets/aistudio/SATUSEHAT_White_Logo_on_Transparent_Background_3bea9b8f.png"
                alt="SATUSEHAT Logo"
                className="h-[38px] md:h-[42px] w-auto object-contain"
              />
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
