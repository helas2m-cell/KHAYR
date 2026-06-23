/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TranslationSet } from '../types';
import { ShieldAlert, KeyRound, CheckCircle2, History, TrendingUp } from 'lucide-react';

interface SecurityBandProps {
  t: TranslationSet;
}

export function SecurityBand({ t }: SecurityBandProps) {
  return (
    <div className="bg-[#EEF2FB] border-t border-[#C8D4F0] border-b border-[#C8D4F0] py-4.5 select-none font-bold text-[11px] text-[#1B3A7A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          
          <div className="flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-[#1B3A7A]" />
            <span>{t.sec1}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <KeyRound className="w-4 h-4 text-[#1B3A7A]" />
            <span>{t.sec2}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#1B3A7A]" />
            <span>{t.sec4}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <History className="w-4 h-4 text-[#1B3A7A]" />
            <span>{t.sec5}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-[#1B3A7A]" />
            <span>{t.sec6}</span>
          </div>

        </div>
      </div>
    </div>
  );
}
