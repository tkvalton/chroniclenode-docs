<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CharacterCreationProfile

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

CharacterCreationProfile - UI Ruleset for character creation Defines available body types (skeleton scenes), editable facial features, voice options, and blend shape options for a character archetype (e.g., "Human", "Elf")

## Properties

| | | |
|---|---|---|
| `String` | [profile_id](#prop-profile-id) | `""` |
| `String` | [display_name](#prop-display-name) | `""` |
| `String` | [description](#prop-description) | `""` |
| `Texture2D` | [icon](#prop-icon) | `null` |
| `Array[PackedScene]` | [body_types](#prop-body-types) | `[]` |
| `Array[String]` | [body_type_names](#prop-body-type-names) | `[]` |
| `Array[String]` | [available_voices](#prop-available-voices) | `[]` |
| `Array[String]` | [voice_display_names](#prop-voice-display-names) | `[]` |
| `String` | [voice_entity_type](#prop-voice-entity-type) | `"humanoid"` |
| `Array[String]` | [available_animations](#prop-available-animations) | `[]` |
| `Array[String]` | [animation_display_names](#prop-animation-display-names) | `[]` |
| `Array[GeneralSkeleton.FacialFeature]` | [active_facial_features](#prop-active-facial-features) | `[ ... ]` |
| `Dictionary` | [blend_shape_map](#prop-blend-shape-map) | `{}` |
| `Array[Color]` | [skin_colors](#prop-skin-colors) | `[ ... ]` |
| `Array[Color]` | [hair_colors](#prop-hair-colors) | `[ ... ]` |
| `Array[Color]` | [eye_colors](#prop-eye-colors) | `[ ... ]` |
| `Array[PlayerClassDefinition]` | [allowed_player_classes](#prop-allowed-player-classes) | `[]` |

## Methods

| | |
|---|---|
| `int` | [get_body_type_count](#method-get-body-type-count)() |
| `PackedScene` | [get_body_type](#method-get-body-type)( `index: int` ) |
| `String` | [get_body_type_name](#method-get-body-type-name)( `index: int` ) |
| `Array[String]` | [get_all_body_type_names](#method-get-all-body-type-names)() |
| `Node` | [instantiate_body_type](#method-instantiate-body-type)( `index: int` ) |
| `bool` | [has_body_types](#method-has-body-types)() |
| `int` | [get_voice_count](#method-get-voice-count)() |
| `String` | [get_voice](#method-get-voice)( `index: int` ) |
| `String` | [get_voice_display_name](#method-get-voice-display-name)( `index: int` ) |
| `Array[String]` | [get_all_voice_display_names](#method-get-all-voice-display-names)() |
| `int` | [get_voice_index](#method-get-voice-index)( `voice_variant: String` ) |
| `bool` | [has_voices](#method-has-voices)() |
| `String` | [get_voice_path](#method-get-voice-path)( `index: int` ) |
| `int` | [get_animation_count](#method-get-animation-count)() |
| `String` | [get_animation](#method-get-animation)( `index: int` ) |
| `String` | [get_animation_display_name](#method-get-animation-display-name)( `index: int` ) |
| `Array[String]` | [get_all_animation_display_names](#method-get-all-animation-display-names)() |
| `int` | [get_animation_index](#method-get-animation-index)( `animation_type: String` ) |
| `bool` | [has_animations](#method-has-animations)() |
| `bool` | [is_feature_active](#method-is-feature-active)( `feature: GeneralSkeleton.FacialFeature` ) |
| `Array[String]` | [get_active_feature_names](#method-get-active-feature-names)() |
| `int` | [get_active_feature_count](#method-get-active-feature-count)() |
| `Array[String]` | [get_blend_shape_labels](#method-get-blend-shape-labels)() |
| `String` | [get_blend_shape_name](#method-get-blend-shape-name)( `ui_label: String` ) |
| `bool` | [has_blend_shapes](#method-has-blend-shapes)() |
| `int` | [get_blend_shape_count](#method-get-blend-shape-count)() |
| `Array[Color]` | [get_palette](#method-get-palette)( `type: String` ) |
| `Color` | [get_color_from_palette](#method-get-color-from-palette)( `type: String, index: int` ) |
| `int` | [get_palette_size](#method-get-palette-size)( `type: String` ) |
| `Array[PlayerClassDefinition]` | [get_allowed_classes](#method-get-allowed-classes)() |
| `bool` | [is_class_allowed](#method-is-class-allowed)( `class_id: int` ) |
| `int` | [get_allowed_class_count](#method-get-allowed-class-count)() |
| `Array[String]` | [validate](#method-validate)() |
| `bool` | [is_valid](#method-is-valid)() |

## Constants

- `Dictionary` **SETTING_DESCRIPTIONS** = `{`

## Property descriptions

*Profile Identity*

### String profile_id = "" {#prop-profile-id}

Unique identifier for this profile (e.g., "human", "elf", "dwarf")

### String display_name = "" {#prop-display-name}

Display name shown in the character creator UI

### String description = "" {#prop-description}

Optional description for this profile/race

### Texture2D icon = null {#prop-icon}

Icon for this profile in selection UI

*Body Types*

### Array[PackedScene] body_types = [] {#prop-body-types}

Available body type scenes for this profile (e.g., HumanMale.tscn, HumanFemale.tscn) Each scene should contain a CustomSkeleton as the root or primary skeleton node

### Array[String] body_type_names = [] {#prop-body-type-names}

Display names for each body type (should match body_types array length) If empty, names will be auto-generated from scene filenames

*Voice Selection*

### Array[String] available_voices = [] {#prop-available-voices}

Available voice variants for this profile These should correspond to voice_variant names in DatabaseAudio Example: ["Male_01", "Male_02", "Female_01", "Female_02"]

### Array[String] voice_display_names = [] {#prop-voice-display-names}

Display names for each voice (should match available_voices array length) If empty, the voice variant names will be displayed directly

### String voice_entity_type = "humanoid" {#prop-voice-entity-type}

Entity type for voice lookup in DatabaseAudio (e.g., "humanoid", "beast")

*Animation Selection*

### Array[String] available_animations = [] {#prop-available-animations}

Available animation types for this profile These should correspond to animation_type identifiers in DatabaseAnimation Example: ["humanoid_default", "humanoid_athletic", "humanoid_heavy"]

### Array[String] animation_display_names = [] {#prop-animation-display-names}

Display names for each animation type (should match available_animations array length) If empty, the animation type names will be displayed directly

*Facial Features*

### Array[GeneralSkeleton.FacialFeature] active_facial_features {#prop-active-facial-features}

Which facial features are available for player editing Only features in this array will appear in the character creator UI

*Blend Shapes*

### Dictionary blend_shape_map =  {#prop-blend-shape-map}

Maps UI-friendly labels to internal blend shape names Format: &#123; "UI Label": "internal_blend_shape_name" &#125; Example: &#123; "Nose Width": "nose_width_blend", "Jaw Size": "jaw_scale" &#125;

*Color Palettes*

### Array[Color] skin_colors {#prop-skin-colors}

Available skin colors for character customization

### Array[Color] hair_colors {#prop-hair-colors}

Available hair colors for character customization

### Array[Color] eye_colors {#prop-eye-colors}

Available eye colors for character customization

*Class Selection*

### Array[PlayerClassDefinition] allowed_player_classes = [] {#prop-allowed-player-classes}

Player classes available for selection in character creation If empty, all classes are available

## Method descriptions

### int get_body_type_count() {#method-get-body-type-count}

Get body type count

### PackedScene get_body_type( index: int ) {#method-get-body-type}

Get body type scene by index

### String get_body_type_name( index: int ) {#method-get-body-type-name}

Get display name for a body type

### Array[String] get_all_body_type_names() {#method-get-all-body-type-names}

Get all body type names

### Node instantiate_body_type( index: int ) {#method-instantiate-body-type}

Instantiate a body type scene

### bool has_body_types() {#method-has-body-types}

Check if profile has any body types

### int get_voice_count() {#method-get-voice-count}

Get voice count

### String get_voice( index: int ) {#method-get-voice}

Get voice variant by index

### String get_voice_display_name( index: int ) {#method-get-voice-display-name}

Get display name for a voice

### Array[String] get_all_voice_display_names() {#method-get-all-voice-display-names}

Get all voice display names

### int get_voice_index( voice_variant: String ) {#method-get-voice-index}

Get voice index by variant name

### bool has_voices() {#method-has-voices}

Check if profile has any voices configured

### String get_voice_path( index: int ) {#method-get-voice-path}

Get full voice path for DatabaseAudio lookup

### int get_animation_count() {#method-get-animation-count}

Get animation type count

### String get_animation( index: int ) {#method-get-animation}

Get animation type by index

### String get_animation_display_name( index: int ) {#method-get-animation-display-name}

Get display name for an animation type

### Array[String] get_all_animation_display_names() {#method-get-all-animation-display-names}

Get all animation display names

### int get_animation_index( animation_type: String ) {#method-get-animation-index}

Get animation index by type name

### bool has_animations() {#method-has-animations}

Check if profile has any animations configured

### bool is_feature_active( feature: GeneralSkeleton.FacialFeature ) {#method-is-feature-active}

Check if a facial feature is active for this profile

### Array[String] get_active_feature_names() {#method-get-active-feature-names}

Get all active facial feature names as strings

### int get_active_feature_count() {#method-get-active-feature-count}

Get active feature count

### Array[String] get_blend_shape_labels() {#method-get-blend-shape-labels}

Get blend shape UI labels

### String get_blend_shape_name( ui_label: String ) {#method-get-blend-shape-name}

Get internal blend shape name from UI label

### bool has_blend_shapes() {#method-has-blend-shapes}

Check if profile has any blend shapes configured

### int get_blend_shape_count() {#method-get-blend-shape-count}

Get blend shape count

### Array[Color] get_palette( type: String ) {#method-get-palette}

Get color palette by type

### Color get_color_from_palette( type: String, index: int ) {#method-get-color-from-palette}

Get a specific color from a palette

### int get_palette_size( type: String ) {#method-get-palette-size}

Get palette size

### Array[PlayerClassDefinition] get_allowed_classes() {#method-get-allowed-classes}

Get allowed classes (or all if none specified)

### bool is_class_allowed( class_id: int ) {#method-is-class-allowed}

Check if a class is allowed

### int get_allowed_class_count() {#method-get-allowed-class-count}

Get allowed class count

### Array[String] validate() {#method-validate}

Validate the profile configuration

### bool is_valid() {#method-is-valid}

Check if profile is valid

