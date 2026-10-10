# Loot Rules

A [loot table](/basic/items/loot-tables) says **what** can drop. A **loot rule** says **when** it drops and **at what item level**. NPCs and objects (chests, crates, barrels) hold loot rules, and one holder can have several: a guard can have a few coins and a trinket for a thief to steal, and a bigger prize for when it dies.

Loot rules replace the old fixed **Inventory** and the single **Loot table** of an NPC and a chest: a loot table with only guaranteed entries does the same job as a fixed inventory, and the rule says when it is handed out. Old settings still work (see [Moving the older settings](#moving-the-older-settings)).

## A rule

| Field | What it does |
|---|---|
| **When** | The trigger (below) |
| **Table** | A **shared table** from Items > Loot Tables, or **its own table** edited right there on the rule: "this guard carries the key" needs no entry in the shared list |
| **Item level** | Where the item level of generated items comes from, with an offset and a lowest and highest level ([below](#where-the-item-level-comes-from)) |
| **The receiver changes it** | The one who gets the loot (the killer, the one who opens the chest) changes the **amount** with its *loot quantity* and the **quality** with its *magic find* ([Loot Tables](/basic/items/loot-tables#stats-that-change-loot)). On by default |

### When

| Trigger | For | What happens |
|---|---|---|
| **On Initialize** | NPCs, objects | When the NPC spawns or the object is set up. What it gets is there from the start: a thief can steal it, a chest holds it before anyone looks |
| **On Death** | NPCs | When the NPC dies. The loot is on the body |
| **On Destroyed** | Objects with health | When the object is destroyed. What it leaves behind stays lootable, **like a corpse** |
| **On First Access** | NPCs, objects | The first time someone opens its inventory: a chest is opened, a pocket is picked, a body is looted. Rolled **once** and kept |

A rule on **Initialize** or **First Access** rolls once; the holder remembers it, so loading a save or opening a chest a second time does not roll it again. A rule on **Death** or **Destroyed** rolls when it happens.

**First Access and the level.** A chest that rolls on first access works out its item level at the moment it is opened (the party's level, which is the default for chests, or the opener's, as you choose), not at the level the party had when the world loaded. That is usually what you want. A rule on Initialize works it out when the holder is made.

### Pickpocketing

The [Access Inventory](/basic/abilities-and-effects/effect-types) effect (the pickpocket) first rolls the **On First Access** rules of its target, then opens its inventory. So an NPC with a first-access rule always has something to steal, even if its death loot is only rolled when it dies. An NPC with no rule on Initialize or First Access has an empty inventory until it dies, and a pickpocket finds nothing.

### Destroyed objects

A destructible chest, crate or barrel that has a rule on **Destroyed** leaves a lootable remains: a destroyed chest can still be opened (a broken lock does not hold), and a plain crate with no interaction becomes openable like a container once it is destroyed. When everything is taken, the remains are gone for good. A destroyed container with nothing in it is simply destroyed.

## Where the item level comes from

Each rule and each loot table can name a **level source**. The first one that says something decides:

1. the **loot table**'s own source (if it is not *Inherit*), then
2. the **rule**'s source (if it is not *Inherit*), then
3. the **project default** for this kind of holder (Gameplay Config > Item Generation).

| Source | The level is |
|---|---|
| **Inherit** | The next one in the order above decides |
| **Fixed level** | A number you write |
| **Holder level** | The NPC's own level (an object has no level, so it uses the party's) |
| **Receiver level** | The level of whoever gets the loot: the killer, the one who opens the chest |
| **Party level** | The level of the party (the average or the highest, as the [NPC level scaling](/basic/game-settings/gameplay-config) setting says) |
| **World level** | The **item level of the loot** of the [world](/basic/world/worlds#loot) the holder is in |

Every source can also have an **offset** (a boss: +3) and a **lowest** and **highest level** (a weak NPC farmed at level 60 still drops from level 20; a starting zone never drops above 15). A source set to *Inherit* still applies its offset and limits when nothing else gives them.

**The table overrules the rule.** A table that pins its level ("this boss table is always level 40") wins over every rule that uses it. A table with *Inherit* follows each rule, so one table can serve a level 5 wolf and a level 30 wolf. A table inside another table with a level source of its own uses it for its own entries.

If a source cannot give a level (no party yet, a world with no level) the **fallback item level** of the Gameplay Config is used.

## Examples

| You want | Rule |
|---|---|
| A wolf that drops pelts at its own level | When: On Death. Table: *Wolf loot*. Item level: Holder level (or leave it, it is the default for NPCs) |
| A chest that holds loot for whoever opens it | When: On First Access. Table: *Dungeon chest*. Item level: Receiver level or Party level |
| A chest in a level 40 dungeon, whatever the player's level | When: On First Access. Item level: World level, with the dungeon world's *Item level of the loot* at 40 |
| A boss with a guaranteed unique item and a bonus | Rule 1: On Death, own table with the item as a guaranteed entry. Rule 2: On Death, shared table *Boss gear* with offset +3 |
| A guard that can be robbed | Rule 1: On First Access, own table with a few coins. Rule 2: On Death, shared table *Guard loot* |
| A barrel that breaks into a few things | When: On Destroyed. Table: *Barrel contents* |
| A merchant NPC that always starts with a key | When: On Initialize, own table with a guaranteed key |

## The editors

- **NPC**: the **Loot** section of the NPC editor ([NPCs](/basic/entities/npcs#loot)).
- **Interactable**: the **Loot** section under the interaction ([Interactables](/basic/entities/interactables#loot)).
- **A placed NPC or object**: the **Loot rules override** of the [Unique Object tool](/basic/world/unique-object-tool). When it has any rules, they **replace** all the rules of the definition.

Each rule shows its problems (an NPC rule *On Destroyed*, a rule with no table, a table that does not exist). The **own table** editor lists the entries as rows: an item, currency or another table, with its quantity, weight (for the rolled ones) and chance.

## Moving the older settings

An NPC made before loot rules has a **Loot table** with a **logic** (None, On Initialize, On Death) and a fixed **Inventory**. A container has its **inventory** and its **loot table**. They keep working: the game treats them as rules (the fixed inventory is a rule on Initialize with its own table of guaranteed entries; the loot table is a rule on the logic it said). The editor shows a note with a button, **Move the older settings into loot rules**, that turns them into real rules you can edit and clears the old fields.

A **player character's** starting inventory is not a loot rule: it stays the list of items the character starts with.

## See also

- [Loot Tables](/basic/items/loot-tables), [Generated Items](/basic/items/item-generation), [NPCs](/basic/entities/npcs), [Interactables](/basic/entities/interactables), [Worlds](/basic/world/worlds)
- [Loot: how it is built](/advanced/items/loot) (Advanced)
