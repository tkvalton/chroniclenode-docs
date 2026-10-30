<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GroundMarkEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Leaves a mark on the ground where its target is: a scorch (a fireball, an explosion), a crater (a slam, a meteor), a stain (a splash, a spill), or a picture of your own. The mark is a decal on the ground (it follows hills and lies on any floor) and fades out after its time; the ground has at most as many marks as the Gameplay Config says (the oldest goes first). Use it as a child of an ability effect, an area, a projectile: wherever the effect lands, the ground remembers.

## Properties

| | | |
|---|---|---|
| `Mark` | [mark](#prop-mark) | `Mark.SCORCH` |
| `float` | [size](#prop-size) | `3.0` |
| `float` | [fade_seconds](#prop-fade-seconds) | `60.0` |
| `Color` | [color](#prop-color) | `Color(0.04, 0.035, 0.03, 0.85)` |
| `Texture2D` | [picture](#prop-picture) | `null` |
| `bool` | [random_turn](#prop-random-turn) | `true` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Enumerations

### enum Mark {#enum-mark}

What the mark looks like

- **SCORCH** = `0`
- **CRATER** = `1`
- **STAIN** = `2`
- **FOOTPRINT** = `3`
- **TRACK** = `4`
- **YOUR_PICTURE** = `5`

## Property descriptions

*Ground Mark Settings*

### Mark mark = Mark.SCORCH {#prop-mark}

The kind of mark

### float size = 3.0 {#prop-size}

How wide the mark is, in metres

### float fade_seconds = 60.0 {#prop-fade-seconds}

How long the mark stays before it fades out, in seconds

### Color color = Color(0.04, 0.035, 0.03, 0.85) {#prop-color}

The colour of the mark and how strong it is (the alpha)

### Texture2D picture = null {#prop-picture}

A picture of your own (with Your picture): white where the mark is, with an alpha

### bool random_turn = true {#prop-random-turn}

Each mark is turned a random way round

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Puts the mark on the ground under the target

### String get_effect_description() {#method-get-effect-description}

The text of the effect for tooltips, with its values filled in.

### String get_editor_description() {#method-get-editor-description}

A short text for the effect editor that says what the effect does.

### Array[Dictionary] validate() {#method-validate}

Validation

