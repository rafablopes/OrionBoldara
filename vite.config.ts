import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://us-central1-rafaela-442200.cloudfunctions.net/function-1', //trocar link 
        changeOrigin: true,   
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})