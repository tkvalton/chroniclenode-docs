# Items

<Shot name="items-editor" caption="The Items editor (Items > Items)." />

An **item** definition says what a thing in the bag is: a sword, a potion, a letter, a gem. The list on the left holds every item of the game. **Add** asks for the **kind** of item and makes a new one; the kind decides which section of properties the editor shows. The kind of an item cannot be changed afterwards.

## The kinds

| Kind | What it is | Its section |
|---|---|---|
| **Basic Item** | A thing that does nothing by itself: a trophy, a vendor-trash item | none |
| **Consumable** | Used up when used: it applies an [effect](/basic/abilities-and-effects/effects) (a potion, a food) | [Consumable](#consumable) |
| **Equipment** | Worn in a slot: armor, rings, trinkets | [Equipment](#equipment) |
| **Weapon** | Equipment that also hits: it has damage, a speed and a weapon class | [Equipment](#equipment), [Weapon](#weapon) |
| **Ammo** | Equipment that is spent by ranged [abilities](/basic/abilities-and-effects/abilities#ammo-and-reagents): arrows, bolts, bullets | [Equipment](#equipment), [Ammo](#ammo) |
| **Quest Item** | An item tied to a [quest](/basic/events-and-quests/quests) | [Quest item](#quest-item) |
| **Material** | An ingredient for [recipes](/basic/items/craft-recipes) | [Material](#material) |
| **Enchant Scroll** | Puts an [effect](/basic/abilities-and-effects/effects) on a piece of equipment, for a while or for good | [Enchant scroll](#enchant-scroll) |
| **On-Use Item** | Runs an [ability](/basic/abilities-and-effects/abilities) and has charges (a wand, a scroll, a rod) | [On-use item](#on-use-item) |
| **Readable** | Opens a panel of text pages: a letter, a book | [Readable](#readable) |
| **Socketable** | A mod that goes into the sockets of equipment: a gem, a rune, a scope, a chip | [Socketable](#socketable) |

## Basic properties

Every item has these.

| Field | What it does | Default |
|---|---|---|
| **Display name**, **Description**, **Icon** | What the inventory, tooltips and vendors show | |
| **Color** | A color for the item in the editor lists | white |
| **Item model** | The 3D mesh that shows the item in the world | none |
| **Material override** | Materials that replace the ones of the model | none |
| **Quality** | The [quality](/basic/equipment-definitions/quality) of the item (common, rare, epic). The interface uses it for the color of the item's border and name. `None` = no quality | none |
| **Stackable**, **Max stack size** | Whether several of the item share one slot in the bag, and how many. Consumables and materials start with a maximum of `99` | not stackable, `1` |
| **Vendor value** | What the item is worth, in the currency of the vendor. A vendor pays a share of it and sells at a multiple of it (see [Vendors](/basic/items/vendors#prices)). An item with a value is always worth at least `1` | `0` |
| **Is key item** | The item cannot be sold to a vendor or discarded. Use it for quest and story items | off |
| **Item level** | Nothing reads it yet. It is kept for the loot generation that is planned: the level of a generated item will be its stat budget. Items you make by hand can ignore it | `1` |
| **Groups** | The [groups](/basic/shared-systems/groups) the item is in. Consumables of a group that shares a [cooldown](/basic/keywords#cooldown) go on cooldown together (all potions share one), and an ability's ammo or reagent cost can name a group | none |
| **Requirements** | What a player needs to use or equip the item: a level, a class, a [proficiency](/basic/entity-stats/proficiencies), a quest. See [Requirements](/basic/shared-systems/requirements). They are checked when a player puts the item on or uses it; NPCs, starting gear, rewards and loading a save skip them | none |

## Consumable

| Field | What it does | Default |
|---|---|---|
| **Effect** | The [effect](/basic/abilities-and-effects/effects) applied to the user (a heal, a buff). The button opens the catalog | none |
| **Consume amount** | How many of the item one use takes from the [stack](/basic/keywords#stacks) | `1` |
| **Consume effect per amount** | On: the effect is applied once for every piece used (use 3 at once, get it three times). Off: once, whatever the amount | off |
| **Has cooldown**, **Cooldown duration** | After use, this item cannot be used again for this many seconds. Put potions in a [group](/basic/shared-systems/groups#shared-cooldown) that shares its cooldown to make all of them wait | off, `0` |

The last piece used empties the slot. Drinking raises the item-used and item-consumed signals that quests, events and [procs](/basic/abilities-and-effects/effect-types) can listen to.

## Equipment

Equipment is worn in a slot of the [equipment slots](/basic/equipment-definitions/equipment-slot) of the character. Weapons and ammo have these fields too.

| Field | What it does |
|---|---|
| **Equipment type** | The [equipment type](/basic/equipment-definitions/equipment-type) of the item: helmet, chest, ring, one-handed weapon. A slot takes the item when the slot lists this type. For a weapon, the type is its **weapon type** |
| **Class** | The [armor class](/basic/equipment-definitions/armor-class) of an armor piece: plate, leather, cloth. [Proficiencies](/basic/entity-stats/proficiencies) and the [Wearing Armor Class](/basic/shared-systems/conditions) condition read it |
| **Effect stat bonus** | **Add Stat Bonus**: a stat and a number. While the item is worn the number is added to the stat, and taken away again when the item is taken off |
| **Equipment effects** | [Effects](/basic/abilities-and-effects/effects) that are applied while the item is worn: a glow, an aura, a proc |
| **On-use ability** | An [ability](/basic/abilities-and-effects/abilities) the wearer can activate while it is worn (a trinket you click) |
| **Sockets** | **Add Socket**: a [socket](/basic/equipment-definitions/socket) type. Each one takes a [socketable](#socketable) mod of that type. The mods work only while the item is worn |
| **Full sockets effect** | An effect that is added when **every** socket of the item is filled |
| **Set bonus** | The [set](/basic/equipment-definitions/set-bonus) the item belongs to |

The visual side of equipment is the **Equipment mesh** section: the body part and attachment meshes the item shows on a character's [model scene](/basic/assets/model-scenes).

When a player equips an item it leaves the bag. If a worn item is in the way it is displaced into the bag, and with a full bag the swap still works. An item that does not meet its requirements is refused with a message. A two-handed weapon empties the slots its weapon type blocks.

## Weapon

| Field | What it does | Default |
|---|---|---|
| **Weapon class** | The [weapon class](/basic/equipment-definitions/weapon-class): sword, bow, staff. It decides the animations, whether the weapon is ranged, which slots it blocks and what ammo it uses | |
| **No damage** | A cosmetic or utility weapon: it adds no damage | off |
| **Weapon damage min / max** | A hit with the weapon does a number in this range. If the maximum is `0` or below the minimum, the minimum is used | `10` / `15` |
| **Weapon speed** | Seconds between swings. Lower is faster | `2.4` |
| **Weapon damage type** | The [damage type](/basic/types-and-groups/damage-types) the weapon deals. Resistances, [immunities](/basic/abilities-and-effects/immunities) and [proficiencies](/basic/entity-stats/proficiencies) read it | Physical |
| **Weapon scale** | The size of the model when it is held (`1` = as modeled) | `1` |
| **Collision template** | The shape of the hit area of a swing: small, medium, large, thin, wide or tiny capsule, or none | medium capsule |

An [ability](/basic/abilities-and-effects/abilities)'s [damage effect](/basic/abilities-and-effects/effect-types) can use the weapon: its **Weapon damage percentage** takes a share of the weapon's damage into the hit.

## Ammo

Ammo is equipment worn in the ammo slot. Which ammo a bow can shoot is decided by [groups](/basic/shared-systems/groups): the weapon class names an **ammo group** and the arrows are in that group.

| Field | What it does |
|---|---|
| **Ammo effects** | [Effects](/basic/abilities-and-effects/effects) that are applied to the target of every use that spends this ammo, on top of the ability's own: a poison arrow, an explosive bolt |

## Quest item

| Field | What it does | Default |
|---|---|---|
| **Quest** | The [quest](/basic/events-and-quests/quests) the item belongs to. `Browse Quests` opens the list | none |
| **Auto use on pickup** | The item is used as soon as a player picks it up | off |
| **Triggers quest** | Using the item starts the quest | off |
| **Remove on quest complete** | The item leaves the bag of every party member when the quest completes | on |

## Material

| Field | What it does | Default |
|---|---|---|
| **Material type** | A free word that groups materials (`ore`, `leather`, `herb`) for recipe lists | empty |
| **Crafting tier** | The tier of the material: higher tiers go with more advanced recipes | `1` |

A material cannot be used; it is made to be spent by a [recipe](/basic/items/craft-recipes).

## Enchant scroll

An enchant scroll puts an effect on a piece of equipment. Using the scroll opens the choice of the item; the effect then works while that item is worn.

| Field | What it does | Default |
|---|---|---|
| **Effect** | The [effect](/basic/abilities-and-effects/effects) that is put on the equipment | none |
| **Enchant duration** | Seconds the enchantment lasts. `-1` = permanent | `-1` |
| **Allowed equipment types** | The [equipment types](/basic/equipment-definitions/equipment-type) it can go on | none |
| **Allows weapons** | It can go on any weapon | off |
| **Allows any equipment** | It can go on anything that can be equipped | off |
| **Consume on use** | The scroll is used up. A spent scroll leaves the bag | on |

The three `Allows` fields add up: the scroll fits an item if **any** of them says so. With none set, it fits nothing.

**Which enchantments replace each other** is decided by the [groups](/basic/shared-systems/groups) of the effect, not by the scroll. Enchantments whose effects are in no group share **one slot**: a new one replaces the old one. An effect in a group follows the rules of the group (*Max active*, *Scope: Item*, *When full*), so "one weapon coating and one elemental enchant" is two groups. A group that refuses stops the scroll **before** it is spent.

::: info Reserved fields
The scroll also has **Override effect duration**, **Enchant category** and **Conflicts with category**. Nothing reads them yet: use groups for conflicts.
:::

## On-use item

| Field | What it does | Default |
|---|---|---|
| **Ability** | The [ability](/basic/abilities-and-effects/abilities) the item runs when used | none |
| **Max charges** | The most charges the item can hold | `1` |
| **Starting charges** | Charges a new copy has | `1` |
| **Charges per use** | Charges one use takes | `1` |
| **Consume on start** | On: the charges are taken when the use begins. Off: only when the ability completes | on |

The item is spent when its last charge is used.

## Readable

| Field | What it does |
|---|---|
| **Pages** | **Add Page** adds a page of text. Pages can use BBCode (`[b]bold[/b]`, `[color=red]red[/color]`). The preview shows the page you choose |
| **Background texture** | An image behind the text of the panel |

Using the item opens the readable panel at the first page.

## Socketable

| Field | What it does |
|---|---|
| **Effect** | The [effect](/basic/abilities-and-effects/effects) the mod gives to whoever wears the item it is socketed in |
| **Allowed sockets** | **Add Allowed Socket**: the [socket](/basic/equipment-definitions/socket) types it fits |

A socketable is the **mod** of a socket system, and gems are only the familiar example: the same item can be a rune, a scope, an armor plate or a chip, whatever the sockets of your equipment take (see [Socket](/basic/equipment-definitions/socket#what-you-can-build-with-it)). It cannot be used by itself. Taking a mod out of a worn item takes its effect with it; when an item is displaced its mods and enchantments go with it.

## See also

- [Equipment Definitions](/basic/equipment-definitions/), [Loot Tables](/basic/items/loot-tables), [Vendors](/basic/items/vendors)
- [Requirements](/basic/shared-systems/requirements), [Rewards](/basic/shared-systems/rewards), [Groups](/basic/shared-systems/groups)
- [Items: how they are built](/advanced/items/) (Advanced)
