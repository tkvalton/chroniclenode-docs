<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TrainerInteraction

**Inherits:** [Interaction](/advanced/entities/interactions/interaction) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A trainer: using the NPC or the object opens a list of lessons that the player can buy (abilities, ranks, proficiency levels, professions, tiers, specializations, recipes). The lessons are the ones of a TrainerDefinition. Like the vendor, it can sit on any entity or object that has interactions.

## Properties

| | | |
|---|---|---|
| `int` | [trainer_definition_id](#prop-trainer-definition-id) |  |
| `SFXSelection` | [open_sfx](#prop-open-sfx) |  |
| `AnimationSelectionSocial` | [open_animation](#prop-open-animation) |  |

## Variables

| | | |
|---|---|---|
| `bool` | [training_is_active](#var-training-is-active) | `false` |
| `Player` | [current_learner](#var-current-learner) |  |

## Methods

| | |
|---|---|
| `bool` | [can_interact](#method-can-interact)( `player: Player` ) |
| `void` | [start_interaction](#method-start-interaction)( `player: Player` ) |
| `void` | [end_interaction](#method-end-interaction)() |
| `TrainerDefinition` | [get_trainer_definition](#method-get-trainer-definition)() |
| `Array[Dictionary]` | [get_offers](#method-get-offers)( `player: Player` ) |
| `Dictionary` | [learn](#method-learn)( `lesson: TrainerLesson, player: Player` ) |
| `void` | [cleanup](#method-cleanup)() |

## Signals

### lesson_learned( lesson: TrainerLesson, player: Player ) {#signal-lesson-learned}

A lesson was bought

## Property descriptions

### int trainer_definition_id {#prop-trainer-definition-id}

The trainer definition: the lessons and the prices

### SFXSelection open_sfx {#prop-open-sfx}

Optional audio to play when the lessons open

### AnimationSelectionSocial open_animation {#prop-open-animation}

Optional animation to play when the lessons open

## Variable descriptions

### bool training_is_active = false {#var-training-is-active}

Whether the list of lessons is open

### Player current_learner {#var-current-learner}

The player who is looking at the lessons

## Method descriptions

### bool can_interact( player: Player ) {#method-can-interact}

Can the player use it: the trainer exists and the requirements are met?

### void start_interaction( player: Player ) {#method-start-interaction}

Opens the list of lessons.

### void end_interaction() {#method-end-interaction}

Closes the list of lessons.

### TrainerDefinition get_trainer_definition() {#method-get-trainer-definition}

The trainer this interaction opens.

### Array[Dictionary] get_offers( player: Player ) {#method-get-offers}

The lessons the player is shown: the ones that are not hidden for them, each with its offer

### Dictionary learn( lesson: TrainerLesson, player: Player ) {#method-learn}

The player buys a lesson. Returns &#123;"success", "reason"&#125;; says so to the player

### void cleanup() {#method-cleanup}

Give the timer back (the object is going away)

