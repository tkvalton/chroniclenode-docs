<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# UseStrategyDynamicPanel

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

Dynamic property panel for UseStrategy editing. Discovers all UseStrategyDefinition subclass scripts in the use_strategy folder, lets the user pick one via dropdown, then auto-generates property controls from the selected class's exported properties using reflection.

## Description

Special property handling: casting_animation / on_cast_animation   → AnimationSelectionAbility dialog casting_sfx / on_cast_sfx               → SFX dialog (typed subclass) voice_cast_sfx                          → EntityVoiceSFXSelection dialog casting_vfx / cast_vfx / ability_telegraph → VFX dialog toggle_group                            → OptionButton from Database toggle groups drain_pool_id                           → pool DatabaseResourceButton active_icon                             → FileDialog (Texture2D) has_resource_drain                      → CheckBox that shows/hides the pool sub-section

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

