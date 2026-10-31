# Shelters

A **shelter** is a place that keeps the weather off: a cabin, a cave, a tent, a porch. It is made of two things:

- a **shelter profile**: what *kind* of shelter it is (a wooden cabin, a tent): how much of the weather it keeps off, whether it stops the effects of the weather, how it changes the sound and which sound plays inside for each kind of weather. You make profiles in **World > Shelters** and write each one once;
- a **shelter volume**: the *place*, put in the world with a box (or any shape) over the room, and a profile chosen for it.

Rain already stays off a roof by itself: the particles of the weather land on any solid mesh, so a roof, a floor or the stone over a cave stops them. A shelter does the rest: it weakens the **screen look** of the weather for the camera, plays the **sound of the inside**, and keeps the **exposed effects** of the weather off whoever stands in it.

## What a shelter does

| While... | The shelter |
|---|---|
| the **camera** is inside | weakens the screen look of the weather by its **amount** (the dark corners, the grey, the tint of the storm), plays its **audio profile** (a muffled world) and the **sound for the weather** that is on (the rain on the roof) |
| an **entity** is inside | stops the [exposed effects](/basic/world/weather#exposed-effects) of the weather for it (a burn, a Wet debuff), if the profile says so |
| nobody is inside | nothing: it only measures |

Entering and leaving blend smoothly: the screen look fades over about half a second, the sound over a second and a half.

## The Shelters tab

**World > Shelters** is the editor of the shelter profiles: the list on the left (with a filter box and **New**; right-click for **Duplicate**, **Delete** and **Copy Path**; the built-in **Default shelter** is always there and cannot be deleted), the settings on the right in a container for each group.

| Group | Field | What it does | Default |
|---|---|---|---|
| **Shelter** | **How much it keeps off** | How much of the screen look of the weather is kept off (0 to 1). A tent 0.6, a porch 0.8, a cabin or a cave 1 | 1 |
| | **Stops weather effects** | Do the exposed effects of the weather stop for whoever is inside? Off for a tent that keeps the rain off but not the cold | on |
| **Sound** | **Audio profile** | How the sound changes while the camera is inside (the muffle of the world outside, an echo): an [audio profile](/basic/world/audio-zones#the-audio-profile). Empty = it does not change | none |
| | **Weather sounds** (a list) | A track for each kind of weather: see below | empty |

The **Warnings** container lists what is probably a mistake: a weather sound with no kind or no track, a track that is not in the project, two lines for the same kind.

Three profiles come with the toolkit: **Wooden cabin** (all kept off, a muffled outside), **Cave** (all kept off, an echo) and **Tent** (0.6, effects not stopped, no muffle).

### The sound for each kind of weather

The *rain on the roof* is not the rain you hear outside, so a shelter has its own track for each **kind** of weather. Each entry of the **Weather sounds** list has:

| Field | What it does |
|---|---|
| **Kind of weather** | A word: `rain`, `snow`, `wind`, `sand` ... |
| **Track** | The ambience track that plays inside (an audio file; **...** opens the file window) |
| **Volume** | How loud the track is (dB) |

A weather lists the **kinds of sound** it makes in the **Sound** container of the [Weather tab](/basic/world/weather#sound) (`rain`; or for sleet `rain, snow`). Inside the shelter the first kind the profile has a line for plays. A weather the shelter has no line for (a kind it does not know) plays nothing extra: the sound of the weather outside goes on, muffled by the audio profile.

## Putting a shelter in the world

1. Open the world scene, click the **Volumes** button of the placement palette and choose **Shelter volume**, then click where it goes. A volume with a box of 10 × 4 × 10 and the **Default shelter** appears.
2. Resize the `CollisionShape3D` inside it (a box, a sphere, a cylinder or a capsule) over the room.
3. In the [Unique Object panel](/basic/world/unique-object-tool#volumes) choose its **Profile** (the Wooden cabin, the Cave ...). **Amount override** (-1 = the profile's) gives this one volume a number of its own.

If a point is inside several shelters the one that keeps off **most** counts.

::: tip A shelter is not a roof
A shelter volume does not stop rain. Put the volume where a roof or ceiling already is. A volume without a roof over it looks sheltered on the screen and sounds sheltered, but the rain still falls through where there is nothing to catch it.
:::

## Asking whether the party is sheltered

The condition **Sheltered** (`ShelteredCondition`, in the general conditions) is met when the camera is inside a shelter that keeps off at least **At least** of the weather (0.5 by default). Set **Sheltered** off for "in the open" (the party is *not* under a roof): a storm quest that waits for the party to come outside, or a camp that can only be made indoors.

## For developers

`Shelter` answers the questions: `Shelter.volume_at(tree, point)`, `Shelter.amount_at(tree, point)`, `Shelter.protects_at(tree, point)` and `Shelter.amount_at_camera()`. The weather system follows the camera four times a second (`WeatherSystem.track_shelter()`), sets `shelter_amount` (the screen look) and emits `shelter_changed(volume)`. See [Weather, shelters and sound: how they are built](/advanced/world/weather-shelter-sound).

Related: [Weather](/basic/world/weather), [Audio zones](/basic/world/audio-zones), [Sound layers](/basic/world/sound-layers).
