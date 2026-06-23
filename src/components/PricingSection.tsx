/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TranslationSet } from '../types';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';

interface PricingSectionProps {
  t: TranslationSet;
  onSelectPlan: (planName: string, clinicSizeValue: string) => void;
}

export function PricingSection({ t, onSelectPlan }: PricingSectionProps) {
  const handlePlanClick = (planName: string, clinicSizeValue: string) => {
    onSelectPlan(planName, clinicSizeValue);
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Intro headers */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[11px] font-extrabold text-[#4E9E8F] tracking-[2px] uppercase mb-3">
            {t.price_label}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#141928] leading-[1.18] tracking-tight mb-5">
            {t.price_title}
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#5A5F6B] leading-[1.78] font-normal">
            {t.price_sub}
          </p>
        </div>

        {/* 3 plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Plan 1: Starter */}
          <motion.div
            whileHover={{ y: -4 }}
            className="border-2 border-[#DDE3EE] rounded-[14px] p-8 flex flex-col bg-white relative transition-all"
          >
            <span className="text-[10px] font-bold text-[#8A8F9A] uppercase tracking-[2px] mb-4.5 block">
              {t.plan1_name}
            </span>
            <div className="flex items-baseline gap-1.5 mb-5 select-none">
              <span className="text-[16px] font-bold text-[#8A8F9A]">{t.p1_currency}</span>
              <span className="text-3xl sm:text-[36px] font-black text-[#141928] tracking-tight">{t.p1_num}</span>
              <span className="text-[13px] text-[#8A8F9A] font-medium">{t.plan1_period}</span>
            </div>
            <p className="text-[12px] text-[#5A5F6B] leading-[1.65] mb-6 font-medium">
              {t.plan1_desc}
            </p>
            
            {/* Features checklist */}
            <div className="flex flex-col gap-3.5 mb-8 flex-1">
              <div className="flex items-start gap-2 text-[12px] text-[#5A5F6B] font-medium">
                <div className="w-[17px] h-[17px] rounded-full bg-[#EEF2FB] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#1B3A7A]" strokeWidth={3} />
                </div>
                <span>{t.plan1_f1}</span>
              </div>
              <div className="flex items-start gap-2 text-[12px] text-[#5A5F6B] font-medium">
                <div className="w-[17px] h-[17px] rounded-full bg-[#EEF2FB] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#1B3A7A]" strokeWidth={3} />
                </div>
                <span>{t.plan1_f2}</span>
              </div>
              <div className="flex items-start gap-2 text-[12px] text-[#5A5F6B] font-medium">
                <div className="w-[17px] h-[17px] rounded-full bg-[#EEF2FB] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#1B3A7A]" strokeWidth={3} />
                </div>
                <span>{t.plan1_f3}</span>
              </div>
              <div className="flex items-start gap-2 text-[12px] text-[#5A5F6B] font-medium">
                <div className="w-[17px] h-[17px] rounded-full bg-[#EEF2FB] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#1B3A7A]" strokeWidth={3} />
                </div>
                <span>{t.plan1_f4}</span>
              </div>
              <div className="flex items-start gap-2 text-[12px] text-[#5A5F6B] font-medium">
                <div className="w-[17px] h-[17px] rounded-full bg-[#EEF2FB] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#1B3A7A]" strokeWidth={3} />
                </div>
                <span>{t.plan1_f5}</span>
              </div>
            </div>

            <button
              onClick={() => handlePlanClick('Starter', 'opt_s1')}
              className="mt-auto w-full py-[12px] border-2 border-[#1B3A7A] hover:bg-[#EEF2FB] text-[#1B3A7A] rounded-[8px] text-[13px] font-extrabold cursor-pointer text-center active:scale-95 transition-all"
            >
              {t.plan1_btn}
            </button>
          </motion.div>

          {/* Plan 2: Professional - Featured */}
          <motion.div
            whileHover={{ y: -4 }}
            className="border-3 border-[#1B3A7A] rounded-[14px] p-8 flex flex-col bg-white relative shadow-xl shadow-brand-navy/6 transition-all"
          >
            {/* Top popular badge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1B3A7A] text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-[0.6px] shadow whitespace-nowrap">
              {t.plan2_badge}
            </div>

            <span className="text-[10px] font-bold text-[#8A8F9A] uppercase tracking-[2px] mb-4.5 block mt-2">
              {t.plan2_name}
            </span>
            <div className="flex items-baseline gap-1.5 mb-5 select-none">
              <span className="text-[16px] font-bold text-[#8A8F9A]">{t.p2_currency}</span>
              <span className="text-3xl sm:text-[36px] font-black text-[#141928] tracking-tight">{t.p2_num}</span>
              <span className="text-[13px] text-[#8A8F9A] font-medium">{t.plan2_period}</span>
            </div>
            <p className="text-[12px] text-[#5A5F6B] leading-[1.65] mb-6 font-medium">
              {t.plan2_desc}
            </p>
            
            {/* Features checklist */}
            <div className="flex flex-col gap-3.5 mb-8 flex-1">
              <div className="flex items-start gap-2 text-[12px] text-[#5A5F6B] font-medium">
                <div className="w-[17px] h-[17px] rounded-full bg-[#EEF2FB] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#1B3A7A]" strokeWidth={3} />
                </div>
                <span>{t.plan2_f1}</span>
              </div>
              <div className="flex items-start gap-2 text-[12px] text-[#5A5F6B] font-medium">
                <div className="w-[17px] h-[17px] rounded-full bg-[#EEF2FB] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#1B3A7A]" strokeWidth={3} />
                </div>
                <span>{t.plan2_f2}</span>
              </div>
              <div className="flex items-start gap-2 text-[12px] text-[#5A5F6B] font-medium">
                <div className="w-[17px] h-[17px] rounded-full bg-[#EEF2FB] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#1B3A7A]" strokeWidth={3} />
                </div>
                <span>{t.plan2_f3}</span>
              </div>
              <div className="flex items-start gap-2 text-[12px] text-[#5A5F6B] font-medium">
                <div className="w-[17px] h-[17px] rounded-full bg-[#EEF2FB] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#1B3A7A]" strokeWidth={3} />
                </div>
                <span>{t.plan2_f4}</span>
              </div>
              <div className="flex items-start gap-2 text-[12px] text-[#5A5F6B] font-medium">
                <div className="w-[17px] h-[17px] rounded-full bg-[#EEF2FB] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#1B3A7A]" strokeWidth={3} />
                </div>
                <span>{t.plan2_f5}</span>
              </div>
              <div className="flex items-start gap-2 text-[12px] text-[#5A5F6B] font-medium">
                <div className="w-[17px] h-[17px] rounded-full bg-[#EEF2FB] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#1B3A7A]" strokeWidth={3} />
                </div>
                <span>{t.plan2_f6}</span>
              </div>
            </div>

            <button
              onClick={() => handlePlanClick('Professional', 'opt_s2')}
              className="mt-auto w-full py-[12px] bg-[#1B3A7A] hover:bg-[#112660] text-white rounded-[8px] text-[13px] font-extrabold cursor-pointer text-center active:scale-95 transition-all shadow"
            >
              {t.plan2_btn}
            </button>
          </motion.div>

          {/* Plan 3: Enterprise */}
          <motion.div
            whileHover={{ y: -4 }}
            className="border-2 border-[#DDE3EE] rounded-[14px] p-8 flex flex-col bg-white relative transition-all"
          >
            <span className="text-[10px] font-bold text-[#8A8F9A] uppercase tracking-[2px] mb-4.5 block">
              {t.plan3_name}
            </span>
            <div className="flex items-baseline gap-1.5 mb-5 select-none">
              <span className="text-3xl sm:text-[32px] font-extrabold text-[#141928] tracking-tight">
                {t.plan3_price}
              </span>
            </div>
            <p className="text-[12px] text-[#5A5F6B] leading-[1.65] mb-6 font-medium">
              {t.plan3_desc}
            </p>
            
            {/* Features checklist */}
            <div className="flex flex-col gap-3.5 mb-8 flex-1">
              <div className="flex items-start gap-2 text-[12px] text-[#5A5F6B] font-medium">
                <div className="w-[17px] h-[17px] rounded-full bg-[#EEF2FB] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#1B3A7A]" strokeWidth={3} />
                </div>
                <span>{t.plan3_f1}</span>
              </div>
              <div className="flex items-start gap-2 text-[12px] text-[#5A5F6B] font-medium">
                <div className="w-[17px] h-[17px] rounded-full bg-[#EEF2FB] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#1B3A7A]" strokeWidth={3} />
                </div>
                <span>{t.plan3_f2}</span>
              </div>
              <div className="flex items-start gap-2 text-[12px] text-[#5A5F6B] font-medium">
                <div className="w-[17px] h-[17px] rounded-full bg-[#EEF2FB] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#1B3A7A]" strokeWidth={3} />
                </div>
                <span>{t.plan3_f3}</span>
              </div>
              <div className="flex items-start gap-2 text-[12px] text-[#5A5F6B] font-medium">
                <div className="w-[17px] h-[17px] rounded-full bg-[#EEF2FB] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#1B3A7A]" strokeWidth={3} />
                </div>
                <span>{t.plan3_f4}</span>
              </div>
              <div className="flex items-start gap-2 text-[12px] text-[#5A5F6B] font-medium">
                <div className="w-[17px] h-[17px] rounded-full bg-[#EEF2FB] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#1B3A7A]" strokeWidth={3} />
                </div>
                <span>{t.plan3_f5}</span>
              </div>
            </div>

            <button
              onClick={() => handlePlanClick('Enterprise', 'opt_s4')}
              className="mt-auto w-full py-[12px] border-2 border-[#1B3A7A] hover:bg-[#EEF2FB] text-[#1B3A7A] rounded-[8px] text-[13px] font-extrabold cursor-pointer text-center active:scale-95 transition-all"
            >
              {t.plan3_btn}
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
