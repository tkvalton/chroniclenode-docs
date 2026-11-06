# Editor: how it is built

**Who this is for.** You do not need this section to *use* the editor, or to make a game with it (the Basic chapters cover that). It is for developers who want to **add to the editor or change it**: a new tab in the Database editor, a new kind of property field, a new dialog, a tool in the 3D viewport. If you only want to add your own abilities, effects, items or interface scenes, see [Extending the toolkit](/advanced/extending) instead.

The editor side of the toolkit is an `EditorPlugin` (`plugin.gd`, "Unified Game Editor") that adds a main-screen **Database** editor, placement buttons in the 3D viewport (NPCs, interactables, items, encounters, volumes) and a **Unique Object** panel to the bottom dock. All of its code is in `addons/chroniclenode/editor_components/`. None of it runs in an exported game.

The pages after this one are the class reference, grouped by what the class is for. This page explains how the parts fit.

## The Database editor

`GameEditorMain` (`editor_components/main/game_editor_main.gd`) is the scene of the main screen. It has a drop-down of the **categories** (World, Events & Quests, Entities, Abilities & Effects, Behaviors, Entity Stats, Types & Groups, Items, Equipment Definitions, Assets, Game Settings), a **toolbar** (`MainToolbar`, which lists the tabs of the category in `toolbar_configs`) and one editor scene per tab, all children of one container where only the current one is visible. Adding a tab means: a scene and script in `editors/<area>/`, an entry in `toolbar_configs`, a `%` node in `game_editor_main.tscn`, its `@onready` variable, its place in the panel list of its category, its branch in `_switch_to_<category>_view` and in the function that returns the current editor, a link in `docs_links.gd` (the "?" button), and the `setup_managers` call. A test (`editor_tabs_check.gd`) walks every tab and fails if one is missing a part.

## Resource editors

Most tabs edit one **database type** (a list on the left, the properties on the right). They extend [`ResourceEditor`](/advanced/editor/base/resource-editor), which provides the list (`EditorFilesList`), **Add**, delete, duplicate and rename, the name, description and icon fields, saving as you change and a `mark_resource_modified()`. A subclass says what it edits and how:

| Override | For |
|---|---|
| `_configure_for_resource_type()` | The database type (`resource_type = "proficiency"`), the title of the create dialog |
| `_load_custom_fields(resource)` | Fill your own controls from the selected resource |
| `_apply_custom_fields_to_resource()` | Write them back (many editors write as they change and leave it empty) |
| `_copy_custom_fields(original, duplicate)` | What *Duplicate* copies |

Many editors build their controls **in code** by reflecting over the resource's exports (`get_property_list()`), using the helpers in `editor_components/factory/` (`PropertyUIFactory`, `PropertyControlNodeFactory`, and `StatPropertyFields` for the stat system). A name such as `ability_id` or `item_id` is mapped to its database by `PropertySelectorRegistry`, which gives the field a picker; lists of ids named `*_ids` get a checklist or a catalog.

## Catalogs and dialogs

[`ListCatalog`](/advanced/editor/catalogs/list-catalog) is the searchable picker that opens when you press **Select...** or **Add...** for an ability, an item, an NPC and so on (`load_objects("entities")`), with `GridCatalog`, `IconCatalog` and `MeshCatalog` for pictures. `DialogManager` owns the shared dialogs (the unified resource dialog for rewards, requirements, conditions, triggers, actions and effects; the catalogs; the type selection dialogs) so an editor asks for one with `dialog_manager.setup_dialog(...)` instead of building it. The unified dialog scans the folder of its type (`unified_resource_dialog.gd` lists the folders), so **a new reward, requirement, condition, trigger or action class in the right folder appears by itself**.

## The tools in the 3D viewport

[`PlacementTool`](/advanced/world/add-object), [`UniqueObjectInspector`](/advanced/world/editor-tools/unique-object-inspector) and [`EncounterReactionsEditor`](/advanced/world/editor-tools/encounter-reactions-editor) (see [Add Object](/advanced/world/add-object) and [the Unique Object tool](/advanced/world/unique-object-tool)), and the inspector plugins that show a unique's fields in Godot's own inspector.

## Documentation links

`DocsLinks` (`utility/docs_links.gd`) maps a tab's view name to a page of the documentation site. The "?" button of the editor opens it. `docs_links_check.gd` checks that every tab has one.

## The classes

### Editor base

<!-- classes:editor/base -->
| Class | What it is |
|---|---|
| [EditorFileList](/advanced/editor/base/editor-file-list) | Universal file list that works with any resource type via ResourceManager Supports both "browse all files" and "open specific files" patterns |
| [GameEditorMainView](/advanced/editor/base/game-editor-main-view) | Main container for the unified game editor system |
| [MainToolbar](/advanced/editor/base/main-toolbar) | Adaptive toolbar that changes buttons based on current category |
| [ResourceEditor](/advanced/editor/base/resource-editor) | Base resource editor - handles common functionality for all resource types |
<!-- /classes -->

### Editors by area

#### Abilities and effects

<!-- classes:editor/abilities -->
| Class | What it is |
|---|---|
| [AbilityEditor](/advanced/editor/abilities/ability-editor) | Ability Editor for managing ability resources - refactored to use ResourceEditor base |
| [ComboStepsEditor](/advanced/editor/abilities/combo-steps-editor) | The editor of the steps of a Combo ability: a tree of steps, each with its own settings, changed with Add Step, Remove Step and a context menu. |
| [CompositeEffectProperties](/advanced/editor/abilities/composite-effect-properties) | Property panel for CompositeEffect - handles child effects management |
| [ConnectionCreationDialog](/advanced/editor/abilities/connection-creation-dialog) | Dialog for creating new skill node connections with advanced options and pre-selection support |
| [EffectDynamicPropertyPanel](/advanced/editor/abilities/effect-dynamic-property-panel) | Dynamic property panel for Effect editing Replaces manual property components with automatic generation Shows properties in titled sections based on inheritance hierarchy |
| [EffectEditor](/advanced/editor/abilities/effect-editor) | Effect Editor for managing effect resources - refactored to use ResourceEditor base |
| [EffectPropertiesBase](/advanced/editor/abilities/effect-properties-base) | Base class for all effect property UI panels Handles common functionality and provides interface for specific effect properties |
| [EffectsTreeEditor](/advanced/editor/abilities/effects-tree-editor) | Reusable tree-based editor for managing collections of effects. |
| [SkillConnectionPropertiesEditor](/advanced/editor/abilities/skill-connection-properties-editor) | Scene-based editor for skill connection properties |
| [SkillNodeManager](/advanced/editor/abilities/skill-node-manager) | Handles skill node operations and type conversions |
| [SkillNodePropertiesEditor](/advanced/editor/abilities/skill-node-properties-editor) | Scene-based editor for skill node properties with unified reward management |
| [SkillNodeVisual](/advanced/editor/abilities/skill-node-visual) | Visual representation of a skill node - uses scene-based UI |
| [SkillPointPoolsManagerDialog](/advanced/editor/abilities/skill-point-pools-manager-dialog) | Dialog for managing skill point pools |
| [SkillTreeCanvas](/advanced/editor/abilities/skill-tree-canvas) | Visual canvas for editing skill trees with visual node components |
| [SkillTreeEditor](/advanced/editor/abilities/skill-tree-editor) | Skill tree visual editor - creates and edits skill trees with node/connection management |
| [TargetStrategyDynamicPanel](/advanced/editor/abilities/target-strategy-dynamic-panel) | Dynamic property panel for TargetStrategy editing. |
| [TierEffectsEditor](/advanced/editor/abilities/tier-effects-editor) | The editor of the tiers of a Power-up (charge) ability: a tree of tiers, each a charge threshold with its effects, changed with Add Tier, Remove Tier and a context menu. |
| [ToggleGroupsResource](/advanced/editor/abilities/toggle-groups-resource) | Resource class for managing toggle groups used by abilities Provides centralized storage and management of toggle group names |
| [UseStrategyDynamicPanel](/advanced/editor/abilities/use-strategy-dynamic-panel) | Dynamic property panel for UseStrategy editing. |
<!-- /classes -->

