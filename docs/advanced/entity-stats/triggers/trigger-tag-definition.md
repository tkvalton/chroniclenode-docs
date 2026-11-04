<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TriggerTagDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A tag that a calculation phase can set on a hit: "critical strike", "dodge", "block", "armor penetration", "multistrike".

## Description

The tag is the word modifiers require and procs filter on. Its definition holds what the tag *is* (kind, presentation, base magnitude), so that a stat can roll it (CalculationTriggerStatEffect), a rule can force it (TriggerRule) and a modifier can read its magnitude, without the engine knowing any particular stat. See docs/systems/entity-stats.md, sections 22 and 24.

## Properties

| | | |
|---|---|---|
| `String` | [tag](#prop-tag) | `""` |
| `TriggerRecord.Kind` | [kind](#prop-kind) | `TriggerRecord.Kind.NONE` |
| `float` | [base_magnitude](#prop-base-magnitude) | `0.0` |
| `Application` | [application](#prop-application) | `Application.NONE` |
| `int` | [application_priority](#prop-application-priority) | `25` |
| `CalculationTriggerStatEffect.SpecialEffectAnimation` | [animation](#prop-animation) | `CalculationTriggerStatEffect.SpecialEffectAnimation.NONE` |
| `String` | [message](#prop-message) | `"":` |
| `String` | [log_phrase](#prop-log-phrase) | `"":` |
| `String` | [slot_name](#prop-slot-name) | `""` |
| `bool` | [has_voice_call](#prop-has-voice-call) | `false` |
| `bool` | [has_animation](#prop-has-animation) | `false` |
| `bool` | [animation_by_weapon](#prop-animation-by-weapon) | `false` |
| `String` | [fallback_slot](#prop-fallback-slot) | `""` |
| `SFXSelection` | [sound](#prop-sound) |  |
| `Array[CalculationBase.CalculationType]` | [calculations](#prop-calculations) | `[]` |

## Methods

| | |
|---|---|
| `String` | [get_slot_name](#method-get-slot-name)() |
| `String` | [get_tag](#method-get-tag)() |
| `bool` | [fires_in](#method-fires-in)( `calculation_type: CalculationBase.CalculationType` ) |
| `TriggerRecord` | [create_record](#method-create-record)( `stat_id: int, stat_name: String, magnitude: float` ) |

## Enumerations

### enum Application {#enum-application}

The options of application: none, percent increase, percent decrease, add, minus.

- **NONE** = `0` - The tag only marks the hit (modifiers elsewhere read the tag or its magnitude)
- **PERCENT_INCREASE** = `1` - The magnitude is a percentage added to the number: critical strike (100 = doubled)
- **PERCENT_DECREASE** = `2` - The magnitude is a percentage taken off the number
- **ADD** = `3` - The magnitude is added to the number
- **MINUS** = `4` - The magnitude is subtracted from the number (never below 0)

## Property descriptions

*Tag*

### String tag = "" {#prop-tag}

The word used by modifiers ("required trigger tag") and procs. Empty = the display name in lower case

### TriggerRecord.Kind kind = TriggerRecord.Kind.NONE {#prop-kind}

What the tag does by itself: nothing (tag only), avoid the hit, mitigate it, boost it

*Magnitude*

### float base_magnitude = 0.0 {#prop-base-magnitude}

The number the tag carries when it fires: the critical strike multiplier in percent (100 = +100 %), the number of extra hits of a multistrike, the share of armor ignored by a penetration. Rules and stats add to it

*Applies To The Hit*

### Application application = Application.NONE {#prop-application}

What the tag does to the number of the phase where it fires, with its magnitude. A critical strike is "percent increase" with magnitude 100: the tag alone does the work, so it also works for an entity that has no crit stat and was only forced to crit by a rule. NONE leaves it to modifiers (a paired CalculationModifierStatEffect)

### int application_priority = 25 {#prop-application-priority}

Where it happens among the modifiers of the phase (higher first). 25 puts a percentage after flat bonuses (priority 100)

*Presentation*

### CalculationTriggerStatEffect.SpecialEffectAnimation animation = CalculationTriggerStatEffect.SpecialEffectAnimation.NONE {#prop-animation}

The animation played when the tag fires

### String message = "": {#prop-message}

Floating text when it fires

### String log_phrase = "": {#prop-log-phrase}

Combat log phrase when it fires. Placeholders: &#123;attacker&#125; &#123;target&#125; &#123;ability&#125; &#123;damage&#125;. Empty = the default for the kind

*Entity Reactions*

### String slot_name = "" {#prop-slot-name}

The name of this trigger's slot: the folder of its voice call and the key of its animations. Empty = the tag in snake_case ("critical strike" -&gt; critical_strike). Change it only when you have to: voices and animation maps that use the old name stop finding it

### bool has_voice_call = false {#prop-has-voice-call}

Creatures make a sound of their own when this trigger fires on them: a call in their voice (Audio &gt; Entity Voices lists it for every voice)

### bool has_animation = false {#prop-has-animation}

Creatures play an animation of their own when this trigger fires on them: a list in their animation map (Assets &gt; Animations &gt; Triggers). Off: the Animation chosen in Presentation is used

### bool animation_by_weapon = false {#prop-animation-by-weapon}

The animation depends on the weapon in hand: the animation map has a list for each weapon (the attack tag of the weapon class, "unarmed" without one). Off: one list for the creature

### String fallback_slot = "" {#prop-fallback-slot}

When a creature has no voice call or animation for this trigger, use the one of this trigger's slot (parry -&gt; dodge). Empty = nothing

### SFXSelection sound {#prop-sound}

A sound played at the target when the trigger fires (the clang of a parry), the same for everyone. Beside the voice call of the creature

*Forcing*

### Array[CalculationBase.CalculationType] calculations = [] {#prop-calculations}

The calculations the tag fires in when a rule forces it. Empty = by kind: avoid and mitigate in damage taken, boost and none in damage done and healing done

## Method descriptions

### String get_slot_name() {#method-get-slot-name}

The name of the slot: the Slot name, else the tag in snake_case

### String get_tag() {#method-get-tag}

The word modifiers and procs match on

### bool fires_in( calculation_type: CalculationBase.CalculationType ) {#method-fires-in}

Does this tag fire in the given calculation when it is forced?

### TriggerRecord create_record( stat_id: int, stat_name: String, magnitude: float ) {#method-create-record}

The record a phase keeps when the tag fires. `stat_id` / `stat_name` say which stat rolled it (0 / "" when forced)

