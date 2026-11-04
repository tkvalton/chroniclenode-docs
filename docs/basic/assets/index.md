# Assets

The **assets** are the art the game is made of: visual effects, icons, terrain textures and foliage, and what the project weighs. (The models, meshes and animations of creatures have a category of their own: [Entity Assets](/basic/entity-assets/). Sound has one too: [Audio](/basic/audio/).) The **Assets** category of the editor is where you see what the project has, add to it, and check that it is in order.

Unlike the rest of the editor, assets are not `.tres` records with an id. They are **files in folders**, and the folder is the organisation: the editor reads `res://src/data/` and lists what it finds. You add an asset by putting a file in the right folder (or with the **Import** and **Create** buttons, which do it for you), and **Refresh** reads the folders again.

| Page | What it holds | Folder |
|---|---|---|
| [VFX](/basic/assets/vfx) | Visual effects: bursts, auras, beams, weather, telegraphs, materials | `src/data/vfx/` |
| [World Assets](/basic/assets/world-assets) | The scenes you place by hand to dress a world (houses, trees, props), in categories, with a 3D preview; the foliage library is listed too | `src/data/world_assets/` |
| [Icons](/basic/assets/icons) | The pictures of items, abilities and the interface, by number | `src/data/icons/` |
| [Terrain Textures](/basic/assets/terrain-textures) | The textures the terrain is painted with: maps, tiling, surface types, packs | `src/data/worlds/terrain/textures/` |
| [Foliage](/basic/assets/foliage) | Ground clutter (grass, weeds, pebbles: a mesh) and foliage (trees, bushes: a scene) that the terrain scatters | `src/data/worlds/foliage/` |
| [Build Size](/basic/assets/build-size) | What the project weighs and where it could weigh less: sizes, duplicates, oversize pictures, sounds, files nothing uses | the whole project |

## Where to start

- [Entity Assets](/basic/entity-assets/): the model scenes, equipment meshes, animations and weapon profiles of creatures.
- [Walkthrough: from a model on disk to a character in the game](/basic/assets/walkthrough) goes through the editors in order with one example.
- [Supported files and best practice](/basic/assets/file-types) lists what each library accepts and what we suggest.

## How they connect to the rest

```text
 Entity Assets > model scenes, equipment meshes, animations and weapon profiles: see their own chapter
 VFX ──────────► Abilities, effects, interactables, worlds (weather)
 Audio ────────► Abilities, entities (voice, footsteps), interactables, worlds (through Albums)
 Icons ────────► Items, abilities, anything with an icon picker
```

The editors never move or rename files behind your back, with two exceptions that they tell you about: **importing** copies files into the right folder, and **numbering** icons renames them to their ids.

## The tools every asset page has

- **Search** and **Refresh**. Refresh reads the folders again; use it after you add files in the Godot file system.
- **Import**: copy files from anywhere into the library, asking where they go.
- **Settings** (the menu): make a new folder or category, **Validate** the library, and a few clean-up tools.
- A preview and a few lines of information about the selected asset.

## See also

- [How the asset libraries are built](/advanced/assets/).
