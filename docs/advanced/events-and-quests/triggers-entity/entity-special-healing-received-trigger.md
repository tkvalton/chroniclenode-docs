<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EntitySpecialHealingReceivedTrigger

**Inherits:** [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when a specific entity receives a heal on which a trigger fired (a critical heal ...). Reads the HealingResult of every heal the entity receives: the trigger records of both phases tell which stats fired, and the result tells how much was actually restored.

## Properties

| | | |
|---|---|---|
| `int` | [entity_unique_id](#prop-entity-unique-id) | `0` |
| `int` | [stat_id](#prop-stat-id) | `0` |
| `String` | [trigger_tag](#prop-trigger-tag) | `""` |
| `float` | [minimum_healing_amount](#prop-minimum-healing-amount) | `0.0` |

## Variables

| | | |
|---|---|---|
| `Entity` | [target_entity](#var-target-entity) | `null` |
| `String` | [display_name](#var-display-name) | `""` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `void` | [setup](#method-setup)() |
| `void` | [cleanup](#method-cleanup)() |
| `void` | [find_target_entity](#method-find-target-entity)() |
| `bool` | [is_triggered](#method-is-triggered)( `event_data: Dictionary` ) |
| `String` | [generate_objective_description](#method-generate-objective-description)() |

## Property descriptions

### int entity_unique_id = 0 {#prop-entity-unique-id}

The unique id of the entity to watch.

### int stat_id = 0 {#prop-stat-id}

Only react to triggers owned by this stat (0 = any stat)

### String trigger_tag = "" {#prop-trigger-tag}

Only react to this trigger tag (empty = any tag)

### float minimum_healing_amount = 0.0 {#prop-minimum-healing-amount}

At least this much must have been restored (0 = any)

## Variable descriptions

### Entity target_entity = null {#var-target-entity}

The entity being watched (found when the trigger starts).

### String display_name = "" {#var-display-name}

The name of the entity, for the objective text.

## Method descriptions

### String get_display_name() {#method-get-display-name}

The name of the trigger in the editor.

### String get_function_description() {#method-get-function-description}

The sentence the editor shows for the trigger, with &#123;placeholders&#125; for its values.

### void setup() {#method-setup}

Starts listening: connects the signals the trigger waits for.

### void cleanup() {#method-cleanup}

Stops listening: disconnects the signals of the trigger.

### void find_target_entity() {#method-find-target-entity}

Finds the entity the trigger watches by its unique id.

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Does this event data satisfy the trigger? Called when the signal the trigger listens to fires.

### String generate_objective_description() {#method-generate-objective-description}

The line of the quest objective this trigger makes ("Kill 5 wolves").

