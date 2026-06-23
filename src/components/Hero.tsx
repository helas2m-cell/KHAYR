/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { TranslationSet } from '../types';
import { motion } from 'motion/react';

interface HeroProps {
  t: TranslationSet;
}

export function Hero({ t }: HeroProps) {
  // Simple periodic live dynamic values to simulate live activity
  const [livePulse, setLivePulse] = useState(true);
  const [showProgress, setShowProgress] = useState(0);

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setLivePulse(prev => !prev);
    }, 1200);

    const progressInterval = setInterval(() => {
      setShowProgress(prev => (prev + 1) % 100);
    }, 150);

    return () => {
      clearInterval(pulseInterval);
      clearInterval(progressInterval);
    };
  }, []);

  const handleCtaClick = (hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2150] via-[#1B3A7A] via-[#2B5BAD] to-[#3a72c9] py-16 lg:py-24 text-white">
      {/* Decorative ambient blur circle */}
      <div className="absolute -top-24 -right-24 h-[500px] w-[500px] rounded-full bg-cyan-400/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full bg-teal-400/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Text & Controls */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {/* Live active badge */}
            <div className="inline-flex items-center gap-2 max-w-fit px-4 py-1.5 bg-brand-cyan/15 border border-brand-cyan/25 rounded-full text-[11px] font-bold text-[#A8D8EA] tracking-wide mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4E9E8F]"></span>
              </span>
              {t.hero_badge}
            </div>

            {/* Headline H1 with accent coloring */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.13] mb-6">
              {t.hero_h1a}{' '}
              <span className="text-brand-cyan uppercase not-italic inline-block font-black tracking-wide">
                {t.hero_h1b}
              </span>
            </h1>

            {/* Subtext description */}
            <p className="text-[15px] sm:text-[16px] text-white/75 leading-[1.78] max-w-[500px] mb-8 font-medium">
              {t.hero_sub}
            </p>

            {/* Action CTA row */}
            <div className="flex flex-wrap gap-4 mb-4">
              <button
                onClick={() => handleCtaClick('#contact')}
                className="px-8 py-4 bg-white text-[#1B3A7A] hover:bg-[#EEF2FB] rounded-[10px] text-[14px] font-extrabold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                {t.hero_btn1}
              </button>
              <button
                onClick={() => handleCtaClick('#platform')}
                className="px-8 py-4 bg-transparent border-2 border-white/45 text-white hover:bg-white/10 rounded-[10px] text-[14px] font-bold transition-all cursor-pointer"
              >
                {t.hero_btn2}
              </button>
            </div>

            {/* Free note label */}
            <p className="text-[11px] text-white/40 font-medium tracking-wide mb-8">
              {t.hero_note}
            </p>

            {/* Core Stats Counter Dashboard Grid */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/12">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">40%</div>
                <div className="text-[10px] sm:text-[11px] text-white/50 font-semibold mt-1 uppercase tracking-wider leading-snug">
                  {t.hero_stat1}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">3×</div>
                <div className="text-[10px] sm:text-[11px] text-white/50 font-semibold mt-1 uppercase tracking-wider leading-snug">
                  {t.hero_stat2}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">98%</div>
                <div className="text-[10px] sm:text-[11px] text-white/50 font-semibold mt-1 uppercase tracking-wider leading-snug">
                  {t.hero_stat3}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column Layout: Live Performance Reporting Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-[480px] bg-white rounded-[16px] text-[#141928] shadow-[0_28px_64px_rgba(0,0,0,0.35)] p-5 border border-slate-100 relative group overflow-hidden">
              {/* Card Title Bar */}
              <div className="flex items-center justify-between border-b border-[#DDE3EE]/60 pb-4 mb-4">
                <span className="text-[12px] font-extrabold text-[#141928] uppercase tracking-wider">
                  {t.db_title}
                </span>
                
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#EEF2FB] text-[#1B3A7A] rounded-full text-[10px] font-black">
                  <span className={`w-1.5 h-1.5 rounded-full bg-[#10B981] ${livePulse ? 'opacity-100' : 'opacity-40'} transition-opacity duration-300`} />
                  <span>{t.db_live}</span>
                </div>
              </div>

              {/* Three Metric boxes */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-[#F4F6FA] p-3 rounded-[8px] hover:bg-[#EEF2FB] transition-colors">
                  <div className="text-[18px] font-black text-[#141928] tracking-tight">28</div>
                  <div className="text-[9px] text-[#8A8F9A] uppercase tracking-[0.4px] font-bold mt-1">
                    {t.db_m1}
                  </div>
                  <div className="text-[9px] text-[#3D8B7A] font-extrabold mt-1">
                    {t.db_d1}
                  </div>
                </div>

                <div className="bg-[#F4F6FA] p-3 rounded-[8px] hover:bg-[#EEF2FB] transition-colors relative overflow-hidden">
                  <div className="text-[18px] font-black text-[#141928] tracking-tight">Rp48Jt</div>
                  <div className="text-[9px] text-[#8A8F9A] uppercase tracking-[0.4px] font-bold mt-1">
                    {t.db_m2}
                  </div>
                  <div className="text-[9px] text-[#3D8B7A] font-extrabold mt-1">
                    {t.db_d2}
                  </div>
                </div>

                <div className="bg-[#F4F6FA] p-3 rounded-[8px] hover:bg-[#EEF2FB] transition-colors">
                  <div className="text-[18px] font-black text-[#141928] tracking-tight">94%</div>
                  <div className="text-[9px] text-[#8A8F9A] uppercase tracking-[0.4px] font-bold mt-1">
                    {t.db_m3}
                  </div>
                  <div className="text-[9px] text-[#3D8B7A] font-extrabold mt-1">
                    {t.db_d3}
                  </div>
                </div>
              </div>

              {/* Patient Appointment Queue title */}
              <div className="text-[10px] font-extrabold text-[#141928] mb-3 select-none uppercase tracking-[0.5px]">
                {t.db_upcoming}
              </div>

              {/* Appointments List stack with pristine state indicator dots */}
              <div className="flex flex-col gap-2">
                {/* Regular check-in 1 */}
                <div className="flex items-center gap-3 p-2.5 bg-[#F4F6FA] hover:bg-slate-100 rounded-[8px] border border-slate-100 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#1B3A7A] text-white flex items-center justify-center text-[10px] font-extrabold">
                    SH
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] font-extrabold text-[#141928] truncate">Sofyan Hadi</div>
                    <div className="text-[9px] text-[#8A8F9A] font-medium">{t.db_treat1}</div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] font-extrabold text-[#1B3A7A]">09:30</span>
                    <span className="px-2 py-0.5 bg-[#E6F5F2] text-[#2D7A68] rounded-full text-[9px] font-extrabold">
                      {t.db_confirmed}
                    </span>
                  </div>
                </div>

                {/* Regular check-in 2 */}
                <div className="flex items-center gap-3 p-2.5 bg-[#F4F6FA] hover:bg-slate-100 rounded-[8px] border border-slate-100 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#2B5BAD] text-white flex items-center justify-center text-[10px] font-extrabold">
                    MK
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] font-extrabold text-[#141928] truncate">Marwah Kurniawan</div>
                    <div className="text-[9px] text-[#8A8F9A] font-medium">{t.db_treat2}</div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] font-extrabold text-[#1B3A7A]">10:15</span>
                    <span className="px-2 py-0.5 bg-[#FEF3C7] text-[#92400E] rounded-full text-[9px] font-extrabold">
                      {t.db_pending}
                    </span>
                  </div>
                </div>

                {/* Regular check-in 3 */}
                <div className="flex items-center gap-3 p-2.5 bg-[#F4F6FA] hover:bg-slate-100 rounded-[8px] border border-slate-100 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#3D8B7A] text-white flex items-center justify-center text-[10px] font-extrabold">
                    LA
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] font-extrabold text-[#141928] truncate">Lusi Amran</div>
                    <div className="text-[9px] text-[#8A8F9A] font-medium">{t.db_treat3}</div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] font-extrabold text-[#1B3A7A]">11:00</span>
                    <span className="px-2 py-0.5 bg-[#EEF2FB] text-[#1B3A7A] rounded-full text-[9px] font-extrabold">
                      {t.db_done}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
