# Entity Types

<Shot name="entity-tags-editor" caption="The Entity Types editor (Types & Groups > Entity Types)." />

An **entity type** says what an entity *is*: Humanoid, Beast, Undead, Construct, Demon, Dragon. It is a type label, not a rule. It does nothing until a [condition](/basic/shared-systems/conditions) asks for it.

An entity type has a **Display name**, **Description**, **Color** and **Icon**.

## NPC level and experience

An entity type can be a **rank**: Elite, Rare, Boss. It then has three more fields. They only matter for NPCs.

| Field | What it does | Default |
|---|---|---|
| **Level scaling** | **Follow game**: like every NPC. **Never scales**: the NPC keeps the level of its definition. **Fixed offset**: always a number of levels from the player | Follow game |
| **Level offset** | For *Fixed offset*: levels above the player. `3` = always 3 levels above, `-2` = always 2 under | `0` |
| **Experience multiplier** | A defeated NPC of this type gives this many times the experience. All the types of an NPC multiply | `1` |

Level scaling only does something when the project turns on [NPC level scaling](/basic/game-settings/gameplay-config#npc-level-scaling). With it off a rank is a label for your interface and your conditions, and only the experience multiplier works. If an NPC has several types, *Fixed offset* wins over *Never scales*.

| Rank | A typical setup |
|---|---|
| **Elite** | Fixed offset `+2`, experience multiplier `2` |
| **Rare** | Follow game, experience multiplier `4` (and a better [loot table](/basic/items/loot-tables) on the NPC) |
| **Boss** | Fixed offset `+3`, experience multiplier `10` |
| **Trivial critter** | Never scales, experience multiplier `0` |

## Giving a type to an entity

Open the [character](/basic/entities/) or the NPC and tick its types in the **Entity Types** field. An entity can have any number: a lich is Undead, Humanoid and Elite. Scripts can add and remove types while the game runs ([`Entity.add_entity_tag`](/advanced/entities/runtime/entity) and `remove_entity_tag`); the level of an NPC is decided when it is made, from the types it starts with.

## Where an entity type is used

The **Has Entity Type** condition is the reader:

| Field | What it does |
|---|---|
| **Tag ids** | The entity types to look for |
| **Require all** | On: the entity needs every tag. Off: one is enough |
| **Invert** | The condition is met when the entity has *none* of the tags ("not Undead") |

Put that condition on a stat effect, an effect or an ability [requirement](/basic/shared-systems/requirements):

| You want | How |
|---|---|
| **+30 % damage against Undead** | A Calculation Modifier Effect in Damage Done, with the condition *Opponent has the entity type Undead*. The target kind **Opponent** is the other side of the hit |
| **A holy ability that only works on Undead** | A requirement or condition with the tag *Undead* |
| **Beastmaster abilities that only calm Beasts** | The condition *Target has the tag Beast* on the effect |
