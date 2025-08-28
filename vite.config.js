import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // mobile devices se access ke liye
    port: 5173, // default Vite port
  },
})
