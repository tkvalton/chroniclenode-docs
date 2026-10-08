<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CombatManager

**Inherits:** [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

Complete combat orchestration system that handles damage calculations, effect pooling, combat logging, world effects management, and encounter coordination.

## Variables

| | | |
|---|---|---|
| `CombatCalculations` | [combat_calculations](#var-combat-calculations) |  |
| `EffectInstancePool` | [effect_instance_pool](#var-effect-instance-pool) |  |
| `CombatLogManager` | [combat_log_manager](#var-combat-log-manager) |  |
| `VFXManager` | [vfx_manager](#var-vfx-manager) |  |
| `Dictionary` | [active_encounters](#var-active-encounters) | `{}` |
| `Dictionary` | [entity_to_encounter_map](#var-entity-to-encounter-map) | `{}` |
| `float` | [encounter_merge_distance](#var-encounter-merge-distance) | `50.0` |
| `float` | [encounter_cleanup_interval](#var-encounter-cleanup-interval) | `5.0` |
| `bool` | [combat_music_active](#var-combat-music-active) | `false` |
| `float` | [combat_music_stop_delay](#var-combat-music-stop-delay) | `2.0` |
| `EnvironmentalEffects` | [environmental_effects](#var-environmental-effects) |  |
| `Array[EffectInstance]` | [world_effects](#var-world-effects) | `[]` |
| `Dictionary` | [world_effects_by_type](#var-world-effects-by-type) | `{}` |
| `Dictionary` | [world_effects_by_originator](#var-world-effects-by-originator) | `{}` |

## Methods

| | |
|---|---|
| `void` | [connect_party_manager_signals](#method-connect-party-manager-signals)( `party_manager: PartyManager` ) |
| `EnvironmentalEffects` | [get_environmental_effects](#method-get-environmental-effects)() |
| `bool` | [is_environmental_effects_ready](#method-is-environmental-effects-ready)() |
| `Array[EffectInstance]` | [get_active_environmental_effects](#method-get-active-environmental-effects)() |
| `void` | [cleanup_environmental_effects](#method-cleanup-environmental-effects)() |
| `void` | [handle_entity_entered_combat](#method-handle-entity-entered-combat)( `entity: Entity` ) |
| `void` | [handle_entity_left_combat](#method-handle-entity-left-combat)( `entity: Entity` ) |
| `void` | [handle_unique_encounter_combat_started](#method-handle-unique-encounter-combat-started)( `encounter_node: Encounter, initiating_entity: Entity` ) |
| `void` | [handle_unique_encounter_combat_ended](#method-handle-unique-encounter-combat-ended)( `encounter_node: Encounter, reason: String` ) |
| `bool` | [is_entity_in_encounter](#method-is-entity-in-encounter)( `entity: Entity` ) |
| `CombatSession` | [get_encounter_for_entity](#method-get-encounter-for-entity)( `entity: Entity` ) |
| `Array[Entity]` | [get_entities_in_encounter_with](#method-get-entities-in-encounter-with)( `entity: Entity` ) |
| `void` | [unregister_entity_from_combat_tracking](#method-unregister-entity-from-combat-tracking)( `entity: Entity` ) |
| `void` | [register_entity_for_combat_tracking](#method-register-entity-for-combat-tracking)( `entity: Entity` ) |
| `Array[CombatSession]` | [get_all_encounters](#method-get-all-encounters)() |
| `void` | [start_combat_music](#method-start-combat-music)() |
| `void` | [register_world_effect](#method-register-world-effect)( `effect_instance: EffectInstance` ) |
| `void` | [unregister_world_effect](#method-unregister-world-effect)( `effect_instance: EffectInstance` ) |
| `bool` | [has_world_effect](#method-has-world-effect)( `effect_instance: EffectInstance` ) |
| `EffectInstance` | [spawn_world_effect](#method-spawn-world-effect)( `effect: Effect, position: Vector3` ) |
| `EffectInstance` | [spawn_world_effect_on_target](#method-spawn-world-effect-on-target)( `effect: Effect, target: Variant` ) |
| `Array[EffectInstance]` | [get_world_effects](#method-get-world-effects)() |
| `Array[EffectInstance]` | [get_world_effects_by_type](#method-get-world-effects-by-type)( `effect_type: String` ) |
| `Array[EffectInstance]` | [get_world_area_effects](#method-get-world-area-effects)() |
| `Array[EffectInstance]` | [get_world_collision_effects](#method-get-world-collision-effects)() |
| `Array[EffectInstance]` | [get_world_projectile_effects](#method-get-world-projectile-effects)() |
| `Array` | [get_world_effects_by_originator](#method-get-world-effects-by-originator)( `originator: Entity` ) |
| `Array[EffectInstance]` | [get_world_area_effects_by_originator](#method-get-world-area-effects-by-originator)( `originator: Entity` ) |
| `Array[EffectInstance]` | [get_world_effects_near_point](#method-get-world-effects-near-point)( `point: Vector3, max_distance: float = 5.0` ) |
| `EffectInstance` | [find_existing_world_effect_by_stacking_rule](#method-find-existing-world-effect-by-stacking-rule)( `effect_def: Effect, originator: Entity` ) |
| `int` | [cleanup_world_effects](#method-cleanup-world-effects)() |
| `int` | [clear_world_effects_by_originator](#method-clear-world-effects-by-originator)( `originator: Entity` ) |
| `void` | [clear_world_effects](#method-clear-world-effects)() |
| `DamageResult` | [apply_damage](#method-apply-damage)( `attacker: Variant, target: Variant, raw_damage: float, damage_type: int, effect_instance: EffectInstance, can_be_avoided: bool = true, chain_depth: int = 0` ) |
| `void` | [announce_miss](#method-announce-miss)( `attacker: Entity, target: Entity, effect_instance: EffectInstance` ) |
| `DamageResult` | [run_damage_done](#method-run-damage-done)( `attacker: Variant, raw_damage: float, damage_type: int, effect_instance: EffectInstance = null` ) |
| `HealingResult` | [apply_healing](#method-apply-healing)( `healer_entity: Variant, target_entity: Variant, raw_healing: float, effect_instance: EffectInstance, chain_depth: int = 0, only_pool_id: int = 0` ) |
| `HealingResult` | [run_healing_done](#method-run-healing-done)( `healer: Variant, raw_healing: float, effect_instance: EffectInstance = null` ) |
| `int` | [cleanup_invalid_encounters](#method-cleanup-invalid-encounters)() |
| `void` | [cleanup](#method-cleanup)() |
| `Dictionary` | [save_data](#method-save-data)() |
| `void` | [load_data](#method-load-data)( `save_data: Dictionary, system_hub: GameHost.SystemHub` ) |

## Signals

### encounter_started( encounter: CombatSession ) {#signal-encounter-started}

Emitted when a new encounter starts

### encounter_ended( encounter: CombatSession, reason: String ) {#signal-encounter-ended}

Emitted when an encounter ends with the reason

### experience_grant_requested( amount: int ) {#signal-experience-grant-requested}

Emitted when an NPC dies in combat with players, requesting experience grant

### damage_pipeline_completed( result: DamageResult ) {#signal-damage-pipeline-completed}

Emitted when a hit has been fully resolved, with the typed result (also emitted on both entities)

### healing_pipeline_completed( result: HealingResult ) {#signal-healing-pipeline-completed}

Emitted when a heal has been fully resolved, with the typed result (also emitted on both entities)

## Variable descriptions

### CombatCalculations combat_calculations {#var-combat-calculations}

Global combat configuration loaded from database

### EffectInstancePool effect_instance_pool {#var-effect-instance-pool}

Pool for reusing effect instances

### CombatLogManager combat_log_manager {#var-combat-log-manager}

Manager for combat logging and history

### VFXManager vfx_manager {#var-vfx-manager}

vfx system ref

### Dictionary active_encounters =  {#var-active-encounters}

All currently active encounters [encounter_id: CombatSession]

### Dictionary entity_to_encounter_map =  {#var-entity-to-encounter-map}

Quick lookup for which encounter an entity is in [entity_id: encounter_id]

### float encounter_merge_distance = 50.0 {#var-encounter-merge-distance}

Maximum distance to merge encounters

### float encounter_cleanup_interval = 5.0 {#var-encounter-cleanup-interval}

How often to clean up invalid encounters (seconds)

### bool combat_music_active = false {#var-combat-music-active}

Whether combat music is currently playing

### float combat_music_stop_delay = 2.0 {#var-combat-music-stop-delay}

Delay before stopping combat music after last encounter ends

### EnvironmentalEffects environmental_effects {#var-environmental-effects}

Environmental effects node for world effect origination

### Array[EffectInstance] world_effects = [] {#var-world-effects}

All active world effects

### Dictionary world_effects_by_type =  {#var-world-effects-by-type}

World effects organized by type [effect_type: Array[EffectInstance]]

### Dictionary world_effects_by_originator =  {#var-world-effects-by-originator}

World effects organized by originator [entity_id: Array[EffectInstance]]

## Method descriptions

### void connect_party_manager_signals( party_manager: PartyManager ) {#method-connect-party-manager-signals}

Setup encounter system

### EnvironmentalEffects get_environmental_effects() {#method-get-environmental-effects}

Get reference to the environmental effects node

### bool is_environmental_effects_ready() {#method-is-environmental-effects-ready}

Check if environmental effects system is ready

### Array[EffectInstance] get_active_environmental_effects() {#method-get-active-environmental-effects}

Get all active environmental effects

### void cleanup_environmental_effects() {#method-cleanup-environmental-effects}

Clean up all environmental effects (useful for scene transitions)

### void handle_entity_entered_combat( entity: Entity ) {#method-handle-entity-entered-combat}

Process entity entering combat - find or create encounter

### void handle_entity_left_combat( entity: Entity ) {#method-handle-entity-left-combat}

Process entity leaving combat - remove from encounter

### void handle_unique_encounter_combat_started( encounter_node: Encounter, initiating_entity: Entity ) {#method-handle-unique-encounter-combat-started}

Handle when a unique encounter group enters combat

### void handle_unique_encounter_combat_ended( encounter_node: Encounter, reason: String ) {#method-handle-unique-encounter-combat-ended}

Handle when a unique encounter group ends combat

### bool is_entity_in_encounter( entity: Entity ) {#method-is-entity-in-encounter}

Check if an entity is currently in any encounter

### CombatSession get_encounter_for_entity( entity: Entity ) {#method-get-encounter-for-entity}

Get the encounter that an entity is currently in

### Array[Entity] get_entities_in_encounter_with( entity: Entity ) {#method-get-entities-in-encounter-with}

Get all entities in the same encounter as the given entity

### void unregister_entity_from_combat_tracking( entity: Entity ) {#method-unregister-entity-from-combat-tracking}

Remove entity from combat tracking when they're freed/destroyed

### void register_entity_for_combat_tracking( entity: Entity ) {#method-register-entity-for-combat-tracking}

Register an entity for combat tracking and connect signals

### Array[CombatSession] get_all_encounters() {#method-get-all-encounters}

Get all active encounters as an array

### void start_combat_music() {#method-start-combat-music}

Start combat music if not already playing

### void register_world_effect( effect_instance: EffectInstance ) {#method-register-world-effect}

Register an effect with the world manager (called by EffectInstance when no entity owner)

### void unregister_world_effect( effect_instance: EffectInstance ) {#method-unregister-world-effect}

Unregister an effect from the world manager

### bool has_world_effect( effect_instance: EffectInstance ) {#method-has-world-effect}

Check if a world effect is registered

### EffectInstance spawn_world_effect( effect: Effect, position: Vector3 ) {#method-spawn-world-effect}

Spawn a world effect at a specific position using EnvironmentalEffects as originator

### EffectInstance spawn_world_effect_on_target( effect: Effect, target: Variant ) {#method-spawn-world-effect-on-target}

Spawn a world effect targeting a specific entity

### Array[EffectInstance] get_world_effects() {#method-get-world-effects}

Get all world effects (copy for safety)

### Array[EffectInstance] get_world_effects_by_type( effect_type: String ) {#method-get-world-effects-by-type}

Get world effects by type

### Array[EffectInstance] get_world_area_effects() {#method-get-world-area-effects}

Get area effects in the world

### Array[EffectInstance] get_world_collision_effects() {#method-get-world-collision-effects}

Get collision effects in the world

### Array[EffectInstance] get_world_projectile_effects() {#method-get-world-projectile-effects}

Get projectile effects in the world

### Array get_world_effects_by_originator( originator: Entity ) {#method-get-world-effects-by-originator}

Find world effects by originator

### Array[EffectInstance] get_world_area_effects_by_originator( originator: Entity ) {#method-get-world-area-effects-by-originator}

Find world area effects by originator

### Array[EffectInstance] get_world_effects_near_point( point: Vector3, max_distance: float = 5.0 ) {#method-get-world-effects-near-point}

Find world effects by target point (within range)

### EffectInstance find_existing_world_effect_by_stacking_rule( effect_def: Effect, originator: Entity ) {#method-find-existing-world-effect-by-stacking-rule}

Find existing world effect that matches stacking rules (called by EffectInstance)

### int cleanup_world_effects() {#method-cleanup-world-effects}

Clean up finished world effects (call this in _process or _ready)

### int clear_world_effects_by_originator( originator: Entity ) {#method-clear-world-effects-by-originator}

Remove all world effects from a specific originator (useful when entity dies/leaves)

### void clear_world_effects() {#method-clear-world-effects}

Remove all world effects (useful for scene transitions)

### DamageResult apply_damage( attacker: Variant, target: Variant, raw_damage: float, damage_type: int, effect_instance: EffectInstance, can_be_avoided: bool = true, chain_depth: int = 0 ) {#method-apply-damage}

Resolves one hit from start to finish and returns the DamageResult every consumer reads. Phase 1: the attacker's calculation (crits, attack power ...) fills `done`. Phase 2: the target completes the result (redirection, immunity, dodge / block / armor, shields, health, death). A script error inside the target's processing returns null from `take_damage`; it is turned into a FAILED result here, so a crash can never be mistaken for a hit. `chain_depth` is 0 for a normal hit and result.next_chain_depth() for damage caused by reacting to a hit (damage reflection, reactive damage).

### void announce_miss( attacker: Entity, target: Entity, effect_instance: EffectInstance ) {#method-announce-miss}

Tells everyone that an attack missed (the outcome of a failed hit roll)

### DamageResult run_damage_done( attacker: Variant, raw_damage: float, damage_type: int, effect_instance: EffectInstance = null ) {#method-run-damage-done}

Runs only the attacker's damage-done phase (crits, attack power ...) on a number and returns the DamageResult (`done` is the final number; the triggers and steps are recorded). For effects that apply a number of their own (the pool and stat modifier effects) instead of hitting a target.

### HealingResult apply_healing( healer_entity: Variant, target_entity: Variant, raw_healing: float, effect_instance: EffectInstance, chain_depth: int = 0, only_pool_id: int = 0 ) {#method-apply-healing}

Resolves one heal from start to finish and returns the HealingResult: the healer's calculation fills `done`, the target completes the result (healing-taken modifiers, pools, revive). A script error is turned into a FAILED result. `only_pool_id` limits the heal to one pool (0 = every pool that receives healing)

### HealingResult run_healing_done( healer: Variant, raw_healing: float, effect_instance: EffectInstance = null ) {#method-run-healing-done}

Runs only the healer's healing-done phase on a number and returns the HealingResult (`done` is the final number)

### int cleanup_invalid_encounters() {#method-cleanup-invalid-encounters}

Clean up invalid encounters and participants

### void cleanup() {#method-cleanup}

Complete system cleanup - clear all encounters, effects, and environmental effects

### Dictionary save_data() {#method-save-data}

*No description yet.*

### void load_data( save_data: Dictionary, system_hub: GameHost.SystemHub ) {#method-load-data}

*No description yet.*

