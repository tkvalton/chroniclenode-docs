<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CalculationPhase

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

What one calculation phase produced (damage done, damage taken, healing done or healing taken), before the calling calculation copies it into a DamageResult / HealingResult: the final number, the triggers that fired and the modifiers that changed the number, in the order they ran. See docs/systems/entity-stats.md, section 17.

## Variables

| | | |
|---|---|---|
| `float` | [value](#var-value) | `0.0` |
| `Array[TriggerRecord]` | [triggers](#var-triggers) | `[]` |
| `Array[ModifierStep]` | [steps](#var-steps) | `[]` |
| `TriggerRecord` | [avoid](#var-avoid) | `null` |

## Methods

| | |
|---|---|
| `bool` | [was_avoided](#method-was-avoided)() |
| `Array[String]` | [tags](#method-tags)() |

## Variable descriptions

### float value = 0.0 {#var-value}

The number at the end of the phase

### Array[TriggerRecord] triggers = [] {#var-triggers}

Triggers that fired (critical strike, dodge, block ...)

### Array[ModifierStep] steps = [] {#var-steps}

Modifiers that changed the number

### TriggerRecord avoid = null {#var-avoid}

The avoid trigger that ended the phase (dodge, parry), or null. Only damage-taken phases can be avoided

## Method descriptions

### bool was_avoided() {#method-was-avoided}

*No description yet.*

### Array[String] tags() {#method-tags}

The tags of every trigger that fired

