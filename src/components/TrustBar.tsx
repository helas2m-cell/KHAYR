/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TranslationSet } from '../types';
import { Shield, Clock, Lock, Users, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface TrustBarProps {
  t: TranslationSet;
}

export function TrustBar({ t }: TrustBarProps) {
  return (
    <div className="bg-[#F4F6FA] border-b border-[#DDE3EE]/80 py-4.5 select-none font-semibold text-[12px] text-[#5A5F6B]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-3.5"
        >
          
          <div className="flex items-center gap-2 hover:text-[#1B3A7A] hover:-translate-y-0.5 transition-all duration-200">
            <Shield className="w-4.5 h-4.5 text-[#1B3A7A]" strokeWidth={2.4} />
            <span>{t.trust1}</span>
          </div>

          <div className="flex items-center gap-2 hover:text-[#1B3A7A] hover:-translate-y-0.5 transition-all duration-200">
            <Clock className="w-4.5 h-4.5 text-[#1B3A7A]" strokeWidth={2.4} />
            <span>{t.trust2}</span>
          </div>

          <div className="flex items-center gap-2 hover:text-[#1B3A7A] hover:-translate-y-0.5 transition-all duration-200">
            <Lock className="w-4.5 h-4.5 text-[#1B3A7A]" strokeWidth={2.4} />
            <span>{t.trust4}</span>
          </div>

          <div className="flex items-center gap-2 hover:text-[#1B3A7A] hover:-translate-y-0.5 transition-all duration-200">
            <Users className="w-4.5 h-4.5 text-[#1B3A7A]" strokeWidth={2.4} />
            <span>{t.trust5}</span>
          </div>

          <div className="flex items-center gap-2 font-bold text-[#1B3A7A] hover:-translate-y-0.5 transition-all duration-200">
            <Star className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
            <span>{t.trust6}</span>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
