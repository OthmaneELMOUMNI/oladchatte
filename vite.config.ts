import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/oladchatte/',
  plugins: [react()],
  server: {
    host: true,
  },
  preview: {
    host: true,
  },
});
