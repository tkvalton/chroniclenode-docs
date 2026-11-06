<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# BehaviorTemplates

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Starting points for the behaviour of an NPC, and copies of what another NPC does (phase 5 of the Behaviour tab). A **template** is a small behaviour script (a record of the category "behavior_template", or one of the built-in ones made in code) with one or more schedules and the reactions that belong to them. Its places are **relative to where the NPC is placed** (tasks with relative_to_spawn), so it fits wherever the NPC stands. Adding it to an NPC puts deep copies of its schedules (and reactions) at the end of the NPC's own script, with names no schedule of the script has. The tab's **Save as template** makes a record from the chosen schedule (its places turned into distances from the NPC, the reactions that switch to it come with it). **Copy from another NPC** copies a schedule of another NPC or script the same way, either keeping its places where they are in the world (several guards walking one wall) or making them relative to where the NPC is placed.

## Methods

| | |
|---|---|
| `Array[Dictionary]` | [built_in](#method-built-in)() *static* |
| `Array[Dictionary]` | [yours](#method-yours)() *static* |
| `Dictionary` | [add_to_script](#method-add-to-script)( `script: ModularBehaviorScript, template: ModularBehaviorScript` ) *static* |
| `int` | [copy_schedule](#method-copy-schedule)( `script: ModularBehaviorScript, source: ModularBehaviorScript, source_index: int, source_origin: Vector3, places: Places` ) *static* |
| `ModularBehaviorScript` | [save_schedule](#method-save-schedule)( `script: ModularBehaviorScript, schedule_index: int, origin: Vector3, template_name: String, description: String = ""` ) *static* |

## Enumerations

### enum Places {#enum-places}

What happens to the places of a schedule that is copied from another NPC

- **KEEP** = `0` - They stay where they are in the world
- **RELATIVE** = `1` - They become distances from where the NPC is placed (the shape moves with the NPC)

## Constants

- `String` **CATEGORY** = `"behavior_template"` - The category of the database the templates of the user are in (ModularBehaviorScript records)

## Method descriptions

### Array[Dictionary] built_in() {#method-built-in}

The templates that come with the toolkit: [&#123;"name", "description", "built_in": true, "script": a new ModularBehaviorScript&#125;]

### Array[Dictionary] yours() {#method-yours}

The templates the user saved (records of the category), by name: [&#123;"name", "description", "built_in": false, "id", "script"&#125;]

### Dictionary add_to_script( script: ModularBehaviorScript, template: ModularBehaviorScript ) {#method-add-to-script}

Puts the schedules of a template, and its reactions, at the end of a script (copies: the template stays as it was). A schedule whose name is taken gets "name 2"; the reactions that switch to it are changed to its new name. Returns &#123;"first": the index of the first schedule added (-1 when none), "schedules": how many, "reactions": how many&#125;

### int copy_schedule( script: ModularBehaviorScript, source: ModularBehaviorScript, source_index: int, source_origin: Vector3, places: Places ) {#method-copy-schedule}

Copies a schedule of another script into `script`. `source_origin` is where the NPC of the source is placed (what its relative places count from). Places: KEEP makes every place a place of the world (the schedule walks the same ground), RELATIVE makes them distances from the NPC (the schedule fits where the NPC is). Returns the index of the copy, -1 when there is no such schedule

### ModularBehaviorScript save_schedule( script: ModularBehaviorScript, schedule_index: int, origin: Vector3, template_name: String, description: String = "" ) {#method-save-schedule}

Saves a schedule of a script as a template (a new record of the category): a copy whose places are distances from `origin` (where the NPC is placed), with the reactions that switch to it. Null when it could not be saved

