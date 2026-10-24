# Foliage

The **foliage library** is everything the terrain scatters over the ground: grass, weeds and pebbles (**ground scatter**), and trees, bushes and big rocks (**foliage**). **Assets > Foliage** shows the files of the library as a tree with a picture of each, and the settings of the one you select. There is **an entry for every file**: you never choose a mesh or a scene by hand, you put the file in the folder.

An entry is a row in the **Ground clutter** list of a [terrain texture](/basic/assets/terrain-textures#ground-clutter) and a thing the **foliage tools** of the [terrain editor](/basic/world/terrain-foliage) paint.

## Two folders

| Folder | What goes in it | Kind |
|---|---|---|
| `res://src/data/foliage/ground_scatter/` | **Meshes**: `.glb`, `.gltf`, `.fbx`, `.obj`, `.blend`, and `.res` / `.tres` files that hold a mesh | Ground scatter |
| `res://src/data/foliage/foliage/` | **Scenes**: `.tscn`, `.scn`, `.glb`, `.gltf`, `.fbx`, `.blend` | Foliage |

Make folders inside them for your own order (`grass/`, `trees/`): the tree of the tab follows them. Materials and textures go elsewhere in your project (the toolkit's test set keeps them in `res://assets/foliage/`); only meshes and scenes are read from the two folders. Folders that start with a dot are ignored.

The tab makes the entries when it opens and when you press **Refresh**:

- A file with no entry gets one, named after the file (`grass_tuft_dry.res` becomes *Grass tuft dry*) with the usual numbers of its kind. Change them in the tab.
- A file that **moved** keeps its entry: the entry remembers the file by its unique id.
- An entry whose file is **gone** is kept (a texture may use it) and shows in red under **Missing files**. Put the file back, or **Delete entry**.

## The tab

The **left side** is the tree: the two folders and the files in them, each with its **picture**. Search by name, filter to *Ground scatter*, *Foliage* or *With problems*, **Refresh**, and **Pictures** to make the missing pictures or all of them again.

The **pictures** are made by the editor and kept in `res://src/data/foliage/.thumbnails/` (add that folder to `.gitignore` if you do not want them in version control). A mesh is drawn by the editor's own preview. A scene is drawn by the toolkit from a corner above, lit by a sun.

The **right side** shows the big picture, the file, the **name** of the entry and its buttons:

| Button | What it does |
|---|---|
| **Open in Editor** | Opens the scene (foliage) or the mesh in the editor, to change it |
| **Show in FileSystem** | Selects the file in Godot's FileSystem dock |
| **Add variant** | Makes another entry for the same file (see below) |
| **Reset to defaults** | Puts the numbers and the materials back as a new entry has them. For a variant: **Delete variant**. For an entry whose file is gone: **Delete entry** |

Problems of the entry are listed under the buttons (a mesh that cannot be read, more materials than surfaces, a scene with no mesh, nodes of a scene that are not used, sizes or slopes the wrong way round). Entries with a problem are orange in the tree.

## Two kinds

| | Ground scatter | Foliage |
|---|---|---|
| **Is** | A **mesh** and the materials it is drawn with | A **scene** you build: a mesh, a StaticBody3D, the collision |
| **Collision** | Never | Whatever the scene has (it is optional) |
| **Seen from** | Near the camera (40 m by default) | Far (250 m by default) |
| **Shadows** | Off by default | On by default |
| **Takes ground from the navigation** | No | Yes: a footprint |

A foliage scene is **taken apart** when it is loaded: its MeshInstance3D nodes are drawn in bulk (a forest of one tree is a few draw calls), and the shapes of its StaticBody3D nodes become real collision bodies only **near the player and the party** (a pool: the trees of the whole world are not physics objects). Lights, particles, scripts and other nodes are not used: the tab lists them as a problem of the entry.

## Materials and variants

For ground scatter the tab shows **one row for each surface of the mesh**. Choose a material for a surface, or leave it empty to keep the one the mesh came with.

A **variant** is another entry for the same file, usually with other materials: select the entry, press **Add variant**, name it (*dry*, *blue*) and change the materials. *Grass tuft* and *Grass tuft - dry* are two entries with their own numbers, and two rows in the lists: each gets its own weight on every texture, which is how you shape the variety. A variant sits under its file in the tree.

## Placing

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

## View and Navigation

| Field | What it does |
|---|---|
| **View distance** | How far from the camera it is drawn, before the player's view distance scale. 0 = the usual for the kind |
| **Casts shadows** | Off for ground scatter: many small shadows cost a lot and are hardly seen |
| **Footprint radius** | Foliage: the radius of ground it takes from the [navigation](/basic/world/terrain-navigation#trees-and-other-foliage). 0: from the collision shapes of the scene (no shapes, no footprint) |

::: tip Wind and bending away from the player
Entries have no wind or brush-through numbers: movement in the wind and under the player's feet is done by the **shader of the material** you give the mesh (a vertex shader that moves the top of a blade). The toolkit only draws the instances.
:::

## See also

- [Foliage tools](/basic/world/terrain-foliage): painting more or less of an entry on the ground.
- [Terrain Textures](/basic/assets/terrain-textures#ground-clutter): the list of scatter that grows on a texture.
- [Meshes](/basic/assets/meshes): the mesh files.
