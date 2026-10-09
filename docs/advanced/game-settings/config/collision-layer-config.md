<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CollisionLayerConfig

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Configuration resource for collision layer masks Stores the collision masks for each layer, allowing runtime customization while keeping the layer definitions themselves fixed

## Properties

| | | |
|---|---|---|
| `Dictionary` | [layer_collision_masks](#prop-layer-collision-masks) | `{}` |

## Methods

| | |
|---|---|
| `int` | [get_mask_for_layer](#method-get-mask-for-layer)( `layer: int` ) |
| `void` | [set_mask_for_layer](#method-set-mask-for-layer)( `layer: int, mask: int` ) |
| `bool` | [layer_collides_with](#method-layer-collides-with)( `source_layer: int, target_layer: int` ) |
| `void` | [add_layer_to_mask](#method-add-layer-to-mask)( `source_layer: int, target_layer: int` ) |
| `void` | [remove_layer_from_mask](#method-remove-layer-from-mask)( `source_layer: int, target_layer: int` ) |
| `void` | [reset_layer_to_default](#method-reset-layer-to-default)( `layer: int` ) |
| `void` | [reset_all_to_defaults](#method-reset-all-to-defaults)() |
| `Array[int]` | [get_layers_from_mask](#method-get-layers-from-mask)( `mask: int` ) |
| `Array[String]` | [validate](#method-validate)() |
| `CollisionLayerConfig` | [get_config](#method-get-config)() *static* |

## Constants

- `const` **CONFIG_PATH** = `"res://src/data/config_data/collision_layer_config.tres"`

## Property descriptions

### Dictionary layer_collision_masks =  {#prop-layer-collision-masks}

Dictionary mapping layer IDs to their collision masks Key: int (layer ID from CollisionLayer enum) Value: int (bitmask of layers to collide with)

## Method descriptions

### int get_mask_for_layer( layer: int ) {#method-get-mask-for-layer}

Get the collision mask for a specific layer

### void set_mask_for_layer( layer: int, mask: int ) {#method-set-mask-for-layer}

Set the collision mask for a specific layer

### bool layer_collides_with( source_layer: int, target_layer: int ) {#method-layer-collides-with}

Check if a layer collides with another layer

### void add_layer_to_mask( source_layer: int, target_layer: int ) {#method-add-layer-to-mask}

Add a target layer to a source layer's collision mask

### void remove_layer_from_mask( source_layer: int, target_layer: int ) {#method-remove-layer-from-mask}

Remove a target layer from a source layer's collision mask

### void reset_layer_to_default( layer: int ) {#method-reset-layer-to-default}

Reset a layer to its default mask

### void reset_all_to_defaults() {#method-reset-all-to-defaults}

Reset all layers to default masks

### Array[int] get_layers_from_mask( mask: int ) {#method-get-layers-from-mask}

Get array of layers from collision mask

### Array[String] validate() {#method-validate}

Validate the configuration

### CollisionLayerConfig get_config() {#method-get-config}

*No description yet.*

