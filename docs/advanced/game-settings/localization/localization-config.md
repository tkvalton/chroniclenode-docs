<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LocalizationConfig

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

The localization setup of the game: the language the text is written in (the source language), the other languages, and the choices about text the game may show. It is the file `res://src/data/localization/localization_config.tres`, made by the Localization tab of the editor. See Localization.

## Properties

| | | |
|---|---|---|
| `String` | [source_language](#prop-source-language) | `"en"` |
| `Array[LocalizationLanguage]` | [languages](#prop-languages) | `[]` |
| `PackedStringArray` | [shown_fields](#prop-shown-fields) | `[]` |
| `PackedStringArray` | [collections](#prop-collections) | `[]` |
| `PackedStringArray` | [interface_folders](#prop-interface-folders) | `[]` |
| `PackedStringArray` | [ignored_words](#prop-ignored-words) | `[]` |
| `String` | [fallback_language](#prop-fallback-language) | `""` |

## Methods

| | |
|---|---|
| `LocalizationLanguage` | [get_language](#method-get-language)( `code: String` ) |
| `Array[String]` | [get_codes](#method-get-codes)() |

## Property descriptions

### String source_language = "en" {#prop-source-language}

The language the game's text is written in: the text in the editor. Nothing is looked up for it

### Array[LocalizationLanguage] languages = [] {#prop-languages}

The languages the game can be played in besides the source language

### PackedStringArray shown_fields = [] {#prop-shown-fields}

The text of types that the game does not show today but may show (a quest line name, a trainer name): the fields to include in the tables, as "type.field" ("questline.display_name"). The Localization tab lists them

### PackedStringArray collections = [] {#prop-collections}

The collections that have a table (the file `tables/<collection>.tres`): one per type of database resource that has text, and "toolkit" for the words of the toolkit's own interface

### PackedStringArray interface_folders = [] {#prop-interface-folders}

The folders with the scenes and scripts of the game's own interface that the generator reads for the words in them (the words of Labels and Buttons, and Localization.t("...") in code). The toolkit's own scenes are always read. Example: ["res://src/ui/"]

### PackedStringArray ignored_words = [] {#prop-ignored-words}

Words of the scenes that are not translated (a name the interface sets from code, a test text): the generator leaves them out

### String fallback_language = "" {#prop-fallback-language}

The language the game starts in when the player has not chosen one and the computer's language is not a language of the game (empty = the source language)

## Method descriptions

### LocalizationLanguage get_language( code: String ) {#method-get-language}

The language with this code, or null (the source language has no entry)

### Array[String] get_codes() {#method-get-codes}

The codes of all the languages: the source language first

