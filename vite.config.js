import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // No need to add Tailwind here
  css: {
    postcss: './postcss.config.cjs', // Ensure PostCSS is properly configured
  },
});
