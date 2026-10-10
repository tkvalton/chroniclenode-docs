// Scans the addon for the classes of a system and writes docs/.vitepress/classes-<system>.mjs (the list the advanced sidebar is built from),
// then creates a stub page for every class that has none yet.
//
//   npm run classes                       (the addon is read from CHRONICLENODE_ADDON, by default the project next to this repository)
//
// Only abilities and effects so far: add a system to SYSTEMS to do the next one.
import fs from 'node:fs'
import path from 'node:path'
import { parseClass, renderClass, briefOf, MARKER } from './gdscript-doc.mjs'

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
      { text: 'Effects: amount', slug: 'effects-amount', dirs: [['data_classes/effects/amount', true]] },
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
      { text: 'Skill trees', slug: 'skill-trees', dirs: [['data_classes/skill_tree', false], ['runtime_classes/player/skill_tree', true]] },
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
  'shared-systems': {
    title: 'Shared systems',
    groups: [
      { text: 'Requirements', slug: 'requirements', dirs: [['data_classes/requirements', true], ['runtime_classes/utility/requirement_checker.gd', false]] },
      { text: 'Rewards', slug: 'rewards', dirs: [['data_classes/rewards', true]] },
      { text: 'Conditions: base classes', slug: 'condition-bases', dirs: [['data_classes/conditions', false]] },
      { text: 'Conditions: entity', slug: 'entity-conditions', dirs: [['data_classes/conditions/entity', true]] },
      { text: 'Conditions: encounter', slug: 'encounter-conditions', dirs: [['data_classes/conditions/encounter', true]] },
      { text: 'Conditions: events', slug: 'event-conditions', dirs: [['data_classes/conditions/event', true]] },
      { text: 'Conditions: general', slug: 'general-conditions', dirs: [['data_classes/conditions/general', true]] },
      { text: 'Groups', slug: 'groups', dirs: [['data_classes/groups', true]] },
      { text: 'Text tokens', slug: 'text-tokens', dirs: [['runtime_classes/utility/text_tokens.gd', false], ['runtime_classes/utility/effect_text_util.gd', false]] },
      {
        text: 'Formulas',
        slug: 'formulas',
        dirs: [
          ['data_classes/stats/formulas/calculation_formula.gd', false],
          ['data_classes/stats/formulas/linear_calculation_formula.gd', false],
          ['data_classes/stats/formulas/hyperbolic_calculation_formula.gd', false],
          ['data_classes/stats/formulas/flat_calculation_formula.gd', false],
        ],
      },
      {
        text: 'Pipeline, context and level scaling',
        slug: 'formula-support',
        dirs: [
          ['data_classes/stats/formulas/formula_pipeline.gd', false],
          ['data_classes/stats/formula_context.gd', false],
          ['data_classes/stats/formulas/level_scaling.gd', false],
        ],
      },
      { text: 'Diminishing returns', slug: 'diminishing-returns', dirs: [['data_classes/stats/diminishing_returns', true]] },
    ],
  },
  'items': {
    title: 'Items',
    groups: [
      { text: 'Item definitions', slug: 'item-definitions', dirs: [['data_classes/items', false]] },
      { text: 'Affixes', slug: 'affixes', dirs: [['data_classes/items/affixes', true]] },
      { text: 'Generation and loot (runtime)', slug: 'generation-runtime', dirs: [['runtime_classes/utility/item_generator.gd', false], ['runtime_classes/utility/loot_level.gd', false], ['runtime_classes/utility/loot_dispatcher.gd', false]] },
      { text: 'Currency', slug: 'currency', dirs: [['data_classes/items/definitions/currency_definition.gd', false]] },
      { text: 'Crafting', slug: 'crafting', dirs: [['data_classes/crafting', true], ['runtime_classes/player/crafting', true], ['runtime_classes/player/crafting_manager.gd', false]] },
      { text: 'Vendors', slug: 'vendors', dirs: [['data_classes/vendor', true]] },
      { text: 'Inventory and equipment (runtime)', slug: 'runtime', dirs: [['runtime_classes/entity/components/inventory', true]] },
    ],
  },
  'equipment-definitions': {
    title: 'Equipment Definitions',
    groups: [
      {
        text: 'Definitions',
        slug: 'definitions',
        dirs: [
          ['data_classes/items/definitions/armor_class_definition.gd', false],
          ['data_classes/items/definitions/equipment_slot_definition.gd', false],
          ['data_classes/items/definitions/equipment_type_definition.gd', false],
          ['data_classes/items/definitions/quality_definition.gd', false],
          ['data_classes/items/definitions/quality_rule.gd', false],
          ['data_classes/items/definitions/set_bonus_definition.gd', false],
          ['data_classes/items/definitions/socketable_slot_definition.gd', false],
          ['data_classes/items/definitions/weapon_class_definition.gd', false],
          ['data_classes/items/definitions/weapon_type_definition.gd', false],
        ],
      },
    ],
  },
  'world': {
    title: 'World',
    groups: [
      {
        text: 'World data',
        slug: 'world-data',
        dirs: [
          ['data_classes/world/world_data.gd', false],
          ['data_classes/world/unique_entity_data.gd', false],
          ['data_classes/world/unique_interactable_data.gd', false],
          ['data_classes/world/unique_encounter_data.gd', false],
          ['data_classes/world/region_data.gd', false],
        ],
      },
      { text: 'World configs', slug: 'world-configs', dirs: [['data_classes/world/configs', true]] },
      { text: 'Encounters', slug: 'encounters', dirs: [['data_classes/encounters', true]] },
      {
        text: 'Runtime',
        slug: 'runtime',
        dirs: [
          ['runtime_classes/world/world_container.gd', false],
          ['runtime_classes/world/world_scene.gd', false],
          ['runtime_classes/world/object_registery.gd', false],
          ['runtime_classes/world/region.gd', false],
          ['runtime_classes/world/encounter.gd', false],
          ['runtime_classes/world/weather_system.gd', false],
          ['runtime_classes/world/world_sun.gd', false],
          ['runtime_classes/world/world_sky_envrioment.gd', false],
          ['runtime_classes/world/fog', true],
        ],
      },
      {
        text: 'Editor tools',
        slug: 'editor-tools',
        dirs: [
          ['editor_components/3d_scene_tools/add_object_toolbar_manager.gd', false],
          ['editor_components/3d_scene_tools/unique_object_inspector.gd', false],
          ['editor_components/3d_scene_tools/encounter_reaction_editor.gd', false],
        ],
      },
    ],
  },
  'events-and-quests': {
    title: 'Events & Quests',
    groups: [
      {
        text: 'Events, quests and variables',
        slug: 'events',
        dirs: [
          ['data_classes/events/event.gd', false],
          ['data_classes/events/quest.gd', false],
          ['data_classes/events/quest_line.gd', false],
          ['data_classes/events/event_triggers/quest_objective.gd', false],
          ['data_classes/variables', false],
        ],
      },
      { text: 'Trigger and action base classes', slug: 'bases', dirs: [['data_classes/events/event_triggers', false], ['data_classes/events/event_actions', false]] },
      { text: 'Triggers: encounter', slug: 'triggers-encounter', dirs: [['data_classes/events/event_triggers/encounter', true]] },
      { text: 'Triggers: entity', slug: 'triggers-entity', dirs: [['data_classes/events/event_triggers/entity', true]] },
      { text: 'Triggers: faction', slug: 'triggers-faction', dirs: [['data_classes/events/event_triggers/faction', true]] },
      { text: 'Triggers: input', slug: 'triggers-input', dirs: [['data_classes/events/event_triggers/input', true]] },
      { text: 'Triggers: interactable object', slug: 'triggers-interactable-object', dirs: [['data_classes/events/event_triggers/interactable_object', true]] },
      { text: 'Triggers: item', slug: 'triggers-item', dirs: [['data_classes/events/event_triggers/item', true]] },
      { text: 'Triggers: party', slug: 'triggers-party', dirs: [['data_classes/events/event_triggers/party', true]] },
      { text: 'Triggers: player', slug: 'triggers-player', dirs: [['data_classes/events/event_triggers/player', true]] },
      { text: 'Triggers: quest', slug: 'triggers-quest', dirs: [['data_classes/events/event_triggers/quest', true]] },
      { text: 'Triggers: region', slug: 'triggers-region', dirs: [['data_classes/events/event_triggers/region', true]] },
      { text: 'Triggers: time', slug: 'triggers-time', dirs: [['data_classes/events/event_triggers/time', true]] },
      { text: 'Triggers: user interface', slug: 'triggers-user-interface', dirs: [['data_classes/events/event_triggers/user_interface', true]] },
      { text: 'Triggers: variable', slug: 'triggers-variable', dirs: [['data_classes/events/event_triggers/variable', true]] },
      { text: 'Actions: audio', slug: 'actions-audio', dirs: [['data_classes/events/event_actions/audio', true]] },
      { text: 'Actions: encounter', slug: 'actions-encounter', dirs: [['data_classes/events/event_actions/encounter', true]] },
      { text: 'Actions: entity', slug: 'actions-entity', dirs: [['data_classes/events/event_actions/entity', true]] },
      { text: 'Actions: environment', slug: 'actions-environment', dirs: [['data_classes/events/event_actions/enviromental', true]] },
      { text: 'Actions: general', slug: 'actions-general', dirs: [['data_classes/events/event_actions/general', true]] },
      { text: 'Actions: interactable objects', slug: 'actions-interactable-objects', dirs: [['data_classes/events/event_actions/interactable_objects', true]] },
      { text: 'Actions: interactions', slug: 'actions-interactions', dirs: [['data_classes/events/event_actions/interactions', true]] },
      { text: 'Actions: party', slug: 'actions-party', dirs: [['data_classes/events/event_actions/party', true]] },
      { text: 'Actions: player', slug: 'actions-player', dirs: [['data_classes/events/event_actions/player', true]] },
      { text: 'Actions: quest', slug: 'actions-quest', dirs: [['data_classes/events/event_actions/quest', true]] },
      { text: 'Actions: time', slug: 'actions-time', dirs: [['data_classes/events/event_actions/time', true]] },
      { text: 'Actions: user interface', slug: 'actions-user-interface', dirs: [['data_classes/events/event_actions/user_interface', true]] },
      { text: 'Actions: variable', slug: 'actions-variable', dirs: [['data_classes/events/event_actions/variable', true]] },
      {
        text: 'Popups',
        slug: 'popups',
        dirs: [['data_classes/popups', false], ['runtime_classes/system_managers/popup_manager.gd', false]],
      },
      { text: 'Runtime', slug: 'runtime', dirs: [['runtime_classes/system_managers/event_manager.gd', false]] },
    ],
  },
  'entities': {
    title: 'Entities',
    groups: [
      { text: 'Definitions', slug: 'definitions', dirs: [['data_classes/entity', false]] },
      { text: 'Interactions', slug: 'interactions', dirs: [['data_classes/interactions', true]] },
      {
        text: 'Entities (runtime)',
        slug: 'runtime',
        dirs: [
          ['runtime_classes/entity/entity.gd', false],
          ['runtime_classes/entity/player.gd', false],
          ['runtime_classes/entity/npc.gd', false],
          ['runtime_classes/entity/npc_levels.gd', false],
          ['runtime_classes/entity/pet.gd', false],
          ['runtime_classes/entity/interactable_object.gd', false],
          ['runtime_classes/entity/components/entity_component_registry.gd', false],
          ['runtime_classes/entity/components/entity_component_mediator.gd', false],
          ['runtime_classes/entity/components/pet_manager_component.gd', false],
          ['runtime_classes/entity/components/dynamic_follower_system.gd', false],
          ['runtime_classes/player/party_manager.gd', false],
          ['runtime_classes/player/formation_system.gd', false],
        ],
      },
    ],
  },
  'behaviors': {
    title: 'Behaviors',
    groups: [
      { text: 'Factions', slug: 'factions', dirs: [['data_classes/factions', false]] },
      { text: 'Behavior scripts', slug: 'behavior-scripts', dirs: [['data_classes/entity/behavior_states/modular_behavior_script.gd', false], ['data_classes/entity/behavior_states/behavior_reaction.gd', false], ['data_classes/entity/behavior_states/schedules', true]] },
      { text: 'Behavior tasks', slug: 'tasks', dirs: [['data_classes/entity/behavior_states/tasks', true]] },
      { text: 'Combat scripts', slug: 'combat-scripts', dirs: [['data_classes/entity/behavior_states/modular_combat_script.gd', false], ['data_classes/entity/behavior_states/combat_reaction.gd', false], ['data_classes/entity/behavior_states/attack_state_logic', true], ['data_classes/entity/behavior_states/phase_system', true]] },
      { text: 'Combat actions', slug: 'combat-actions', dirs: [['data_classes/entity/behavior_states/combat_actions', true]] },
      { text: 'Conversations', slug: 'conversations', dirs: [['data_classes/conversation', true], ['runtime_classes/conversation', true]] },
      { text: 'States (runtime)', slug: 'states', dirs: [['runtime_classes/entity/components/states', true]] },
    ],
  },
  'entity-stats': {
    title: 'Entity Stats',
    groups: [
      {
        text: 'Stats and pools',
        slug: 'stats-and-pools',
        dirs: [
          ['data_classes/stats/definitions/stat_definition.gd', false],
          ['data_classes/stats/definitions/pool_stat_definition.gd', false],
          ['data_classes/stats/stats_data.gd', false],
          ['data_classes/stats/growth_override.gd', false],
          ['data_classes/stats/growth_profile.gd', false],
          ['data_classes/stats/core_stat_defaults.gd', false],
          ['data_classes/stats/gain_channels.gd', false],
          ['data_classes/stats/stat_condition_context.gd', false],
          ['runtime_classes/utility/stat_group_utility.gd', false],
        ],
      },
      { text: 'Stat effects', slug: 'stat-effects', dirs: [['data_classes/stats/definitions/stat_effect', true]] },
      {
        text: 'Calculations',
        slug: 'calculations',
        dirs: [['data_classes/stats/combat_calculations.gd', false], ['data_classes/stats/calculations', true]],
      },
      {
        text: 'Trigger tags and rules',
        slug: 'triggers',
        dirs: [
          ['data_classes/stats/definitions/trigger_tag_definition.gd', false],
          ['data_classes/stats/trigger_rules', true],
          ['runtime_classes/combat/trigger_record.gd', false],
          ['runtime_classes/combat/modifier_step.gd', false],
        ],
      },
      {
        text: 'Definitions',
        slug: 'definitions',
        dirs: [
          ['data_classes/stats/definitions/damage_type_definition.gd', false],
          ['data_classes/stats/definitions/school_type_definition.gd', false],
          ['data_classes/stats/definitions/entity_tag_definition.gd', false],
          ['data_classes/stats/definitions/immunity_definition.gd', false],
          ['data_classes/stats/definitions/stat_group_definition.gd', false],
          ['data_classes/stats/definitions/proficiency_definition.gd', false],
          ['data_classes/stats/definitions/status_effect_definition.gd', false],
        ],
      },
      {
        text: 'The combat pipeline',
        slug: 'combat',
        dirs: [
          ['runtime_classes/combat/damage_result.gd', false],
          ['runtime_classes/combat/healing_result.gd', false],
          ['runtime_classes/combat/combat_options.gd', false],
          ['runtime_classes/combat/hit_rules.gd', false],
          ['runtime_classes/combat/combat_reactions.gd', false],
          ['runtime_classes/combat/combat_manager.gd', false],
        ],
      },
      { text: 'Runtime', slug: 'runtime', dirs: [['runtime_classes/entity/components/stats', false]] },
    ],
  },
  'game-settings': {
    title: 'Game Settings',
    groups: [
      { text: 'Configuration', slug: 'config', dirs: [['data_classes/settings', false], ['editor_settings.gd', false]] },
      { text: 'Settings (runtime)', slug: 'settings-runtime', dirs: [['runtime_classes/settings', true]] },
      {
        text: 'Camera, controller and input',
        slug: 'camera-and-controller',
        dirs: [
          ['data_classes/controller_logic', true],
          ['runtime_classes/player/camera', true],
          ['runtime_classes/player/controller', true],
          ['runtime_classes/system_managers/input_manager.gd', false],
          ['runtime_classes/utility/look_binding.gd', false],
          ['runtime_classes/utility/look_gesture_tracker.gd', false],
          ['runtime_classes/utility/facing_math.gd', false],
          ['runtime_classes/utility/mouse_utility.gd', false],
          ['runtime_classes/entity/aim_provider.gd', false],
          ['runtime_classes/entity/camera_aim_provider.gd', false],
        ],
      },
      { text: 'Collision', slug: 'collision', dirs: [['runtime_classes/utility/collision_layer_utility.gd', false], ['runtime_classes/utility/weapon_collision_utility.gd', false], ['runtime_classes/utility/line_of_sight_utility.gd', false]] },
      { text: 'Helpers', slug: 'helpers', dirs: [['runtime_classes/utility/property_category_util.gd', false], ['runtime_classes/utility/audio_bus_utility.gd', false]] },
    ],
  },
  'assets': {
    title: 'Assets',
    groups: [
      { text: 'Selections: animation', slug: 'selections-animation', dirs: [['data_classes/selections/animation', true]] },
      { text: 'Selections: sound effects', slug: 'selections-sfx', dirs: [['data_classes/selections/sfx', true]] },
      { text: 'Selections: VFX', slug: 'selections-vfx', dirs: [['data_classes/selections/vfx', true]] },
      { text: 'Albums and animation map', slug: 'albums', dirs: [['data_classes/albums', true], ['data_classes/entity/animations', true]] },
      { text: 'VFX (runtime)', slug: 'vfx', dirs: [['runtime_classes/vfx', true]] },
      { text: 'Rig and bodies', slug: 'rig', dirs: [['runtime_classes/entity/components/rig', true], ['runtime_classes/entity/components/audio_component.gd', false], ['runtime_classes/entity/components/animation_resolver.gd', false], ['runtime_classes/utility/extended_skin_service.gd', false]] },
    ],
  },
  'managers': {
    title: 'Managers',
    groups: [
      { text: 'Game host', slug: 'game-host', dirs: [['runtime_classes/main/game_host.gd', false], ['runtime_classes/system_managers/transition_manager.gd', false], ['runtime_classes/system_managers/ui_manager.gd', false], ['runtime_classes/utility/debug_menu_factory.gd', false]] },
      { text: 'Managers', slug: 'managers', dirs: [['runtime_classes/system_managers', false]] },
      { text: 'Save and load', slug: 'save-and-load', dirs: [['runtime_classes/utility/save_load_util.gd', false]] },
      { text: 'Utilities', slug: 'utilities', dirs: [['runtime_classes/utility', false]] },
      { text: 'Combat sessions', slug: 'combat', dirs: [['runtime_classes/combat', false]] },
      { text: 'Cutscenes', slug: 'cutscenes', dirs: [['runtime_classes/cutscenes', true]] },
    ],
  },
  'editor': {
    title: 'Editor',
    groups: [
      { text: 'Editor base', slug: 'base', dirs: [['editor_components/editors/resource_editor.gd', false], ['editor_components/editors/editor_files_list.gd', false], ['editor_components/main', false], ['plugin.gd', false]] },
      { text: 'Ability and effect editors', slug: 'abilities', dirs: [['editor_components/editors/abilities', true]] },
      { text: 'Asset editors', slug: 'assets', dirs: [['editor_components/editors/assets', true]] },
      { text: 'Behavior editors', slug: 'behavior', dirs: [['editor_components/editors/behavior', true]] },
      { text: 'Entity editors', slug: 'entities', dirs: [['editor_components/editors/entities', true], ['editor_components/editors/interactions', true]] },
      { text: 'Equipment definition editors', slug: 'equipment-definitions', dirs: [['editor_components/editors/equipment_definitions', true]] },
      { text: 'Event and quest editors', slug: 'events', dirs: [['editor_components/editors/events', true]] },
      { text: 'Item editors', slug: 'items', dirs: [['editor_components/editors/items', true]] },
      { text: 'Settings editors', slug: 'settings', dirs: [['editor_components/editors/settings', true]] },
      { text: 'Stat editors', slug: 'stats', dirs: [['editor_components/editors/stats', true]] },
      { text: 'World editors', slug: 'world', dirs: [['editor_components/editors/world', true]] },
      { text: 'Viewport tools', slug: 'viewport-tools', dirs: [['editor_components/3d_scene_tools', false], ['editor_components/inspector_plugins', false]] },
      { text: 'Catalogs', slug: 'catalogs', dirs: [['editor_components/catalogs', true]] },
      { text: 'Dialogs', slug: 'dialogs', dirs: [['editor_components/dialogs', true]] },
      { text: 'Property controls', slug: 'factory', dirs: [['editor_components/factory', true], ['editor_components/curve_editor', true]] },
      { text: 'Managers and utilities', slug: 'tools', dirs: [['editor_components/managers', true], ['editor_components/utility', true]] },
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
    if (m) return { name: m[1], base: m[2] ?? 'RefCounted', path: file }
  }
  return null
}

