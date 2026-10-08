// Reads a GDScript file and writes a class reference page in the layout of the Godot class reference:
// inheritance, description, properties, methods, signals, enumerations, constants, then the descriptions of each.
// The words come from the `##` comments of the code, so a page is corrected by correcting the comment.
import fs from 'node:fs'

const MARKER = '<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->'
export { MARKER }

// ---------- reading the code ----------

function docBefore(lines, index) {
  const doc = []
  for (let i = index - 1; i >= 0; i--) {
    const t = lines[i].trim()
    if (t.startsWith('##')) doc.unshift(t.replace(/^##\s?/, ''))
    else if (t.startsWith('@') && !t.includes(' var ') && !t.includes(' func ')) continue // an annotation line of its own
    else break
  }
  return doc
}

// the signature of a function may run over several lines
function readStatement(lines, start) {
  let text = lines[start]
  let depth = (text.match(/\(/g) ?? []).length - (text.match(/\)/g) ?? []).length
  let end = start
  while (depth > 0 && end + 1 < lines.length) {
    end++
    text += ' ' + lines[end].trim()
    depth += (lines[end].match(/\(/g) ?? []).length - (lines[end].match(/\)/g) ?? []).length
  }
  return { text, end }
}

function splitTopLevel(text, separator = ',') {
  const parts = []
  let depth = 0
  let current = ''
  let quote = ''
  for (const ch of text) {
    if (quote) { current += ch; if (ch === quote) quote = ''; continue }
    if (ch === '"' || ch === "'") { quote = ch; current += ch; continue }
    if ('([{'.includes(ch)) depth++
    if (')]}'.includes(ch)) depth--
    if (ch === separator && depth === 0) { parts.push(current.trim()); current = ''; continue }
    current += ch
  }
  if (current.trim()) parts.push(current.trim())
  return parts
}

export function parseClass(file) {
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/)
  const info = { name: '', base: 'RefCounted', doc: [], properties: [], variables: [], methods: [], signals: [], enums: [], constants: [] }
  let classLine = lines.findIndex(l => /^class_name\s+\w+/.test(l))
  if (classLine < 0) return null
  const header = lines[classLine].match(/^class_name\s+(\w+)(?:\s+extends\s+(\w+))?/)
  info.name = header[1]
  if (header[2]) info.base = header[2]
  else {
    const ext = lines.find(l => /^extends\s+\w+/.test(l))
    if (ext) info.base = ext.match(/^extends\s+(\w+)/)[1]
  }
  // the class description: the ## lines straight after the class line
  for (let i = classLine + 1; i < lines.length; i++) {
    const t = lines[i].trim()
    if (t.startsWith('##')) info.doc.push(t.replace(/^##\s?/, ''))
    else if (t === '' && info.doc.length === 0) continue
    else break
  }
  const classDocEnd = classLine + 1 + info.doc.length
  let group = ''
  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i]
    const line = raw.trimEnd()
    if (/^\s/.test(line) || line === '') continue // only the top level
    let m
    if ((m = line.match(/^@export_(?:category|group|subgroup)\("([^"]*)"/))) {
      group = m[1]
      continue
    }
    const doc = i < classDocEnd ? [] : docBefore(lines, i)
    if ((m = line.match(/^signal\s+(\w+)\s*(\(.*\))?/))) {
      info.signals.push({ name: m[1], args: m[2] ? m[2].slice(1, -1) : '', doc })
    } else if ((m = line.match(/^enum\s+(\w+)?\s*\{(.*)$/))) {
      // members may be on the following lines, each with its own ## comment
      let body = m[2]
      let j = i
      const members = []
      let value = 0
      const readMember = (text, comment) => {
        const part = text.replace(/,?\s*$/, '').trim()
        if (!part) return
        const mm = part.match(/^(\w+)\s*(?:=\s*(.+))?$/)
        if (!mm) return
        if (mm[2] !== undefined && /^-?\d+$/.test(mm[2].trim())) value = parseInt(mm[2].trim(), 10)
        members.push({ name: mm[1], value: mm[2] !== undefined && !/^-?\d+$/.test(mm[2].trim()) ? mm[2].trim() : String(value), doc: comment })
        value++
      }
      let closed = body.includes('}')
      if (closed) {
        for (const part of splitTopLevel(body.slice(0, body.indexOf('}')))) readMember(part, '')
      } else {
        if (body.trim()) {
          const [code, comment] = body.split('##')
          for (const part of splitTopLevel(code)) readMember(part, comment ? comment.trim() : '')
        }
        while (!closed && j + 1 < lines.length) {
          j++
          const row = lines[j].trim()
          if (row.startsWith('}')) { closed = true; break }
          const [code, comment] = row.split('##')
          if (code.trim() === '' && !comment) continue
          for (const part of splitTopLevel(code)) readMember(part, comment ? comment.trim() : '')
        }
        i = j
      }
      info.enums.push({ name: m[1] ?? '', members, doc })
    } else if ((m = line.match(/^const\s+(\w+)\s*(?::\s*([^=]+?))?\s*=\s*(.+)$/))) {
      if (!m[1].startsWith('_')) info.constants.push({ name: m[1], type: (m[2] ?? '').trim(), value: m[3].trim(), doc })
    } else if ((m = line.match(/^@export(?:_[a-z_]+)?(\(.*?\))?\s+(?:static\s+)?var\s+(\w+)\s*(?::\s*([^=]+?))?\s*(?::?=\s*(.+))?$/)) || (m = line.match(/^@export(?:_[a-z_]+)?(\(.*?\))?\s+(?:static\s+)?var\s+(\w+)\s*(?::\s*([^=]+?))?\s*(?::?=\s*(.+))?$/))) {
      if (/^@export_storage/.test(line)) continue
      if (!m[2].startsWith('_')) info.properties.push({ name: m[2], type: (m[3] ?? '').trim(), default: shortValue((m[4] ?? '').trim()), doc, group })
    } else if ((m = line.match(/^(?:static\s+)?var\s+(\w+)\s*(?::\s*([^=]+?))?\s*(?::?=\s*(.+))?$/))) {
      if (!m[1].startsWith('_')) info.variables.push({ name: m[1], type: (m[2] ?? '').trim(), default: shortValue((m[3] ?? '').trim()), doc })
    } else if ((m = line.match(/^(static\s+)?func\s+(\w+)\s*\(/))) {
      if (m[2].startsWith('_')) continue
      const statement = readStatement(lines, i)
      const sig = statement.text.match(/func\s+(\w+)\s*\((.*)\)\s*(?:->\s*([^:]+?))?\s*:\s*(?:#.*)?$/)
      if (sig) info.methods.push({ name: sig[1], args: sig[2].replace(/\s+/g, ' ').trim(), returns: (sig[3] ?? 'void').trim(), isStatic: !!m[1], doc })
      i = statement.end
    }
  }
  return info
}

// ---------- writing the page ----------

const NATIVE = new Set(['Object', 'RefCounted', 'Resource', 'Node', 'Node2D', 'Node3D', 'Control', 'CharacterBody3D', 'Area3D', 'RigidBody3D', 'StaticBody3D',
  'Timer', 'Tween', 'Marker3D', 'MeshInstance3D', 'CanvasLayer', 'Container', 'PanelContainer', 'VBoxContainer', 'HBoxContainer', 'Button', 'Label',
  'SceneTree', 'Window', 'EditorPlugin', 'Camera3D', 'AudioStreamPlayer', 'AudioStreamPlayer3D', 'Skeleton3D', 'AnimationPlayer', 'AnimationTree'])
const godotLink = name => `[${name}](https://docs.godotengine.org/en/stable/classes/class_${name.toLowerCase()}.html)`

// text from a comment: escape what markdown or the page template would take for markup
function clean(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\{\{/g, '&#123;&#123;')
    .replace(/&lt;/g, '&lt;')
}
// inside a table cell
const cell = text => clean(text).replace(/\|/g, '\\|').replace(/\n/g, ' ')
const shortValue = v => (v === '{' ? '{ ... }' : v === '[' ? '[ ... ]' : v)
const code = text => '`' + text.replace(/`/g, "'") + '`'
const inlineCode = text => {
  // `x` spans stay code; the rest is escaped
  return text.split(/(`[^`]*`)/).map((part, k) => k % 2 ? part : clean(part)).join('')
}

function paragraphs(docLines) {
  const out = []
  let current = []
  for (const l of docLines) {
    if (l.trim() === '') { if (current.length) out.push(current.join(' ')); current = []; continue }
    if (/^\s*[-*]\s/.test(l) || /^\d+\.\s/.test(l)) { if (current.length) out.push(current.join(' ')); current = []; out.push(l.trim()); continue }
    current.push(l.trim())
  }
  if (current.length) out.push(current.join(' '))
  // list items stay together
  const merged = []
  for (const p of out) {
    if (/^[-*]\s/.test(p) && merged.length && /^[-*]\s/.test(merged[merged.length - 1].split('\n').pop())) merged[merged.length - 1] += '\n' + p
    else merged.push(p)
  }
  return merged.map(p => inlineCode(p)).join('\n\n')
}

const anchor = name => name.toLowerCase().replace(/_/g, '-')

export function renderClass(info, ctx) {
  // ctx: { all: Map(name -> {name, base}), pages: Map(name -> url), kebab }
  const link = name => ctx.pages.has(name) ? `[${name}](${ctx.pages.get(name)})` : (NATIVE.has(name) && !ctx.all.has(name) ? godotLink(name) : code(name))
  const chain = []
  let b = info.base
  const seen = new Set()
  while (b && !seen.has(b)) {
    seen.add(b)
    chain.push(link(b))
    b = ctx.all.get(b)?.base
  }
  const children = [...ctx.all.values()].filter(c => c.base === info.name && ctx.pages.has(c.name)).map(c => link(c.name)).sort()
  const brief = info.doc.length ? paragraphs([info.doc.find(l => l.trim() !== '') ?? '']) : ''
  const out = [MARKER, '', `# ${info.name}`, '']
  out.push(`**Inherits:** ${chain.join(' < ')}`, '')
  if (children.length) out.push(`**Inherited by:** ${children.join(', ')}`, '')
  if (brief) out.push(brief, '')
  // (the first paragraph is the brief description above; the Description section is only for what comes after it)
  const bodyParagraphs = info.doc.length ? paragraphs(info.doc).split('\n\n') : []
  if (bodyParagraphs.length > 1) out.push('## Description', '', bodyParagraphs.join('\n\n'), '')
  const typeText = t => (t ? code(t) : code('Variant'))
  if (info.properties.length) {
    out.push('## Properties', '', '| | | |', '|---|---|---|')
    for (const p of info.properties) out.push(`| ${typeText(p.type)} | [${p.name}](#${anchor('prop-' + p.name)}) | ${p.default ? code(p.default.length > 60 ? p.default.slice(0, 57) + '...' : p.default) : ''} |`)
    out.push('')
  }
  if (info.variables.length) {
    out.push('## Variables', '', '| | | |', '|---|---|---|')
    for (const p of info.variables) out.push(`| ${typeText(p.type)} | [${p.name}](#${anchor('var-' + p.name)}) | ${p.default ? code(p.default.length > 60 ? p.default.slice(0, 57) + '...' : p.default) : ''} |`)
    out.push('')
  }
  if (info.methods.length) {
    out.push('## Methods', '', '| | |', '|---|---|')
    for (const m of info.methods) out.push(`| ${code(m.returns)} | [${m.name}](#${anchor('method-' + m.name)})${m.args ? `( ${code(m.args)} )` : '()'}${m.isStatic ? ' *static*' : ''} |`)
    out.push('')
  }
  if (info.signals.length) {
    out.push('## Signals', '')
    for (const s of info.signals) {
      out.push(`### ${s.name}${s.args ? `( ${clean(s.args)} )` : '()'} {#${anchor('signal-' + s.name)}}`, '')
      if (s.doc.length) out.push(paragraphs(s.doc), '')
    }
  }
  if (info.enums.length) {
    out.push('## Enumerations', '')
    for (const e of info.enums) {
      out.push(`### enum ${e.name || '(unnamed)'} {#${anchor('enum-' + (e.name || 'unnamed'))}}`, '')
      if (e.doc.length) out.push(paragraphs(e.doc), '')
      for (const m of e.members) out.push(`- **${m.name}** = ${code(m.value)}${m.doc ? ` - ${inlineCode(m.doc)}` : ''}`)
      out.push('')
    }
  }
  if (info.constants.length) {
    out.push('## Constants', '')
    for (const c of info.constants) {
      out.push(`- ${code(c.type || 'const')} **${c.name}** = ${code(c.value.length > 80 ? c.value.slice(0, 77) + '...' : c.value)}${c.doc.length ? ` - ${inlineCode(c.doc.join(' '))}` : ''}`)
    }
    out.push('')
  }
  if (info.properties.length) {
    out.push('## Property descriptions', '')
    let lastGroup = null
    for (const p of info.properties) {
      if (p.group !== lastGroup && p.group) { out.push(`*${clean(p.group)}*`, ''); lastGroup = p.group }
      out.push(`### ${p.type ? p.type + ' ' : ''}${p.name}${p.default && !p.default.includes('...') ? ' = ' + clean(p.default.replace(/[{}]/g, '').slice(0, 60)) : ''} {#${anchor('prop-' + p.name)}}`, '')
      out.push(p.doc.length ? paragraphs(p.doc) : '*No description yet.*', '')
    }
  }
  if (info.variables.length) {
    out.push('## Variable descriptions', '')
    for (const p of info.variables) {
      out.push(`### ${p.type ? p.type + ' ' : ''}${p.name}${p.default && !p.default.includes('...') ? ' = ' + clean(p.default.replace(/[{}]/g, '').slice(0, 60)) : ''} {#${anchor('var-' + p.name)}}`, '')
      out.push(p.doc.length ? paragraphs(p.doc) : '*No description yet.*', '')
    }
  }
  if (info.methods.length) {
    out.push('## Method descriptions', '')
    for (const m of info.methods) {
      out.push(`### ${clean(m.returns)} ${m.name}( ${clean(m.args)} ) {#${anchor('method-' + m.name)}}`.replace(/\( \s*\)/, '()'), '')
      out.push(m.doc.length ? paragraphs(m.doc) : '*No description yet.*', '')
    }
  }
  return out.join('\n').replace(/\n{3,}/g, '\n\n') + '\n'
}
