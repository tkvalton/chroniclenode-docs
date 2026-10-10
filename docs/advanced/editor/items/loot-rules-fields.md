<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LootRulesFields

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

The editor of the loot rules of an NPC, an object or a placed one: for each rule the trigger (when it rolls), the loot table (a shared one, or one of its own that is edited here), where the item level of the drops comes from, and whether the one who gets the loot changes it. A holder can have several rules. See docs/systems/ability-ranks-and-item-generation.md, section 8.

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `owner: Resource, property: String, holder: Holder, legacy_rules: Callable = Callable(), convert_legacy: Callable = Callable(), has_health: bool = true` ) |

## Signals

### changed() {#signal-changed}

## Enumerations

### enum Holder {#enum-holder}

What holds the loot: the triggers it can use differ (an NPC dies, an object is destroyed)

- **NPC** = `0`
- **OBJECT** = `1`

## Method descriptions

### void setup( owner: Resource, property: String, holder: Holder, legacy_rules: Callable = Callable(), convert_legacy: Callable = Callable(), has_health: bool = true ) {#method-setup}

`owner` has the list `property` (Array[LootRule]). `legacy_rules` (optional) gives the rules the older settings of the holder make, `convert_legacy` moves them to the list

