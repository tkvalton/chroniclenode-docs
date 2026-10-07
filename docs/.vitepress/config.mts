import { defineConfig } from 'vitepress'
import { PRODUCT_NAME, DOCS_BASE, DOCS_HOSTNAME } from './site'

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
    sidebar: [
      {
        text: 'Getting started',
        items: [
          { text: 'Introduction', link: '/getting-started/' },
          { text: 'Using the template project', link: '/getting-started/template' },
          { text: 'Adding the addon to your project', link: '/getting-started/adding-the-addon' },
          { text: 'The editor at a glance', link: '/getting-started/editor-tour' },
        ],
      },
      {
        text: 'Guide',
        items: [
          { text: 'About the guide', link: '/guide/' },
        ],
      },
      {
        text: 'Abilities & Effects',
        items: [
          { text: 'Overview', link: '/guide/abilities-and-effects/' },
          { text: 'Abilities', link: '/guide/abilities-and-effects/abilities' },
          { text: 'Using an ability', link: '/guide/abilities-and-effects/using-an-ability' },
          { text: 'Targeting', link: '/guide/abilities-and-effects/targeting' },
          { text: 'Aiming', link: '/guide/abilities-and-effects/aiming' },
          { text: 'Effects', link: '/guide/abilities-and-effects/effects' },
          { text: 'Effect types', link: '/guide/abilities-and-effects/effect-types' },
        ],
      },
    ],
  },
})
