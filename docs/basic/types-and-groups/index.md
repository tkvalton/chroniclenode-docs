# Types & Groups

Types and groups are the **labels** the rest of ChronicleNode uses to say *what kind of thing* something is. A hit has a damage type, an ability has a school, a defeated enemy is Undead. You make the labels once here, and every editor offers them in its lists.

| Label | What it names | Used by |
|---|---|---|
| [Damage Types](/basic/types-and-groups/damage-types) | What kind of damage a hit is: Physical, Fire, Poison | Damage effects, armor and resistance stats, pools, immunities |
| [School Types](/basic/types-and-groups/school-types) | The family of an ability: Arcane, Divine, Martial | Abilities, school locks, [cooldown](/basic/keywords#cooldown) and cost stats, immunities |
| [Entity Types](/basic/types-and-groups/entity-types) | What an entity is: Humanoid, Beast, Undead | Conditions ("+30 % damage against Undead") |
| [Groups](/basic/types-and-groups/groups) | Shared labels for effects, abilities and items | Exclusive effects, shared cooldowns, ammo |

Some labels live next to the thing they belong to:

| Label | Where it is |
|---|---|
| [Trigger Tags](/basic/entity-stats/trigger-tags) (a dodge, a block, a critical strike) | **Entity Stats > Trigger Tags** |
| [Stat Groups](/basic/entity-stats/stat-groups) (the sections of the character sheet) | **Entity Stats > Stat Groups** |
| [Immunities](/basic/abilities-and-effects/immunities) | **Abilities & Effects > Immunities** |
| Status effect kinds (stun, root, silence) | [Status Effects](/basic/abilities-and-effects/status-effects), in Abilities & Effects |

## How you make one

All the editors look the same. The list on the left holds every item, the fields on the right are the one you selected. Each item has a **Display name**, a **Description**, a **Color** and an **Icon**, and an **ID** that the toolkit hands out and never changes. Use **New** for a new one and **Save** when you are done.

These are resources in the [database](/basic/database), so any other editor that needs one shows them in a drop-down.

## See also

- [Entity Stats](/basic/entity-stats/)
- [Types & Groups: how they are built](/advanced/types-and-groups/) (Advanced)
