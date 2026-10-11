<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GatherInteraction

**Inherits:** [InteractableObjectInteraction](/advanced/entities/interactions/interactable-object-interaction) < [Interaction](/advanced/entities/interactions/interaction) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A gathering node (an ore vein, an herb, a tree to chop, a fishing spot): using it gives the player what its loot rules of the trigger "On Gathered" roll, straight to the bag. The node has a number of charges (3 uses before it is gone), can be used up and come back later, can raise the skill of a profession, and uses everything every interactable has: requirements (a profession level, a tool), a time to gather with a cast bar, and the animation of the gatherer.

## Description

The loot goes to the bag or not at all: a gatherer whose bag has no room for the roll gets nothing, the charge is not used and the node stays as it was.

## Properties

| | | |
|---|---|---|
| `int` | [charges](#prop-charges) | `1` |
| `WhenDepleted` | [when_depleted](#prop-when-depleted) | `WhenDepleted.STAYS` |
| `float` | [respawn_seconds](#prop-respawn-seconds) | `0.0` |
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
| `void` | [setup_for_interactable_objects](#method-setup-for-interactable-objects)( `_interactable: InteractableObject` ) |
| `String` | [get_interaction_prompt](#method-get-interaction-prompt)() |
| `bool` | [is_depleted](#method-is-depleted)() |
| `bool` | [can_interact](#method-can-interact)( `player: Player` ) |
| `String` | [get_block_reason](#method-get-block-reason)( `entity: Entity` ) |
| `void` | [start_interaction](#method-start-interaction)( `player: Player` ) |
| `void` | [replenish](#method-replenish)() |
| `Dictionary` | [save_state](#method-save-state)() |
| `void` | [load_state](#method-load-state)( `state: Dictionary` ) |
| `void` | [cleanup](#method-cleanup)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Signals

### gathered( gatherer: Entity ) {#signal-gathered}

### depleted() {#signal-depleted}

### replenished() {#signal-replenished}

## Enumerations

### enum WhenDepleted {#enum-whendepleted}

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

### void setup_for_interactable_objects( _interactable: InteractableObject ) {#method-setup-for-interactable-objects}

*Overrides this function of [InteractableObjectInteraction](/advanced/entities/interactions/interactable-object-interaction).*

### String get_interaction_prompt() {#method-get-interaction-prompt}

*No description yet.*

### bool is_depleted() {#method-is-depleted}

*No description yet.*

### bool can_interact( player: Player ) {#method-can-interact}

Can the node be gathered from now? (it is not used up, and the gatherer's bag has some room)

### String get_block_reason( entity: Entity ) {#method-get-block-reason}

Why the node cannot be used ("" = it can)

### void start_interaction( player: Player ) {#method-start-interaction}

Start the interaction with the given player *(from [Interaction](/advanced/entities/interactions/interaction))*

### void replenish() {#method-replenish}

The node is full again (its respawn time passed, or an event or a spawner brought it back)

### Dictionary save_state() {#method-save-state}

*No description yet.*

### void load_state( state: Dictionary ) {#method-load-state}

*No description yet.*

### void cleanup() {#method-cleanup}

*No description yet.*

### Array[Dictionary] validate() {#method-validate}

*No description yet.*

