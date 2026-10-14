<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# QuestTrackerQuestUI

**Inherits:** `MarginContainer`

## Properties

| | | |
|---|---|---|
| `PackedScene` | [quest_objective_label](#prop-quest-objective-label) |  |

## Variables

| | | |
|---|---|---|
| `int` | [quest_id](#var-quest-id) | `-1` |
| `Dictionary` | [objective_labels](#var-objective-labels) | `{}` |
| `Tween` | [quest_tween](#var-quest-tween) |  |
| `EventManager` | [event_manager](#var-event-manager) |  |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `quest: Quest` ) |
| `void` | [animate_quest_removal](#method-animate-quest-removal)() |
| `void` | [update_objective](#method-update-objective)( `objective: QuestObjective` ) |

## Property descriptions

### PackedScene quest_objective_label {#prop-quest-objective-label}

*No description yet.*

## Variable descriptions

### int quest_id = -1 {#var-quest-id}

Keep track of the quest being displayed

### Dictionary objective_labels =  {#var-objective-labels}

Dictionary to store objective labels by objective object reference

### Tween quest_tween {#var-quest-tween}

Animation properties

### EventManager event_manager {#var-event-manager}

The event manager (set by the tracker that makes this display: a scene cannot be made with arguments)

## Method descriptions

### void setup( quest: Quest ) {#method-setup}

*No description yet.*

### void animate_quest_removal() {#method-animate-quest-removal}

*No description yet.*

### void update_objective( objective: QuestObjective ) {#method-update-objective}

*No description yet.*

