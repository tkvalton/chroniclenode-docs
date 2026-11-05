<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# NewScheduleDialog

**Inherits:** `ConfirmationDialog`

The window that makes a new schedule: a name and a kind (ordered, priority, wander) with a line about each. The Behavior Scripts editor and the Behaviour tab of the 3D viewport both use it, so a schedule is made the same way in both. It gives the schedule (BehaviorEditing.new_schedule) to whoever listens to `schedule_created`.

## Methods

| | |
|---|---|
| `void` | [open](#method-open)( `script: ModularBehaviorScript = null` ) |
| `TaskSchedule` | [make_schedule](#method-make-schedule)() |

## Signals

### schedule_created( schedule: TaskSchedule ) {#signal-schedule-created}

## Method descriptions

### void open( script: ModularBehaviorScript = null ) {#method-open}

Opens the window with a name that no schedule of the script has (when a script is given)

### TaskSchedule make_schedule() {#method-make-schedule}

Makes the schedule the window describes (what pressing OK does)

