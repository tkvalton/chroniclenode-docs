<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# HitscanEffect

**Inherits:** [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

An instant shot: a line from the muzzle of the originator towards the target (an entity, or the point the user aims at) as far as `max_range`,

## Properties

| | | |
|---|---|---|
| `Targets` | [targets](#prop-targets) | `Targets.ENEMIES` |
| `float` | [max_range](#prop-max-range) | `40.0` |
| `int` | [pierce_count](#prop-pierce-count) | `0` |
| `bool` | [stops_at_world](#prop-stops-at-world) | `true` |
| `VFXSelection.VfxLocation` | [muzzle_point](#prop-muzzle-point) | `VFXSelection.VfxLocation.HEAD` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |
| `bool` | [is_one_off_application](#method-is-one-off-application)() |

## Enumerations

### enum Targets {#enum-targets}

- **ENEMIES** = `0` - hostile entities; allies and neutrals are passed through
- **ALLIES** = `1` - friendly entities
- **EVERYONE** = `2` - any entity
- **TARGET_ONLY** = `3` - only the entity the shot was aimed at

## Property descriptions

*Hitscan*

### Targets targets = Targets.ENEMIES {#prop-targets}

Which entities the shot hits (the others do not stop it)

### float max_range = 40.0 {#prop-max-range}

How far the line reaches from the muzzle

### int pierce_count = 0 {#prop-pierce-count}

Extra entities hit after the first (0 = the first only, -1 = everything along the line)

### bool stops_at_world = true {#prop-stops-at-world}

Walls and other solid things stop the line (off: it passes through them)

### VFXSelection.VfxLocation muzzle_point = VFXSelection.VfxLocation.HEAD {#prop-muzzle-point}

Where the line starts on the originator

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

*No description yet.*

### String get_effect_description() {#method-get-effect-description}

*No description yet.*

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

### bool is_one_off_application() {#method-is-one-off-application}

The shot happens once, when it is fired: a loaded save does not fire it again

