<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# InventoryStyleEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

The fields of an inventory style: how items take space, where the capacity comes from, weight, and what happens above the limit (a hard limit, or encumbrance with effects made in the Effects editor). Used by the Gameplay Config (the styles of characters, NPCs and containers) and by the NPC editor and the container interaction (an own style that replaces the project's). See docs/systems/inventory-styles.md, section 3.

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `style: InventoryStyle, optional: bool = false, setter: Callable = Callable()` ) |

## Signals

### changed() {#signal-changed}

## Method descriptions

### void setup( style: InventoryStyle, optional: bool = false, setter: Callable = Callable() ) {#method-setup}

`style`: the style to edit (null with `optional`: the project's style is used). `setter` gets the style when it is made or taken away

