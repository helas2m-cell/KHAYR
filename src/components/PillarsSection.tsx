/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TranslationSet } from '../types';
import { LayoutGrid, Users, BarChart3 } from 'lucide-react';

interface PillarsSectionProps {
  t: TranslationSet;
}

export function PillarsSection({ t }: PillarsSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Intro headers */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[11px] font-extrabold text-[#4E9E8F] tracking-[2px] uppercase mb-3">
            {t.pillars_label}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#141928] leading-[1.18] tracking-tight mb-5">
            {t.pillars_title}
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#5A5F6B] leading-[1.78] font-normal">
            {t.pillars_sub}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Pillar 1: Fondasi */}
          <div className="rounded-[14px] overflow-hidden border border-[#DDE3EE] hover:shadow-lg transition-all flex flex-col bg-white">
            <div className="bg-gradient-to-r from-[#1B3A7A] to-[#2B5BAD] p-5 text-white flex items-center gap-4">
              <div className="w-[38px] h-[38px] rounded-[9px] bg-white/15 flex items-center justify-center text-white flex-shrink-0">
                <LayoutGrid className="w-5 h-5" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-[14px] font-extrabold leading-tight">{t.p1_head}</h3>
                <span className="text-[10px] text-white/60 font-semibold mt-1 inline-block">{t.p1_sub}</span>
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col gap-4">
              <div className="flex gap-3 items-start">
                <span className="w-2 h-2 rounded-full bg-[#1B3A7A] mt-2 flex-shrink-0" />
                <p className="text-[12px] text-[#5A5F6B] leading-[1.6]" dangerouslySetInnerHTML={{ __html: t.p1_i1 }} />
              </div>
              <div className="flex gap-3 items-start">
                <span className="w-2 h-2 rounded-full bg-[#1B3A7A] mt-2 flex-shrink-0" />
                <p className="text-[12px] text-[#5A5F6B] leading-[1.6]" dangerouslySetInnerHTML={{ __html: t.p1_i2 }} />
              </div>
              <div className="flex gap-3 items-start">
                <span className="w-2 h-2 rounded-full bg-[#1B3A7A] mt-2 flex-shrink-0" />
                <p className="text-[12px] text-[#5A5F6B] leading-[1.6]" dangerouslySetInnerHTML={{ __html: t.p1_i3 }} />
              </div>
              <div className="flex gap-3 items-start">
                <span className="w-2 h-2 rounded-full bg-[#1B3A7A] mt-2 flex-shrink-0" />
                <p className="text-[12px] text-[#5A5F6B] leading-[1.6]" dangerouslySetInnerHTML={{ __html: t.p1_i4 }} />
              </div>
              <div className="flex gap-3 items-start">
                <span className="w-2 h-2 rounded-full bg-[#1B3A7A] mt-2 flex-shrink-0" />
                <p className="text-[12px] text-[#5A5F6B] leading-[1.6]" dangerouslySetInnerHTML={{ __html: t.p1_i5 }} />
              </div>
              <div className="flex gap-3 items-start">
                <span className="w-2 h-2 rounded-full bg-[#1B3A7A] mt-2 flex-shrink-0" />
                <p className="text-[12px] text-[#5A5F6B] leading-[1.6]" dangerouslySetInnerHTML={{ __html: t.p1_i6 }} />
              </div>
            </div>
          </div>

          {/* Pillar 2: Perjalanan Pasien */}
          <div className="rounded-[14px] overflow-hidden border border-[#DDE3EE] hover:shadow-lg transition-all flex flex-col bg-white">
            <div className="bg-gradient-to-r from-[#3D8B7A] to-[#4E9E8F] p-5 text-white flex items-center gap-4">
              <div className="w-[38px] h-[38px] rounded-[9px] bg-white/15 flex items-center justify-center text-white flex-shrink-0">
                <Users className="w-5 h-5" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-[14px] font-extrabold leading-tight">{t.p2_head}</h3>
                <span className="text-[10px] text-white/60 font-semibold mt-1 inline-block">{t.p2_sub}</span>
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col gap-4">
              <div className="flex gap-3 items-start">
                <span className="w-2 h-2 rounded-full bg-[#3D8B7A] mt-2 flex-shrink-0" />
                <p className="text-[12px] text-[#5A5F6B] leading-[1.6]" dangerouslySetInnerHTML={{ __html: t.p2_i1 }} />
              </div>
              <div className="flex gap-3 items-start">
                <span className="w-2 h-2 rounded-full bg-[#3D8B7A] mt-2 flex-shrink-0" />
                <p className="text-[12px] text-[#5A5F6B] leading-[1.6]" dangerouslySetInnerHTML={{ __html: t.p2_i2 }} />
              </div>
              <div className="flex gap-3 items-start">
                <span className="w-2 h-2 rounded-full bg-[#3D8B7A] mt-2 flex-shrink-0" />
                <p className="text-[12px] text-[#5A5F6B] leading-[1.6]" dangerouslySetInnerHTML={{ __html: t.p2_i3 }} />
              </div>
              <div className="flex gap-3 items-start">
                <span className="w-2 h-2 rounded-full bg-[#3D8B7A] mt-2 flex-shrink-0" />
                <p className="text-[12px] text-[#5A5F6B] leading-[1.6]" dangerouslySetInnerHTML={{ __html: t.p2_i4 }} />
              </div>
              <div className="flex gap-3 items-start">
                <span className="w-2 h-2 rounded-full bg-[#3D8B7A] mt-2 flex-shrink-0" />
                <p className="text-[12px] text-[#5A5F6B] leading-[1.6]" dangerouslySetInnerHTML={{ __html: t.p2_i5 }} />
              </div>
            </div>
          </div>

          {/* Pillar 3: Pusat Komando */}
          <div className="rounded-[14px] overflow-hidden border border-[#DDE3EE] hover:shadow-lg transition-all flex flex-col bg-white">
            <div className="bg-gradient-to-r from-[#4A82CC] to-[#6BAED6] p-5 text-white flex items-center gap-4">
              <div className="w-[38px] h-[38px] rounded-[9px] bg-white/15 flex items-center justify-center text-white flex-shrink-0">
                <BarChart3 className="w-5 h-5" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-[14px] font-extrabold leading-tight">{t.p3_head}</h3>
                <span className="text-[10px] text-white/60 font-semibold mt-1 inline-block">{t.p3_sub}</span>
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col gap-4">
              <div className="flex gap-3 items-start">
                <span className="w-2 h-2 rounded-full bg-[#4A82CC] mt-2 flex-shrink-0" />
                <p className="text-[12px] text-[#5A5F6B] leading-[1.6]" dangerouslySetInnerHTML={{ __html: t.p3_i1 }} />
              </div>
              <div className="flex gap-3 items-start">
                <span className="w-2 h-2 rounded-full bg-[#4A82CC] mt-2 flex-shrink-0" />
                <p className="text-[12px] text-[#5A5F6B] leading-[1.6]" dangerouslySetInnerHTML={{ __html: t.p3_i2 }} />
              </div>
              <div className="flex gap-3 items-start">
                <span className="w-2 h-2 rounded-full bg-[#4A82CC] mt-2 flex-shrink-0" />
                <p className="text-[12px] text-[#5A5F6B] leading-[1.6]" dangerouslySetInnerHTML={{ __html: t.p3_i3 }} />
              </div>
              <div className="flex gap-3 items-start">
                <span className="w-2 h-2 rounded-full bg-[#4A82CC] mt-2 flex-shrink-0" />
                <p className="text-[12px] text-[#5A5F6B] leading-[1.6]" dangerouslySetInnerHTML={{ __html: t.p3_i4 }} />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
