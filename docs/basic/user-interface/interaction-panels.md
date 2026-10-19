# Interaction Panels

An **interaction panel** is the window that belongs to an [interaction](/basic/entities/interaction-types). When the player talks to an NPC, opens a chest, trades, crafts or reads a sign, the interaction does its work and asks the interface to show the window for it. The windows live in the **`InteractionPanels`** container of the [in-game scene](/basic/user-interface/in-game).

Every interaction panel is a [`PanelUI`](/advanced/user-interface/panels/panel-ui) (the DiceRoll panel is a small exception, it is part of the conversation).

## The panels of the template

| Panel | Class | Opened by | What it shows |
|---|---|---|---|
| **Conversation** | [`ConversationPanelUI`](/advanced/user-interface/interaction-panels/conversation-panel-ui) | The [Conversation](/basic/behaviors/conversations) interaction | The speaker, the text (typed out), the responses, voice lines; skill checks open the dice roll |
| **Dice roll** | [`DiceRollPanel`](/advanced/user-interface/interaction-panels/dice-roll-panel) | A conversation response that has a [check](/basic/behaviors/conversations) | The roll of a skill check and its result |
| **Vendor** | [`VendorPanelUI`](/advanced/user-interface/interaction-panels/vendor-panel-ui) | The [Vendor](/basic/items/vendors) interaction | The shop's stock on one side and the player's bag on the other (right-click an item to sell it); a repair button |
| **Trainer** | [`TrainerPanelUI`](/advanced/user-interface/interaction-panels/trainer-panel-ui) | The [Trainer](/basic/items/trainers) interaction | The lessons a trainer teaches, with their price. **Made in code**, there is no scene node for it |
| **Crafting** | [`CraftingPanelUI`](/advanced/user-interface/interaction-panels/crafting-panel-ui) | The [Crafting](/basic/items/craft-schools) interaction | The recipes of a school, the materials, the queue and the progress |
| **External inventory** | [`InventoryUI`](/advanced/user-interface/panels/inventory-ui) (as *External inventory*) | A **Container**, a **Loot** interaction (a body), and **Gather** with the loot window | The contents of a chest, a body or a gathering node. Drag items out, or right-click to take them |
| **Readable** | [`ReadablePanelUI`](/advanced/user-interface/interaction-panels/readable-panel-ui) | A readable object or item (a book, a sign, a letter) | Pages, with next and previous, and a background |
| **Socket** | [`SocketPanelUI`](/advanced/user-interface/interaction-panels/socket-panel-ui) | Shift + right-click on equipment that has [sockets](/basic/equipment-definitions/socket) | The sockets of the item, to put gems in and take them out |

## How a window is opened

An interaction never touches the scene. It asks the **UI manager**, which hands the request to the current in-game scene **if that scene has the method**:

```text
a Vendor interaction ─ ui_manager.open_vendor_panel(vendor, player) ─► InGameUI.open_vendor_panel ─► the window opens
```

The window then manages itself: it gets what it needs from the interaction (the vendor's stock, the conversation) and tells the interface when it closes, which also ends the interaction. Because a missing method is ignored, **a game that does not use crafting can delete the crafting window** and everything else still works.

An interaction panel is a normal [window](/basic/user-interface/in-game#windows): opening it closes the others, and **Esc** closes it.

## Adding your own interaction and window

::: warning Today this is manual
The template's windows are looked up **by name** in the scene and opened by methods of [`InGameUI`](/advanced/user-interface/scenes/in-game-ui). A window you add to `InteractionPanels` is **not found automatically**. Making this automatic (any panel placed in the container is registered and an interaction opens it by name) is not done yet; the *Show UI Panel* interaction already opens any panel placed in `UIPanels` by its name.
:::

To add a window for an interaction of your own today:

1. **The window.** Make a scene whose root script extends `PanelUI` (title bar, close button, drag, and the tooltip, message and sound signals come with it). Add it as a child of `InteractionPanels`.
2. **The in-game class.** Write `class_name MyInGameUI extends InGameUI`, put it on the root of your in-game scene and set that scene in UI Settings. In it:
   - get your window (`@onready var my_panel: MyPanelUI = %MyPanelUI`, unique name on the node),
   - add it to `all_window_interfaces` in `setup_window_interfaces` (call `super`, then append it), so it takes part in opening, closing and `Esc`,
   - write `open_my_panel(...)`, which sets the window up and calls `open_window(my_panel)`.
3. **The interaction.** Write a [class that extends `Interaction`](/advanced/entities/interactions/interaction), and in `start_interaction` call `system_hub.ui_manager.current_ui.open_my_panel(...)`. In `end_interaction` close the window (`close_window`).

The new interaction type shows up in the interaction list of the editor by itself: interactions are found by scanning their folder.

## Which interaction panel is which

The **Show UI Panel** interaction (*Common interactions*) opens one of the [UI panels](/basic/user-interface/ui-panels) of the interface from an object or an NPC: [see Interaction types](/basic/entities/interaction-types#show-ui-panel). It is the easy way to open a panel of your own from the world, without writing an interaction class.

## See also

- [Interactables](/basic/entities/interactables) (what each interaction does)
- [In Game](/basic/user-interface/in-game)
- [UI Panels](/basic/user-interface/ui-panels) (the windows the player opens themselves)
- [Tooltips](/basic/user-interface/tooltips)
