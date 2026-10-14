# Popups

A **popup** is a window that appears over the game: a tutorial page, a message from a [quest](/basic/events-and-quests/quests), a toast ("Quest updated"), an achievement, a short notice. A popup is **a scene**: its look is the scene, and how it behaves is set with **options on the root node of the scene**. There is no editor for popups: the list of them, and the button that makes a new one, are in the [UI Settings](/basic/game-settings/ui-settings#popups).

The toolkit comes with one popup, **Message**: a title, a text with formatting, an icon and a button. Use it as it is, or as the start of your own.

## Making a popup

1. Open **Game Settings > UI Settings**, go to the **Popups** list at the bottom and press **Create new popup**. Give it a name.
2. The editor saves a **copy of the Message scene** in `src/data/popups/`, named after the popup (`welcome_message.tscn` for *Welcome message*; a second one of the same name gets `_2`) and puts it in the list, so it works straight away.
3. Press **Open** in the list to design it. The root of the scene is a **PopupUI** node. Add labels, images, an animation, anything a Godot UI scene can have.
4. If the popup has a button that closes it, name that button **ExitButton** (as a *unique name*, with `%`). Nothing else is fixed: the layout, the colours and the animation are yours.
5. Select the root node and set its **Behaviour** options in the inspector (below). Save the scene. The popup is in the database.

**Remove** in the list takes a popup out of the list. The scene stays; saving it puts the popup back. A scene that is missing, or whose root is not a PopupUI, is shown in red.

## The options

These are the **behaviour** of the popup. They are options of the root node of the scene, under **Behaviour** in the inspector:

| Option | What it does | Default |
|---|---|---|
| **Close on escape** | ESC closes it (when it is the popup on top). A popup that does not close on ESC but blocks input still swallows the key, so the pause menu does not open behind a tutorial | on |
| **Block gameplay input** | The mouse and keys do not move the character or use abilities while the popup is open (the popup itself still works) | on |
| **Pause game** | Time stands still while the popup is open, and goes on when it closes. The menu's own pause is not affected | off |
| **Auto close seconds** | The popup closes itself after this many real seconds, also while the game is paused. `0` = it waits to be closed | `0` |
| **Show once** | The popup is shown once in a game. It never comes back, also after a save and a load. A new game forgets it. For tutorials | off |
| **When another is open** | **Queue**: wait until the popups before it are closed. **Replace**: close the open ones and show this. **Stack**: show it on top of the others (toasts, achievements) | Queue |

The game reads the options from the popup's data, which follows the scene **when the scene is saved**. A popup made before the options were on the scene takes the settings it had the first time its scene is opened.

## Showing a popup

| Way | How |
|---|---|
| **An event** | The **Popup** action: choose the popup, **show** or **hide**, and fill the fields the scene reads (the Message popup reads a title, a text, an icon and a button text). *Wait until closed* makes the event stop and wait until the player closes it |
| **A trigger** | **Popup Closed** fires when a popup is closed: start the quest after the player has read the tutorial |
| **Code** | `ui_manager.popups.show_popup(popup_id, {"title": "...", "text": "..."})` |

The text of the Message popup can use formatting and the [words in angle brackets](/basic/events-and-quests/quests#words-in-the-texts).

## Examples

- **A first-time tutorial:** a popup with *Show once* on, *Pause game* on, an ExitButton. An event with the *Game Start* trigger shows it.
- **An achievement toast:** a small popup with *Auto close seconds* `4`, *Block gameplay input* off, *When another is open* **Stack**. An event shows it when a quest completes.
- **A choice:** a popup that waits (*Wait until closed*), then a second action runs after the player has read it.

## See also

- [UI Settings](/basic/game-settings/ui-settings#popups) (the list and the button), [Messages and popups](/basic/user-interface/messages-and-popups).
- [Events](/basic/events-and-quests/events), [Event actions](/basic/events-and-quests/event-actions) (Popup).
- [How popups are built](/advanced/events-and-quests/), for writing the code of a popup scene.
