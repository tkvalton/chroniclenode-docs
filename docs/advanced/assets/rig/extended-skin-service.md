<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ExtendedSkinService

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Service to create remapped skins by taking the original mesh skin and remapping ALL bones

## Methods

| | |
|---|---|
| `Skin` | [get_working_skin](#method-get-working-skin)() *static* |
| `Skin` | [create_remapped_skin_from_skin](#method-create-remapped-skin-from-skin)( `original_skin: Skin, target_skeleton: Skeleton3D` ) *static* |
| `Skin` | [create_remapped_skin](#method-create-remapped-skin)( `mesh_skin_path: String, target_skeleton: Skeleton3D` ) *static* |
| `Skin` | [remap_all_bones_in_skin](#method-remap-all-bones-in-skin)( `original_skin: Skin, target_skeleton: Skeleton3D` ) *static* |
| `String` | [get_mapped_bone_name](#method-get-mapped-bone-name)( `synty_name: String` ) *static* |
| `String` | [get_fallback_bone_name_with_remapping](#method-get-fallback-bone-name-with-remapping)( `bone_name: String` ) *static* |

## Method descriptions

### Skin get_working_skin() {#method-get-working-skin}

*No description yet.*

### Skin create_remapped_skin_from_skin( original_skin: Skin, target_skeleton: Skeleton3D ) {#method-create-remapped-skin-from-skin}

Create remapped skin from an existing Skin object (not a file path)

### Skin create_remapped_skin( mesh_skin_path: String, target_skeleton: Skeleton3D ) {#method-create-remapped-skin}

Create remapped skin by remapping ALL bones in the original skin (like test script)

### Skin remap_all_bones_in_skin( original_skin: Skin, target_skeleton: Skeleton3D ) {#method-remap-all-bones-in-skin}

Remap all bones in a skin (exactly like the test script)

### String get_mapped_bone_name( synty_name: String ) {#method-get-mapped-bone-name}

Bone name mapping

### String get_fallback_bone_name_with_remapping( bone_name: String ) {#method-get-fallback-bone-name-with-remapping}

Fallback bone name mapping with remapping

