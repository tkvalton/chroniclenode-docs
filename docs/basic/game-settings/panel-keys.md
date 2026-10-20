# Panel keys and the mini menu

Part of [Action bars and keybinds](/basic/game-settings/action-bars-and-keybinds). The keys that open the windows of the interface (the character sheet, the spellbook, the quest log).

A **panel** is a window of the interface: the character sheet, the spellbook, the quest log, and any window you make. A panel is opened by **one of twenty panel keys**, the input actions `panel_keybind_1` to `panel_keybind_20`. The key and the panel are tied by a **number**, and the number is set **on the panel**:

1. Open the panel's scene (a panel is a [`PanelUI`](/advanced/user-interface/panels/panel-ui)) and set **Panel keybind** to a number from **1 to 20** (`0` = no key).
2. In the **Input Map**, give `panel_keybind_N` the key you want.
3. Name the key for the player in **Game Settings > Settings > Keybinds** (see [What the player reads](#what-the-player-reads)).

The template sets the number of its three numbered panels (the combat report has none), and the project setup gives the first four numbers a key:

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
