<template>
    <header class="container mx-auto px-4 xl:px-8 py-8 lg:py-16 mt-[104px]">
        <!-- membuat grid untuk 2 kolom -->
        <div class="grid grid-cols-4 lg:grid-cols-8 xl:grid-cols-12 gap-8 justify-center lg:justify-between items-center">
            <!-- kolom 1 order 2 -->
            <div class="col-span-4 xl:col-span-7 order-1 lg:order-2">
                <img src="/img/image-header.png" alt="" class="w-full object-contain" />
            </div>

            <!-- kolom 2 order 1 -->
            <div class="col-span-4 xl:col-span-5 space-y-8 order-2 lg:order-1 text-center lg:text-left">
                <!-- judul -->
                <div class="space-y-4 xl:space-y-8">
                    <p class="text-body text-rose-700">LULUSAN SMK MUHAMMADIYAH 2 KUNINGAN</p>
                    <div class="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900">
                        <h1>Siap Menjadi</h1>
                        <!-- Gunakan komponen Typewriter -->
                        <h1 class="text-rose-800"><VueWriter :array="['IT Support', 'Network Admin', 'System Admin', 'Cybersecurity Analyst', 'Cloud Engineer']" :typeSpeed="100" :eraseSpeed="50" /></h1>
                    </div>
                </div>
                <!-- deskripsi -->
                <p class="text-body text-slate-600">Bergabunglah bersama SMK Muhammadiyah 2 Kuningan dan MikroTik
                    Academy untuk
                    mencetak lulusan unggul, kompeten, dan siap bersaing di dunia jaringan digital.</p>
                <!-- tombol -->
                <div class="flex flex-col md:flex-row md:justify-center lg:justify-start gap-4">
                    <a href="https://smkmuh2-kuningan.sch.id" target="_blank" rel="noopener noreferrer"
                        class="group flex justify-center items-center gap-2 px-6 py-3 bg-teal-700 text-white rounded-full font-bold transition-all duration-300 ease-in-out hover:bg-teal-800 hover:scale-105">
                        <span class="transition-transform duration-300 ease-in-out group-hover:translate-x-1">Daftar
                            Sekarang</span>
                        <svg class="w-6 h-6 transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                            viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 12H5m14 0-4 4m4-4-4-4" />
                        </svg>
                    </a>
                    <a href="#layanan"
                        class="flex justify-center items-center gap-2 px-6 py-3 bg-white text-teal-700 rounded-full shadow font-bold transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
                        Mikrotik Academy
                        <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 19V5m0 14-4-4m4 4 4-4" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { ref } from 'vue'; // onMounted dan onUnmounted tidak perlu di Header.vue
import {VueWriter} from 'vue-writer'

export default {
    name: 'Header',
    components: {
        VueWriter
    },
    setup() {
        // Daftar teks prospek kerja
        const jobProspects = ref([
            "IT Support",
            "Network Admin",
            "System Admin",
            "Cybersecurity Analyst",
            "Cloud Engineer"
        ]);

        return {
            jobProspects,
        };
    },
};
</script>