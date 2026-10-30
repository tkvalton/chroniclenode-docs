# Terrain Textures

A **terrain texture** is one entry of the library your terrain is painted from: grass, rock, sand, snow, a dirt road. **Assets > Terrain Textures** is the list of them. A terrain keeps only the textures it is painted with, and each **16 m chunk** of it holds up to **8** of them (the number is set in [Terrain Settings](/basic/game-settings/terrain-settings)), so the library can be as big as you like.

You paint the ground with these textures in the terrain editor: see [Terrain](/basic/world/terrain) and [Painting](/basic/world/terrain-painting). Textures are made here, in the Database; the texture bar of the 3D editor only lists them (press its **Refresh** button after adding some).

## The library folder

The left side of the tab is a **tree of files**, like [Foliage](/basic/assets/foliage). **One folder is one texture**: put the maps of a texture in a folder of

`res://src/data/terrain/library/`

and the tab makes the entry for it, with its maps and a picture (the albedo):

```
src/data/terrain/library/
  grass/                 grass_albedo.png, grass_normal.png, grass_orm.png     -> the texture Grass
  forest/                a folder of folders is a pack
    moss/                moss_albedo.png, moss_normal.png                      -> the texture Moss, in the pack Forest
```

- The maps are told apart by the **words in their names** (albedo, basecolor, diffuse, color / normal, nrm / orm, arm / roughness / height, displacement, bump / emission, emissive / sss, subsurface), the same words the drag and drop below uses. A file with *orm* in its name turns on *Roughness texture is ORM*. A folder with one picture whose name says nothing takes it as its albedo. A folder with no albedo is not a texture.
- The **name** comes from the folder (`cobble_road` becomes *Cobble road*). The **pack** is the name of the folder the texture's folder is in; a texture directly in the library folder has none.
- **Refresh** looks for new folders. Entries are only made for folders that have none: the numbers and the maps you changed are never overwritten. **Maps from the folder** (in the Texture maps section) puts the maps of the folder in the texture again.
- A texture you made **by hand** before, whose albedo is a file of a library folder, becomes the entry of that folder and keeps its numbers. Textures with no folder stay in **Textures without a folder**. An entry whose folder is gone is kept (the terrain may paint with it) and shows in red under **Missing folders**.
- Search the tree by name. Move folders in Godot's FileSystem dock as you like: the entry follows the albedo file.

## Texture maps

A texture is made of up to seven **texture maps**: the colour, the bumps, how rough (and how shadowed, and how metallic) it is, how high each point is, what glows, and how much light passes through it.

