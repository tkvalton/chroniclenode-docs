<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ModifyGroupBehaviorAction

**Inherits:** [EncounterAction](/advanced/world/encounters/encounter-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Modifies the group's overall behavior and aggression level

## Properties

| | | |
|---|---|---|
| `UniqueEncounterData.GroupBehavior` | [new_group_behavior](#prop-new-group-behavior) | `UniqueEncounterData.GroupBehavior.AGGRESSIVE` |
| `int` | [new_max_attackers](#prop-new-max-attackers) | `0  # 0 = use behavior default` |
| `float` | [behavior_duration](#prop-behavior-duration) | `0.0  # 0 = permanent change` |
| `bool` | [revert_to_original](#prop-revert-to-original) | `false` |

## Variables

| | | |
|---|---|---|
| `UniqueEncounterData.GroupBehavior` | [original_behavior](#var-original-behavior) |  |
| `int` | [original_max_attackers](#var-original-max-attackers) |  |
| `float` | [behavior_timer](#var-behavior-timer) | `0.0` |
| `bool` | [has_original_stored](#var-has-original-stored) | `false` |

## Methods

| | |
|---|---|
| `void` | [process](#method-process)( `delta: float` ) |
| `void` | [revert_behavior_now](#method-revert-behavior-now)() |
| `void` | [reset_action](#method-reset-action)() |

## Property descriptions

### UniqueEncounterData.GroupBehavior new_group_behavior = UniqueEncounterData.GroupBehavior.AGGRESSIVE {#prop-new-group-behavior}

How the group acts from now on.

### int new_max_attackers = 0  # 0 = use behavior default {#prop-new-max-attackers}

How many members may attack at once (0 = no change).

### float behavior_duration = 0.0  # 0 = permanent change {#prop-behavior-duration}

How many seconds the change lasts (0 = for good).

### bool revert_to_original = false {#prop-revert-to-original}

If true, reverts after duration

## Variable descriptions

### UniqueEncounterData.GroupBehavior original_behavior {#var-original-behavior}

Track original behavior for reverting

### int original_max_attackers {#var-original-max-attackers}

How many members could attack before the change.

### float behavior_timer = 0.0 {#var-behavior-timer}

How many seconds the change has lasted.

### bool has_original_stored = false {#var-has-original-stored}

True once the old values were kept.

## Method descriptions

### void process( delta: float ) {#method-process}

Process method for timed behavior changes

### void revert_behavior_now() {#method-revert-behavior-now}

Manually revert behavior (can be called by other systems)

### void reset_action() {#method-reset-action}

Reset the action state

