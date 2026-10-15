<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# InterfaceOverview

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

What the in-game interface scene holds, read from the scene without running it: the HUD elements, the interaction panels and the UI panels, with the panel key number of each panel and the problems with them (two panels with one key, a panel with a key and no name, a node in a container that is not of the class the interface needs). The UI settings editor shows it.

## Methods

| | |
|---|---|
| `Dictionary` | [read_scene](#method-read-scene)( `scene: PackedScene` ) *static* |
| `Array[String]` | [find_problems](#method-find-problems)( `overview: Dictionary` ) *static* |
| `String` | [key_text](#method-key-text)( `number: int` ) *static* |

## Constants

- `String` **HUD_NODE** = `"HUD"` - The name of the node that holds the HUD elements.
- `String` **INTERACTION_PANELS_NODE** = `"InteractionPanels"` - The name of the node that holds the windows of interactions.
- `String` **UI_PANELS_NODE** = `"UIPanels"` - The name of the node that holds the windows the player opens.

## Method descriptions

### Dictionary read_scene( scene: PackedScene ) {#method-read-scene}

&#123;"hud": rows, "interaction_panels": rows, "ui_panels": rows, "problems": Array[String]&#125; A row: &#123;"node", "class" (the nearest class name), "classes", and for panels "panel_name", "panel_keybind", "show_in_mini_menu", "key_text"&#125;

### Array[String] find_problems( overview: Dictionary ) {#method-find-problems}

What the problems of an overview are (empty = none)

### String key_text( number: int ) {#method-key-text}

The key of a panel key number as the Input Map has it ("" when it has none)

