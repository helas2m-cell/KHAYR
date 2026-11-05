# Penyempurnaan Visual, Animasi Interaktif & Pengalaman Pengguna KHAYR

Rencana ini menghadirkan peningkatan kualitas visual kelas enterprise, animasi antarmuka berbasis fisika pegas (*spring physics*), efek kedalaman perspektif pada gambar/ilustrasi, serta grafik interaktif yang bertumbuh secara dinamis—tanpa mengubah kombinasi warna, nama merek, logo, maupun isi konten yang sudah ada.

## User Review & Critical Decisions

> [!IMPORTANT]
> **Jaminan Keutuhan Identitas & Konten (100% Tanpa Perubahan)**:
> Seluruh peningkatan hanya bekerja pada lapisan gerak (*motion*), kedalaman visual (*elevation & perspective*), dan respons interaktif. Palet warna resmi (`#1B3A7A` Navy, `#2B5BAD` Royal Blue, `#3D8B7A` / `#4E9E8F` Toska, `#F4F6FA` Surface), nama & logo **KHAYR**, logo mitra (Telkomsel, Indosat, AXIS, XL, AstraPay, SATUSEHAT, KOMDIGI & PSE), serta seluruh teks Bahasa Indonesia & Inggris tetap 100% utuh.

- **Confirmed Decision 1 (Animasi Antarmuka)**: Menerapkan *staggered scroll-reveal* saat pengguna menggulir halaman, *counter* angka otomatis berjalan pada metrik utama, transisi halus antar-tab dengan indikator geser aktif, serta efek melayang halus (*gentle floating*) pada kartu dashboard dan ilustrasi.
- **Confirmed Decision 2 (Penyempurnaan Gambar & Ilustrasi)**: Menambahkan efek perspektif 3D halus (*interactive tilt*) yang merespons posisi kursor disertai aksen kilau cahaya lembut (*shimmer sheen*) pada ilustrasi klinik gigi di bagian Tiga Pilar, kartu dashboard Hero, serta kartu pratinjau voucher.
- **Confirmed Decision 3 (Interaktivitas Modul & Simulasi)**: Menghadirkan animasi grafik batang/progres yang bertumbuh saat tampil, transisi real-time pada simulasi langkah reservasi & odontogram interaktif, serta animasi perubahan angka yang mulus pada tabel/simulasi harga.

---

## 1. Overview & Core Concept

- **What It Does**: Mengubah tampilan statis menjadi pengalaman produk SaaS kesehatan modern yang hidup dan responsif melalui koreografi gerak yang terukur, umpan balik mikro (*micro-interactions*) di bawah 200ms, dan visualisasi data yang dinamis.
- **Target Audience / Persona**: Pemilik klinik gigi, manajer operasional klinik, dan dokter gigi yang mengevaluasi keandalan, kemodernan, dan kemudahan penggunaan sistem operasi klinik **KHAYR**.
- **Key Value**: Meningkatkan kesan kredibilitas dan kemutakhiran teknologi produk di mata calon klien klinik gigi tanpa mengorbankan kecepatan muat halaman atau keterbacaan informasi medis/bisnis.

---

## 2. User Experience & Visual Design

- **Key User Flows**:
  1. **Kesan Pertama pada Hero Section**: Saat halaman dimuat, elemen teks Hero muncul secara berurutan (*staggered fade-up*), angka statistik (`40%`, `3×`, `98%`) dan metrik kartu Live Dashboard (`28`, `Rp48Jt`, `94%`) menghitung naik secara mulus, sementara kartu Live Dashboard bergerak melayang lembut dengan efek tilt 3D saat kursor diarahkan.
  2. **Eksplorasi Peran & Tiga Pilar Klinik**: Saat pengguna menggulir ke bagian Platform, Tiga Pilar, dan Ilustrasi Klinik Gigi, kartu-kartu muncul berurutan. Mengarahkan kursor ke ilustrasi isometrik klinik gigi di bawah Tiga Pilar memicu kemiringan perspektif 3D halus disertai sapuan kilau kaca (*subtle light sheen*).
  3. **Interaksi Modul Aplikasi ("Di Dalam KHAYR")**: Berpindah antar 6 tab modul (*Reservasi, Daftar Janji, Pencatatan Klinis, Riwayat Medis, Inventaris, Analitik*) menampilkan indikator kapsul aktif yang meluncur mulus (*shared layout transition*), panel konten berganti dengan efek *cross-fade*, grafik analitik & bar inventaris bertumbuh secara dinamis, dan pemilihan gigi pada Odontogram memberikan umpan balik visual instan.
  4. **Eksplorasi Voucher Promosi & Simulasi Biaya**: Pergantian antara *Contoh A (Potongan Harga)* dan *Contoh B (Layanan Tertentu)* memicu animasi flip/transisi halus pada kartu voucher, sementara 4 langkah alur kerja terhubung dengan indikator progres visual yang menyala berurutan saat masuk ke layar.

