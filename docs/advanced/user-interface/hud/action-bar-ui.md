<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ActionBarUI

**Inherits:** [HUDUIElement](/advanced/user-interface/hud/hudui-element) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

This class manages the action bar UI, including ability/items slots, resource bars, buff/debuff displays, and cast bar functionality. Uses the modular CastBar class for casting display.

## Properties

| | | |
|---|---|---|
| `bool` | [show_health_bar](#prop-show-health-bar) | `true` |
| `bool` | [show_resource_bar](#prop-show-resource-bar) | `true` |
| `bool` | [show_buffs](#prop-show-buffs) | `true` |
| `bool` | [show_debuffs](#prop-show-debuffs) | `true` |
| `int` | [max_buff_icons](#prop-max-buff-icons) | `8` |
| `int` | [max_debuff_icons](#prop-max-debuff-icons) | `8` |
| `SettingsConfig.HealthDisplayOption` | [health_text_mode](#prop-health-text-mode) | `SettingsConfig.HealthDisplayOption.CURRENT_MAX` |
| `SettingsConfig.HealthDisplayOption` | [resource_text_mode](#prop-resource-text-mode) | `SettingsConfig.HealthDisplayOption.CURRENT_MAX` |
| `PackedScene` | [action_button_scene](#prop-action-button-scene) |  |
| `PackedScene` | [aura_icon_scene](#prop-aura-icon-scene) |  |
| `bool` | [allow_rearranging](#prop-allow-rearranging) | `true` |

## Variables

| | | |
|---|---|---|
| `Array[ActionBarButton]` | [action_bar_slots](#var-action-bar-slots) |  |
| `Player` | [current_actionbar_user](#var-current-actionbar-user) |  |
| `int` | [action_bar_rows_visible](#var-action-bar-rows-visible) | `1:` |
| `PoolInstance` | [current_health_pool](#var-current-health-pool) |  |
| `PoolInstance` | [current_resource_pool](#var-current-resource-pool) |  |
| `Array[Aura]` | [active_buff_auras](#var-active-buff-auras) | `[]` |
| `Array[Aura]` | [active_debuff_auras](#var-active-debuff-auras) | `[]` |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `p_system_hub: GameHost.SystemHub` ) |

## Signals

### ability_drag_requested( ability: AbilityInstance ) {#signal-ability-drag-requested}

========== DRAG SIGNALS ==========

### item_drag_requested( item: ItemInstance ) {#signal-item-drag-requested}

Asks the interface to start dragging an item out of a slot of the bar.

## Property descriptions

### bool show_health_bar = true {#prop-show-health-bar}

Whether to display the health bar

### bool show_resource_bar = true {#prop-show-resource-bar}

Whether to display the resource bar

### bool show_buffs = true {#prop-show-buffs}

Whether to display buff icons

### bool show_debuffs = true {#prop-show-debuffs}

Whether to display debuff icons

### int max_buff_icons = 8 {#prop-max-buff-icons}

Maximum number of buff icons to display

### int max_debuff_icons = 8 {#prop-max-debuff-icons}

Maximum number of debuff icons to display

### SettingsConfig.HealthDisplayOption health_text_mode = SettingsConfig.HealthDisplayOption.CURRENT_MAX {#prop-health-text-mode}

Text display mode for health bar

### SettingsConfig.HealthDisplayOption resource_text_mode = SettingsConfig.HealthDisplayOption.CURRENT_MAX {#prop-resource-text-mode}

Text display mode for resource bar

### PackedScene action_button_scene {#prop-action-button-scene}

Action Buttons Scene

### PackedScene aura_icon_scene {#prop-aura-icon-scene}

Aura Icons Scene

### bool allow_rearranging = true {#prop-allow-rearranging}

The player can drag abilities and items on and off the slots of this bar. Off: this bar only shows (a bar for a game where the slots are filled by the class, the effects and the events). It can only make things stricter: a slot that the project or the plan of the class locks stays locked whatever this says

## Variable descriptions

### Array[ActionBarButton] action_bar_slots {#var-action-bar-slots}

Array of action bar ability slot buttons

### Player current_actionbar_user {#var-current-actionbar-user}

The player entity that owns this action bar

### int action_bar_rows_visible = 1: {#var-action-bar-rows-visible}

Number of action bar rows currently visible (1-3)

### PoolInstance current_health_pool {#var-current-health-pool}

Currently displayed health pool instance

### PoolInstance current_resource_pool {#var-current-resource-pool}

Currently displayed resource pool instance

### Array[Aura] active_buff_auras = [] {#var-active-buff-auras}

Array of active buff aura UI elements

### Array[Aura] active_debuff_auras = [] {#var-active-debuff-auras}

Array of active debuff aura UI elements

## Method descriptions

### void initialize_ui( p_system_hub: GameHost.SystemHub ) {#method-initialize-ui}

Sets the part up with the hub of the game systems: connects the signals it listens to and fills it.

