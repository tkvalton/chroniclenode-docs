// The whole page tree of the documentation. It is the one place that says which pages exist:
//  - config.mts builds the left menu from it (the same menu on every page, with the three sections in it),
//  - scripts/make-stubs.mjs creates a stub for every page that has no file yet,
//  - scripts/docs-links.mjs lists the pages of the editor tabs for the addon (DocsLinks.PAGES).
//
// An item is { text, link } for a page, or { text, items } for a group. `title` is the heading of a stub when it differs from `text`,
// and `view` is the name of the tab of the Database editor that the page belongs to (the "?" button opens it).

import { groups as abilitiesAndEffectsClasses } from './classes-abilities-and-effects.mjs'
import { groups as databaseClasses } from './classes-data-and-database.mjs'
import { groups as sharedClasses } from './classes-shared-systems.mjs'
import { groups as statClasses } from './classes-entity-stats.mjs'
import { groups as itemClasses } from './classes-items.mjs'
import { groups as equipmentClasses } from './classes-equipment-definitions.mjs'
import { groups as entityClasses } from './classes-entities.mjs'
import { groups as behaviorClasses } from './classes-behaviors.mjs'

const page = (text, link, extra = {}) => ({ text, link, ...extra })
const kebab = name => name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2').toLowerCase()

// A chapter of the basic guide: an overview, a page for each tab of its category, and anything extra
function system(text, slug, tabs, { before = [], after = [] } = {}) {
  return {
    text,
    collapsed: true,
    items: [
      page('Overview', `/basic/${slug}/`, { title: text }),
      ...before,
      ...tabs.map(([tabText, tabSlug, view]) => page(tabText, `/basic/${slug}/${tabSlug}`, { view })),
      ...after,
    ],
  }
}

const abilitiesAndEffects = {
  text: 'Abilities & Effects',
  collapsed: true,
  items: [
    page('Overview', '/basic/abilities-and-effects/', { title: 'Abilities & Effects' }),
    {
      text: 'Abilities',
      collapsed: true,
      items: [
        page('The Abilities editor', '/basic/abilities-and-effects/abilities', { view: 'abilities' }),
        page('Using an ability', '/basic/abilities-and-effects/using-an-ability'),
        page('Targeting', '/basic/abilities-and-effects/targeting'),
        page('Aiming', '/basic/abilities-and-effects/aiming'),
      ],
    },
    {
      text: 'Effects',
      collapsed: true,
      items: [
        page('The Effects editor', '/basic/abilities-and-effects/effects', { view: 'effects' }),
        page('Effect types', '/basic/abilities-and-effects/effect-types'),
        page('Status Effects', '/basic/abilities-and-effects/status-effects', { view: 'status_effects' }),
        page('Immunities', '/basic/abilities-and-effects/immunities', { view: 'immunities' }),
        page('Stacking and groups', '/basic/abilities-and-effects/stacking-and-groups'),
        page('The amount of an effect', '/basic/abilities-and-effects/effect-amount'),
        page('Scaling and trigger rules', '/basic/abilities-and-effects/scaling-and-trigger-rules'),
        page('Crowd control', '/basic/abilities-and-effects/crowd-control'),
        page('Child effects and auras', '/basic/abilities-and-effects/child-effects-and-auras'),
      ],
    },
    page('Skill Trees', '/basic/abilities-and-effects/skill-trees', { view: 'skill_trees' }),
    {
      text: 'Tutorials',
      collapsed: true,
      items: [
        page('About the tutorials', '/basic/abilities-and-effects/tutorials/'),
        page('1. A damage attack', '/basic/abilities-and-effects/tutorials/first-damage-attack'),
        page('2. A cost and a cooldown', '/basic/abilities-and-effects/tutorials/cost-and-cooldown'),
        page('3. Cast time and interrupts', '/basic/abilities-and-effects/tutorials/cast-time-and-interrupts'),
      ],
    },
  ],
}

