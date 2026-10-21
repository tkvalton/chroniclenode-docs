<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TooltipBase

**Inherits:** `MarginContainer`

**Inherited by:** [TooltipAbility](/advanced/user-interface/tooltips/tooltip-ability), [TooltipDescription](/advanced/user-interface/tooltips/tooltip-description), [TooltipEffect](/advanced/user-interface/tooltips/tooltip-effect), [TooltipEntity](/advanced/user-interface/tooltips/tooltip-entity), [TooltipItem](/advanced/user-interface/tooltips/tooltip-item), [TooltipSkillNode](/advanced/user-interface/tooltips/tooltip-skill-node)

The base of the five tooltips: the margin from the edges of the screen, and the label settings they share (font, font size, outline and shadow), which are set on the root node of each tooltip scene.

## Properties

| | | |
|---|---|---|
| `Placement` | [placement](#prop-placement) | `Placement.MOUSE` |
| `ScreenCorner` | [fixed_corner](#prop-fixed-corner) | `ScreenCorner.BOTTOM_RIGHT` |
| `Vector2` | [fixed_offset](#prop-fixed-offset) | `Vector2(16, 16)` |
| `Font` | [font](#prop-font) |  |
| `int` | [font_size](#prop-font-size) | `14` |
| `int` | [outline_size](#prop-outline-size) | `1` |
| `Color` | [outline_color](#prop-outline-color) | `Color.BLACK` |
| `int` | [shadow_size](#prop-shadow-size) | `1` |
| `Color` | [shadow_color](#prop-shadow-color) | `Color.BLACK` |
| `Vector2` | [shadow_offset](#prop-shadow-offset) | `Vector2(1, 1)` |

## Variables

| | | |
|---|---|---|
| `LabelSettings` | [label_settings](#var-label-settings) |  |

## Methods

| | |
|---|---|
| `void` | [set_systems_refs](#method-set-systems-refs)( `system_hub: GameHost.SystemHub` ) |
| `void` | [apply_label_settings](#method-apply-label-settings)( `label: Label` ) |
| `void` | [apply_label_settings_to_container](#method-apply-label-settings-to-container)( `container: Control` ) |
| `void` | [show_tooltip](#method-show-tooltip)( `value: bool = true` ) |
| `void` | [position_tooltip](#method-position-tooltip)() |
| `void` | [clear_container](#method-clear-container)( `container: Control` ) |

## Enumerations

### enum Placement {#enum-placement}

Where a tooltip appears: next to the mouse, or at a fixed place of the screen

- **MOUSE** = `0` - next to the mouse pointer (the default)
- **FIXED** = `1` - at the place set by Fixed corner and Fixed offset, whatever the mouse does

### enum ScreenCorner {#enum-screencorner}

The corner (or the middle) of the screen a fixed tooltip is placed from

- **TOP_LEFT** = `0`
- **TOP_RIGHT** = `1`
- **BOTTOM_LEFT** = `2`
- **BOTTOM_RIGHT** = `3`
- **CENTER** = `4`

## Constants

- `int` **SCREEN_MARGIN** = `4` - Default margin from screen edges

## Property descriptions

*Placement*

### Placement placement = Placement.MOUSE {#prop-placement}

Next to the mouse (default), or at a fixed place of the screen. Each tooltip scene has its own setting

### ScreenCorner fixed_corner = ScreenCorner.BOTTOM_RIGHT {#prop-fixed-corner}

For a fixed tooltip: the corner of the screen it is placed from. The tooltip is anchored by the same corner of itself, so it grows away from the corner

### Vector2 fixed_offset = Vector2(16, 16) {#prop-fixed-offset}

For a fixed tooltip: the distance from that corner in pixels, towards the inside of the screen (from the middle: right and down)

*Label Settings*

### Font font {#prop-font}

Font to use for all labels (except item name)

### int font_size = 14 {#prop-font-size}

Font size for all labels

### int outline_size = 1 {#prop-outline-size}

Outline size for labels

### Color outline_color = Color.BLACK {#prop-outline-color}

Outline color

### int shadow_size = 1 {#prop-shadow-size}

Shadow size for labels

### Color shadow_color = Color.BLACK {#prop-shadow-color}

Shadow color

### Vector2 shadow_offset = Vector2(1, 1) {#prop-shadow-offset}

Shadow offset

## Variable descriptions

### LabelSettings label_settings {#var-label-settings}

Cached label settings resource

## Method descriptions

### void set_systems_refs( system_hub: GameHost.SystemHub ) {#method-set-systems-refs}

Gives the tooltip the hub of the game systems.

### void apply_label_settings( label: Label ) {#method-apply-label-settings}

Apply label settings to a label (excludes item name label)

### void apply_label_settings_to_container( container: Control ) {#method-apply-label-settings-to-container}

Apply label settings to all labels in a container

### void show_tooltip( value: bool = true ) {#method-show-tooltip}

Shows the tooltip, or hides it.

### void position_tooltip() {#method-position-tooltip}

Base positioning logic that all tooltips will use: next to the mouse, or at the fixed place

### void clear_container( container: Control ) {#method-clear-container}

Helper function for clearing containers that all tooltips use

