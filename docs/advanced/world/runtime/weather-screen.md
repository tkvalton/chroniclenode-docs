<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WeatherScreen

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The screen look of a weather while it changes: a blend of two ScreenLooks (the weather coming in, going out, a shelter weakening it).

## Methods

| | |
|---|---|
| `ScreenLook` | [blend](#method-blend)( `a: ScreenLook, b: ScreenLook, t: float` ) *static* |

## Method descriptions

### ScreenLook blend( a: ScreenLook, b: ScreenLook, t: float ) {#method-blend}

The look `t` (0 to 1) of the way from `a` to `b`: every number slides; a tint that is not shown at one end (its alpha is 0) does not pull the colour of the other

