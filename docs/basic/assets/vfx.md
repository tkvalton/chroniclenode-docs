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
| **telegraph** | image | A warning on the ground: the picture is the **shape** (a circle, a cone, a lane ...), the game draws its outline and fills it up while the ability is cast | The circle of an area attack, the cone of a breath, the lane of a charge |
| **material** | material | Replaces the look of a character for a while | A frozen blue, a stone skin, a burning glow |

## The editor

The effect you select **plays in a 3D preview** at the top of the panel on the right. Drag with the left button to orbit, turn the wheel to zoom, drag with the middle or right button to move the view. The buttons above the view are Frame, Reset, Grid, **Floor** (untick it to see the parts of a hit or a low projectile that go under the ground; the choice is kept for every view), a 1.8 m figure (to judge the size) and the light; the **dark** light shows the glow of an effect best. Each effect you select is shown from the Reset angle, framed. The controls under the view depend on the kind of effect:

| Kind | The preview |
|---|---|
| **Loop** | Plays by itself. **Restart** plays it again from its start; **End** plays its end animation when the effect has one |
| **One shot** | Plays when you select it and **repeats** after its length (the **Repeat** box, on to begin with). **Play** plays it once more |
| **Weather** | Plays by itself over the view, with an **Intensity** slider (0 to 1) |
| **Beam** | Stretches between two points: a **Length** slider (1 to 20 m) and **Sweep**, which moves the far end around so you can see the beam follow a target. The mesh named *Beam* is as long as the beam and turned to the far end, the way the game places it. A beam with a **Curve Intensity** bends toward a point beside its middle, as in the game. **Chain** shows the beam going on from its far end to two more targets, to see a beam that chains (lightning) |
| **Path** | Puts a copy of what is under its source node every *section size* metres along a line; the **Length** slider makes the line longer or shorter |
| **Telegraph** | The warning that fills up on the ground, as the game draws it: the shape of the picture you selected (its outline and its fill), a **Size**, a **Colour** (red to begin with) and the **Fill** (or **Auto**, which fills it again and again). The **Shape** menu (circle or square) is for the old telegraphs that have no picture and is off while a picture is shown. The size and colour of a real telegraph come from the ability that uses it |
| **Material** | The material on a capsule the size of a character, as its material override |

The **Speed** slider (0.1x to 2x) slows the effect down to look at it. The preview starts the particles and the animations of the scene the way the effect does and places the parts of a beam and a path itself; it does not run the game side of the effect (pools, timers, attaching to a creature).

The same preview is in the **Select VFX** window of an ability or an effect: the effect you click in the list plays next to it.

The demo has effects of each kind to try the previews with.

| Control | What it does |
|---|---|
| The tree | Every effect, grouped by type, with a count; each row also shows its theme and category |
| **Theme**, **Category** | Show only the effects of one theme or one category. The lists are read from the names of the effects, so a new theme or category appears by itself. Pick a theme and the Category list shrinks to the categories that theme has |
| **Search**, **Refresh** | Filter by name (the search works together with the two lists); read the folders again |
| **Import** | Copy effect files in; you choose the type |
| **Settings > Add New VFX Scene** | Makes a new scene of a type, with the right root node, and opens it |
| **Settings > Validate All VFX** | Checks every scene (root type, required nodes) and lists the failures |
| **Open in Editor** | Opens the selected scene (a material or an image cannot be opened, the button says so) |

## Naming an effect

Every effect is named by one rule, so the library can be filtered:

```
vfx_<theme>_<category>_<name>_<nn>        e.g.  vfx_fire_projectile_fireball_01
```

| Part | What it is |
|---|---|
| `vfx` | Always the first word |
| **theme** | The colour, the magic or the style of the effect: `fire`, `frost`, `holy`, `blood`, `physical` ... One word |
| **category** | What the effect does: `slash`, `projectile`, `area`, `buff`, `debuff`, `movement`, `beam`, `cone` ... One word |
| **name** | What it is called. It can hold underscores: `fireball_big` |
| **nn** | Two digits for the variant: `01`, `02` ... |

The type (oneshot, loop ...) is **not** in the name: it is the folder. The **Theme** and **Category** lists of the VFX tab and of the Select VFX window are read from the names, so to add a theme you name an effect with it. The list shows the name for people (`Fireball 01`), the file keeps the full name. **Add New VFX Scene** refuses a name that breaks the rule and **Validate All VFX** lists the effects that do (their theme shows in orange).

## Environmental effects

