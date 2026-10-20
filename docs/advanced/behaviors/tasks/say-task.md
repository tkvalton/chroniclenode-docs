<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SayTask

**Inherits:** [BehaviorTask](/advanced/behaviors/tasks/behavior-task) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

The NPC says a line or does an emote: the guard yawns while he idles, the merchant calls out his wares. The line goes to the players within the range of its channel (or the audience it names), and the NPC plays its animation and sound. See docs: Chat &gt; Lines.

## Properties

| | | |
|---|---|---|
| `SpeechLine` | [line](#prop-line) |  |
| `int` | [target_unique_id](#prop-target-unique-id) | `0` |
| `float` | [wait_seconds](#prop-wait-seconds) | `0.0` |

## Methods

| | |
|---|---|
| `void` | [execute_task_start](#method-execute-task-start)() |

## Property descriptions

*Line*

### SpeechLine line {#prop-line}

The line: the kind, the text (or an emote of the library), the animation, the sound and the audience

### int target_unique_id = 0 {#prop-target-unique-id}

For an emote with a target: the unique id of whom it is done to. 0 = no target

*Timing*

### float wait_seconds = 0.0 {#prop-wait-seconds}

Seconds the task lasts after the line (the animation plays out). 0 = the task is done at once

## Method descriptions

### void execute_task_start() {#method-execute-task-start}

Starts the task.

