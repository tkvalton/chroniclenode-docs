<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# InstanceUtility

**Inherits:** [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

Utility script to help item/ability creation anywhere.

## Variables

| | | |
|---|---|---|
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |

## Methods

| | |
|---|---|
| `void` | [initialize](#method-initialize)( `p_system_hub: GameHost.SystemHub` ) *static* |
| `void` | [warn_player](#method-warn-player)( `text: String` ) *static* |
| `ItemInstance` | [create_item_instance](#method-create-item-instance)( `item_id: int` ) *static* |
| `ItemInstance` | [create_item_instance_from_definition](#method-create-item-instance-from-definition)( `item_def: ItemDefinition` ) *static* |
| `Array[ItemInstance]` | [create_item_instances](#method-create-item-instances)( `item_id: int, quantity: int` ) *static* |
| `InventoryComponent` | [get_current_player_inventory](#method-get-current-player-inventory)() *static* |
| `bool` | [add_item_to_inventory](#method-add-item-to-inventory)( `inventory: InventoryComponent, item_id: int, quantity: int = 1` ) *static* |
| `bool` | [remove_item_from_inventory](#method-remove-item-from-inventory)( `inventory: InventoryComponent, item_id: int, quantity: int = 1` ) *static* |
| `AbilityInstance` | [create_ability_instance](#method-create-ability-instance)( `definition: AbilityDefinition, user: Entity` ) *static* |

## Variable descriptions

### GameHost.SystemHub system_hub {#var-system-hub}

*No description yet.*

## Method descriptions

### void initialize( p_system_hub: GameHost.SystemHub ) {#method-initialize}

Initialize the utility Call this from GameHost on startup

### void warn_player( text: String ) {#method-warn-player}

Tells the player something in the message area (a reward that does not fit, a craft without room). Does nothing without a UI

### ItemInstance create_item_instance( item_id: int ) {#method-create-item-instance}

Create a new item instance from a definition ID

### ItemInstance create_item_instance_from_definition( item_def: ItemDefinition ) {#method-create-item-instance-from-definition}

Create a new item instance from a definition

### Array[ItemInstance] create_item_instances( item_id: int, quantity: int ) {#method-create-item-instances}

Create multiple item instances (for stacking items)

### InventoryComponent get_current_player_inventory() {#method-get-current-player-inventory}

*No description yet.*

### bool add_item_to_inventory( inventory: InventoryComponent, item_id: int, quantity: int = 1 ) {#method-add-item-to-inventory}

Add item by ID to any inventory (creates ItemInstance automatically)

### bool remove_item_from_inventory( inventory: InventoryComponent, item_id: int, quantity: int = 1 ) {#method-remove-item-from-inventory}

Remove item by ID from any inventory (finds and removes instances)

### AbilityInstance create_ability_instance( definition: AbilityDefinition, user: Entity ) {#method-create-ability-instance}

*No description yet.*

