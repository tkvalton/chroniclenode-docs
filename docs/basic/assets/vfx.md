# VFX

**VFX** are the visual effects: the burst of a fireball, the glow of a buff, the beam of a chain lightning, the rain over a forest, the red circle that warns of a slam. **Assets > VFX** lists them by type, lets you add scenes, and checks that they are built correctly.

An effect is a **scene** (or, for two types, a material or a texture) in `res://src/data/vfx/`. The folder it is in is its **type**, and the type decides how the game uses it:

| Type (folder) | File | What it is | Examples |
|---|---|---|---|
| **oneshot** | scene | Plays once, then finishes and cleans itself up. At a place or on a character | Explosions, hits, impacts, a heal sparkle |
| **loop** | scene | Plays until it is told to stop. Optionally a start, a loop and an end | Auras, channeled spells, buffs and debuffs, a campfire |
| **beam** | scene | Stretches between two points and follows them | Lightning chains, tethers, lasers |
| **path** | scene | Repeats a piece of effect along a line between two points | A wall of fire, a line of spikes, a poison trail |
| **weather** | scene | A loop that stays with the camera and can be blown by the wind | Rain, snow, fog |
| **telegraph** | material or image | A warning on the ground, with a shape and a fill | The circle of an area attack, the cone of a breath |
| **material** | material | Replaces the look of a character for a while | A frozen blue, a stone skin, a burning glow |

## The editor

| Control | What it does |
|---|---|
| The tree | Every effect, grouped by type, with a count |
| **Search**, **Refresh** | Filter; read the folders again |
| **Import** | Copy effect files in; you choose the type |
| **Settings > Add New VFX Scene** | Makes a new scene of a type, with the right root node, and opens it |
| **Settings > Validate All VFX** | Checks every scene (root type, required nodes) and lists the failures |
| **Open in Editor** | Opens the selected scene (a material or an image cannot be opened, the button says so) |

## Building an effect scene

**Add New VFX Scene** makes the root node for the type you choose. Then build the effect under it with ordinary Godot nodes: particles, meshes, lights, an `AnimationPlayer`.

- **How it ends.** A one-shot effect ends when its animation or its particles finish. Give the scene an `AnimationPlayer` with the animations below, or particles that are set to one-shot.
- **Start, loop and end.** If the scene has an `AnimationPlayer`, the game plays the animation named `start` (or `Start`, `Init`, `Begin`), then `loop` (or `Loop`, `Idle`, `idle_loop`), and when the effect is stopped, `end` (or `End`, `Finish`, `Stop`, `Exit`). A loop with no `end` animation just stops.
- **World space.** Tick *On top level* on the root for an effect that should stay where it was made while its source moves.

### Settings on the root node

| Type | Settings |
|---|---|
| All | **VFX Type**; **Auto cleanup** (go back to the pool when finished); **On top level** |
| **One shot** | **Delay start**; **Follow target on death** (keep following even if the target dies) |
| **Beam** | **Beam width**, **Beam segments**, **Curve intensity** (0 = straight), **Follow target movement**, **Update continuously** |
| **Path** | **VFX source node** (the node whose children are repeated), **Section size**, **Section overlap**, **Path curve strength**; **Follow terrain** with its layer mask, offset and maximum slope; **Spawn progressively** with a delay and direction; **Max sections** and **Despawn distant sections** |
| **Telegraph** | **Size**, **Shape** (circle or square), **Color**, **Attachment** (at a point, or attached to a character with an orientation), **Orientation offset** |
| **Weather** | The wind direction and strength are set by the game; the effect should be attached to the camera |

## Where VFX are used

- An [ability](/basic/abilities-and-effects/abilities) or [effect](/basic/abilities-and-effects/effects) picks an effect (and where on the character it plays: head, chest, hands, feet, the ground) with a VFX selection.
- A [world](/basic/world/worlds#default-weather)'s default weather is a weather effect.
- Destructibles play a VFX when they are destroyed, [interactables](/basic/entities/interactables) when they are used.
- An [event](/basic/events-and-quests/event-actions) can create one (*Create VFX*) or change the weather.

## Performance

Every effect is loaded and compiled while the game loads, and effects are kept in a **pool** and reused, so playing one costs almost nothing. See [Pooling](/advanced/pooling).

## See also

- [How the VFX library is built](/advanced/assets/).
