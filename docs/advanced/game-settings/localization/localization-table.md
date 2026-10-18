<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LocalizationTable

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

The translations of one collection (the text of one type of database resource, or the words of the toolkit's interface): for every text a key, the source text, and for every language the translation and the fingerprint of the source text it was written for. A translation whose fingerprint no longer matches the source is marked "needs review". The file is `res://src/data/localization/tables/<collection>.tres`.

## Properties

| | | |
|---|---|---|
| `String` | [collection](#prop-collection) | `""` |
| `Dictionary` | [sources](#prop-sources) | `{}` |
| `Dictionary` | [texts](#prop-texts) | `{}` |
| `Dictionary` | [reviewed](#prop-reviewed) | `{}` |

## Methods

| | |
|---|---|
| `String` | [get_text](#method-get-text)( `language: String, key: String` ) |
| `void` | [set_text](#method-set-text)( `language: String, key: String, text: String` ) |
| `bool` | [needs_review](#method-needs-review)( `language: String, key: String` ) |
| `int` | [key_count](#method-key-count)() |
| `int` | [translated_count](#method-translated-count)( `language: String` ) |
| `Array[String]` | [stale_keys](#method-stale-keys)( `language: String` ) |

## Property descriptions

### String collection = "" {#prop-collection}

The name of the collection: a database type ("item", "quest") or "toolkit"

### Dictionary sources =  {#prop-sources}

The source text of every key: key -&gt; text, as it was when the table was last updated from the data

### Dictionary texts =  {#prop-texts}

The translations: language code -&gt; &#123; key -&gt; text &#125;

### Dictionary reviewed =  {#prop-reviewed}

The fingerprint of the source text each translation was written for: language code -&gt; &#123; key -&gt; int &#125;

## Method descriptions

### String get_text( language: String, key: String ) {#method-get-text}

The translation of a key in a language, or "" when there is none

### void set_text( language: String, key: String, text: String ) {#method-set-text}

Sets the translation of a key and remembers which source text it was written for

### bool needs_review( language: String, key: String ) {#method-needs-review}

Has the source text changed since this translation was written?

### int key_count() {#method-key-count}

The number of keys in the table

### int translated_count( language: String ) {#method-translated-count}

The number of keys that have a translation in a language

### Array[String] stale_keys( language: String ) {#method-stale-keys}

The keys whose translation needs review in a language

