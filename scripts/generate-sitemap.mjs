/**
 * Slateyo Sitemap Generator
 * Automatically generates a standard XML sitemap for https://slateyo.in
 * Safe: Filters out any private/dashboard/auth routes.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const BASE_URL = 'https://slateyo.in';

/**
 * Public routes configuration.
 * Add any new public and indexable routes here.
 */
export const publicRoutes = [
  {
    path: '/',
    changefreq: 'daily',
    priority: '1.0',
    lastmod: new Date().toISOString().split('T')[0],
  },
];

/**
 * Patterns that should NEVER appear in the public sitemap.
 */
const PRIVATE_PATTERNS = [
  /^\/admin(\/.*)?$/,
  /^\/dashboard(\/.*)?$/,
  /^\/owner(\/.*)?$/,
  /^\/cafe-owner(\/.*)?$/,
  /^\/user(\/.*)?$/,
  /^\/login(\/.*)?$/,
  /^\/signup(\/.*)?$/,
  /^\/auth(\/.*)?$/,
  /^\/api(\/.*)?$/,
  /preview=true/,
  /debug=true/,
];

/**
 * Check if a route path is strictly public
 */
export function isPublicRoute(routePath) {
  return !PRIVATE_PATTERNS.some((pattern) => pattern.test(routePath));
}

/**
 * Generate XML string for sitemap
 */
export function generateSitemapXml(routes = publicRoutes) {
  const filteredRoutes = routes.filter((r) => isPublicRoute(r.path));

  const urlEntries = filteredRoutes
    .map((route) => {
      const fullUrl = route.path === '/' ? `${BASE_URL}/` : `${BASE_URL}${route.path.startsWith('/') ? route.path : `/${route.path}`}`;
      const lastmod = route.lastmod || new Date().toISOString().split('T')[0];
      const changefreq = route.changefreq || 'weekly';
      const priority = route.priority || '0.8';

      return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlEntries}
</urlset>
`;
}

/**
 * Main writer function
 */
export function writeSitemap() {
  const xmlContent = generateSitemapXml();

  // Target directories
  const publicDir = path.join(rootDir, 'public');
  const distDir = path.join(rootDir, 'dist');

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const publicSitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(publicSitemapPath, xmlContent, 'utf-8');
  console.log(`[SEO] Generated sitemap: ${publicSitemapPath}`);

  if (fs.existsSync(distDir)) {
    const distSitemapPath = path.join(distDir, 'sitemap.xml');
    fs.writeFileSync(distSitemapPath, xmlContent, 'utf-8');
    console.log(`[SEO] Synchronized sitemap to dist: ${distSitemapPath}`);
  }

  return publicSitemapPath;
}

// Execute if run directly
if (process.argv[1] === __filename) {
  writeSitemap();
}
