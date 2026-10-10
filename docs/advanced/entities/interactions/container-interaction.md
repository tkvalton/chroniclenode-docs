<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ContainerInteraction

**Inherits:** [InteractableObjectInteraction](/advanced/entities/interactions/interactable-object-interaction) < [Interaction](/advanced/entities/interactions/interaction) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Container interaction - manages inventory storage in world objects Uses InteractableObject's InventoryComponent (created if this interaction is present)

## Properties

| | | |
|---|---|---|
| `Dictionary` | [inventory](#prop-inventory) | `{ ... }` |
| `int` | [max_slots](#prop-max-slots) | `20` |
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

### container_closed( entity: Entity ) {#signal-container-closed}

## Enumerations

### enum ContainerState {#enum-containerstate}

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

*No description yet.*

### String locked_animation = "locked" {#prop-locked-animation}

*No description yet.*

### String open_animation = "open" {#prop-open-animation}

*No description yet.*

*Audio*

### SFXSelection container_open_sound {#prop-container-open-sound}

*No description yet.*

### SFXSelection container_close_sound {#prop-container-close-sound}

*No description yet.*

### SFXSelection container_locked_sound {#prop-container-locked-sound}

*No description yet.*

## Variable descriptions

### InventoryComponent inventory_data {#var-inventory-data}

*No description yet.*

### ContainerState current_container_state = ContainerState.CLOSED_UNLOCKED {#var-current-container-state}

*No description yet.*

### Entity opening_entity = null {#var-opening-entity}

*No description yet.*

### Timer distance_check_timer {#var-distance-check-timer}

*No description yet.*

## Method descriptions

### bool requires_inventory_component() {#method-requires-inventory-component}

Tell InteractableObject we need an InventoryComponent

### void setup_for_interactable_objects( interactable: InteractableObject ) {#method-setup-for-interactable-objects}

*Overrides this function of [InteractableObjectInteraction](/advanced/entities/interactions/interactable-object-interaction).*

### Array[LootRule] get_legacy_loot_rules() {#method-get-legacy-loot-rules}

The loot rules the older settings of this container make: its fixed contents and its loot table, both rolled when the container is set up

### bool can_interact( player: Player ) {#method-can-interact}

*Overrides this function of [InteractableObjectInteraction](/advanced/entities/interactions/interactable-object-interaction).*

### void start_interaction( player: Player ) {#method-start-interaction}

Start the interaction with the given player *(from [Interaction](/advanced/entities/interactions/interaction))*

### void end_interaction() {#method-end-interaction}

End the current interaction *(from [Interaction](/advanced/entities/interactions/interaction))*

### String get_interaction_prompt() {#method-get-interaction-prompt}

*No description yet.*

### void change_container_state( new_state: ContainerState, interacting_entity: Entity = null ) {#method-change-container-state}

*No description yet.*

### void on_object_destroyed() {#method-on-object-destroyed}

*No description yet.*

### void refresh_after_load() {#method-refresh-after-load}

After a load: a destroyed container with loot is lootable, an empty one is destroyed for good

### void on_unlocked() {#method-on-unlocked}

*No description yet.*

### void on_locked_reaction() {#method-on-locked-reaction}

*No description yet.*

### InventoryComponent get_inventory() {#method-get-inventory}

*No description yet.*

### bool is_empty() {#method-is-empty}

*No description yet.*

### void force_open() {#method-force-open}

*No description yet.*

### void force_close() {#method-force-close}

*No description yet.*

### Dictionary save_state() {#method-save-state}

*No description yet.*

### void load_state( state: Dictionary ) {#method-load-state}

*No description yet.*

### void cleanup() {#method-cleanup}

*No description yet.*