let written = 0
let skipped = 0

// every class of the addon, to follow the inheritance chain
const all = new Map()
for (const file of gdFiles('.', true)) {
  const c = classOf(file)
  if (c) all.set(c.name, c)
}

// the comment of a function in the nearest ancestor that has the function (null when none has it)
const parsedClasses = new Map()
const methodDoc = (className, methodName) => {
  for (let name = className, i = 0; name && all.has(name) && i < 20; name = all.get(name).base, i++) {
    if (!parsedClasses.has(name)) parsedClasses.set(name, parseClass(all.get(name).path))
    const found = parsedClasses.get(name)?.methods.find(m => m.name === methodName)
    if (found) return { doc: found.doc, owner: name }
  }
  return null
}

// first pass: the classes of every system, and the page of each class (a class can link to the page of a class of another system)
const built = {}
const pages = new Map()
for (const [slug, system] of Object.entries(SYSTEMS)) {
  const out = []
  const seen = new Set()
  for (const group of system.groups) {
    const classes = []
    for (const [dir, recursive] of group.dirs) {
      for (const file of gdFiles(dir, recursive)) {
        const c = classOf(file)
        if (!c || seen.has(c.name) || pages.has(c.name)) continue
        seen.add(c.name)
        classes.push({ ...c, file: path.relative(ADDON, file).split(path.sep).join('/') })
      }
    }
    classes.sort((a, b) => a.name.localeCompare(b.name))
    out.push({ text: group.text, slug: group.slug, classes })
  }
  built[slug] = out
  for (const group of out) for (const c of group.classes) if (!pages.has(c.name)) pages.set(c.name, `/advanced/${slug}/${group.slug}/${kebab(c.name)}`)
  fs.writeFileSync(
    `docs/.vitepress/classes-${slug}.mjs`,
    `// Written by scripts/scan-classes.mjs from the addon: the classes of the ${system.title} system.
export const groups = ${JSON.stringify(out, null, 2)}
`,
  )
}

