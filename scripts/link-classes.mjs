// Links the classes and systems that the pages of the guide name to the page that explains them.
//
//   npm run linkclasses            changes the pages
//   npm run linkclasses -- --dry   only prints what would change
//
// 1) A class named in code font (`EventManager`, `Database.get_resource(...)`) links to its Advanced class page, the first time on each page.
// 2) A system named in words ("the event manager", "the game host") links to the page of its class or chapter, the first time on each page.
// Safe to run again. Never touched: headings, fenced code, the class tables and the generated class pages, existing links, bold text,
// HTML tags, front matter, and a page's own subject.
import fs from 'node:fs'
import path from 'node:path'

const DOCS = 'docs'
const VP = path.join(DOCS, '.vitepress')
const dry = process.argv.includes('--dry')
const kebab = name => name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2').toLowerCase()

// class name -> page, from the lists the scanner wrote (the first system that lists a class owns its page)
const classPages = new Map()
for (const f of fs.readdirSync(VP).filter(f => /^classes-.*\.mjs$/.test(f))) {
  const system = f.replace(/^classes-/, '').replace(/\.mjs$/, '')
  const text = fs.readFileSync(path.join(VP, f), 'utf8')
  const groups = JSON.parse(text.slice(text.indexOf('['), text.lastIndexOf(']') + 1))
  for (const g of groups) for (const c of g.classes) if (!classPages.has(c.name)) classPages.set(c.name, `/advanced/${system}/${g.slug}/${kebab(c.name)}`)
}

// inner classes have no page of their own: they link to the page of the class that holds them
for (const [inner, outer] of [['SystemHub', 'GameHost'], ['NodeUnlockState', 'SkillTreeInstance']]) if (classPages.has(outer)) classPages.set(inner, classPages.get(outer))

// systems named in words -> the page. The pattern is case-insensitive and the text keeps its own case.
const SYSTEM_TERMS = [
  { pattern: 'system hub', url: classPages.get('GameHost') },
  { pattern: 'game host', url: '/advanced/game-host' },
  { pattern: 'event manager', url: classPages.get('EventManager') },
  { pattern: 'transition manager', url: classPages.get('TransitionManager') },
  { pattern: 'chrono manager', url: classPages.get('ChronoManager') },
  { pattern: 'audio manager', url: classPages.get('AudioManager') },
  { pattern: 'faction manager', url: classPages.get('FactionManager') },
  { pattern: 'settings manager', url: classPages.get('SettingsManager') },
  { pattern: 'input manager', url: classPages.get('InputManager') },
  { pattern: 'party manager', url: classPages.get('PartyManager') },
  { pattern: 'combat manager', url: classPages.get('CombatManager') },
  { pattern: 'vfx manager', url: classPages.get('VFXManager') },
  { pattern: 'ui manager', url: classPages.get('UIManager') },
  { pattern: 'world container', url: classPages.get('WorldContainer') },
  { pattern: 'object registry', url: classPages.get('ObjectRegistry') },
  { pattern: 'definitions? and instances?', url: '/advanced/definitions-and-instances' },
  { pattern: 'save and load', url: '/advanced/save-and-load' },
]

function pagesIn(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) { if (e.name !== '.vitepress' && e.name !== 'public' && e.name !== 'dist') pagesIn(p, out) }
    else if (e.name.endsWith('.md')) out.push(p)
  }
  return out
}
function urlOf(file) {
  const rel = path.relative(DOCS, file).split(path.sep).join('/').replace(/\.md$/, '')
  return '/' + (rel.endsWith('index') ? rel.slice(0, -5) : rel)
}

// existing links, bold text, HTML tags and addresses are left as they are
const LINKS = /(!?\[[^\]]*\]\([^)]*\)|\*\*[^*]+\*\*|<[^>]+>|https?:\/\/\S+)/g
const SPAN = /`([^`]+)`/g

let changedPages = 0
let total = 0
for (const file of pagesIn(DOCS).sort()) {
  const original = fs.readFileSync(file, 'utf8')
  if (original.includes('This page is being written.')) continue
  // generated class pages already link what they name
  if (original.startsWith('<!-- generated from the code comments')) continue
  const self = urlOf(file)
  const eol = original.includes('\r\n') ? '\r\n' : '\n'
  const lines = original.split(/\r?\n/)

  let fence = false
  let front = lines[0] === '---'
  let table = false // inside <!-- classes: ... --> ... <!-- /classes -->
  const open = lines.map((line, i) => {
    if (front) { if (i > 0 && line === '---') front = false; return false }
    if (/^\s*<!-- classes:/.test(line)) { table = true; return false }
    if (/^\s*<!-- \/classes -->/.test(line)) { table = false; return false }
    if (table) return false
    if (/^\s*(```|~~~)/.test(line)) { fence = !fence; return false }
    if (fence) return false
    return !/^(#|:::|<)/.test(line.trim()) && line.trim() !== ''
  })

  // what the page already links to
  const linked = new Set()
  for (const line of lines) for (const m of line.matchAll(/\]\((\/[^)#\s]*)/g)) linked.add(m[1])

  let count = 0
  const take = url => {
    if (!url || url === self || linked.has(url)) return false
    linked.add(url)
    return true
  }

  // 1) classes in code font
  for (let i = 0; i < lines.length; i++) {
    if (!open[i]) continue
    const parts = lines[i].split(LINKS)
    let changed = false
    for (let k = 0; k < parts.length; k += 2) {
      parts[k] = parts[k].replace(SPAN, (whole, content) => {
        const m = /^([A-Z]\w+)(?=$|[.(:\[])/.exec(content)
        if (!m) return whole
        const url = classPages.get(m[1])
        if (!take(url)) return whole
        changed = true
        count++
        return `[${whole}](${url})`
      })
    }
    if (changed) lines[i] = parts.join('')
  }

  // 2) systems in words (the first mention)
  for (const term of SYSTEM_TERMS) {
    if (!term.url || term.url === self || linked.has(term.url)) continue
    const re = new RegExp(`(?<![\\w-\`])(${term.pattern})(?![\\w-\`])`, 'i')
    for (let i = 0; i < lines.length; i++) {
      if (!open[i]) continue
      const parts = lines[i].split(LINKS).map((p, k) => (k % 2 ? p : p.split(SPAN)))
      let done = false
      for (let k = 0; k < parts.length && !done; k += 2) {
        // the even parts are text; inside them the odd pieces are code spans (the split by SPAN keeps the code)
        const pieces = parts[k]
        for (let j = 0; j < pieces.length; j += 2) {
          const m = re.exec(pieces[j])
          if (m) {
            pieces[j] = pieces[j].slice(0, m.index) + `[${m[1]}](${term.url})` + pieces[j].slice(m.index + m[1].length)
            done = true
            break
          }
        }
      }
      if (done) {
        lines[i] = parts.map((p, k) => (k % 2 ? p : p.map((q, j) => (j % 2 ? '`' + q + '`' : q)).join(''))).join('')
        linked.add(term.url)
        count++
        break
      }
    }
  }

  const next = lines.join(eol)
  if (next !== original) {
    changedPages++
    total += count
    if (dry) console.log(`${String(count).padStart(3)} links  ${self}`)
    else fs.writeFileSync(file, next)
  }
}
console.log(`${total} links on ${changedPages} pages${dry ? ' (dry run, nothing written)' : ''}`)
