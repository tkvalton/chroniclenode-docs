# Entity Types

<Shot name="entity-tags-editor" caption="The Entity Types editor (Types & Groups > Entity Types)." />

An **entity tag** is a label an entity carries. There are two **kinds**:

| Kind | Says | Examples | How many an entity has |
|---|---|---|---|
| **Type** | What the entity **is** | Humanoid, Beast, Undead, Construct, Demon, Dragon | One chosen in the editor (more can be given while the game runs) |
| **Rank** | How **important** the entity is | Normal, Elite, Rare, Boss | One |

Both are the same thing underneath (an entity tag), so everything a tag does works for both. A tag is a label, not a rule: it does nothing until something reads it.

## What tags are for

| Use | How | Built? |
|---|---|---|
| **Conditions** | A [condition](/basic/shared-systems/conditions) asks "has the tag": *+30 % damage against Undead*, *this ability only works on Beasts*, *the boss is immune to stuns* | Yes |
| **Effects applied by the tag** | Effects every entity with the tag has: Undead takes more Holy damage, a Construct is immune to poison, a Boss has *Enrage* | Yes |
| **Level and experience of NPCs** (ranks) | An Elite gives three times the experience; a Boss is always three levels above the player | Yes |
| **How the interface shows the entity** | A different **unit frame** (a boss gets a large frame at the top of the screen), a different **nameplate** (an elite shows an extra piece of art), a different **map icon** (a rare has its own icon on the minimap). The tag has a **color** and an **icon** for this | **Planned.** The data is there; the in-game interface does not read tags yet ([Tag-driven interface](/planned/tag-driven-interface)) |

### Tags are not templates

A [template](/basic/entities/templates) gives an NPC its **numbers** (stats, abilities, growth): a *Goblin Warrior* template makes forty goblins that all grow the same way. A tag says what the NPC **is** and how **important** it is, and it can be put on any NPC whatever its template: a goblin and a wolf can both be Elite. A tag changes no stat by itself; it only does what is read from it (a condition, an effect you applied to it, the experience and level rules). So you keep using templates for "what is this creature made of" and tags for "what is it, and how special".

## Making a tag

**Types & Groups > Entity Types.** The tag has a **Display name**, **Description**, **Color**, **Icon** and its **Kind**. The **Effects applied** section lists the effects every entity with the tag has. A **Rank** also shows the **NPC level and experience** section (below).

## Effects applied to the type

The **Effects applied to the type** section lists effects that **every entity of this type has**, for as long as it has the type. Pick them with **Add...**, which opens a searchable list, and take one away with its **x**.

- **Undead** takes 30% more damage from the Holy [damage type](/basic/types-and-groups/damage-types): an effect that raises the damage taken from Holy, put on the type once.
- A **Construct** is immune to poison: an [immunity effect](/basic/abilities-and-effects/immunities).
- A **Beast** gets *Keen senses*, a passive effect.

The effects are put on the entity **when it is made** (and when a script gives it the type while the game runs) and **taken off when the type is taken away**. They are not saved: they are put on again when the entity is made, so changing the effects of a type changes every entity of it the next time it is made. The effects follow their own stacking rules, so two types that apply the same effect with a group follow that group.

## Ranks (Normal, Elite, Rare, Boss)

Make a tag and set its **Kind** to **Rank**. A rank shows an extra section, **NPC level and experience**:

| Field | What it does | Default |
|---|---|---|
| **Level** | How an NPC with this rank follows the level of the player, when the project scales NPC levels ([Gameplay Config](/basic/game-settings/gameplay-config)): *like every NPC* (the project decides), *never scales* (keeps its own level), or a *fixed offset* from the player | Like every NPC |
| **Levels above the player** | For the fixed offset: 3 means always three levels above the player (negative: under) | 0 |
| **Experience multiplier** | What a defeated NPC with the rank gives, as a multiplier: an Elite gives 3 times as much | 1 |

All the tags of an NPC multiply, and *fixed offset* wins over *never scales*. The experience of one NPC is also set on the NPC itself (**Experience worth** and **Experience multiplier** in its Basic Properties), and a rank multiplies on top of it.

A rank can have **effects applied** like a type: a Boss that always has an *Enrage* effect, or an Elite with a damage bonus.

## Giving tags to an entity

| Where | What |
|---|---|
| **[NPC](/basic/entities/npcs)** and **[character](/basic/entities/playable-character)** | **Entity type** (one type; picking another replaces it) and **Rank** (one rank; leave empty for none). The type picker lists only types, the rank picker only ranks |
| **A placed NPC** ([unique](/basic/world/uniques)) | **Rank override id** gives this placed NPC another rank (the Goblin chieftain is a Boss while the goblin it is made from is Normal); **Remove rank** gives it none. Empty = the rank of its definition |
| **Scripts and effects** | [`Entity.add_entity_tag`](/advanced/entities/runtime/entity) and `remove_entity_tag` while the game runs. An entity has one rank: giving a rank takes away the one it had |

[Templates](/basic/entities/templates) do not need anything special: an NPC follows its template for its numbers and keeps its own tags.

## Where a tag is read

The **Has Entity Type** condition is the reader (it reads types and ranks alike):

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
| **A boss that cannot be stunned** | An immunity effect applied by the tag *Boss* |
| **Extra loot from Elite NPCs** | A [loot rule](/basic/items/loot-rules) condition that asks for the tag *Elite* |
