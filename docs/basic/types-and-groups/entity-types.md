# Entity Types

<Shot name="entity-tags-editor" caption="The Entity Types editor (Types & Groups > Entity Types)." />

An **entity type** says what an entity *is*: Humanoid, Beast, Undead, Construct, Demon, Dragon. It is a type label, not a rule. It does nothing until a [condition](/basic/shared-systems/conditions) asks for it.

An entity type has a **Display name**, **Description**, **Color** and **Icon**.

## Giving a tag to an entity

Open the [character](/basic/entities/) or the NPC and tick its tags in the **Entity tags** field. An entity can have any number: a lich is Undead and Humanoid. Scripts can add and remove tags while the game runs (`Entity.add_entity_tag` and `remove_entity_tag`).

## Where an entity type is used

The **Has Entity Type** condition is the reader:

| Field | What it does |
|---|---|
| **Tag ids** | The tags to look for |
| **Require all** | On: the entity needs every tag. Off: one is enough |
| **Invert** | The condition is met when the entity has *none* of the tags ("not Undead") |

Put that condition on a stat effect, an effect or an ability [requirement](/basic/shared-systems/requirements):

| You want | How |
|---|---|
| **+30 % damage against Undead** | A Calculation Modifier Effect in Damage Done, with the condition *Opponent has the entity type Undead*. The target kind **Opponent** is the other side of the hit |
| **A holy ability that only works on Undead** | A requirement or condition with the tag *Undead* |
| **Beastmaster abilities that only calm Beasts** | The condition *Target has the tag Beast* on the effect |
