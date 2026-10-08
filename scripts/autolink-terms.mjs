// The words and systems that scripts/autolink.mjs links, and the page each one links to. Add a line to link a new one.
//   pattern  a regular expression for the words (case does not matter, the text keeps its own case)
//   url      the page, or the page and the heading, it links to
// Only the first mention on a page is linked, and never on the page it links to. Keywords come first, then the systems.
const k = anchor => `/basic/keywords#${anchor}`
const b = path => `/basic/${path}`

export const TERMS = [
  // keywords
  { pattern: 'global cooldown', url: k('global-cooldown') },
  { pattern: 'cooldowns?', url: k('cooldown') },
  { pattern: 'threat', url: k('threat') },
  { pattern: 'stacks?', url: k('stacks') },
  { pattern: 'originator', url: k('originator-and-target') },

  // the pages of the Abilities & Effects chapter
  { pattern: 'effect types?', url: b('abilities-and-effects/effect-types') },
  { pattern: 'abilities editor', url: b('abilities-and-effects/abilities') },
  { pattern: 'effects editor', url: b('abilities-and-effects/effects') },
  { pattern: 'child effects?', url: b('abilities-and-effects/child-effects-and-auras') },
  { pattern: 'scaling rules?', url: b('abilities-and-effects/scaling-and-trigger-rules') },
  { pattern: 'crowd control', url: b('abilities-and-effects/crowd-control') },
  { pattern: 'skill trees?', url: b('abilities-and-effects/skill-trees') },

  // the other systems
  { pattern: 'entity stats', url: b('entity-stats/') },
  { pattern: 'status effects?', url: b('entity-stats/status-effects') },
  { pattern: 'calculations', url: b('entity-stats/calculations') },
  { pattern: 'trigger tags?', url: b('tags-and-groups/trigger-tags') },
  { pattern: 'damage types?', url: b('tags-and-groups/damage-types') },
  { pattern: 'school types?', url: b('tags-and-groups/school-types') },
  { pattern: 'entity tags?', url: b('tags-and-groups/entity-tags') },
  { pattern: 'stat groups?', url: b('tags-and-groups/stat-groups') },
  { pattern: 'immunit(?:y|ies)', url: b('tags-and-groups/immunities') },
  { pattern: 'requirements?', url: b('shared-systems/requirements') },
  { pattern: 'rewards?', url: b('shared-systems/rewards') },
  { pattern: 'text tokens?', url: b('shared-systems/text-tokens') },
  { pattern: 'factions?', url: b('behaviors/factions') },
  { pattern: 'player classes', url: b('entities/player-classes') },
  { pattern: 'quests?', url: b('events-and-quests/quests') },
  { pattern: 'loot tables?', url: b('items/loot-tables') },
  { pattern: 'gameplay config', url: b('game-settings/gameplay-config') },
  { pattern: 'collision layers?', url: b('game-settings/collision-layers') },
]
