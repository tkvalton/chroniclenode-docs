# Entity Assets

The **entity assets** are what creatures and their equipment are made of: the **model scenes** (the bodies and their skeletons), the **equipment meshes** (the weapons, the armor pieces and the faces worn on them), the **animations** that play on those bodies, and the **weapon profiles** that say which animations go with which way of fighting. The **Entity Assets** category of the editor is where you see what the project has, add to it and check that it is in order. The other art (effects, icons, terrain, foliage) is in [Assets](/basic/assets/); sound is in [Audio](/basic/audio/).

Like the other asset libraries, these are not `.tres` records with an id. They are **files in folders**, and the folder is the organisation: you add an asset by putting a file in the right folder (or with the **Import** and **Create** buttons), and **Refresh** reads the folders again. The one exception is the **Weapon Profile**, a small record that tells every animation pack which folders to have.

| Page | What it holds | Folder |
|---|---|---|
| [Model Scenes](/basic/entity-assets/model-scenes) | Skeletons for characters and creatures; scenes for interactable objects | `src/data/meshes/skeletons/`, `.../interactable_models/` |
| [Equipment Meshes](/basic/entity-assets/equipment-meshes) | Weapon, armor-piece and facial meshes; materials | `src/data/meshes/` |
| [Animations](/basic/entity-assets/animations) | An **animation pack** for each [entity type](/basic/types-and-groups/entity-types) | `src/data/animations/` |
| [Weapon Profiles](/basic/entity-assets/weapon-profiles) | The ways of fighting your game has animations for (One Hand, Bow, Unarmed ...), defined once for every pack | `src/data/items/weapon_profiles/` |

## Words used in these pages

| Word | What it means |
|---|---|
| **Animation pack** | The whole set of animations of one entity type (`humanoid`): a folder under `src/data/animations/` |
| **Parent pack** | The pack another pack inherits from. A pack uses its parent's clip for everything it has none of its own |
| **Section** | One of the folders of a pack: Core, Weapon Animations, Ability Animations, Social, Status Effects |
| **Weapon profile** | One way of fighting (One Hand, Bow, Rifle, Unarmed ...). It has its own folder in every pack, with a subfolder for each kind of clip |

## How they connect

```text
 Model scene ───► NPC / character / class ("Entity skeleton")
 Equipment mesh ► Item (equipment mesh, weapon model) ───► shown on the model scene
 Animation pack ► NPC / character / class ("Animation type"); abilities (their animation)
 Weapon profile ► Weapon class and NPC (how they fight), ability animations of "the weapon in hand", triggers (by weapon)
```

See [Supported files and best practice](/basic/assets/file-types) for the files each library accepts, and the [walkthrough](/basic/assets/walkthrough) to go from a model on disk to a character in the game.
