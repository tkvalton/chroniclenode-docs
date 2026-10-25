# Using another terrain plugin

The terrain of the toolkit (the **Terrain** node) is the reference, but a world can use another terrain plugin: [Terrain3D](https://github.com/TokisanGames/Terrain3D), HTerrain, TerraBrush or a voxel terrain. The other plugin edits its own terrain with its own tools; the toolkit reads it through a **terrain provider**, so footsteps, placement, NPCs on the ground and the effects that need the ground still work.

## Setting it up

1. Put the terrain node of the plugin in the world scene, and select the **WorldScene** node.
2. Set its **Terrain provider** to the provider that matches: `Terrain3DProvider`, `HTerrainProvider`, `TerraBrushProvider` or `VoxelTerrainProvider`. Give it the plugin's terrain node (Terrain).
3. In the **Texture surface map** (or voxel type map) say which **surface type** (the words your footstep sounds use) each texture of the plugin stands for.

## What each one gives

| Feature | Toolkit terrain | Terrain3D | HTerrain | TerraBrush | Voxel Tools |
|---|---|---|---|---|---|
| Height of the ground from the data | yes | yes | yes | by physics | by physics |
| Direction (normal) from the data | yes | yes | yes | by physics | by physics |
| Holes | yes | no | no | no | no |
| Surface type (footsteps) | yes | yes | yes | yes | yes |
| Textures under a place | yes | yes (the plugin's texture ids) | no | no | no |
| **Paint layers**: painted zones and Painted spawners | yes | **no** | **no** | **no** | **no** |
| **Streaming** | yes | no (Terrain3D streams its own regions) | no | no | no |
| **Ground weather** (wet, snow, tint) | yes | no | no | no | no |

"By physics" means the toolkit finds the ground with rays against the collision the plugin makes, as it does in a world with no terrain at all. It works; it is a little slower than answering from data.

### What to use instead

- **Zones**: place **zone volumes** (a box or a shape with a priority) instead of painting; the default zone of the world covers the rest.
- **Spawners**: use **Point** and **Volume** spawners. A **Painted** spawner needs the paint of the toolkit terrain; a scene with no Terrain node of the toolkit shows a warning on it.
- **Ground weather**: the weather VFX still play; the wet and snowy look of the ground has to come from the plugin's own shader (read `TerrainWeather.get_wetness()` and `get_snow()` if you want to drive it).

## Honest note

The providers are written against the documented methods of each plugin. The plugins are not part of the toolkit's own test project, so they are tested with small stand-ins that have the methods the provider calls; if your version of a plugin names something differently, the provider falls back on the physics of the world rather than failing. Tell us which version you use.

## See also

- [Terrain](/basic/world/terrain), [Worlds](/basic/world/worlds).
- [How the providers are built](/advanced/world/terrain-providers).