// second pass: the page of every class
const stub = name => `# ${name}

::: warning Work in progress
This page is being written.
:::
`
const briefs = new Map() // class name -> the first line of its description
for (const [slug, out] of Object.entries(built)) {
  for (const group of out) {
    for (const c of group.classes) {
      const file = `docs/advanced/${slug}/${group.slug}/${kebab(c.name)}.md`
      const info = parseClass(path.join(ADDON, c.file))
      briefs.set(c.name, info ? briefOf(info) : '')
      // a page written by hand is never touched: only a stub or a generated page is written again
      if (fs.existsSync(file)) {
        const current = fs.readFileSync(file, 'utf8')
        if (!current.includes(MARKER) && current !== stub(c.name)) { skipped++; continue }
      }
      fs.mkdirSync(path.dirname(file), { recursive: true })
      fs.writeFileSync(file, info ? renderClass(info, { all, pages, methodDoc }) : stub(c.name))
      written++
    }
  }
  console.log(slug, out.map(g => `${g.text}: ${g.classes.length}`).join(', '))
}
console.log(written, 'class pages written,', skipped, 'written by hand and left alone')

// third pass: the class tables. A page holds <!-- classes:system/group --> and <!-- /classes -->, and what is between them is the table of the classes of that group
function mdFiles(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) { if (e.name !== '.vitepress' && e.name !== 'public') mdFiles(p, out) }
    else if (e.name.endsWith('.md')) out.push(p)
  }
  return out
}
let tables = 0
for (const file of mdFiles('docs')) {
  const text = fs.readFileSync(file, 'utf8')
  if (!text.includes('<!-- classes:')) continue
  const next = text.replace(/<!-- classes:([\w-]+)\/([\w-]+) -->[\s\S]*?<!-- \/classes -->/g, (_, system, groupSlug) => {
    const group = (built[system] ?? []).find(g => g.slug === groupSlug)
    if (!group) throw new Error(`${file}: no class group ${system}/${groupSlug}`)
    const rows = group.classes.map(c => `| [${c.name}](/advanced/${system}/${group.slug}/${kebab(c.name)}) | ${briefs.get(c.name) ?? ''} |`)
    tables++
    return `<!-- classes:${system}/${groupSlug} -->\n| Class | What it is |\n|---|---|\n${rows.join('\n')}\n<!-- /classes -->`
  })
  if (next !== text) fs.writeFileSync(file, next)
}
console.log(tables, 'class tables filled in')
