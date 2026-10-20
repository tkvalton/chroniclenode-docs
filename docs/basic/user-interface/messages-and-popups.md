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

The messages are made by the [UI manager](/advanced/managers/game-host/ui-manager) itself, not by a scene, so they look the same in every interface. Every message is a line of a **channel** of the [message manager](/basic/game-settings/chat): `message()` posts to System, `yellow_message()` to Highlight and `warning_message()` to Warning, and the fading label shows every channel that is marked *Also show as a fading message* in the colour of its channel. The [chat box](/basic/user-interface/hud) keeps the lines, so they are not gone when they fade.

## Popups

A **popup** is a scene you design ([how](/basic/events-and-quests/popups); the list and the button that makes one are in [UI Settings](/basic/game-settings/ui-settings#popups)) (a tutorial, a story message, a toast, a choice) and open from an [event](/basic/events-and-quests/events) with the *Popup* action. The popups have their own manager, which also handles the **Esc** key (the popup on top closes first, when it says it can) and can **shut gameplay input out** while it is open.

See [Popups](/basic/events-and-quests/popups) for how to make one.

## See also

- [Tooltips](/basic/user-interface/tooltips)
- [In Game](/basic/user-interface/in-game)
- [Popups](/basic/events-and-quests/popups)
