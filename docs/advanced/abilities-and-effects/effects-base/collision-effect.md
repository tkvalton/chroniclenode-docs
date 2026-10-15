<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CollisionEffect

**Inherits:** [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [AreaEffect](/advanced/abilities-and-effects/effects-area/area-effect), [WeaponCollisionEffect](/advanced/abilities-and-effects/effects-area/weapon-collision-effect)

CollisionEffect using pure raycast collision detection for reliability

## Properties

| | | |
|---|---|---|
| `AffectedTargets` | [affected_targets](#prop-affected-targets) | `AffectedTargets.ALL` |
| `bool` | [affects_neutrals](#prop-affects-neutrals) | `false` |
| `bool` | [gain_on_enter](#prop-gain-on-enter) | `false` |
| `bool` | [remove_on_exit](#prop-remove-on-exit) | `false` |
| `bool` | [prevent_duplicate_hits](#prop-prevent-duplicate-hits) | `true` |
| `int` | [max_targets](#prop-max-targets) | `0` |
| `TargetPriority` | [target_priority](#prop-target-priority) | `TargetPriority.NONE` |
| `CapRule` | [cap_rule](#prop-cap-rule) | `CapRule.CONCURRENT` |
| `InteractableRule` | [interactable_rule](#prop-interactable-rule) | `InteractableRule.TREAT_AS_EQUALS` |

## Variables

| | | |
|---|---|---|
| `float` | [collision_poll_interval](#var-collision-poll-interval) | `0.5` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `Array[Variant]` | [get_entities_in_area](#method-get-entities-in-area)( `effect_instance: EffectInstance` ) |
| `bool` | [is_entity_in_area](#method-is-entity-in-area)( `effect_instance: EffectInstance, entity: Variant` ) |
| `int` | [get_entity_count_in_area](#method-get-entity-count-in-area)( `effect_instance: EffectInstance` ) |
| `void` | [force_collision_check](#method-force-collision-check)( `effect_instance: EffectInstance` ) |
| `void` | [set_collision_poll_interval](#method-set-collision-poll-interval)( `interval: float` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Enumerations

### enum AffectedTargets {#enum-affectedtargets}

The options of affected targets: all, enemies, allies.

- **ALL** = `0`
- **ENEMIES** = `1`
- **ALLIES** = `2`

### enum TargetPriority {#enum-targetpriority}

The options of target priority: none, closest to center, closest to originator, random, lowest health percent, highest health percent.

- **NONE** = `0` - Take whatever order the physics query returns
- **CLOSEST_TO_CENTER** = `1` - Closest to the collision shape's origin first
- **CLOSEST_TO_ORIGINATOR** = `2` - Closest to the originator's position first
- **RANDOM** = `3` - Random shuffle before capping
- **LOWEST_HEALTH_PERCENT** = `4` - Lowest HP% first — useful for heal prioritisation
- **HIGHEST_HEALTH_PERCENT** = `5` - Highest HP% first

### enum CapRule {#enum-caprule}

The options of cap rule: concurrent, total.

- **CONCURRENT** = `0` - At most max_targets entities are affected at once; exits free a slot
- **TOTAL** = `1` - Once max_targets entities have been hit the cap locks — exits do not free slots

### enum InteractableRule {#enum-interactablerule}

The options of interactable rule: ignore, treat as equals, treat after entities.

- **IGNORE** = `0` - Exclude InteractableObjects from targeting entirely
- **TREAT_AS_EQUALS** = `1` - Include in the same pool as entities; sorted and capped together
- **TREAT_AFTER_ENTITIES** = `2` - Include but always placed after all entities in priority order

## Property descriptions

### AffectedTargets affected_targets = AffectedTargets.ALL {#prop-affected-targets}

Which entities in the area are affected (all, enemies, allies ...).

### bool affects_neutrals = false {#prop-affects-neutrals}

Does an "enemies" area also hit neutral entities (not hostile, not friendly)? Off by default: a neutral bystander is not an enemy. Destructible scenery (the environmental faction) is hit either way. Has no effect on "all" and "allies"

### bool gain_on_enter = false {#prop-gain-on-enter}

True when an entity gets the child effects when it enters the area.

### bool remove_on_exit = false {#prop-remove-on-exit}

True when the child effects end when the entity leaves the area.

### bool prevent_duplicate_hits = true {#prop-prevent-duplicate-hits}

Prevents the same entity from being hit multiple times by the same effect instance. Highly recommended to keep enabled — disable only for effects that intentionally need to re-apply to the same target (e.g. a damage aura ticking on overlapping entities).

*Target Filtering*

### int max_targets = 0 {#prop-max-targets}

Maximum number of targets to affect. 0 = unlimited.

### TargetPriority target_priority = TargetPriority.NONE {#prop-target-priority}

How to order targets when a cap is applied. Has no effect when max_targets is 0.

### CapRule cap_rule = CapRule.CONCURRENT {#prop-cap-rule}

Whether the cap tracks concurrent or total hits. Only relevant in persistent mode. CONCURRENT: slots free when entities exit the area. TOTAL: once max_targets have been hit the gate closes permanently.

### InteractableRule interactable_rule = InteractableRule.TREAT_AS_EQUALS {#prop-interactable-rule}

How InteractableObjects are treated relative to entities during filtering.

## Variable descriptions

### float collision_poll_interval = 0.5 {#var-collision-poll-interval}

How many seconds between checks of who is in the area.

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

What the effect does to its target when it is applied.

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Called when the effect ends: takes back what it did.

### Array[Variant] get_entities_in_area( effect_instance: EffectInstance ) {#method-get-entities-in-area}

The entities in the area of the effect now.

### bool is_entity_in_area( effect_instance: EffectInstance, entity: Variant ) {#method-is-entity-in-area}

Is the entity in the area now?

### int get_entity_count_in_area( effect_instance: EffectInstance ) {#method-get-entity-count-in-area}

How many entities are in the area now.

### void force_collision_check( effect_instance: EffectInstance ) {#method-force-collision-check}

Checks who is in the area now, without waiting for the interval.

### void set_collision_poll_interval( interval: float ) {#method-set-collision-poll-interval}

Sets the seconds between checks (at least 0.1).

### String get_effect_description() {#method-get-effect-description}

The text of the effect for tooltips, with its values filled in.

### String get_editor_description() {#method-get-editor-description}

A short text for the effect editor that says what the effect does.

