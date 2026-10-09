# Growth Profiles

A **growth profile** says how a *kind* of entity gets stronger with its level. *Heavy*, *Caster*, *Minion*, *Elite*, *Ranger*, *Assassin*: each one is a short list of "this stat grows like this, this pool grows like that". An NPC picks one, and a level 20 NPC of that kind is a stronger version of a level 5 one without a second definition.

Without profiles, growth belongs to the stat or pool itself ([Stats](/basic/entity-stats/stats#level-growth), [Pool](/basic/entity-stats/pool#level-growth)), so *every* entity that has the stat grows the same way, the player and the rat included. The only other way to differ was an override on each NPC, which for 200 NPCs is 200 overrides. A profile is that override, written once and shared.

## What an NPC asks

When a stat or pool needs its growth at a level, it asks the layers below in this order. **The first that has an answer wins.**

| # | Layer | Where you set it |
|---|---|---|
| 1 | The **NPC's own override** | The NPC's Stats section, *Level Growth*, **Add Override** |
| 2 | The NPC's **growth profile** | The NPC's Stats section, *Growth profile* |
| 3 | The profile's **parent**, the parent's parent... | The profile's *Builds on* |
| 4 | The **project's default profile** | [Gameplay Config](/basic/game-settings/gameplay-config#npc-level-scaling), *Default NPC growth profile* |
| 5 | The **stat's or pool's own growth** | The [Stats](/basic/entity-stats/stats#level-growth) or [Pool](/basic/entity-stats/pool#level-growth) editor |

An entry **replaces** what is below it, even an entry with no formula (that means "this stat does not grow for this kind of NPC"). A stat or pool that a layer does not list is left to the layer below. So a profile only ever lists what is *different*.

A player character does not use the project default profile: its growth is its class's overrides (a class can name a profile too) and the stats' own growth.

## The editor

**Entity Stats > Growth Profiles.** The left column is the profile, the right column is its entries.

| Field | What it does | Default |
|---|---|---|
| **Name**, **Description**, **Icon** | As everywhere | |
| **Builds on** | The profile this one starts from. Every stat or pool this profile does not list grows as the parent says. *None* means the project's default profile | None |
| **What an entity follows** | Not a field: the chain an entity of this profile follows, written out | |
| **Growth** (*Add Override*) | One entry per stat or pool: pick it from the list and give it a **growth formula**, optional **diminishing returns** and a **max growth**, exactly like on the [stat](/basic/entity-stats/stats#level-growth). The editor shows the growth at a few levels and a graph | no entries |

The list of entries has **stats** and **pools**. A pool entry is health (or mana) *per level*: "+12 health a level" is a Linear [formula](/basic/shared-systems/formulas) of `12`. The input of every formula is the **levels gained** (level - 1), so level 1 has no growth.

::: tip Weapon Damage
**Weapon Damage** is one of the stats in the list. An NPC that bites or swings has an intrinsic [weapon damage](/basic/entities/npcs#stats), and a profile can make that grow too. It only grows for an NPC that *has* some: an NPC with weapon damage `0` stays at `0` (it attacks with abilities, or not at all), so a profile for "everything" cannot give a villager a sword.
:::

### Problems

The editor lists, in yellow, what is wrong: a parent that no longer exists, a parent chain that loops back on itself (the loop is ignored in the game, but fix it), two entries for one stat, an entry for a stat that was deleted.

## Using a profile

- **On an NPC**: in the NPC's Stats section, **Growth profile**. *Default* means the project default ([Gameplay Config](/basic/game-settings/gameplay-config)).
- **For every NPC**: Gameplay Config > Party Management > NPC Level Scaling > **Default NPC growth profile**. The toolkit makes a profile called *Default* for every project; it has no entries, so a new project grows as its stats say until you fill it in.
- **On one placed NPC**: a [unique NPC](/basic/world/uniques) copies the stats of its definition and can change the profile or add overrides for itself.

## Example: a family of profiles

Your game has Strength, Intellect and Stamina stats, a Health pool, and a Mana pool. You want:

| Profile | Builds on | Entries |
|---|---|---|
| **Default** | | Health pool: `+10` per level. Weapon Damage: `+1` per level |
| **Heavy** | Default | Stamina: `+4` per level. Strength: `+3` per level. Health pool: `+16` per level |
| **Caster** | Default | Intellect: `+4` per level. Mana pool: `+8` per level. Health pool: no formula (a caster does not gain health from the pool, only what Stamina gives) |
| **Minion** | Default | Health pool: `+3` per level. Weapon Damage: `+0.5` per level |
| **Elite** | Heavy | Health pool: `+22` per level. Weapon Damage: `+2` per level |

A rat uses the *Default* (no profile chosen). A bear uses *Heavy*, a cultist uses *Caster*, a skeleton uses *Minion*, a bear champion uses *Elite*, which gets everything of *Heavy* and only changes health and weapon damage. If you later decide all NPCs should gain `+12` health instead of `+10`, you change one entry in *Default*.

Profiles and [ranks](/basic/types-and-groups/entity-types#npc-level-and-experience) go together well: the rank (Elite, Boss) changes the level and the experience, and a profile of the same name changes how hard it hits.

## What happens when an NPC changes level

Anything that changes the level of an NPC goes through the same steps: the level it is made with, [level scaling](/basic/game-settings/gameplay-config#npc-level-scaling) when the party changes, a respawn, an event that sets a level.

1. Every stat gets its **growth** for the new level (the layers above).
2. Every pool gets its **growth** added to its maximum. The stat effects that depend on the level are worked out again, and so is everything that feeds from a stat that grew (a Stamina that grows makes health grow if you made it so).
3. The **maximum** of each pool changes, and the **current value keeps its share**. An NPC at 65 % health that goes from level 4 to level 12 has a bigger maximum and is at 65 %; lowering the level keeps the 65 % too. It does not matter what the project's *Level up capacity rule* is: that rule is for the player's characters. A new NPC always starts full.

An NPC that is in a fight waits for the end of it (see [NPC level scaling](/basic/game-settings/gameplay-config#npc-level-scaling)).

### "Why does my NPC not get stronger?"

Growth only comes from formulas, so a stat with no growth anywhere does not change. Check in this order:

1. Does the stat or pool have a **growth formula** of its own (Stats / Pool editor)? When it has none, the editor shows a yellow note: *no growth*. That is allowed, and fine if intended.
2. Does the NPC's profile, or one of its parents, or the **Default** profile list the stat or pool?
3. Does the NPC have an **override** for it with no formula? That stops the stat from growing for that NPC.
4. Does the stat count for what you are looking at? Health comes from the *Health pool* (its own growth), from stats that feed it (an effect like "Stamina gives health"), and from the base value. A stat that grows but is used by nothing does not change how hard the NPC hits or how long it lives.
5. Is the NPC's **level** really different? With level scaling off, a level 5 NPC stays level 5.

## See also

- [Stats](/basic/entity-stats/stats#level-growth) and [Pool](/basic/entity-stats/pool#level-growth): the growth of a single stat or pool.
- [NPCs](/basic/entities/npcs), [Player Classes](/basic/entities/player-classes), [Gameplay Config](/basic/game-settings/gameplay-config#npc-level-scaling).
- [Growth, core stats and gain channels](/advanced/entity-stats/growth-and-core-stats): how it is built.
