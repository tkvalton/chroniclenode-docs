<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EffectDynamicPropertyPanel

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

Dynamic property panel for Effect editing Replaces manual property components with automatic generation Shows properties in titled sections based on inheritance hierarchy

## Variables

| | | |
|---|---|---|
| `Effect` | [current_effect](#var-current-effect) |  |
| `DialogManager` | [dialog_manager](#var-dialog-manager) |  |
| `Control` | [composite_properties_component](#var-composite-properties-component) |  |
| `bool` | [is_loading](#var-is-loading) | `false` |
| `Dictionary` | [property_sections](#var-property-sections) | `{}` |

## Methods

| | |
|---|---|
| `void` | [load_effect](#method-load-effect)( `effect: Effect, manager: DialogManager, composite_ui: Control = null` ) |

## Signals

### effect_changed() {#signal-effect-changed}

## Constants

- `Dictionary` **ID_LIST_DATABASES** = `{` - ========== LISTS ========== The databases the id lists of the effects choose from (property name -&gt; database type)
- `Dictionary` **NAME_LISTS** = `{` - The choices of the lists of fixed names (property name -&gt; the names)

## Variable descriptions

### Effect current_effect {#var-current-effect}

========== PROPERTIES ==========

### DialogManager dialog_manager {#var-dialog-manager}

*No description yet.*

### Control composite_properties_component {#var-composite-properties-component}

Reference to existing CompositeEffectProperties UI

### bool is_loading = false {#var-is-loading}

*No description yet.*

### Dictionary property_sections =  {#var-property-sections}

Property sections by class (for organizing properties)

## Method descriptions

### void load_effect( effect: Effect, manager: DialogManager, composite_ui: Control = null ) {#method-load-effect}

Setup and load effect properties

