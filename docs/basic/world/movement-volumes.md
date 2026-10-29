# Movement volumes

A **movement volume** is a space that changes how whoever is in it **moves**. The usual one is **water**: step in and you swim, step out and you walk. The same node makes a **room with no gravity**, a cloud to fly through, or a **pool of lava** that slows and burns whoever stands in it.

It works for the **player, the companions and NPCs**. It is **optional**: a game with no volume in its worlds never swims or flies.

## Placing one

1. Open the world scene, click the **Volumes** button and choose **Movement volume**, then click where it goes. A volume appears in the *Volumes* node, selected, with a box shape of 10 × 4 × 10.
2. **Choose a preset.** The [Unique Object panel](/basic/world/unique-object-tool) opens with the volume. Its **Preset** menu has **Water**, **Weightless**, **Lava** and **River**, and your own (see below). You can leave it on *No preset* and set every field by hand.
3. **Size the shape.** Click the volume in the viewport (it is the volume that is selected, not the shape inside it) and drag the **handles** on it: a box has three, a sphere one (its radius), a cylinder and a capsule two (radius and height). They resize from the centre, and one drag is one step of Undo. To reshape it (a sphere instead of a box) select the `CollisionShape3D` in the scene tree. The **top of the shape is the surface** of the water.
4. **Move the volume** to the place. All the settings of a volume are in the Unique Object panel (the Inspector keeps only what Godot itself gives a node: the transform, the collision).
5. Water, lava and river come with a **look** (see below). For any other volume, give it a look in the **Look** page, or draw your own mesh on the top of the shape.

::: tip The surface is only a height
The volume does not need a mesh to work, and a mesh does not make water by itself. The look is the mesh; the surface is the top of the shape.
:::

## The colour in the editor

Every volume (movement volume, audio zone, zone volume) and [trigger area](/basic/world/trigger-areas) has an **Editor > Debug Color**: the colour of its box in the 3D viewport (and with *Debug > Visible Collision Shapes* while playing). Water is blue, lava orange, weightless violet, an audio zone green, a trigger area pink, and a zone volume has the colour of its zone, so you tell them apart at a glance. Choose your own and it is put on the shape; a clear colour (alpha 0) leaves the colour Godot gives a shape. A preset keeps its colour.

## The look

A volume draws **nothing** until you give it a look (so volumes made before this stay as they were). The **Look** section of the inspector:

| Field | What it does | Default |
|---|---|---|
| **Look faces** | What is drawn: **None**, **Top** (water, lava: the surface), **Bottom**, or **All sides** (a box of fog, a cloud: all six faces) | None |
| **Look material** | The material of the look: any material, a shader included. Empty: a plain material with the texture and the tint below. When it is a shader, the page shows an input for **every parameter of the shader** under it (see below) | empty |
| **Look follows flow** | When the shader has a *flow direction* and a *flow speed* (the river shader), they are the flow of this volume, set for you. Turn it off to set them yourself | on |
| **Look texture** | A picture for the plain material | none |
| **Look tint** | The colour of the plain material; an alpha under 1 makes it see-through | blue, 60 percent |
| **Look double sided** | Every face is also made looking the other way, so the surface is seen from under the water too | on |
| **Look grid** | How many cells the top and the bottom are cut in along a side. A shader that makes waves moves the vertices, so it needs cells: 24 is fine for water, 1 for a flat picture | 24 |

The look is made from the **box shape** of the volume and follows it when you resize the box with the gizmo. A sphere, a cylinder or a capsule draws nothing (the editor says so in the warning of the node). The mesh is not saved with the scene: it is made again when the scene loads.

The **Water**, **River** and **Lava** presets come with a shader of the toolkit, as the *Look material*:

- **Water** (a lake, still water) and **River** (flowing water) are made the same way, and look like water because of these parts: **waves with real height** (sharp crests, flat troughs, four of them at different lengths), **ripples** that bend the light, **refraction** (the ground under the water is seen through it, bent by the ripples, and tinted darker the deeper it is), a **mirror of the sky** at a low angle (the reflection comes from the sky of your world environment: with no sky in the environment there is nothing to mirror), **foam** where the water meets the bank, and a **soft edge** where it ends instead of a hard line. The river's waves and ripples travel along the flow, stretched into long streaks, with white water where it runs fast. It flows the way the volume flows: **turn the volume** and the river turns, or change the *Flow* settings.
- **Lava**: a dark crust moving over glowing cracks, a little bubbling.

They are a start: replace the *Look material* with your own shader or material and the volume keeps working the same. The look grid of Water and River is 64: waves need vertices (a wave of 1 metre needs cells of a quarter of a metre), so raise it for big water.

### Water that touches water

Two volumes side by side (a river running into a lake) show no step between them when: they touch without overlapping, their tops are at the same height, and the **Edge fade** of both is above 0. The waves flatten to nothing towards the edge of each volume (over *Edge fade* metres), so both meet at the surface height whatever their waves are. The waves and ripples are worked out from the place in the world, so two volumes with the same numbers have the same waves and no seam at all. Colours and flow are the volume's own: a river and a lake with different colours show where one ends. Do not overlap two water volumes: both draw their water over the overlap.

