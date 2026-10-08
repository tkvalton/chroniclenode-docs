<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LootInteraction

**Inherits:** [EntityInteraction](/advanced/entities/interactions/entity-interaction) < [Interaction](/advanced/entities/interactions/interaction) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Loot Interaction for NPCs Allows players to access a dead entity's inventory Works similarly to InteractableContainer but uses entity.components.inventory()

## Description

LIFECYCLE:

- Created by NPC when entity dies (if inventory is not empty)
- Removed by NPC when inventory becomes empty
- NPC handles setting/clearing this interaction

## Variables

| | | |
|---|---|---|
| `bool` | [auto_close_enabled](#var-auto-close-enabled) | `true` |
| `float` | [auto_close_distance](#var-auto-close-distance) | `4.0` |
| `bool` | [is_loot_open](#var-is-loot-open) | `false` |
| `Player` | [looting_player](#var-looting-player) | `null` |
| `bool` | [tracking_distance](#var-tracking-distance) | `false` |
| `Timer` | [distance_check_timer](#var-distance-check-timer) | `null` |

## Methods

| | |
|---|---|
| `bool` | [can_interact](#method-can-interact)( `player: Player` ) |
| `void` | [start_interaction](#method-start-interaction)( `player: Player` ) |
| `void` | [end_interaction](#method-end-interaction)() |
| `void` | [force_close_loot](#method-force-close-loot)() |
| `bool` | [is_open](#method-is-open)() |
| `Player` | [get_looting_player](#method-get-looting-player)() |
| `bool` | [has_loot](#method-has-loot)() |
| `void` | [cleanup](#method-cleanup)() |

## Signals

### loot_opened( entity: Entity, player: Player ) {#signal-loot-opened}

Signal emitted when loot window is opened

### loot_closed( entity: Entity, player: Player ) {#signal-loot-closed}

Signal emitted when loot window is closed

## Variable descriptions

### bool auto_close_enabled = true {#var-auto-close-enabled}

Whether to auto-close loot window when player moves away

### float auto_close_distance = 4.0 {#var-auto-close-distance}

Distance at which loot auto-closes

### bool is_loot_open = false {#var-is-loot-open}

Whether the loot window is currently open

### Player looting_player = null {#var-looting-player}

The player currently accessing the loot

### bool tracking_distance = false {#var-tracking-distance}

Whether we're tracking player distance for auto-close

### Timer distance_check_timer = null {#var-distance-check-timer}

Distance check timer from ChronoManager

## Method descriptions

### bool can_interact( player: Player ) {#method-can-interact}

Check if the player can interact with this loot

### void start_interaction( player: Player ) {#method-start-interaction}

Start the loot interaction

### void end_interaction() {#method-end-interaction}

End the loot interaction

### void force_close_loot() {#method-force-close-loot}

Force close the loot window

### bool is_open() {#method-is-open}

Check if loot window is currently open

### Player get_looting_player() {#method-get-looting-player}

Get the player currently looting

### bool has_loot() {#method-has-loot}

Check if inventory has any items

### void cleanup() {#method-cleanup}

Clean up resources when interaction is being removed

