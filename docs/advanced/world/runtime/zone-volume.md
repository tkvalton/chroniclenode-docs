<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ZoneVolume

**Inherits:** [SpaceVolume](/advanced/world/runtime/space-volume) < [Area3D](https://docs.godotengine.org/en/stable/classes/class_area3d.html)

A **zone volume**: a box, sphere, cylinder or capsule (the shape of its CollisionShape3D child) that puts the party in a zone while it is inside. It sits **on top of** the zone painted on the ground: a cave under a hill is a zone volume with a higher priority than the forest painted above it; the inside of a building, a tower with its own floors, a floating island too. Where volumes overlap, the one with the highest priority wins (the smaller one on a tie). It needs no physics: the tracker asks every volume whether the party is inside. See docs: World &gt; Zones.

## Properties

| | | |
|---|---|---|
| `int` | [zone_id](#prop-zone-id) | `0` |
| `int` | [zone_priority](#prop-zone-priority) | `0` |

## Methods

| | |
|---|---|
| `float` | [get_shape_size](#method-get-shape-size)() |

## Constants

- `StringName` **GROUP** = `&"zone_volumes"` - The group every zone volume is in while it is in the tree (the tracker asks them).

## Property descriptions

### int zone_id = 0 {#prop-zone-id}

The zone the party is in while it is inside this volume (a ZoneDefinition id)

### int zone_priority = 0 {#prop-zone-priority}

Where volumes overlap the highest priority wins. A volume always wins over the zone painted on the ground and over the default zone of the world

## Method descriptions

### float get_shape_size() {#method-get-shape-size}

How big the shape is (m3): of two overlapping volumes of the same priority the smaller one wins.

