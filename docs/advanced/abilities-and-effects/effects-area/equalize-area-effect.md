<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EqualizeAreaEffect

**Inherits:** [MinimumApplicationAreaEffect](/advanced/abilities-and-effects/effects-area/minimum-application-area-effect) < [AreaEffect](/advanced/abilities-and-effects/effects-area/area-effect) < [CollisionEffect](/advanced/abilities-and-effects/effects-base/collision-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [AreaEqualizeHealthEffect](/advanced/abilities-and-effects/effects-area/area-equalize-health-effect), [EqualizeDamageAreaEffect](/advanced/abilities-and-effects/effects-area/equalize-damage-area-effect), [EqualizeHealingAreaEffect](/advanced/abilities-and-effects/effects-area/equalize-healing-area-effect)

Base class for effects that distribute/equalize values among targets in an area

## Properties

| | | |
|---|---|---|
| `EqualizeMode` | [equalize_mode](#prop-equalize-mode) | `EqualizeMode.DISTRIBUTE_TOTAL` |
| `int` | [minimum_targets](#prop-minimum-targets) | `1` |
| `bool` | [include_originator](#prop-include-originator) | `false` |
| `bool` | [equalize_on_enter](#prop-equalize-on-enter) | `false` |
| `bool` | [equalize_on_exit](#prop-equalize-on-exit) | `false` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `Array[Variant]` | [get_equalization_targets](#method-get-equalization-targets)( `effect_instance: EffectInstance` ) |
| `bool` | [should_apply_equalization](#method-should-apply-equalization)( `targets: Array[Variant]` ) |
| `void` | [apply_equalization_to_targets](#method-apply-equalization-to-targets)( `effect_instance: EffectInstance, targets: Array[Variant]` ) |
| `void` | [apply_healing_to_entity](#method-apply-healing-to-entity)( `entity: Variant, healing_amount: float, effect_instance: EffectInstance` ) |
| `void` | [apply_damage_to_entity](#method-apply-damage-to-entity)( `entity: Variant, damage_amount: float, damage_type: int, effect_instance: EffectInstance` ) |
| `Array[Variant]` | [get_current_area_targets](#method-get-current-area-targets)( `effect_instance: EffectInstance` ) |
| `bool` | [is_target_in_equalization](#method-is-target-in-equalization)( `effect_instance: EffectInstance, target: Variant` ) |
| `int` | [get_equalization_target_count](#method-get-equalization-target-count)( `effect_instance: EffectInstance` ) |
| `bool` | [has_meaningful_equalization_targets](#method-has-meaningful-equalization-targets)( `effect_instance: EffectInstance` ) |
| `void` | [set_equalize_mode](#method-set-equalize-mode)( `mode: EqualizeMode` ) |
| `void` | [set_minimum_targets](#method-set-minimum-targets)( `count: int` ) |
| `void` | [set_include_originator](#method-set-include-originator)( `include: bool` ) |
| `void` | [set_equalize_on_movement](#method-set-equalize-on-movement)( `on_enter: bool, on_exit: bool` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_equalize_mode_description](#method-get-equalize-mode-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Enumerations

### enum EqualizeMode {#enum-equalizemode}

- **DISTRIBUTE_TOTAL** = `0`
- **EQUALIZE_CURRENT** = `1`

## Property descriptions

*Equalization Settings*

### EqualizeMode equalize_mode = EqualizeMode.DISTRIBUTE_TOTAL {#prop-equalize-mode}

*No description yet.*

### int minimum_targets = 1 {#prop-minimum-targets}

Minimum targets needed for effect to work

### bool include_originator = false {#prop-include-originator}

Whether originator counts as a target

### bool equalize_on_enter = false {#prop-equalize-on-enter}

Whether to equalize when entities enter the area

### bool equalize_on_exit = false {#prop-equalize-on-exit}

Whether to equalize when entities leave the area

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Override to implement equalization instead of applying child effects

### Array[Variant] get_equalization_targets( effect_instance: EffectInstance ) {#method-get-equalization-targets}

Get targets for equalization (including originator if specified)

### bool should_apply_equalization( targets: Array[Variant] ) {#method-should-apply-equalization}

Check if equalization should be applied

### void apply_equalization_to_targets( effect_instance: EffectInstance, targets: Array[Variant] ) {#method-apply-equalization-to-targets}

Virtual method for child classes to implement their specific equalization logic

### void apply_healing_to_entity( entity: Variant, healing_amount: float, effect_instance: EffectInstance ) {#method-apply-healing-to-entity}

Apply healing to an entity (used by child classes). Bypasses the healer's calculation phase: the amount is exact

### void apply_damage_to_entity( entity: Variant, damage_amount: float, damage_type: int, effect_instance: EffectInstance ) {#method-apply-damage-to-entity}

Apply damage to an entity (used by child classes). Bypasses the attacker's calculation phase: the amount is exact and cannot be avoided

### Array[Variant] get_current_area_targets( effect_instance: EffectInstance ) {#method-get-current-area-targets}

Get current targets in area (same as equalization targets but without originator logic)

### bool is_target_in_equalization( effect_instance: EffectInstance, target: Variant ) {#method-is-target-in-equalization}

Check if a specific target is in the equalization list

### int get_equalization_target_count( effect_instance: EffectInstance ) {#method-get-equalization-target-count}

Get count of targets that would be included in equalization

### bool has_meaningful_equalization_targets( effect_instance: EffectInstance ) {#method-has-meaningful-equalization-targets}

Check if equalization would actually do anything

### void set_equalize_mode( mode: EqualizeMode ) {#method-set-equalize-mode}

Set equalization mode

### void set_minimum_targets( count: int ) {#method-set-minimum-targets}

Set minimum target requirement

### void set_include_originator( include: bool ) {#method-set-include-originator}

Set whether to include originator

### void set_equalize_on_movement( on_enter: bool, on_exit: bool ) {#method-set-equalize-on-movement}

Set enter/exit equalization behavior

### String get_effect_description() {#method-get-effect-description}

*Overrides this function of [MinimumApplicationAreaEffect](/advanced/abilities-and-effects/effects-area/minimum-application-area-effect).*

### String get_equalize_mode_description() {#method-get-equalize-mode-description}

Get mode-specific description

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [MinimumApplicationAreaEffect](/advanced/abilities-and-effects/effects-area/minimum-application-area-effect).*

