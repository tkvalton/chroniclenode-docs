# Socket

<Shot name="socket-editor" caption="The Socket editor (Equipment Definitions > Socket)." />

A **socket** type is a kind of hole in a piece of equipment, and the kind of gem that fits it. The demo has four: *Red*, *Blue*, *Green* and *White*. A socket has a name, an icon and a **color**, which is the border the socket and its gems get in the inventory.

## Fields

| Field | What it does |
|---|---|
| **Display name**, **Description**, **Icon** | What the editors and tooltips show |
| **Color** | The color of the socket border in the interface |

## How sockets and gems work together

1. An [equipment item](/basic/items/items#equipment) lists its sockets: **Add Socket** once for each, choosing a type. Two reds and a blue is three sockets.
2. A [socketable item](/basic/items/items#socketable) (a gem) lists the **allowed sockets** it fits and carries an **effect**.
3. A gem goes into a socket of an allowed type. While the equipment is **worn**, the effects of its gems are on the wearer. Taking the gem out, or taking the equipment off, removes the effect.
4. If **every** socket of an item holds a gem, the item's **full sockets effect** is added too. Use it for "fill all the sockets for a bonus".

Gems and enchantments stay with the item when it is moved around, and go with it when another item displaces it. Sockets and what is in them are saved with the item.

::: tip A socket type does not mean a color rule
Nothing makes a red gem need a red socket except the gem's own *Allowed sockets* list. A gem can list several types, or a game can use the colors for nothing more than the border.
:::

## See also

- [Items](/basic/items/items#socketable), [Set Bonus](/basic/equipment-definitions/set-bonus)
