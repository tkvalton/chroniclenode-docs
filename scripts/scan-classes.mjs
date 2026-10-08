// Scans the addon for the classes of a system and writes docs/.vitepress/classes-<system>.mjs (the list the advanced sidebar is built from),
// then creates a stub page for every class that has none yet.
//
//   npm run classes                       (the addon is read from CHRONICLENODE_ADDON, by default the project next to this repository)
//
// Only abilities and effects so far: add a system to SYSTEMS to do the next one.
import fs from 'node:fs'
import path from 'node:path'
import { parseClass, renderClass, MARKER } from './gdscript-doc.mjs'

const ADDON = process.env.CHRONICLENODE_ADDON ?? 'C:/Users/Rhys/Documents/rpg-toolkit/addons/chroniclenode'

// system slug -> the folders of the addon that hold its classes, and the group each folder becomes in the menu
const SYSTEMS = {
  'abilities-and-effects': {
    title: 'Abilities & Effects',
    groups: [
      { text: 'Abilities', slug: 'abilities', dirs: [['data_classes/abilities', false]] },
      { text: 'Target strategies', slug: 'target-strategies', dirs: [['data_classes/abilities/target_strategy', true]] },
      { text: 'Use strategies', slug: 'use-strategies', dirs: [['data_classes/abilities/use_strategy', true]] },
      { text: 'Effects: base classes', slug: 'effects-base', dirs: [['data_classes/effects', false]] },
      { text: 'Effects: ability', slug: 'effects-ability', dirs: [['data_classes/effects/ability', true]] },
      { text: 'Effects: area', slug: 'effects-area', dirs: [['data_classes/effects/area_effects', true]] },
      { text: 'Effects: composite', slug: 'effects-composite', dirs: [['data_classes/effects/composite', true]] },
      { text: 'Effects: conditional', slug: 'effects-conditional', dirs: [['data_classes/effects/conditional', true]] },
      { text: 'Effects: damage and healing', slug: 'effects-damage-and-healing', dirs: [['data_classes/effects/damage_and_healing', true]] },
      { text: 'Effects: item', slug: 'effects-item', dirs: [['data_classes/effects/item', true]] },
      { text: 'Effects: movement', slug: 'effects-movement', dirs: [['data_classes/effects/movement', true]] },
      { text: 'Effects: pets and summons', slug: 'effects-pets-and-summons', dirs: [['data_classes/effects/pets_and_summons', true]] },
      { text: 'Effects: procs', slug: 'effects-procs', dirs: [['data_classes/effects/proc_effects', true]] },
      { text: 'Effects: projectiles and shots', slug: 'effects-projectiles-and-shots', dirs: [['data_classes/effects/projectiles_and_shots', true]] },
      { text: 'Effects: stats', slug: 'effects-stats', dirs: [['data_classes/effects/stats', true]] },
      { text: 'Effects: status and control', slug: 'effects-status-and-control', dirs: [['data_classes/effects/status_and_control', true]] },
      { text: 'Effects: utility', slug: 'effects-utility', dirs: [['data_classes/effects/utility', true]] },
      {
        text: 'Runtime',
        slug: 'runtime',
        dirs: [
          ['runtime_classes/entity/abilities', true],
          ['runtime_classes/entity/components/ability_component.gd', false],
          ['runtime_classes/entity/components/effects_component.gd', false],
          ['runtime_classes/combat/effect_instance_pool.gd', false],
          ['runtime_classes/combat/threat_utility.gd', false],
          ['runtime_classes/entity/components/threat_table_component.gd', false],
        ],
      },
    ],
  },
  'data-and-database': {
    title: 'Data and the Database',
    groups: [
      { text: 'The database', slug: 'database-classes', dirs: [['databases/database.gd', false], ['data_classes/database_resource/database_resource.gd', false]] },
      {
        text: 'Asset databases',
        slug: 'asset-database-classes',
        dirs: [
          ['databases/animation_database.gd', false],
          ['databases/audio_database.gd', false],
          ['databases/icons_database.gd', false],
          ['databases/mesh_database.gd', false],
          ['databases/model_scene_database.gd', false],
          ['databases/vfx_database.gd', false],
        ],
      },
    ],
  },
}

const kebab = name => name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2').toLowerCase()

function gdFiles(target, recursive) {
  const full = path.join(ADDON, target)
  if (!fs.existsSync(full)) return []
  if (fs.statSync(full).isFile()) return [full]
  const files = []
  for (const e of fs.readdirSync(full, { withFileTypes: true })) {
    const p = path.join(full, e.name)
    if (e.isDirectory()) { if (recursive) files.push(...gdFiles(path.relative(ADDON, p), true)); continue }
    if (e.name.endsWith('.gd')) files.push(p)
  }
  return files
}

function classOf(file) {
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/)
  for (const l of lines) {
    const m = l.match(/^class_name\s+(\w+)(?:\s+extends\s+(\w+))?/)
    if (m) return { name: m[1], base: m[2] ?? 'RefCounted' }
  }
  return null
}

let written = 0
let skipped = 0
for (const [slug, system] of Object.entries(SYSTEMS)) {
  const out = []
  const seen = new Set()
  for (const group of system.groups) {
    const classes = []
    for (const [dir, recursive] of group.dirs) {
      for (const file of gdFiles(dir, recursive)) {
        const c = classOf(file)
        if (!c || seen.has(c.name)) continue
        seen.add(c.name)
        classes.push({ ...c, file: path.relative(ADDON, file).split(path.sep).join('/') })
      }
    }
    classes.sort((a, b) => a.name.localeCompare(b.name))
    out.push({ text: group.text, slug: group.slug, classes })
  }
  fs.writeFileSync(
    `docs/.vitepress/classes-${slug}.mjs`,
    `// Written by scripts/scan-classes.mjs from the addon: the classes of the ${system.title} system.\nexport const groups = ${JSON.stringify(out, null, 2)}\n`,
  )
  // every class of the addon, to follow the inheritance chain; the pages of this system, to link to
  const all = new Map()
  for (const file of gdFiles('.', true)) {
    const c = classOf(file)
    if (c) all.set(c.name, c)
  }
  const pages = new Map()
  for (const group of out) for (const c of group.classes) pages.set(c.name, `/advanced/${slug}/${group.slug}/${kebab(c.name)}`)
  const stub = name => `# ${name}\n\n::: warning Work in progress\nThis page is being written.\n:::\n`
  for (const group of out) {
    for (const c of group.classes) {
      const file = `docs/advanced/${slug}/${group.slug}/${kebab(c.name)}.md`
      // a page written by hand is never touched: only a stub or a generated page is written again
      if (fs.existsSync(file)) {
        const current = fs.readFileSync(file, 'utf8')
        if (!current.includes(MARKER) && current !== stub(c.name)) { skipped++; continue }
      }
      const info = parseClass(path.join(ADDON, c.file))
      fs.mkdirSync(path.dirname(file), { recursive: true })
      fs.writeFileSync(file, info ? renderClass(info, { all, pages }) : stub(c.name))
      written++
    }
  }
  console.log(slug, out.map(g => `${g.text}: ${g.classes.length}`).join(', '))
}
console.log(written, 'class pages written,', skipped, 'written by hand and left alone')
