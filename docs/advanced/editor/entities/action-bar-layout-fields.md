<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ActionBarLayoutFields

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

The planned action bar of a player class: for each slot the ability that belongs there and whether the player may change it. The ability does not have to be known yet: the slot waits for it and the ability goes there the moment it is learned.

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `layout: Array[ActionBarLayoutEntry]` ) |

## Signals

### changed() {#signal-changed}

## Method descriptions

### void setup( layout: Array[ActionBarLayoutEntry] ) {#method-setup}

`layout` is the list of the class (changed in place)

