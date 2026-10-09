# Equipment Definitions: how they are built

The [Equipment Definitions chapter](/basic/equipment-definitions/) explains the editors. In code each is a [`DatabaseResource`](/advanced/data-and-database/database-classes/database-resource) in `res://src/data/items/<folder>/`. [Equipment items](/advanced/items/) and the characters hold their **ids**.

| Label | Class | Database type | Referenced as |
|---|---|---|---|
| Equipment type | [`EquipmentTypeDefinition`](/advanced/equipment-definitions/definitions/equipment-type-definition) | `equipment_type` | [`ItemDefinitionEquipment.equipment_type`](/advanced/items/item-definitions/item-definition-equipment), `EquipmentSlotDefinition.allowed_equipment_types` |
| Weapon type | [`WeaponTypeDefinition`](/advanced/equipment-definitions/definitions/weapon-type-definition) (extends the equipment type) | `weapon_type` (a registry of its own) | `WeaponClassDefinition.weapon_type`, and in `equipment_type` of a weapon |
| Equipment slot | [`EquipmentSlotDefinition`](/advanced/equipment-definitions/definitions/equipment-slot-definition) | `equipment_slot` | [`PlayerClassDefinition.locked_equipment_slots`](/advanced/entities/definitions/player-class-definition), `WeaponTypeDefinition.blocks_equipment_slots` |
| Armor class | [`ArmorClassDefinition`](/advanced/equipment-definitions/definitions/armor-class-definition) | `armor_class` | `ItemDefinitionEquipment.armor_class`, [`ProficiencyDefinition.armor_classes`](/advanced/entity-stats/definitions/proficiency-definition) |
| Weapon class | [`WeaponClassDefinition`](/advanced/equipment-definitions/definitions/weapon-class-definition) | `weapon_class` | [`ItemDefinitionEquipmentWeapon.weapon_class`](/advanced/items/item-definitions/item-definition-equipment-weapon), `ProficiencyDefinition.weapon_classes` |
| Quality | [`Quality`](/advanced/equipment-definitions/definitions/quality) | `quality` | [`ItemDefinition.quality_id`](/advanced/items/item-definitions/item-definition) |
| Set bonus | [`SetBonusDefinition`](/advanced/equipment-definitions/definitions/set-bonus-definition) | `set_bonus` | `ItemDefinitionEquipment.set_bonus_definition` |
| Socket | [`SocketDefinition`](/advanced/equipment-definitions/definitions/socket-definition) | `socket` | `ItemDefinitionEquipment.socket_definitions`, [`ItemDefinitionSocketable.allowed_sockets`](/advanced/items/item-definitions/item-definition-socketable) |

[`Database.get_equipment_type_resource(id)`](/advanced/data-and-database/database-classes/database) finds a type in either registry, because a weapon item's `equipment_type` can be a weapon type.

## How a slot takes an item

`EquipmentSlotDefinition.can_equip_item(item)` is true when `item.equipment_type` is in `allowed_equipment_types`. An [`EquipmentSlotInstance`](/advanced/items/runtime/equipment-slot-instance) (one per `slot_instances`, locked or not) answers `can_accept_item(item_instance)`, which also needs the item to be equipment. [`EquipmentInventoryComponent`](/advanced/items/runtime/equipment-inventory-component) then chooses the slot and handles blocked slots: see [Items: how they are built](/advanced/items/#containers).

## Weapons

- A weapon class points to a weapon type (`get_weapon_type_definition()`); `get_blocked_equipment_slots()` returns the slots of that type's `blocks_equipment_slots`. `ItemDefinitionEquipmentWeapon.get_weapon_hand_requirement()` is `2` when there are any, else `1`.
- A weapon type has `body_parts_affected` and `attachment_points_used` (from `EquipmentTypeDefinition`) and a `mesh_slot` ([`GeneralSkeleton.WeaponSlot`](/advanced/assets/rig/general-skeleton): `MAIN_HAND` or `OFF_HAND`) used to draw the weapon.
- `WeaponClassDefinition.get_animation_tag_for_category("attack"|"stance"|"aim"|"reload")` gives the tag; the entity rig appends `_r` or `_l`. `basic_attack_ability_id` replaces the wielder's basic attack while the weapon is held (`EquipmentInventoryComponent._refresh_weapon_basic_attack`). `ammo_group` is matched against the `groups` of the ammo items.
- A class has no requirements of its own. Gating a class by a trained level is a proficiency: `ProficiencyDefinition.requirements_for_item(item)` (see [Proficiencies](/advanced/entity-stats/proficiencies)).

## Sets

`SetBonusDefinition.set_bonus_effects` maps a piece count to an effect id. The items are linked both ways: `set_item_ids` here and `set_bonus_definition` on the item (`add_set_item` links both sides; `validate_and_fix_relationships` repairs a half link). `count_equipped_set_pieces(entity)` counts the worn items that name the set. When a piece is equipped or removed, `EquipmentInventoryComponent._check_set_bonus_changes` compares the count before and after for every piece count of the set and applies or removes exactly the effects whose state changed.

## The classes

<!-- classes:equipment-definitions/definitions -->
| Class | What it is |
|---|---|
| [ArmorClassDefinition](/advanced/equipment-definitions/definitions/armor-class-definition) |  |
| [EquipmentSlotDefinition](/advanced/equipment-definitions/definitions/equipment-slot-definition) |  |
| [EquipmentTypeDefinition](/advanced/equipment-definitions/definitions/equipment-type-definition) | EquipmentTypeDefinition defines a category of equipment and what mesh slots it affects. |
| [Quality](/advanced/equipment-definitions/definitions/quality) | Defines item quality/rarity with display properties Create instances as .tres files for each quality tier |
| [SetBonusDefinition](/advanced/equipment-definitions/definitions/set-bonus-definition) | Clean set bonus system with ID-based lazy loading to prevent circular dependencies |
| [SocketDefinition](/advanced/equipment-definitions/definitions/socket-definition) | Custom border colour for ItemSlotUI |
| [WeaponClassDefinition](/advanced/equipment-definitions/definitions/weapon-class-definition) | WeaponClassDefinition defines weapon classes and their properties. |
| [WeaponTypeDefinition](/advanced/equipment-definitions/definitions/weapon-type-definition) | WeaponTypeDefinition extends EquipmentTypeDefinition to define weapon-specific properties. |
<!-- /classes -->
