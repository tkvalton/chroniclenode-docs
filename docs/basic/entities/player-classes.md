# Player Classes

<Shot name="player-classes-editor" caption="The Player Classes editor (Entities > Player Classes)." />

A **player class** is what a character can *do*: Warrior, Mage, Ranger. It holds the stats and pools, the abilities, the starting gear, the rewards for every level and the skill trees. A [playable character](/basic/entities/playable-character) is a person (a name, a model, a starting level) that has one class. Several characters can share a class.

## Basic properties

| Field | What it does |
|---|---|
| **Entity name**, **Description**, **Icon** | What the character creation window and the party show |
| **Class color** | The color of the class in the interface |
| **Templates**, **Save as Template** | Start a new class from a saved one, or save this one as a template |

## Stats

The **Stats** section is the *stats data* of the class. It sets what every character of this class starts with. Every character has an instance of **every** stat; this is where the class says which numbers are not zero.

| Section | What it sets |
|---|---|
| **Health pools** (*Add Pool*) | The health [pools](/basic/entity-stats/pool) the class has: health, a shield. The first one is the **master pool**: when it is empty the character dies. Right-click a pool to **Edit Pool Values** (its starting current and maximum) or **Remove Pool** |
| **Resource pools** (*Add Pool*) | The pools that pay for abilities: mana, rage, energy. Each starts at the values you set |
| **Core stats** | Overrides of the speeds and ranges that every entity has (below) |
| **Stats** | The base value of each [stat](/basic/entity-stats/stats). Right-click a stat to **Change Base Value**, or **Toggle Active** to switch the stat off for this class (an inactive stat does nothing). A stat with no value starts at its default |
| **Immunities** (*Add Immunity*) | Permanent [immunities](/basic/abilities-and-effects/immunities): this class cannot be stunned, or takes no fire damage |
| **Growth profile** | A [growth profile](/basic/entity-stats/growth-profiles) for the class. *Default* means none for a player class (only the project default profile of NPCs is automatic) |
| **Level growth overrides** (*Add Override*) | A different [growth per level](/basic/entity-stats/stats#level-growth) for one stat or pool, for this class only. A warrior's Strength grows faster than a mage's. An override with no [formula](/basic/shared-systems/formulas) means no growth |

Core stats are overrides: leave one at `0` and the entity uses the default of the [Stats tab](/basic/entity-stats/stats).

| Core stat | What it is | Default |
|---|---|---|
| **Weapon damage**, **Weapon variance**, **Weapon speed** | An intrinsic weapon: damage and swing speed with no item. An NPC that bites uses these | `0` |
| **Movement speed** | Metres per second | `6` |
| **Attack speed** | A multiplier of the attack rate | `1` |
| **Global cooldown** | Seconds the [global cooldown](/basic/keywords#global-cooldown) lasts | `1.5` |
| **Cast speed** | A multiplier: how much faster [casts](/basic/abilities-and-effects/using-an-ability) finish | `1` |
| **Carry weight** | The carrying capacity | `20` |
| **Sight range** | How far the entity notices things; the pull and search distance of an NPC | `20` |

## Abilities

| Field | What it does |
|---|---|
| **Auto attack ability** | The [ability](/basic/abilities-and-effects/abilities) the class uses for its basic attack. It must be an active ability. It runs on an internal timer set by the **Attack speed**. A weapon class can replace it with a *basic attack ability* of its own |
| **Active abilities** (*Add Ability*) | Abilities the class starts with that it uses (they go on the action bar) |
| **Passive abilities** (*Add Ability*) | Abilities that apply their effects all the time |

More abilities come from [level rewards](#level-rewards) and [skill trees](#skill-trees).

## Starting equipment

The **Equipment Properties** section lists the [items](/basic/items/items) the class is wearing at the start, one for each [slot](/basic/equipment-definitions/equipment-slot) (the key is the slot and its number, such as *Main Hand:0*). A [playable character](/basic/entities/playable-character) can replace the list with its own. Starting gear is put on without checking [requirements](/basic/shared-systems/requirements).

## Locked equipment slots

Slots listed here start **locked** for this class: they show in the equipment window but take nothing until they are unlocked by an [Equipment Slot Unlock reward](/basic/shared-systems/rewards).

## Level rewards

The **Level rewards** tree has a row for each level. Right-click a level to add a [reward](/basic/shared-systems/rewards), double-click a reward to edit it. A level can also have a short description for you. Level 1 gives rewards to a new character, so use it for the first abilities and skill points.

The rewards a class gives are the reason players look forward to a level: a new ability, [skill points](/basic/shared-systems/rewards) for the skill tree, an item, a [proficiency](/basic/entity-stats/proficiencies) level. A reward that needs room (an item with a full bag) waits until there is room.

How fast a character levels is set in the [Gameplay Config](/basic/game-settings/gameplay-config#leveling): the highest level and the experience for each level.

## Skill trees

**Add Skill Tree** gives the class one of the [skill trees](/basic/abilities-and-effects/skill-trees) of the game. A class can have several. The player spends skill points on the nodes.

## AI scripts

| Field | What it does |
|---|---|
| **Behavior script** | An optional [behavior script](/basic/behaviors/behavior-scripts) for when the character is not controlled and not fighting |
| **Combat script** | An optional [combat script](/basic/behaviors/combat-scripts) for how the character fights while **an AI companion** controls it |

A party member the player does not control is a companion. Without a combat script a companion uses a simple one: it follows the member the player controls, joins a fight near it, attacks with its basic attack and its abilities, and heals the party. See [Companions](/basic/entities/playable-character#companions).

## See also

- [Playable Character](/basic/entities/playable-character), [Stats](/basic/entity-stats/stats), [Pool](/basic/entity-stats/pool), [Abilities](/basic/abilities-and-effects/abilities), [Rewards](/basic/shared-systems/rewards)
- [Entities: how they are built](/advanced/entities/) (Advanced)
