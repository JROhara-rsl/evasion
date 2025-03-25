import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/evasion/',
  optimizeDeps: {
    exclude: ['js-big-decimal']
  },
  worker: {
    format: "es", // Empêche l'utilisation de blobs et évite l'erreur CSP
  },
})
