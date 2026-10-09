<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SFXSelectionDialog

**Inherits:** `ConfirmationDialog`

Modular SFX selection dialog that works with any SFXSelection class type Uses static DatabaseAudio for all audio data access Now supports SFX type selection and uses ItemLists for better UX

## Properties

| | | |
|---|---|---|
| `String` | [selection_class_type](#prop-selection-class-type) | `""` |
| `bool` | [allow_type_change](#prop-allow-type-change) | `false  # Whether to show type selector` |

## Variables

| | | |
|---|---|---|
| `Button` | [remove_sfx_button](#var-remove-sfx-button) |  |
| `AudioStreamPlayer` | [audio_player](#var-audio-player) |  |
| `SFXSelection` | [current_selection](#var-current-selection) |  |
| `bool` | [is_loading](#var-is-loading) | `false` |
| `Array[String]` | [available_sfx_types](#var-available-sfx-types) | `[ ... ]` |

## Methods

| | |
|---|---|
| `void` | [edit_sfx_selection](#method-edit-sfx-selection)( `selection: SFXSelection, class_type: String = "", allow_type_selection: bool = false` ) |
| `void` | [create_new_sfx_selection](#method-create-new-sfx-selection)( `class_type: String = ""` ) |
| `void` | [preview_current_audio](#method-preview-current-audio)() |
| `void` | [preview_audio_manually](#method-preview-audio-manually)() |

## Signals

### selection_made( selection: SFXSelection ) {#signal-selection-made}

## Property descriptions

### String selection_class_type = "" {#prop-selection-class-type}

Set this before calling popup() to specify which SFX selection type to edit

### bool allow_type_change = false  # Whether to show type selector {#prop-allow-type-change}

*No description yet.*

## Variable descriptions

### Button remove_sfx_button {#var-remove-sfx-button}

*No description yet.*

### AudioStreamPlayer audio_player {#var-audio-player}

*No description yet.*

### SFXSelection current_selection {#var-current-selection}

*No description yet.*

### bool is_loading = false {#var-is-loading}

*No description yet.*

### Array[String] available_sfx_types {#var-available-sfx-types}

*No description yet.*

## Method descriptions

### void edit_sfx_selection( selection: SFXSelection, class_type: String = "", allow_type_selection: bool = false ) {#method-edit-sfx-selection}

Configure and show dialog for editing a specific SFX selection

### void create_new_sfx_selection( class_type: String = "" ) {#method-create-new-sfx-selection}

Create a new selection of the specified type with type selection enabled

### void preview_current_audio() {#method-preview-current-audio}

Preview the currently selected audio

### void preview_audio_manually() {#method-preview-audio-manually}

Manual preview method that can be called from UI

