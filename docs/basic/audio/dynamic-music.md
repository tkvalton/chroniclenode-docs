# Dynamic Music

**Dynamic Music** is music that changes with the game. An ordinary track or [album](/basic/audio/music-albums) plays what it is told and nothing more; a Dynamic Music has several **parts** (pieces of music), and the game switches between them by **state**: *Explore*, *Combat*, *Boss, second phase*, *Victory*. It changes at the right moment of the music (on the next beat or bar), with a fade or a bridge, so the change sounds composed and not cut.

You make them in **Audio > Dynamic Music**. A Dynamic Music is played like any other music: it is one of the choices of a [sound source](/basic/audio/music-albums#a-sound-source) (**None**, **Track**, **Album**, **Dynamic**), so a world, a zone, a weather, an encounter, an event or a menu can play one. The new things are what changes its state.

::: warning Ogg or MP3
A Dynamic Music needs **Ogg Vorbis** or **MP3** files. A transition waits for "the next bar", and for that the music needs a tempo, which the toolkit puts on the file when it plays it; a WAV has no place for one. The editor warns about a WAV part. See [Choosing file types](/basic/audio/guides/choosing-file-types).
:::

## The ideas

| Word | What it is |
|---|---|
| **Part** | One piece of music (a file) with its **tempo** (beats per minute and beats per bar). It can loop, or play once and be followed by another part |
| **Layer** | A stem that plays **with** a part, in sync, and fades in and out with the intensity: drums that come in when a fight begins. It must be as long as the part, with the same tempo |
| **State** | A name the game asks for. A state plays one part. Several states can play the same part (*Explore* and *Tense* can both play the exploration music, *Tense* with the drums on) |
| **Intensity** | A number from 0 to 1. A layer plays when the intensity is at least its **from intensity** |
| **Transition** | The rule for changing from one state to another: **when** the old part leaves (now, the next beat, the next bar, or its end), **where** the new part starts, the **fade**, and an optional **bridge** part between the two |
| **Stinger** | A short sound that plays over the music to mark a moment, and lowers the music while it plays |

Why parts and layers: the two things composers do. **Layers** (vertical) make the *same* music thicker or thinner without a seam. **Parts and states** (horizontal) go to *different* music. Parts of the same tempo can change on the beat; parts of a different tempo cannot "continue" into each other, so the old part leaves at the end of its bar and the new part starts from its beginning, with a cross fade or a bridge to hide the join.

## The tab

The list is on the left (**New**; right-click for **Duplicate**, **Delete** and **Copy Path**), the settings on the right in containers. The template project has a small one to open and play with: **Demo: explore and fight**.

| Container | Field | What it does | Default |
|---|---|---|---|
| **Music** | **Start state** | The state the music starts in when its source does not name one. None = the first state | the first state |
| | **Volume** | How loud the music is, on top of the part's volume | 0 dB |
| | **Layer fade** | The seconds the layers take to fade in and out when the intensity changes | 1.5 s |
| | **Start intensity** | The intensity the music starts with, which decides what layers play | 0 |
| **Preview** | **Play**, **Stop** | Listen to the music in the editor, through the Music bus, as the game plays it. **Play** starts it in its start state. The music is read when you press Play: after a change, press Stop and Play again | |
| | **Intensity** | A slider: the layers whose "plays from intensity" is at most this fade in | 0 |
| | **Go to a state** | A button for each state: it changes the state by the rule of the music for that change, so you hear the transitions | |
| | **Play a stinger** | A button for each stinger | |
| **Parts** | **Name** | The part's name. States, rules and *Then* refer to it | |
| | **File** | An Ogg or MP3 file of the [audio library](/basic/audio/sound-library). **...** opens the track window (with **Import files...**) | |
| | **Tempo**, **Beats per bar** | Beats per minute, and beats in a bar (4 for 4/4, 3 for waltz time). The transitions wait for the next beat or bar by these | 120, 4 |
| | **Loop** | The part plays again when it ends (on), or once (off) | on |
| | **Then** | When the part does not loop: the part that follows. None = the music ends and the music below takes over | none |
| | **Volume** | How loud the part is | 0 dB |
| | **Layers** | A list of stems: **Name**, **File**, **Volume**, **Plays from intensity** (0 = always) | none |
| **States** | **Name** | The name the game asks for. A state called **Combat** is chosen by itself while the party fights, and states called **Day** and **Night** by the sun (see [Day and night](#day-and-night)) | |
| | **Plays** | The part that plays in the state | the first part |
| | **Intensity** | The intensity the music goes to when the state starts. -1 = leave it as it is | -1 |
| **Transitions** | **Default transition** | The rule for a change that no rule below fits | at the next bar, cross fade 2 beats |
| | **Rules** | **From state**, **To state** (empty = any), **The old part leaves**, **The new part starts**, **Fade**, **Fade length**, **Bridge part** | |
| **Stingers** | **Name**, **Sound**, **Volume**, **Lower the music by** | A short sound; the music is lowered by this much while it plays | 6 dB |
| **Warnings** | | What is probably a mistake: a WAV file, a part with no file or no tempo, a state whose part does not exist, a start state or a rule or a bridge that does not exist, two parts or states with the same name | |

### Transition rules

| Field | Choices |
|---|---|
| **The old part leaves** | *Immediately*; *At the next beat* and *At the next bar* (of the old part); *At the end of the part* |
| **The new part starts** | *From the start* (always right for parts of a different tempo); *At the same position* (for two parts of the same length and tempo, so the music continues) |
| **Fade** | *None (a cut)*; *Cross fade*; *Fade out, then in* (the old part fades out and then the new one starts); *Fade in* (the new part fades in over the old) |
| **Fade length** | In beats of the old part |
| **Bridge part** | A part that plays between the two: a drum fill, a riser. The new part starts when the bridge ends |

Under the groups, **Used by** lists where the music is chosen (the music, combat music or ambience of a world, a zone, a weather and an encounter, an event that sets the music, the Gameplay Config's menu music).

The rule that is used is the **most specific** one that fits the change: a rule for *Explore to Combat* beats a rule for *any to Combat*, which beats the default transition.

## Playing it

Choose **Dynamic** in a sound source, then the music and the state it starts in (or leave it on *the start state of the music*).

| Where | What happens |
|---|---|
| A **world**, a **zone** or a **weather** | The music plays as the music of the place. While the **party is in combat** it goes to its state called **Combat** (if it has one); when the fight is over it goes back to its start state |
| An **encounter** (its **Combat music**), or the **combat music** of a zone or the world | The music plays while the party fights it, with its own states. The party's combat state does **not** switch it: the fight drives it (a [boss phase](#a-boss-phase) or an event). It ends with the fight |
| An **event** (Set Music Track) | It plays as the music of the event layer |
| A **menu** | [Menu music](/basic/audio/music-albums#menu-music) can be a Dynamic Music too |

The [sound layers](/basic/world/sound-layers) decide which one plays, as always. A track or an album from a higher layer stops it; when that layer goes, the Dynamic Music starts again in its start state.

### Changing the state

| Who | How |
|---|---|
| An **event** | **Set Music State** (the state, and optionally the Dynamic Music: a music that is not the one that plays is started in that state as the music of the event), **Set Music Intensity** (0 to 1), **Play Stinger** (the stinger by name). See [Event actions](/basic/events-and-quests/event-actions) |
| A **combat action** | The same three: **Set Music State**, **Set Music Intensity** and **Play Stinger**, for the **on enter actions** of a [boss phase](/basic/behaviors/combat-scripts#phases-boss-fights) or any combat script |
| The **party's combat state** | A state called **Combat** is chosen by itself (world, zone and weather music only) |

### A boss phase

The phases of a boss ([Combat scripts](/basic/behaviors/combat-scripts#phases-boss-fights)) run their **on enter actions** when they start. Put **Set Music State** in them: phase one enters *Phase 1*, phase two (health below 50 %) enters *Phase 2*, and the music follows the fight. The Dynamic Music is the **Combat music** of the encounter, so it ends with the fight and the music of the place comes back.

## Day and night

A Dynamic Music that has states called **Day** and **Night** follows the sun (the Sun config of the world: night is from the sunset to the sunrise):

- It **starts** in the state of the time when its source names no start state.
- When the sun **sets or rises** it goes to the other one, if it is in its Day or Night state.
- A **fight** still takes it to Combat, and when the fight is over it goes back to the state of the time.
- A source that names a **start state**, and an event that asks for a state (**Set Music State**), are not changed by the sun: the music stays in the state that was asked for.

## Hearing it without the game

The **Preview** container of the tab plays the music that is open. Press **Play**, move the **Intensity** slider to bring the layers in and out, press the buttons of the states to hear the transitions (a change waits for the beat or bar of its rule, so it may take a moment), and press a stinger to hear it over the music. It stops when you leave the tab.

The music of the template (**Demo: explore and fight**) is made from the ambient pieces of the template project, which have no real tempo, so its tempo of 60 is only an example. It shows how the pieces fit: an *Explore* part with a *Blizzard* layer that comes in at intensity 0.6, a *Fight* part, the states *Explore*, *Tense* (the same part with the layer) and *Combat*, a rule into *Combat* and a *Hit* stinger. Replace the files and the tempo with your own music.

## Good to know

- **The tempo is in the music, not in the file.** You give each part its tempo in the editor; the file needs no tempo. Get it right (a DAW shows it), because the beat and bar transitions use it.
- **Layers must match the part**: the same length, the same tempo. Export the stems of a piece from your DAW over the same range.
- **A part that does not loop and has no *Then* ends the music**; the music below takes over (the music of the place, or silence).
- **Two Dynamic Musics cross fade into each other**: when one replaces another (a zone with its own), the old one fades out on a player of its own while the new one fades in, over the **Fade** of the source that starts.
- **Ambient sound cannot be a Dynamic Music** (it is a track).
- The files are loaded with the rest of the world's sound ([Loading](/basic/audio/music-albums#loading)); the stingers too.
- **A stinger** can be played when no Dynamic Music plays, if the action names the music; the stinger plays and nothing is lowered.

## See also

- [The guides](/basic/audio/guides/): [A boss fight with dynamic music](/basic/audio/guides/a-boss-fight-with-dynamic-music) and [Music that follows the story](/basic/audio/guides/music-that-follows-the-story).
- [Music Albums](/basic/audio/music-albums), [Sound layers](/basic/world/sound-layers), [Encounters](/basic/world/encounters#combat-music).
