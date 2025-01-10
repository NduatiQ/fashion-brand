import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';


// https://vite.dev/config/
export default defineConfig({
  
  plugins: [react(), svgr()],
   //Github pages hosting configuration
   base: process.env.NODE_ENV === 'production' ? '/fashion-brand/': '/',
  css: {
   
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/variables.scss";`,
      },
    },
  },
})
