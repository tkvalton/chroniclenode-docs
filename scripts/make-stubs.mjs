// Creates a stub (a heading and a work-in-progress note) for every page of the sidebar that has no file yet. Never touches an existing file.
// Run it after adding pages to docs/.vitepress/sidebar.mjs:  npm run stubs
import fs from 'node:fs'
import path from 'node:path'
import { allPages } from '../docs/.vitepress/sidebar.mjs'

let created = 0
for (const item of allPages()) {
  const link = item.link
  const file = path.join('docs', link.endsWith('/') ? link + 'index.md' : link + '.md')
  if (fs.existsSync(file)) continue
  fs.mkdirSync(path.dirname(file), { recursive: true })
  const title = item.title ?? item.text
  fs.writeFileSync(file, `# ${title}\n\n::: warning Work in progress\nThis page is being written.\n:::\n`)
  created++
  console.log('created', file)
}
console.log(created, 'stubs created')
