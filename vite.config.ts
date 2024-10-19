import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 自动打开浏览器
    open: true,
    host: true,
    port: 3001,
  },
})
