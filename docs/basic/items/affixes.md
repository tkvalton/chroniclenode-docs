# Affixes

<Shot name="affixes-editor" caption="The Affixes editor (Items > Affixes)." />

An **affix** is a bonus an item can roll: **Heavy** (+Strength), **of the Monkey** (+Agility or +Dodge), a nameless +Crit, or **Burning** (an effect). An affix says **what** the bonus is. It never says how big: the size comes from the [stat budget](/basic/items/item-generation#the-budget) of the item, so the same "Heavy" is small on a level 5 helmet and large on a level 50 one.

An item rolls affixes when it is [generated](/basic/items/item-generation): a quality says how many (see [Quality](/basic/equipment-definitions/quality#affixes-it-rolls)), and the item picks them from the affixes that fit it.

## In the name

The **name** of the affix is the text that goes into the name of the item.

| Placement | What it does | Example |
|---|---|---|
| **Prefix** | Before the name of the item | **Heavy** Great Axe |
| **Suffix** | After the name | Great Axe **of the Monkey** |
| **Silent** | Not in the name: the bonus only shows in the tooltip | (an extra +Crit) |

An item takes the first prefix and the first suffix it rolled for its name (**Heavy Great Axe of the Monkey**). The [quality](/basic/equipment-definitions/quality#value-and-name) can say the name should be just the name of the item, or have the name of the quality in front.

## The roll

| Field | What it does | Default |
|---|---|---|
| **Weight** | How likely the affix is among the ones that fit. `100` against `50`: twice as often | `100` |
| **Share** | How much of the item's budget this affix draws compared with the other bonuses of the item. `2` takes twice the share | `1` |
| **Exclusive group** | A word. Only one affix of a group can be on an item: put "of the Monkey" and "of the Bear" in the group `Attribute suffix` and an item is never both | empty |

## Where it can roll

Leave a list empty to allow everything.

| Field | What it does |
|---|---|
| **Equipment types**, **Weapon types** | Only on items of these types (a sword affix, a helmet affix) |
| **Weapon classes** | Only on weapons of these [classes](/basic/equipment-definitions/weapon-class) |
| **Item groups** | Only on an item that is in one of these [groups](/basic/shared-systems/groups) |
| **Lowest / highest item level** | The levels of items it can roll on. `0` = no limit. A strong affix can start at level 20 |
| **Lowest quality tier** | The item must have at least this tier: a legendary-only affix |

An item can also say it only takes affixes from a list ([Items](/basic/items/items#generation)), so a Great Axe takes its own.

## What it brings

An affix **gives stats** or **gives effects**, not both. The **Gives** switch chooses; changing it clears the other list.

| Field | What it does |
|---|---|
| **Mode** | **All**: every grant below. **Pick one**: one of them, by weight ("of the Monkey" gives Agility **or** Dodge). **Pick N**: that many different ones |
| **How many** | With *Pick N* |

**Stat grants.** Each grant is a [stat](/basic/entity-stats/stats) with:

| Field | What it does |
|---|---|
| **Stat** | The stat the affix gives |
| **Weight** | With *Pick one / Pick N*: how likely this grant is among the grants |
| **Cap** | The most points this grant can give on one item (`0` = none). A dodge affix capped at `15` never gives more, and what the cap cuts off goes to the other bonuses of the item |

**Effect grants.** Each grant is an [effect](/basic/abilities-and-effects/effects) worn with the item, with a **budget cost** (what it costs from the budget of the item; an effect that does not fit is not rolled) and a **weight**.

An effect affix fills the **effect affix** slots of the quality, not the prefix/suffix ones. It still shows in the name if it has a prefix or suffix placement ("Burning" Great Axe).

## The preview

The **Preview** at the bottom shows what the affix would bring alone, on an item of the level you choose (and the quality, for its budget multiplier). **Roll a sample** rolls the *Pick* modes again. Problems of the affix (no name, no grants, both stats and effects, a weight of 0) are listed there too.

## Examples

| Affix | Placement | Gives | Notes |
|---|---|---|---|
| **Heavy** | Prefix | Strength | Lowest item level 1 |
| **Sturdy** | Prefix | Stamina and Armor (*All*) | |
| **of the Monkey** | Suffix | Agility **or** Dodge (*Pick one*) | Group `Attribute suffix`. Dodge capped at 15 |
| **of the Bear** | Suffix | Strength **or** Stamina (*Pick one*) | Same group: an item is never both |
| **Keen** | Silent | Critical Strike Rating | Lowest item level 10 |
| **Burning** | Prefix | The effect *Burning Strikes* (cost 150) | Lowest quality tier Rare |

Tiers of an affix are just other affixes: **Heavy** (levels 1 to 20) and **Massive** (levels 21 and up, share `1.5`) in the same exclusive group.

## See also

- [Generated Items](/basic/items/item-generation), [Quality](/basic/equipment-definitions/quality), [Items](/basic/items/items), [Stats](/basic/entity-stats/stats#item-budget)
- [Generated items: how they are built](/advanced/items/generation) (Advanced)
