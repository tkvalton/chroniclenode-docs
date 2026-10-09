<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# FactionEditor

**Inherits:** [ResourceEditor](/advanced/editor/base/resource-editor) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Faction Editor for managing faction definitions

## Variables

| | | |
|---|---|---|
| `ReputationLevelDialog` | [reputation_level_dialog](#var-reputation-level-dialog) |  |
| `FactionDefinition:` | [current_faction](#var-current-faction) |  |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `Array[String]` | [validate_faction](#method-validate-faction)() |
| `void` | [perform_full_validation](#method-perform-full-validation)() |
| `FactionDefinition` | [get_current_faction](#method-get-current-faction)() |
| `void` | [refresh_all_lists](#method-refresh-all-lists)() |

## Enumerations

### enum ContextMenuId {#enum-contextmenuid}

- **EDIT_REPUTATION_LEVEL** = `100`
- **REMOVE_REPUTATION_LEVEL** = `101`
- **MOVE_LEVEL_UP** = `102`
- **MOVE_LEVEL_DOWN** = `103`
- **SET_RELATIONSHIP** = `300`
- **REMOVE_RELATIONSHIP** = `301`

## Variable descriptions

### ReputationLevelDialog reputation_level_dialog {#var-reputation-level-dialog}

*No description yet.*

### FactionDefinition: current_faction {#var-current-faction}

*No description yet.*

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*Overrides this function of [ResourceEditor](/advanced/editor/base/resource-editor).*

### Array[String] validate_faction() {#method-validate-faction}

*No description yet.*

### void perform_full_validation() {#method-perform-full-validation}

*No description yet.*

### FactionDefinition get_current_faction() {#method-get-current-faction}

*No description yet.*

### void refresh_all_lists() {#method-refresh-all-lists}

*No description yet.*

