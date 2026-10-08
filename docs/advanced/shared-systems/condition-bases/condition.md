<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# Condition

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [ChestContainsItemCondition](/advanced/shared-systems/general-conditions/chest-contains-item-condition), [DoorStateCondition](/advanced/shared-systems/general-conditions/door-state-condition), [EncounterCondition](/advanced/shared-systems/condition-bases/encounter-condition), [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition), [EventActiveEntityCondition](/advanced/shared-systems/general-conditions/event-active-entity-condition), [EventCompletedEntityCondition](/advanced/shared-systems/general-conditions/event-completed-entity-condition), [GameTimeCondition](/advanced/shared-systems/general-conditions/game-time-condition), [GlobalVariableCondition](/advanced/shared-systems/general-conditions/global-variable-condition), [InteractableHealthCondition](/advanced/shared-systems/general-conditions/interactable-health-condition), [LocalVariableBoolCondition](/advanced/shared-systems/event-conditions/local-variable-bool-condition), [LocalVariableFloatCondition](/advanced/shared-systems/event-conditions/local-variable-float-condition), [LocalVariableIntCondition](/advanced/shared-systems/event-conditions/local-variable-int-condition), [LocalVariableStringCondition](/advanced/shared-systems/event-conditions/local-variable-string-condition), [OrCondition](/advanced/shared-systems/general-conditions/or-condition), [PartyIncludesClassCondition](/advanced/shared-systems/general-conditions/party-includes-class-condition), [PartySizeCondition](/advanced/shared-systems/general-conditions/party-size-condition), [PlayerRegionPresenceCondition](/advanced/shared-systems/general-conditions/player-region-presence-condition), [RegionPresenceCondition](/advanced/shared-systems/general-conditions/region-presence-condition)

Base class for all conditions that evaluate game state.

## Variables

| | | |
|---|---|---|
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |

## Methods

| | |
|---|---|
| `void` | [set_system_hub](#method-set-system-hub)( `p_system_hub: GameHost.SystemHub` ) |
| `bool` | [evaluate](#method-evaluate)( `argument: Variant = null` ) |
| `String` | [get_description](#method-get-description)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `bool` | [is_valid](#method-is-valid)() |
| `String` | [get_expected_argument_type](#method-get-expected-argument-type)() |

## Enumerations

### enum CheckLogic {#enum-checklogic}

- **EQUAL** = `0`
- **GREATER** = `1`
- **LESS** = `2`
- **GREATER_EQUAL** = `3`
- **LESS_EQUAL** = `4`
- **NOT_EQUAL** = `5`
- **CONTAINS** = `6`
- **NOT_CONTAINS** = `7`

## Variable descriptions

### GameHost.SystemHub system_hub {#var-system-hub}

GameHost access for condition flexability

## Method descriptions

### void set_system_hub( p_system_hub: GameHost.SystemHub ) {#method-set-system-hub}

*No description yet.*

### bool evaluate( argument: Variant = null ) {#method-evaluate}

Evaluate this condition with an optional argument Override this in subclasses to implement specific logic @param argument: Optional data needed for evaluation (Entity, Encounter, etc.) @return: true if condition is met, false otherwise

### String get_description() {#method-get-description}

Get a human-readable description of this condition (for editor/debugging) Override in subclasses to provide meaningful descriptions

### String get_function_description() {#method-get-function-description}

Get function description with placeholders for EventTypeSelectionDialog inline editing Override in subclasses to provide template with {parameter_name} placeholders Falls back to get_description() if not overridden

### bool is_valid() {#method-is-valid}

Validate that this condition is properly configured Override in subclasses to check required fields

### String get_expected_argument_type() {#method-get-expected-argument-type}

Get the expected argument type for this condition (for editor hints) Override in subclasses to specify what argument type is expected