const basicSystems = [
  system('World', 'world', [
    ['Worlds', 'worlds', 'maps'],
    ['World Configs', 'world-configs', 'world_configs'],
    ['Uniques', 'uniques', 'uniques'],
  ], {
    after: [
      {
        text: 'In the 3D viewport',
        collapsed: true,
        items: [
          page('Add Object', '/basic/world/add-object'),
          page('The Unique Object tool', '/basic/world/unique-object-tool'),
          page('Regions', '/basic/world/regions'),
          page('Encounters', '/basic/world/encounters'),
        ],
      },
    ],
  }),
  system('Events & Quests', 'events-and-quests', [
    ['Events', 'events', 'events'],
    ['Quests', 'quests', 'quests'],
    ['Quest Lines', 'quest-lines', 'questlines'],
    ['Global Variables', 'global-variables', 'global_variables'],
    ['Popups', 'popups', 'popups'],
  ]),
  system('Entities', 'entities', [
    ['Playable Character', 'playable-character', 'character_editor'],
    ['Player Classes', 'player-classes', 'player_classes'],
    ['NPCs', 'npcs', 'entities'],
    ['Interactables', 'interactables', 'interactables'],
  ]),
  abilitiesAndEffects,
  system('Behaviors', 'behaviors', [
    ['Factions', 'factions', 'factions'],
    ['Combat Scripts', 'combat-scripts', 'modular_combat_scripts'],
    ['Behavior Scripts', 'behavior-scripts', 'modular_behavior_scripts'],
    ['Conversations', 'conversations', 'conversations'],
  ]),
  system('Entity Stats', 'entity-stats', [
    ['Stats', 'stats', 'stats'],
    ['Pool', 'pool', 'pool_stats'],
    ['Calculations', 'calculations', 'calculations'],
    ['Proficiencies', 'proficiencies', 'proficiencies'],
    ['Trigger Tags', 'trigger-tags', 'trigger_tags'],
    ['Stat Groups', 'stat-groups', 'stat_groups'],
  ], {
    after: [page('Stat recipes', '/basic/entity-stats/stat-recipes')],
  }),
  system('Types & Groups', 'types-and-groups', [
    ['Damage Types', 'damage-types', 'damage_types'],
    ['School Types', 'school-types', 'school_types'],
    ['Entity Types', 'entity-types', 'entity_tags'],
    ['Groups', 'groups', 'groups'],
  ]),
  system('Items', 'items', [
    ['Items', 'items', 'items'],
    ['Currency', 'currency', 'currency'],
    ['Loot Tables', 'loot-tables', 'loot_tables'],
    ['Craft Recipes', 'craft-recipes', 'craft_recipes'],
    ['Craft Schools', 'craft-schools', 'craft_schools'],
    ['Vendors', 'vendors', 'vendors'],
  ]),
  system('Equipment Definitions', 'equipment-definitions', [
    ['Armor Class', 'armor-class', 'armor_class'],
    ['Weapon Class', 'weapon-class', 'weapon_class'],
    ['Equipment Type', 'equipment-type', 'equipment_type'],
    ['Equipment Slot', 'equipment-slot', 'equipment_slot'],
    ['Quality', 'quality', 'quality'],
    ['Set Bonus', 'set-bonus', 'set_bonus'],
    ['Socket', 'socket', 'socket'],
  ]),
  system('Assets', 'assets', [
    ['Model Scenes', 'model-scenes', 'skeletons'],
    ['Meshes', 'meshes', 'equipment'],
    ['Animations', 'animations', 'animations'],
    ['VFX', 'vfx', 'vfx'],
    ['Audio', 'audio', 'audio'],
    ['Albums', 'albums', 'albums'],
    ['Icons', 'icons', 'icons'],
  ]),
  system('Game Settings', 'game-settings', [
    ['Game Settings', 'settings', 'settings'],
    ['Gameplay Config', 'gameplay-config', 'gameplay_config'],
    ['Character Creation', 'character-creation', 'character_creation_config'],
    ['Collision Layers', 'collision-layers', 'collision_layers'],
    ['Controller & Camera', 'controller-and-camera', 'controller_camera'],
    ['UI Settings', 'ui-settings', 'ui_settings'],
    ['Localization', 'localization', 'localization'],
  ]),
]

