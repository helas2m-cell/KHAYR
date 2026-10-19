/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TranslationSet, Language } from '../types';
import { 
  ArrowLeft, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Wallet, 
  Layers, 
  FileText, 
  RefreshCw, 
  CheckCircle2, 
  Calculator, 
  ArrowRight, 
  MessageSquare, 
  Building2, 
  TrendingUp, 
  CreditCard, 
  CalendarCheck,
  Check,
  QrCode
} from 'lucide-react';
import { motion } from 'motion/react';

interface PricingPageProps {
  t: TranslationSet;
  lang: Language;
  onSelectPlan: (planName: string, clinicSizeValue: string) => void;
  onBackToHome: () => void;
}

export function PricingPage({ lang, onSelectPlan, onBackToHome }: PricingPageProps) {
  const isId = lang === 'id';
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Interactive Calculator State
  const [chairCount, setChairCount] = useState<number>(2);
  const [invoiceCount, setInvoiceCount] = useState<number>(80);

  // Top-Up Screen Preview Interactive State (from uploaded Top-Up Menu image)
  const [previewNominal, setPreviewNominal] = useState<string>('500.000');
  const [previewPaymentMethod, setPreviewPaymentMethod] = useState<string>('qris');
  const [previewSuccessMsg, setPreviewSuccessMsg] = useState<boolean>(false);

  // Calculate Base Cost according to PDF rules:
  // 1 kamar/kursi: Rp100.000
  // 2 kamar/kursi: Rp175.000
  // 3 kamar/kursi: Rp225.000
  // 4 kamar/kursi: Rp275.000
  // 5 kamar/kursi: Rp325.000
  // Setiap tambahan kamar/kursi setelah yang pertama menambah biaya dasar Rp50.000 per bulan
  const calculateBaseCost = (chairs: number): number => {
    if (chairs <= 1) return 100000;
    if (chairs === 2) return 175000;
    return 175000 + (chairs - 2) * 50000;
  };

  const baseCost = calculateBaseCost(chairCount);
  const invoiceCost = invoiceCount * 3000;
  const totalCost = baseCost + invoiceCost;

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const formatRupiah = (num: number) => {
    return 'Rp' + num.toLocaleString('id-ID');
  };

  const handleSimulateSelect = () => {
    const sizeCategory = chairCount <= 1 ? 'opt_s1' : chairCount <= 3 ? 'opt_s2' : 'opt_s3';
    onSelectPlan(`Paket Simulasi (${chairCount} Kursi + ${invoiceCount} Invoice)`, sizeCategory);
  };

  // WhatsApp quick consultation link
  const waConsultMsg = isId
    ? `Halo KHAYR OS, saya ingin konsultasi sistem berlangganan untuk ${chairCount} kamar/kursi perawatan dan perkiraan ${invoiceCount} invoice per bulan.`
    : `Hello KHAYR OS, I would like to consult the subscription plan for ${chairCount} dental rooms/chairs and approx ${invoiceCount} invoices per month.`;
  const waUrl = `https://wa.me/6281932415455?text=${encodeURIComponent(waConsultMsg)}`;

  // Exact FAQ content from PDF Page 3 & Page 4
  const faqItems = isId ? [
    {
      q: "Apakah saya masih membayar biaya bulanan tetap?",
      a: "Tidak hanya biaya dasar bulanan. Total biaya terdiri atas biaya dasar berdasarkan jumlah kamar/kursi perawatan dan biaya penggunaan sebesar Rp3.000 untuk setiap invoice yang diterbitkan."
    },
    {
      q: "Bagaimana jika jumlah invoice klinik sedikit?",
      a: "Biaya penggunaan akan lebih rendah karena dihitung berdasarkan jumlah invoice yang diterbitkan. Namun, biaya dasar bulanan tetap berlaku sesuai jumlah kamar/kursi terdaftar."
    },
    {
      q: "Apakah saya harus melakukan top-up setiap bulan?",
      a: "Klinik perlu memastikan saldo mencukupi untuk membayar biaya dasar bulanan dan biaya invoice. Kebutuhan top-up bergantung pada saldo tersisa dan pemakaian aplikasi."
    },
    {
      q: "Apakah saldo top-up bisa digunakan untuk membayar kedua jenis biaya?",
      a: "Ya. Saldo prabayar digunakan untuk membayar biaya dasar bulanan dan biaya setiap invoice yang diterbitkan melalui aplikasi."
    },
    {
      q: "Bagaimana cara memperkirakan biaya bulanan klinik saya?",
      a: "Hitung biaya dasar sesuai jumlah kamar/kursi, lalu tambahkan Rp3.000 dikalikan jumlah invoice yang diperkirakan akan diterbitkan dalam satu bulan."
    }
  ] : [
    {
      q: "Do I still pay a fixed monthly subscription fee?",
      a: "Not just a fixed monthly base fee. The total cost consists of a base fee according to the number of dental rooms/chairs plus a usage fee of Rp3,000 for each invoice issued."
    },
    {
      q: "What if our clinic issues only a small number of invoices?",
      a: "The usage fee will naturally be lower because it is directly calculated per invoice issued. However, the base monthly fee remains applicable according to the registered number of rooms/chairs."
    },
    {
      q: "Do I have to perform a top-up every single month?",
      a: "The clinic only needs to ensure the prepaid balance is sufficient to cover the base fee and invoice fees. Top-up frequency depends entirely on your remaining balance and application usage."
    },
    {
      q: "Can the prepaid top-up balance be used for both fee components?",
      a: "Yes. The single prepaid balance is automatically used to pay both the monthly base fee and each invoice issued through the application."
    },
    {
      q: "How can I estimate my clinic's monthly cost?",
      a: "Calculate the base fee according to your number of dental rooms/chairs, then add Rp3,000 multiplied by the estimated number of invoices issued in that month."
    }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-10 font-sans text-[#141928]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Navigation Breadcrumb */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <button 
            onClick={onBackToHome}
            className="group flex items-center gap-2 text-xs font-bold text-[#1B3A7A] hover:text-[#112660] transition-colors bg-white px-4 py-2.5 rounded-[8px] border border-[#DDE3EE] shadow-sm w-fit cursor-pointer"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            {isId ? 'Kembali ke Beranda' : 'Back to Home'}
          </button>

          <div className="flex items-center gap-2 text-[11px] font-bold text-[#8A8F9A] uppercase tracking-[0.5px]">
            <span onClick={onBackToHome} className="cursor-pointer hover:text-[#1B3A7A]">{isId ? 'Beranda' : 'Home'}</span>
            <span>/</span>
            <span className="text-[#141928]">{isId ? 'Sistem Berlangganan' : 'Pricing System'}</span>
          </div>
        </div>

        {/* 1. Header Narasi PDF */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#EEF2FB] border border-[#1B3A7A]/15 text-[#1B3A7A] px-4 py-1.5 rounded-full text-[10.5px] font-extrabold uppercase tracking-[1.5px] mb-4">
            <Sparkles size={13} className="text-[#1B3A7A]" />
            {isId ? 'SISTEM BERLANGGANAN • APLIKASI OPERASIONAL KLINIK GIGI' : 'SUBSCRIPTION SYSTEM • DENTAL CLINIC OS'}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#141928] leading-[1.18] tracking-tight mb-4">
            {isId ? 'Mengikuti Kebutuhan Klinik Gigi Anda' : 'Adapting to Your Dental Clinic Needs'}
          </h1>
          <p className="text-base sm:text-lg text-[#1B3A7A] font-semibold mb-5">
            {isId 
              ? 'Lebih fleksibel, transparan, dan selaras dengan aktivitas operasional klinik gigi Anda.' 
              : 'More flexible, transparent, and aligned with your dental clinic operational activities.'}
          </p>
          <p className="text-[14.5px] sm:text-[15.5px] text-[#5A5F6B] leading-[1.75] font-normal max-w-3xl mx-auto">
            {isId 
              ? 'Setiap klinik gigi memiliki kapasitas, jumlah pasien, dan aktivitas operasional yang berbeda. Karena itu, kami menghadirkan sistem berlangganan aplikasi operasional klinik gigi dengan pendekatan yang lebih fleksibel. Biaya berlangganan menggabungkan biaya dasar bulanan berdasarkan jumlah kamar atau kursi perawatan dengan biaya penggunaan berdasarkan setiap invoice yang diterbitkan melalui aplikasi.'
              : 'Every dental clinic has unique capacity, patient volume, and operational cadence. Therefore, we present a subscription system with a flexible, transparent approach combining a monthly base fee by room/chair count and a usage fee per invoice issued.'}
          </p>
        </div>

        {/* 2. Dua Komponen Biaya (2 Pillars Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Komponen 1: Biaya Dasar Bulanan */}
          <div className="bg-white rounded-[20px] border-2 border-[#DDE3EE] p-8 sm:p-9 shadow-sm hover:border-[#1B3A7A]/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#EEF2FB] text-[#1B3A7A] flex items-center justify-center font-black text-lg shrink-0">
                  1
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#8A8F9A] uppercase tracking-wider block">
                    {isId ? 'Komponen Pertama' : 'Component 1'}
                  </span>
                  <h2 className="text-xl sm:text-[22px] font-black text-[#141928] leading-tight">
                    {isId ? 'Biaya Dasar Bulanan Sesuai Kamar/Kursi' : 'Monthly Base Fee by Rooms/Chairs'}
                  </h2>
                </div>
              </div>

              <p className="text-[13.5px] text-[#5A5F6B] leading-relaxed mb-6 font-medium">
                {isId
                  ? 'Setiap klinik memiliki biaya dasar berlangganan bulanan yang disesuaikan dengan jumlah kamar atau kursi perawatan yang digunakan dalam operasional klinik. Semakin banyak kamar atau kursi perawatan yang dimiliki, semakin besar kapasitas operasional klinik dan biaya dasar berlangganannya.'
                  : 'Every clinic has a monthly base fee tailored to the number of operational treatment rooms or chairs. The larger the clinic capacity, the more comprehensive the core infrastructure.'}
              </p>

              {/* Tabel Biaya Dasar Sesuai PDF */}
              <div className="overflow-hidden rounded-xl border border-[#DDE3EE] bg-[#FAFBFD] mb-4">
                <table className="w-full text-left text-[13px]">
                  <thead className="bg-[#EEF2FB] text-[#1B3A7A] font-extrabold uppercase text-[11px] tracking-wider border-b border-[#DDE3EE]">
                    <tr>
                      <th className="py-3 px-4">{isId ? 'Jumlah Kamar / Kursi' : 'Rooms / Chairs'}</th>
                      <th className="py-3 px-4 text-right">{isId ? 'Biaya Dasar per Bulan' : 'Base Fee / Month'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E6EAF2] font-semibold text-[#141928]">
                    <tr className="hover:bg-white transition-colors">
                      <td className="py-2.5 px-4 flex items-center gap-2">
                        <Building2 size={15} className="text-[#3D8B7A]" /> 1 kamar/kursi
                      </td>
                      <td className="py-2.5 px-4 text-right font-bold text-[#1B3A7A]">Rp100.000</td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="py-2.5 px-4 flex items-center gap-2">
                        <Building2 size={15} className="text-[#3D8B7A]" /> 2 kamar/kursi
                      </td>
                      <td className="py-2.5 px-4 text-right font-bold text-[#1B3A7A]">Rp175.000</td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="py-2.5 px-4 flex items-center gap-2">
                        <Building2 size={15} className="text-[#3D8B7A]" /> 3 kamar/kursi
                      </td>
                      <td className="py-2.5 px-4 text-right font-bold text-[#1B3A7A]">Rp225.000</td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="py-2.5 px-4 flex items-center gap-2">
                        <Building2 size={15} className="text-[#3D8B7A]" /> 4 kamar/kursi
                      </td>
                      <td className="py-2.5 px-4 text-right font-bold text-[#1B3A7A]">Rp275.000</td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="py-2.5 px-4 flex items-center gap-2">
                        <Building2 size={15} className="text-[#3D8B7A]" /> 5 kamar/kursi
                      </td>
                      <td className="py-2.5 px-4 text-right font-bold text-[#1B3A7A]">Rp325.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-[#EEF2FB]/60 border border-[#1B3A7A]/15 rounded-lg p-3 text-[12px] text-[#1B3A7A] font-semibold flex items-center gap-2 mt-2">
              <CheckCircle2 size={15} className="shrink-0 text-[#3D8B7A]" />
              <span>
                {isId 
                  ? 'Setiap tambahan kamar/kursi setelah yang pertama menambah biaya dasar Rp50.000 per bulan.'
                  : 'Each additional room/chair beyond the first adds Rp50,000 per month to the base fee.'}
              </span>
            </div>
          </div>

          {/* Komponen 2: Biaya Penggunaan Invoice */}
          <div className="bg-white rounded-[20px] border-2 border-[#DDE3EE] p-8 sm:p-9 shadow-sm hover:border-[#3D8B7A]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#E6F5F2] text-[#3D8B7A] flex items-center justify-center font-black text-lg shrink-0">
                  2
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#8A8F9A] uppercase tracking-wider block">
                    {isId ? 'Komponen Kedua' : 'Component 2'}
                  </span>
                  <h2 className="text-xl sm:text-[22px] font-black text-[#141928] leading-tight">
                    {isId ? 'Biaya Penggunaan Berdasarkan Invoice' : 'Usage Fee Based on Issued Invoices'}
                  </h2>
                </div>
              </div>

              <p className="text-[13.5px] text-[#5A5F6B] leading-relaxed mb-6 font-medium">
                {isId
                  ? 'Selain biaya dasar bulanan, terdapat biaya penggunaan sebesar Rp3.000 untuk setiap invoice yang diterbitkan melalui aplikasi. Komponen biaya ini mengikuti aktivitas penerbitan invoice yang dilakukan klinik.'
                  : 'In addition to the monthly base fee, there is a usage fee of Rp3,000 for each invoice issued through the application, aligning perfectly with your actual patient activity.'}
              </p>

              {/* Tabel Simulasi Penggunaan Invoice Sesuai PDF */}
              <div className="overflow-hidden rounded-xl border border-[#DDE3EE] bg-[#FAFBFD] mb-4">
                <table className="w-full text-left text-[13px]">
                  <thead className="bg-[#E6F5F2] text-[#256B5D] font-extrabold uppercase text-[11px] tracking-wider border-b border-[#DDE3EE]">
                    <tr>
                      <th className="py-3 px-4">{isId ? 'Jumlah Invoice per Bulan' : 'Invoices per Month'}</th>
                      <th className="py-3 px-4 text-right">{isId ? 'Biaya Penggunaan (Rp3.000/inv)' : 'Usage Fee'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E6EAF2] font-semibold text-[#141928]">
                    <tr className="hover:bg-white transition-colors">
                      <td className="py-2.5 px-4 flex items-center gap-2">
                        <FileText size={15} className="text-[#1B3A7A]" /> 20 invoice
                      </td>
                      <td className="py-2.5 px-4 text-right font-bold text-[#256B5D]">Rp60.000</td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="py-2.5 px-4 flex items-center gap-2">
                        <FileText size={15} className="text-[#1B3A7A]" /> 50 invoice
                      </td>
                      <td className="py-2.5 px-4 text-right font-bold text-[#256B5D]">Rp150.000</td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="py-2.5 px-4 flex items-center gap-2">
                        <FileText size={15} className="text-[#1B3A7A]" /> 80 invoice
                      </td>
                      <td className="py-2.5 px-4 text-right font-bold text-[#256B5D]">Rp240.000</td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="py-2.5 px-4 flex items-center gap-2">
                        <FileText size={15} className="text-[#1B3A7A]" /> 100 invoice
                      </td>
                      <td className="py-2.5 px-4 text-right font-bold text-[#256B5D]">Rp300.000</td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="py-2.5 px-4 flex items-center gap-2">
                        <FileText size={15} className="text-[#1B3A7A]" /> 200 invoice
                      </td>
                      <td className="py-2.5 px-4 text-right font-bold text-[#256B5D]">Rp600.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-[#E6F5F2]/60 border border-[#3D8B7A]/20 rounded-lg p-3 text-[12px] text-[#256B5D] font-semibold flex items-center gap-2 mt-2">
              <CheckCircle2 size={15} className="shrink-0 text-[#3D8B7A]" />
              <span>
                {isId 
                  ? 'Perhitungan menggunakan tarif Rp3.000 per invoice dan belum termasuk biaya dasar bulanan.'
                  : 'Calculated at Rp3,000 per invoice; excludes the monthly base fee.'}
              </span>
            </div>
          </div>

        </div>

        {/* 3. Pembayaran Praktis dengan Sistem Prabayar (Prepaid) - Format Mengikuti Bagian 1 */}
        <div className="bg-white rounded-[20px] border-2 border-[#DDE3EE] p-8 sm:p-9 shadow-sm hover:border-[#1B3A7A]/30 transition-all mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#EEF2FB] text-[#1B3A7A] flex items-center justify-center font-black text-lg shrink-0">
                3
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#8A8F9A] uppercase tracking-wider block">
                  {isId ? 'Mekanisme Pembayaran' : 'Payment Mechanism'}
                </span>
                <h2 className="text-xl sm:text-[22px] font-black text-[#141928] leading-tight">
                  {isId ? 'Pembayaran Praktis dengan Sistem Prabayar (Prepaid)' : 'Practical Payment with Prepaid Balance'}
                </h2>
              </div>
            </div>

            <p className="text-[13.5px] text-[#5A5F6B] leading-relaxed mb-6 font-medium">
              {isId 
                ? 'Untuk mempermudah pembayaran, sistem berlangganan menggunakan mekanisme saldo prabayar atau top-up. Klinik terlebih dahulu mengisi saldo dengan nominal tertentu. Saldo tersebut kemudian digunakan untuk membayar seluruh komponen biaya berlangganan secara otomatis:'
                : 'To simplify operations, subscriptions run on an intuitive prepaid balance mechanism. The clinic tops up a chosen nominal, which is then automatically debited for all subscription components:'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div className="bg-[#FAFBFD] rounded-xl border border-[#DDE3EE] p-5 hover:border-[#1B3A7A] transition-all flex items-start gap-3.5 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#E6F5F2] text-[#3D8B7A] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 size={18} className="text-[#3D8B7A]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#141928] text-sm mb-1">
                    {isId ? 'Biaya Dasar Bulanan' : 'Monthly Base Fee'}
                  </h4>
                  <p className="text-xs text-[#5A5F6B] leading-relaxed font-medium">
                    {isId 
                      ? 'Dipotong otomatis sesuai jumlah kamar atau kursi perawatan yang aktif di klinik Anda.' 
                      : 'Automatically debited monthly based on your registered active dental rooms/chairs.'}
                  </p>
                </div>
              </div>

              <div className="bg-[#FAFBFD] rounded-xl border border-[#DDE3EE] p-5 hover:border-[#3D8B7A] transition-all flex items-start gap-3.5 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#E6F5F2] text-[#3D8B7A] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 size={18} className="text-[#3D8B7A]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#141928] text-sm mb-1">
                    {isId ? 'Biaya Penggunaan Invoice' : 'Usage Invoice Fee'}
                  </h4>
                  <p className="text-xs text-[#5A5F6B] leading-relaxed font-medium">
                    {isId 
                      ? 'Dipotong otomatis Rp3.000 secara real-time setiap kali invoice pasien diterbitkan.' 
                      : 'Automatically deducted at Rp3,000 real-time whenever a patient invoice is issued.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#FAFBFD] rounded-xl border border-[#DDE3EE] p-5 text-xs sm:text-[13px] text-[#5A5F6B] leading-relaxed mb-4">
              <span className="font-bold text-[#141928] block mb-1">
                {isId ? 'Satu Saldo untuk Seluruh Kebutuhan Operasional:' : 'One Balance for All Operational Needs:'}
              </span>
              {isId 
                ? 'Dengan mekanisme ini, klinik tidak perlu melakukan pembayaran secara terpisah untuk kedua komponen tersebut. Seluruh pemotongan biaya dilakukan dari saldo prabayar yang tersedia. Saldo top-up berfungsi sebagai dana untuk pembayaran layanan aplikasi, bukan sebagai biaya tambahan di luar komponen berlangganan yang telah ditetapkan.'
                : 'With this mechanism, clinics never have to pay two separate bills. All fees are debited from the single available prepaid balance. The top-up balance acts strictly as funds for application usage, never as an additional fee.'}
            </div>
          </div>

          <div className="bg-[#EEF2FB]/60 border border-[#1B3A7A]/15 rounded-lg p-3 text-[12px] text-[#1B3A7A] font-semibold flex items-center gap-2 mt-2">
            <CheckCircle2 size={15} className="shrink-0 text-[#3D8B7A]" />
            <span>
              {isId 
                ? 'Seluruh pemotongan biaya dilakukan dari saldo prabayar yang tersedia tanpa perlu pembayaran terpisah.'
                : 'All deductions occur automatically from available prepaid balance without separate payments.'}
            </span>
          </div>
        </div>

        {/* 4. Bagaimana Cara Kerja Sistem Berlangganan? (4 Steps) - Format & Bingkai disamakan dengan Bagian Pertama */}
        <div className="bg-white rounded-[20px] border-2 border-[#DDE3EE] p-8 sm:p-9 shadow-sm hover:border-[#1B3A7A]/30 transition-all mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#EEF2FB] text-[#1B3A7A] flex items-center justify-center font-black text-lg shrink-0">
                4
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#8A8F9A] uppercase tracking-wider block">
                  {isId ? 'Alur Kerja Praktis' : 'Practical Workflow'}
                </span>
                <h2 className="text-xl sm:text-[22px] font-black text-[#141928] leading-tight">
                  {isId ? 'Bagaimana Cara Kerja Sistem Berlangganan?' : 'How Does the Subscription System Work?'}
                </h2>
              </div>
            </div>

            <p className="text-[13.5px] text-[#5A5F6B] leading-relaxed mb-6 font-medium">
              {isId
                ? 'Sistem berlangganan aplikasi operasional klinik gigi berjalan dengan 4 langkah praktis menggunakan satu saldo prabayar terpadu:'
                : 'The dental clinic operational subscription works seamlessly through 4 practical steps powered by a unified prepaid balance:'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-4">
              
              {/* Step 1 */}
              <div className="bg-[#FAFBFD] rounded-xl border border-[#DDE3EE] p-5.5 hover:border-[#1B3A7A] transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#DDE3EE] text-[#1B3A7A] flex items-center justify-center mb-3.5 shadow-xs">
                    <CreditCard size={20} />
                  </div>
                  <span className="text-[10px] font-extrabold text-[#8A8F9A] uppercase tracking-wider block mb-1">
                    {isId ? 'Langkah 1' : 'Step 1'}
                  </span>
                  <h3 className="text-[14px] font-extrabold text-[#141928] mb-2 leading-snug">
                    {isId ? 'Isi Saldo (Top-Up)' : 'Top-Up Balance'}
                  </h3>
                  <p className="text-[12.5px] text-[#5A5F6B] leading-relaxed font-medium">
                    {isId 
                      ? 'Klinik melakukan top-up dengan nominal sesuai kebutuhan dan ketentuan yang berlaku.' 
                      : 'Clinic tops up balance with a chosen nominal according to needs and guidelines.'}
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-[#FAFBFD] rounded-xl border border-[#DDE3EE] p-5.5 hover:border-[#1B3A7A] transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#DDE3EE] text-[#1B3A7A] flex items-center justify-center mb-3.5 shadow-xs">
                    <CalendarCheck size={20} />
                  </div>
                  <span className="text-[10px] font-extrabold text-[#8A8F9A] uppercase tracking-wider block mb-1">
                    {isId ? 'Langkah 2' : 'Step 2'}
                  </span>
                  <h3 className="text-[14px] font-extrabold text-[#141928] mb-2 leading-snug">
                    {isId ? 'Biaya Dasar Bulanan Dipotong Otomatis' : 'Base Fee Deducted Monthly'}
                  </h3>
                  <p className="text-[12.5px] text-[#5A5F6B] leading-relaxed font-medium">
                    {isId 
                      ? 'Pada periode penagihan, sistem memotong saldo sesuai jumlah kamar atau kursi perawatan klinik.' 
                      : 'On the billing cycle, the system automatically deducts base fee according to dental chairs/rooms.'}
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-[#FAFBFD] rounded-xl border border-[#DDE3EE] p-5.5 hover:border-[#3D8B7A] transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#DDE3EE] text-[#3D8B7A] flex items-center justify-center mb-3.5 shadow-xs">
                    <FileText size={20} />
                  </div>
                  <span className="text-[10px] font-extrabold text-[#8A8F9A] uppercase tracking-wider block mb-1">
                    {isId ? 'Langkah 3' : 'Step 3'}
                  </span>
                  <h3 className="text-[14px] font-extrabold text-[#141928] mb-2 leading-snug">
                    {isId ? 'Biaya Invoice Dipotong Otomatis' : 'Invoice Fee Deducted Live'}
                  </h3>
                  <p className="text-[12.5px] text-[#5A5F6B] leading-relaxed font-medium">
                    {isId 
                      ? 'Setiap kali invoice diterbitkan melalui aplikasi, saldo berkurang sebesar Rp3.000.' 
                      : 'Every time an invoice is issued via the app, balance is deducted by Rp3,000.'}
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-[#FAFBFD] rounded-xl border border-[#DDE3EE] p-5.5 hover:border-[#1B3A7A] transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#DDE3EE] text-[#1B3A7A] flex items-center justify-center mb-3.5 shadow-xs">
                    <RefreshCw size={20} />
                  </div>
                  <span className="text-[10px] font-extrabold text-[#8A8F9A] uppercase tracking-wider block mb-1">
                    {isId ? 'Langkah 4' : 'Step 4'}
                  </span>
                  <h3 className="text-[14px] font-extrabold text-[#141928] mb-2 leading-snug">
                    {isId ? 'Top-Up Kembali Sesuai Kebutuhan' : 'Top-Up Again As Needed'}
                  </h3>
                  <p className="text-[12.5px] text-[#5A5F6B] leading-relaxed font-medium">
                    {isId 
                      ? 'Klinik mengisi saldo kembali untuk mendukung kelangsungan penggunaan aplikasi.' 
                      : 'Clinic tops up balance whenever needed to sustain continuous smooth application usage.'}
                  </p>
                </div>
              </div>

            </div>

            {/* Pratinjau Tampilan Layar Menu Top-Up Kuota (Sesuai Gambar Upload Pengguna) - Dikecilkan 40% */}
            <div className="mt-8 pt-8 border-t border-[#DDE3EE]">
              <div className="text-center max-w-lg mx-auto mb-4">
                <div className="inline-flex items-center gap-1.5 bg-[#E6F5F2] text-[#286657] px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider mb-1">
                  <Sparkles size={11} className="text-[#3D8B7A]" />
                  {isId ? 'Tampilan Layar Menu Aplikasi' : 'Application Screen Interface'}
                </div>
                <h4 className="text-[15px] font-extrabold text-[#141928]">
                  {isId ? 'Tampilan Menu Top-Up Kuota di Aplikasi KHAYR OS' : 'Top-Up Kuota Screen in KHAYR OS'}
                </h4>
                <p className="text-[11.5px] text-[#5A5F6B] mt-0.5">
                  {isId 
                    ? 'Antarmuka pengisian saldo prabayar (top-up) langsung dari dalam software operasional klinik gigi Anda.' 
                    : 'Real prepaid top-up interface inside the KHAYR OS dental clinic operational software.'}
                </p>
              </div>

              {/* Mockup Window Frame - Dikecilkan 40% (max-w-[620px] mx-auto) */}
              <div className="max-w-[620px] mx-auto bg-[#FAFBFD] rounded-2xl border-2 border-[#DDE3EE] shadow-sm overflow-hidden">
                {/* Window top bar */}
                <div className="bg-[#F1F4F9] border-b border-[#DDE3EE] px-3.5 py-2 flex items-center justify-between select-none">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#EF4444]/80" />
                    <div className="w-2 h-2 rounded-full bg-[#F59E0B]/80" />
                    <div className="w-2 h-2 rounded-full bg-[#10B981]/80" />
                    <span className="text-[10px] font-bold text-[#5A5F6B] ml-2">KHAYR OS • Top-Up Kuota</span>
                  </div>
                  <span className="text-[9.5px] font-bold text-[#8A8F9A] uppercase tracking-wider">
                    {isId ? 'Modul Deposit Saldo' : 'Deposit Module'}
                  </span>
                </div>

                {/* Content Area - EXACT RECREATION OF USER'S UPLOADED IMAGE (SCALED DOWN 40%) */}
                <div className="p-4 sm:p-5.5 bg-white font-sans">
                  
                  {/* Title & subtitle from screenshot */}
                  <div className="mb-4">
                    <h3 className="text-base sm:text-lg font-bold text-[#141928] tracking-tight">
                      Top-Up Kuota
                    </h3>
                    <p className="text-[11px] text-[#5A5F6B] mt-0.5">
                      Kelola saldo deposit kuota token promo untuk operasional klinik Anda
                    </p>
                  </div>

                  {/* Banner Saldo Kuota (Green banner from image) */}
                  <div className="bg-[#4E9080] rounded-xl p-4 sm:p-4.5 relative overflow-hidden text-white shadow-xs mb-4">
                    <div className="relative z-10">
                      <span className="text-[9.5px] font-extrabold uppercase tracking-widest text-white/80 block mb-0.5">
                        SALDO KUOTA SAAT INI
                      </span>
                      <div className="text-2xl sm:text-[26px] font-extrabold text-white tracking-tight mb-1">
                        IDR 0
                      </div>
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/95">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7CF1C4] inline-block animate-pulse" />
                        Terhubung dengan Database Real-time
                      </div>
                    </div>

                    {/* Translucent wallet watermark graphic */}
                    <div className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none text-white">
                      <Wallet size={75} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Pilih Nominal Top Up (IDR) */}
                  <div className="mb-4">
                    <label className="text-[11.5px] font-bold text-[#333E52] block mb-2">
                      Pilih Nominal Top Up (IDR)
                    </label>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2.5">
                      {['100.000', '250.000', '500.000', '1.000.000', '2.500.000', '5.000.000', '10.000.000'].map((nom) => {
                        const isSelected = previewNominal === nom;
                        return (
                          <button
                            key={nom}
                            type="button"
                            onClick={() => {
                              setPreviewNominal(nom);
                              setPreviewSuccessMsg(false);
                            }}
                            className={`py-1.5 px-2.5 sm:px-3 rounded-lg text-[11px] transition-all cursor-pointer select-none ${
                              isSelected
                                ? 'border-2 border-[#4E9080] bg-[#F0F8F5] text-[#3D7D6F] font-bold shadow-xs'
                                : 'border border-slate-200 bg-white text-[#333E52] font-semibold hover:border-slate-300'
                            }`}
                          >
                            {nom}
                          </button>
                        );
                      })}
                    </div>

                    {/* Nominal input display */}
                    <div className="relative">
                      <div className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs flex items-center shadow-xs">
                        <span className="font-semibold text-slate-500 mr-2">Rp</span>
                        <span className="font-bold text-[#141928]">{previewNominal}</span>
                      </div>
                    </div>
                  </div>

                  {/* Metode Pembayaran */}
                  <div className="mb-5">
                    <label className="text-[11.5px] font-bold text-[#333E52] block mb-2">
                      Metode Pembayaran
                    </label>

                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      
                      {/* Virtual Account */}
                      <div
                        onClick={() => {
                          setPreviewPaymentMethod('va');
                          setPreviewSuccessMsg(false);
                        }}
                        className={`rounded-lg p-2.5 text-center cursor-pointer transition-all relative flex flex-col items-center justify-center ${
                          previewPaymentMethod === 'va'
                            ? 'bg-[#F0F8F5] border-2 border-[#4E9080] shadow-xs'
                            : 'bg-white border border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {previewPaymentMethod === 'va' && (
                          <div className="absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded-sm bg-[#346F60] text-white flex items-center justify-center shadow-xs">
                            <Check size={9} strokeWidth={3} />
                          </div>
                        )}
                        <div className="w-7 h-7 rounded-md bg-slate-50 flex items-center justify-center text-[#5A5F6B] mb-1.5">
                          <Building2 size={15} />
                        </div>
                        <h5 className="font-bold text-[10.5px] text-[#141928] mb-0.5 leading-tight">Virtual Account</h5>
                        <p className="text-[8.5px] text-[#8A8F9A] leading-tight">Verifikasi instan otomatis</p>
                      </div>

                      {/* Transfer Langsung */}
                      <div
                        onClick={() => {
                          setPreviewPaymentMethod('transfer');
                          setPreviewSuccessMsg(false);
                        }}
                        className={`rounded-lg p-2.5 text-center cursor-pointer transition-all relative flex flex-col items-center justify-center ${
                          previewPaymentMethod === 'transfer'
                            ? 'bg-[#F0F8F5] border-2 border-[#4E9080] shadow-xs'
                            : 'bg-white border border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {previewPaymentMethod === 'transfer' && (
                          <div className="absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded-sm bg-[#346F60] text-white flex items-center justify-center shadow-xs">
                            <Check size={9} strokeWidth={3} />
                          </div>
                        )}
                        <div className="w-7 h-7 rounded-md bg-slate-50 flex items-center justify-center text-[#5A5F6B] mb-1.5">
                          <FileText size={15} />
                        </div>
                        <h5 className="font-bold text-[10.5px] text-[#141928] mb-0.5 leading-tight">Transfer Langsung</h5>
                        <p className="text-[8.5px] text-[#8A8F9A] leading-tight">Verifikasi manual 1–24 jam</p>
                      </div>

                      {/* Kartu Kredit */}
                      <div
                        onClick={() => {
                          setPreviewPaymentMethod('cc');
                          setPreviewSuccessMsg(false);
                        }}
                        className={`rounded-lg p-2.5 text-center cursor-pointer transition-all relative flex flex-col items-center justify-center ${
                          previewPaymentMethod === 'cc'
                            ? 'bg-[#F0F8F5] border-2 border-[#4E9080] shadow-xs'
                            : 'bg-white border border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {previewPaymentMethod === 'cc' && (
                          <div className="absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded-sm bg-[#346F60] text-white flex items-center justify-center shadow-xs">
                            <Check size={9} strokeWidth={3} />
                          </div>
                        )}
                        <div className="w-7 h-7 rounded-md bg-slate-50 flex items-center justify-center text-[#5A5F6B] mb-1.5">
                          <CreditCard size={15} />
                        </div>
                        <h5 className="font-bold text-[10.5px] text-[#141928] mb-0.5 leading-tight">Kartu Kredit</h5>
                        <p className="text-[8.5px] text-[#8A8F9A] leading-tight">Dukung Visa, Mastercard, JCB</p>
                      </div>

                      {/* Debit Langsung */}
                      <div
                        onClick={() => {
                          setPreviewPaymentMethod('debit');
                          setPreviewSuccessMsg(false);
                        }}
                        className={`rounded-lg p-2.5 text-center cursor-pointer transition-all relative flex flex-col items-center justify-center ${
                          previewPaymentMethod === 'debit'
                            ? 'bg-[#F0F8F5] border-2 border-[#4E9080] shadow-xs'
                            : 'bg-white border border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {previewPaymentMethod === 'debit' && (
                          <div className="absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded-sm bg-[#346F60] text-white flex items-center justify-center shadow-xs">
                            <Check size={9} strokeWidth={3} />
                          </div>
                        )}
                        <div className="w-7 h-7 rounded-md bg-slate-50 flex items-center justify-center text-[#5A5F6B] mb-1.5">
                          <Wallet size={15} />
                        </div>
                        <h5 className="font-bold text-[10.5px] text-[#141928] mb-0.5 leading-tight">Debit Langsung</h5>
                        <p className="text-[8.5px] text-[#8A8F9A] leading-tight">Buku tabungan terhubung</p>
                      </div>

                      {/* QRIS */}
                      <div
                        onClick={() => {
                          setPreviewPaymentMethod('qris');
                          setPreviewSuccessMsg(false);
                        }}
                        className={`rounded-lg p-2.5 text-center cursor-pointer transition-all relative flex flex-col items-center justify-center col-span-2 sm:col-span-1 ${
                          previewPaymentMethod === 'qris'
                            ? 'bg-[#F0F8F5] border-2 border-[#4E9080] shadow-xs'
                            : 'bg-white border border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {previewPaymentMethod === 'qris' && (
                          <div className="absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded-sm bg-[#346F60] text-white flex items-center justify-center shadow-xs">
                            <Check size={9} strokeWidth={3} />
                          </div>
                        )}
                        <div className="w-7 h-7 rounded-md bg-slate-50 flex items-center justify-center text-[#346F60] mb-1.5">
                          <QrCode size={15} />
                        </div>
                        <h5 className="font-bold text-[10.5px] text-[#141928] mb-0.5 leading-tight">QRIS</h5>
                        <p className="text-[8.5px] text-[#8A8F9A] leading-tight">Pindai kode QR instan</p>
                      </div>

                    </div>
                  </div>

                  {/* Feedback Message if Clicked */}
                  {previewSuccessMsg && (
                    <div className="mb-3 p-2.5 rounded-lg bg-[#E6F5F2] border border-[#3D8B7A]/30 text-[#256B5D] text-[11px] font-semibold flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-[#3D8B7A] shrink-0" />
                      <span>
                        {isId 
                          ? `Simulasi pembayaran Top-Up Rp ${previewNominal} melalui ${previewPaymentMethod.toUpperCase()} siap diproses pada aplikasi operasional klinik.` 
                          : `Top-Up simulation of Rp ${previewNominal} via ${previewPaymentMethod.toUpperCase()} is ready.`}
                      </span>
                    </div>
                  )}

                  {/* Tombol Buat Pembayaran from screenshot */}
                  <button
                    type="button"
                    onClick={() => setPreviewSuccessMsg(true)}
                    className="w-full py-2.5 bg-[#1B3A7A] hover:bg-[#152e63] text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer active:scale-98"
                  >
                    <span>Buat Pembayaran</span>
                    <ArrowRight size={14} />
                  </button>

                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#EEF2FB]/60 border border-[#1B3A7A]/15 rounded-lg p-3 text-[12px] text-[#1B3A7A] font-semibold flex items-center gap-2 mt-5">
            <CheckCircle2 size={15} className="shrink-0 text-[#3D8B7A]" />
            <span>
              {isId 
                ? 'Seluruh pemotongan biaya dasar dan invoice dilakukan otomatis dari satu saldo prabayar tanpa pembayaran terpisah.'
                : 'All base and invoice deductions occur automatically from a single prepaid balance without separate billing.'}
            </span>
          </div>
        </div>

        {/* 5. Simulasi Total Biaya & KALKULATOR INTERAKTIF */}
        <div className="bg-white rounded-[24px] border border-[#DDE3EE] p-8 md:p-12 mb-20 shadow-sm">
          
          <div className="max-w-3xl mb-10">
            <span className="text-[11px] font-extrabold text-[#1B3A7A] uppercase tracking-[2px] block mb-2">
              {isId ? '5. SIMULASI ESTIMASI BIAYA' : '5. COST ESTIMATION SIMULATION'}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#141928] tracking-tight mb-3">
              {isId ? 'Simulasi Total Biaya Berlangganan per Bulan' : 'Monthly Total Cost Simulation'}
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#5A5F6B] leading-relaxed font-medium">
              {isId 
                ? 'Total biaya bulanan dapat diperkirakan dengan menjumlahkan biaya dasar berdasarkan jumlah kamar/kursi dan biaya penggunaan berdasarkan jumlah invoice yang diterbitkan.' 
                : 'Total monthly expenditure can be estimated by combining the base fee per room/chair and usage fee per invoice issued.'}
            </p>
          </div>

          {/* Tabel Resmi Simulasi dari PDF */}
          <div className="mb-12">
            <h3 className="text-sm font-bold text-[#141928] uppercase tracking-wider mb-3">
              {isId ? 'Tabel Contoh Simulasi (Berdasarkan PDF Resmi)' : 'Official Simulation Table (From PDF)'}
            </h3>
            <div className="overflow-x-auto rounded-xl border border-[#DDE3EE]">
              <table className="w-full text-left text-[13.5px]">
                <thead className="bg-[#1B3A7A] text-white font-extrabold uppercase text-[11px] tracking-wider">
                  <tr>
                    <th className="py-3.5 px-5">{isId ? 'Kamar / Kursi' : 'Rooms / Chairs'}</th>
                    <th className="py-3.5 px-5">{isId ? 'Biaya Dasar' : 'Base Fee'}</th>
                    <th className="py-3.5 px-5">{isId ? 'Estimasi Invoice / Bulan' : 'Estimated Invoices / Mo'}</th>
                    <th className="py-3.5 px-5 text-right font-black">{isId ? 'Total Estimasi / Bulan' : 'Total Estimated / Mo'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E6EAF2] font-semibold text-[#141928] bg-white">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-5 font-bold">1 kamar/kursi</td>
                    <td className="py-3 px-5 text-[#5A5F6B]">Rp100.000</td>
                    <td className="py-3 px-5 text-[#5A5F6B]">50 invoice (Rp150.000)</td>
                    <td className="py-3 px-5 text-right font-black text-[#1B3A7A] text-base">Rp250.000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-5 font-bold">2 kamar/kursi</td>
                    <td className="py-3 px-5 text-[#5A5F6B]">Rp175.000</td>
                    <td className="py-3 px-5 text-[#5A5F6B]">80 invoice (Rp240.000)</td>
                    <td className="py-3 px-5 text-right font-black text-[#1B3A7A] text-base">Rp415.000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-5 font-bold">3 kamar/kursi</td>
                    <td className="py-3 px-5 text-[#5A5F6B]">Rp225.000</td>
                    <td className="py-3 px-5 text-[#5A5F6B]">100 invoice (Rp300.000)</td>
                    <td className="py-3 px-5 text-right font-black text-[#1B3A7A] text-base">Rp525.000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-5 font-bold">4 kamar/kursi</td>
                    <td className="py-3 px-5 text-[#5A5F6B]">Rp275.000</td>
                    <td className="py-3 px-5 text-[#5A5F6B]">200 invoice (Rp600.000)</td>
                    <td className="py-3 px-5 text-right font-black text-[#1B3A7A] text-base">Rp875.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[12px] text-[#8A8F9A] italic mt-2.5">
              {isId 
                ? '* Contoh di atas merupakan simulasi berdasarkan tarif yang dicontohkan, bukan jumlah minimum top-up atau saldo yang harus diisi. Biaya sebenarnya mengikuti jumlah kamar/kursi terdaftar dan jumlah invoice yang benar-benar diterbitkan.'
                : '* The above table illustrates simulation examples, not a mandatory minimum top-up. Actual fees reflect registered chair capacity and actual invoices issued.'}
            </p>
          </div>

          {/* KALKULATOR INTERAKTIF LIVE */}
          <div className="bg-[#FAFBFD] border-2 border-[#1B3A7A]/20 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#1B3A7A] text-white flex items-center justify-center shrink-0">
                <Calculator size={20} />
              </div>
              <div>
                <h3 className="text-lg font-black text-[#141928]">
                  {isId ? 'Kalkulator Simulasi Biaya Interaktif' : 'Interactive Cost Calculator'}
                </h3>
                <p className="text-xs text-[#5A5F6B] font-medium">
                  {isId ? 'Sesuaikan dengan kapasitas dan aktivitas perkiraan klinik gigi Anda saat ini.' : 'Customize with your dental clinic capacity and anticipated patient volume.'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Controls Column */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Chair Count Control */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#141928]">
                      {isId ? 'Jumlah Kamar / Kursi Perawatan:' : 'Number of Treatment Rooms / Chairs:'}
                    </label>
                    <span className="text-sm font-black text-[#1B3A7A] bg-[#EEF2FB] px-3 py-1 rounded-md">
                      {chairCount} {isId ? 'Kamar/Kursi' : 'Rooms/Chairs'}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5, 6, 8].map((c) => (
                      <button
                        key={c}
                        onClick={() => setChairCount(c)}
                        className={`flex-1 py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                          chairCount === c 
                            ? 'bg-[#1B3A7A] text-white border-[#1B3A7A] shadow-sm' 
                            : 'bg-white text-[#5A5F6B] border-[#DDE3EE] hover:border-[#1B3A7A]'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] text-[#8A8F9A] mt-1.5">
                    {isId ? `Biaya dasar bulanan: ${formatRupiah(baseCost)} / bulan` : `Monthly base fee: ${formatRupiah(baseCost)} / month`}
                  </p>
                </div>

                {/* Invoices Count Control */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#141928]">
                      {isId ? 'Estimasi Penerbitan Invoice Pasien / Bulan:' : 'Estimated Patient Invoices Issued / Month:'}
                    </label>
                    <span className="text-sm font-black text-[#3D8B7A] bg-[#E6F5F2] px-3 py-1 rounded-md">
                      {invoiceCount} {isId ? 'Invoice' : 'Invoices'}
                    </span>
                  </div>

                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="10"
                    value={invoiceCount}
                    onChange={(e) => setInvoiceCount(Number(e.target.value))}
                    className="w-full accent-[#1B3A7A] cursor-pointer"
                  />

                  {/* Preset quick buttons */}
                  <div className="flex items-center gap-2 mt-2">
                    {[20, 50, 80, 100, 200, 300].map((inv) => (
                      <button
                        key={inv}
                        onClick={() => setInvoiceCount(inv)}
                        className={`px-2.5 py-1 text-[11px] font-semibold rounded-md border transition-all cursor-pointer ${
                          invoiceCount === inv
                            ? 'bg-[#3D8B7A] text-white border-[#3D8B7A]'
                            : 'bg-white text-[#5A5F6B] border-[#DDE3EE] hover:border-[#3D8B7A]'
                        }`}
                      >
                        {inv}
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] text-[#8A8F9A] mt-1.5">
                    {isId 
                      ? `Biaya penggunaan: ${invoiceCount} invoice × Rp3.000 = ${formatRupiah(invoiceCost)}` 
                      : `Usage fee: ${invoiceCount} invoices × Rp3,000 = ${formatRupiah(invoiceCost)}`}
                  </p>
                </div>

              </div>

              {/* Total Card Result Column */}
              <div className="lg:col-span-5 bg-white border border-[#DDE3EE] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#8A8F9A] uppercase tracking-wider block mb-1">
                    {isId ? 'Rincian Estimasi Biaya' : 'Estimated Cost Breakdown'}
                  </span>
                  
                  <div className="space-y-2.5 py-3 border-b border-[#E6EAF2] text-[13px]">
                    <div className="flex justify-between items-center text-[#5A5F6B]">
                      <span>{isId ? `Biaya Dasar (${chairCount} Kamar/Kursi)` : `Base Fee (${chairCount} Chairs)`}</span>
                      <span className="font-bold text-[#141928]">{formatRupiah(baseCost)}</span>
                    </div>
                    <div className="flex justify-between items-center text-[#5A5F6B]">
                      <span>{isId ? `Biaya Invoice (${invoiceCount} × Rp3.000)` : `Invoice Fee (${invoiceCount} × Rp3,000)`}</span>
                      <span className="font-bold text-[#141928]">{formatRupiah(invoiceCost)}</span>
                    </div>
                  </div>

                  <div className="pt-4 mb-6">
                    <span className="text-xs font-bold text-[#8A8F9A] block mb-0.5">
                      {isId ? 'Total Estimasi Biaya Berlangganan:' : 'Total Estimated Subscription Cost:'}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-[#1B3A7A] tracking-tight">
                        {formatRupiah(totalCost)}
                      </span>
                      <span className="text-xs font-semibold text-[#8A8F9A]">
                        {isId ? '/ bulan' : '/ month'}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#3D8B7A] font-semibold mt-1 flex items-center gap-1">
                      <CheckCircle2 size={13} />
                      {isId 
                        ? `Saran saldo top-up awal: ${formatRupiah(totalCost)}`
                        : `Suggested initial top-up: ${formatRupiah(totalCost)}`}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={handleSimulateSelect}
                    className="w-full py-3 bg-[#1B3A7A] hover:bg-[#112660] text-white rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md active:scale-95"
                  >
                    <span>{isId ? 'Gunakan Simulasi Ini & Hubungi Kami' : 'Select This Simulation & Contact'}</span>
                    <ArrowRight size={14} />
                  </button>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-white border border-[#DDE3EE] hover:border-[#3D8B7A] text-[#256B5D] rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all text-center"
                  >
                    <MessageSquare size={14} className="text-[#3D8B7A]" />
                    <span>{isId ? 'Konsultasi Simulasi via WhatsApp' : 'Consult via WhatsApp'}</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* 6. Mengapa Menggunakan Sistem Berlangganan Ini? */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-extrabold text-[#1B3A7A] uppercase tracking-[2px] block mb-2">
              {isId ? 'KEUNGGULAN UTAMA' : 'KEY ADVANTAGES'}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#141928] tracking-tight">
              {isId ? '6. Mengapa Menggunakan Sistem Berlangganan Ini?' : '6. Why Choose This Subscription Model?'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Keunggulan 1 */}
            <div className="bg-white rounded-2xl border border-[#DDE3EE] p-7 shadow-sm flex items-start gap-4 hover:border-[#1B3A7A] transition-all">
              <div className="w-11 h-11 rounded-xl bg-[#EEF2FB] text-[#1B3A7A] flex items-center justify-center shrink-0">
                <Building2 size={22} />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-[#141928] mb-1.5">
                  {isId ? 'Biaya Mengikuti Kapasitas Klinik' : 'Costs Mirror Clinic Capacity'}
                </h3>
                <p className="text-[13px] text-[#5A5F6B] leading-relaxed font-medium">
                  {isId 
                    ? 'Biaya dasar berlangganan disesuaikan secara proporsional dengan jumlah kamar atau kursi perawatan yang dimiliki klinik Anda, menjaga efisiensi investasi.'
                    : 'The base subscription fee is proportionally tailored to your dental chairs/rooms count, ensuring optimal return on clinical investment.'}
                </p>
              </div>
            </div>

            {/* Keunggulan 2 */}
            <div className="bg-white rounded-2xl border border-[#DDE3EE] p-7 shadow-sm flex items-start gap-4 hover:border-[#3D8B7A] transition-all">
              <div className="w-11 h-11 rounded-xl bg-[#E6F5F2] text-[#3D8B7A] flex items-center justify-center shrink-0">
                <TrendingUp size={22} />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-[#141928] mb-1.5">
                  {isId ? 'Komponen Biaya Penggunaan Lebih Terukur' : 'Directly Measurable Usage Fee'}
                </h3>
                <p className="text-[13px] text-[#5A5F6B] leading-relaxed font-medium">
                  {isId 
                    ? 'Biaya invoice dihitung berdasarkan jumlah penerbitan invoice sehingga mudah diperkirakan langsung dari aktivitas operasional nyata klinik.'
                    : 'Invoice fee is calculated based purely on issued receipts, making it effortlessly predictable from real daily clinical traffic.'}
                </p>
              </div>
            </div>

            {/* Keunggulan 3 */}
            <div className="bg-white rounded-2xl border border-[#DDE3EE] p-7 shadow-sm flex items-start gap-4 hover:border-[#1B3A7A] transition-all">
              <div className="w-11 h-11 rounded-xl bg-[#EEF2FB] text-[#1B3A7A] flex items-center justify-center shrink-0">
                <Wallet size={22} />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-[#141928] mb-1.5">
                  {isId ? 'Pembayaran Melalui Satu Saldo Terpadu' : 'Seamless Single-Balance Billing'}
                </h3>
                <p className="text-[13px] text-[#5A5F6B] leading-relaxed font-medium">
                  {isId 
                    ? 'Biaya dasar bulanan dan biaya invoice dipotong otomatis dari saldo prabayar yang sama. Tanpa ribet administrasi ganda setiap bulan.'
                    : 'Both base and invoice fees debit smoothly from the same unified prepaid balance with zero split-payment confusion.'}
                </p>
              </div>
            </div>

            {/* Keunggulan 4 */}
            <div className="bg-white rounded-2xl border border-[#DDE3EE] p-7 shadow-sm flex items-start gap-4 hover:border-[#3D8B7A] transition-all">
              <div className="w-11 h-11 rounded-xl bg-[#E6F5F2] text-[#3D8B7A] flex items-center justify-center shrink-0">
                <Layers size={22} />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-[#141928] mb-1.5">
                  {isId ? 'Mudah Membuat Perencanaan Biaya (Budgeting)' : 'Effortless Expense Planning'}
                </h3>
                <p className="text-[13px] text-[#5A5F6B] leading-relaxed font-medium">
                  {isId 
                    ? 'Pemilik dan pengelola klinik dapat memperkirakan biaya dengan akurat berdasarkan jumlah kamar/kursi dan volume invoice bulanan.'
                    : 'Clinic owners and finance managers can accurately forecast overhead costs based on chair count and invoice projection.'}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* 7. Pertanyaan yang Sering Diajukan (FAQ dari PDF) */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#E6F5F2] text-[#3D8B7A] px-3.5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-[1.5px] mb-3">
              <HelpCircle size={13} />
              {isId ? '7. FAQ SISTEM BERLANGGANAN' : '7. SUBSCRIPTION FAQ'}
            </div>
            <h2 className="text-2xl sm:text-[30px] font-black text-[#141928] tracking-tight">
              {isId ? 'Pertanyaan yang Sering Diajukan (FAQ)' : 'Frequently Asked Questions'}
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-[14px] border border-[#DDE3EE] overflow-hidden shadow-sm transition-all duration-200"
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
                    <div className="px-6 pb-5 pt-1 border-t border-slate-100 text-[13.5px] leading-relaxed text-[#5A5F6B] font-medium bg-[#EEF2FB]/20">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 8. Mulai Gunakan Sistem Berlangganan yang Lebih Fleksibel (CTA Final) */}
        <div className="bg-[#141928] text-white rounded-[24px] p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl relative overflow-hidden mb-12">
          <div className="absolute inset-0 bg-radial from-[#1B3A7A]/40 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <span className="text-[10.5px] font-extrabold text-[#3D8B7A] uppercase tracking-[2px] block mb-3">
              {isId ? '8. LANGKAH SELANJUTNYA' : '8. NEXT STEPS'}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black tracking-tight mb-5 leading-tight">
              {isId 
                ? 'Mulai Gunakan Sistem Berlangganan yang Lebih Fleksibel' 
                : 'Start with a More Flexible Subscription Model Today'}
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto mb-4">
              {isId 
                ? 'Kami percaya bahwa sistem operasional yang baik harus membantu klinik mengelola kegiatan sehari-hari dengan lebih praktis, sekaligus memberikan kejelasan mengenai biaya penggunaannya.'
                : 'We believe a great operational system must help clinics manage day-to-day operations with utmost convenience while delivering crystal clarity on running costs.'}
            </p>
            <p className="text-[14px] text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto mb-8">
              {isId
                ? 'Melalui skema berlangganan ini, klinik memiliki struktur biaya yang mudah dipahami: biaya dasar sesuai kapasitas dan biaya penggunaan sesuai aktivitas penerbitan invoice. Kelola klinik Anda dengan lebih terencana, dengan sistem pembayaran yang mengikuti kebutuhan operasional klinik.'
                : 'Through this model, clinics enjoy a straightforward cost structure: base fee matching clinical capacity and usage fee matching invoice activity. Run your dental clinic with predictable confidence.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  onSelectPlan('Sistem Fleksibel', 'opt_s2');
                }}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#1B3A7A] hover:bg-[#254ea3] text-white rounded-xl text-sm font-black flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg active:scale-95"
              >
                <span>{isId ? 'Konsultasi Sekarang & Coba Sistem' : 'Consult Now & Try KHAYR'}</span>
                <ArrowRight size={16} />
              </button>
              
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#3D8B7A] hover:bg-[#2e6d5f] text-white rounded-xl text-sm font-black flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md active:scale-95"
              >
                <MessageSquare size={16} />
                <span>{isId ? 'Hubungi via WhatsApp' : 'Chat via WhatsApp'}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
