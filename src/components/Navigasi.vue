<template>
    <nav class="bg-white py-8 px-0 fixed top-0 left-0 right-0 z-50">
        <div class="container mx-auto px-4">
            <!-- Baris Navigasi -->
            <div class="flex justify-between items-center">
                <!-- Kolom 1: Logo dan Nama -->
                <div class="flex items-center space-x-3">
                    <img src="/img/logo.png" alt="Logo SMK" class="w-10 h-10 object-contain">
                    <span class="text-lg font-semibold text-gray-800">SMKMuh 2 Kuningan</span>
                </div>

                <!-- Kolom 2: Tampilan Mobile -->
                <div class="md:hidden flex items-center">
                    <!-- Gunakan @click dari Vue untuk memicu fungsi toggle -->
                    <button @click="toggleMenu"
                        class="w-10 h-10 flex items-center justify-center rounded-md text-slate-700 focus:outline-none">
                        <svg class="w-6 h-6" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M18 6H6m12 4H6m12 4H6m12 4H6" />
                        </svg>

                    </button>
                </div>

                <!-- Kolom 2: Tampilan Tablet & Laptop -->
                <div class="hidden md:flex items-center space-x-16">
                    <a href="#" class="relative text-gray-700 hover:text-rose-700 font-medium group">
                        Beranda
                        <span
                            class="absolute bottom-[-4px] left-0 w-full h-0.5 bg-rose-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </a>
                    <a href="#layanan" class="relative text-gray-700 hover:text-rose-700 font-medium group">
                        Layanan
                        <span
                            class="absolute bottom-[-4px] left-0 w-full h-0.5 bg-rose-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </a>
                    <a href="#materi" class="relative text-gray-700 hover:text-rose-700 font-medium group">
                        Materi
                        <span
                            class="absolute bottom-[-4px] left-0 w-full h-0.5 bg-rose-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </a>
                    <a href="#trainer" class="relative text-gray-700 hover:text-rose-700 font-medium group">
                        Trainer
                        <span
                            class="absolute bottom-[-4px] left-0 w-full h-0.5 bg-rose-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </a>
                </div>
            </div>
        </div>

        <!-- Panel Menu Mobile -->
        <!-- Gunakan v-show dari Vue -->
        <!-- Tambahkan kelas Tailwind untuk transisi dan posisi -->
        <div v-show="isOpen" class="fixed inset-y-0 right-0 w-full bg-white z-50 md:hidden flex flex-col
            transform transition-transform duration-300 ease-in-out" :class="{
                'translate-x-0': isOpen,      // Panel muncul ke posisi awal saat isOpen true
                'translate-x-full': !isOpen   // Panel bergerak ke kanan (hilang) saat isOpen false
            }">
            <div class="px-4 py-8 flex justify-end">
                <!-- Gunakan @click dari Vue untuk menutup panel -->
                <button @click="closeMenu" class="text-gray-700">
                    <i class="fas fa-times text-2xl"></i>
                </button>
            </div>
            <div class="flex-1 flex flex-col p-4 space-y-6 items-center">
                <!-- Tambahkan @click untuk menutup menu saat item diklik -->
                <a href="#" @click.prevent="closeMenuAndNavigate('#')"
                    class="text-lg font-medium text-gray-800 hover:text-rose-700">Beranda</a>
                <a href="#layanan" @click.prevent="closeMenuAndNavigate('#layanan')"
                    class="text-lg font-medium text-gray-800 hover:text-rose-700">Layanan</a>
                <a href="#materi" @click.prevent="closeMenuAndNavigate('#materi')"
                    class="text-lg font-medium text-gray-800 hover:text-rose-700">Materi</a>
                <a href="#trainer" @click.prevent="closeMenuAndNavigate('#trainer')"
                    class="text-lg font-medium text-gray-800 hover:text-rose-700">Trainer</a>
            </div>
        </div>
    </nav>
</template>

<script>
// Impor ref dari Vue untuk membuat state reaktif
import { ref } from 'vue';

export default {
    name: 'Navigasi',
    setup() {
        // Buat state reaktif untuk isOpen
        const isOpen = ref(false);

        // Fungsi untuk toggle menu
        const toggleMenu = () => {
            isOpen.value = !isOpen.value;
        };

        // Fungsi untuk menutup menu
        const closeMenu = () => {
            isOpen.value = false;
        };

        // Fungsi untuk menutup menu dan menavigasi (opsional)
        const closeMenuAndNavigate = (url) => {
            console.log('Navigasi ke:', url);
            closeMenu(); // Tutup menu setelah klik
        };

        // Kembalikan state dan fungsi agar bisa digunakan di template
        return {
            isOpen,
            toggleMenu,
            closeMenu,
            closeMenuAndNavigate,
        };
    },
}
</script>

<style scoped>
/* Gaya khusus komponen Navigasi jika diperlukan */
</style>