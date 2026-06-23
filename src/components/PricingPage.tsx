/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TranslationSet, Language } from '../types';
import { Check, ArrowLeft, Shield, HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface PricingPageProps {
  t: TranslationSet;
  lang: Language;
  onSelectPlan: (planName: string, clinicSizeValue: string) => void;
  onBackToHome: () => void;
}

export function PricingPage({ t, lang, onSelectPlan, onBackToHome }: PricingPageProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handlePlanClick = (planName: string, clinicSizeValue: string) => {
    onSelectPlan(planName, clinicSizeValue);
  };

  const faqItems = lang === 'id' ? [
    {
      q: "Apakah ada biaya pendaftaran atau biaya setup awal?",
      a: "Tidak ada biaya tersembunyi. Semua paket harga KHAYR sudah termasuk onboarding komprehensif, pelatihan staf/dokter gratis, dan bantuan migrasi data dari sistem klinis lama Anda sampai selesai."
    },
    {
      q: "Sistem pembayaran pembayaran langganannya seperti apa?",
      a: "Sistem pembayaran dilakukan secara bulanan. Anda juga dapat memilih paket tahunan untuk menikmati diskon khusus. Pembayaran dapat ditransfer melalui Virtual Account bank nasional terkemuka."
    },
    {
      q: "Bagaimana cara kerja migrasi data dari rekam medis lama?",
      a: "Tim bantuan teknis kami akan memetakan data Anda (excel, csv, atau database rekam medis lama) ke format cerdas KHAYR OS secara aman. Proses ini biasanya selesai dalam 1-2 hari kerja tanpa mengganggu operasional klinik Anda."
    },
    {
      q: "Apakah modul SATUSEHAT Kemenkes memerlukan biaya tambahan?",
      a: "Sama sekali tidak. Komitmen KHAYR adalah mendukung regulasi rekam medis digital nasional. Integrasi dengan platform SATUSEHAT Kemenkes RI sudah tertanam langsung (native) dan aktif di semua paket tanpa biaya tambahan."
    },
    {
      q: "Bagaimana jika saya memerlukan kustomisasi modul tambahan?",
      a: "Paket Enterprise kami sangat fleksibel untuk menampung kebutuhan kustom khusus, integrasi API sistem pihak ketiga, atau integrasi perangkat keras klinik Anda. Silakan hubungi tim penjualan kami untuk mendiskusikannya."
    }
  ] : [
    {
      q: "Are there any registration or setup fees?",
      a: "There are no hidden fees. All KHAYR plans include complete onboarding, staff/doctor training, and comprehensive data migration support from your legacy system."
    },
    {
      q: "How does the subscription payment work?",
      a: "Subscriptions are billed monthly. Annual subscription methods are also available with special discounts. Payments are securely made through Virtual Accounts of major banks."
    },
    {
      q: "How is data migrated from our legacy systems?",
      a: "Our migration team securely maps your data (Excel, CSV, or old medical record databases) into the intelligent KHAYR OS database structures. This usually takes 1-2 business days with zero clinical downtime."
    },
    {
      q: "Does the SATUSEHAT Kemenkes integration cost extra?",
      a: "Not at all. KHAYR is committed to backing national electronic medical records mandates. Seamless integration with SATUSEHAT Ministry of Health platform is built natively into all subscription tiers."
    },
    {
      q: "What if our clinic requires custom module development?",
      a: "Our Enterprise tier offers complete flexibility for dedicated customization, custom API bridges, or IoT clinic diagnostic hardware integrations. Please talk tool custom sales for tailored solutions."
    }
  ];

  return (
    <div className="bg-[#F4F6FA] min-h-screen py-10 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Back navigation thread & Breadcrumb */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <button 
            onClick={onBackToHome}
            className="group flex items-center gap-2 text-xs font-bold text-[#1B3A7A] hover:text-[#112660] transition-colors bg-white px-4 py-2.5 rounded-[8px] border border-[#DDE3EE] shadow-sm w-fit cursor-pointer"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            {lang === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}
          </button>

          <div className="flex items-center gap-2 text-[11px] font-bold text-[#8A8F9A] uppercase tracking-[0.5px]">
            <span>{lang === 'id' ? 'Beranda' : 'Home'}</span>
            <span>/</span>
            <span className="text-[#141928]">{lang === 'id' ? 'Halaman Harga' : 'Pricing Page'}</span>
          </div>
        </div>

        {/* Dedicated Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#EEF2FB] border border-[#1B3A7A]/10 text-[#1B3A7A] px-3.5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-[1.5px] mb-4.5">
            <Sparkles size={12} className="text-[#1B3A7A]" />
            {t.price_label}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#141928] leading-[1.15] tracking-tight mb-5">
            {t.price_title}
          </h1>
          <p className="text-[15px] sm:text-[17px] text-[#5A5F6B] leading-[1.75] font-medium max-w-2xl mx-auto">
            {t.price_sub}
          </p>
        </div>

        {/* 3 plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-20">
          
          {/* Plan 1: Starter */}
          <motion.div
            whileHover={{ y: -4 }}
            className="border border-[#DDE3EE] rounded-[16px] p-8 flex flex-col bg-white relative transition-all shadow-sm shadow-[#1B3A7A]/3"
          >
            <span className="text-[10px] font-bold text-[#8A8F9A] uppercase tracking-[2px] mb-4.5 block">
              {t.plan1_name}
            </span>
            <div className="flex items-baseline gap-1.5 mb-5 select-none">
              <span className="text-[16px] font-bold text-[#8A8F9A]">{t.p1_currency}</span>
              <span className="text-3xl sm:text-[36px] font-black text-[#141928] tracking-tight">{t.p1_num}</span>
              <span className="text-[13px] text-[#8A8F9A] font-medium">{t.plan1_period}</span>
            </div>
            <p className="text-[12.5px] text-[#5A5F6B] leading-[1.65] mb-6 font-medium">
              {t.plan1_desc}
            </p>
            
            {/* Features checklist */}
            <div className="flex flex-col gap-3.5 mb-8 flex-1">
              <div className="flex items-start gap-2.5 text-[12.5px] text-[#5A5F6B] font-medium">
                <div className="w-[18px] h-[18px] rounded-full bg-[#E6F5F2] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#3D8B7A]" strokeWidth={3} />
                </div>
                <span>{t.plan1_f1}</span>
              </div>
              <div className="flex items-start gap-2.5 text-[12.5px] text-[#5A5F6B] font-medium">
                <div className="w-[18px] h-[18px] rounded-full bg-[#E6F5F2] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#3D8B7A]" strokeWidth={3} />
                </div>
                <span>{t.plan1_f2}</span>
              </div>
              <div className="flex items-start gap-2.5 text-[12.5px] text-[#5A5F6B] font-medium">
                <div className="w-[18px] h-[18px] rounded-full bg-[#E6F5F2] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#3D8B7A]" strokeWidth={3} />
                </div>
                <span>{t.plan1_f3}</span>
              </div>
              <div className="flex items-start gap-2.5 text-[12.5px] text-[#5A5F6B] font-medium">
                <div className="w-[18px] h-[18px] rounded-full bg-[#E6F5F2] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#3D8B7A]" strokeWidth={3} />
                </div>
                <span>{t.plan1_f4}</span>
              </div>
              <div className="flex items-start gap-2.5 text-[12.5px] text-[#5A5F6B] font-medium">
                <div className="w-[18px] h-[18px] rounded-full bg-[#E6F5F2] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#3D8B7A]" strokeWidth={3} />
                </div>
                <span>{t.plan1_f5}</span>
              </div>
            </div>

            <button
              onClick={() => handlePlanClick('Starter', 'opt_s1')}
              className="mt-auto w-full py-3 border-2 border-[#1B3A7A] hover:bg-[#EEF2FB] text-[#1B3A7A] rounded-[8px] text-[13px] font-extrabold cursor-pointer text-center active:scale-95 transition-all"
            >
              {t.plan1_btn}
            </button>
          </motion.div>

          {/* Plan 2: Professional - Featured */}
          <motion.div
            whileHover={{ y: -4 }}
            className="border-[3px] border-[#1B3A7A] rounded-[16px] p-8 flex flex-col bg-white relative shadow-xl shadow-[#1b3a7a]/6 transition-all"
          >
            {/* Top popular badge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1B3A7A] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.8px] shadow-md whitespace-nowrap">
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
            <p className="text-[12.5px] text-[#5A5F6B] leading-[1.65] mb-6 font-medium">
              {t.plan2_desc}
            </p>
            
            {/* Features checklist */}
            <div className="flex flex-col gap-3.5 mb-8 flex-1">
              <div className="flex items-start gap-2.5 text-[12.5px] text-[#5A5F6B] font-medium">
                <div className="w-[18px] h-[18px] rounded-full bg-[#E6F5F2] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#3D8B7A]" strokeWidth={3} />
                </div>
                <span>{t.plan2_f1}</span>
              </div>
              <div className="flex items-start gap-2.5 text-[12.5px] text-[#5A5F6B] font-medium">
                <div className="w-[18px] h-[18px] rounded-full bg-[#E6F5F2] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#3D8B7A]" strokeWidth={3} />
                </div>
                <span>{t.plan2_f2}</span>
              </div>
              <div className="flex items-start gap-2.5 text-[12.5px] text-[#5A5F6B] font-medium">
                <div className="w-[18px] h-[18px] rounded-full bg-[#E6F5F2] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#3D8B7A]" strokeWidth={3} />
                </div>
                <span>{t.plan2_f3}</span>
              </div>
              <div className="flex items-start gap-2.5 text-[12.5px] text-[#5A5F6B] font-medium">
                <div className="w-[18px] h-[18px] rounded-full bg-[#E6F5F2] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#3D8B7A]" strokeWidth={3} />
                </div>
                <span>{t.plan2_f4}</span>
              </div>
              <div className="flex items-start gap-2.5 text-[12.5px] text-[#5A5F6B] font-medium">
                <div className="w-[18px] h-[18px] rounded-full bg-[#E6F5F2] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#3D8B7A]" strokeWidth={3} />
                </div>
                <span>{t.plan2_f5}</span>
              </div>
              <div className="flex items-start gap-2.5 text-[12.5px] text-[#5A5F6B] font-medium">
                <div className="w-[18px] h-[18px] rounded-full bg-[#E6F5F2] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#3D8B7A]" strokeWidth={3} />
                </div>
                <span>{t.plan2_f6}</span>
              </div>
            </div>

            <button
              onClick={() => handlePlanClick('Professional', 'opt_s2')}
              className="mt-auto w-full py-3 bg-[#1B3A7A] hover:bg-[#112660] text-white rounded-[8px] text-[13px] font-extrabold cursor-pointer text-center active:scale-95 transition-all shadow-md"
            >
              {t.plan2_btn}
            </button>
          </motion.div>

          {/* Plan 3: Enterprise */}
          <motion.div
            whileHover={{ y: -4 }}
            className="border border-[#DDE3EE] rounded-[16px] p-8 flex flex-col bg-white relative transition-all shadow-sm shadow-[#1B3A7A]/3"
          >
            <span className="text-[10px] font-bold text-[#8A8F9A] uppercase tracking-[2px] mb-4.5 block">
              {t.plan3_name}
            </span>
            <div className="flex items-baseline gap-1.5 mb-5 select-none">
              <span className="text-3xl sm:text-[32px] font-extrabold text-[#141928] tracking-tight">
                {t.plan3_price}
              </span>
            </div>
            <p className="text-[12.5px] text-[#5A5F6B] leading-[1.65] mb-6 font-medium">
              {t.plan3_desc}
            </p>
            
            {/* Features checklist */}
            <div className="flex flex-col gap-3.5 mb-8 flex-1">
              <div className="flex items-start gap-2.5 text-[12.5px] text-[#5A5F6B] font-medium">
                <div className="w-[18px] h-[18px] rounded-full bg-[#E6F5F2] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#3D8B7A]" strokeWidth={3} />
                </div>
                <span>{t.plan3_f1}</span>
              </div>
              <div className="flex items-start gap-2.5 text-[12.5px] text-[#5A5F6B] font-medium">
                <div className="w-[18px] h-[18px] rounded-full bg-[#E6F5F2] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#3D8B7A]" strokeWidth={3} />
                </div>
                <span>{t.plan3_f2}</span>
              </div>
              <div className="flex items-start gap-2.5 text-[12.5px] text-[#5A5F6B] font-medium">
                <div className="w-[18px] h-[18px] rounded-full bg-[#E6F5F2] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#3D8B7A]" strokeWidth={3} />
                </div>
                <span>{t.plan3_f3}</span>
              </div>
              <div className="flex items-start gap-2.5 text-[12.5px] text-[#5A5F6B] font-medium">
                <div className="w-[18px] h-[18px] rounded-full bg-[#E6F5F2] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#3D8B7A]" strokeWidth={3} />
                </div>
                <span>{t.plan3_f4}</span>
              </div>
              <div className="flex items-start gap-2.5 text-[12.5px] text-[#5A5F6B] font-medium">
                <div className="w-[18px] h-[18px] rounded-full bg-[#E6F5F2] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#3D8B7A]" strokeWidth={3} />
                </div>
                <span>{t.plan3_f5}</span>
              </div>
            </div>

            <button
              onClick={() => handlePlanClick('Enterprise', 'opt_s4')}
              className="mt-auto w-full py-3 border-2 border-[#1B3A7A] hover:bg-[#EEF2FB] text-[#1B3A7A] rounded-[8px] text-[13px] font-extrabold cursor-pointer text-center active:scale-95 transition-all"
            >
              {t.plan3_btn}
            </button>
          </motion.div>

        </div>

        {/* Dynamic comparison tables */}
        <div className="bg-white rounded-[16px] border border-[#DDE3EE] p-8 md:p-10 mb-20 shadow-sm shadow-[#1B3A7A]/3">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-[10px] bg-[#EEF2FB] text-[#1B3A7A] flex items-center justify-center shrink-0">
              <Shield size={20} />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-[#141928] tracking-tight">
                {lang === 'id' ? 'Seluruh Paket Berlangganan Sudah Termasuk:' : 'All Subscription Plans Include:'}
              </h3>
              <p className="text-[12.5px] text-[#8A8F9A] font-medium">
                {lang === 'id' ? 'Komitmen kami untuk mendukung kesuksesan digitalisasi klinik Anda.' : 'Our commitment to support your clinic\'s digital success.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-[13px]">
            <div className="bg-[#F4F6FA] p-5 rounded-[12px] border border-slate-200/50">
              <span className="font-extrabold text-[#141928] block mb-1">
                {lang === 'id' ? 'Onboarding & Pelatihan' : 'Onboarding & Training'}
              </span>
              <p className="text-[#5A5F6B] font-medium leading-relaxed text-[12px]">
                {lang === 'id' 
                  ? 'Panduan tatap muka langsung dan materi panduan lengkap untuk dokter, perawat, dan staf administratif.' 
                  : 'Live setup guide and visual training modules for doctors, nurses, and administrative staff.'}
              </p>
            </div>

            <div className="bg-[#F4F6FA] p-5 rounded-[12px] border border-slate-200/50">
              <span className="font-extrabold text-[#141928] block mb-1">
                {lang === 'id' ? 'Kepatuhan Regulasi Kemenkes' : 'MOH Regulatory Compliance'}
              </span>
              <p className="text-[#5A5F6B] font-medium leading-relaxed text-[12px]">
                {lang === 'id' 
                  ? 'Sesuai dengan standar PSE Kominfo, pencatatan EMR terenkripsi penuh, dan integrasi SATUSEHAT Kemenkes.' 
                  : 'Fully compliant with Kominfo PSE standards, encrypted EMR, and native SATUSEHAT integration.'}
              </p>
            </div>

            <div className="bg-[#F4F6FA] p-5 rounded-[12px] border border-slate-200/50 sm:col-span-2 lg:col-span-1">
              <span className="font-extrabold text-[#141928] block mb-1">
                {lang === 'id' ? 'Pembaruan Sistem Gratis' : 'Free Continuous Updates'}
              </span>
              <p className="text-[#5A5F6B] font-medium leading-relaxed text-[12px]">
                {lang === 'id' 
                  ? 'Sistem cloud kami terus dikembangkan. Anda mendapatkan pembaruan performa dan fitur baru otomatis tanpa biaya tambahan.' 
                  : 'Our cloud OS receives continuous visual, security, and performance additions completely free of charge.'}
              </p>
            </div>
          </div>
        </div>

        {/* Pricing FAQ Section */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#E6F5F2] text-[#3D8B7A] px-3.5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-[1.5px] mb-3">
              <HelpCircle size={13} />
              FAQ Price
            </div>
            <h3 className="text-2xl sm:text-[28px] font-extrabold text-[#141928] tracking-tight">
              {lang === 'id' ? 'Pertanyaan yang Sering Diajukan' : 'Frequently Asked Questions'}
            </h3>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-[12px] border border-[#DDE3EE] overflow-hidden shadow-sm transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-slate-50 transition-colors pointer-events-auto cursor-pointer"
                  >
                    <span className="text-[14px] sm:text-[15px] font-extrabold text-[#141928] pr-4">
                      {item.q}
                    </span>
                    <span className="text-[#1B3A7A] shrink-0">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 border-t border-slate-100 text-[13px] sm:text-[13.5px] leading-relaxed text-[#5A5F6B] font-medium bg-[#EEF2FB]/25">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
