<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GatherInteraction

**Inherits:** [InteractableObjectInteraction](/advanced/entities/interactions/interactable-object-interaction) < [Interaction](/advanced/entities/interactions/interaction) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A gathering node (an ore vein, an herb, a tree to chop, a fishing spot): using it gives the player what its loot rules of the trigger "On Gathered" roll, straight to the bag. The node has a number of charges (3 uses before it is gone), can be used up and come back later, can raise the skill of a profession, and uses everything every interactable has: requirements (a profession level, a tool), a time to gather with a cast bar, and the animation of the gatherer.

## Description

The loot goes to the bag or not at all: a gatherer whose bag has no room for the roll gets nothing, the charge is not used and the node stays as it was. Or the node can have a **loot window** like a chest: each gather puts what it rolls in the inventory of the node and opens it; what is not taken stays, and until the node is emptied another attempt opens the same window again (no charge, no skill).

## Properties

| | | |
|---|---|---|
| `int` | [charges](#prop-charges) | `1` |
| `WhenDepleted` | [when_depleted](#prop-when-depleted) | `WhenDepleted.STAYS` |
| `float` | [respawn_seconds](#prop-respawn-seconds) | `0.0` |
| `LootMode` | [loot_mode](#prop-loot-mode) | `LootMode.TO_THE_BAG` |
| `float` | [auto_close_distance](#prop-auto-close-distance) | `4.0` |
| `int` | [craft_school_id](#prop-craft-school-id) | `0` |
| `int` | [skill_points](#prop-skill-points) | `1` |
| `int` | [skill_up_from](#prop-skill-up-from) | `1` |
| `int` | [skill_up_until](#prop-skill-up-until) | `0` |
| `CalculationFormula` | [skill_up_curve](#prop-skill-up-curve) |  |
| `String` | [full_animation](#prop-full-animation) | `""` |
| `String` | [gather_animation](#prop-gather-animation) | `""` |
| `String` | [depleted_animation](#prop-depleted-animation) | `""` |

## Variables

| | | |
|---|---|---|
| `int` | [charges_remaining](#var-charges-remaining) | `1` |

## Methods

| | |
|---|---|
| `void` | [setup_for_interactable_objects](#method-setup-for-interactable-objects)( `interactable: InteractableObject` ) |
| `String` | [get_interaction_prompt](#method-get-interaction-prompt)() |
| `bool` | [is_depleted](#method-is-depleted)() |
| `bool` | [can_interact](#method-can-interact)( `player: Player` ) |
| `bool` | [needs_use_time](#method-needs-use-time)( `_entity: Entity` ) |
| `bool` | [has_loot_waiting](#method-has-loot-waiting)() |
| `String` | [get_block_reason](#method-get-block-reason)( `entity: Entity` ) |
| `void` | [start_interaction](#method-start-interaction)( `player: Player` ) |
| `void` | [replenish](#method-replenish)() |
| `Dictionary` | [save_state](#method-save-state)() |
| `void` | [load_state](#method-load-state)( `state: Dictionary` ) |
| `void` | [cleanup](#method-cleanup)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Signals

### gathered( gatherer: Entity ) {#signal-gathered}

Emitted when an entity gathers from the node.

### depleted() {#signal-depleted}

Emitted when the node has no charges left.

### replenished() {#signal-replenished}

Emitted when the node has charges again.

## Enumerations

### enum LootMode {#enum-lootmode}

The options of loot mode: to the bag, window.

- **TO_THE_BAG** = `0` - What a gather rolls goes straight to the bag of the gatherer (all of it, or nothing)
- **WINDOW** = `1` - What a gather rolls goes into the inventory of the node and its window opens, like a chest. What is not taken stays: the next attempt opens the same window, with no new roll
- **ON_THE_GROUND** = `2` - What a gather rolls lies on the ground around the node as dropped items (the gatherer picks them up). A bag that is full does not stop the gather

### enum WhenDepleted {#enum-whendepleted}

The options of when depleted: stays, disappears.

- **STAYS** = `0` - The node stays where it is and plays its depleted animation, but cannot be used
- **DISAPPEARS** = `1` - The node vanishes (it cannot be seen, hit or used) until it comes back

## Property descriptions

*Uses*

### int charges = 1 {#prop-charges}

How many times the node can be gathered from before it is used up

### WhenDepleted when_depleted = WhenDepleted.STAYS {#prop-when-depleted}

What a used-up node looks like

### float respawn_seconds = 0.0 {#prop-respawn-seconds}

Seconds of game time until a used-up node is full again. 0 = never (until an event or a spawner brings it back)

*Loot*

### LootMode loot_mode = LootMode.TO_THE_BAG {#prop-loot-mode}

Where the loot goes: straight to the bag, or into a window that the gatherer takes from

### float auto_close_distance = 4.0 {#prop-auto-close-distance}

Window: the window closes by itself when the gatherer walks this far from the node

*Skill*

### int craft_school_id = 0 {#prop-craft-school-id}

The profession that a gather raises (a craft school: Mining, Herbalism). 0 = none. Using the node is gated by the requirements of the interactable (a profession level)

### int skill_points = 1 {#prop-skill-points}

The skill points one gather gives (Points mode) or the weight of the chance (Skill-ups mode)

### int skill_up_from = 1 {#prop-skill-up-from}

The skill level at which the node teaches the most

### int skill_up_until = 0 {#prop-skill-up-until}

The skill level at which the node stops teaching anything (grey). 0 = it never stops

### CalculationFormula skill_up_curve {#prop-skill-up-curve}

How much the node teaches inside its range: 1 at its start, 0 at its end. Empty = a straight line down (as the recipes of a profession)

*Animations*

### String full_animation = "" {#prop-full-animation}

The animation of the object when it is full (played when it is set up and when it comes back). Empty = none

### String gather_animation = "" {#prop-gather-animation}

The animation of the object each time it is gathered from

### String depleted_animation = "" {#prop-depleted-animation}

The animation of the object when it is used up

## Variable descriptions

### int charges_remaining = 1 {#var-charges-remaining}

Uses left

## Method descriptions

### void setup_for_interactable_objects( interactable: InteractableObject ) {#method-setup-for-interactable-objects}

Sets the charges of the node.

### String get_interaction_prompt() {#method-get-interaction-prompt}

The text of the prompt above the node ("Gather").

### bool is_depleted() {#method-is-depleted}

Has the node run out of charges?

### bool can_interact( player: Player ) {#method-can-interact}

Can the node be gathered from now? (it is not used up, and the gatherer's bag has some room)

### bool needs_use_time( _entity: Entity ) {#method-needs-use-time}

Does the use take its time? Not when it only opens the window again (loot is waiting)

### bool has_loot_waiting() {#method-has-loot-waiting}

Window: is there loot in the node that nobody has taken?

### String get_block_reason( entity: Entity ) {#method-get-block-reason}

Why the node cannot be used ("" = it can)

### void start_interaction( player: Player ) {#method-start-interaction}

The player gathers: uses up a charge and rolls the loot.

### void replenish() {#method-replenish}

The node is full again (its respawn time passed, or an event or a spawner brought it back)

### Dictionary save_state() {#method-save-state}

The state of the node for a save (the charges and whether it is depleted).

### void load_state( state: Dictionary ) {#method-load-state}

Restores the state of the node from a save.

### void cleanup() {#method-cleanup}

Stops the timers of the node.

### Array[Dictionary] validate() {#method-validate}

Checks the settings. Gives the problems found (empty when it is fine).

