# Panel keybinds

::: warning Not built yet
This page describes a planned feature. Today there are four input actions for panels (`character`, `spellbook`, `quest_log`, `map`) and they are fixed in the code. A game with more panels, or other panels, cannot give them keys without writing code.
:::

A **panel** is a window of the interface: the inventory, the character sheet, the spellbook, the quest log, the map, and any window you make. Players open them with keys. The plan is to make those keys **a list the game designer edits**, like the action bar slots.

## What is wrong today

- Four panel keys exist, and each is wired to one panel by name in the code. A fifth panel (a journal, a crafting book, a guild window) has no key.
- The signal that carries "open this panel" has **no listener** in the project: pressing the panel keys does not open the panels today, only the buttons of the mini menu do. The names do not match either: the keys send *Spellbook*, *Quest Log* and an empty name for the character sheet, while the panels are named `spell_book`, `quest_log` and `character`. The planned work fixes both.
- The names the player sees in the keybinds menu are the names of the input actions, formatted: `Quest Log`, with no way to call it "Open the journal".

## The plan

**Twenty panel actions**, `panel_keybind_1` to `panel_keybind_20`, made by the project setup like the action bar slots. A **Panels list** (in the UI settings) says what each one opens:

| Field | What it does |
|---|---|
| **Action** | The input action. The first entries use the four actions that exist today, so a key the player has rebound keeps working |
| **Panel** | The panel to open, chosen from the panels of the interface: each panel scene has a **panel name**, so a panel you make shows up in the list |
| **Label** | What the player reads in the keybinds menu: "Open the spellbook" |
| **Toggle** | The key opens the panel and closes it again |

The template fills in the panels it has (character, spellbook, quest log, map, inventory) with their default keys. The rest of the twenty are free: **change them, rename them, add your own, or delete the ones you do not need**. A panel with no entry has no key; a mini menu button still opens it.

## Labels and groups for every key

The **Keybinds** tab of the [Game Settings](/basic/game-settings/settings#keybinds) lists every input action with a checkbox ("players may rebind"). The plan adds, for each action:

- a **label** (what the player reads),
- a **group** (*Movement*, *Action bar*, *Panels*, *Interface*, *Other*), so the player's menu is not one long list.

Your own actions work the same way: make an input action in the Input Map (`toggle_flashlight`), list it, and react to it with an event (the **Player Input** trigger).

## What is there today

- The action bar slots, [60 of them](/basic/game-settings/action-bars-and-keybinds), each a key, a mouse button or a gamepad button.
- The *Keybinds* tab with the checkboxes, and the rebinding menu for the player.
- The *Player Input* event trigger (it hears the actions the controller reports; the plan makes it hear any action).

## Still to decide

- Whether the list lives in the **UI settings** or in the **Gameplay Config**.
- Whether a panel can be opened by a key **while another window is open** (close it first, or open on top).
- How many fixed keys stay fixed (walk, interact, jump) and which move into the list.
