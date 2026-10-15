<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# QuestTrackerQuestUIObjectiveLabel

**Inherits:** [HBoxContainer](https://docs.godotengine.org/en/stable/classes/class_hboxcontainer.html)

One objective in the quest tracker: its text and its progress, with an animation (a color change) when it is completed.

## Variables

| | | |
|---|---|---|
| `Tween` | [tween](#var-tween) |  |
| `Color` | [original_color](#var-original-color) | `Color.WHITE` |
| `Color` | [completion_color](#var-completion-color) | `Color(0.5, 0.9, 0.5)` |
| `Color` | [failure_color](#var-failure-color) | `Color(0.9, 0.3, 0.3)` |

## Methods

| | |
|---|---|
| `void` | [setup_objective](#method-setup-objective)( `objective: QuestObjective` ) |
| `void` | [update_objective_display](#method-update-objective-display)( `objective: QuestObjective` ) |
| `void` | [animate_progress_update](#method-animate-progress-update)() |

## Variable descriptions

### Tween tween {#var-tween}

Animation properties

### Color original_color = Color.WHITE {#var-original-color}

The color of the text, kept to give it back after an animation.

### Color completion_color = Color(0.5, 0.9, 0.5) {#var-completion-color}

Green

### Color failure_color = Color(0.9, 0.3, 0.3) {#var-failure-color}

Red

## Method descriptions

### void setup_objective( objective: QuestObjective ) {#method-setup-objective}

Fills the label with an objective: its text and its progress.

### void update_objective_display( objective: QuestObjective ) {#method-update-objective-display}

Updates the text and the progress of the objective.

### void animate_progress_update() {#method-animate-progress-update}

Plays a short animation when the progress changes (not at the end).

