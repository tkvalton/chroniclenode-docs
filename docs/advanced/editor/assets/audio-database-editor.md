<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AudioDatabaseEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

The editor of the Audio tab (Assets &gt; Audio): the sound effects, music and ambience of the audio library as a tree, with a search bar, an import button, a player to listen to a sound, and the checks of the library.

## Variables

| | | |
|---|---|---|
| `DialogManager` | [dialog_manager](#var-dialog-manager) | `null` |
| `Dictionary` | [sfx_data](#var-sfx-data) | `{}` |
| `Dictionary` | [expanded_categories](#var-expanded-categories) | `{}` |
| `String` | [selected_sfx_category](#var-selected-sfx-category) | `""` |
| `String` | [selected_sfx_type](#var-selected-sfx-type) | `""` |
| `String` | [selected_sfx_name](#var-selected-sfx-name) | `""` |
| `String` | [selected_sfx_path](#var-selected-sfx-path) | `""` |
| `AudioStreamPlayer` | [audio_player](#var-audio-player) |  |
| `AudioStream` | [current_audio_stream](#var-current-audio-stream) |  |
| `bool` | [is_seeking](#var-is-seeking) | `false` |
| `Timer` | [update_timer](#var-update-timer) |  |
| `FileDialog` | [file_dialog](#var-file-dialog) |  |
| `Dictionary` | [current_import_context](#var-current-import-context) | `{} # Store import context to avoid lambda scope issues` |

## Methods

| | |
|---|---|
| `Array[String]` | [voice_line_warnings](#method-voice-line-warnings)( `character: String, line: String, code: String` ) *static* |
| `void` | [set_subtitle](#method-set-subtitle)( `character: String, line: String, code: String, text: String` ) *static* |
| `Error` | [import_language_recording](#method-import-language-recording)( `source_path: String, character: String, line: String, code: String` ) *static* |

## Variable descriptions

### DialogManager dialog_manager = null {#var-dialog-manager}

The dialogs of the editor (set by the main editor): the subtitle opens the text editor

### Dictionary sfx_data =  {#var-sfx-data}

*No description yet.*

### Dictionary expanded_categories =  {#var-expanded-categories}

*No description yet.*

### String selected_sfx_category = "" {#var-selected-sfx-category}

*No description yet.*

### String selected_sfx_type = "" {#var-selected-sfx-type}

*No description yet.*

### String selected_sfx_name = "" {#var-selected-sfx-name}

*No description yet.*

### String selected_sfx_path = "" {#var-selected-sfx-path}

*No description yet.*

### AudioStreamPlayer audio_player {#var-audio-player}

*No description yet.*

### AudioStream current_audio_stream {#var-current-audio-stream}

*No description yet.*

### bool is_seeking = false {#var-is-seeking}

*No description yet.*

### Timer update_timer {#var-update-timer}

*No description yet.*

### FileDialog file_dialog {#var-file-dialog}

*No description yet.*

### Dictionary current_import_context =  # Store import context to avoid lambda scope issues {#var-current-import-context}

*No description yet.*

## Method descriptions

### Array[String] voice_line_warnings( character: String, line: String, code: String ) {#method-voice-line-warnings}

The warnings of a voice line in a language, as lines of text (empty when all is well): no recording, a recording much longer or shorter than the default, folders that are not languages of the game, files of a language that have no default

### void set_subtitle( character: String, line: String, code: String, text: String ) {#method-set-subtitle}

Sets the subtitle of a voice line: in the source language it is stored with the voice lines, in another language it is the translation in the tables.

### Error import_language_recording( source_path: String, character: String, line: String, code: String ) {#method-import-language-recording}

Copies a recording into the folder of a language of a voice line, under the name of the line ("voicelines/&lt;character&gt;/&lt;language&gt;/&lt;line&gt;.&lt;extension&gt;"). Returns OK or the error.

