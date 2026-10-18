# Currency

<Shot name="currency-editor" caption="The Currency editor (Items > Currency)." />

A **currency** is something the player counts instead of carries: gold, gems, arena tokens, credits. A currency is a number in the player's purse. Make as many as the game needs; each is counted on its own.

## Fields

| Field | What it does | Default |
|---|---|---|
| **Display name**, **Description**, **Icon** | What the interface shows next to the amount | |
| **Abbreviation** | The short form: `GP`, `g`, `$`. Used when an amount is written next to its currency | empty |
| **Plural name** | The name when the amount is not 1 (*Coins* for *Coin*). Empty = the same name for every amount. Used when there is no abbreviation | empty |
| **Max value** / **Unlimited** | The most a player can hold. **Unlimited** (the default) means no limit | unlimited |
| **Show in wallet** | List the currency with the player's money (the inventory window, the trainer). Off for a currency that only **counts something** for a quest or a system: it is held and counted all the same, the player does not see it | on |

A currency with a maximum is **clamped**, never lost silently: a reward gives only what fits and says how much went in, and a sale that would take the player over the maximum is refused.

## Where currencies are used

| Where | How |
|---|---|
| **Vendors** | Each [vendor](/basic/items/vendors) has a *preferred currency* for what it pays and charges. A stocked item can name another currency of its own |
| **Rewards** | The [Currency reward](/basic/shared-systems/rewards) gives an amount of a currency |
| **Entities** | An NPC's starting inventory can hold currency (what a looted corpse has) |
| **Abilities** | An [ability](/basic/abilities-and-effects/abilities#ammo-and-reagents) can spend a currency as its cost |
| **Quests** | A currency can be the objective of a [quest](/basic/events-and-quests/quests#currency-as-a-quest-track) and a [hand-in cost](/basic/events-and-quests/quests#hand-in-cost) |
| **Events** | The *Currency Gained / Lost* trigger, the *Has Currency* condition, the *Take Currency* action |
| **Loot** | [Loot tables](/basic/items/loot-tables) can drop currency |

The *vendor value* of an [item](/basic/items/items) is a plain number. It is read in the currency of the vendor that buys or sells it, so there is no conversion between currencies: if your game has copper, silver and gold, make one currency (copper) for prices and show it as gold-silver-copper in your interface.

## A currency as a counter

A currency is only a number, so it can stand for anything a game counts without carrying it. *Kill boars, bring 10 boar meat* does not need an item at all: make a currency **Boar Meat**, let the boars drop it, and untick **Show in wallet** if the player should not see it as money. It takes no space, it needs no room in the bag, and it can never be lost to a full inventory.

It is a choice, not a rule. Use an **item** when the player should see it, carry it, trade it or lose it; use a currency (or a [quest item that is kept aside](/basic/items/quest-items#quest-items-kept-aside)) when it is only a count for a quest.

## See also

- [Vendors](/basic/items/vendors), [Items](/basic/items/items), [Rewards](/basic/shared-systems/rewards)
