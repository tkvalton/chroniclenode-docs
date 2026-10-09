<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EffectEditor

**Inherits:** [ResourceEditor](/advanced/editor/base/resource-editor) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Effect Editor for managing effect resources - refactored to use ResourceEditor base

## Variables

| | | |
|---|---|---|
| `Effect:` | [current_effect](#var-current-effect) |  |
| `Array` | [available_effect_classes](#var-available-effect-classes) | `[]` |
| `bool` | [is_creating_new_effect](#var-is-creating-new-effect) | `false` |
| `Array[String]` | [immediate_blacklisted_effects](#var-immediate-blacklisted-effects) | `[ ... ]` |
| `Variant` | [property_containers](#var-property-containers) | `[]` |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `Effect` | [get_current_effect](#method-get-current-effect)() |

## Variable descriptions

### Effect: current_effect {#var-current-effect}

*No description yet.*

### Array available_effect_classes = [] {#var-available-effect-classes}

*No description yet.*

### bool is_creating_new_effect = false {#var-is-creating-new-effect}

*No description yet.*

### Array[String] immediate_blacklisted_effects {#var-immediate-blacklisted-effects}

Effect types that should NOT have the Immediate option These effects don't make sense as immediate effects

### property_containers = [] {#var-property-containers}

*No description yet.*

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*Overrides this function of [ResourceEditor](/advanced/editor/base/resource-editor).*

### Effect get_current_effect() {#method-get-current-effect}

*No description yet.*

