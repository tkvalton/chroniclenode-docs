<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AnimationSelection

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [AnimationSelectionAbility](/advanced/assets/selections-animation/animation-selection-ability), [AnimationSelectionSocial](/advanced/assets/selections-animation/animation-selection-social), [AnimationSelectionStatusEffect](/advanced/assets/selections-animation/animation-selection-status-effect)

Base class for animation selection resources - now simplified to just return animation names

## Properties

| | | |
|---|---|---|
| `float` | [speed_scale](#prop-speed-scale) | `1.0` |
| `bool` | [is_full_body](#prop-is-full-body) | `false` |

## Methods

| | |
|---|---|
| `String` | [get_animation_name](#method-get-animation-name)( `context: String = ""` ) |

## Property descriptions

### float speed_scale = 1.0 {#prop-speed-scale}

*No description yet.*

### bool is_full_body = false {#prop-is-full-body}

*No description yet.*

## Method descriptions

### String get_animation_name( context: String = "" ) {#method-get-animation-name}

Get the animation name - must be implemented by subclasses

