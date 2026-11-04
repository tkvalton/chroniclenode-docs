# 3D sounds

A **3D sound** comes from a place in the world: a waterfall, a campfire, a market, wind in a ruin, a bell. It gets quieter with the distance, and it is heard from the side it is on. The toolkit's node for it is the **AmbientSound** (an audio player already set up for the game), and there are two ways to put one in the world.

## Placing one

Open the world scene, open the Add Object palette, choose **Volumes** and click **Sound (3D)**, then click where the sound comes from. A sound node appears in a **Sounds** container of the scene. Select it and the Unique Object panel shows its settings:

| Setting | What it does | Default |
|---|---|---|
| **Sound path** | The sound: a file of the [audio library](/basic/assets/audio). **...** opens the track window with the **environmental** sounds (the library's 3D sounds: a waterfall, a fire, a mechanism), the ambient sounds and the loops, with a preview. The scene keeps the path, so the node stays small | empty (the node warns) |
| **Loop** | The sound plays again when it ends | on |
| **Delay min**, **Delay max** | The silence before it plays again, a random time between the two (0 = at once). A fire that crackles in bursts, a bird now and then | 0 |
| **Pitch variation** | Each play is higher or lower by a random amount up to this (0 = always the same; 0.1 = up to 10 percent either way) | 0 |
| **Sound name** | The name an event can stop the sound by | empty |
| **Max distance**, **Unit size**, **Volume db** | How far it can be heard, the distance where it starts to fade and how loud it is (the node's own settings) | 40 m, 8, 0 dB |

The editor draws the range of the sound as a sphere when the node is selected. The sound plays on the **Ambiance** channel, so the ambiance volume of the player, the [audio zones](/basic/world/audio-zones) and the underwater muffle change it. Change the node's **Bus** to *SFX* for a sound that is not ambient (a machine that clanks).

## From an event

The [Spawn Sound](/basic/events-and-quests/event-actions) action makes a 3D sound while the game runs, and [Stop Sound](/basic/events-and-quests/event-actions) takes it away:

| Setting of Spawn Sound | What it does |
|---|---|
| **Sound** | Any sound effect: an ability sound, an environmental sound, an [interface sound](/basic/assets/audio#interface-sounds), a loop. Its volume, pitch and range are used |
| **Place** | **Position** (a typed position), **Marker** (a Marker3D, or any 3D node, of the world scene by its name), **Entity** or **Interactable** (by unique id) |
| **Follow** | The sound goes with the entity or the interactable when it moves |
| **Loop**, **Pause** | The sound plays again until it is stopped, with a random pause between plays |
| **Sound name** | The name to stop it by. Spawning a sound under a name that is playing replaces it |

A sound that does not loop and has no name is simply played once and forgotten. A sound with a name or a loop stays in the world until **Stop Sound** (a **Fade** in seconds) takes it away.
