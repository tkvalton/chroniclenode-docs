<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LocalEventPalette

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The short menus of the Local Events tab: the common causes ("When"), conditions ("If") and effects ("Then") of the small events of a place, each as a friendly sentence with the class it makes, the values it presets and what kind of thing its target is. They make the same triggers, conditions and actions as the full lists of the event editor (which stay one click away: "More..."), so everything works with the rest of the event system.

## Description

An entry is a Dictionary: id       a short name ("switch_on") side     Side.WHEN, Side.IF or Side.THEN label    the sentence of the menu ("A switch is turned on") make     a Callable that makes the trigger, condition or action with its values preset target   what the target is: "switch", "door", "trap", "container", "destructible", "interactable" (any object), "trigger_area", "entity" (an NPC), "spawner", "local_event", "ground" (a place), "" (none)

A recipe is a start for a rule: a name, a line about it and the ids of the entries it begins with.

## Methods

| | |
|---|---|
| `Array[Dictionary]` | [entries](#method-entries)() *static* |
| `Array[Dictionary]` | [of_side](#method-of-side)( `side: int` ) *static* |
| `Dictionary` | [entry](#method-entry)( `entry_id: String` ) *static* |
| `Array[Dictionary]` | [recipes](#method-recipes)() *static* |

## Enumerations

### enum Side {#enum-side}

- **WHEN** = `0`
- **IF** = `1`
- **THEN** = `2`

## Method descriptions

### Array[Dictionary] entries() {#method-entries}

*No description yet.*

### Array[Dictionary] of_side( side: int ) {#method-of-side}

The entries of one side

### Dictionary entry( entry_id: String ) {#method-entry}

The entry with an id (&#123;&#125; when there is none)

### Array[Dictionary] recipes() {#method-recipes}

The starts for a rule: [&#123;"id", "name", "description", "when": [entry ids], "then": [entry ids]&#125;]

