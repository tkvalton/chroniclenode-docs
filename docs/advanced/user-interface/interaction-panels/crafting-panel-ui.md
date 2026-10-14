<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CraftingPanelUI

**Inherits:** [PanelUI](/advanced/user-interface/panels/panel-ui) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Enhanced crafting panel that integrates with the existing UI system Handles multiple schools, recipe selection, material display, and crafting queue Uses Tween for smooth progress bar animation instead of polling Refactored to extend PanelUI instead of MarginContainer

## Properties

| | | |
|---|---|---|
| `PackedScene` | [craft_material_icon_scene](#prop-craft-material-icon-scene) |  |
| `PackedScene` | [recipe_button_scene](#prop-recipe-button-scene) |  |

## Variables

| | | |
|---|---|---|
| `CraftingInteraction` | [current_interaction](#var-current-interaction) | `null` |
| `Player` | [current_player](#var-current-player) | `null` |
| `CraftSchoolDefinition` | [current_school](#var-current-school) | `null` |
| `CraftingRecipeDefinition` | [selected_recipe](#var-selected-recipe) | `null` |
| `Array[Button]` | [recipe_buttons](#var-recipe-buttons) | `[]` |
| `Array[Node]` | [recipe_button_scenes](#var-recipe-button-scenes) | `[]` |
| `Array[CraftMaterialIconUI]` | [material_icons](#var-material-icons) | `[]` |
| `CraftingJob` | [active_craft_job](#var-active-craft-job) | `null` |
| `Tween` | [progress_tween](#var-progress-tween) | `null` |
| `bool` | [is_crafting](#var-is-crafting) | `false` |
| `CraftingManager` | [crafting_manager](#var-crafting-manager) |  |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `p_system_hub: GameHost.SystemHub` ) |
| `void` | [setup_crafting_panel](#method-setup-crafting-panel)( `interaction: CraftingInteraction, player: Player, school: CraftSchoolDefinition` ) |
| `void` | [close_panel](#method-close-panel)() |
| `void` | [on_craft_completed](#method-on-craft-completed)( `job: CraftingJob` ) |
| `void` | [on_craft_cancelled](#method-on-craft-cancelled)( `job: CraftingJob` ) |

## Signals

### crafting_started( recipe: CraftingRecipeDefinition, quantity: int ) {#signal-crafting-started}

### crafting_cancelled() {#signal-crafting-cancelled}

## Property descriptions

### PackedScene craft_material_icon_scene {#prop-craft-material-icon-scene}

========== PRELOADED SCENES ==========

### PackedScene recipe_button_scene {#prop-recipe-button-scene}

*No description yet.*

## Variable descriptions

### CraftingInteraction current_interaction = null {#var-current-interaction}

========== DATA PROPERTIES ==========

### Player current_player = null {#var-current-player}

*No description yet.*

### CraftSchoolDefinition current_school = null {#var-current-school}

*No description yet.*

### CraftingRecipeDefinition selected_recipe = null {#var-selected-recipe}

*No description yet.*

### Array[Button] recipe_buttons = [] {#var-recipe-buttons}

*No description yet.*

### Array[Node] recipe_button_scenes = [] {#var-recipe-button-scenes}

*No description yet.*

### Array[CraftMaterialIconUI] material_icons = [] {#var-material-icons}

*No description yet.*

### CraftingJob active_craft_job = null {#var-active-craft-job}

*No description yet.*

### Tween progress_tween = null {#var-progress-tween}

Progress tween for smooth animation

### bool is_crafting = false {#var-is-crafting}

Button state tracking

### CraftingManager crafting_manager {#var-crafting-manager}

SystemRefs

## Method descriptions

### void initialize_ui( p_system_hub: GameHost.SystemHub ) {#method-initialize-ui}

*Overrides this function of [PanelUI](/advanced/user-interface/panels/panel-ui).*

### void setup_crafting_panel( interaction: CraftingInteraction, player: Player, school: CraftSchoolDefinition ) {#method-setup-crafting-panel}

Setup the crafting panel with interaction data

### void close_panel() {#method-close-panel}

Close the crafting panel - overrides PanelUI's close_panel

### void on_craft_completed( job: CraftingJob ) {#method-on-craft-completed}

Handle craft completion

### void on_craft_cancelled( job: CraftingJob ) {#method-on-craft-cancelled}

Handle craft cancellation

