# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

1. template ui (tailwindcss) : https://flowbite-react.com/docs/components/rating
2. template ui : https://mui.com/material-ui/react-button/
3. template ui (tailwindcss) : https://headlessui.com/
4. template ui (tailwindcss) : 
5. template ui (tailwindcss) : https://daisyui.com/
6. template ui (tailwindcss) :
7. template ui (tailwindcss)



✅ 1. Dashboard

Fungsi: Menampilkan ringkasan data terkini.

Fitur:

Total Barang

Jumlah Stok

Barang Masuk (hari ini/bulan ini)

Barang Keluar (hari ini/bulan ini)

Stok Menipis

Barang Kadaluarsa

Grafik: stok masuk vs keluar (opsional)

📦 2. Manajemen Barang

Fungsi: Mengelola daftar barang.

a. Daftar Barang

Tabel barang lengkap: nama, kode, stok, satuan, kategori, lokasi, tanggal kedaluwarsa.

Aksi: Edit, Hapus, Detail

Pencarian & filter (berdasarkan kategori, stok, expired, dsb.)

b. Tambah Barang

Form input: nama, kode, kategori, stok awal, satuan, supplier, lokasi, tanggal kadaluarsa.

📥 3. Barang Masuk

Fungsi: Mencatat dan melihat barang yang baru masuk.

Fitur:

Tambah barang masuk (form + pilih barang dari list)

Riwayat barang masuk

Filter berdasarkan tanggal, supplier, barang

📤 4. Barang Keluar

Fungsi: Mencatat dan melihat barang yang dikeluarkan (misalnya untuk produksi, penjualan, dsb.)

Fitur:

Tambah barang keluar

Riwayat barang keluar

Filter berdasarkan tanggal, tujuan, barang

📈 5. Laporan

Fungsi: Menyediakan data rekap untuk manajemen.

a. Laporan Stok

List seluruh barang & jumlah stok terkini

Bisa di-export ke Excel/PDF

b. Laporan Barang Masuk

Rekap data barang masuk dalam rentang waktu tertentu

c. Laporan Barang Keluar

Rekap data barang keluar dalam rentang waktu tertentu

⚙️ 6. Setting

Fungsi: Konfigurasi sistem.

Fitur:

Kelola user/admin

Pengaturan satuan/kategori barang

Backup & restore data

Ganti password