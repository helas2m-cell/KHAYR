/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { 
  Users, 
  Search, 
  RefreshCw, 
  Trash2, 
  Download, 
  Smartphone, 
  Mail, 
  Building2, 
  Globe, 
  Calendar,
  Layers,
  Database,
  Filter,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

interface Submission {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  clinicSize: string;
  country: string;
  createdAt: string;
}

interface BackendDashboardProps {
  lang: Language;
  onClose?: () => void;
  userRole?: string;
  userName?: string;
}

export function BackendDashboard({ lang, onClose, userRole = 'admin', userName = 'Administrator' }: BackendDashboardProps) {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sizeFilter, setSizeFilter] = useState('all');
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [actionSuccess, setActionSuccess] = useState('');

  // Translations
  const isIndo = lang === 'id';
  
  const t = {
    title: isIndo ? "Sistem Database & Dasbor Admin" : "System Database & Admin Dashboard",
    subtitle: isIndo 
      ? `Masuk sebagai ${userName} (${userRole === 'owner' ? 'Pemilik Klinik' : userRole === 'doctor' ? 'Dokter/Perawat' : 'Staf Admin'})` 
      : `Logged in as ${userName} (${userRole === 'owner' ? 'Clinic Owner' : userRole === 'doctor' ? 'Doctor/Nurse' : 'Admin Staff'})`,
    searchPlaceholder: isIndo ? "Cari nama, email, telepon, atau negara..." : "Search name, email, phone, or country...",
    loadingText: isIndo ? "Sinkronisasi dengan database KHAYR..." : "Syncing with KHAYR database...",
    emptyState: isIndo ? "Belum ada submissions masuk." : "No submissions received yet.",
    emptyTip: isIndo 
      ? "Silakan isi form 'Minta Demo' di bagian bawah landing page untuk tes masuknya data secara real-time!" 
      : "Please fill the 'Request a Demo' form at the bottom of the landing page to test data entry in real-time!",
    colName: isIndo ? "Nama Lengkap" : "Full Name",
    colEmail: isIndo ? "Email Kerja" : "Work Email",
    colPhone: isIndo ? "No. Telepon" : "Phone Number",
    colSize: isIndo ? "Skala Klinik" : "Clinic Size",
    colCountry: isIndo ? "Negara" : "Country",
    colDate: isIndo ? "Tanggal Masuk" : "Submitted Date",
    colAction: isIndo ? "Aksi" : "Actions",
    refresh: isIndo ? "Segarkan Data" : "Refresh Data",
    export: isIndo ? "Ekspor JSON" : "Export JSON",
    statTotal: isIndo ? "Total Demo Diminta" : "Total Demo Requested",
    statAvgSize: isIndo ? "Kategori Terbanyak" : "Top Clinic Size",
    deleteConfirm: isIndo ? "Hapus data ini dari sistem?" : "Remove this record from the system?",
    deleteSuccess: isIndo ? "Data submissions berhasil dihapus." : "Submission deleted successfully.",
    successMsg: isIndo ? "Aksi dilakukan dengan sukses!" : "Action executed successfully!",
    allSizes: isIndo ? "Semua Ukuran Klinik" : "All Clinic Sizes"
  };

  const fetchSubmissions = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/demo-requests');
      if (!response.ok) {
        throw new Error(isIndo ? 'Gagal mengambil data dari server.' : 'Failed to fetch data from server.');
      }
      const data = await response.json();
      setSubmissions(data.submissions || []);
    } catch (err: any) {
      setError(err.message || 'Error loading data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const handleDelete = async (id: string) => {
    if (!window.confirm(t.deleteConfirm)) return;
    setDeletingId(id);
    try {
      const response = await fetch(`/api/demo-requests/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(isIndo ? 'Gagal menghapus entri.' : 'Failed to delete entry.');
      }
      
      // Update local state and show message
      setSubmissions(prev => prev.filter(item => item.id !== id));
      setActionSuccess(t.deleteSuccess);
      setTimeout(() => setActionSuccess(''), 4000);
    } catch (err: any) {
      alert(err.message || 'Error system');
    } finally {
      setDeletingId(null);
    }
  };

  const handleExportJSON = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(submissions, null, 2)
    )}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', jsonString);
    downloadAnchor.setAttribute('download', `khayr_demo_submissions_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Stats Calculations
  const totalSubmissions = submissions.length;
  
  // Calculate top clinic size category
  const sizeCounts: Record<string, number> = {};
  submissions.forEach(sub => {
    sizeCounts[sub.clinicSize] = (sizeCounts[sub.clinicSize] || 0) + 1;
  });
  let topSize = '-';
  let maxCount = 0;
  Object.entries(sizeCounts).forEach(([size, count]) => {
    if (count > maxCount) {
      maxCount = count;
      topSize = size;
    }
  });

  // Filter submissions
  const filteredSubmissions = submissions.filter(sub => {
    const matchQuery = 
      `${sub.firstName} ${sub.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.phone.includes(searchQuery) ||
      sub.country.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchSize = sizeFilter === 'all' || sub.clinicSize === sizeFilter;
    
    return matchQuery && matchSize;
  });

  // Helper to format date beautifully
  const formatDate = (isoStr: string) => {
    try {
      const date = new Date(isoStr);
      return date.toLocaleDateString(isIndo ? 'id-ID' : 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return isoStr;
    }
  };

  // Pick clinic sizes list dynamically for filters
  const uniqueClinicSizes = Array.from(new Set(submissions.map(s => s.clinicSize)));

  return (
    <div className="bg-slate-50 rounded-[16px] border border-[#DDE3EE] overflow-hidden shadow-sm p-6 lg:p-8 animate-fade-in my-8 scroll-mt-24" id="backend-dashboard">
      {/* Dashboard Brand Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-200 pb-6 mb-6">
        <div>
          <div className="flex items-center gap-2 text-[#1C70C8] font-bold text-xs uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <Database size={14} />
            ONLINE PRODUCTION DATABASE
          </div>
          <h2 className="text-2xl font-black text-[#141928] tracking-tight mt-1 flex items-center gap-2">
            {t.title}
          </h2>
          <p className="text-sm font-medium text-[#5A5F6B] mt-0.5">
            {t.subtitle}
          </p>
        </div>

        <div className="flex gap-2 w-full md:w-auto">
          <button 
            onClick={fetchSubmissions}
            className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 py-2 border border-[#DDE3EE] hover:bg-slate-100 bg-white rounded-[8px] text-[13px] font-bold text-[#5A5F6B] transition-all active:scale-95 cursor-pointer"
          >
            <RefreshCw size={15} className={`${loading ? 'animate-spin text-[#1B3A7A]' : ''}`} />
            {t.refresh}
          </button>
          
          <button 
            onClick={handleExportJSON}
            disabled={totalSubmissions === 0}
            className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 py-2 bg-[#1B3A7A] hover:bg-[#112660] text-white rounded-[8px] text-[13px] font-bold transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <Download size={15} />
            {t.export}
          </button>
        </div>
      </div>

      {actionSuccess && (
        <div className="bg-green-50 text-green-700 p-3.5 rounded-[8px] border border-green-200 mb-6 flex items-center gap-3 animate-fade-in text-sm font-semibold">
          <CheckCircle size={18} className="text-green-600 flex-shrink-0" />
          {actionSuccess}
        </div>
      )}

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Metric 1 */}
        <div className="bg-white border border-[#DDE3EE] rounded-[12px] p-4 flex items-center gap-4 shadow-xs">
          <div className="w-12 h-12 rounded-[10px] bg-blue-50 text-blue-600 flex items-center justify-center">
            <Users size={24} />
          </div>
          <div>
            <span className="block text-xs font-bold text-[#8A8F9A] uppercase tracking-wide">
              {t.statTotal}
            </span>
            <span className="text-2xl font-black text-[#141928]">
              {loading ? (
                <span className="inline-block w-8 h-6 bg-slate-100 rounded animate-pulse" />
              ) : (
                totalSubmissions
              )}
            </span>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-white border border-[#DDE3EE] rounded-[12px] p-4 flex items-center gap-4 shadow-xs">
          <div className="w-12 h-12 rounded-[10px] bg-teal-50 text-teal-600 flex items-center justify-center">
            <Building2 size={24} />
          </div>
          <div className="overflow-hidden min-w-0">
            <span className="block text-xs font-bold text-[#8A8F9A] uppercase tracking-wide truncate">
              {t.statAvgSize}
            </span>
            <span className="text-base font-extrabold text-[#141928] truncate block" title={topSize}>
              {loading ? (
                <span className="inline-block w-24 h-6 bg-slate-100 rounded animate-pulse" />
              ) : (
                topSize === '-' ? (isIndo ? 'Belum Ada' : 'None') : topSize
              )}
            </span>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-white border border-[#DDE3EE] rounded-[12px] p-4 flex items-center gap-4 shadow-xs">
          <div className="w-12 h-12 rounded-[10px] bg-amber-50 text-amber-600 flex items-center justify-center">
            <Globe size={24} />
          </div>
          <div>
            <span className="block text-xs font-bold text-[#8A8F9A] uppercase tracking-wide">
              {isIndo ? "Negara Terdaftar" : "Registered Countries"}
            </span>
            <span className="text-2xl font-black text-[#141928]">
              {loading ? (
                <span className="inline-block w-8 h-6 bg-slate-100 rounded animate-pulse" />
              ) : (
                new Set(submissions.map(s => s.country)).size
              )}
            </span>
          </div>
        </div>
      </div>

      {/* Control Panel: Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4 bg-white border border-[#DDE3EE] p-3 rounded-[10px]">
        {/* Search Input */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <Search size={16} />
          </div>
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-[8px] text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A7A] focus:border-[#1B3A7A] text-slate-800"
          />
        </div>

        {/* Size Filter Dropdown */}
        <div className="relative min-w-[200px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <Filter size={14} />
          </div>
          <select
            value={sizeFilter}
            onChange={(e) => setSizeFilter(e.target.value)}
            className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-[8px] text-sm appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-[#1B3A7A] focus:border-[#1B3A7A] text-slate-700 font-medium"
          >
            <option value="all">{t.allSizes}</option>
            {uniqueClinicSizes.map((size, idx) => (
              <option key={idx} value={size}>{size}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Database Table Container */}
      <div className="bg-white border border-[#DDE3EE] rounded-[12px] overflow-hidden shadow-xs">
        {loading ? (
          /* Loading display spinner */
          <div className="py-24 text-center">
            <div className="inline-block w-8 h-8 border-[3px] border-slate-100 border-t-[#1B3A7A] rounded-full animate-spin mb-4" />
            <p className="text-sm font-semibold text-[#5A5F6B] animate-pulse">
              {t.loadingText}
            </p>
          </div>
        ) : filteredSubmissions.length === 0 ? (
          /* Empty submissions display */
          <div className="py-16 px-6 text-center">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4 text-slate-400">
              <Database size={28} />
            </div>
            <h4 className="text-base font-bold text-[#141928]">
              {t.emptyState}
            </h4>
            <p className="text-xs text-[#5A5F6B] max-w-md mx-auto mt-1 leading-relaxed">
              {t.emptyTip}
            </p>
          </div>
        ) : (
          /* Responsive Table block */
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-200">
                  <th className="px-6 py-4 text-[11px] font-black uppercase text-[#8A8F9A] tracking-wider">{t.colName}</th>
                  <th className="px-6 py-4 text-[11px] font-black uppercase text-[#8A8F9A] tracking-wider">{t.colEmail}</th>
                  <th className="px-6 py-4 text-[11px] font-black uppercase text-[#8A8F9A] tracking-wider">{t.colPhone}</th>
                  <th className="px-6 py-4 text-[11px] font-black uppercase text-[#8A8F9A] tracking-wider">{t.colSize}</th>
                  <th className="px-6 py-4 text-[11px] font-black uppercase text-[#8A8F9A] tracking-wider">{t.colCountry}</th>
                  <th className="px-6 py-4 text-[11px] font-black uppercase text-[#8A8F9A] tracking-wider">{t.colDate}</th>
                  <th className="px-6 py-4 text-[11px] font-black uppercase text-[#8A8F9A] tracking-wider text-right">{t.colAction}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm text-[#141928]">
                {filteredSubmissions.map((submission) => (
                  <tr key={submission.id} className="hover:bg-slate-50/50 transition-colors">
                    {/* Full Name */}
                    <td className="px-6 py-4.5 font-bold text-slate-900">
                      {submission.firstName} {submission.lastName}
                    </td>

                    {/* Email */}
                    <td className="px-6 py-4.5 text-[#1B3A7A] underline decoration-[#1b3a7a4c] underline-offset-4 select-all">
                      <div className="flex items-center gap-1.5 font-medium">
                        <Mail size={13} className="text-slate-400" />
                        {submission.email}
                      </div>
                    </td>

                    {/* Phone */}
                    <td className="px-6 py-4.5 whitespace-nowrap font-mono text-xs">
                      <div className="flex items-center gap-1.5 text-slate-700">
                        <Smartphone size={13} className="text-slate-400" />
                        {submission.phone}
                      </div>
                    </td>

                    {/* Clinic Size */}
                    <td className="px-6 py-4.5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[6px] text-xs font-bold bg-[#EEF2FB] text-[#1B3A7A] border border-[#d2dffd]">
                        <Layers size={11} />
                        {submission.clinicSize}
                      </span>
                    </td>

                    {/* Country */}
                    <td className="px-6 py-4.5 whitespace-nowrap">
                      <span className="text-xs font-bold text-slate-700 flex items-center gap-1">
                        <Globe size={11} className="text-slate-400" />
                        {submission.country}
                      </span>
                    </td>

                    {/* Created date */}
                    <td className="px-6 py-4.5 whitespace-nowrap text-xs text-slate-500 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={13} className="text-slate-400" />
                        {formatDate(submission.createdAt)}
                      </div>
                    </td>

                    {/* Action */}
                    <td className="px-6 py-4.5 whitespace-nowrap text-right">
                      <button
                        onClick={() => handleDelete(submission.id)}
                        disabled={deletingId === submission.id}
                        className="p-1.5 hover:bg-red-50 text-slate-400 hover:text-red-600 rounded-[6px] border border-transparent hover:border-red-100 transition-all cursor-pointer"
                        title={isIndo ? "Hapus Baris" : "Delete Record"}
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Helper documentation for testing submissions */}
      <div className="mt-6 bg-slate-100 border border-slate-200 rounded-[10px] p-4 flex gap-3 text-xs leading-relaxed text-[#5A5F6B]">
        <AlertTriangle size={18} className="text-[#1C70C8] flex-shrink-0 mt-0.5" />
        <div>
          <strong className="text-slate-900 block mb-1">
            {isIndo ? "💡 Cara Menguji & Sinkronisasi Real-Time:" : "💡 How to Test & Sync in Real-Time:"}
          </strong>
          {isIndo 
            ? "Database ini terhubung penuh secara full-stack. Isilah form 'Minta Demo' di bagian bawah halaman ini. Begitu diklik 'Kirim data', formulir akan menyimpannya ke database file server secara permanen. Klik 'Segarkan Data' di kanan atas untuk langsung melihat input baru Anda masuk ke tabel ini!"
            : "This active database is fully integrated full-stack. When you submit any data in the 'Request a Demo' form at the bottom, it'll save inside our Node storage permanently. Click 'Refresh Data' at top right, and it will immediately pull your fresh input into this back office table!"
          }
        </div>
      </div>
    </div>
  );
}
