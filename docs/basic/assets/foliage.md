# Foliage

The **foliage library** is everything the terrain scatters over the ground: grass, weeds and pebbles (**ground clutter**), and trees, bushes and big rocks (**foliage**). **Assets > Foliage** lists the entries, one for each thing you can scatter. An entry is a row in the **Ground clutter** list of a [terrain texture](/basic/assets/terrain-textures#ground-clutter), and a row of the tool's dock.

::: info Where this is
The library and its editor are built. Drawing the scatter in the world (the cells, the wind, the brushes) is the next step of the foliage system, so for now entries and the texture lists can be made and saved.
:::

## Two kinds

| | Ground clutter | Foliage |
|---|---|---|
| **Is** | A **mesh** and the materials it is drawn with | A **scene** you build: a mesh, a StaticBody3D, the collision |
| **Collision** | Never | Whatever the scene has (it is optional) |
| **Seen from** | Near the camera (40 m by default) | Far (250 m by default) |
| **Shadows** | Off by default | On by default |
| **Wind** | Yes | Yes |
| **Bends away from the player walking through it** | Yes | No |
| **Takes ground from the navigation** | No | Yes: a footprint |
| **The player's setting** | The *Ground clutter* amount of the display settings makes it more or less | Not touched (it is level design) |

## An entry

Make one with the **New** button of the list, name it, and choose its kind.

### Source

- **Ground clutter: Mesh.** A mesh file (`.glb`, `.gltf`, `.fbx`, `.obj`, `.res`, `.tres`: the same files as the [Meshes](/basic/assets/meshes) library takes; a scene file with one MeshInstance3D gives that mesh). The entry remembers the file by its unique id, so moving or renaming the file does not break it.
- **Materials.** The editor lists **one row for each surface of the mesh** (it reads the number from the mesh). Choose a material for a surface, or leave it empty to keep the one the mesh came with.
- **Variants.** Several entries can use **the same mesh with other materials**: right-click the entry in the list and choose **Duplicate**, then change the materials. *Grass tuft* and *Grass tuft dry* are two entries and two rows in the lists: each gets its own weight on every texture, which is how you shape the variety.
- **Foliage: Scene.** The scene of the tree or bush. It is **taken apart** when the game loads it: its MeshInstance3D nodes are drawn in bulk (a forest of one tree is a few draw calls), the shapes of its StaticBody3D and CollisionShape3D nodes are made real only near the player. Lights, particles, scripts and other nodes are not used: the editor lists them at the top of the section.

### Placing

| Field | What it does |
|---|---|
| **Density** | The most instances a square metre can have. The weight of the texture and the player's setting then thin it out. Grass 2 to 8, pebbles 0.2 to 1, a tree 0.005 to 0.05 |
| **Smallest size, Biggest size** | The size of an instance is a random number between the two (1 = as the mesh is) |
| **Height factor** | The height also varies on its own: the size is multiplied by a number between these two (1 and 1: the height follows the size) |
| **Random rotation** | Each instance faces a random way round |
| **Lean with the ground** | 0 stands straight up, 1 is at right angles to the ground |
| **Brightness variation** | How much darker some instances are than others |
| **Sunk into the ground** | Metres the instance is put into the ground |
| **Lowest and highest slope** | The slope it grows on, in degrees. A cliff plant: lowest 50. Grass: highest 35 |
| **Lowest and highest height** | Metres above sea. Both 0: everywhere |
| **Patchiness, patch size** | A slow noise leaves part of the ground bare (0.5 about half) in patches of the size you give |

The same cell of ground always gives the same instances, and a lower amount only takes some away: **nothing moves** when the player changes the clutter setting.

### View, Movement, Navigation

| Field | What it does |
|---|---|
| **View distance** | How far from the camera it is drawn, before the player's view distance scale. 0 = the usual for the kind |
| **Casts shadows** | Off for clutter: many small shadows cost a lot and are hardly seen |
| **Wind** | How much the wind bends it |
| **Brush through** | Ground clutter: how much it bends away from the player |
| **Footprint radius** | Foliage: the radius of ground it takes from the [navigation](/basic/world/terrain-navigation). 0: from the collision shapes of the scene |

## The checks

The top of the Source section lists what is wrong: no mesh, a mesh file that cannot be read, more materials than surfaces, a scene with no mesh, nodes of a scene that are not used, sizes or slopes the wrong way round.

## See also

- [Terrain Textures](/basic/assets/terrain-textures#ground-clutter): the list of clutter that grows on a texture.
- [Meshes](/basic/assets/meshes): the mesh files.
