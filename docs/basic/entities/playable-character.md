# Playable Character

<Shot name="playable-character-editor" caption="The Playable Character editor (Entities > Playable Character)." />

A **playable character** is a person the player can control or recruit: Aria the Ranger, Brother Tomas. It chooses a [class](/basic/entities/player-classes) for what it can do and adds who it is: a name, a model, a level to start at, and the things it carries. Several characters can share a class.

Characters are used in three places:

| Where | How |
|---|---|
| **The starting party** | The *Starting party composition* of the [Gameplay Config](/basic/game-settings/gameplay-config#party-management). With **Use character creation UI** on, the player chooses from these at the start of a new game |
| **Companions** | A [Join Party interaction](/basic/entities/interactables#entity-interactions) on an NPC recruits a character into the party |
| **Created characters** | A game with [character creation](/basic/game-settings/character-creation) lets the player make a custom character: the game stores it as a custom character definition |

## Basic properties

| Field | What it does | Default |
|---|---|---|
| **Display name**, **Description**, **Icon**, **Class color** | What the party frames and the character window show | |
| **Starting level** | The level the character joins at. `0` = level 1 | `0` |
| **Class** | The [player class](/basic/entities/player-classes) the character is. Required | none |

## Visual properties

| Field | What it does | Default |
|---|---|---|
| **Default skeleton** | The [model scene](/basic/assets/model-scenes) of the character. **Select Skeleton** opens the catalog, **Clear** removes it | none |
| **Skeleton scale** | The size of the model. **Uniform scale** keeps x, y and z the same | `1, 1, 1` |
| **Collision shape** | The size category of the body for physics and targeting: tiny, small, normal, large or huge | Normal |
| **Animation type** | The animation set from the [animation library](/basic/assets/animations) this character uses | none |

## Audio properties

| Field | What it does |
|---|---|
| **Voice audio** | The voice type and a variant of it from the [audio library](/basic/assets/audio): the grunts and shouts of the character |
| **Motion audio** | The footstep set (humanoid, beast) |

## Inventory

**Starting inventory & currency** lists the [items](/basic/items/items) and [currency](/basic/items/currency) the character brings. Right-click to add or remove.

## Equipment

**Equipment properties** replaces the **starting equipment of the class** for this character. Leave it empty and the character wears what its class says. Put an item in a slot and that is what this character wears instead.

## Entity types

The **Entity Types** list sits under the starting level. A player character is usually *Humanoid*; conditions that look at the types ("+20 % damage against Beasts") also work on how enemies treat you.

## Custom characters

A character the player makes in character creation is a *custom character definition*. It is a playable character plus the choices of the creation window: the body type, the voice, the animation set, the facial meshes, the skin, hair and eye colors and the blend shapes of the face. You do not make these in this editor; the [Character Creation](/basic/game-settings/character-creation) settings say what the player may choose from.

## Companions

Every member of the party is a player. The one the player controls is the **current player**. The others are **companions**, controlled by AI:

- Out of combat a companion follows the current player, a little farther back for each companion down the line. It runs when it is far and walks when it is close, and is moved next to the player if it falls 40 metres behind (after a loading or a teleport).
- In combat it joins a fight near any party member, chases the target, attacks with its basic attack and uses its abilities: an ability that targets an enemy is used on the target when it is ready and in range; an ability that targets an ally is used on the most hurt member below 70 % health. Abilities that target the caster, the ground or an aim are not used by the AI yet.
- When the fight is over it searches for a moment, then follows again.

The [Gameplay Config](/basic/game-settings/gameplay-config) has the options: how many members the party holds, how many wait in the **reserve**, whether the player may take over any member, whether switching is allowed in combat, the follow distance and assist range, and whether companions use abilities. See [Party management](/basic/game-settings/gameplay-config#party-management).

A companion's class can carry its own [combat script](/basic/entities/player-classes#ai-scripts) for how it fights.

## See also

- [Player Classes](/basic/entities/player-classes), [Gameplay Config](/basic/game-settings/gameplay-config#party-management)
- [Entities: how they are built](/advanced/entities/) (Advanced)
