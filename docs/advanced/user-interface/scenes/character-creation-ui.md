<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CharacterCreationUI

**Inherits:** [CurrentUI](/advanced/user-interface/scenes/current-ui) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

CharacterCreationUI - Prefab-Driven Character Creation Controller Populates UI containers using provided PackedScenes and manages character customization state Supports both pre-made templates and custom character creation with voice selection

## Properties

| | | |
|---|---|---|
| `PackedScene` | [template_button_scene](#prop-template-button-scene) |  |
| `PackedScene` | [blend_shape_slider_scene](#prop-blend-shape-slider-scene) |  |
| `PackedScene` | [color_button_scene](#prop-color-button-scene) |  |
| `PackedScene` | [class_button_scene](#prop-class-button-scene) |  |
| `PackedScene` | [facial_feature_selector_scene](#prop-facial-feature-selector-scene) |  |
| `Control` | [templates_container](#prop-templates-container) |  |
| `Control` | [customization_panel](#prop-customization-panel) |  |
| `HFlowContainer` | [class_container](#prop-class-container) |  |
| `ArrowSelectionButton` | [body_type_selector](#prop-body-type-selector) |  |
| `ArrowSelectionButton` | [voice_selector](#prop-voice-selector) |  |
| `ArrowSelectionButton` | [animation_selector](#prop-animation-selector) |  |
| `Control` | [blend_shapes_container](#prop-blend-shapes-container) |  |
| `Control` | [skin_colors_container](#prop-skin-colors-container) |  |
| `Control` | [hair_colors_container](#prop-hair-colors-container) |  |
| `Control` | [eye_colors_container](#prop-eye-colors-container) |  |
| `Control` | [facial_features_container](#prop-facial-features-container) |  |
| `LineEdit` | [name_edit](#prop-name-edit) |  |
| `Button` | [confirm_button](#prop-confirm-button) |  |
| `Button` | [exit_button](#prop-exit-button) |  |
| `CharacterCreation3DScene` | [preview_3d_scene](#prop-preview-3d-scene) |  |
| `AudioStreamPlayer` | [audio_player](#prop-audio-player) |  |
| `CharacterCreationInfoBox` | [info_box](#prop-info-box) |  |

## Variables

| | | |
|---|---|---|
| `CharacterCreationSettings` | [creation_settings](#var-creation-settings) |  |
| `CustomCharacterDefinition` | [current_definition](#var-current-definition) | `null` |
| `CharacterCreationProfile` | [current_profile](#var-current-profile) | `null` |
| `PlayerClassDefinition` | [current_player_class](#var-current-player-class) | `null` |
| `bool` | [is_custom_mode](#var-is-custom-mode) | `false` |
| `CharacterDefinition` | [selected_template](#var-selected-template) | `null` |
| `CustomSkeleton` | [current_preview_skeleton](#var-current-preview-skeleton) | `null` |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `p_system_hub: GameHost.SystemHub` ) |
| `void` | [clear_preview_equipment](#method-clear-preview-equipment)() |
| `CustomCharacterDefinition` | [get_character_definition](#method-get-character-definition)() |
| `void` | [reset](#method-reset)() |

## Signals

### customization_changed( definition: CustomCharacterDefinition ) {#signal-customization-changed}

Emitted when customization changes (for external listeners)

### class_selected( player_class: PlayerClassDefinition ) {#signal-class-selected}

Emitted when a class is selected

### voice_preview_requested( voice_variant: String ) {#signal-voice-preview-requested}

Emitted when voice preview is requested

### character_confirmed( character_definition: CharacterDefinition ) {#signal-character-confirmed}

Emitted when character creation is confirmed (for TransitionManager)

## Property descriptions

*Prefab Scenes*

### PackedScene template_button_scene {#prop-template-button-scene}

Button prefab for template/profile selection list

### PackedScene blend_shape_slider_scene {#prop-blend-shape-slider-scene}

Slider prefab for blend shape controls (expects CustomSlider with value_changed signal)

### PackedScene color_button_scene {#prop-color-button-scene}

Button prefab for color selection (expects ColorButton or similar)

### PackedScene class_button_scene {#prop-class-button-scene}

Button prefab for class selection (expects ClassSelectionButton)

### PackedScene facial_feature_selector_scene {#prop-facial-feature-selector-scene}

Button prefab for facial feature cycling

*UI Containers*

### Control templates_container {#prop-templates-container}

Container for template/profile selection buttons

### Control customization_panel {#prop-customization-panel}

Panel containing all customization options (shown for custom characters)

### HFlowContainer class_container {#prop-class-container}

Container for class selection buttons

### ArrowSelectionButton body_type_selector {#prop-body-type-selector}

Selector for body type (Male/Female/etc.)

### ArrowSelectionButton voice_selector {#prop-voice-selector}

Selector for voice selection

### ArrowSelectionButton animation_selector {#prop-animation-selector}

Selector for animation selection

### Control blend_shapes_container {#prop-blend-shapes-container}

Container for blend shape sliders

### Control skin_colors_container {#prop-skin-colors-container}

Container for skin color buttons

### Control hair_colors_container {#prop-hair-colors-container}

Container for hair color buttons

### Control eye_colors_container {#prop-eye-colors-container}

Container for eye color buttons

### Control facial_features_container {#prop-facial-features-container}

Container for facial feature selectors

### LineEdit name_edit {#prop-name-edit}

Input field for character name

### Button confirm_button {#prop-confirm-button}

Confirm/Ready button

### Button exit_button {#prop-exit-button}

Exit/Back button

*External References*

### CharacterCreation3DScene preview_3d_scene {#prop-preview-3d-scene}

Reference to the CharacterCreation3DScene for 3D preview

### AudioStreamPlayer audio_player {#prop-audio-player}

AudioStreamPlayer for voice preview

### CharacterCreationInfoBox info_box {#prop-info-box}

Info box for displaying template and class descriptions

## Variable descriptions

### CharacterCreationSettings creation_settings {#var-creation-settings}

Reference to CharacterCreationSettings resource

### CustomCharacterDefinition current_definition = null {#var-current-definition}

The current CustomCharacterDefinition being built

### CharacterCreationProfile current_profile = null {#var-current-profile}

The currently active profile (if custom character)

### PlayerClassDefinition current_player_class = null {#var-current-player-class}

Currently selected player class

### bool is_custom_mode = false {#var-is-custom-mode}

Whether we're in "Custom Character" mode vs template mode

### CharacterDefinition selected_template = null {#var-selected-template}

Selected template (if in template mode)

### CustomSkeleton current_preview_skeleton = null {#var-current-preview-skeleton}

Currently instantiated skeleton in preview

## Method descriptions

### void initialize_ui( p_system_hub: GameHost.SystemHub ) {#method-initialize-ui}

Sets the part up with the hub of the game systems: connects the signals it listens to and fills it.

### void clear_preview_equipment() {#method-clear-preview-equipment}

Clear equipment from preview (delegates to 3D scene)

### CustomCharacterDefinition get_character_definition() {#method-get-character-definition}

Get the finalized character definition

### void reset() {#method-reset}

Reset the character creator to initial state

