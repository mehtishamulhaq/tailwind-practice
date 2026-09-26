import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      // frame.html renders a single project inside the app's preview iframes.
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        frame: resolve(import.meta.dirname, 'frame.html'),
      },
    },
  },
})
