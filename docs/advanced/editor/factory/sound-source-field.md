<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SoundSourceField

**Inherits:** [ConfigField](/advanced/editor/factory/config-field) < [HBoxContainer](https://docs.godotengine.org/en/stable/classes/class_hboxcontainer.html)

The field of a SoundSource property (the music, the combat music or the ambience of a world, a zone, a weather or an encounter): None, a Track (chosen in the track window of the audio library, with its loop, the pause between plays, the volume and the fade) or an Album (a Music Album or a Combat Music Album of the project). It edits the source in place and creates it when the first choice is made. **Different at night** adds a second source of its own (another field, inside this one) that plays from sunset to sunrise (see TimeOfDay); the night source of a night source is not offered. Set **Track kind** (music or ambient sounds in the track window), **Album kind** (music or combat albums) and **Allow album** (ambience has tracks only; a source that cannot be an album cannot be a Dynamic Music either) in the inspector.

## Properties

| | | |
|---|---|---|
| `TrackSelectionDialog.Kind` | [track_kind](#prop-track-kind) | `TrackSelectionDialog.Kind.MUSIC` |
| `SoundAlbum.AlbumKind` | [album_kind](#prop-album-kind) | `SoundAlbum.AlbumKind.MUSIC` |
| `bool` | [allow_album](#prop-allow-album) | `true` |
| `bool` | [allow_night](#prop-allow-night) | `true` |

## Property descriptions

### TrackSelectionDialog.Kind track_kind = TrackSelectionDialog.Kind.MUSIC {#prop-track-kind}

Which tracks of the library the track window shows

### SoundAlbum.AlbumKind album_kind = SoundAlbum.AlbumKind.MUSIC {#prop-album-kind}

Which albums the album list shows

### bool allow_album = true {#prop-allow-album}

Can the source be an album? (Ambient sound is a track only)

### bool allow_night = true {#prop-allow-night}

Can the source have a different version for the night? (The night version itself cannot)

