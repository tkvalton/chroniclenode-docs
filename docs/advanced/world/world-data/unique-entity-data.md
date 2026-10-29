<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# UniqueEntityData

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A placed NPC: what the world keeps about one NPC in one world. It holds the id of the definition, the world, the position and rotation, the spawn settings (active at the start, delay, respawn, despawn), and the overrides of this NPC (level, model scale, faction, experience, scripts, loot, stats, interaction). The `get_effective_*` functions answer with the override when there is one and with the value of the definition otherwise.

## Properties

| | | |
|---|---|---|
| `int` | [definition_id](#prop-definition-id) | `0` |
| `int` | [map_id](#prop-map-id) | `0` |
| `bool` | [is_active](#prop-is-active) | `true` |
| `float` | [spawn_delay](#prop-spawn-delay) | `0.0` |
| `float` | [respawn_timer](#prop-respawn-timer) | `0.0` |
| `bool` | [is_unique_encounter](#prop-is-unique-encounter) | `false` |
| `bool` | [despawn_on_death](#prop-despawn-on-death) | `true` |
| `int` | [encounter_id](#prop-encounter-id) | `0` |
| `int` | [level_override](#prop-level-override) | `0` |
| `Vector3` | [model_scale_override](#prop-model-scale-override) | `Vector3.ZERO` |
| `int` | [faction_id](#prop-faction-id) | `0` |
| `int` | [experience_worth_override](#prop-experience-worth-override) | `0` |
| `Array[int]` | [added_ui_tags](#prop-added-ui-tags) | `[]` |
| `Array[int]` | [removed_ui_tags](#prop-removed-ui-tags) | `[]` |
| `float` | [experience_multiplier](#prop-experience-multiplier) | `1.0` |
| `int` | [behavior_script_id](#prop-behavior-script-id) | `0` |
| `int` | [combat_script_id](#prop-combat-script-id) | `0` |
| `Array[LootRule]` | [loot_rules_override](#prop-loot-rules-override) | `[]` |
| `int` | [loot_table_override](#prop-loot-table-override) | `0` |
| `Dictionary` | [inventory_override](#prop-inventory-override) |  |
| `StatsData` | [stats_override](#prop-stats-override) |  |
| `TemplateBaseline` | [template_baseline](#prop-template-baseline) |  |
| `Array[int]` | [template_fixed_stats](#prop-template-fixed-stats) | `[]` |
| `Interaction` | [interaction](#prop-interaction) | `null` |
| `Vector3` | [world_position](#prop-world-position) | `Vector3.ZERO` |
| `Vector3` | [world_rotation](#prop-world-rotation) | `Vector3.ZERO` |
| `Vector3` | [facing_direction](#prop-facing-direction) | `Vector3.FORWARD` |
| `Vector3` | [default_face_direction](#prop-default-face-direction) | `Vector3.ZERO` |

## Methods

| | |
|---|---|
| `void` | [update_position_from_node](#method-update-position-from-node)( `entity_node: Node3D` ) |
| `String` | [get_effective_display_name](#method-get-effective-display-name)( `definition: EntityDefinition = null` ) |
| `bool` | [has_display_name_override](#method-has-display-name-override)() |
| `int` | [get_effective_level](#method-get-effective-level)( `definition: EntityDefinition = null` ) |
| `FactionDefinition` | [get_effective_faction](#method-get-effective-faction)( `definition: EntityDefinition = null` ) |
| `Vector3` | [get_effective_model_scale](#method-get-effective-model-scale)( `definition: EntityDefinition = null` ) |
| `ModularBehaviorScript` | [get_effective_behavior_script](#method-get-effective-behavior-script)( `definition: EntityDefinition = null` ) |
| `bool` | [has_behavior_script_override](#method-has-behavior-script-override)() |
| `ModularCombatScript` | [get_effective_combat_script](#method-get-effective-combat-script)( `definition: EntityDefinition = null` ) |
| `bool` | [has_combat_script_override](#method-has-combat-script-override)() |
| `StatsData` | [get_effective_stats](#method-get-effective-stats)( `definition: EntityDefinition = null` ) |
| `bool` | [has_stats_override](#method-has-stats-override)() |
| `void` | [set_stats_override_from_definition](#method-set-stats-override-from-definition)( `definition: EntityDefinition = null` ) |
| `void` | [clear_stats_override](#method-clear-stats-override)() |
| `LootTable` | [get_effective_loot_table](#method-get-effective-loot-table)( `definition: EntityDefinition = null` ) |
| `bool` | [has_loot_table_override](#method-has-loot-table-override)() |
| `bool` | [has_loot_rules_override](#method-has-loot-rules-override)() |
| `Array[LootRule]` | [get_effective_loot_rules](#method-get-effective-loot-rules)( `definition: EntityDefinition = null` ) |
| `Dictionary` | [get_effective_inventory](#method-get-effective-inventory)( `definition: EntityDefinition = null` ) |
| `bool` | [has_inventory_override](#method-has-inventory-override)() |
| `int` | [get_effective_experiance](#method-get-effective-experiance)( `definition: EntityDefinition = null` ) |
| `bool` | [has_experiance_override](#method-has-experiance-override)() |
| `bool` | [has_interaction](#method-has-interaction)() |
| `bool` | [has_overrides](#method-has-overrides)() |
| `bool` | [save_to_disk](#method-save-to-disk)() |
| `String` | [get_file_path](#method-get-file-path)() |

## Property descriptions

### int definition_id = 0 {#prop-definition-id}

DO NOT RESET

### int map_id = 0 {#prop-map-id}

DO NOT RESET

*Spawn Properties*

### bool is_active = true {#prop-is-active}

Wether this NPC is active or hidden on startup

### float spawn_delay = 0.0 {#prop-spawn-delay}

Delay timer for the spawn

### float respawn_timer = 0.0 {#prop-respawn-timer}

0 = no respawn (the default: a placed NPC is an authored one, and a spawner is what brings mobs back). Set it for an important NPC that must return after it died

### bool is_unique_encounter = false {#prop-is-unique-encounter}

Can only be killed once

### bool despawn_on_death = true {#prop-despawn-on-death}

Entities Body despawn on death after x seconds

*Encounter*

### int encounter_id = 0 {#prop-encounter-id}

The encounter this NPC belongs to (0 = none: it acts alone). NPCs with the same encounter fight as one group: they join a fight together, keep their formation, and react as a group. They can stand anywhere in the scene. Choose it in the Unique Object panel or with the Encounter menu of the placement bar. The encounter itself (its formation, behavior, reactions, respawn) is a record in the Uniques list

*Overrides*

### int level_override = 0 {#prop-level-override}

If 0, use EntityDefinition.level

### Vector3 model_scale_override = Vector3.ZERO {#prop-model-scale-override}

If Vector3.ZERO, use EntityDefinition.model_scale

### int faction_id = 0 {#prop-faction-id}

Overrides the faction of the definition (0 = use the faction of the definition).

### int experience_worth_override = 0 {#prop-experience-worth-override}

Experiance granted to player on death

### Array[int] added_ui_tags = [] {#prop-added-ui-tags}

Entity tags this placed NPC has besides the ones of its definition (a Boss among Normal goblins)

### Array[int] removed_ui_tags = [] {#prop-removed-ui-tags}

Entity tags of the definition that this placed NPC does not have

### float experience_multiplier = 1.0 {#prop-experience-multiplier}

Multiplies the experience this NPC gives, on top of the multiplier of its definition (1 = no change). A rare version of a common creature: 3

### int behavior_script_id = 0 {#prop-behavior-script-id}

Overrides the behavior script of the definition (0 = use the one of the definition).

### int combat_script_id = 0 {#prop-combat-script-id}

Overrides the combat script of the definition (0 = use the one of the definition).

*Loot &amp; Inventory*

### Array[LootRule] loot_rules_override = [] {#prop-loot-rules-override}

Loot rules of this placed NPC: when it has any they REPLACE the loot rules of its definition (a unique boss with its own table)

### int loot_table_override = 0 {#prop-loot-table-override}

Older override for the loot table - if 0, uses the loot table of the definition

### Dictionary inventory_override {#prop-inventory-override}

Older override for starting inventory - if empty, uses EntityDefinition.inventory

*Stats*

### StatsData stats_override {#prop-stats-override}

Stats of this placed NPC that replace the ones of its definition. It follows its definition: what the definition gained since is added.

### TemplateBaseline template_baseline {#prop-template-baseline}

What the definition was when the stats override last looked at it. The override follows its definition (and the template of the definition): what the definition gained since is added to it

### Array[int] template_fixed_stats = [] {#prop-template-fixed-stats}

Stats of the override that keep their own value whatever the definition does

*Interactions*

### Interaction interaction = null {#prop-interaction}

Interactions assigned to this specific entity instance

### Vector3 world_position = Vector3.ZERO {#prop-world-position}

World positioning

### Vector3 world_rotation = Vector3.ZERO {#prop-world-rotation}

The rotation of the NPC in the world.

### Vector3 facing_direction = Vector3.FORWARD {#prop-facing-direction}

The direction the NPC faces now.

### Vector3 default_face_direction = Vector3.ZERO {#prop-default-face-direction}

The direction the NPC faces when it is idle (zero = it does not turn back).

## Method descriptions

### void update_position_from_node( entity_node: Node3D ) {#method-update-position-from-node}

Copies the position and rotation of the node of the NPC into this record.

### String get_effective_display_name( definition: EntityDefinition = null ) {#method-get-effective-display-name}

The display name: the override, else the one of the definition.

### bool has_display_name_override() {#method-has-display-name-override}

Does this NPC have a name of its own?

### int get_effective_level( definition: EntityDefinition = null ) {#method-get-effective-level}

The level: the override, else the one of the definition.

### FactionDefinition get_effective_faction( definition: EntityDefinition = null ) {#method-get-effective-faction}

The faction: the override, else the one of the definition.

### Vector3 get_effective_model_scale( definition: EntityDefinition = null ) {#method-get-effective-model-scale}

The scale of the model: the override, else the one of the definition.

### ModularBehaviorScript get_effective_behavior_script( definition: EntityDefinition = null ) {#method-get-effective-behavior-script}

The behavior script: the override, else the one of the definition.

### bool has_behavior_script_override() {#method-has-behavior-script-override}

Does this NPC have a behavior script of its own?

### ModularCombatScript get_effective_combat_script( definition: EntityDefinition = null ) {#method-get-effective-combat-script}

The combat script: the override, else the one of the definition.

### bool has_combat_script_override() {#method-has-combat-script-override}

Does this NPC have a combat script of its own?

### StatsData get_effective_stats( definition: EntityDefinition = null ) {#method-get-effective-stats}

The stats: the override (kept up to date with its definition), else the ones of the definition.

### bool has_stats_override() {#method-has-stats-override}

Does this NPC have stats of its own?

### void set_stats_override_from_definition( definition: EntityDefinition = null ) {#method-set-stats-override-from-definition}

Set stats override - duplicates from definition if available, otherwise creates new Call this when enabling stats override to get a proper starting point

### void clear_stats_override() {#method-clear-stats-override}

Clear stats override

### LootTable get_effective_loot_table( definition: EntityDefinition = null ) {#method-get-effective-loot-table}

The loot table: the override, else the one of the definition.

### bool has_loot_table_override() {#method-has-loot-table-override}

Does this NPC have a loot table of its own?

### bool has_loot_rules_override() {#method-has-loot-rules-override}

Does this NPC have loot rules of its own?

### Array[LootRule] get_effective_loot_rules( definition: EntityDefinition = null ) {#method-get-effective-loot-rules}

The loot rules of this placed NPC: its own when it has any, else the ones of its definition (with the older table and inventory overrides applied)

### Dictionary get_effective_inventory( definition: EntityDefinition = null ) {#method-get-effective-inventory}

The starting inventory: the override, else the one of the definition.

### bool has_inventory_override() {#method-has-inventory-override}

Does this NPC have an inventory of its own?

### int get_effective_experiance( definition: EntityDefinition = null ) {#method-get-effective-experiance}

The experience the NPC gives: the override, else the one of the definition.

### bool has_experiance_override() {#method-has-experiance-override}

Does this NPC have an experience value of its own?

### bool has_interaction() {#method-has-interaction}

Does this NPC have an interaction of its own?

### bool has_overrides() {#method-has-overrides}

Does this placed NPC differ from its definition in anything?

### bool save_to_disk() {#method-save-to-disk}

Saves this record to its file in src/data/unique_entities.

### String get_file_path() {#method-get-file-path}

The path of the file of this record.