const sharedSystems = {
  text: 'Shared systems',
  collapsed: true,
  items: [
    page('Overview', '/basic/shared-systems/', { title: 'Shared systems' }),
    page('Requirements', '/basic/shared-systems/requirements'),
    page('Conditions', '/basic/shared-systems/conditions'),
    page('Groups', '/basic/shared-systems/groups'),
    page('Rewards', '/basic/shared-systems/rewards'),
    page('Text tokens', '/basic/shared-systems/text-tokens'),
    page('Formulas', '/basic/shared-systems/formulas'),
  ],
}

// A system of the advanced section that has a page for each of its classes (the list is made by scripts/scan-classes.mjs)
function classSystem(text, slug, groups) {
  return {
    text,
    collapsed: true,
    items: [
      page('Overview', `/advanced/${slug}/`, { title: `${text}: how it is built` }),
      ...groups.map(group => ({
        text: group.text,
        collapsed: true,
        items: group.classes.map(c => page(c.name, `/advanced/${slug}/${group.slug}/${kebab(c.name)}`, { title: c.name })),
      })),
    ],
  }
}

// Puts hand-written pages after the overview of a class system
function withPages(group, pages) {
  return { ...group, items: [group.items[0], ...pages, ...group.items.slice(1)] }
}

// Data and the Database: the overview, the generated table of types, the asset libraries, and a page for each class
const dataAndDatabase = {
  text: 'Data and the Database',
  collapsed: true,
  items: [
    page('Overview', '/advanced/data-and-database/', { title: 'Data and the Database' }),
    page('Database types', '/advanced/data-and-database/database-types'),
    page('Asset databases', '/advanced/data-and-database/asset-databases'),
    ...databaseClasses.map(group => ({
      text: group.text,
      collapsed: true,
      items: group.classes.map(c => page(c.name, `/advanced/data-and-database/${group.slug}/${kebab(c.name)}`, { title: c.name })),
    })),
  ],
}

// Shared systems (advanced): a page for each system and a page for each of its classes
const sharedGroups = Object.fromEntries(sharedClasses.map(g => [g.slug, g]))
const sharedClassItems = group => group.classes.map(c => page(c.name, `/advanced/shared-systems/${group.slug}/${kebab(c.name)}`, { title: c.name }))
function sharedSystem(text, slug, groupSlugs) {
  const groups = groupSlugs.map(g => sharedGroups[g])
  return {
    text,
    collapsed: true,
    items: [
      page('How it is built', `/advanced/shared-systems/${slug}`, { title: `${text}: how it is built` }),
      ...(groups.length === 1
        ? sharedClassItems(groups[0])
        : groups.map(group => ({ text: group.text, collapsed: true, items: sharedClassItems(group) }))),
    ],
  }
}
const advancedShared = {
  text: 'Shared systems',
  collapsed: true,
  items: [
    page('Overview', '/advanced/shared-systems/', { title: 'Shared systems: how they are built' }),
    sharedSystem('Requirements', 'requirements', ['requirements']),
    sharedSystem('Conditions', 'conditions', ['condition-bases', 'entity-conditions', 'encounter-conditions', 'event-conditions', 'general-conditions']),
    sharedSystem('Rewards', 'rewards', ['rewards']),
    sharedSystem('Groups', 'groups', ['groups']),
    sharedSystem('Text tokens', 'text-tokens', ['text-tokens']),
    sharedSystem('Formulas', 'formulas', ['formulas', 'formula-support', 'diminishing-returns']),
  ],
}

// Entity Stats (advanced): the hand-written pages, then a page for each class
const advancedEntityStats = {
  text: 'Entity Stats',
  collapsed: true,
  items: [
    page('Overview', '/advanced/entity-stats/', { title: 'Entity Stats: how they are built' }),
    page('Stat effects', '/advanced/entity-stats/stat-effects', { title: 'Stat effects: how they work' }),
    page('The hit and heal pipeline', '/advanced/entity-stats/pipeline', { title: 'The hit and heal pipeline' }),
    page('Pools and damage layers', '/advanced/entity-stats/pools', { title: 'Pools and damage layers' }),
    page('Growth, core stats and gain channels', '/advanced/entity-stats/growth-and-core-stats', { title: 'Growth, core stats and gain channels' }),
    page('Trigger tags and stat groups', '/advanced/entity-stats/trigger-tags-and-stat-groups', { title: 'Trigger tags and stat groups: how they are built' }),
    page('Proficiencies', '/advanced/entity-stats/proficiencies', { title: 'Proficiencies: how they are built' }),
    ...statClasses.map(group => ({
      text: group.text,
      collapsed: true,
      items: group.classes.map(c => page(c.name, `/advanced/entity-stats/${group.slug}/${kebab(c.name)}`, { title: c.name })),
    })),
  ],
}

