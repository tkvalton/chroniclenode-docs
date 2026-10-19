# Entity Types

<Shot name="entity-tags-editor" caption="The Entity Types editor (Types & Groups > Entity Types)." />

An **entity type** says what an entity *is*: Humanoid, Beast, Undead, Construct, Demon, Dragon. A type brings **effects that every entity of the type has**, and it is what a [condition](/basic/shared-systems/conditions) asks for ("+30 % damage against Undead").

An entity type has a **Display name**, **Description**, **Color** and **Icon**, and the **effects every entity of the type has**.

::: tip Types, templates and entity tags
Three things sound alike and do three different jobs:

| | Does | Example |
|---|---|---|
| **Entity type** (this page) | Says what the entity **is**, and brings default **effects** to every entity of the type | Undead takes more Holy damage |
| **[Template](/basic/entities/templates)** | A profile you **build entities from**, so you do not repeat the same setup | A *Goblin Warrior* template that forty goblins follow |
| **[Entity tag](/basic/types-and-groups/entity-tags)** | A label with **no effect** on the entity, only for the **interface** to read | Boss: a large unit frame at the top of the screen |
:::

## Effects applied to the type

The **Effects applied to the type** section lists effects that **every entity of this type has**, for as long as it has the type. Pick them with **Add...**, which opens a searchable list, and take one away with its **x**.

- **Undead** takes 30% more damage from the Holy [damage type](/basic/types-and-groups/damage-types): an effect that raises the damage taken from Holy, put on the type once.
- A **Construct** is immune to poison: an [immunity effect](/basic/abilities-and-effects/immunities).
- A **Beast** gets *Keen senses*, a passive effect.

The effects are put on the entity **when it is made** (and when a script gives it the type while the game runs) and **taken off when the type is taken away**. They are not saved: they are put on again when the entity is made, so changing the effects of a type changes every entity of it the next time it is made. The effects follow their own stacking rules, so two types that apply the same effect with a group follow that group.

## Giving a type to an entity

Open the [character](/basic/entities/playable-character) or the [NPC](/basic/entities/npcs) and choose its type in the **Entity type** field of the Basic Properties. **An entity has one type**: picking another replaces the first. (A lich is Undead; being an elite or a boss is not a type: that is an [entity tag](/basic/types-and-groups/entity-tags).) Scripts can add and remove types while the game runs ([`Entity.add_entity_tag`](/advanced/entities/runtime/entity) and `remove_entity_tag`), and the effects of the type follow.

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

::: info Name in the data
The database calls this type `entity_tag` for historical reasons. In the editor it is **Entity Types**, and the **Entity Tags** tab is the new, interface-only one.
:::
