<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TrackSelectionDialog

**Inherits:** `ConfirmationDialog`

Simplified track selection dialog for album management Works directly with DatabaseAudio categories (music, ambience, loop_sfx)

## Variables

| | | |
|---|---|---|
| `Array[String]` | [supported_categories](#var-supported-categories) | `["music", "ambience", "loop_sfx"]  # Fixed spelling` |
| `String` | [current_category](#var-current-category) | `""` |
| `String` | [current_type](#var-current-type) | `""` |
| `bool` | [is_loading](#var-is-loading) | `false` |
| `AudioStreamPlayer` | [audio_player](#var-audio-player) |  |
| `String` | [search_text](#var-search-text) | `""` |

## Methods

| | |
|---|---|
| `void` | [show_for_category](#method-show-for-category)( `category: String` ) |
| `void` | [show_all_categories](#method-show-all-categories)() |
| `Array[String]` | [get_selected_track_paths](#method-get-selected-track-paths)() |
| `String` | [get_selection_summary](#method-get-selection-summary)() |
| `bool` | [has_valid_selection](#method-has-valid-selection)() |
| `void` | [show_music_only](#method-show-music-only)() |
| `void` | [show_ambience_only](#method-show-ambience-only)() |
| `void` | [show_loop_sfx_only](#method-show-loop-sfx-only)() |
| `void` | [show_all_supported](#method-show-all-supported)() |
| `void` | [set_search_filter](#method-set-search-filter)( `search: String` ) |

## Signals

### selection_made( selected_files: Array[String] ) {#signal-selection-made}

## Variable descriptions

### Array[String] supported_categories = ["music", "ambience", "loop_sfx"]  # Fixed spelling {#var-supported-categories}

*No description yet.*

### String current_category = "" {#var-current-category}

*No description yet.*

### String current_type = "" {#var-current-type}

*No description yet.*

### bool is_loading = false {#var-is-loading}

*No description yet.*

### AudioStreamPlayer audio_player {#var-audio-player}

*No description yet.*

### String search_text = "" {#var-search-text}

*No description yet.*

## Method descriptions

### void show_for_category( category: String ) {#method-show-for-category}

Show dialog for selecting tracks from a specific category

### void show_all_categories() {#method-show-all-categories}

Show dialog with all categories available

### Array[String] get_selected_track_paths() {#method-get-selected-track-paths}

*No description yet.*

### String get_selection_summary() {#method-get-selection-summary}

Get display text for current selection

### bool has_valid_selection() {#method-has-valid-selection}

Check if current selection is valid

### void show_music_only() {#method-show-music-only}

Show only music tracks (loop and non-loop)

### void show_ambience_only() {#method-show-ambience-only}

Show only ambience tracks (loop and non-loop)

### void show_loop_sfx_only() {#method-show-loop-sfx-only}

Show only loop SFX tracks

### void show_all_supported() {#method-show-all-supported}

Show all supported categories (default)

### void set_search_filter( search: String ) {#method-set-search-filter}

Add search functionality (can be called from parent)

