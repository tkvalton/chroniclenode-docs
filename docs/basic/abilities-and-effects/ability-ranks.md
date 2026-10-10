# Ability Ranks

An ability can have **ranks**: Fireball rank 1, rank 2, rank 3 ... A higher rank makes the ability better: more damage, a shorter cooldown, a longer range, an extra effect. Ranks are **optional**. An ability with a *highest rank* of `1` (the default) has no ranks and nothing changes for it.

A rank is its **own number**, not the level of the character. A level 40 character can have Fireball at rank 2, and where the ranks come from is up to you: a [skill tree](/basic/abilities-and-effects/skill-trees), class levels, quests, gear, or the level of an NPC.

## What a rank can change

| It changes | How |
|---|---|
| **The numbers of the ability**: cooldown, cost, gain, cast time, channel time, channel ticks, range, drain, combo timeout | The ability's **Ranks** section, [below](#the-ranks-section) |
| **The amounts of its effects**: damage, healing, a stat modifier | An amount part [**Ranks of the ability above the first**](/basic/abilities-and-effects/effect-amount#kinds-of-part): "10 + 5 per rank" |
| **Which effects it uses**: rank 3 adds a burn, rank 5 a second projectile | A [**Ability Rank** requirement](/basic/shared-systems/requirements) on the effect |

Rank 1 is the ability as it is written. Every number above is **rank 1 plus what the ranks above the first add**.

## The Ranks section

In the [ability editor](/basic/abilities-and-effects/abilities), under **Groups**.

| Field | What it does | Default |
|---|---|---|
| **Highest rank** | The highest rank the ability can be trained to (`1` to `99`). `1` means it has no ranks | `1` |
| **Number** | Which number a rank changes: **Cooldown**, **Cost**, **Gain**, **Cast time**, **Channel duration**, **Channel tick rate**, **Range**, **Drain per second**, **Combo timeout** | Cooldown |
| **Applied as** | How the result is applied: **Added**, **Subtracted**, **Multiplied (1 + the result)**, **Percent more**, **Percent less**, **Set to the result** | Added |
| **Per rank (formula)** | A [formula](/basic/shared-systems/formulas) that gets the **ranks above the first** (rank 3 gives 2) and returns the number to apply. *Linear 0.5* is 0.5 per rank. A curve makes the later ranks give less. With no formula it is 1 per rank | none |

A preview under each shows what the next ranks do compared with rank 1 ("rank 2: Cooldown -0.5; rank 3: Cooldown -1").

You can add as many as you like (a shorter cooldown **and** a longer range). They stack with the other things that change a number (stats, effects, buffs): the rank's change goes in together with them.

### Examples

| You want | Number, applied as, per rank |
|---|---|
| Each rank cuts half a second from the cooldown | Cooldown, **Subtracted**, Linear `0.5` |
| Each rank costs 10 % less mana | Cost, **Percent less**, Linear `10` |
| Each rank adds 2 metres of range | Range, **Added**, Linear `2` |
| From rank 2 on the cooldown is exactly 6 seconds | Cooldown, **Set to the result**, a *Flat* formula of `6` |
| Each rank is 10 % faster to cast | Cast time, **Multiplied**, Linear `-0.1` (a factor of 1 − 0.1 for each rank, so rank 4 is ×0.7) |

## Ranks in effects

The effects of an ability read its rank:

- **In an amount.** Add a part **Ranks of the ability above the first** to the [amount](/basic/abilities-and-effects/effect-amount) of a damage, heal or stat modifier effect, and give it a number: base `50`, **+10 per rank** is 50, 60, 70 ... A part **Level of the user** gives "+2 per level".
- **As a requirement.** Put an **Ability Rank** [requirement](/basic/shared-systems/requirements) on an effect of the ability: *Min rank* `3` and the effect only runs at rank 3 and above. A *Max rank* makes an effect that is replaced by a better one later. One ability can then have a burn effect that only joins at rank 3, and a second projectile at rank 5.
- **From gear.** A rank that gear gives counts for both.

An effect that no ability uses (an item's effect, an aura) has no rank: the requirement is met and the part adds nothing.

## Where ranks come from

| Source | How |
|---|---|
| **A skill tree** | A [ranked node](/basic/abilities-and-effects/skill-trees) with rewards per rank: rank 1 gives the ability (an **Ability** reward), the next ranks give an **Ability Rank** reward. Taking the node again trains the ability one more rank. The ranks are worked out again when the game is loaded |
| **Class levels** | An **Ability Rank** [reward](/basic/shared-systems/rewards) on a level of the class. A table of ranks by level |
| **A quest or an event** | An **Ability Rank** reward on a quest. An **Ability** reward can also start the ability at a higher **Initial rank** |
| **Gear, auras, buffs** | The [Ability Rank effect](/basic/abilities-and-effects/effect-types): "+1 rank to all fire abilities" while worn or active. It can take an ability over its highest rank (that is what gear that raises skills is for) |
| **An NPC** | Its [Ability ranks](/basic/entities/npcs#ability-ranks): a number for each ability, or a formula of its level |

### Giving ranks

The **Ability Rank** reward has **Ability**, **Ranks** (how many) and **Grant if missing** (the ability is given first, at rank 1, when the player has not got it). It never goes over the highest rank of the ability. It can be taken back with its node (a respec) and lowers the rank again.

### The Ability Rank effect

An [effect](/basic/abilities-and-effects/effect-types#ability) that adds ranks while it lasts: **All abilities**, or only abilities you name, abilities in a [group](/basic/shared-systems/groups), or abilities of a school (fire, frost ...), and **Bonus ranks** (a negative number is a curse). The bonus is worked out live, so an ability the player learns later gets it too, and it goes away with the effect.

## What the player sees

The ability tooltip shows **Rank: 2 / 5** (with the bonus from gear in brackets: **2 / 5 (+1)**) and, when it can be trained further, **Next rank:** what the next rank changes ("Cooldown -0.5"). A rank is saved with the ability.

## Tips

- Keep rank 1 as the weakest honest version of the ability. Everything the ranks add comes on top of it.
- Prefer a **formula** to a table of numbers: it keeps working when you raise the highest rank.
- To make a rank unlock something instead of changing a number, use the **Ability Rank** requirement on an effect.
- An NPC that fights with a ranked ability follows its level if you give it a **Rank by level** formula, so the same Fireball hurts more on a level 40 mage than a level 10 one.

## See also

- [Abilities](/basic/abilities-and-effects/abilities), [The amount of an effect](/basic/abilities-and-effects/effect-amount), [Skill Trees](/basic/abilities-and-effects/skill-trees), [Requirements](/basic/shared-systems/requirements), [Rewards](/basic/shared-systems/rewards), [NPCs](/basic/entities/npcs#ability-ranks)
- [Ability ranks: how they are built](/advanced/abilities-and-effects/ranks) (Advanced)
