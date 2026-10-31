<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ShelterVolume

**Inherits:** [SpaceVolume](/advanced/world/runtime/space-volume) < [Area3D](https://docs.godotengine.org/en/stable/classes/class_area3d.html)

A place that keeps the weather off: a cabin, a cave, a tent, a porch. Put it in a world scene (Add Object &gt; Volumes &gt; Shelter volume), give its CollisionShape3D the shape of the place and choose a ShelterProfile (what the shelter is: how much it keeps off, its sound, whether it stops the effects of the weather). While the camera is inside, the weather weakens on the screen, the sound of the shelter plays and its audio profile muffles the world; while an entity is inside it does not get the exposed effects of the weather (if the profile protects).

## Description

It only measures: rain stays off a roof by itself (the weather's particles land on any solid mesh). It does not touch anyone.

## Properties

| | | |
|---|---|---|
| `ShelterProfile` | [profile](#prop-profile) | `null` |
| `float` | [amount_override](#prop-amount-override) | `-1.0` |

## Methods

| | |
|---|---|
| `float` | [get_amount](#method-get-amount)() |
| `bool` | [protects_from_effects](#method-protects-from-effects)() |

## Constants

- `float` **CHECK_INTERVAL** = `0.1` - How often (seconds) the camera is checked, for the audio profile of the shelter
- `StringName` **GROUP** = `&"shelter_volumes"` - The group every shelter volume is in (Shelter looks them up there)

## Property descriptions

### ShelterProfile profile = null {#prop-profile}

What kind of shelter this is. A new volume has none until you choose one

### float amount_override = -1.0 {#prop-amount-override}

Use this number instead of the one of the profile (0 to 1); -1 = the profile's

## Method descriptions

### float get_amount() {#method-get-amount}

How much of the weather this shelter keeps off (0 to 1)

### bool protects_from_effects() {#method-protects-from-effects}

Does it stop the exposed effects of the weather for whoever is inside?

