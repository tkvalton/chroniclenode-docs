<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EntityDeathTypeTrigger

**Inherits:** [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when a certain amount of entities of a specific type are killed

## Properties

| | | |
|---|---|---|
| `int` | [entity_id](#prop-entity-id) | `0` |
| `int` | [amount_required](#prop-amount-required) | `1` |

## Variables

| | | |
|---|---|---|
| `int` | [current_amount](#var-current-amount) | `0` |
| `String` | [display_name](#var-display-name) | `""` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `void` | [setup](#method-setup)() |
| `void` | [reset](#method-reset)() |
| `void` | [set_progress](#method-set-progress)( `amount: int` ) |
| `void` | [cleanup](#method-cleanup)() |
| `void` | [connect_signals](#method-connect-signals)() |
| `void` | [update_entity_name](#method-update-entity-name)() |
| `void` | [add_kill](#method-add-kill)( `killed_entity_id: int` ) |
| `bool` | [is_triggered](#method-is-triggered)( `event_data: Dictionary` ) |
| `String` | [generate_objective_description](#method-generate-objective-description)() |

## Property descriptions

### int entity_id = 0 {#prop-entity-id}

The entity type ID to track

### int amount_required = 1 {#prop-amount-required}

Total amount needed to trigger the event

## Variable descriptions

### int current_amount = 0 {#var-current-amount}

Current kill count

### String display_name = "" {#var-display-name}

Entity name - will be auto-populated from the database

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name for this trigger

### String get_function_description() {#method-get-function-description}

Return the function description with parameter placeholders

### void setup() {#method-setup}

Set up any listeners or connections needed by this trigger

### void reset() {#method-reset}

The count starts again (the objective or event that owns this trigger starts over)

### void set_progress( amount: int ) {#method-set-progress}

The count from a save

### void cleanup() {#method-cleanup}

Clean up any listeners or connections

### void connect_signals() {#method-connect-signals}

Connect to signals

### void update_entity_name() {#method-update-entity-name}

Update the entity name from the database using the display_name field

### void add_kill( killed_entity_id: int ) {#method-add-kill}

Add a kill to the counter and check completion

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Check if this trigger is currently active

### String generate_objective_description() {#method-generate-objective-description}

Generate quest objective description

