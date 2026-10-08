<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EqualizeHealingAreaEffect

**Inherits:** [EqualizeAreaEffect](/advanced/abilities-and-effects/effects-area/equalize-area-effect) < [MinimumApplicationAreaEffect](/advanced/abilities-and-effects/effects-area/minimum-application-area-effect) < [AreaEffect](/advanced/abilities-and-effects/effects-area/area-effect) < [CollisionEffect](/advanced/abilities-and-effects/effects-base/collision-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

EqualizeHealingAreaEffect distributes healing among all targets in area.

## Properties

| | | |
|---|---|---|
| `float` | [base_healing](#prop-base-healing) | `1.0` |
| `float` | [weapon_damage_percentage](#prop-weapon-damage-percentage) | `0.0` |

## Methods

| | |
|---|---|
| `void` | [apply_equalization_to_targets](#method-apply-equalization-to-targets)( `effect_instance: EffectInstance, targets: Array[Variant]` ) |
| `Dictionary` | [get_healing_distribution_preview](#method-get-healing-distribution-preview)( `effect_instance: EffectInstance` ) |
| `Dictionary` | [get_detailed_healing_preview](#method-get-detailed-healing-preview)( `effect_instance: EffectInstance` ) |
| `Array[Variant]` | [get_targets_needing_healing](#method-get-targets-needing-healing)( `effect_instance: EffectInstance` ) |
| `Array[Variant]` | [get_targets_that_would_receive_healing](#method-get-targets-that-would-receive-healing)( `effect_instance: EffectInstance` ) |
| `bool` | [any_targets_need_healing](#method-any-targets-need-healing)( `effect_instance: EffectInstance` ) |
| `bool` | [has_meaningful_healing_targets](#method-has-meaningful-healing-targets)( `effect_instance: EffectInstance, min_effective_healing: float = 1.0` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_mode_description](#method-get-mode-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

*Healing Settings*

### float base_healing = 1.0 {#prop-base-healing}

The base healing ammount targets should recive

### float weapon_damage_percentage = 0.0 {#prop-weapon-damage-percentage}

Percentage of weapon damage to add to healing

## Method descriptions

### void apply_equalization_to_targets( effect_instance: EffectInstance, targets: Array[Variant] ) {#method-apply-equalization-to-targets}

Implement the specific healing distribution logic using CombatSystem

### Dictionary get_healing_distribution_preview( effect_instance: EffectInstance ) {#method-get-healing-distribution-preview}

Get healing distribution preview for UI/tooltips

### Dictionary get_detailed_healing_preview( effect_instance: EffectInstance ) {#method-get-detailed-healing-preview}

Get detailed healing breakdown for each target

### Array[Variant] get_targets_needing_healing( effect_instance: EffectInstance ) {#method-get-targets-needing-healing}

Get targets that actually need healing (not at full health)

### Array[Variant] get_targets_that_would_receive_healing( effect_instance: EffectInstance ) {#method-get-targets-that-would-receive-healing}

Get only targets that would receive healing (useful for EQUALIZE_CURRENT mode)

### bool any_targets_need_healing( effect_instance: EffectInstance ) {#method-any-targets-need-healing}

Check if any targets in area need healing

### bool has_meaningful_healing_targets( effect_instance: EffectInstance, min_effective_healing: float = 1.0 ) {#method-has-meaningful-healing-targets}

Check if healing would be meaningful (not all overheal)

### String get_effect_description() {#method-get-effect-description}

*No description yet.*

### String get_mode_description() {#method-get-mode-description}

Get mode-specific description

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

