# Walkthrough: from a model on disk to a character in the game

This walkthrough takes you through the **Assets** editors in the order you use them, with one example: a human warrior with a longsword, a plate chest piece, a battle cry, a swing animation and a flame effect. Each step says what you do, what you should see, and which page has the details. Do the steps in your own project; the names are examples.

You need: a model of the warrior (a `.glb` with a skeleton), a model of the sword, a model of the chest plate (made on the same skeleton), a few sounds and an icon. If you are not sure which format to export, see [Supported files and best practice](/basic/assets/file-types).

::: tip The rule of all the editors
The **folder is the organisation**. Put a file in the right folder (or use **Import**), press **Refresh**, and it is listed. Use **Settings > Validate** at the end of each step.
:::

## 1. Icons

1. Open **Assets > Icons**.
2. Choose a category (items, abilities, interface) and press **Import**. Pick the image files.
3. The files are **copied in and numbered** from the first free id. The list shows the new ids.

**You should see** the new icons with their numbers. Note the number of the sword icon: the sword item will use it. Do not rename the files afterwards. [Icons](/basic/assets/icons).

## 2. The sword (a weapon mesh)

1. Put `longsword.glb` anywhere in the project (or use the **Import** button of **Assets > Meshes**). The file must hold **one mesh node**: the sword. Its origin should be the grip.
2. In **Assets > Meshes**, press **Import**, choose the file and the category **Weapons > swords** (make the category with **Settings > Add Weapon Category** if `swords` does not exist yet).
3. Select `longsword` in the tree. You see its category and its settings.
4. Set the **Position offset** and **Rotation offset** until the sword sits right in the hand. Set the **Projectile spawn point** (arrows leave a bow here) and the **Enchant VFX position** (where an enchantment glows) if you use them.
5. For each **layer** (surface) of the sword, choose the **allowed materials** (the blade takes metals, the grip takes leather and wood) and the **preferred** one.

**You should see** the sword in the tree under *Weapons*. The settings are saved as you change them, in the mesh settings file (a `.glb` cannot hold them). [Meshes](/basic/assets/meshes).

## 3. The chest plate (a body part)

The plate is made for a **modular** character: it replaces the torso of the body.

1. Export the plate from the **same rig** as the character, one piece on its own.
2. Make the folders for your kind of skeleton once: **Settings > Add Skeleton Equipment Tag** (`humanoid`). It makes `body_parts/humanoid/` with one folder for each body part.
3. Import the plate into **Body parts > humanoid > torso**.
4. If this pack's parts have **different bones**, each part needs its own **skin**. A model with a skeleton brings its skin with it. For `.tres` meshes, put `plate_chest_skin.tres` next to `plate_chest_mesh.tres` and use **Settings > Find & Link All Skins**. A piece with a skin shows a link mark in the tree. If your parts all use the same bones, **skip this**: a mesh with no skin works.

