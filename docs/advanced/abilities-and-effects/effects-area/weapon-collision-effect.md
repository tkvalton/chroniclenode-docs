<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WeaponCollisionEffect

**Inherits:** [CollisionEffect](/advanced/abilities-and-effects/effects-base/collision-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

WeaponCollisionEffect for melee attacks that use the weapon's collision shape Automatically uses the collision shape from the user's equipped weapon in the specified slot

## Properties

| | | |
|---|---|---|
| `int` | [equipment_slot](#prop-equipment-slot) |  |

## Methods

| | |
|---|---|
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

### int equipment_slot {#prop-equipment-slot}

Which equipment slot to get the weapon from (must be a weapon slot)

## Method descriptions

### String get_effect_description() {#method-get-effect-description}

Override description to include weapon slot information

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [CollisionEffect](/advanced/abilities-and-effects/effects-base/collision-effect).*

