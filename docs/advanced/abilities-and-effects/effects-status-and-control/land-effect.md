<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LandEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

LandEffect brings its target down: it ends the Flight effects on it, so the entity falls and lands as it does after any fall. Use it for a spell that grounds a flyer, an ability that lets a flyer land (or one that makes it let go of the air), a landing zone or a trap. It does nothing to an entity that is not flying by a Flight effect (a mount, a volume of the world and the like decide for themselves).

## Properties

| | | |
|---|---|---|
| `int` | [flight_effect_id](#prop-flight-effect-id) | `0` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

*Land Settings*

### int flight_effect_id = 0 {#prop-flight-effect-id}

The id of the Flight effect to end. 0 = every Flight effect on the target

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Ends the flights of the target

### String get_effect_description() {#method-get-effect-description}

The text of the effect for tooltips, with its values filled in.

### String get_editor_description() {#method-get-editor-description}

A short text for the effect editor that says what the effect does.

