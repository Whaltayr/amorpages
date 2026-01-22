import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
   base: '/', // <--- change to "/lovelive/" if your repo/name is lovelive,
  plugins: [react(),tailwindcss()],
})
