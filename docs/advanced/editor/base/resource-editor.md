<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ResourceEditor

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

**Inherited by:** [AbilityEditor](/advanced/editor/abilities/ability-editor), [ArmorClassDefinitionEditor](/advanced/editor/equipment-definitions/armor-class-definition-editor), [CharacterEditor](/advanced/editor/entities/character-editor), [ConversationEditor](/advanced/editor/behavior/conversation-editor), [CraftSchoolEditor](/advanced/editor/items/craft-school-editor), [CraftingRecipeEditor](/advanced/editor/items/crafting-recipe-editor), [CurrencyDefinitionEditor](/advanced/editor/items/currency-definition-editor), [DamageTypesEditor](/advanced/editor/stats/damage-types-editor), [EffectEditor](/advanced/editor/abilities/effect-editor), [EntityTagsEditor](/advanced/editor/stats/entity-tags-editor), [EquipmentSlotDefinitionEditor](/advanced/editor/equipment-definitions/equipment-slot-definition-editor), [EquipmentTypeDefinitionEditor](/advanced/editor/equipment-definitions/equipment-type-definition-editor), [EventEditor](/advanced/editor/events/event-editor), [FactionEditor](/advanced/editor/behavior/faction-editor), [GroupsEditor](/advanced/editor/stats/groups-editor), [GrowthProfilesEditor](/advanced/editor/stats/growth-profiles-editor), [ImmunityDefinitionsEditor](/advanced/editor/stats/immunity-definitions-editor), [InteractableDefinitionEditor](/advanced/editor/entities/interactable-definition-editor), [ItemEditor](/advanced/editor/items/item-editor), [LootTableEditor](/advanced/editor/items/loot-table-editor), [ModularBehaviorScriptEditor](/advanced/editor/behavior/modular-behavior-script-editor), [ModularCombatScriptEditor](/advanced/editor/behavior/modular-combat-script-editor), [NpcEditor](/advanced/editor/entities/npc-editor), [PlayerClassEditor](/advanced/editor/entities/player-class-editor), [PoolStatsEditor](/advanced/editor/stats/pool-stats-editor), [PopupEditor](/advanced/editor/events/popup-editor), [ProficienciesEditor](/advanced/editor/stats/proficiencies-editor), [QualityEditor](/advanced/editor/equipment-definitions/quality-editor), [QuestEditor](/advanced/editor/events/quest-editor), [QuestLineEditor](/advanced/editor/events/quest-line-editor), [SchoolTypesEditor](/advanced/editor/stats/school-types-editor), [SetBonusDefinitionEditor](/advanced/editor/equipment-definitions/set-bonus-definition-editor), [SkillTreeEditor](/advanced/editor/abilities/skill-tree-editor), [SocketDefinitionEditor](/advanced/editor/equipment-definitions/socket-definition-editor), [StatEditor](/advanced/editor/stats/stat-editor), [StatGroupsEditor](/advanced/editor/stats/stat-groups-editor), [StatusEffectsEditor](/advanced/editor/stats/status-effects-editor), [TriggerTagsEditor](/advanced/editor/stats/trigger-tags-editor), [VendorEditor](/advanced/editor/items/vendor-editor), [WeaponClassDefinitionEditor](/advanced/editor/equipment-definitions/weapon-class-definition-editor)

Base resource editor - handles common functionality for all resource types

## Variables

| | | |
|---|---|---|
| `ResourceManager` | [resource_manager](#var-resource-manager) |  |
| `DialogManager` | [dialog_manager](#var-dialog-manager) |  |
| `Resource` | [current_resource](#var-current-resource) |  |
| `bool` | [is_loading](#var-is-loading) | `false` |
| `String` | [resource_type](#var-resource-type) | `""` |
| `String` | [create_dialog_title](#var-create-dialog-title) | `"Create Resource"` |
| `String` | [delete_confirmation_type](#var-delete-confirmation-type) | `"resource"` |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `void` | [mark_resource_modified](#method-mark-resource-modified)() |
| `Resource` | [get_current_resource](#method-get-current-resource)() |
| `void` | [refresh_files_list](#method-refresh-files-list)() |
| `void` | [focus_search](#method-focus-search)() |

## Signals

### show_info_dialog( title: String, message: String ) {#signal-show-info-dialog}

### show_error_dialog( message: String ) {#signal-show-error-dialog}

## Constants

- `const` **ITEM_DELETE** = `105`
- `const` **ITEM_DUPLICATE** = `106`
- `const` **ITEM_COPY_PATH** = `200`

## Variable descriptions

### ResourceManager resource_manager {#var-resource-manager}

*No description yet.*

### DialogManager dialog_manager {#var-dialog-manager}

*No description yet.*

### Resource current_resource {#var-current-resource}

*No description yet.*

### bool is_loading = false {#var-is-loading}

*No description yet.*

### String resource_type = "" {#var-resource-type}

*No description yet.*

### String create_dialog_title = "Create Resource" {#var-create-dialog-title}

*No description yet.*

### String delete_confirmation_type = "resource" {#var-delete-confirmation-type}

*No description yet.*

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*No description yet.*

### void mark_resource_modified() {#method-mark-resource-modified}

*No description yet.*

### Resource get_current_resource() {#method-get-current-resource}

*No description yet.*

### void refresh_files_list() {#method-refresh-files-list}

*No description yet.*

### void focus_search() {#method-focus-search}

*No description yet.*