#### Assets

<!-- classes:editor/assets -->
| Class | What it is |
|---|---|
| [AnimationDatabaseEditor](/advanced/editor/assets/animation-database-editor) | The editor of the Animations tab (Assets &gt; Animations): the animation packages of the entities as a tree, the core animation map and the validation of the library. |
| [AnimationFolderContextMenu](/advanced/editor/assets/animation-folder-context-menu) | Context menu scene for animation folder operations |
| [AnimationPackageTree](/advanced/editor/assets/animation-package-tree) | Specialized tree for managing animation packages with the new simplified structure |
| [AssetPreviewHeader](/advanced/editor/assets/asset-preview-header) | The top of the info panel of an Assets editor: the **picture** of the selected file, its **name**, a line about it (its kind) and its path. |
| [AudioDatabaseEditor](/advanced/editor/assets/audio-database-editor) | The editor of the Audio tab (Audio &gt; Sound Library): the sound effects, music and ambience of the audio library as a tree, with a search bar, an import button, a player to listen to a sound, and the checks of the library. |
| [BuildSizeEditor](/advanced/editor/assets/build-size-editor) | The Build Size tab of the Assets: scans the project and shows what it weighs and where it could weigh less (BuildSizeReport): by kind and folder, the largest files, duplicates, oversize textures, sounds with a smaller import setting, and the files nothing uses. |
| [CorePackageEditor](/advanced/editor/assets/core-package-editor) | Dynamic editor for AnimationCoreMap properties Automatically builds UI based on property structure and available animations |
| [FoliageEditor](/advanced/editor/assets/foliage-editor) | The Foliage tab (Assets &gt; Foliage): the files of the two folders of the foliage library as a tree with a picture of each, and the entry of the file you select. |
| [IconDatabaseEditor](/advanced/editor/assets/icon-database-editor) | The editor of the Icons tab (Assets &gt; Icons): every icon of the icon library as a grid, by category, with a search bar, an import button and the numbering of new icons. |
| [MeshDatabaseEditor](/advanced/editor/assets/mesh-database-editor) | The editor of the Meshes tab (Assets &gt; Meshes): the equipment, facial and material meshes of the mesh library as a tree, with a search bar, an import button, the settings of the selected mesh (its per-surface materials) and the checks of the library. |
| [ModelSceneDatabaseEditor](/advanced/editor/assets/model-scene-database-editor) | The editor of the Model Scenes tab (Assets &gt; Model Scenes): the skeleton scenes of entities and the scenes of interactable objects, each as a list with a search bar and a button to create a new one. |
| [VFXDatabaseEditor](/advanced/editor/assets/vfx-database-editor) | The editor of the VFX tab (Assets &gt; VFX): the visual effects of the VFX library as a tree by type, with a search bar, an import button and the information of the selected effect. |
| [WeaponProfileEditor](/advanced/editor/assets/weapon-profile-editor) | The Weapon Profiles tab (Entity Assets &gt; Weapon Profiles): the list of the profiles on the left, the settings on the right in a container for each group (Profile, Folders, Animation packs, Used by, Old tags, Warnings). |
| [WorldAssetsEditor](/advanced/editor/assets/world-assets-editor) | The World Assets tab (Assets &gt; World Assets): the scenes of `res://src/data/world_assets/` that the Assets button of the placement tool puts in the world (houses, trees, props) as a list with a picture of each, a category list (a category is a folder; New category makes one), Import (copies scenes and models into a category) and a 3D preview of the selected scene you can turn around. |
<!-- /classes -->

#### Behaviors

<!-- classes:editor/behavior -->
| Class | What it is |
|---|---|
| [BaseAttackLogicEditor](/advanced/editor/behavior/base-attack-logic-editor) | Base class for attack logic editors - provides shared functionality |
| [CombatPhaseEditor](/advanced/editor/behavior/combat-phase-editor) | Editor for managing BossPhase resources in a PhaseSystem |
| [CombatReactionEditor](/advanced/editor/behavior/combat-reaction-editor) | Editor for managing CombatReaction resources in a Tree view |
| [ConversationChatGraphNode](/advanced/editor/behavior/conversation-chat-graph-node) | GraphNode representation of a ConversationChat Uses DialogManager.setup_dialog() for guaranteed clean connections |
| [ConversationDiceRollGraphNode](/advanced/editor/behavior/conversation-dice-roll-graph-node) | Graph node for dice roll / skill check |
| [ConversationEditor](/advanced/editor/behavior/conversation-editor) | Conversation Editor for managing conversations Embeds the ConversationGraphEditor for visual conversation editing |
| [ConversationGraphEditor](/advanced/editor/behavior/conversation-graph-editor) | Graph editor for conversation system with flat response structure Responses stored in conversation.conversation_responses, referenced by ID |
| [ConversationResponseGraphNode](/advanced/editor/behavior/conversation-response-graph-node) | GraphNode representation of a ConversationResponse Uses DialogManager.setup_dialog() for guaranteed clean connections |
| [ConversationStartGraphNode](/advanced/editor/behavior/conversation-start-graph-node) | Start point node for conversation system Manages multiple starting chat options with requirement priorities |
| [FactionEditor](/advanced/editor/behavior/faction-editor) | Faction Editor for managing faction definitions |
| [ModularBehaviorScriptEditor](/advanced/editor/behavior/modular-behavior-script-editor) | Modular Behavior Script Editor with separate Tree classes for management |
| [ModularCombatScriptEditor](/advanced/editor/behavior/modular-combat-script-editor) | Combat Script Editor with Phase System Integration |
| [PriorityAttackLogicEditor](/advanced/editor/behavior/priority-attack-logic-editor) | Editor for managing PriorityAttackLogic - actions sorted by priority |
| [ReactionsTree](/advanced/editor/behavior/reactions-tree) | Tree control for managing behavior reactions |
| [RequirementGraphNode](/advanced/editor/behavior/requirement-graph-node) | GraphNode that holds multiple requirements as a visual "gate" Uses DialogManager.setup_dialog() for guaranteed clean connections |
| [SchedulesTree](/advanced/editor/behavior/schedules-tree) | Tree control for managing behavior schedules and their conditions |
| [TacticalAttackLogicEditor](/advanced/editor/behavior/tactical-attack-logic-editor) | Editor for managing TacticalAttackLogic - dynamic action RPG combat AI |
| [TasksTree](/advanced/editor/behavior/tasks-tree) | Tree control for managing behavior tasks within a selected schedule |
| [TimelineAttackLogicEditor](/advanced/editor/behavior/timeline-attack-logic-editor) | Editor for managing TimelineAttackLogic - scripted sequence of actions at specific times |
<!-- /classes -->

#### Entities

<!-- classes:editor/entities -->
| Class | What it is |
|---|---|
| [ActionBarLayoutFields](/advanced/editor/entities/action-bar-layout-fields) | The planned action bar of a player class: for each slot the ability that belongs there and whether the player may change it. |
| [CharacterEditor](/advanced/editor/entities/character-editor) | CharacterEditor for managing CharacterDefinition resources CharacterDefinition inherits EntityDefinition for visual/audio and links to PlayerClassDefinition |
| [EmotesEditor](/advanced/editor/entities/emotes-editor) | The Emotes editor (the EmoteDefinition database): the commands a player types (/wave) and the library that the lines of NPCs, events and objects can pick from. |
| [EntityAbilitiesEditor](/advanced/editor/entities/entity-abilities-editor) | Editor for EntityDefinition ability properties - manages auto-attack and ability lists Now uses ListCatalog for ability selection with proper type filtering |
| [InteractableDefinitionEditor](/advanced/editor/entities/interactable-definition-editor) | Editor for InteractableDefinition resources |
| [InteractionEditor](/advanced/editor/entities/interaction-editor) | Editor for a single Interaction instance Combines category/type selection with dynamic property editing |
| [MountEditor](/advanced/editor/entities/mount-editor) | Mounts Editor: the mounts and vehicles of the game (Entities &gt; Mounts). |
| [NpcEditor](/advanced/editor/entities/npc-editor) | Entity Editor for managing NPCDefinitions resources |
| [PlayerClassEditor](/advanced/editor/entities/player-class-editor) | PlayerClassEditor for managing PlayerClassDefinition resources |
| [PlayerClassLevelRewardEditor](/advanced/editor/entities/player-class-level-reward-editor) | Editor for PlayerClassDefinition level rewards only Experience requirements are now managed in GameplayConfig |
| [SkillTreeListEditor](/advanced/editor/entities/skill-tree-list-editor) | The list of skill trees of something that can hold trees (a character, and later a profession or a faction): the trees are listed, Add picks one from the catalog and Remove takes the selected one out. |
| [StarterEquipmentEditor](/advanced/editor/entities/starter-equipment-editor) | The starting equipment of a player class, or the equipment override of a character: one row for each equipment slot, with the item in it, a button to choose another, one to see it and one to take it out. |
| [StatsDataEditor](/advanced/editor/entities/stats-data-editor) | The editor of a StatsData: the pools (as cards), the stats (a table of the ones that are set, with what the template or the definition says, how they grow and what they are at a level), the core stats, the immunities and, folded away, the level growth. |
| [TemplateSection](/advanced/editor/entities/template-section) | The Template section of the NPC and interactable editors: which template the entity follows (and what it changed on top of it), or, when the resource is a template, who uses it. |
<!-- /classes -->

