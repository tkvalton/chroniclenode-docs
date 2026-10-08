<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ItemDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [ItemDefinitionConsumable](/advanced/items/item-definitions/item-definition-consumable), [ItemDefinitionEnchantScroll](/advanced/items/item-definitions/item-definition-enchant-scroll), [ItemDefinitionEquipment](/advanced/items/item-definitions/item-definition-equipment), [ItemDefinitionMaterial](/advanced/items/item-definitions/item-definition-material), [ItemDefinitionOnUse](/advanced/items/item-definitions/item-definition-on-use), [ItemDefinitionQuest](/advanced/items/item-definitions/item-definition-quest), [ItemDefinitionReadable](/advanced/items/item-definitions/item-definition-readable), [ItemDefinitionSocketable](/advanced/items/item-definitions/item-definition-socketable)

Base class for all item definitions with integrated Requirement system

## Properties

| | | |
|---|---|---|
| `Mesh` | [item_model](#prop-item-model) | `null` |
| `Array[Material]` | [item_material_override](#prop-item-material-override) | `[]` |
| `int` | [quality_id](#prop-quality-id) | `0` |
| `bool` | [stackable](#prop-stackable) | `false` |
| `int` | [max_stack_size](#prop-max-stack-size) | `1` |
| `int` | [vendor_value](#prop-vendor-value) | `0` |
| `bool` | [is_key_item](#prop-is-key-item) | `false` |
| `int` | [item_level](#prop-item-level) | `1` |
| `Array[int]` | [groups](#prop-groups) | `[]` |
| `Array[Requirement]` | [requirements](#prop-requirements) | `[]` |

## Methods

| | |
|---|---|
| `Dictionary` | [check_requirements](#method-check-requirements)( `user: Entity` ) |
| `bool` | [meets_requirements](#method-meets-requirements)( `user: Entity` ) |
| `String` | [get_requirement_failure_message](#method-get-requirement-failure-message)( `user: Entity` ) |
| `String` | [get_requirements_summary](#method-get-requirements-summary)() |
| `Quality` | [get_quality](#method-get-quality)() |
| `Color` | [get_quality_color](#method-get-quality-color)() |
| `String` | [get_quality_name](#method-get-quality-name)() |
| `int` | [get_quality_tier](#method-get-quality-tier)() |
| `bool` | [has_higher_quality_than](#method-has-higher-quality-than)( `other_item: ItemDefinition` ) |
| `bool` | [can_use](#method-can-use)( `user: Entity, _item_instance: ItemInstance = null` ) |
| `bool` | [execute_use](#method-execute-use)( `_user: Entity, _item_instance: ItemInstance` ) |
| `String` | [get_use_action_name](#method-get-use-action-name)( `_item_instance: ItemInstance` ) |

## Property descriptions

### Mesh item_model = null {#prop-item-model}

3D mesh used when displaying this item in the world

### Array[Material] item_material_override = [] {#prop-item-material-override}

Material overrides applied to the item model

### int quality_id = 0 {#prop-quality-id}

Quality ID that determines rarity and color coding (0 = no quality)

*Stack Settings*

### bool stackable = false {#prop-stackable}

Whether multiple instances can stack together in inventory slots

### int max_stack_size = 1 {#prop-max-stack-size}

Maximum number of items in a single inventory slot

*Value and Flags*

### int vendor_value = 0 {#prop-vendor-value}

Base vendor sale value in copper pieces

### bool is_key_item = false {#prop-is-key-item}

Whether this item cannot be discarded or sold

*Level*

### int item_level = 1 {#prop-item-level}

Required character level to use this item

*Groups*

### Array[int] groups = [] {#prop-groups}

Groups this item is in (see GroupDefinition): consumables of a group that shares its cooldown go on cooldown together, and ammo or reagent costs can name a group

*Requirements*

### Array[Requirement] requirements = [] {#prop-requirements}

Array of requirements that must be met to use/equip this item

## Method descriptions

### Dictionary check_requirements( user: Entity ) {#method-check-requirements}

Check if user meets all requirements to use this item

### bool meets_requirements( user: Entity ) {#method-meets-requirements}

Quick check: can this item be used?

### String get_requirement_failure_message( user: Entity ) {#method-get-requirement-failure-message}

Get failure message for why requirements aren't met

### String get_requirements_summary() {#method-get-requirements-summary}

Get requirements summary for tooltip display

### Quality get_quality() {#method-get-quality}

Get the actual Quality resource from the ID

### Color get_quality_color() {#method-get-quality-color}

*No description yet.*

### String get_quality_name() {#method-get-quality-name}

*No description yet.*

### int get_quality_tier() {#method-get-quality-tier}

*No description yet.*

### bool has_higher_quality_than( other_item: ItemDefinition ) {#method-has-higher-quality-than}

*No description yet.*

### bool can_use( user: Entity, _item_instance: ItemInstance = null ) {#method-can-use}

Check if this item can be used by a specific user Pure validation - no side effects item_instance parameter is optional but needed for quest items

### bool execute_use( _user: Entity, _item_instance: ItemInstance ) {#method-execute-use}

Virtual method to execute item usage effects Called by ItemInstance - definitions handle logic, instances handle state

### String get_use_action_name( _item_instance: ItemInstance ) {#method-get-use-action-name}

Get the display name for the use action (e.g., "Use", "Read", "Equip") Used by UI to show appropriate action text

