<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LocalEventCheck

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

What is wrong with the rules of a world, found without running the game: a rule nothing sets off, a rule that does nothing, a row that is about nothing yet, a row about a thing that is not in the scene (the object was deleted), a row about the wrong kind of thing (a door action pointing at a switch), an event that is not in the database, rules that start each other round and round. A problem is a Dictionary: &#123;"side": LocalEventPalette.Side or -1 for the rule itself, "index": the row (-1 for the rule), "level": "error" or "note", "text"&#125;.

## Methods

| | |
|---|---|
| `Dictionary` | [check_scene](#method-check-scene)( `world_scene: Node` ) *static* |
| `Array[Dictionary]` | [check_rule](#method-check-rule)( `rule: LocalEvent, world_scene: Node, rules: Array[LocalEvent]` ) *static* |
| `Array[Dictionary]` | [runs_of](#method-runs-of)( `rule: LocalEvent` ) *static* |
| `Event` | [promote](#method-promote)( `rule: LocalEvent, event_name: String = ""` ) *static* |
| `bool` | [has_local_only_rows](#method-has-local-only-rows)( `rule: LocalEvent` ) *static* |

## Method descriptions

### Dictionary check_scene( world_scene: Node ) {#method-check-scene}

The problems of every rule of a scene: local_id -&gt; [problems]

### Array[Dictionary] check_rule( rule: LocalEvent, world_scene: Node, rules: Array[LocalEvent] ) {#method-check-rule}

The problems of one rule. `rules` are all the rules of the scene (what runs it, and what it runs)

### Array[Dictionary] runs_of( rule: LocalEvent ) {#method-runs-of}

The numbers of the local events a rule runs, switches on or off, or resets: [&#123;"id", "operation"&#125;]

### Event promote( rule: LocalEvent, event_name: String = "" ) {#method-promote}

Makes an event of the database (a global event) from a rule: copies of its triggers, conditions and actions, with the same numbers. Returns the event (null when it could not be saved). The rule is not removed

### bool has_local_only_rows( rule: LocalEvent ) {#method-has-local-only-rows}

Does the rule have rows that only work while its world is loaded (running local events): a global event that has them fails in another world

