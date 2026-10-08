<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SetStatActiveStateEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Switches stats on or off on the target entity: one stat, or every stat of a stat group (all Offensive stats off while the target is disarmed).

## Properties

| | | |
|---|---|---|
| `Targets` | [target_mode](#prop-target-mode) | `Targets.SINGLE_STAT` |
| `int` | [stat_id](#prop-stat-id) | `0` |
| `int` | [stat_group_id](#prop-stat-group-id) | `0` |
| `Array[int]` | [excluded_stats](#prop-excluded-stats) | `[]` |
| `bool` | [set_active](#prop-set-active) | `true` |

## Methods

| | |
|---|---|
| `Array[int]` | [resolve_stat_ids](#method-resolve-stat-ids)( `stats_component: StatsComponent` ) |
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |
| `bool` | [is_valid_configuration](#method-is-valid-configuration)() |
| `void` | [set_stat](#method-set-stat)( `new_stat_id: int, new_set_active: bool = true` ) |
| `void` | [set_stat_group](#method-set-stat-group)( `new_group_id: int, new_set_active: bool = true` ) |

## Enumerations

### enum Targets {#enum-targets}

- **SINGLE_STAT** = `0` - the stat chosen below
- **STAT_GROUP** = `1` - every stat of a stat group the target has

## Property descriptions

*Stat Configuration*

### Targets target_mode = Targets.SINGLE_STAT {#prop-target-mode}

One stat, or every stat of a stat group

### int stat_id = 0 {#prop-stat-id}

*No description yet.*

### int stat_group_id = 0 {#prop-stat-group-id}

The stat group whose stats are all switched (group mode)

### Array[int] excluded_stats = [] {#prop-excluded-stats}

Stats of the group that are left out (group mode)

### bool set_active = true {#prop-set-active}

*No description yet.*

## Method descriptions

### Array[int] resolve_stat_ids( stats_component: StatsComponent ) {#method-resolve-stat-ids}

The stats this effect switches on its target: the chosen stat, or the stats of the group the target has (without the excluded ones)

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

*No description yet.*

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Handle effect removal - restore previous state

### String get_effect_description() {#method-get-effect-description}

*No description yet.*

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

### bool is_valid_configuration() {#method-is-valid-configuration}

Check if this effect is properly configured

### void set_stat( new_stat_id: int, new_set_active: bool = true ) {#method-set-stat}

Set the stat to modify

### void set_stat_group( new_group_id: int, new_set_active: bool = true ) {#method-set-stat-group}

Set the stat group to switch

