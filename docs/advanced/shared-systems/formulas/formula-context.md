<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# FormulaContext

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

What a CalculationFormula / DiminishingReturns can see when it is evaluated: who owns the stat, who is

## Variables

| | | |
|---|---|---|
| `Variant` | [owner](#var-owner) | `null` |
| `int` | [owner_level](#var-owner-level) | `1` |
| `Variant` | [attacker](#var-attacker) | `null` |
| `int` | [attacker_level](#var-attacker-level) | `1` |
| `Variant` | [defender](#var-defender) | `null` |
| `int` | [defender_level](#var-defender-level) | `1` |
| `int` | [damage_type](#var-damage-type) | `0` |
| `float` | [incoming_amount](#var-incoming-amount) | `0.0` |
| `bool` | [in_combat](#var-in-combat) | `false` |
| `DamageResult` | [result](#var-result) | `null` |

## Methods

| | |
|---|---|
| `FormulaContext` | [for_owner](#method-for-owner)( `p_owner: Variant` ) *static* |
| `FormulaContext` | [for_hit](#method-for-hit)( `p_owner: Variant, p_result: DamageResult, p_incoming_amount: float = 0.0` ) *static* |
| `int` | [get_level](#method-get-level)( `source: LevelSource` ) |
| `int` | [level_of](#method-level-of)( `unit: Variant` ) *static* |

## Enumerations

### enum LevelSource {#enum-levelsource}

Whose level a formula reads

- **OWNER** = `0` - The entity that owns the stat
- **ATTACKER** = `1` - The entity dealing the hit
- **DEFENDER** = `2` - The entity receiving the hit

## Variable descriptions

### Variant owner = null {#var-owner}

The entity that owns the stat being evaluated

### int owner_level = 1 {#var-owner-level}

*No description yet.*

### Variant attacker = null {#var-attacker}

*No description yet.*

### int attacker_level = 1 {#var-attacker-level}

*No description yet.*

### Variant defender = null {#var-defender}

*No description yet.*

### int defender_level = 1 {#var-defender-level}

*No description yet.*

### int damage_type = 0 {#var-damage-type}

*No description yet.*

### float incoming_amount = 0.0 {#var-incoming-amount}

Size of the hit being calculated (for formulas such as armor / (armor + 10 * hit)); 0 when not in a hit

### bool in_combat = false {#var-in-combat}

*No description yet.*

### DamageResult result = null {#var-result}

The result being built, when there is one

## Method descriptions

### FormulaContext for_owner( p_owner: Variant ) {#method-for-owner}

A context with only the owner filled (no hit)

### FormulaContext for_hit( p_owner: Variant, p_result: DamageResult, p_incoming_amount: float = 0.0 ) {#method-for-hit}

A context for a stat that belongs to `p_owner` while `p_result` is being calculated

### int get_level( source: LevelSource ) {#method-get-level}

*No description yet.*

### int level_of( unit: Variant ) {#method-level-of}

Level of any unit: entities answer `get_current_level()`; anything else (objects, null, an unleveled entity) is 1

