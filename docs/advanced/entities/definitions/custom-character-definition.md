<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CustomCharacterDefinition

**Inherits:** [CharacterDefinition](/advanced/entities/definitions/character-definition) < [EntityDefinition](/advanced/entities/definitions/entity-definition) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

CustomCharacterDefinition - Extended character template with full customization support Stores facial feature configurations, shader color parameters, blend shape weights, and voice selection for creating unique, customizable player characters

## Properties

| | | |
|---|---|---|
| `CharacterCreationProfile` | [creation_profile](#prop-creation-profile) | `null` |
| `int` | [selected_body_type_index](#prop-selected-body-type-index) | `0` |
| `String` | [selected_voice](#prop-selected-voice) | `""` |
| `String` | [selected_animation](#prop-selected-animation) | `""` |
| `String` | [custom_skeleton_tag](#prop-custom-skeleton-tag) | `"humanoid"` |
| `Dictionary` | [facial_mesh_config](#prop-facial-mesh-config) | `{}` |
| `Dictionary` | [color_config](#prop-color-config) | `{}` |
| `Dictionary` | [blend_shape_config](#prop-blend-shape-config) | `{}` |

## Methods

| | |
|---|---|
| `void` | [set_selected_voice](#method-set-selected-voice)( `voice_variant: String` ) |
| `String` | [get_selected_voice](#method-get-selected-voice)() |
| `bool` | [has_selected_voice](#method-has-selected-voice)() |
| `int` | [get_selected_voice_index](#method-get-selected-voice-index)() |
| `String` | [get_voice_path](#method-get-voice-path)() |
| `void` | [set_selected_animation](#method-set-selected-animation)( `animation_type_value: String` ) |
| `String` | [get_selected_animation](#method-get-selected-animation)() |
| `bool` | [has_selected_animation](#method-has-selected-animation)() |
| `int` | [get_selected_animation_index](#method-get-selected-animation-index)() |
| `void` | [set_facial_mesh](#method-set-facial-mesh)( `feature: GeneralSkeleton.FacialFeature, mesh_name: String` ) |
| `String` | [get_facial_mesh](#method-get-facial-mesh)( `feature: GeneralSkeleton.FacialFeature` ) |
| `bool` | [has_facial_mesh](#method-has-facial-mesh)( `feature: GeneralSkeleton.FacialFeature` ) |
| `void` | [remove_facial_mesh](#method-remove-facial-mesh)( `feature: GeneralSkeleton.FacialFeature` ) |
| `Array[int]` | [get_configured_facial_features](#method-get-configured-facial-features)() |
| `void` | [clear_facial_mesh_config](#method-clear-facial-mesh-config)() |
| `void` | [set_color](#method-set-color)( `param_name: String, color: Color` ) |
| `Color` | [get_color](#method-get-color)( `param_name: String` ) |
| `bool` | [has_color](#method-has-color)( `param_name: String` ) |
| `void` | [remove_color](#method-remove-color)( `param_name: String` ) |
| `Array[String]` | [get_configured_color_params](#method-get-configured-color-params)() |
| `void` | [clear_color_config](#method-clear-color-config)() |
| `void` | [set_blend_shape](#method-set-blend-shape)( `shape_key: String, weight: float` ) |
| `float` | [get_blend_shape](#method-get-blend-shape)( `shape_key: String` ) |
| `bool` | [has_blend_shape](#method-has-blend-shape)( `shape_key: String` ) |
| `void` | [remove_blend_shape](#method-remove-blend-shape)( `shape_key: String` ) |
| `Array[String]` | [get_configured_blend_shapes](#method-get-configured-blend-shapes)() |
| `void` | [clear_blend_shape_config](#method-clear-blend-shape-config)() |
| `String` | [get_skeleton_tag](#method-get-skeleton-tag)() |
| `void` | [set_skeleton_tag](#method-set-skeleton-tag)( `tag: String` ) |
| `bool` | [matches_skeleton_tag](#method-matches-skeleton-tag)( `tag: String` ) |
| `CharacterCreationProfile` | [get_creation_profile](#method-get-creation-profile)() |
| `void` | [set_creation_profile](#method-set-creation-profile)( `profile: CharacterCreationProfile` ) |
| `bool` | [has_creation_profile](#method-has-creation-profile)() |
| `int` | [get_selected_body_type_index](#method-get-selected-body-type-index)() |
| `void` | [set_selected_body_type_index](#method-set-selected-body-type-index)( `index: int` ) |
| `PackedScene` | [get_selected_body_type](#method-get-selected-body-type)() |
| `String` | [get_selected_body_type_name](#method-get-selected-body-type-name)() |
| `Node` | [instantiate_body_type](#method-instantiate-body-type)() |
| `bool` | [has_customization](#method-has-customization)() |
| `void` | [clear_all_customization](#method-clear-all-customization)() |
| `Dictionary` | [get_customization_snapshot](#method-get-customization-snapshot)() |
| `void` | [apply_customization_snapshot](#method-apply-customization-snapshot)( `snapshot: Dictionary` ) |
| `void` | [duplicate_customization_to](#method-duplicate-customization-to)( `target: CustomCharacterDefinition` ) |
| `Array[String]` | [validate](#method-validate)() |

## Property descriptions

*Profile Configuration*

### CharacterCreationProfile creation_profile = null {#prop-creation-profile}

Reference to the CharacterCreationProfile this character was created from Used to validate customization options and access body type scenes

### int selected_body_type_index = 0 {#prop-selected-body-type-index}

Index of the selected body type from the profile's body_types array This determines which skeleton scene (e.g., HumanMale vs HumanFemale) is used

*Voice Configuration*

### String selected_voice = "" {#prop-selected-voice}

Selected voice variant name (e.g., "Male_01", "Female_02") Should match an entry in the profile's available_voices array

*Animation Configuration*

### String selected_animation = "" {#prop-selected-animation}

Selected animation type (e.g., "humanoid_default", "humanoid_athletic") Should match an entry in the profile's available_animations array

*Skeleton Configuration*

### String custom_skeleton_tag = "humanoid" {#prop-custom-skeleton-tag}

The skeleton tag this character customization is designed for (e.g., "humanoid") Ensures facial/body mesh data matches the intended skeleton type

*Facial Customization*

### Dictionary facial_mesh_config =  {#prop-facial-mesh-config}

Facial mesh configuration: { FacialFeature (int) : mesh_name (String) } Maps GeneralSkeleton.FacialFeature enum values to selected mesh names Example: { 0: "default_eyes", 9: "aquiline_nose" }

*Color Customization*

### Dictionary color_config =  {#prop-color-config}

Color configuration: { shader_param_name (String) : color (Color) } Maps shader parameter names to their color values Example: { "skin_color": Color(0.9, 0.7, 0.6), "eye_color": Color(0.2, 0.5, 0.8) }

*Blend Shape Customization*

### Dictionary blend_shape_config =  {#prop-blend-shape-config}

Blend shape configuration: { shape_key (String) : weight (float) } Maps blend shape/morph target names to their weight values (typically 0.0 - 1.0) Example: { "brow_height": 0.5, "jaw_width": 0.3, "nose_length": -0.2 }

## Method descriptions

### void set_selected_voice( voice_variant: String ) {#method-set-selected-voice}

Set selected voice variant

### String get_selected_voice() {#method-get-selected-voice}

Get selected voice variant

### bool has_selected_voice() {#method-has-selected-voice}

Check if voice is selected

### int get_selected_voice_index() {#method-get-selected-voice-index}

Get selected voice index from profile

### String get_voice_path() {#method-get-voice-path}

Get full voice path for DatabaseAudio lookup

### void set_selected_animation( animation_type_value: String ) {#method-set-selected-animation}

Set selected animation type

### String get_selected_animation() {#method-get-selected-animation}

Get selected animation type

### bool has_selected_animation() {#method-has-selected-animation}

Check if animation is selected

### int get_selected_animation_index() {#method-get-selected-animation-index}

Get selected animation index from profile

### void set_facial_mesh( feature: GeneralSkeleton.FacialFeature, mesh_name: String ) {#method-set-facial-mesh}

Set facial mesh for a specific feature

### String get_facial_mesh( feature: GeneralSkeleton.FacialFeature ) {#method-get-facial-mesh}

Get facial mesh name for a specific feature

### bool has_facial_mesh( feature: GeneralSkeleton.FacialFeature ) {#method-has-facial-mesh}

Check if facial feature has a mesh assigned

### void remove_facial_mesh( feature: GeneralSkeleton.FacialFeature ) {#method-remove-facial-mesh}

Remove facial mesh for a specific feature

### Array[int] get_configured_facial_features() {#method-get-configured-facial-features}

Get all configured facial features

### void clear_facial_mesh_config() {#method-clear-facial-mesh-config}

Clear all facial mesh configurations

### void set_color( param_name: String, color: Color ) {#method-set-color}

Set color for a shader parameter

### Color get_color( param_name: String ) {#method-get-color}

Get color for a shader parameter

### bool has_color( param_name: String ) {#method-has-color}

Check if color parameter is configured

### void remove_color( param_name: String ) {#method-remove-color}

Remove color configuration for a parameter

### Array[String] get_configured_color_params() {#method-get-configured-color-params}

Get all configured color parameter names

### void clear_color_config() {#method-clear-color-config}

Clear all color configurations

### void set_blend_shape( shape_key: String, weight: float ) {#method-set-blend-shape}

Set blend shape weight

### float get_blend_shape( shape_key: String ) {#method-get-blend-shape}

Get blend shape weight

### bool has_blend_shape( shape_key: String ) {#method-has-blend-shape}

Check if blend shape is configured

### void remove_blend_shape( shape_key: String ) {#method-remove-blend-shape}

Remove blend shape configuration

### Array[String] get_configured_blend_shapes() {#method-get-configured-blend-shapes}

Get all configured blend shape keys

### void clear_blend_shape_config() {#method-clear-blend-shape-config}

Clear all blend shape configurations

### String get_skeleton_tag() {#method-get-skeleton-tag}

Get the skeleton tag this character is designed for

### void set_skeleton_tag( tag: String ) {#method-set-skeleton-tag}

Set the skeleton tag

### bool matches_skeleton_tag( tag: String ) {#method-matches-skeleton-tag}

Check if skeleton tag matches

### CharacterCreationProfile get_creation_profile() {#method-get-creation-profile}

Get the creation profile

### void set_creation_profile( profile: CharacterCreationProfile ) {#method-set-creation-profile}

Set the creation profile

### bool has_creation_profile() {#method-has-creation-profile}

Check if has a creation profile

### int get_selected_body_type_index() {#method-get-selected-body-type-index}

Get selected body type index

### void set_selected_body_type_index( index: int ) {#method-set-selected-body-type-index}

Set selected body type index

### PackedScene get_selected_body_type() {#method-get-selected-body-type}

Get the selected body type scene from the profile

### String get_selected_body_type_name() {#method-get-selected-body-type-name}

Get the selected body type name from the profile

### Node instantiate_body_type() {#method-instantiate-body-type}

Instantiate the selected body type scene

### bool has_customization() {#method-has-customization}

Check if character has any customization

### void clear_all_customization() {#method-clear-all-customization}

Clear all customization data

### Dictionary get_customization_snapshot() {#method-get-customization-snapshot}

Get complete customization snapshot (for save/load)

### void apply_customization_snapshot( snapshot: Dictionary ) {#method-apply-customization-snapshot}

Apply customization from snapshot (for save/load)

### void duplicate_customization_to( target: CustomCharacterDefinition ) {#method-duplicate-customization-to}

Duplicate customization to another CustomCharacterDefinition

### Array[String] validate() {#method-validate}

Validate custom character configuration

