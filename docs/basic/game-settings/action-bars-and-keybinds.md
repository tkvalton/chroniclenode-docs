# Action bars and keybinds

This page has two halves: the **action bar** (what ability or item is on a slot, and the key that fires it) and the **panel keys** (the keys that open the windows of the interface). Both are input actions that you key in the Input Map and name in the Game Settings.

The **action bar** is the row of slots the player uses to fire abilities and items. A slot has two sides: **what is on it** (an ability or an item) and **the key that fires it**. ChronicleNode keeps the two apart, and that is what lets one system make a classic RPG bar, an action-combat game with the mouse buttons as attacks, or a bar the story fills in as the game goes on.

How the **scene** of the bar is built (the unique names it needs, its options, the slot button, how to draw your own) is on [Action bar](/basic/user-interface/action-bar) in the User Interface chapter.

## The model

| Part | What it is | Where you set it |
|---|---|---|
| **The slot** | A place with a number, 1 to 60 (the project decides how many are used). Every character has a bar of its own | [Gameplay Config](/basic/game-settings/gameplay-config#action-bar) > *Action Bar* |
| **The key of a slot** | Slot *N* is fired by the input action `action_slot_keybind_N` | Godot's **Project > Project Settings > Input Map** |
| **What is on a slot** | An ability or an item | The player drags it there, or a [class plan](#the-plan-of-a-class), an [effect](#an-effect-changes-a-slot) or an [event](#an-event-changes-a-slot) puts it there |
| **Who may change it** | The player, or only the game | The [arrangement](#free-or-fixed), the *locked* flag of a slot, an effect that covers it |
| **How it looks** | The interface scene: how many slots it shows, in what layout | Your own **action bar scene** (the template of the toolkit is a starting point) |

The bar is **not** the controller. A slot is fired when its key is pressed, whatever the key is: a key on the keyboard, a mouse button or a gamepad button.

## Keys

The toolkit makes **60 input actions**, `action_slot_keybind_1` to `action_slot_keybind_60`, when you run the project setup (and a character that has the controller adds any that are missing).

| Slots | Default keys |
|---|---|
| 1 to 10 | **1** to **0** |
| 11 to 20 | **Shift + 1** to **Shift + 0** |
| 21 to 30 | **Ctrl + 1** to **Ctrl + 0** |
| 31 to 60 | **No keys**: bind the ones you need |

Open **Project > Project Settings > Input Map**, find `action_slot_keybind_1` and change its key, or add a **mouse button** or a **gamepad button** to it. Nothing else has to change: the controller reads the action, and the key label on the slot reads the action too (a slot on the left mouse button shows **LMB**).

**Game Settings > Settings > Keybinds** lists every input action with its current keys and a checkbox: tick the ones **players may rebind** in the settings menu. A player's change is saved apart from your defaults. See [Settings](/basic/game-settings/settings#keybinds).

::: tip A slot is read before the controller's own click
When a slot is bound to a mouse button, the press is taken by the slot **first**. The controller never sees it, so it does not also select, walk or attack with that click. If the right button is the *mouse look* of your controller preset (WASD with Mouse), you cannot also use it for a slot. Choose a controller preset that does not claim the button, or put the slot on another one.
:::

## The number of slots

**Gameplay Config > Action Bar > Action bar slot count** (1 to 60, default 30) is how many slots a character has. It is the **data** of the bar. How many the screen shows, and how they are laid out, is your interface: the template shows rows of 10 with buttons to add and remove rows, and **a slot your scene does not draw simply has no button** (it still works by its key). A game that only uses slots 1 and 2 for the mouse can hide them from the bar and keep every other slot as it is.

## Free or fixed

**Gameplay Config > Action Bar > Action bar arrangement**:

| Arrangement | What the player can do |
|---|---|
| **Free** (default) | Drag abilities and items on and off the slots, from the spellbook and the bag. Slots that are **locked** (below) cannot be changed |
| **Fixed** | Nothing. Every slot is locked: only the class plan, effects and events fill the bar |

A second, softer lock lives in the **interface**: the action bar scene has an **Allow rearranging** option. Off, that bar only **shows**: the player cannot drag onto or off it. It can only make things stricter. A slot that the project or the class locks stays locked whatever the scene says.

**Learned abilities.** *Action bar auto fill* (off by default): a newly learned ability goes to the first free slot that nothing is planned for. Off, it waits in the [spellbook](/basic/abilities-and-effects/skill-trees) until the player drags it.

## The plan of a class

A [player class](/basic/entities/player-classes#action-bar) can **plan its bar**: for each slot, the ability that belongs on it and whether it is locked. The plan can name an ability the character **does not know yet**:

> Slot 1 is *Slash*, locked. Slot 2 is *Whirlwind*, free. Slot 3 is *Charge*, free. The character starts at level 1 and knows *Slash* only. *Whirlwind* waits on slot 2 and appears there at level 10, when it is learned.

| Rule | |
|---|---|
| An ability that is **known** goes on its slot when the character is made | |
| An ability that is **not known yet** is **reserved**: the slot waits, and the ability goes there the moment it is learned (a level reward, a quest, a trainer, a skill tree) | |
| A **free** (unlocked) plan is used **once**: afterwards the player can rearrange | |
| A **locked** plan **stays**: if the ability is forgotten and learned again it goes back to its slot, and the player cannot use the slot for anything else | |
| If the player has put something else on a free reserved slot before the ability came, the player's choice stays | |
| A locked slot with **no ability** is a locked empty slot (a slot the player cannot use, for a bar that shows only what you want) | |

## An effect changes a slot

The **Action Bar Slot** [effect](/basic/abilities-and-effects/effect-types) puts an ability on a slot **while it lasts**, or **empties** the slot. When the effect ends, what the player had there comes back. A slot an effect covers cannot be changed by the player.

| Field | What it does |
|---|---|
| **Slot number** | 1 to 60 |
| **Ability** | The ability that takes the slot. **None** = the slot is emptied and cannot be used while the effect lasts |
| **Grant ability** | The character is given the ability while the effect lasts, if it does not know it, and loses it again with the effect |

Give the effect to a **weapon** (an item's equip effects) and the weapon changes the bar:

> A **bow** has two Action Bar Slot effects: slot 2 gets *Aim* (hold to draw, release to loose), slot 1 is emptied (a melee attack does not belong with a bow). A **sword** has none, so slots 1 and 2 are the sword's *Slash* and *Heavy Strike* that the player put there. Swap weapons and the bar swaps with them.

If two effects cover the same slot, the last one shows, and the first shows again when the last ends.

## An event changes a slot

The **Set Action Bar Slot** [event action](/basic/events-and-quests/event-actions) puts an ability on a slot, empties it, or locks and unlocks it, **for good** (it is what the bar holds and it is saved). Use it for a bar that follows the story:

- The hero picks up the **Moonblade**: an event puts *Moonlight Cut* on slot 3 and locks it.
- A **cutscene** ends: an event unlocks the slots the tutorial locked.

An ability that is not known yet is **reserved** for the slot, as in the class plan.

## The built-in basic attack

**Gameplay Config > Action Bar > Player basic attack**:

| Choice | What it does |
|---|---|
| **Auto attack** (default) | The character has the basic attack of its weapon: clicking an enemy, or holding the attack button, attacks on its own, as long as the target is in range |
| **Off** | There is **no built-in basic attack** for the player or its companions. **Slot 1 is a slot like any other** |

NPCs always keep their basic attack.

::: warning With the basic attack off
- Nothing attacks until the player fires a slot. **The attacks of your game are the abilities you put on the slots**, usually slot 1 and 2 on the mouse buttons.
- A **point-and-click** controller attacks by clicking an enemy, so with the attack off a click only **selects**. The Gameplay Config warns about the pairing. Use it with an action controller (WASD with Mouse).
- Effects that **swap the basic attack** and triggers that count basic attacks do nothing for the player.
:::

## Panel keys

A **panel** is a window of the interface: the character sheet, the spellbook, the quest log, and any window you make. A panel is opened by **one of twenty panel keys**, the input actions `panel_keybind_1` to `panel_keybind_20`. The key and the panel are tied by a **number**, and the number is set **on the panel**:

1. Open the panel's scene (a panel is a [`PanelUI`](/advanced/user-interface/panels/panel-ui)) and set **Panel keybind** to a number from **1 to 20** (`0` = no key).
2. In the **Input Map**, give `panel_keybind_N` the key you want.
3. Name the key for the player in **Game Settings > Settings > Keybinds** (see [What the player reads](#what-the-player-reads)).

The template sets the number of its three panels, and the project setup gives the first four numbers a key:

| Number | Panel in the template | Default key |
|---|---|---|
| 1 | Character sheet | **K** |
| 2 | Spellbook | **P** |
| 3 | Quest log | **L** |
| 4 | *(nothing yet: a map panel of yours)* | **M** |
| 5 to 20 | *free* | none |

A panel with a number is opened and closed by its key. Opening a panel closes the window that was open. Two panels with one number are reported when the interface starts (the first one opens).

Other options on a panel: **Menu icon** and **Menu description** (what its mini menu button shows and says), and **Show in mini menu**.

### The mini menu

The **mini menu** is a row of buttons that open the panels with the mouse. It makes its buttons from the **numbered panels**: there is nothing to keep up to date, a panel that you make and number has a button. A button shows the panel's **menu icon**, says its **menu description** in a tooltip and writes the **key** that opens it in a corner (it changes when the player rebinds the key).

| Option of the mini menu | What it does |
|---|---|
| **Button numbers** | Which numbers get a button, in order. Empty (the default) = every numbered panel that has *Show in mini menu* on, by number |

### What the player reads

The keybinds menu of the player lists the keys that you allowed. It reads each action's **name**, which you set: in **Game Settings > Settings > Keybinds** every action has a **name field** next to its keys ("Open the journal"). Empty = the action name written out ("Panel Keybind 5"). The names are saved with your project settings: the player cannot change them, only the keys.

| Legacy | |
|---|---|
| The four older actions `character`, `spellbook`, `quest_log` and `map` are **not used any more** | They were never connected to the panels. A project that has them can delete them: the panel keys take their place |

## Recipes

### The classic bar

Leave the defaults. The player drags abilities from the spellbook onto slots 1 to 0, Shift and Ctrl, and uses the keys. Plan nothing, or plan a few starting slots in the class.

### An action game: left and right mouse button are attacks

1. **Player basic attack: Off**.
2. In the **Input Map**, give `action_slot_keybind_1` the **left mouse button** and `action_slot_keybind_2` the **right mouse button**. Remove the keys they had.
3. Plan the class: slot 1 = *Light Attack*, slot 2 = *Heavy Attack*, both **locked**.
4. In your action bar scene, **do not draw slots 1 and 2** (or draw them as a fixed icon): the player does not click them, the mouse does.
5. Use a controller preset that does not use the right button for mouse look (or make look a drag with *Secondary action trigger: Release without drag*).

### Weapons that change the buttons

On top of the recipe above: give each weapon the effects of its own bar. The bow puts *Aim* on slot 2 and empties slot 1; a staff puts *Fireball* on slot 1 and *Shield* on slot 2; with no weapon the plan's *Light Attack* and *Heavy Attack* are there. The slots come back when the weapon is put away.

### A bar that only holds what the story gives

1. **Action bar arrangement: Fixed**.
2. Put the abilities with events (**Set Action Bar Slot**) as the player earns them.
3. Draw only the slots you use.

### A hand-picked set with some free slots

Plan the first four slots in the class and **lock** them. Leave the rest free. The player arranges slots 5 and up.

## What the player sees

- A **locked** or **covered** slot cannot be dragged onto or off. The player is told "This slot cannot be changed".
- A slot that waits for an ability is **empty** until it is learned.
- The **key label** of a slot is read from the input action: `Q`, `Ctrl 2`, `LMB`, `RMB`, `Mouse 4`, `Joy 0`.

## Saving

The bar is saved with the character: what is on every slot (abilities and items are found again on load), the **locks** and the **reserved** slots. A slot that an effect covers saves what was **underneath**, so the bar after a load is the player's own.

## See also

- [Gameplay Config](/basic/game-settings/gameplay-config#action-bar), [Settings](/basic/game-settings/settings#keybinds), [Controller & Camera](/basic/game-settings/controller-and-camera)
- [Player classes](/basic/entities/player-classes#action-bar), [Effect types](/basic/abilities-and-effects/effect-types), [Event actions](/basic/events-and-quests/event-actions)
- [Using an ability](/basic/abilities-and-effects/using-an-ability)
