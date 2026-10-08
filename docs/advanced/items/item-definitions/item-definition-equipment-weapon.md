<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ItemDefinitionEquipmentWeapon

**Inherits:** [ItemDefinitionEquipment](/advanced/items/item-definitions/item-definition-equipment) < [ItemDefinition](/advanced/items/item-definitions/item-definition) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Weapon items that can be equipped to provide combat capabilities Inherits all equipment functionality and adds weapon-specific properties for damage, speed, and combat

## Properties

| | | |
|---|---|---|
| `int` | [weapon_class](#prop-weapon-class) |  |
| `float` | [weapon_scale](#prop-weapon-scale) | `1.0` |
| `bool` | [no_damage](#prop-no-damage) | `false` |
| `int` | [weapon_damage_min](#prop-weapon-damage-min) | `10` |
| `int` | [weapon_damage_max](#prop-weapon-damage-max) | `15` |
| `float` | [weapon_speed](#prop-weapon-speed) | `2.4` |
| `int` | [weapon_damage_type](#prop-weapon-damage-type) | `0` |
| `String` | [collision_template](#prop-collision-template) | `"medium_capsule"` |

## Methods

| | |
|---|---|
| `Dictionary` | [get_effective_stat_bonuses](#method-get-effective-stat-bonuses)( `item_instance: ItemInstance` ) |
| `float` | [get_average_damage](#method-get-average-damage)() |
| `float` | [get_damage_variance](#method-get-damage-variance)() |
| `int` | [get_weapon_damage](#method-get-weapon-damage)() |
| `String` | [get_damage_range_text](#method-get-damage-range-text)() |
| `float` | [get_weapon_speed](#method-get-weapon-speed)() |
| `void` | [set_weapon_speed](#method-set-weapon-speed)( `new_speed: float` ) |
| `float` | [get_base_attacks_per_second](#method-get-base-attacks-per-second)() |
| `float` | [get_attacks_per_minute](#method-get-attacks-per-minute)() |
| `float` | [get_base_damage_per_second](#method-get-base-damage-per-second)() |
| `String` | [get_speed_category](#method-get-speed-category)() |
| `int` | [get_weapon_damage_type](#method-get-weapon-damage-type)() |
| `void` | [set_weapon_damage_type](#method-set-weapon-damage-type)( `new_damage_type: int` ) |
| `bool` | [deals_damage_type](#method-deals-damage-type)( `damage_type: int` ) |
| `bool` | [deals_damage](#method-deals-damage)() |
| `bool` | [is_utility_weapon](#method-is-utility-weapon)() |
| `String` | [get_damage_type_display](#method-get-damage-type-display)() |
| `Shape3D` | [get_weapon_collision_shape](#method-get-weapon-collision-shape)() |
| `bool` | [validate_collision_template](#method-validate-collision-template)() |
| `int` | [get_weapon_hand_requirement](#method-get-weapon-hand-requirement)() |
| `WeaponTypeDefinition` | [get_weapon_type_definition](#method-get-weapon-type-definition)() |
| `Array[EquipmentSlotDefinition]` | [get_blocked_equipment_slots](#method-get-blocked-equipment-slots)() |
| `WeaponClassDefinition` | [get_weapon_class](#method-get-weapon-class)() |
| `bool` | [has_valid_weapon_type](#method-has-valid-weapon-type)() |
| `float` | [get_weapon_scale](#method-get-weapon-scale)() |
| `void` | [set_weapon_scale](#method-set-weapon-scale)( `new_scale: float` ) |
| `bool` | [can_use](#method-can-use)( `user: Entity, item_instance: ItemInstance = null` ) |

## Property descriptions

*Weapon Properties*

### int weapon_class {#prop-weapon-class}

Weapon class definition that determines weapon type, hand requirements, and equipment slot compatibility

### float weapon_scale = 1.0 {#prop-weapon-scale}

Visual scale multiplier applied to the weapon model when equipped

*Weapon Combat*

### bool no_damage = false {#prop-no-damage}

If true, this weapon provides no damage (cosmetic/utility weapon)

### int weapon_damage_min = 10 {#prop-weapon-damage-min}

Minimum damage this weapon can deal in a single attack

### int weapon_damage_max = 15 {#prop-weapon-damage-max}

Maximum damage this weapon can deal in a single attack

### float weapon_speed = 2.4 {#prop-weapon-speed}

Base attack speed in seconds between swings

### int weapon_damage_type = 0 {#prop-weapon-damage-type}

Type of damage this weapon deals - affects resistances and damage calculations

### String collision_template = "medium_capsule" {#prop-collision-template}

Collision template name for weapon hitbox detection during attacks

## Method descriptions

### Dictionary get_effective_stat_bonuses( item_instance: ItemInstance ) {#method-get-effective-stat-bonuses}

Override to include weapon combat stats in the stat bonuses

### float get_average_damage() {#method-get-average-damage}

*No description yet.*

### float get_damage_variance() {#method-get-damage-variance}

*No description yet.*

### int get_weapon_damage() {#method-get-weapon-damage}

*No description yet.*

### String get_damage_range_text() {#method-get-damage-range-text}

*No description yet.*

### float get_weapon_speed() {#method-get-weapon-speed}

*No description yet.*

### void set_weapon_speed( new_speed: float ) {#method-set-weapon-speed}

*No description yet.*

### float get_base_attacks_per_second() {#method-get-base-attacks-per-second}

*No description yet.*

### float get_attacks_per_minute() {#method-get-attacks-per-minute}

*No description yet.*

### float get_base_damage_per_second() {#method-get-base-damage-per-second}

*No description yet.*

### String get_speed_category() {#method-get-speed-category}

*No description yet.*

### int get_weapon_damage_type() {#method-get-weapon-damage-type}

Get the weapon's damage type

### void set_weapon_damage_type( new_damage_type: int ) {#method-set-weapon-damage-type}

Set the weapon's damage type

### bool deals_damage_type( damage_type: int ) {#method-deals-damage-type}

Check if weapon deals a specific damage type

### bool deals_damage() {#method-deals-damage}

Check if this weapon deals damage

### bool is_utility_weapon() {#method-is-utility-weapon}

Check if this is a utility/cosmetic weapon

### String get_damage_type_display() {#method-get-damage-type-display}

Get damage type for display (capitalize first letter)

### Shape3D get_weapon_collision_shape() {#method-get-weapon-collision-shape}

*No description yet.*

### bool validate_collision_template() {#method-validate-collision-template}

*No description yet.*

### int get_weapon_hand_requirement() {#method-get-weapon-hand-requirement}

How many hands the weapon takes: 2 when its weapon type blocks other slots (a two-handed weapon blocks the off hand), else 1

### WeaponTypeDefinition get_weapon_type_definition() {#method-get-weapon-type-definition}

*No description yet.*

### Array[EquipmentSlotDefinition] get_blocked_equipment_slots() {#method-get-blocked-equipment-slots}

*No description yet.*

### WeaponClassDefinition get_weapon_class() {#method-get-weapon-class}

*No description yet.*

### bool has_valid_weapon_type() {#method-has-valid-weapon-type}

Check if weapon type is valid

### float get_weapon_scale() {#method-get-weapon-scale}

*No description yet.*

### void set_weapon_scale( new_scale: float ) {#method-set-weapon-scale}

*No description yet.*

### bool can_use( user: Entity, item_instance: ItemInstance = null ) {#method-can-use}

Override equipment validation to include weapon-specific checks

