<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LocalizationCsv

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Moves the translations in and out of the project as CSV files, which a translator can open in any spreadsheet. A file holds one collection (the text of one type of database resource: "item.csv", "quest.csv", the words of the interface: "toolkit.csv") with the columns `key`, `source`, then one column for each language. The file of everything ("all.csv") has the column `collection` first. Reading a file puts its translations in the tables.

## Methods

| | |
|---|---|
| `String` | [export_collection](#method-export-collection)( `table: LocalizationTable, languages: Array[String]` ) *static* |
| `String` | [export_all](#method-export-all)( `tables: Array[LocalizationTable], languages: Array[String]` ) *static* |
| `Dictionary` | [import_text](#method-import-text)( `text: String, default_collection: String, tables: Dictionary` ) *static* |
| `Array` | [parse](#method-parse)( `text: String` ) *static* |

## Constants

- `PackedStringArray` **FIXED_COLUMNS** = `["collection", "key", "source"]` - The columns that are not languages.

## Method descriptions

### String export_collection( table: LocalizationTable, languages: Array[String] ) {#method-export-collection}

The text of the CSV file of one collection: key, source and the translation of each language of `languages`.

### String export_all( tables: Array[LocalizationTable], languages: Array[String] ) {#method-export-all}

The text of the CSV file of all the collections: collection, key, source and the translation of each language.

### Dictionary import_text( text: String, default_collection: String, tables: Dictionary ) {#method-import-text}

Reads the text of a CSV file (one collection, or all of them when it has the column `collection`) into the tables. `default_collection` is the collection of a file with no such column (the name of the file). A translation is written for the source text of the file; when that is not the source text of the table now, the translation is marked "needs review". Returns the report: &#123;"imported", "needs_review", "unknown_keys", "languages": [codes], "collections": [names]&#125;.

### Array parse( text: String ) {#method-parse}

Splits the text of a CSV file into rows of cells (quotes, doubled quotes and line breaks inside a quoted cell are handled; \r\n and \n end a row).

