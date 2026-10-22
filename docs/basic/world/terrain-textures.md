# Terrain Textures

A **terrain texture** is one entry of the library your terrain is painted from: grass, rock, sand, snow, a dirt road. **World > Terrain Textures** is the list of them. A terrain keeps only the textures it is painted with, and each **16 m chunk** of it holds up to **8** of them (the number is set in [Terrain Settings](/basic/game-settings/terrain-settings)), so the library can be as big as you like.

::: info The terrain is being built in stages
The library and the settings come first; painting the ground with these textures arrives with the terrain editor. You can already make your library.
:::

## Pictures

| Field | What it does |
|---|---|
| **Albedo** | The colour picture. Use a **seamless** (tileable) picture, **square**, a **power of two** (1024 x 1024 is the default size of the library: bigger ones are shrunk to it and smaller ones enlarged). The editor tells you when a picture is not square or not a power of two |
| **Normal map** | The bumps. Leave empty for flat shading. It should be the size of the albedo (it is resized if not) |
| **Roughness map** | A grey picture of how rough the ground is: white is rough, black is shiny. Empty: the **Roughness** number below is used |
| **Tint** | Multiplies the colour (white leaves the picture as it is) |
| **Tile size (m)** | How many metres of ground one repeat of the picture covers. Rock 4 to 8, grass 2 to 4, fine sand 1 to 2 |
| **Normal strength** | How strong the bumps are (1 = as the map is) |
| **Roughness** | How rough the ground is when there is no roughness map (1 rough, 0 a mirror) |

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

- Keep the library pictures all the same size; the library resizes them to the size in the Terrain Settings anyway.
- Give a texture a **surface type** even when you do not need footsteps yet: it is the name effects and spawners will ask for.
- A texture with no albedo is shown as a problem at the top of the editor and would paint grey.
