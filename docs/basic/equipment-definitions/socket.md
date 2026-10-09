# Socket

<Shot name="socket-editor" caption="The Socket editor (Equipment Definitions > Socket)." />

A **socket** type is a kind of slot in a piece of equipment, and the kind of **mod** that fits it. Sockets are an open system, not only for gems: a *Red* socket takes a gem, a *Rune* socket a rune, a *Scope* socket the scope of a rifle. What goes in is a [socketable item](/basic/items/items#socketable) with an effect. The demo has four, named after gem colors (*Red*, *Blue*, *Green*, *White*) because that is the familiar example. A socket has a name, an icon and a **color**, which is the border the socket and its mods get in the inventory.

## Fields

| Field | What it does |
|---|---|
| **Display name**, **Description**, **Icon** | What the editors and tooltips show |
| **Color** | The color of the socket border in the interface |

## How sockets and mods work together

1. An [equipment item](/basic/items/items#equipment) lists its sockets: **Add Socket** once for each, choosing a type. Two reds and a blue is three sockets.
2. A [socketable item](/basic/items/items#socketable) (a gem, a rune, a mod) lists the **allowed sockets** it fits and carries an **effect**.
3. A mod goes into a socket of an allowed type. While the equipment is **worn**, the effects of its mods are on the wearer. Taking the mod out, or taking the equipment off, removes the effect.
4. If **every** socket of an item is filled, the item's **full sockets effect** is added too. Use it for "fill all the sockets for a bonus".

Mods and enchantments stay with the item when it is moved around, and go with it when another item displaces it. Sockets and what is in them are saved with the item.

## What you can build with it

| System | Sockets | Mods |
|---|---|---|
| **Gems** | Red, Blue, Green | Ruby (+attack), Sapphire (+mana), Emerald (+stamina) |
| **Runes** | Rune | Runes with a [proc](/basic/abilities-and-effects/effect-types), a lifesteal, a thorns effect |
| **Weapon attachments** | Scope, Barrel, Grip | A scope (+accuracy), a silencer, a laser sight: with [Hit Chance](/basic/game-settings/gameplay-config#accuracy-and-evasion) and [Ability Modifier](/basic/entity-stats/stats#the-effect-types) effects |
| **Armor plating** | Plate | Plates with a resistance to one [damage type](/basic/types-and-groups/damage-types) |
| **Upgrade chips** | Chip | Chips that change an ability of the item |
| **Materia** (as in some JRPGs) | Materia | Materia that give the wearer an ability |

The sockets are plain labels that decide what fits where. A game can use them as colors, as slots or as nothing but an icon.

::: tip A socket type does not mean a color rule
Nothing makes a red gem need a red socket except the mod's own *Allowed sockets* list. A mod can list several types.
:::

## See also

- [Items](/basic/items/items#socketable), [Set Bonus](/basic/equipment-definitions/set-bonus)
