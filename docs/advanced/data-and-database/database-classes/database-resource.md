<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DatabaseResource

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [AbilityDefinition](/advanced/abilities-and-effects/abilities/ability-definition), [ArmorClassDefinition](/advanced/equipment-definitions/definitions/armor-class-definition), [Conversation](/advanced/behaviors/conversations/conversation), [CraftSchoolDefinition](/advanced/items/crafting/craft-school-definition), [CraftingRecipeDefinition](/advanced/items/crafting/crafting-recipe-definition), [CurrencyDefinition](/advanced/items/currency/currency-definition), [DamageTypeDefinition](/advanced/entity-stats/definitions/damage-type-definition), [Effect](/advanced/abilities-and-effects/effects-base/effect), [EntityDefinition](/advanced/entities/definitions/entity-definition), [EntityTagDefinition](/advanced/entity-stats/definitions/entity-tag-definition), [EquipmentSlotDefinition](/advanced/equipment-definitions/definitions/equipment-slot-definition), [EquipmentTypeDefinition](/advanced/equipment-definitions/definitions/equipment-type-definition), [FactionDefinition](/advanced/behaviors/factions/faction-definition), [GroupDefinition](/advanced/shared-systems/groups/group-definition), [ImmunityDefinition](/advanced/entity-stats/definitions/immunity-definition), [InteractableDefinition](/advanced/entities/definitions/interactable-definition), [ItemDefinition](/advanced/items/item-definitions/item-definition), [LootTable](/advanced/items/item-definitions/loot-table), [ModularBehaviorScript](/advanced/behaviors/behavior-scripts/modular-behavior-script), [ModularCombatScript](/advanced/behaviors/combat-scripts/modular-combat-script), [PlayerClassDefinition](/advanced/entities/definitions/player-class-definition), [PoolDefinition](/advanced/entity-stats/stats-and-pools/pool-definition), [ProficiencyDefinition](/advanced/entity-stats/definitions/proficiency-definition), [Quality](/advanced/equipment-definitions/definitions/quality), [SchoolTypeDefinition](/advanced/entity-stats/definitions/school-type-definition), [SetBonusDefinition](/advanced/equipment-definitions/definitions/set-bonus-definition), [SocketDefinition](/advanced/equipment-definitions/definitions/socket-definition), [StatDefinition](/advanced/entity-stats/stats-and-pools/stat-definition), [StatGroupDefinition](/advanced/entity-stats/definitions/stat-group-definition), [StatusEffectDefinition](/advanced/entity-stats/definitions/status-effect-definition), [TriggerTagDefinition](/advanced/entity-stats/triggers/trigger-tag-definition), [VendorDefinition](/advanced/items/vendors/vendor-definition), [WeaponClassDefinition](/advanced/equipment-definitions/definitions/weapon-class-definition)

The base of everything the database stores. A DatabaseResource has an id, a name, an icon and a description; the id is what other resources use to refer to it.

## Description

Every resource of the REGISTRY of the Database extends this class: abilities, effects, NPCs, items, quests, factions, stats, vendors, popups and so on. It is saved as the file `<id>.tres` in the folder of its type under `res://src/data/`.

## Properties

| | | |
|---|---|---|
| `int` | [id](#prop-id) |  |
| `String` | [display_name](#prop-display-name) | `""` |
| `CompressedTexture2D` | [icon](#prop-icon) |  |
| `String` | [description](#prop-description) | `""` |

## Property descriptions

### int id {#prop-id}

Unique identifier for this entity

### String display_name = "" {#prop-display-name}

Display name shown in UI and nameplates

### CompressedTexture2D icon {#prop-icon}

Icon displayed in UI elements

### String description = "" {#prop-description}

Optional description or background

