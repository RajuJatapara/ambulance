import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: './' allows the site to work anywhere (GitHub Pages, subfolders, custom domain, Vercel, Netlify)
  base: './',
  server: {
    host: true,
    port: 5173
  }
})

