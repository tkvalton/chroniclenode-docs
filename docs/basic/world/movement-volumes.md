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
| **Look grid** | How many cells the top and the bottom are cut in along the long side. A shader that makes waves moves the vertices, so it needs cells. **0 = automatic**: about half a metre a cell (up to 128), with fewer cells across a thin river than along it. The Water and River presets use 0. 1 is enough for a flat picture | 24 |

The look is made from the **box shape** of the volume and follows it when you resize the box with the gizmo. A sphere, a cylinder or a capsule draws nothing (the editor says so in the warning of the node). The mesh is not saved with the scene: it is made again when the scene loads.

The **Water**, **River** and **Lava** presets come with a shader of the toolkit, as the *Look material*:

- **Water** (a lake, still water) and **River** (flowing water) are made the same way, and look like water because of these parts: **waves with real height** (sharp crests, flat troughs, four of them at different lengths), **ripples** that bend the light, **refraction** (the ground under the water is seen through it, bent by the ripples, and tinted darker the deeper it is), a **mirror of the sky** at a low angle (the reflection comes from the sky of your world environment: with no sky in the environment there is nothing to mirror), **foam** where the water meets the bank, and a **soft edge** where it ends instead of a hard line. The river's waves and ripples travel along the flow, stretched into long streaks, with white water where it runs fast. It flows the way the volume flows: **turn the volume** and the river turns, or change the *Flow* settings.
- **Lava**: a dark crust moving over glowing cracks, a little bubbling.

They are a start: replace the *Look material* with your own shader or material and the volume keeps working the same. The look grid of Water and River is 64: waves need vertices (a wave of 1 metre needs cells of a quarter of a metre), so raise it for big water.

### A river that winds

A **River (follows a path)** is a movement volume whose space is not a box but a **ribbon along a curve**. You draw it with clicks and shape it with handles on its points.

#### Draw it

1. Open the **Volumes** palette and choose **River (follows a path)**. The palette shows **Water above ground**: how high the water goes above the ground where you click (0.5 m to start with). The river is a sheet of water over the ground: sculpt the bed with the [terrain tools](/basic/world/terrain-painting) first, then put the water a little above it.
2. **Click on the ground** for each point. The river is made at the first click and follows the mouse as you go.
3. **Drag while you click** to pull the curve of that point. A plain click leaves the curve to the toolkit (**Auto**: a smooth curve through the points around it, nothing to pull).
4. **Enter** or a **double click** ends the river (one step of Undo). **Backspace** takes the last point back. **Esc** throws the river away; a second **Esc** stops the tool.

#### Shape it

Select the river: a bar shows over the viewport and every point of the course gets handles.

| Handle | What dragging it does |
|---|---|
| **The point** (a dot on the course) | Moves the point. It slides over the ground at the *Water above ground* of the river. Hold **Alt** to move it freely sideways at its own height (to make the water run downhill or level) |
| **The bank** (a small dot at the side of the river) | Widens or narrows the river **at this point**. Between two points the river changes width smoothly |
| **The curve** (small dots joined to the point by a line; only on the point you are editing, and only when its curve is not Auto) | Pulls the curve out of the point |

The bar over the viewport has, for the point you last touched: its **Width**, its **Curve** (**Auto**: smooth, nothing to pull; **Mirrored**: one handle, the other side is its mirror; **Free**: two handles, a corner if you want one) and **Remove point** (a river keeps at least two). **Water above ground** is the height used when you move a point over the ground.

- **Ctrl + click on the river** adds a point there, between the two points it is nearest to.
- **Ctrl + click on the ground** extends the river from the end that is nearer.
- Every change is one step of Undo.

