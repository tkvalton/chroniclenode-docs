# Editor: how it is built

The editor side of the toolkit is an `EditorPlugin` (`plugin.gd`, "Unified Game Editor") that adds a main-screen **Database** editor, an **Add Object** menu to the 3D viewport and a **Unique Object** panel to the bottom dock. All of its code is in `addons/chroniclenode/editor_components/`. None of it runs in an exported game.

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

[`AddObjectToolbarManager`](/advanced/world/editor-tools/add-object-toolbar-manager), [`UniqueObjectInspector`](/advanced/world/editor-tools/unique-object-inspector) and [`EncounterReactionsEditor`](/advanced/world/editor-tools/encounter-reactions-editor) (see [Add Object](/advanced/world/add-object) and [the Unique Object tool](/advanced/world/unique-object-tool)), and the inspector plugins that show a unique's fields in Godot's own inspector.

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
| [ComboStepsEditor](/advanced/editor/abilities/combo-steps-editor) |  |
| [CompositeEffectProperties](/advanced/editor/abilities/composite-effect-properties) | Property panel for CompositeEffect - handles child effects management |
| [ConnectionCreationDialog](/advanced/editor/abilities/connection-creation-dialog) | Dialog for creating new skill node connections with advanced options and pre-selection support |
| [EffectDynamicPropertyPanel](/advanced/editor/abilities/effect-dynamic-property-panel) | Dynamic property panel for Effect editing Replaces manual property components with automatic generation Shows properties in titled sections based on inheritance hierarchy |
| [EffectEditor](/advanced/editor/abilities/effect-editor) | Effect Editor for managing effect resources - refactored to use ResourceEditor base |
| [EffectPropertiesBase](/advanced/editor/abilities/effect-properties-base) | Base class for all effect property UI panels Handles common functionality and provides interface for specific effect properties |
| [EffectsTreeEditor](/advanced/editor/abilities/effects-tree-editor) | Reusable tree-based editor for managing collections of effects. |
| [SkillConnectionPropertiesEditor](/advanced/editor/abilities/skill-connection-properties-editor) | Scene-based editor for skill connection properties |
| [SkillNodeManager](/advanced/editor/abilities/skill-node-manager) | Handles skill node operations and type conversions |
| [SkillNodePropertiesEditor](/advanced/editor/abilities/skill-node-properties-editor) |  |
| [SkillNodeVisual](/advanced/editor/abilities/skill-node-visual) | Visual representation of a skill node - uses scene-based UI |
| [SkillPointPoolsManagerDialog](/advanced/editor/abilities/skill-point-pools-manager-dialog) | Dialog for managing skill point pools |
| [SkillTreeCanvas](/advanced/editor/abilities/skill-tree-canvas) | Visual canvas for editing skill trees with visual node components |
| [SkillTreeEditor](/advanced/editor/abilities/skill-tree-editor) | Skill tree visual editor - creates and edits skill trees with node/connection management |
| [TargetStrategyDynamicPanel](/advanced/editor/abilities/target-strategy-dynamic-panel) | Dynamic property panel for TargetStrategy editing. |
| [TierEffectsEditor](/advanced/editor/abilities/tier-effects-editor) |  |
| [ToggleGroupsResource](/advanced/editor/abilities/toggle-groups-resource) | Resource class for managing toggle groups used by abilities Provides centralized storage and management of toggle group names |
| [UseStrategyDynamicPanel](/advanced/editor/abilities/use-strategy-dynamic-panel) | Dynamic property panel for UseStrategy editing. |
<!-- /classes -->

#### Assets

