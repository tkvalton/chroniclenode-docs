<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LocalEventEditing

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

What the Local Events tab does to a world scene, without any editor object (so it can be tested headless): making a rule and putting it in the LocalEvents container, the rows of a rule (its causes, conditions and effects) and what they point at, the things of the scene a row can point at, and the state of a rule for Undo. LocalEventPanel is the tab, LocalEventTool picks targets with the mouse.

## Methods

| | |
|---|---|
| `Node3D` | [container_of](#method-container-of)( `world_scene: Node, create: bool = false` ) *static* |
| `LocalEvent` | [make_rule](#method-make-rule)( `rule_name: String, at: Vector3 = Vector3.ZERO` ) *static* |
| `LocalEvent` | [add_rule](#method-add-rule)( `world_scene: Node, rule: LocalEvent` ) *static* |
| `LocalEvent` | [duplicate_rule](#method-duplicate-rule)( `rule: LocalEvent` ) *static* |
| `String` | [copy_name](#method-copy-name)( `base: String` ) *static* |
| `Array[LocalEvent]` | [rules_of](#method-rules-of)( `world_scene: Node` ) *static* |
| `void` | [apply_recipe](#method-apply-recipe)( `rule: LocalEvent, recipe: Dictionary` ) *static* |
| `Array` | [units_of](#method-units-of)( `rule: LocalEvent, side: int` ) *static* |
| `Resource` | [make_unit](#method-make-unit)( `entry: Dictionary` ) *static* |
| `int` | [add_unit](#method-add-unit)( `rule: LocalEvent, side: int, unit: Resource` ) *static* |
| `bool` | [remove_unit](#method-remove-unit)( `rule: LocalEvent, side: int, index: int` ) *static* |
| `int` | [move_unit](#method-move-unit)( `rule: LocalEvent, side: int, index: int, delta: int` ) *static* |
| `Dictionary` | [target_info](#method-target-info)( `unit: Resource` ) *static* |
| `int` | [target_of](#method-target-of)( `unit: Resource` ) *static* |
| `bool` | [set_target](#method-set-target)( `unit: Resource, id: int` ) *static* |
| `bool` | [set_place](#method-set-place)( `unit: Resource, place: Vector3` ) *static* |
| `Array[Dictionary]` | [targets_in](#method-targets-in)( `scene_root: Node` ) *static* |
| `Dictionary` | [describe](#method-describe)( `node: Node` ) *static* |
| `bool` | [fits](#method-fits)( `candidate: Dictionary, info: Dictionary` ) *static* |
| `Dictionary` | [find_target](#method-find-target)( `scene_root: Node, unit: Resource` ) *static* |
| `Dictionary` | [capture](#method-capture)( `rule: LocalEvent` ) *static* |
| `bool` | [same](#method-same)( `a: Dictionary, b: Dictionary` ) *static* |
| `void` | [restore](#method-restore)( `rule: LocalEvent, state: Dictionary` ) *static* |

## Constants

- `String` **CONTAINER** = `"LocalEvents"` - The name of the container of the world scene the rules are kept in
- `Dictionary` **TARGET_PROPERTIES** = `{` - The properties that hold a target of a trigger, condition or action, and the kind of thing each one points at ("interactable" is refined by the class: a switch, a door ...)

## Method descriptions

### Node3D container_of( world_scene: Node, create: bool = false ) {#method-container-of}

The container of the rules in a world scene (made when `create`; null when there is none)

### LocalEvent make_rule( rule_name: String, at: Vector3 = Vector3.ZERO ) {#method-make-rule}

A new rule: a node with an empty event (it is not in the scene yet: see add_rule)

### LocalEvent add_rule( world_scene: Node, rule: LocalEvent ) {#method-add-rule}

Puts a rule in the LocalEvents container of the scene (made when it is missing) and gives it a number. Returns it

### LocalEvent duplicate_rule( rule: LocalEvent ) {#method-duplicate-rule}

A copy of a rule (it gets its own number when it is added to the scene)

### String copy_name( base: String ) {#method-copy-name}

*No description yet.*

### Array[LocalEvent] rules_of( world_scene: Node ) {#method-rules-of}

The rules of a world scene, in the order of their numbers

### void apply_recipe( rule: LocalEvent, recipe: Dictionary ) {#method-apply-recipe}

Makes a rule from a recipe of the palette (the pieces are in place, the targets are empty)

### Array units_of( rule: LocalEvent, side: int ) {#method-units-of}

The list of a side of a rule: triggers (When), conditions (If) or actions (Then)

### Resource make_unit( entry: Dictionary ) {#method-make-unit}

Makes the trigger, condition or action of a palette entry

### int add_unit( rule: LocalEvent, side: int, unit: Resource ) {#method-add-unit}

*No description yet.*

### bool remove_unit( rule: LocalEvent, side: int, index: int ) {#method-remove-unit}

*No description yet.*

### int move_unit( rule: LocalEvent, side: int, index: int, delta: int ) {#method-move-unit}

Moves a row up (-1) or down (+1) inside its side. Returns the new index, -1 when it cannot move

### Dictionary target_info( unit: Resource ) {#method-target-info}

What a row points at: &#123;"property", "kind", "sub"&#125; (kind: interactable, trigger_area, entity, spawner, local_event, ground; sub: switch, door, trap, container, destructible for an interactable), &#123;&#125; when it points at nothing

### int target_of( unit: Resource ) {#method-target-of}

The number a row points at (0 = nothing yet); for a place the answer is 0

### bool set_target( unit: Resource, id: int ) {#method-set-target}

Points a row at a thing (its number)

### bool set_place( unit: Resource, place: Vector3 ) {#method-set-place}

Points a row at a place of the world

### Array[Dictionary] targets_in( scene_root: Node ) {#method-targets-in}

The things a row can point at: [&#123;"node", "id", "name", "kind", "sub"&#125;] (the objects, NPCs, trigger areas, spawners and rules of the scene that have a number)

### Dictionary describe( node: Node ) {#method-describe}

What a node of the scene is for the rows: &#123;"node", "id", "name", "kind", "sub"&#125;, &#123;&#125; when it is nothing a row can point at

### bool fits( candidate: Dictionary, info: Dictionary ) {#method-fits}

Is a thing of the scene one a row wants (its info from target_info)? A switch row takes a switch; an "any object" row takes every object; an object of an unknown kind is taken (the definition may be missing)

### Dictionary find_target( scene_root: Node, unit: Resource ) {#method-find-target}

The thing of the scene a row points at (an entry of targets_in), &#123;&#125; when it is not there

### Dictionary capture( rule: LocalEvent ) {#method-capture}

What a rule is now, to put it back later: a deep copy of its event, its name, whether it is on, its note and its place, and a text that says whether two states are the same

### bool same( a: Dictionary, b: Dictionary ) {#method-same}

*No description yet.*

### void restore( rule: LocalEvent, state: Dictionary ) {#method-restore}

Puts a rule back as `capture` found it (with a copy: the state stays as it was)

