<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GeneralSkeleton

**Inherits:** [Skeleton3D](https://docs.godotengine.org/en/stable/classes/class_skeleton3d.html)

**Inherited by:** [ModularSkeleton](/advanced/assets/rig/modular-skeleton)

GeneralSkeleton provides standardized attachment points for equipment, VFX, and weapons.

## Properties

| | | |
|---|---|---|
| `bool` | [has_mount_seat](#prop-has-mount-seat) | `false` |
| `bool` | [can_ride_mount](#prop-can-ride-mount) | `false` |

## Variables

| | | |
|---|---|---|
| `bool` | [outline_eligible](#var-outline-eligible) | `true` |
| `bool` | [is_transparent](#var-is-transparent) | `false` |
| `Array[MeshInstance3D]` | [mesh_instances](#var-mesh-instances) | `[]` |
| `Dictionary` | [original_attachment_skins](#var-original-attachment-skins) | `{}` |

## Methods

| | |
|---|---|
| `String` | [get_skeleton_type](#method-get-skeleton-type)() |
| `Node3D` | [get_attachment_point](#method-get-attachment-point)( `slot: AttachmentSlot` ) |
| `MeshInstance3D` | [get_equipment_mesh](#method-get-equipment-mesh)( `slot: AttachmentSlot` ) |
| `bool` | [set_equipment_mesh_with_materials](#method-set-equipment-mesh-with-materials)( `slot: AttachmentSlot, mesh: Mesh, material_overrides: Array[Material] = [], skin: Skin = null, mesh_scale: float = 1.0` ) |
| `bool` | [remove_equipment_mesh](#method-remove-equipment-mesh)( `slot: AttachmentSlot` ) |
| `bool` | [should_hide_hair_for_helmet](#method-should-hide-hair-for-helmet)() |
| `void` | [hide_hair_for_helmet](#method-hide-hair-for-helmet)() |
| `void` | [show_hair_after_helmet](#method-show-hair-after-helmet)() |
| `bool` | [has_equipment_mesh](#method-has-equipment-mesh)( `slot: AttachmentSlot` ) |
| `void` | [store_original_attachment_skin](#method-store-original-attachment-skin)( `attachment_slot: AttachmentSlot` ) |
| `void` | [restore_original_attachment_skin](#method-restore-original-attachment-skin)( `attachment_slot: AttachmentSlot` ) |
| `void` | [clear_stored_original_attachment_skins](#method-clear-stored-original-attachment-skins)() |
| `bool` | [has_stored_original_attachment_skin](#method-has-stored-original-attachment-skin)( `attachment_slot: AttachmentSlot` ) |
| `MeshInstance3D` | [get_weapon_mesh](#method-get-weapon-mesh)( `weapon_slot: WeaponSlot` ) |
| `bool` | [set_weapon_mesh_with_materials](#method-set-weapon-mesh-with-materials)( `weapon_slot: WeaponSlot, mesh: Mesh, material_overrides: Array[Material] = [], scale: float = 1.0` ) |
| `bool` | [remove_weapon_mesh](#method-remove-weapon-mesh)( `weapon_slot: WeaponSlot` ) |
| `Vector3` | [get_weapon_enchant_vfx_position](#method-get-weapon-enchant-vfx-position)( `weapon_slot: WeaponSlot` ) |
| `Vector3` | [get_weapon_enchant_vfx_global_position](#method-get-weapon-enchant-vfx-global-position)( `weapon_slot: WeaponSlot` ) |
| `Vector3` | [get_weapon_projectile_spawn_point](#method-get-weapon-projectile-spawn-point)( `weapon_slot: WeaponSlot` ) |
| `Vector3` | [get_weapon_projectile_spawn_global_position](#method-get-weapon-projectile-spawn-global-position)( `weapon_slot: WeaponSlot` ) |
| `bool` | [set_body_part_mesh_with_materials](#method-set-body-part-mesh-with-materials)( `body_slot: BodySlot, mesh: Mesh, material_overrides: Array[Material] = [], skin: Skin = null, scale: float = 1.0` ) |
| `bool` | [set_body_part_mesh](#method-set-body-part-mesh)( `body_slot: BodySlot, mesh: Mesh, material: Material = null, scale: float = 1.0, skin: Skin = null` ) |
| `bool` | [remove_body_part_mesh](#method-remove-body-part-mesh)( `body_slot: BodySlot` ) |
| `bool` | [restore_body_part_mesh](#method-restore-body-part-mesh)( `body_slot: BodySlot` ) |
| `void` | [store_original_body_part_skin](#method-store-original-body-part-skin)( `body_slot: BodySlot` ) |
| `void` | [restore_original_body_part_skin](#method-restore-original-body-part-skin)( `body_slot: BodySlot` ) |
| `bool` | [apply_material_to_body](#method-apply-material-to-body)( `selection: VFXSelectionMaterial, entity: Entity, timer: Timer = null` ) |
| `bool` | [apply_material_to_weapons](#method-apply-material-to-weapons)( `selection: VFXSelectionMaterial, entity: Entity, timer: Timer = null` ) |
| `bool` | [apply_material_to_main_hand](#method-apply-material-to-main-hand)( `selection: VFXSelectionMaterial, entity: Entity, timer: Timer = null` ) |
| `bool` | [apply_material_to_off_hand](#method-apply-material-to-off-hand)( `selection: VFXSelectionMaterial, entity: Entity, timer: Timer = null` ) |
| `Array[MeshInstance3D]` | [get_body_meshes](#method-get-body-meshes)() |
| `Array[MeshInstance3D]` | [get_weapon_meshes](#method-get-weapon-meshes)() |
| `bool` | [cleanup_material_from_body](#method-cleanup-material-from-body)( `selection: VFXSelectionMaterial` ) |
| `bool` | [cleanup_material_from_weapons](#method-cleanup-material-from-weapons)( `selection: VFXSelectionMaterial` ) |
| `bool` | [cleanup_material_from_main_hand](#method-cleanup-material-from-main-hand)( `selection: VFXSelectionMaterial` ) |
| `bool` | [cleanup_material_from_off_hand](#method-cleanup-material-from-off-hand)( `selection: VFXSelectionMaterial` ) |
| `void` | [apply_selection_outline](#method-apply-selection-outline)( `selection_color: Color, power: float = 3.0, intensity: float = 0.5, threshold: float = 0.0` ) |
| `void` | [remove_selection_outline](#method-remove-selection-outline)() |
| `void` | [set_visual_layer](#method-set-visual-layer)( `layer: int` ) |
| `String` | [body_slot_to_database_category](#method-body-slot-to-database-category)( `slot: BodySlot` ) *static* |
| `String` | [facial_feature_to_database_category](#method-facial-feature-to-database-category)( `feature: FacialFeature` ) *static* |
| `String` | [attachment_slot_to_database_category](#method-attachment-slot-to-database-category)( `slot: AttachmentSlot` ) *static* |

## Signals

### body_part_mesh_changed( body_slot: int, mesh: Mesh, materials: Array, skin: Skin, scale: float ) {#signal-body-part-mesh-changed}

Emitted when a body part mesh is changed (for ModularSkeleton override)

### attachment_mesh_changed( attachment_slot: int, mesh: Mesh, materials: Array, skin: Skin, scale: float ) {#signal-attachment-mesh-changed}

Emitted when an attachment mesh is changed

### weapon_mesh_changed( weapon_slot: int, mesh: Mesh, materials: Array, scale: float ) {#signal-weapon-mesh-changed}

Emitted when a weapon mesh is changed

### mesh_removed( slot_type: String, slot: int ) {#signal-mesh-removed}

Emitted when any mesh is removed

## Enumerations

### enum BodySlot {#enum-bodyslot}

- **BODY_HEAD** = `0`
- **BODY_TORSO** = `1`
- **BODY_UPPER_ARM_LEFT** = `2`
- **BODY_UPPER_ARM_RIGHT** = `3`
- **BODY_LOWER_ARM_LEFT** = `4`
- **BODY_LOWER_ARM_RIGHT** = `5`
- **BODY_HAND_LEFT** = `6`
- **BODY_HAND_RIGHT** = `7`
- **BODY_HIPS** = `8`
- **BODY_UPPER_LEG_LEFT** = `9`
- **BODY_UPPER_LEG_RIGHT** = `10`
- **BODY_LOWER_LEG_LEFT** = `11`
- **BODY_LOWER_LEG_RIGHT** = `12`
- **BODY_FOOT_LEFT** = `13`
- **BODY_FOOT_RIGHT** = `14`

### enum FacialFeature {#enum-facialfeature}

- **FACE_EYES** = `0`
- **FACE_EYEBROWS** = `1`
- **FACE_EARS** = `2`
- **FACE_EYE_LEFT** = `3`
- **FACE_EYE_RIGHT** = `4`
- **FACE_EYEBROW_LEFT** = `5`
- **FACE_EYEBROW_RIGHT** = `6`
- **FACE_EAR_LEFT** = `7`
- **FACE_EAR_RIGHT** = `8`
- **FACE_NOSE** = `9`
- **FACE_TEETH** = `10`
- **FACE_TONGUE** = `11`
- **FACE_HAIR** = `12`
- **FACE_FACIAL_HAIR** = `13`

### enum AttachmentSlot {#enum-attachmentslot}

- **HEAD** = `0`
- **FACE** = `1`
- **CHEST** = `2`
- **BACK** = `3`
- **HIPS_LEFT** = `4`
- **HIPS_RIGHT** = `5`
- **HIPS_FRONT** = `6`
- **HIPS_BACK** = `7`
- **LEFT_HAND** = `8`
- **RIGHT_HAND** = `9`
- **LEFT_SHOULDER** = `10`
- **RIGHT_SHOULDER** = `11`
- **LEFT_KNEE** = `12`
- **RIGHT_KNEE** = `13`
- **LEFT_ELBOW** = `14`
- **RIGHT_ELBOW** = `15`
- **HELMET** = `16`
- **CLOAK** = `17`

### enum WeaponSlot {#enum-weaponslot}

- **MAIN_HAND** = `0` - Right hand weapon
- **OFF_HAND** = `1` - Left hand weapon

## Property descriptions

### bool has_mount_seat = false {#prop-has-mount-seat}

*No description yet.*

### bool can_ride_mount = false {#prop-can-ride-mount}

*No description yet.*

## Variable descriptions

### bool outline_eligible = true {#var-outline-eligible}

*No description yet.*

### bool is_transparent = false {#var-is-transparent}

*No description yet.*

### Array[MeshInstance3D] mesh_instances = [] {#var-mesh-instances}

*No description yet.*

### Dictionary original_attachment_skins =  {#var-original-attachment-skins}

Storage for original skins before equipment changes them (attachments)

## Method descriptions

### String get_skeleton_type() {#method-get-skeleton-type}

*No description yet.*

### Node3D get_attachment_point( slot: AttachmentSlot ) {#method-get-attachment-point}

*No description yet.*

### MeshInstance3D get_equipment_mesh( slot: AttachmentSlot ) {#method-get-equipment-mesh}

Find or create equipment mesh for a slot

### bool set_equipment_mesh_with_materials( slot: AttachmentSlot, mesh: Mesh, material_overrides: Array[Material] = [], skin: Skin = null, mesh_scale: float = 1.0 ) {#method-set-equipment-mesh-with-materials}

Set equipment mesh with full support (material arrays + skin + scale)

### bool remove_equipment_mesh( slot: AttachmentSlot ) {#method-remove-equipment-mesh}

Remove equipment mesh

### bool should_hide_hair_for_helmet() {#method-should-hide-hair-for-helmet}

Virtual method for GeneralSkeleton - no hair hiding support

### void hide_hair_for_helmet() {#method-hide-hair-for-helmet}

Hide hair and facial hair when helmet is equipped

### void show_hair_after_helmet() {#method-show-hair-after-helmet}

Show hair and facial hair when helmet is unequipped

### bool has_equipment_mesh( slot: AttachmentSlot ) {#method-has-equipment-mesh}

Check if equipment is attached

### void store_original_attachment_skin( attachment_slot: AttachmentSlot ) {#method-store-original-attachment-skin}

Store the current skin as the original for an attachment (call before equipping)

### void restore_original_attachment_skin( attachment_slot: AttachmentSlot ) {#method-restore-original-attachment-skin}

Restore the original skin for an attachment (call when unequipping)

### void clear_stored_original_attachment_skins() {#method-clear-stored-original-attachment-skins}

Clear stored original attachment skins (cleanup method)

### bool has_stored_original_attachment_skin( attachment_slot: AttachmentSlot ) {#method-has-stored-original-attachment-skin}

Check if we have stored original skin for an attachment

### MeshInstance3D get_weapon_mesh( weapon_slot: WeaponSlot ) {#method-get-weapon-mesh}

*No description yet.*

### bool set_weapon_mesh_with_materials( weapon_slot: WeaponSlot, mesh: Mesh, material_overrides: Array[Material] = [], scale: float = 1.0 ) {#method-set-weapon-mesh-with-materials}

Enhanced: Set weapon mesh with material array support (no skin - weapons don't use skins)

### bool remove_weapon_mesh( weapon_slot: WeaponSlot ) {#method-remove-weapon-mesh}

Remove weapon mesh

### Vector3 get_weapon_enchant_vfx_position( weapon_slot: WeaponSlot ) {#method-get-weapon-enchant-vfx-position}

Get the enchant VFX position for a weapon slot (in local space relative to weapon mesh)

### Vector3 get_weapon_enchant_vfx_global_position( weapon_slot: WeaponSlot ) {#method-get-weapon-enchant-vfx-global-position}

Get the enchant VFX global position for a weapon slot

### Vector3 get_weapon_projectile_spawn_point( weapon_slot: WeaponSlot ) {#method-get-weapon-projectile-spawn-point}

Get the projectile spawn point for a weapon slot (in local space relative to weapon mesh)

### Vector3 get_weapon_projectile_spawn_global_position( weapon_slot: WeaponSlot ) {#method-get-weapon-projectile-spawn-global-position}

Get the projectile spawn global position for a weapon slot

### bool set_body_part_mesh_with_materials( body_slot: BodySlot, mesh: Mesh, material_overrides: Array[Material] = [], skin: Skin = null, scale: float = 1.0 ) {#method-set-body-part-mesh-with-materials}

Virtual method: Set body part mesh with materials (GeneralSkeleton doesn't support body parts)

### bool set_body_part_mesh( body_slot: BodySlot, mesh: Mesh, material: Material = null, scale: float = 1.0, skin: Skin = null ) {#method-set-body-part-mesh}

Virtual method: Set body part mesh (GeneralSkeleton doesn't support body parts)

### bool remove_body_part_mesh( body_slot: BodySlot ) {#method-remove-body-part-mesh}

Virtual method: Remove body part mesh

### bool restore_body_part_mesh( body_slot: BodySlot ) {#method-restore-body-part-mesh}

Virtual method: Restore body part mesh to base version

### void store_original_body_part_skin( body_slot: BodySlot ) {#method-store-original-body-part-skin}

Virtual method: Store original body part skin (GeneralSkeleton doesn't support body parts)

### void restore_original_body_part_skin( body_slot: BodySlot ) {#method-restore-original-body-part-skin}

Virtual method: Restore original body part skin (GeneralSkeleton doesn't support body parts)

### bool apply_material_to_body( selection: VFXSelectionMaterial, entity: Entity, timer: Timer = null ) {#method-apply-material-to-body}

Apply material to all body/equipment meshes (excludes weapons)

### bool apply_material_to_weapons( selection: VFXSelectionMaterial, entity: Entity, timer: Timer = null ) {#method-apply-material-to-weapons}

Apply material to all weapon meshes

### bool apply_material_to_main_hand( selection: VFXSelectionMaterial, entity: Entity, timer: Timer = null ) {#method-apply-material-to-main-hand}

Apply material to main hand weapon only

### bool apply_material_to_off_hand( selection: VFXSelectionMaterial, entity: Entity, timer: Timer = null ) {#method-apply-material-to-off-hand}

Apply material to off hand weapon only

### Array[MeshInstance3D] get_body_meshes() {#method-get-body-meshes}

Get body meshes (equipment meshes, excludes weapons)

### Array[MeshInstance3D] get_weapon_meshes() {#method-get-weapon-meshes}

Get weapon meshes only

### bool cleanup_material_from_body( selection: VFXSelectionMaterial ) {#method-cleanup-material-from-body}

Cleanup material from body meshes

### bool cleanup_material_from_weapons( selection: VFXSelectionMaterial ) {#method-cleanup-material-from-weapons}

Cleanup material from weapons

### bool cleanup_material_from_main_hand( selection: VFXSelectionMaterial ) {#method-cleanup-material-from-main-hand}

Cleanup material from main hand

### bool cleanup_material_from_off_hand( selection: VFXSelectionMaterial ) {#method-cleanup-material-from-off-hand}

Cleanup material from off hand

### void apply_selection_outline( selection_color: Color, power: float = 3.0, intensity: float = 0.5, threshold: float = 0.0 ) {#method-apply-selection-outline}

*No description yet.*

### void remove_selection_outline() {#method-remove-selection-outline}

*No description yet.*

### void set_visual_layer( layer: int ) {#method-set-visual-layer}

Set the visual layer for all meshes in this skeleton Used for camera cull mask isolation (e.g., character previews)

### String body_slot_to_database_category( slot: BodySlot ) {#method-body-slot-to-database-category}

*No description yet.*

### String facial_feature_to_database_category( feature: FacialFeature ) {#method-facial-feature-to-database-category}

*No description yet.*

### String attachment_slot_to_database_category( slot: AttachmentSlot ) {#method-attachment-slot-to-database-category}

*No description yet.*

