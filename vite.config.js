import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Replace 'geophysical-aggregator' with your actual GitHub repo name for gh-pages deploy
export default defineConfig({
  base: '/proyectofront-geowatch/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
