import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Repo adı 'idilunver.portfolio' olduğu için base bu şekilde ayarlandı.
// Site: https://idilunver.github.io/idilunver.portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/idilunver.portfolio/',
})
