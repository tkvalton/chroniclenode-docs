<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PointMarker

**Inherits:** [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

PointMarker manages visual markers and selection mechanics in the game world. It handles mouse pointer functionality, group selection, and visual feedback for various game elements.

## Description

Key features:

- Displays and manages visual markers at specified locations
- Handles mouse tracking and interaction with the game world
- Manages group selection of entities (e.g., players)
- Provides visual feedback through decals and outlines
- Supports different marker types, colors, and textures

## Variables

| | | |
|---|---|---|
| `Camera3D` | [camera](#var-camera) |  |
| `bool` | [mouse_marker](#var-mouse-marker) |  |
| `Entity` | [caster](#var-caster) |  |
| `float` | [offset](#var-offset) | `0.0` |
| `Array[Entity]` | [players_within_group_selection](#var-players-within-group-selection) |  |
| `Entity` | [current_hovered_entity](#var-current-hovered-entity) | `null` |
| `Array[Entity]` | [entities_in_target_area](#var-entities-in-target-area) | `[]` |
| `bool` | [target_mode](#var-target-mode) | `false` |
| `int` | [default_collision_mask](#var-default-collision-mask) |  |
| `bool` | [show_attack_ribbon](#var-show-attack-ribbon) | `false` |
| `Area3D` | [target_select](#var-target-select) |  |
| `CollisionShape3D` | [target_select_collision_shape](#var-target-select-collision-shape) |  |
| `Decal` | [target_select_area_decal](#var-target-select-area-decal) |  |
| `Area3D` | [group_selection_box](#var-group-selection-box) |  |
| `CollisionShape3D` | [group_selection_box_collision_shape](#var-group-selection-box-collision-shape) |  |
| `MeshInstance3D` | [attack_ribbon](#var-attack-ribbon) |  |
| `StandardMaterial3D` | [attack_ribbon_material](#var-attack-ribbon-material) |  |
| `PartyManager` | [party_manager](#var-party-manager) |  |

## Methods

| | |
|---|---|
| `void` | [setup_mouse_area](#method-setup-mouse-area)( `area: Area3D` ) |
| `void` | [connect_signals](#method-connect-signals)() |
| `void` | [target_mode_trigger_off](#method-target-mode-trigger-off)() |
| `void` | [new_marker](#method-new-marker)( `location: TargetStrategyDefinition.AbilityMarkerLocation, is_marker_friendly: bool, texture_path: String, x: float, z: float, m: float, user: Variant, new_offset: float` ) |
| `void` | [marker_default](#method-marker-default)() |
| `void` | [set_location](#method-set-location)( `location: TargetStrategyDefinition.AbilityMarkerLocation, user: Variant` ) |
| `void` | [set_colour](#method-set-colour)( `is_marker_friendly: bool` ) |
| `void` | [set_texture](#method-set-texture)( `texture_path: String` ) |
| `void` | [set_target_select_area_decal_size](#method-set-target-select-area-decal-size)( `x: float, z: float` ) |
| `void` | [set_area_size](#method-set-area-size)( `m: float` ) |
| `void` | [set_offset](#method-set-offset)( `new_offset: float` ) |
| `void` | [show_hide](#method-show-hide)( `value: bool` ) |

## Constants

- `float` **ATTACK_RIBBON_WIDTH** = `0.5` - Attack ribbon constants - loaded from GameplayConfig
- `int` **ATTACK_RIBBON_SEGMENTS** = `20`
- `float` **ATTACK_RIBBON_HEIGHT_OFFSET** = `1.5`
- `float` **ATTACK_RIBBON_ARC_HEIGHT** = `2.0` - How high the middle of the arc should be
- `int` **TERRAIN_MASK** = `1 << 5` - Terrain layer mask (layer 6 in Godot is 1&lt;&lt;5)

## Variable descriptions

### Camera3D camera {#var-camera}

Reference to the main camera

### bool mouse_marker {#var-mouse-marker}

Flag to determine if the marker follows the mouse

### Entity caster {#var-caster}

The entity casting or associated with this marker

### float offset = 0.0 {#var-offset}

Offset distance for positioning the marker

### Array[Entity] players_within_group_selection {#var-players-within-group-selection}

Array of players within the group selection area

### Entity current_hovered_entity = null {#var-current-hovered-entity}

Currently hovered entity under target selection

### Array[Entity] entities_in_target_area = [] {#var-entities-in-target-area}

List of entities within the target selection area

### bool target_mode = false {#var-target-mode}

Flag indicating if the marker is in target mode

### int default_collision_mask {#var-default-collision-mask}

Stores the default collision mask to restore when exiting target mode

### bool show_attack_ribbon = false {#var-show-attack-ribbon}

Flag to determine if the attack ribbon should be visible

### Area3D target_select {#var-target-select}

Reference to the target selection area

### CollisionShape3D target_select_collision_shape {#var-target-select-collision-shape}

Collision shape for the target selection area

### Decal target_select_area_decal {#var-target-select-area-decal}

Visual decal for the target selection area

### Area3D group_selection_box {#var-group-selection-box}

Reference to the group selection box for multi-unit selection

### CollisionShape3D group_selection_box_collision_shape {#var-group-selection-box-collision-shape}

Collision shape for the group selection box

### MeshInstance3D attack_ribbon {#var-attack-ribbon}

Attack ribbon mesh instance and material

### StandardMaterial3D attack_ribbon_material {#var-attack-ribbon-material}

*No description yet.*

### PartyManager party_manager {#var-party-manager}

System Ref

## Method descriptions

### void setup_mouse_area( area: Area3D ) {#method-setup-mouse-area}

*No description yet.*

### void connect_signals() {#method-connect-signals}

Connects all area signals for target selection and group selection

### void target_mode_trigger_off() {#method-target-mode-trigger-off}

Handles disabling target mode and restoring default collision mask

### void new_marker( location: TargetStrategyDefinition.AbilityMarkerLocation, is_marker_friendly: bool, texture_path: String, x: float, z: float, m: float, user: Variant, new_offset: float ) {#method-new-marker}

Sets up a new marker with specified properties

### void marker_default() {#method-marker-default}

Resets the marker to default settings

### void set_location( location: TargetStrategyDefinition.AbilityMarkerLocation, user: Variant ) {#method-set-location}

Sets the location type (mouse or entity) for the marker

### void set_colour( is_marker_friendly: bool ) {#method-set-colour}

Sets the color of the marker based on is_marker_friendly friendly = green, hostile = red

### void set_texture( texture_path: String ) {#method-set-texture}

Sets the texture of the marker based on the texture resource path

### void set_target_select_area_decal_size( x: float, z: float ) {#method-set-target-select-area-decal-size}

Sets the size of the target_select_area_decal

### void set_area_size( m: float ) {#method-set-area-size}

Sets the size of the interaction area

### void set_offset( new_offset: float ) {#method-set-offset}

Sets the offset distance for the marker positioning

### void show_hide( value: bool ) {#method-show-hide}

Toggles the visibility of the marker and resets caster if hiding

