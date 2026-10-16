<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MountEntityAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Puts an NPC on a mount or a vehicle (both placed NPCs): a rider who climbs on a horse, a gunner who takes the turret of a wagon. The NPC sits on the seat you give, or the first seat that is free, and the seat's AI (if it has one) acts for it. A hostile vehicle that is not hijackable refuses an NPC of an enemy faction, unless Force is on.

## Properties

| | | |
|---|---|---|
| `int` | [entity_unique_id](#prop-entity-unique-id) | `0` |
| `int` | [mount_unique_id](#prop-mount-unique-id) | `0` |
| `int` | [seat_number](#prop-seat-number) | `0` |
| `bool` | [force](#prop-force) | `false` |

## Variables

| | | |
|---|---|---|
| `Entity` | [rider_entity](#var-rider-entity) | `null` |
| `Entity` | [mount_entity](#var-mount-entity) | `null` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### int entity_unique_id = 0 {#prop-entity-unique-id}

Unique ID of the NPC that gets on

### int mount_unique_id = 0 {#prop-mount-unique-id}

Unique ID of the NPC it gets on (the mount or the vehicle; it needs a Mount interaction)

### int seat_number = 0 {#prop-seat-number}

The seat: 1 is the first (the driver's, normally), 2 the second ... 0 = the first that is free

### bool force = false {#prop-force}

Get on even if the vehicle is hostile to the NPC and not hijackable

## Variable descriptions

### Entity rider_entity = null {#var-rider-entity}

References to the NPCs

### Entity mount_entity = null {#var-mount-entity}

*No description yet.*

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary

