<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RadiusMarker

**Inherits:** [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

RadiusMarker manages circular visual markers in the game world, typically used to show area of effect or range. It provides functionality to set the color and size of the marker, and handles its removal.

## Description

Key features:

- Displays circular markers with customizable colors
- Allows dynamic resizing of the marker
- Integrates with the PartyManager for marker reset functionality

## Variables

| | | |
|---|---|---|
| `Decal` | [decal](#var-decal) |  |

## Methods

| | |
|---|---|
| `void` | [set_colour](#method-set-colour)( `is_marker_friendly: bool` ) |
| `void` | [set_decal_size](#method-set-decal-size)( `x: float, z: float` ) |
| `void` | [remove](#method-remove)() |

## Variable descriptions

### Decal decal {#var-decal}

Reference to the Decal node used for visual representation

## Method descriptions

### void set_colour( is_marker_friendly: bool ) {#method-set-colour}

Sets the color of the marker based on is_marker_friendly friendly = green, hostile = red

### void set_decal_size( x: float, z: float ) {#method-set-decal-size}

Sets the size of the decal (marker) x: width of the marker z: depth of the marker (usually same as width for circular markers)

### void remove() {#method-remove}

Removes the marker from the scene Called when the PartyManager signals a marker reset

