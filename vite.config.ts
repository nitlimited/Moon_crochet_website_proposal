import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Moon_crochet_website_proposal/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
