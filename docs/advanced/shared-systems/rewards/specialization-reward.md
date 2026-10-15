<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SpecializationReward

**Inherits:** [Reward](/advanced/shared-systems/rewards/reward) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Chooses a specialization of a proficiency or a profession for the player: mastering one aspect of it.

## Description

The rewards of the specialization are given once. If the specialization shares an exclusive group with one the player has, and that one can be changed, it is swapped for the new one (a re-spec). See docs/systems/skill-trainers.md, section 3.6.

## Properties

| | | |
|---|---|---|
| `Kind` | [kind](#prop-kind) | `Kind.PROFICIENCY` |
| `int` | [target_id](#prop-target-id) | `0` |
| `int` | [specialization_id](#prop-specialization-id) | `0` |

## Methods

| | |
|---|---|
| `Array[SkillSpecialization]` | [get_specializations](#method-get-specializations)() |
| `Dictionary` | [apply_to_player](#method-apply-to-player)( `player: Player` ) |
| `bool` | [unapply_from_player](#method-unapply-from-player)( `player: Player, tracking_data: Dictionary` ) |
| `bool` | [supports_unapply](#method-supports-unapply)() |
| `String` | [get_summary](#method-get-summary)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Enumerations

### enum Kind {#enum-kind}

The options of kind: proficiency, profession.

- **PROFICIENCY** = `0` - A proficiency (swords, lockpicking)
- **PROFESSION** = `1` - A profession (a craft school: blacksmithing)

## Property descriptions

### Kind kind = Kind.PROFICIENCY {#prop-kind}

What the specialization belongs to

### int target_id = 0 {#prop-target-id}

The id of the proficiency, or of the craft school

### int specialization_id = 0 {#prop-specialization-id}

The id of the specialization

## Method descriptions

### Array[SkillSpecialization] get_specializations() {#method-get-specializations}

The specializations of the target

### Dictionary apply_to_player( player: Player ) {#method-apply-to-player}

Gives the reward to the player. Gives back how it went and what it needs to take the reward back.

### bool unapply_from_player( player: Player, tracking_data: Dictionary ) {#method-unapply-from-player}

Takes the reward back from the player (only for a reward that supports it).

### bool supports_unapply() {#method-supports-unapply}

Can the reward be taken back?

### String get_summary() {#method-get-summary}

A short text about the reward and its settings.

### Array[Dictionary] validate() {#method-validate}

Checks the settings of the reward. Gives the problems found (empty when it is fine).

