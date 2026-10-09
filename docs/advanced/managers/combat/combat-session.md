<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CombatSession

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

CombatSession manages a single active combat encounter at runtime. It tracks all participating entities, manages combat timing, and coordinates encounter-wide events and states.

## Description

This class is designed to work with CombatSystem's encounter management. CombatSystem creates, manages, and destroys these instances automatically. Now supports multiple unique encounters and encounter reaction signal management.

## Variables

| | | |
|---|---|---|
| `String` | [encounter_id](#var-encounter-id) |  |
| `Array[Entity]` | [participants](#var-participants) | `[]` |
| `float` | [start_time](#var-start-time) |  |
| `bool` | [is_active](#var-is-active) | `false` |
| `Vector3` | [encounter_center](#var-encounter-center) |  |
| `float` | [max_join_distance](#var-max-join-distance) | `50.0` |
| `Array[Encounter]` | [encounter_nodes](#var-encounter-nodes) | `[]` |
| `Array[EncounterReaction]` | [encounter_reactions](#var-encounter-reactions) | `[]` |

## Methods

| | |
|---|---|
| `bool` | [add_participant](#method-add-participant)( `entity: Entity` ) |
| `bool` | [remove_participant](#method-remove-participant)( `entity: Entity` ) |
| `bool` | [add_encounter_node](#method-add-encounter-node)( `node: Encounter` ) |
| `bool` | [remove_encounter_node](#method-remove-encounter-node)( `node: Encounter` ) |
| `bool` | [should_end_encounter](#method-should-end-encounter)() |
| `void` | [end_encounter](#method-end-encounter)( `reason: String` ) |
| `bool` | [can_entity_join](#method-can-entity-join)( `entity: Entity, target_entity: Entity = null` ) |
| `bool` | [is_unique_encounter](#method-is-unique-encounter)() |
| `bool` | [has_encounter_node](#method-has-encounter-node)( `node: Encounter` ) |
| `Array[Encounter]` | [get_encounters](#method-get-encounters)() |
| `bool` | [is_scripted_encounter](#method-is-scripted-encounter)() |
| `Array[String]` | [get_hostile_factions](#method-get-hostile-factions)() |
| `Array[Entity]` | [get_entities_by_faction](#method-get-entities-by-faction)( `faction_id: int` ) |
| `Array[Entity]` | [get_allies_of_entity](#method-get-allies-of-entity)( `entity: Entity` ) |
| `Array[Entity]` | [get_enemies_of_entity](#method-get-enemies-of-entity)( `entity: Entity` ) |
| `float` | [get_encounter_duration](#method-get-encounter-duration)() |
| `String` | [get_encounter_duration_formatted](#method-get-encounter-duration-formatted)() |
| `bool` | [has_been_running_longer_than](#method-has-been-running-longer-than)( `seconds: float` ) |
| `int` | [get_participant_count](#method-get-participant-count)() |
| `int` | [get_living_participant_count](#method-get-living-participant-count)() |
| `int` | [get_participant_count_by_faction](#method-get-participant-count-by-faction)( `faction_id: int` ) |
| `bool` | [has_participant](#method-has-participant)( `entity: Entity` ) |
| `bool` | [has_player_participants](#method-has-player-participants)() |
| `Array[Entity]` | [get_player_participants](#method-get-player-participants)() |
| `Array[Entity]` | [get_npc_participants](#method-get-npc-participants)() |
| `int` | [cleanup_invalid_participants](#method-cleanup-invalid-participants)() |
| `Array[Entity]` | [get_enemies_in_range](#method-get-enemies-in-range)( `entity: Entity, range: float` ) |
| `Array[Entity]` | [get_allies_in_range](#method-get-allies-in-range)( `entity: Entity, range: float` ) |
| `bool` | [is_encounter_balanced](#method-is-encounter-balanced)( `balance_threshold: float = 1.5` ) |
| `bool` | [is_faction_outnumbered](#method-is-faction-outnumbered)( `faction_id: int, outnumber_threshold: float = 2.0` ) |
| `int` | [force_faction_into_combat](#method-force-faction-into-combat)( `faction_id: int, target_entity: Entity` ) |
| `int` | [get_encounter_phase](#method-get-encounter-phase)() |
| `bool` | [is_entity_allowed_to_attack](#method-is-entity-allowed-to-attack)( `entity: Entity` ) |

## Signals

### encounter_started( encounter: CombatSession ) {#signal-encounter-started}

Signals for encounter lifecycle

### participant_joined( encounter: CombatSession, entity: Entity ) {#signal-participant-joined}

### participant_left( encounter: CombatSession, entity: Entity ) {#signal-participant-left}

### encounter_ended( encounter: CombatSession, reason: String ) {#signal-encounter-ended}

## Variable descriptions

### String encounter_id {#var-encounter-id}

Unique identifier for this encounter

### Array[Entity] participants = [] {#var-participants}

All entities currently participating in this encounter

### float start_time {#var-start-time}

When this encounter started (unix timestamp)

### bool is_active = false {#var-is-active}

Whether this encounter is currently active

### Vector3 encounter_center {#var-encounter-center}

Geographic center point of the encounter (for proximity checks)

### float max_join_distance = 50.0 {#var-max-join-distance}

Maximum distance entities can be from center to join this encounter

### Array[Encounter] encounter_nodes = [] {#var-encounter-nodes}

References to unique encounter nodes (supports multiple unique encounters)

### Array[EncounterReaction] encounter_reactions = [] {#var-encounter-reactions}

All encounter reactions from unique encounters

## Method descriptions

### bool add_participant( entity: Entity ) {#method-add-participant}

Add an entity to this encounter

### bool remove_participant( entity: Entity ) {#method-remove-participant}

Remove an entity from this encounter

### bool add_encounter_node( node: Encounter ) {#method-add-encounter-node}

Add a unique encounter node to this instance

### bool remove_encounter_node( node: Encounter ) {#method-remove-encounter-node}

Remove a unique encounter node from this instance

### bool should_end_encounter() {#method-should-end-encounter}

Check if this encounter should end

### void end_encounter( reason: String ) {#method-end-encounter}

End this encounter

### bool can_entity_join( entity: Entity, target_entity: Entity = null ) {#method-can-entity-join}

Check if an entity can join this encounter based on proximity and combat state

### bool is_unique_encounter() {#method-is-unique-encounter}

Check if this encounter involves any unique encounters

### bool has_encounter_node( node: Encounter ) {#method-has-encounter-node}

Check if this encounter involves a specific unique encounter

### Array[Encounter] get_encounters() {#method-get-encounters}

Get all encounters

### bool is_scripted_encounter() {#method-is-scripted-encounter}

Check if this encounter is scripted (has any unique encounters)

### Array[String] get_hostile_factions() {#method-get-hostile-factions}

Get all hostile factions in this encounter

### Array[Entity] get_entities_by_faction( faction_id: int ) {#method-get-entities-by-faction}

Get all entities of a specific faction in this encounter

### Array[Entity] get_allies_of_entity( entity: Entity ) {#method-get-allies-of-entity}

Get all allies of a specific entity within this encounter

### Array[Entity] get_enemies_of_entity( entity: Entity ) {#method-get-enemies-of-entity}

Get all enemies of a specific entity within this encounter

### float get_encounter_duration() {#method-get-encounter-duration}

Get encounter duration in seconds

### String get_encounter_duration_formatted() {#method-get-encounter-duration-formatted}

Get encounter duration in a readable format

### bool has_been_running_longer_than( seconds: float ) {#method-has-been-running-longer-than}

Check if encounter has been running longer than specified time

### int get_participant_count() {#method-get-participant-count}

Get the number of participants

### int get_living_participant_count() {#method-get-living-participant-count}

Get the number of living participants

### int get_participant_count_by_faction( faction_id: int ) {#method-get-participant-count-by-faction}

Get the number of participants by faction

### bool has_participant( entity: Entity ) {#method-has-participant}

Check if encounter has a specific entity

### bool has_player_participants() {#method-has-player-participants}

Check if encounter has any players

### Array[Entity] get_player_participants() {#method-get-player-participants}

Get all player participants (simplified for testing)

### Array[Entity] get_npc_participants() {#method-get-npc-participants}

Get all NPC participants (simplified for testing)

### int cleanup_invalid_participants() {#method-cleanup-invalid-participants}

Clean up invalid participants

### Array[Entity] get_enemies_in_range( entity: Entity, range: float ) {#method-get-enemies-in-range}

Get enemies within range of a specific entity (encounter-aware version)

### Array[Entity] get_allies_in_range( entity: Entity, range: float ) {#method-get-allies-in-range}

Get allies within range of a specific entity (encounter-aware version)

### bool is_encounter_balanced( balance_threshold: float = 1.5 ) {#method-is-encounter-balanced}

Check if this encounter is balanced (roughly equal forces)

### bool is_faction_outnumbered( faction_id: int, outnumber_threshold: float = 2.0 ) {#method-is-faction-outnumbered}

Check if a faction is outnumbered in this encounter

### int force_faction_into_combat( faction_id: int, target_entity: Entity ) {#method-force-faction-into-combat}

Force all entities of a faction into combat (for scripted encounters)

### int get_encounter_phase() {#method-get-encounter-phase}

Get encounter phase (for multi-phase encounters)

### bool is_entity_allowed_to_attack( entity: Entity ) {#method-is-entity-allowed-to-attack}

Check if an entity is allowed to attack (for coordinated unique encounters)

