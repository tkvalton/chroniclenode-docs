<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# UITagDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

An **entity tag**: a label that has **no effect on the entity**. It is only there for the interface to read, so the interface can show a different set of nodes for an entity that has it: a large unit frame for a Boss, an extra piece of art on the nameplate of an Elite, its own icon on the minimap for a Rare. Give it to NPCs, characters and objects in their editors (and to a placed NPC or object, which can add tags of its own and take away the ones of its definition). Tags are not entity **types** (what an entity is, and the effects every entity of the type has: EntityTagDefinition) and not templates (the numbers an entity is made from).

## Description

The interface asks an entity `has_ui_tag("boss")` (by the `key` of the tag) or `get_ui_tags()`. The `color` and the `icon` are there for the interface to use as it likes.

The toolkit's own interface reads the rest: a **TagUnitFrame** in the HUD (a large frame for the tag, shown while the target has it), the **nameplate** (extra art, a tinted name) and the **minimap** (an icon). When an entity has several tags the one with the highest `priority` wins (the first one on a tie).

## Properties

| | | |
|---|---|---|
| `String` | [key](#prop-key) | `""` |
| `Color` | [color](#prop-color) | `Color.WHITE` |
| `int` | [priority](#prop-priority) | `0` |
| `Texture2D` | [nameplate_art](#prop-nameplate-art) | `null` |
| `bool` | [tint_name](#prop-tint-name) | `false` |
| `bool` | [show_on_map](#prop-show-on-map) | `false` |
| `Texture2D` | [map_icon](#prop-map-icon) | `null` |

## Methods

| | |
|---|---|
| `Texture2D` | [get_map_icon](#method-get-map-icon)() |
| `String` | [get_key](#method-get-key)() |
| `UITagDefinition` | [top_tag](#method-top-tag)( `tags: Array[UITagDefinition], accept: Callable = Callable()` ) *static* |
| `Array[int]` | [resolve_ids](#method-resolve-ids)( `from_definition: Array[int], added: Array[int], removed: Array[int]` ) *static* |
| `Array[UITagDefinition]` | [from_ids](#method-from-ids)( `ids: Array[int]` ) *static* |

## Property descriptions

### String key = "" {#prop-key}

The name the interface asks for: "boss", "elite", "rare". Empty = the display name in lower case with underscores

### Color color = Color.WHITE {#prop-color}

The color that stands for this tag in the interface (the frame of a boss, the icon of a rare)

### int priority = 0 {#prop-priority}

When an entity has several tags, the one with the highest priority decides which unit frame, which nameplate art and which map icon it gets (the first one on a tie)

### Texture2D nameplate_art = null {#prop-nameplate-art}

The nameplate of an entity with this tag shows this art (a frame around it, a skull ...). Empty = nothing is added

### bool tint_name = false {#prop-tint-name}

The name on the nameplate and on the unit frame is drawn in the color of the tag

### bool show_on_map = false {#prop-show-on-map}

The minimap (and any map of your own) shows an icon for the entities and objects with this tag

### Texture2D map_icon = null {#prop-map-icon}

The icon on the map. Empty = the icon of the tag

## Method descriptions

### Texture2D get_map_icon() {#method-get-map-icon}

The icon the map shows: the map icon, otherwise the icon of the tag (null when it has neither).

### String get_key() {#method-get-key}

The key the interface asks for.

### UITagDefinition top_tag( tags: Array[UITagDefinition], accept: Callable = Callable() ) {#method-top-tag}

The tag with the highest priority of a list (the first one on a tie), or null. `accept` (optional) is asked for each tag: only the ones it accepts count.

### Array[int] resolve_ids( from_definition: Array[int], added: Array[int], removed: Array[int] ) {#method-resolve-ids}

The tags of an entity: the ones of its definition, plus the ones its placed NPC or object adds, minus the ones it takes away (ids, in that order, without doubles).

### Array[UITagDefinition] from_ids( ids: Array[int] ) {#method-from-ids}

The tags (resources) for a list of ids; an id that is not in the database is left out.

