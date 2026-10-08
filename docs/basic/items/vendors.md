# Vendors

<Shot name="vendors-editor" caption="The Vendors editor (Items > Vendors)." />

A **vendor** is a shop. It has a list of items it **stocks**, a purse of its own, and rules for what it pays for the items of the player and what it charges for its own. A **vendor interactable** (or an NPC that has one) opens the shop window.

## Fields

| Field | What it does | Default |
|---|---|---|
| **Vendor name** | The name in the shop window | |
| **Faction** | The [faction](/basic/behaviors/factions) of the vendor. Kept for later (reputation prices); nothing reads it yet | none |
| **Restock interval** | Game hours between restocks. `0` = the vendor never restocks | `24` |

### Buying from the player

| Field | What it does | Default |
|---|---|---|
| **Vendor buys items** | Off: the vendor sells only | on |
| **Buy value multiplier** | The share of an item's [vendor value](/basic/items/items#basic-properties) the vendor pays. `0.5` = half | `0.5` |

### Selling to the player

| Field | What it does | Default |
|---|---|---|
| **Sell value multiplier** | A multiplier on the price of everything the vendor sells. `1.5` = 50 % dearer | `1` |

### Currency

| Field | What it does |
|---|---|
| **Preferred currency** | The [currency](/basic/items/currency) the vendor pays in, and charges in unless an item says otherwise |
| **Vendor start amount** | How much of it the vendor starts with. `-1` = unlimited. A vendor that runs out of money stops buying (it pays nothing for an item it cannot afford) |
| **Accepts multiple currencies**, **Add Currency** | More currencies the vendor holds, each with a starting amount |

## Stock items

**Add Stock Item** adds a line to the shop. Each line is one [item](/basic/items/items):

| Field | What it does | Default |
|---|---|---|
| **Item** | What is for sale | |
| **Start quantity** | How many the shop has at first. `-1` = **unlimited**: the shop never runs out and never restocks it | `1` |
| **Max quantity** | The most the shop will hold when it restocks. `0` = no limit | `10` |
| **Can restock** | Whether this item comes back over time | on |
| **Restock quantity** | How many come back at every restock | `1` |
| **Custom restock hours** | A restock interval for this item. `0` = the vendor's | `0` |
| **Currency override** | Another currency for this item | the vendor's |
| **Value override** | A price base for this item instead of its vendor value. `0` = the item's own | `0` |
| **Override vendor value weight**, **Value weight** | A further multiplier for this item, on top of the vendor's sell value multiplier (`2` doubles it) | off, `1` |
| **Item price modifier** | A last markup or discount for this item only: `1.5` = 50 % dearer | `1` |

## Prices

What the **player pays** for a stocked item:

```text
price = value x sell value multiplier x value weight x item price modifier
```

where *value* is the **Value override** of the line, else the **Vendor value** of the item. The price is rounded down, and an item with a value always costs at least `1`.

What the **vendor pays** for an item of the player:

```text
payment = vendor value of the item x buy value multiplier
```

also rounded down and at least `1`. The vendor pays nothing for an item with no value, for a **key item**, when it does not buy, or when it cannot afford it.

## Buying and selling

- **Buying is all or nothing.** The stock, the price and the room for the whole quantity (more than one [stack](/basic/keywords#stacks) takes several slots) are checked first. A purchase that does not work takes no money and gives nothing.
- What the player sells is taken by the vendor, which pays from its purse, but it does **not** go into its stock: the shop sells what its lines say. A sale that would take the player over the maximum of the currency is refused.
- Stock and the vendor's purse are saved.

## Restocking

Every stocked item waits its own interval (its **Custom restock hours**, else the vendor's). When the time is due, the line gets *Restock quantity* more, up to its *Max quantity*; the wait starts again whether or not there was room for more. The clock is the total **game time**, so it does not wrap with the day. Items with unlimited stock never restock.

## See also

- [Items](/basic/items/items), [Currency](/basic/items/currency), [Gameplay Config](/basic/game-settings/gameplay-config)
