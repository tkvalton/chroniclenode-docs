<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ObjectRegistry

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

ObjectRegistry - manages all NPCs, Interactables, Trigger areas, and special Encounters with advanced LOD system Integrated with CombatSystem's encounter management for coordinated combat behavior Features configurable LOD system via GameplayConfig, behavior optimization, and comprehensive performance management Handles registration, spawning, interaction tracking, and state management Provides centralized access for quest systems, events, and ability effects

## Variables

| | | |
|---|---|---|
| `Dictionary` | [placed_entities](#var-placed-entities) | `{}` |
| `Dictionary` | [dynamic_entities](#var-dynamic-entities) | `{}` |
| `Dictionary` | [placed_encounters](#var-placed-encounters) | `{}` |
| `Array[Encounter]` | [dynamic_encounters](#var-dynamic-encounters) | `[]` |
| `Dictionary` | [placed_interactables](#var-placed-interactables) | `{}` |
| `Dictionary` | [dynamic_interactables](#var-dynamic-interactables) | `{}` |
| `Dictionary` | [placed_dropped_items](#var-placed-dropped-items) | `{}` |
| `Dictionary` | [dynamic_dropped_items](#var-dynamic-dropped-items) | `{}` |
| `Dictionary` | [taken_placements](#var-taken-placements) | `{}` |
| `Dictionary` | [trigger_areas](#var-trigger-areas) | `{}` |
| `Dictionary` | [active_controllers](#var-active-controllers) | `{}` |
| `Dictionary` | [entity_lod_levels](#var-entity-lod-levels) | `{}` |
| `float` | [optimization_timer](#var-optimization-timer) | `0.0` |
| `int` | [next_controller_index](#var-next-controller-index) | `0` |
| `Dictionary` | [lod_stats](#var-lod-stats) | `{ ... }` |
| `bool` | [behaviors_initialized](#var-behaviors-initialized) | `false` |
| `Entity` | [current_entity](#var-current-entity) | `null` |
| `Interaction` | [current_interaction](#var-current-interaction) | `null` |
| `Dictionary` | [active_interactions](#var-active-interactions) | `{}` |
| `WorldScene` | [current_world_scene](#var-current-world-scene) |  |
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |

## Methods

| | |
|---|---|
| `void` | [process_lod](#method-process-lod)( `delta: float` ) |
| `void` | [register_world_objects](#method-register-world-objects)( `entities: Array, interactables: Array, trigger_areas: Array, encounters: Array, dropped_items: Array = []` ) |
| `void` | [register_entity](#method-register-entity)( `entity: Entity` ) |
| `Entity` | [get_entity](#method-get-entity)( `entity_unique_id: int` ) |
| `Array[Entity]` | [get_entities_by_data_id](#method-get-entities-by-data-id)( `definition_id: int` ) |
| `Array[Entity]` | [get_all_entities](#method-get-all-entities)() |
| `Array[Entity]` | [get_placed_entities](#method-get-placed-entities)() |
| `Array[Entity]` | [get_dynamic_entities](#method-get-dynamic-entities)() |
| `void` | [activate_all_behaviors](#method-activate-all-behaviors)() |
| `void` | [unregister_entity](#method-unregister-entity)( `entity: Entity` ) |
| `void` | [register_interactable](#method-register-interactable)( `interactable: InteractableObject` ) |
| `void` | [unregister_interactable](#method-unregister-interactable)( `interactable: InteractableObject` ) |
| `void` | [register_trigger_area](#method-register-trigger-area)( `trigger_area: TriggerArea` ) |
| `void` | [unregister_trigger_area](#method-unregister-trigger-area)( `trigger_area: TriggerArea` ) |
| `InteractableObject` | [get_interactable](#method-get-interactable)( `unique_id: int` ) |
| `Array[InteractableObject]` | [get_all_interactables](#method-get-all-interactables)() |
| `Array[InteractableObject]` | [get_placed_interactables](#method-get-placed-interactables)() |
| `Array[InteractableObject]` | [get_dynamic_interactables](#method-get-dynamic-interactables)() |
| `TriggerArea` | [get_trigger_area](#method-get-trigger-area)( `trigger_area_id: int` ) |
| `Array[TriggerArea]` | [get_all_trigger_areas](#method-get-all-trigger-areas)() |
| `void` | [register_encounter](#method-register-encounter)( `encounter: Encounter` ) |
| `Encounter` | [get_encounter](#method-get-encounter)( `encounter_unique_id: int` ) |
| `Array[Encounter]` | [get_all_encounters](#method-get-all-encounters)() |
| `void` | [unregister_encounter](#method-unregister-encounter)( `encounter: Encounter` ) |
| `void` | [register_controller](#method-register-controller)( `entity: Entity, controller: EntityStateComponent` ) |
| `void` | [unregister_controller](#method-unregister-controller)( `entity: Entity` ) |
| `void` | [force_lod_update](#method-force-lod-update)( `entity: Entity` ) |
| `void` | [set_entity_lod_level](#method-set-entity-lod-level)( `entity: Entity, level: GameplayConfig.LODLevel` ) |
| `NPC` | [spawn_npc](#method-spawn-npc)( `entity_id: int, position: Vector3` ) |
| `Pet` | [spawn_pet](#method-spawn-pet)( `entity_id: int, summoner: Entity, position: Vector3` ) |
| `InteractableObject` | [spawn_interactable](#method-spawn-interactable)( `interactable_id: int, position: Vector3, summoner: Entity = null` ) |
| `Entity` | [spawn_dynamic_entity](#method-spawn-dynamic-entity)( `definition: EntityDefinition, position: Vector3, summoner: Entity = null` ) |
| `InteractableObject` | [spawn_dynamic_interactable](#method-spawn-dynamic-interactable)( `definition: InteractableDefinition, position: Vector3, summoner: Entity = null` ) |
| `DroppedItem` | [spawn_dropped_item](#method-spawn-dropped-item)( `instance: ItemInstance, position: Vector3, launch: bool = true, velocity: Vector3 = Vector3.ZERO` ) |
| `DroppedItem` | [spawn_dropped_currency](#method-spawn-dropped-currency)( `currency_id: int, amount: int, position: Vector3, launch: bool = true` ) |
| `void` | [register_dropped_item](#method-register-dropped-item)( `dropped: DroppedItem, launch: bool = false, velocity: Vector3 = Vector3.ZERO, restoring: bool = false` ) |
| `void` | [on_dropped_item_finished](#method-on-dropped-item-finished)( `dropped: DroppedItem, was_taken: bool` ) |
| `Array[DroppedItem]` | [get_all_dropped_items](#method-get-all-dropped-items)() |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `save_data: Dictionary, system_hub: GameHost.SystemHub` ) |
| `void` | [clear_all](#method-clear-all)() |

## Signals

### entity_registered( entity: Entity ) {#signal-entity-registered}

========== SIGNALS ==========

### entity_unregistered( entity: Entity ) {#signal-entity-unregistered}

Emitted when an entity is removed from the registry.

### interactable_registered( interactable: InteractableObject ) {#signal-interactable-registered}

Emitted when an object is added to the registry.

### interactable_unregistered( interactable: InteractableObject ) {#signal-interactable-unregistered}

Emitted when an object is removed from the registry.

### dropped_item_registered( dropped: DroppedItem ) {#signal-dropped-item-registered}

Emitted when a dropped item is put in the world.

### dropped_item_unregistered( dropped: DroppedItem, was_taken: bool ) {#signal-dropped-item-unregistered}

Emitted when a dropped item leaves the world: taken (a character took it) or not (it expired or was removed).

## Variable descriptions

### Dictionary placed_entities =  {#var-placed-entities}

Dictionary of placed NPCs/entities keyed by unique_id for fast lookups

### Dictionary dynamic_entities =  {#var-dynamic-entities}

Dictionary of dynamic NPCs/entities keyed by instance_id (no UniqueEntityData)

### Dictionary placed_encounters =  {#var-placed-encounters}

Dictionary of encounters keyed by unique_id for fast lookups

### Array[Encounter] dynamic_encounters = [] {#var-dynamic-encounters}

Array of dynamic encounters (no unique ID)

### Dictionary placed_interactables =  {#var-placed-interactables}

Dictionary of placed interactables keyed by unique_id for fast lookups

### Dictionary dynamic_interactables =  {#var-dynamic-interactables}

Dictionary of dynamic interactables keyed by instance_id (no UniqueInteractableData)

### Dictionary placed_dropped_items =  {#var-placed-dropped-items}

Dropped items placed by hand in the world scene, by their placement id

### Dictionary dynamic_dropped_items =  {#var-dynamic-dropped-items}

Dropped items made while the game runs (dropped by the player, loot, events), by instance id

### Dictionary taken_placements =  {#var-taken-placements}

The placed dropped items that were taken, by placement id: the seconds until they lie there again (-1 = never)

### Dictionary trigger_areas =  {#var-trigger-areas}

Dictionary of placed trigger areas keyed by unique_id for fast lookups

### Dictionary active_controllers =  {#var-active-controllers}

Dictionary of all active behavior controllers keyed by entity instance ID

### Dictionary entity_lod_levels =  {#var-entity-lod-levels}

Track current LOD level for each entity (keyed by instance ID)

### float optimization_timer = 0.0 {#var-optimization-timer}

Enhanced optimization variables

### int next_controller_index = 0 {#var-next-controller-index}

The next place in the round robin that decides which entities think this frame.

### Dictionary lod_stats {#var-lod-stats}

Performance monitoring - tracks count per LOD level

### bool behaviors_initialized = false {#var-behaviors-initialized}

========== INITIALIZATION STATE ==========

### Entity current_entity = null {#var-current-entity}

========== INTERACTION MANAGEMENT ==========

### Interaction current_interaction = null {#var-current-interaction}

The interaction that is running now.

### Dictionary active_interactions =  {#var-active-interactions}

Track active interactions across all NPCs

### WorldScene current_world_scene {#var-current-world-scene}

========== ACTIVE WORLD SCENE ==========

### GameHost.SystemHub system_hub {#var-system-hub}

========== Required Systems ==========

## Method descriptions

### void process_lod( delta: float ) {#method-process-lod}

Thins out the behaviour of what is far from the player (called every frame by the WorldContainer: a RefCounted has no process of its own)

### void register_world_objects( entities: Array, interactables: Array, trigger_areas: Array, encounters: Array, dropped_items: Array = [] ) {#method-register-world-objects}

Register all world objects at once (called by WorldContainer after world loads) This handles pre-placed objects from the WorldScene containers

### void register_entity( entity: Entity ) {#method-register-entity}

Register an entity with the manager (called during world loading)

### Entity get_entity( entity_unique_id: int ) {#method-get-entity}

Get entity by unique_id (for event system calls, conditions, etc.)

### Array[Entity] get_entities_by_data_id( definition_id: int ) {#method-get-entities-by-data-id}

Every entity of one definition (the NPCs of one kind), placed or spawned

### Array[Entity] get_all_entities() {#method-get-all-entities}

Get all registered entities (placed + dynamic)

### Array[Entity] get_placed_entities() {#method-get-placed-entities}

Get only placed entities

### Array[Entity] get_dynamic_entities() {#method-get-dynamic-entities}

Get only dynamic entities

### void activate_all_behaviors() {#method-activate-all-behaviors}

Activate behaviors for all registered NPCs (called after all NPCs are initialized)

### void unregister_entity( entity: Entity ) {#method-unregister-entity}

Unregister an entity from the manager

### void register_interactable( interactable: InteractableObject ) {#method-register-interactable}

Register an interactable with the manager (called during world loading or spawning)

### void unregister_interactable( interactable: InteractableObject ) {#method-unregister-interactable}

Unregister an interactable from the manager

### void register_trigger_area( trigger_area: TriggerArea ) {#method-register-trigger-area}

Register an trigger area with the manager (called during world loading or spawning)

### void unregister_trigger_area( trigger_area: TriggerArea ) {#method-unregister-trigger-area}

Unregister an trigger area from the manager

### InteractableObject get_interactable( unique_id: int ) {#method-get-interactable}

Find interactable object by unique ID (delegates to WorldScene)

### Array[InteractableObject] get_all_interactables() {#method-get-all-interactables}

Get all interactable objects (placed + dynamic)

### Array[InteractableObject] get_placed_interactables() {#method-get-placed-interactables}

Get only placed interactables

### Array[InteractableObject] get_dynamic_interactables() {#method-get-dynamic-interactables}

Get only dynamic interactables

### TriggerArea get_trigger_area( trigger_area_id: int ) {#method-get-trigger-area}

Get all trigger areas

### Array[TriggerArea] get_all_trigger_areas() {#method-get-all-trigger-areas}

Get all trigger areas

### void register_encounter( encounter: Encounter ) {#method-register-encounter}

Register a Encounter with the manager

### Encounter get_encounter( encounter_unique_id: int ) {#method-get-encounter}

Get encounter by unique_id

### Array[Encounter] get_all_encounters() {#method-get-all-encounters}

Get all registered encounters (placed + dynamic)

### void unregister_encounter( encounter: Encounter ) {#method-unregister-encounter}

Unregister a Encounter from the manager

### void register_controller( entity: Entity, controller: EntityStateComponent ) {#method-register-controller}

Register a behavior controller

### void unregister_controller( entity: Entity ) {#method-unregister-controller}

Unregister a behavior controller

### void force_lod_update( entity: Entity ) {#method-force-lod-update}

Force LOD update for a specific entity (useful when entity becomes important)

### void set_entity_lod_level( entity: Entity, level: GameplayConfig.LODLevel ) {#method-set-entity-lod-level}

Set LOD level directly for an entity (bypasses distance calculation)

### NPC spawn_npc( entity_id: int, position: Vector3 ) {#method-spawn-npc}

Spawn NPC at specified position (with UniqueEntityData)

### Pet spawn_pet( entity_id: int, summoner: Entity, position: Vector3 ) {#method-spawn-pet}

Spawn Pet (temporary, no UniqueEntityData)

### InteractableObject spawn_interactable( interactable_id: int, position: Vector3, summoner: Entity = null ) {#method-spawn-interactable}

Spawn interactable at specified position

### Entity spawn_dynamic_entity( definition: EntityDefinition, position: Vector3, summoner: Entity = null ) {#method-spawn-dynamic-entity}

Spawn dynamic entity (for save/load restoration of dynamic NPCs) This spawns an entity without UniqueEntityData (dynamic entity)

### InteractableObject spawn_dynamic_interactable( definition: InteractableDefinition, position: Vector3, summoner: Entity = null ) {#method-spawn-dynamic-interactable}

Spawn dynamic interactable (for save/load restoration of dynamic interactables) This spawns an interactable without UniqueInteractableData (dynamic interactable)

### DroppedItem spawn_dropped_item( instance: ItemInstance, position: Vector3, launch: bool = true, velocity: Vector3 = Vector3.ZERO ) {#method-spawn-dropped-item}

Makes an item lie in the world: a dropped item of the item instance at a position, thrown (`launch`) or put there. Gives it, or null when dropped items are off in the Gameplay Config or the world cannot hold it

### DroppedItem spawn_dropped_currency( currency_id: int, amount: int, position: Vector3, launch: bool = true ) {#method-spawn-dropped-currency}

Makes a pile of a currency lie in the world, like `spawn_dropped_item`

### void register_dropped_item( dropped: DroppedItem, launch: bool = false, velocity: Vector3 = Vector3.ZERO, restoring: bool = false ) {#method-register-dropped-item}

Puts a dropped item in the registry: one placed by hand (it has a placement id) or one made while playing. A placed item that was taken stays taken

### void on_dropped_item_finished( dropped: DroppedItem, was_taken: bool ) {#method-on-dropped-item-finished}

Called by a dropped item when it is gone: a placed one is remembered as taken (and comes back after its respawn time), a made one is forgotten

### Array[DroppedItem] get_all_dropped_items() {#method-get-all-dropped-items}

Every dropped item that lies in the world now

### Dictionary to_save_data() {#method-to-save-data}

Save instance runtime state Save NPCS, INTERACTABLES &amp; ENCOUNTERS IMPORTANT: Dynamic entities of class Pet are NOT saved (they respawn from effects)

### void from_save_data( save_data: Dictionary, system_hub: GameHost.SystemHub ) {#method-from-save-data}

Load instance runtime state - COMPREHENSIVE VERSION Handles:

- Restoring placed entities (with removal of entities not in save)
- Spawning dynamic entities from save data
- Restoring placed interactables (with removal)
- Spawning dynamic interactables from save data
- Restoring encounters

### void clear_all() {#method-clear-all}

Clear all tracked entities, encounters, and containers

