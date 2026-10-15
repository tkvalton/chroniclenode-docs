# Building your own interface scene

The [User Interface chapter](/basic/user-interface/) gives a recipe for each part. This page is the map of them: **what you extend, what you keep, and where it is registered**, so you can see the whole system at once. The exact nodes each script looks for are on [Interface scenes: what each script needs](/advanced/user-interface/scene-contracts), which is made from the code and lists every template.

## The rule behind all of it

A scene of the interface is **a scene plus a script on its root**. The game never looks at what the scene *looks* like. It cares about three things:

1. **The root class.** The scene must have the root class the game asks for (`CurrentUI`, `InGameUI`, `HUDUIElement`, `PanelUI`, a tooltip class ...). The [UI Settings](/basic/game-settings/ui-settings#the-scenes-and-their-roots) editor checks this for the scenes you set.
2. **The names.** The script finds its nodes by **unique name** (`%Name`) or by **place** (`$Path/To/Node`). A node it does not find is `null`, and the part that needs it does nothing. Keep the names, add anything you like.
3. **The container.** Where the scene sits tells the game what it is: a child of `HUD` is a HUD element, a child of `UIPanels` is a window with a key, a child of `InteractionPanels` is the window of an interaction.

## What to extend

| You want | Extend | Put it | The game then |
|---|---|---|---|
| **A whole interface** for a part of the game (menu, creation, in game) | [`CurrentUI`](/advanced/user-interface/scenes/current-ui) (or [`MainMenu`](/advanced/user-interface/scenes/main-menu), `InGameUI`, [`CharacterCreationUI`](/advanced/user-interface/scenes/character-creation-ui)) | Set the scene in UI Settings | Loads it when the game state changes, threaded, behind the loading screen |
| **A different behaviour of the in-game interface** | A class that extends [`InGameUI`](/advanced/user-interface/scenes/in-game-ui) on the root of a copy of the in-game scene | Set the scene in UI Settings | Calls your methods: `ui_manager.open_vendor_panel(...)` reaches the current interface if it has the method |
| **An always-on part** (a counter, a compass) | [`HUDUIElement`](/advanced/user-interface/hud/hudui-element) | A child of `HUD` | Calls `initialize_ui(system_hub)`, relays its tooltip, message and sound signals, scales it |
| **A window the player opens** | [`PanelUI`](/advanced/user-interface/panels/panel-ui) with a *panel name* and a *panel keybind* | A child of `UIPanels` | Registers it as a window, opens it with `panel_keybind_N`, makes its mini menu button |
| **The window of an interaction** | `PanelUI` | A child of `InteractionPanels`, found by unique name by the in-game class | Opens it from the interaction through the in-game class (today this is manual) |
| **A tooltip** | The class of that tooltip ([`TooltipItem`](/advanced/user-interface/tooltips/tooltip-item), [`TooltipAbility`](/advanced/user-interface/tooltips/tooltip-ability) ...) | Set the scene in UI Settings | Makes it once and shows it on the signals |
| **A nameplate** | [`Nameplate`](/advanced/user-interface/nameplates/nameplate) | Set the scene in UI Settings | Makes one for every entity that has one |
| **A popup** | [`PopupUI`](/advanced/user-interface/in-game/popup-ui) | A scene in `src/data/popups/` | Lists it in UI Settings, shows it with the Popup action |
| **A loading screen** | [`LoadingScreen`](/advanced/user-interface/scenes/loading-screen) | Set the scene in UI Settings | Shows it while a scene loads |

## How a part talks to the game

- **Down, from the game to the part:** through the **system hub** (`system_hub.party_manager`, `event_manager`, `combat_manager` ...). A part connects to the signals of the manager that owns what it shows. `initialize_ui(system_hub)` is where it does so.
- **Up, from the part to the game:** through **signals the root class declares** (tooltip requests, messages, sounds, drag requests). The in-game interface connects them for every child, so a new element does not need to know who shows tooltips. See [Requests travel upward](/advanced/user-interface/#requests-travel-upward).
- **Sideways:** parts do not call each other. A panel that must open another asks the in-game class.

## The checks

[UI Settings > The interface at a glance](/basic/game-settings/ui-settings#the-interface-at-a-glance) reads the in-game scene without running it and reports the usual mistakes: a root of the wrong class, a node in `UIPanels` that is not a panel, a node in `HUD` that is not a HUD element, two panels with one key number.

## Not built yet

- The windows of interactions are looked up by **name** in the in-game class: a panel added to `InteractionPanels` is not found by itself. See [Interaction panels](/basic/user-interface/interaction-panels#adding-your-own-interaction-and-window).
- Which windows may be open together (layers, a maximum, `Esc` one at a time) is planned: [Panel stacking](/planned/panel-stacking).

## See also

- [Interface scenes: what each script needs](/advanced/user-interface/scene-contracts) (every template, the nodes it looks for)
- [User Interface: how it is built](/advanced/user-interface/) (who loads what, how requests travel)
- [User Interface chapter](/basic/user-interface/) (the recipes)
