<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LocalizationEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

The Localization tab: the languages of the game, what is translated, the tables made from the data, a table editor to write the translations, and the CSV files that carry them in and out. Everything is saved when it changes: the languages and choices in `localization_config.tres`, each table in `tables/<collection>.tres` (see Localization and LocalizationGenerator).

## Methods

| | |
|---|---|
| `void` | [refresh](#method-refresh)() |
| `String` | [row_state](#method-row-state)( `table: LocalizationTable, language: String, key: String` ) *static* |
| `Array[String]` | [holes_of](#method-holes-of)( `text: String` ) *static* |
| `String` | [holes_warning](#method-holes-warning)( `source: String, translation: String` ) *static* |
| `Array[String]` | [export_csv](#method-export-csv)( `folder: String, mode: String, collection: String = ""` ) |
| `Dictionary` | [import_csv_files](#method-import-csv-files)( `paths: PackedStringArray` ) |

## Signals

### localization_changed() {#signal-localization-changed}

Emitted when the languages, the choices or a translation changed

## Enumerations

### enum Filter {#enum-filter}

- **ALL** = `0`
- **MISSING** = `1`
- **NEEDS_REVIEW** = `2`
- **TRANSLATED** = `3`

## Method descriptions

### void refresh() {#method-refresh}

Shows the config and the tables again (also after the data or the files changed).

### String row_state( table: LocalizationTable, language: String, key: String ) {#method-row-state}

The state of a text in a language: Missing, Needs review (the source changed after the translation) or OK.

### Array[String] holes_of( text: String ) {#method-holes-of}

The holes (`{name}`, `%s`, `%d`, `<Effect1>`) of a text, in the order they appear.

### String holes_warning( source: String, translation: String ) {#method-holes-warning}

The warning for a translation that lost or added a hole compared to the source ("" when the holes are the same).

### Array[String] export_csv( folder: String, mode: String, collection: String = "" ) {#method-export-csv}

Writes the tables as CSV files into a folder: mode "one" (the table `collection`), "each" (one file for each table) or "all" (all.csv). Returns the names of the files written.

### Dictionary import_csv_files( paths: PackedStringArray ) {#method-import-csv-files}

Reads CSV files into the tables and saves them. A file's name is its table unless it has the column `collection`. Returns the added-up report of LocalizationCsv.import_text.

