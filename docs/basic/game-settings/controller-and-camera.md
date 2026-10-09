# Controller & Camera

How the player sees and moves through the world is made of two swappable parts:

- A **controller** decides what the player *means*: WASD to walk, a click to move or attack, a key to jump, how the character turns.
- A **camera** decides what the player *sees*: orbit, zoom, follow, lock-on.

They are kept apart on purpose, so you can combine them: a third-person camera with WASD, a top-down camera with point-and-click. You choose one of each in the [Gameplay Config](/basic/game-settings/gameplay-config) (*Controller Logic*). **Game Settings > Controller & Camera** is where you make and tune the presets. The demo uses a third-person camera with WASD and mouse.

## The presets

| Controller preset | How it plays |
|---|---|
| **WASD with Mouse** | WASD walks, the mouse looks, left-click selects, right-click attacks or interacts, E interacts, a lock-on key targets |
| **Point and Click (single)** | Click the ground to walk there; one character |
| **Point and Click (RTS)** | Click to command the party, with drag-box selection |

| Camera preset | How it looks |
|---|---|
| **Third Person** | Behind the character, orbiting, zooming, colliding with walls, swinging back behind the character as it walks |
| **Top-down Focused** | Looks down at the character and always follows it. Middle-drag rotates, the wheel zooms |
| **Top-down Free** | The same, but the camera can be panned freely with the keyboard when the controller does not use WASD to move |

## The editor

The editor makes and edits **presets**: saved files you can reuse.

| Control | What it does |
|---|---|
| **Logic Type** | **Camera** or **Player controller** |
| **Preset** | The saved presets of that type |
| **New**, **Delete** | Make a preset (choose its **Logic Class** first) or delete the current one |
| **Preset Name**, **Description** | For you |
| **Properties** | The fields of the preset (below) |
| **Validate** | Checks for configuration errors |
| **Save Preset** | Writes the file (`src/data/controller_logic/camera/` or `.../player/`) |

The game uses a **copy** of the chosen preset, so what happens during play (angles, locks) never changes the saved file.

## WASD with Mouse: the options

| Option | What it does | Default |
|---|---|---|
| **Movement basis** | **Character**: W walks the way the character faces, and right-drag turns the body (the camera follows behind). **Camera**: W walks away from the camera, both drags orbit the camera, and the body turns to face the way it moves | Character |
| **Snap body to camera on look** | Character basis: when right-drag look starts after the camera was orbited away, the body snaps to where the camera faces. Off: the camera eases back behind the body | off |
| **Secondary action trigger** | When the right-click action fires: **Press**, or on **Release without drag** (so a click acts and a drag looks) | Press |
| **Auto face overrides mouse look** | When an ability asks the player to face a target while the player holds right-mouse look: the ability wins (on) or the mouse wins (off) | on |
| **Direction stability threshold** | Prevents the animation from flickering when moving diagonally | `0.7` |
| **Allow lock on**, **allow lock on switch** | Target lock, and changing targets while locked | on |
| **Target lock rotation speed** | How fast the character turns to the locked target | `10` |
| **Auto face on attack** | The character turns to its target when attacking | on |
| **Enable keyboard interact** | The E key interacts | on |
| **Fire aimed attack with primary** | With a bow or gun, holding the primary button while looking around fires the aimed attack at the crosshair | on |
| **Look sensitivity scale** | The feel of this preset relative to the player's setting | `1` |

## Third Person camera: the options

| Option | What it does | Default |
|---|---|---|
| **Vertical angle min / max** | How far down and up the camera can tilt | -80 / 80 |
| **Allow manual orbit** | Left-drag orbits the camera without turning the body | on |
| **Enable auto follow on movement** | The camera swings behind the character while it walks (character basis only) | on |
| **Follow direction speed** | How quickly it swings | `5` |
| **Collision enabled**, **collision layer**, **camera radius**, **collision smoothing** | The camera pulls in when a wall is behind the character, using the *Camera detection* [collision layer](/basic/game-settings/collision-layers) | on, `0.3`, `10` |
| **Look sensitivity scale** | As above | `1` |

The top-down cameras have their own zoom, angle and nameplate-scaling options (the camera tilts more steeply as it zooms out, and nameplates shrink with distance).

## Pairings

Not every pair works equally. The Gameplay Config shows **warnings** under the two pickers for a pair that would ignore something:

| Pair | Result |
|---|---|
| Third person or top-down with **WASD** | Fine |
| Third person with **RTS** | Warns: the camera's left-drag orbit is ignored (the RTS controller owns the left button) |
| Third person with **point-and-click single** | Warns: right-drag only tilts the view |
| A camera-relative controller with a custom camera that does not use the [input manager](/advanced/game-settings/camera-and-controller/input-manager) | Warns: nothing will orbit |

The warnings are advice, not a lock: the controller wins any conflict.

## The player's settings

How fast the mouse turns the view is the **player's** setting, not the preset's: *Mouse sensitivity*, the X and Y fine-tuning and *invert* are in [Game Settings](/basic/game-settings/settings#gameplay). A preset only holds its relative feel (*Look sensitivity scale*). Two options of the Gameplay Config tune the whole input: **Look drag threshold** (how many pixels a press must move to count as a drag instead of a click, `10`) and **Log input routing** (prints where each click went, for finding a UI element that swallows clicks).

## Clicks that do not reach the world

If clicks do nothing in your game, a full-screen UI node is probably catching them. In your own interface scenes, set `mouse_filter` to **Ignore** on roots, containers and overlays, and to **Stop** on panels and buttons. See the [advanced page](/advanced/game-settings/#input).

## See also

- [Gameplay Config](/basic/game-settings/gameplay-config), [Collision Layers](/basic/game-settings/collision-layers).
- [How the camera and controller are built](/advanced/game-settings/), including how to write your own preset.
