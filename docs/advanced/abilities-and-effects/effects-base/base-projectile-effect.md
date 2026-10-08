<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# BaseProjectileEffect

**Inherits:** [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [BoomerangProjectileEffect](/advanced/abilities-and-effects/effects-projectiles-and-shots/boomerang-projectile-effect), [ChainProjectileEffect](/advanced/abilities-and-effects/effects-projectiles-and-shots/chain-projectile-effect), [DirectProjectileEffect](/advanced/abilities-and-effects/effects-projectiles-and-shots/direct-projectile-effect), [HomingProjectileEffect](/advanced/abilities-and-effects/effects-projectiles-and-shots/homing-projectile-effect), [PhysicsProjectileEffect](/advanced/abilities-and-effects/effects-projectiles-and-shots/physics-projectile-effect)

Base class for all projectile effects Handles shared functionality like spawn position, signals, and lifecycle

## Properties

| | | |
|---|---|---|
| `VFXSelectionLoop` | [vfx_selection](#prop-vfx-selection) |  |
| `float` | [projectile_speed](#prop-projectile-speed) | `15.0` |
| `bool` | [charge_scales_speed](#prop-charge-scales-speed) | `false` |
| `Shape3D` | [projectile_shape](#prop-projectile-shape) |  |
| `Vector3` | [offset](#prop-offset) | `Vector3(0.3, 1, -1)` |
| `VFXSelection.VfxLocation` | [spawn_point](#prop-spawn-point) |  |

## Methods

| | |
|---|---|
| `void` | [process_before_start](#method-process-before-start)( `effect_instance: EffectInstance` ) |
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `BaseProjectileInstance` | [get_projectile_instance](#method-get-projectile-instance)( `effect_instance: EffectInstance` ) |
| `bool` | [is_projectile_in_flight](#method-is-projectile-in-flight)( `effect_instance: EffectInstance` ) |
| `Array[Entity]` | [get_affected_entities](#method-get-affected-entities)( `effect_instance: EffectInstance` ) |
| `void` | [add_affected_entity](#method-add-affected-entity)( `effect_instance: EffectInstance, entity: Entity` ) |
| `void` | [set_projectile_in_flight](#method-set-projectile-in-flight)( `effect_instance: EffectInstance, in_flight: bool` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_base_projectile_description](#method-get-base-projectile-description)() |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |
| `bool` | [is_one_off_application](#method-is-one-off-application)() |

## Enumerations

### enum TriggerType {#enum-triggertype}

- **COLLISION** = `0`
- **DESTINATION** = `1`

## Property descriptions

### VFXSelectionLoop vfx_selection {#prop-vfx-selection}

VFX for the projectile visual

### float projectile_speed = 15.0 {#prop-projectile-speed}

*No description yet.*

### bool charge_scales_speed = false {#prop-charge-scales-speed}

A drawn shot flies faster the further it was drawn (a bow released early is slow)

### Shape3D projectile_shape {#prop-projectile-shape}

Collision shape for projectile (defaults to small sphere if null)

*Spawn Settings*

### Vector3 offset = Vector3(0.3, 1, -1) {#prop-offset}

Offset from spawn point

### VFXSelection.VfxLocation spawn_point {#prop-spawn-point}

Spawn location

## Method descriptions

### void process_before_start( effect_instance: EffectInstance ) {#method-process-before-start}

Override duration setup to act as persistent effects

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Apply the projectile effect logic

### BaseProjectileInstance get_projectile_instance( effect_instance: EffectInstance ) {#method-get-projectile-instance}

Get projectile instance from effect

### bool is_projectile_in_flight( effect_instance: EffectInstance ) {#method-is-projectile-in-flight}

Check if projectile is in flight

### Array[Entity] get_affected_entities( effect_instance: EffectInstance ) {#method-get-affected-entities}

Get affected entities

### void add_affected_entity( effect_instance: EffectInstance, entity: Entity ) {#method-add-affected-entity}

Add affected entity

### void set_projectile_in_flight( effect_instance: EffectInstance, in_flight: bool ) {#method-set-projectile-in-flight}

Set projectile flight status

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Handle effect finishing

### String get_base_projectile_description() {#method-get-base-projectile-description}

Get base projectile description (subclasses can extend)

### String get_effect_description() {#method-get-effect-description}

Override this to provide complete effect description

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect).*

### bool is_one_off_application() {#method-is-one-off-application}

What this effect does it does once, when it is applied: a loaded save does not do it again

