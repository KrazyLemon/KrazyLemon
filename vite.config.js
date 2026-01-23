import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  base:'./KrazyLemon',
=======
  base:'./KrazyLemon/',
>>>>>>> b1faa1b172162a6038772e965a7c63a5f15b08c3
  plugins: [
    react(),
    tailwindcss(),]
})
