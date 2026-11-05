<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# BehaviorTimeStrip

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

The day of an NPC in one picture: 24 hours across, one bar per schedule in the colour the viewport draws it, from the hour its Time of Day condition starts to the hour it ends (a schedule with no time is for any time: a faint bar all along). The schedules are in the order the NPC checks them: the first whose time and conditions hold runs. The bar of the chosen schedule is bright. Read only in this build.

## Variables

| | | |
|---|---|---|
| `ModularBehaviorScript` | [behavior](#var-behavior) | `null` |
| `int` | [focus_schedule](#var-focus-schedule) | `-1` |

## Methods

| | |
|---|---|
| `void` | [set_script_data](#method-set-script-data)( `new_script: ModularBehaviorScript, new_focus: int` ) |

## Constants

- `float` **ROW_HEIGHT** = `16.0`
- `float` **LABEL_WIDTH** = `0.0`
- `int` **HOURS** = `24`

## Variable descriptions

### ModularBehaviorScript behavior = null {#var-behavior}

*No description yet.*

### int focus_schedule = -1 {#var-focus-schedule}

*No description yet.*

## Method descriptions

### void set_script_data( new_script: ModularBehaviorScript, new_focus: int ) {#method-set-script-data}

*No description yet.*

