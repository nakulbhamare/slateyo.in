import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { writeSitemap } from './scripts/generate-sitemap.mjs';

function sitemapPlugin(): Plugin {
  return {
    name: 'vite-plugin-slateyo-sitemap',
    buildStart() {
      try {
        writeSitemap();
      } catch (err) {
        console.warn('[SEO] Failed to auto-generate sitemap:', err);
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sitemapPlugin()],
  server: {
    port: 5173,
    host: true,
  },
});

