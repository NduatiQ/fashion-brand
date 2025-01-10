import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';


// https://vite.dev/config/
export default defineConfig({
  base:'/fashion-brand/',
  plugins: [react(), svgr()],
   //Github pages hosting configuration
   
  css: {
   
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/variables.scss";`,
      },
    },
  },
})
