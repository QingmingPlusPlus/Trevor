import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

console.log(resolve(__dirname, 'pages/main.html'))

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4810,
    host: '0.0.0.0'
  },
  build: {
    rollupOptions: {
      input:{
        main: resolve(__dirname, 'pages/main.html'),
        nested: resolve(__dirname, 'pages/nested.html')
      }
    }
  }
})