### The parameters of the shader

Every `uniform` of the shader of the *Look material* has an input in the **Look** page, under the material: a number (a slider range when the shader gives one with `hint_range`), a switch, a vector, a colour, a texture. Change one and the water changes at once, in the viewport. The words in a comment right above a `uniform` are the tooltip of its input. **Reset to the shader's defaults** takes every value back. One change is one step of Undo. Select **one** volume to see them (with several selected the page does not show them, since they would change one material).

The river shader has these (the lake has the same, with a wave direction and a ripple speed instead of the flow, and no streaks):

| Parameter | What it does |
|---|---|
| **Shallow color**, **Deep color**, **Foam color** | The colours of thin water, of deep water and of the foam. The alpha of the first two is how much the colour covers what is under it: lower and you see the bed |
| **Flow direction**, **Flow speed** | The way and how fast it flows. Hidden while *Look follows flow* is on: they come from the *Flow* settings |
| **Wave height**, **Wave length**, **Wave steepness** | The waves: how high, how long the main one is, how sharp the crests (they need the *Look grid*) |
| **Ripple scale**, **Stretch**, **Ripple strength** | The size of the small ripples, how long they are along the flow, how much they bend the light |
| **Refraction strength** | How much the bed under the water is bent by the surface |
| **Depth fade** | How deep the water must be to reach the deep colour |
| **Shore softness**, **Foam width**, **Streak foam** | The soft edge where the water ends, the foam at the bank, the white water of a fast river |
| **Reflectivity**, **Roughness value** | How strongly the water mirrors the sky (0.5 is water, 1 a mirror), and how sharp the glints are |
| **Edge fade** | How far from the edge of the volume the waves flatten to nothing (for water that touches water) |

The tooltip of the *Look material* of any of your own shaders works the same: write the `uniform`s, comment them, and the page has the inputs. Make a copy of the river shader and change it to start.

## Presets

A preset fills in the settings for the usual cases. It is a **copy**: the numbers are the volume's own afterwards, and changing a preset later does not change the volumes made from it. A volume does not need a preset.

The **Preset** menu is the first thing in the strip at the top of the Unique Object panel:

