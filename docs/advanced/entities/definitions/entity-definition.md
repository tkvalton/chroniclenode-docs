<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EntityDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [CharacterDefinition](/advanced/entities/definitions/character-definition), [NPCDefinition](/advanced/entities/definitions/npc-definition)

EntityDefinition contains all visual, audio, and display configuration for entities This serves as the base class for NPCDefinition and CharacterDefinition

## Properties

| | | |
|---|---|---|
| `PackedScene` | [entity_model](#prop-entity-model) |  |
| `Vector3` | [model_scale](#prop-model-scale) | `Vector3(1.0, 1.0, 1.0)` |
| `EntityCollisionShape` | [entity_collision_shape](#prop-entity-collision-shape) | `EntityCollisionShape.NORMAL` |
| `String` | [animation_type](#prop-animation-type) | `""` |
| `Array[String]` | [animation_packages](#prop-animation-packages) | `["core", "ability_animations", "transitions"]` |
| `String` | [selected_voice_type](#prop-selected-voice-type) | `""` |
| `String` | [footstep_entity_type](#prop-footstep-entity-type) | `""` |
| `Array[int]` | [entity_tags](#prop-entity-tags) | `[]` |
| `bool` | [template](#prop-template) | `false` |

## Methods

| | |
|---|---|
| `void` | [set_entity_name](#method-set-entity-name)( `new_name: String` ) |
| `String` | [get_entity_name](#method-get-entity-name)() |
| `void` | [set_entity_id](#method-set-entity-id)( `new_id: int` ) |
| `int` | [get_entity_id](#method-get-entity-id)() |
| `void` | [set_animation_type](#method-set-animation-type)( `new_animation: String` ) |
| `String` | [get_animation_type](#method-get-animation-type)() |
| `void` | [set_animation_packages](#method-set-animation-packages)( `new_animation_packages: Array[String]` ) |
| `Array[String]` | [get_animation_packages](#method-get-animation-packages)() |
| `void` | [set_entity_model](#method-set-entity-model)( `new_model: PackedScene` ) |
| `PackedScene` | [get_entity_model](#method-get-entity-model)() |
| `bool` | [has_entity_model](#method-has-entity-model)() |
| `void` | [set_model_scale](#method-set-model-scale)( `new_scale: Vector3` ) |
| `Vector3` | [get_model_scale](#method-get-model-scale)() |
| `void` | [set_uniform_model_scale](#method-set-uniform-model-scale)( `scale: float` ) |
| `void` | [set_collision_shape](#method-set-collision-shape)( `new_shape: EntityCollisionShape` ) |
| `EntityCollisionShape` | [get_collision_shape](#method-get-collision-shape)() |
| `String` | [get_collision_shape_name](#method-get-collision-shape-name)() |
| `bool` | [has_voice_type_selection](#method-has-voice-type-selection)() |
| `void` | [clear_voice_type_selection](#method-clear-voice-type-selection)() |
| `void` | [set_voice_type_selection](#method-set-voice-type-selection)( `entity_type: String, voice_variant: String` ) |
| `String` | [get_voice_entity_type](#method-get-voice-entity-type)() |
| `String` | [get_voice_variant](#method-get-voice-variant)() |
| `bool` | [has_footstep_entity_type](#method-has-footstep-entity-type)() |
| `void` | [clear_footstep_entity_type](#method-clear-footstep-entity-type)() |
| `bool` | [is_template](#method-is-template)() |
| `String` | [get_display_name](#method-get-display-name)() |
| `bool` | [is_valid](#method-is-valid)() |

## Enumerations

### enum EntityCollisionShape {#enum-entitycollisionshape}

- **TINY** = `0`
- **SMALL** = `1`
- **NORMAL** = `2`
- **LARGE** = `3`

## Property descriptions

*Visual Configuration*

### PackedScene entity_model {#prop-entity-model}

3D model/skeleton scene for this entity

### Vector3 model_scale = Vector3(1.0, 1.0, 1.0) {#prop-model-scale}

Scale multiplier applied to the entity model

### EntityCollisionShape entity_collision_shape = EntityCollisionShape.NORMAL {#prop-entity-collision-shape}

Collision shape size category for physics interactions

*Animation Configuration*

### String animation_type = "" {#prop-animation-type}

Animation type identifier for DatabaseAnimation lookup

### Array[String] animation_packages = ["core", "ability_animations", "transitions"] {#prop-animation-packages}

Animation packages to include (core, ability_animations, transitions, etc.)

*Audio Configuration*

### String selected_voice_type = "" {#prop-selected-voice-type}

Voice audio selection in format "entity_type/voice_variant" (e.g. "humanoid/voice_humanoid_masculine_01")

### String footstep_entity_type = "" {#prop-footstep-entity-type}

Footstep audio entity type for DatabaseAudio lookup (e.g. "humanoid", "beast")

### Array[int] entity_tags = [] {#prop-entity-tags}

Type tags of this kind of entity (Humanoid, Beast, Undead ...): EntityTagDefinition ids. Conditions read them

### bool template = false {#prop-template}

*No description yet.*

## Method descriptions

### void set_entity_name( new_name: String ) {#method-set-entity-name}

Set entity display name

### String get_entity_name() {#method-get-entity-name}

Get entity display name

### void set_entity_id( new_id: int ) {#method-set-entity-id}

Set entity ID

### int get_entity_id() {#method-get-entity-id}

Get entity ID

### void set_animation_type( new_animation: String ) {#method-set-animation-type}

Set animation type

### String get_animation_type() {#method-get-animation-type}

Get animation type

### void set_animation_packages( new_animation_packages: Array[String] ) {#method-set-animation-packages}

Set animation packages

### Array[String] get_animation_packages() {#method-get-animation-packages}

Get animation packages

### void set_entity_model( new_model: PackedScene ) {#method-set-entity-model}

Set entity model

### PackedScene get_entity_model() {#method-get-entity-model}

Get entity model

### bool has_entity_model() {#method-has-entity-model}

Check if entity has a model

### void set_model_scale( new_scale: Vector3 ) {#method-set-model-scale}

Set model scale (ensures positive values)

### Vector3 get_model_scale() {#method-get-model-scale}

Get model scale

### void set_uniform_model_scale( scale: float ) {#method-set-uniform-model-scale}

Set uniform scale for all axes

### void set_collision_shape( new_shape: EntityCollisionShape ) {#method-set-collision-shape}

Set collision shape

### EntityCollisionShape get_collision_shape() {#method-get-collision-shape}

Get collision shape

### String get_collision_shape_name() {#method-get-collision-shape-name}

Get collision shape name as string

### bool has_voice_type_selection() {#method-has-voice-type-selection}

Check if voice type is selected

### void clear_voice_type_selection() {#method-clear-voice-type-selection}

Clear voice type selection

### void set_voice_type_selection( entity_type: String, voice_variant: String ) {#method-set-voice-type-selection}

Set voice type selection

### String get_voice_entity_type() {#method-get-voice-entity-type}

Get voice entity type

### String get_voice_variant() {#method-get-voice-variant}

Get voice variant

### bool has_footstep_entity_type() {#method-has-footstep-entity-type}

Check if footstep entity type is set

### void clear_footstep_entity_type() {#method-clear-footstep-entity-type}

Clear footstep entity type

### bool is_template() {#method-is-template}

Check if this EntityDefinition is a template

### String get_display_name() {#method-get-display-name}

Get display name appropriate for templates vs entities

### bool is_valid() {#method-is-valid}

Validates that all required entity configuration is present

