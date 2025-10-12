<script>
// 1. Impor komponen Navigasi
import Navigasi from './components/Navigasi.vue'; // Sesuaikan path jika struktur foldernya berbeda
import Header from './components/Header.vue';
import CardMateri from './components/CardMateri.vue'; // Impor komponen CardMateri
import GlowBackground from './components/GlowBackground.vue'; // Impor komponen GlowBackground

export default {
  name: 'App',
  // 2. Daftarkan komponen di dalam objek components
  components: {
    Navigasi, // Sama dengan Navigasi: Navigasi
    Header,
    CardMateri, // Daftarkan komponen CardMateri
    GlowBackground, // Daftarkan komponen GlowBackground
  },
}
</script>

<template>
  <div class="relative w-full overflow-hidden">


    <!-- NAVIGASI -->
    <Navigasi />

    <!-- HEADER -->
    <Header />

    <!-- LOGO MIKROTIK ACADEMY -->
    <section
      class="container mx-auto flex justify-center px-4 xl:px-8 py-8 xl:py-16 bg-[url('/img/patern.png')] bg-contain bg-repeat bg-center">
      <img src="/img/mikrotik-lg.png" alt="Mikrotik Academy Logo" class="h-16 md:h-20 lg:h-24">
    </section>

    <!-- SECTION SAMBUTAN KEPSEK -->
    <section class="mx-auto px-4 xl:px-8 py-8 xl:py-16 items-center flex flex-col gap-4 xl:gap-8 bg-slate-200">
      <!-- icon -->
      <svg class="w-[48px] h-[48px] text-teal-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
        height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M10 11V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4H5m14-6V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4h-1" />
      </svg>
      <!-- sambutan -->
      <p class="text-slate-600 w-full xl:w-[80%] text-justify text-body">
        Assalamu’alaikum Warahmatullahi Wabarakatuh. <br>
        Puji syukur marilah kita panjatkan kehadirat Allah SWT atas limpahan rahmat dan karunia-Nya, sehingga kita dapat
        terus berjuang dalam mengembangkan pendidikan kejuruan yang relevan dengan kebutuhan dunia kerja. Shalawat serta
        salam semoga senantiasa tercurah kepada junjungan kita Nabi Muhammad SAW, suri teladan sepanjang masa. <br>
        Dunia kerja di bidang jaringan komputer saat ini berkembang pesat dan membutuhkan tenaga profesional dengan
        kompetensi yang terstandar. Salah satu kompetensi yang banyak diminati adalah sertifikasi Mikrotik, yang tidak
        hanya diakui oleh industri tetapi juga menjadi tolok ukur kemampuan praktis di bidang jaringan. Melalui program
        Mikrotik Academy, SMK Muhammadiyah 2 Kuningan berkomitmen menyiapkan lulusan yang unggul, kompeten, dan siap
        bersaing di era digital. <br>
        Kami mengucapkan selamat kepada guru-guru yang telah berhasil menjadi Mikrotik Academy Trainer dan seluruh tim
        yang berperan dalam pengembangan akademi ini. Semoga keberadaan Mikrotik Academy di SMK Muhammadiyah 2 Kuningan
        menjadi langkah nyata dalam meningkatkan kualitas pendidikan, memperkuat kompetensi peserta didik, serta membawa
        sekolah ini menjadi pusat keunggulan di bidang jaringan dan telekomunikasi. <br>
        Wassalamu’alaikum Warahmatullahi Wabarakatuh.
      </p>
      <!-- garis -->
      <div class="w-[60%] h-0.5 bg-slate-300"></div>
      <!-- footer -->
      <div class="flex flex-col items-center gap-4 xl:gap-6">
        <img src="/img/kepsek.jpg" alt="Ridwan Hadisantoso, S.Pd., M.Pd."
          class="size-12 md:size-16 xl:size-20 rounded-full object-cover">
        <div class="space-y-2 text-center">
          <p class=" text-slate-900 text-body font-semibold">Ridwan Hadisantoso, S.Pd., M.Pd.</p>
          <p class="text-sm text-slate-600">Kepala SMK Muhammadiyah 2 Kuningan</p>
        </div>
      </div>
    </section>

    <!-- LAYANAN -->
    <section id="layanan" class="container mx-auto flex justify-center px-4 xl:px-8 py-8 xl:py-16">
      <!-- grid -->
      <div class="grid grid-cols-4 lg:grid-cols-12 xl:items-center gap-4 lg:gap-8">
        <!-- judul section -->
        <div class="col-span-4 lg:col-span-12 xl:col-span-3 space-y-4 w-full text-center xl:text-left">
          <p class="text-rose-800 font-semibold text-body">
            LAYANAN
          </p>
          <h1 class="text-slate-900 font-bold text-2xl xl:text-4xl">
            Solusi Belajar dan Sertifikasi Mikrotik Terlengkap
          </h1>
        </div>
        <!-- group layanan -->
        <div class="col-span-4 lg:col-span-12 xl:col-span-9 grid grid-cols-4 lg:grid-cols-12 gap-4 lg:gap-8">
          <!-- layanan 1 -->
          <div
            class="col-span-4 flex flex-col items-center py-8 px-4 xl:py-16 xl:px-8 bg-white rounded-4xl space-y-8 border border-slate-200 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <!-- icon -->
            <div class="size-12 flex justify-center items-center text-teal-800 bg-rose-100 rounded-full">
              <svg class="w-[32px] h-[32px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023" />
              </svg>
            </div>
            <!-- judul layanan -->
            <div class="space-y-4 text-center">
              <h2 class="text-2xl text-slate-900 font-bold group-hover:text-teal-800 transition">Pelatihan</h2>
              <p class="text-slate-600 text-body">Pelatihan materi mikrotik baik secara daring maupun luring.</p>
            </div>
          </div>
          <!-- layanan 1 -->
          <div
            class="col-span-4 flex flex-col items-center py-8 px-4 xl:py-16 xl:px-8 bg-white rounded-4xl space-y-8 border border-slate-200 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <!-- icon -->
            <div class="size-12 flex justify-center items-center text-teal-800 bg-rose-100 rounded-full">
              <svg class="w-[32px] h-[32px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
              </svg>
            </div>
            <!-- judul layanan -->
            <div class="space-y-4 text-center">
              <h2 class="text-2xl text-slate-900 font-bold group-hover:text-teal-800 transition">Sertifikat</h2>
              <p class="text-slate-600 text-body">Penyelenggaran sertifikasi bagi peserta didik.</p>
            </div>
          </div>
          <!-- layanan 1 -->
          <div
            class="col-span-4 flex flex-col items-center py-8 px-4 xl:py-16 xl:px-8 bg-white rounded-4xl space-y-8 border border-slate-200 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <!-- icon -->
            <div class="size-12 flex justify-center items-center text-teal-800 bg-rose-100 rounded-full">
              <svg class="w-[32px] h-[32px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <!-- judul layanan -->
            <div class="space-y-4 text-center">
              <h2 class="text-2xl text-slate-900 font-bold group-hover:text-teal-800 transition">Bantuan & Informasi
              </h2>
              <p class="text-slate-600 text-body">Bantuan dan informasi tentang mikrotik academy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MATERI -->
    <section id="materi" class="container mx-auto px-4 py-8 xl:px-8 xl:py-16 space-y-4 lg:space-y-8 relative">
      <!-- judul section -->
      <div class="space-y-4 w-full text-center">
        <p class="text-rose-800 font-semibold text-body">
          MATERI
        </p>
        <h1 class="text-slate-900 font-bold text-2xl xl:text-4xl">
          Materi Pelatihan Mikrotik Academy
        </h1>
      </div>

      <!-- group materi -->
      <div class="grid grid-cols-4 lg:grid-cols-8 xl:grid-cols-12 gap-4 lg:gap-8">
        <!-- group 1 : introduction dan wireless -->
        <div
          class="col-span-4 lg:col-span-8 xl:col-span-4 grid grid-cols-4 lg:grid-cols-8 xl:grid-cols-4 gap-4 lg:gap-8">
          <!-- materi 1 : introduction -->
          <CardMateri :judul="'Introduction'"
            :deskripsi="'Materi mencakup pengenalan MikroTik, RouterOS, dan RouterBoard, konfigurasi jaringan TCP/IP, manajemen pengguna, layanan IP, backup, serta pengaturan koneksi internet dan NTP.'"
            :customClass="'col-span-4'" :class-card="'xl:justify-between'">
            <template #icon>
              <svg class="w-[24px] h-[24px] text-rose-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </template>
          </CardMateri>
          <!-- materi 2 : wireless -->
          <CardMateri :judul="'Wireless'"
            :deskripsi="'Mempelajari konfigurasi jaringan nirkabel meliputi standar wireless, mode operasi, pengaturan keamanan, identitas radio, analisis sinyal dengan Snooper, serta manajemen Access List.'"
            :customClass="'col-span-4'" :class-card="'justify-between'" />
        </div>
        <!-- group 2 : sisa -->
        <div class="col-span-4 lg:col-span-8 grid grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-8">
          <!-- group 2 1 : DHCP Firewall -->
          <div class="col-span-4 lg:col-span-8 grid grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-8">
            <!-- materi 3 : DHCP -->
            <CardMateri :judul="'DHCP'"
              :deskripsi="'Mempelajari konfigurasi DHCP, pengelolaan DNS, serta fungsi dan tabel ARP.'"
              :customClass="'col-span-4 xl:col-span-3'" :class-card="'justify-between'" />
            <!-- materi 4 : Firewall -->
            <CardMateri :judul="'Firewall'"
              :deskripsi="'Mempelajari konsep Firewall, pembuatan rule dan chain, penggunaan NAT, address list, logging, serta pemantauan koneksi jaringan melalui Connection Tracking.'"
              :customClass="'col-span-4 xl:col-span-5'" />
          </div>
          <!-- group 2 2 : sisa -->
          <div class="col-span-4 lg:col-span-8 grid grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-8">
            <!-- group 2 2 1 : Bridge QoS -->
            <div
              class="col-span-4 lg:col-span-8 xl:col-span-5 grid grid-cols-4 lg:grid-cols-8 xl:grid-cols-5 gap-4 lg:gap-8">
              <!-- materi 5 : Bridge -->
              <CardMateri :judul="'Bridge'"
                :deskripsi="'Mempelajari konsep Bridge, penerapan Wireless Bridge, serta pengamanan jaringan melalui Bridge Firewall.'"
                :customClass="'col-span-4 xl:col-span-5'" :class-card="'justify-between'" />
              <!-- materi 6 : QoS -->
              <CardMateri :judul="'QoS'"
                :deskripsi="'Mempelajari konsep Quality of Services untuk mengatur prioritas dan kecepatan jaringan melalui Speed Limiting, Simple Queue, Torch, Guaranteed Bandwidth, Burst, serta metode pembagian trafik menggunakan Per Connection Queuing (PCQ).'"
                :customClass="'col-span-4 xl:col-span-5'" :class-card="'xl:justify-between'" />
            </div>
            <!-- group 2 2 2 : sisa -->
            <div
              class="col-span-4 lg:col-span-8 xl:col-span-3 grid grid-cols-4 lg:grid-cols-8 xl:grid-cols-3 gap-4 lg:gap-8">
              <!-- materi 7 : Tunnel -->
              <CardMateri :judul="'Tunnel'"
                :deskripsi="'Mempelajari konfigurasi koneksi tunnel menggunakan PPP, PPTP, dan SSTP untuk membangun komunikasi aman antar jaringan melalui protokol point-to-point terenkripsi.'"
                :customClass="'col-span-4 xl:col-span-3'" />
              <!-- materi 8 : Routing -->
              <CardMateri :judul="'Routing'"
                :deskripsi="'Mempelajari konsep Routing, konfigurasi Gateway, Route Flags, dan Static Routing.'"
                :customClass="'col-span-4 xl:col-span-3'" :class-card="'justify-between'" />
            </div>
          </div>
        </div>
      </div>

      <!-- ornamen glow -->
      <div
        class="absolute hidden md:block -top-24 -left-[240px] w-[480px] h-[480px] md:w-[680px] md:h-[680px] lg:w-[960px] lg:h-[960px] pointer-events-none -z-10"
        :style="{
          background: 'radial-gradient(circle at center, rgba(255, 228, 230, 1), transparent 70%)' // rose-100 -> transparent
        }"></div>

      <div
        class="absolute hidden md:block top-[520px] lg:-bottom-[120px] xl:top-[240px] -right-[340px] w-[480px] h-[480px] md:w-[680px] md:h-[680px] lg:w-[760px] lg:h-[760px] pointer-events-none -z-10"
        :style="{
          background: 'radial-gradient(circle at center, rgb(203, 251, 241, 0.7), transparent 70%)' // rose-100 -> transparent
        }"></div>
    </section>

    <!-- SECTION TRAINER -->
    <section id="trainer" class="container mx-auto px-4 py-8 xl:px-8 xl:py-16 space-y-4 lg:space-y-8">
      <!-- judul section -->
      <div class="space-y-4 w-full text-center">
        <p class="text-rose-800 font-semibold text-body">
          TRAINER
        </p>
        <h1 class="text-slate-900 font-bold text-2xl xl:text-4xl">
          Trainer Mikrotik Bersertifikasi
        </h1>
      </div>
      <!-- daftar trainer -->
      <div class="grid grid-cols-4 lg:grid-cols-8 xl:grid-cols-12 gap-4 lg:gap-8">
        <!-- trainer 1 -->
        <div class="col-span-4 xl:col-start-3">
          <div class="flex items-center">
            <img src="/img/ii.jpg" alt="Ii Nurholiq, S.Kom."
              class="w-[160px] h-[240px] rounded-tl-4xl rounded-bl-4xl object-cover">
            <div
              class="flex flex-col p-4 lg:py-8 gap-4 h-[240px] justify-between bg-white rounded-tr-4xl rounded-br-4xl">
              <div class="space-y-2">
                <p class="text-body text-slate-900 font-semibold">Ii Nurholiq, S.Kom.</p>
                <p class="text-sm text-slate-600">Guru Produktif <br>
                  <a href="https://smkmuh2-kuningan.sch.id/jurusan/TJKT" target="_blank" class="text-rose-800 underline">Teknik Jaringan Komputer dan Telekomunikasi</a>
                </p>
              </div>
              <div class="flex gap-2">
                <img src="https://placehold.co/48x68" alt=""
                  class="w-[48px] h-[68px] object-cover rounded-lg border border-slate-200">
                <img src="https://placehold.co/48x68" alt=""
                  class="w-[48px] h-[68px] object-cover rounded-lg border border-slate-200">
              </div>
            </div>
          </div>
        </div>
        <!-- trainer 1 -->
        <div class="col-span-4">
          <div class="flex items-center">
            <img src="/img/imas.jpg" alt="Ii Nurholiq, S.Kom."
              class="w-[160px] h-[240px] rounded-tl-4xl rounded-bl-4xl object-cover">
            <div
              class="flex flex-col p-4 lg:py-8 gap-4 h-[240px] justify-between bg-white rounded-tr-4xl rounded-br-4xl">
              <div class="space-y-2">
                <p class="text-body text-slate-900 font-semibold">Imas Siti Maryam, S.Kom.</p>
                <p class="text-sm text-slate-600">Guru Produktif <br>
                  <a href="https://smkmuh2-kuningan.sch.id/jurusan/TJKT" target="_blank" class="text-rose-800 underline">Teknik Jaringan Komputer dan Telekomunikasi</a>
                </p>
              </div>
              <div class="flex gap-2">
                <img src="https://placehold.co/48x68" alt=""
                  class="w-[48px] h-[68px] object-cover rounded-lg border border-slate-200">
                <img src="https://placehold.co/48x68" alt=""
                  class="w-[48px] h-[68px] object-cover rounded-lg border border-slate-200">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DONWLOAD PAGE -->
    <section class="container mx-auto px-4 py-8 xl:px-8 xl:py-16 space-y-4 lg:space-y-8">
      <div class="flex flex-col lg:flex-row items-center justify-center gap-8 pb-4">
        <div class="flex justify-center items-center p-8 rounded-4xl bg-rose-200">
          <img src="/img/pdf.png" alt="Icon PDF" class="size-16 lg:size-24">
        </div>
        <div class="space-y-4 text-center">
          <h2 class="text-slate-900 text-2xl font-bold">Brosur Mikrotik Academy</h2>
          <a href="https://smkmuh2-kuningan.sch.id    "
            class="group flex justify-center items-center gap-2 px-6 py-3 bg-teal-700 text-white rounded-full font-bold transition-all duration-300 ease-in-out hover:bg-teal-800 hover:scale-105">
            <span class="transition-transform duration-300 ease-in-out group-hover:translate-x-1">Unduh</span>
            <svg class="w-[24px] h-[24px] transition-transform duration-300 ease-in-out group-hover:translate-x-2"
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
              viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- FOOTER  -->
    <footer class="w-full px-4 lg:px-8 xl:px-32 py-8 lg:py-16 mx-auto bg-white border-t border-slate-200">
      <div class="grid grid-cols-4 lg:grid-cols-8 xl:grid-cols-12 justify-center lg:justify-between gap-6">
        <div class="col-span-4 xl:col-span-8 space-y-4">
          <div class="flex items-center space-x-3 justify-center lg:justify-start">
            <img src="/img/logo.png" alt="Logo SMK" class="w-10 h-10 object-contain">
            <span class="text-lg font-semibold text-gray-800">SMK Muhammadiyah 2 Kuningan</span>
          </div>
          <p class="text-slate-600 text-body text-center lg:text-left">NPSN 20212915</p>
          <p class="text-slate-600 text-body text-center lg:text-left">Jl. Moertasiah Soepomo No.28</p>
        </div>

        <div class="col-span-4 grid grid-cols-4 justify-between gap-4">
          <div class="col-span-2 space-y-4">
            <p class="text-body text-slate-900 font-semibold">
              Hubungi Kami:
            </p>
            <div class="space-y-2 text-slate-600 text-body">
              <p>Ii Nurholiq, S.Kom.</p>
              <p>+62 896-6066-4457</p>
              <p>iinurholiq@gmail.com</p>
            </div>
          </div>

          <div class="col-span-2 space-y-4">
            <p class="text-body text-slate-900 font-semibold">
              Ikuti Kami:
            </p>
            <div class="space-y-2 text-slate-600 text-body">
              <a href="#" class="block hover:underline">WhatsApp</a>
              <a href="#" class="block hover:underline">Instagram</a>
              <a href="#" class="block hover:underline">Tiktok</a>
              <a href="#" class="block hover:underline">Youtube</a>
            </div>
          </div>
        </div>

        <div class="col-span-4 lg:col-span-8 xl:col-span-12 border-t border-slate-200 pt-4 text-center">
          <p class="text-sm text-slate-600">&copy; 2025 SMK Muhammadiyah 2 Kuningan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>