**You should see** the plate in the tree under the torso. [Meshes: skins](/basic/assets/meshes#skins).

## 4. The warrior (a model scene)

1. Open **Assets > Model Scenes**.
2. Press **Create Skeleton**. **Browse** to the imported scene of the warrior (the one that has a `Skeleton3D`).
3. Give it a **target name** (`humanoid_warrior`) and choose the **kind**: *General* (one mesh), *Modular* (swappable parts: choose this for the plate) or *Custom* (modular with skin, hair and eye materials for [character creation](/basic/game-settings/character-creation)). For a modular one set the **equipment tag** to `humanoid`.
4. Press **Convert**. The scene is saved in `src/data/meshes/skeletons/` and opens.
5. In the 3D editor, move each **attachment point** to its bone: the hands, the head, the chest and the two weapon meshes. The editor lists the required points that are missing.

**You should see** `humanoid_warrior` in the Skeletons list with no missing points. [Model Scenes](/basic/assets/model-scenes).

## 5. The swing (an animation)

1. Open **Assets > Animations**. Make an entity type with **Settings > Create New Entity** (or use `humanoid`), choosing a parent if you want to inherit its animations.
2. Put the clip files (`.res`) in the package folders: the swing in `ability_animations/weapon/1h_weapon_r/`, the walk in `core/movement/walk/`. Press **Refresh**.
3. In the animation map of the entity type, pick the file for each slot (walk forward, run, idle, block, death ...). An empty slot uses the parent's.
4. **Settings > Validate All Animations**.

**You should see** every slot you filled with a clip name. Set the entity type as the **Animation type** of the warrior's NPC or class. [Animations](/basic/assets/animations).

## 6. The flame (a visual effect)

1. Open **Assets > VFX**. **Settings > Add New VFX Scene**, choose the type **loop** (an aura that lasts), name it `flame_weapon`.
2. Build it in the 3D editor with particles under the root. Give it an `AnimationPlayer` with `start`, `loop` and `end` if you want phases.
3. Back in the editor press **Refresh** and **Validate All VFX**.

**You should see** `flame_weapon` under *loop*. Use it as the VFX of an [effect or ability](/basic/abilities-and-effects/abilities). [VFX](/basic/assets/vfx).

## 7. Sound

1. Open **Assets > Audio**. Press **Import** on the category *Entity voices* or *Impact*; the editor asks for a new folder name (`battle_cry`) and copies the files in.
2. Select a file and press **Play** to listen.
3. For a **spoken line** put the file in `voicelines/<character>/` (the character folder is the speaker). In another language it goes in `voicelines/<character>/<language>/` with the same file name.
4. Select a voice line to see the **Language** list, its warnings and the **Subtitle**.
5. **Settings > Validate Database**.

**You should see** the sounds in the tree. Pick them in a [sound selection](/basic/abilities-and-effects/abilities) of an ability, an effect or an object. [Audio](/basic/assets/audio), [Localization: voice lines](/basic/game-settings/localization#voice-lines-in-other-languages).

## 8. Music

1. Import music into **Music > loop** and ambience into **Atmospheric ambience > loop** (or non-loop for a sound that plays once).
2. In **Assets > Albums** make a world album and choose its tracks.
3. Set the album on the [world](/basic/world/worlds).

[Albums](/basic/assets/albums).

## 9. Put it together

1. Make the **sword item** ([Items](/basic/items/items)): choose the sword icon by its number, the weapon type, and in the **Equipment mesh** section pick `longsword`.
2. Make the **plate item**: in its Equipment mesh section pick the plate for the torso. The [equipment type](/basic/equipment-definitions/equipment-type) says that it replaces the torso.
3. Make the **warrior NPC** ([NPCs](/basic/entities/npcs)): choose the skeleton `humanoid_warrior`, the animation type, and the voice.
4. Give the NPC the sword and the plate, place it in a world and run the game.

**You should see** the warrior walking with the plate on and the sword in hand, swinging when it attacks, shouting, with the flame on the blade.

## When something does not show

| What you see | Check |
|---|---|
| A mesh is not in the tree | It is in the wrong folder, or the file did not import (look for its `.import` file); press **Refresh** |
| A model file shows a warning about mesh nodes | The file holds more than one mesh node; export each piece on its own |
| A `.blend` is not listed | Blender is not installed or its path is not set in the Godot editor settings; export a `.glb` instead |
| A body part floats away from the character | It was made on another rig, or it needs its own skin ([skins](/basic/assets/meshes#skins)) |
| The sword is in the wrong place in the hand | The origin of the mesh is not the grip; use the position and rotation offset |
| A sound does not play | Validate the audio library; check the file is `.wav`, `.ogg` or `.mp3` and is in the folder the selection names |
| An icon shows "ID n (Not Found)" | The numbered file was renamed or deleted |

## See also

- [Supported files and best practice](/basic/assets/file-types).
- [How the asset libraries are built](/advanced/assets/) and [the mesh pipeline](/advanced/assets/mesh-pipeline).
