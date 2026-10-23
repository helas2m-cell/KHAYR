/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language, TranslationSet } from '../types';
import { Menu, X, Mail, Lock, LogIn, LogOut, Check } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationSet;
  loggedInUser: { email: string; role: string; roleLabel: string; name: string } | null;
  setLoggedInUser: (user: { email: string; role: string; roleLabel: string; name: string } | null) => void;
  currentPage: 'home' | 'pricing';
  onNavigate: (page: 'home' | 'pricing', hash?: string) => void;
}

export function Navbar({ lang, setLang, t, loggedInUser, setLoggedInUser, currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Login modal and session states
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loginRole, setLoginRole] = useState<'admin' | 'doctor' | 'owner'>('admin');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState('');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = (hash: string) => {
    setMobileMenuOpen(false);
    if (hash === '#pricing') {
      onNavigate('pricing');
    } else {
      onNavigate('home', hash);
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setIsLoggingIn(true);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword,
          role: loginRole,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Terjadi kesalahan sistem.');
      }

      setLoggedInUser(result.user);
      
      // Keep modal open briefly to show the beautiful logged-in transition, then close it
      setTimeout(() => {
        setIsLoginOpen(false);
        // Clear forms
        setLoginEmail('');
        setLoginPassword('');
      }, 1500);
    } catch (err: any) {
      setLoginError(err.message || 'Koneksi ke server gagal.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#ffffffdf] border-b border-[#DDE3EE] backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo & wordmark */}
          <a href="#" className="flex items-center gap-3 active:opacity-90 transition-opacity" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>
            <img 
              src="https://lh3.googleusercontent.com/d/150WvQCwLbSMGadPl2eVEdXoK-zB7j813" 
              alt="KHAYR Logo" 
              className="h-[68px] w-auto object-contain flex-shrink-0" 
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            <button onClick={() => handleLinkClick('#platform')} className="text-[13px] text-[#5A5F6B] font-bold hover:text-[#1B3A7A] transition-colors cursor-pointer">
              {t.nav_platform}
            </button>
            <button onClick={() => handleLinkClick('#modules')} className="text-[13px] text-[#5A5F6B] font-bold hover:text-[#1B3A7A] transition-colors cursor-pointer">
              {t.nav_modules}
            </button>
            <button onClick={() => handleLinkClick('#voucher')} className="text-[13px] text-[#5A5F6B] font-bold hover:text-[#1B3A7A] transition-colors cursor-pointer">
              Voucher System
            </button>
            <button onClick={() => handleLinkClick('#pricing')} className="text-[13px] text-[#5A5F6B] font-bold hover:text-[#1B3A7A] transition-colors cursor-pointer">
              {t.nav_pricing}
            </button>
            <button onClick={() => handleLinkClick('#contact')} className="text-[13px] text-[#5A5F6B] font-bold hover:text-[#1B3A7A] transition-colors cursor-pointer">
              {t.nav_contact}
            </button>
          </div>

          {/* Desktop Action bar & language switcher */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Lang switcher */}
            <div className="flex border border-[#DDE3EE] rounded-[8px] overflow-hidden bg-white">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 text-[11px] font-extrabold cursor-pointer tracking-[0.8px] transition-all duration-200 ${
                  lang === 'en' ? 'bg-[#1B3A7A] text-white' : 'text-[#8A8F9A] hover:bg-slate-50'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('id')}
                className={`px-3 py-1.5 text-[11px] font-extrabold cursor-pointer tracking-[0.8px] transition-all duration-200 ${
                  lang === 'id' ? 'bg-[#1B3A7A] text-white' : 'text-[#8A8F9A] hover:bg-slate-50'
                }`}
              >
                ID
              </button>
            </div>

            {loggedInUser ? (
              /* User logged-in session display */
              <div className="flex items-center gap-3 bg-[#EEF2FB] pl-3.5 pr-2 py-1.5 rounded-[8px] border border-[#DDE3EE] animate-fade-in">
                <div className="w-7 h-7 bg-[#1B3A7A] rounded-full flex items-center justify-center text-white text-[12px] font-extrabold select-none">
                  {loggedInUser.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold text-[#141928] leading-tight">
                    {loggedInUser.name}
                  </span>
                  <span className="text-[9px] font-semibold text-[#5A5F6B] leading-none uppercase tracking-[0.4px]">
                    {loggedInUser.roleLabel}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="ml-2 p-1 text-slate-400 hover:text-red-500 hover:bg-white rounded transition-colors cursor-pointer"
                  title="Keluar"
                >
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
              /* Login button */
              <button
                onClick={() => setIsLoginOpen(true)}
                className="px-[16px] py-[10px] rounded-[8px] text-[13px] font-bold text-[#1B3A7A] hover:bg-[#EEF2FB] hover:text-[#112660] transition-colors cursor-pointer"
              >
                {t.nav_login}
              </button>
            )}
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Minimal Language switch for mobile */}
            <div className="flex border border-[#DDE3EE] rounded-[8px] overflow-hidden bg-white">
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 text-[10px] font-extrabold tracking-[0.8px] ${
                  lang === 'en' ? 'bg-[#1B3A7A] text-white' : 'text-[#8A8F9A]'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('id')}
                className={`px-2.5 py-1 text-[10px] font-extrabold tracking-[0.8px] ${
                  lang === 'id' ? 'bg-[#1B3A7A] text-white' : 'text-[#8A8F9A]'
                }`}
              >
                ID
              </button>
            </div>

            {/* Hamburger button */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-[#5A5F6B] hover:text-[#1B3A7A] focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer view */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#DDE3EE] transition-all duration-300">
          <div className="px-6 py-4 flex flex-col gap-4">
            <button
              onClick={() => handleLinkClick('#platform')}
              className="text-left w-full text-[14px] font-bold text-[#5A5F6B] py-2 border-b border-[#F4F6FA] hover:text-[#1B3A7A]"
            >
              {t.nav_platform}
            </button>
            <button
              onClick={() => handleLinkClick('#modules')}
              className="text-left w-full text-[14px] font-bold text-[#5A5F6B] py-2 border-b border-[#F4F6FA] hover:text-[#1B3A7A]"
            >
              {t.nav_modules}
            </button>
            <button
              onClick={() => handleLinkClick('#voucher')}
              className="text-left w-full text-[14px] font-bold text-[#5A5F6B] py-2 border-b border-[#F4F6FA] hover:text-[#1B3A7A]"
            >
              Voucher System
            </button>
            <button
              onClick={() => handleLinkClick('#pricing')}
              className="text-left w-full text-[14px] font-bold text-[#5A5F6B] py-2 border-b border-[#F4F6FA] hover:text-[#1B3A7A]"
            >
              {t.nav_pricing}
            </button>
            <button
              onClick={() => handleLinkClick('#contact')}
              className="text-left w-full text-[14px] font-bold text-[#5A5F6B] py-2 border-b border-[#F4F6FA] hover:text-[#1B3A7A]"
            >
              {t.nav_contact}
            </button>

            {loggedInUser ? (
              /* Mobile Logged-in info */
              <div className="pt-2 pb-1 border-t border-[#F4F6FA]">
                <div className="flex items-center gap-3 bg-[#EEF2FB] p-3 rounded-[8px]">
                  <div className="w-8 h-8 bg-[#1B3A7A] rounded-full flex items-center justify-center text-white text-[13px] font-bold">
                    {loggedInUser.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 flex flex-col">
                    <span className="text-[13px] font-bold text-[#141928]">
                      {loggedInUser.name}
                    </span>
                    <span className="text-[10px] font-semibold text-[#5A5F6B] uppercase tracking-[0.4px]">
                      {loggedInUser.roleLabel}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="p-1 px-3 py-1.5 border border-red-300 text-red-600 rounded-[6px] text-xs font-bold hover:bg-red-50 cursor-pointer"
                  >
                    Keluar
                  </button>
                </div>
              </div>
            ) : (
              /* Mobile Logged-out buttons */
              <div className="flex flex-col gap-3 pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsLoginOpen(true);
                  }}
                  className="w-full text-center py-[10.5px] border border-slate-300 bg-slate-50 hover:bg-slate-100 rounded-[8px] text-[13px] font-bold text-[#1B3A7A]"
                >
                  {t.nav_login}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modern Login Modal Overlay */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 backdrop-blur-[4px] p-4">
          <div className="bg-white rounded-[16px] w-full max-w-[440px] shadow-2xl border border-[#DDE3EE] p-6 relative overflow-hidden transition-all duration-300 transform scale-100">
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1C70C8] via-[#51A3D5] to-[#499989]" />

            {/* Header close & Brand logo row */}
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-2.5">
                <img 
                  src="https://lh3.googleusercontent.com/d/150WvQCwLbSMGadPl2eVEdXoK-zB7j813" 
                  alt="KHAYR Logo" 
                  className="h-[58px] w-auto object-contain flex-shrink-0" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <button
                onClick={() => setIsLoginOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {loggedInUser ? (
              /* Success confirmation panel */
              <div className="py-8 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
                  <Check size={32} className="stroke-[3]" />
                </div>
                <h3 className="text-xl font-extrabold text-[#141928] mb-1">
                  {lang === 'id' ? 'Login Berhasil!' : 'Login Successful!'}
                </h3>
                <p className="text-sm text-[#5A5F6B] mb-5">
                  {lang === 'id' 
                    ? `Selamat datang kembali, ${loggedInUser.name}.` 
                    : `Welcome back, ${loggedInUser.name}.`}
                </p>
                <p className="text-xs text-[#8A8F9A] flex items-center gap-1.5 justify-center">
                  <span className="w-2 h-2 rounded-full bg-green-600 animate-ping" />
                  {lang === 'id' ? 'Membuka dashboard klinik...' : 'Loading clinic dashboard...'}
                </p>
              </div>
            ) : (
              /* Credential input form */
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <h3 className="text-lg font-extrabold text-[#141928] leading-tight">
                    {lang === 'id' ? 'Masuk ke KHAYR OS' : 'Login to KHAYR OS'}
                  </h3>
                  <p className="text-xs text-[#5A5F6B] mt-1">
                    {lang === 'id' 
                      ? 'Gunakan kredensial kerja Anda untuk mengakses modul klinik.' 
                      : 'Use your work credentials to access the clinic system.'}
                  </p>
                </div>

                {loginError && (
                  <div className="bg-red-50 text-red-600 text-[12px] py-2 px-3 rounded-[6px] border border-red-200">
                    {loginError}
                  </div>
                )}

                {/* Role Tabs */}
                <div>
                  <label className="block text-[11px] font-bold text-[#8A8F9A] uppercase tracking-[0.5px] mb-2">
                    {lang === 'id' ? 'Pilih Peran' : 'Select Role'}
                  </label>
                  <div className="grid grid-cols-3 gap-1.5 bg-slate-50 p-1 rounded-[10px] border border-slate-200">
                    <button
                      type="button"
                      onClick={() => setLoginRole('admin')}
                      className={`py-1.5 px-0.5 text-[11px] font-bold rounded-[6px] text-center transition-all cursor-pointer ${
                        loginRole === 'admin'
                          ? 'bg-[#1B3A7A] text-white shadow-sm'
                          : 'text-[#5A5F6B] hover:text-[#1B3A7A]'
                      }`}
                    >
                      {lang === 'id' ? 'Staf Admin' : 'Admin Staff'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setLoginRole('doctor')}
                      className={`py-1.5 px-0.5 text-[11px] font-bold rounded-[6px] text-center transition-all cursor-pointer ${
                        loginRole === 'doctor'
                          ? 'bg-[#1B3A7A] text-white shadow-sm'
                          : 'text-[#5A5F6B] hover:text-[#1B3A7A]'
                      }`}
                    >
                      {lang === 'id' ? 'Dokter/Perawat' : 'Doctor/Nurse'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setLoginRole('owner')}
                      className={`py-1.5 px-0.5 text-[11px] font-bold rounded-[6px] text-center transition-all cursor-pointer ${
                        loginRole === 'owner'
                          ? 'bg-[#1B3A7A] text-white shadow-sm'
                          : 'text-[#5A5F6B] hover:text-[#1B3A7A]'
                      }`}
                    >
                      {lang === 'id' ? 'Owner' : 'Owner'}
                    </button>
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-[11px] font-bold text-[#8A8F9A] uppercase tracking-[0.5px] mb-1.5">
                    {lang === 'id' ? 'Email Kerja' : 'Work Email'}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Mail size={16} />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="nama@klinikgigi.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-[8px] text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A7A] focus:border-[#1B3A7A] text-slate-900"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="block text-[11px] font-bold text-[#8A8F9A] uppercase tracking-[0.5px]">
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => alert(lang === 'id' 
                        ? 'Hubungi Admin Sistem Anda untuk menyetel ulang password.' 
                        : 'Contact your System Administrator to reset your password.')}
                      className="text-[11px] font-bold text-[#1B3A7A] hover:underline cursor-pointer"
                    >
                      {lang === 'id' ? 'Lupa Sandi?' : 'Forgot Password?'}
                    </button>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Lock size={16} />
                    </div>
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-[8px] text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A7A] focus:border-[#1B3A7A] text-slate-900"
                    />
                  </div>
                </div>

                {/* Demo Hint */}
                <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-[8px] text-[11px] text-[#5A5F6B] leading-relaxed">
                  <strong>💡 Tip Demo:</strong> Masukkan email apa saja (contoh: <code>drg.budi@khayr.com</code>) dan password minimal 4 karakter apa saja untuk mengetes log-in.
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isLoggingIn}
                  className="w-full py-2.5 bg-[#1B3A7A] text-white rounded-[8px] font-bold text-sm tracking-[0.4px] hover:bg-[#112660] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-55 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoggingIn ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {lang === 'id' ? 'Memproses...' : 'Processing...'}
                    </>
                  ) : (
                    <>
                      <LogIn size={16} />
                      {lang === 'id' ? 'Masuk Sekarang' : 'Login Now'}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
