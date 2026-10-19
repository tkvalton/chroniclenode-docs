# UI Panels

A **UI panel** is a window the **player opens themselves**: the character sheet, the spellbook, the quest log. (A window that belongs to an interaction is an [interaction panel](/basic/user-interface/interaction-panels).) The panels live in the **`UIPanels`** container of the [in-game scene](/basic/user-interface/in-game), and **every child of it must be a `PanelUI`**.

A panel is opened by a **panel key**, by its button on the [mini menu](/basic/user-interface/hud), or by code, and closed by the same key, its close button or **Esc**.

## The panels of the template

| Panel | Class | Number | Default key | What it holds |
|---|---|---|---|---|
| **Character** | [`CharacterPanelUI`](/advanced/user-interface/panels/character-panel-ui) | 1 | **K** | The equipment slots around a 3D preview of the character, a switch between **stats** and **active effects**, and the **inventory** (the bag) |
| **Spellbook** | [`SpellBookPanelUI`](/advanced/user-interface/panels/spell-book-panel-ui) | 2 | **P** | The abilities the character knows (drag them to the action bar) and the [skill trees](/basic/abilities-and-effects/skill-trees) |
| **Quest log** | [`QuestLogPanelUI`](/advanced/user-interface/panels/quest-log-panel-ui) | 3 | **L** | The quests in progress and their objectives |

The key is not stored on the panel: a panel stores a **number** (1 to 20), and the key is the input action `panel_keybind_N` in the Input Map. That is how a player can rebind a key without touching the interface. Number 4 (**M**) is left for a map panel.

## Options of a panel

Set on the root node of the panel scene:

| Option | What it does | Default |
|---|---|---|
| **Panel name** | The name that code uses to open the panel (`ui_manager.toggle_panel("character")`). Needed for a panel with a key | empty |
| **Panel keybind** | Which panel key opens it: **1 to 20**, `0` for none | 0 |
| **Menu icon** | The icon of its mini menu button | none |
| **Menu description** | The tooltip of its mini menu button (empty = the panel name) | empty |
| **Show in mini menu** | Whether the mini menu makes a button for it (a panel with no number gets none) | on |
| **Screen space** | How much of the screen the window takes, **0 to 1**. Decides which windows are open together (below). The default **1** is a window that closes every other window | 1 |
| **Is draggable** | The player can move the window by its title bar | on |
| **Title bar show** | Hide the title bar and its close button | on |

