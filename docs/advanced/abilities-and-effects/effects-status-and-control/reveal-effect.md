<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RevealEffect

**Inherits:** [AreaEffect](/advanced/abilities-and-effects/effects-area/area-effect) < [CollisionEffect](/advanced/abilities-and-effects/effects-base/collision-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

RevealEffect reveals stealthed targets in area and prevents stealth application

## Properties

| | | |
|---|---|---|
| `bool` | [prevent_stealth](#prop-prevent-stealth) | `true` |
| `float` | [reveal_range](#prop-reveal-range) | `10.0` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `Array[Entity]` | [get_revealed_targets](#method-get-revealed-targets)( `effect_instance: EffectInstance` ) |
| `bool` | [is_entity_revealed](#method-is-entity-revealed)( `effect_instance: EffectInstance, entity: Entity` ) |
| `void` | [force_reveal_all](#method-force-reveal-all)( `effect_instance: EffectInstance` ) |
| `int` | [get_revealed_count](#method-get-revealed-count)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `void` | [set_prevent_stealth](#method-set-prevent-stealth)( `prevent: bool` ) |
| `void` | [set_reveal_range](#method-set-reveal-range)( `range: float` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_detailed_description](#method-get-detailed-description)( `effect_instance: EffectInstance` ) |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

*Reveal Settings*

### bool prevent_stealth = true {#prop-prevent-stealth}

Prevent new stealth while in area

### float reveal_range = 10.0 {#prop-reveal-range}

Range for tooltip display (uses shape for actual detection)

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Override to implement reveal logic

### Array[Entity] get_revealed_targets( effect_instance: EffectInstance ) {#method-get-revealed-targets}

Get all currently revealed targets

### bool is_entity_revealed( effect_instance: EffectInstance, entity: Entity ) {#method-is-entity-revealed}

Check if a specific entity is being revealed

### void force_reveal_all( effect_instance: EffectInstance ) {#method-force-reveal-all}

Force reveal all targets in area (useful for manual triggering)

### int get_revealed_count( effect_instance: EffectInstance ) {#method-get-revealed-count}

Get count of entities currently being revealed

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Override cleanup to remove stealth prevention

### void set_prevent_stealth( prevent: bool ) {#method-set-prevent-stealth}

Set whether to prevent stealth in area

### void set_reveal_range( range: float ) {#method-set-reveal-range}

Set reveal range for tooltip display

### String get_effect_description() {#method-get-effect-description}

Get effect description for tooltips

### String get_detailed_description( effect_instance: EffectInstance ) {#method-get-detailed-description}

Get detailed description for debugging

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

