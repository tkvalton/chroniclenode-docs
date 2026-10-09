<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# StatusEffectsEditor

**Inherits:** [ResourceEditor](/advanced/editor/base/resource-editor) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Status Effect Editor for managing status effect definitions

## Variables

| | | |
|---|---|---|
| `StatusEffectDefinition:` | [current_status_effect](#var-current-status-effect) |  |
| `Array` | [available_immunities](#var-available-immunities) | `[]  # Array of {id: int, name: String}` |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `StatusEffectDefinition` | [get_current_status_effect](#method-get-current-status-effect)() |
| `String` | [get_status_effect_preview](#method-get-status-effect-preview)() |
| `Array[Dictionary]` | [validate_current_status_effect](#method-validate-current-status-effect)() |

## Constants

- `const` **VALID_BASE_TYPES** = `[`

## Variable descriptions

### StatusEffectDefinition: current_status_effect {#var-current-status-effect}

*No description yet.*

### Array available_immunities = []  # Array of id: int, name: String {#var-available-immunities}

*No description yet.*

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*Overrides this function of [ResourceEditor](/advanced/editor/base/resource-editor).*

### StatusEffectDefinition get_current_status_effect() {#method-get-current-status-effect}

*No description yet.*

### String get_status_effect_preview() {#method-get-status-effect-preview}

*No description yet.*

### Array[Dictionary] validate_current_status_effect() {#method-validate-current-status-effect}

*No description yet.*

