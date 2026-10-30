# Build size

The **Build Size** tab (Assets) tells you what your project weighs and where it could weigh less. It only **reads** the files: it changes nothing in your project (apart from the *always include* list below). Press **Scan**; it takes a few seconds.

A game is usually big for three reasons: **pictures** that are bigger than they need to be, **asset packs** with hundreds of files the game never uses, and **sounds** kept in a form that is too big. The tab finds all three.

## The tabs

| Tab | What it shows |
|---|---|
| **Summary** | What could go, in four lines: files nothing uses, duplicate files, oversize pictures, sounds with a smaller import setting. And the whole size, counted and as the editor imported it |
| **By kind** | Pictures, sounds, models, scenes, resources, scripts: how many files and how big. *Imported* is the size of the copies the editor made (what the game really loads), which is smaller than the source files for pictures and sounds |
| **By folder** | The biggest folders (two levels deep) |
| **Largest** | The 30 biggest files |
| **Duplicates** | Files with exactly the same content (an asset pack that has its textures twice). Keep one copy and point everything at it |
| **Textures** | Pictures with a side longer than the **Picture side limit** (4096 pixel textures for a small prop), and big pictures imported *lossless*. Halving both sides leaves a quarter of the size |
| **Sounds** | WAV files that could be smaller, and what to change (below) |
| **Unused** | Files in the asset folders that nothing uses |

**Save as Markdown** writes the whole report to `res://build_size_report.md`.

## Sounds

| Advice | When | Saves |
|---|---|---|
| **Ogg Vorbis** instead of WAV | A WAV of eight seconds or more (music, long ambience) | about nine tenths |
| **Force Mono** | A stereo sound in a folder of positional or short sounds (footsteps, impacts, voices, spells, interface). A sound placed in the world is mixed down to mono anyway | half |
| **Compress Mode QOA** | A short WAV that is not compressed (the import setting *Compress > Mode* is *Disabled*) | about four fifths |

Change these in the **Import** dock of the editor (select the sounds, change the setting, **Reimport**). The numbers are Godot's rough ones: the real saving depends on the sound.

## Files nothing uses

The tab follows **every reference**: from everything in your data folder (`src/`), the scenes and scripts of the toolkit, the main scene, the icon and the autoloads, through scenes, resources, materials, meshes and imported models, and every `"res://..."` path written in a script. What is left in the asset folders (`res://assets/`) is **not used by anything**: it is in your project, in the editor, and in every export that exports all resources.

Two things it cannot see:

- **A path a script makes**, such as `"res://assets/sounds/" + name + ".wav"`. Put the folder in the **Always include** box (a folder ends in `/`, a file does not, one per line). The list is saved in the project setting `chronicle_node/build_size/always_include`.
- **A file the game loads by something other than a reference** (a mod folder, a downloaded pack). Put that in the list too.

Before you delete anything: **look at the list, then move the files out of the project** (a folder next to it) and play. Nothing is lost if you were wrong, and the file is easy to put back.

## What to do with the findings

| You found | Do this |
|---|---|
| Unused files | Move them out of the project. The biggest wins are whole unused packs and source files of models whose meshes were already extracted |
| Duplicates | Keep one, point the scenes at it, delete the other |
| Oversize pictures | Resize the source to the limit, or set **Process > Size limit** in the import settings |
| Lossless pictures that are big | Import them as **VRAM Compressed** (3D) |
| Sounds | The changes of the table above |

Import profiles that apply these settings to a whole folder at once, and an export that leaves unused files out, are planned.

## See also

- [Audio](/basic/assets/audio), [Terrain textures](/basic/assets/terrain-textures), [File types](/basic/assets/file-types).
