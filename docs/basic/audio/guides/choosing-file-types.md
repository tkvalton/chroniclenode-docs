# 2. Choosing file types

::: info Status
Written from the fields of the editors and the reference pages. Not yet checked step by step in the editor, and the music has not been listened to in a game.
:::

Sound files come in three formats the toolkit accepts: **Ogg Vorbis** (`.ogg`), **MP3** (`.mp3`) and **WAV** (`.wav`). This guide says which to use for what, and why, so your game is small, loads quickly and loops without a click.

**Time:** about 10 minutes of reading; nothing to build.

## The short version

| Sound | Use | Why |
|---|---|---|
| **Music** | **Ogg** (or MP3) | Much smaller than WAV. Loops cleanly (Ogg). **Required for [Dynamic Music](/basic/audio/dynamic-music)** |
| **Ambience loops** (rain, wind, a crowd) | **Ogg**, or **WAV** if short and it must loop with no gap | A long loop in WAV is large; Ogg is small and loops cleanly |
| **Short effects** (hits, footsteps, clicks) | **WAV** | Needs no decoding, plays at once |
| **Voice lines** | **Ogg**, mono | Many files, mostly speech: small matters |
| **Stingers** | **Ogg** or **WAV** | Short; either works |
| **Layers (stems) of a Dynamic Music** | **Ogg** | Same format and length as the part |

## Ogg, MP3, WAV

- **Ogg Vorbis** is the all-rounder. Small, free of licences, loops with no gap. Choose it for anything longer than a few seconds.
- **MP3** also works, but it can leave a **small gap when it loops** (the format pads the ends), so keep it for sounds that play once. For Dynamic Music MP3 is accepted.
- **WAV** is uncompressed: biggest, fastest. Use it for short sounds that play very often. **A WAV has no place for a tempo**, so it cannot be used in a Dynamic Music (the editor warns).

## Mono or stereo

- **Mono** for a sound that comes from a place in the world (a footstep, a door, a spell, a 3D sound): the position and the distance give it its direction, and a stereo file would fight with that.
- **Stereo** for music and ambience that fill the room.

## Loops

A sound that repeats must be made to repeat: the end of the file must join its start without a click. Make it in your sound editor (a short crossfade of the ends works) and listen to it end to end. Then:

- Where you **use** the sound, set **Loop** (a [sound source](/basic/audio/music-albums#a-sound-source) has it; an album has its own loop). The folder (`loop/` or `non_loop/`) only helps you sort.
- For a **3D sound** the Loop is on the [sound node](/basic/world/3d-sounds).

## Loudness

Leave a little room (peaks around -3 dB) and give the same kind of sound the same loudness: all music alike, all footsteps alike. The volume of a [sound selection](/basic/audio/guides/how-audio-is-chosen) or a source can fine-tune, but it is easier to fix it in the file.

## Size

Audio is often the largest part of a build. The [Build Size](/basic/assets/build-size) tab lists the files and advises: a long WAV should be Ogg, a short stereo footstep can be mono, and short sounds can be compressed with Godot's QOA. Use it before you ship.

## What next

[How audio is chosen](/basic/audio/guides/how-audio-is-chosen). The reference: [Supported files and best practice](/basic/assets/file-types#audio).