<!-- classes:editor/assets -->
| Class | What it is |
|---|---|
| [AlbumDatabaseEditor](/advanced/editor/assets/album-database-editor) |  |
| [AnimationDatabaseEditor](/advanced/editor/assets/animation-database-editor) |  |
| [AnimationFolderContextMenu](/advanced/editor/assets/animation-folder-context-menu) | Context menu scene for animation folder operations |
| [AnimationPackageTree](/advanced/editor/assets/animation-package-tree) | Specialized tree for managing animation packages with the new simplified structure |
| [AudioDatabaseEditor](/advanced/editor/assets/audio-database-editor) |  |
| [CorePackageEditor](/advanced/editor/assets/core-package-editor) | Dynamic editor for AnimationCoreMap properties Automatically builds UI based on property structure and available animations |
| [IconDatabaseEditor](/advanced/editor/assets/icon-database-editor) |  |
| [MeshDatabaseEditor](/advanced/editor/assets/mesh-database-editor) |  |
| [ModelSceneDatabaseEditor](/advanced/editor/assets/model-scene-database-editor) |  |
| [VFXDatabaseEditor](/advanced/editor/assets/vfx-database-editor) |  |
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
| [CharacterEditor](/advanced/editor/entities/character-editor) | CharacterEditor for managing CharacterDefinition resources CharacterDefinition inherits EntityDefinition for visual/audio and links to PlayerClassDefinition |
| [EntityAbilitiesEditor](/advanced/editor/entities/entity-abilities-editor) | Editor for EntityDefinition ability properties - manages auto-attack and ability lists Now uses ListCatalog for ability selection with proper type filtering |
| [InteractableDefinitionEditor](/advanced/editor/entities/interactable-definition-editor) | Editor for InteractableDefinition resources |
| [InteractionEditor](/advanced/editor/entities/interaction-editor) | Editor for a single Interaction instance Combines category/type selection with dynamic property editing |
| [NpcEditor](/advanced/editor/entities/npc-editor) | Entity Editor for managing NPCDefinitions resources |
| [PlayerClassEditor](/advanced/editor/entities/player-class-editor) | PlayerClassEditor for managing PlayerClassDefinition resources |
| [PlayerClassLevelRewardEditor](/advanced/editor/entities/player-class-level-reward-editor) | Editor for PlayerClassDefinition level rewards only Experience requirements are now managed in GameplayConfig |
| [StarterEquipmentEditor](/advanced/editor/entities/starter-equipment-editor) | Simple ItemList-based editor for starter equipment Works with both PlayerClassDefinition and CharacterDefinition |
| [StatsDataEditor](/advanced/editor/entities/stats-data-editor) | Unified editor for StatsData configuration Works for both EntityDefinition and InteractableObject stats |
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
| [GlobalVariablesEditor](/advanced/editor/events/global-variables-editor) |  |
| [PopupEditor](/advanced/editor/events/popup-editor) | Popup Editor for the popups of the game: the scenes built on PopupUI (a tutorial, a message, a toast, an achievement) and how each one behaves when it is shown. |
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
| [CraftingRecipeEditor](/advanced/editor/items/crafting-recipe-editor) | CraftingRecipe Editor - handles crafting recipe definitions using the unified ResourceEditor base |
| [CraftSchoolEditor](/advanced/editor/items/craft-school-editor) | CraftSchool Editor - handles craft school definitions using the unified ResourceEditor base |
| [CurrencyDefinitionEditor](/advanced/editor/items/currency-definition-editor) | Currency Definition Editor for managing currency definitions |
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
| [LootTableEditor](/advanced/editor/items/loot-table-editor) | LootTable Editor - handles loot table definitions using the unified ResourceEditor base |
| [VendorEditor](/advanced/editor/items/vendor-editor) | Vendor Editor - handles vendor definitions using the unified ResourceEditor base |
<!-- /classes -->

#### Settings

<!-- classes:editor/settings -->
| Class | What it is |
|---|---|
| [CharacterCreationConfigEditor](/advanced/editor/settings/character-creation-config-editor) | Editor for CharacterCreationSettings resource with tab-based UI |
| [CollisionLayerEditor](/advanced/editor/settings/collision-layer-editor) | Collision Layer Configuration Editor Integrated into the Game Settings category |
| [ConfigEditor](/advanced/editor/settings/config-editor) | Base class for configuration editors that dynamically build UI from exported properties Provides common functionality for GameplayConfigEditor and SettingsEditor |
| [ControllerLogicEditor](/advanced/editor/settings/controller-logic-editor) | Editor for creating, loading, and editing controller logic resources (Camera &amp; Player) Allows switching between different logic types and editing their properties Resources are saved to disk for reuse across projects |
| [GameplayConfigEditor](/advanced/editor/settings/gameplay-config-editor) | Editor for GameplayConfig resource with tab-based UI |
| [KillExperienceEditor](/advanced/editor/settings/kill-experience-editor) | The editor of "Kill Experience Mode" in the Gameplay Config (Leveling): how much experience a defeated NPC gives. |
| [KillFalloffEditor](/advanced/editor/settings/kill-falloff-editor) | The editor of "Kill Experience Falloff" in the Gameplay Config (Leveling): an NPC under the level of the party gives less experience. |
| [LevelGapEditor](/advanced/editor/settings/level-gap-editor) | The editor of "Level Gap Mode" in the Gameplay Config (Hit Rules): how the levels of the attacker and the target change the chance to hit. |
| [LocalizationEditor](/advanced/editor/settings/localization-editor) | Editor for managing game localization and translations |
| [SettingsEditor](/advanced/editor/settings/settings-editor) | Dynamic editor for Settings resource Automatically extracts doc comments as tooltips and manages player accessibility |
| [UISettingsEditor](/advanced/editor/settings/ui-settings-editor) | Editor for UISettingsConfig resource |
<!-- /classes -->

