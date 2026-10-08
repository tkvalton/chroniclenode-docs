# Tags & Groups

Tags and groups are the **labels** the rest of ChronicleNode uses to say *what kind of thing* something is. A hit has a damage type, an ability has a school, a defeated enemy is Undead, a stat is Offensive. You make the labels once here, and every editor offers them in its lists.

| Label | What it names | Used by |
|---|---|---|
| [Damage Types](/basic/tags-and-groups/damage-types) | What kind of damage a hit is: Physical, Fire, Poison | Damage effects, armor and resistance stats, pools, immunities |
| [School Types](/basic/tags-and-groups/school-types) | The family of an ability: Arcane, Divine, Martial | Abilities, school locks, [cooldown](/basic/keywords#cooldown) and cost stats, immunities |
| [Trigger Tags](/basic/tags-and-groups/trigger-tags) | Something that happened during a hit: a dodge, a block, a critical strike | Trigger stat effects, modifiers, procs, effect rules |
| [Entity Tags](/basic/tags-and-groups/entity-tags) | What an entity is: Humanoid, Beast, Undead | Conditions ("+30 % damage against Undead") |
| [Stat Groups](/basic/tags-and-groups/stat-groups) | Which section of the character sheet a stat is in | Stat editor, character sheet, tooltips, group effects |
| [Immunities](/basic/tags-and-groups/immunities) | Protection against damage types, schools or status effects | Entities, immunity effects |
| [Groups](/basic/tags-and-groups/groups) | Shared labels for effects, abilities and items | Exclusive effects, shared cooldowns, ammo |

Status effect kinds (stun, root, silence) are made in the [Status Effects](/basic/abilities-and-effects/status-effects) editor in Abilities & Effects.

## How you make one

All the editors look the same. The list on the left holds every item, the fields on the right are the one you selected. Each item has a **Display name**, a **Description**, a **Color** and an **Icon**, and an **ID** that the toolkit hands out and never changes. Use **New** for a new one and **Save** when you are done.

These are resources in the [database](/basic/database), so any other editor that needs one shows them in a drop-down.

## See also

- [Entity Stats](/basic/entity-stats/)
- [Tags & Groups: how they are built](/advanced/entity-stats/tags-and-groups) (Advanced)
