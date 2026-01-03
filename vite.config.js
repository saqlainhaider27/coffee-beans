import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 👈 Add this line. It must start and end with a forward slash.
  base: '/coffee-beans/',
})