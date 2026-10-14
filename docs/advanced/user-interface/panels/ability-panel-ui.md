<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AbilityPanelUI

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Paginated Ability Panel - Displays abilities in a 3x5 grid with page navigation Shows active abilities first, then passive abilities Follows the new architecture pattern: setup once, signals handle updates No stored player references - gets initial data then relies on signals

## Properties

| | | |
|---|---|---|
| `PackedScene` | [spell_book_ability_scene](#prop-spell-book-ability-scene) |  |

## Variables

| | | |
|---|---|---|
| `Array[AbilityInstance]` | [all_abilities](#var-all-abilities) | `[]` |
| `Array[AbilityInstance]` | [active_abilities](#var-active-abilities) | `[]` |
| `Array[AbilityInstance]` | [passive_abilities](#var-passive-abilities) | `[]` |
| `int` | [current_page](#var-current-page) | `0` |
| `int` | [total_pages](#var-total-pages) | `0` |
| `Array[Control]` | [ability_slot_uis](#var-ability-slot-uis) | `[]` |

## Methods

| | |
|---|---|
| `void` | [initialize_display](#method-initialize-display)( `system_hub: GameHost.SystemHub` ) |
| `void` | [clear_ability_display](#method-clear-ability-display)() |
| `void` | [goto_page](#method-goto-page)( `page_index: int` ) |
| `void` | [next_page](#method-next-page)() |
| `void` | [previous_page](#method-previous-page)() |

## Signals

### ability_tooltip_requested( ability: AbilityInstance ) {#signal-ability-tooltip-requested}

### hide_tooltip( force_hide: bool ) {#signal-hide-tooltip}

### ability_drag_requested( ability: AbilityInstance ) {#signal-ability-drag-requested}

## Constants

- `int` **ABILITIES_PER_ROW** = `3`
- `int` **ABILITIES_PER_COLUMN** = `6`
- `int` **ABILITIES_PER_PAGE** = `ABILITIES_PER_ROW * ABILITIES_PER_COLUMN  # 15`

## Property descriptions

### PackedScene spell_book_ability_scene {#prop-spell-book-ability-scene}

*No description yet.*

## Variable descriptions

### Array[AbilityInstance] all_abilities = [] {#var-all-abilities}

*No description yet.*

### Array[AbilityInstance] active_abilities = [] {#var-active-abilities}

*No description yet.*

### Array[AbilityInstance] passive_abilities = [] {#var-passive-abilities}

*No description yet.*

### int current_page = 0 {#var-current-page}

*No description yet.*

### int total_pages = 0 {#var-total-pages}

*No description yet.*

### Array[Control] ability_slot_uis = [] {#var-ability-slot-uis}

*No description yet.*

## Method descriptions

### void initialize_display( system_hub: GameHost.SystemHub ) {#method-initialize-display}

Initialize the ability panel with current player data

### void clear_ability_display() {#method-clear-ability-display}

Clear the entire ability display

### void goto_page( page_index: int ) {#method-goto-page}

Navigate to a specific page

### void next_page() {#method-next-page}

Go to the next page

### void previous_page() {#method-previous-page}

Go to the previous page

