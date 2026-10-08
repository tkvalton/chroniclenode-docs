<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VendorInteraction

**Inherits:** [Interaction](/advanced/entities/interactions/interaction) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Vendor interaction that opens the shop interface when activated

## Properties

| | | |
|---|---|---|
| `int` | [vendor_definition_id](#prop-vendor-definition-id) |  |
| `SFXSelection` | [shop_open_sfx](#prop-shop-open-sfx) |  |
| `AnimationSelectionSocial` | [shop_interaction_animation](#prop-shop-interaction-animation) |  |

## Variables

| | | |
|---|---|---|
| `VendorInventoryComponent` | [vendor_inventory_instance](#var-vendor-inventory-instance) |  |
| `bool` | [shop_is_active](#var-shop-is-active) | `false` |
| `Player` | [current_customer](#var-current-customer) |  |

## Methods

| | |
|---|---|
| `void` | [initialize_vendor](#method-initialize-vendor)() |
| `bool` | [can_interact](#method-can-interact)( `player: Player` ) |
| `void` | [start_interaction](#method-start-interaction)( `player: Player` ) |
| `void` | [end_interaction](#method-end-interaction)() |
| `void` | [restock_vendor](#method-restock-vendor)() |
| `void` | [check_auto_restock](#method-check-auto-restock)() |
| `Dictionary` | [get_vendor_summary](#method-get-vendor-summary)() |
| `VendorDefinition` | [get_vendor_definition](#method-get-vendor-definition)() |
| `void` | [set_entity_reference](#method-set-entity-reference)( `new_entity: Variant, p_system_hub: GameHost.SystemHub` ) |
| `int` | [get_item_stock](#method-get-item-stock)( `item_id: int` ) |
| `bool` | [is_item_available](#method-is-item-available)( `item_id: int` ) |
| `Array[Dictionary]` | [get_available_items](#method-get-available-items)() |
| `void` | [set_item_stock](#method-set-item-stock)( `item_id: int, quantity: int` ) |
| `void` | [cleanup](#method-cleanup)() |

## Property descriptions

### int vendor_definition_id {#prop-vendor-definition-id}

The vendor definition that defines this vendor's shop configuration

### SFXSelection shop_open_sfx {#prop-shop-open-sfx}

Optional audio to play when opening shop

### AnimationSelectionSocial shop_interaction_animation {#prop-shop-interaction-animation}

Optional animation to play when shop opens

## Variable descriptions

### VendorInventoryComponent vendor_inventory_instance {#var-vendor-inventory-instance}

The runtime vendor inventory instance created from the definition

### bool shop_is_active = false {#var-shop-is-active}

Whether the shop is currently active

### Player current_customer {#var-current-customer}

Reference to the player currently shopping (if any)

## Method descriptions

### void initialize_vendor() {#method-initialize-vendor}

Initialize the vendor inventory from the definition Called when the entity is ready and components are set up

### bool can_interact( player: Player ) {#method-can-interact}

Check if the player can interact with this vendor

### void start_interaction( player: Player ) {#method-start-interaction}

Start the vendor interaction - opens the shop UI

### void end_interaction() {#method-end-interaction}

End the vendor interaction - closes the shop UI

### void restock_vendor() {#method-restock-vendor}

Manually trigger vendor restocking

### void check_auto_restock() {#method-check-auto-restock}

Check if vendor needs restocking and do it automatically

### Dictionary get_vendor_summary() {#method-get-vendor-summary}

Get vendor summary for debugging

### VendorDefinition get_vendor_definition() {#method-get-vendor-definition}

Get the vendor definition

### void set_entity_reference( new_entity: Variant, p_system_hub: GameHost.SystemHub ) {#method-set-entity-reference}

Set the entity reference and initialize vendor (called when adding interaction to entity)

### int get_item_stock( item_id: int ) {#method-get-item-stock}

Get current stock for a specific item

### bool is_item_available( item_id: int ) {#method-is-item-available}

Check if an item is available for purchase

### Array[Dictionary] get_available_items() {#method-get-available-items}

Get all items currently available for purchase

### void set_item_stock( item_id: int, quantity: int ) {#method-set-item-stock}

Manually set stock for an item (for testing/debugging)

### void cleanup() {#method-cleanup}

Give the timers back (the object is going away)

