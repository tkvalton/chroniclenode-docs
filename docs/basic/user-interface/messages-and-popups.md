# Messages and popups

Two small systems tell the player things outside of the windows: **messages** (a line of text at the top of the screen that fades) and **popups** (a window of your design, opened by an event).

## Messages

A **message** is a short line shown near the top of the screen for a couple of seconds, then it fades. The game uses them for what just happened or why something did not work: *Not enough mana*, *Inventory full*, *This slot cannot be changed*, *Enchanted Iron Sword*.

| Kind | Look | Used for |
|---|---|---|
| **Plain** | White | Information |
| **Warning** | Red | Something failed or is not allowed |
| **Yellow** | Yellow | Something to notice |

Any part of the interface can ask for one with the signals `message_requested(text)` and `warning_message_requested(text)` (every [HUD element](/basic/user-interface/hud#adding-your-own) and [panel](/basic/user-interface/ui-panels) has them), and code can call `ui_manager.message(text)`, `warning_message(text)` or `yellow_message(text)`.

The messages are made by the [UI manager](/advanced/managers/game-host/ui-manager) itself, not by a scene, so they look the same in every interface. They are **not a log**: when they fade, they are gone. A **chat box** that keeps them (level ups, loot, experience, skill ups, emotes) is planned: [Chat box and combat log](/planned/chat-box).

## Popups

A **popup** is a window you design in the [Popups editor](/basic/events-and-quests/popups) (a tutorial, a story message, a toast, a choice) and open from an [event](/basic/events-and-quests/events) with the *Popup* action. The popups have their own manager, which also handles the **Esc** key (the popup on top closes first, when it says it can) and can **shut gameplay input out** while it is open.

See [Popups](/basic/events-and-quests/popups) for how to make one.

## See also

- [Tooltips](/basic/user-interface/tooltips)
- [In Game](/basic/user-interface/in-game)
- [Popups](/basic/events-and-quests/popups)
