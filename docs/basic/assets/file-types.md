# Supported files and best practice

Every asset library reads **files in folders**. This page lists the file types each library accepts and what we suggest for each: the format to export, the settings that avoid trouble later, and the habits that keep a library easy to work with.

## What each library accepts

| Library | Accepted files | Notes |
|---|---|---|
| **[Meshes](/basic/assets/meshes)** | `.glb`, `.gltf`, `.fbx`, `.blend` (models with **one mesh node**), `.obj`, `.tres`, `.res` (Godot mesh resources) | Materials: `.tres`, `.res` |
| **[Model Scenes](/basic/assets/model-scenes)** | `.tscn` | Made with **Create Skeleton** or **Create Interactable** from a model you imported (`.glb`, `.gltf`, `.fbx`, `.blend`, or a scene) |
| **[Animations](/basic/assets/animations)** | `.res`, `.anim` (Godot `Animation` resources) | One file for each clip, in the folder of its package, category and subcategory |
| **[VFX](/basic/assets/vfx)** | `.tscn` for bursts, auras, beams, weather and telegraphs; `.tres`, `.res`, `.png`, `.jpg`, `.jpeg`, `.webp` for the material types | One scene for each effect |
| **[Audio](/basic/assets/audio)** | `.wav`, `.ogg`, `.mp3` | Voice lines too |
| **[Albums](/basic/assets/albums)** | `.tres` | Made by the editor |
| **[Icons](/basic/assets/icons)** | `.png`, `.jpg`, `.jpeg`, `.svg`, `.webp` | Numbered by the editor |
| **Fonts** (a language of the [Localization](/basic/game-settings/localization) tab) | `.ttf`, `.otf`, `.woff`, `.woff2` | Picked in the Localization tab |

Godot imports most of these files for you: when you put a `.glb`, a `.png` or a `.wav` in the project, Godot makes the imported copy by itself (the `.import` file next to it). **Leave the `.import` files alone** and commit them with your project.

## 3D models

### Which format

| Format | Use it? | Why |
|---|---|---|
| **glTF 2.0** (`.glb`, or `.gltf` with its files) | **Yes, first choice** | It is the format Godot recommends. It carries meshes, skins, bones, animations and materials, and exports well from Blender and most tools. A `.glb` is one file |
| **FBX** (`.fbx`) | Yes | Many asset packs are sold as FBX. Godot reads it itself. Watch the **scale** (FBX files from some tools are in centimetres, a character 100 times too big) and the **axes**; fix them in the import settings of Godot or in your 3D program |
| **Blender** (`.blend`) | Yes, if your whole team has Blender | Godot asks Blender to convert the file when you import it, so **Blender must be installed** and its path set in the Godot editor settings (*Editor Settings > FileSystem > Import > Blender*). Importing is slower, and a computer without Blender cannot import it. The editor cannot import `.blend` on a phone or in the browser. For a team, exporting a `.glb` is simpler |
| **OBJ** (`.obj`) | For plain props | It holds a static mesh and no more: no bones, no skin, no animation. Good for a sword or a shield, not for a character part that bends |
| **Godot mesh resource** (`.tres`, `.res`) | If you already have them | The toolkit keeps the settings of the mesh inside the file. `.tres` is text and easy to read in version control; `.res` is binary and smaller, and is tied to the Godot version |
| **Collada** (`.dae`) | No | Old. The mesh library does not accept it; export a glTF instead |

### One mesh node for each file

Godot imports `.glb`, `.gltf`, `.fbx` and `.blend` as a **scene**: a tree of nodes. The mesh library places a **mesh**, not a scene, so the toolkit takes the mesh of the file's **one `MeshInstance3D`**.

- **Export each piece on its own.** A sword is a file, a helmet is a file. A mesh can have several **surfaces** (a blade and a grip, each with its own material): that is still one mesh.
- A file with **more than one mesh node** works (the first mesh is used) but the editor and **Validate Database** warn about it, because the other meshes are silently left out.
- Names and nesting inside the file do not matter. A mesh under a `Skeleton3D` is fine.

### Before you export a piece

1. **Apply the scale and the rotation** (in Blender: *Object > Apply > All Transforms*). The library puts a mesh where its offsets say, and a mesh that carries a hidden scale will not sit as the editor shows it.
2. **Put the origin where it is held**: the grip of a sword, the middle of a shield, the point of a helmet that sits on the head. You can fine-tune with the position and rotation offsets of a weapon, but a good origin makes them nearly zero.
3. **Face forward and stand up the way Godot does**: +Y is up, the front of the piece looks along -Z.
4. **One material for each surface**, named for what it is. The materials of the library are separate files; the surfaces of the mesh are what they are applied to.
5. For **armor of a modular character**, export each part from the **same rig** (same bone names, same rest pose), so every part fits every other.

### Skins: only when you need them

