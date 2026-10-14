# Which windows can be open together

::: warning Not built yet
This page describes a planned change and the questions that are still open. Today the rule is fixed in the code: **opening a window closes every other window**.
:::

## How it works today

The [in-game interface](/basic/user-interface/in-game#windows) keeps one list of windows: the [interaction panels](/basic/user-interface/interaction-panels) and the [UI panels](/basic/user-interface/ui-panels). When a window opens, **all the others close**. That is right for a conversation or a shop, and wrong for a character sheet next to a spellbook, or a map that stays open while you play.

## What is planned

The developer decides **which windows can be open together**, and the rule is **data on the panels**, not code.

### A layer for each panel

| Layer | Behaviour | Typical panels |
|---|---|---|
| **Exclusive** | Opening it closes every other window (as today) | Conversation, vendor, crafting, readable, game over |
| **Standard** | Can be open **next to other standard windows** | Character, spellbook, quest log, inventory |
| **Persistent** | Opens and closes by itself and **never closes another window** | A map, a notes window, a chat box |

### Limits and Esc

- **Max standard windows open** (a project setting): opening one more **closes the one opened first**. `1` brings back today's behaviour.
- An **interaction** that starts (talking, trading) closes the standard windows, and they do **not** reopen by themselves.
- **Esc** closes the **last window that was opened**, one at a time; with none open it opens the pause menu.
- Windows are **placed** where the scene puts them and can be dragged, so two windows at their default positions would sit on top of each other: a panel gets a default **anchor** (left, right, centre) to start from.

## Windows opened by name

The same change makes the **interaction panels** open without code:

- Every panel placed in `InteractionPanels` or `UIPanels` is **registered by its name**, whatever its class.
- An [interaction](/basic/entities/interactables#interaction-types) opens one by name. The **Show UI Panel** interaction, which has no effect today, takes a **panel name** and opens that panel from an object or an NPC.
- A new interaction type of your own needs **no change to the in-game scene class**: its window is a scene, its name is a string.

## Still undecided

- Whether the three layers are enough, or a panel needs a list of the panels it **can** stay open with.
- Whether **Esc** closes one window at a time or all of them (today: all).
- The default for **max standard windows** (unlimited, or 2 or 3).
- Whether dragging a window to the front (a window **order**) is part of it.

## See also

- [In Game](/basic/user-interface/in-game#windows)
- [UI Panels](/basic/user-interface/ui-panels)
- [Interaction Panels](/basic/user-interface/interaction-panels#adding-your-own-interaction-and-window)
