<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# UniqueEntityData

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

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
| `int` | [level_override](#prop-level-override) | `0` |
| `Vector3` | [model_scale_override](#prop-model-scale-override) | `Vector3.ZERO` |
| `int` | [faction_id](#prop-faction-id) | `0` |
| `int` | [experience_worth_override](#prop-experience-worth-override) | `0` |
| `float` | [experience_multiplier](#prop-experience-multiplier) | `1.0` |
| `int` | [behavior_script_id](#prop-behavior-script-id) | `0` |
| `int` | [combat_script_id](#prop-combat-script-id) | `0` |
| `int` | [loot_table_override](#prop-loot-table-override) | `0` |
| `Dictionary` | [inventory_override](#prop-inventory-override) |  |
| `StatsData` | [stats_override](#prop-stats-override) |  |
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

0 = no respawn

### bool is_unique_encounter = false {#prop-is-unique-encounter}

Can only be killed once

### bool despawn_on_death = true {#prop-despawn-on-death}

Entities Body despawn on death after x seconds

*Overrides*

### int level_override = 0 {#prop-level-override}

If 0, use EntityDefinition.level

### Vector3 model_scale_override = Vector3.ZERO {#prop-model-scale-override}

If Vector3.ZERO, use EntityDefinition.model_scale

### int faction_id = 0 {#prop-faction-id}

*No description yet.*

### int experience_worth_override = 0 {#prop-experience-worth-override}

Experiance granted to player on death

### float experience_multiplier = 1.0 {#prop-experience-multiplier}

Multiplies the experience this NPC gives, on top of the multiplier of its definition (1 = no change). A rare version of a common creature: 3

### int behavior_script_id = 0 {#prop-behavior-script-id}

*No description yet.*

### int combat_script_id = 0 {#prop-combat-script-id}

*No description yet.*

*Loot &amp; Inventory*

### int loot_table_override = 0 {#prop-loot-table-override}

Override for the loot table - if null, uses EntityDefinition.loot_table

### Dictionary inventory_override {#prop-inventory-override}

Override for starting inventory - if empty, uses EntityDefinition.inventory

*Stats Overrides*

### StatsData stats_override {#prop-stats-override}

*No description yet.*

*Interactions*

### Interaction interaction = null {#prop-interaction}

Interactions assigned to this specific entity instance

### Vector3 world_position = Vector3.ZERO {#prop-world-position}

*No description yet.*

### Vector3 world_rotation = Vector3.ZERO {#prop-world-rotation}

*No description yet.*

### Vector3 facing_direction = Vector3.FORWARD {#prop-facing-direction}

*No description yet.*

### Vector3 default_face_direction = Vector3.ZERO {#prop-default-face-direction}

*No description yet.*

## Method descriptions

### void update_position_from_node( entity_node: Node3D ) {#method-update-position-from-node}

*No description yet.*

### String get_effective_display_name( definition: EntityDefinition = null ) {#method-get-effective-display-name}

*No description yet.*

### bool has_display_name_override() {#method-has-display-name-override}

*No description yet.*

### int get_effective_level( definition: EntityDefinition = null ) {#method-get-effective-level}

*No description yet.*

### FactionDefinition get_effective_faction( definition: EntityDefinition = null ) {#method-get-effective-faction}

*No description yet.*

### Vector3 get_effective_model_scale( definition: EntityDefinition = null ) {#method-get-effective-model-scale}

*No description yet.*

### ModularBehaviorScript get_effective_behavior_script( definition: EntityDefinition = null ) {#method-get-effective-behavior-script}

*No description yet.*

### bool has_behavior_script_override() {#method-has-behavior-script-override}

*No description yet.*

### ModularCombatScript get_effective_combat_script( definition: EntityDefinition = null ) {#method-get-effective-combat-script}

*No description yet.*

### bool has_combat_script_override() {#method-has-combat-script-override}

*No description yet.*

### StatsData get_effective_stats( definition: EntityDefinition = null ) {#method-get-effective-stats}

*No description yet.*

### bool has_stats_override() {#method-has-stats-override}

*No description yet.*

### void set_stats_override_from_definition( definition: EntityDefinition = null ) {#method-set-stats-override-from-definition}

Set stats override - duplicates from definition if available, otherwise creates new Call this when enabling stats override to get a proper starting point

### void clear_stats_override() {#method-clear-stats-override}

Clear stats override

### LootTable get_effective_loot_table( definition: EntityDefinition = null ) {#method-get-effective-loot-table}

*No description yet.*

### bool has_loot_table_override() {#method-has-loot-table-override}

*No description yet.*

### Dictionary get_effective_inventory( definition: EntityDefinition = null ) {#method-get-effective-inventory}

*No description yet.*

### bool has_inventory_override() {#method-has-inventory-override}

*No description yet.*

### int get_effective_experiance( definition: EntityDefinition = null ) {#method-get-effective-experiance}

*No description yet.*

### bool has_experiance_override() {#method-has-experiance-override}

*No description yet.*

### bool has_interaction() {#method-has-interaction}

*No description yet.*

### bool has_overrides() {#method-has-overrides}

*No description yet.*

### bool save_to_disk() {#method-save-to-disk}

*No description yet.*

### String get_file_path() {#method-get-file-path}

*No description yet.*

