<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AimedTargetStrategyDefinition

**Inherits:** [TargetStrategyDefinition](/advanced/abilities-and-effects/target-strategies/target-strategy-definition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

The target is whatever the user is aiming at (Entity.get_aim: the crosshair or mouse pointer for the player, the target for an NPC).

## Properties

| | | |
|---|---|---|
| `Filter` | [filter](#prop-filter) | `Filter.ENEMIES` |
| `float` | [aim_assist_angle](#prop-aim-assist-angle) | `6.0` |
| `bool` | [free_fire](#prop-free-fire) | `true` |
| `bool` | [prefer_locked_target](#prop-prefer-locked-target) | `true` |
| `bool` | [fallback_to_selected_target](#prop-fallback-to-selected-target) | `true` |

## Methods

| | |
|---|---|
| `Variant` | [resolve](#method-resolve)( `user: Variant` ) |
| `Dictionary` | [validate_target](#method-validate-target)( `strategy_instance: TargetStrategyInstance, _target: Variant, user: Variant` ) |
| `Variant` | [get_auto_target](#method-get-auto-target)( `_strategy_instance: TargetStrategyInstance, user: Variant` ) |
| `Variant` | [get_property_value](#method-get-property-value)( `strategy_instance: TargetStrategyInstance, property_name: String` ) |

## Enumerations

### enum Filter {#enum-filter}

- **ENEMIES** = `0` - hostile entities (neutral ones too when the user can attack them)
- **ALLIES** = `1` - friendly entities (a healing arrow)
- **ANYONE** = `2` - any entity

## Property descriptions

*Aim*

### Filter filter = Filter.ENEMIES {#prop-filter}

Which entities the aim picks as the target (anything else is just a point on the way)

### float aim_assist_angle = 6.0 {#prop-aim-assist-angle}

Aim assist in degrees: an entity this close to the aim line counts as aimed at (0 = exactly under the aim)

### bool free_fire = true {#prop-free-fire}

With no entity aimed at, shoot at the point the aim hits. Off: the shot needs an entity

### bool prefer_locked_target = true {#prop-prefer-locked-target}

An entity the user has locked on to is the target whatever the aim says (tab-target and free aim together)

### bool fallback_to_selected_target = true {#prop-fallback-to-selected-target}

With nothing aimed at, the target the user has selected (not locked) is still the target, before a free shot at the aim point (tab-target players keep their target)

## Method descriptions

### Variant resolve( user: Variant ) {#method-resolve}

What the user aims at now: an entity, a point (Vector3), or null (nothing, and no free fire)

### Dictionary validate_target( strategy_instance: TargetStrategyInstance, _target: Variant, user: Variant ) {#method-validate-target}

The aim decides the target, whatever the controller passed (the basic attack passes the selected target): resolved again for every use

### Variant get_auto_target( _strategy_instance: TargetStrategyInstance, user: Variant ) {#method-get-auto-target}

*No description yet.*

### Variant get_property_value( strategy_instance: TargetStrategyInstance, property_name: String ) {#method-get-property-value}

*No description yet.*

