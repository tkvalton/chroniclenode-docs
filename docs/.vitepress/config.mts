import { defineConfig } from 'vitepress'
import { PRODUCT_NAME, DOCS_BASE, DOCS_HOSTNAME } from './site'

// The pages of one system in the basic guide. The tree is: section > system > pages (and tutorials).
const abilitiesAndEffects = {
  text: 'Abilities & Effects',
  collapsed: true,
  items: [
    { text: 'Overview', link: '/basic/abilities-and-effects/' },
    {
      text: 'Abilities',
      collapsed: true,
      items: [
        { text: 'The Abilities editor', link: '/basic/abilities-and-effects/abilities' },
        { text: 'Using an ability', link: '/basic/abilities-and-effects/using-an-ability' },
        { text: 'Targeting', link: '/basic/abilities-and-effects/targeting' },
        { text: 'Aiming', link: '/basic/abilities-and-effects/aiming' },
      ],
    },
    {
      text: 'Effects',
      collapsed: true,
      items: [
        { text: 'The Effects editor', link: '/basic/abilities-and-effects/effects' },
        { text: 'Effect types', link: '/basic/abilities-and-effects/effect-types' },
        { text: 'Stacking and groups', link: '/basic/abilities-and-effects/stacking-and-groups' },
        { text: 'Scaling and trigger rules', link: '/basic/abilities-and-effects/scaling-and-trigger-rules' },
        { text: 'Crowd control', link: '/basic/abilities-and-effects/crowd-control' },
      ],
    },
  ],
}

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
    ],
    // One menu for each section; the tree inside it goes system > pages
    sidebar: {
      '/general/': [
        {
          text: 'General',
          items: [
            { text: 'Introduction', link: '/general/' },
            { text: 'Using the template project', link: '/general/template' },
            { text: 'Adding the addon to your project', link: '/general/adding-the-addon' },
            { text: 'The editor at a glance', link: '/general/editor-tour' },
          ],
        },
      ],
      '/basic/': [
        { text: 'Basic', items: [{ text: 'About the basic guide', link: '/basic/' }] },
        { text: 'Systems', items: [abilitiesAndEffects] },
      ],
      '/advanced/': [
        { text: 'Advanced', items: [{ text: 'About the advanced section', link: '/advanced/' }] },
      ],
    },
  },
})
