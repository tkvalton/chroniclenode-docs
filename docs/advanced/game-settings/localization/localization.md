<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# Localization

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The translation of the text of the game. The text you write in the editor (names, descriptions, quest text ...) is the text of the SOURCE language. When the player plays in another language, the properties that hold text (`display_name`, `description` ...) give the translation instead: the property itself translates, so the code that shows a name needs no change.

## Description

- **Keys.** A translation is found by a key, never by the text: `<type>/<id>/<field>` for a database resource ("item/1204/display_name"), the prefix of the owner for a part inside one

("skill_tree/12/node/5/display_name"). A text that is shown from code (the words of the toolkit's interface) is found by its English text: `Localization.t("Load Game")`.

- **Tables.** The translations are kept in tables, one per collection, in `res://src/data/localization/tables/`, made and edited in the Localization tab of the editor.
- **Never use a shown text as a key.** The stored text is the source text and may be used for lookups; to show a text, read the property.
- **Saving.** Reading a property while a language is active gives the translated text, so anything that SAVES a resource must read the stored text: the editor always does (it never

translates), and code that saves at run time wraps the save in `Localization.save_raw()`. See docs/systems/localization-audit.md.

## Variables

| | | |
|---|---|---|
| `Events` | [events](#var-events) | `Events.new()` |
| `bool` | [raw_mode](#var-raw-mode) | `false` |
| `bool` | [active](#var-active) | `false` |

## Methods

| | |
|---|---|
| `LocalizationConfig` | [get_config](#method-get-config)() *static* |
| `void` | [set_config](#method-set-config)( `config: LocalizationConfig` ) *static* |
| `String` | [get_source_language](#method-get-source-language)() *static* |
| `Array[String]` | [get_language_codes](#method-get-language-codes)() *static* |
| `bool` | [has_language](#method-has-language)( `code: String` ) *static* |
| `void` | [reload_tables](#method-reload-tables)() *static* |
| `void` | [set_table](#method-set-table)( `table: LocalizationTable` ) *static* |
| `LocalizationTable` | [get_table](#method-get-table)( `collection: String` ) *static* |
| `String` | [set_text_language](#method-set-text-language)( `code: String` ) *static* |
| `String` | [get_text_language](#method-get-text-language)() *static* |
| `String` | [set_voice_language](#method-set-voice-language)( `code: String` ) *static* |
| `String` | [get_voice_language](#method-get-voice-language)() *static* |
| `String` | [choose_initial_language](#method-choose-initial-language)( `saved: String` ) *static* |
| `String` | [text_of](#method-text-of)( `resource: Object, field: String, stored: String` ) *static* |
| `Array[String]` | [list_of](#method-list-of)( `resource: Object, field: String, stored: Array[String]` ) *static* |
| `String` | [text_for_key](#method-text-for-key)( `key: String, stored: String` ) *static* |
| `String` | [t](#method-t)( `english: String` ) *static* |
| `String` | [t_n](#method-t-n)( `singular: String, plural: String, count: int` ) *static* |
| `Array[String]` | [plural_categories](#method-plural-categories)( `code: String` ) *static* |
| `String` | [plural_category](#method-plural-category)( `code: String, count: int` ) *static* |
| `String` | [format](#method-format)( `template: String, values: Dictionary` ) *static* |
| `Variant` | [save_raw](#method-save-raw)( `action: Callable` ) *static* |
| `String` | [get_translation](#method-get-translation)( `resource: Object, field: String, language: String` ) *static* |
| `String` | [get_translation_for_key](#method-get-translation-for-key)( `key: String, language: String` ) *static* |
| `void` | [set_translation_for_key](#method-set-translation-for-key)( `key: String, source: String, language: String, text: String, save: bool = true` ) *static* |
| `bool` | [set_translation](#method-set-translation)( `resource: Object, field: String, language: String, text: String, save: bool = true` ) *static* |
| `String` | [source_text](#method-source-text)( `resource: Object, field: String = "display_name"` ) *static* |
| `String` | [type_of](#method-type-of)( `resource: Object` ) *static* |
| `String` | [key_of](#method-key-of)( `resource: Object, field: String` ) *static* |
| `int` | [hash_text](#method-hash-text)( `text: String` ) *static* |

## Constants

- `String` **CONFIG_PATH** = `"res://src/data/localization/localization_config.tres"`
- `String` **TABLES_PATH** = `"res://src/data/localization/tables/"` - The folder of the tables.
- `String` **TOOLKIT** = `"toolkit"` - The collection with the words of the toolkit's own interface (found by their English text).
- `String` **PSEUDO** = `"pseudo"` - The code of the made-up language that shows every text longer and with accents, to find text that does not fit or is not translated (it needs no table).
- `Dictionary` **KNOWN_LANGUAGES** = `{` - The languages the editor offers when one is added: code -&gt; name in the language itself.
- `String` **PLURAL_SEPARATOR** = `"::"` - The separator between the singular text of a counted phrase and the plural category in the key of a table row ("%d effect::other").

## Variable descriptions

### Events events = Events.new() {#var-events}

The signals: connect to `Localization.events.language_changed` to refresh what shows a text that was read once.

### bool raw_mode = false {#var-raw-mode}

True while the stored (source) text must be returned whatever the language: the editor, and code that saves resources.

### bool active = false {#var-active}

True when reading a text looks for a translation: a language other than the source language is active, and the game is not in the editor.

## Method descriptions

### LocalizationConfig get_config() {#method-get-config}

The localization setup (made empty in memory when the project has none).

### void set_config( config: LocalizationConfig ) {#method-set-config}

Replaces the setup (the editor and the tests): reloads the tables of the collections it lists.

### String get_source_language() {#method-get-source-language}

The language the text is written in.

### Array[String] get_language_codes() {#method-get-language-codes}

The codes of all the languages of the game: the source language first.

### bool has_language( code: String ) {#method-has-language}

Does the game have this language?

### void reload_tables() {#method-reload-tables}

Loads the tables of all the collections again from their files (or clears them when the config lists none).

### void set_table( table: LocalizationTable ) {#method-set-table}

Puts a table in use (it replaces the table of the same collection). The editor and the tests use it for a table that is not saved.

### LocalizationTable get_table( collection: String ) {#method-get-table}

The table of a collection, or null.

### String set_text_language( code: String ) {#method-set-text-language}

Sets the language the text is shown in. An unknown code is the source language. Returns the language that is now active.

### String get_text_language() {#method-get-text-language}

The language the text is shown in (the source language when none was set).

### String set_voice_language( code: String ) {#method-set-voice-language}

Sets the language of the voice lines. An unknown code is the source language.

### String get_voice_language() {#method-get-voice-language}

The language of the voice lines (the source language when none was set).

### String choose_initial_language( saved: String ) {#method-choose-initial-language}

The language to start in: the saved choice if the game has it, else the language of the computer if the game has it, else the fallback language, else the source language.

### String text_of( resource: Object, field: String, stored: String ) {#method-text-of}

The text of a property of a resource in the active language: the translation if there is one, else `stored` (the source text). This is what the getters of `display_name` and `description` call. A resource that was not loaded from the database, or a part of one that was not given its key, shows its stored text.

### Array[String] list_of( resource: Object, field: String, stored: Array[String] ) {#method-list-of}

A list of texts in the active language (readable pages, combo step names): each item is looked up by `<key of the field>/<index>`; an item with no translation shows its stored text. Returns a new array each time.

### String text_for_key( key: String, stored: String ) {#method-text-for-key}

The text of a key in the active language, else `stored`. For a part that knows its own key.

### String t( english: String ) {#method-t}

A word or sentence of the toolkit's interface (or of your own code) in the active language: found by the English text itself. `Localization.t("Load Game")`. A text without a translation is returned as it is. Keep the holes (%s, %d, &#123;name&#125;) in the English text; the translator moves them.

### String t_n( singular: String, plural: String, count: int ) {#method-t-n}

A counted phrase in the language of the player: `Localization.t_n("%d effect", "%d effects", count)` gives "1 effect", "5 effects". The singular text is the key; the other forms are rows of the toolkit table made from the plural text (`<singular>::other`, and `::few`, `::many`, `::two`, `::zero` for the languages that need them: see `plural_categories`). A form with no translation falls back to the `other` form, then to the English rule. The count fills the first %d of the form.

### Array[String] plural_categories( code: String ) {#method-plural-categories}

The plural categories a language has (the CLDR names): the forms a counted phrase needs a text for. English has one and other; Russian and Polish one, few, many and other; Arabic all six.

### String plural_category( code: String, count: int ) {#method-plural-category}

The plural category of a count in a language ("one", "few", "many", "other", "zero", "two").

### String format( template: String, values: Dictionary ) {#method-format}

Fills the holes of a text with names: `Localization.format("Kill {count} {target}", {"count": 5, "target": "wolves"})`.

### Variant save_raw( action: Callable ) {#method-save-raw}

Runs a save with the stored text returned by every property, then restores the previous state. `Localization.save_raw(func(): ResourceSaver.save(resource, path))`.

### String get_translation( resource: Object, field: String, language: String ) {#method-get-translation}

The translation of a field of a resource in a language, as the table holds it ("" when there is none). For the editors.

### String get_translation_for_key( key: String, language: String ) {#method-get-translation-for-key}

The translation of a key in a language, as the table of its collection holds it ("" when there is none). For text that has no resource of its own (the subtitle of a voice line).

### void set_translation_for_key( key: String, source: String, language: String, text: String, save: bool = true ) {#method-set-translation-for-key}

Sets the translation of a key in a language and puts the table in use (see set_translation). `source` is the source text of the key, remembered to know when it changes.

### bool set_translation( resource: Object, field: String, language: String, text: String, save: bool = true ) {#method-set-translation}

Sets the translation of a field of a resource in a language and puts the table in use; with `save` the table file is written too. The table of the collection is made when it does not exist, and the collection is added to the config. Returns false when the resource has no key (it has no id, or it is a part that was not given its key).

### String source_text( resource: Object, field: String = "display_name" ) {#method-source-text}

The stored (source) text of a field, whatever the language is: for code that finds a resource by the name it was written with in the data (a combat script that names an ability). A shown text is never used to find something; this is for the names that data refers to.

### String type_of( resource: Object ) {#method-type-of}

The type name of the database that a resource belongs to ("item", "quest"), found from its class; "" when it is not a database type.

### String key_of( resource: Object, field: String ) {#method-key-of}

The key of a field of a resource: `<type>/<id>/<field>` for a database resource, the key prefix of the owner for a part inside one ("" when it has none).

### int hash_text( text: String ) {#method-hash-text}

A fingerprint of a text, to know that the source of a translation changed.

