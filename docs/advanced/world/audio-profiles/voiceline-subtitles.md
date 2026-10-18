<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VoicelineSubtitles

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

The subtitles of the voice lines: the words of each voice line, in the source language. A voice line is a character (a folder of `voicelines/`) and a file; the pair is the key ("mira/greeting"). The text is kept here and not in the sound file because Godot keeps the settings of an imported sound in a side file it rewrites on every import and cannot write tags into a .wav, .ogg or .mp3. The translations of the subtitles are in the Localization tables (collection "voiceline"), like every other text. The file is `res://src/data/audio/voiceline_subtitles.tres`; the audio editor edits it.

## Properties

| | | |
|---|---|---|
| `Dictionary` | [subtitles](#prop-subtitles) | `{}` |

## Methods

| | |
|---|---|
| `VoicelineSubtitles` | [get_instance](#method-get-instance)() *static* |
| `void` | [reset](#method-reset)() *static* |
| `String` | [line_key](#method-line-key)( `character: String, file: String` ) *static* |
| `String` | [table_key](#method-table-key)( `character: String, file: String` ) *static* |
| `String` | [get_source](#method-get-source)( `character: String, file: String` ) |
| `String` | [get_text](#method-get-text)( `character: String, file: String` ) |
| `void` | [set_source](#method-set-source)( `character: String, file: String, text: String, save: bool = true` ) |
| `void` | [show_for](#method-show-for)( `hub: GameHost.SystemHub, sound: AudioStream, character: String, speaker: String = ""` ) *static* |

## Constants

- `String` **PATH** = `"res://src/data/audio/voiceline_subtitles.tres"` - The file that holds the subtitles.

## Property descriptions

### Dictionary subtitles =  {#prop-subtitles}

The words of each voice line: "character/file" -&gt; text (the file is written without its extension)

## Method descriptions

### VoicelineSubtitles get_instance() {#method-get-instance}

The subtitles of the project (an empty set when the project has none yet).

### void reset() {#method-reset}

Forgets what was read (the tests, and the editor after the file changed).

### String line_key( character: String, file: String ) {#method-line-key}

The key of a voice line: "character/file", the file without its extension.

### String table_key( character: String, file: String ) {#method-table-key}

The key of the translation of the subtitle in the localization tables.

### String get_source( character: String, file: String ) {#method-get-source}

The subtitle in the source language ("" when the line has none).

### String get_text( character: String, file: String ) {#method-get-text}

The subtitle in the language of the text of the player: the translation if there is one, else the source text.

### void set_source( character: String, file: String, text: String, save: bool = true ) {#method-set-source}

Sets the subtitle in the source language and writes the file. An empty text removes it.

### void show_for( hub: GameHost.SystemHub, sound: AudioStream, character: String, speaker: String = "" ) {#method-show-for}

Shows the subtitle of the voice line that plays, on the subtitles of the in-game interface (nothing when the line has no subtitle, the game is not in the in-game interface, or the player has subtitles off). `sound` is the file that plays (its length is how long the subtitle stays); `speaker` is the name shown above it ("" = the name of the character folder).

