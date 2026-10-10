import { defineConfig } from 'vitepress'
import { PRODUCT_NAME, DOCS_BASE, DOCS_HOSTNAME } from './site'
import { sidebar } from './sidebar.mjs'

export default defineConfig({
  title: PRODUCT_NAME,
  description: `Documentation of the ${PRODUCT_NAME} for the Godot engine`,
  base: DOCS_BASE,
  cleanUrls: true,
  lastUpdated: false,
  sitemap: { hostname: DOCS_HOSTNAME },
  appearance: false,
  themeConfig: {
    siteTitle: `${PRODUCT_NAME} documentation`,
    search: { provider: 'local' },
    outline: { level: [2, 3], label: 'On this page' },
    docFooter: { prev: 'Previous', next: 'Next' },
    nav: [
      { text: 'General', link: '/general/', activeMatch: '^/general/' },
      { text: 'Basic', link: '/basic/', activeMatch: '^/basic/' },
      { text: 'Advanced', link: '/advanced/', activeMatch: '^/advanced/' },
      { text: 'Planned', link: '/planned/', activeMatch: '^/planned/' },
    ],
    // One menu on every page, with the sections in it. The tree inside a section goes system > pages.
    // The pages themselves are listed in sidebar.mjs
    sidebar,
  },
})
