<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RigComponent

**Inherits:** [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

**Inherited by:** [EntityRigComponent](/advanced/assets/rig/entity-rig-component), [InteractableRigComponent](/advanced/assets/rig/interactable-rig-component)

Base runtime rig class shared by EntityRigComponent and InteractableRigComponent. Owns all VFX remote transforms, decal indicators, highlight, and transparency logic. Subclasses provide the mesh source and slot-specific remote setup.

## Variables

| | | |
|---|---|---|
| `bool` | [outline_eligible](#var-outline-eligible) | `true` |
| `bool` | [is_transparent](#var-is-transparent) | `false` |
| `Node3D` | [rig_owner](#var-rig-owner) | `null` |
| `AnimationPlayer` | [animation_player](#var-animation-player) | `null` |
| `Decal` | [hitbox_outline](#var-hitbox-outline) |  |
| `Decal` | [target_marker](#var-target-marker) |  |
| `Decal` | [selection_marker](#var-selection-marker) |  |
| `Array[Array]` | [remote_transforms](#var-remote-transforms) | `[[], [], [], [], [], [], [], []]` |
| `Array[RemoteTransform3D]` | [active_remotes](#var-active-remotes) | `[]` |

## Methods

| | |
|---|---|
| `void` | [initialize_rig](#method-initialize-rig)( `owner_node: Node3D` ) |
| `Node3D` | [get_attachment_point_node](#method-get-attachment-point-node)( `location: VFXSelection.VfxLocation` ) |
| `bool` | [apply_vfx_material_effect](#method-apply-vfx-material-effect)( `selection: VFXSelectionMaterial, timer: Timer = null` ) |
| `bool` | [cleanup_vfx_material_effect](#method-cleanup-vfx-material-effect)( `selection: VFXSelectionMaterial` ) |
| `void` | [create_remotes_for_slot_index](#method-create-remotes-for-slot-index)( `slot_index: RemoteSlotIndex, parent: Node3D, count: int` ) |
| `void` | [create_remotes_for_slot_index_with_offset](#method-create-remotes-for-slot-index-with-offset)( `slot_index: RemoteSlotIndex, parent: Node3D, count: int, offset: Vector3` ) |
| `RemoteTransform3D` | [find_available_remote](#method-find-available-remote)( `slot_index: RemoteSlotIndex` ) |
| `RemoteTransform3D` | [assign_remote_transform](#method-assign-remote-transform)( `effect_vfx: VFX, location: VFXSelection.VfxLocation` ) |
| `Array[RemoteTransform3D]` | [assign_remote_transforms_for_hands](#method-assign-remote-transforms-for-hands)( `right_hand_vfx: VFX, left_hand_vfx: VFX` ) |
| `void` | [release_remote](#method-release-remote)( `remote: RemoteTransform3D` ) |
| `void` | [animate_transparency](#method-animate-transparency)( `target_alpha: float, duration: float = 3.5` ) |
| `void` | [show_rig](#method-show-rig)( `duration: float = 3.5` ) |
| `void` | [hide_rig](#method-hide-rig)( `duration: float = 3.5` ) |
| `void` | [apply_fog_of_war_state](#method-apply-fog-of-war-state)( `in_fog: bool` ) |
| `void` | [set_hitbox_color](#method-set-hitbox-color)( `color: Color` ) |
| `void` | [set_combat_outline](#method-set-combat-outline)( `in_combat: bool, combat_color: Color = Color.RED` ) |
| `void` | [set_selection_state](#method-set-selection-state)( `is_current: bool, is_selected: bool, current_color: Color = Color.CYAN, selected_color: Color = Color.GREEN` ) |
| `void` | [set_mesh_overlay](#method-set-mesh-overlay)( `highlight_type: HighlightType` ) |
| `void` | [set_target_highlight_with_color](#method-set-target-highlight-with-color)( `target_color: Color` ) |
| `void` | [clear_target_marker](#method-clear-target-marker)() |
| `void` | [apply_selection_outline](#method-apply-selection-outline)( `selection_color: Color, power: float = 3.0, intensity: float = 0.5, threshold: float = 0.0` ) |
| `void` | [set_visual_layer](#method-set-visual-layer)( `layer: int` ) |

## Enumerations

### enum RemoteSlotIndex {#enum-remoteslotindex}

The places on the model where a visual effect can attach (base, hands, head, chest, weapon, feet, overhead).

- **BASE** = `0`
- **LEFT_HAND** = `1`
- **RIGHT_HAND** = `2`
- **HEAD** = `3`
- **CHEST** = `4`
- **WEAPON** = `5`
- **FEET** = `6`
- **OVERHEAD** = `7`

### enum HighlightType {#enum-highlighttype}

The highlights of the mesh: default, hover, none or target selected.

- **DEFAULT** = `0`
- **HOVER** = `1`
- **NONE** = `2`
- **TARGET_SELECTED** = `3`

## Constants

- `const` **DEFAULT_REMOTE_POOL_SIZE** = `10` - How many remote transforms are made for each slot.

## Variable descriptions

### bool outline_eligible = true {#var-outline-eligible}

True when the rig may get an outline (a target highlight).

### bool is_transparent = false {#var-is-transparent}

True while the rig is faded out (in fog, or hidden).

### Node3D rig_owner = null {#var-rig-owner}

Stored owner reference — Entity or InteractableObject

### AnimationPlayer animation_player = null {#var-animation-player}

Animation player reference (populated by subclass during initialize_rig)

### Decal hitbox_outline {#var-hitbox-outline}

The decal under the entity that shows its hitbox.

### Decal target_marker {#var-target-marker}

The decal that marks the entity as the target.

### Decal selection_marker {#var-selection-marker}

The decal that marks the entity as selected.

### Array[Array] remote_transforms = [[], [], [], [], [], [], [], []] {#var-remote-transforms}

The remote transforms of each slot, ready for a visual effect to use.

### Array[RemoteTransform3D] active_remotes = [] {#var-active-remotes}

The remote transforms a visual effect uses now.

## Method descriptions

### void initialize_rig( owner_node: Node3D ) {#method-initialize-rig}

Single entry point. Stores the owner, creates decals, defers remote setup. Subclasses call super then add their own model instantiation.

### Node3D get_attachment_point_node( location: VFXSelection.VfxLocation ) {#method-get-attachment-point-node}

Return the Node3D that physically represents a VfxLocation attachment point.

### bool apply_vfx_material_effect( selection: VFXSelectionMaterial, timer: Timer = null ) {#method-apply-vfx-material-effect}

Apply a material effect to the rig's meshes. Returns success.

### bool cleanup_vfx_material_effect( selection: VFXSelectionMaterial ) {#method-cleanup-vfx-material-effect}

Clean up a previously applied material effect. Returns success.

### void create_remotes_for_slot_index( slot_index: RemoteSlotIndex, parent: Node3D, count: int ) {#method-create-remotes-for-slot-index}

Makes remote transforms for a slot on a parent node.

### void create_remotes_for_slot_index_with_offset( slot_index: RemoteSlotIndex, parent: Node3D, count: int, offset: Vector3 ) {#method-create-remotes-for-slot-index-with-offset}

Makes remote transforms for a slot on a parent node, moved by an offset.

### RemoteTransform3D find_available_remote( slot_index: RemoteSlotIndex ) {#method-find-available-remote}

A remote transform of the slot that no effect uses, or null.

### RemoteTransform3D assign_remote_transform( effect_vfx: VFX, location: VFXSelection.VfxLocation ) {#method-assign-remote-transform}

Gives a visual effect a remote transform at a place on the model. Hands are made through assign_remote_transforms_for_hands.

### Array[RemoteTransform3D] assign_remote_transforms_for_hands( right_hand_vfx: VFX, left_hand_vfx: VFX ) {#method-assign-remote-transforms-for-hands}

Gives the effects of the right and the left hand a remote transform each.

### void release_remote( remote: RemoteTransform3D ) {#method-release-remote}

Gives a remote transform back when its effect ends.

### void animate_transparency( target_alpha: float, duration: float = 3.5 ) {#method-animate-transparency}

Fades the rig to a transparency (0 = visible, 1 = invisible) over some seconds.

### void show_rig( duration: float = 3.5 ) {#method-show-rig}

Fades the rig in.

### void hide_rig( duration: float = 3.5 ) {#method-hide-rig}

Fades the rig out.

### void apply_fog_of_war_state( in_fog: bool ) {#method-apply-fog-of-war-state}

Hides the rig when it is in fog, shows it when it is not.

### void set_hitbox_color( color: Color ) {#method-set-hitbox-color}

Sets the color of the hitbox and selection decals.

### void set_combat_outline( in_combat: bool, combat_color: Color = Color.RED ) {#method-set-combat-outline}

Shows the outline of the entity in the combat color while it fights.

### void set_selection_state( is_current: bool, is_selected: bool, current_color: Color = Color.CYAN, selected_color: Color = Color.GREEN ) {#method-set-selection-state}

Shows whether the entity is the current or a selected party member, in the colors given.

### void set_mesh_overlay( highlight_type: HighlightType ) {#method-set-mesh-overlay}

Sets the highlight of the mesh (default, hover, none or target selected).

### void set_target_highlight_with_color( target_color: Color ) {#method-set-target-highlight-with-color}

Highlights the entity as the target, in a color.

### void clear_target_marker() {#method-clear-target-marker}

Hides the target marker.

### void apply_selection_outline( selection_color: Color, power: float = 3.0, intensity: float = 0.5, threshold: float = 0.0 ) {#method-apply-selection-outline}

Draws an outline on the mesh: color, power, intensity and threshold.

### void set_visual_layer( layer: int ) {#method-set-visual-layer}

Puts the meshes of the rig on a visual layer (1 to 20).

