<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AmbientSound

**Inherits:** [AudioStreamPlayer3D](https://docs.godotengine.org/en/stable/classes/class_audiostreamplayer3d.html)

A sound that comes from a place in the world: a waterfall, a campfire, a market, wind in a ruin. It is an ordinary 3D audio player that is already set up the way the toolkit wants it: it plays on the **Ambiance** channel (so the ambiance volume of the player and the audio zones and the underwater muffle change it), it starts by itself, it keeps looping, and it stops with the pause menu and follows the time scale like the other sounds of the game.

## Description

Change its Bus for a sound that is not ambient (SFX for a machine that clanks). A plain AudioStreamPlayer3D works too, as long as its Bus is set to Ambiance (or another channel of the toolkit). On the default Master bus it ignores the volume sliders of the player and the audio zones.

## Properties

| | | |
|---|---|---|
| `bool` | [loop](#prop-loop) | `true` |

## Property descriptions

### bool loop = true {#prop-loop}

Play the sound again when it ends (for a stream that does not loop by itself)

