/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TranslationSet } from '../types';
import { motion } from 'motion/react';

interface TestimonialsSectionProps {
  t: TranslationSet;
}

export function TestimonialsSection({ t }: TestimonialsSectionProps) {
  return (
    <section className="py-20 bg-[#F4F6FA]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Intro headers */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[11px] font-extrabold text-[#4E9E8F] tracking-[2px] uppercase mb-3">
            {t.testi_label}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#141928] leading-[1.18] tracking-tight mb-5">
            {t.testi_title}
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#5A5F6B] leading-[1.78] font-normal">
            {t.testi_sub}
          </p>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Testi 1 */}
          <motion.div
            whileHover={{ y: -4, boxShadow: "0 10px 36px rgba(27,58,122,0.06)" }}
            className="bg-white border border-[#DDE3EE] rounded-[14px] p-8 flex flex-col transition-all duration-200"
          >
            <div className="text-amber-400 text-[14px] font-extrabold mb-4 select-none tracking-[3px]">
              ★★★★★
            </div>
            <p className="text-[13px] text-[#5A5F6B] leading-[1.8] italic mb-6 flex-1">
              {t.t1_text}
            </p>
            <div className="flex items-center gap-3.5 pt-4 border-t border-[#F4F6FA]">
              <div className="w-[40px] h-[40px] rounded-full bg-[#1B3A7A] text-white flex items-center justify-center font-extrabold text-[12px]">
                DL
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-[#141928]">Dr. Layla Al-Mansouri</h4>
                <p className="text-[11px] text-[#8A8F9A] font-semibold mt-0.5 leading-snug">{t.t1_role}</p>
              </div>
            </div>
          </motion.div>

          {/* Testi 2 */}
          <motion.div
            whileHover={{ y: -4, boxShadow: "0 10px 36px rgba(27,58,122,0.06)" }}
            className="bg-white border border-[#DDE3EE] rounded-[14px] p-8 flex flex-col transition-all duration-200"
          >
            <div className="text-amber-400 text-[14px] font-extrabold mb-4 select-none tracking-[3px]">
              ★★★★★
            </div>
            <p className="text-[13px] text-[#5A5F6B] leading-[1.8] italic mb-6 flex-1">
              {t.t2_text}
            </p>
            <div className="flex items-center gap-3.5 pt-4 border-t border-[#F4F6FA]">
              <div className="w-[40px] h-[40px] rounded-full bg-[#3D8B7A] text-white flex items-center justify-center font-extrabold text-[12px]">
                AK
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-[#141928]">Ahmed Khalid</h4>
                <p className="text-[11px] text-[#8A8F9A] font-semibold mt-0.5 leading-snug">{t.t2_role}</p>
              </div>
            </div>
          </motion.div>

          {/* Testi 3 */}
          <motion.div
            whileHover={{ y: -4, boxShadow: "0 10px 36px rgba(27,58,122,0.06)" }}
            className="bg-white border border-[#DDE3EE] rounded-[14px] p-8 flex flex-col transition-all duration-200"
          >
            <div className="text-amber-400 text-[14px] font-extrabold mb-4 select-none tracking-[3px]">
              ★★★★★
            </div>
            <p className="text-[13px] text-[#5A5F6B] leading-[1.8] italic mb-6 flex-1">
              {t.t3_text}
            </p>
            <div className="flex items-center gap-3.5 pt-4 border-t border-[#F4F6FA]">
              <div className="w-[40px] h-[40px] rounded-full bg-[#2B5BAD] text-white flex items-center justify-center font-extrabold text-[12px]">
                SR
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-[#141928]">Dr. Sara Rashid</h4>
                <p className="text-[11px] text-[#8A8F9A] font-semibold mt-0.5 leading-snug">{t.t3_role}</p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