A mesh that bends with a character is **bound to bones**: its **skin** says which bone moves which vertices. The mesh library keeps the skin of a piece as a Godot `Skin` resource that goes with the mesh. **You do not need one unless your parts have different bones.** Some asset packs have body parts with more bones than others (a hand with fingers, a boot without): each part binds only the bones it uses, so it needs its own skin to fit the skeleton properly.

- A weapon, a rigid shield, a helmet on a point, a plain mesh: **no skin**. The mesh is used as it is.
- A body part of a modular character: the skin comes **from the file** when it is a model with a skeleton (the skin of the mesh node), or from a companion file `<name>_skin.tres`, or from the mesh settings. See [Meshes](/basic/assets/meshes#skins).
- A mesh with no skin always works. The editor never asks for one.

### Where the settings of a mesh are kept

The settings of a mesh (weapon offsets, enchant and projectile points, skeleton types, material constraints, skin) are kept **inside the file** of a `.tres` or `.res` mesh. Godot rewrites the import of every other format and has no way to save into it, so for those the settings are kept in `res://src/data/meshes/mesh_settings.tres`, under the **UID** of the model file. The UID follows the file when you move or rename it **in the Godot file system dock**, so the settings stay with it. If you rename or move a file outside Godot, the settings are left behind: **Validate Database** lists settings whose file is gone.

You never need to open the settings file. Edit the mesh in the mesh editor and it is written for you.

## Animations

The animation library holds Godot `Animation` resources (`.res` or `.anim`), one file for each clip, so the map of an entity type can name a clip and play it.

- **Author the clips in your 3D program** and export them with the character or on their own (`.glb` is best). In Godot, the **Advanced Import Settings** of the model can save each clip as a file (*Animation > Save To File*), which makes the `.res` the library reads. You can also save any `Animation` from Godot's animation panel with *Save As*.
- **Keep the same bone names** as the skeleton the animation will be played on. A clip made for another rig plays wrongly or not at all. Godot's **retargeting** (humanoid bone map) in the import settings brings clips of different packs onto one skeleton.
- **Name the files for what they do**, the way the library does (`walk_f`, `walk_b`, `attack_r`). The editor lists files by name.
- **Loop** only the clips that loop (idles, walks, the middle of a status effect). Set it on the `Animation` or in the import settings.

## Audio

- **Short sounds** (hits, footsteps, interface clicks): **`.wav`**. It needs no decoding and plays at once.
- **Music, ambience and voice lines**: **`.ogg`** (Vorbis). It is much smaller than `.wav` and loops cleanly. `.mp3` also works, but it can leave a small gap when it loops, so keep it for sounds that play once.
- **Mono** for a sound that comes from a place (a footstep, a door, a spell): the position and the distance give it its direction. **Stereo** suits music and ambience that fill the room.
- **Levels**: leave a little room (peaks around -3 dB) and give the same kind of sounds the same loudness; the volume of each [selection](/basic/assets/audio) can fine-tune.
- **Loops**: turn *Loop* on in the Godot import settings of the file for a sound that repeats, and put it in a **loop** folder; put sounds that play once in a **non-loop** folder.
- **Voice lines in other languages**: the same file name in a folder of the language: `voicelines/<character>/<language>/<file>`. See [Localization](/basic/game-settings/localization#voice-lines-in-other-languages).

## Visual effects

- A VFX is a **`.tscn` scene** you build in Godot (particles, a mesh, a light, an animation player) and put in the folder of its type. The library plays it from a pool, so it must **clean up after itself**: no looping that never ends in a burst, and an `AnimationPlayer` with the names the type expects (start, loop and end for the types that have phases).
- **Keep the effects small**: a few hundred particles, no more lights than needed, short lifetimes. Many effects can play at once in a fight.
- **Textures** of the material types: `.png` (or `.webp` for a smaller file), square, with sizes that are powers of two when the effect tiles them.

## Icons

- **`.png`** is the first choice (or `.webp` for smaller files). `.svg` stays sharp at any size and suits plain symbols.
- **Make them all one size** for one kind of icon (items 128, abilities 128, interface 64). Mixed sizes look uneven in a bar.
- **Import them with the editor.** It copies the files in and **numbers** them with the first free id. Do not rename or delete a numbered icon: everything that points at the id breaks.

## Naming and folders

- Names in `lower_case_with_underscores`, no spaces. The editor shows them capitalised and reads them from the folder.
- Let the **folder be the organisation**: the library finds a thing by where it is. Make new categories with the **Settings** menu of each editor, not by hand, so they get all the folders they need.
- Commit the `.import` files and the files in `src/data/`. Do not commit the `.godot/` folder.

## See also

- [Walkthrough: from a model on disk to a character in the game](/basic/assets/walkthrough), the editors one after another.
- [Meshes](/basic/assets/meshes), [Model Scenes](/basic/assets/model-scenes), [Animations](/basic/assets/animations), [VFX](/basic/assets/vfx), [Audio](/basic/assets/audio), [Icons](/basic/assets/icons).
- [How the mesh library reads a file](/advanced/assets/mesh-pipeline) for the details behind this page.
