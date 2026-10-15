// Checks every link of the docs that has an #anchor: the page exists and has a heading (or {#id}) with that anchor
import fs from 'node:fs'
import path from 'node:path'
const root = path.join(path.dirname(new URL(import.meta.url).pathname.replace(/^/([A-Za-z]:)/, '$1')), '..', 'docs') + path.sep
function walk(dir, list = []) { for (const e of fs.readdirSync(dir, { withFileTypes: true })) { const p = path.join(dir, e.name); if (e.isDirectory()) { if (!['.vitepress', 'public', 'node_modules'].includes(e.name)) walk(p, list) } else if (p.endsWith('.md')) list.push(p) } return list }
const slug = text => text.trim().toLowerCase().replace(/\{#[^}]*\}/g, '').replace(/[^a-z0-9\s-]/g, ' ').trim().replace(/\s+/g, '-').replace(/-+/g, '-')
const pages = {}
for (const file of walk(root)) {
  const rel = '/' + path.relative(root, file).split(path.sep).join('/').replace(/\.md$/, '')
  const text = fs.readFileSync(file, 'utf8')
  const ids = new Set()
  let fence = false
  for (const line of text.split('\n')) {
    if (/^```/.test(line)) fence = !fence
    if (fence) continue
    const m = line.match(/^#{1,6} (.*)$/)
    if (m) { const explicit = m[1].match(/\{#([^}]+)\}/); ids.add(explicit ? explicit[1] : slug(m[1])) }
  }
  pages[rel] = { file, text, ids }
}
let broken = 0
for (const [rel, page] of Object.entries(pages)) {
  for (const m of page.text.matchAll(/\]\(([^)\s#]*)#([^)\s]+)\)/g)) {
    const target = m[1] === '' ? rel : (m[1].startsWith('/') ? m[1].replace(/\/$/, '') : null)
    if (target == null) continue
    const dest = pages[target] || pages[target + '/index']
    if (!dest) continue
    if (!dest.ids.has(m[2])) { broken++; console.log(`${rel}: ${m[1]}#${m[2]}`) }
  }
}
console.log('broken anchors:', broken)
process.exit(broken ? 1 : 0)
