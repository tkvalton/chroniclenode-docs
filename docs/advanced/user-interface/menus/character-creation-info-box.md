<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CharacterCreationInfoBox

**Inherits:** `MarginContainer`

CharacterCreationInfoBox - Displays template and class information in character creation Shows two sections: Template info (for templates) and Class info (for all modes)

## Properties

| | | |
|---|---|---|
| `Control` | [template_section](#prop-template-section) |  |
| `Control` | [class_section](#prop-class-section) |  |

## Methods

| | |
|---|---|
| `void` | [set_template_info](#method-set-template-info)( `template: CharacterDefinition` ) |
| `void` | [set_custom_mode](#method-set-custom-mode)() |
| `void` | [set_class_info](#method-set-class-info)( `player_class: PlayerClassDefinition` ) |
| `void` | [clear_template_section](#method-clear-template-section)() |
| `void` | [clear_class_section](#method-clear-class-section)() |
| `void` | [clear](#method-clear)() |

## Signals

### info_updated() {#signal-info-updated}

## Property descriptions

### Control template_section {#prop-template-section}

Container for template section (hidden in custom mode)

### Control class_section {#prop-class-section}

Container for class section (always visible)

## Method descriptions

### void set_template_info( template: CharacterDefinition ) {#method-set-template-info}

Update info box for a template selection

### void set_custom_mode() {#method-set-custom-mode}

Update info box for custom character mode (no template)

### void set_class_info( player_class: PlayerClassDefinition ) {#method-set-class-info}

Update just the class section (used when class changes in custom mode)

### void clear_template_section() {#method-clear-template-section}

Clear template section

### void clear_class_section() {#method-clear-class-section}

Clear class section

### void clear() {#method-clear}

Clear all sections

