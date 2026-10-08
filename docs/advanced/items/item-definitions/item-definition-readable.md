<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ItemDefinitionReadable

**Inherits:** [ItemDefinition](/advanced/items/item-definitions/item-definition) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Readable items that display text content in a UI panel when used Supports multi-page documents like books, scrolls, letters, and lore texts

## Properties

| | | |
|---|---|---|
| `Array[String]` | [pages_text](#prop-pages-text) |  |
| `Texture2D` | [background_texture](#prop-background-texture) |  |

## Methods

| | |
|---|---|
| `bool` | [can_use](#method-can-use)( `user: Entity, item_instance: ItemInstance = null` ) |
| `bool` | [execute_use](#method-execute-use)( `user: Entity, item_instance: ItemInstance` ) |
| `String` | [get_use_action_name](#method-get-use-action-name)( `_item_instance: ItemInstance` ) |
| `void` | [on_readable_item_used](#method-on-readable-item-used)( `item_instance: ItemInstance, user: Entity` ) |

## Property descriptions

### Array[String] pages_text {#prop-pages-text}

Array of text content for each page of the readable item Each string represents one page - supports rich text formatting with BBCode Example: ["Page 1 content...", "Page 2 content...", "Final page..."]

### Texture2D background_texture {#prop-background-texture}

Optional background texture for the readable panel

## Method descriptions

### bool can_use( user: Entity, item_instance: ItemInstance = null ) {#method-can-use}

Check if readable item can be used

### bool execute_use( user: Entity, item_instance: ItemInstance ) {#method-execute-use}

Execute readable item usage - signal UI to display content

### String get_use_action_name( _item_instance: ItemInstance ) {#method-get-use-action-name}

Get display name for readable action

### void on_readable_item_used( item_instance: ItemInstance, user: Entity ) {#method-on-readable-item-used}

Virtual method for readable-specific logic when item is used Called by ItemInstance after successful usage

