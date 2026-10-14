<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CharacterCreation3DScene

**Inherits:** [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

CharacterCreation3DScene - Manages the 3D character preview in character creation Handles skeleton instantiation, customization preview, and idle animations

## Properties

| | | |
|---|---|---|
| `Node3D` | [skeleton_container](#prop-skeleton-container) |  |
| `Array[String]` | [idle_animation_names](#prop-idle-animation-names) | `["Idle", "idle", "IDLE", "Standing"]` |
| `Camera3D` | [preview_camera](#prop-preview-camera) |  |
| `float` | [rotation_speed](#prop-rotation-speed) | `0.5` |

## Variables

| | | |
|---|---|---|
| `CustomSkeleton` | [current_skeleton](#var-current-skeleton) | `null` |
| `AnimationPlayer` | [animation_player](#var-animation-player) | `null` |
| `CustomCharacterDefinition` | [current_definition](#var-current-definition) | `null` |
| `String` | [current_animation_type](#var-current-animation-type) | `""` |
| `bool` | [auto_rotate](#var-auto-rotate) | `false` |
| `float` | [current_rotation](#var-current-rotation) | `0.0` |

## Methods

| | |
|---|---|
| `void` | [set_skeleton_from_definition](#method-set-skeleton-from-definition)( `definition: CustomCharacterDefinition` ) |
| `void` | [set_skeleton_from_scene](#method-set-skeleton-from-scene)( `scene: PackedScene` ) |
| `void` | [set_skeleton_from_node](#method-set-skeleton-from-node)( `skeleton_node: Node` ) |
| `void` | [apply_customization](#method-apply-customization)( `definition: CustomCharacterDefinition` ) |
| `void` | [update_color](#method-update-color)( `param_name: String, color: Color` ) |
| `void` | [update_blend_shape](#method-update-blend-shape)( `shape_name: String, weight: float` ) |
| `void` | [play_idle](#method-play-idle)() |
| `void` | [play_animation](#method-play-animation)( `animation_name: String` ) |
| `void` | [stop_animation](#method-stop-animation)() |
| `void` | [set_auto_rotate](#method-set-auto-rotate)( `enabled: bool` ) |
| `void` | [set_rotation_angle](#method-set-rotation-angle)( `angle: float` ) |
| `void` | [rotate_preview](#method-rotate-preview)( `delta_angle: float` ) |
| `CustomSkeleton` | [get_skeleton](#method-get-skeleton)() |
| `CustomCharacterDefinition` | [get_definition](#method-get-definition)() |
| `bool` | [has_skeleton](#method-has-skeleton)() |
| `void` | [set_animation_type](#method-set-animation-type)( `animation_type: String` ) |
| `void` | [reset](#method-reset)() |
| `void` | [apply_template_equipment](#method-apply-template-equipment)( `template: CharacterDefinition` ) |
| `void` | [apply_class_equipment](#method-apply-class-equipment)( `player_class: PlayerClassDefinition` ) |
| `void` | [clear_equipment](#method-clear-equipment)() |

## Signals

### skeleton_changed( skeleton: CustomSkeleton ) {#signal-skeleton-changed}

### customization_applied( definition: CustomCharacterDefinition ) {#signal-customization-applied}

## Property descriptions

### Node3D skeleton_container {#prop-skeleton-container}

Node to parent skeletons under (uses self if not set)

### Array[String] idle_animation_names = ["Idle", "idle", "IDLE", "Standing"] {#prop-idle-animation-names}

Default idle animation names to try

### Camera3D preview_camera {#prop-preview-camera}

Camera for the preview (optional, for rotation control)

### float rotation_speed = 0.5 {#prop-rotation-speed}

Rotation speed for preview

## Variable descriptions

### CustomSkeleton current_skeleton = null {#var-current-skeleton}

The currently displayed skeleton

### AnimationPlayer animation_player = null {#var-animation-player}

Animation player reference (created dynamically)

### CustomCharacterDefinition current_definition = null {#var-current-definition}

Current character definition being previewed

### String current_animation_type = "" {#var-current-animation-type}

Current animation type for this character

### bool auto_rotate = false {#var-auto-rotate}

*No description yet.*

### float current_rotation = 0.0 {#var-current-rotation}

*No description yet.*

## Method descriptions

### void set_skeleton_from_definition( definition: CustomCharacterDefinition ) {#method-set-skeleton-from-definition}

Set the skeleton from a CustomCharacterDefinition

### void set_skeleton_from_scene( scene: PackedScene ) {#method-set-skeleton-from-scene}

Set skeleton directly from a PackedScene

### void set_skeleton_from_node( skeleton_node: Node ) {#method-set-skeleton-from-node}

Set skeleton from an existing node (will be reparented)

### void apply_customization( definition: CustomCharacterDefinition ) {#method-apply-customization}

Apply customization to the current skeleton

### void update_color( param_name: String, color: Color ) {#method-update-color}

Update a single color on the current skeleton

### void update_blend_shape( shape_name: String, weight: float ) {#method-update-blend-shape}

Update a single blend shape on the current skeleton

### void play_idle() {#method-play-idle}

Play idle animation from the animation map

### void play_animation( animation_name: String ) {#method-play-animation}

Play a specific animation

### void stop_animation() {#method-stop-animation}

Stop current animation

### void set_auto_rotate( enabled: bool ) {#method-set-auto-rotate}

Enable/disable auto rotation

### void set_rotation_angle( angle: float ) {#method-set-rotation-angle}

Set rotation angle directly

### void rotate_preview( delta_angle: float ) {#method-rotate-preview}

Rotate by delta

### CustomSkeleton get_skeleton() {#method-get-skeleton}

Get the current skeleton

### CustomCharacterDefinition get_definition() {#method-get-definition}

Get the current definition

### bool has_skeleton() {#method-has-skeleton}

Check if skeleton is loaded

### void set_animation_type( animation_type: String ) {#method-set-animation-type}

Set the animation type and replay idle animation

### void reset() {#method-reset}

Reset the preview scene

### void apply_template_equipment( template: CharacterDefinition ) {#method-apply-template-equipment}

Apply starter equipment from a CharacterDefinition (template mode)

### void apply_class_equipment( player_class: PlayerClassDefinition ) {#method-apply-class-equipment}

Apply starter equipment from a PlayerClassDefinition (custom character mode)

### void clear_equipment() {#method-clear-equipment}

Clear all equipment from the skeleton