// World: the overview and the tools of the 3D viewport
const worldAdvanced = {
  text: 'World',
  collapsed: true,
  items: [
    page('Overview', '/advanced/world/', { title: 'World: how it is built' }),
    page('Add Object', '/advanced/world/add-object', { title: 'Add Object: how it is built' }),
    page('The Unique Object tool', '/advanced/world/unique-object-tool', { title: 'The Unique Object tool: how it is built' }),
    page('Regions', '/advanced/world/regions', { title: 'Regions: how they are built' }),
    page('Encounters', '/advanced/world/encounters', { title: 'Encounters: how they are built' }),
  ],
}

// The same systems in the advanced section: how they are built
const advancedSystems = [
  ['World', 'world'], ['Events & Quests', 'events-and-quests'], ['Entities', 'entities'], ['Abilities & Effects', 'abilities-and-effects'],
  ['Behaviors', 'behaviors'], ['Entity Stats', 'entity-stats'], ['Types & Groups', 'types-and-groups'], ['Items', 'items'],
  ['Equipment Definitions', 'equipment-definitions'], ['Assets', 'assets'], ['Game Settings', 'game-settings'],
].map(([text, slug]) => slug === 'abilities-and-effects'
  ? withPages(classSystem(text, slug, abilitiesAndEffectsClasses), [page('The effect amount', '/advanced/abilities-and-effects/effect-amount', { title: 'The effect amount: how it is built' }), page('Immunities', '/advanced/abilities-and-effects/immunities', { title: 'Immunities: how they are built' }), page('Skill trees', '/advanced/abilities-and-effects/skill-trees', { title: 'Skill trees: how they are built' })])
  : slug === 'world'
  ? worldAdvanced
  : slug === 'entity-stats'
  ? advancedEntityStats
  : slug === 'items'
  ? classSystem(text, slug, itemClasses)
  : slug === 'entities'
  ? classSystem(text, slug, entityClasses)
  : slug === 'behaviors'
  ? classSystem(text, slug, behaviorClasses)
  : slug === 'equipment-definitions'
  ? classSystem(text, slug, equipmentClasses)
  : page(text, `/advanced/${slug}/`, { title: `${text}: how it is built` }))

export const sidebar = [
  {
    text: 'General',
    collapsed: true,
    items: [
      page('Introduction', '/general/'),
      page('Using the template project', '/general/template'),
      page('Adding the addon to your project', '/general/adding-the-addon'),
      page('The editor at a glance', '/general/editor-tour'),
      page('Troubleshooting', '/general/troubleshooting'),
    ],
  },
  {
    text: 'Basic',
    collapsed: true,
    items: [
      page('About the basic guide', '/basic/', { title: 'Basic' }),
      page('Keywords', '/basic/keywords'),
      page('The Database', '/basic/database'),
      sharedSystems,
      { text: 'Systems', collapsed: false, items: basicSystems },
    ],
  },
  {
    text: 'Advanced',
    collapsed: true,
    items: [
      page('About the advanced section', '/advanced/', { title: 'Advanced' }),
      page('Architecture', '/advanced/architecture'),
      page('Definitions and instances', '/advanced/definitions-and-instances', { title: 'Definitions and instances' }),
      page('Pooling', '/advanced/pooling', { title: 'Pooling' }),
      page('The game host and managers', '/advanced/game-host'),
      dataAndDatabase,
      page('Save and load', '/advanced/save-and-load'),
      page('Extending the toolkit', '/advanced/extending'),
      advancedShared,
      { text: 'Systems', collapsed: true, items: advancedSystems },
    ],
  },
]

// Every page with its link, for the scripts
export function allPages(items = sidebar) {
  const pages = []
  for (const item of items) {
    if (item.link) pages.push(item)
    if (item.items) pages.push(...allPages(item.items))
  }
  return pages
}
