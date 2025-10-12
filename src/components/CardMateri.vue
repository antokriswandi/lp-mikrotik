<!-- components/CardMateri.vue -->
<template>
    <div class="p-8 rounded-4xl bg-white relative overflow-hidden group hover:shadow-lg transition-shadow duration-300" :class="customClass"
        @mousemove="handleMouseMove"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        ref="cardRef"
        >
        <!-- Div untuk efek glow -->
        <div class="absolute inset-0 rounded-4xl pointer-events-none transition-opacity duration-300 ease-out"
            :class="{ 'opacity-100': isHovered, 'opacity-0': !isHovered }" :style="{
                background: `radial-gradient(480px at ${mousePosition.x}px ${mousePosition.y}px, rgb(150, 247, 228, 0.30), transparent 70%)`
            }"></div>

        <!-- Konten Card -->
        <div class="relative z-10 flex flex-col gap-4 lg:gap-8 h-full" :class="classCard">
            <!-- judul materi -->
            <div class="space-y-4">
                <slot name="icon"></slot>
                <h3 class="text-slate-900 text-2xl lg:text-4xl font-bold relative inline-block group-hover:text-rose-800 transition-colors duration-300">
                    {{ judul }}
                    <span class="absolute bottom-[-4px] left-0 w-full h-0.5 bg-rose-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </h3> <!-- Gunakan props judul -->
            </div>
            <!-- deskripsi materi -->
            <p class="text-body text-slate-600"> <!-- Tambahkan margin-top -->
                {{ deskripsi }} <!-- Gunakan props deskripsi -->
            </p>
        </div>
    </div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
    name: 'CardMateri',
    // Definisikan props
    props: {
        judul: {
            type: String,
            required: true
        },
        deskripsi: {
            type: String,
            required: true
        },
        customClass: { // Tambahkan props untuk kelas kustom (misalnya untuk ukuran)
            type: String,
            default: 'col-span-4' // Default ke full width
        },
        classCard: {
            type: String,
            default: ''
        }
    },
    setup() {
        const cardRef = ref(null);
        const isHovered = ref(false);
        const mousePosition = reactive({ x: 0, y: 0 });

        const handleMouseMove = (e) => {
            if (!cardRef.value) return;

            const rect = cardRef.value.getBoundingClientRect();
            mousePosition.x = e.clientX - rect.left;
            mousePosition.y = e.clientY - rect.top;
        };

        const handleMouseEnter = () => {
            isHovered.value = true;
        };

        const handleMouseLeave = () => {
            isHovered.value = false;
        };

        return {
            cardRef,
            isHovered,
            mousePosition,
            handleMouseMove,
            handleMouseEnter,
            handleMouseLeave
        };
    },
};
</script>