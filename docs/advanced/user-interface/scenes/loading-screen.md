<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LoadingScreen

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

LoadingScreen manages the visual feedback during loading processes, providing step-by-step progress updates and status information. It handles multiple loading steps and calculates overall progress while displaying current operations.

## Description

Key features:

- Tracks and displays overall loading progress
- Shows current step information and completion status
- Supports multi-step loading processes with individual progress tracking
- Provides visual feedback through progress bar and text updates
- Manages loading screen visibility states
- Calculates and displays accurate progress percentages

## Variables

| | | |
|---|---|---|
| `bool` | [loading](#var-loading) | `false` |
| `int` | [total_steps](#var-total-steps) | `1` |
| `int` | [current_step](#var-current-step) | `0` |
| `float` | [progress_per_step](#var-progress-per-step) | `100.0` |
| `float` | [current_step_progress](#var-current-step-progress) | `0.0` |
| `Tween` | [current_tween](#var-current-tween) |  |

## Methods

| | |
|---|---|
| `void` | [reset_loading_state](#method-reset-loading-state)() |
| `void` | [set_total_steps](#method-set-total-steps)( `steps: int` ) |
| `void` | [update_step_progress](#method-update-step-progress)( `progress: float` ) |
| `void` | [complete_step](#method-complete-step)( `step: String` ) |
| `void` | [start_loading](#method-start-loading)() |
| `void` | [end_loading](#method-end-loading)() |
| `void` | [force_end_loading](#method-force-end-loading)() |

## Signals

### loading_finished() {#signal-loading-finished}

Called when the loading screen has finished

## Variable descriptions

### bool loading = false {#var-loading}

Flag indicating if loading process is active

### int total_steps = 1 {#var-total-steps}

Total number of steps in current loading process

### int current_step = 0 {#var-current-step}

Index of current step being processed

### float progress_per_step = 100.0 {#var-progress-per-step}

Progress percentage allocated per step

### float current_step_progress = 0.0 {#var-current-step-progress}

Current progress within the active step

### Tween current_tween {#var-current-tween}

Progress bar tween

## Method descriptions

### void reset_loading_state() {#method-reset-loading-state}

Resets the loading state

### void set_total_steps( steps: int ) {#method-set-total-steps}

Set the total number of steps for this loading process

### void update_step_progress( progress: float ) {#method-update-step-progress}

Update progress for the current step (progress should be 0.0 to 1.0)

### void complete_step( step: String ) {#method-complete-step}

Complete the current step and move to the next

### void start_loading() {#method-start-loading}

Start the loading screen

### void end_loading() {#method-end-loading}

Cleans up and ends the loading screen normally

### void force_end_loading() {#method-force-end-loading}

Emergency cleanup function to immediately stop the loading screen

