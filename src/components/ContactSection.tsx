/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TranslationSet } from '../types';
import { Sparkles, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  t: TranslationSet;
  preselectedClinicSize: string;
}

export function ContactSection({ t, preselectedClinicSize }: ContactSectionProps) {
  // Form states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [clinicSize, setClinicSize] = useState('1–2 Dokter Gigi');
  const [country, setCountry] = useState('Indonesia');

  // Sync pricing card preselection
  useEffect(() => {
    if (preselectedClinicSize) {
      if (preselectedClinicSize === 'opt_s1') {
        setClinicSize(t.opt_s1);
      } else if (preselectedClinicSize === 'opt_s2') {
        setClinicSize(t.opt_s2);
      } else if (preselectedClinicSize === 'opt_s3') {
        setClinicSize(t.opt_s3);
      } else if (preselectedClinicSize === 'opt_s4') {
        setClinicSize(t.opt_s4);
      }
    }
  }, [preselectedClinicSize, t]);

  // Validation / submission states
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!firstName.trim()) {
      setErrorMessage(t.form_fn + ' is required.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please enter a valid work email.');
      return;
    }
    if (!phone.trim()) {
      setErrorMessage(t.form_phone + ' is required.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          clinicSize,
          country,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Terjadi kesalahan sistem. Silakan coba lagi nanti.');
      }

      setIsSuccess(true);
    } catch (err: any) {
      setErrorMessage(err.message || 'Koneksi ke server gagal. Pastikan jaringan Anda stabil.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#0F2150] to-[#1B3A7A] text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Intro headers */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-[38px] font-black text-white leading-tight tracking-tight mb-4">
            {t.cta_title}
          </h2>
          <p className="text-[15px] sm:text-[16px] text-white/70 leading-[1.7] font-medium">
            {t.cta_sub}
          </p>
        </div>

        {/* Lead Form Card Container */}
        <div className="max-w-[500px] mx-auto bg-white rounded-[18px] p-8 text-[#141928] shadow-[0_24px_72px_rgba(0,0,0,0.25)] relative overflow-hidden transition-all duration-300">
          
          {/* Confetti ambient blur in corner */}
          <div className="absolute top-0 right-0 w-28 h-28 bg-[#4E9E8F]/8 blur-2xl pointer-events-none" />

          {isSuccess ? (
            /* Success confirmation card segment */
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[#E6F5F2] text-[#3D8B7A] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-[20px] font-extrabold text-[#141928] mb-2">
                Demo Berhasil Dipesan!
              </h3>
              <p className="text-[12px] text-[#8A8F9A] max-w-[340px] mx-auto leading-[1.7] mb-8 font-medium">
                Terima kasih, <span className="font-extrabold text-[#141928]">{firstName}</span>. Permintaan Anda untuk klinik berukuran <span className="font-extrabold text-[#1B3A7A]">{clinicSize}</span> sedang kami proses. Perwakilan KHAYR akan menghubungi Anda dalam 1 jam kerja melalui WhatsApp / Email.
              </p>
              
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-[#1B3A7A] hover:bg-[#112660] text-white text-[12px] font-extrabold rounded-[8px] transition-all cursor-pointer shadow-md inline-flex items-center gap-2"
              >
                <Sparkles size={14} />
                Pesan Demo Baru
              </button>
            </div>
          ) : (
            /* Active subscription Form */
            <form onSubmit={handleSubmit} className="flex flex-col">
              <h3 className="text-[18px] font-extrabold text-[#141928] mb-1">
                {t.form_title}
              </h3>
              <p className="text-[11.5px] text-[#8A8F9A] mb-6 font-medium">
                {t.form_sub}
              </p>

              {/* Inline error indicator if validation fails */}
              {errorMessage && (
                <div className="bg-rose-50 border border-rose-200 text-rose-700 text-[11px] font-extrabold p-3 rounded-[8px] mb-4.5">
                  ⚠ {errorMessage}
                </div>
              )}

              {/* Grid 1: Name fields */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-[#5A5F6B] uppercase tracking-[0.5px]">
                    {t.form_fn}
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Budi"
                    className="px-3.5 py-2.5 border-1.5 border-[#DDE3EE] rounded-[8px] text-[13px] text-[#141928] outline-none focus:border-[#1B3A7A] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-[#5A5F6B] uppercase tracking-[0.5px]">
                    {t.form_ln}
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Santoso"
                    className="px-3.5 py-2.5 border-1.5 border-[#DDE3EE] rounded-[8px] text-[13px] text-[#141928] outline-none focus:border-[#1B3A7A] transition-colors"
                  />
                </div>
              </div>

              {/* Email field */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-[#5A5F6B] uppercase tracking-[0.5px]">
                    {t.form_email}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="anda@namaKlinik.com"
                    className="px-3.5 py-2.5 border-1.5 border-[#DDE3EE] rounded-[8px] text-[13px] text-[#141928] outline-none focus:border-[#1B3A7A] transition-colors"
                  />
                </div>

                {/* Phone field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-[#5A5F6B] uppercase tracking-[0.5px]">
                    {t.form_phone}
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+62 8XX XXXX XXXX"
                    className="px-3.5 py-2.5 border-1.5 border-[#DDE3EE] rounded-[8px] text-[13px] text-[#141928] outline-none focus:border-[#1B3A7A] transition-colors"
                  />
                </div>
              </div>

              {/* Grid 2: Select specs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-[#5A5F6B] uppercase tracking-[0.5px]">
                    {t.form_size}
                  </label>
                  <select
                    value={clinicSize}
                    onChange={(e) => setClinicSize(e.target.value)}
                    className="px-3.5 py-2.5 border-1.5 border-[#DDE3EE] bg-white rounded-[8px] text-[13px] text-[#141928] outline-none focus:border-[#1B3A7A] transition-colors"
                  >
                    <option>{t.opt_s1}</option>
                    <option>{t.opt_s2}</option>
                    <option>{t.opt_s3}</option>
                    <option>{t.opt_s4}</option>
                  </select>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-[#5A5F6B] uppercase tracking-[0.5px]">
                    {t.form_country}
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="px-3.5 py-2.5 border-1.5 border-[#DDE3EE] bg-white rounded-[8px] text-[13px] text-[#141928] outline-none focus:border-[#1B3A7A] transition-colors"
                  >
                  <option>Aceh</option>
                  <option>Sumatera Utara</option>
                  <option>Sumatera Barat</option>
                  <option>Riau</option>
                  <option>Jambi</option>
                  <option>Sumatera Selatan</option>
                  <option>Bengkulu</option>
                  <option>Lampung</option>
                  <option>Kepulauan Bangka Belitung</option>
                  <option>Kepulauan Riau</option>
                  <option>DKI Jakarta</option>
                  <option>Jawa Barat</option>
                  <option>Jawa Tengah</option>
                  <option>DI Yogyakarta</option>
                  <option>Jawa Timur</option>
                  <option>Banten</option>
                  <option>Bali</option>
                  <option>Nusa Tenggara Barat</option>
                  <option>Nusa Tenggara Timur</option>
                  <option>Kalimantan Barat</option>
                  <option>Kalimantan Tengah</option>
                  <option>Kalimantan Selatan</option>
                  <option>Kalimantan Timur</option>
                  <option>Kalimantan Utara</option>
                  <option>Sulawesi Utara</option>
                  <option>Sulawesi Tengah</option>
                  <option>Sulawesi Selatan</option>
                  <option>Sulawesi Tenggara</option>
                  <option>Gorontalo</option>
                  <option>Sulawesi Barat</option>
                  <option>Maluku</option>
                  <option>Maluku Utara</option>
                  <option>Papua</option>
                  <option>Papua Barat</option>
                  <option>Papua Selatan</option>
                  <option>Papua Tengah</option>
                  <option>Papua Pegunungan</option>
                  <option>Papua Barat Daya</option>
                </select>
                </div>
              </div>

              {/* Submit button bar */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#1B3A7A] hover:bg-[#112660] text-white text-[13px] font-extrabold rounded-[8px] transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0 text-center shadow-lg hover:shadow-xl disabled:opacity-50"
              >
                {isSubmitting ? 'Processing...' : t.form_btn}
              </button>

              <p className="text-[10px] text-[#8A8F9A] text-center mt-3 font-semibold">
                {t.form_note}
              </p>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
