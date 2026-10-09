<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# Region

**Inherits:** [Area3D](https://docs.godotengine.org/en/stable/classes/class_area3d.html)

Region node that creates and manages its own RegionData in the database. Similar to NPC, each Region automatically gets a RegionData when added to a WorldScene.

## Description

Editor Mode:

- Creates RegionData when placed in a valid WorldScene
- Syncs position/rotation changes to database
- Handles deletion cleanup

Runtime Mode:

- Self-registers with ObjectRegistry
- Manages activation based on quest objectives
- Tracks player presence

## Properties

| | | |
|---|---|---|
| `RegionData` | [region_data](#prop-region-data) |  |
| `String` | [area_name](#prop-area-name) | `"":` |

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
| `int` | [get_region_id](#method-get-region-id)() |

## Property descriptions

### RegionData region_data {#prop-region-data}

Reference to this region's data in the database

### String area_name = "": {#prop-area-name}

Optional name for this area (used in quest descriptions) This is synced to region_data but kept as export for quick editor access

## Variable descriptions

### String: display_name {#var-display-name}

The name of the region (the event triggers show it): the name set on the node, else the one of its data

### bool entity_entered = false {#var-entity-entered}

Flag to check if a player has entered this area

### int active_references = 0 {#var-active-references}

Number of active objectives referencing this area

## Method descriptions

### Array[Node3D] get_bodies_inside() {#method-get-bodies-inside}

The bodies inside the region right now. An area that is not watched (inactive) does not monitor, so this asks the physics space with the shapes of the region instead: the conditions can ask about any region at any time

### bool matches_id( target_id: int ) {#method-matches-id}

*No description yet.*

### void set_active( active: bool ) {#method-set-active}

*No description yet.*

### void add_reference() {#method-add-reference}

*No description yet.*

### void remove_reference() {#method-remove-reference}

*No description yet.*

### int get_region_id() {#method-get-region-id}

Get the region ID (convenience method)

