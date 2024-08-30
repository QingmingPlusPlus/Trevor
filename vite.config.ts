import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4810,
    host: '0.0.0.0'
  },
  build: {
    rollupOptions: {
      input:{
        main: resolve(__dirname, 'main.html'),
        nested: resolve(__dirname, 'nested.html')
      }
    }
  }
})
