<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TagMapMarkers

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

The icons of the minimap: an entity or an object that has an **entity tag** with "Show on the map" gets the icon of the tag (its map icon, or the icon of the tag) on the map, where it is. The layer covers the picture of the minimap camera, so a world position becomes a point on it through the camera. When two tags are on one entity the one with the highest priority gives the icon. A world map of your own can use the same rule: ask `UITagDefinition.top_tag(entity.get_ui_tags(), func(tag): return tag.show_on_map)` and draw `tag.get_map_icon()`.

## Properties

| | | |
|---|---|---|
| `float` | [update_interval](#prop-update-interval) | `0.2` |
| `Vector2` | [icon_size](#prop-icon-size) | `Vector2(16, 16)` |
| `bool` | [clamp_to_edge](#prop-clamp-to-edge) | `true` |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `map_camera: Camera3D, registry: ObjectRegistry` ) |
| `Dictionary` | [get_markers](#method-get-markers)() |
| `void` | [refresh](#method-refresh)() |

## Property descriptions

### float update_interval = 0.2 {#prop-update-interval}

How often the icons are brought up to date (seconds)

### Vector2 icon_size = Vector2(16, 16) {#prop-icon-size}

The size of an icon (pixels)

### bool clamp_to_edge = true {#prop-clamp-to-edge}

An entity outside the map is shown on its edge, pointing the way (off: it is left out)

## Method descriptions

### void setup( map_camera: Camera3D, registry: ObjectRegistry ) {#method-setup}

Sets the layer up with the camera of the minimap and the registry of the world objects

### Dictionary get_markers() {#method-get-markers}

The markers that are on the map now, by what they mark

### void refresh() {#method-refresh}

Puts an icon for each tagged entity and object, moves the ones that are there and removes the ones that are not

