<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# UITagDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

An **entity tag**: a label that has **no effect on the entity**. It is only there for the interface to read, so the interface can show a different set of nodes for an entity that has it: a large unit frame for a Boss, an extra piece of art on the nameplate of an Elite, its own icon on the minimap for a Rare. Give it to NPCs, characters and objects in their editors (and to a placed NPC or object, which can add tags of its own and take away the ones of its definition). Tags are not entity **types** (what an entity is, and the effects every entity of the type has: EntityTagDefinition) and not templates (the numbers an entity is made from).

## Description

The interface asks an entity `has_ui_tag("boss")` (by the `key` of the tag) or `get_ui_tags()`. The `color` and the `icon` are there for the interface to use as it likes.

## Properties

| | | |
|---|---|---|
| `String` | [key](#prop-key) | `""` |
| `Color` | [color](#prop-color) | `Color.WHITE` |

## Methods

| | |
|---|---|
| `String` | [get_key](#method-get-key)() |
| `Array[int]` | [resolve_ids](#method-resolve-ids)( `from_definition: Array[int], added: Array[int], removed: Array[int]` ) *static* |
| `Array[UITagDefinition]` | [from_ids](#method-from-ids)( `ids: Array[int]` ) *static* |

## Property descriptions

### String key = "" {#prop-key}

The name the interface asks for: "boss", "elite", "rare". Empty = the display name in lower case with underscores

### Color color = Color.WHITE {#prop-color}

The color that stands for this tag in the interface (the frame of a boss, the icon of a rare)

## Method descriptions

### String get_key() {#method-get-key}

The key the interface asks for.

### Array[int] resolve_ids( from_definition: Array[int], added: Array[int], removed: Array[int] ) {#method-resolve-ids}

The tags of an entity: the ones of its definition, plus the ones its placed NPC or object adds, minus the ones it takes away (ids, in that order, without doubles).

### Array[UITagDefinition] from_ids( ids: Array[int] ) {#method-from-ids}

The tags (resources) for a list of ids; an id that is not in the database is left out.

