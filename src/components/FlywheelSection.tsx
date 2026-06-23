/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TranslationSet } from '../types';

interface FlywheelSectionProps {
  t: TranslationSet;
}

export function FlywheelSection({ t }: FlywheelSectionProps) {
  return (
    <section id="flywheel" className="py-20 bg-gradient-to-br from-[#0D1B42] via-[#0f2150] to-[#1B3A7A] text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Intro headers */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[11px] font-extrabold text-brand-cyan tracking-[2px] uppercase mb-3 text-[#A8D8EA]">
            {t.fly_label}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-white leading-[1.18] tracking-tight mb-5">
            {t.fly_title}
          </h2>
          <p className="text-[15px] sm:text-[16px] text-white/65 leading-[1.78] font-normal">
            {t.fly_sub}
          </p>
        </div>

        {/* 2-Column Flywheel Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Rotating Flywheel SVG Visual */}
          <div className="flex justify-center flex-col items-center">
            
            <div className="relative w-[280px] h-[280px] transition-transform duration-300 hover:scale-105 cursor-pointer">
              {/* Outer decorative halo */}
              <div className="absolute inset-0 rounded-full border-[10px] border-cyan-400/10 animate-pulse pointer-events-none" />
              
              <img 
                src="https://lh3.googleusercontent.com/d/1jOzJwL5x9NeIEu-jVp8JVzhc_juBo2K4" 
                alt="Diagram KHAYR" 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] object-contain" 
                referrerPolicy="no-referrer"
              />

              {/* Labels */}
              <div className="absolute top-[8px] left-[50%] -translate-x-[50%] bg-[#2449ae] border border-[#1B3A7A] px-3.5 py-1 rounded-full text-[13px] font-black text-brand-cyan uppercase tracking-wider shadow">
                FONDASI
              </div>
              <div className="absolute bottom-[28px] right-[4px] bg-[#2449ae] border border-[#3D8B7A] px-3.5 py-1 rounded-full text-[13px] font-black text-[#86EFAC] uppercase tracking-wider shadow">
                OPERASI
              </div>
              <div className="absolute bottom-[28px] left-[4px] bg-[#2449ae] border border-[#4A82CC] px-3.5 py-1 rounded-full text-[13px] font-black text-[#A8D8EA] uppercase tracking-wider shadow">
                WAWASAN
              </div>
            </div>

            {/* Testimonials highlight note beneath the flywheel tool */}
            <div className="bg-white/5 border border-white/10 rounded-[14px] p-5.5 mt-10 max-w-[420px] text-center backdrop-blur-sm shadow-md">
              <p className="text-[12.5px] text-white/80 font-medium leading-[1.7] italic">
                {t.fly_quote}
              </p>
            </div>
          </div>

          {/* Right Column: Three sequential business steps */}
          <div className="flex flex-col gap-5.5">
            
            {/* Step 1: Foundation */}
            <div className="bg-white/7 border border-white/12 rounded-[14px] p-5.5 transition-colors hover:bg-white/10 flex gap-4 items-start">
              <div className="w-[38px] h-[38px] rounded-full bg-[#1B3A7A] flex items-center justify-center font-black text-[14px] shrink-0 text-white shadow-md">
                1
              </div>
              <div>
                <h3 className="text-[14px] font-extrabold text-white leading-tight">{t.fly_p1_title}</h3>
                <span className="text-[11px] text-white/50 font-bold mt-0.5 block">{t.fly_p1_sub}</span>
                <p className="text-[12px] text-white/75 mt-2 leading-[1.6] font-medium">
                  {t.fly_p1_desc}
                </p>
              </div>
            </div>

            {/* Step 2: Operations */}
            <div className="bg-white/7 border border-white/12 rounded-[14px] p-5.5 transition-colors hover:bg-white/10 flex gap-4 items-start">
              <div className="w-[38px] h-[38px] rounded-full bg-[#3D8B7A] flex items-center justify-center font-black text-[14px] shrink-0 text-white shadow-md">
                2
              </div>
              <div>
                <h3 className="text-[14px] font-extrabold text-white leading-tight">{t.fly_p2_title}</h3>
                <span className="text-[11px] text-white/50 font-bold mt-0.5 block">{t.fly_p2_sub}</span>
                <p className="text-[12px] text-white/75 mt-2 leading-[1.6] font-medium">
                  {t.fly_p2_desc}
                </p>
              </div>
            </div>

            {/* Step 3: Command Insights */}
            <div className="bg-white/7 border border-white/12 rounded-[14px] p-5.5 transition-colors hover:bg-white/10 flex gap-4 items-start">
              <div className="w-[38px] h-[38px] rounded-full bg-[#4A82CC] flex items-center justify-center font-black text-[14px] shrink-0 text-white shadow-md">
                3
              </div>
              <div>
                <h3 className="text-[14px] font-extrabold text-white leading-tight">{t.fly_p3_title}</h3>
                <span className="text-[11px] text-white/50 font-bold mt-0.5 block">{t.fly_p3_sub}</span>
                <p className="text-[12px] text-white/75 mt-2 leading-[1.6] font-medium">
                  {t.fly_p3_desc}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
