<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ScreenLook

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

One look of the screen: how it is tinted, how dark the corners are, how blurred, grey, fringed and grainy the picture is, and how far the field of view is pushed. CameraLook blends the looks of its layers (an effect, an event, a zone, the water) and shows the result. Every number is 0 for "nothing".

## Variables

| | | |
|---|---|---|
| `Color` | [tint](#var-tint) | `Color(0.0, 0.0, 0.0, 0.0)` |
| `float` | [vignette](#var-vignette) | `0.0` |
| `Color` | [vignette_color](#var-vignette-color) | `Color.BLACK` |
| `float` | [blur](#var-blur) | `0.0` |
| `float` | [desaturate](#var-desaturate) | `0.0` |
| `float` | [aberration](#var-aberration) | `0.0` |
| `float` | [grain](#var-grain) | `0.0` |
| `float` | [fov_kick](#var-fov-kick) | `0.0` |

## Methods

| | |
|---|---|
| `bool` | [is_neutral](#method-is-neutral)() |
| `ScreenLook` | [duplicate_look](#method-duplicate-look)() |
| `ScreenLook` | [filtered](#method-filtered)( `level: int` ) |
| `ScreenLook` | [from_tint](#method-from-tint)( `color: Color` ) *static* |

## Variable descriptions

### Color tint = Color(0.0, 0.0, 0.0, 0.0) {#var-tint}

The colour of a tint over the picture; its alpha is how strong it is

### float vignette = 0.0 {#var-vignette}

How dark the corners are (0 to 1)

### Color vignette_color = Color.BLACK {#var-vignette-color}

The colour of the dark corners

### float blur = 0.0 {#var-blur}

Blur of the whole picture (0 to 1)

### float desaturate = 0.0 {#var-desaturate}

0 = the colours as they are, 1 = black and white

### float aberration = 0.0 {#var-aberration}

Colour fringes towards the edges (0 to 1)

### float grain = 0.0 {#var-grain}

Film grain (0 to 1)

### float fov_kick = 0.0 {#var-fov-kick}

Degrees added to the field of view (negative = zoom in): a kick when sprinting or flying

## Method descriptions

### bool is_neutral() {#method-is-neutral}

Does it change nothing?

### ScreenLook duplicate_look() {#method-duplicate-look}

*No description yet.*

### ScreenLook filtered( level: int ) {#method-filtered}

What the player's "screen effects" setting leaves of it: Full all of it, Reduced the tint, the grey and half of the vignette (no blur, fringes, grain or kicks), Off nothing

### ScreenLook from_tint( color: Color ) {#method-from-tint}

A look that is only a tint

