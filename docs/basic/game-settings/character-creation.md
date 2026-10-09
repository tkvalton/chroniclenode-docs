# Character Creation

If your game lets the player make their own hero, **Character Creation** sets up what they can choose. It does nothing for a game that starts with a fixed party: turn **Use character creation UI** on in the [Gameplay Config](/basic/game-settings/gameplay-config) (*New Game Rules*) to use it. With it off, *Play* starts a new game with the **starting party** you set there.

The editor has three parts: the **options** (a list of tabs made from the settings), **Templates**, and **Profiles**.

## How it fits together

```text
Player picks ─► a template   (a ready-made character, loaded as it is)
          or ─► a profile    (a "race" or archetype: Human, Elf, Dwarf)
                  ├─ a body type        (a skeleton scene)
                  ├─ a voice            (from the audio library)
                  ├─ an animation set   (from the animation library)
                  ├─ facial features    (which can be edited)
                  ├─ blend shapes       (sliders: nose width, jaw size)
                  ├─ colours            (skin, hair, eyes)
                  └─ a class            (which classes may be chosen)
```

## Templates

**Templates** are ready-made characters that appear in the character selection list: a Warrior, a Mage, a Ranger. A template is a [Playable Character](/basic/entities/playable-character) definition; the player takes it as it is, and can usually start playing at once.

- **Add Template** opens the catalog of characters.
- **Remove Selected** takes one out of the list (it does not delete the character).

## Profiles

A **profile** is a ruleset for making a character of one archetype. The list shows the profiles; **Add Profile** and **Remove** change it, and the **Profile Editor** on the right edits the selected one.

| Section | What it holds |
|---|---|
| **Profile identity** | A **profile id** (`human`, `elf`, `dwarf`; the id is saved with the character), a **display name**, a **description** and an **icon** shown in the selection |
| **Body types** | The scenes the player can pick, for example `HumanMale.tscn` and `HumanFemale.tscn`, each with a **display name**. Every scene must contain a [Custom Skeleton](/basic/assets/model-scenes#skeletons). With no names, the file names are used |
| **Voice selection** | The **voice entity type** and the **voice variants** the player can choose (`Male_01`, `Female_02`), from the [audio library](/basic/assets/audio), each with a display name |
| **Animation selection** | The **animation types** the player can choose (`humanoid_default`, `humanoid_heavy`) from the [animation library](/basic/assets/animations), with display names |
| **Facial features** | Which features appear in the creator for editing: eyes, eyebrows, ears, eye and eyebrow and ear (left and right), nose, teeth, tongue, hair, facial hair |
| **Blend shapes** | A map of the **label the player sees** to the **blend shape of the mesh**, for sliders: `Nose Width` to `nose_width_blend`. **Add Shape** and **Remove Selected** edit the map |
| **Color palettes** | The **skin**, **hair** and **eye** colours the player picks from. A default palette is provided |
| **Class selection** | The [player classes](/basic/entities/player-classes) this profile can choose. Empty = every class |

## Validate

**Validate Configuration** checks the setup and lists the problems: an empty template slot, a template that is not a valid character, an empty profile slot, and the warnings of each profile (a missing body type, voices and display names that do not match, and so on).

## What happens when the player confirms

The creator builds a **custom character** definition from the choices (the profile id, the body type, the colours, the sliders, the voice, the animations, the class), the new game starts with it as the first member of the party, and it is **saved with the game** as that data: when the game loads, the character is rebuilt from the profile id and the saved choices. This is why a profile id should never be changed once players have used it.

## See also

- [Playable Character](/basic/entities/playable-character), [Player Classes](/basic/entities/player-classes), [Model Scenes](/basic/assets/model-scenes).
- [How the game saves a custom character](/advanced/save-and-load).