- **Visual Identity & Theme**:
  - *Aesthetic Direction*: *Clinical Precision & Modern Enterprise SaaS*—bersih, terstruktur, berwibawa, dengan sentuhan kedalaman kaca (*subtle glassmorphism*) dan bayangan berlapis lembut.
  - *Color Palette & Mood* (Tetap 100% Sesuai Eksisting):
    - Canvas & Surface: `#FFFFFF` (Pure White), `#F4F6FA` (Cool Clinical Alabaster), `#FAFBFD` (Card Surface).
    - Primary Brand: `#0F2150` hingga `#1B3A7A` (Deep Navy) & `#2B5BAD` (Royal Blue).
    - Secondary Accent: `#3D8B7A` & `#4E9E8F` (Clinical Teal), `#EEF2FB` & `#E6F5F2` (Soft Tint Surfaces).
    - Typography: `#141928` (Deep Ink) & `#5A5F6B` (Muted Slate).
  - *Typography & Hierarchy*: Mempertahankan hierarki tipografi eksisting dengan penambahan disiplin `tabular-nums` pada seluruh angka metrik, counter, dan simulasi tabel agar angka tidak bergeser saat beranimasi.
  - *Component Styling & Layout*: Memanfaatkan hanya properti kompositor GPU (`transform`, `opacity`) untuk seluruh animasi sehingga gerakan berjalan pada 60fps tanpa menggeser tata letak (*zero layout shift*).

- **Interactive Feedback & Motion**:
  - **Animated Number Counter**: Penghitung angka cerdas berbasis *intersection observer* & `requestAnimationFrame` (durasi 1,2 detik dengan kurva *ease-out cubic*).
  - **3D Perspective Tilt & Shimmer Card**: Komponen pembungkus interaktif untuk gambar ilustrasi utama dan kartu pratinjau yang menghitung sudut rotasi halus (`±3.5°`) berdasarkan posisi kursor serta menampilkan pantulan cahaya lembut.
  - **Spring Tab Indicator & Panel Cross-Fade**: Transisi tab tanpa jeda kasar dan bar grafik yang tumbuh proporsional saat tab *Inventaris* atau *Analitik* dibuka.
  - **Dukungan Aksesibilitas (`prefers-reduced-motion`)**: Menghormati pengaturan perangkat pengguna bila mode pengurangan gerak diaktifkan.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Koreografi Animasi Berbasis Kompositor GPU (`motion/react` + Custom Hooks)**
  - *Chosen Approach*: Menggunakan pustaka `motion/react` yang sudah terpasang di proyek dikombinasikan dengan komponen ringan untuk *Animated Counter* dan *3D Perspective Tilt*.
  - *Why*: Menjaga ukuran bundel aplikasi tetap ramping tanpa perlu menambah dependensi eksternal baru yang berat, sekaligus menjamin animasi 60fps yang mulus di desktop maupun perangkat mobile.
  - *Alternatives Considered*: Menambahkan pustaka animasi pihak ketiga tambahan (seperti GSAP atau Three.js)—dilewati karena berlebihan untuk kebutuhan UI SaaS profesional dan dapat memperlambat waktu muat awal.

- **Decision 2: Efek Perspektif & Kilau Halus pada Ilustrasi Eksisting**
  - *Chosen Approach*: Membungkus gambar ilustrasi klinik gigi pada bagian Tiga Pilar, gambar ekosistem mitra telco pada bagian Voucher, dan kartu mockup dengan efek *interactive 3D tilt*, bayangan dinamis, serta aksen kilau diagonal saat *hover*.
  - *Why*: Membuat aset visual yang sudah dipilih pengguna tampil jauh lebih hidup, berdimensi, dan berkelas tanpa mengubah piksel atau isi gambar asli.
  - *Alternatives Considered*: Mengganti gambar dengan aset baru—tidak dilakukan karena melanggar prinsip mempertahankan konten dan aset yang telah disetujui pengguna.

