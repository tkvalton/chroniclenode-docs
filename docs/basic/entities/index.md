# Entities

An **entity** is anything in the world that has a body and can act or be acted on: the characters of the player, the creatures and people of the world, and the objects you can use or destroy. This category holds their definitions.

| Tab | What it defines |
|---|---|
| [**Playable Character**](/basic/entities/playable-character) | A character the player can control or recruit: its class, level, model, inventory and equipment |
| [**Player Classes**](/basic/entities/player-classes) | What a character *can do*: stats, abilities, starting gear, level [rewards](/basic/shared-systems/rewards), [skill trees](/basic/abilities-and-effects/skill-trees), companion AI |
| [**NPCs**](/basic/entities/npcs) | Everything that is not a player: enemies, townspeople, animals, bosses, vendors |
| [**Interactables**](/basic/entities/interactables) | Objects: doors, chests, switches, ladders, traps, signs, crafting stations, destructible barrels |

## The kinds of entity

| Kind | In the editor | Notes |
|---|---|---|
| **Player** | A [character](/basic/entities/playable-character) of a [class](/basic/entities/player-classes) | Every member of the party is a player. The one you control is *the current player*; the others are companions that fight and follow on their own |
| **NPC** | An [NPC definition](/basic/entities/npcs) | Placed in the world as a [unique](/basic/world/uniques), spawned by an [event](/basic/events-and-quests/events) or an [encounter](/basic/world/encounters), or summoned |
| **Pet** | An NPC that was summoned by an [effect](/basic/abilities-and-effects/effect-types) | It has a summoner, follows it in formation and leaves when it dies |
| **Interactable object** | An [interactable definition](/basic/entities/interactables) | A static body with one *interaction* |

## What every entity has

Whatever it is, an entity is made of the same parts, and they come from its definition:

| Part | Where it comes from |
|---|---|
| **Model and animations** | The [model scene](/basic/assets/model-scenes) and animation type of the definition, and the weapon tags of its [weapon class](/basic/equipment-definitions/weapon-class) |
| **Stats and pools** | The *stats data* of the class or NPC: which [pools](/basic/entity-stats/pool) it has, its [stats](/basic/entity-stats/stats), its [immunities](/basic/abilities-and-effects/immunities), the growth per level |
| **Abilities** | The basic attack and the active and passive [abilities](/basic/abilities-and-effects/abilities) of the definition |
| **Effects** | Applied by abilities, items and the world |
| **Inventory and equipment** | The [items](/basic/items/) it starts with, and the [slots](/basic/equipment-definitions/equipment-slot) it wears them in |
| **Faction** | The [faction](/basic/behaviors/factions) decides who it fights, who it helps and who ignores it |
| **Behavior** | The [behavior script](/basic/behaviors/behavior-scripts) (what it does when nothing is happening) and the [combat script](/basic/behaviors/combat-scripts) (what it does in a fight) |
| **Entity types** | The [entity types](/basic/types-and-groups/entity-types) of the definition (Humanoid, Beast, Undead): conditions read them |

## Entity types in the definition

Every entity definition has an **Entity Types** list. Choose the [types](/basic/types-and-groups/entity-types) the creature is: a skeleton is *Undead* and *Humanoid*. A stat effect with a condition "the opponent is Undead" then works on it. Scripts can add and take away types while the game runs.

## Templates

The player class and NPC editors have a **Templates** menu and a **Save as Template** button. A template is a definition you start new ones from: make a "Goblin" once, save it, and make ten variants by changing the level, the loot and the faction.

## See also

- [Stats data](/basic/entities/player-classes#stats), [Interactables](/basic/entities/interactables), [Uniques](/basic/world/uniques) (a placed NPC with overrides)
- [Behaviors](/basic/behaviors/) (factions and AI)
- [Entities: how they are built](/advanced/entities/) (Advanced)
