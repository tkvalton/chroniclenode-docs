<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# IdMultiSelect

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

A list of ids picked from a database type: the picked entries as small tags with an x, and an Add button that opens a searchable list of everything that exists. It takes the place of a row of check boxes, which stop being readable when there are many entries (groups, entity types, abilities, effects).

## Description

Put the scene (id_multi_select.tscn) in an editor scene, or let StatPropertyFields.add_id_checklist make it. Either way: select.setup("group", ability.groups, "Groups:", func(): mark_resource_modified()) The array is changed in place. With `single_select` it holds one id: picking another replaces it (an entity has one type).

## Properties

| | | |
|---|---|---|
| `String` | [database_type](#prop-database-type) | `""` |
| `String` | [title](#prop-title) | `""` |
| `bool` | [single_select](#prop-single-select) | `false` |
| `String` | [empty_text](#prop-empty-text) | `"(none)"` |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `p_database_type: String, ids: Array, p_title: String = "", on_changed: Callable = Callable(), p_single_select: bool = false` ) |
| `void` | [set_filter](#method-set-filter)( `filter: Callable` ) |
| `Array` | [get_ids](#method-get-ids)() |
| `bool` | [toggle_id](#method-toggle-id)( `entry_id: int` ) |

## Signals

### changed() {#signal-changed}

Emitted after the ids changed (the array handed to setup is already updated)

## Property descriptions

### String database_type = "" {#prop-database-type}

The database type the ids belong to ("group", "entity_tag", "ability" ...)

### String title = "" {#prop-title}

The text over the tags

### bool single_select = false {#prop-single-select}

One id at most: picking replaces

### String empty_text = "(none)" {#prop-empty-text}

What shows when nothing is picked

## Method descriptions

### void setup( p_database_type: String, ids: Array, p_title: String = "", on_changed: Callable = Callable(), p_single_select: bool = false ) {#method-setup}

Show `ids` (changed in place) from the database type. `on_changed` is called after every change

### void set_filter( filter: Callable ) {#method-set-filter}

Lists only the entries the filter accepts (a Callable that takes the resource and returns a bool): for example only the entries of one kind. The entries that are picked already are shown whatever the filter says

### Array get_ids() {#method-get-ids}

The ids that are picked

### bool toggle_id( entry_id: int ) {#method-toggle-id}

Pick or drop one id. Returns whether the list changed

