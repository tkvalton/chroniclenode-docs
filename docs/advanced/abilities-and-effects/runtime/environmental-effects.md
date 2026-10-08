<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EnvironmentalEffects

**Inherits:** [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

EnvironmentalEffects serves as a universal originator for world effects spawned by the environment. This class provides all the necessary components and interfaces required by the effect system while representing neutral environmental sources like traps, magical phenomena, etc.

## Variables

| | | |
|---|---|---|
| `String` | [display_name](#var-display-name) | `"Environmental"` |
| `FactionDefinition` | [faction](#var-faction) |  |
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |
| `StatsComponent` | [stats_component](#var-stats-component) |  |
| `EffectsComponent` | [effects_component](#var-effects-component) |  |
| `ComponentsManager` | [components](#var-components) |  |
| `AudioComponent` | [audio_component](#var-audio-component) |  |
| `Variant` | [summoner](#var-summoner) | `null` |

## Methods

| | |
|---|---|
| `float` | [get_weapon_damage](#method-get-weapon-damage)() |
| `int` | [get_equipped_weapon_damage_type](#method-get-equipped-weapon-damage-type)() |
| `bool` | [can_be_effect_originator](#method-can-be-effect-originator)() |
| `String` | [get_display_name](#method-get-display-name)() |
| `EffectInstance` | [spawn_effect_at_position](#method-spawn-effect-at-position)( `effect: Effect, world_position: Vector3` ) |
| `EffectInstance` | [spawn_effect_on_target](#method-spawn-effect-on-target)( `effect: Effect, target_entity: Variant` ) |
| `DamageResult` | [take_damage](#method-take-damage)( `result: DamageResult` ) |
| `HealingResult` | [take_healing](#method-take-healing)( `result: HealingResult` ) |
| `Array[EffectInstance]` | [get_active_environmental_effects](#method-get-active-environmental-effects)() |
| `bool` | [has_active_effects](#method-has-active-effects)() |
| `void` | [cleanup_all_effects](#method-cleanup-all-effects)() |

## Signals

### entity_dealt_damage( effect_instance: EffectInstance, target: Variant ) {#signal-entity-dealt-damage}

Combat signals for effect system compatibility

### special_hit_done( stat_id: int, target: Variant, damage: float ) {#signal-special-hit-done}

## Variable descriptions

### String display_name = "Environmental" {#var-display-name}

Display name for logging and debugging

### FactionDefinition faction {#var-faction}

Faction ID for targeting validation (neutral by default)

### GameHost.SystemHub system_hub {#var-system-hub}

The combat system

### StatsComponent stats_component {#var-stats-component}

Stats system for any stat-based calculations

### EffectsComponent effects_component {#var-effects-component}

Effects system for managing effects applied to the environment

### ComponentsManager components {#var-components}

Components manager for effect system compatibility

### AudioComponent audio_component {#var-audio-component}

Audio component for playing environmental effect sounds

### Variant summoner = null {#var-summoner}

No summoner for environmental effects

## Method descriptions

### float get_weapon_damage() {#method-get-weapon-damage}

Get weapon damage for effect calculations (environment has no weapons)

### int get_equipped_weapon_damage_type() {#method-get-equipped-weapon-damage-type}

Get equipped weapon damage type (environment has no weapons)

### bool can_be_effect_originator() {#method-can-be-effect-originator}

Check if this environmental effects node is ready for use

### String get_display_name() {#method-get-display-name}

Get display name for effect logging

### EffectInstance spawn_effect_at_position( effect: Effect, world_position: Vector3 ) {#method-spawn-effect-at-position}

Spawn an environmental effect at a specific world position

### EffectInstance spawn_effect_on_target( effect: Effect, target_entity: Variant ) {#method-spawn-effect-on-target}

Spawn an environmental effect targeting a specific entity

### DamageResult take_damage( result: DamageResult ) {#method-take-damage}

Handle taking damage (environmental effects can be damaged by some effects)

### HealingResult take_healing( result: HealingResult ) {#method-take-healing}

Handle taking healing (environmental effects typically can't be healed)

### Array[EffectInstance] get_active_environmental_effects() {#method-get-active-environmental-effects}

Get all active environmental effects

### bool has_active_effects() {#method-has-active-effects}

Check if environmental effects are currently active

### void cleanup_all_effects() {#method-cleanup-all-effects}

Clean up all environmental effects