#### Equipment definitions

<!-- classes:editor/equipment-definitions -->
| Class | What it is |
|---|---|
| [ArmorClassDefinitionEditor](/advanced/editor/equipment-definitions/armor-class-definition-editor) | Armor Class Definition Editor for managing armor class definitions: the name, description, icon and color are the base editor's. |
| [EquipmentSlotDefinitionEditor](/advanced/editor/equipment-definitions/equipment-slot-definition-editor) | Equipment Slot Definition Editor for managing equipment slot definitions |
| [EquipmentTypeDefinitionEditor](/advanced/editor/equipment-definitions/equipment-type-definition-editor) | Equipment Type Definition Editor for managing equipment and weapon type definitions |
| [QualityEditor](/advanced/editor/equipment-definitions/quality-editor) | Quality Editor - handles quality definitions using the unified ResourceEditor base |
| [SetBonusDefinitionEditor](/advanced/editor/equipment-definitions/set-bonus-definition-editor) | Set Bonus Definition Editor for managing equipment set bonus definitions |
| [SocketDefinitionEditor](/advanced/editor/equipment-definitions/socket-definition-editor) | Socket Definition Editor for managing socket type definitions |
| [WeaponClassDefinitionEditor](/advanced/editor/equipment-definitions/weapon-class-definition-editor) | Weapon Class Definition Editor for managing weapon class definitions |
| [WeaponTypeProperties](/advanced/editor/equipment-definitions/weapon-type-properties) | Conditional component for weapon-specific properties in EquipmentTypeDefinitionEditor |
<!-- /classes -->

#### Events and quests

<!-- classes:editor/events -->
| Class | What it is |
|---|---|
| [EventEditor](/advanced/editor/events/event-editor) | Event Editor using the new ResourceManager and EditorFileList system |
| [EventTreeBuilder](/advanced/editor/events/event-tree-builder) | Event tree builder with triggers, conditions, and actions |
| [GlobalVariablesEditor](/advanced/editor/events/global-variables-editor) | The editor of the Global Variables tab (Events &amp; Quests &gt; Global Variables): the list of variables of the game with their types and starting values, with Add and Refresh buttons. |
| [QuestEditor](/advanced/editor/events/quest-editor) | Quest Editor using the new ResourceManager and EditorFileList system |
| [QuestLineEditor](/advanced/editor/events/quest-line-editor) | QuestLine Editor using the new ResourceManager and EditorFileList system |
| [QuestLineTreeBuilder](/advanced/editor/events/quest-line-tree-builder) | QuestLine tree builder with quest steps and on start/complete actions |
| [QuestTreeBuilder](/advanced/editor/events/quest-tree-builder) | Quest tree builder with objectives and on start/complete actions |
| [TreeBuilder](/advanced/editor/events/tree-builder) | Base class for all tree builders with shared functionality |
| [TreeBuilderUtils](/advanced/editor/events/tree-builder-utils) | Utility functions shared between tree builders |
<!-- /classes -->

#### Items

<!-- classes:editor/items -->
| Class | What it is |
|---|---|
| [AffixesEditor](/advanced/editor/items/affixes-editor) | Affixes Editor: the bonuses an item can roll ("Heavy", "of the Monkey", a silent +Crit). |
| [CraftingRecipeEditor](/advanced/editor/items/crafting-recipe-editor) | CraftingRecipe Editor - handles crafting recipe definitions using the unified ResourceEditor base |
| [CraftSchoolEditor](/advanced/editor/items/craft-school-editor) | CraftSchool Editor - handles craft school definitions using the unified ResourceEditor base |
| [CurrencyDefinitionEditor](/advanced/editor/items/currency-definition-editor) | Currency Definition Editor for managing currency definitions |
| [EquipmentGenerationFields](/advanced/editor/items/equipment-generation-fields) | The "Generation" section of the equipment editor: what an item rolls when it is generated (loot, rewards, vendors). |
| [InventoryStyleEditor](/advanced/editor/items/inventory-style-editor) | The fields of an inventory style: how items take space, where the capacity comes from, weight, and what happens above the limit (a hard limit, or encumbrance with effects made in the Effects editor). |
| [ItemConsumableEditor](/advanced/editor/items/item-consumable-editor) | Item Consumable Editor - handles ItemDefinitionConsumable specific properties Updated for Effect-based system |
| [ItemEditor](/advanced/editor/items/item-editor) | Base Item Data Editor for managing basic item properties with sub-editors |
| [ItemEnchantScrollEditor](/advanced/editor/items/item-enchant-scroll-editor) | Item Enchant Scroll Editor - handles ItemDefinitionEnchantScroll specific properties Single enchant system with duration control and equipment targeting |
| [ItemEquipmentEditor](/advanced/editor/items/item-equipment-editor) | Item Equipment Editor - handles ItemDefinitionEquipment specific properties Enhanced with better socket system integration and improved UI organization |
| [ItemEquipmentMeshEditor](/advanced/editor/items/item-equipment-mesh-editor) | Dedicated editor for equipment mesh assignments Handles all mesh, material, and visual customization for equipment items Supports tag-based modular equipment mesh data |
| [ItemMaterialEditor](/advanced/editor/items/item-material-editor) | Item Material Editor - handles ItemDefinitionMaterial specific properties For crafting components, vendor trash, and material resources |
| [ItemOnUseEditor](/advanced/editor/items/item-on-use-editor) | Item On-Use Editor - handles ItemDefinitionOnUse specific properties For items that function like abilities with charge-based consumption |
| [ItemQuestEditor](/advanced/editor/items/item-quest-editor) | Item Quest Editor - handles ItemDefinitionQuest specific properties Designed to be attached as a scene to ItemEditor |
| [ItemReadableEditor](/advanced/editor/items/item-readable-editor) | Item Readable Editor - handles ItemDefinitionReadable specific properties For items that display text content when used (books, scrolls, letters, lore) |
| [ItemSocketableEditor](/advanced/editor/items/item-socketable-editor) | Item Socketable Editor - handles ItemDefinitionSocketable specific properties |
| [ItemWeaponEditor](/advanced/editor/items/item-weapon-editor) | Item Weapon Editor - handles ItemDefinitionEquipmentWeapon specific properties Updated with weapon damage type support |
| [LootLevelSourceFields](/advanced/editor/items/loot-level-source-fields) | The rows that edit a LootLevelSource slot of a resource (a loot table, a loot rule): where the item level of drops comes from, with an offset and a lowest and highest level. |
| [LootRulesFields](/advanced/editor/items/loot-rules-fields) | The editor of the loot rules of an NPC, an object or a placed one: for each rule the trigger (when it rolls), the loot table (a shared one, or one of its own that is edited here), where the item level of the drops comes from, and whether the one who gets the loot changes it. |
| [LootTableEditor](/advanced/editor/items/loot-table-editor) | LootTable Editor - handles loot table definitions using the unified ResourceEditor base |
| [LootTableInlineFields](/advanced/editor/items/loot-table-inline-fields) | A compact editor of one loot table, for the table a loot rule has of its own ("this guard carries the key"): the entries as rows (an item, a currency or another table, with its quantity, weight and chance), what always drops, what is rolled, and the number of rolls. |
| [SkillFields](/advanced/editor/items/skill-fields) | Builders of the editor rows for the parts of skills and trainers that several editors share: lists of requirements and rewards, the tiers of a proficiency or a profession, their specializations, and the cost of a lesson. |
| [TrainerEditor](/advanced/editor/items/trainer-editor) | Trainers Editor: the lessons that NPCs and objects teach (a TrainerInteraction points at one of these). |
| [VendorEditor](/advanced/editor/items/vendor-editor) | Vendor Editor - handles vendor definitions using the unified ResourceEditor base |
<!-- /classes -->

