<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EffectsTreeEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

Reusable tree-based editor for managing collections of effects. Supports ability on_use_effects, passive_effects, composite child_effects, charge tier effects, and combo step effects.

## Properties

| | | |
|---|---|---|
| `AbilityDefinition` | [parent_ability](#prop-parent-ability) |  |
| `CompositeEffect` | [parent_composite_effect](#prop-parent-composite-effect) |  |
| `Array[int]` | [effects_array](#prop-effects-array) | `[]` |
| `bool` | [read_only](#prop-read-only) | `false` |
| `bool` | [show_root_label](#prop-show-root-label) | `true` |
| `String` | [root_label_text](#prop-root-label-text) | `"Effects"` |
| `bool` | [allow_reordering](#prop-allow-reordering) | `true` |
| `bool` | [show_effect_details](#prop-show-effect-details) | `true` |

## Variables

| | | |
|---|---|---|
| `bool` | [is_loading](#var-is-loading) | `false` |
| `Effect` | [selected_effect](#var-selected-effect) | `null` |
| `int` | [selected_effect_index](#var-selected-effect-index) | `-1` |
| `ArrayMode` | [current_array_mode](#var-current-array-mode) | `ArrayMode.NONE` |
| `ResourceManager` | [resource_manager](#var-resource-manager) |  |
| `DialogManager` | [dialog_manager](#var-dialog-manager) |  |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `void` | [load_ability_on_use_effects](#method-load-ability-on-use-effects)( `ability: ActiveAbilityDefinition` ) |
| `void` | [load_ability_passive_effects](#method-load-ability-passive-effects)( `ability: PassiveAbilityDefinition` ) |
| `void` | [load_ability_effects](#method-load-ability-effects)( `ability: AbilityDefinition` ) |
| `void` | [load_composite_effects](#method-load-composite-effects)( `composite_effect: CompositeEffect` ) |
| `void` | [load_tier_effects](#method-load-tier-effects)( `charge_ability: PowerUpActiveAbilityDefinition, tier_index: int` ) |
| `void` | [load_combo_effects](#method-load-combo-effects)( `combo_ability: ComboActiveAbilityDefinition, step_index: int` ) |
| `void` | [set_effects_array](#method-set-effects-array)( `new_effects_array: Array[int], ability: AbilityDefinition = null, composite: CompositeEffect = null` ) |
| `Array[int]` | [get_effects_array](#method-get-effects-array)() |
| `ArrayMode` | [get_array_mode](#method-get-array-mode)() |
| `bool` | [has_effects](#method-has-effects)() |
| `int` | [get_effects_count](#method-get-effects-count)() |
| `void` | [apply_theme_manager](#method-apply-theme-manager)() |

## Signals

### effects_changed() {#signal-effects-changed}

### effect_selected( effect: Effect ) {#signal-effect-selected}

### effect_double_clicked( effect: Effect ) {#signal-effect-double-clicked}

### effect_add_requested( effect_id: int ) {#signal-effect-add-requested}

### effect_remove_requested( index: int ) {#signal-effect-remove-requested}

### effect_move_requested( from_index: int, to_index: int ) {#signal-effect-move-requested}

## Enumerations

### enum ArrayMode {#enum-arraymode}

Tracks which array on the parent resource this editor is currently bound to. This lets signal handlers in the ability editor know which array to mutate.

- **NONE** = `0`
- **ABILITY_ON_USE** = `1` - ActiveAbilityDefinition.on_use_effects
- **ABILITY_PASSIVE** = `2` - PassiveAbilityDefinition.passive_effects
- **COMPOSITE** = `3` - CompositeEffect.child_effects
- **TIER** = `4` - PowerUpActiveAbilityDefinition.tier_effects[n]
- **COMBO_STEP** = `5` - ComboActiveAbilityDefinition.combo_effects[n]

## Constants

- `int` **TREE_ICON_SIZE** = `24`
- `const` **MENU_ADD_EFFECT** = `100`
- `const` **MENU_REMOVE_EFFECT** = `101`
- `const` **MENU_EDIT_EFFECT** = `102`
- `const` **MENU_MOVE_UP** = `104`
- `const` **MENU_MOVE_DOWN** = `105`

## Property descriptions

### AbilityDefinition parent_ability {#prop-parent-ability}

*No description yet.*

### CompositeEffect parent_composite_effect {#prop-parent-composite-effect}

*No description yet.*

### Array[int] effects_array = [] {#prop-effects-array}

*No description yet.*

### bool read_only = false {#prop-read-only}

*No description yet.*

### bool show_root_label = true {#prop-show-root-label}

*No description yet.*

### String root_label_text = "Effects" {#prop-root-label-text}

*No description yet.*

### bool allow_reordering = true {#prop-allow-reordering}

*No description yet.*

### bool show_effect_details = true {#prop-show-effect-details}

*No description yet.*

## Variable descriptions

### bool is_loading = false {#var-is-loading}

*No description yet.*

### Effect selected_effect = null {#var-selected-effect}

*No description yet.*

### int selected_effect_index = -1 {#var-selected-effect-index}

*No description yet.*

### ArrayMode current_array_mode = ArrayMode.NONE {#var-current-array-mode}

*No description yet.*

### ResourceManager resource_manager {#var-resource-manager}

*No description yet.*

### DialogManager dialog_manager {#var-dialog-manager}

*No description yet.*

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*No description yet.*

### void load_ability_on_use_effects( ability: ActiveAbilityDefinition ) {#method-load-ability-on-use-effects}

Load the on_use_effects array from an ActiveAbilityDefinition. Use this for the "On Use Effects" section of the ability editor.

### void load_ability_passive_effects( ability: PassiveAbilityDefinition ) {#method-load-ability-passive-effects}

Load the passive_effects array from a PassiveAbilityDefinition (or subclass). Use this for the "Passive Effects" section of the ability editor.

### void load_ability_effects( ability: AbilityDefinition ) {#method-load-ability-effects}

Legacy entry point: loads ability.effects (now maps to on_use for active, passive for passive). Kept for backwards compatibility — prefer the explicit methods above.

### void load_composite_effects( composite_effect: CompositeEffect ) {#method-load-composite-effects}

Load child effects from a CompositeEffect.

### void load_tier_effects( charge_ability: PowerUpActiveAbilityDefinition, tier_index: int ) {#method-load-tier-effects}

Load effects for a specific charge tier.

### void load_combo_effects( combo_ability: ComboActiveAbilityDefinition, step_index: int ) {#method-load-combo-effects}

Load effects for a specific combo step.

### void set_effects_array( new_effects_array: Array[int], ability: AbilityDefinition = null, composite: CompositeEffect = null ) {#method-set-effects-array}

Set a custom effects array directly (generic fallback).

### Array[int] get_effects_array() {#method-get-effects-array}

Get the current effects array.

### ArrayMode get_array_mode() {#method-get-array-mode}

Get the current array mode so signal handlers know which array was modified.

### bool has_effects() {#method-has-effects}

*No description yet.*

### int get_effects_count() {#method-get-effects-count}

*No description yet.*

### void apply_theme_manager() {#method-apply-theme-manager}

*No description yet.*

