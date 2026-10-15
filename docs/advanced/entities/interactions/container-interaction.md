<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ContainerInteraction

**Inherits:** [InteractableObjectInteraction](/advanced/entities/interactions/interactable-object-interaction) < [Interaction](/advanced/entities/interactions/interaction) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Container interaction - manages inventory storage in world objects Uses InteractableObject's InventoryComponent (created if this interaction is present)

## Properties

| | | |
|---|---|---|
| `Dictionary` | [inventory](#prop-inventory) | `{ ... }` |
| `int` | [max_slots](#prop-max-slots) | `20` |
| `InventoryStyle` | [inventory_style](#prop-inventory-style) | `null` |
| `int` | [loot_table_id](#prop-loot-table-id) |  |
| `bool` | [auto_close_enabled](#prop-auto-close-enabled) | `true` |
| `float` | [auto_close_distance](#prop-auto-close-distance) | `4.0` |
| `String` | [closed_animation](#prop-closed-animation) | `"closed"` |
| `String` | [locked_animation](#prop-locked-animation) | `"locked"` |
| `String` | [open_animation](#prop-open-animation) | `"open"` |
| `SFXSelection` | [container_open_sound](#prop-container-open-sound) |  |
| `SFXSelection` | [container_close_sound](#prop-container-close-sound) |  |
| `SFXSelection` | [container_locked_sound](#prop-container-locked-sound) |  |

## Variables

| | | |
|---|---|---|
| `InventoryComponent` | [inventory_data](#var-inventory-data) |  |
| `ContainerState` | [current_container_state](#var-current-container-state) | `ContainerState.CLOSED_UNLOCKED` |
| `Entity` | [opening_entity](#var-opening-entity) | `null` |
| `Timer` | [distance_check_timer](#var-distance-check-timer) |  |

## Methods

| | |
|---|---|
| `bool` | [requires_inventory_component](#method-requires-inventory-component)() |
| `void` | [setup_for_interactable_objects](#method-setup-for-interactable-objects)( `interactable: InteractableObject` ) |
| `Array[LootRule]` | [get_legacy_loot_rules](#method-get-legacy-loot-rules)() |
| `bool` | [can_interact](#method-can-interact)( `player: Player` ) |
| `void` | [start_interaction](#method-start-interaction)( `player: Player` ) |
| `void` | [end_interaction](#method-end-interaction)() |
| `String` | [get_interaction_prompt](#method-get-interaction-prompt)() |
| `void` | [change_container_state](#method-change-container-state)( `new_state: ContainerState, interacting_entity: Entity = null` ) |
| `void` | [on_object_destroyed](#method-on-object-destroyed)() |
| `void` | [refresh_after_load](#method-refresh-after-load)() |
| `void` | [on_unlocked](#method-on-unlocked)() |
| `void` | [on_locked_reaction](#method-on-locked-reaction)() |
| `InventoryComponent` | [get_inventory](#method-get-inventory)() |
| `bool` | [is_empty](#method-is-empty)() |
| `void` | [force_open](#method-force-open)() |
| `void` | [force_close](#method-force-close)() |
| `Dictionary` | [save_state](#method-save-state)() |
| `void` | [load_state](#method-load-state)( `state: Dictionary` ) |
| `void` | [cleanup](#method-cleanup)() |

## Signals

### container_opened( entity: Entity ) {#signal-container-opened}

Emitted when an entity opens the container.

### container_closed( entity: Entity ) {#signal-container-closed}

Emitted when the container is closed.

## Enumerations

### enum ContainerState {#enum-containerstate}

The states of a container: closed and unlocked, closed and locked, open, or destroyed.

- **CLOSED_UNLOCKED** = `0` - Container is closed and can be opened
- **CLOSED_LOCKED** = `1` - Container is closed and locked
- **OPEN** = `2` - Container is open and accessible
- **DESTROYED** = `3` - Container is destroyed and inaccessible

## Property descriptions

*Container Setup*

### Dictionary inventory {#prop-inventory}

Dictionary of inventory items and currency for this container Format: &#123; "items": &#123; item_id: quantity &#125;, "currency": &#123; currency_name: amount &#125; &#125;

### int max_slots = 20 {#prop-max-slots}

Maximum number of inventory slots

### InventoryStyle inventory_style = null {#prop-inventory-style}

The rules of this container's bag (space, weight). Empty = the style of the containers of the Gameplay Config. In slots mode Max slots is the number of slots

*Loot Generation*

### int loot_table_id {#prop-loot-table-id}

Loot table to generate items from (overrides definition loot_table if set)

*Auto-Close*

### bool auto_close_enabled = true {#prop-auto-close-enabled}

Whether container auto-closes when opener moves away

### float auto_close_distance = 4.0 {#prop-auto-close-distance}

Distance at which container auto-closes

*Animations*

### String closed_animation = "closed" {#prop-closed-animation}

The animation of the container when it is closed.

### String locked_animation = "locked" {#prop-locked-animation}

The animation of the container when it is locked.

### String open_animation = "open" {#prop-open-animation}

The animation of the container when it opens.

*Audio*

### SFXSelection container_open_sound {#prop-container-open-sound}

The sound of the container opening.

### SFXSelection container_close_sound {#prop-container-close-sound}

The sound of the container closing.

### SFXSelection container_locked_sound {#prop-container-locked-sound}

The sound of trying a locked container.

## Variable descriptions

### InventoryComponent inventory_data {#var-inventory-data}

The inventory of the container: what it holds.

### ContainerState current_container_state = ContainerState.CLOSED_UNLOCKED {#var-current-container-state}

The state of the container now.

### Entity opening_entity = null {#var-opening-entity}

The entity that has the container open now.

### Timer distance_check_timer {#var-distance-check-timer}

The timer that closes the container when the entity that opened it walks away.

## Method descriptions

### bool requires_inventory_component() {#method-requires-inventory-component}

Tell InteractableObject we need an InventoryComponent

### void setup_for_interactable_objects( interactable: InteractableObject ) {#method-setup-for-interactable-objects}

Sets the container up on its object: finds the nodes it needs and applies its starting state.

### Array[LootRule] get_legacy_loot_rules() {#method-get-legacy-loot-rules}

The loot rules the older settings of this container make: its fixed contents and its loot table, both rolled when the container is set up

### bool can_interact( player: Player ) {#method-can-interact}

Can the player use the container now (in range, the object is not broken, the requirements are met)?

### void start_interaction( player: Player ) {#method-start-interaction}

The player uses the container.

### void end_interaction() {#method-end-interaction}

Does nothing: a container stays open after the interaction ends.

### String get_interaction_prompt() {#method-get-interaction-prompt}

The text of the prompt above the object for its state now ("Open", "Climb" ...).

### void change_container_state( new_state: ContainerState, interacting_entity: Entity = null ) {#method-change-container-state}

Puts the container in a state (opening it, locking it ...) and plays its animation and sound.

### void on_object_destroyed() {#method-on-object-destroyed}

Called when the object is destroyed. A container that still holds something stays lootable, like a corpse.

### void refresh_after_load() {#method-refresh-after-load}

After a load: a destroyed container with loot is lootable, an empty one is destroyed for good

### void on_unlocked() {#method-on-unlocked}

Called when the object is unlocked.

### void on_locked_reaction() {#method-on-locked-reaction}

Called when someone tries the object while it is locked: plays the locked sound and animation.

### InventoryComponent get_inventory() {#method-get-inventory}

The inventory of the container.

### bool is_empty() {#method-is-empty}

Is the container empty?

### void force_open() {#method-force-open}

Opens the container without a player (a script or an event). Not when it is destroyed.

### void force_close() {#method-force-close}

Closes the container without a player.

### Dictionary save_state() {#method-save-state}

The state of the container for a save.

### void load_state( state: Dictionary ) {#method-load-state}

Restores the state of the container from a save.

### void cleanup() {#method-cleanup}

Gives its timers back and clears what it holds (the object is going away).

