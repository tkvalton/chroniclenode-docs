# Currency

<Shot name="currency-editor" caption="The Currency editor (Items > Currency)." />

A **currency** is something the player counts instead of carries: gold, gems, arena tokens, credits. A currency is a number in the player's purse. Make as many as the game needs; each is counted on its own.

## Fields

| Field | What it does | Default |
|---|---|---|
| **Display name**, **Description**, **Icon** | What the interface shows next to the amount | |
| **Abbreviation** | The short form: `GP`, `g`, `$`. Used when an amount is written next to its currency | empty |
| **Max value** / **Unlimited** | The most a player can hold. **Unlimited** (the default) means no limit | unlimited |

A currency with a maximum is **clamped**, never lost silently: a reward gives only what fits and says how much went in, and a sale that would take the player over the maximum is refused.

## Where currencies are used

| Where | How |
|---|---|
| **Vendors** | Each [vendor](/basic/items/vendors) has a *preferred currency* for what it pays and charges. A stocked item can name another currency of its own |
| **Rewards** | The [Currency reward](/basic/shared-systems/rewards) gives an amount of a currency |
| **Entities** | An NPC's starting inventory can hold currency (what a looted corpse has) |
| **Abilities** | An [ability](/basic/abilities-and-effects/abilities#ammo-and-reagents) can spend a currency as its cost |

The *vendor value* of an [item](/basic/items/items) is a plain number. It is read in the currency of the vendor that buys or sells it, so there is no conversion between currencies: if your game has copper, silver and gold, make one currency (copper) for prices and show it as gold-silver-copper in your interface.

## See also

- [Vendors](/basic/items/vendors), [Items](/basic/items/items), [Rewards](/basic/shared-systems/rewards)
