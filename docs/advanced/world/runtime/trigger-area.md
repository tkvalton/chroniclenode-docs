<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TriggerArea

**Inherits:** [Area3D](https://docs.godotengine.org/en/stable/classes/class_area3d.html)

Trigger area node that creates and manages its own TriggerAreaData in the database. Similar to NPC, each Trigger area automatically gets a TriggerAreaData when added to a WorldScene.

## Description

Editor Mode:

- Creates TriggerAreaData when placed in a valid WorldScene
- Syncs position/rotation changes to database
- Handles deletion cleanup

Runtime Mode:

- Self-registers with ObjectRegistry
- Manages activation based on quest objectives
- Tracks player presence

## Properties

| | | |
|---|---|---|
| `TriggerAreaData` | [trigger_area_data](#prop-trigger-area-data) |  |
| `String` | [area_name](#prop-area-name) | `"":` |
| `Color` | [debug_color](#prop-debug-color) | `VolumeDebug.TRIGGER_AREA:` |

## Variables

| | | |
|---|---|---|
| `String:` | [display_name](#var-display-name) |  |
| `bool` | [entity_entered](#var-entity-entered) | `false` |
| `int` | [active_references](#var-active-references) | `0` |

## Methods

| | |
|---|---|
| `Array[Node3D]` | [get_bodies_inside](#method-get-bodies-inside)() |
| `bool` | [matches_id](#method-matches-id)( `target_id: int` ) |
| `void` | [set_active](#method-set-active)( `active: bool` ) |
| `void` | [add_reference](#method-add-reference)() |
| `void` | [remove_reference](#method-remove-reference)() |
| `int` | [get_trigger_area_id](#method-get-trigger-area-id)() |

## Property descriptions

### TriggerAreaData trigger_area_data {#prop-trigger-area-data}

Reference to this trigger area's data in the database

### String area_name = "": {#prop-area-name}

Optional name for this area (used in quest descriptions) This is synced to trigger_area_data but kept as export for quick editor access

### Color debug_color = VolumeDebug.TRIGGER_AREA: {#prop-debug-color}

The colour of the shape in the editor (and with Visible Collision Shapes): choose one to tell your trigger areas apart. A clear colour (alpha 0) leaves the colour Godot gives a shape

## Variable descriptions

### String: display_name {#var-display-name}

The name of the trigger area (the event triggers show it): the name set on the node, else the one of its data

### bool entity_entered = false {#var-entity-entered}

Flag to check if a player has entered this area

### int active_references = 0 {#var-active-references}

Number of active objectives referencing this area

## Method descriptions

### Array[Node3D] get_bodies_inside() {#method-get-bodies-inside}

The bodies inside the trigger area right now. An area that is not watched (inactive) does not monitor, so this asks the physics space with the shapes of the trigger area instead: the conditions can ask about any trigger area at any time

### bool matches_id( target_id: int ) {#method-matches-id}

Is this the trigger area with this id?

### void set_active( active: bool ) {#method-set-active}

Turns the trigger area on or off (it shows and detects only while on).

### void add_reference() {#method-add-reference}

A trigger that needs the trigger area asks for it: it turns on.

### void remove_reference() {#method-remove-reference}

A trigger lets the trigger area go: it turns off when nobody needs it.

### int get_trigger_area_id() {#method-get-trigger-area-id}

Get the trigger area ID (convenience method)

