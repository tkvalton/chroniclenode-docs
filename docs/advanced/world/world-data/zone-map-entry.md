<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ZoneMapEntry

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

The picture of one zone, made for the world map: a top-down picture (a file in the maps folder of the world) and the area of the world it covers (a square), so any place of the world is a place of the picture and a marker can be put on it where its thing really is. Made by Generate Zone Maps on the world scene and kept in WorldData.zone_maps. A picture you drew yourself goes in the same entry (set **Is custom**): it keeps its place when the pictures are made again. See docs: World &gt; World map.

## Properties

| | | |
|---|---|---|
| `int` | [zone_id](#prop-zone-id) | `0` |
| `String` | [zone_name](#prop-zone-name) | `""` |
| `Texture2D` | [image](#prop-image) |  |
| `Rect2` | [rect](#prop-rect) | `Rect2()` |
| `bool` | [is_custom](#prop-is-custom) | `false` |

## Methods

| | |
|---|---|
| `String` | [describe](#method-describe)() |
| `bool` | [is_valid](#method-is-valid)() |

## Property descriptions

### int zone_id = 0 {#prop-zone-id}

The zone this picture is of (a ZoneDefinition id). The zone is found by this number, so renaming the zone leaves the picture where it is

### String zone_name = "" {#prop-zone-name}

The name of the zone when the picture was made: for the name of the file and to read the list. It is not used to find anything

### Texture2D image {#prop-image}

The picture

### Rect2 rect = Rect2() {#prop-rect}

The area of the world (x, z in metres) the picture covers: the corner and the size, a square. A picture of your own must say here which area it is drawn over

### bool is_custom = false {#prop-is-custom}

A picture you made yourself (a stylized map): Generate Zone Maps leaves it alone

## Method descriptions

### String describe() {#method-describe}

One line that says what the entry is (for the list in the editor)

### bool is_valid() {#method-is-valid}

Is the entry complete (a zone, a picture and an area)?