The settings are in five folding **sections**, so you can keep the ones you are not using shut: **Colour and normal**, **Roughness, occlusion and metal**, **Height and depth**, **Emission and subsurface** (shut at first) and **Detiling**. The tables below list every field; the sections only group them.

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
| **Anti-tiling** | Ticked by default. Turn it off for textures whose regular pattern is the point: bricks, floor tiles, paving (see [Detiling](#detiling)) |
| **Detile strength** | How much of the hex tiling shows for this texture: 0 none (only the second look far away), 1 fully | 1 |
| **Detile rotation** | How far each look is turned: 0 not at all (a texture with lines, such as planks or a road), 1 any angle | 1 |
| **Detile contrast** | The contrast ramp of hex tiling for this texture. 0 = the one of the terrain; 0.5 blurs, 0.75 is the recommended one, near 0.99 shows the grid | 0 |
| **Far detiling** | How much of the second look is mixed in far away: 0 none, 1 as it is | 1 |
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

### Ground clutter

A texture can grow **ground clutter** by itself: at the bottom of its editor the **Ground clutter** list has a row for each entry of the [foliage library](/basic/assets/foliage) that grows on it, and a **weight** for each (1 covers the ground as the entry's density says, 0.2 is sparse). Grass ground can grow tufts and dry weeds, sand pebbles, a path nothing.

- The clutter follows the paint: **painting another texture over the ground takes the clutter away**, nothing is stored for it. Only clutter you place by hand is kept, and the paint tool has a *Clear hand-placed clutter where I paint* tick (on by default) for that.
- The same mesh with other materials is several entries: give each its own weight to shape the variety.
- The **weight** is how much of the entry's **density** grows on this texture (1 = all of it, 0.2 = a fifth). It never makes it thicker than the density. See [How much grows, and where](/basic/world/terrain-foliage#how-much-grows-and-where).
- An empty list: nothing grows by itself. Foliage (trees, bushes) is not in this list: it is placed by rules and by hand.
- The rows only list ground clutter; an entry that was deleted shows as *missing* until you change or remove the row.

### Detiling

A texture is a small picture repeated over the ground, and you can see the repeats line up in rows. **Detiling** hides that. **How** is chosen on the **terrain** (**Terrain settings > Detiling** in the 3D toolbar, kept in the terrain's manifest), and **how much, for this texture** is set here:

| Method of the terrain | What it does | Costs |
|---|---|---|
| **Off** | The textures repeat as they are | nothing |
| **Blend** | Beyond about 12 m the colour texture is read a second time (turned, at another scale) and mixed in where a slow noise says so. Near the camera nothing changes | one more colour read per texture, far away |
| **Hex tiling** | Near and in the middle distance (the **Hex reach**, 60 m) every texture is read **three times** at the corners of a triangle grid, each with a random offset and turn, and the looks are mixed so that the **contrast is kept** and the grid does not show (after Mikkelsen, *Practical Real-Time Hex-Tiling*, 2022). The colour and the normal map are done together so the bump follows the colour; the roughness, occlusion and metal map too if **Hex tiling for the ORM map too** is on. Beyond the reach the second look of Blend takes over | three reads per map, for the strongest textures of a chunk only |

**Why Blend exists.** It costs one extra read per texture and only far away, so it is the right choice for a world that must run on weak hardware, and it is the default so that terrains made before hex tiling look as they did. It is also the method **inside** Hex: beyond the hex reach the second look takes over, because three reads per map are not worth it where the repeat is a few pixels wide. Hex is the one that fixes the repeat close up.

The brightness of the ground also varies a little over 50 to 270 m (the **Colour variation** of the terrain; 0 turns it off). The level of **terrain detail of the player** can only lower what the terrain asks for: **Low** turns detiling off, **Medium** gives hex tiling to one texture of a chunk, **High** to three, **Ultra** to four (the **Hex detiling slots** column of [Terrain Settings](/basic/game-settings/terrain-settings)); a level with no slots uses Blend.

**The preview.** At the bottom of the Detiling section three squares show the colour map of the texture repeated over the ground as it is (**As it repeats**, where the repeats line up in rows), with **Hex tiling (near)** and with the **Second look (far)**. They follow the numbers as you change them, so you can tune a texture without switching to the 3D viewport, and they are drawn by the same code as the ground. A line above them says which method the terrain of the open scene uses: the hex numbers only do something when it is **Hex tiling** (a terrain on **Blend** only uses the right-hand square, beyond 12 m). **Repeats across** sets how many repeats fit in a square. **Show the blend zones** paints in red where the hex tiling mixes two or three looks of the texture: the **Detile contrast** shows best there (a higher contrast makes the zones narrower and sharper, a lower one wider and softer), because on the plain squares its effect is small. The numbers of the section are sliders with their value next to them; **Far detiling** only changes the right-hand square. The preview shows the colour map; on the ground the bump of the normal map follows the same offsets.

A texture opts out with its own **Anti-tiling** tick (bricks, tiles and pavement should: a regular pattern is what they are). For a texture with lines you want to keep roughly straight (planks, a road), set **Detile rotation** to 0: the looks are still moved but not turned, so the lines stay parallel. A texture with a **parallax depth** is detiled too, but its depth is read at the plain places: close up the depth and the colour can disagree a little; lower its **Detile strength** if it shows.

| Terrain option | What it does | Default |
|---|---|---|
| **Method** | Off, Blend or Hex tiling | Blend |
| **Hex reach** | How far from the camera hex tiling reaches (m); it fades out over the last 40 percent | 60 |
| **Hex textures** | How many textures of a chunk get hex tiling (the strongest ones; the others keep Blend) | 3 |
| **Contrast** | The contrast ramp for a texture that does not set its own | 0.75 |
| **Rotation** | A master number for the turning of every texture: 0 turns no look | 1 |
| **Colour variation** | How much the brightness of the ground varies over 50 to 270 m | 1 |
| **Hex tiling for the ORM map too** | Three more reads per texture | off |

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

**Pack** is a name that groups textures: "Forest", "Desert", "Dungeon". Type a name, or choose one of the packs that exist with the **Packs** button. The texture bar of the 3D editor has a menu that shows one pack at a time (or **All textures**, or **No pack** for the textures that belong to none), so a big library stays easy to pick from. A texture belongs to one pack; leave it empty for none.

## Surface

**Surface type** is the kind of ground for footsteps and effects: the same words your footstep sounds use (*grass*, *rock*, *sand*). Empty uses the default surface of the terrain. A character walking on ground painted with the texture makes the sound of its surface type.

## Weather

How the weather changes this ground (when it is wet and snowy is on the [Ground weather](/basic/world/ground-weather) page). It does not use up one of the 8 texture slots of a chunk: rain and snow are drawn over the ground by the terrain itself, and these numbers say how each texture reacts.

| Field | What it does |
|---|---|
| **Wet darkening** | How much darker it gets when it is wet: 0 not at all (grass), 0.5 a lot (sand, rock) |
| **Wet roughness** | How rough it is when fully wet (lower is shinier) |
| **Snow cover** | How much of the snow layer sticks to it when it snows: 1 all of it, 0 none (a swept road, a roof, lava) |

## Footprints

Whether walking on this ground leaves footprints (the full list of rules is on the [Ground weather](/basic/world/ground-weather#footprints) page). Snow on the ground and soft ground in heavy rain leave footprints whatever these say.

| Field | What it does |
|---|---|
| **Leaves footprints** | Walking on this ground leaves footprints: on for sand, mud, soft earth. Off for grass, rock and stone |
| **Footprint fade** | How many seconds a footprint stays before it fades out |
| **Footprint colour** | The colour of the footprint and how strong it is (the alpha): dark for mud and wet sand, pale for dust |

## Tips

- Keep the library textures all the same size; the library resizes them to the size in the Terrain Settings anyway.
- Give a texture a **surface type** even when you do not need footsteps yet: it is the name effects and spawners will ask for.
- A texture with no albedo is shown as a problem at the top of the editor and would paint grey.
- All the maps of a texture should be the same size; the library resizes them to the size in the Terrain Settings anyway.
- Group textures into **packs** as soon as the library has more than a dozen: the terrain editor shows one pack at a time.
