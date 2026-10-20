<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SpeechLanguage

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The languages of the game world (Common, Orcish, Elvish): a language is a **proficiency** with levels, so the understanding of it grows. A listener who does not understand a language fully reads the line **garbled**: the share of the words that stay readable is the level divided by the highest level, and each word is garbled or not by the same rule every time. See docs: Chat &gt; Languages.

## Methods

| | |
|---|---|
| `float` | [understood_fraction](#method-understood-fraction)( `language: ProficiencyDefinition, level: int` ) *static* |
| `bool` | [understands_word](#method-understands-word)( `word: String, language: ProficiencyDefinition, level: int` ) *static* |
| `String` | [garble](#method-garble)( `text: String, language: ProficiencyDefinition, level: int` ) *static* |

## Constants

- `PackedStringArray` **DEFAULT_SYLLABLES** = `["ka", "lo", "mur", "zan", "eth", "ish", "dru", "vok", "thal", "gor", "ren", ...` - The syllables a garbled word is made of when the language has none of its own

## Method descriptions

### float understood_fraction( language: ProficiencyDefinition, level: int ) {#method-understood-fraction}

The share of the words a listener of this level understands, from 0 to 1

### bool understands_word( word: String, language: ProficiencyDefinition, level: int ) {#method-understands-word}

Does a listener of this level read this word? The same word in the same language gives the same answer every time, and a higher level never loses a word it had

### String garble( text: String, language: ProficiencyDefinition, level: int ) {#method-garble}

The text as a listener of this level reads it: the words they do not understand are replaced by words made of the syllables of the language (punctuation and capitals stay)

