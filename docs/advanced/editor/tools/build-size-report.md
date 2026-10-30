<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# BuildSizeReport

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

What the project weighs and where it could weigh less: size by kind of file and by folder, the largest files, files that are there twice, textures that are bigger than they need to be, sounds that could be smaller (stereo where the sound is positional, uncompressed where it is short, WAV where it is long), and the files nothing uses (see UsedAssets). It reads the files, the `.import` files and, when the project was imported, the size of the imported copies; it changes nothing. `scan` gives a Dictionary, `to_markdown` writes it as text.

## Methods

| | |
|---|---|
| `Dictionary` | [scan](#method-scan)( `options: Dictionary = {}` ) *static* |
| `Array[String]` | [always_include_setting](#method-always-include-setting)() *static* |
| `String` | [kind_of](#method-kind-of)( `extension: String` ) *static* |
| `String` | [import_value](#method-import-value)( `import_text: String, key: String` ) *static* |
| `Vector2i` | [png_size](#method-png-size)( `path: String` ) *static* |
| `Dictionary` | [wav_info](#method-wav-info)( `path: String` ) *static* |
| `String` | [format_bytes](#method-format-bytes)( `bytes: int` ) *static* |
| `String` | [to_markdown](#method-to-markdown)( `report: Dictionary` ) *static* |

## Constants

- `Dictionary` **KINDS** = `{`
- `int` **DEFAULT_TEXTURE_LIMIT** = `2048` - A texture with a side longer than this is listed as oversize
- `float` **LONG_SOUND_SECONDS** = `8.0` - A sound this long (seconds) or longer should be Ogg Vorbis, not WAV
- `Array[String]` **MONO_FOLDERS** = `["entity_voices", "voicelines", "voices", "motion", "impact", "/cast/", "/cas...` - The folders of the audio library whose sounds are placed in the world or are short interface sounds: mono is enough (the engine mixes a positional sound down to mono anyway)
- `float` **KEEP_MONO** = `0.5` - How much of a WAV is left (of its size) with each change; rough numbers from the Godot manual (QOA about 5 times smaller, Vorbis about 10 times)
- `float` **KEEP_QOA** = `0.2`
- `float` **KEEP_VORBIS** = `0.1`
- `int` **SMALL_FILE** = `1024`
- `int` **LARGEST_COUNT** = `30`
- `int` **LIST_LIMIT** = `200`

## Method descriptions

### Dictionary scan( options: Dictionary = &#123;&#125; ) {#method-scan}

Scans the project. Options (all optional): `folders` (the folders to count, default assets and src), `roots` (the folders that are always loaded), `judge` (the folders whose unused files are listed, default assets), `always_include`, `texture_limit`, `unused` (false = skip the used-assets walk)

### Array[String] always_include_setting() {#method-always-include-setting}

The always include list of the project (a project setting)

### String kind_of( extension: String ) {#method-kind-of}

*No description yet.*

### String import_value( import_text: String, key: String ) {#method-import-value}

The value of a key in the text of an `.import` file ("" when it is not there)

### Vector2i png_size( path: String ) {#method-png-size}

The size of a PNG from its header (no need to decode it)

### Dictionary wav_info( path: String ) {#method-wav-info}

The channels, the sample rate and the length of a WAV file, from its header (&#123;&#125; when it is not a readable WAV)

### String format_bytes( bytes: int ) {#method-format-bytes}

*No description yet.*

### String to_markdown( report: Dictionary ) {#method-to-markdown}

The report as Markdown text (the lists are cut at 200 rows)

