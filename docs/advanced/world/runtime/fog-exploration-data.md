<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# FogExplorationData

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Stores fog of war exploration data for a single map. Used by WorldContainer to cache and restore fog state between map transitions.

## Properties

| | | |
|---|---|---|
| `PackedByteArray` | [exploration_bytes](#prop-exploration-bytes) | `PackedByteArray()` |
| `Vector2` | [map_size](#prop-map-size) | `Vector2.ZERO` |
| `float` | [last_updated](#prop-last-updated) | `0.0` |

## Methods

| | |
|---|---|
| `FogExplorationData` | [from_image](#method-from-image)( `image: Image, size: Vector2` ) *static* |
| `Image` | [get_image](#method-get-image)() |
| `bool` | [is_valid_for_size](#method-is-valid-for-size)( `size: Vector2` ) |
| `bool` | [has_data](#method-has-data)() |
| `void` | [clear](#method-clear)() |
| `int` | [get_data_size](#method-get-data-size)() |

## Property descriptions

### PackedByteArray exploration_bytes = PackedByteArray() {#prop-exploration-bytes}

The exploration image as compressed PNG bytes

### Vector2 map_size = Vector2.ZERO {#prop-map-size}

The map size this data was captured from (for validation)

### float last_updated = 0.0 {#prop-last-updated}

Timestamp when this data was last updated

## Method descriptions

### FogExplorationData from_image( image: Image, size: Vector2 ) {#method-from-image}

Create from an exploration image

### Image get_image() {#method-get-image}

Get the exploration image (returns null if no data or decompression fails)

### bool is_valid_for_size( size: Vector2 ) {#method-is-valid-for-size}

Check if this data is valid for a given map size

### bool has_data() {#method-has-data}

Check if data exists

### void clear() {#method-clear}

Clear the stored data

### int get_data_size() {#method-get-data-size}

Get size of stored data in bytes (for debugging)

