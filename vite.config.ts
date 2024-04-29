// import eslintPlugin from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svg from 'vite-plugin-svgo';
import webfontDownload from 'vite-plugin-webfont-dl';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  build: {
    outDir: './dist',
    emptyOutDir: true,
  },
  plugins: [react(), webfontDownload(), svg()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
