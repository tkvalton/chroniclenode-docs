# Audio zones

An **audio zone** is a place that changes how the world **sounds** while the camera is inside it: a cave with an echo, a house that muffles the wind outside, a tunnel. Walk in and the sound fades to the new mix; walk out and it fades back. The same sound change is used under water by the [movement volumes](/basic/world/movement-volumes#the-camera-and-the-sound).

A zone only listens to the **camera**. It never touches a character, so it costs nothing for the NPCs.

## The audio channels

The toolkit plays its sound on five **channels** (audio buses). Each has its own volume slider in the game's [settings](/basic/game-settings/settings#audio), and a zone can change each one separately:

| Channel | What plays on it |
|---|---|
| **Music** | The music of the worlds and of combat |
| **Sound effects** | Footsteps, abilities, hits, anything in the world, and global sound effects |
| **Voice** | The barks of the characters and the voice lines of conversations |
| **Ambiance** | The ambient loops of a world (wind, birds, a distant crowd) |
| **Interface** | The sounds of the UI: clicks, windows, notifications, level up |

The interface has a channel of its own, so a zone that muffles the world **never muffles a click**, and a player can turn the interface down without touching the effects.

## Placing one

1. Open the world scene, click the **Volumes** button and choose **Audio zone: cave** (or *indoors*), then click where it goes. A zone appears in the *Volumes* node with a box shape of 10 × 4 × 10 and the **Cave** profile.
2. Resize the `CollisionShape3D` inside it (a box, a sphere, a cylinder or a capsule) over the place, and move the zone there.
3. Change the **profile** (below) if the cave is not what you want.

If the camera is inside several zones (a cellar in a house) the one it **entered last** decides, and the earlier one comes back when it leaves.

## The audio profile

In the [Unique Object panel](/basic/world/unique-object-tool#volumes) an audio zone shows its profile in full (the page **Sound**): a **Preset** menu (**Cave**, **Indoors**, **Underwater**, **Large hall**, **Muffled** and your own), the fade time and room size, and for each of the five channels how muffled it is, how loud and how much reverb. Choosing a preset gives the zone a **copy** of it; **Save as preset...** keeps the profile of the zone as a preset of the project (a file in `res://src/data/audio_profiles/`), **Delete preset** removes one of yours. A [movement volume](/basic/world/movement-volumes) shows the same box in its page **Sound**.

A zone has one **profile**: a resource that says what each channel does inside. You can use the three the toolkit gives you, change them, or make your own (a *Create New Resource > AudioProfile*, saved as a file you reuse in many zones).

| Field | What it does | Default |
|---|---|---|
| **Fade time** | Seconds the sound takes to change when the camera enters or leaves, so there is no click | `0.3` |
| **Reverb room size** | How big the room of the reverb is: a closet to a cavern | `0.5` |

Then, for each channel (music, sound effects, voice, ambiance, interface):

| Field | What it does | Default |
|---|---|---|
| **Low pass Hz** | Frequencies above this are cut: the lower, the more muffled. The top value (`20500`) cuts nothing | `20500` |
| **Volume dB** | Added to the volume of the channel. Negative is quieter | `0` |
| **Reverb** | How much echo the channel gets. `0` = none | `0` |

A channel with the defaults is **left alone**.

### The profiles that come with the toolkit

| Profile | What it does |
|---|---|
| **Underwater** | The world is muffled: low-pass between 500 and 1200 Hz on every world channel and a little quieter. The interface is untouched. It is the profile of the *Water* preset of a [movement volume](/basic/world/movement-volumes) |
| **Cave** | An echo (large room) on the effects, voices and ambiance, a duller ambiance and a little less music |
| **Large hall** | A very long echo on everything the room makes: the sound of a cathedral |
| **Muffled** | The world dull and quiet, as heard through a wall; the interface is not touched |
| **Indoors** | A short reverb on the effects and voices, the ambiance of the outside muffled and 6 dB quieter, the music slightly softer at the top |

## The player's volume

The profile **never changes the volume the player chose**. It adds effects on top of the buses (a filter, a volume offset, a reverb) and takes them off again when the camera leaves, so the sliders in the settings mean the same inside a cave as outside.

## Sounds that come from a place

For a waterfall, a campfire or a market, add an **AmbientSound** node (Godot's *Add Node*, search "AmbientSound") and give it a sound file. It is a normal Godot 3D audio player that is already set up for the game:

| It already | So |
|---|---|
| Plays on the **Ambiance** channel | The ambiance volume of the player changes it, and the audio zones and the underwater muffle apply to it |
| Starts by itself and **loops** | No script needed (*Loop* plays it again when a file does not loop by itself) |
| Pauses with the pause menu and follows the **time scale** | Like the other sounds of the game |
| Has a range (*Max distance* 40, *Unit size* 8) | Change them as on any 3D player |

A plain Godot `AudioStreamPlayer3D` works too, **as long as its Bus is one of the channels** above. On the default **Master** bus it ignores the sliders of the player and every audio zone, so set the Bus to *Ambiance* (or *SFX*, *Voice*). For a sound that is not ambient, set the Bus of the AmbientSound to *SFX*.

## Good to know

- The **top** of the zone does not matter: a zone is a box (or sphere...) the camera is either in or not. For water, where the camera must be **under the surface**, use a [movement volume](/basic/world/movement-volumes) with its *Audio profile*.
- A zone with **no profile** does nothing, and the editor warns about it. So does a zone with no shape.
- The interface sounds used to play on the sound-effects channel. They now play on the **Interface** channel. A project made before this keeps its settings; the interface volume setting (*UI volume*) is in the player's settings with the others.

See [Audio zones: how they are built](/advanced/world/audio-zones) for the details.
