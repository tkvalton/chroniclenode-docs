<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SfxCache

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The loaded gameplay sounds (abilities, footsteps, voices), taken out of AudioManager. The cache is a plain dictionary that AudioManager owns (`gameplay_sfx_cache`): category -&gt; type -&gt; [streams], "footsteps" -&gt; entity type -&gt; surface -&gt; movement -&gt; [streams], "voices" -&gt; entity type -&gt; voice -&gt; call -&gt; [streams]. This class fills it from the audio library (DatabaseAudio) and looks sounds up in it.

## Methods

| | |
|---|---|
| `void` | [load_all](#method-load-all)( `cache: Dictionary` ) *static* |
| `void` | [load_footsteps](#method-load-footsteps)( `cache: Dictionary` ) *static* |
| `void` | [load_voices](#method-load-voices)( `cache: Dictionary` ) *static* |
| `AudioStream` | [find_sfx](#method-find-sfx)( `cache: Dictionary, category: String, type: String` ) *static* |
| `AudioStream` | [find_footstep](#method-find-footstep)( `cache: Dictionary, entity_type: String, surface: String, movement: String` ) *static* |
| `AudioStream` | [find_voice](#method-find-voice)( `cache: Dictionary, voice: String, action: String` ) *static* |
| `bool` | [has_voice](#method-has-voice)( `cache: Dictionary, voice: String, action: String` ) *static* |

## Constants

- `Array[String]` **GAMEPLAY_CATEGORIES** = `["cast_sfx", "hit_sfx", "buffs_sfx", "debuffs_sfx", "shoot_sfx", "casting_sfx...` - The categories of the sounds of abilities and effects

## Method descriptions

### void load_all( cache: Dictionary ) {#method-load-all}

Loads every gameplay sound from the audio library into the cache

### void load_footsteps( cache: Dictionary ) {#method-load-footsteps}

Loads the footstep sounds into the cache

### void load_voices( cache: Dictionary ) {#method-load-voices}

Loads the voice sounds into the cache

### AudioStream find_sfx( cache: Dictionary, category: String, type: String ) {#method-find-sfx}

A random sound of a category and type, or null

### AudioStream find_footstep( cache: Dictionary, entity_type: String, surface: String, movement: String ) {#method-find-footstep}

A random footstep of an entity type, a surface and a movement, or null

### AudioStream find_voice( cache: Dictionary, voice: String, action: String ) {#method-find-voice}

A random sound of a call of a voice ("entity type/variant"), or null

### bool has_voice( cache: Dictionary, voice: String, action: String ) {#method-has-voice}

Does the voice have a sound for this call?

