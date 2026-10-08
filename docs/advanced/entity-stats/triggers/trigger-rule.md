<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TriggerRule

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A rule on an effect that changes how one tag behaves whenever that effect is used, whatever the stats of the user say: "this attack always crits", "this attack cannot be dodged", "+30 % chance to crit", "+50 % crit damage". `Effect.trigger_rules` holds them; the calculation phases of the hit collect them before they roll. "Never" beats "always" when rules disagree. See docs/systems/entity-stats.md, section 24.1.

## Properties

| | | |
|---|---|---|
| `TriggerTagDefinition` | [tag](#prop-tag) |  |
| `Force` | [force](#prop-force) | `Force.NORMAL` |
| `float` | [chance_bonus](#prop-chance-bonus) | `0.0` |
| `float` | [magnitude_bonus](#prop-magnitude-bonus) | `0.0` |
| `float` | [magnitude_multiplier](#prop-magnitude-multiplier) | `1.0` |

## Methods

| | |
|---|---|
| `String` | [get_tag_name](#method-get-tag-name)() |
| `Array[String]` | [validate](#method-validate)() |
| `String` | [describe](#method-describe)() |

## Enumerations

### enum Force {#enum-force}

- **NORMAL** = `0` - Roll as usual (only the bonuses below apply)
- **ALWAYS** = `1` - The tag always fires, with no roll, even if nothing rolls it
- **NEVER** = `2` - The tag never fires. Beats ALWAYS

## Property descriptions

### TriggerTagDefinition tag {#prop-tag}

The tag the rule is about. Empty = every tag (a luck-style chance bonus; not allowed with ALWAYS)

### Force force = Force.NORMAL {#prop-force}

Normal (rolled as usual), always (fires without a roll) or never (does not fire; never beats always)

### float chance_bonus = 0.0 {#prop-chance-bonus}

Added to the chance of the tag, in percentage points (+30 = 30 more percent)

### float magnitude_bonus = 0.0 {#prop-magnitude-bonus}

Added to the magnitude of the tag (crit: +50 = a +150 % crit instead of +100 %)

### float magnitude_multiplier = 1.0 {#prop-magnitude-multiplier}

The magnitude is multiplied by this after the bonuses are added ("more": 1.25 = 25 % more)

## Method descriptions

### String get_tag_name() {#method-get-tag-name}

*No description yet.*

### Array[String] validate() {#method-validate}

Configuration problems as readable messages

### String describe() {#method-describe}

*No description yet.*

