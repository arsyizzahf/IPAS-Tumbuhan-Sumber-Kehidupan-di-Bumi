# Evaluasi IPAS Kelas V — Tumbuhan, Sumber Kehidupan di Bumi

Aplikasi web evaluasi interaktif untuk mata pelajaran **Ilmu Pengetahuan Alam dan Sosial (IPAS) Kelas V SD** (Kurikulum Merdeka), **Bab 1: Tumbuhan, Sumber Kehidupan di Bumi**.

## Materi yang Diujikan
1. **Bagian Tubuh Tumbuhan dan Fungsinya** (akar, batang, daun, bunga, buah, dan biji)
2. **Fotosintesis, Proses Paling Penting di Bumi** (bahan, peran klorofil & stomata, hasil fotosintesis, serta dampaknya bagi makhluk hidup)
3. **Perkembangbiakan Tumbuhan** (penyerbukan, bagian-bagian bunga, penyebaran biji, perkembangbiakan vegetatif alami dan buatan)

## Fitur Utama
- **Identitas Peserta & Pengaturan**: Input nama, kelas, nomor absen, opsi acak urutan soal, serta penghitung waktu 30 menit.
- **20 Soal Pilihan Ganda Bergambar**: Dilengkapi ilustrasi SVG bagian tumbuhan, skema fotosintesis, dan bagian bunga sempurna (tanpa ketergantungan gambar eksternal).
- **Navigasi & Penanda Ragu-ragu**: Memudahkan siswa memantau soal terjawab, belum terjawab, dan ragu-ragu.
- **Penilaian Otomatis & Analisis Topik**: Menampilkan skor (0–100), status ketuntasan KKTP (75), persentase capaian per topik, dan pembahasan lengkap setiap nomor.
- **Kisi-Kisi & Mode Guru**: Tabel pemetaan indikator soal, level kognitif (C1–C4), dan kunci jawaban yang siap dicetak.
- **Simpan Progres Otomatis**: Jawaban tersimpan sementara di `localStorage` browser agar tidak hilang saat halaman dimuat ulang.

## Cara Menggunakan
1. Buka langsung `index.html` di browser atau aktifkan **GitHub Pages** pada menu **Settings → Pages → Branch: `main` (`/ (root)`)**.
2. Isi identitas siswa, lalu klik **Mulai Evaluasi**.
3. Setelah selesai, klik **Selesai & Nilai** untuk melihat hasil serta pembahasan atau mencetaknya sebagai PDF.
