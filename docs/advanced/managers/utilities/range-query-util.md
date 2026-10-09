<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RangeQueryUtil

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

RangeQueryUtil is a global system providing various helper functions for game logic, particularly focusing on spatial queries and entity relationships within the game world.

## Description

Key features:

- Entity querying functions (nearest entities, allies, enemies)
- Range-based entity detection
- Team affiliation checks
- Physics-based spatial queries
- Encounter-aware entity queries (when available)

This utility class serves as a central repository for commonly used functions that operate on game entities and their spatial relationships. It simplifies various game mechanics such as targeting, AI decision making, and area-of-effect calculations.

## Variables

| | | |
|---|---|---|
| `CombatManager` | [combat_manager](#var-combat-manager) |  |

## Methods

| | |
|---|---|
| `void` | [initialize](#method-initialize)( `system_hub: GameHost.SystemHub` ) *static* |
| `Array[Entity]` | [get_nearest_entities](#method-get-nearest-entities)( `caller: Entity, max_range: float` ) *static* |
| `Entity` | [get_nearest_entity](#method-get-nearest-entity)( `caller: Entity, max_range: float` ) *static* |
| `Array[Entity]` | [get_nearest_allies](#method-get-nearest-allies)( `caller: Entity, max_range: float` ) *static* |
| `Entity` | [get_nearest_ally](#method-get-nearest-ally)( `caller: Entity, max_range: float` ) *static* |
| `Array[Entity]` | [get_nearest_enemies](#method-get-nearest-enemies)( `caller: Entity, max_range: float` ) *static* |
| `Entity` | [get_nearest_enemy](#method-get-nearest-enemy)( `caller: Entity, max_range: float` ) *static* |
| `Array[Entity]` | [get_entites_within_range](#method-get-entites-within-range)( `target_point: Variant, desired_range: float` ) *static* |
| `Array[Entity]` | [get_allies_within_range](#method-get-allies-within-range)( `caller: Entity, target_point: Variant, desired_range: float` ) *static* |
| `Array[Entity]` | [get_enemies_within_range](#method-get-enemies-within-range)( `caller: Entity, target_point: Variant, desired_range: float` ) *static* |
| `Array[Entity]` | [get_encounter_allies_in_range](#method-get-encounter-allies-in-range)( `caller: Entity, target_point: Variant, desired_range: float` ) *static* |
| `Array[Entity]` | [get_encounter_enemies_in_range](#method-get-encounter-enemies-in-range)( `caller: Entity, target_point: Variant, desired_range: float` ) *static* |

## Variable descriptions

### CombatManager combat_manager {#var-combat-manager}

System Refs

## Method descriptions

### void initialize( system_hub: GameHost.SystemHub ) {#method-initialize}

Initialize the utility Call this from GameHost on startup

### Array[Entity] get_nearest_entities( caller: Entity, max_range: float ) {#method-get-nearest-entities}

Gets the entities within a given range of the caller, sorted by distance

### Entity get_nearest_entity( caller: Entity, max_range: float ) {#method-get-nearest-entity}

Gets the nearest entity within a given range of the caller, if it exists, null otherwise

### Array[Entity] get_nearest_allies( caller: Entity, max_range: float ) {#method-get-nearest-allies}

Gets all allies within a given range of the caller, sorted by distance.

### Entity get_nearest_ally( caller: Entity, max_range: float ) {#method-get-nearest-ally}

Gets the nearest ally within a given range of the caller, if it exists, null otherwise

### Array[Entity] get_nearest_enemies( caller: Entity, max_range: float ) {#method-get-nearest-enemies}

Gets all enemies within a given range of the caller, sorted by distance

### Entity get_nearest_enemy( caller: Entity, max_range: float ) {#method-get-nearest-enemy}

Gets the nearest enemy within a given range of the caller, if it exists, null otherwise

### Array[Entity] get_entites_within_range( target_point: Variant, desired_range: float ) {#method-get-entites-within-range}

Gets all entities within a sphere around the target point, sorted by distance

### Array[Entity] get_allies_within_range( caller: Entity, target_point: Variant, desired_range: float ) {#method-get-allies-within-range}

Gets all allies within a sphere around the target point, sorted by distance

### Array[Entity] get_enemies_within_range( caller: Entity, target_point: Variant, desired_range: float ) {#method-get-enemies-within-range}

Gets all enemies within a sphere around the target point, sorted by distance

### Array[Entity] get_encounter_allies_in_range( caller: Entity, target_point: Variant, desired_range: float ) {#method-get-encounter-allies-in-range}

Helper function to allies within a range, works within encounter bounds when possible

### Array[Entity] get_encounter_enemies_in_range( caller: Entity, target_point: Variant, desired_range: float ) {#method-get-encounter-enemies-in-range}

Helper function to enemies within a range, works within encounter bounds when possible

