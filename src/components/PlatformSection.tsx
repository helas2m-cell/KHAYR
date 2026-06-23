/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TranslationSet } from '../types';
import { motion } from 'motion/react';
import { Stethoscope, ClipboardCheck, HeartHandshake, TrendingUp } from 'lucide-react';

interface PlatformSectionProps {
  t: TranslationSet;
}

export function PlatformSection({ t }: PlatformSectionProps) {
  return (
    <section id="platform" className="py-20 bg-[#F4F6FA] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Intro headers */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[11px] font-extrabold text-[#4E9E8F] tracking-[2px] uppercase mb-3">
            {t.plat_label}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#141928] leading-[1.18] tracking-tight mb-5">
            {t.plat_title}
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#5A5F6B] leading-[1.78] font-normal">
            {t.plat_sub}
          </p>
        </div>

        {/* Roles 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Doctor / Nurse */}
          <motion.div
            whileHover={{ y: -6, boxShadow: "0 10px 36px rgba(27,58,122,0.1)" }}
            className="bg-white border-2 border-[#DDE3EE] hover:border-[#4A82CC] rounded-[14px] p-6 text-center transition-all duration-300 flex flex-col items-center"
          >
            <div className="w-[54px] h-[54px] rounded-full border-2 border-[#1B3A7A] flex items-center justify-center mb-4 text-[#1B3A7A]">
              <Stethoscope className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h3 className="text-[14px] font-bold text-[#1B3A7A] mb-1.5">{t.role1_title}</h3>
            <span className="text-[10px] font-extrabold text-[#4E9E8F] bg-[#E6F5F2] px-3 py-1 rounded-full mb-3.5 inline-block">
              {t.role1_badge}
            </span>
            <p className="text-[12px] text-[#5A5F6B] leading-[1.65] font-medium">
              {t.role1_text}
            </p>
          </motion.div>

          {/* Card 2: Admin Staff */}
          <motion.div
            whileHover={{ y: -6, boxShadow: "0 10px 36px rgba(27,58,122,0.1)" }}
            className="bg-white border-2 border-[#DDE3EE] hover:border-[#4A82CC] rounded-[14px] p-6 text-center transition-all duration-300 flex flex-col items-center"
          >
            <div className="w-[54px] h-[54px] rounded-full border-2 border-[#1B3A7A] flex items-center justify-center mb-4 text-[#1B3A7A]">
              <ClipboardCheck className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h3 className="text-[14px] font-bold text-[#1B3A7A] mb-1.5">{t.role2_title}</h3>
            <span className="text-[10px] font-extrabold text-[#4E9E8F] bg-[#E6F5F2] px-3 py-1 rounded-full mb-3.5 inline-block">
              {t.role2_badge}
            </span>
            <p className="text-[12px] text-[#5A5F6B] leading-[1.65] font-medium">
              {t.role2_text}
            </p>
          </motion.div>

          {/* Card 3: Patient */}
          <motion.div
            whileHover={{ y: -6, boxShadow: "0 10px 36px rgba(27,58,122,0.1)" }}
            className="bg-white border-2 border-[#DDE3EE] hover:border-[#4A82CC] rounded-[14px] p-6 text-center transition-all duration-300 flex flex-col items-center"
          >
            <div className="w-[54px] h-[54px] rounded-full border-2 border-[#1B3A7A] flex items-center justify-center mb-4 text-[#1B3A7A]">
              <HeartHandshake className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h3 className="text-[14px] font-bold text-[#1B3A7A] mb-1.5">{t.role3_title}</h3>
            <span className="text-[10px] font-extrabold text-[#4E9E8F] bg-[#E6F5F2] px-3 py-1 rounded-full mb-3.5 inline-block">
              {t.role3_badge}
            </span>
            <p className="text-[12px] text-[#5A5F6B] leading-[1.65] font-medium">
              {t.role3_text}
            </p>
          </motion.div>

          {/* Card 4: Owner / Manager */}
          <motion.div
            whileHover={{ y: -6, boxShadow: "0 10px 36px rgba(27,58,122,0.1)" }}
            className="bg-white border-2 border-[#DDE3EE] hover:border-[#4A82CC] rounded-[14px] p-6 text-center transition-all duration-300 flex flex-col items-center"
          >
            <div className="w-[54px] h-[54px] rounded-full border-2 border-[#1B3A7A] flex items-center justify-center mb-4 text-[#1B3A7A]">
              <TrendingUp className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h3 className="text-[14px] font-bold text-[#1B3A7A] mb-1.5">{t.role4_title}</h3>
            <span className="text-[10px] font-extrabold text-[#4E9E8F] bg-[#E6F5F2] px-3 py-1 rounded-full mb-3.5 inline-block">
              {t.role4_badge}
            </span>
            <p className="text-[12px] text-[#5A5F6B] leading-[1.65] font-medium">
              {t.role4_text}
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
