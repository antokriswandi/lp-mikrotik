<template>
    <div class="absolute hidden md:block -top-24 -left-[240px] w-[480px] h-[480px] md:w-[680px] md:h-[680px] lg:w-[960px] lg:h-[960px] pointer-events-none -z-10 border"
        :style="{
            background: 'radial-gradient(circle at center, rgba(255, 228, 230, 1), transparent 70%)' // rose-100 -> transparent
        }"></div>
</template>

<script>
export default {
    name: 'GlowBackground'
}
</script>

<style scoped>
/* Tidak ada gaya khusus diperlukan di sini selain Tailwind dan style binding */
</style>