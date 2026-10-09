<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TargetStrategyDynamicPanel

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

Dynamic property panel for TargetStrategy editing. Discovers all TargetStrategyDefinition subclass scripts in the target_strategy folder, lets the user pick one via dropdown, then auto-generates property controls from the selected class's exported properties using reflection.

## Description

Special property handling: marker_texture    → OptionButton populated from GameplayConfig.ability_target_textures has_marker        → CheckBox that shows/hides the marker_* sub-section fixed_points      → Array[Vector3] rendered as a dynamic add/remove list

Conditional sub-sections: MARKER_CHILD_PROPS are hidden until has_marker is checked

## Variables

| | | |
|---|---|---|
| `ActiveAbilityDefinition` | [current_ability](#var-current-ability) |  |
| `DialogManager` | [dialog_manager](#var-dialog-manager) |  |
| `bool` | [is_loading](#var-is-loading) | `false` |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `p_dialog_manager: DialogManager` ) |
| `void` | [load_ability](#method-load-ability)( `ability: ActiveAbilityDefinition` ) |

## Signals

### strategy_modified() {#signal-strategy-modified}

## Variable descriptions

### ActiveAbilityDefinition current_ability {#var-current-ability}

*No description yet.*

### DialogManager dialog_manager {#var-dialog-manager}

*No description yet.*

### bool is_loading = false {#var-is-loading}

*No description yet.*

## Method descriptions

### void setup( p_dialog_manager: DialogManager ) {#method-setup}

*No description yet.*

### void load_ability( ability: ActiveAbilityDefinition ) {#method-load-ability}

*No description yet.*

