<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# InteractableDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Core data definition for interactable objects. This is the "NPCDefinition" equivalent for interactables.

## Properties

| | | |
|---|---|---|
| `PackedScene :` | [model_scene](#prop-model-scene) |  |
| `Array[String]` | [available_animations](#prop-available-animations) | `[]` |
| `Vector3` | [model_scale](#prop-model-scale) | `Vector3.ONE` |
| `bool` | [object_targetable_directly](#prop-object-targetable-directly) | `false` |
| `bool` | [object_targetable_by_aoe](#prop-object-targetable-by-aoe) | `false` |
| `bool` | [object_has_stats](#prop-object-has-stats) | `false :` |
| `StatsData` | [stats_data](#prop-stats-data) |  |
| `float` | [damaged_threshold](#prop-damaged-threshold) | `0.7` |
| `int` | [locked_by_item_id](#prop-locked-by-item-id) | `-1` |
| `bool` | [consume_key_on_unlock](#prop-consume-key-on-unlock) | `false` |
| `float` | [interaction_cooldown_duration](#prop-interaction-cooldown-duration) | `0.5` |
| `Interaction` | [interaction](#prop-interaction) | `null` |
| `SFXSelection` | [interaction_sfx](#prop-interaction-sfx) |  |
| `SFXSelection` | [hit_sound](#prop-hit-sound) |  |
| `SFXSelection` | [damaged_sound](#prop-damaged-sound) |  |
| `SFXSelection` | [destroyed_sound](#prop-destroyed-sound) |  |
| `VFXSelection` | [destruction_vfx](#prop-destruction-vfx) |  |

## Methods

| | |
|---|---|
| `bool` | [is_valid](#method-is-valid)() |
| `String` | [get_display_name](#method-get-display-name)() |
| `bool` | [is_destructible](#method-is-destructible)() |
| `bool` | [is_targetable](#method-is-targetable)() |
| `bool` | [is_directly_targetable](#method-is-directly-targetable)() |
| `bool` | [is_aoe_targetable](#method-is-aoe-targetable)() |
| `bool` | [is_locked](#method-is-locked)() |
| `bool` | [has_animation](#method-has-animation)( `anim_name: String` ) |
| `Array[String]` | [get_available_animations](#method-get-available-animations)() |
| `void` | [set_targeting_config](#method-set-targeting-config)( `directly_targetable: bool, aoe_targetable: bool` ) |
| `void` | [make_fully_targetable](#method-make-fully-targetable)() |
| `void` | [make_aoe_targetable_only](#method-make-aoe-targetable-only)() |
| `void` | [make_non_targetable](#method-make-non-targetable)() |

## Property descriptions

*Visuals &amp; Physics*

### PackedScene : model_scene {#prop-model-scene}

InteractableScene containing model, collision, and animations

### Array[String] available_animations = [] {#prop-available-animations}

Available animations (auto-populated from InteractableScene)

### Vector3 model_scale = Vector3.ONE {#prop-model-scale}

Scale multiplier applied to the instantiated scene

*Targeting*

### bool object_targetable_directly = false {#prop-object-targetable-directly}

Can this object be targeted directly by single-target abilities? Examples: Single-target damage spells, heals on destructible objects

### bool object_targetable_by_aoe = false {#prop-object-targetable-by-aoe}

Can this object be hit by area-of-effect abilities? Examples: Fireball explosions, cleave attacks hitting nearby objects

### bool object_has_stats = false : {#prop-object-has-stats}

Does this object have combat stats (health, defense, etc.)? AUTO-CALCULATED: True if either targeting flag is true When true, creates StatsComponent + EffectsComponent at runtime

*Combat Stats*

### StatsData stats_data {#prop-stats-data}

Stats configuration for objects with combat capabilities Only used if object_has_stats is true

### float damaged_threshold = 0.7 {#prop-damaged-threshold}

Damage threshold at which object becomes "damaged" (0.0-1.0)

*Lock System*

### int locked_by_item_id = -1 {#prop-locked-by-item-id}

If &gt; -1, this item ID is required to unlock this object

### bool consume_key_on_unlock = false {#prop-consume-key-on-unlock}

The key is used up when it unlocks the object (off: the key stays in the bag)

*Interaction*

### float interaction_cooldown_duration = 0.5 {#prop-interaction-cooldown-duration}

Seconds an object waits after it was used before it can be used again (0 = no wait)

*Behaviors*

### Interaction interaction = null {#prop-interaction}

The interaction of this object (what happens when it is used) Examples: ContainerInteraction, DoorInteraction, TrapInteraction An object has one interaction (several on one object is a possible future option)

*Audio*

### SFXSelection interaction_sfx {#prop-interaction-sfx}

Sound when object is interacted with (generic interaction)

### SFXSelection hit_sound {#prop-hit-sound}

Sound when object takes damage (if object_has_stats)

### SFXSelection damaged_sound {#prop-damaged-sound}

Sound when object becomes damaged (if object_has_stats)

### SFXSelection destroyed_sound {#prop-destroyed-sound}

Sound when object is destroyed (if object_has_stats)

*VFX*

### VFXSelection destruction_vfx {#prop-destruction-vfx}

VFX to play when destroyed (if object_has_stats)

## Method descriptions

### bool is_valid() {#method-is-valid}

Validates that required configuration is present

### String get_display_name() {#method-get-display-name}

Get display name with ID prefix

### bool is_destructible() {#method-is-destructible}

Check if this object is destructible (has combat stats)

### bool is_targetable() {#method-is-targetable}

Check if this object can be targeted by abilities

### bool is_directly_targetable() {#method-is-directly-targetable}

Check if this object can be targeted by single-target abilities

### bool is_aoe_targetable() {#method-is-aoe-targetable}

Check if this object can be hit by AoE abilities

### bool is_locked() {#method-is-locked}

Check if this object is locked

### bool has_animation( anim_name: String ) {#method-has-animation}

Check if an animation is available

### Array[String] get_available_animations() {#method-get-available-animations}

Get all available animation names

### void set_targeting_config( directly_targetable: bool, aoe_targetable: bool ) {#method-set-targeting-config}

Set targeting configuration and auto-update stats flag

### void make_fully_targetable() {#method-make-fully-targetable}

Configure as fully targetable destructible

### void make_aoe_targetable_only() {#method-make-aoe-targetable-only}

Configure as AoE-only targetable (common for environmental objects)

### void make_non_targetable() {#method-make-non-targetable}

Configure as non-targetable (pure interaction objects)

