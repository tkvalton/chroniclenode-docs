# Movement volumes

A **movement volume** is a space that changes how whoever is in it **moves**. The usual one is **water**: step in and you swim, step out and you walk. The same node makes a **room with no gravity**, a cloud to fly through, or a **pool of lava** that slows and burns whoever stands in it.

It works for the **player, the companions and NPCs**. It is **optional**: a game with no volume in its worlds never swims or flies.

## Placing one

1. Open the world scene, click the **Volumes** button and choose **Water**, **Lava** or **Weightless**, then click where it goes. A volume appears in the *Volumes* node, selected, with a box shape of 10 × 4 × 10. It is **water** to begin with.
2. **Size the shape.** Select the `CollisionShape3D` inside the volume and resize or reshape it (a box, a sphere, a cylinder or a capsule) over the space you want. The **top of the shape is the surface** of the water.
3. **Move the volume** to the place and, if you want another kind of space, pick a **Preset** in the inspector.
4. Water and lava come with a **look** (see below). For any other volume, give it a look in the **Look** section, or draw your own mesh on the top of the shape.

::: tip The surface is only a height
The volume does not need a mesh to work, and a mesh does not make water by itself. The look is the mesh; the surface is the top of the shape.
:::

## The look

A volume draws **nothing** until you give it a look (so volumes made before this stay as they were). The **Look** section of the inspector:

| Field | What it does | Default |
|---|---|---|
| **Look faces** | What is drawn: **None**, **Top** (water, lava: the surface), **Bottom**, or **All sides** (a box of fog, a cloud: all six faces) | None |
| **Look material** | The material of the look: any material, a shader included. Empty: a plain material with the texture and the tint below | empty |
| **Look texture** | A picture for the plain material | none |
| **Look tint** | The colour of the plain material; an alpha under 1 makes it see-through | blue, 60 percent |
| **Look double sided** | Every face is also made looking the other way, so the surface is seen from under the water too | on |
| **Look grid** | How many cells the top and the bottom are cut in along a side. A shader that makes waves moves the vertices, so it needs cells: 24 is fine for water, 1 for a flat picture | 24 |

The look is made from the **box shape** of the volume and follows it when you resize the box with the gizmo. A sphere, a cylinder or a capsule draws nothing (the editor says so in the warning of the node). The mesh is not saved with the scene: it is made again when the scene loads.

The **Water** and **Lava** presets come with a shader of the toolkit, as the *Look material*:

- **Water**: waves that move the top, ripples in the shine, a colour that gets darker with the depth under the surface, foam where it meets the ground, a shine at a low angle. Its numbers (colours, wave height, speed, depth fade, foam width) are the **Shader parameters** of the material.
- **Lava**: a dark crust moving over glowing cracks, a little bubbling.

They are a start: replace the *Look material* with your own shader or material and the volume keeps working the same.

## Presets

A preset fills the fields below for the usual cases. What you change afterwards stays; a preset is picked when you choose it, never again when the scene loads.

| Preset | What it is |
|---|---|
| **Custom** | Nothing is filled in: you set the fields |
| **Water** (the default) | Swim, float up to the surface, a surface with a shallow part to wade in, hold your breath under it, leap out of it, and the underwater look of the camera |
| **Weightless** | Fly, no gravity, no surface, no breath, no camera look: a space station, a sky |
| **Lava** | Only slows whoever is in it. Give it an **effect** (below) to burn them |

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
