import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

const aliases = {
  '@': path.resolve(__dirname),
  '@components': path.resolve(__dirname, 'src/components'),
  '@dtacq': path.resolve('/src/components/Dtacq'),

};

console.log('Active Aliases:', aliases);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    hmr:{
      path:"ws"
    }
  },
  resolve: {
    alias: aliases,
  },
})
