<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SoundAlbum

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A collection of tracks that play one after the other: the music of a world, a zone or a weather, or the music of a fight. An album is a database kind (Assets &gt; Music Albums) of two kinds, **Music** and **Combat Music**. It says in which order the tracks play (in order, shuffled so every track plays before one repeats, truly random, or by the weight of each track), the time between two tracks, whether the album starts again when it is over, and how the tracks fade. A world, a zone, a weather and an encounter choose an album through a SoundSource. See docs: Assets &gt; Albums.

## Properties

| | | |
|---|---|---|
| `AlbumKind` | [album_kind](#prop-album-kind) | `AlbumKind.MUSIC` |
| `PlayOrder` | [play_order](#prop-play-order) | `PlayOrder.SHUFFLE` |
| `Array[AlbumTrack]` | [tracks](#prop-tracks) | `[]` |
| `float` | [gap_min](#prop-gap-min) | `0.0` |
| `float` | [gap_max](#prop-gap-max) | `0.0` |
| `bool` | [loop_album](#prop-loop-album) | `true` |
| `float` | [volume_db](#prop-volume-db) | `0.0` |
| `float` | [fade_seconds](#prop-fade-seconds) | `-1.0` |
| `bool` | [restart_each_fight](#prop-restart-each-fight) | `true` |

## Methods

| | |
|---|---|
| `PackedStringArray` | [get_paths](#method-get-paths)() |
| `AlbumCursor` | [make_cursor](#method-make-cursor)( `rng: RandomNumberGenerator` ) |
| `float` | [roll_gap](#method-roll-gap)( `rng: RandomNumberGenerator` ) |
| `PackedStringArray` | [validate](#method-validate)() |

## Enumerations

### enum AlbumKind {#enum-albumkind}

The two kinds of album: the pickers show the albums of the kind they need

- **MUSIC** = `0`
- **COMBAT** = `1`

### enum PlayOrder {#enum-playorder}

How the next track is chosen

- **IN_ORDER** = `0`
- **SHUFFLE** = `1`
- **TRUE_RANDOM** = `2`
- **WEIGHTED** = `3`

## Property descriptions

### AlbumKind album_kind = AlbumKind.MUSIC {#prop-album-kind}

Music (the music of a place) or Combat Music (the music of a fight)

### PlayOrder play_order = PlayOrder.SHUFFLE {#prop-play-order}

In order: the list from the top. Shuffle: every track plays once, in a new random order, before any plays again. True random: any track, the same one may come twice in a row. Weighted: any track, by its weight

### Array[AlbumTrack] tracks = [] {#prop-tracks}

The tracks

### float gap_min = 0.0 {#prop-gap-min}

The silence between two tracks, in seconds (a random time between the two; 0 = the next track follows at once)

### float gap_max = 0.0 {#prop-gap-max}

*No description yet.*

### bool loop_album = true {#prop-loop-album}

When every track has played, start again (on) or stop (off: the music of the place below takes over)

### float volume_db = 0.0 {#prop-volume-db}

How loud the album is (dB)

### float fade_seconds = -1.0 {#prop-fade-seconds}

The seconds one track fades into the next, and the seconds the album takes to come in (-1 = the project's default)

### bool restart_each_fight = true {#prop-restart-each-fight}

Combat music only: the combat music plays from the beginning each fight (on) or goes on where it was (off)

## Method descriptions

### PackedStringArray get_paths() {#method-get-paths}

The files of the album (the ones that have a path)

### AlbumCursor make_cursor( rng: RandomNumberGenerator ) {#method-make-cursor}

A cursor that picks the tracks of this album one by one

### float roll_gap( rng: RandomNumberGenerator ) {#method-roll-gap}

The silence before the next track, picked now (seconds)

### PackedStringArray validate() {#method-validate}

The warnings of this album (shown by the editor)

