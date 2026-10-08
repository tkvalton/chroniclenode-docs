// The whole page tree of the documentation. It is the one place that says which pages exist:
//  - config.mts builds the left menu from it (the same menu on every page, with the three sections in it),
//  - scripts/make-stubs.mjs creates a stub for every page that has no file yet,
//  - scripts/docs-links.mjs lists the pages of the editor tabs for the addon (DocsLinks.PAGES).
//
// An item is { text, link } for a page, or { text, items } for a group. `title` is the heading of a stub when it differs from `text`,
// and `view` is the name of the tab of the Database editor that the page belongs to (the "?" button opens it).

const page = (text, link, extra = {}) => ({ text, link, ...extra })

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
        page('Stacking and groups', '/basic/abilities-and-effects/stacking-and-groups'),
        page('Scaling and trigger rules', '/basic/abilities-and-effects/scaling-and-trigger-rules'),
        page('Crowd control', '/basic/abilities-and-effects/crowd-control'),
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
  ]),
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
    ['Status Effects', 'status-effects', 'status_effects'],
    ['Calculations', 'calculations', 'calculations'],
  ]),
  system('Tags & Groups', 'tags-and-groups', [
    ['Damage Types', 'damage-types', 'damage_types'],
    ['School Types', 'school-types', 'school_types'],
    ['Trigger Tags', 'trigger-tags', 'trigger_tags'],
    ['Entity Tags', 'entity-tags', 'entity_tags'],
    ['Groups', 'groups', 'groups'],
    ['Stat Groups', 'stat-groups', 'stat_groups'],
    ['Immunities', 'immunities', 'immunities'],
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
    page('Groups', '/basic/shared-systems/groups'),
    page('Rewards', '/basic/shared-systems/rewards'),
    page('Text tokens', '/basic/shared-systems/text-tokens'),
    page('Formulas', '/basic/shared-systems/formulas'),
  ],
}

// The same systems in the advanced section: how they are built
const advancedSystems = [
  ['World', 'world'], ['Events & Quests', 'events-and-quests'], ['Entities', 'entities'], ['Abilities & Effects', 'abilities-and-effects'],
  ['Behaviors', 'behaviors'], ['Entity Stats', 'entity-stats'], ['Tags & Groups', 'tags-and-groups'], ['Items', 'items'],
  ['Equipment Definitions', 'equipment-definitions'], ['Assets', 'assets'], ['Game Settings', 'game-settings'],
].map(([text, slug]) => page(text, `/advanced/${slug}/`, { title: `${text}: how it is built` }))

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
      page('The game host and managers', '/advanced/game-host'),
      page('Data and the Database', '/advanced/data-and-database'),
      page('Save and load', '/advanced/save-and-load'),
      page('Extending the toolkit', '/advanced/extending'),
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
