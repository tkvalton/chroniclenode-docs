<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CustomSkeleton

**Inherits:** [ModularSkeleton](/advanced/assets/rig/modular-skeleton) < [GeneralSkeleton](/advanced/assets/rig/general-skeleton) < [Skeleton3D](https://docs.godotengine.org/en/stable/classes/class_skeleton3d.html)

CustomSkeleton - The "Hardware" skeleton with material references and customization application Contains the actual ShaderMaterials used in the scene and handles applying customization data This is the scene-level component that holds technical data (shaders/materials)

## Properties

| | | |
|---|---|---|
| `ShaderMaterial` | [skin_material](#prop-skin-material) | `null` |
| `ShaderMaterial` | [hair_material](#prop-hair-material) | `null` |
| `ShaderMaterial` | [eye_material](#prop-eye-material) | `null` |
| `String` | [skin_color_param](#prop-skin-color-param) | `"skin_color"` |
| `String` | [hair_color_param](#prop-hair-color-param) | `"hair_color"` |
| `String` | [eye_color_param](#prop-eye-color-param) | `"eye_color"` |
| `bool` | [auto_apply_skin_material](#prop-auto-apply-skin-material) | `true` |
| `bool` | [auto_apply_hair_material](#prop-auto-apply-hair-material) | `true` |
| `bool` | [auto_apply_eye_material](#prop-auto-apply-eye-material) | `true` |

## Methods

| | |
|---|---|
| `void` | [apply_customization](#method-apply-customization)( `data: CustomCharacterDefinition` ) |
| `void` | [set_material_color](#method-set-material-color)( `param_name: String, color: Color` ) |
| `Color` | [get_skin_color](#method-get-skin-color)() |
| `Color` | [get_hair_color](#method-get-hair-color)() |
| `Color` | [get_eye_color](#method-get-eye-color)() |
| `void` | [set_skin_color](#method-set-skin-color)( `color: Color` ) |
| `void` | [set_hair_color](#method-set-hair-color)( `color: Color` ) |
| `void` | [set_eye_color](#method-set-eye-color)( `color: Color` ) |
| `void` | [set_blend_shape_weight](#method-set-blend-shape-weight)( `shape_name: String, weight: float` ) |
| `float` | [get_blend_shape_weight](#method-get-blend-shape-weight)( `shape_name: String` ) |
| `Array[String]` | [get_available_blend_shapes](#method-get-available-blend-shapes)() |
| `void` | [set_blend_shapes_batch](#method-set-blend-shapes-batch)( `blend_shape_dict: Dictionary` ) |
| `void` | [reset_all_blend_shapes](#method-reset-all-blend-shapes)() |
| `Dictionary` | [get_all_blend_shape_weights](#method-get-all-blend-shape-weights)() |
| `CustomCharacterDefinition` | [get_current_customization](#method-get-current-customization)() |
| `CustomCharacterDefinition` | [export_customization](#method-export-customization)() |
| `void` | [clear_customization](#method-clear-customization)() |
| `void` | [refresh_materials](#method-refresh-materials)() |
| `String` | [get_skeleton_type](#method-get-skeleton-type)() |

## Signals

### customization_applied( data: CustomCharacterDefinition ) {#signal-customization-applied}

Emitted when customization is applied

### material_color_updated( material_type: String, param_name: String, color: Color ) {#signal-material-color-updated}

Emitted when a material color is updated

### blend_shape_updated( shape_name: String, weight: float ) {#signal-blend-shape-updated}

Emitted when a blend shape is updated

## Property descriptions

*Character Materials*

### ShaderMaterial skin_material = null {#prop-skin-material}

The skin material used for skin surfaces Should be a ShaderMaterial with color parameters for customization

### ShaderMaterial hair_material = null {#prop-hair-material}

The hair material used for hair surfaces Should be a ShaderMaterial with color parameters for customization

### ShaderMaterial eye_material = null {#prop-eye-material}

The eye material used for eye surfaces Should be a ShaderMaterial with color parameters for customization

*Shader Parameters*

### String skin_color_param = "skin_color" {#prop-skin-color-param}

Parameter name for skin color in skin_material

### String hair_color_param = "hair_color" {#prop-hair-color-param}

Parameter name for hair color in hair_material

### String eye_color_param = "eye_color" {#prop-eye-color-param}

Parameter name for eye color in eye_material

*Auto-Apply Settings*

### bool auto_apply_skin_material = true {#prop-auto-apply-skin-material}

Automatically apply skin_material to surfaces containing "Skin" in their name

### bool auto_apply_hair_material = true {#prop-auto-apply-hair-material}

Automatically apply hair_material to surfaces containing "Hair" in their name

### bool auto_apply_eye_material = true {#prop-auto-apply-eye-material}

Automatically apply eye_material to surfaces containing "Eye" in their name

## Method descriptions

### void apply_customization( data: CustomCharacterDefinition ) {#method-apply-customization}

Apply a CustomCharacterDefinition to this skeleton This is the main entry point for applying all customization data

### void set_material_color( param_name: String, color: Color ) {#method-set-material-color}

Set a color on the appropriate material based on parameter name

### Color get_skin_color() {#method-get-skin-color}

Get current skin color

### Color get_hair_color() {#method-get-hair-color}

Get current hair color

### Color get_eye_color() {#method-get-eye-color}

Get current eye color

### void set_skin_color( color: Color ) {#method-set-skin-color}

Set skin color directly

### void set_hair_color( color: Color ) {#method-set-hair-color}

Set hair color directly

### void set_eye_color( color: Color ) {#method-set-eye-color}

Set eye color directly

### void set_blend_shape_weight( shape_name: String, weight: float ) {#method-set-blend-shape-weight}

Set blend shape weight by partial shape name Matches blend shapes ending with the provided name (e.g., "TORSBlends.defaultBuff") This allows you to pass short names like "TORSBlends.defaultBuff" and match full names like "blend_shapes/TORSBlends.defaultBuff"

### float get_blend_shape_weight( shape_name: String ) {#method-get-blend-shape-weight}

Get blend shape weight by partial name (from first mesh that has it)

### Array[String] get_available_blend_shapes() {#method-get-available-blend-shapes}

Get all available blend shape names across all meshes Returns unique blend shape names (short format without prefix)

### void set_blend_shapes_batch( blend_shape_dict: Dictionary ) {#method-set-blend-shapes-batch}

Set multiple blend shapes at once blend_shape_dict: Dictionary[String, float] - shape names to weights

### void reset_all_blend_shapes() {#method-reset-all-blend-shapes}

Reset all blend shapes to 0.0

### Dictionary get_all_blend_shape_weights() {#method-get-all-blend-shape-weights}

Get all current blend shape values Returns Dictionary[String, float]

### CustomCharacterDefinition get_current_customization() {#method-get-current-customization}

Get current customization as a CustomCharacterDefinition

### CustomCharacterDefinition export_customization() {#method-export-customization}

Create a new CustomCharacterDefinition from current state

### void clear_customization() {#method-clear-customization}

Clear all customization

### void refresh_materials() {#method-refresh-materials}

Force refresh materials on all meshes

### String get_skeleton_type() {#method-get-skeleton-type}

Get skeleton type identifier

