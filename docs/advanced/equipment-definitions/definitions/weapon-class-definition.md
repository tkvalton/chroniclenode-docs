<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WeaponClassDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

WeaponClassDefinition defines weapon classes and their properties. Handles both the mechanical aspects (grip, mesh slots) and combat properties.

## Properties

| | | |
|---|---|---|
| `int` | [weapon_type](#prop-weapon-type) |  |
| `bool` | [is_ranged](#prop-is-ranged) | `false` |
| `String` | [attack_tag](#prop-attack-tag) | `""` |
| `String` | [stance_tag](#prop-stance-tag) | `""` |
| `String` | [aim_tag](#prop-aim-tag) | `""` |
| `String` | [reload_tag](#prop-reload-tag) | `""` |
| `int` | [basic_attack_ability_id](#prop-basic-attack-ability-id) | `0` |
| `int` | [ammo_group](#prop-ammo-group) | `0` |
| `Array[int]` | [required_passive_abilities](#prop-required-passive-abilities) | `[]` |

## Methods

| | |
|---|---|
| `WeaponTypeDefinition` | [get_weapon_type_definition](#method-get-weapon-type-definition)() |
| `Array[EquipmentSlotDefinition]` | [get_blocked_equipment_slots](#method-get-blocked-equipment-slots)() |
| `bool` | [has_valid_weapon_type](#method-has-valid-weapon-type)() |
| `String` | [get_attack_tag](#method-get-attack-tag)() |
| `String` | [get_stance_tag](#method-get-stance-tag)() |
| `String` | [get_aim_tag](#method-get-aim-tag)() |
| `String` | [get_reload_tag](#method-get-reload-tag)() |
| `String` | [get_animation_tag_for_category](#method-get-animation-tag-for-category)( `category: String` ) |
| `bool` | [is_valid](#method-is-valid)() |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `bool` | [blocks_equipment_slot](#method-blocks-equipment-slot)( `slot: EquipmentSlotDefinition` ) |
| `bool` | [has_slot_conflicts](#method-has-slot-conflicts)() |
| `Dictionary` | [can_be_used_by_entity](#method-can-be-used-by-entity)( `entity: Entity` ) |
| `bool` | [has_requirements](#method-has-requirements)() |
| `String` | [get_weapon_type_name](#method-get-weapon-type-name)() |

## Property descriptions

*Weapon Mechanics*

### int weapon_type {#prop-weapon-type}

Weapon type definition resource (handles hand requirements, mesh slots, blocking)

*Animation Tags*

### bool is_ranged = false {#prop-is-ranged}

Whether this weapon is ranged (enables aim/reload tags)

### String attack_tag = "" {#prop-attack-tag}

Animation tag for weapon attacks (e.g., "dagger_stab", "sword_slash", "bow_shoot") The system will append _r or _l suffixes for hand-specific animations

### String stance_tag = "" {#prop-stance-tag}

Animation tag for stance/idle with this weapon (e.g., "sword_stance", "bow_stance")

### String aim_tag = "" {#prop-aim-tag}

Animation tag for aiming (ranged weapons only, e.g., "bow_aim")

### String reload_tag = "" {#prop-reload-tag}

Animation tag for reloading (ranged weapons only, e.g., "crossbow_reload")

*Basic Attack*

### int basic_attack_ability_id = 0 {#prop-basic-attack-ability-id}

The ability this weapon makes the wielder's basic attack (a bow shoots, a wand zaps). 0 = the weapon does not change the basic attack

*Ammo*

### int ammo_group = 0 {#prop-ammo-group}

The ammo group this weapon shoots (the group of the arrows, bolts or bullets: see GroupDefinition). 0 = any ammo works, or the weapon needs none

*Requirements*

### Array[int] required_passive_abilities = [] {#prop-required-passive-abilities}

Passive ability IDs required to use this weapon class

## Method descriptions

### WeaponTypeDefinition get_weapon_type_definition() {#method-get-weapon-type-definition}

Get the weapon type definition

### Array[EquipmentSlotDefinition] get_blocked_equipment_slots() {#method-get-blocked-equipment-slots}

Get blocked equipment slots from weapon type

### bool has_valid_weapon_type() {#method-has-valid-weapon-type}

Check if weapon type is valid

### String get_attack_tag() {#method-get-attack-tag}

Get the attack animation tag for this weapon class Returns empty string if not set

### String get_stance_tag() {#method-get-stance-tag}

Get the stance animation tag for this weapon class Returns empty string if not set

### String get_aim_tag() {#method-get-aim-tag}

Get the aim animation tag (only valid for ranged weapons) Returns empty string if not ranged or not set

### String get_reload_tag() {#method-get-reload-tag}

Get the reload animation tag (only valid for ranged weapons) Returns empty string if not ranged or not set

### String get_animation_tag_for_category( category: String ) {#method-get-animation-tag-for-category}

Get the appropriate animation tag for a given category category should be one of: "attack", "stance", "aim", "reload"

### bool is_valid() {#method-is-valid}

*No description yet.*

### Array[Dictionary] validate() {#method-validate}

*No description yet.*

### bool blocks_equipment_slot( slot: EquipmentSlotDefinition ) {#method-blocks-equipment-slot}

Check if this weapon type blocks a specific equipment slot

### bool has_slot_conflicts() {#method-has-slot-conflicts}

Check if this weapon type has any slot conflicts

### Dictionary can_be_used_by_entity( entity: Entity ) {#method-can-be-used-by-entity}

*No description yet.*

### bool has_requirements() {#method-has-requirements}

*No description yet.*

### String get_weapon_type_name() {#method-get-weapon-type-name}

*No description yet.*

