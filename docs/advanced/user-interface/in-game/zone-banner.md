<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ZoneBanner

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

The banner that shows the name of a zone when the party enters it: a big line (the zone, "Elderwood") and a small line under it (the sub-zone, or the line of the zone: "Home of the old mill"). It fades in, holds and fades out. The UI manager makes one and connects it to the zone tracker of the world container (`banner_requested`). Replace it with your own: any node with a `show_zone(title, subtitle)` method can be connected to the tracker the same way.

## Variables

| | | |
|---|---|---|
| `Label` | [title_label](#var-title-label) |  |
| `Label` | [subtitle_label](#var-subtitle-label) |  |

## Methods

| | |
|---|---|
| `void` | [show_zone](#method-show-zone)( `title: String, subtitle: String = ""` ) |
| `bool` | [is_showing](#method-is-showing)() |
| `void` | [hide_now](#method-hide-now)() |

## Constants

- `float` **FADE_IN** = `0.6` - How long the banner takes to fade in, stays, and takes to fade out (seconds).
- `float` **HOLD** = `2.8`
- `float` **FADE_OUT** = `1.2`
- `int` **TITLE_SIZE** = `46` - The size of the big line and of the small line.
- `int` **SUBTITLE_SIZE** = `22`

## Variable descriptions

### Label title_label {#var-title-label}

*No description yet.*

### Label subtitle_label {#var-subtitle-label}

*No description yet.*

## Method descriptions

### void show_zone( title: String, subtitle: String = "" ) {#method-show-zone}

Shows the banner: it fades in, holds, fades out. A banner that is still showing is replaced.

### bool is_showing() {#method-is-showing}

Is the banner on the screen?

### void hide_now() {#method-hide-now}

Takes the banner away at once.

