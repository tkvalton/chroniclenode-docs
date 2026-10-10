<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LootLevelSourceFields

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The rows that edit a LootLevelSource slot of a resource (a loot table, a loot rule): where the item level of drops comes from, with an offset and a lowest and highest level. An empty slot means "Inherit" (the next source in the order decides). See docs/systems/ability-ranks-and-item-generation.md, section 8.

## Methods

| | |
|---|---|
| `void` | [add](#method-add)( `container: Container, owner: Resource, property: String, label_text: String, on_changed: Callable, rebuild: Callable` ) *static* |

## Constants

- `String` **SOURCE_CHOICES** = `"Inherit:0,Fixed level:1,Holder level:2,Receiver level:3,Party level:4,World ...`

## Method descriptions

### void add( container: Container, owner: Resource, property: String, label_text: String, on_changed: Callable, rebuild: Callable ) {#method-add}

Adds the rows of the slot `property` of `owner`. `on_changed` is called after every change; `rebuild` after a change that alters which rows exist

