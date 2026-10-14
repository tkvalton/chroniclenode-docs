# User Interface

The interface of a ChronicleNode game is **made of scenes**. The toolkit ships a template for every part, in `res://addons/chroniclenode/ui_scenes/`. You can use them as they are, change them, or build your own: the game does not care what a scene looks like, only that its **root is of the right class** and that the parts it expects are inside.

This chapter is about the scenes. The **settings** that point the game at them (and the cursors and map icons) are on the [UI Settings](/basic/game-settings/ui-settings) page of the editor.

## The parts

| Part | What it is | Page |
|---|---|---|
| **Splash and loading screen** | What the player sees while the game starts and while a level loads | [Loading Screen](/basic/user-interface/loading-screen) |
| **Main menu** | Play, Continue, Load, Settings, Credits, Exit | [Main Menu](/basic/user-interface/main-menu) |
| **Character creation** | Where the player makes a hero | [Character Creation screen](/basic/user-interface/character-creation) |
| **In game** | Everything the player sees while playing: the HUD, the windows of interactions and the windows the player opens | [In Game](/basic/user-interface/in-game) |
| **HUD** | The always-on parts: action bar, party frames, minimap, quest tracker, combat log | [HUD](/basic/user-interface/hud) |
| **Action bar** | How the bar is built, drawn and hooked up | [Action bar](/basic/user-interface/action-bar) |
| **Interaction panels** | The window of an interaction: a conversation, a shop, a crafting station, a chest | [Interaction Panels](/basic/user-interface/interaction-panels) |
| **UI panels** | The windows the player opens: character, spellbook, quest log | [UI Panels](/basic/user-interface/ui-panels) |
| **Tooltips** | The pop-ups for items, abilities, effects, skill nodes and plain text | [Tooltips](/basic/user-interface/tooltips) |
| **Nameplates** | The bar over the head of an entity or an object | [Nameplates](/basic/user-interface/nameplates) |
| **Messages and popups** | The short messages at the top of the screen and the popups of your story | [Messages and popups](/basic/user-interface/messages-and-popups) |

## The scenes the game loads

The game loads **one** of three scenes as *the interface*, depending on where the player is. The scenes are set in [UI Settings](/basic/game-settings/ui-settings#ui-scene-paths).

| State of the game | Scene | Root class |
|---|---|---|
| The main menu | **Main menu** scene | [`MainMenu`](/advanced/user-interface/scenes/main-menu) (or any [`CurrentUI`](/advanced/user-interface/scenes/current-ui)) |
| Making a character | **Character creation** scene | any `CurrentUI`, in practice [`CharacterCreationUI`](/advanced/user-interface/scenes/character-creation-ui) |
| Playing | **In game** scene | [`InGameUI`](/advanced/user-interface/scenes/in-game-ui) |

Next to these, the game also creates, once, whatever the state:

| Scene | Root class | What it is |
|---|---|---|
| **Loading screen** | [`LoadingScreen`](/advanced/user-interface/scenes/loading-screen) | Covers the screen while scenes load |
| **Nameplate** | [`Nameplate`](/advanced/user-interface/nameplates/nameplate) | One is made for every entity and object that has a nameplate |
| **Tooltips** (five) | [`TooltipItem`](/advanced/user-interface/tooltips/tooltip-item), [`TooltipAbility`](/advanced/user-interface/tooltips/tooltip-ability), [`TooltipEffect`](/advanced/user-interface/tooltips/tooltip-effect), [`TooltipSkillNode`](/advanced/user-interface/tooltips/tooltip-skill-node), [`TooltipDescription`](/advanced/user-interface/tooltips/tooltip-description) | The pop-ups |

::: warning The root must be the right class
Each of these scenes must have a **script of the right class on its root node**. The game calls the methods of that class. A scene whose root is a plain `Control` loads, but nothing works.

The [UI Settings editor](/basic/game-settings/ui-settings#the-interface-at-a-glance) checks this for you and says which scene has the wrong root, and `validate()` of the settings reports it too.
:::

A root can be a **subclass** of the class: your own `class_name MyInGameUI extends InGameUI` is fine, and is the way to change what the in-game interface does (see [In Game](/basic/user-interface/in-game#changing-what-the-interface-does)).

## The system hub

Every part of the interface is handed the **system hub** when it starts: `initialize_ui(system_hub)`. The hub holds every manager of the game (the party, the combat, the quests, the audio, the world), so a part of the interface can read what it needs and connect to the signals it wants without searching for them. That is the whole way to hook your own elements up, see [HUD](/basic/user-interface/hud#adding-your-own).

## Scaling and mouse clicks

- **UI scale** (a player's option) scales the HUD elements and the windows. A HUD element can opt out with *Affected by UI scaling*.
- A control decides if a click reaches the **world** with its **mouse filter**. A window or button that must block the world uses *Stop*; a container or a full-screen layer uses *Ignore* (or *Pass*). A full-screen root left at the default *Stop* swallows every click on the world.

## See also

- [How the interface is built](/advanced/user-interface/) (the classes and the signals)
- [UI Settings](/basic/game-settings/ui-settings)
- [Action bars and keybinds](/basic/game-settings/action-bars-and-keybinds)
