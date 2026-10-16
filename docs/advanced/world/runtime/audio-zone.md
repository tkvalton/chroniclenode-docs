<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AudioZone

**Inherits:** [SpaceVolume](/advanced/world/runtime/space-volume) < [Area3D](https://docs.godotengine.org/en/stable/classes/class_area3d.html)

A place that changes how the world sounds while the camera is inside it: a cave with echo, a house that muffles the weather outside, a tunnel. Put it in a world scene (Add Object &gt; Add Audio Zone), give its CollisionShape3D the shape of the place, and choose an AudioProfile: for each audio channel (music, sound effects, voices, ambiance, interface sounds) how muffled it is, how much louder or quieter, and how much reverb. The sound fades between the places.

## Description

It only listens to the camera: it never touches a character. For a place that also changes how characters move (water), see MovementVolume, which uses the same profiles.

## Properties

| | | |
|---|---|---|
| `AudioProfile` | [profile](#prop-profile) | `null` |

## Constants

- `float` **CHECK_INTERVAL** = `0.1` - How often (seconds) the position of the camera is checked

## Property descriptions

### AudioProfile profile = null {#prop-profile}

The sound inside. A new zone starts with the Cave profile; make your own or change this one

