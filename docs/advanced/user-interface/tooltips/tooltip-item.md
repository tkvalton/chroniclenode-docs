<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TooltipItem

**Inherits:** [TooltipBase](/advanced/user-interface/tooltips/tooltip-base) < `MarginContainer`

Comprehensive tooltip for all item types with vendor context support Now supports both ItemInstance (full detail) and ItemDefinition (basic) display

## Properties

| | | |
|---|---|---|
| `PackedScene` | [socket_slot_scene](#prop-socket-slot-scene) |  |

## Variables

| | | |
|---|---|---|
| `ItemInstance` | [current_item_instance](#var-current-item-instance) | `null` |
| `ItemDefinition` | [current_item_definition](#var-current-item-definition) | `null` |
| `Dictionary` | [vendor_context](#var-vendor-context) | `{}` |
| `String` | [tooltip_context](#var-tooltip-context) | `"inventory"  # "inventory", "vendor_buying", "vendor_sell...` |

## Methods

| | |
|---|---|
| `void` | [set_systems_refs](#method-set-systems-refs)( `system_hub: GameHost.SystemHub` ) |
| `void` | [setup_tooltip](#method-setup-tooltip)( `item_instance: ItemInstance, item_definition: ItemDefinition, context: String = "inventory", vendor_data: Dictionary = {}` ) |
| `String` | [strip_bbcode](#method-strip-bbcode)( `text: String` ) |
| `void` | [show_definition_tooltip](#method-show-definition-tooltip)( `item_definition: ItemDefinition, context: String = "inventory", vendor_data: Dictionary = {}` ) |
| `void` | [update_vendor_pricing](#method-update-vendor-pricing)( `vendor_data: Dictionary` ) |
| `bool` | [has_vendor_context](#method-has-vendor-context)() |
| `ItemInstance` | [get_current_item_instance](#method-get-current-item-instance)() |
| `ItemDefinition` | [get_current_item_definition](#method-get-current-item-definition)() |
| `String` | [get_tooltip_context](#method-get-tooltip-context)() |
| `void` | [update_context](#method-update-context)( `new_context: String, vendor_data: Dictionary = {}` ) |
| `bool` | [is_showing_instance_data](#method-is-showing-instance-data)() |
| `void` | [set_item](#method-set-item)( `item_instance: ItemInstance, item_definition: ItemDefinition, context: String = "inventory", vendor_data: Dictionary = {}` ) |

## Property descriptions

### PackedScene socket_slot_scene {#prop-socket-slot-scene}

Preloaded scene for socket slots

## Variable descriptions

### ItemInstance current_item_instance = null {#var-current-item-instance}

The item the tooltip shows (full detail).

### ItemDefinition current_item_definition = null {#var-current-item-definition}

The item definition the tooltip shows (basic detail).

### Dictionary vendor_context =  {#var-vendor-context}

For vendor-specific pricing info

### String tooltip_context = "inventory"  # "inventory", "vendor_buying", "vendor_selling {#var-tooltip-context}

Where the item is (inventory, vendor ...), which changes what the tooltip shows.

## Method descriptions

### void set_systems_refs( system_hub: GameHost.SystemHub ) {#method-set-systems-refs}

Gives the tooltip the hub of the game systems and applies the label settings.

### void setup_tooltip( item_instance: ItemInstance, item_definition: ItemDefinition, context: String = "inventory", vendor_data: Dictionary = &#123;&#125; ) {#method-setup-tooltip}

Setup tooltip with item data and context - supports both instance and definition

### String strip_bbcode( text: String ) {#method-strip-bbcode}

The text without its BBCode tags.

### void show_definition_tooltip( item_definition: ItemDefinition, context: String = "inventory", vendor_data: Dictionary = &#123;&#125; ) {#method-show-definition-tooltip}

Show tooltip for definition only (basic display)

### void update_vendor_pricing( vendor_data: Dictionary ) {#method-update-vendor-pricing}

Update vendor pricing without changing item

### bool has_vendor_context() {#method-has-vendor-context}

Check if tooltip is showing vendor information

### ItemInstance get_current_item_instance() {#method-get-current-item-instance}

Get current item instance being displayed

### ItemDefinition get_current_item_definition() {#method-get-current-item-definition}

Get current item definition being displayed

### String get_tooltip_context() {#method-get-tooltip-context}

Get current tooltip context

### void update_context( new_context: String, vendor_data: Dictionary = &#123;&#125; ) {#method-update-context}

Update context without recreating tooltip

### bool is_showing_instance_data() {#method-is-showing-instance-data}

Check if tooltip is showing instance-specific data

### void set_item( item_instance: ItemInstance, item_definition: ItemDefinition, context: String = "inventory", vendor_data: Dictionary = &#123;&#125; ) {#method-set-item}

Convenience method for setting item with context (matches other tooltip patterns)

