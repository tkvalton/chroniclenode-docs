# Meshes

The **mesh library** holds everything that is worn, held or painted onto a character: weapons, the body parts and attachments of armor, facial features, and the materials that colour them. **Assets > Meshes** shows it as a tree with a search box and a filter, and edits the settings of the selected mesh.

Meshes are `.tres`, `.res` or `.obj` files. They live under `res://src/data/meshes/`, and **the folder a mesh is in is what it is**:

| Folder | What it holds |
|---|---|
| `equipment/weapons/<category>/` | Weapons, grouped by category (`swords`, `bows`, `staves`) |
| `equipment/body_parts/<tag>/<part>/` | The body-part meshes of [modular](/basic/assets/model-scenes#skeletons) characters: a chest plate, boots, gloves. `<tag>` is the equipment tag of the skeleton (`humanoid`); `<part>` is head, torso, upper arm, lower arm, hand, hips, upper leg, lower leg, foot |
| `equipment/attachments/<tag>/<slot>/` | Pieces that attach to a point: helmets, cloaks, shoulder guards, belts. `<slot>` is the attachment point |
| `facial/<skeleton tag>/<feature>/` | Eyes, eyebrows, ears, nose, teeth, hair, facial hair |
| `materials/<category>/` | Materials (`metals`, `woods`, `fabrics`) |

A mesh can have a **skin** next to it: a second file with the same name where `_mesh` is replaced by `_skin` (`plate_chest_mesh.tres` and `plate_chest_skin.tres`). The skin is the Godot `Skin` resource that binds the piece to the bones of the skeleton, so it bends with the character. A piece with a skin shows a link mark in the tree.

The [items](/basic/items/items#equipment) you make point at these meshes, and the [equipment types](/basic/equipment-definitions/equipment-type) say which body parts a piece replaces.

## The editor

The tree lists the meshes by folder with their type. The **Tree filter** chooses what to show, and the line at the bottom counts equipment, facial meshes and materials.

| Control | What it does |
|---|---|
| **Search**, **Refresh** | Filter; read the folders again |
| **Import** | Copy mesh files into the library; you choose the category |
| **Settings > Add Weapon Category** | Makes a folder for a new kind of weapon (`daggers`, `crossbows`) |
| **Settings > Add Skeleton Equipment Tag** | Makes the folders for a new kind of skeleton (`humanoid`, `beast`, `undead`): a `body_parts/<tag>/` folder with one folder for each body part, and an `attachments/<tag>/` folder with one for each attachment point |
| **Settings > Add Material Category** | Makes a folder for a kind of material |
| **Settings > Find & Link All Skins** | Looks for the `_skin` partner of every mesh and links them |
| **Settings > Validate Database** | Checks the whole library and lists errors (red) and warnings (yellow) |
| **Settings > Clean Up Metadata** | On the selected mesh, removes the old whole-mesh material settings (allowed, preferred and category) and keeps the per-surface ones |
| **Settings > Generate Thumbnails** | Makes the preview pictures |

## Settings of a mesh

Select a mesh to see its category and the settings it can have. They are saved **in the mesh file** itself.

### Material constraints

Every surface (layer) of a mesh can be restricted to some materials, so a player or an item cannot paint a sword blade with fabric:

| Control | What it does |
|---|---|
| **Layer** | Which surface of the mesh you are editing ("Surface 0: blade") |
| **Category filter** | Shows the materials of one category |
| **Available / Allowed materials** | Move materials between the two lists with **Add Selected** and **Remove Selected**. A surface with no allowed list accepts any material |
| **Preferred material** | The one used when nothing else is chosen |

### Weapons

A weapon mesh has three more settings, with fine steps (0.001):

| Setting | What it does |
|---|---|
| **Position offset**, **Rotation offset** (degrees) | Fine-tunes how the weapon sits in the hand. Use it when the model's grip is not at its origin |
| **Enchant VFX position** | Where the glow of an enchantment appears on the weapon |
| **Projectile spawn point** | Where arrows, bolts and shots leave the weapon |

## See also

- [Model Scenes](/basic/assets/model-scenes) for the skeletons these go on, [Items](/basic/items/items) and [Equipment Type](/basic/equipment-definitions/equipment-type).
- [How the mesh library is built](/advanced/assets/).
