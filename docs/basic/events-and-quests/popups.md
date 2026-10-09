# Popups

A **popup** is a window that appears over the game: a tutorial page, a message from a [quest](/basic/events-and-quests/quests), a toast ("Quest updated"), an achievement, a short notice. **Events > Popups** lists them and sets how each one behaves. The *look* of a popup is a normal Godot scene that you build yourself.

The toolkit comes with one popup, **Message**: a title, a text with formatting, an icon and a button. Use it as it is, or as the start of your own.

## Making a popup

1. **Add** (in the Popups editor), and name it. The editor makes the popup **and a copy of the Message scene** in `src/data/popups/`, named after it, so it works straight away.
2. Select the popup and press **Open Scene** to design it. The root of the scene is a **PopupUI** node. Add labels, images, an animation, anything a Godot UI scene can have.
3. If the popup has a button that closes it, name that button **ExitButton** (as a *unique name*, with `%`). Nothing else is fixed: the layout, the colours and the animation are yours.
4. Save the scene. The popup is in the database.

**Choose...** points the popup at a scene you already have. It refuses a scene whose root is not a PopupUI, and the editor shows a warning line when the scene is missing or wrong.

## The settings

These are the **behavior** of the popup, set in the editor and kept on the popup, not in the scene:

| Setting | What it does | Default |
|---|---|---|
| **Close on ESC** | ESC closes it (when it is the popup on top). A popup that does not close on ESC but blocks input still swallows the key, so the pause menu does not open behind a tutorial | on |
| **Block gameplay input** | The mouse and keys do not move the character or use abilities while the popup is open (the popup itself still works) | on |
| **Pause the game** | Time stands still while the popup is open, and goes on when it closes. The menu's own pause is not affected | off |
| **Auto close seconds** | The popup closes itself after this many real seconds, also while the game is paused. `0` = it waits to be closed | `0` |
| **Show once** | The popup is shown once in a game. It never comes back, also after a save and a load. A new game forgets it. For tutorials | off |
| **When another is open** | **Queue**: wait until the popups before it are closed. **Replace**: close the open ones and show this. **Stack**: show it on top of the others (toasts, achievements) | Queue |

## Showing a popup

| Way | How |
|---|---|
| **An event** | The **Popup** action: choose the popup, **show** or **hide**, and fill the fields the scene reads (the Message popup reads a title, a text, an icon and a button text). *Wait until closed* makes the event stop and wait until the player closes it |
| **A trigger** | **Popup Closed** fires when a popup is closed: start the quest after the player has read the tutorial |
| **Code** | `ui_manager.popups.show_popup(popup_id, {"title": "...", "text": "..."})` |

The text of the Message popup can use formatting and the [words in angle brackets](/basic/events-and-quests/quests#words-in-the-texts).

## Examples

- **A first-time tutorial:** a popup with *Show once* on, *Pause the game* on, an ExitButton. An event with the *Game Start* trigger shows it.
- **An achievement toast:** a small popup with *Auto close seconds* `4`, *Block gameplay input* off, *When another is open* **Stack**. An event shows it when a quest completes.
- **A choice:** a popup that waits (*Wait until closed*), then a second action runs after the player has read it.

## See also

- [Events](/basic/events-and-quests/events), [Event actions](/basic/events-and-quests/event-actions) (Popup).
- [How popups are built](/advanced/events-and-quests/), for writing the code of a popup scene.