#### Settings

<!-- classes:editor/settings -->
| Class | What it is |
|---|---|
| [CharacterCreationConfigEditor](/advanced/editor/settings/character-creation-config-editor) | Editor for CharacterCreationSettings resource with tab-based UI |
| [ChatEditor](/advanced/editor/settings/chat-editor) | The Chat page of the Game Settings: the channels of the message manager (name, colour, text of a line, flags) and how much it remembers. |
| [CollisionLayerEditor](/advanced/editor/settings/collision-layer-editor) | Collision Layer Configuration Editor Integrated into the Game Settings category |
| [ConfigEditor](/advanced/editor/settings/config-editor) | Base class for configuration editors that dynamically build UI from exported properties Provides common functionality for GameplayConfigEditor and SettingsEditor |
| [DeathCurrencyLossEditor](/advanced/editor/settings/death-currency-loss-editor) | The editor of the money a player loses on death (Gameplay Config &gt; Combat &gt; Death &amp; Revival): a list of rules, each with a currency (or every currency), how the amount is worked out (a percentage, an amount lost, or the amount that is kept), and whether the money lies on the ground as coins. |
| [GameplayConfigEditor](/advanced/editor/settings/gameplay-config-editor) | Editor for GameplayConfig resource with tab-based UI |
| [InterfaceOverviewPanel](/advanced/editor/settings/interface-overview-panel) | Under the UI settings: whether each UI scene has the class its root must have, and what the in-game scene holds at a glance: the HUD elements, the interaction panels and the UI panels with their panel key numbers, with a warning for two panels that have the same key. |
| [ItemBudgetEditor](/advanced/editor/settings/item-budget-editor) | The editor of "Item Budget Formula" in the Gameplay Config (General &gt; Item Generation): the formula that turns the item level into the stat budget of a generated item. |
| [KillExperienceEditor](/advanced/editor/settings/kill-experience-editor) | The editor of "Kill Experience Mode" in the Gameplay Config (Leveling): how much experience a defeated NPC gives. |
| [KillFalloffEditor](/advanced/editor/settings/kill-falloff-editor) | The editor of "Kill Experience Falloff" in the Gameplay Config (Leveling): an NPC under the level of the party gives less experience. |
| [LevelGapEditor](/advanced/editor/settings/level-gap-editor) | The editor of "Level Gap Mode" in the Gameplay Config (Hit Rules): how the levels of the attacker and the target change the chance to hit. |
| [LocalizationEditor](/advanced/editor/settings/localization-editor) | The Localization tab: the languages of the game, what is translated, the tables made from the data, a table editor to write the translations, and the CSV files that carry them in and out. |
| [LogicSettingsControl](/advanced/editor/settings/logic-settings-control) | The settings of the player controller or of the camera, as they appear in the Controller and Camera tabs of the Gameplay Config: a **Type** dropdown (the logic classes the toolkit has) and the settings of that type below it, in sections like the rest of the Gameplay Config. |
| [SettingsEditor](/advanced/editor/settings/settings-editor) | Dynamic editor for Settings resource Automatically extracts doc comments as tooltips and manages player accessibility |
| [SettingsSection](/advanced/editor/settings/settings-section) | A section of a settings editor, built like the sections of the scene editors: a FoldableContainer (its title is the name of the section), a Panel behind it, a MarginContainer and a VBoxContainer for the rows. |
| [TerrainConfigEditor](/advanced/editor/settings/terrain-config-editor) | The Terrain Settings tab (Game Settings): the TerrainConfig of the project. |
| [TerrainLevelsEditor](/advanced/editor/settings/terrain-levels-editor) | The editor of "Presets" in the Terrain Settings: what Low, Medium, High and Ultra terrain detail mean in this game. |
| [UISettingsEditor](/advanced/editor/settings/ui-settings-editor) | Editor for UISettingsConfig resource |
<!-- /classes -->

#### Stats

