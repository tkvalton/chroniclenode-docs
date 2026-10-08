# NPCs

<Shot name="npcs-editor" caption="The NPCs editor (Entities > NPCs)." />

An **NPC** is every living thing that is not controlled by a player: enemies, townspeople, animals, bosses, merchants, [quest](/basic/events-and-quests/quests) givers, summoned pets. The NPC editor makes the **definition**, the kind of creature: a Wolf, a Guard, a Dragon. You then **place** it in a world, or spawn it with an event, an encounter or an effect.

## Definition and placed NPC

| | The definition (this editor) | The placed NPC |
|---|---|---|
| What | The kind of creature | One of them, in one place |
| Made in | Entities > NPCs | The [Uniques](/basic/world/uniques) tool in the 3D viewport |
| Holds | Level, faction, stats, abilities, scripts, loot, model | A position, a facing, and **overrides** of the definition |

A placed NPC can override the level, the model scale, the faction, the experience it is worth, its behavior and combat script, its loot table and inventory, and its stats. It can also **be given an interaction** (a conversation, a shop, a quest to give), have a spawn delay, a respawn timer, and decide whether it vanishes on death. Everything not overridden comes from the definition.

## Basic properties

| Field | What it does | Default |
|---|---|---|
| **Entity name**, **Description**, **Icon**, **Color** | The name that shows over the creature and in the editor lists | |
| **Default level** | The level an NPC of this kind has when it spawns | `1` |
| **Faction** | The [faction](/basic/behaviors/factions) of the NPC. It decides who attacks whom. **None** is a neutral creature that fights back only when it is attacked | none |
| **Entity types** | The [types](/basic/types-and-groups/entity-types) of the creature (Beast, Undead) | none |

## Visual properties

| Field | What it does | Default |
|---|---|---|
| **Entity skeleton** | The [model scene](/basic/assets/model-scenes). **Select Skeleton** opens the catalog | none |
| **Skeleton scale** | Size of the model, with **Uniform scale** to keep the axes together | `1, 1, 1` |
| **Collision shape** | The body size for physics and targeting: tiny, small, normal, large or huge | Normal |

## Animations

| Field | What it does |
|---|---|
| **Animation type** | The animation set from the [animation library](/basic/assets/animations) |
| **Is ranged** | The NPC attacks from a distance, so it uses the aim and reload animations |
| **Attack tag**, **Stance tag**, **Aim tag**, **Reload tag** | The animations of its attack, its combat idle, its aiming and its reload. They work like a [weapon class](/basic/equipment-definitions/weapon-class#animation-tags): an NPC that carries no weapon item says here how it fights |

## Audio

| Field | What it does |
|---|---|
| **Voice audio** | The voice type and variant from the [audio library](/basic/assets/audio) |
| **Motion audio** | The footstep set |

## Stats

The **Stats** section is the same *stats data* a [player class](/basic/entities/player-classes#stats) has: the pools, the core stat overrides (an NPC's **weapon damage** and **weapon speed** are how hard and how fast its bite hits), the base value of each stat, permanent [immunities](/basic/abilities-and-effects/immunities) and level growth overrides.

An NPC levels with its **level**: its stats grow with it by their *level growth*, so a level 20 wolf is a stronger wolf than a level 5 one without a second definition.

## Abilities

The same three lists as a class: the **auto attack ability**, the **active** abilities it uses and the **passive** abilities that apply to it. An NPC with no abilities of its own and a weapon-less definition attacks with its basic attack.

## AI scripts

| Field | What it does |
|---|---|
| **Behavior script** | What it does when nothing is happening: wander, patrol, follow a daily schedule. See [Behavior Scripts](/basic/behaviors/behavior-scripts) |
| **Combat script** | How it fights: what it does when it sees an enemy and in the fight. See [Combat Scripts](/basic/behaviors/combat-scripts). With none, it fights simply: it uses its abilities in turn |

## Loot and inventory

| Field | What it does | Default |
|---|---|---|
| **Loot table logic** | **None**: no loot from a table. **On initialize**: the loot is in its bag when it spawns. **On death**: it is rolled when it dies | None |
| **Loot table** | The [loot table](/basic/items/loot-tables) to roll | none |
| **Inventory & currency** | [Items](/basic/items/items) and [currency](/basic/items/currency) it always has. Right-click to add or remove | empty |

When an NPC dies it becomes a **corpse** that can be looted, if it has anything. After the last item the corpse has nothing to loot. A placed NPC with a respawn timer comes back; one with *despawn on death* vanishes.

## Experience

An NPC gives the player **experience** when it dies. The amount is *Experience worth* on the definition. The NPC editor does not show that field yet: set it on the placed NPC (**Experience worth override**), or in a script. The experience goes to the party, and the reserve gets its [share](/basic/game-settings/gameplay-config#party-management).

## How an NPC behaves in a fight

1. It is **hostile** to the factions its own faction says, so it pulls (starts a fight) when one of them comes into its sight range. A **neutral** creature never pulls; it fights only once it was attacked, and is neutral again when the fight ends.
2. Its **threat table** decides whom it attacks, unless the project turned the [threat system](/basic/game-settings/gameplay-config#threat) off (it then attacks the nearest).
3. It follows its [combat script](/basic/behaviors/combat-scripts): search, chase, attack, flee.
4. When it is far from the player the game lowers how often it thinks (the **level of detail** settings in the [Gameplay Config](/basic/game-settings/gameplay-config)), so a world full of NPCs stays fast.

## See also

- [Factions](/basic/behaviors/factions), [Behavior Scripts](/basic/behaviors/behavior-scripts), [Combat Scripts](/basic/behaviors/combat-scripts), [Loot Tables](/basic/items/loot-tables), [Uniques](/basic/world/uniques)
- [Entities: how they are built](/advanced/entities/) (Advanced)
