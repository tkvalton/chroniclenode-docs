<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TrainerLesson

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

One thing a trainer teaches, with its price and who may take it.

## Description

A lesson teaches an ability, a rank of an ability, levels of a proficiency, a profession, levels of a profession, a tier of a proficiency or profession, a specialization, a recipe, or gives any list of rewards. It builds ordinary rewards and gives them with Player.grant_reward(reward, true), so what a lesson gives is saved like what a quest gives. Ranks and levels are sold one step at a time: the lesson always sells the next one, and shows "known" at the highest the trainer teaches. See docs/systems/skill-trainers.md, section 3.2.

## Properties

| | | |
|---|---|---|
| `Teaches` | [teaches](#prop-teaches) | `Teaches.ABILITY` |
| `String` | [display_name](#prop-display-name) | `""` |
| `String` | [description](#prop-description) | `""` |
| `Texture2D` | [icon](#prop-icon) |  |
| `int` | [target_id](#prop-target-id) | `0` |
| `TargetKind` | [target_kind](#prop-target-kind) | `TargetKind.PROFICIENCY` |
| `int` | [tier_index](#prop-tier-index) | `1` |
| `int` | [specialization_id](#prop-specialization-id) | `0` |
| `Array[Reward]` | [rewards](#prop-rewards) | `[]` |
| `int` | [up_to](#prop-up-to) | `0` |
| `int` | [amount](#prop-amount) | `1` |
| `LessonCost` | [cost](#prop-cost) |  |
| `CalculationFormula` | [price_formula](#prop-price-formula) |  |
| `float` | [price_multiplier](#prop-price-multiplier) | `1.0` |
| `Array[Requirement]` | [requirements](#prop-requirements) | `[]` |
| `bool` | [hide_until_requirements_met](#prop-hide-until-requirements-met) | `false` |

## Methods

| | |
|---|---|
| `String` | [get_lesson_name](#method-get-lesson-name)() |
| `String` | [get_lesson_description](#method-get-lesson-description)() |
| `Texture2D` | [get_lesson_icon](#method-get-lesson-icon)() |
| `Dictionary` | [get_steps](#method-get-steps)( `player: Player` ) |
| `Array[Requirement]` | [get_implicit_requirements](#method-get-implicit-requirements)() |
| `float` | [get_price_multiplier](#method-get-price-multiplier)( `from_step: int, to_step: int, trainer: TrainerDefinition = null, system_hub: GameHost.SystemHub = null` ) |
| `Dictionary` | [get_offer](#method-get-offer)( `player: Player, trainer: TrainerDefinition = null, system_hub: GameHost.SystemHub = null` ) |
| `Array[Reward]` | [build_rewards](#method-build-rewards)( `from_step: int, to_step: int` ) |
| `Dictionary` | [learn](#method-learn)( `player: Player, trainer: TrainerDefinition = null, system_hub: GameHost.SystemHub = null` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Enumerations

### enum Teaches {#enum-teaches}

What the lesson teaches

- **ABILITY** = `0` - An ability (the character gets it)
- **ABILITY_RANK** = `1` - The next rank of an ability the character has
- **PROFICIENCY_LEVEL** = `2` - The next level (or levels) of a proficiency
- **PROFESSION** = `3` - A profession (a craft school) that is not learned from the start
- **PROFESSION_LEVEL** = `4` - The next level (or levels) of a profession the character has learned
- **SKILL_TIER** = `5` - A tier of a proficiency or a profession (Journeyman, Expert, Master)
- **SPECIALIZATION** = `6` - A specialization of a proficiency or a profession
- **RECIPE** = `7` - A crafting recipe
- **REWARDS** = `8` - Any list of rewards: the way to teach anything else. It can be bought again and again: limit it with requirements

### enum TargetKind {#enum-targetkind}

What a tier or a specialization belongs to

- **PROFICIENCY** = `0`
- **PROFESSION** = `1`

### enum Status {#enum-status}

Where the lesson stands for one character

- **AVAILABLE** = `0` - It can be bought now (check the price too)
- **LOCKED** = `1` - A requirement is not met: the reason says which
- **KNOWN** = `2` - The character has all it teaches

## Property descriptions

### Teaches teaches = Teaches.ABILITY {#prop-teaches}

What the lesson teaches

### String display_name = "" {#prop-display-name}

The name in the list (empty = the name of what it teaches)

### String description = "" {#prop-description}

A line about the lesson (empty = the description of what it teaches)

### Texture2D icon {#prop-icon}

An icon (empty = the icon of what it teaches)

*What it teaches*

### int target_id = 0 {#prop-target-id}

The ability, the proficiency, the profession or the recipe: its id. For a tier or a specialization it is the id of the proficiency or of the profession (see Target kind)

### TargetKind target_kind = TargetKind.PROFICIENCY {#prop-target-kind}

For a tier or a specialization: is the target a proficiency or a profession?

### int tier_index = 1 {#prop-tier-index}

For a tier: the tier it trains (a number from 0: the first tier). The character must be in the tier before it, at the cap of its level

### int specialization_id = 0 {#prop-specialization-id}

For a specialization: its id

### Array[Reward] rewards = [] {#prop-rewards}

For "rewards": the rewards that are given

### int up_to = 0 {#prop-up-to}

For ranks and levels: the highest the trainer teaches (0 = as far as it goes)

### int amount = 1 {#prop-amount}

For levels: how many levels one purchase gives

*Price*

### LessonCost cost {#prop-cost}

What it costs. Empty = free

### CalculationFormula price_formula {#prop-price-formula}

What the cost is multiplied by, from the step the lesson ends at (rank 3 costs 3x): a formula of the step. Empty = 1 (the number of steps for levels)

### float price_multiplier = 1.0 {#prop-price-multiplier}

Another multiplier on the whole price

*Who can take it*

### Array[Requirement] requirements = [] {#prop-requirements}

What a character needs, besides what the lesson itself needs (the tier before, the ability before)

### bool hide_until_requirements_met = false {#prop-hide-until-requirements-met}

Not met = the lesson is not listed at all. Off: it is listed, greyed, with the reason

## Method descriptions

### String get_lesson_name() {#method-get-lesson-name}

The name for the list

### String get_lesson_description() {#method-get-lesson-description}

The text of the lesson: the one set, else one made from what it teaches.

### Texture2D get_lesson_icon() {#method-get-lesson-icon}

The icon of the lesson: the one set, else the icon of what it teaches.

### Dictionary get_steps( player: Player ) {#method-get-steps}

The steps: where the character is, how far the lesson goes, and why they cannot go further now. &#123;"current", "ceiling", "blocker"&#125;

### Array[Requirement] get_implicit_requirements() {#method-get-implicit-requirements}

The requirements that come from what the lesson teaches (the tier's own, the specialization's own), on top of the ones of the lesson

### float get_price_multiplier( from_step: int, to_step: int, trainer: TrainerDefinition = null, system_hub: GameHost.SystemHub = null ) {#method-get-price-multiplier}

The multiplier of the price for this purchase: the formula of the lesson (or the number of steps), the multiplier of the lesson, and the standing with the trainer

### Dictionary get_offer( player: Player, trainer: TrainerDefinition = null, system_hub: GameHost.SystemHub = null ) {#method-get-offer}

Everything the panel shows about the lesson for this character: &#123;"status", "reason", "name", "description", "icon", "from_step", "to_step", "multiplier", "cost_text", "affordable", "visible"&#125;

### Array[Reward] build_rewards( from_step: int, to_step: int ) {#method-build-rewards}

The rewards that give what the lesson teaches, for a purchase from a step to a step

### Dictionary learn( player: Player, trainer: TrainerDefinition = null, system_hub: GameHost.SystemHub = null ) {#method-learn}

Buys the lesson for the character: checks that it can be bought, takes the cost, gives what it teaches. All or nothing: if what it teaches cannot be given, what was taken is given back. Returns &#123;"success", "reason"&#125;

### Array[Dictionary] validate() {#method-validate}

========== CHECKS FOR THE EDITOR ==========

