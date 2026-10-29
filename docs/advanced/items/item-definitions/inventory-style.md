<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# InventoryStyle

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

The rules of the inventory of one kind of owner: how items take space, where the capacity comes from, and whether items weigh something.

## Description

The default style is the one the toolkit always had: slots, the number of them from the Bag Slots stat, no weight. The rules combine: weight can be added to slots, to a grid or to unlimited space. The Gameplay Config holds the style of the characters, of NPCs and of containers; an NPC definition and a container can have a style of their own. See docs/systems/inventory-styles.md, section 3.

## Properties

| | | |
|---|---|---|
| `Space` | [space](#prop-space) | `Space.SLOTS` |
| `SlotsFrom` | [slots_from](#prop-slots-from) | `SlotsFrom.STAT` |
| `int` | [fixed_slots](#prop-fixed-slots) | `20` |
| `int` | [grid_width](#prop-grid-width) | `10` |
| `int` | [grid_height](#prop-grid-height) | `6` |
| `bool` | [weight_enabled](#prop-weight-enabled) | `false` |
| `CapacityFrom` | [capacity_from](#prop-capacity-from) | `CapacityFrom.STAT` |
| `float` | [fixed_capacity](#prop-fixed-capacity) | `100.0` |
| `bool` | [count_worn_items](#prop-count-worn-items) | `true` |
| `OverLimit` | [over_limit](#prop-over-limit) | `OverLimit.NONE` |
| `float` | [hard_limit_percent](#prop-hard-limit-percent) | `100.0` |
| `Array[EncumbranceTier]` | [encumbrance_steps](#prop-encumbrance-steps) | `[]` |

## Methods

| | |
|---|---|
| `EncumbranceTier` | [get_step_for](#method-get-step-for)( `percent: float` ) |
| `InventoryStyle` | [for_npc](#method-for-npc)() *static* |
| `InventoryStyle` | [for_entity](#method-for-entity)( `entity: Entity` ) *static* |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Enumerations

### enum Space {#enum-space}

How items take space

- **SLOTS** = `0` - A list of slots, one stack in each
- **GRID** = `1` - A grid of cells: an item covers the cells of its shape
- **UNLIMITED** = `2` - No limit: slots appear as items come

### enum SlotsFrom {#enum-slotsfrom}

Where the number of slots comes from

- **STAT** = `0` - The Bag Slots stat of the owner (it can be changed by effects and equipment)
- **FIXED** = `1` - A number of this style

### enum CapacityFrom {#enum-capacityfrom}

Where the weight capacity comes from

- **STAT** = `0` - The Carry Capacity stat of the owner
- **FIXED** = `1` - A number of this style

### enum OverLimit {#enum-overlimit}

What happens above the weight capacity

- **NONE** = `0` - Nothing: the weight is only shown
- **HARD_LIMIT** = `1` - Nothing more can be picked up above the limit
- **ENCUMBRANCE** = `2` - Effects (slowed ...) come on in steps

## Property descriptions

*Space*

### Space space = Space.SLOTS {#prop-space}

How items take space

### SlotsFrom slots_from = SlotsFrom.STAT {#prop-slots-from}

Slots: where the number of them comes from

### int fixed_slots = 20 {#prop-fixed-slots}

Slots: the number of them when it is fixed

### int grid_width = 10 {#prop-grid-width}

Grid: how many cells wide

### int grid_height = 6 {#prop-grid-height}

Grid: how many cells high

*Weight*

### bool weight_enabled = false {#prop-weight-enabled}

Items have weight and the owner has a carry capacity

### CapacityFrom capacity_from = CapacityFrom.STAT {#prop-capacity-from}

Where the carry capacity comes from

### float fixed_capacity = 100.0 {#prop-fixed-capacity}

The carry capacity when it is fixed

### bool count_worn_items = true {#prop-count-worn-items}

What the worn equipment weighs counts too

### OverLimit over_limit = OverLimit.NONE {#prop-over-limit}

What happens above the capacity

### float hard_limit_percent = 100.0 {#prop-hard-limit-percent}

Hard limit: how much of the capacity can be filled (100 = exactly the capacity)

### Array[EncumbranceTier] encumbrance_steps = [] {#prop-encumbrance-steps}

Encumbrance: the steps, each with the share of the capacity it starts at and the effect that goes on

## Method descriptions

### EncumbranceTier get_step_for( percent: float ) {#method-get-step-for}

The highest step of encumbrance that a load of this many percent of the capacity has reached (null = none)

### InventoryStyle for_npc() {#method-for-npc}

*No description yet.*

### InventoryStyle for_entity( entity: Entity ) {#method-for-entity}

The style of the owner: an NPC has no limit; a player (and a companion) has the project's style for characters

### Array[Dictionary] validate() {#method-validate}

Checks the settings. Gives the problems found (empty when it is fine).

