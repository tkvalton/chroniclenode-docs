<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ModifierStep

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

One calculation modifier that changed the number during a phase of a hit (armor took 5 off, block took 30 %, a damage-done bonus added 12). A DamageResult keeps the steps in the order they ran, which is what the combat log, tooltips and tests read to explain a final number.

## Variables

| | | |
|---|---|---|
| `int` | [stat_id](#var-stat-id) | `0` |
| `String` | [stat_name](#var-stat-name) | `""` |
| `float` | [before](#var-before) | `0.0` |
| `float` | [after](#var-after) | `0.0` |
| `String` | [required_tag](#var-required-tag) | `""` |
| `float` | [effect_value](#var-effect-value) | `0.0` |

## Methods

| | |
|---|---|
| `ModifierStep` | [create](#method-create)( `p_stat_id: int, p_stat_name: String, p_before: float, p_after: float, p_required_tag: String = "", p_effect_value: float = 0.0` ) *static* |
| `float` | [delta](#method-delta)() |
| `float` | [removed](#method-removed)() |
| `float` | [added](#method-added)() |

## Variable descriptions

### int stat_id = 0 {#var-stat-id}

*No description yet.*

### String stat_name = "" {#var-stat-name}

*No description yet.*

### float before = 0.0 {#var-before}

*No description yet.*

### float after = 0.0 {#var-after}

*No description yet.*

### String required_tag = "" {#var-required-tag}

The trigger tag the modifier required to run ("" when it needed none)

### float effect_value = 0.0 {#var-effect-value}

The value the modifier calculated from the stat points (flat amount or percentage, depending on its type)

## Method descriptions

### ModifierStep create( p_stat_id: int, p_stat_name: String, p_before: float, p_after: float, p_required_tag: String = "", p_effect_value: float = 0.0 ) {#method-create}

*No description yet.*

### float delta() {#method-delta}

Signed change (negative = the step reduced the number)

### float removed() {#method-removed}

How much the step took off (0 when it added)

### float added() {#method-added}

How much the step added (0 when it reduced)

