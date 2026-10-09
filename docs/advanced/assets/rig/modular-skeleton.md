<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ModularSkeleton

**Inherits:** [GeneralSkeleton](/advanced/assets/rig/general-skeleton) < [Skeleton3D](https://docs.godotengine.org/en/stable/classes/class_skeleton3d.html)

**Inherited by:** [CustomSkeleton](/advanced/assets/rig/custom-skeleton)

Enhanced ModularSkeleton for RPGToolkit integration Full support for body parts, equipment, and skins with unified flow matching GeneralSkeleton Uses GeneralSkeleton enums directly - no custom MeshSlot enum needed

## Properties

| | | |
|---|---|---|
| `String` | [modular_equipment_type_tag](#prop-modular-equipment-type-tag) | `""` |

## Variables

| | | |
|---|---|---|
| `Dictionary` | [base_body_meshes](#var-base-body-meshes) | `{}` |
| `Dictionary` | [base_facial_meshes](#var-base-facial-meshes) | `{}` |
| `Dictionary` | [base_body_skins](#var-base-body-skins) | `{}` |
| `Dictionary` | [base_facial_skins](#var-base-facial-skins) | `{}` |
| `bool` | [base_meshes_initialized](#var-base-meshes-initialized) | `false` |
| `Dictionary` | [original_body_part_skins](#var-original-body-part-skins) | `{}` |

## Methods

| | |
|---|---|
| `String` | [get_skeleton_type](#method-get-skeleton-type)() |
| `String` | [get_modular_equipment_tag](#method-get-modular-equipment-tag)() |
| `void` | [set_modular_equipment_tag](#method-set-modular-equipment-tag)( `tag: String` ) |
| `bool` | [has_modular_equipment_tag](#method-has-modular-equipment-tag)() |
| `MeshInstance3D` | [get_body_mesh_instance](#method-get-body-mesh-instance)( `body_slot: BodySlot` ) |
| `MeshInstance3D` | [get_facial_mesh_instance](#method-get-facial-mesh-instance)( `facial_feature: FacialFeature` ) |
| `bool` | [set_body_part_mesh_with_materials](#method-set-body-part-mesh-with-materials)( `body_slot: BodySlot, mesh: Mesh, material_overrides: Array = [], skin: Skin = null, scale: float = 1.0` ) |
| `bool` | [remove_body_part_mesh](#method-remove-body-part-mesh)( `body_slot: BodySlot` ) |
| `bool` | [restore_body_part_mesh](#method-restore-body-part-mesh)( `body_slot: BodySlot` ) |
| `void` | [store_original_body_part_skin](#method-store-original-body-part-skin)( `body_slot: BodySlot` ) |
| `void` | [restore_original_body_part_skin](#method-restore-original-body-part-skin)( `body_slot: BodySlot` ) |
| `void` | [clear_stored_original_body_part_skins](#method-clear-stored-original-body-part-skins)() |
| `bool` | [has_stored_original_body_part_skin](#method-has-stored-original-body-part-skin)( `body_slot: BodySlot` ) |
| `bool` | [set_facial_feature_mesh_with_materials](#method-set-facial-feature-mesh-with-materials)( `facial_feature: FacialFeature, mesh: Mesh, material_overrides: Array = [], skin: Skin = null, scale: float = 1.0` ) |
| `bool` | [remove_facial_feature_mesh](#method-remove-facial-feature-mesh)( `facial_feature: FacialFeature` ) |
| `bool` | [restore_facial_feature_mesh](#method-restore-facial-feature-mesh)( `facial_feature: FacialFeature` ) |
| `void` | [hide_hair_for_helmet](#method-hide-hair-for-helmet)() |
| `void` | [show_hair_after_helmet](#method-show-hair-after-helmet)() |
| `bool` | [should_hide_hair_for_helmet](#method-should-hide-hair-for-helmet)() |
| `int` | [clear_all_body_part_meshes](#method-clear-all-body-part-meshes)() |
| `int` | [clear_all_facial_feature_meshes](#method-clear-all-facial-feature-meshes)() |
| `int` | [restore_all_body_part_meshes](#method-restore-all-body-part-meshes)() |
| `int` | [restore_all_facial_feature_meshes](#method-restore-all-facial-feature-meshes)() |

## Property descriptions

### String modular_equipment_type_tag = "" {#prop-modular-equipment-type-tag}

The tag used to fetch the correct mesh data from equipment items This should match one of the tags in the equipment database folder structure Example: "humanoid", "beast", "undead"

## Variable descriptions

### Dictionary base_body_meshes =  {#var-base-body-meshes}

*No description yet.*

### Dictionary base_facial_meshes =  {#var-base-facial-meshes}

*No description yet.*

### Dictionary base_body_skins =  {#var-base-body-skins}

*No description yet.*

### Dictionary base_facial_skins =  {#var-base-facial-skins}

*No description yet.*

### bool base_meshes_initialized = false {#var-base-meshes-initialized}

*No description yet.*

### Dictionary original_body_part_skins =  {#var-original-body-part-skins}

Storage for original skins before equipment changes them (body parts)

## Method descriptions

### String get_skeleton_type() {#method-get-skeleton-type}

*Overrides this function of [GeneralSkeleton](/advanced/assets/rig/general-skeleton).*

### String get_modular_equipment_tag() {#method-get-modular-equipment-tag}

Get the tag used for fetching equipment mesh data

### void set_modular_equipment_tag( tag: String ) {#method-set-modular-equipment-tag}

Set the tag used for fetching equipment mesh data

### bool has_modular_equipment_tag() {#method-has-modular-equipment-tag}

Check if this skeleton has a valid equipment tag configured

### MeshInstance3D get_body_mesh_instance( body_slot: BodySlot ) {#method-get-body-mesh-instance}

Public API: Get body mesh instance for a given slot

### MeshInstance3D get_facial_mesh_instance( facial_feature: FacialFeature ) {#method-get-facial-mesh-instance}

Public API: Get facial mesh instance for a given feature

### bool set_body_part_mesh_with_materials( body_slot: BodySlot, mesh: Mesh, material_overrides: Array = [], skin: Skin = null, scale: float = 1.0 ) {#method-set-body-part-mesh-with-materials}

Override: Set body part mesh with full material array and skin support

### bool remove_body_part_mesh( body_slot: BodySlot ) {#method-remove-body-part-mesh}

Override: Remove body part mesh

### bool restore_body_part_mesh( body_slot: BodySlot ) {#method-restore-body-part-mesh}

Override: Restore body part mesh to base version

### void store_original_body_part_skin( body_slot: BodySlot ) {#method-store-original-body-part-skin}

Override: Store the current skin as the original for a body part (call before equipping)

### void restore_original_body_part_skin( body_slot: BodySlot ) {#method-restore-original-body-part-skin}

Override: Restore the original skin for a body part (call when unequipping)

### void clear_stored_original_body_part_skins() {#method-clear-stored-original-body-part-skins}

Clear stored original body part skins (cleanup method)

### bool has_stored_original_body_part_skin( body_slot: BodySlot ) {#method-has-stored-original-body-part-skin}

Check if we have stored original skin for a body part

### bool set_facial_feature_mesh_with_materials( facial_feature: FacialFeature, mesh: Mesh, material_overrides: Array = [], skin: Skin = null, scale: float = 1.0 ) {#method-set-facial-feature-mesh-with-materials}

Enhanced: Set facial feature mesh with full support

### bool remove_facial_feature_mesh( facial_feature: FacialFeature ) {#method-remove-facial-feature-mesh}

Remove facial feature mesh

### bool restore_facial_feature_mesh( facial_feature: FacialFeature ) {#method-restore-facial-feature-mesh}

Restore facial feature mesh

### void hide_hair_for_helmet() {#method-hide-hair-for-helmet}

Hide hair and facial hair when helmet is equipped

### void show_hair_after_helmet() {#method-show-hair-after-helmet}

Show hair and facial hair when helmet is unequipped

### bool should_hide_hair_for_helmet() {#method-should-hide-hair-for-helmet}

Check if hair should be hidden (called from GeneralSkeleton)

### int clear_all_body_part_meshes() {#method-clear-all-body-part-meshes}

*No description yet.*

### int clear_all_facial_feature_meshes() {#method-clear-all-facial-feature-meshes}

*No description yet.*

### int restore_all_body_part_meshes() {#method-restore-all-body-part-meshes}

*No description yet.*

### int restore_all_facial_feature_meshes() {#method-restore-all-facial-feature-meshes}

*No description yet.*

