# UI Settings

**UI Settings** tells the game **which scenes make up the interface** and which **pictures** it uses for the mouse cursor and the minimap. The scenes themselves are described in the [User Interface chapter](/basic/user-interface/); this page is the editor that points the game at them.

Open **Game Settings > UI Settings**. The editor is one column of sections (a section for each kind of setting, with the groups inside it), and under them **The interface at a glance** (see [below](#the-interface-at-a-glance)). Changes are saved as you make them to `res://src/data/config_data/ui_settings_config.tres`.

## UI scene paths

The scenes the game loads. Each must have a root of a **specific class**, or it cannot work.

| Setting | The scene | Root class | Page |
|---|---|---|---|
| **Ui scene main menu** | The main menu | [`CurrentUI`](/advanced/user-interface/scenes/current-ui) (the template is a [`MainMenu`](/advanced/user-interface/scenes/main-menu)) | [Main Menu](/basic/user-interface/main-menu) |
| **Ui scene character creation** | Where the player makes a hero | `CurrentUI` (the template is a [`CharacterCreationUI`](/advanced/user-interface/scenes/character-creation-ui)) | [Character Creation screen](/basic/user-interface/character-creation) |
| **Ui scene in game** | The interface while playing: HUD and windows | [`InGameUI`](/advanced/user-interface/scenes/in-game-ui) | [In Game](/basic/user-interface/in-game) |
| **Ui scene loading screen** | The loading screen | [`LoadingScreen`](/advanced/user-interface/scenes/loading-screen) | [Loading Screen](/basic/user-interface/loading-screen) |
| **Ui scene nameplate** | The bar over an entity or object | [`Nameplate`](/advanced/user-interface/nameplates/nameplate) | [Nameplates](/basic/user-interface/nameplates) |

A scene that **extends** the class is fine: a root of your own `class_name MyInGameUI extends InGameUI` counts as an `InGameUI`.

## Tooltip scenes

| Setting | The scene | Root class |
|---|---|---|
| **Item tooltip** | An item | [`TooltipItem`](/advanced/user-interface/tooltips/tooltip-item) |
| **Ability tooltip** | An ability | [`TooltipAbility`](/advanced/user-interface/tooltips/tooltip-ability) |
| **Effect tooltip** | A buff or a debuff | [`TooltipEffect`](/advanced/user-interface/tooltips/tooltip-effect) |
| **Skill node tooltip** | A node of a skill tree | [`TooltipSkillNode`](/advanced/user-interface/tooltips/tooltip-skill-node) |
| **Description tooltip** | A name and a text | [`TooltipDescription`](/advanced/user-interface/tooltips/tooltip-description) |

See [Tooltips](/basic/user-interface/tooltips).

## Mouse cursors

The pictures the mouse cursor changes to.

| Setting | When |
|---|---|
| **Cursor default** | Normally |
| **Cursor interact** | Over something the player can interact with |
| **Cursor chat** | Over someone the player can talk to |
| **Cursor attack** | Over something the player can attack |
| **Cursor target** | While choosing a target for an ability |

A cursor left empty uses the system cursor.

## Minimap icons

The markers the [minimap](/basic/user-interface/hud) draws.

| Setting | Marks |
|---|---|
| **Minimap entity marker** | Any other entity |
| **Minimap current player marker** | The character the player controls |
| **Minimap quest giver** | An NPC that gives a quest |
| **Minimap quest npc enemy** | An enemy that is a quest objective |
| **Minimap quest interactable** | An object that is a quest objective |
| **Minimap interactable resource** | A gathering node |
| **Minimap treasure** | Treasure and loot |
| **Minimap rabbithole** | A transition: a door, a teleport |

## Tactical command icons

The icons of the tactical commands (*movement*, *attack*, *heal*, *interact*, *target*), for a game that gives orders to the party.

## The interface at a glance

Under the settings, the editor **reads the scenes** and shows what is in them, so you can see how the interface is put together without opening each scene. **Refresh** reads them again (after you change a scene or a path).

### The scenes and their roots

A table with one row for each scene above: its name, the class its root must have, and the result:

| Result | Meaning |
|---|---|
| **ok** (green) | The root is of the right class |
| *The root of the scene must be of class X (its root is Y)* (red) | The scene is the wrong scene, or the script is missing from the root |
| *The scene does not exist* (red) | The path points at nothing |
| *(no scene set)* (yellow) | Nothing is set. The game needs it |

A wrong root also makes the settings **invalid** when the project is validated.

### The in-game interface

For the in-game scene, three lists. The scene is **read, not run**, so it works in the editor with nothing started.

- **UI panels**: each panel of the `UIPanels` container with its **class**, its **panel name**, its **key number** and the **key** that number has now in the Input Map (*no key set* when the action has none). This is the place to see **which panel has which number** at a glance.
- **Interaction panels**: the windows of the `InteractionPanels` container.
- **HUD elements**: the children of `HUD`.

### Warnings

Shown in red above the lists:

| Warning | The problem |
|---|---|
| *Panel key N is set on two panels* | Two panels have the same number. Only the first opens. The second panel's row also says *(same as another panel)* |
| *A panel has panel key N but no panel name* | A panel with a key and no name cannot be opened by name |
| *X is in UIPanels but is not a PanelUI* | Everything in `UIPanels` must be a panel, or it is not a window |
| *X is in HUD but is not a HUDUIElement* | It works, but it does not scale and gets no signals |

## Popups

The last list of the interface section is the **popups** of the game: every scene built on a PopupUI that is saved in the project. A popup has no editor of its own; it is a scene, and its behaviour (Esc, pause, blocking input, closing by itself, once only, what to do when another is open) is set with the options of its root node. See [Popups](/basic/events-and-quests/popups) for how to build one.

| Part | What it does |
|---|---|
| **Popups (N)** | The number of popups, with a row for each: its **name**, its **scene** (in red when it is missing or its root is not a PopupUI) and a line of what it does (*shown once, pauses the game, blocks input, Esc closes, waits when busy*) |
| **Create new popup** | Asks for a name and saves a copy of the Message popup of the toolkit in `src/data/popups/`, named after it, and puts it in the list |
| **Open** | Opens the scene of the popup in the editor |
| **Remove** | Takes the popup out of the list. The scene is not deleted, and saving it puts the popup back |


## See also

- [User Interface](/basic/user-interface/) (the scenes)
- [Panel keys](/basic/game-settings/panel-keys)
- [Settings](/basic/game-settings/settings#ui) (what the player may change in the interface)
- [`UISettingsConfig`](/advanced/game-settings/config/ui-settings-config)
