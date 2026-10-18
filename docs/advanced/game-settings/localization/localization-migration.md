<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LocalizationMigration

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Brings the saved data of older versions to the form the localization needs. The text that was kept as a list with one item for each language (the chats and responses of conversations, the turn-in text of quests) is one text now, and the voice line of a chat or response is one selection (a voice line in another language is the file of the same name in the language folder). The first item of each list is the text of the source language and is kept; the other items were never read by the game and are left out (the report lists how many). It runs once, in the editor, when the database starts (the marker file says it ran); a game that is not run from the editor never changes its data.

## Methods

| | |
|---|---|
| `Dictionary` | [run_once](#method-run-once)() *static* |
| `void` | [convert_folder](#method-convert-folder)( `folder: String, report: Dictionary` ) *static* |
| `String` | [convert_text](#method-convert-text)( `source: String, report: Dictionary` ) *static* |

## Constants

- `String` **MARKER_PATH** = `"res://src/data/localization/.text_lists_converted"` - The file whose presence says the lists were converted.
- `String` **REPORT_PATH** = `"res://src/data/localization/conversion_report.txt"` - The file that lists what the conversion changed.
- `PackedStringArray` **TEXT_LIST_FIELDS** = `["text", "response_display_name", "response_text", "turn_in_text"]` - The fields that held one text for each language.
- `PackedStringArray` **VOICE_LIST_FIELDS** = `["voice_line_sfx"]` - The fields that held one voice line for each language.

## Method descriptions

### Dictionary run_once() {#method-run-once}

Converts the data once if it was not converted yet (editor only). Returns the report, or &#123;&#125; when nothing ran.

### void convert_folder( folder: String, report: Dictionary ) {#method-convert-folder}

Converts every .tres of a folder. `report` gets the counts.

### String convert_text( source: String, report: Dictionary ) {#method-convert-text}

Converts the lists in the text of a .tres file and returns the new text.

