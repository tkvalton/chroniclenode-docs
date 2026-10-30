<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ScreenLookEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

ScreenLookEffect changes how the screen of the player looks while it lasts: a red vignette when hurt, a grey blurred picture when stunned, a green tint when poisoned, colour fringes in the void, a push of the field of view when sprinting. Only the character the player controls changes the screen (an effect on an NPC or on another party member does nothing to it). Looks of several effects are added up, a higher Layer priority is laid over a lower one. The player's Screen effects setting (off, reduced, full) decides how much of it is shown. An immediate effect shows its look for a moment (a flash). See docs: World &gt; Camera effects.

## Properties

| | | |
|---|---|---|
| `Color` | [tint](#prop-tint) | `Color(0.8, 0.1, 0.1, 0.0)` |
| `float` | [vignette](#prop-vignette) | `0.0` |
| `Color` | [vignette_color](#prop-vignette-color) | `Color(0.45, 0.0, 0.0, 1.0)` |
| `float` | [blur](#prop-blur) | `0.0` |
| `float` | [desaturate](#prop-desaturate) | `0.0` |
| `float` | [aberration](#prop-aberration) | `0.0` |
| `float` | [grain](#prop-grain) | `0.0` |
| `float` | [fov_kick](#prop-fov-kick) | `0.0` |
| `float` | [fade_in](#prop-fade-in) | `0.4` |
| `float` | [fade_out](#prop-fade-out) | `0.6` |
| `float` | [pulse_seconds](#prop-pulse-seconds) | `0.5` |
| `int` | [layer_priority](#prop-layer-priority) | `20` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `bool` | [is_one_off_application](#method-is-one-off-application)() |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Property descriptions

*Look*

### Color tint = Color(0.8, 0.1, 0.1, 0.0) {#prop-tint}

A colour laid over the picture. Its alpha is how strong it is (0 = no tint)

### float vignette = 0.0 {#prop-vignette}

How dark the corners are (0 = not at all, 1 = black)

### Color vignette_color = Color(0.45, 0.0, 0.0, 1.0) {#prop-vignette-color}

The colour of the dark corners

### float blur = 0.0 {#prop-blur}

Blur of the whole picture (reduced and off in the player's Screen effects)

### float desaturate = 0.0 {#prop-desaturate}

0 = the colours as they are, 1 = black and white

### float aberration = 0.0 {#prop-aberration}

Colour fringes towards the edges (reduced and off in the player's Screen effects)

### float grain = 0.0 {#prop-grain}

Film grain (reduced and off in the player's Screen effects)

### float fov_kick = 0.0 {#prop-fov-kick}

Degrees added to the field of view (negative zooms in): a kick when sprinting or flying (reduced and off in the player's Screen effects)

*Timing*

### float fade_in = 0.4 {#prop-fade-in}

Seconds the look takes to come to full strength

### float fade_out = 0.6 {#prop-fade-out}

Seconds the look takes to go when the effect ends

### float pulse_seconds = 0.5 {#prop-pulse-seconds}

An immediate effect shows its look for this many seconds (a flash). Effects with a duration last as long as they do

### int layer_priority = 20 {#prop-layer-priority}

Which look is laid over which when two are on at the same time (a zone is 10, an effect 20, an event 50, the water 100)

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Puts the look on the screen (once per instance, so two of these end independently)

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Called when the effect ends: the look fades out

### bool is_one_off_application() {#method-is-one-off-application}

A flash of an immediate effect is not brought back by a load

### String get_effect_description() {#method-get-effect-description}

The text of the effect for tooltips, with its values filled in.

### String get_editor_description() {#method-get-editor-description}

A short text for the effect editor that says what the effect does.

### Array[Dictionary] validate() {#method-validate}

Validation

