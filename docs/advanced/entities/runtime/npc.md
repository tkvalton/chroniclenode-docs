<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# NPC

**Inherits:** [Entity](/advanced/entities/runtime/entity) < [CharacterBody3D](https://docs.godotengine.org/en/stable/classes/class_characterbody3d.html)

NPC represents a non-player character in the game. This class handles BOTH editor placement and runtime behavior.

## Description

Editor Mode:

- Creates visual skeleton for scene preview
- Manages UniqueEntityData creation/deletion
- Syncs position changes to database

Runtime Mode:

- Full entity functionality via Entity base class
- Threat table management
- NPC-specific behavior and combat
- Self-registers with ObjectRegistry when initialized

## Properties

| | | |
|---|---|---|
| `Node3D` | [editor_visual_skeleton](#prop-editor-visual-skeleton) |  |

## Variables

| | | |
|---|---|---|
| `ThreatTableComponent` | [threat_table_component](#var-threat-table-component) |  |
| `Marker3D` | [spawn_point](#var-spawn-point) |  |
| `Interaction` | [interaction](#var-interaction) | `null` |
| `Label3D` | [interact_prompt_label](#var-interact-prompt-label) |  |
| `Timer` | [spawn_delay_timer](#var-spawn-delay-timer) | `null` |
| `Timer` | [respawn_timer](#var-respawn-timer) | `null` |
| `Timer` | [despawn_timer](#var-despawn-timer) | `null` |
| `bool` | [is_waiting_to_spawn](#var-is-waiting-to-spawn) | `false      # During spawn_delay` |
| `bool` | [is_respawning](#var-is-respawning) | `false            # During respawn_timer` |
| `float` | [respawn_time_remaining](#var-respawn-time-remaining) | `0.0    # For save/load` |

## Methods

| | |
|---|---|
| `void` | [initialize_entity](#method-initialize-entity)( `system_hub: GameHost.SystemHub` ) |
| `void` | [entity_death](#method-entity-death)( `announce: bool = true` ) |
| `bool` | [save_unique_entity_data](#method-save-unique-entity-data)( `data: UniqueEntityData` ) |
| `void` | [sync_to_unique_data](#method-sync-to-unique-data)() |
| `int` | [get_experience_worth](#method-get-experience-worth)() |
| `int` | [get_fixed_experience_worth](#method-get-fixed-experience-worth)() |
| `ThreatTableComponent` | [get_threat_table](#method-get-threat-table)() |
| `Vector3` | [get_spawn_position](#method-get-spawn-position)() |
| `void` | [reset_to_spawn](#method-reset-to-spawn)() |
| `void` | [process_interaction](#method-process-interaction)( `entity: Entity` ) |
| `void` | [show_interact_prompt](#method-show-interact-prompt)() |
| `void` | [hide_interact_prompt](#method-hide-interact-prompt)() |
| `void` | [resurrect](#method-resurrect)() |
| `Dictionary` | [get_animation_tags](#method-get-animation-tags)() |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `save_data: Dictionary, system_hub: GameHost.SystemHub` ) |

## Property descriptions

### Node3D editor_visual_skeleton {#prop-editor-visual-skeleton}

Visual skeleton shown in editor for preview (not used at runtime)

## Variable descriptions

### ThreatTableComponent threat_table_component {#var-threat-table-component}

Threat table for tracking threat from players

### Marker3D spawn_point {#var-spawn-point}

Spawn point marker for respawning

### Interaction interaction = null {#var-interaction}

Entity Interactions - NPCs can have multiple interaction types (conversation, vendor, crafting, etc.) Loaded from UniqueEntityData at runtime

### Label3D interact_prompt_label {#var-interact-prompt-label}

*No description yet.*

### Timer spawn_delay_timer = null {#var-spawn-delay-timer}

Spawn/Respawn/Despawn Timers (managed via ChronoManager)

### Timer respawn_timer = null {#var-respawn-timer}

*No description yet.*

### Timer despawn_timer = null {#var-despawn-timer}

*No description yet.*

### bool is_waiting_to_spawn = false      # During spawn_delay {#var-is-waiting-to-spawn}

Respawn State Tracking

### bool is_respawning = false            # During respawn_timer {#var-is-respawning}

*No description yet.*

### float respawn_time_remaining = 0.0    # For save/load {#var-respawn-time-remaining}

*No description yet.*

## Method descriptions

### void initialize_entity( system_hub: GameHost.SystemHub ) {#method-initialize-entity}

Override initialize_entity to add NPC-specific setup ## Regsitry should initialize

### void entity_death( announce: bool = true ) {#method-entity-death}

`announce` false puts a saved corpse back (loading): the entity becomes a corpse but nobody is told it died *(from [Entity](/advanced/entities/runtime/entity))*

### bool save_unique_entity_data( data: UniqueEntityData ) {#method-save-unique-entity-data}

Save unique entity data to disk and update cache

### void sync_to_unique_data() {#method-sync-to-unique-data}

Syncs current entity state to its UniqueEntityData

### int get_experience_worth() {#method-get-experience-worth}

The experience this NPC gives when it is defeated: the amount of the project's Kill Experience settings for its level, times its multipliers (see NpcLevels)

### int get_fixed_experience_worth() {#method-get-fixed-experience-worth}

The Experience worth set on this NPC itself: the override of a placed NPC, else its definition (0 = none). The project may use it as the amount, or ignore it for a table or a formula of the level

### ThreatTableComponent get_threat_table() {#method-get-threat-table}

Get the threat table component

### Vector3 get_spawn_position() {#method-get-spawn-position}

Get the spawn position for this NPC

### void reset_to_spawn() {#method-reset-to-spawn}

Reset NPC to spawn position

### void process_interaction( entity: Entity ) {#method-process-interaction}

*No description yet.*

### void show_interact_prompt() {#method-show-interact-prompt}

*No description yet.*

### void hide_interact_prompt() {#method-hide-interact-prompt}

*No description yet.*

### void resurrect() {#method-resurrect}

Override to handle NPC-specific death behavior Override to handle NPC-specific resurrection

### Dictionary get_animation_tags() {#method-get-animation-tags}

Override to get animation tags from NPCDefinition instead of equipment NPCs don't have real equipment, so they define their animation tags directly

### Dictionary to_save_data() {#method-to-save-data}

Standardized save method (calls parent's to_save_data)

### void from_save_data( save_data: Dictionary, system_hub: GameHost.SystemHub ) {#method-from-save-data}

Standardized load method (calls parent's from_save_data)