The width set in the **River** page of the [Unique Object panel](/basic/world/unique-object-tool#volumes) makes every point that wide; the handles then make one point wider or narrower than the rest. **Depth** is how deep the water is under its surface, and **Segment length** is the size of the pieces the river is cut in (shorter follows a tight bend better and costs more).

#### Marked in red

The tool marks stretches that will not work, in red on the course and in the warnings of the node:

- **A bend tighter than half the width.** The banks would fold on the inside of the bend. The ribbon narrows there so that it does not fold, but round the bend or narrow the river.
- **A slope steeper than 25 degrees.** A river does not fall, and **waterfalls are not supported**: lower the points gradually.

#### Join it to a lake or another river

Drag an **end** of the river onto a lake (or onto another river) and it **joins**: a green post marks the end, the bar says *Joined to...*. A joined end:

- takes the **height** of that water, and the river comes down to it over its last few metres;
- takes the **width** of the river it joins (for a lake it keeps its own);
- **fades out** over its last two metres, into the edge of the lake, so there is no seam.

Drag the end away to free it, or press **Free start / Free end** in the bar. If you **move the lake** afterwards, press **Join ends again** so the river takes its new height. A tributary joins the middle of another river the same way: both flows act on a swimmer where they meet.

#### What it is

The height of the path is the surface: a path that goes down makes a river that runs downhill, and the swimming and wading follow it. **The flow runs along the river** at every bend, at the *Flow strength* of the volume: a swimmer is carried round the bend, and the ripples of the river shader stream along it. The arrows in the viewport follow the course.

Everything else works as for a box: the presets, the look and its shader inputs, *Affects*, breath, the effects inside, the camera and sound, the reflection probe (one picture over the whole river: for a long river, make it of several rivers). Click the water in the viewport to select the river.

The river is made of boxes (one for each piece, tipped with the slope) that the game uses to know who is in the water; they are not saved with the scene, and they are made again when you edit the river. What is saved is the **Path** (a `Path3D` child, which you can also edit with the Godot tools) and, on the river, the width and curve mode of each point.

### A reflection probe

Water mirrors the **sky** by itself. To have it mirror what stands around it (a tower, a wall, trees), tick **Reflection probe** in the **Reflections** page of the volume. The volume then takes a picture of its surroundings from a point above the water and the water reflects it. The settings:

| Field | What it does | Default |
|---|---|---|
| **Reflection probe** | Gives the volume a [reflection probe](https://docs.godotengine.org/en/stable/classes/class_reflectionprobe.html) (a box shape is needed) | off |
| **Reflection probe updates** | Takes the picture again every frame, so that what moves shows in the water. It costs more. Off: one picture, when the volume is made | off |
| **Reflection probe height** | How high above the water the picture is taken, in metres | 4 |
| **Reflection probe range** | How far around the volume the probe sees and reaches, in metres | 20 |

It is one picture from one point: good for a pond or a lake, rough for a long river (a river can be made of several volumes, each with its own probe) and wrong for things very close to the shore. A probe also changes the reflections of whatever stands inside its box. The look of the water is left out of the picture (it lives on layer 20 while the probe is on, so the water does not reflect itself).

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
| **Flow scales with width** | *(rivers that wind only)* The water runs faster where the river is narrow and slower where it is wide: the flow strength is the speed at the river's average width, and at each place it is that times the average width over the width there (between half and double). Swimmers are carried that fast and the ripples run that fast. Off: the same speed everywhere | off |

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
| **Swim depth** | How deep a swimmer sits: the distance from the surface down to its feet while it floats, in metres. About the height of a person's shoulders, so the body is in the water and the head is out. Swimming up stops a little higher than this (a quarter of a metre). `0` works it out from the wade depth (80 %) | `1.35` |
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

### Footsteps in the volume

| Field | What it does | Default (water) |
|---|---|---|
| **Footstep surface** | What the footsteps of whoever **walks, runs or wades** in the volume sound like: the kind of ground, in the words of the folders of your [footstep sounds](/basic/assets/audio#sounds-of-an-entity) (`water`, `mud`, `snow`). It wins over the terrain and the floor. Empty = the ground under them decides | water |
| **Footstep swim** | What the sounds of whoever **swims** in the volume are (`water_deep`): their strokes, and the sounds of jumping into and out of the water. Empty = the footstep surface is used, and `water` when that is empty too | water_deep |

The order of the sounds, for something on foot: the volume (*Footstep surface*), then the floor it stands on (the `surface_type` meta of a StaticBody3D, else the surface of the terrain texture), then the default surface of the terrain.

- **On foot.** A shallow water with *Footstep surface* `water` makes the walk and run sounds of the `water` folder (`motion/humanoid/footsteps/water/walk/`) instead of the grass or rock under it. A mud pit, a swamp, a field of deep snow work the same way: name the volume's ground and put the sounds in that folder. A volume that has no sound for the movement (no `mud/run` folder) leaves the sound to the terrain, so nothing goes silent.
- **Swimming.** While an entity swims, **every** sound of its movement is the sound of *Footstep swim*, and never the floor or the terrain under the water.
  - A **stroke** while it swims on is the folder `swim`: `motion/<type>/footsteps/<footstep swim>/swim/`. The time between two strokes is **Footstep swim interval** in the [Gameplay Config](/basic/game-settings/gameplay-config#footsteps): a stroke takes the same time however fast it goes, so it is far less often than a footstep. Floating still makes none, and a flying entity makes none.
  - **Jumping into the water** (and not landing: the entity is in the volume) makes the landing sound of the water, once. **Leaping out** of the water makes its take-off sound. Both are the folder `jump` of the same kind of ground (`water_deep/jump/`); a folder `jump_start` or `jump_end` is used first when it exists, so a jump in and a leap out can have their own sounds.
  - Coming out of the water onto the bank makes no landing sound.
  - If the swim animation calls for the strokes itself (a *Call Method* track calling `_on_animation_swim_stroke_emit`), the movement adds none.
- The toolkit's demo has `water/walk`, `water/run` and `water/jump`. Add `water_deep/swim` (your strokes) and `water_deep/jump` (the splash) to hear a swimmer.

With **volumes inside volumes** (a pool in a cave pool) the one the camera entered last decides; when the camera leaves it, the first look comes back. Everything the look changed is put back when the camera is out.

## NPCs

An NPC in the water **swims**: the swim animations play, it floats and moves with the water's speed. Its **pathfinding stays flat** (it follows the navigation of the world and does not choose a depth), so for now an NPC does not hunt a player at the bottom of a lake. NPC navigation in 3D is planned.

## Good to know

- The volume sees the **player characters, NPCs and pets**. It does not need the collision layers of the entities to be changed.
- The surface is worked out from a **box, sphere, cylinder or capsule**. With another shape the node shows a warning and takes the position of the volume as the surface (turn **Has surface** off if there is none).
- A **swimming flag** is the only thing the animation system needs: it already has the swim animations (idle in water and swimming in eight directions). Flying has no animations of its own and uses them.
- A volume can be **moved at runtime** (a tide, a lift of water): its surface is read again every frame.

See [Movement volumes: how they are built](/advanced/world/movement-volumes) for the pieces, how to give an entity flight from a script or an effect, and the details of the breath.
