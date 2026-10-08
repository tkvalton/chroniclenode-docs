// Prints the PAGES dictionary of DocsLinks (addons/chroniclenode/editor_components/utility/docs_links.gd): the page of each tab of the Database editor.
// Paste its output between the braces of PAGES.  Run: node scripts/docs-links.mjs
import { allPages } from '../docs/.vitepress/sidebar.mjs'

for (const item of allPages()) {
  if (item.view) console.log(`\t"${item.view}": "${item.link}",`)
}