The [UI Settings editor](/basic/game-settings/ui-settings#the-interface-at-a-glance) lists every panel with its number and the key that number currently has, and **warns when two panels have the same number**. The Input Map and the names the player reads are explained in [Panel keys](/basic/game-settings/panel-keys).

## What a panel gets for free

By extending `PanelUI` a panel has:

- A **title bar** (a child with the unique name `TitleContainer`, the template `title_ui_template.tscn`) with a close button and dragging.
- The signals to ask for a [tooltip](/basic/user-interface/tooltips), a [message](/basic/user-interface/messages-and-popups) and a UI sound, which the interface connects for you.
- The signals for **dragging** items and abilities (`drag_from_inventory_requested`, `ability_drag_requested` ...), which the interface connects to the drag controller if the panel declares them.
- `window_closed`, which the interface listens to.
- `initialize_ui(system_hub)`: the [system hub](/advanced/managers/game-host/game-host), as for every [HUD element](/basic/user-interface/hud#adding-your-own). Override it (calling `super`) to connect to the party, the quests or whatever the panel shows.

## Adding your own

1. **Make the scene.** A `Control` root with a script `class_name MyPanelUI extends PanelUI`. Add a title bar (copy the one in a template panel) if you want one.
2. **Fill in the options.** *Panel name*, *Panel keybind* (an unused number), *Menu icon*, *Menu description*.
3. **Add it** as a child of `UIPanels` in your in-game scene.
4. **Give the key a key.** In **Project Settings > Input Map**, give `panel_keybind_N` a key (and a name in Game Settings > Settings > Keybinds if players may rebind it).

That is all: the panel is registered as a window, opens with its key, gets a mini menu button and is checked by the [UI Settings overview](/basic/game-settings/ui-settings#the-interface-at-a-glance). If another panel already has the number, you get a warning at start and in the editor, and only the first one opens.

## Where the inventory lives

The bag is an [`InventoryUI`](/advanced/user-interface/panels/inventory-ui) **inside the character panel**. It is a self-contained part (its own scene, with the [inventory style](/basic/shared-systems/inventories) of the project: a list of slots or a grid, with or without weight), so it can be moved:

- **To stay as it is**: nothing to do.
- **To be a panel of its own** (the classic bag window with its own key): make a panel scene with an `InventoryUI` in it, give it a name and a number, add it to `UIPanels`, and remove the inventory from the character panel. A separate inventory panel template is planned, to cover both styles.

The window that shows a **chest or a body** next to your bag is a different one, the *External inventory* of the [interaction panels](/basic/user-interface/interaction-panels); it works with either style.

## The map

The **map panel** will be one of the UI panels (number 4 and the **M** key are held for it). It is planned together with the [zones](/planned/zones).

## The spellbook, abilities and talents

The spellbook holds two parts that are separate scenes inside it: the **abilities** list ([`AbilityPanelUI`](/advanced/user-interface/panels/ability-panel-ui)) and the **skill tree** ([`SkillTreePanelUI`](/advanced/user-interface/panels/skill-tree-panel-ui)). A game that wants **abilities and talents in two windows** makes two panels from these parts, in the same way as the inventory above.

## Which windows are open together

Every window (a UI panel or an [interaction panel](/basic/user-interface/interaction-panels)) has one number, **Screen space**, from 0 to 1: **how much of the screen it takes**. 1 is all of it, 0.5 is half.

**Windows that fit together stay open together.** When a window opens, the windows that are open add up with it. If the total is 1 or less, they all stay. If it is more, the windows that were opened **last** close first (the newest first) until it fits.

| Window | Screen space | What happens |
|---|---|---|
| Character sheet | 0.5 | Opens next to another 0.5 window |
| Inventory | 0.5 | Opens next to the character sheet: both are open |
| Spellbook | 1 | Opens and closes both: it takes the whole screen |
| Vendor, conversation, crafting | 1 | As today: they clear the screen |
| Map | 0 | Ignores the rule: it never closes another window, nothing closes it to make room, and it does not count as "a window is open" |

Example: the character sheet (0.5) and the inventory (0.5) are open, then you open a quest log of 0.5. The one that was opened last, the inventory, closes; the character sheet and the quest log stay. Opening a window that is already open makes it the newest.

- **Screen space is a promise about your design, not a measure.** The toolkit does not resize the window: a panel of 0.5 should be about half the screen wide in your scene. Place the windows in your in-game scene as you like; to put two side by side, use a `HBoxContainer`.
- **Esc closes every open window at once**, a window of screen space 0 too. With no window open, Esc opens the pause menu. (Screen space 0 only means the window never closes another one and does not count as a menu being open.)
- **HUD elements** (the mini map, a chat box) are not windows: they are not opened or closed and are not part of this. A **map** window is a UI panel; give it screen space 0 if it should stay up while the player plays.
- A conversation or a shop that starts clears the screen (they are 1) and the windows that were closed do **not** come back on their own.

## Zoom and input with a window open

By default an open window does not stop the game: the player can still walk, use abilities and rotate the camera, and a click on a window is eaten by the window, not the world. Two options decide the rest, and they are on the camera and the controller, not on the windows:

| Where | Option | What it does | Default |
|---|---|---|---|
| A [camera preset](/basic/game-settings/controller-and-camera) | **Zoom with window open** | The camera zooms (wheel and zoom keys) while a window is open. Off: it does not zoom until the window is closed | on for the third person camera; **off** for the top-down cameras (the wheel scrolls the window) |
| A [controller preset](/basic/game-settings/controller-and-camera) | **Block input with window open** | The player ignores the keys and the mouse of the game while a window is open: it stands still and uses no ability. The keys that open and close windows still work | off |

A window of screen space 0 never counts as "open" for these.

## See also

- [Panel keys](/basic/game-settings/panel-keys) (the keys, the mini menu, the names)
- [In Game](/basic/user-interface/in-game)
- [Interaction Panels](/basic/user-interface/interaction-panels)
- [HUD](/basic/user-interface/hud) (the mini menu)
- [`PanelUI`](/advanced/user-interface/panels/panel-ui)