| Preset | What it is |
|---|---|
| **No preset** | Nothing is filled in: you set the fields |
| **Water** | Swim, float up to the surface, a surface with a shallow part to wade in, hold your breath under it, leap out of it, and the underwater look of the camera |
| **Weightless** | Fly, no gravity, no surface, no breath, no camera look: a space station, a sky |
| **Lava** | Only slows whoever is in it. Give it an **effect** (below) to burn them |
| **River** | Water that [flows](#flow): 2.5 m/s towards the front of the volume, a shallower wading depth |
| *Yours* | The ones you save (below) |

Choosing a preset is one undo step, and with several volumes selected it is given to all of them. After you change a number, the menu says **(modified)** beside the preset name.

**Your own presets.** Set a volume up (a *Swamp* with a slow effect and a green look, a fast *Rapids*), then press **Save as preset...** and give it a name. It is saved in `res://src/data/movement_volume_presets/` and appears in the menu after the toolkit's. **Update preset** puts the numbers of the volume into the preset it was made from; **Delete preset** removes one of yours (the volumes made from it keep their numbers). The presets of the toolkit cannot be changed or deleted, but you can save a volume made from one under a new name.

::: tip The old way still works too
The **Volumes** palette also keeps *scene presets*: a whole volume with its shape saved as a scene in `res://src/data/volume_presets/` (it works for trigger areas and audio zones as well). A preset in the menu above is only the **settings** of a movement volume.
:::

## Flow

A volume can **carry** whoever is in it, like a river or a wind. It is added to how they move: with nobody steering, a swimmer drifts with the current; a strong flow sweeps them downstream and a weak one can be swum against.

| Field | What it does | Default |
|---|---|---|
| **Flow strength** | How fast it carries, in metres per second. `0` = it is still | `0` |
| **Flow direction** | The way it carries, in the space of the volume: **turn the volume** to point it (the default is the front of the volume, -Z) | front |
| **Flow pushes walkers** | Carries entities that **walk** through it (shallow water that is only waded) too. Off: only swimmers and flyers are carried | off |

A river is a *Swim* volume with a flow; a wind is a *Fly* volume with a flow. Several volumes add up (a river with a gust over it). A leap out of the water ignores the flow for a moment. The **River** preset is a good start.

The editor draws the flow: **arrows** across the volume that point the way it carries, longer when it is stronger. They turn with the volume and follow the numbers as you change them. Nothing is drawn for a volume that does not flow.

## Movement

| Field | What it does | Default (water) |
|---|---|---|
| **Mode** | **Swim** (the swim animations), **Fly** (nothing pulls down; it uses the same animations) or **Ground** (they keep walking; the volume only slows them or gives them effects) | Swim |
| **Affects** | **Everyone**, **Players** only or **NPCs** only | Everyone |
| **Speed multiplier** | The speed inside compared with outside (`0.7` = 70 %) | `0.7` |
| **Vertical speed** | How fast an entity goes up and down, in units per second | `3` |
| **Idle buoyancy** | What an entity does when nobody steers it: **Hover** (stays where it is), **Float up** (rises to the surface) or **Sink** | Float up |
| **Follows camera pitch** | Moving forward goes where the camera looks, up and down included. A top-down camera never does | on |

### Controls

The player **swims up with jump** and **down with crouch**, and **moves forward where the camera looks**: look up and go forward to rise. A swimmer that comes to the surface is stopped just **below** it, with its head out of the water. With **Allows surface leap** on, pressing **jump at the surface** throws the player out of the water for a moment.

## Shallow water

A volume with a surface lets entities **wade** where the water is shallow: they **keep walking**, slower, until the water is deeper than the **wade depth**, and then they swim. No one has to learn to swim to cross a ford.

| Field | What it does | Default |
|---|---|---|
| **Has surface** | The top of the shape is a surface: an entity cannot swim up through it, and floats just under it. Off for a volume with no top (a weightless room) | on |
| **Wade depth** | Where the water is shallower than this an entity wades; deeper, it swims. `0` swims as soon as it is in | `1` |
| **Wade speed multiplier** | The speed while wading, compared with outside the water | `0.8` |
| **Allows surface leap** | Jump at the surface to leap out of the water | on |

The change from wading to swimming has a little room: an entity that swims keeps swimming until the water is **under half the wade depth**, so someone standing on the edge does not flicker between the two.

## Breath

A volume can make whoever is **under the surface** hold their breath. How long, and what happens when it runs out, are settings of the game: see [Breath in the Gameplay Config](/basic/game-settings/gameplay-config#breath).

| Field | What it does | Default |
|---|---|---|
| **Holds breath when** | **Never**, **Head under surface** (when the head is below the water), or **Always inside** (a room with no air) | Head under surface |
| **Head height** | How high the head of an entity is above its feet. The head is under when the feet are deeper than this | `1.6` |

The breath **runs down** while the entity is under, and **comes back** (faster) when it is above the surface. At **0** the entity **drowns**: the *drowning effect* of the Gameplay Config is on it (a damage over time, for example) until the breath comes back. The player sees the breath in the **breath bar** of the HUD, which shows while the breath is not full.

## Effects while inside

| Field | What it does |
|---|---|
| **Effects inside** | A list of [effects](/basic/abilities-and-effects/effects) that are on every entity **inside**, while it is inside. They are put back if one ends, and taken off when the entity leaves |

**Lava** is a volume with the *Lava* preset and a damage-over-time effect in this list. The same list gives a **slow**, a **buff** or a **curse** to anyone who stands in the circle.

## The camera and the sound

When the **camera itself** is inside the volume (under the surface of one that has a surface), the screen gets the look of the volume and the sound changes. A swimmer with its head above the water sees and hears clearly; going under, both change.

| Field | What it does | Default (water) |
|---|---|---|
| **Camera effect enabled** | Turns the look off for this volume | on |
| **Camera tint** | A color laid over the whole screen. Its alpha is how strong | blue-green, 30 % |
| **Camera fog color / density** | The fog while inside. `0` density = no fog | blue-green, `0.05` |
| **Audio profile** | How the sound changes while the camera is inside: an [audio profile](/basic/world/audio-zones#the-audio-profile) (Water gives the *Underwater* one: the music, effects, voices and ambiance are muffled, the interface is not). Empty = the sound does not change. It works with the camera effect switched off | Underwater |

With **volumes inside volumes** (a pool in a cave pool) the one the camera entered last decides; when the camera leaves it, the first look comes back. Everything the look changed is put back when the camera is out.

## NPCs

An NPC in the water **swims**: the swim animations play, it floats and moves with the water's speed. Its **pathfinding stays flat** (it follows the navigation of the world and does not choose a depth), so for now an NPC does not hunt a player at the bottom of a lake. NPC navigation in 3D is planned.

## Good to know

- The volume sees the **player characters, NPCs and pets**. It does not need the collision layers of the entities to be changed.
- The surface is worked out from a **box, sphere, cylinder or capsule**. With another shape the node shows a warning and takes the position of the volume as the surface (turn **Has surface** off if there is none).
- A **swimming flag** is the only thing the animation system needs: it already has the swim animations (idle in water and swimming in eight directions). Flying has no animations of its own and uses them.
- A volume can be **moved at runtime** (a tide, a lift of water): its surface is read again every frame.

See [Movement volumes: how they are built](/advanced/world/movement-volumes) for the pieces, how to give an entity flight from a script or an effect, and the details of the breath.
