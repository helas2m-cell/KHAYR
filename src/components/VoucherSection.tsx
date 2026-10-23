/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TranslationSet, Language } from '../types';
import { 
  Sparkles, 
  Gift, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Wallet, 
  BadgePercent,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';

interface VoucherSectionProps {
  t: TranslationSet;
  lang: Language;
}

export function VoucherSection({ lang }: VoucherSectionProps) {
  const isId = lang === 'id';
  const [activeTabExample, setActiveTabExample] = useState<'discount' | 'service'>('discount');

  // WhatsApp quick consultation link
  const waMsg = isId
    ? "Halo tim KHAYR, saya tertarik dengan fitur KHAYR Voucher Promotion untuk mempromosikan layanan klinik gigi saya."
    : "Hello KHAYR team, I am interested in the KHAYR Voucher Promotion feature for our dental clinic services.";
  const waUrl = `https://wa.me/6281932415455?text=${encodeURIComponent(waMsg)}`;

  return (
    <section id="voucher" className="py-24 bg-white scroll-mt-20 relative overflow-hidden font-sans border-b border-[#DDE3EE]">
      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#EEF2FB] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#E6F5F2] rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 1. Headline & Subheadline Utama */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EEF2FB] border border-[#1B3A7A]/15 text-[#1B3A7A] px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-[2px] mb-4.5 shadow-xs">
            <Sparkles size={13} className="text-[#1B3A7A]" />
            KHAYR VOUCHER SYSTEM
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#141928] leading-[1.18] tracking-tight mb-5">
            {isId 
              ? 'Promosi Klinik Gigi Lebih Mudah, Biaya Berdasarkan Hasil Nyata' 
              : 'Effortless Dental Practice Marketing, Cost Based on Real Results'}
          </h2>
          
          <p className="text-base sm:text-lg text-[#1B3A7A] font-bold leading-relaxed mb-4 max-w-3xl mx-auto">
            {isId 
              ? 'Buat Voucher Promosi Gratis Langsung dari KHAYR dan Jangkau Calon Pasien melalui Jaringan Aplikasi Mitra.' 
              : 'Create Free Promotional Vouchers Directly in KHAYR and Reach Patients via Top Partner Apps.'}
          </p>

          <p className="text-[14.5px] sm:text-[15.5px] text-[#5A5F6B] leading-[1.8] font-normal max-w-3xl mx-auto">
            {isId 
              ? 'KHAYR Voucher Promotion membantu klinik gigi membuat voucher promosi untuk layanan tertentu, menentukan periode promosi, dan mendistribusikannya melalui aplikasi mitra. Klinik tidak dikenakan biaya untuk membuat atau menerbitkan voucher. Biaya promosi baru dikenakan ketika voucher berhasil digunakan oleh pasien untuk mendapatkan layanan di klinik.'
              : 'KHAYR Voucher Promotion empowers dental clinics to design custom service promotions, set active periods, and distribute them across premier partner apps with zero upfront issuing fees. You only pay when a patient successfully redeems the voucher at your clinic.'}
          </p>
        </div>

        {/* 2. Tiga Keunggulan Utama */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-stretch">
          
          {/* Keunggulan 1 */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-[#FAFBFD] rounded-[20px] border-2 border-[#DDE3EE] p-8 flex flex-col justify-between hover:border-[#1B3A7A] transition-all shadow-sm group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EEF2FB] text-[#1B3A7A] flex items-center justify-center font-black mb-5 group-hover:scale-105 transition-transform shadow-xs">
                <Gift size={24} />
              </div>
              <span className="text-[10.5px] font-extrabold text-[#8A8F9A] uppercase tracking-[1.5px] block mb-1.5">
                {isId ? 'Keunggulan 1' : 'Advantage 1'}
              </span>
              <h3 className="text-xl font-black text-[#141928] mb-2.5">
                {isId ? 'Gratis Membuat Voucher' : 'Free Voucher Creation'}
              </h3>
              <p className="text-xs font-bold text-[#1B3A7A] mb-3">
                {isId ? 'Tanpa biaya pembuatan di awal.' : 'Zero upfront creation cost.'}
              </p>
              <p className="text-[13px] text-[#5A5F6B] leading-relaxed font-medium">
                {isId 
                  ? 'Klinik bebas merancang berbagai paket penawaran dan menerbitkan voucher promosi langsung dari aplikasi tanpa perlu membayar biaya registrasi atau pembuatan di awal.' 
                  : 'Design promotional offers and publish vouchers directly inside the KHAYR OS dashboard without any setup fees or upfront capital risk.'}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E6EAF2] flex items-center gap-2 text-xs font-bold text-[#1B3A7A]">
              <CheckCircle2 size={16} className="text-[#3D8B7A]" />
              <span>{isId ? 'Bebas risiko investasi awal' : 'Zero upfront risk'}</span>
            </div>
          </motion.div>

          {/* Keunggulan 2 */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-[#FAFBFD] rounded-[20px] border-2 border-[#1B3A7A] p-8 flex flex-col justify-between transition-all shadow-md group relative"
          >
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#1B3A7A] text-white text-[9.5px] font-black uppercase px-3 py-1 rounded-full tracking-wider shadow-sm">
              {isId ? 'Jaringan 5 Mitra' : '5 Partner Networks'}
            </div>

            <div>
              <div className="w-12 h-12 rounded-xl bg-[#E6F5F2] text-[#3D8B7A] flex items-center justify-center font-black mb-5 group-hover:scale-105 transition-transform shadow-xs">
                <Users size={24} />
              </div>
              <span className="text-[10.5px] font-extrabold text-[#3D8B7A] uppercase tracking-[1.5px] block mb-1.5">
                {isId ? 'Keunggulan 2' : 'Advantage 2'}
              </span>
              <h3 className="text-xl font-black text-[#141928] mb-2.5">
                {isId ? 'Jangkauan Lebih Luas' : 'Exponential Patient Reach'}
              </h3>
              <p className="text-xs font-bold text-[#3D8B7A] mb-3">
                {isId ? 'Melalui jaringan aplikasi mitra terkemuka.' : 'Across top digital partner apps.'}
              </p>
              <p className="text-[13px] text-[#5A5F6B] leading-relaxed font-medium">
                {isId 
                  ? 'Voucher promosi klinik Anda ditampilkan pada lima aplikasi mitra raksasa: Telkomsel, Indosat, AXISNET, XL, dan AstraPay untuk menjangkau calon pasien baru.' 
                  : 'Your dental vouchers are distributed across 5 major Indonesian digital ecosystems: Telkomsel, Indosat, AXISNET, XL, and AstraPay to attract high-intent new patients.'}
              </p>

              <div className="mt-4 p-2.5 bg-white rounded-xl border border-[#E2E8F0] shadow-xs flex items-center justify-center">
                <img 
                  src="/assets/aistudio/Telcos_app_logo_59015ec6.jpg" 
                  alt={isId ? "Aplikasi mitra: Telkomsel, Indosat, AXIS, XL, AstraPay" : "Partner apps: Telkomsel, Indosat, AXIS, XL, AstraPay"} 
                  className="w-full h-auto max-h-28 object-contain rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E6EAF2] flex items-center gap-2 text-xs font-bold text-[#3D8B7A]">
              <CheckCircle2 size={16} className="text-[#3D8B7A]" />
              <span>{isId ? 'Jutaan pengguna aktif terhubung' : 'Millions of active users'}</span>
            </div>
          </motion.div>

          {/* Keunggulan 3 */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-[#FAFBFD] rounded-[20px] border-2 border-[#DDE3EE] p-8 flex flex-col justify-between hover:border-[#1B3A7A] transition-all shadow-sm group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EEF2FB] text-[#1B3A7A] flex items-center justify-center font-black mb-5 group-hover:scale-105 transition-transform shadow-xs">
                <TrendingUp size={24} />
              </div>
              <span className="text-[10.5px] font-extrabold text-[#8A8F9A] uppercase tracking-[1.5px] block mb-1.5">
                {isId ? 'Keunggulan 3' : 'Advantage 3'}
              </span>
              <h3 className="text-xl font-black text-[#141928] mb-2.5">
                {isId ? 'Biaya Berbasis Penggunaan' : 'Performance-Based Cost'}
              </h3>
              <p className="text-xs font-bold text-[#1B3A7A] mb-3">
                {isId ? 'Dikenakan saat voucher digunakan untuk transaksi.' : 'Only paid upon completed treatment.'}
              </p>
              <p className="text-[13px] text-[#5A5F6B] leading-relaxed font-medium">
                {isId 
                  ? 'Biaya promosi hanya dikenakan ketika voucher berhasil digunakan oleh pasien untuk transaksi layanan di klinik gigi. Biaya terkait langsung dengan hasil nyata.' 
                  : 'Marketing costs are strictly tied to actual patient revenue. You are only billed when a patient walks in and completes a clinical transaction.'}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E6EAF2] flex items-center gap-2 text-xs font-bold text-[#1B3A7A]">
              <CheckCircle2 size={16} className="text-[#3D8B7A]" />
              <span>{isId ? 'Pengeluaran selaras dengan omset' : 'Revenue-aligned expenditure'}</span>
            </div>
          </motion.div>

        </div>

        {/* 3. Deskripsi Fitur Terintegrasi & Ilustrasi Voucher Real-Time */}
        <div className="bg-[#FAFBFD] rounded-[24px] border-2 border-[#DDE3EE] p-8 sm:p-12 mb-20 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Penjelasan Detail */}
            <div className="lg:col-span-7">
              <span className="text-[11px] font-extrabold text-[#3D8B7A] uppercase tracking-[2px] block mb-2">
                {isId ? 'DESKRIPSI FITUR UNTUK KLINIK' : 'INTEGRATED FEATURE DESCRIPTION'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#141928] tracking-tight mb-4 leading-snug">
                {isId 
                  ? 'Kenalkan Cara Baru Mempromosikan Layanan Klinik Gigi' 
                  : 'A Smart, Measurable Approach to Promoting Dental Services'}
              </h3>
              
              <p className="text-[14px] text-[#5A5F6B] leading-relaxed mb-4 font-medium">
                {isId 
                  ? 'KHAYR Voucher Promotion adalah fitur promosi terintegrasi dalam aplikasi operasional klinik gigi KHAYR yang memungkinkan klinik membuat voucher promosi secara langsung dan mendistribusikannya melalui jaringan aplikasi mitra.' 
                  : 'KHAYR Voucher Promotion is an integrated promotional module within the KHAYR OS clinic management platform that lets dental practices publish vouchers straight into leading digital partner networks.'}
              </p>

              <p className="text-[13.5px] text-[#5A5F6B] leading-relaxed mb-6 font-medium">
                {isId 
                  ? 'Melalui fitur ini, klinik dapat merancang penawaran promosi untuk layanan gigi tertentu, memberikan potongan harga, atau menawarkan layanan sesuai ketentuan voucher. Setiap voucher dapat dilengkapi dengan masa berlaku sehingga program promosi dapat disesuaikan dengan kebutuhan dan strategi pemasaran klinik.' 
                  : 'Clinics can tailor promotional offerings for specific treatments (e.g. scaling, whitening, orthodontic consultations), configure discounts, and set validity periods suited to monthly clinic capacity.'}
              </p>

              {/* 5 Manfaat Utama Checklist */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#141928] font-bold">
                  <div className="w-5 h-5 rounded-full bg-[#E6F5F2] text-[#3D8B7A] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <span>{isId ? 'Buat Promosi Langsung dari KHAYR tanpa biaya awal' : 'Create Promotions Directly from KHAYR with zero upfront fee'}</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#141928] font-bold">
                  <div className="w-5 h-5 rounded-full bg-[#E6F5F2] text-[#3D8B7A] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <span>{isId ? 'Promosikan Layanan Gigi yang Spesifik (Scaling, Bleaching, dll)' : 'Promote Specific Dental Services (Scaling, Whitening, Ortho, etc.)'}</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#141928] font-bold">
                  <div className="w-5 h-5 rounded-full bg-[#E6F5F2] text-[#3D8B7A] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <span>{isId ? 'Jangkau Calon Pasien melalui Aplikasi Telkomsel, Indosat, AXISNET, XL, dan AstraPay' : 'Reach Patients via Telkomsel, Indosat, AXISNET, XL, and AstraPay'}</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#141928] font-bold">
                  <div className="w-5 h-5 rounded-full bg-[#E6F5F2] text-[#3D8B7A] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <span>{isId ? 'Biaya Promosi Mengikuti Penggunaan Voucher yang Nyata' : 'Marketing Expense Reflects Only Actual Redeemed Transactions'}</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#141928] font-bold">
                  <div className="w-5 h-5 rounded-full bg-[#E6F5F2] text-[#3D8B7A] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <span>{isId ? 'Mendukung Promosi yang Lebih Terukur dan Terkoneksi ke Billing' : '100% Measurable ROI and Seamless Connection to Clinical Billing'}</span>
                </div>
              </div>

              <div className="bg-[#EEF2FB] border border-[#1B3A7A]/15 rounded-xl p-4 text-xs text-[#1B3A7A] font-semibold leading-relaxed">
                {isId 
                  ? 'Yang membedakan KHAYR Voucher Promotion adalah model biayanya: klinik menghubungkan aktivitas pemasaran dengan penggunaan voucher dan transaksi aktual di klinik.' 
                  : 'What sets KHAYR Voucher Promotion apart is its pure performance model: your marketing investment is directly tethered to actual in-clinic patient transactions.'}
              </div>
            </div>

            {/* Right: Pratinjau Interaktif Voucher */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              
              {/* Tab Selector Contoh Voucher */}
              <div className="flex bg-[#E6EAF2] p-1 rounded-xl mb-4 text-xs font-bold select-none">
                <button
                  type="button"
                  onClick={() => setActiveTabExample('discount')}
                  className={`flex-1 py-2 rounded-lg transition-all cursor-pointer ${
                    activeTabExample === 'discount' 
                      ? 'bg-white text-[#1B3A7A] shadow-xs' 
                      : 'text-[#5A5F6B] hover:text-[#141928]'
                  }`}
                >
                  {isId ? 'Contoh A: Potongan Harga' : 'Example A: Discount'}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTabExample('service')}
                  className={`flex-1 py-2 rounded-lg transition-all cursor-pointer ${
                    activeTabExample === 'service' 
                      ? 'bg-white text-[#1B3A7A] shadow-xs' 
                      : 'text-[#5A5F6B] hover:text-[#141928]'
                  }`}
                >
                  {isId ? 'Contoh B: Layanan Tertentu' : 'Example B: Service'}
                </button>
              </div>

              {/* Voucher Card Mockup */}
              <div className="bg-white rounded-2xl border-2 border-[#1B3A7A]/30 p-6 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#3D8B7A] text-white text-[9.5px] font-black uppercase px-3.5 py-1 rounded-bl-xl tracking-wider">
                  {isId ? 'Voucher Aktif' : 'Active Voucher'}
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EEF2FB] text-[#1B3A7A] flex items-center justify-center font-bold">
                    <BadgePercent size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-[#8A8F9A] uppercase tracking-wider block">
                      KHAYR VOUCHER PROMOTION
                    </span>
                    <span className="text-xs font-bold text-[#141928]">
                      {activeTabExample === 'discount' 
                        ? (isId ? 'Voucher Diskon Perawatan' : 'Dental Treatment Discount') 
                        : (isId ? 'Voucher Paket Perawatan' : 'Treatment Package Voucher')}
                    </span>
                  </div>
                </div>

                {/* Offer value */}
                <div className="bg-[#FAFBFD] border border-dashed border-[#1B3A7A]/30 rounded-xl p-4 my-3 text-center">
                  <span className="text-[11px] font-bold text-[#5A5F6B] block">
                    {activeTabExample === 'discount' 
                      ? (isId ? 'Layanan Pembersihan Karang Gigi (Scaling)' : 'Scaling & Polishing Dental Service') 
                      : (isId ? 'Paket Konsultasi + Pembersihan Karang Gigi' : 'Consultation + Dental Hygiene Package')}
                  </span>
                  <div className="text-2xl font-black text-[#1B3A7A] tracking-tight my-1">
                    {activeTabExample === 'discount' ? 'POTONGAN HARGA 30%' : 'AKSES LAYANAN KHUSUS'}
                  </div>
                  <span className="text-[11px] font-mono font-bold bg-[#EEF2FB] px-3 py-1 rounded-md text-[#1B3A7A] inline-block tracking-widest mt-1">
                    {activeTabExample === 'discount' ? 'KHAYR-SCALE-30' : 'KHAYR-DENTAL-PKG'}
                  </span>
                </div>

                <div className="text-[11px] text-[#5A5F6B] space-y-1 mb-4">
                  <div className="flex justify-between">
                    <span>{isId ? 'Masa Berlaku:' : 'Validity:'}</span>
                    <span className="font-bold text-[#141928]">{isId ? '30 Hari sejak penukaran' : '30 Days from redemption'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{isId ? 'Klaim Melalui:' : 'Claim via:'}</span>
                    <span className="font-bold text-[#3D8B7A]">Telkomsel, Indosat, XL, AXIS, AstraPay</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{isId ? 'Biaya Klinik:' : 'Clinic Cost:'}</span>
                    <span className="font-bold text-[#1B3A7A]">{isId ? 'Rp0 jika tidak terpakai' : 'Rp0 if unredeemed'}</span>
                  </div>
                </div>

                <div className="bg-[#FAFBFD] p-3 rounded-lg border border-slate-200 text-[10.5px] text-[#8A8F9A] text-center italic">
                  {isId 
                    ? '* Ilustrasi simulasi voucher. Layanan dan ketentuan potongan harga ditentukan sepenuhnya oleh pihak klinik.' 
                    : '* Simulation voucher. Dental treatments and discount terms are fully determined by your clinic.'}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 4. Cara Kerja: Proses dari Pembuatan hingga Transaksi */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-extrabold text-[#1B3A7A] uppercase tracking-[2px] block mb-2">
              {isId ? 'ALUR LENGKAP FITUR' : 'COMPLETE WORKFLOW'}
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#141928] tracking-tight mb-3">
              {isId ? 'Cara Kerja: Dari Pembuatan hingga Transaksi' : 'How It Works: From Creation to Final Transaction'}
            </h3>
            <p className="text-[14px] sm:text-[15px] text-[#5A5F6B] leading-relaxed font-medium">
              {isId 
                ? 'Sistem promosi dirancang otomatis dan transparan melalui 4 tahap mudah berikut:' 
                : 'A transparent, fully automated lifecycle spanning 4 seamless phases:'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <div className="bg-white rounded-2xl border-2 border-[#DDE3EE] p-6.5 shadow-sm relative flex flex-col justify-between hover:border-[#1B3A7A] transition-all">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#EEF2FB] text-[#1B3A7A] flex items-center justify-center font-black text-lg mb-4 shadow-xs">
                  1
                </div>
                <span className="text-[10px] font-extrabold text-[#8A8F9A] uppercase tracking-wider block mb-1">
                  {isId ? 'Langkah 1' : 'Step 1'}
                </span>
                <h4 className="text-base font-extrabold text-[#141928] mb-2 leading-snug">
                  {isId ? 'Klinik Membuat Voucher di KHAYR' : 'Create Voucher in KHAYR'}
                </h4>
                <p className="text-[12.5px] text-[#5A5F6B] leading-relaxed font-medium">
                  {isId 
                    ? 'Tentukan layanan gigi spesifik (contoh: pembersihan karang gigi / scaling), jenis potongan harga, syarat, kuota, serta masa berlaku voucher. Tanpa biaya pembuatan di awal.' 
                    : 'Configure dental treatment targets, discounts, quotas, and validity windows directly in KHAYR OS with zero upfront fee.'}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-bold text-[#1B3A7A]">
                {isId ? 'Pembuatan 100% Gratis' : '100% Free Creation'}
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl border-2 border-[#DDE3EE] p-6.5 shadow-sm relative flex flex-col justify-between hover:border-[#1B3A7A] transition-all">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#EEF2FB] text-[#1B3A7A] flex items-center justify-center font-black text-lg mb-4 shadow-xs">
                  2
                </div>
                <span className="text-[10px] font-extrabold text-[#8A8F9A] uppercase tracking-wider block mb-1">
                  {isId ? 'Langkah 2' : 'Step 2'}
                </span>
                <h4 className="text-base font-extrabold text-[#141928] mb-2 leading-snug">
                  {isId ? 'Ditampilkan di 5 Aplikasi Mitra' : 'Published on 5 Partner Apps'}
                </h4>
                <p className="text-[12.5px] text-[#5A5F6B] leading-relaxed font-medium">
                  {isId 
                    ? 'Voucher otomatis didistribusikan ke aplikasi Telkomsel, Indosat, AXISNET, XL, dan AstraPay. Pengguna dapat menukarkan poin atau klaim voucher yang tersedia.' 
                    : 'Vouchers surface on Telkomsel, Indosat, AXISNET, XL, and AstraPay apps where millions of users can claim or redeem points.'}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-bold text-[#3D8B7A]">
                {isId ? 'Jangkau Calon Pasien Baru' : 'Tap Into Active Audiences'}
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl border-2 border-[#DDE3EE] p-6.5 shadow-sm relative flex flex-col justify-between hover:border-[#3D8B7A] transition-all">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#E6F5F2] text-[#3D8B7A] flex items-center justify-center font-black text-lg mb-4 shadow-xs">
                  3
                </div>
                <span className="text-[10px] font-extrabold text-[#8A8F9A] uppercase tracking-wider block mb-1">
                  {isId ? 'Langkah 3' : 'Step 3'}
                </span>
                <h4 className="text-base font-extrabold text-[#141928] mb-2 leading-snug">
                  {isId ? 'Pasien Datang & Tunjukkan Voucher' : 'Patient Visits & Presents Voucher'}
                </h4>
                <p className="text-[12.5px] text-[#5A5F6B] leading-relaxed font-medium">
                  {isId 
                    ? 'Pasien datang ke klinik gigi Anda sesuai reservasi dan menunjukkan kode voucher aktif saat mendaftar atau menyelesaikan perawatan di kasir.' 
                    : 'Patients arrive at your dental clinic and present their voucher code at the reception desk to redeem their treatment discount.'}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-bold text-[#3D8B7A]">
                {isId ? 'Pasien Riil Datang ke Klinik' : 'Real In-Clinic Footfall'}
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl border-2 border-[#DDE3EE] p-6.5 shadow-sm relative flex flex-col justify-between hover:border-[#1B3A7A] transition-all">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#EEF2FB] text-[#1B3A7A] flex items-center justify-center font-black text-lg mb-4 shadow-xs">
                  4
                </div>
                <span className="text-[10px] font-extrabold text-[#8A8F9A] uppercase tracking-wider block mb-1">
                  {isId ? 'Langkah 4' : 'Step 4'}
                </span>
                <h4 className="text-base font-extrabold text-[#141928] mb-2 leading-snug">
                  {isId ? 'Transaksi & Potong Saldo Otomatis' : 'Automated Balance Deduction'}
                </h4>
                <p className="text-[12.5px] text-[#5A5F6B] leading-relaxed font-medium">
                  {isId 
                    ? 'Saat transaksi sukses, komisi promosi langsung dipotong dari saldo prabayar KHAYR tanpa perlu transfer terpisah, dan tercatat di laporan billing.' 
                    : 'Upon completed clinical billing, marketing fee is automatically debited from your KHAYR prepaid balance, detailed transparently in financial reports.'}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-bold text-[#1B3A7A]">
                {isId ? 'Otomatis dari Saldo Prabayar' : 'One-Balance Deduction'}
              </div>
            </div>

          </div>
        </div>

        {/* 5. Mekanisme Biaya dan Pemotongan Saldo Kredit */}
        <div className="bg-[#FAFBFD] rounded-[24px] border-2 border-[#DDE3EE] p-8 sm:p-10 mb-20 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#EEF2FB] text-[#1B3A7A] flex items-center justify-center font-black text-lg shrink-0">
              <Wallet size={20} />
            </div>
            <div>
              <span className="text-[10.5px] font-extrabold text-[#8A8F9A] uppercase tracking-wider block">
                {isId ? 'SISTEM PEMBAYARAN KOMISI' : 'COMMISSION PAYMENT SYSTEM'}
              </span>
              <h4 className="text-xl font-black text-[#141928] leading-tight">
                {isId ? 'Pembayaran Komisi Otomatis melalui Saldo Kredit KHAYR' : 'Automatic Commission Payment via KHAYR Balance'}
              </h4>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[13px] text-[#5A5F6B] leading-relaxed">
            <div className="bg-white p-5 rounded-xl border border-[#DDE3EE] shadow-xs">
              <span className="font-extrabold text-[#141928] block mb-1.5">
                {isId ? '1. Biaya Berbasis Penggunaan' : '1. Performance-Driven Cost'}
              </span>
              <p className="font-medium text-[12.5px]">
                {isId 
                  ? 'Klinik dapat membuat dan menerbitkan voucher promosi tanpa biaya di awal. Biaya promosi hanya dikenakan ketika voucher berhasil digunakan oleh pasien untuk transaksi layanan.' 
                  : 'Zero upfront publishing fee. Marketing commissions apply strictly when a voucher results in a real completed treatment.'}
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#DDE3EE] shadow-xs">
              <span className="font-extrabold text-[#141928] block mb-1.5">
                {isId ? '2. Potong Otomatis Saldo Prabayar' : '2. Direct Prepaid Debit'}
              </span>
              <p className="font-medium text-[12.5px]">
                {isId 
                  ? 'Biaya akan langsung dipotong dari saldo prabayar yang tersedia pada sistem berlangganan KHAYR, tanpa perlu melakukan pembayaran terpisah untuk setiap voucher.' 
                  : 'Commission is debited from your unified prepaid balance on KHAYR OS, eliminating separate monthly manual invoicing.'}
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#DDE3EE] shadow-xs">
              <span className="font-extrabold text-[#141928] block mb-1.5">
                {isId ? '3. Laporan Billing Transparan' : '3. Transparent Billing Audit'}
              </span>
              <p className="font-medium text-[12.5px]">
                {isId 
                  ? 'Setiap pemotongan biaya dicatat secara terperinci dalam laporan billing aplikasi, memudahkan pemilik klinik memantau performa promosi dan penggunaan saldo kredit.' 
                  : 'Every transaction is audited and listed in detailed clinic billing reports, giving practice managers complete clarity on ROI.'}
              </p>
            </div>
          </div>
        </div>

        {/* 6. Call to Action: Ajakan Bertindak */}
        <div className="bg-gradient-to-br from-[#1B3A7A] to-[#112660] text-white rounded-[24px] p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <span className="text-[10px] font-extrabold text-[#7CF1C4] uppercase tracking-[2px] block mb-3">
              {isId ? 'MULAI SEKARANG' : 'GET STARTED'}
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black tracking-tight mb-4 leading-tight">
              {isId 
                ? 'Saatnya Membuat Promosi Klinik Lebih Efektif bersama KHAYR' 
                : 'Accelerate Your Dental Practice Growth with KHAYR Vouchers'}
            </h3>
            <p className="text-[14px] sm:text-[15px] text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto mb-8">
              {isId 
                ? 'Maksimalkan peluang menjangkau calon pasien melalui jaringan aplikasi mitra. Buat voucher promosi langsung dari KHAYR tanpa biaya pembuatan di awal, dan kaitkan biaya promosi dengan voucher yang benar-benar digunakan untuk transaksi layanan klinik.'
                : 'Expand patient discovery through Indonesia\'s largest telco & fintech app networks. Launch promotional vouchers with zero upfront cost and pay only when patients complete real treatments.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#1B3A7A] hover:bg-slate-100 rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>{isId ? 'Konsultasi Fitur Promosi' : 'Consult Promotion Features'}</span>
                <ArrowRight size={16} />
              </a>
              
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#3D8B7A] hover:bg-[#2e6d5f] text-white rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <MessageSquare size={16} />
                <span>{isId ? 'Tanya via WhatsApp' : 'Chat via WhatsApp'}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
