<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CompositeEffectProperties

**Inherits:** [EffectPropertiesBase](/advanced/editor/abilities/effect-properties-base) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Property panel for CompositeEffect - handles child effects management

## Variables

| | | |
|---|---|---|
| `ResourceManager` | [resource_manager](#var-resource-manager) |  |
| `DialogManager` | [dialog_manager](#var-dialog-manager) |  |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `Array[String]` | [validate_properties](#method-validate-properties)() |
| `bool` | [has_child_effects](#method-has-child-effects)() |
| `bool` | [has_active_child_effects](#method-has-active-child-effects)() |
| `bool` | [removes_effects_on_finish](#method-removes-effects-on-finish)() |
| `int` | [get_child_effects_count](#method-get-child-effects-count)() |
| `int` | [get_active_child_effects_count](#method-get-active-child-effects-count)() |
| `Array[String]` | [get_child_effects_types](#method-get-child-effects-types)() |
| `String` | [get_composite_summary](#method-get-composite-summary)() |
| `bool` | [is_configuration_complete](#method-is-configuration-complete)() |
| `String` | [get_configuration_status](#method-get-configuration-status)() |
| `String` | [get_effects_breakdown](#method-get-effects-breakdown)() |
| `String` | [get_performance_impact](#method-get-performance-impact)() |
| `Array[String]` | [get_recommended_optimizations](#method-get-recommended-optimizations)() |

## Signals

### strategy_modified() {#signal-strategy-modified}

## Variable descriptions

### ResourceManager resource_manager {#var-resource-manager}

*No description yet.*

### DialogManager dialog_manager {#var-dialog-manager}

*No description yet.*

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*No description yet.*

### Array[String] validate_properties() {#method-validate-properties}

Override this to validate current property values *(from [EffectPropertiesBase](/advanced/editor/abilities/effect-properties-base))*

### bool has_child_effects() {#method-has-child-effects}

*No description yet.*

### bool has_active_child_effects() {#method-has-active-child-effects}

*No description yet.*

### bool removes_effects_on_finish() {#method-removes-effects-on-finish}

*No description yet.*

### int get_child_effects_count() {#method-get-child-effects-count}

*No description yet.*

### int get_active_child_effects_count() {#method-get-active-child-effects-count}

*No description yet.*

### Array[String] get_child_effects_types() {#method-get-child-effects-types}

*No description yet.*

### String get_composite_summary() {#method-get-composite-summary}

*No description yet.*

### bool is_configuration_complete() {#method-is-configuration-complete}

*No description yet.*

### String get_configuration_status() {#method-get-configuration-status}

*No description yet.*

### String get_effects_breakdown() {#method-get-effects-breakdown}

*No description yet.*

### String get_performance_impact() {#method-get-performance-impact}

*No description yet.*

### Array[String] get_recommended_optimizations() {#method-get-recommended-optimizations}

*No description yet.*

