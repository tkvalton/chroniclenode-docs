# In Game

The **in-game scene** is the interface while the player plays. It is the biggest scene of the interface and the one most games change.

| | |
|---|---|
| **Set in** | [UI Settings](/basic/game-settings/ui-settings#ui-scene-paths) > *Ui scene in game* |
| **Root class** | [`InGameUI`](/advanced/user-interface/scenes/in-game-ui) (a [`CurrentUI`](/advanced/user-interface/scenes/current-ui)) |
| **Template** | `ui_scenes/in_game/in_game_ui_template.tscn` |

## What the scene holds

The root has three **containers**, and a few things that stand alone.

```text
InGameUI
├─ HUD                     the always-on parts            ─► HUD
│   ├─ MiniMenu, ActionBar, PartyFrames, MiniMap, QuestTracker, CombatLog, DamageMeter
├─ InteractionPanels       one window for each kind of interaction  ─► Interaction Panels
│   ├─ Conversation, Vendor, Crafting, ExternalInventory, Readable, Socket, DiceRoll
├─ UIPanels                the windows the player opens   ─► UI Panels
│   ├─ Character, SpellBook, QuestLog
├─ GameOverPanelUI         the death / game over window
├─ InGameMenuUI            the pause menu (Esc)
├─ LoadGameMenu            the load (and save) list, shared by the pause menu and game over
└─ DraggedContent          the icon that follows the mouse while an item or ability is dragged
```

| Part | Page | In a sentence |
|---|---|---|
| **HUD** | [HUD](/basic/user-interface/hud) | Self-sufficient elements you can add and remove freely |
| **Interaction panels** | [Interaction Panels](/basic/user-interface/interaction-panels) | Each belongs to an [interaction](/basic/entities/interactables): talking, trading, crafting, looting |
| **UI panels** | [UI Panels](/basic/user-interface/ui-panels) | The player's windows, opened by a [panel key](/basic/game-settings/action-bars-and-keybinds#panel-keys) or the mini menu |

The scene makes three more things for you, in code: the [**nameplates**](/basic/user-interface/nameplates) (one for each entity and object), the **drag controller** (picking things up with the mouse) and the **trainer window**.

## Windows

The interaction panels and the UI panels are both **windows**, and the interface manages them together:

- Opening a window **closes every other window**. One window is open at a time.
- Closing the last one lets the player act in the world again. While any window is open the game knows a *menu is open* (the top-down camera, for example, stops scrolling).
- **Esc** closes the open windows first; only when none is open does it open the pause menu.
- Each window can be **dragged by its title bar** (a panel option) and has a close button.
- The conversation window is a special case: closing it ends the conversation.

::: tip Under review
That only one window can be open at a time is fixed in the code today. A better rule is planned: [Which windows can be open together](/planned/panel-stacking).
:::

## Panel keys

A UI panel is opened by one of **twenty panel keys**, tied to the panel by the number set on the panel. The key, the number, the mini menu button and the name the player reads are all explained in [Panel keys](/basic/game-settings/action-bars-and-keybinds#panel-keys). The [UI Settings editor](/basic/game-settings/ui-settings#the-interface-at-a-glance) lists **which panel has which number** and warns when two panels share one.

## The pause menu and game over

- **`InGameMenuUI`** is shown when the game is paused with Esc: *Resume*, *Save / Load*, *Settings*, *Return to main menu* and *Exit*. Returning to the menu or exiting **autosaves** first. Its Load button opens `LoadGameMenu`, the same list as the main menu with a Save button.
- **`GameOverPanelUI`** answers the death of the party, as the [Gameplay Config](/basic/game-settings/gameplay-config) chose: *game over* (load or return to the menu), *respawn at a checkpoint* (a prompt to respawn) or *permadeath*.

## The scene's rules

The scene finds its parts by **name**. When you restructure it, keep:

| Name | What the game does with it |
|---|---|
| `HUD` | Every child is initialised. A child that is a [`HUDUIElement`](/advanced/user-interface/hud/hudui-element) also gets the signals, the scale and the pivot |
| `UIPanels` | Every child must be a [`PanelUI`](/advanced/user-interface/panels/panel-ui). It is registered as a window, and the mini menu makes its button |
| `InteractionPanels` | Holds the windows of interactions: the template's windows are looked up there by **unique name** (see [Interaction Panels](/basic/user-interface/interaction-panels)) |
| `InGameMenuUI`, [`GameOverPanelUI`](/advanced/user-interface/in-game/game-over-panel-ui), `LoadGameMenu`, [`DraggedContent`](/advanced/user-interface/in-game/dragged-content) | The game uses them by unique name |

The editor [checks the scene](/basic/game-settings/ui-settings#the-interface-at-a-glance) for the usual mistakes (a node in `UIPanels` that is not a panel, a node in `HUD` that is not a HUD element, two panels with one key).

## Changing what the interface does

To change **behaviour** and not only the look, make your own root class:

1. Write `class_name MyInGameUI extends InGameUI`.
2. Put it on the root node of a copy of the template (or of your own scene) and set that scene in UI Settings.
3. Override or add methods. `InGameUI` has methods for every window (`open_window`, `close_window`, `toggle_panel`, `open_vendor_panel` ...) and signals for everything the player does.

The game talks to the interface through the **UI manager**: for example a vendor interaction calls `ui_manager.open_vendor_panel(...)`, and the [UI manager](/advanced/managers/game-host/ui-manager) hands it to the current interface scene if it has the method. So **a scene that does not have a method simply ignores the call**: a game with no crafting leaves the crafting window out and nothing breaks.

## See also

- [HUD](/basic/user-interface/hud), [Interaction Panels](/basic/user-interface/interaction-panels), [UI Panels](/basic/user-interface/ui-panels)
- [Messages and popups](/basic/user-interface/messages-and-popups)
- [`InGameUI`](/advanced/user-interface/scenes/in-game-ui)