<!-- classes:editor/stats -->
| Class | What it is |
|---|---|
| [CalculationList](/advanced/editor/stats/calculation-list) | Displays all CalculationModifierStatEffects affecting a calculation type Provides intuitive priority management with drag-and-drop reordering |
| [CalculationsEditor](/advanced/editor/stats/calculations-editor) | Main calculations editor - manages priority ordering for all calculation types |
| [FormulaGraph](/advanced/editor/stats/formula-graph) | A small line graph of a formula: stat points (or levels) along the bottom, the value it gives up the side. |
| [GrowthEditor](/advanced/editor/stats/growth-editor) | "Level Growth" section of the stat and pool editors: the formula and optional diminishing returns that turn the levels gained (level - 1) into growth, plus a ceiling and a small table of the result at a few levels. |
| [GrowthOverridesEditor](/advanced/editor/stats/growth-overrides-editor) | The list of growth entries of a StatsData (an NPC's Level Growth Overrides) or of a GrowthProfile: one growth editor for each stat or pool that grows differently, a Remove button for each, and a picker to add one more. |
| [GrowthProfilePicker](/advanced/editor/stats/growth-profile-picker) | A dropdown of the growth profiles of the project. |
| [GrowthProfilesEditor](/advanced/editor/stats/growth-profiles-editor) | Growth Profiles Editor: how a kind of entity grows with its level (Heavy, Caster, Minion, Elite ...). |
| [ImmunityDefinitionsEditor](/advanced/editor/stats/immunity-definitions-editor) | Immunity Definitions Editor for managing immunity definition resources |
| [PoolStatsEditor](/advanced/editor/stats/pool-stats-editor) | Pool Stats Editor for managing pool definitions with damage type absorption |
| [ProficienciesEditor](/advanced/editor/stats/proficiencies-editor) | Proficiencies Editor: the skills a player gets better at by use or training (swords, heavy armor, lockpicking). |
| [StatClassScanner](/advanced/editor/stats/stat-class-scanner) | Finds the classes that can fill a slot of a stat effect: the formulas, the diminishing-returns curves and the conditions. |
| [StatEditor](/advanced/editor/stats/stat-editor) | Unified Stat Editor for managing stat definitions with composable StatEffect system |
| [StatEffectPropertyEditor](/advanced/editor/stats/stat-effect-property-editor) | Dynamic property editor for StatEffect instances Creates appropriate UI controls based on effect type |
| [StatGroupsEditor](/advanced/editor/stats/stat-groups-editor) | Stat Groups Editor: the groups stats can be in (Primary, Secondary, Offensive, Defensive, Utility ...). |
| [StatPropertyFields](/advanced/editor/stats/stat-property-fields) | Builders for the editor rows that are shared by the stat effect editor, the growth editor, the effect editor and the trigger tag / entity tag tabs: numbers, switches, enums, database pickers, lists of ids, trigger rules, conditions, and a reflection that shows the exports of any resource. |
| [StatusEffectsEditor](/advanced/editor/stats/status-effects-editor) | Status Effect Editor for managing status effect definitions |
| [TriggerTagsEditor](/advanced/editor/stats/trigger-tags-editor) | Trigger Tags Editor: the tags a calculation can set on a hit (critical strike, dodge, block, multistrike, armor penetration). |
<!-- /classes -->

#### World

<!-- classes:editor/world -->
| Class | What it is |
|---|---|
| [AlbumTrackForm](/advanced/editor/world/album-track-form) | The form of one track of a Music Album (an AlbumTrack): the file (chosen in the track window of the audio library), its weight and its volume. |
| [ConfigEditorBase](/advanced/editor/world/config-editor-base) | The base of the editors of the world configs (Time, Sun, Sky, Environment, Weather), built like the other editors of the toolkit: a scene with the list of the configs on the left (the shared EditorFileList with its New button) and the settings on the right in a container for each group. |
| [ConfigForm](/advanced/editor/world/config-form) | A small form made of field components (ConfigField) for a resource that is part of another one: an item of a list (an exposed effect of a weather). |
| [DetileSlider](/advanced/editor/world/detile-slider) | A slider with its number written next to it: the control of the detiling numbers (the Terrain Textures editor and the Detiling panel of the terrain tool). |
| [EnvironmentConfigEditor](/advanced/editor/world/environment-config-editor) | The Environment tab (World &gt; Environment): the list of the environment configs on the left, the settings on the right in a container for each group (Tonemap, Fog, Sun Light, Camera, Colour Grade ...). |
| [ResourceListEditor](/advanced/editor/world/resource-list-editor) | A list of resources edited in place: a container for each item (titled with a line that says what it is) with buttons to move and remove it and a form for its fields, and an Add button below. |
| [ShelterWeatherSoundForm](/advanced/editor/world/shelter-weather-sound-form) | The form of one weather sound of a shelter profile (a ShelterWeatherSound): the kind of weather, the track that plays inside and its volume. |
| [SkyConfigEditor](/advanced/editor/world/sky-config-editor) | The Sky tab (World &gt; Sky): the list of the sky configs on the left, the settings on the right in a container for each group. |
| [SoundAlbumEditor](/advanced/editor/world/sound-album-editor) | The Music Albums tab (Audio &gt; Music Albums): the list of the albums on the left, the settings on the right in a container for each group (Details, Album, Tracks) and the warnings. |
| [SpawnTablesEditor](/advanced/editor/world/spawn-tables-editor) | The Spawn Tables editor (the SpawnTableDefinition database, World &gt; Spawn Tables): a name, a description and the lines of the table. |
| [SunConfigEditor](/advanced/editor/world/sun-config-editor) | The Sun tab (World &gt; Sun): the list of the sun configs on the left, the settings on the right in a container for each group (Day Night Cycle, Static Sun, Day Night Timing, Sun Direction). |
| [TerrainDetilePreview](/advanced/editor/world/terrain-detile-preview) | The preview of the Detiling section of the Terrain Textures editor: the albedo of the texture repeated over three squares, as it is (the repeats line up), with hex tiling (what the ground shows near the camera) and with the second look (what it shows far away), drawn by the same code as the ground (terrain_hex.gdshaderinc). |
| [TerrainTextureEditor](/advanced/editor/world/terrain-texture-editor) | The Terrain Textures editor (the TerrainTextureDefinition database): the library a terrain is painted from. |
| [TimeConfigEditor](/advanced/editor/world/time-config-editor) | The Time tab (World &gt; Time): the list of the time configs on the left, the settings on the right in a container for each group (Day Length, Starting Time). |
| [UniquesDatabaseEditor](/advanced/editor/world/uniques-database-editor) | The editor of the Uniques tab (World &gt; Uniques): lists the placed NPCs and objects of every world, filtered by kind, world and a search bar, and shows the unique that is selected. |
| [WeatherEditor](/advanced/editor/world/weather-editor) | The Weather tab of the World group: the list of the weathers on the left, the settings in the middle in a container for each group (Look, Wind, Ground Wetness, Ground Cover, Sky and Light, Fog) and the list of Exposed Effects, and on the right a live preview (the weather in a small world, with a slider for the intensity and one for the time of day) and the warnings of the weather. |
| [WeatherEffectEntryForm](/advanced/editor/world/weather-effect-entry-form) | The form of one exposed effect of a weather (a WeatherEffectEntry): the effect (a drop-down of the effects of the project), how the weather gives it, how often (when it is refreshed) and who gets it. |
| [WeatherPreview](/advanced/editor/world/weather-preview) | The preview of the Weather tab: a small world in its own viewport (a ground with a hut with a roof, trees, rocks and a pole to see the weather against) with the default sky, sun and environment of the project, and the weather laid on it: its particles at the intensity of the slider, the sky, fog and light it changes (WeatherLook), the wind it blows, and a ground that gets wet and covered. |
| [WeatherTableEditor](/advanced/editor/world/weather-table-editor) | The Weather Tables tab (World Configs &gt; Weather Tables): the list of the tables on the left, the settings on the right in a container for each group (Details, Weathers) and the warnings. |
| [WeatherTableEntryForm](/advanced/editor/world/weather-table-entry-form) | The form of one line of a weather table (a WeatherTableEntry): the weather, its weight and the two times it lasts. |
| [WorldDatabaseEditor](/advanced/editor/world/world-database-editor) | The editor of the Worlds tab (World &gt; Worlds): lists the world scenes with a search bar and a category filter, and edits the properties of the selected world (loading screen, persistence, level, audio, time, sun, sky and weather). |
| [WorldGroundSection](/advanced/editor/world/world-ground-section) | The **Ground weather** section of the Worlds editor: how fast the ground of this world gets wet and dries, how fast the snow builds and melts, and the tint of the ground (a season). |
| [WorldZonesSection](/advanced/editor/world/world-zones-section) | The **Zones** section of the Worlds editor: the named places of ONE world (Elderwood, its sub-zone The Old Mill, the Sunken Caves ...) and the default zone of the world. |
<!-- /classes -->

### Viewport tools

<!-- classes:editor/viewport-tools -->
| Class | What it is |
|---|---|
| [AudioProfileBox](/advanced/editor/viewport-tools/audio-profile-box) | Everything an audio profile holds, for the Unique Object panel: a menu of presets (Cave, Indoors, Underwater... |
| [BehaviorCheck](/advanced/editor/viewport-tools/behavior-check) | Phase 4 of the Behaviour tab: what the NPC would really do with a schedule. |
| [BehaviorEditing](/advanced/editor/viewport-tools/behavior-editing) | What the Behaviour tab does to a behaviour script, apart from the editor: the handles on the points of the tasks (a patrol point, the place of a move, the centre and the radius of a wander), dragging one, adding a point or a task with a click on the ground, a copy of a script for one NPC, and keeping what a change did as one step of Undo (a script is captured before and restored by Undo). |
| [BehaviorGizmoPlugin](/advanced/editor/viewport-tools/behavior-gizmo-plugin) | Draws the behaviour of the selected NPC in the 3D viewport: for each schedule of its behaviour script a route with arrows (patrol points, the places it walks to), the circle it wanders in, and lines to the people and objects it talks to, uses or follows. |
| [BehaviorPanel](/advanced/editor/viewport-tools/behavior-panel) | The Behaviour tab: what the NPC selected in the 3D viewport does, and the place to change it. |
| [BehaviorRoute](/advanced/editor/viewport-tools/behavior-route) | The map of a behaviour script, without any editor object: what each task is on the ground (a route, a point, an area, a link to a person or an object), the lines to draw for it, and the texts the Behaviour tab shows (a title and a summary of a task, the kind and the time of a schedule, who uses a script). |
| [BehaviorTemplates](/advanced/editor/viewport-tools/behavior-templates) | Starting points for the behaviour of an NPC, and copies of what another NPC does (phase 5 of the Behaviour tab). |
| [BehaviorTimeStrip](/advanced/editor/viewport-tools/behavior-time-strip) | The day of an NPC in one picture: 24 hours across, one bar per schedule in the colour the viewport draws it, from the hour its Time of Day condition starts to the hour it ends (a schedule with no time is for any time: a faint bar all along). |
| [BehaviorTool](/advanced/editor/viewport-tools/behavior-tool) | The click tool of the Behaviour tab: while one of its buttons is on (Add patrol points, Add a place, Add a wander area) a left click on the ground of the 3D viewport adds there what the button adds, through BehaviorPanel.add_point_at (one step of Undo). |
| [EntityDataPropertyEditor](/advanced/editor/viewport-tools/entity-data-property-editor) | Property editor for selecting EntityDefinition using ListCatalog |
| [EnvironmentBar](/advanced/editor/viewport-tools/environment-bar) | The bar at the top of the 3D viewport while the environment preview is on: which Sun, Sky and Environment config to look at, the hour of the day (a slider, and a clock that runs), whether the default video settings of the project are used, and what to do with the choice: use it for this world, or go back to the configs of the world. |
| [EnvironmentTool](/advanced/editor/viewport-tools/environment-tool) | The Environment button of the 3D toolbar, shown while a world scene is open: it puts the sun, the sky and the environment of the world into the scene as temporary nodes (EnvironmentPreview: not saved, gone when the button is pressed again) so that the viewport shows what the game shows, with a bar (EnvironmentBar) to try other configs, the hour of the day and the video settings of the project, and to make what is shown the configs of the world. |
| [IdCatalogPropertyEditor](/advanced/editor/viewport-tools/id-catalog-property-editor) | Property editor for a whole number that is the id of a database entry (an item, a currency): a button that shows its name and opens the searchable catalog, and a clear button (sets 0). |
| [LocalEventCheck](/advanced/editor/viewport-tools/local-event-check) | What is wrong with the rules of a world, found without running the game: a rule nothing sets off, a rule that does nothing, a row that is about nothing yet, a row about a thing that is not in the scene (the object was deleted), a row about the wrong kind of thing (a door action pointing at a switch), an event that is not in the database, rules that start each other round and round. |
| [LocalEventEditing](/advanced/editor/viewport-tools/local-event-editing) | What the Local Events tab does to a world scene, without any editor object (so it can be tested headless): making a rule and putting it in the LocalEvents container, the rows of a rule (its causes, conditions and effects) and what they point at, the things of the scene a row can point at, and the state of a rule for Undo. |
| [LocalEventGizmoPlugin](/advanced/editor/viewport-tools/local-event-gizmo-plugin) | Draws the wires of a local event in the 3D viewport: a green line with an arrow from each thing that sets the rule off to the rule, a blue line from each thing it checks, an orange line with an arrow from the rule to each thing it does something to (a place of the ground is an orange cross). |
| [LocalEventPalette](/advanced/editor/viewport-tools/local-event-palette) | The short menus of the Local Events tab: the common causes ("When"), conditions ("If") and effects ("Then") of the small events of a place, each as a friendly sentence with the class it makes, the values it presets and what kind of thing its target is. |
| [LocalEventPanel](/advanced/editor/viewport-tools/local-event-panel) | The Local Events tab: the small events of the world you have open. |
| [LocalEventTool](/advanced/editor/viewport-tools/local-event-tool) | The clicks of the Local Events tab: while a row waits for its target (Pick target, or a row just added that is about something) a left click in the 3D viewport picks the object, NPC, trigger area, spawner or rule nearest to it (within a few pixels) that the row can be about, or the ground for a row about a place (LocalEventPanel.pick_target / pick_place). |
| [ModularEquipmentTypeTagPropertyEditor](/advanced/editor/viewport-tools/modular-equipment-type-tag-property-editor) | The inspector editor of the equipment type tag of a modular equipment piece: a drop-down of the tags of the equipment types, which writes the chosen tag to the property. |
| [MovementPresetBar](/advanced/editor/viewport-tools/movement-preset-bar) | The preset row of the Unique Object panel for a movement volume or a shelter volume (it is given the class of the presets: MovementVolumePreset or ShelterPreset): a menu of the presets (Water, Lava... |
| [MovementVolumeGizmoPlugin](/advanced/editor/viewport-tools/movement-volume-gizmo-plugin) | Draws the flow of a movement volume in the 3D editor: arrows across the volume that point the way the water or the wind carries whoever is in it, longer when it is stronger. |
| [PlacedPickGizmoPlugin](/advanced/editor/viewport-tools/placed-pick-gizmo-plugin) | A pick shape for what is placed in the 3D editor, so that a click on an NPC, an object or a spawner always selects it. |
| [RiverEditBar](/advanced/editor/viewport-tools/river-edit-bar) | The bar over the 3D viewport while a river that winds is selected: the point being edited (click the handle on a point), its width and how its curve leaves it (Auto, Mirrored, Free), a button to take the point away, how high the water goes above the ground when you place or move a point, the state of each end (free, or joined to another water, with a button to free it), and what is wrong with the course (a bend too tight, a slope too steep). |
| [RiverEditing](/advanced/editor/viewport-tools/river-editing) | What the river tools do to a river, apart from the editor: the maths of dragging a point, the width or a handle with the mouse (from a ray of the camera), joining an end to another water, and keeping one change as one step of Undo. |
| [RiverGizmoPlugin](/advanced/editor/viewport-tools/river-gizmo-plugin) | The handles of a river that winds. |
| [RiverTool](/advanced/editor/viewport-tools/river-tool) | Edits a river that winds in the 3D viewport. |
| [SFXSelectionPropertyEditor](/advanced/editor/viewport-tools/sfx-selection-property-editor) | Property editor for SFXSelection resources using SFXSelectionDialog |
| [ShaderParameterBox](/advanced/editor/viewport-tools/shader-parameter-box) | An input for every parameter of the shader of a material: a number (with its range when the shader gives one), a switch, a vector, a colour, a texture. |
| [UniqueObjectInspectorPlugin](/advanced/editor/viewport-tools/unique-object-inspector-plugin) | The inspector plugin that replaces the properties of a placed NPC, object, encounter, trigger area or modular skeleton with the editors of the Unique Object panel. |
| [VolumeShapeGizmoPlugin](/advanced/editor/viewport-tools/volume-shape-gizmo-plugin) | Resize handles on a volume itself. |
| [WorldTestLauncher](/advanced/editor/viewport-tools/world-test-launcher) | Starts the game straight in one world (no main menu): the Test World button of the Worlds editor and the one in the 3D viewport next to Terrain and Add Object both use it. |
<!-- /classes -->

### Catalogs

<!-- classes:editor/catalogs -->
| Class | What it is |
|---|---|
| [GridCatalog](/advanced/editor/catalogs/grid-catalog) | The base of the catalogs that show a grid of pictures (icons, meshes): a search bar, a category filter and a grid of widgets. |
| [IconCatalog](/advanced/editor/catalogs/icon-catalog) | The catalog that picks an icon: a grid of every icon of the icon library, with a search bar and a category filter. |
| [IconWidget](/advanced/editor/catalogs/icon-widget) | One icon of the icon catalog: the picture and its id, which can be selected. |
| [ListCatalog](/advanced/editor/catalogs/list-catalog) | The catalog that picks one thing out of a list of database resources of any kind (NPCs, items, abilities, quests, skill trees, worlds ...): a search bar, a type filter and a list. |
| [MeshCatalog](/advanced/editor/catalogs/mesh-catalog) | The catalog that picks a mesh of the mesh library (a weapon, a piece of armor, a facial feature) for the current mesh type and category. |
| [ObjectWidget](/advanced/editor/catalogs/object-widget) | One entry of the list catalog: the icon, the id and the name of a resource, which can be selected. |
<!-- /classes -->

### Dialogs

<!-- classes:editor/dialogs -->
| Class | What it is |
|---|---|
| [AnimationSelectionDialog](/advanced/editor/dialogs/animation-selection-dialog) | Enhanced animation selection dialog with per-library animation mappings for non-weapon categories |
| [ArrayParameterPopup](/advanced/editor/dialogs/array-parameter-popup) | Popup for editing array parameters with type support |
| [BBCodeTextEditor](/advanced/editor/dialogs/bb-code-text-editor) | Emitted when the user accepts the dialog with the edited text |
| [BehaviorTemplateDialog](/advanced/editor/dialogs/behavior-template-dialog) | The window of "Add from template or copy": a list of starting points (the templates that come with the toolkit and the ones you saved) and of the schedules of other NPCs and behaviour scripts. |
| [BoolParameterPopup](/advanced/editor/dialogs/bool-parameter-popup) | Popup for editing boolean parameters |
| [ConditionalEditDialog](/advanced/editor/dialogs/conditional-edit-dialog) | Dialog for selecting and configuring all condition types with category organization |
| [CreateEntityDialog](/advanced/editor/dialogs/create-entity-dialog) | Dialog for creating new entities or player classes with optional template selection |
| [CreateResourceDialog](/advanced/editor/dialogs/create-resource-dialog) | Universal dialog for creating new resources - supports all resource types |
| [CurrencySelectionDialog](/advanced/editor/dialogs/currency-selection-dialog) | A dialog that picks a currency and an amount. |
| [EffectTypeSelectionDialog](/advanced/editor/dialogs/effect-type-selection-dialog) | Dialog for selecting effect types with category filtering and search |
| [EncounterActionEditDialog](/advanced/editor/dialogs/encounter-action-edit-dialog) | Dialog for selecting and configuring encounter action types |
| [EncounterConditionEditDialog](/advanced/editor/dialogs/encounter-condition-edit-dialog) | Dialog for selecting and configuring encounter condition types |
| [EncounterReactionEditDialog](/advanced/editor/dialogs/encounter-reaction-edit-dialog) | Dialog for creating and editing encounter reactions |
| [EventTypeSelectionDialog](/advanced/editor/dialogs/event-type-selection-dialog) | Simplified popup for selecting event types (Triggers, Conditions, Actions) Uses EventTypeSelector for all the heavy lifting |
| [EventTypeSelector](/advanced/editor/dialogs/event-type-selector) | Reusable component for selecting and configuring event types (triggers/conditions/actions) |
| [FloatParameterPopup](/advanced/editor/dialogs/float-parameter-popup) | Popup for editing float parameters |
| [InteractionSelectionDialog](/advanced/editor/dialogs/interaction-selection-dialog) | Dialog for selecting and configuring an interaction Used when other parts of the editor need a single interaction selection |
| [IntParameterPopup](/advanced/editor/dialogs/int-parameter-popup) | Popup for editing integer parameters |
| [LootEntryConfigDialog](/advanced/editor/dialogs/loot-entry-config-dialog) | Dialog for configuring loot entry properties |
| [NewScheduleDialog](/advanced/editor/dialogs/new-schedule-dialog) | The window that makes a new schedule: a name and a kind (ordered, priority, wander) with a line about each. |
| [OptionsParameterPopup](/advanced/editor/dialogs/options-parameter-popup) | A parameter popup that chooses one value out of a fixed set of options (a dictionary of label to value) with a drop-down. |
| [ParameterPopupBase](/advanced/editor/dialogs/parameter-popup-base) | Base class for parameter editing popups |
| [QuestObjectiveConfigurationPopup](/advanced/editor/dialogs/quest-objective-configuration-popup) | Popup for configuring quest objectives with trigger selection and objective-specific settings |
| [QuestSelectionDialog](/advanced/editor/dialogs/quest-selection-dialog) | Dialog for selecting quests to add to questline steps |
| [ReputationLevelDialog](/advanced/editor/dialogs/reputation-level-dialog) | Dialog for creating and editing reputation levels within a faction. |
| [ResponseStatePopup](/advanced/editor/dialogs/response-state-popup) | A dialog of the conversation editor that works in two modes: choose a response and whether it is turned on or off (the Set response state action), or choose the chat the conversation will start at the next time (the Set starting chat action). |
| [SaveTemplateDialog](/advanced/editor/dialogs/save-template-dialog) | The window of "Save as template": a name and a line about it. |
| [ScheduleEditDialog](/advanced/editor/dialogs/schedule-edit-dialog) | Dialog for editing the actual exported properties of TaskSchedule |
| [SetBonusSelectionDialog](/advanced/editor/dialogs/set-bonus-selection-dialog) | Minimal set bonus selection dialog to prevent stretching |
| [SFXSelectionDialog](/advanced/editor/dialogs/sfx-selection-dialog) | Modular SFX selection dialog that works with any SFXSelection class type Uses static DatabaseAudio for all audio data access Now supports SFX type selection and uses ItemLists for better UX |
| [ShapeConfigDialog](/advanced/editor/dialogs/shape-config-dialog) | A dialog that configures a 3D shape: the player chooses the kind of shape and sets its dimensions, and `selection_made` gives the shape. |
| [SocketSelectionDialog](/advanced/editor/dialogs/socket-selection-dialog) | Minimal socket selection dialog to test stretching issues |
| [StringParameterPopup](/advanced/editor/dialogs/string-parameter-popup) | Popup for editing string parameters |
| [TrackSelectionDialog](/advanced/editor/dialogs/track-selection-dialog) | Track selection dialog of the audio library: the tracks of an album, of a zone, of a weather, of a shelter, of an event. |
| [UnifiedResourceDialog](/advanced/editor/dialogs/unified-resource-dialog) | Unified dialog for creating and editing resources with dynamic UI generation Similar to EventTypeSelector but for creating/editing resources like Rewards and Requirements |
| [VariablePopup](/advanced/editor/dialogs/variable-popup) | A window that makes or edits a variable: its name, its type and its value. |
| [Vector2ParameterPopup](/advanced/editor/dialogs/vector2-parameter-popup) | Popup for editing Vector2 parameters |
| [Vector3ParameterPopup](/advanced/editor/dialogs/vector3-parameter-popup) | Popup for editing Vector3 parameters |
| [VendorItemSlotDialog](/advanced/editor/dialogs/vendor-item-slot-dialog) | Dialog for configuring VendorItemStock entries |
| [VFXSelectionBeamProperties](/advanced/editor/dialogs/vfx-selection-beam-properties) | Property panel for Beam VFX selections |
| [VFXSelectionDialog](/advanced/editor/dialogs/vfx-selection-dialog) | Modular VFX selection dialog that works with any VFXSelection class type Uses property panels for detailed configuration and DatabaseVFX for VFX data access Now supports context-specific type locking and uses ItemList for VFX name selection |
| [VFXSelectionLoopProperties](/advanced/editor/dialogs/vfx-selection-loop-properties) | Property panel for Loop VFX selections |
| [VFXSelectionMaterialProperties](/advanced/editor/dialogs/vfx-selection-material-properties) | Property panel for Material VFX selections |
| [VFXSelectionOneShotProperties](/advanced/editor/dialogs/vfx-selection-one-shot-properties) | Property panel for OneShot VFX selections |
| [VFXSelectionPathProperties](/advanced/editor/dialogs/vfx-selection-path-properties) | Property panel for Path VFX selections |
| [VFXSelectionPropertyPanel](/advanced/editor/dialogs/vfx-selection-property-panel) | Base class for VFX selection property panels Each VFX selection type gets its own specialized panel |
| [VFXSelectionTelegraphProperties](/advanced/editor/dialogs/vfx-selection-telegraph-properties) | Property panel for Telegraph VFX selections |
| [VFXSelectionTransformationProperties](/advanced/editor/dialogs/vfx-selection-transformation-properties) | Property panel for Transformation VFX selections |
| [ZonePickerButton](/advanced/editor/dialogs/zone-picker-button) | A button that shows the zone chosen and opens the zone dialog (ZoneSelectionDialog) to choose another: the default zone of a world, the zone a zone is a part of. |
| [ZoneSelectionDialog](/advanced/editor/dialogs/zone-selection-dialog) | The dialog that chooses a zone, like the dialogs that choose a track, an animation or a sound effect: a search box and the zones of the world as a tree (a sub-zone under its zone, each with the colour of the zone), a double click or OK chooses. |
<!-- /classes -->

### Property controls

<!-- classes:editor/factory -->
| Class | What it is |
|---|---|
| [AssetViewport3D](/advanced/editor/factory/asset-viewport3-d) | A 3D preview of a scene you can turn around: the scene is shown in a world of its own (a ground grid, a light, a background), and you drag to orbit, turn the wheel to zoom and drag with the middle or right button to move. |
| [BBCodeTextControl](/advanced/editor/factory/bb-code-text-control) | Read-only TextEdit that opens BBCodeTextEditor on click |
| [ColorField](/advanced/editor/factory/color-field) | A Color property in a colour button. |
| [ConfigField](/advanced/editor/factory/config-field) | The base of the field components of the config editors: a label and a control for ONE property of the resource that is open. |
| [CurveEditorControl](/advanced/editor/factory/curve-editor-control) | A control that edits a curve (a growth curve, a falloff) with a drawn preview and a maximum value that can be changed. |
| [DatabaseArrayControl](/advanced/editor/factory/database-array-control) | Simple array control for database resources Two modes: OptionButton per entry OR Button that opens ListCatalog per entry |
| [DatabaseIdField](/advanced/editor/factory/database-id-field) | An int property that is the id of a resource of the project (an effect, an ability ...), picked by name from a drop-down of everything of that kind, with an entry for none (0). |
| [DatabaseOptionButton](/advanced/editor/factory/database-option-button) | OptionButton that auto-populates from database and uses IDs in metadata |
| [DatabaseResourceButton](/advanced/editor/factory/database-resource-button) | Button that opens ListCatalog to select a database resource Shows resource name, has optional clear button |
| [DynamicDictionaryEditor](/advanced/editor/factory/dynamic-dictionary-editor) | Reusable component for editing dictionaries with add/edit/remove functionality Supports items (id -&gt; quantity) and currency (id -&gt; amount) entries |
| [ExperiencePerLevelEditor](/advanced/editor/factory/experience-per-level-editor) | Editor for experience_per_level Dictionary in GameplayConfig Displays a list of levels with their XP requirements and allows editing |
| [FilePathField](/advanced/editor/factory/file-path-field) | The path of one audio track (a String property): chosen with the browse button in the track dialog of the audio library (the same as the albums and the events use), or typed (a file outside the library). |
| [IdMultiSelect](/advanced/editor/factory/id-multi-select) | A list of ids picked from a database type: the picked entries as small tags with an x, and an Add button that opens a searchable list of everything that exists. |
| [NamePickerField](/advanced/editor/factory/name-picker-field) | A String property chosen from a list of names that the owner gives with set_choices (the parts of a Dynamic Music, its states). |
| [NumberField](/advanced/editor/factory/number-field) | A number (a float or an int property) in a SpinBox. |
| [OptionField](/advanced/editor/factory/option-field) | An enum (or int) property in a drop-down. |
| [PathListField](/advanced/editor/factory/path-list-field) | A list of tracks (an Array[String] property): the music or the ambient sound of a zone or a weather. |
| [PropertyFactory](/advanced/editor/factory/property-factory) | Makes the rows of the inspector editors of the toolkit: a label with a check box, a text field, a number, a drop-down, a database drop-down, a slider or a color picker, each as an `EditorProperty` that calls a function when its value changes. |
| [PropertyUIFactory](/advanced/editor/factory/property-ui-factory) | Factory for creating UI controls with consistent styling and behavior Uses class-based controls for complex components |
| [ResourceField](/advanced/editor/factory/resource-field) | A property that holds a resource (a gradient, a curve, a texture, a sky driver) in a resource picker: pick one from the project, make a new one or clear it. |
| [SoundSourceField](/advanced/editor/factory/sound-source-field) | The field of a SoundSource property (the music, the combat music or the ambience of a world, a zone, a weather or an encounter): None, a Track (chosen in the track window of the audio library, with its loop, the pause between plays, the volume and the fade) or an Album (a Music Album or a Combat Music Album of the project). |
| [TextField](/advanced/editor/factory/text-field) | A text (a String property) in a line. |
| [ToggleField](/advanced/editor/factory/toggle-field) | A bool property in a check box. |
| [Vector2Control](/advanced/editor/factory/vector2-control) | Two spinboxes for Vector2 input with clipboard paste support |
| [Vector3Control](/advanced/editor/factory/vector3-control) | Three spinboxes for Vector3 input with clipboard paste support |
| [Vector3Field](/advanced/editor/factory/vector3-field) | A Vector3 property in three number boxes (X, Y, Z). |
| [VfxNameField](/advanced/editor/factory/vfx-name-field) | A string property that is the name of an effect of the VFX library, picked from a drop-down of the effects of one kind (the Weather effects: the scenes in src/data/vfx/weather/) with an entry for none. |
| [VFXPreview](/advanced/editor/factory/vfx-preview) | The preview of a visual effect (VFX tab): the effect plays in a 3D view you can turn around (AssetViewport3D). |
<!-- /classes -->

### Managers and utilities

<!-- classes:editor/tools -->
| Class | What it is |
|---|---|
| [AnimationPropertyMapper](/advanced/editor/tools/animation-property-mapper) | Maps AnimationCoreMap properties to their filesystem folders Used by editors to populate dropdowns and validate animations |
| [BuildSizeReport](/advanced/editor/tools/build-size-report) | What the project weighs and where it could weigh less: size by kind of file and by folder, the largest files, files that are there twice, textures that are bigger than they need to be, sounds that could be smaller (stereo where the sound is positional, uncompressed where it is short, WAV where it is long), and the files nothing uses (see UsedAssets). |
| [DialogManager](/advanced/editor/tools/dialog-manager) | Centralized dialog management with guaranteed clean connections |
| [DocsLinks](/advanced/editor/tools/docs-links) | Where the online documentation is, and which page belongs to which tab of the Database editor. |
| [EditorThemeManager](/advanced/editor/tools/editor-theme-manager) | Centralized theme and icon management for the Event System Provides consistent theming across all UI components and handles editor integration |
| [EffectUtil](/advanced/editor/tools/effect-util) | Helpers of the Effects editor: where the effect resources, their property scenes and their scripts are, the name and category of every effect type (derived from the folders of the scripts), and the inheritance of the effect types (is this type a composite, what are its parents and children, the path of its script). |
| [EnumOptions](/advanced/editor/tools/enum-options) | Fills the items of an OptionButton from an enum, so a pre-built option button in a scene shows the values of an enum without a list of names to keep up to date. |
| [EventTypeManager](/advanced/editor/tools/event-type-manager) | Manages all event type scanning, creation, and parameter handling Updated to work with new Condition system using @export hints Uses PropertySelectorRegistry for unified property → database mappings |
| [InteractableSceneCreator](/advanced/editor/tools/interactable-scene-creator) | Creates new InteractableScene templates with all essential nodes pre-configured |
| [PopupLibrary](/advanced/editor/tools/popup-library) | The popups of the game as the editor needs them: the list, making a new one from the template and taking one out of the list. |
| [ProjectSetupUtility](/advanced/editor/tools/project-setup-utility) | Utility for setting up project-wide settings like global shader parameters, audio buses, and input actions |
| [PropertySelectorRegistry](/advanced/editor/tools/property-selector-registry) | Utility class for mapping property names to database/selector types Single source of truth for property name → database mappings Used by editors, dialogs, and dynamic UI generation systems |
| [ResourceManager](/advanced/editor/tools/resource-manager) | THE resource manager - handles ALL resource types and operations Live editing - no save logic needed |
| [ResourcePropertyForm](/advanced/editor/tools/resource-property-form) | Builds the fields of a resource from its exported variables, so a class that someone adds (a TurretSeat, a HoverDrive) is editable without an editor of its own: a switch for a bool, a number box for an int or a float (with the range of the export), a line for a String, a list for an enum, a color button, three boxes for a Vector3. |
| [RPGShapeUtility](/advanced/editor/tools/rpg-shape-utility) | Unified utility class for creating RPG area effect shapes Supports both directional (origin-based, facing -Z) and centered (point-based) shapes Includes custom mesh shapes and Godot built-in shape wrappers |
| [SkeletonSceneConverter](/advanced/editor/tools/skeleton-scene-converter) | Converts existing Skeleton3D scenes into GeneralSkeleton, ModularSkeleton, or CustomSkeleton Adds essential attachment points and weapon meshes based on skeleton type |
| [ToolbarIcons](/advanced/editor/tools/toolbar-icons) | Turns an SVG file into the picture of a toolbar button. |
| [UsedAssets](/advanced/editor/tools/used-assets) | Which files does the project use? |
| [WorldSceneValidator](/advanced/editor/tools/world-scene-validator) | Utility class for validating WorldScene context in editor Used by NPC, InteractableObject, and Trigger area to ensure they're in a valid map |
<!-- /classes -->
