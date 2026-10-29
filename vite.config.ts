import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { services } from './src/config/services'

const staticRoutes = ['/', '/about', '/services', '/who-we-help', '/contact', '/privacy-policy', '/cookie-policy']

/** Emits sitemap.xml and robots.txt using VITE_SITE_URL, so they never drift from the route list. */
function seoFiles(siteUrl: string): Plugin {
  const base = siteUrl.replace(/\/$/, '')
  const routes = [...staticRoutes.slice(0, 3), ...services.map((s) => `/services/${s.slug}`), ...staticRoutes.slice(3)]
  return {
    name: 'lambth-seo-files',
    generateBundle() {
      const urls = routes.map((r) => `  <url><loc>${base}${r === '/' ? '/' : r}</loc></url>`).join('\n')
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`,
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')
  return {
    plugins: [react(), tailwindcss(), seoFiles(env.VITE_SITE_URL || 'https://www.example.com')],
  }
})