#### Stats

<!-- classes:editor/stats -->
| Class | What it is |
|---|---|
| [CalculationList](/advanced/editor/stats/calculation-list) | Displays all CalculationModifierStatEffects affecting a calculation type Provides intuitive priority management with drag-and-drop reordering |
| [CalculationsEditor](/advanced/editor/stats/calculations-editor) | Main calculations editor - manages priority ordering for all calculation types |
| [DamageTypesEditor](/advanced/editor/stats/damage-types-editor) | Damage Types Editor for managing damage type definitions: the name, description, icon and color are the base editor's; the effects the damage type applies when a hit lands (fire burns) are shown by reflection of the definition. |
| [EntityTagsEditor](/advanced/editor/stats/entity-tags-editor) | Entity Types Editor (the Entity Tag definitions): the types an entity can have (Humanoid, Beast, Undead ...). |
| [FormulaGraph](/advanced/editor/stats/formula-graph) | A small line graph of a formula: stat points (or levels) along the bottom, the value it gives up the side. |
| [GroupsEditor](/advanced/editor/stats/groups-editor) | Groups Editor: the groups effects, abilities and items can be in. |
| [GrowthEditor](/advanced/editor/stats/growth-editor) | "Level Growth" section of the stat and pool editors: the formula and optional diminishing returns that turn the levels gained (level - 1) into growth, plus a ceiling and a small table of the result at a few levels. |
| [GrowthOverridesEditor](/advanced/editor/stats/growth-overrides-editor) | The list of growth entries of a StatsData (an NPC's Level Growth Overrides) or of a GrowthProfile: one growth editor for each stat or pool that grows differently, a Remove button for each, and a picker to add one more. |
| [GrowthProfilePicker](/advanced/editor/stats/growth-profile-picker) | A dropdown of the growth profiles of the project. |
| [GrowthProfilesEditor](/advanced/editor/stats/growth-profiles-editor) | Growth Profiles Editor: how a kind of entity grows with its level (Heavy, Caster, Minion, Elite ...). |
| [ImmunityDefinitionsEditor](/advanced/editor/stats/immunity-definitions-editor) | Immunity Definitions Editor for managing immunity definition resources |
| [PoolStatsEditor](/advanced/editor/stats/pool-stats-editor) | Pool Stats Editor for managing pool definitions with damage type absorption |
| [ProficienciesEditor](/advanced/editor/stats/proficiencies-editor) | Proficiencies Editor: the skills a player gets better at by use or training (swords, heavy armor, lockpicking). |
| [SchoolTypesEditor](/advanced/editor/stats/school-types-editor) | School Types Editor for managing school type definitions |
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
| [BaseConfigEditor](/advanced/editor/world/base-config-editor) | Base class for config editors that dynamically generate UI from exports |
| [EnvironmentConfigEditor](/advanced/editor/world/environment-config-editor) | Editor panel for EnvironmentConfig |
| [SkyConfigEditor](/advanced/editor/world/sky-config-editor) | Editor panel for SkyConfig |
| [SunConfigEditor](/advanced/editor/world/sun-config-editor) | Editor panel for SunConfig |
| [TimeConfigEditor](/advanced/editor/world/time-config-editor) | Editor panel for TimeConfig |
| [UniquesDatabaseEditor](/advanced/editor/world/uniques-database-editor) |  |
| [WorldConfigEditor](/advanced/editor/world/world-config-editor) | Main editor for all world configuration types (Sky, Environment, Sun, Time) Designed to work with a pre-built scene containing the four config editors |
| [WorldDatabaseEditor](/advanced/editor/world/world-database-editor) |  |
<!-- /classes -->

### Viewport tools

<!-- classes:editor/viewport-tools -->
| Class | What it is |
|---|---|
| [EntityDataPropertyEditor](/advanced/editor/viewport-tools/entity-data-property-editor) | Property editor for selecting EntityDefinition using ListCatalog |
| [ModularEquipmentTypeTagPropertyEditor](/advanced/editor/viewport-tools/modular-equipment-type-tag-property-editor) |  |
| [SFXSelectionPropertyEditor](/advanced/editor/viewport-tools/sfx-selection-property-editor) | Property editor for SFXSelection resources using SFXSelectionDialog |
| [UniqueObjectInspectorPlugin](/advanced/editor/viewport-tools/unique-object-inspector-plugin) |  |
<!-- /classes -->

### Catalogs

<!-- classes:editor/catalogs -->
| Class | What it is |
|---|---|
| [GridCatalog](/advanced/editor/catalogs/grid-catalog) |  |
| [IconCatalog](/advanced/editor/catalogs/icon-catalog) |  |
| [IconWidget](/advanced/editor/catalogs/icon-widget) |  |
| [ListCatalog](/advanced/editor/catalogs/list-catalog) |  |
| [MeshCatalog](/advanced/editor/catalogs/mesh-catalog) |  |
| [ObjectWidget](/advanced/editor/catalogs/object-widget) |  |
<!-- /classes -->

### Dialogs

<!-- classes:editor/dialogs -->
| Class | What it is |
|---|---|
| [AnimationSelectionDialog](/advanced/editor/dialogs/animation-selection-dialog) | Enhanced animation selection dialog with per-library animation mappings for non-weapon categories |
| [ArrayParameterPopup](/advanced/editor/dialogs/array-parameter-popup) | Popup for editing array parameters with type support |
| [BBCodeTextEditor](/advanced/editor/dialogs/bb-code-text-editor) | Emitted when the user accepts the dialog with the edited text |
| [BoolParameterPopup](/advanced/editor/dialogs/bool-parameter-popup) | Popup for editing boolean parameters |
| [ConditionalEditDialog](/advanced/editor/dialogs/conditional-edit-dialog) | Dialog for selecting and configuring all condition types with category organization |
| [CreateEntityDialog](/advanced/editor/dialogs/create-entity-dialog) | Dialog for creating new entities or player classes with optional template selection |
| [CreateResourceDialog](/advanced/editor/dialogs/create-resource-dialog) | Universal dialog for creating new resources - supports all resource types |
| [CurrencySelectionDialog](/advanced/editor/dialogs/currency-selection-dialog) |  |
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
| [OptionsParameterPopup](/advanced/editor/dialogs/options-parameter-popup) |  |
| [ParameterPopupBase](/advanced/editor/dialogs/parameter-popup-base) | Base class for parameter editing popups |
| [QuestObjectiveConfigurationPopup](/advanced/editor/dialogs/quest-objective-configuration-popup) | Popup for configuring quest objectives with trigger selection and objective-specific settings |
| [QuestSelectionDialog](/advanced/editor/dialogs/quest-selection-dialog) | Dialog for selecting quests to add to questline steps |
| [ReputationLevelDialog](/advanced/editor/dialogs/reputation-level-dialog) | Dialog for creating and editing reputation levels within a faction. |
| [ResponseStatePopup](/advanced/editor/dialogs/response-state-popup) |  |
| [ScheduleEditDialog](/advanced/editor/dialogs/schedule-edit-dialog) | Dialog for editing the actual exported properties of TaskSchedule |
| [SetBonusSelectionDialog](/advanced/editor/dialogs/set-bonus-selection-dialog) | Minimal set bonus selection dialog to prevent stretching |
| [SFXSelectionDialog](/advanced/editor/dialogs/sfx-selection-dialog) | Modular SFX selection dialog that works with any SFXSelection class type Uses static DatabaseAudio for all audio data access Now supports SFX type selection and uses ItemLists for better UX |
| [ShapeConfigDialog](/advanced/editor/dialogs/shape-config-dialog) |  |
| [SocketSelectionDialog](/advanced/editor/dialogs/socket-selection-dialog) | Minimal socket selection dialog to test stretching issues |
| [StringParameterPopup](/advanced/editor/dialogs/string-parameter-popup) | Popup for editing string parameters |
| [TrackSelectionDialog](/advanced/editor/dialogs/track-selection-dialog) | Simplified track selection dialog for album management Works directly with DatabaseAudio categories (music, ambience, loop_sfx) |
| [UnifiedResourceDialog](/advanced/editor/dialogs/unified-resource-dialog) | Unified dialog for creating and editing resources with dynamic UI generation Similar to EventTypeSelector but for creating/editing resources like Rewards and Requirements |
| [VariablePopup](/advanced/editor/dialogs/variable-popup) |  |
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
<!-- /classes -->

### Property controls

<!-- classes:editor/factory -->
| Class | What it is |
|---|---|
| [BBCodeTextControl](/advanced/editor/factory/bb-code-text-control) | Read-only TextEdit that opens BBCodeTextEditor on click |
| [CurveEditorControl](/advanced/editor/factory/curve-editor-control) |  |
| [DatabaseArrayControl](/advanced/editor/factory/database-array-control) | Simple array control for database resources Two modes: OptionButton per entry OR Button that opens ListCatalog per entry |
| [DatabaseOptionButton](/advanced/editor/factory/database-option-button) | OptionButton that auto-populates from database and uses IDs in metadata |
| [DatabaseResourceButton](/advanced/editor/factory/database-resource-button) | Button that opens ListCatalog to select a database resource Shows resource name, has optional clear button |
| [DynamicDictionaryEditor](/advanced/editor/factory/dynamic-dictionary-editor) | Reusable component for editing dictionaries with add/edit/remove functionality Supports items (id -&gt; quantity) and currency (id -&gt; amount) entries |
| [ExperiencePerLevelEditor](/advanced/editor/factory/experience-per-level-editor) | Editor for experience_per_level Dictionary in GameplayConfig Displays a list of levels with their XP requirements and allows editing |
| [PropertyFactory](/advanced/editor/factory/property-factory) |  |
| [PropertyUIFactory](/advanced/editor/factory/property-ui-factory) | Factory for creating UI controls with consistent styling and behavior Uses class-based controls for complex components |
| [Vector2Control](/advanced/editor/factory/vector2-control) | Two spinboxes for Vector2 input with clipboard paste support |
| [Vector3Control](/advanced/editor/factory/vector3-control) | Three spinboxes for Vector3 input with clipboard paste support |
<!-- /classes -->

### Managers and utilities

<!-- classes:editor/tools -->
| Class | What it is |
|---|---|
| [AnimationPropertyMapper](/advanced/editor/tools/animation-property-mapper) | Maps AnimationCoreMap properties to their filesystem folders Used by editors to populate dropdowns and validate animations |
| [DialogManager](/advanced/editor/tools/dialog-manager) | Centralized dialog management with guaranteed clean connections |
| [DocsLinks](/advanced/editor/tools/docs-links) | Where the online documentation is, and which page belongs to which tab of the Database editor. |
| [EditorThemeManager](/advanced/editor/tools/editor-theme-manager) | Centralized theme and icon management for the Event System Provides consistent theming across all UI components and handles editor integration |
| [EffectUtil](/advanced/editor/tools/effect-util) |  |
| [EventTypeManager](/advanced/editor/tools/event-type-manager) | Manages all event type scanning, creation, and parameter handling Updated to work with new Condition system using @export hints Uses PropertySelectorRegistry for unified property → database mappings |
| [InteractableSceneCreator](/advanced/editor/tools/interactable-scene-creator) | Creates new InteractableScene templates with all essential nodes pre-configured |
| [ProjectSetupUtility](/advanced/editor/tools/project-setup-utility) | Utility for setting up project-wide settings like global shader parameters, audio buses, and input actions |
| [PropertySelectorRegistry](/advanced/editor/tools/property-selector-registry) | Utility class for mapping property names to database/selector types Single source of truth for property name → database mappings Used by editors, dialogs, and dynamic UI generation systems |
| [ResourceManager](/advanced/editor/tools/resource-manager) | THE resource manager - handles ALL resource types and operations Live editing - no save logic needed |
| [RPGShapeUtility](/advanced/editor/tools/rpg-shape-utility) | Unified utility class for creating RPG area effect shapes Supports both directional (origin-based, facing -Z) and centered (point-based) shapes Includes custom mesh shapes and Godot built-in shape wrappers |
| [SkeletonSceneConverter](/advanced/editor/tools/skeleton-scene-converter) | Converts existing Skeleton3D scenes into GeneralSkeleton, ModularSkeleton, or CustomSkeleton Adds essential attachment points and weapon meshes based on skeleton type |
| [WorldSceneValidator](/advanced/editor/tools/world-scene-validator) | Utility class for validating WorldScene context in editor Used by NPC, InteractableObject, and Region to ensure they're in a valid map |
<!-- /classes -->
