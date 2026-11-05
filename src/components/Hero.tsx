/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { TranslationSet } from '../types';
import { motion } from 'motion/react';
import { AnimatedCounter, TiltShowcase } from './MotionPrimitives';

interface HeroProps {
  t: TranslationSet;
}

function renderFormattedText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-bold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export function Hero({ t }: HeroProps) {
  // Simple periodic live dynamic values to simulate live activity
  const [livePulse, setLivePulse] = useState(true);
  const [activeQueueIndex, setActiveQueueIndex] = useState<number>(0);

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setLivePulse(prev => !prev);
    }, 1200);

    const queueInterval = setInterval(() => {
      setActiveQueueIndex(prev => (prev + 1) % 3);
    }, 3600);

    return () => {
      clearInterval(pulseInterval);
      clearInterval(queueInterval);
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
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-24 -right-24 h-[500px] w-[500px] rounded-full bg-cyan-400/8 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full bg-teal-400/8 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Text & Controls */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            {/* Live active badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="inline-flex items-center gap-2 max-w-fit px-4 py-1.5 bg-brand-cyan/15 border border-brand-cyan/25 rounded-full text-[11px] font-bold text-[#A8D8EA] tracking-wide mb-6 backdrop-blur-xs"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4E9E8F]"></span>
              </span>
              {t.hero_badge}
            </motion.div>

            {/* Headline H1 with accent coloring */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.13] mb-6"
            >
              {t.hero_h1a}{' '}
              <span className="text-brand-cyan uppercase not-italic inline-block font-black tracking-wide">
                {t.hero_h1b}
              </span>
            </motion.h1>

            {/* Subtext description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="text-[15px] sm:text-[16px] text-white/75 leading-[1.78] max-w-[540px] mb-8 font-medium whitespace-pre-line text-left"
            >
              {renderFormattedText(t.hero_sub)}
            </motion.p>

            {/* Action CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-4"
            >
              <button
                onClick={() => handleCtaClick('#contact')}
                className="px-8 py-4 bg-white text-[#1B3A7A] hover:bg-[#EEF2FB] rounded-[10px] text-[14px] font-extrabold shadow-lg hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                {t.hero_btn1}
              </button>
              <button
                onClick={() => handleCtaClick('#platform')}
                className="px-8 py-4 bg-transparent border-2 border-white/45 text-white hover:bg-white/10 hover:border-white/70 rounded-[10px] text-[14px] font-bold hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                {t.hero_btn2}
              </button>
            </motion.div>

            {/* Free note label */}
            <p className="text-[11px] text-white/40 font-medium tracking-wide mb-8">
              {t.hero_note}
            </p>

            {/* Core Stats Counter Dashboard Grid */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-white/12"
            >
              <div className="group">
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-[#A8D8EA] transition-colors">
                  <AnimatedCounter target={40} suffix="%" duration={1300} />
                </div>
                <div className="text-[10px] sm:text-[11px] text-white/50 font-semibold mt-1 uppercase tracking-wider leading-snug">
                  {t.hero_stat1}
                </div>
              </div>
              <div className="group">
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-[#A8D8EA] transition-colors">
                  <AnimatedCounter target={3} suffix="×" duration={1100} />
                </div>
                <div className="text-[10px] sm:text-[11px] text-white/50 font-semibold mt-1 uppercase tracking-wider leading-snug">
                  {t.hero_stat2}
                </div>
              </div>
              <div className="group">
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-[#A8D8EA] transition-colors">
                  <AnimatedCounter target={98} suffix="%" duration={1500} />
                </div>
                <div className="text-[10px] sm:text-[11px] text-white/50 font-semibold mt-1 uppercase tracking-wider leading-snug">
                  {t.hero_stat3}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column Layout: Live Performance Reporting Card */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <TiltShowcase
              float={true}
              floatAmplitude={6}
              floatDuration={5.5}
              maxTilt={3.5}
              shimmer={true}
              className="w-full max-w-[480px] rounded-[16px]"
            >
              <div className="w-full bg-white rounded-[16px] text-[#141928] shadow-[0_28px_64px_rgba(0,0,0,0.35)] p-5 border border-slate-100 relative group overflow-hidden">
                {/* Card Title Bar */}
                <div className="flex items-center justify-between border-b border-[#DDE3EE]/60 pb-4 mb-4">
                  <span className="text-[12px] font-extrabold text-[#141928] uppercase tracking-wider">
                    {t.db_title}
                  </span>
                  
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#EEF2FB] text-[#1B3A7A] rounded-full text-[10px] font-black">
                    <span className={`w-1.5 h-1.5 rounded-full bg-[#10B981] ${livePulse ? 'opacity-100 scale-110' : 'opacity-40 scale-95'} transition-all duration-300`} />
                    <span>{t.db_live}</span>
                  </div>
                </div>

                {/* Three Metric boxes */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-[#F4F6FA] p-3 rounded-[8px] hover:bg-[#EEF2FB] hover:-translate-y-0.5 transition-all duration-200">
                    <div className="text-[18px] font-black text-[#141928] tracking-tight">
                      <AnimatedCounter target={28} duration={1200} />
                    </div>
                    <div className="text-[9px] text-[#8A8F9A] uppercase tracking-[0.4px] font-bold mt-1">
                      {t.db_m1}
                    </div>
                    <div className="text-[9px] text-[#3D8B7A] font-extrabold mt-1">
                      {t.db_d1}
                    </div>
                  </div>

                  <div className="bg-[#F4F6FA] p-3 rounded-[8px] hover:bg-[#EEF2FB] hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden">
                    <div className="text-[18px] font-black text-[#141928] tracking-tight">
                      <AnimatedCounter target={48} prefix="Rp" suffix="Jt" duration={1350} />
                    </div>
                    <div className="text-[9px] text-[#8A8F9A] uppercase tracking-[0.4px] font-bold mt-1">
                      {t.db_m2}
                    </div>
                    <div className="text-[9px] text-[#3D8B7A] font-extrabold mt-1">
                      {t.db_d2}
                    </div>
                  </div>

                  <div className="bg-[#F4F6FA] p-3 rounded-[8px] hover:bg-[#EEF2FB] hover:-translate-y-0.5 transition-all duration-200">
                    <div className="text-[18px] font-black text-[#141928] tracking-tight">
                      <AnimatedCounter target={94} suffix="%" duration={1500} />
                    </div>
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

                {/* Appointments List stack with interactive highlight */}
                <div className="flex flex-col gap-2">
                  {/* Regular check-in 1 */}
                  <div
                    onMouseEnter={() => setActiveQueueIndex(0)}
                    className={`flex items-center gap-3 p-2.5 rounded-[8px] border transition-all duration-300 ${
                      activeQueueIndex === 0
                        ? 'bg-[#EEF2FB]/75 border-[#1B3A7A]/25 shadow-xs translate-x-0.5'
                        : 'bg-[#F4F6FA] hover:bg-slate-100 border-slate-100'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full bg-[#1B3A7A] text-white flex items-center justify-center text-[10px] font-extrabold shrink-0">
                      SH
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[12px] font-extrabold text-[#141928] truncate">Sofyan Hadi</div>
                      <div className="text-[9px] text-[#8A8F9A] font-medium">{t.db_treat1}</div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[10px] font-extrabold text-[#1B3A7A] tabular-nums">09:30</span>
                      <span className="px-2 py-0.5 bg-[#E6F5F2] text-[#2D7A68] rounded-full text-[9px] font-extrabold">
                        {t.db_confirmed}
                      </span>
                    </div>
                  </div>

                  {/* Regular check-in 2 */}
                  <div
                    onMouseEnter={() => setActiveQueueIndex(1)}
                    className={`flex items-center gap-3 p-2.5 rounded-[8px] border transition-all duration-300 ${
                      activeQueueIndex === 1
                        ? 'bg-[#EEF2FB]/75 border-[#1B3A7A]/25 shadow-xs translate-x-0.5'
                        : 'bg-[#F4F6FA] hover:bg-slate-100 border-slate-100'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full bg-[#2B5BAD] text-white flex items-center justify-center text-[10px] font-extrabold shrink-0">
                      MK
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[12px] font-extrabold text-[#141928] truncate">Marwah Kurniawan</div>
                      <div className="text-[9px] text-[#8A8F9A] font-medium">{t.db_treat2}</div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[10px] font-extrabold text-[#1B3A7A] tabular-nums">10:15</span>
                      <span className="px-2 py-0.5 bg-[#FEF3C7] text-[#92400E] rounded-full text-[9px] font-extrabold">
                        {t.db_pending}
                      </span>
                    </div>
                  </div>

                  {/* Regular check-in 3 */}
                  <div
                    onMouseEnter={() => setActiveQueueIndex(2)}
                    className={`flex items-center gap-3 p-2.5 rounded-[8px] border transition-all duration-300 ${
                      activeQueueIndex === 2
                        ? 'bg-[#EEF2FB]/75 border-[#1B3A7A]/25 shadow-xs translate-x-0.5'
                        : 'bg-[#F4F6FA] hover:bg-slate-100 border-slate-100'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full bg-[#3D8B7A] text-white flex items-center justify-center text-[10px] font-extrabold shrink-0">
                      LA
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[12px] font-extrabold text-[#141928] truncate">Lusi Amran</div>
                      <div className="text-[9px] text-[#8A8F9A] font-medium">{t.db_treat3}</div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[10px] font-extrabold text-[#1B3A7A] tabular-nums">11:00</span>
                      <span className="px-2 py-0.5 bg-[#EEF2FB] text-[#1B3A7A] rounded-full text-[9px] font-extrabold">
                        {t.db_done}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </TiltShowcase>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

