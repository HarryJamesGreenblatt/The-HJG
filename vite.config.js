// filepath: /c:/Users/harry/Dev/projects/The-HJG/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/The-HJG/', // Matches your GitHub repository name
  define: {
    'import.meta.env.VITE_NEWS_API_KEY': JSON.stringify(process.env.VITE_NEWS_API_KEY),
    'import.meta.env.VITE_NEWS_API_BASE_URL': JSON.stringify(process.env.VITE_NEWS_API_BASE_URL)
  }
});