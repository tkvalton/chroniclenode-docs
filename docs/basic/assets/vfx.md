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
| **Weather** | The effect follows the camera. The wind comes from the [weather](/basic/world/weather) that uses it, not from the scene. The toolkit's own particle shader (below) leans with that wind |

### The weather effects that come with the toolkit

The **weather** folder of the project has five effects, each a scene of GPU particles that uses the shader `weather_particles` (`assets/vfx/vfx_shaders`). Use them as they are, or copy one and change its numbers.

| Effect | What it is |
|---|---|
| **rain** | Thin streaks that fall through a box of about 28 by 28 metres around the camera and slant with the wind |
| **thunderstorm** | Heavy rain, a second layer of wind-driven spray and a low murk. It blows hard even when the wind of the world is weak |
| **wind_and_leaves** | Leaves that tumble and flutter across the view (green, autumn orange and brown), with a little dust. They always blow at least a breeze |
| **snow** | Soft flakes that drift down and wobble |
| **blizzard** | Many small flakes driven sideways by a hard wind, and big soft whiteout puffs. It blows hard even in a calm world |

They have a matching [weather](/basic/world/weather) each (Rain, Thunderstorm, Wind and leaves, Snow, Blizzard) with the ground, sky, fog and wind numbers filled in, in **World Configs > Weather**.

The particles **lean with the wind**: the shader reads the global `world_wind` ([shader globals](/basic/world/shader-globals#the-wind)), so the same rain slants more when the weather blows harder. The numbers are on the process material of each particle node:

| Number | What it does |
|---|---|
| **Shape** | *Streak* (a thin box that turns along the way it moves, for rain), *Flake* (a quad that faces the camera) or *Leaf* (a quad that tumbles) |
| **Area** | Half the width, the height above the camera the particles start at, half the depth |
| **Floor below** | How far below the camera a particle goes before it is gone: about the height of the camera above the ground |
| **Fall speed** | Metres a second (a random one between the two numbers) |
| **Wind pull**, **Min wind**, **Wind response** | How fast the wind carries a particle for each unit of wind strength; the least wind it feels (so a storm blows whatever the world wind is); how quickly it takes the speed of the wind |
| **Flutter**, **Flutter speed** | A sideways wobble: flakes drifting, leaves fluttering |
| **Size**, **Streak**, **Stretch**, **Spin speed** | The size, the thickness and length of a streak (a streak in the wind is longer) and how fast a leaf turns |
| **Color a, b, c** | Every particle is one of the first two; one in three is the third when it is set |
| **Fade far**, **Fade near** | Where the particles fade out at the edge of the box and close to the lens |

::: tip Roofs keep the rain off
Particles that touch a `GPUParticlesCollision3D` node (a box, a sphere, a height field) are gone, so a collision box over a doorway or a cabin keeps the rain out. The toolkit will add a ready placeable for it (*WeatherBlocker*); the nodes of Godot work already. This needs the Forward+ or Mobile renderer.
:::

::: warning Falling to the ground
The particles do not know where the ground is: they fall about as far below the camera as *Floor below* says (3 metres) and stop. On a steep slope the rain can stop in the air uphill or pass into the hill downhill. A ground that follows the terrain is planned.
:::

## Where VFX are used

- An [ability](/basic/abilities-and-effects/abilities) or [effect](/basic/abilities-and-effects/effects) picks an effect (and where on the character it plays: head, chest, hands, feet, the ground) with a VFX selection.
- A [world](/basic/world/worlds#default-weather)'s default weather is a weather effect.
- Destructibles play a VFX when they are destroyed, [interactables](/basic/entities/interactables) when they are used.
- An [event](/basic/events-and-quests/event-actions) can create one (*Create VFX*) or change the weather.

## Performance

Every effect is loaded and compiled while the game loads, and effects are kept in a **pool** and reused, so playing one costs almost nothing. See [Pooling](/advanced/pooling).

## See also

- [How the VFX library is built](/advanced/assets/).
