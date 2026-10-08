<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CharacterDefinition

**Inherits:** [EntityDefinition](/advanced/entities/definitions/entity-definition) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [CustomCharacterDefinition](/advanced/entities/definitions/custom-character-definition)

Character Definition - Unique template for creating player characters References a PlayerClassDefinition and inherits visual/audio from EntityDefinition

## Properties

| | | |
|---|---|---|
| `int` | [player_class](#prop-player-class) | `0` |
| `int` | [starting_level](#prop-starting-level) | `0` |
| `Dictionary` | [equipment_override](#prop-equipment-override) | `{}` |
| `Dictionary` | [inventory](#prop-inventory) | `{ ... }` |

## Methods

| | |
|---|---|
| `bool` | [has_class_definition](#method-has-class-definition)() |
| `PlayerClassDefinition` | [get_class_definition](#method-get-class-definition)() |
| `void` | [set_class_definition](#method-set-class-definition)( `new_class: int` ) |
| `String` | [get_class_name](#method-get-class-name)() |
| `int` | [get_class_id](#method-get-class-id)() |
| `int` | [get_character_id](#method-get-character-id)() |
| `void` | [set_character_id](#method-set-character-id)( `new_id: int` ) |
| `String` | [get_character_name](#method-get-character-name)() |
| `void` | [set_character_name](#method-set-character-name)( `new_name: String` ) |
| `CompressedTexture2D` | [get_character_icon](#method-get-character-icon)() |
| `void` | [set_character_icon](#method-set-character-icon)( `new_icon: CompressedTexture2D` ) |
| `String` | [get_effective_display_name](#method-get-effective-display-name)() |
| `CompressedTexture2D` | [get_effective_icon](#method-get-effective-icon)() |
| `int` | [get_effective_starting_level](#method-get-effective-starting-level)() |
| `Dictionary` | [get_effective_starter_equipment](#method-get-effective-starter-equipment)() |
| `bool` | [has_equipment_override](#method-has-equipment-override)() |
| `Dictionary` | [get_inventory](#method-get-inventory)() |
| `void` | [set_inventory](#method-set-inventory)( `new_inventory: Dictionary` ) |
| `void` | [add_inventory_item](#method-add-inventory-item)( `item_id: int, quantity: int = 1` ) |
| `bool` | [remove_inventory_item](#method-remove-inventory-item)( `item_id: int, quantity: int = 1` ) |
| `void` | [clear_inventory_item](#method-clear-inventory-item)( `item_id: int` ) |
| `int` | [get_inventory_item_quantity](#method-get-inventory-item-quantity)( `item_id: int` ) |
| `bool` | [has_inventory_item](#method-has-inventory-item)( `item_id: int` ) |
| `Dictionary` | [get_inventory_items](#method-get-inventory-items)() |
| `void` | [add_currency](#method-add-currency)( `currency_id: int, amount: int` ) |
| `bool` | [remove_currency](#method-remove-currency)( `currency_id: int, amount: int` ) |
| `void` | [set_currency_amount](#method-set-currency-amount)( `currency_id: int, amount: int` ) |
| `int` | [get_currency_amount](#method-get-currency-amount)( `currency_id: int` ) |
| `bool` | [has_currency](#method-has-currency)( `currency_id: int` ) |
| `Dictionary` | [get_currencies](#method-get-currencies)() |
| `void` | [clear_currency](#method-clear-currency)( `currency_id: int` ) |
| `void` | [clear_all_inventory](#method-clear-all-inventory)() |
| `Array[String]` | [validate](#method-validate)() |
| `bool` | [is_valid](#method-is-valid)() |
| `String` | [get_display_name](#method-get-display-name)() |

## Property descriptions

*Class Configuration*

### int player_class = 0 {#prop-player-class}

PlayerClassDefinition this character is based on (required)

*Starting Configuration*

### int starting_level = 0 {#prop-starting-level}

Starting level for this character (if 0, starts at level 1)

*Equipment Override*

### Dictionary equipment_override =  {#prop-equipment-override}

Starting equipment override (if empty, uses class starter_equipment) Format: Dictionary[int, int] where key is "SlotName:instance" and value is item_id

*Starting Inventory*

### Dictionary inventory {#prop-inventory}

Character's starting inventory - items &amp; currency for new character

## Method descriptions

### bool has_class_definition() {#method-has-class-definition}

Check if has class definition

### PlayerClassDefinition get_class_definition() {#method-get-class-definition}

Get class definition

### void set_class_definition( new_class: int ) {#method-set-class-definition}

Set class definition

### String get_class_name() {#method-get-class-name}

Get class name

### int get_class_id() {#method-get-class-id}

Get class ID

### int get_character_id() {#method-get-character-id}

Get character ID

### void set_character_id( new_id: int ) {#method-set-character-id}

Set character ID

### String get_character_name() {#method-get-character-name}

Get character name

### void set_character_name( new_name: String ) {#method-set-character-name}

Set character name

### CompressedTexture2D get_character_icon() {#method-get-character-icon}

Get character icon

### void set_character_icon( new_icon: CompressedTexture2D ) {#method-set-character-icon}

Set character icon

### String get_effective_display_name() {#method-get-effective-display-name}

Get effective display name (falls back to class if empty)

### CompressedTexture2D get_effective_icon() {#method-get-effective-icon}

Get effective icon (falls back to class if null)

### int get_effective_starting_level() {#method-get-effective-starting-level}

Get effective starting level (falls back to 1 if 0)

### Dictionary get_effective_starter_equipment() {#method-get-effective-starter-equipment}

Get effective starter equipment (uses override if set, otherwise class equipment)

### bool has_equipment_override() {#method-has-equipment-override}

Check if has equipment override

### Dictionary get_inventory() {#method-get-inventory}

Get inventory with proper structure

### void set_inventory( new_inventory: Dictionary ) {#method-set-inventory}

Set inventory

### void add_inventory_item( item_id: int, quantity: int = 1 ) {#method-add-inventory-item}

Add item to inventory

### bool remove_inventory_item( item_id: int, quantity: int = 1 ) {#method-remove-inventory-item}

Remove item from inventory

### void clear_inventory_item( item_id: int ) {#method-clear-inventory-item}

Clear specific item from inventory

### int get_inventory_item_quantity( item_id: int ) {#method-get-inventory-item-quantity}

Get item quantity

### bool has_inventory_item( item_id: int ) {#method-has-inventory-item}

Check if inventory has item

### Dictionary get_inventory_items() {#method-get-inventory-items}

Get all inventory items

### void add_currency( currency_id: int, amount: int ) {#method-add-currency}

Add currency

### bool remove_currency( currency_id: int, amount: int ) {#method-remove-currency}

Remove currency

### void set_currency_amount( currency_id: int, amount: int ) {#method-set-currency-amount}

Set currency amount

### int get_currency_amount( currency_id: int ) {#method-get-currency-amount}

Get currency amount

### bool has_currency( currency_id: int ) {#method-has-currency}

Check if has currency

### Dictionary get_currencies() {#method-get-currencies}

Get all currencies

### void clear_currency( currency_id: int ) {#method-clear-currency}

Clear specific currency

### void clear_all_inventory() {#method-clear-all-inventory}

Clear entire inventory

### Array[String] validate() {#method-validate}

Validate character configuration

### bool is_valid() {#method-is-valid}

Check if character is valid

### String get_display_name() {#method-get-display-name}

Get display name for editor (includes ID)

