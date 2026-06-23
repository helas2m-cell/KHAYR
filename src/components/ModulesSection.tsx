/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TranslationSet } from '../types';
import { Search, Filter, ShieldCheck, CheckSquare, Sparkles, FolderHeart } from 'lucide-react';

interface ModulesSectionProps {
  t: TranslationSet;
}

export function ModulesSection({ t }: ModulesSectionProps) {
  // Tabs selection
  const [activeTab, setActiveTab] = useState<'reservation' | 'appointments' | 'clinical' | 'history' | 'inventory' | 'analytics'>('reservation');

  // Reservation state
  const [resType, setResType] = useState<'lama' | 'baru'>('lama');
  const [resStep, setResStep] = useState<number>(1);

  // Appointments filter state
  const [aptSearch, setAptSearch] = useState('');
  
  // Clinical state (Odontogram)
  const [selectedTooth, setSelectedTooth] = useState<number | null>(null);
  const toothConditions: Record<number, { condition: string; color: string; bg: string }> = {
    16: { condition: 'Karies (Caries)', color: '#B91C1C', bg: '#FEE2E2' },
    25: { condition: 'Tambalan (Fillings)', color: '#1B3A7A', bg: '#EEF2FB' },
    45: { condition: 'Mahkota (Crown)', color: '#3D8B7A', bg: '#E6F5F2' },
    36: { condition: 'Karies (Caries)', color: '#B91C1C', bg: '#FEE2E2' },
  };

  // Appointments dataset
  const appointmentList = [
    { id: 1, time: '20 Jun 19:00', status: 'Terjadwal', doctor: 'dr. Omar H.', patient: 'Kinara Kinan', mrn: 'MRN1125245' },
    { id: 2, time: '17 Jun 15:00', status: 'Terjadwal', doctor: 'dr. Alexander', patient: 'Nancy Wang', mrn: 'MRN021025' },
    { id: 3, time: '15 Jun 10:30', status: 'Selesai', doctor: 'dr. Sara N.', patient: 'Ahmed Al-Farsi', mrn: 'MRN030625' },
  ];

  const filteredAppointments = appointmentList.filter(apt => 
    apt.patient.toLowerCase().includes(aptSearch.toLowerCase()) ||
    apt.mrn.toLowerCase().includes(aptSearch.toLowerCase()) ||
    apt.doctor.toLowerCase().includes(aptSearch.toLowerCase())
  );

  return (
    <section id="modules" className="py-20 bg-[#F4F6FA] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title bar */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-[11px] font-extrabold text-[#4E9E8F] tracking-[2px] uppercase mb-3">
            {t.mod_label}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#141928] leading-[1.18] tracking-tight mb-5">
            {t.mod_title}
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#5A5F6B] leading-[1.78] font-normal">
            {t.mod_sub}
          </p>
        </div>

        {/* Modular Tabs list */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('reservation')}
            className={`px-5 py-2.5 rounded-full text-[12px] font-bold transition-all cursor-pointer ${
              activeTab === 'reservation'
                ? 'bg-[#1B3A7A] text-white border-2 border-[#1B3A7A]'
                : 'bg-white text-[#8A8F9A] border-2 border-[#DDE3EE] hover:border-[#1B3A7A]'
            }`}
          >
            {t.tab1}
          </button>
          <button
            onClick={() => setActiveTab('appointments')}
            className={`px-5 py-2.5 rounded-full text-[12px] font-bold transition-all cursor-pointer ${
              activeTab === 'appointments'
                ? 'bg-[#1B3A7A] text-white border-2 border-[#1B3A7A]'
                : 'bg-white text-[#8A8F9A] border-2 border-[#DDE3EE] hover:border-[#1B3A7A]'
            }`}
          >
            {t.tab2}
          </button>
          <button
            onClick={() => setActiveTab('clinical')}
            className={`px-5 py-2.5 rounded-full text-[12px] font-bold transition-all cursor-pointer ${
              activeTab === 'clinical'
                ? 'bg-[#1B3A7A] text-white border-2 border-[#1B3A7A]'
                : 'bg-white text-[#8A8F9A] border-2 border-[#DDE3EE] hover:border-[#1B3A7A]'
            }`}
          >
            {t.tab3}
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-5 py-2.5 rounded-full text-[12px] font-bold transition-all cursor-pointer ${
              activeTab === 'history'
                ? 'bg-[#1B3A7A] text-white border-2 border-[#1B3A7A]'
                : 'bg-white text-[#8A8F9A] border-2 border-[#DDE3EE] hover:border-[#1B3A7A]'
            }`}
          >
            {t.tab4}
          </button>
          <button
            onClick={() => setActiveTab('inventory')}
            className={`px-5 py-2.5 rounded-full text-[12px] font-bold transition-all cursor-pointer ${
              activeTab === 'inventory'
                ? 'bg-[#1B3A7A] text-white border-2 border-[#1B3A7A]'
                : 'bg-white text-[#8A8F9A] border-2 border-[#DDE3EE] hover:border-[#1B3A7A]'
            }`}
          >
            {t.tab5}
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-5 py-2.5 rounded-full text-[12px] font-bold transition-all cursor-pointer ${
              activeTab === 'analytics'
                ? 'bg-[#1B3A7A] text-white border-2 border-[#1B3A7A]'
                : 'bg-white text-[#8A8F9A] border-2 border-[#DDE3EE] hover:border-[#1B3A7A]'
            }`}
          >
            {t.tab6}
          </button>
        </div>

        {/* MODULE CARDS DISPLAY CONTAINER */}

        {/* 1. RESERVATIONS tab panel */}
        {activeTab === 'reservation' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all">
            <div className="flex flex-col">
              <h3 className="text-[20px] sm:text-[22px] font-extrabold text-[#141928] mb-4">
                {t.s1_title}
              </h3>
              <p className="text-[13px] sm:text-[14px] text-[#5A5F6B] leading-[1.75] mb-6">
                {t.s1_desc}
              </p>
              
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-start">
                  <div className="w-[32px] h-[32px] bg-[#EEF2FB] rounded-[8px] flex items-center justify-center text-[#1B3A7A] font-black shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-[#141928]">{t.s1_f1t}</h4>
                    <p className="text-[12px] text-[#8A8F9A] mt-0.5">{t.s1_f1d}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-[32px] h-[32px] bg-[#EEF2FB] rounded-[8px] flex items-center justify-center text-[#1B3A7A] font-black shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-[#141928]">{t.s1_f2t}</h4>
                    <p className="text-[12px] text-[#8A8F9A] mt-0.5">{t.s1_f2d}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-[32px] h-[32px] bg-[#EEF2FB] rounded-[8px] flex items-center justify-center text-[#1B3A7A] font-black shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-[#141928]">{t.s1_f3t}</h4>
                    <p className="text-[12px] text-[#8A8F9A] mt-0.5">{t.s1_f3d}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated UI: Reservations */}
            <div className="bg-white rounded-[14px] border border-[#DDE3EE] overflow-hidden shadow-lg select-none">
              <div className="bg-[#F4F6FA] border-b border-[#DDE3EE] px-4 py-3 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                <span className="text-[11px] font-extrabold text-[#141928] ml-2">Buat Janji Temu — Reservasi Baru</span>
              </div>
              
              <div className="p-5">
                {/* Steps header */}
                <div className="flex mb-4">
                  <button onClick={() => setResStep(1)} className={`flex-1 text-center pb-2.5 border-b-2 text-[10px] font-bold ${resStep === 1 ? 'color-[#1B3A7A] border-[#1B3A7A]' : 'text-[#8A8F9A] border-[#DDE3EE]/60'}`}>
                    1. Tipe Pasien
                  </button>
                  <button onClick={() => setResStep(2)} className={`flex-1 text-center pb-2.5 border-b-2 text-[10px] font-bold ${resStep === 2 ? 'color-[#1B3A7A] border-[#1B3A7A]' : 'text-[#8A8F9A] border-[#DDE3EE]/60'}`}>
                    2. Data Pasien
                  </button>
                  <button onClick={() => setResStep(3)} className={`flex-1 text-center pb-2.5 border-b-2 text-[10px] font-bold ${resStep === 3 ? 'color-[#1B3A7A] border-[#1B3A7A]' : 'text-[#8A8F9A] border-[#DDE3EE]/60'}`}>
                    3. Reservasi
                  </button>
                </div>

                <p className="text-[10px] text-[#8A8F9A] mb-3 font-semibold">
                  {resStep === 1 ? 'Pilih tipe pendaftaran pasien' : resStep === 2 ? 'Lengkapi identifikasi daktilaris / NIK' : 'Pilih ruangan perawatan & slot jam'}
                </p>

                {resStep === 1 && (
                  <div className="flex flex-col gap-2">
                    <div
                      onClick={() => setResType('lama')}
                      className={`p-3 border-2 rounded-[8px] flex items-center gap-3 cursor-pointer transition-all ${
                        resType === 'lama' ? 'border-[#1B3A7A] bg-[#EEF2FB]' : 'border-transparent bg-[#F4F6FA]'
                      }`}
                    >
                      <div className="w-[15px] h-[15px] rounded-full border-2 border-[#1B3A7A] flex items-center justify-center">
                        {resType === 'lama' && <div className="w-1.5 h-1.5 rounded-full bg-[#1B3A7A]" />}
                      </div>
                      <div>
                        <div className="text-[12px] font-extrabold text-[#141928]">Pasien Lama</div>
                        <div className="text-[10px] text-[#8A8F9A] font-medium">Lanjut mencari data rekam medis kronologis yang ada</div>
                      </div>
                    </div>

                    <div
                      onClick={() => setResType('baru')}
                      className={`p-3 border-2 rounded-[8px] flex items-center gap-3 cursor-pointer transition-all ${
                        resType === 'baru' ? 'border-[#1B3A7A] bg-[#EEF2FB]' : 'border-transparent bg-[#F4F6FA]'
                      }`}
                    >
                      <div className="w-[15px] h-[15px] rounded-full border-2 border-[#1B3A7A] flex items-center justify-center">
                        {resType === 'baru' && <div className="w-1.5 h-1.5 rounded-full bg-[#1B3A7A]" />}
                      </div>
                      <div>
                        <div className="text-[12px] font-extrabold text-[#141928]">Pasien Baru</div>
                        <div className="text-[10px] text-[#8A8F9A] font-medium">Buat rekam kependudukan baru terlebih dahulu</div>
                      </div>
                    </div>
                  </div>
                )}

                {resStep === 2 && (
                  <div className="flex flex-col gap-2.5">
                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] font-bold text-[#8A8F9A]">CARI NIK / REKAM MEDIS</label>
                      <input type="text" placeholder="Masukkan NIK 16 digit..." defaultValue="3174092506920003" className="px-3 py-2 bg-[#F4F6FA] border border-[#DDE3EE] rounded-[6px] text-[11px] text-[#141928] focus:outline-none" readOnly />
                    </div>
                    <div className="p-2.5 bg-[#E6F5F2] border border-[#b2dfd8] rounded-[6px] text-[10px] text-[#3D8B7A] font-bold">
                      ✓ Sinyal terhubung, data pasien "Sarah Hassan" (33 th) terverifikasi.
                    </div>
                  </div>
                )}

                {resStep === 3 && (
                  <div className="flex flex-col gap-2.5">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-[#F4F6FA] p-2.5 rounded-[6px]">
                        <span className="text-[9px] text-[#8A8F9A] block uppercase font-bold tracking-wider">Ruang Praktik</span>
                        <span className="text-[11px] font-bold text-[#141928]">Dental Operator-A</span>
                      </div>
                      <div className="bg-[#F4F6FA] p-2.5 rounded-[6px]">
                        <span className="text-[9px] text-[#8A8F9A] block uppercase font-bold tracking-wider">Jadwal Tanggal</span>
                        <span className="text-[11px] font-bold text-[#141928]">Kamis, 20 Juni 2025</span>
                      </div>
                    </div>
                    <div className="p-2 bg-[#EEF2FB] rounded-[6px] text-center text-[#1B3A7A] text-[11px] font-black">
                      Slot Jam Tersedia: 09:00 - 09:45
                    </div>
                  </div>
                )}

                <div className="mt-3.5 grid grid-cols-2 gap-2">
                  <div className="bg-[#F4F6FA] rounded-[6px] p-2">
                    <div className="text-[9px] font-bold text-[#8A8F9A] uppercase tracking-[0.4px]">DOKTER GIGI</div>
                    <div className="text-[11px] font-extrabold text-[#141928]">drg. Omar Husen, Sp.KG</div>
                  </div>
                  <div className="bg-[#F4F6FA] rounded-[6px] p-2">
                    <div className="text-[9px] font-bold text-[#8A8F9A] uppercase tracking-[0.4px]">WAKTU RESERVASI</div>
                    <div className="text-[11px] font-extrabold text-[#141928]">20 Jun 2025, 09:00</div>
                  </div>
                </div>

                <div className="bg-[#E6F5F2] border border-[#b2dfd8] rounded-[8px] p-2.5 text-[10px] font-bold text-[#3D8B7A] text-center mt-3">
                  {t.res_highlight}
                </div>

                {/* Simulated controls */}
                <div className="mt-4 flex justify-between">
                  <button onClick={() => setResStep(prev => Math.max(1, prev - 1))} className={`bg-[#F4F6FA] hover:bg-slate-100 text-[#5A5F6B] border border-[#DDE3EE] rounded-[6px] px-3.5 py-1.5 text-[11px] font-bold cursor-pointer ${resStep === 1 ? 'opacity-50 pointer-events-none' : ''}`}>
                    Kembali
                  </button>
                  <button onClick={() => setResStep(prev => Math.min(3, prev + 1))} className="bg-[#1B3A7A] hover:bg-[#112660] text-white rounded-[6px] px-4 py-1.5 text-[11px] font-bold cursor-pointer">
                    {resStep === 3 ? 'Selesaikan Booking' : 'Lanjut →'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. APPOINTMENTS tab panel */}
        {activeTab === 'appointments' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all">
            <div className="flex flex-col">
              <h3 className="text-[20px] sm:text-[22px] font-extrabold text-[#141928] mb-4">
                {t.s2_title}
              </h3>
              <p className="text-[13px] sm:text-[14px] text-[#5A5F6B] leading-[1.75] mb-6">
                {t.s2_desc}
              </p>
              
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-start">
                  <div className="w-[32px] h-[32px] bg-[#EEF2FB] rounded-[8px] flex items-center justify-center text-[#1B3A7A] font-black shrink-0">
                    <Search className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-[#141928]">{t.s2_f1t}</h4>
                    <p className="text-[12px] text-[#8A8F9A] mt-0.5">{t.s2_f1d}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-[32px] h-[32px] bg-[#EEF2FB] rounded-[8px] flex items-center justify-center text-[#1B3A7A] font-black shrink-0">
                    <Filter className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-[#141928]">{t.s2_f2t}</h4>
                    <p className="text-[12px] text-[#8A8F9A] mt-0.5">{t.s2_f2d}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-[32px] h-[32px] bg-[#EEF2FB] rounded-[8px] flex items-center justify-center text-[#1B3A7A] font-black shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-[#141928]">{t.s2_f3t}</h4>
                    <p className="text-[12px] text-[#8A8F9A] mt-0.5">{t.s2_f3d}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated UI: Appointments list */}
            <div className="bg-white rounded-[14px] border border-[#DDE3EE] overflow-hidden shadow-lg select-none">
              <div className="bg-[#F4F6FA] border-b border-[#DDE3EE] px-4 py-3 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                <span className="text-[11px] font-extrabold text-[#141928] ml-2">Daftar Reservasi — Appointment List</span>
              </div>
              
              <div className="p-4">
                {/* Search / Filter Controls row */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mb-3.5">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={aptSearch}
                      onChange={(e) => setAptSearch(e.target.value)}
                      placeholder="Cari daftar pasien..."
                      className="w-full bg-[#F4F6FA] border border-[#DDE3EE] rounded-[6px] py-1.5 pl-7 pr-3 text-[11px] focus:outline-none"
                    />
                    <div className="absolute left-2.5 top-2.5 text-slate-400">
                      <Search size={12} />
                    </div>
                  </div>
                  <div className="bg-[#EEF2FB] text-[#1B3A7A] text-[9px] font-bold px-3 py-2 rounded-[6px] whitespace-nowrap self-center">
                    01 Jun – 30 Jul 2025 ✕
                  </div>
                  <div className="bg-[#EEF2FB] text-[#1B3A7A] text-[9px] font-bold px-2.5 py-2 rounded-[6px] whitespace-nowrap cursor-pointer text-center">
                    ⚙ Filter
                  </div>
                </div>

                {/* Table View */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-[10px]">
                    <thead>
                      <tr className="border-b border-[#DDE3EE]/60">
                        <th className="py-2.5 px-2 text-[9px] font-extrabold text-[#8A8F9A] uppercase tracking-wider">#</th>
                        <th className="py-2.5 px-2 text-[9px] font-extrabold text-[#8A8F9A] uppercase tracking-wider">Waktu</th>
                        <th className="py-2.5 px-2 text-[9px] font-extrabold text-[#8A8F9A] uppercase tracking-wider">Status</th>
                        <th className="py-2.5 px-2 text-[9px] font-extrabold text-[#8A8F9A] uppercase tracking-wider">Dokter</th>
                        <th className="py-2.5 px-2 text-[9px] font-extrabold text-[#8A8F9A] uppercase tracking-wider">Nama Pasien</th>
                        <th className="py-2.5 px-2 text-[9px] font-extrabold text-[#8A8F9A] uppercase tracking-wider">No. RM</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredAppointments.length > 0 ? (
                        filteredAppointments.map((apt, index) => (
                          <tr key={apt.id} className="border-b border-[#DDE3EE]/40 hover:bg-slate-50 transition-colors">
                            <td className="py-2 px-2 font-bold text-slate-400">{index + 1}</td>
                            <td className="py-2 px-2 font-semibold text-slate-750">{apt.time}</td>
                            <td className="py-2 px-2">
                              <span className={`px-2 py-0.5 rounded-full text-[9px] font-extrabold ${
                                apt.status === 'Selesai' ? 'bg-[#EEF2FB] text-[#1B3A7A]' : 'bg-[#E6F5F2] text-[#2D7A68]'
                              }`}>
                                {apt.status}
                              </span>
                            </td>
                            <td className="py-2 px-2 font-semibold text-slate-700">{apt.doctor}</td>
                            <td className="py-2 px-2 font-bold text-[#141928]">{apt.patient}</td>
                            <td className="py-2 px-2 font-bold text-[#1B3A7A] font-mono">{apt.mrn}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={6} className="py-5 text-center font-bold text-slate-400">
                            Tidak ada pasien yang cocok dengan pencarian Anda.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="text-[9px] text-[#8A8F9A] mt-2 font-medium">
                  Menampilkan {filteredAppointments.length} dari {appointmentList.length} hasil
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. CLINICAL tab panel */}
        {activeTab === 'clinical' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all">
            <div className="flex flex-col">
              <h3 className="text-[20px] sm:text-[22px] font-extrabold text-[#141928] mb-4">
                {t.s1_title}
              </h3>
              <p className="text-[13px] sm:text-[14px] text-[#5A5F6B] leading-[1.75] mb-6">
                {t.s3_desc}
              </p>
              
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-start">
                  <div className="w-[32px] h-[32px] bg-[#EEF2FB] rounded-[8px] flex items-center justify-center text-[#1B3A7A] font-shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-[#141928]">{t.s3_f1t}</h4>
                    <p className="text-[12px] text-[#8A8F9A] mt-0.5">{t.s3_f1d}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-[32px] h-[32px] bg-[#EEF2FB] rounded-[8px] flex items-center justify-center text-[#1B3A7A] font-shrink-0">
                    <CheckSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-[#141928]">{t.s3_f2t}</h4>
                    <p className="text-[12px] text-[#8A8F9A] mt-0.5">{t.s3_f2d}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-[32px] h-[32px] bg-[#EEF2FB] rounded-[8px] flex items-center justify-center text-[#1B3A7A] font-shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-[#141928]">{t.s3_f3t}</h4>
                    <p className="text-[12px] text-[#8A8F9A] mt-0.5">{t.s3_f3d}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated UI: Odontogram clinical chart */}
            <div className="bg-white rounded-[14px] border border-[#DDE3EE] overflow-hidden shadow-lg select-none">
              <div className="bg-[#F4F6FA] border-b border-[#DDE3EE] px-4 py-3 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                <span className="text-[11px] font-extrabold text-[#141928] ml-2">Diagnosa &amp; Tindakan — Clinical Charting</span>
              </div>
              
              <div className="p-4">
                {/* Header key-value row for client identity */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                  <div className="bg-[#F4F6FA] p-2 rounded-[6px]">
                    <span className="text-[8px] text-[#8A8F9A] uppercase tracking-[0.4px] block font-extrabold">Nama Pasien</span>
                    <span className="text-[10px] font-bold text-[#141928]">Kinara Kinan</span>
                  </div>
                  <div className="bg-[#F4F6FA] p-2 rounded-[6px]">
                    <span className="text-[8px] text-[#8A8F9A] uppercase tracking-[0.4px] block font-extrabold">No. Rekam Medis</span>
                    <span className="text-[10px] font-bold text-[#141928] font-mono">MRN1125245</span>
                  </div>
                  <div className="bg-[#F4F6FA] p-2 rounded-[6px]">
                    <span className="text-[8px] text-[#8A8F9A] uppercase tracking-[0.4px] block font-extrabold">Alergi</span>
                    <span className="text-[10px] font-black text-rose-600 block truncate">Penisilin</span>
                  </div>
                  <div className="bg-[#F4F6FA] p-2 rounded-[6px]">
                    <span className="text-[8px] text-[#8A8F9A] uppercase tracking-[0.4px] block font-extrabold">Tekanan Darah</span>
                    <span className="text-[10px] font-bold text-teal-600">120/80 mmHg</span>
                  </div>
                </div>

                {/* Simulated Dentist Tooth Odontogram Graphic segment */}
                <div className="bg-[#F4F6FA] rounded-[8px] p-3 mb-3 relative">
                  <div className="text-[9px] font-bold text-[#8A8F9A] text-center uppercase tracking-wider mb-2">
                    Odontogram Interaktif
                  </div>
                  
                  <div className="flex justify-between text-[8px] font-bold text-slate-400 px-1 mb-1">
                    <span>Kanan</span>
                    <span>Kiri</span>
                  </div>

                  {/* Top Denture Row */}
                  <div className="flex justify-center gap-[3px] mb-1.5">
                    {[18, 17, 16, 15, 14, 13, 12, 11].map(num => {
                      const cond = toothConditions[num];
                      const isSelected = selectedTooth === num;
                      return (
                        <button
                          key={num}
                          onClick={() => setSelectedTooth(isSelected ? null : num)}
                          style={{ backgroundColor: cond ? cond.bg : '#FFF', color: cond ? cond.color : '#8A8F9A', borderColor: isSelected ? '#1B3A7A' : '#DDE3EE' }}
                          className={`w-5 h-6 text-[7px] font-extrabold border rounded-[4px] cursor-pointer hover:border-brand-navy flex flex-col items-center justify-center transition-all ${isSelected ? 'scale-110 shadow-md ring-2 ring-brand-navy' : ''}`}
                        >
                          {num}
                        </button>
                      );
                    })}
                    <div className="w-[10px] h-6 flex items-center justify-center text-slate-300 font-bold border-r border-[#DDE3EE]"></div>
                    {[21, 22, 23, 24, 25, 26, 27, 28].map(num => {
                      const cond = toothConditions[num];
                      const isSelected = selectedTooth === num;
                      return (
                        <button
                          key={num}
                          onClick={() => setSelectedTooth(isSelected ? null : num)}
                          style={{ backgroundColor: cond ? cond.bg : '#FFF', color: cond ? cond.color : '#8A8F9A', borderColor: isSelected ? '#1B3A7A' : '#DDE3EE' }}
                          className={`w-5 h-6 text-[7px] font-extrabold border rounded-[4px] cursor-pointer hover:border-brand-navy flex flex-col items-center justify-center transition-all ${isSelected ? 'scale-110 shadow-md ring-2 ring-brand-navy' : ''}`}
                        >
                          {num}
                        </button>
                      );
                    })}
                  </div>

                  {/* Bottom Denture Row */}
                  <div className="flex justify-center gap-[3px]">
                    {[48, 47, 46, 45, 44, 43, 42, 41].map(num => {
                      const cond = toothConditions[num];
                      const isSelected = selectedTooth === num;
                      return (
                        <button
                          key={num}
                          onClick={() => setSelectedTooth(isSelected ? null : num)}
                          style={{ backgroundColor: cond ? cond.bg : '#FFF', color: cond ? cond.color : '#8A8F9A', borderColor: isSelected ? '#1B3A7A' : '#DDE3EE' }}
                          className={`w-5 h-6 text-[7px] font-extrabold border rounded-[4px] cursor-pointer hover:border-brand-navy flex flex-col items-center justify-center transition-all ${isSelected ? 'scale-110 shadow-md ring-2 ring-brand-navy' : ''}`}
                        >
                          {num}
                        </button>
                      );
                    })}
                    <div className="w-[10px] h-6 flex items-center justify-center text-slate-300 font-bold border-r border-[#DDE3EE]"></div>
                    {[31, 32, 33, 34, 35, 36, 37, 38].map(num => {
                      const cond = toothConditions[num];
                      const isSelected = selectedTooth === num;
                      return (
                        <button
                          key={num}
                          onClick={() => setSelectedTooth(isSelected ? null : num)}
                          style={{ backgroundColor: cond ? cond.bg : '#FFF', color: cond ? cond.color : '#8A8F9A', borderColor: isSelected ? '#1B3A7A' : '#DDE3EE' }}
                          className={`w-5 h-6 text-[7px] font-extrabold border rounded-[4px] cursor-pointer hover:border-brand-navy flex flex-col items-center justify-center transition-all ${isSelected ? 'scale-110 shadow-md ring-2 ring-brand-navy' : ''}`}
                        >
                          {num}
                        </button>
                      );
                    })}
                  </div>

                  {/* Interactive condition tooltip */}
                  {selectedTooth && (
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 bg-[#1B3A7A] text-white px-3 py-1.5 rounded-[6px] text-[9px] font-bold shadow-lg flex items-center gap-1.5 animate-bounce">
                      <span>Gigi {selectedTooth}:</span>
                      {toothConditions[selectedTooth] ? (
                        <span className="text-[#A8D8EA]">{toothConditions[selectedTooth].condition}</span>
                      ) : (
                        <span className="text-white/60">Kondisi Sehat (Normal)</span>
                      )}
                    </div>
                  )}

                  {/* Odontogram legends */}
                  <div className="flex gap-4 justify-center items-center mt-3 font-semibold text-[9px]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-[2px] bg-[#FEE2E2] border border-[#F87171] inline-block" />
                      <span>Karies (Caries)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-[2px] bg-[#EEF2FB] border border-[#235BAD] inline-block" />
                      <span>Tambalan (Fillings)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-[2px] bg-[#E6F5F2] border border-[#4E9E8F] inline-block" />
                      <span>Mahkota (Crown)</span>
                    </div>
                  </div>
                </div>

                {/* Sub diagnosis boxes */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#F4F6FA] p-3 rounded-[6px]">
                    <span className="text-[8px] text-[#8A8F9A] uppercase tracking-[0.4px] block font-extrabold mb-1.5">Diagnosis Sesi Ini</span>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 bg-[#EEF2FB] text-[#1B3A7A] text-[9px] font-extrabold rounded-full">Pulpitis Akut</span>
                      <span className="px-2 py-0.5 bg-[#EEF2FB] text-[#1B3A7A] text-[9px] font-extrabold rounded-full">Karies Dentin G4</span>
                    </div>
                  </div>
                  <div className="bg-[#F4F6FA] p-3 rounded-[6px]">
                    <span className="text-[8px] text-[#8A8F9A] uppercase tracking-[0.4px] block font-extrabold mb-1.5">Tindakan Selesai</span>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 bg-[#E6F5F2] text-[#2D7A68] text-[9px] font-extrabold rounded-full">Root Canal</span>
                      <span className="px-2 py-0.5 bg-[#E6F5F2] text-[#2D7A68] text-[9px] font-extrabold rounded-full">Scaling G21</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* 4. MEDICAL HISTORY tab panel */}
        {activeTab === 'history' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all">
            <div className="flex flex-col">
              <h3 className="text-[20px] sm:text-[22px] font-extrabold text-[#141928] mb-4">
                {t.s4_title}
              </h3>
              <p className="text-[13px] sm:text-[14px] text-[#5A5F6B] leading-[1.75] mb-6">
                {t.s4_desc}
              </p>
              
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-start">
                  <div className="w-[32px] h-[32px] bg-[#EEF2FB] rounded-[8px] flex items-center justify-center text-[#1B3A7A] font-shrink-0">
                    <FolderHeart className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-[#141928]">{t.s4_f1t}</h4>
                    <p className="text-[12px] text-[#8A8F9A] mt-0.5">{t.s4_f1d}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-[32px] h-[32px] bg-[#EEF2FB] rounded-[8px] flex items-center justify-center text-[#1B3A7A] font-shrink-0">
                    <Search className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-[#141928]">{t.s4_f2t}</h4>
                    <p className="text-[12px] text-[#8A8F9A] mt-0.5">{t.s4_f2d}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-[32px] h-[32px] bg-[#EEF2FB] rounded-[8px] flex items-center justify-center text-[#1B3A7A] font-shrink-0">
                    <Filter className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-[#141928]">{t.s4_f3t}</h4>
                    <p className="text-[12px] text-[#8A8F9A] mt-0.5">{t.s4_f3d}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated UI: EMR Timeline List */}
            <div className="bg-white rounded-[14px] border border-[#DDE3EE] overflow-hidden shadow-lg select-none">
              <div className="bg-[#F4F6FA] border-b border-[#DDE3EE] px-4 py-3 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                <span className="text-[11px] font-extrabold text-[#141928] ml-2">Daftar Rekam Medis — Medical History</span>
              </div>
              
              <div className="p-4.5 max-h-[350px] overflow-y-auto">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mb-4">
                  <div className="relative flex-1">
                    <input type="text" placeholder="Cari rekam medis..." className="w-full bg-[#F4F6FA] border border-[#DDE3EE] rounded-[6px] py-1.5 pl-7 pr-3 text-[10px] focus:outline-none" readOnlyValue="Kinara" />
                    <Search className="absolute left-2.5 top-2.5 text-slate-400 w-3 h-3" />
                  </div>
                  <div className="bg-[#EEF2FB] text-[#1B3A7A] text-[9px] font-bold px-3 py-2 rounded-[6px] text-center whitespace-nowrap">
                    01 Jan – 30 Jun 2025 ✕
                  </div>
                </div>

                <div className="flex flex-col gap-3.5">
                  <div className="border-l-2 border-brand-navy pl-4.5 pb-2 relative">
                    <span className="absolute -left-[6px] top-1 w-2.5 h-2.5 rounded-full bg-[#1B3A7A] ring-4 ring-white" />
                    <span className="text-[10px] font-bold text-[#1B3A7A] block mb-0.5">25 Feb 2025</span>
                    <h5 className="text-[12px] font-extrabold text-[#141928]">Pulpitis — Gigi 16</h5>
                    <p className="text-[11px] text-[#5A5F6B] mt-0.5">Tindakan: Root Canal Gigi 16; Pembersihan dan Poles Scaling</p>
                    <span className="text-[10px] text-[#4E9E8F] font-bold mt-1.5 inline-block">Attending: drg. Shella Annisa, Sp.KG</span>
                  </div>

                  <div className="border-l-2 border-[#DDE3EE] pl-4.5 pb-2 relative">
                    <span className="absolute -left-[6px] top-1 w-2.5 h-2.5 rounded-full bg-slate-300 ring-4 ring-white" />
                    <span className="text-[10px] font-bold text-[#8A8F9A] block mb-0.5">20 Feb 2025</span>
                    <h5 className="text-[12px] font-extrabold text-[#141928]">Scaling 2 Rahang — Sedang</h5>
                    <p className="text-[11px] text-[#5A5F6B] mt-0.5">Tindakan: Scaling & Dental prophylaxis complete session</p>
                    <span className="text-[10px] text-[#4E9E8F] font-bold mt-1.5 inline-block">Attending: drg. Shella Annisa, Sp.KG</span>
                  </div>

                  <div className="border-l-2 border-[#DDE3EE] pl-4.5 pb-2 relative">
                    <span className="absolute -left-[6px] top-1 w-2.5 h-2.5 rounded-full bg-slate-300 ring-4 ring-white" />
                    <span className="text-[10px] font-bold text-[#8A8F9A] block mb-0.5">15 Feb 2025</span>
                    <h5 className="text-[12px] font-extrabold text-[#141928]">Dental Caries & Fissure Deep</h5>
                    <p className="text-[11px] text-[#5A5F6B] mt-0.5">Tindakan: Fissure Sealant Gigi 36 & 46</p>
                    <span className="text-[10px] text-[#4E9E8F] font-bold mt-1.5 inline-block">Attending: drg. Shella Annisa, Sp.KG</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 5. INVENTORY tab panel */}
        {activeTab === 'inventory' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all">
            <div className="flex flex-col">
              <h3 className="text-[20px] sm:text-[22px] font-extrabold text-[#141928] mb-4">
                {t.s5_title}
              </h3>
              <p className="text-[13px] sm:text-[14px] text-[#5A5F6B] leading-[1.75] mb-6">
                {t.s5_desc}
              </p>
              
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-start">
                  <div className="w-[32px] h-[32px] bg-[#EEF2FB] rounded-[8px] flex items-center justify-center text-[#1B3A7A] font-shrink-0">
                    <CheckSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-[#141928]">{t.s5_f1t}</h4>
                    <p className="text-[12px] text-[#8A8F9A] mt-0.5">{t.s5_f1d}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-[32px] h-[32px] bg-[#EEF2FB] rounded-[8px] flex items-center justify-center text-[#1B3A7A] font-shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-[#141928]">{t.s5_f2t}</h4>
                    <p className="text-[12px] text-[#8A8F9A] mt-0.5">{t.s5_f2d}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-[32px] h-[32px] bg-[#EEF2FB] rounded-[8px] flex items-center justify-center text-[#1B3A7A] font-shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-[#141928]">{t.s5_f3t}</h4>
                    <p className="text-[12px] text-[#8A8F9A] mt-0.5">{t.s5_f3d}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated UI: Inventory Monitor layout */}
            <div className="bg-white rounded-[14px] border border-[#DDE3EE] overflow-hidden shadow-lg select-none">
              <div className="bg-[#F4F6FA] border-b border-[#DDE3EE] px-4 py-3 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                <span className="text-[11px] font-extrabold text-[#141928] ml-2">Manajemen Inventaris — Stock Overview</span>
              </div>
              
              <div className="p-4">
                {/* 4 Status dashboard grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                  <div className="border-2 border-[#86EFAC] bg-emerald-50 p-2.5 rounded-[8px] text-[#15803D]">
                    <div className="text-[16px] font-black leading-tight">16</div>
                    <div className="text-[9px] font-extrabold">Stok Aman</div>
                  </div>
                  <div className="border-2 border-rose-300 bg-rose-50 p-2.5 rounded-[8px] text-[#DC2626]">
                    <div className="text-[16px] font-black leading-tight">3</div>
                    <div className="text-[9px] font-extrabold">Stok Habis</div>
                  </div>
                  <div className="border-2 border-[#FCD34D] bg-amber-50 p-2.5 rounded-[8px] text-[#B45309]">
                    <div className="text-[16px] font-black leading-tight">0</div>
                    <div className="text-[9px] font-extrabold">Hampir Habis</div>
                  </div>
                  <div className="border-2 border-purple-300 bg-purple-50 p-2.5 rounded-[8px] text-purple-700">
                    <div className="text-[16px] font-black leading-tight">0</div>
                    <div className="text-[9px] font-extrabold">Kedaluwarsa</div>
                  </div>
                </div>

                {/* Stock table view */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-[10px]">
                    <thead>
                      <tr className="border-b border-[#DDE3EE]" />
                      <tr className="text-[#8A8F9A]">
                        <th className="py-2 px-1 text-[9px] font-bold uppercase">Nama Produk</th>
                        <th className="py-2 px-1 text-[9px] font-bold uppercase">Lokasi</th>
                        <th className="py-2 px-1 text-[9px] font-bold uppercase">Min.Stok</th>
                        <th className="py-2 px-1 text-[9px] font-bold uppercase text-center">Total</th>
                        <th className="py-2 px-1 text-[9px] font-bold uppercase text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 px-1 font-bold text-[#141928]">Hydrogen Peroxide 3%</td>
                        <td className="py-2 px-1 font-medium text-slate-500">Room A</td>
                        <td className="py-2 px-1 font-bold text-slate-500">10 botol</td>
                        <td className="py-2 px-1 font-black text-center text-[#141928]">70</td>
                        <td className="py-2 px-1 text-right">
                          <span className="bg-[#DCFCE7] text-[#15803D] text-[9px] font-bold px-2 py-0.5 rounded-full">Aman</span>
                        </td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 px-1 font-bold text-[#141928]">Aspirin 500mg tablets</td>
                        <td className="py-2 px-1 font-medium text-slate-500">Apotek</td>
                        <td className="py-2 px-1 font-bold text-slate-500">12 box</td>
                        <td className="py-2 px-1 font-black text-center text-[#141928]">70</td>
                        <td className="py-2 px-1 text-right">
                          <span className="bg-[#DCFCE7] text-[#15803D] text-[9px] font-bold px-2 py-0.5 rounded-full">Aman</span>
                        </td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 px-1 font-bold text-[#141928]">Alginate Impression Kit</td>
                        <td className="py-2 px-1 font-medium text-slate-500">Room B</td>
                        <td className="py-2 px-1 font-bold text-slate-500">12 box</td>
                        <td className="py-2 px-1 font-black text-center text-[#B45309]">14</td>
                        <td className="py-2 px-1 text-right">
                          <span className="bg-[#FFFBEB] text-[#B45309] text-[9px] font-bold px-2 py-0.5 rounded-full">Mulai Tipis</span>
                        </td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 px-1 font-bold text-[#141928]">Dental Composite Syringe</td>
                        <td className="py-2 px-1 font-medium text-slate-500">Room C</td>
                        <td className="py-2 px-1 font-bold text-slate-500">10 box</td>
                        <td className="py-2 px-1 font-black text-center text-rose-600">0</td>
                        <td className="py-2 px-1 text-right">
                          <span className="bg-[#FEF2F2] text-[#DC2626] text-[9px] font-bold px-2 py-0.5 rounded-full">Habis</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-[#E6F5F2] border border-[#b2dfd8] rounded-[8px] p-2.5 text-[10px] font-semibold text-[#3D8B7A] text-center mt-3.5">
                  {t.inv_footer}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 6. ANALYTICS tab panel */}
        {activeTab === 'analytics' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all">
            <div className="flex flex-col">
              <h3 className="text-[20px] sm:text-[22px] font-extrabold text-[#141928] mb-4">
                {t.s6_title}
              </h3>
              <p className="text-[13px] sm:text-[14px] text-[#5A5F6B] leading-[1.75] mb-6">
                {t.s6_desc}
              </p>
              
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-start">
                  <div className="w-[32px] h-[32px] bg-[#EEF2FB] rounded-[8px] flex items-center justify-center text-[#1B3A7A] font-shrink-0">
                    <CheckSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-[#141928]">{t.s6_f1t}</h4>
                    <p className="text-[12px] text-[#8A8F9A] mt-0.5">{t.s6_f1d}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-[32px] h-[32px] bg-[#EEF2FB] rounded-[8px] flex items-center justify-center text-[#1B3A7A] font-shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-[#141928]">{t.s6_f2t}</h4>
                    <p className="text-[12px] text-[#8A8F9A] mt-0.5">{t.s6_f2d}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-[32px] h-[32px] bg-[#EEF2FB] rounded-[8px] flex items-center justify-center text-[#1B3A7A] font-shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-[#141928]">{t.s6_f3t}</h4>
                    <p className="text-[12px] text-[#8A8F9A] mt-0.5">{t.s6_f3d}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated UI: Dashboard performance reports */}
            <div className="bg-white rounded-[14px] border border-[#DDE3EE] overflow-hidden shadow-lg select-none">
              <div className="bg-[#F4F6FA] border-b border-[#DDE3EE] px-4 py-3 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                <span className="text-[11px] font-extrabold text-[#141928] ml-2">KHAYR Dashboard — Performance Report</span>
              </div>
              
              <div className="p-4">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-[#F4F6FA] p-3 rounded-[8px] hover:bg-slate-100 transition-colors">
                    <div className="text-[8px] font-bold text-[#8A8F9A] uppercase tracking-wider">{t.an_rev}</div>
                    <div className="text-[18px] font-black text-[#141928] mt-0.5 tracking-tight">Rp48Jt</div>
                    <div className="text-[9px] text-[#3D8B7A] font-bold mt-1">{t.an_rev_sub}</div>
                  </div>
                  <div className="bg-[#F4F6FA] p-3 rounded-[8px] hover:bg-slate-100 transition-colors">
                    <div className="text-[8px] font-bold text-[#8A8F9A] uppercase tracking-wider">{t.an_pat}</div>
                    <div className="text-[18px] font-black text-[#141928] mt-0.5 tracking-tight">40,712</div>
                    <div className="text-[9px] text-[#3D8B7A] font-bold mt-1">{t.an_pat_sub}</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6 bg-slate-50 p-4.5 rounded-[10px] mb-4">
                  {/* Styled SVG Donut chart precisely recreated */}
                  <div className="relative shrink-0 flex items-center justify-center">
                    <svg width="68" height="68" viewBox="0 0 64 64" className="transform -rotate-90">
                      <circle cx="32" cy="32" r="24" fill="none" stroke="#1B3A7A" strokeWidth="13" strokeDasharray="113 150" strokeDashoffset="0" />
                      <circle cx="32" cy="32" r="24" fill="none" stroke="#6BAED6" strokeWidth="13" strokeDasharray="37 150" strokeDashoffset="-113" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-[#1B3A7A] text-[10px] font-extrabold leading-none">
                      76%
                    </div>
                  </div>
                  
                  {/* Donut chart descriptive legend row */}
                  <div className="flex flex-col gap-1.5 flex-1 w-full text-[10px] font-bold text-[#141928]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1B3A7A]" />
                      <span>{t.leg_treat}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#6BAED6]" />
                      <span>{t.leg_med}</span>
                    </div>

                    <div className="mt-3 w-full">
                      <span className="text-[8px] text-[#8A8F9A] block uppercase font-extrabold tracking-wider leading-none mb-1.5">{t.an_monthly}</span>
                      {/* Bar chart representations */}
                      <div className="flex gap-2.5 items-end justify-between h-[45px] pt-1">
                        {[
                          { m: 'Okt', h: '24px' },
                          { m: 'Nov', h: '28px' },
                          { m: 'Des', h: '25px' },
                          { m: 'Jan', h: '38px' },
                          { m: 'Feb', h: '44px' },
                          { m: 'Mar', h: '34px' },
                        ].map((bar, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1">
                            <div style={{ height: bar.h }} className={`w-full rounded-t-[3px] ${i === 4 ? 'bg-[#2B5BAD]' : i === 5 ? 'bg-[#6BAED6]' : 'bg-[#1B3A7A]'}`} />
                            <span className="text-[7px] text-[#8A8F9A] font-extrabold leading-none">{bar.m}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-[#EEF2FB] p-2.5 rounded-[8px]">
                    <div className="text-[14px] font-black text-[#1B3A7A]">38%</div>
                    <div className="text-[9px] text-[#8A8F9A] font-bold mt-1 uppercase tracking-wider leading-none">
                      {t.an_new}
                    </div>
                  </div>
                  <div className="bg-[#E6F5F2] p-2.5 rounded-[8px]">
                    <div className="text-[14px] font-black text-[#2D7A68]">62%</div>
                    <div className="text-[9px] text-[#8A8F9A] font-bold mt-1 uppercase tracking-wider leading-none">
                      {t.an_ret}
                    </div>
                  </div>
                  <div className="bg-[#F4F6FA] p-2.5 rounded-[8px]">
                    <div className="text-[14px] font-black text-[#141928]">+1,204</div>
                    <div className="text-[9px] text-[#8A8F9A] font-bold mt-1 uppercase tracking-wider leading-none">
                      {t.an_new_mo}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
