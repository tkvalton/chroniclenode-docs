<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CollisionLayerUtility

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Centralized collision layer management for ChronicleNode Provides consistent collision layer assignment and mask configuration

## Variables

| | | |
|---|---|---|
| `Dictionary` | [default_collision_masks](#var-default-collision-masks) | `{ ... }` |
| `CollisionLayerConfig` | [collision_config](#var-collision-config) | `null` |
| `Dictionary` | [collision_mask_overrides](#var-collision-mask-overrides) | `{}` |
| `Dictionary` | [collision_profiles](#var-collision-profiles) | `{ ... }` |
| `String` | [active_profile](#var-active-profile) | `"standard_rpg"` |

## Methods

| | |
|---|---|
| `void` | [initialize](#method-initialize)() *static* |
| `int` | [get_entity_collision_layer](#method-get-entity-collision-layer)( `entity: Entity` ) *static* |
| `int` | [get_object_collision_layer](#method-get-object-collision-layer)( `object_type: String` ) *static* |
| `int` | [get_collision_mask_for_layer](#method-get-collision-mask-for-layer)( `layer: int` ) *static* |
| `int` | [get_area_effect_mask](#method-get-area-effect-mask)( `affected_targets: CollisionEffect.AffectedTargets, originator: Variant = null` ) *static* |
| `bool` | [is_valid_faction_target](#method-is-valid-faction-target)( `originator: Variant, target: Variant, target_type: ChainEffect.ChainTargetType` ) *static* |
| `bool` | [setup_trap_collision_detection](#method-setup-trap-collision-detection)( `detection_area: Area3D, trigger_players: bool = true, trigger_npcs: bool = true, trigger_pets: bool = false, debug_output: bool = false` ) *static* |
| `bool` | [validate_entity_collision_for_traps](#method-validate-entity-collision-for-traps)( `entity: Entity, debug_output: bool = false` ) *static* |
| `bool` | [setup_standard_trap_collision](#method-setup-standard-trap-collision)( `detection_area: Area3D, trap_type: String = "hostile", debug_output: bool = false` ) *static* |
| `void` | [debug_area_collision_setup](#method-debug-area-collision-setup)( `area: Area3D` ) *static* |
| `bool` | [apply_collision_profile](#method-apply-collision-profile)( `profile_name: String` ) *static* |
| `void` | [set_layer_collision_mask](#method-set-layer-collision-mask)( `layer: int, mask: int` ) *static* |
| `void` | [add_layer_to_mask](#method-add-layer-to-mask)( `layer: int, target_layer: int` ) *static* |
| `void` | [remove_layer_from_mask](#method-remove-layer-from-mask)( `layer: int, target_layer: int` ) *static* |
| `void` | [reset_layer_to_default](#method-reset-layer-to-default)( `layer: int` ) *static* |
| `void` | [reset_all_to_defaults](#method-reset-all-to-defaults)() *static* |
| `bool` | [save_config](#method-save-config)( `path: String = "res://src/data/config_data/collision_layer_config.tres"` ) *static* |
| `bool` | [reload_config](#method-reload-config)( `path: String = "res://src/data/config_data/collision_layer_config.tres"` ) *static* |
| `void` | [setup_entity_collision](#method-setup-entity-collision)( `entity: Entity` ) *static* |
| `void` | [setup_interactable_collision](#method-setup-interactable-collision)( `interactable: InteractableObject` ) *static* |
| `bool` | [is_collision_effect_target_valid](#method-is-collision-effect-target-valid)( `originator: Variant, target: Variant, affected_targets: CollisionEffect.AffectedTargets, affects_neutrals: bool = false` ) *static* |
| `String` | [get_layer_name](#method-get-layer-name)( `layer: int` ) *static* |
| `Dictionary` | [get_all_layers](#method-get-all-layers)() *static* |
| `bool` | [is_valid_layer](#method-is-valid-layer)( `layer: int` ) *static* |
| `String` | [get_mask_description](#method-get-mask-description)( `mask: int` ) *static* |
| `Array[String]` | [validate_collision_setup](#method-validate-collision-setup)() *static* |
| `Dictionary` | [get_settings_data](#method-get-settings-data)() *static* |
| `void` | [load_settings_data](#method-load-settings-data)( `data: Dictionary` ) *static* |

## Enumerations

### enum CollisionLayer {#enum-collisionlayer}

- **WORLD_TERRAIN** = `1`
- **PLAYER_CHARACTERS** = `2`
- **ALL_NPCS** = `3`
- **ENVIRONMENTAL_DESTRUCTIBLES** = `4`
- **INTERACTABLE_OBJECTS** = `5`
- **MOVEABLE_OBJECTS** = `6`
- **PROJECTILES** = `7`
- **arrows** = `8`
- **bullets** = `9`
- **ITEMS_LOOT** = `8`
- **PLAYER_PETS** = `9`
- **AREA_EFFECTS** = `10`
- **REGIONS** = `11`
- **CAMERA_DETECTION** = `12`
- **MOUSE_DETECTION** = `13`

### enum HitMode {#enum-hitmode}

- **TARGET_ONLY** = `0`
- **ALL_ENTITIES** = `1`
- **ENEMY_ENTITIES** = `2`
- **ALLY_ENTITIES** = `3`
- **WORLD_OBJECTS** = `4`
- **ALL_AND_WORLD** = `5`
- **ENEMY_AND_WORLD** = `6`

## Variable descriptions

### Dictionary default_collision_masks {#var-default-collision-masks}

*No description yet.*

### CollisionLayerConfig collision_config = null {#var-collision-config}

*No description yet.*

### Dictionary collision_mask_overrides =  {#var-collision-mask-overrides}

*No description yet.*

### Dictionary collision_profiles {#var-collision-profiles}

*No description yet.*

### String active_profile = "standard_rpg" {#var-active-profile}

*No description yet.*

## Method descriptions

### void initialize() {#method-initialize}

Initialize the collision system Call this from GameHost on startup

### int get_entity_collision_layer( entity: Entity ) {#method-get-entity-collision-layer}

Get the appropriate collision layer for an entity based on its type and faction

### int get_object_collision_layer( object_type: String ) {#method-get-object-collision-layer}

Get collision layer for objects based on their type

### int get_collision_mask_for_layer( layer: int ) {#method-get-collision-mask-for-layer}

Get the collision mask for a given layer

### int get_area_effect_mask( affected_targets: CollisionEffect.AffectedTargets, originator: Variant = null ) {#method-get-area-effect-mask}

Get collision mask for area effects based on target type

### bool is_valid_faction_target( originator: Variant, target: Variant, target_type: ChainEffect.ChainTargetType ) {#method-is-valid-faction-target}

Check if faction-based targeting is valid between two entities

### bool setup_trap_collision_detection( detection_area: Area3D, trigger_players: bool = true, trigger_npcs: bool = true, trigger_pets: bool = false, debug_output: bool = false ) {#method-setup-trap-collision-detection}

Setup collision detection for trap areas

### bool validate_entity_collision_for_traps( entity: Entity, debug_output: bool = false ) {#method-validate-entity-collision-for-traps}

Validate that entities have the correct collision layers for trap detection

### bool setup_standard_trap_collision( detection_area: Area3D, trap_type: String = "hostile", debug_output: bool = false ) {#method-setup-standard-trap-collision}

Quick setup method for common trap configurations

### void debug_area_collision_setup( area: Area3D ) {#method-debug-area-collision-setup}

Debug method to print current collision setup of an area

### bool apply_collision_profile( profile_name: String ) {#method-apply-collision-profile}

Apply a collision profile

### void set_layer_collision_mask( layer: int, mask: int ) {#method-set-layer-collision-mask}

Set custom collision mask for a layer

### void add_layer_to_mask( layer: int, target_layer: int ) {#method-add-layer-to-mask}

Add layer to collision mask

### void remove_layer_from_mask( layer: int, target_layer: int ) {#method-remove-layer-from-mask}

Remove layer from collision mask

### void reset_layer_to_default( layer: int ) {#method-reset-layer-to-default}

Reset layer to default collision mask

### void reset_all_to_defaults() {#method-reset-all-to-defaults}

Reset all layers to defaults

### bool save_config( path: String = "res://src/data/config_data/collision_layer_config.tres" ) {#method-save-config}

Save the current collision config to disk

### bool reload_config( path: String = "res://src/data/config_data/collision_layer_config.tres" ) {#method-reload-config}

Reload the config from disk

### void setup_entity_collision( entity: Entity ) {#method-setup-entity-collision}

Update entity collision setup (call this from Entity._setup_entity_collision)

### void setup_interactable_collision( interactable: InteractableObject ) {#method-setup-interactable-collision}

Update interactable object collision setup

### bool is_collision_effect_target_valid( originator: Variant, target: Variant, affected_targets: CollisionEffect.AffectedTargets, affects_neutrals: bool = false ) {#method-is-collision-effect-target-valid}

Check if collision effect target is valid (replaces _is_valid_target in CollisionEffect)

### String get_layer_name( layer: int ) {#method-get-layer-name}

Get layer name for display purposes

### Dictionary get_all_layers() {#method-get-all-layers}

Get all available layer names and IDs

### bool is_valid_layer( layer: int ) {#method-is-valid-layer}

Check if a layer is valid

### String get_mask_description( mask: int ) {#method-get-mask-description}

Get readable mask description

### Array[String] validate_collision_setup() {#method-validate-collision-setup}

Validate current collision setup

### Dictionary get_settings_data() {#method-get-settings-data}

Get settings data for save/load

### void load_settings_data( data: Dictionary ) {#method-load-settings-data}

Load settings data

