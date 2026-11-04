<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DynamicMusic

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Music that changes with the game: a set of **parts** (pieces of music with a tempo, optionally with layers), **states** (names the game asks for, each playing a part), **transitions** (how one state changes into another: when, where the new part starts, the fade, a bridge), and **stingers** (short sounds over the music). A world, a zone, a weather, an encounter or an event plays one through a SoundSource; an event or a boss phase changes its state, and the party's combat state switches to a state called Combat by itself. Needs Ogg or MP3 files (a WAV has no tempo). A database kind (Audio &gt; Dynamic Music). See docs: Audio &gt; Dynamic Music.

## Properties

| | | |
|---|---|---|
| `Array[MusicPart]` | [parts](#prop-parts) | `[]` |
| `Array[MusicState]` | [states](#prop-states) | `[]` |
| `Array[MusicTransition]` | [transitions](#prop-transitions) | `[]` |
| `MusicTransition` | [default_transition](#prop-default-transition) | `MusicTransition.new()` |
| `Array[MusicStinger]` | [stingers](#prop-stingers) | `[]` |
| `String` | [start_state](#prop-start-state) | `""` |
| `float` | [volume_db](#prop-volume-db) | `0.0` |
| `float` | [intensity_fade_seconds](#prop-intensity-fade-seconds) | `1.5` |
| `float` | [start_intensity](#prop-start-intensity) | `0.0` |

## Methods

| | |
|---|---|
| `MusicPart` | [get_part](#method-get-part)( `part_name: String` ) |
| `MusicState` | [get_state](#method-get-state)( `state_name: String` ) |
| `MusicState` | [find_state_ignoring_case](#method-find-state-ignoring-case)( `state_name: String` ) |
| `MusicStinger` | [get_stinger](#method-get-stinger)( `stinger_name: String` ) |
| `String` | [resolve_start_state](#method-resolve-start-state)( `asked: String = ""` ) |
| `MusicTransition` | [find_transition](#method-find-transition)( `from: String, to: String` ) |
| `PackedStringArray` | [get_part_names](#method-get-part-names)() |
| `PackedStringArray` | [get_state_names](#method-get-state-names)() |
| `PackedStringArray` | [get_paths](#method-get-paths)() |
| `PackedStringArray` | [validate](#method-validate)() |

## Property descriptions

### Array[MusicPart] parts = [] {#prop-parts}

The pieces of music

### Array[MusicState] states = [] {#prop-states}

The states the game can ask for

### Array[MusicTransition] transitions = [] {#prop-transitions}

The rules for changing from one state to another (the most specific rule that fits wins)

### MusicTransition default_transition = MusicTransition.new() {#prop-default-transition}

The rule for a change that no rule above fits

### Array[MusicStinger] stingers = [] {#prop-stingers}

Short sounds that play over the music

### String start_state = "" {#prop-start-state}

The state the music starts in when its source does not name one

### float volume_db = 0.0 {#prop-volume-db}

How loud the music is (dB)

### float intensity_fade_seconds = 1.5 {#prop-intensity-fade-seconds}

The seconds the layers take to fade in and out when the intensity changes

### float start_intensity = 0.0 {#prop-start-intensity}

The intensity (0 to 1) the music starts with, which decides what layers play

## Method descriptions

### MusicPart get_part( part_name: String ) {#method-get-part}

*No description yet.*

### MusicState get_state( state_name: String ) {#method-get-state}

*No description yet.*

### MusicState find_state_ignoring_case( state_name: String ) {#method-find-state-ignoring-case}

The state called this, ignoring case (the Combat state the party's fight asks for)

### MusicStinger get_stinger( stinger_name: String ) {#method-get-stinger}

*No description yet.*

### String resolve_start_state( asked: String = "" ) {#method-resolve-start-state}

The state the music starts in: the one asked for, else its own start state, else the first state

### MusicTransition find_transition( from: String, to: String ) {#method-find-transition}

The rule for changing from one state to another: the most specific that fits, else the default

### PackedStringArray get_part_names() {#method-get-part-names}

*No description yet.*

### PackedStringArray get_state_names() {#method-get-state-names}

*No description yet.*

### PackedStringArray get_paths() {#method-get-paths}

Every file the music can play (the parts, their layers and the stingers): what the world preloads

### PackedStringArray validate() {#method-validate}

The warnings of this music (shown by the editor)

