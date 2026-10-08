<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AreaEqualizeHealthEffect

**Inherits:** [EqualizeAreaEffect](/advanced/abilities-and-effects/effects-area/equalize-area-effect) < [MinimumApplicationAreaEffect](/advanced/abilities-and-effects/effects-area/minimum-application-area-effect) < [AreaEffect](/advanced/abilities-and-effects/effects-area/area-effect) < [CollisionEffect](/advanced/abilities-and-effects/effects-base/collision-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

AreaEqualizeHealthEffect equalizes health among all entities in the area.

## Properties

| | | |
|---|---|---|
| `int` | [equalize_damage_type](#prop-equalize-damage-type) | `0` |

## Methods

| | |
|---|---|
| `void` | [apply_equalization_to_targets](#method-apply-equalization-to-targets)( `effect_instance: EffectInstance, targets: Array[Variant]` ) |
| `Dictionary` | [get_health_stats](#method-get-health-stats)( `effect_instance: EffectInstance` ) |
| `bool` | [needs_equalization](#method-needs-equalization)( `effect_instance: EffectInstance, variance_threshold: float = 1.0` ) |
| `Dictionary` | [get_equalization_preview](#method-get-equalization-preview)( `effect_instance: EffectInstance` ) |
| `Array[Variant]` | [get_entities_needing_healing](#method-get-entities-needing-healing)( `effect_instance: EffectInstance` ) |
| `Array[Variant]` | [get_entities_needing_damage](#method-get-entities-needing-damage)( `effect_instance: EffectInstance` ) |
| `bool` | [is_equalization_meaningful](#method-is-equalization-meaningful)( `effect_instance: EffectInstance, min_variance: float = 5.0` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_detailed_description](#method-get-detailed-description)( `effect_instance: EffectInstance` ) |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

### int equalize_damage_type = 0 {#prop-equalize-damage-type}

Damage type for equalizing damage (when reducing health)

## Method descriptions

### void apply_equalization_to_targets( effect_instance: EffectInstance, targets: Array[Variant] ) {#method-apply-equalization-to-targets}

Implement the specific health equalization logic

### Dictionary get_health_stats( effect_instance: EffectInstance ) {#method-get-health-stats}

Get the health statistics for all targets in the area

### bool needs_equalization( effect_instance: EffectInstance, variance_threshold: float = 1.0 ) {#method-needs-equalization}

Check if equalization is needed (health variance above threshold)

### Dictionary get_equalization_preview( effect_instance: EffectInstance ) {#method-get-equalization-preview}

Get equalization preview for UI/tooltips

### Array[Variant] get_entities_needing_healing( effect_instance: EffectInstance ) {#method-get-entities-needing-healing}

Get entities that would receive healing

### Array[Variant] get_entities_needing_damage( effect_instance: EffectInstance ) {#method-get-entities-needing-damage}

Get entities that would take damage

### bool is_equalization_meaningful( effect_instance: EffectInstance, min_variance: float = 5.0 ) {#method-is-equalization-meaningful}

Check if effect would actually do anything useful

### String get_effect_description() {#method-get-effect-description}

*Overrides this function of [EqualizeAreaEffect](/advanced/abilities-and-effects/effects-area/equalize-area-effect).*

### String get_detailed_description( effect_instance: EffectInstance ) {#method-get-detailed-description}

Get detailed description for tooltips

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [EqualizeAreaEffect](/advanced/abilities-and-effects/effects-area/equalize-area-effect).*

