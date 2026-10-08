<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CraftingInteraction

**Inherits:** [Interaction](/advanced/entities/interactions/interaction) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Crafting interaction that opens the crafting interface when activated Can be attached to NPCs, Crafting Tables, or other interactive objects Updated to use CraftingJob's existing timer system instead of redundant timers

## Properties

| | | |
|---|---|---|
| `int` | [craft_school_id](#prop-craft-school-id) | `0` |
| `bool` | [requires_personal_materials](#prop-requires-personal-materials) | `true` |
| `SFXSelection` | [craft_open_sfx](#prop-craft-open-sfx) |  |
| `AnimationSelectionSocial` | [craft_interaction_animation](#prop-craft-interaction-animation) |  |

## Variables

| | | |
|---|---|---|
| `bool` | [crafting_is_active](#var-crafting-is-active) | `false` |
| `Player` | [current_crafter](#var-current-crafter) |  |
| `Array[CraftingJob]` | [active_jobs](#var-active-jobs) | `[]` |
| `CraftingRecipeDefinition` | [last_selected_recipe](#var-last-selected-recipe) | `null` |

## Methods

| | |
|---|---|
| `bool` | [can_interact](#method-can-interact)( `player: Player` ) |
| `void` | [start_interaction](#method-start-interaction)( `player: Player` ) |
| `void` | [end_interaction](#method-end-interaction)() |
| `bool` | [start_craft](#method-start-craft)( `recipe: CraftingRecipeDefinition, player: Player, quantity: int = 1` ) |
| `bool` | [cancel_craft](#method-cancel-craft)( `recipe: CraftingRecipeDefinition, player: Player` ) |
| `Array[CraftingJob]` | [get_active_crafts](#method-get-active-crafts)() |
| `CraftSchoolDefinition` | [get_craft_school](#method-get-craft-school)() |
| `Array[CraftingRecipeDefinition]` | [get_available_recipes_for_player](#method-get-available-recipes-for-player)( `player: Player` ) |
| `Dictionary` | [get_station_summary](#method-get-station-summary)() |
| `bool` | [is_station_in_use](#method-is-station-in-use)() |
| `void` | [cleanup](#method-cleanup)() |

## Property descriptions

### int craft_school_id = 0 {#prop-craft-school-id}

Which craft school is available at this crafting station

### bool requires_personal_materials = true {#prop-requires-personal-materials}

If true, player must have materials in their inventory, if false can access storage

### SFXSelection craft_open_sfx {#prop-craft-open-sfx}

Optional audio to play when opening crafting interface

### AnimationSelectionSocial craft_interaction_animation {#prop-craft-interaction-animation}

Optional animation to play when crafting interface opens

## Variable descriptions

### bool crafting_is_active = false {#var-crafting-is-active}

Whether the crafting interface is currently active

### Player current_crafter {#var-current-crafter}

Reference to the player currently crafting (if any)

### Array[CraftingJob] active_jobs = [] {#var-active-jobs}

Currently active crafting jobs at this station

### CraftingRecipeDefinition last_selected_recipe = null {#var-last-selected-recipe}

Remember the last selected recipe for this station

## Method descriptions

### bool can_interact( player: Player ) {#method-can-interact}

Check if the player can interact with this crafting station

### void start_interaction( player: Player ) {#method-start-interaction}

Start the crafting interaction - opens the crafting UI

### void end_interaction() {#method-end-interaction}

End the crafting interaction - closes the crafting UI

### bool start_craft( recipe: CraftingRecipeDefinition, player: Player, quantity: int = 1 ) {#method-start-craft}

Start a craft at this station

### bool cancel_craft( recipe: CraftingRecipeDefinition, player: Player ) {#method-cancel-craft}

Cancel a craft at this station

### Array[CraftingJob] get_active_crafts() {#method-get-active-crafts}

Get all active crafts at this station

### CraftSchoolDefinition get_craft_school() {#method-get-craft-school}

Get the craft school for this station

### Array[CraftingRecipeDefinition] get_available_recipes_for_player( player: Player ) {#method-get-available-recipes-for-player}

Get all recipes available at this station for a player

### Dictionary get_station_summary() {#method-get-station-summary}

Get crafting station summary for UI display

### bool is_station_in_use() {#method-is-station-in-use}

Check if station is currently in use

### void cleanup() {#method-cleanup}

Give the timer back (the object is going away)

