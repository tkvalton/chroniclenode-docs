<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ThreatTableComponent

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

ThreatTableComponent manages the aggression (threat) system for NPC entities. It tracks and calculates aggression levels towards players, influencing target selection and combat behavior. Key features:

## Description

- Maintains a threat table storing aggression values for each player
- Provides methods for adding, decaying, and resetting threat
- Handles target selection based on highest threat
- Manages combat state transitions based on threat levels
- Responds to entity death or freeing events

## Variables

| | | |
|---|---|---|
| `Entity` | [entity](#var-entity) |  |
| `Dictionary` | [threat_table](#var-threat-table) | `{}` |
| `Dictionary` | [connected_entities](#var-connected-entities) | `{}` |
| `Array[Entity]` | [forced_targets](#var-forced-targets) | `[]` |

## Methods

| | |
|---|---|
| `void` | [threat_table_component_setup](#method-threat-table-component-setup)( `system_hub: GameHost.SystemHub, parent_entity: Entity` ) |
| `void` | [receive_threat_from_player](#method-receive-threat-from-player)( `player: Entity, threat_amount: int` ) |
| `void` | [force_target](#method-force-target)( `source: Entity` ) |
| `void` | [release_forced_target](#method-release-forced-target)( `source: Entity` ) |
| `float` | [get_threat](#method-get-threat)( `source: Entity` ) |
| `void` | [set_threat](#method-set-threat)( `source: Entity, value: float` ) |
| `float` | [get_highest_threat](#method-get-highest-threat)() |
| `Entity` | [select_target_player](#method-select-target-player)() |
| `void` | [decay_threat](#method-decay-threat)( `decay_factor: float = 0.95` ) |
| `void` | [reset_target_threat](#method-reset-target-threat)( `player: Entity` ) |
| `bool` | [all_threat_null](#method-all-threat-null)() |
| `Entity` | [get_highest_threat_target](#method-get-highest-threat-target)() |
| `void` | [clear_threat](#method-clear-threat)() |

## Variable descriptions

### Entity entity {#var-entity}

The entity (NPC) that owns this threat table

### Dictionary threat_table =  {#var-threat-table}

Dictionary to store player threat amounts

### Dictionary connected_entities =  {#var-connected-entities}

Dictionary to track which entities we're connected to

### Array[Entity] forced_targets = [] {#var-forced-targets}

Entities that forced this NPC to target them (a taunt), the latest last: while there is one, it is the target whatever the threat says

## Method descriptions

### void threat_table_component_setup( system_hub: GameHost.SystemHub, parent_entity: Entity ) {#method-threat-table-component-setup}

Initializes the ThreatTableComponent

### void receive_threat_from_player( player: Entity, threat_amount: int ) {#method-receive-threat-from-player}

Adds threat for a player and updates the entity's target

### void force_target( source: Entity ) {#method-force-target}

Makes the NPC attack this source (a taunt).

### void release_forced_target( source: Entity ) {#method-release-forced-target}

Lets the NPC choose its target again.

### float get_threat( source: Entity ) {#method-get-threat}

The threat an entity has on this NPC (0 = none)

### void set_threat( source: Entity, value: float ) {#method-set-threat}

Sets the threat of an entity outright (0 or less removes it)

### float get_highest_threat() {#method-get-highest-threat}

The highest threat any entity has on this NPC

### Entity select_target_player() {#method-select-target-player}

Selects the player with the highest threat as the target

### void decay_threat( decay_factor: float = 0.95 ) {#method-decay-threat}

Reduces threat for all players over time

### void reset_target_threat( player: Entity ) {#method-reset-target-threat}

Resets the threat for a specific player

### bool all_threat_null() {#method-all-threat-null}

Checks if all threat values are null (no targets)

### Entity get_highest_threat_target() {#method-get-highest-threat-target}

Returns the player with the highest threat

### void clear_threat() {#method-clear-threat}

Clears all threat values