An **environmental** effect is scenery rather than an ability effect: a campfire, smoke from a chimney, a shaft of light through a window, a waterfall, birds. It is an ordinary scene **without a VFX script** that plays by itself (its animation has *Autoplay* on), so you can put it in the world like any other asset. It lives in the **World Assets** folder `src/data/world_assets/environmental_vfx/` (the category *environmental_vfx*), not in the VFX library, and follows the same naming rule. Weather is different: weather effects stay in the `weather` type because the weather system plays them.

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
| **Beam** | **Beam width**, **Beam segments**, **Curve intensity** (0 = straight), **Follow target movement**, **Update continuously**. Under *BeamRotation* the mesh named **Beam** is the beam itself (a tube with no caps: the game sets its length), and two optional nodes, **BeamStart** and **BeamEnd**, are put at the two ends of the beam: the flare at the caster and the impact on the target are particles under them |
| **Path** | **VFX source node** (the node whose children are repeated), **Section size**, **Section overlap**, **Path curve strength**; **Follow terrain** with its layer mask, offset and maximum slope; **Spawn progressively** with a delay and direction; **Max sections** and **Despawn distant sections** |
| **Telegraph** | **Size**, **Shape** (circle or square: used only when the telegraph has no picture), **Color**, **Attachment** (at a point, or attached to a character with an orientation), **Orientation offset**. The *VFX type* of the selection is the name of a picture in the telegraph folder (see [Telegraph outlines](#telegraph-outlines)) |
| **Weather** | The effect follows the camera. The wind comes from the [weather](/basic/world/weather) that uses it, not from the scene. The toolkit's own particle shader (below) leans with that wind |

### The weather effects that come with the toolkit

The **weather** folder of the project has five weather effects, each a scene of GPU particles that uses the shader `weather_particles` (`assets/vfx/vfx_shaders`), and the ten **environment** effects of the library (fog, dust, fireflies, pollen, ash, embers, a sandstorm, arcane motes, glow spores, falling petals: see [the effects that come with the toolkit](#the-effects-that-come-with-the-toolkit)), which are made the same way. Use them as they are, or copy one and change its numbers.

| Effect | What it is |
|---|---|
| **rain** | Thin streaks that fall through a box of about 28 by 28 metres around the camera and slant with the wind. Where a drop lands it throws a few **splash droplets** |
| **thunderstorm** | Heavy rain with splashes, a second layer of wind-driven spray, a low murk and a few faint **wind streaks**. It blows hard even when the wind of the world is weak |
| **wind_and_leaves** | Leaves that tumble and flutter across the view (green, autumn orange and brown), a little dust and faint **wind streaks** that sweep along the wind. They always blow at least a breeze |
| **snow** | Soft flakes that drift down and wobble |
| **blizzard** | Many small flakes driven sideways by a hard wind, and big soft whiteout puffs. It blows hard even in a calm world |

They have a matching [weather](/basic/world/weather) each (Rain, Thunderstorm, Wind and leaves, Snow, Blizzard) with the ground, sky, fog and wind numbers filled in, in **World Configs > Weather**.

The particles **lean with the wind**: the shader reads the global `world_wind` ([shader globals](/basic/world/shader-globals#the-wind)), so the same rain slants more when the weather blows harder. The numbers are on the process material of each particle node:

| Number | What it does |
|---|---|
| **Shape** | *Streak* (a thin box that turns along the way it moves, for rain), *Flake* (a quad that faces the camera), *Leaf* (a quad that tumbles) or *Ribbon* (a mesh that keeps its own size and turns its length along the way it moves: a ribbon of wind) |
| **Area**, **Spread y** | Half the width, the height above the camera the particles start at, half the depth. *Spread y* is how far below the top they start (0 = rain that falls from the top; a number fills the box, for streaks that stay at one height) |
| **Floor below** | How far below the camera a particle goes before it is gone when nothing stops it earlier. The rain has a collision under it and stops on the ground, so this only matters where there is none |
| **Fall speed** | Metres a second (a random one between the two numbers) |
| **Wind pull**, **Min wind**, **Wind response** | How fast the wind carries a particle for each unit of wind strength; the least wind it feels (so a storm blows whatever the world wind is); how quickly it takes the speed of the wind |
| **Flutter**, **Flutter speed** | A sideways wobble: flakes drifting, leaves fluttering |
| **Size**, **Streak**, **Stretch**, **Spin speed** | The size, the thickness and length of a streak (a streak in the wind is longer) and how fast a leaf turns |
| **Color a, b, c** | Every particle is one of the first two; one in three is the third when it is set |
| **Fade far**, **Fade near** | Where the particles fade out at the edge of the box and close to the lens |
| **Splash chance**, **Splash count**, **Splash speed** | When a particle lands on something: the chance it leaves a splash, how many droplets, how fast they jump. The droplets are the **sub emitter** of the particle node (a second particle node with the shader `weather_splash`) |

### The rain lands on the world

All five weather effects carry a **height field** (a *GPUParticlesCollisionHeightField3D* called *RainFloor*): Godot draws everything solid in a box of 36 by 36 metres around the weather, seen from above, into a height picture, and a particle that is below the highest surface of its column has landed. So with **nothing set up**:

- the rain lands on **floors, roofs and any mesh** of your world, and throws splashes there (the terrain has its own way, below);
- **indoors it does not rain**: the roof is the highest surface over the room, so the drops land on the roof, none fall inside, and through an open door or window the rain outside still falls (tested with a hut: no rain inside, rain at the doorway and beyond);
- the same goes for a porch, a bridge deck and the ceiling of a cave.

What it cannot do: it sees one surface for each spot seen from above, so a room that is **under a roof but open at the side** keeps the rain off the whole spot under the roof (which is what you want), and it cannot tell a window from a wall (rain outside the window is outside the footprint, so it falls). Only meshes that are drawn into it count: a transparent surface (water, glass) does not stop the rain, a mesh on a visual layer you turned off in the height field does not (the property *Heightfield mask*), and a surface more than 20 metres above or below the weather is outside the box. The player's own body is a mesh like any other and catches rain too.

The height field moves with the weather (which follows the camera) and is drawn again when it moves. On the test machine the cost was not measurable; on a weak graphics card lower its **Resolution** (256 is enough for the splashes) or take the node out (the rain then falls to *Floor below* and stops there, with no splashes). Particle collision needs the Forward+ or Mobile renderer; with the Compatibility renderer the rain falls without landing.

Your own weather effect gets all of this by giving the particle node the shader, a *RainFloor* node under the effect, and a splash particle node as its **Sub Emitter**.

#### The terrain has its own picture

A terrain is not always something the height field can see (the terrain of the toolkit draws itself through the rendering server, and a terrain addon draws in its own way), so the weather does not rely on it. The weather system asks the [terrain service](/basic/world/terrain) for the **height of the ground** on a grid round the rain (64 by 64 metres, 96 by 96 cells) and keeps it as a small picture in two [shader globals](/basic/world/shader-globals) (`weather_ground`, `weather_ground_rect`). The weather shader reads it: a particle that falls below the ground **lands there**: a splash for the rain, gone for snow and leaves. It works for **every terrain the service knows**: the terrain of the toolkit, Terrain3D, HTerrain, Terra Brush. A hole in the terrain has no ground (the rain falls through).

- The picture is made a few rows a frame and made again when the camera has moved eight metres, so nothing hitches and there is no cost while you stand still. A world with no terrain provider makes none (the height field of the effect handles the meshes).
- It only exists while something falls. The first second of a storm that starts in a world may fall through the terrain until the picture is ready.
- Your own weather shader gets it by declaring `global uniform sampler2D weather_ground;` and `global uniform vec4 weather_ground_rect;` and reading the height with `texelFetch` (the shipped shader's `ground_height()` is a copy to start from). Other collision nodes of Godot (a box, a sphere) work as well, for a place the height field does not cover.

### Intensity

`VFXWeather` has an **Intensity** from 0 to 1 (a slider in the inspector, under *Weather*) that a [weather](/basic/world/weather#intensity) sets while the game runs and an event can change: the effect gets thinner as it drops.

**Design the effect at 1**: that is its full strength, the heaviest it will ever be. Lowering the intensity only takes particles away, layer by layer; it never makes anything stronger. The script runs in the editor, so open the scene, move the slider and see the effect at 0.3 or 0.7 right there in the viewport (the rain, the splashes, the wind streaks, all of it). The value the scene is saved with is what shows when it is used on its own; the weather system sets it from the weather when the game starts.

Each particle node of the effect decides **how** it thins with two numbers in its **Metadata** (the inspector, under the node):

| Metadata | What it does | Default |
|---|---|---|
| `intensity_start` | Below this intensity the layer emits nothing | 0 |
| `intensity_full` | From this intensity the layer is at full strength | 1 |

In between the layer keeps a **share** of its particles: the part of the way from start to full raised to 1.5, so a light weather looks light (half way is about a third of the particles). The thunderstorm has its rain from 0 to 0.8, the spray from 0.35, the murk from 0.5 and the wind streaks from 0.1: a light storm is thin rain, a heavy one is everything. A node with no metadata follows the intensity from 0 to 1. The splash droplets (metadata `weather_sub_emitter`) are left alone: they follow the drops that make them.

### Making your own weather effect: the hooks

An effect is a scene that any developer can make. This is everything the toolkit looks for, so your own scene and your own shaders get the same behaviour as the ones that come with it.

| What | Where | What the toolkit does with it |
|---|---|---|
| The scene | A `.tscn` in `src/data/vfx/weather/` (the file name is the effect name a [weather](/basic/world/weather) picks). The root is a `Node3D` with the `VFXWeather` script, the particles are `GPUParticles3D` nodes below it | Spawns it at the camera when the weather starts, stops it when it ends |
| **Intensity** | An exported value of `VFXWeather` (*Weather > Intensity*, 0 to 1) | The weather system sets it; you move it in the editor to test |
| **Layer range** | Node metadata `intensity_start` and `intensity_full` on each particle node | Decides what share of that layer is alive at an intensity |
| **Sub emitter** | Node metadata `weather_sub_emitter` on a node that is the sub emitter of another | Left alone by the intensity |
| **Wind** | The global shader parameter `world_wind` (a `vec4`: x and z of the direction, the strength, the speed of the gusts) | Your shader reads it to lean with the wind of the weather |

How a layer is **thinned**, in this order:

1. If its **process material is a shader** that has a uniform called `density`, the toolkit sets `density` (a float, 0 to 1) to the share of the layer. If the shader also has a uniform called `intensity`, it gets the intensity of the weather itself (0 to 1), for a shader that wants to change more than the count: the colour, the size, the lean.
2. Otherwise (a normal particle material, or a shader without those uniforms) the toolkit sets the **Amount ratio** of the node. Godot applies it only to particles that restart and with weak effect on a system that is already full, so for a good result give your shader a `density`.

In your shader, the `density` hook is two lines. A particle gets a fixed random number for its life and is alive only while `density` has reached it:

```glsl
shader_type particles;
uniform float density = 1.0;   // set by VFXWeather
uniform float intensity = 1.0; // set by VFXWeather (optional)
// ... a random number from 0 to 1 for this particle, kept for its life (see weather_particles.gdshader)
void start() {
    // ... place the particle ...
    ACTIVE = my_random <= density;
}
void process() {
    if (my_random > density) { ACTIVE = false; } // the weather got lighter
    // ... move it ...
}
```

Nothing restarts when the intensity changes, so it can fade smoothly. A scene shares its materials between copies, so while the game runs each particle node gets its own copy of the process material; in the editor the intensity is put back to 1 when you save, so the file keeps the full-strength numbers.

#### The shaders that come with the toolkit

| Shader (`assets/vfx/vfx_shaders`) | What it is for | Intensity hooks |
|---|---|---|
| `weather_particles` | Falling and blowing particles: rain streaks, snow, leaves, dust, wind streaks. Leans with `world_wind`, fades at the edge of the box and near the lens, makes splashes where a particle lands | `density`, `intensity` |
| `weather_splash` | The droplets of a splash: the sub emitter of a `weather_particles` node | none (they follow the particles that make them) |

The settings of `weather_particles` are the table above (*Shape*, *Area*, *Spread y*, *Floor below*, *Fall speed*, the wind numbers, *Flutter*, *Size*, *Streak*, *Stretch*, *Spin speed*, the colours, the fades, the splash numbers). The shaders of the **world** that react to the weather are set by the weather too, through [shader globals](/basic/world/shader-globals): the terrain shader (wet ground, cover, tint), the plant shaders (`world_wind`) and the sky (clouds, darkening): they follow the weather's own numbers scaled by its intensity, so they need nothing from you.

## Using an effect in an ability

A projectile ability uses a **loop** as its projectile VFX (it flies with the projectile), a **oneshot** in its casting VFX (at the hands) and a **oneshot** as the hit effect. A buff or debuff effect points at a loop (placed at *Overhead*), a hit at a oneshot (placed at *Chest*), a material in a **VFX Selection Material** with its blend mode. A beam goes in a beam VFX selection (the ability gives its two ends), a wall or trail in a path selection (the ability gives the points), an environment effect in a [weather](/basic/world/weather) (it fades with the weather's intensity), a telegraph outline in a telegraph selection (below).

### Tinting an effect

An effect can be put in another colour without making a new one. A **tint** is one colour put on the whole effect (every mesh and particle of it, and its lights):

- **Multiply** multiplies the colours of the effect by the tint. It is made for neutral effects (white, grey, steel): a white effect becomes the colour.
- **Colorize** keeps the brightness of the effect and replaces its colour, so an effect that has its own colours (a red flame) becomes another colour (a blue flame) and stays bright. Multiply on a coloured effect only darkens it.
- **Strength** (0 to 1) mixes the tint with the colours the effect was made with. The brightest parts of an effect lean back to white, so a tinted bolt is still hot in the middle.

Where a tint is set:

- In the **Select VFX** window of an ability or an effect: the **Tint** section at the bottom of every kind has a switch, a colour, the mode and the strength. That tint is put on the effect every time it plays, and an effect that plays next without a tint has none (effects are [pooled](/advanced/pooling), and a tint never stays on the next use).
- On the **root node** of an effect scene: *Tint Color*, *Tint Strength* and *Tint Mode* are the tint the scene is saved with (strength 0 = none). A selection that sets its own tint wins.
- In the **VFX tab**: the **Tint** row under the preview puts a colour on the effect you are looking at, to try it. It stays on while you pick other effects, so you can look at a set in one colour.

The tint works through the shaders of the toolkit (`fx_tint.gdshaderinc`, an instance uniform `vfx_tint`). The water and refraction shaders and shaders you wrote yourself do not have it, so they are not tinted; add the include to your own shader to make it follow the tint.

### The projectile mesh

A projectile effect that has a node called **ProjectileMesh** (a MeshInstance3D) can show the mesh of an item instead of its own. In the **Select VFX** window of a **loop** effect (the projectile VFX of a projectile effect) pick **Projectile mesh**:

- *The effect's own mesh*: as it was made.
- *An item*: the mesh of one item (its ID).
- *The weapon the user holds*: the first weapon the user has equipped (a thrown axe looks like the axe).
- *The ammo the ability spends*: the ammo that was spent (an arrow for a bow), then the ammo that is equipped, then the *Ammo Model* of the weapon in hand.

The mesh is the item's **Projectile Model** (a field under *Item Model* in the Items tab; its item model when that is empty), turned by its **Turn** (**Projectile Rotation**) so its tip points along +Y (the way projectile effects fly), scaled to the length of the effect's own mesh (or left at its own size) and centred, so the glow and the trail of the effect stay where they are. *Keep the mesh's own materials* shows it as the item looks; turned off, it gets the material of the effect (a glowing weapon). A ranged weapon has an **Ammo Model** field (with its own turn) at the end of its weapon section: the arrow it shoots when no ammo item is spent (an NPC's bow). To make your own effect take a mesh, name a MeshInstance3D **ProjectileMesh**, lay it along +Y and give it a metadata value `projectile_slot_length` (its length in metres).

## Telegraph outlines

A telegraph is the warning an ability shows while it is being cast. Its **picture** is the shape, and the game draws three things from it: the **outline** (a line that is the same width on the screen at any distance), the **shape** faintly, and the **fill**, which sweeps through the shape as the cast goes on with a bright front and gets stronger as the cast nears its end (diagonal stripes run through the fill so it reads as danger). Choose the picture by its name as the *VFX type* of a telegraph selection; the *size* of the selection is the size of the picture on the ground, in metres, and *Color* tints it.

A shape that points somewhere points **forward** (the way the caster faces); turn them with the *orientation offset*. **Make your own:** a telegraph picture is any image in `src/data/vfx/telegraph/` with the shape in the **red** channel (white inside, black outside, with a soft edge), how far inside the edge a point is in the **green** channel (0 on the edge, 1 deeper than about a sixth of the width) and the order of the fill in the **blue** channel (0 where it starts, 1 where it ends). In the import settings of the picture set *Compress > Mode* to **Lossless** and *Detect 3D > Compress to* to **Disabled**, or the engine compresses it and the edges break. The library's are drawn by `tools/vfx/make_telegraphs.gd`, which you can copy and add shapes to. A telegraph with no picture still draws the old circle and square.

## Where VFX are used

- An [ability](/basic/abilities-and-effects/abilities) or [effect](/basic/abilities-and-effects/effects) picks an effect (and where on the character it plays: head, chest, hands, feet, the ground) with a VFX selection.
- A [world](/basic/world/worlds#default-weather)'s default weather is a weather effect.
- Destructibles play a VFX when they are destroyed, [interactables](/basic/entities/interactables) when they are used.
- An [event](/basic/events-and-quests/event-actions) can create one (*Create VFX*) or change the weather.

## Performance

Every effect is loaded and compiled while the game loads, and effects are kept in a **pool** and reused, so playing one costs almost nothing. See [Pooling](/advanced/pooling).

## See also

- [How the VFX library is built](/advanced/assets/).
