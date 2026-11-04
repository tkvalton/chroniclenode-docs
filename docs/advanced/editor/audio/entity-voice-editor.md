<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EntityVoiceEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

The Entity Voices tab (Audio &gt; Entity Voices): the voices of the audio library (entity_voices/&lt;kind of creature&gt;/&lt;voice&gt;/&lt;call&gt;/) lined up with the voice calls of the toolkit (VoiceCalls), as the Animations tab lines up the animations of an entity type. On the left the kinds of creature; on the right the voice, a tree of its calls (hit, death, dodge ...) with how many files each has and what a missing one does (it uses another call, or it is silent), and for the selected call its files, a player, Import and the folder; the warnings of the voice and who uses it. See docs: Audio &gt; Entity Voices.

## Variables

| | | |
|---|---|---|
| `String` | [selected_type](#var-selected-type) | `""` |
| `String` | [selected_variant](#var-selected-variant) | `""` |
| `String` | [selected_call](#var-selected-call) | `""` |

## Methods

| | |
|---|---|
| `void` | [refresh_database](#method-refresh-database)() |
| `PackedStringArray` | [get_warning_texts](#method-get-warning-texts)() |
| `Dictionary` | [import_files](#method-import-files)( `paths: PackedStringArray, call_name: String = ""` ) |
| `String` | [get_check_text](#method-get-check-text)() |

## Constants

- `int` **COLUMN_CALL** = `0`
- `int` **COLUMN_FILES** = `1`
- `int` **COLUMN_STATUS** = `2`
- `int` **COLUMN_WHEN** = `3`
- `Color` **COLOR_HAS** = `Color(0.55, 0.8, 0.55)`
- `Color` **COLOR_FALLBACK** = `Color(0.95, 0.75, 0.35)`
- `Color` **COLOR_MISSING** = `Color(0.7, 0.7, 0.7)`
- `Color` **COLOR_REQUIRED** = `Color(0.95, 0.5, 0.45)`

## Variable descriptions

### String selected_type = "" {#var-selected-type}

The kind of creature that is open, its voice, and the call (the name of the folder) that is selected

### String selected_variant = "" {#var-selected-variant}

*No description yet.*

### String selected_call = "" {#var-selected-call}

*No description yet.*

## Method descriptions

### void refresh_database() {#method-refresh-database}

Reads the voices of the library again

### PackedStringArray get_warning_texts() {#method-get-warning-texts}

The texts of the warnings now (for the tests)

### Dictionary import_files( paths: PackedStringArray, call_name: String = "" ) {#method-import-files}

Copies sound files into the folder of the selected call. Returns what DatabaseAudio.import_voice_files says

### String get_check_text() {#method-get-check-text}

*No description yet.*

