// Links the first mention of a keyword or a system on each page of the Basic guide to the page that explains it, and links
// the effect classes named in the effect type tables to their Advanced class pages.
//
//   npm run autolink            changes the pages
//   npm run autolink -- --dry   only prints what would change
//
// Safe to run again: a term that already has a link to its page on the page is left alone, so only the first mention is ever linked.
// Never touched: headings, code (inline and fenced), bold text (the names of fields and buttons), existing links, HTML tags,
// the titles of ::: boxes, and the page a term links to.
import fs from 'node:fs'
import path from 'node:path'
import { groups as abilityGroups } from '../docs/.vitepress/classes-abilities-and-effects.mjs'
import { TERMS } from './autolink-terms.mjs'

const DOCS = 'docs'
const dry = process.argv.includes('--dry')
const kebab = name => name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2').toLowerCase()

// class name -> its Advanced page
const classPages = new Map()
for (const g of abilityGroups) for (const c of g.classes) classPages.set(c.name, `/advanced/abilities-and-effects/${g.slug}/${kebab(c.name)}`)

function pagesIn(dir) {
  const out = []
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) out.push(...pagesIn(p))
    else if (e.name.endsWith('.md')) out.push(p)
  }
  return out
}

// the URL of a page file: docs/basic/keywords.md -> /basic/keywords, docs/basic/x/index.md -> /basic/x/
function urlOf(file) {
  const rel = path.relative(DOCS, file).split(path.sep).join('/').replace(/\.md$/, '')
  return '/' + (rel.endsWith('index') ? rel.slice(0, -5) : rel)
}

// the parts of a line that must not be changed
const PROTECTED = /(`[^`]*`|\*\*[^*]+\*\*|!?\[[^\]]*\]\([^)]*\)|<[^>]+>|https?:\/\/\S+)/g

function linkLine(line, term, url) {
  const re = new RegExp(`(?<![\\w-])(${term.pattern})(?![\\w-])`, 'i')
  const parts = line.split(PROTECTED)
  for (let i = 0; i < parts.length; i += 2) { // (the odd parts are the protected ones)
    const m = re.exec(parts[i])
    if (m) {
      parts[i] = parts[i].slice(0, m.index) + `[${m[1]}](${url})` + parts[i].slice(m.index + m[1].length)
      return parts.join('')
    }
  }
  return null
}

let changedPages = 0
let links = 0
const unknown = new Set()

for (const file of pagesIn(DOCS).sort()) {
  if (!file.split(path.sep).slice(1, 2).some(s => s === 'basic' || s === 'general')) continue
  const self = urlOf(file)
  const original = fs.readFileSync(file, 'utf8')
  if (original.includes('This page is being written.')) continue
  const eol = original.includes('\r\n') ? '\r\n' : '\n'
  let lines = original.split(/\r?\n/)

  // which lines may take a link
  let fence = false
  let frontMatter = lines[0] === '---'
  const open = lines.map((line, i) => {
    if (frontMatter) { if (i > 0 && line === '---') frontMatter = false; return false }
    if (/^\s*(```|~~~)/.test(line)) { fence = !fence; return false }
    if (fence) return false
    return !/^(#|:::|<|\|[-: |]+\|\s*$)/.test(line.trim()) && line.trim() !== ''
  })

  // 1) the keywords and systems: the first mention of each
  let pageLinks = 0
  for (const term of TERMS) {
    const url = term.url
    if (url.split('#')[0] === self || url === self) continue
    if (term.not && term.not.includes(self)) continue
    if (lines.some(l => l.includes(`](${url})`))) continue
    for (let i = 0; i < lines.length; i++) {
      if (!open[i]) continue
      const next = linkLine(lines[i], term, url)
      if (next !== null) { lines[i] = next; pageLinks++; break }
    }
  }

  // 2) the effect classes of the effect type tables
  if (self === '/basic/abilities-and-effects/effect-types') {
    lines = lines.map(line => {
      const row = /^\| \*\*(.+?)\*\* \((.+?)\) \|/.exec(line)
      if (!row) return line
      const names = [...row[2].matchAll(/`(\w+)`/g)].map(m => m[1])
      let out = line
      // a row of one class links by its name; a row of several links each class
      for (const name of names.length === 1 ? [] : names) {
        const url = classPages.get(name)
        if (!url) { unknown.add(name); continue }
        if (out.includes(`](${url})`)) continue
        out = out.replace(`\`${name}\``, `[\`${name}\`](${url})`)
        pageLinks++
      }
      // a row of one class: the name itself links too
      if (names.length === 1 && classPages.get(names[0]) && !row[1].startsWith('[')) {
        out = out.replace(`| **${row[1]}** (`, `| [**${row[1]}**](${classPages.get(names[0])}) (`)
      }
      return out
    })
  }

  const next = lines.join(eol)
  if (next !== original) {
    changedPages++
    links += pageLinks
    console.log(`${pageLinks.toString().padStart(3)} links  ${self}`)
    if (!dry) fs.writeFileSync(file, next)
  }
}
console.log(`${links} links on ${changedPages} pages${dry ? ' (dry run, nothing written)' : ''}`)
if (unknown.size) console.log('no class page for:', [...unknown].join(', '))
