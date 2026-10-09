<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TriggerRecord

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

One trigger (dodge, block, critical strike ...) that fired during a calculation phase of a hit.

## Description

Carries what every consumer of a DamageResult / HealingResult needs: the tag that procs and modifiers filter on, what kind of trigger it was, and the presentation data authored on the trigger (animation, floating text, combat log phrase). See docs/systems/entity-stats.md, section 17.

## Variables

| | | |
|---|---|---|
| `int` | [stat_id](#var-stat-id) | `0` |
| `String` | [stat_name](#var-stat-name) | `""` |
| `String` | [tag](#var-tag) | `""` |
| `Kind` | [kind](#var-kind) | `Kind.NONE` |
| `String` | [animation](#var-animation) | `""` |
| `String` | [message](#var-message) | `""` |
| `String` | [phrase](#var-phrase) | `""` |
| `float` | [magnitude](#var-magnitude) | `0.0` |
| `int` | [application](#var-application) | `0` |
| `int` | [application_priority](#var-application-priority) | `0` |

## Methods

| | |
|---|---|
| `TriggerRecord` | [create](#method-create)( `p_stat_id: int, p_stat_name: String, p_tag: String, p_kind: Kind = Kind.NONE, p_animation: String = "", p_message: String = "", p_phrase: String = "", p_magnitude: float = 0.0` ) *static* |
| `bool` | [is_avoid](#method-is-avoid)() |
| `bool` | [is_mitigate](#method-is-mitigate)() |
| `bool` | [is_boost](#method-is-boost)() |

## Enumerations

### enum Kind {#enum-kind}

- **NONE** = `0` - Tag only: sets the tag for paired modifiers, no outcome of its own
- **AVOID** = `1` - Avoids the hit completely (dodge, parry)
- **MITIGATE** = `2` - Reduces the hit through paired modifiers (block)
- **BOOST** = `3` - Increases the hit through paired modifiers (critical strike)

## Variable descriptions

### int stat_id = 0 {#var-stat-id}

Id of the stat that owns the trigger

### String stat_name = "" {#var-stat-name}

*No description yet.*

### String tag = "" {#var-tag}

The word modifiers require and procs filter on, e.g. "dodge"

### Kind kind = Kind.NONE {#var-kind}

*No description yet.*

### String animation = "" {#var-animation}

Animation authored on the trigger: "", "Hit", "Dodge" or "Block"

### String message = "" {#var-message}

Floating text authored on the trigger

### String phrase = "" {#var-phrase}

Combat log phrase template (&#123;attacker&#125; &#123;target&#125; &#123;ability&#125; &#123;damage&#125;); empty = the default for the kind

### float magnitude = 0.0 {#var-magnitude}

What the tag carries (critical strike: the multiplier in percent, multistrike: the extra hits). See TriggerTagDefinition

### int application = 0 {#var-application}

How the magnitude changes the number in the phase where the tag fired (TriggerTagDefinition.Application, 0 = it does not)

### int application_priority = 0 {#var-application-priority}

Where in the modifier order that happens (higher first, like a modifier's processing priority)

## Method descriptions

### TriggerRecord create( p_stat_id: int, p_stat_name: String, p_tag: String, p_kind: Kind = Kind.NONE, p_animation: String = "", p_message: String = "", p_phrase: String = "", p_magnitude: float = 0.0 ) {#method-create}

A record of a trigger that fired: the stat that rolled it (0 when it was forced), the tag, the kind, the animation and message to show, the combat log phrase and the magnitude

### bool is_avoid() {#method-is-avoid}

Is this an avoid trigger (dodge, parry)?

### bool is_mitigate() {#method-is-mitigate}

Is this a mitigate trigger (block)?

### bool is_boost() {#method-is-boost}

Is this a boost trigger (critical strike)?

