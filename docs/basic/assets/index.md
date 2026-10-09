# Assets

The **assets** are the art and sound the game is made of: the models of characters and objects, the meshes of weapons and armor, animations, visual effects, music and sound, and icons. The **Assets** category of the editor is where you see what the project has, add to it, and check that it is in order.

Unlike the rest of the editor, assets are not `.tres` records with an id. They are **files in folders**, and the folder is the organisation: the editor reads `res://src/data/` and lists what it finds. You add an asset by putting a file in the right folder (or with the **Import** and **Create** buttons, which do it for you), and **Refresh** reads the folders again.

| Page | What it holds | Folder |
|---|---|---|
| [Model Scenes](/basic/assets/model-scenes) | Skeletons for characters and creatures; scenes for interactable objects | `src/data/meshes/skeletons/`, `.../interactable_models/` |
| [Meshes](/basic/assets/meshes) | Weapon, armor-piece and facial meshes; materials | `src/data/meshes/` |
| [Animations](/basic/assets/animations) | Animation packages for each [entity type](/basic/types-and-groups/entity-types) | `src/data/animations/` |
| [VFX](/basic/assets/vfx) | Visual effects: bursts, auras, beams, weather, telegraphs, materials | `src/data/vfx/` |
| [Audio](/basic/assets/audio) | Music, ambience, voices, footsteps, ability and world sounds | `src/data/audio/` |
| [Albums](/basic/assets/albums) | Sets of music and ambience tracks for worlds and for the menus | `src/data/audio/albums/` |
| [Icons](/basic/assets/icons) | The pictures of items, abilities and the interface, by number | `src/data/icons/` |

## How they connect to the rest

```text
 Model scene ──► NPC / character / class definition ("Entity skeleton")
 Meshes ───────► Item definition (equipment mesh, weapon model) ──► shown on the model scene
 Animations ───► Entity ("Animation type"), weapon classes (animation tags), abilities (animation)
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
