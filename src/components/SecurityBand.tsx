/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TranslationSet } from '../types';
import { ShieldAlert, KeyRound, CheckCircle2, History, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

interface SecurityBandProps {
  t: TranslationSet;
}

export function SecurityBand({ t }: SecurityBandProps) {
  const items = [
    { icon: ShieldAlert, text: t.sec1 },
    { icon: KeyRound, text: t.sec2 },
    { icon: CheckCircle2, text: t.sec4 },
    { icon: History, text: t.sec5 },
    { icon: TrendingUp, text: t.sec6 },
  ];

  return (
    <div className="bg-[#EEF2FB] border-t border-[#C8D4F0] border-b border-[#C8D4F0] py-4.5 select-none font-bold text-[11px] text-[#1B3A7A]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
                }}
                whileHover={{ y: -1.5, scale: 1.02 }}
                className="flex items-center gap-1.5 transition-transform"
              >
                <Icon className="w-4 h-4 text-[#1B3A7A]" />
                <span>{item.text}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
