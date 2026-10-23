# Terrain Textures

A **terrain texture** is one entry of the library your terrain is painted from: grass, rock, sand, snow, a dirt road. **Assets > Terrain Textures** is the list of them. A terrain keeps only the textures it is painted with, and each **16 m chunk** of it holds up to **8** of them (the number is set in [Terrain Settings](/basic/game-settings/terrain-settings)), so the library can be as big as you like.

You paint the ground with these textures in the terrain editor: see [Terrain](/basic/world/terrain) and [Painting](/basic/world/terrain-painting). Textures are made here, in the Database; the Terrain tab of the 3D editor only lists them (press its **Refresh** button after adding some).

## Texture maps

A texture is made of up to seven **texture maps**: the colour, the bumps, how rough (and how shadowed, and how metallic) it is, how high each point is, what glows, and how much light passes through it.

| Field | What it does |
|---|---|
| **Albedo texture** | The colour. Use a **seamless** (tileable) image, **square**, a **power of two** (1024 x 1024 is the default size of the library: bigger ones are shrunk to it and smaller ones enlarged). The editor tells you when a texture is not square or not a power of two |
| **Normal texture** | The bumps. Leave empty for flat shading. It should be the size of the albedo (it is resized if not) |
| **Roughness texture** | How rough the ground is: the **green channel** is read, so a plain grey texture works (white is rough, black is shiny) and so does an **ORM texture**. Empty: the **Roughness** number below is used |
| **Roughness texture is ORM** | Tick it when the roughness texture is an ORM texture (below). Its red channel then darkens the cracks of the colour |
| **Occlusion strength** | How much of the ORM occlusion darkens the colour: 0 none, 1 all of it |
| **Height texture** | A grey texture of how high each point of this texture is (white is high). It shapes how the texture **blends with its neighbours** (below). Empty: the texture blends plainly |
| **Height blend** | How much the height texture shapes the blend: 0 not at all, 1 a lot |
| **Parallax depth (m)** | How deep the height texture makes the ground **look**, in metres, when you see it at an angle (below). 0 = flat. A few centimetres is plenty: 0.03 for cobbles, 0.08 for rough rock |
| **Anti-tiling** | Ticked by default. Turn it off for textures whose regular pattern is the point: bricks, floor tiles, paving (see [Anti-tiling](#anti-tiling)) |
| **Metallic** | How metallic the ground is, 0 to 1: a metal plate, a grate, iron ore. With an ORM texture its metal (blue) channel is multiplied by this: 1 uses the texture as it is, 0 ignores it. Without an ORM texture the whole texture has exactly this metallic. The colour texture is then the colour of the shine, as for any metal material |
| **Subsurface texture** | How much light passes through the surface: backlit grass and leaves, ice, thin sand. White = a lot. The red channel is read. Empty: none |
| **Subsurface strength** | How much subsurface scattering the texture gets (1 = as the texture says) |
| **Emission texture** | What glows: lava cracks, crystals, painted lamps. Its colour is added as light whatever the lighting. Empty: nothing glows |
| **Emission strength** | How bright it glows (1 = the colour of the texture as it is) |
| **Tint** | Multiplies the colour (white leaves the texture as it is) |
| **Tile size (m)** | How many metres of ground one repeat of the texture covers. Rock 4 to 8, grass 2 to 4, fine sand 1 to 2 |
| **Normal strength** | How strong the bumps are (1 = as the texture is) |
| **Roughness** | How rough the ground is when there is no roughness texture. With a roughness texture it **multiplies** it (leave it at 1 to use the texture as it is) |

### What an ORM texture is

**ORM** packs three grey textures into the red, green and blue channels of one image: **O**cclusion (shadow in the cracks), **R**oughness and **M**etallic. Material makers such as Material Maker, Substance and ambientCG export them. It is **not only roughness**: the roughness is its green channel, the occlusion its red channel and the metal its blue channel. You do not need to split it: use the ORM file as the roughness texture and tick **Roughness texture is ORM**. The metal is ignored until you set the texture's **Metallic** above 0 (most ground is not metal).

### Anti-tiling

A texture is a small picture repeated over the ground, and from far away you can see the repeats line up in rows. **Anti-tiling** hides that: beyond about 12 m the colour texture is read a second time (turned, at another scale) and mixed in where a slow noise says so, and the brightness of the ground varies a little over 50 to 270 m. Near the camera nothing changes. It only costs when the terrain detail level has **Anti-tiling** ticked in [Terrain Settings](/basic/game-settings/terrain-settings), and a texture can opt out with its own **Anti-tiling** tick (bricks, tiles and pavement should: a regular pattern is what they are).

### What a subsurface texture is

**Subsurface scattering** is light that goes into a thin material and comes out softer or on the other side: the glow of grass blades with the sun behind them, the inside of ice. Material Maker exports it as an `_sss` texture (not a shadow map). It only does something where the sun can shine through, so use it on grass, leaves, ice and similar; it costs one more array and one more read, and a level can leave it out.

### What the height texture does

The ground of a terrain already has its own heights (the hills you sculpt). The **height texture** has nothing to do with them: it says how high each point **of the texture** is, so pebbles are high and the dirt between them is low. Where two painted textures meet, the terrain uses these heights to decide which shows through: sand in the gaps of cobbles, stones standing out of mud, grass blades between flagstones, instead of a smooth fade. A texture without a height texture blends the plain way, so mixing the two kinds works. The height textures cost one more texture read per painted texture near the camera, and only when at least one texture in use has one.

**Parallax** makes the same height texture show **inside one texture**. With a **parallax depth** above 0, the pebbles of a cobbled road stand out of the gaps when you look at the ground at an angle, instead of being a flat picture with shaded bumps (that is all the normal texture can do). It is drawn within about 20 m of the camera and fades out beyond that, and it needs a height texture.

### What the extra maps cost

The extra maps are optional and cost nothing when no texture in use has them. When they are used (these are estimates; the cost depends on the card):

| Map | Memory | Drawing |
|---|---|---|
| **Roughness / ORM** | One more texture array: about 5.6 MB for each texture on the graphics card at 1024 x 1024 (about a quarter of that with compression, which the terrain turns on above 16 textures) | One more texture read for each painted texture near the camera |
| **Height** (blending) | One more array, the same size | One more read for each painted texture, and a little maths where textures meet; only near the camera |
| **Parallax** | None more (it uses the height texture) | 8 more reads for each texture that has a parallax depth, within about 20 m of the camera only |
| **Emission** | One more array, the same size | One more read for each texture that glows |
| **Subsurface** | One more array, the same size | One more read for each texture that has one, and the engine's subsurface step |
| **Metallic** | None | A little maths (only when a texture has a metallic above 0) |

Each [terrain detail level](/basic/game-settings/terrain-settings) chooses which of these maps it uses, so low-end settings leave the expensive ones out and never load them.

An array holds **every** texture in use, so one texture with an ORM texture makes the whole ORM array (the others get a plain white layer). Use the maps on the textures that need them (the ones that meet at visible borders, or that you walk on and look at close), and keep plain grass and distant rock to the colour and the normal texture. On a low-end card, keep the parallax depth at 0.

## Dragging files in

You do not have to click through the file browser for every map. **Drag files from the FileSystem dock**:

- onto the **Albedo, Normal, Roughness, Height or Emission** button: that file goes there, whatever its name;
- or **several files at once** onto the **Texture maps** section (or onto any of the buttons): they are sorted by the words in their names, so a material exported as `sand_albedo.png`, `sand_normal.png`, `sand_orm.png` and `sand_heightmap.png` fills all four in one drop. The words it looks for are **albedo, basecolor, diffuse, color** (colour), **normal, nrm**, **orm, arm**, **height, heightmap, displacement, bump** **emission, emissive, glow** and **roughness**. A file with **orm** in its name also ticks **Roughness texture is ORM**.

Keep the files in the **assets/terrain** folder of your project, one folder for each texture (assets/terrain/sand/sand_albedo.png ...).

## Changing a texture that is already painted

You can change a texture while the terrain is painted with it: replace its maps, rename the files, change the numbers. The ground in the 3D viewport **follows within a couple of seconds**, whether or not the Terrain mode is on. If you **delete a texture** (the entry in the Database) that is painted somewhere, that ground turns **pink and dark squares** so you can see it (it does not go black), and the [world check](/basic/world/terrain#the-world-check) reports it as an error. Make the texture again, or paint over the ground. If you only delete or lose the **albedo file**, that ground is flat grey and the world check warns.

## Pack

**Pack** is a name that groups textures: "Forest", "Desert", "Dungeon". Type a name, or choose one of the packs that exist with the **Packs** button. The Terrain tab of the 3D editor has a menu that shows one pack at a time (or **All textures**, or **No pack** for the textures that belong to none), so a big library stays easy to pick from. A texture belongs to one pack; leave it empty for none.

## Surface

**Surface type** is the kind of ground for footsteps and effects: the same words your footstep sounds use (*grass*, *rock*, *sand*). Empty uses the default surface of the terrain. A character walking on ground painted with the texture makes the sound of its surface type.

## Weather

How the weather changes this ground. It does not use up one of the 8 texture slots of a chunk: rain and snow are drawn over the ground by the terrain itself, and these numbers say how each texture reacts.

| Field | What it does |
|---|---|
| **Wet darkening** | How much darker it gets when it is wet: 0 not at all (grass), 0.5 a lot (sand, rock) |
| **Wet roughness** | How rough it is when fully wet (lower is shinier) |
| **Snow cover** | How much of the snow layer sticks to it when it snows: 1 all of it, 0 none (a swept road, a roof, lava) |

## Tips

- Keep the library textures all the same size; the library resizes them to the size in the Terrain Settings anyway.
- Give a texture a **surface type** even when you do not need footsteps yet: it is the name effects and spawners will ask for.
- A texture with no albedo is shown as a problem at the top of the editor and would paint grey.
- All the maps of a texture should be the same size; the library resizes them to the size in the Terrain Settings anyway.
- Group textures into **packs** as soon as the library has more than a dozen: the terrain editor shows one pack at a time.
