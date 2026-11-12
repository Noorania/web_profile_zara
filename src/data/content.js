import { FiLayers, FiPenTool, FiCode, FiTrendingUp, FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi'
import dompetku from '../assets/dompetku.jpeg'

// Ganti seluruh isi file ini dengan data Anda.
export const profile = {
  name: 'Az-zahra Nurfadila',
  role: 'Desainer Brand & Web',
  email: 'nurfadilaazzahra315@gmail.com',
  phone: '0895 3756 79715',
  location: 'Indonesia',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Layanan', href: '#services' },
  { label: 'Portofolio', href: '#portfolio' },
  { label: 'Kontak', href: '#contact' },
]

export const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/azhra_noorfa?utm_source=ig_web_button_share_sheet&srtk=ZDNlZDc0MzIxNw==', Icon: FiInstagram },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: FiLinkedin },
  { label: 'GitHub', href: 'https://github.com/Noorania', Icon: FiGithub },
]

export const facts = [
  { value: '20', label: 'proyek selesai' },
]

export const vision = 'Membantu bisnis kecil dan menengah tampil dengan identitas yang jelas, konsisten, dan dipercaya.'
export const missions = [
  'Memahami tujuan klien sebelum membuka aplikasi desain.',
  'Menyerahkan hasil yang rapi, terdokumentasi, dan siap dipakai tim.',
  'Menjaga komunikasi terbuka dari brief sampai peluncuran.',
]

export const services = [
  { title: 'Identitas Brand', text: 'Logo, palet warna, tipografi, dan panduan penggunaan yang konsisten.', Icon: FiLayers },
  { title: 'Desain UI/UX', text: 'Alur dan tampilan aplikasi yang mudah dipahami pengguna baru.', Icon: FiPenTool },
  { title: 'Website', text: 'Website cepat dan responsif yang dibangun dengan React.', Icon: FiCode }, 
]

export const projects = [
  { title: 'Dompetku', category: 'Mobile App', text: 'Sistem Dompet Digital seperti Dana, Ovo, Gopay.', tone: 'a', image: dompetku, github: 'https://github.com/Noorania/Dompetku_Azzahra_Nurfadila' },
  { title: 'JrB Jewelry', category: 'Mobile App', text: 'Toko online dengan katalog dan alur pemesanan sederhana.', tone: 'b' },
  { title: 'Fintrack', category: 'Desain UI/UX', text: 'Aplikasi pencatat keuangan pribadi untuk pemula.', tone: 'c' },
  { title: 'Studio Lentera', category: 'Identitas Brand', text: 'Identitas visual studio yoga dan meditasi.', tone: 'b' },
  { title: 'Kelas Daring', category: 'Website', text: 'Landing page pendaftaran kelas dengan konversi tinggi.', tone: 'c' },
  { title: 'Pasar Tani', category: 'Desain UI/UX', text: 'Aplikasi pemesanan hasil tani langsung dari petani.', tone: 'a' },
]

