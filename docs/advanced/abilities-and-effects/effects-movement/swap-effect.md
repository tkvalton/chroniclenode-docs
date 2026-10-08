<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SwapEffect

**Inherits:** [MoveToPointEffect](/advanced/abilities-and-effects/effects-base/move-to-point-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

SwapEffect: Two entities instantly swap positions

## Description

SwapEffect: Two entities instantly swap positions The originator teleports to the target's position and vice versa. Child effects can be applied to either or both entities on arrival.

Perfect for support life-saving swaps, trickster position exchanges, chaos mage scrambles, and tactical repositioning abilities.

## Properties

| | | |
|---|---|---|
| `SwapChildTarget` | [child_effect_target](#prop-child-effect-target) | `SwapChildTarget.BOTH` |
| `bool` | [snap_to_ground](#prop-snap-to-ground) | `true` |

## Methods

| | |
|---|---|
| `void` | [process_before_start](#method-process-before-start)( `effect_instance: EffectInstance` ) |
| `void` | [apply_movement_to_point](#method-apply-movement-to-point)( `effect_instance: EffectInstance, entity: Entity, _target_position: Vector3` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Enumerations

### enum SwapChildTarget {#enum-swapchildtarget}

- **BOTH** = `0` - Apply child effects to both originator and target
- **TARGET_ONLY** = `1` - Apply child effects only to the target
- **SELF_ONLY** = `2` - Apply child effects only to the originator

## Property descriptions

*Swap Settings*

### SwapChildTarget child_effect_target = SwapChildTarget.BOTH {#prop-child-effect-target}

Who receives child effects after the swap

### bool snap_to_ground = true {#prop-snap-to-ground}

Whether to find valid ground positions at each swap destination

## Method descriptions

### void process_before_start( effect_instance: EffectInstance ) {#method-process-before-start}

Swap is always instant

### void apply_movement_to_point( effect_instance: EffectInstance, entity: Entity, _target_position: Vector3 ) {#method-apply-movement-to-point}

Virtual method for child classes to implement their movement logic *(from [MoveToPointEffect](/advanced/abilities-and-effects/effects-base/move-to-point-effect))*

### String get_effect_description() {#method-get-effect-description}

*Overrides this function of [MoveToPointEffect](/advanced/abilities-and-effects/effects-base/move-to-point-effect).*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect).*

