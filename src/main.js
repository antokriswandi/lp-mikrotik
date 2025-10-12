import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Alpine from 'alpinejs'

// inisialisasi Alpine.js
window.Alpine = Alpine
Alpine.start()

// inisialisasi Vue.js
createApp(App).mount('#app')
