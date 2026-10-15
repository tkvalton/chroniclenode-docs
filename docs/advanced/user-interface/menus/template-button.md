<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TemplateButton

**Inherits:** `MarginContainer`

TemplateButton - Button for selecting character templates or custom creation Used in the character creation template list

## Properties

| | | |
|---|---|---|
| `Color` | [text_normal_color](#prop-text-normal-color) | `Color(0.8, 0.8, 0.8)` |
| `Color` | [text_highlight_color](#prop-text-highlight-color) | `Color(1.0, 1.0, 1.0)` |
| `Color` | [active_background_color](#prop-active-background-color) | `Color(0.333, 0.486, 0.574)` |
| `Color` | [inactive_background_color](#prop-inactive-background-color) | `Color(0.274, 0.4, 0.473)` |
| `Color` | [border_selected_color](#prop-border-selected-color) | `Color(1.0, 0.843, 0.0)` |
| `Color` | [border_unselected_color](#prop-border-unselected-color) | `Color(0.5, 0.5, 0.5)` |
| `bool` | [uses_icon](#prop-uses-icon) | `false` |

## Variables

| | | |
|---|---|---|
| `CharacterDefinition` | [template](#var-template) | `null` |
| `bool` | [is_custom_option](#var-is-custom-option) | `false` |
| `bool` | [selected](#var-selected) | `false` |

## Methods

| | |
|---|---|
| `void` | [setup_custom](#method-setup-custom)() |
| `void` | [setup_template](#method-setup-template)( `char_template: CharacterDefinition` ) |
| `void` | [set_text](#method-set-text)( `text: String` ) |
| `void` | [set_selected](#method-set-selected)( `is_selected: bool` ) |

## Signals

### pressed() {#signal-pressed}

Emitted when the button is pressed.

### template_selected( is_custom: bool, template: CharacterDefinition ) {#signal-template-selected}

Emitted when a template is picked (or the custom character).

## Property descriptions

### Color text_normal_color = Color(0.8, 0.8, 0.8) {#prop-text-normal-color}

The color of the text.

### Color text_highlight_color = Color(1.0, 1.0, 1.0) {#prop-text-highlight-color}

The color of the text under the mouse.

### Color active_background_color = Color(0.333, 0.486, 0.574) {#prop-active-background-color}

The color of the background when it is the one picked.

### Color inactive_background_color = Color(0.274, 0.4, 0.473) {#prop-inactive-background-color}

The color of the background when it is not.

### Color border_selected_color = Color(1.0, 0.843, 0.0) {#prop-border-selected-color}

Gold

### Color border_unselected_color = Color(0.5, 0.5, 0.5) {#prop-border-unselected-color}

Grey

### bool uses_icon = false {#prop-uses-icon}

True when the button shows an icon.

## Variable descriptions

### CharacterDefinition template = null {#var-template}

The template this button represents (null for "Custom Character")

### bool is_custom_option = false {#var-is-custom-option}

Whether this is the "Custom Character" option

### bool selected = false {#var-selected}

True when this is the template picked.

## Method descriptions

### void setup_custom() {#method-setup-custom}

Setup as "Custom Character" option

### void setup_template( char_template: CharacterDefinition ) {#method-setup-template}

Setup with a character template

### void set_text( text: String ) {#method-set-text}

Set the button text directly

### void set_selected( is_selected: bool ) {#method-set-selected}

Set selection state

