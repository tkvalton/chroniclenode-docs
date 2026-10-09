<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# UniqueEncounterData

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

UniqueEncounterData defines both the behavior AND unique instance data for an encounter. This is both the template (formation, tactics) AND the specific placement (position, defeated state). Similar to how Region works - combines definition and instance in one resource.

## Properties

| | | |
|---|---|---|
| `int` | [map_id](#prop-map-id) | `0` |
| `Vector3` | [world_position](#prop-world-position) | `Vector3.ZERO` |
| `Vector3` | [world_rotation](#prop-world-rotation) | `Vector3.ZERO` |
| `bool` | [is_active](#prop-is-active) | `true` |
| `String` | [encounter_name](#prop-encounter-name) | `"Unnamed Encounter"` |
| `bool` | [auto_join_combat](#prop-auto-join-combat) | `true` |
| `float` | [auto_join_radius](#prop-auto-join-radius) | `25.0` |
| `int` | [respawn_delay](#prop-respawn-delay) | `0` |
| `Formation` | [formation_type](#prop-formation-type) | `Formation.NONE` |
| `float` | [min_spacing_distance](#prop-min-spacing-distance) | `3.0` |
| `float` | [spacing_check_interval](#prop-spacing-check-interval) | `2.0` |
| `bool` | [enforce_spacing](#prop-enforce-spacing) | `true` |
| `GroupBehavior` | [group_behavior](#prop-group-behavior) | `GroupBehavior.BALANCED` |
| `int` | [max_simultaneous_attackers](#prop-max-simultaneous-attackers) | `0` |
| `float` | [attack_rotation_delay](#prop-attack-rotation-delay) | `1.5` |
| `Array[EncounterReaction]` | [encounter_reactions](#prop-encounter-reactions) | `[]` |

## Variables

| | | |
|---|---|---|
| `bool` | [is_defeated](#var-is-defeated) | `false` |
| `int` | [last_defeated_time](#var-last-defeated-time) | `0` |

## Methods

| | |
|---|---|
| `float` | [get_formation_radius](#method-get-formation-radius)( `group_size: int` ) |
| `int` | [get_max_attackers](#method-get-max-attackers)( `group_size: int` ) |
| `bool` | [should_enforce_spacing](#method-should-enforce-spacing)() |
| `float` | [get_spacing_priority](#method-get-spacing-priority)() |
| `void` | [update_position_from_node](#method-update-position-from-node)( `node: Node3D` ) |
| `String` | [get_effective_display_name](#method-get-effective-display-name)() |
| `bool` | [save_to_disk](#method-save-to-disk)() |
| `void` | [mark_defeated](#method-mark-defeated)() |
| `bool` | [can_respawn](#method-can-respawn)() |
| `void` | [reset_state](#method-reset-state)() |

## Enumerations

### enum Formation {#enum-formation}

Group formation types

- **NONE** = `0` - No formation - entities act independently
- **CIRCLE_TARGET** = `1` - Form circle around primary target
- **LINE_FORMATION** = `2` - Form a line facing the enemy
- **SCATTER** = `3` - Spread out to avoid AoE
- **DEFENSIVE_CLUSTER** = `4` - Group together for mutual protection
- **FLANKING_WINGS** = `5` - Split into two groups to flank

### enum GroupBehavior {#enum-groupbehavior}

Group aggression levels

- **PASSIVE** = `0` - Only defend, don't initiate attacks
- **CAUTIOUS** = `1` - Take turns attacking, maintain spacing
- **BALANCED** = `2` - Standard combat behavior
- **AGGRESSIVE** = `3` - All attack simultaneously when possible
- **BERSERKER** = `4` - Ignore formation and spacing, full assault

## Property descriptions

### int map_id = 0 {#prop-map-id}

The map this encounter belongs to

### Vector3 world_position = Vector3.ZERO {#prop-world-position}

World position of this encounter

### Vector3 world_rotation = Vector3.ZERO {#prop-world-rotation}

World rotation of this encounter

*Basic Properties*

### bool is_active = true {#prop-is-active}

Whether this encounter is active (can be disabled by quests/events)

### String encounter_name = "Unnamed Encounter" {#prop-encounter-name}

Display name for this encounter (for debugging/editor)

### bool auto_join_combat = true {#prop-auto-join-combat}

Whether all children auto-join combat when any member enters combat

### float auto_join_radius = 25.0 {#prop-auto-join-radius}

Maximum distance from encounter center that entities can be and still auto-join

### int respawn_delay = 0 {#prop-respawn-delay}

Respawn delay in seconds (0 = no respawn)

*Formation &amp; Spacing*

### Formation formation_type = Formation.NONE {#prop-formation-type}

Formation type for this encounter

### float min_spacing_distance = 3.0 {#prop-min-spacing-distance}

How far apart entities should try to maintain from each other (in meters)

### float spacing_check_interval = 2.0 {#prop-spacing-check-interval}

How often to check and adjust spacing (in seconds)

### bool enforce_spacing = true {#prop-enforce-spacing}

Whether to enforce spacing during combat

*Group Behavior*

### GroupBehavior group_behavior = GroupBehavior.BALANCED {#prop-group-behavior}

Overall aggression level of the group

### int max_simultaneous_attackers = 0 {#prop-max-simultaneous-attackers}

Maximum number of entities that can attack simultaneously (0 = no limit)

### float attack_rotation_delay = 1.5 {#prop-attack-rotation-delay}

Delay between attack rotations when taking turns (for CAUTIOUS behavior)

*Reaction System*

### Array[EncounterReaction] encounter_reactions = [] {#prop-encounter-reactions}

Reactions that trigger based on encounter events

## Variable descriptions

### bool is_defeated = false {#var-is-defeated}

Whether this encounter has been defeated

### int last_defeated_time = 0 {#var-last-defeated-time}

Timestamp of when this encounter was last defeated

## Method descriptions

### float get_formation_radius( group_size: int ) {#method-get-formation-radius}

Get formation radius based on group size

### int get_max_attackers( group_size: int ) {#method-get-max-attackers}

Get the maximum number of attackers based on behavior and group size

### bool should_enforce_spacing() {#method-should-enforce-spacing}

Check if spacing should be enforced based on behavior

### float get_spacing_priority() {#method-get-spacing-priority}

Get spacing priority (higher = more important to maintain spacing)

### void update_position_from_node( node: Node3D ) {#method-update-position-from-node}

Update position and rotation from a node

### String get_effective_display_name() {#method-get-effective-display-name}

Get effective display name

### bool save_to_disk() {#method-save-to-disk}

Save this unique encounter data to disk

### void mark_defeated() {#method-mark-defeated}

Mark as defeated

### bool can_respawn() {#method-can-respawn}

Check if encounter can respawn

### void reset_state() {#method-reset-state}

Reset encounter state (for respawn)

