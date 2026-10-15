<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DroppedItem

**Inherits:** [RigidBody3D](https://docs.godotengine.org/en/stable/classes/class_rigidbody3d.html)

An item (or a pile of a currency) that lies in the world, where a character can pick it up.

## Description

It is a rigid body, so what physics does to it is a setting (Gameplay Config &gt; Dropped Items &gt; Physics): it can be put on the ground and kept still, thrown and frozen once it rests, or simulated for as long as it lies there. It looks like the model of its item or a flat picture of its icon, can carry visual effects (its own and the one of its quality), shows its name above it, and is picked up in the ways the Gameplay Config switches on: by walking over it, with the interact key when near, by clicking it, or by looking at it. The class does everything; the settings choose.

A dropped item comes from the player (dragging an item out of the bag), from loot rules that deliver to the ground, from the Drop Item event action and behavior task, and from you: place a `dropped_item.tscn` in the world scene and set its item (a placed item has a `placement_id`, so a taken item stays taken). The Object Registry keeps them and saves them. See `DroppedItem.drop` to make one from code.

## Properties

| | | |
|---|---|---|
| `int` | [item_id](#prop-item-id) | `0:` |
| `int` | [quantity](#prop-quantity) | `1` |
| `int` | [item_level](#prop-item-level) | `0` |
| `int` | [currency_id](#prop-currency-id) | `0` |
| `int` | [currency_amount](#prop-currency-amount) | `0` |
| `int` | [placement_id](#prop-placement-id) | `0` |
| `PhysicsOverride` | [physics_override](#prop-physics-override) | `PhysicsOverride.PROJECT` |
| `float` | [respawn_time](#prop-respawn-time) | `0.0` |
| `float` | [lifetime_override](#prop-lifetime-override) | `-1.0` |

## Variables

| | | |
|---|---|---|
| `ItemInstance` | [item_instance](#var-item-instance) | `null` |
| `GameHost.SystemHub` | [system_hub](#var-system-hub) | `null` |
| `float` | [age](#var-age) | `0.0` |
| `bool` | [has_landed](#var-has-landed) | `false` |
| `bool` | [is_gone](#var-is-gone) | `false` |
| `bool` | [is_active](#var-is-active) | `false` |

## Methods

| | |
|---|---|
| `DroppedItem` | [drop](#method-drop)( `hub: GameHost.SystemHub, instance: ItemInstance, position: Vector3, launch: bool = true, velocity: Vector3 = Vector3.ZERO` ) *static* |
| `DroppedItem` | [drop_currency](#method-drop-currency)( `hub: GameHost.SystemHub, p_currency_id: int, amount: int, position: Vector3, launch: bool = true` ) *static* |
| `int` | [new_placement_id](#method-new-placement-id)( `container: Node` ) *static* |
| `DroppedItem` | [make_node](#method-make-node)() *static* |
| `Vector3` | [scatter_position](#method-scatter-position)( `origin: Vector3, index: int, count: int, radius: float, rng: RandomNumberGenerator = null` ) *static* |
| `void` | [activate](#method-activate)( `hub: GameHost.SystemHub, launch: bool = false, velocity: Vector3 = Vector3.ZERO, restoring: bool = false` ) |
| `void` | [set_item_instance](#method-set-item-instance)( `instance: ItemInstance` ) |
| `void` | [set_currency](#method-set-currency)( `p_currency_id: int, amount: int` ) |
| `String` | [get_display_name](#method-get-display-name)() |
| `int` | [quantity_held](#method-quantity-held)() |
| `int` | [get_physics_mode](#method-get-physics-mode)() |
| `bool` | [is_interactable](#method-is-interactable)() |
| `bool` | [can_be_taken_now](#method-can-be-taken-now)() |
| `bool` | [try_pickup](#method-try-pickup)( `taker: Entity, warn: bool = true` ) |
| `void` | [process_interaction](#method-process-interaction)( `taker: Entity` ) |
| `void` | [show_interact_prompt](#method-show-interact-prompt)() |
| `void` | [hide_interact_prompt](#method-hide-interact-prompt)() |
| `void` | [set_current_target_on](#method-set-current-target-on)() |
| `void` | [set_current_target_off](#method-set-current-target-off)() |
| `void` | [set_current_target_hover](#method-set-current-target-hover)() |
| `void` | [set_hover](#method-set-hover)( `on: bool` ) |
| `void` | [set_highlight](#method-set-highlight)( `on: bool` ) |
| `Vector3` | [get_aim_position](#method-get-aim-position)() |
| `void` | [expire](#method-expire)() |
| `void` | [disable_as_taken](#method-disable-as-taken)() |
| `void` | [respawn](#method-respawn)() |
| `void` | [apply_saved_state](#method-apply-saved-state)( `saved: Dictionary` ) |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `data: Dictionary` ) |

## Signals

### picked_up( dropped: DroppedItem, taker: Entity, quantity: int ) {#signal-picked-up}

Emitted when a character takes the item (all of it, or part of the stack): who and how many

### removed( dropped: DroppedItem ) {#signal-removed}

Emitted when the item is gone: taken, expired or removed

### landed( dropped: DroppedItem ) {#signal-landed}

Emitted when the item has come to rest (or was put on the ground)

## Enumerations

### enum PhysicsOverride {#enum-physicsoverride}

Where the physics of the item comes from: the project setting, or one of the modes for this item only

- **PROJECT** = `0`
- **PLACE_ON_GROUND** = `1`
- **SETTLE_THEN_FREEZE** = `2`
- **ALWAYS_SIMULATED** = `3`

## Constants

- `String` **DEFAULT_SCENE** = `"res://addons/chroniclenode/runtime_classes/entity/components/inventory/dropp...` - The scene a dropped item is made from when the Gameplay Config names none
- `float` **SETTLE_TIMEOUT** = `6.0` - The most seconds a thrown item may move before it is frozen where it is
- `float` **FALL_LIMIT** = `60.0` - An item that falls this far below where it started is put back there (it went through the ground)
- `float` **RETRY_DELAY** = `1.5` - How long a character who cannot take the item waits before trying again (seconds)

## Property descriptions

*Item*

### int item_id = 0: {#prop-item-id}

The item that lies here (an item of the project). Leave empty for a pile of currency

### int quantity = 1 {#prop-quantity}

How many of the item (a stack)

### int item_level = 0 {#prop-item-level}

The item level a generated item is made at (0 = the level of its definition)

### int currency_id = 0 {#prop-currency-id}

A pile of this currency lies here instead of an item (the id of a currency)

### int currency_amount = 0 {#prop-currency-amount}

How much of the currency is in the pile

*Placement*

### int placement_id = 0 {#prop-placement-id}

The number that tells this item apart from the others of the world, so the game remembers it was taken. The Add Object tool sets it; leave 0 for an item that is made while the game runs

### PhysicsOverride physics_override = PhysicsOverride.PROJECT {#prop-physics-override}

What physics does to this item: the project setting, or a mode for this item only (a placed item that must stay on a table: Place on ground)

### float respawn_time = 0.0 {#prop-respawn-time}

Seconds after it is taken until a placed item lies there again (0 = never)

### float lifetime_override = -1.0 {#prop-lifetime-override}

Seconds before the item disappears (-1 = the project setting, 0 = never)

## Variable descriptions

### ItemInstance item_instance = null {#var-item-instance}

The item that lies here (null for a pile of currency)

### GameHost.SystemHub system_hub = null {#var-system-hub}

The hub of the game systems

### float age = 0.0 {#var-age}

How many seconds the item has lain in the world

### bool has_landed = false {#var-has-landed}

True once the item has come to rest

### bool is_gone = false {#var-is-gone}

True once the item is gone (taken, expired or removed)

### bool is_active = false {#var-is-active}

Is the item in a world (made by the registry), and not only a node in the editor?

## Method descriptions

### DroppedItem drop( hub: GameHost.SystemHub, instance: ItemInstance, position: Vector3, launch: bool = true, velocity: Vector3 = Vector3.ZERO ) {#method-drop}

Makes a dropped item of the item instance at a position and puts it in the world (the registry of the current world). `launch` throws it; without it the item is put where it is (and on the ground under it, by the physics mode). Gives the dropped item, or null when the world has no room for it or dropped items are off

### DroppedItem drop_currency( hub: GameHost.SystemHub, p_currency_id: int, amount: int, position: Vector3, launch: bool = true ) {#method-drop-currency}

Makes a pile of a currency at a position, like `drop`

### int new_placement_id( container: Node ) {#method-new-placement-id}

A placement id that no other dropped item in the container has (a random positive whole number)

### DroppedItem make_node() {#method-make-node}

The scene a dropped item is made from: the one of the Gameplay Config, else the one of the toolkit

### Vector3 scatter_position( origin: Vector3, index: int, count: int, radius: float, rng: RandomNumberGenerator = null ) {#method-scatter-position}

A spot around an origin for the item number `index` of `count` that drop together: the first stays at the origin, the others are scattered in a ring

### void activate( hub: GameHost.SystemHub, launch: bool = false, velocity: Vector3 = Vector3.ZERO, restoring: bool = false ) {#method-activate}

The item the node holds: a made instance, a currency pile, or what its placement says. Called by the registry once the node is in the world

### void set_item_instance( instance: ItemInstance ) {#method-set-item-instance}

Gives the dropped item the item it holds (instead of the item_id of a placement)

### void set_currency( p_currency_id: int, amount: int ) {#method-set-currency}

Gives the dropped item a pile of currency

### String get_display_name() {#method-get-display-name}

The name of what lies here

### int quantity_held() {#method-quantity-held}

How many of the item (or how much of the currency) lie here

### int get_physics_mode() {#method-get-physics-mode}

The mode that applies to this item: its own override, else the project setting

### bool is_interactable() {#method-is-interactable}

Is the item an interact target (the interact key picks it up)? Only when that way of picking up is on

### bool can_be_taken_now() {#method-can-be-taken-now}

May the item be taken now? It has landed, its delay is over and it has something in it

### bool try_pickup( taker: Entity, warn: bool = true ) {#method-try-pickup}

A character takes the item (or as much of it as fits). `warn` tells the player when the bag is full. Gives true when something was taken

### void process_interaction( taker: Entity ) {#method-process-interaction}

The interact key was pressed near the item

### void show_interact_prompt() {#method-show-interact-prompt}

*No description yet.*

### void hide_interact_prompt() {#method-hide-interact-prompt}

*No description yet.*

### void set_current_target_on() {#method-set-current-target-on}

*No description yet.*

### void set_current_target_off() {#method-set-current-target-off}

*No description yet.*

### void set_current_target_hover() {#method-set-current-target-hover}

*No description yet.*

### void set_hover( on: bool ) {#method-set-hover}

The mouse or the crosshair is on the item (or has left it)

### void set_highlight( on: bool ) {#method-set-highlight}

Lights the item up (the overlay of the project), or not

### Vector3 get_aim_position() {#method-get-aim-position}

The position of the item for the mouse and the camera to aim at

### void expire() {#method-expire}

The lifetime is over: the item disappears

### void disable_as_taken() {#method-disable-as-taken}

A placed item that the save says was taken: it is hidden and stays so

### void respawn() {#method-respawn}

A placed item lies there again (its respawn time is over): a new roll of the item, at its place

### void apply_saved_state( saved: Dictionary ) {#method-apply-saved-state}

Gives a placed item the state it was saved in: where it lies, what it holds, how long it has lain

### Dictionary to_save_data() {#method-to-save-data}

The state of the item for a save: where it lies, what it holds and how long it has been there

### void from_save_data( data: Dictionary ) {#method-from-save-data}

Puts the state of a save back (the node is made and in the world already). A frozen item stays where it was

