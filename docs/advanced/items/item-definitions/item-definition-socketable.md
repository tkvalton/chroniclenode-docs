<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ItemDefinitionSocketable

**Inherits:** [ItemDefinition](/advanced/items/item-definitions/item-definition) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Socketable items that can be inserted into socket slots on equipment to provide additional effects The entity that owns the socketed equipment receives the socketable's effect

## Properties

| | | |
|---|---|---|
| `int` | [socket_effect](#prop-socket-effect) |  |
| `Array[int]` | [allowed_sockets](#prop-allowed-sockets) | `[]` |

## Methods

| | |
|---|---|
| `bool` | [can_use](#method-can-use)( `user: Entity, item_instance: ItemInstance = null` ) |
| `bool` | [execute_use](#method-execute-use)( `user: Entity, item_instance: ItemInstance` ) |
| `String` | [get_use_action_name](#method-get-use-action-name)( `_item_instance: ItemInstance` ) |
| `bool` | [is_allowed_in_socket](#method-is-allowed-in-socket)( `socket_defintion: SocketDefinition` ) |
| `EffectInstance` | [apply_socket_effect](#method-apply-socket-effect)( `item_instance: ItemInstance, socket_owner: Entity` ) |

## Property descriptions

### int socket_effect {#prop-socket-effect}

The effect applied to the socket owner when this item is socketed

### Array[int] allowed_sockets = [] {#prop-allowed-sockets}

Array of socket types this item can be inserted into

## Method descriptions

### bool can_use( user: Entity, item_instance: ItemInstance = null ) {#method-can-use}

Socketable items cannot be used directly - they must be socketed into equipment

### bool execute_use( user: Entity, item_instance: ItemInstance ) {#method-execute-use}

Socketable items do nothing when "used" - they're meant to be socketed

### String get_use_action_name( _item_instance: ItemInstance ) {#method-get-use-action-name}

Get display name for socketable action (though they can't be used)

### bool is_allowed_in_socket( socket_defintion: SocketDefinition ) {#method-is-allowed-in-socket}

Check if this socketable can be inserted into a specific socket type

### EffectInstance apply_socket_effect( item_instance: ItemInstance, socket_owner: Entity ) {#method-apply-socket-effect}

Apply socket effect and return the effect instance for tracking

