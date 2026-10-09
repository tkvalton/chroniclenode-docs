<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AbilityEditor

**Inherits:** [ResourceEditor](/advanced/editor/base/resource-editor) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Ability Editor for managing ability resources - refactored to use ResourceEditor base

## Variables

| | | |
|---|---|---|
| `UseStrategyDynamicPanel` | [use_strategy_editor](#var-use-strategy-editor) |  |
| `TargetStrategyDynamicPanel` | [target_strategy_editor](#var-target-strategy-editor) |  |
| `AbilityDefinition:` | [current_ability](#var-current-ability) |  |
| `PopupMenu` | [requirements_context_menu](#var-requirements-context-menu) |  |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `AbilityDefinition` | [get_current_ability](#method-get-current-ability)() |
| `void` | [refresh_dropdowns](#method-refresh-dropdowns)() |

## Enumerations

### enum AbilityType {#enum-abilitytype}

- **PASSIVE** = `0`
- **ACTIVE** = `1`
- **POWER_UP** = `2`
- **CHARGE_STACK** = `3`
- **COMBO** = `4`

## Constants

- `const` **NO_COST_INDEX** = `0`
- `const` **NO_GAIN_INDEX** = `0`

## Variable descriptions

### UseStrategyDynamicPanel use_strategy_editor {#var-use-strategy-editor}

*No description yet.*

### TargetStrategyDynamicPanel target_strategy_editor {#var-target-strategy-editor}

*No description yet.*

### AbilityDefinition: current_ability {#var-current-ability}

*No description yet.*

### PopupMenu requirements_context_menu {#var-requirements-context-menu}

*No description yet.*

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*Overrides this function of [ResourceEditor](/advanced/editor/base/resource-editor).*

### AbilityDefinition get_current_ability() {#method-get-current-ability}

*No description yet.*

### void refresh_dropdowns() {#method-refresh-dropdowns}

*No description yet.*

