<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AlbumCursor

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Picks the tracks of a SoundAlbum one at a time, in the order the album says. It remembers what played, so a shuffle plays every track before one comes again, and says when the album is over (a looping album is never over).

## Variables

| | | |
|---|---|---|
| `bool` | [night](#var-night) | `false` |

## Methods

| | |
|---|---|
| `AlbumTrack` | [next](#method-next)() |
| `bool` | [is_finished](#method-is-finished)() |
| `void` | [reset](#method-reset)() |

## Variable descriptions

### bool night = false {#var-night}

Is it night? The tracks that play by day or by night only are left out of the round when they do not fit (the AudioManager changes it when the sun goes down; the track that plays goes on to its end)

## Method descriptions

### AlbumTrack next() {#method-next}

The next track, or null when the album is over (it does not loop) or has nothing to play

### bool is_finished() {#method-is-finished}

True once the album has played every track and does not loop

### void reset() {#method-reset}

Starts the round again (a fight that begins again from the first track)

