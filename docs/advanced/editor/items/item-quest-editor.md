<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ItemQuestEditor

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Item Quest Editor - handles ItemDefinitionQuest specific properties Designed to be attached as a scene to ItemEditor

## Variables

| | | |
|---|---|---|
| `ItemDefinitionQuest` | [current_quest_item](#var-current-quest-item) |  |
| `ResourceManager` | [resource_manager](#var-resource-manager) |  |
| `bool` | [is_loading](#var-is-loading) | `false` |
| `Array[Quest]` | [available_quests](#var-available-quests) | `[]` |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `void` | [load_quest_properties](#method-load-quest-properties)( `quest_item: ItemDefinitionQuest` ) |
| `void` | [copy_quest_properties](#method-copy-quest-properties)( `original: ItemDefinitionQuest, duplicate: ItemDefinitionQuest` ) |
| `Array[Dictionary]` | [validate_quest_properties](#method-validate-quest-properties)() |
| `void` | [create_new_quest_for_item](#method-create-new-quest-for-item)() |
| `void` | [suggest_quest_item_defaults](#method-suggest-quest-item-defaults)() |
| `ItemDefinitionQuest` | [get_current_quest_item](#method-get-current-quest-item)() |
| `void` | [set_quest_item](#method-set-quest-item)( `quest_item: ItemDefinitionQuest` ) |
| `bool` | [is_valid](#method-is-valid)() |
| `Array[Dictionary]` | [get_validation_errors](#method-get-validation-errors)() |
| `void` | [refresh_available_quests](#method-refresh-available-quests)() |
| `Quest` | [get_associated_quest](#method-get-associated-quest)() |
| `void` | [open_associated_quest_in_editor](#method-open-associated-quest-in-editor)() |

## Signals

### property_changed() {#signal-property-changed}

## Variable descriptions

### ItemDefinitionQuest current_quest_item {#var-current-quest-item}

*No description yet.*

### ResourceManager resource_manager {#var-resource-manager}

*No description yet.*

### bool is_loading = false {#var-is-loading}

*No description yet.*

### Array[Quest] available_quests = [] {#var-available-quests}

*No description yet.*

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*No description yet.*

### void load_quest_properties( quest_item: ItemDefinitionQuest ) {#method-load-quest-properties}

*No description yet.*

### void copy_quest_properties( original: ItemDefinitionQuest, duplicate: ItemDefinitionQuest ) {#method-copy-quest-properties}

*No description yet.*

### Array[Dictionary] validate_quest_properties() {#method-validate-quest-properties}

*No description yet.*

### void create_new_quest_for_item() {#method-create-new-quest-for-item}

*No description yet.*

### void suggest_quest_item_defaults() {#method-suggest-quest-item-defaults}

*No description yet.*

### ItemDefinitionQuest get_current_quest_item() {#method-get-current-quest-item}

*No description yet.*

### void set_quest_item( quest_item: ItemDefinitionQuest ) {#method-set-quest-item}

*No description yet.*

### bool is_valid() {#method-is-valid}

*No description yet.*

### Array[Dictionary] get_validation_errors() {#method-get-validation-errors}

*No description yet.*

### void refresh_available_quests() {#method-refresh-available-quests}

*No description yet.*

### Quest get_associated_quest() {#method-get-associated-quest}

*No description yet.*

### void open_associated_quest_in_editor() {#method-open-associated-quest-in-editor}

*No description yet.*

