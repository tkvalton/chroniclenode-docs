<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MapIconCatalog

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

The map icons of the project: named pictures (MapIconDefinition) that the mini map and the world map draw for quest givers, shops, professions, gathering nodes, creatures, places, travel points and loot. The catalog is a file (`res://src/data/config_data/map_icon_catalog.tres`) edited in UI settings &gt; Map icons. Without the file the icons that come with the toolkit are used (assets/ui/map_icons). Ask for a picture by name: `MapIconCatalog.get_catalog().get_texture(&"blacksmith")`.

## Properties

| | | |
|---|---|---|
| `Array[MapIconDefinition]` | [icons](#prop-icons) | `[]` |

## Methods

| | |
|---|---|
| `MapIconCatalog` | [get_catalog](#method-get-catalog)() *static* |
| `MapIconCatalog` | [create_default](#method-create-default)() *static* |
| `MapIconDefinition` | [get_icon](#method-get-icon)( `id: StringName` ) |
| `Texture2D` | [get_texture](#method-get-texture)( `id: StringName` ) |
| `Color` | [get_color](#method-get-color)( `id: StringName, faction_color: Variant = null` ) |
| `Array[StringName]` | [get_ids](#method-get-ids)( `category: String = ""` ) |
| `Array[String]` | [get_categories](#method-get-categories)() |
| `MapIconDefinition` | [make_default](#method-make-default)( `id: StringName` ) *static* |
| `int` | [add_missing_defaults](#method-add-missing-defaults)() |
| `bool` | [reset_icon](#method-reset-icon)( `id: StringName` ) |
| `bool` | [is_default_id](#method-is-default-id)( `id: StringName` ) *static* |
| `PackedStringArray` | [get_problems](#method-get-problems)() |

## Constants

- `String` **CATALOG_PATH** = `"res://src/data/config_data/map_icon_catalog.tres"` - The file the catalog is saved in
- `String` **ICON_FOLDER** = `"res://assets/ui/map_icons/"` - The folder of the pictures that come with the toolkit
- `Array[Array]` **DEFAULTS** = `[` - The icons that come with the toolkit: id, name, group, the colour laid on it (white = as drawn), tinted by faction

## Property descriptions

### Array[MapIconDefinition] icons = [] {#prop-icons}

The icons, in the order they are listed

## Method descriptions

### MapIconCatalog get_catalog() {#method-get-catalog}

The catalog of the project: the file, or the icons that come with the toolkit when there is no file

### MapIconCatalog create_default() {#method-create-default}

A catalog of the icons that come with the toolkit

### MapIconDefinition get_icon( id: StringName ) {#method-get-icon}

The icon with this id (null when there is none)

### Texture2D get_texture( id: StringName ) {#method-get-texture}

The picture of an icon (null when there is no such icon)

### Color get_color( id: StringName, faction_color: Variant = null ) {#method-get-color}

The colour an icon is drawn in: its tint, or `faction_color` when it is tinted by faction (and a colour is given)

### Array[StringName] get_ids( category: String = "" ) {#method-get-ids}

The ids, all of them or the ones of one group

### Array[String] get_categories() {#method-get-categories}

The groups, in the order they first appear

### MapIconDefinition make_default( id: StringName ) {#method-make-default}

Makes the icon of the toolkit with this id (its picture, name, group and tint); null when the toolkit has none

### int add_missing_defaults() {#method-add-missing-defaults}

Adds the icons of the toolkit that the catalog does not have (all of them in a new catalog); returns how many. What is already there is not touched

### bool reset_icon( id: StringName ) {#method-reset-icon}

Puts an icon of the toolkit back as it comes (picture, name, group, tint); false when the toolkit has no icon with this id

### bool is_default_id( id: StringName ) {#method-is-default-id}

True when the toolkit has an icon with this id (its id cannot be changed or removed)

### PackedStringArray get_problems() {#method-get-problems}

Problems of the catalog in words (empty when it is fine): an icon with no id, two with the same id, an icon with no picture

