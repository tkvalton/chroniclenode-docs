# Main Menu

The **main menu** is the first screen the player sees after the splash. It has the buttons of a start screen and three sub-menus: **Load**, **Settings** and **Credits**.

| | |
|---|---|
| **Set in** | [UI Settings](/basic/game-settings/ui-settings#ui-scene-paths) > *Ui scene main menu* |
| **Root class** | [`MainMenu`](/advanced/user-interface/scenes/main-menu) (a [`CurrentUI`](/advanced/user-interface/scenes/current-ui)) |
| **Template** | `ui_scenes/menus/main/main_menu_template.tscn` |

## The buttons

The script finds each button by unique name, so keep the names and place them as you like.

| Unique name | What it does |
|---|---|
| `PlayButton` | A **new game**. With *Use character creation UI* on in the [Gameplay Config](/basic/game-settings/gameplay-config), the player goes to the [character creation screen](/basic/user-interface/character-creation). With it off, the game starts at once with the **starting party** |
| `ContinueButton` | Loads the **autosave**, or else the most recent manual save |
| `LoadButton` | Opens the **Load** sub-menu |
| `SettingsButton` | Opens the **Settings** sub-menu |
| `CreditsButton` | Plays the **credits** |
| `ExitButton` | Quits |

When the player has **no saves**, Continue and Load are hidden. The other unique names the script needs are `MenuOptions` (the container of the buttons), `Title` (the game's title), [`SettingsMenuUI`](/advanced/user-interface/menus/settings-menu-ui), [`Credits`](/advanced/user-interface/menus/credits) and `LoadGameMenu`. **Escape** closes whichever sub-menu is open.

## Load

The load sub-menu ([`SaveLoadMenu`](/advanced/user-interface/menus/save-load-menu)) lists the save files, the autosave first, and loads the one the player picks. The same scene is used in the pause menu in game, where it also has a **Save** button (hidden in the main menu). Each entry is a button scene ([`SaveFileButton`](/advanced/user-interface/menus/save-file-button)) you can restyle.

## Settings

The settings menu (`SettingsMenuUI`) is **built at run time** from the [Game Settings](/basic/game-settings/settings): one tab for each category, one row for each setting the developer made **player accessible**. A checkbox, a list, a slider, a colour picker or a key rebinding button is made for each, from the scenes you give it (set on the root node):

| Option on the node | The row it makes |
|---|---|
| `checkbox_scene` | A yes/no setting |
| `option_button_scene` | A choice from a list |
| `drag_bar_scene` | A number on a slider |
| `color_picker_scene` | A colour |
| `hotkey_rebind_button_scene` | A [key](/basic/game-settings/settings#keybinds) the player may change |
| `section_label_scene`, `button_sub_menu_scene` | The section headings and the tab buttons |

So **a new setting never needs a change to this scene**: add it to the Game Settings and make it player accessible, and it appears. Restyle the row scenes to change the look of all of them at once.

## Credits

`Credits` plays an animation (`creditsroll`) and returns to the menu when it ends. Edit the text and the animation in the scene.

## Your own main menu

Build a scene whose root has a script that **extends `MainMenu`** (to keep the template's behaviour) or **extends `CurrentUI`** (to write it all yourself). A `CurrentUI` gives you the signals the game listens to:

| Signal | The game then |
|---|---|
| `new_game_requested(custom_character_def)` | Starts a new game (give it `null` for the starting party) |
| `character_creation_requested()` | Opens the character creation screen |
| `load_game_requested(save_file_name)` | Loads a save |
| `return_to_main_menu_requested()` | Goes back to the main menu |

and the tooltip and message requests every interface part has (see [Tooltips](/basic/user-interface/tooltips)). Set the scene in [UI Settings](/basic/game-settings/ui-settings).

## See also

- [Loading Screen](/basic/user-interface/loading-screen)
- [Settings](/basic/game-settings/settings) (what the settings menu shows)
- [Saving and loading](/advanced/save-and-load)
