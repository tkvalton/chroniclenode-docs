<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TriggerRuleSet

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The trigger rules in force for one calculation phase of one hit, from the effect's rules and from stat effects (TriggerRuleStatEffect). Answers, per tag: is it forbidden or forced, how much chance does it gain, what is its magnitude. See docs/systems/entity-stats.md, section 24.1.

## Methods

| | |
|---|---|
| `void` | [add_rule](#method-add-rule)( `rule: TriggerRule` ) |
| `void` | [add_values](#method-add-values)( `definition: TriggerTagDefinition, never: bool, always: bool, chance_bonus: float, magnitude_bonus: float, magnitude_multiplier: float, kind_filter: int = -1` ) |
| `bool` | [is_empty](#method-is-empty)() |
| `bool` | [is_never](#method-is-never)( `tag: String, kind: int = -1` ) |
| `bool` | [is_always](#method-is-always)( `tag: String, kind: int = -1` ) |
| `float` | [chance_bonus](#method-chance-bonus)( `tag: String, kind: int = -1` ) |
| `float` | [magnitude](#method-magnitude)( `tag: String, base_magnitude: float, kind: int = -1` ) |
| `Array[TriggerTagDefinition]` | [forced_definitions](#method-forced-definitions)() |

## Method descriptions

### void add_rule( rule: TriggerRule ) {#method-add-rule}

Adds a TriggerRule (a rule on the effect)

### void add_values( definition: TriggerTagDefinition, never: bool, always: bool, chance_bonus: float, magnitude_bonus: float, magnitude_multiplier: float, kind_filter: int = -1 ) {#method-add-values}

Adds raw values for a tag (null definition = every tag). Used by stat effects too

### bool is_empty() {#method-is-empty}

*No description yet.*

### bool is_never( tag: String, kind: int = -1 ) {#method-is-never}

Is the tag forbidden? ("never" beats "always")

### bool is_always( tag: String, kind: int = -1 ) {#method-is-always}

Is the tag forced (and not forbidden)?

### float chance_bonus( tag: String, kind: int = -1 ) {#method-chance-bonus}

Percentage points added to the chance of the tag

### float magnitude( tag: String, base_magnitude: float, kind: int = -1 ) {#method-magnitude}

The magnitude of the tag: (base + all bonuses) x all multipliers

### Array[TriggerTagDefinition] forced_definitions() {#method-forced-definitions}

The definitions of the tags a rule forces (so they can be created for an entity that has no stat rolling them)