---

## 4. Technical Architecture & Data Strategy *(Technical Reference)*

- **Architecture & Component Diagram**:

```
┌───────────────────────────────────────────────────────────────────────────┐
│                        KHAYR Web Application Shell                        │
│               (Warna, Logo, Nama & Data Teks 100% Tetap)                  │
└─────────────────────────────────────┬─────────────────────────────────────┘
                                      │
        ┌─────────────────────────────┼─────────────────────────────┐
        ▼                             ▼                             ▼
┌───────────────────────┐   ┌───────────────────────┐   ┌───────────────────────┐
│  Motion & UI Primitives│   │   Landing Sections    │   │ Interactive Simulators│
│  ───────────────────  │   │  ───────────────────  │   │  ───────────────────  │
│ • AnimatedCounter     │   │ • Hero (+Float & Count│   │ • ModulesSection      │
│   (Viewport Count-Up) │   │   + 3D Dashboard Card)│   │   (Spring Tabs, Live  │
│ • TiltCard / Shimmer  │   │ • TrustBar & Security │   │    Odontogram, Animated│
│   (3D Hover & Glare)  │   │   (Staggered Reveal)  │   │    Analytics/Inventory│
│ • ScrollReveal        │   │ • Platform & Pillars  │   │    Progress Bars)     │
│   (Staggered Section  │   │   (Card Lift + 3D     │   │ • Voucher & Pricing   │
│    Entrance)          │   │    Clinic Illustration│   │   (Live Voucher Flip, │
│                       │   │    with Shimmer)      │   │    Step Flow & Calc)  │
└───────────────────────┘   └───────────────────────┘   └───────────────────────┘
```

- **Data Model & State**:
  - Seluruh data terjemahan (`translations` di `id` dan `en`) tetap menjadi sumber kebenaran tunggal tanpa perubahan teks.
  - State lokal interaktif mencakup:
    - Posisi kursor relatif `(x, y)` pada pembungkus ilustrasi/kartu untuk menghitung kemiringan `rotateX` / `rotateY` dan posisi gradien kilau.
    - Status visibilitas viewport (`isInView`) untuk memicu penghitung angka otomatis satu kali saat elemen masuk ke layar.
    - State transisi tab aktif (`activeTab` pada `ModulesSection` dan `activeTabExample` pada `VoucherSection`) yang disinkronkan dengan `AnimatePresence` untuk animasi masuk/keluar panel dan pertumbuhan grafik batang.

- **Interactive Component & State Mapping**:
  - **Hero & Statistik Utama**: Angka `40%`, `3×`, `98%`, `28`, `Rp48Jt`, dan `94%` dianimasikan dari `0` ke nilai target saat tampil; daftar antrean pasien pada kartu Hero memiliki animasi masuk bertahap dan efek sorotan saat *hover*.
  - **Tiga Pilar & Ilustrasi Klinik**: Kartu pilar muncul berurutan dari bawah ke atas; ilustrasi klinik di bagian bawah merespons gerakan kursor dengan kemiringan perspektif halus dan kilau cahaya diagonal.
  - **Pratinjau Modul ("Di Dalam KHAYR")**:
    - Tab menggunakan indikator aktif bergerak (`layoutId="activeModuleTab"`).
    - Panel *Reservasi*, *Daftar Janji*, *Pencatatan Klinis (Odontogram)*, *Riwayat Medis*, *Inventaris*, dan *Analitik* bertransisi mulus dengan `AnimatePresence mode="wait"`.
    - Grafik batang pendapatan/pasien pada tab *Analitik* serta indikator stok pada tab *Inventaris* beranimasi tumbuh dari `0%` ke nilai persentase aslinya setiap kali tab dibuka.
  - **Voucher Promosi & Halaman Harga**:
    - Kartu simulasi voucher mendukung transisi flip/fade halus saat berganti antara *Contoh A* dan *Contoh B*, dilengkapi efek melayang lembut.
    - Keempat kartu langkah cara kerja (*Langkah 1–4*) memiliki efek koneksi progresif saat digulir.
    - Kalkulator & tabel simulasi pada halaman Harga menampilkan transisi angka yang mulus saat pengguna mengubah parameter simulasi.
