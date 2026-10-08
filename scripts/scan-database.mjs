// Writes docs/advanced/data-and-database/database-types.md: the table of every type in the REGISTRY of the Database class (type name, class,
// folder, the editor tab it is edited in), read from the addon so it never goes out of date.
//
//   npm run database
import fs from 'node:fs'
import path from 'node:path'
import { MARKER } from './gdscript-doc.mjs'

const ADDON = process.env.CHRONICLENODE_ADDON ?? 'C:/Users/Rhys/Documents/rpg-toolkit/addons/chroniclenode'
const OUT = 'docs/advanced/data-and-database/database-types.md'

// where a type is edited: [text, link]
const B = '/basic/'
const EDITED_IN = {
  world: ['Worlds', B + 'world/worlds'],
  enviroment: ['World Configs', B + 'world/world-configs'],
  sky: ['World Configs', B + 'world/world-configs'],
  sun: ['World Configs', B + 'world/world-configs'],
  time: ['World Configs', B + 'world/world-configs'],
  event: ['Events', B + 'events-and-quests/events'],
  quest: ['Quests', B + 'events-and-quests/quests'],
  questline: ['Quest Lines', B + 'events-and-quests/quest-lines'],
  global_variable: ['Global Variables', B + 'events-and-quests/global-variables'],
  ability: ['Abilities', B + 'abilities-and-effects/abilities'],
  effect: ['Effects', B + 'abilities-and-effects/effects'],
  skill_tree: ['Skill Trees', B + 'abilities-and-effects/skill-trees'],
  skill_pool: ['Skill Trees', B + 'abilities-and-effects/skill-trees'],
  npc: ['NPCs', B + 'entities/npcs'],
  npc_template: ['NPCs (templates)', B + 'entities/npcs'],
  player_class: ['Player Classes', B + 'entities/player-classes'],
  player_class_template: ['Player Classes (templates)', B + 'entities/player-classes'],
  character: ['Playable Character', B + 'entities/playable-character'],
  interactable: ['Interactables', B + 'entities/interactables'],
  faction: ['Factions', B + 'behaviors/factions'],
  conversation: ['Conversations', B + 'behaviors/conversations'],
  combat_script: ['Combat Scripts', B + 'behaviors/combat-scripts'],
  behavior_script: ['Behavior Scripts', B + 'behaviors/behavior-scripts'],
  damage_type: ['Damage Types', B + 'types-and-groups/damage-types'],
  school_type: ['School Types', B + 'types-and-groups/school-types'],
  immunity: ['Immunities', B + 'abilities-and-effects/immunities'],
  trigger_tag: ['Trigger Tags', B + 'entity-stats/trigger-tags'],
  entity_tag: ['Entity Types', B + 'types-and-groups/entity-types'],
  group: ['Groups', B + 'types-and-groups/groups'],
  status_effect: ['Status Effects', B + 'abilities-and-effects/status-effects'],
  stat: ['Stats', B + 'entity-stats/stats'],
  stat_group: ['Stat Groups', B + 'entity-stats/stat-groups'],
  pool: ['Pool', B + 'entity-stats/pool'],
  item: ['Items', B + 'items/items'],
  currency: ['Currency', B + 'items/currency'],
  loot_table: ['Loot Tables', B + 'items/loot-tables'],
  recipe: ['Craft Recipes', B + 'items/craft-recipes'],
  craft_school: ['Craft Schools', B + 'items/craft-schools'],
  vendor: ['Vendors', B + 'items/vendors'],
  armor_class: ['Armor Class', B + 'equipment-definitions/armor-class'],
  weapon_class: ['Weapon Class', B + 'equipment-definitions/weapon-class'],
  equipment_type: ['Equipment Type', B + 'equipment-definitions/equipment-type'],
  weapon_type: ['Equipment Type', B + 'equipment-definitions/equipment-type'],
  equipment_slot: ['Equipment Slot', B + 'equipment-definitions/equipment-slot'],
  quality: ['Quality', B + 'equipment-definitions/quality'],
  set_bonus: ['Set Bonus', B + 'equipment-definitions/set-bonus'],
  socket: ['Socket', B + 'equipment-definitions/socket'],
  unique_entity: ['The Unique Object tool', B + 'world/unique-object-tool'],
  unique_interactable: ['The Unique Object tool', B + 'world/unique-object-tool'],
  unique_encounter: ['The Unique Object tool', B + 'world/unique-object-tool'],
  region: ['Regions', B + 'world/regions'],
  popup: ['Popups', B + 'events-and-quests/popups'],
}

const kebab = name => name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2').toLowerCase()

// the classes of the addon with their parent, to follow the chain up to DatabaseResource
function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p, out)
    else if (e.name.endsWith('.gd')) out.push(p)
  }
  return out
}
const classes = new Map()
for (const file of walk(ADDON)) {
  for (const l of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const m = l.match(/^class_name\s+(\w+)(?:\s+extends\s+(\w+))?/)
    if (m) { classes.set(m[1], { base: m[2] ?? 'RefCounted', file }); break }
  }
}
const isDatabaseResource = name => {
  for (let n = name, i = 0; n && i < 20; n = classes.get(n)?.base, i++) if (n === 'DatabaseResource') return true
  return false
}

// the dictionary REGISTRY of database.gd
const source = fs.readFileSync(path.join(ADDON, 'databases/database.gd'), 'utf8')
const registry = []
let section = ''
for (const line of source.slice(source.indexOf('static var REGISTRY')).split(/\r?\n/)) {
  if (/^\}/.test(line)) break
  const comment = line.match(/^\s*#\s*(.+)$/)
  if (comment) { section = comment[1].trim(); continue }
  const m = line.match(/"(\w+)":\s*\{\s*"path":\s*"([^"]+)",\s*"class":\s*(\w+)\s*\}/)
  if (m) registry.push({ type: m[1], folder: m[2], cls: m[3], section })
}
if (registry.length < 40) throw new Error('REGISTRY not read: ' + registry.length + ' types')

const rows = []
let lastSection = null
for (const r of registry) {
  if (r.section !== lastSection) {
    rows.push(`| **${r.section}** | | | |`)
    lastSection = r.section
  }
  const known = classes.has(r.cls)
  const editedIn = EDITED_IN[r.type]
  rows.push(`| \`${r.type}\` | \`${r.cls}\`${known && !isDatabaseResource(r.cls) ? ' (not a DatabaseResource!)' : ''} | \`${r.folder.replace(/^res:\/\//, '')}\` | ${editedIn ? `[${editedIn[0]}](${editedIn[1]})` : ''} |`)
}

const page = `${MARKER}

# Database types

The [Database](/advanced/data-and-database/database-classes/database) knows ${registry.length} types of resource. Each row says the **type name** you pass to the database (\`Database.get_resource("effect", id)\`), the **class** every resource of the type must be,
the **folder** its files are saved in (one \`<id>.tres\` file per resource) and the **editor tab** you make them in. Every class in the table extends [DatabaseResource](/advanced/data-and-database/database-classes/database-resource).

The rows are in the order of the REGISTRY, grouped like the editor's categories. The type \`enviroment\` is spelled that way in the code.

| Type | Class | Folder | Edited in |
|---|---|---|---|
${rows.join('\n')}

See [Data and the Database](/advanced/data-and-database/) for how the types are loaded, saved and referenced, and [Asset databases](/advanced/data-and-database/asset-databases) for the libraries of animations, audio, VFX, meshes, models and icons, which are not resources of this registry.
`
fs.mkdirSync(path.dirname(OUT), { recursive: true })
fs.writeFileSync(OUT, page)
console.log(registry.length, 'types written to', OUT)
