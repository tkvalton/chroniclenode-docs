<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ShowUIPanelInteraction

**Inherits:** [Interaction](/advanced/entities/interactions/interaction) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Opens a panel of the interface when the NPC or the object is used: a wardrobe that opens the inventory, a notice board that opens a bounty panel of your own, a mirror that opens the character sheet. The panel is one of the panels in the UIPanels node of the in-game scene (the ones the panel keys open), found by its Panel Name. A panel of your own extends PanelUI, has a Panel Name, and can override `on_opened_by_interaction` to know what opened it. The panel closes when the player walks away, or when the interaction is ended.

## Description

Use it for custom UI panels too: the interaction does not care what the panel shows.

## Properties

| | | |
|---|---|---|
| `String` | [panel_name](#prop-panel-name) | `""` |
| `bool` | [close_when_far](#prop-close-when-far) | `true` |

## Variables

| | | |
|---|---|---|
| `Player` | [current_user](#var-current-user) |  |
| `bool` | [panel_is_open](#var-panel-is-open) | `false` |

## Methods

| | |
|---|---|
| `bool` | [can_interact](#method-can-interact)( `_player: Player` ) |
| `String` | [get_block_reason](#method-get-block-reason)( `_user: Entity` ) |
| `void` | [start_interaction](#method-start-interaction)( `player: Player` ) |
| `void` | [end_interaction](#method-end-interaction)() |
| `Array[String]` | [find_panel_names](#method-find-panel-names)() *static* |

## Constants

- `float` **DISTANCE_CHECK_INTERVAL** = `0.5` - How often (seconds) the distance of the player is checked

## Property descriptions

### String panel_name = "" {#prop-panel-name}

The name of the panel to open (the Panel Name of a panel in the UIPanels node of the in-game scene)

### bool close_when_far = true {#prop-close-when-far}

The panel closes when the player walks further than the interaction distance from the NPC or the object

## Variable descriptions

### Player current_user {#var-current-user}

The player who uses the panel

### bool panel_is_open = false {#var-panel-is-open}

The panel is open because of this interaction

## Method descriptions

### bool can_interact( _player: Player ) {#method-can-interact}

An interaction with no panel does nothing

### String get_block_reason( _user: Entity ) {#method-get-block-reason}

Why the interaction cannot start now ("" = it can, or it says nothing): the user is told when `can_interact` is false *(from [Interaction](/advanced/entities/interactions/interaction))*

### void start_interaction( player: Player ) {#method-start-interaction}

Opens the panel

### void end_interaction() {#method-end-interaction}

Closes the panel

### Array[String] find_panel_names() {#method-find-panel-names}

The names of the panels the in-game scene has (the Panel Name of each child of its UIPanels node that has one), for the editor to list. Read from the scene file chosen in the UI settings, or the scene of the toolkit

