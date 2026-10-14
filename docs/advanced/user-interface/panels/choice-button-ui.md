<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ChoiceButtonUI

**Inherits:** `MarginContainer`

Individual button UI for a choice option in ChoiceSelectionPopup Similar to SkillNodeUI but without rank display

## Methods

| | |
|---|---|
| `void` | [set_icon](#method-set-icon)( `icon: CompressedTexture2D` ) |
| `void` | [highlight](#method-highlight)() |
| `void` | [restore](#method-restore)() |

## Constants

- `Color` **BORDER_NORMAL** = `Color(1.0, 1.0, 1.0, 1.0)`
- `Color` **BORDER_HOVER** = `Color(1.2, 1.2, 1.2, 1.0)`
- `Color` **ICON_NORMAL** = `Color(1.0, 1.0, 1.0, 1.0)`
- `Color` **ICON_HOVER** = `Color(1.1, 1.1, 1.1, 1.0)`

## Method descriptions

### void set_icon( icon: CompressedTexture2D ) {#method-set-icon}

Set the icon for this choice button

### void highlight() {#method-highlight}

Highlight the button (called on mouse enter)

### void restore() {#method-restore}

Restore normal appearance (called on mouse exit)

