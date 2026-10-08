<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# Database types

The [Database](/advanced/data-and-database/database-classes/database) knows 52 types of resource. Each row says the **type name** you pass to the database (`Database.get_resource("effect", id)`), the **class** every resource of the type must be,
the **folder** its files are saved in (one `<id>.tres` file per resource) and the **editor tab** you make them in. Every class in the table extends [DatabaseResource](/advanced/data-and-database/database-classes/database-resource).

The rows are in the order of the REGISTRY, grouped like the editor's categories. The type `enviroment` is spelled that way in the code.

| Type | Class | Folder | Edited in |
|---|---|---|---|
| **World** | | | |
| `world` | `WorldData` | `src/data/worlds/` | [Worlds](/basic/world/worlds) |
| `enviroment` | `EnvironmentConfig` | `src/data/worlds/enviroment/` | [World Configs](/basic/world/world-configs) |
| `sky` | `SkyConfig` | `src/data/worlds/sky/` | [World Configs](/basic/world/world-configs) |
| `sun` | `SunConfig` | `src/data/worlds/sun/` | [World Configs](/basic/world/world-configs) |
| `time` | `TimeConfig` | `src/data/worlds/time/` | [World Configs](/basic/world/world-configs) |
| **Events & Quests** | | | |
| `event` | `Event` | `src/data/events/` | [Events](/basic/events-and-quests/events) |
| `quest` | `Quest` | `src/data/quests/` | [Quests](/basic/events-and-quests/quests) |
| `questline` | `QuestLine` | `src/data/questlines/` | [Quest Lines](/basic/events-and-quests/quest-lines) |
| `global_variable` | `GlobalVariable` | `src/data/global_variables/` | [Global Variables](/basic/events-and-quests/global-variables) |
| **Abilities & Effects** | | | |
| `ability` | `AbilityDefinition` | `src/data/abilities/` | [Abilities](/basic/abilities-and-effects/abilities) |
| `effect` | `Effect` | `src/data/effects/` | [Effects](/basic/abilities-and-effects/effects) |
| `skill_tree` | `SkillTree` | `src/data/player_classes/skill_trees/` | [Skill Trees](/basic/abilities-and-effects/skill-trees) |
| `skill_pool` | `SkillPointPool` | `src/data/player_classes/skill_pools/` | [Skill Trees](/basic/abilities-and-effects/skill-trees) |
| **Entities** | | | |
| `npc` | `NPCDefinition` | `src/data/npc/` | [NPCs](/basic/entities/npcs) |
| `npc_template` | `NPCDefinition` | `src/data/npc/templates/` | [NPCs (templates)](/basic/entities/npcs) |
| `player_class` | `PlayerClassDefinition` | `src/data/player_classes/` | [Player Classes](/basic/entities/player-classes) |
| `player_class_template` | `PlayerClassDefinition` | `src/data/player_classes/templates` | [Player Classes (templates)](/basic/entities/player-classes) |
| `character` | `CharacterDefinition` | `src/data/characters/` | [Playable Character](/basic/entities/playable-character) |
| `interactable` | `InteractableDefinition` | `src/data/interactables/` | [Interactables](/basic/entities/interactables) |
| **Behaviors** | | | |
| `faction` | `FactionDefinition` | `src/data/factions/` | [Factions](/basic/behaviors/factions) |
| `conversation` | `Conversation` | `src/data/behaviors/conversations/` | [Conversations](/basic/behaviors/conversations) |
| `combat_script` | `ModularCombatScript` | `src/data/behaviors/combat_scripts/` | [Combat Scripts](/basic/behaviors/combat-scripts) |
| `behavior_script` | `ModularBehaviorScript` | `src/data/behaviors/behavior_scripts/` | [Behavior Scripts](/basic/behaviors/behavior-scripts) |
| **Entity Stats Definitions** | | | |
| `damage_type` | `DamageTypeDefinition` | `src/data/stats/damage_types/` | [Damage Types](/basic/tags-and-groups/damage-types) |
| `school_type` | `SchoolTypeDefinition` | `src/data/stats/school_types/` | [School Types](/basic/tags-and-groups/school-types) |
| `immunity` | `ImmunityDefinition` | `src/data/stats/immunities/` | [Immunities](/basic/tags-and-groups/immunities) |
| `trigger_tag` | `TriggerTagDefinition` | `src/data/stats/trigger_tags/` | [Trigger Tags](/basic/tags-and-groups/trigger-tags) |
| `entity_tag` | `EntityTagDefinition` | `src/data/entity_tags/` | [Entity Tags](/basic/tags-and-groups/entity-tags) |
| `group` | `GroupDefinition` | `src/data/groups/` | [Groups](/basic/tags-and-groups/groups) |
| `status_effect` | `StatusEffectDefinition` | `src/data/stats/status_effects/` | [Status Effects](/basic/abilities-and-effects/status-effects) |
| `stat` | `StatDefinition` | `src/data/stats/` | [Stats](/basic/entity-stats/stats) |
| `stat_group` | `StatGroupDefinition` | `src/data/stats/stat_groups/` | [Stat Groups](/basic/tags-and-groups/stat-groups) |
| `pool` | `PoolDefinition` | `src/data/stats/pools/` | [Pool](/basic/entity-stats/pool) |
| **Items** | | | |
| `item` | `ItemDefinition` | `src/data/items/` | [Items](/basic/items/items) |
| `currency` | `CurrencyDefinition` | `src/data/items/currencies/` | [Currency](/basic/items/currency) |
| `loot_table` | `LootTable` | `src/data/loot_tables/` | [Loot Tables](/basic/items/loot-tables) |
| `recipe` | `CraftingRecipeDefinition` | `src/data/crafting/recipes/` | [Craft Recipes](/basic/items/craft-recipes) |
| `craft_school` | `CraftSchoolDefinition` | `src/data/crafting/schools/` | [Craft Schools](/basic/items/craft-schools) |
| `vendor` | `VendorDefinition` | `src/data/vendors/` | [Vendors](/basic/items/vendors) |
| **Equipment Definitions** | | | |
| `armor_class` | `ArmorClassDefinition` | `src/data/items/armor_classes/` | [Armor Class](/basic/equipment-definitions/armor-class) |
| `weapon_class` | `WeaponClassDefinition` | `src/data/items/weapon_classes/` | [Weapon Class](/basic/equipment-definitions/weapon-class) |
| `equipment_type` | `EquipmentTypeDefinition` | `src/data/items/equipment_types/` | [Equipment Type](/basic/equipment-definitions/equipment-type) |
| `weapon_type` | `WeaponTypeDefinition` | `src/data/items/weapon_types/` | [Equipment Type](/basic/equipment-definitions/equipment-type) |
| `equipment_slot` | `EquipmentSlotDefinition` | `src/data/items/equipment_slots/` | [Equipment Slot](/basic/equipment-definitions/equipment-slot) |
| `quality` | `Quality` | `src/data/items/qualities/` | [Quality](/basic/equipment-definitions/quality) |
| `set_bonus` | `SetBonusDefinition` | `src/data/items/set_bonuses/` | [Set Bonus](/basic/equipment-definitions/set-bonus) |
| `socket` | `SocketDefinition` | `src/data/items/sockets/` | [Socket](/basic/equipment-definitions/socket) |
| **Unique Objects Data** | | | |
| `unique_entity` | `UniqueEntityData` | `src/data/unique_entities/` | [The Unique Object tool](/basic/world/unique-object-tool) |
| `unique_interactable` | `UniqueInteractableData` | `src/data/unique_interactables/` | [The Unique Object tool](/basic/world/unique-object-tool) |
| `unique_encounter` | `UniqueEncounterData` | `src/data/unique_encounters/` | [The Unique Object tool](/basic/world/unique-object-tool) |
| **Regions** | | | |
| `region` | `RegionData` | `src/data/regions/` | [Regions](/basic/world/regions) |
| **UI** | | | |
| `popup` | `PopupData` | `src/data/popups/` | [Popups](/basic/events-and-quests/popups) |

See [Data and the Database](/advanced/data-and-database/) for how the types are loaded, saved and referenced, and [Asset databases](/advanced/data-and-database/asset-databases) for the libraries of animations, audio, VFX, meshes, models and icons, which are not resources of this registry.
