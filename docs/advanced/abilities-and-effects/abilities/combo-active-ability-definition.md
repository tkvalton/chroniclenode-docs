<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ComboActiveAbilityDefinition

**Inherits:** [ActiveAbilityDefinition](/advanced/abilities-and-effects/abilities/active-ability-definition) < [PassiveAbilityDefinition](/advanced/abilities-and-effects/abilities/passive-ability-definition) < [AbilityDefinition](/advanced/abilities-and-effects/abilities/ability-definition) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

ComboActiveAbilityDefinition supports multi-step combo sequences. Step 0 uses the original on_use_effects and properties. Subsequent steps use the combo arrays, with null/empty values falling back to originals.

## Properties

| | | |
|---|---|---|
| `Array[Array]` | [combo_effects](#prop-combo-effects) | `[]` |
| `Array[float]` | [combo_costs](#prop-combo-costs) | `[]` |
| `Array[CompressedTexture2D]` | [combo_icons](#prop-combo-icons) | `[]` |
| `Array[String]` | [combo_names](#prop-combo-names) | `[]` |
| `ComboCooldownMode` | [combo_cooldown_mode](#prop-combo-cooldown-mode) | `ComboCooldownMode.COOLDOWN_ON_COMPLETION` |
| `float` | [combo_timeout](#prop-combo-timeout) | `6.0` |
| `bool` | [combo_loop](#prop-combo-loop) | `true` |

## Methods

| | |
|---|---|
| `void` | [handle_completion](#method-handle-completion)( `ability_instance: AbilityInstance` ) |
| `Array` | [get_current_on_use_effects](#method-get-current-on-use-effects)( `ability_instance: AbilityInstance` ) |
| `void` | [cleanup_ability_logic](#method-cleanup-ability-logic)( `ability_instance: AbilityInstance` ) |
| `Array` | [get_combo_effects](#method-get-combo-effects)( `combo_index: int` ) |
| `float` | [get_combo_cost](#method-get-combo-cost)( `combo_index: int` ) |
| `CompressedTexture2D` | [get_combo_icon](#method-get-combo-icon)( `combo_index: int` ) |
| `String` | [get_combo_name](#method-get-combo-name)( `combo_index: int` ) |
| `int` | [get_max_combo_steps](#method-get-max-combo-steps)() |
| `String` | [get_combo_name_for_step](#method-get-combo-name-for-step)( `step: int` ) |
| `bool` | [combo_step_has_custom_effects](#method-combo-step-has-custom-effects)( `step: int` ) |
| `bool` | [combo_step_has_custom_cost](#method-combo-step-has-custom-cost)( `step: int` ) |
| `String` | [get_cooldown_mode_string](#method-get-cooldown-mode-string)() |
| `String` | [get_tooltip_description](#method-get-tooltip-description)() |

## Enumerations

### enum ComboCooldownMode {#enum-combocooldownmode}

The options of combo cooldown mode: cooldown on completion, cooldown on every use, cooldown on timeout or completion.

- **COOLDOWN_ON_COMPLETION** = `0` - Cooldown only after final step
- **COOLDOWN_ON_EVERY_USE** = `1` - Cooldown on every combo step
- **COOLDOWN_ON_TIMEOUT_OR_COMPLETION** = `2` - Cooldown when combo times out or completes

## Property descriptions

*Combo Settings*

### Array[Array] combo_effects = [] {#prop-combo-effects}

On-use effects for 2nd, 3rd, 4th+ combo steps. Index 0 = 2nd use, Index 1 = 3rd use, etc. Empty arrays fall back to the original on_use_effects array.

### Array[float] combo_costs = [] {#prop-combo-costs}

Resource costs for 2nd, 3rd, 4th+ combo steps. Empty/shorter arrays use original cost_amount.

### Array[CompressedTexture2D] combo_icons = [] {#prop-combo-icons}

Icons for 2nd, 3rd, 4th+ combo steps. Null entries use the original icon.

### Array[String] combo_names = [] {#prop-combo-names}

Display names for 2nd, 3rd, 4th+ combo steps. Empty strings use the original display_name.

### ComboCooldownMode combo_cooldown_mode = ComboCooldownMode.COOLDOWN_ON_COMPLETION {#prop-combo-cooldown-mode}

How cooldowns are applied during combo sequences.

*Combo Timing*

### float combo_timeout = 6.0 {#prop-combo-timeout}

How long the player has to use the next combo step before the sequence resets.

### bool combo_loop = true {#prop-combo-loop}

Whether the combo loops back to step 0 after the final step.

## Method descriptions

### void handle_completion( ability_instance: AbilityInstance ) {#method-handle-completion}

Called when a step is done: gains the resource and moves to the next step.

### Array get_current_on_use_effects( ability_instance: AbilityInstance ) {#method-get-current-on-use-effects}

Return on-use effects for the current combo step.

### void cleanup_ability_logic( ability_instance: AbilityInstance ) {#method-cleanup-ability-logic}

Stops the combo timer and goes back to the first step.

### Array get_combo_effects( combo_index: int ) {#method-get-combo-effects}

The effects of a step (step 0 is the ability itself).

### float get_combo_cost( combo_index: int ) {#method-get-combo-cost}

The cost of a step.

### CompressedTexture2D get_combo_icon( combo_index: int ) {#method-get-combo-icon}

The icon of a step.

### String get_combo_name( combo_index: int ) {#method-get-combo-name}

The name of a step.

### int get_max_combo_steps() {#method-get-max-combo-steps}

How many steps the combo has, the first one included.

### String get_combo_name_for_step( step: int ) {#method-get-combo-name-for-step}

The name of a step.

### bool combo_step_has_custom_effects( step: int ) {#method-combo-step-has-custom-effects}

Does the step have effects of its own?

### bool combo_step_has_custom_cost( step: int ) {#method-combo-step-has-custom-cost}

Does the step have a cost of its own?

### String get_cooldown_mode_string() {#method-get-cooldown-mode-string}

The name of the cooldown mode, for the tooltip.

### String get_tooltip_description() {#method-get-tooltip-description}

The text of the tooltip, with the combo.

