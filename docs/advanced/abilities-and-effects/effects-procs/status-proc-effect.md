<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# StatusProcEffect

**Inherits:** [ProcEffect](/advanced/abilities-and-effects/effects-base/proc-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Proc effect that responds to a status condition (a stun, a root, a silence ...) landing on its holder or ending.

## Properties

| | | |
|---|---|---|
| `TriggerType` | [trigger_on](#prop-trigger-on) | `TriggerType.STATUS_APPLIED` |
| `StatusFilter` | [status_filter](#prop-status-filter) | `StatusFilter.ANY_STATUS` |
| `Array[String]` | [base_status_types](#prop-base-status-types) | `[]` |
| `Array[int]` | [specific_status_ids](#prop-specific-status-ids) | `[]` |
| `bool` | [apply_to_inflicter](#prop-apply-to-inflicter) | `false` |

## Methods

| | |
|---|---|
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Enumerations

### enum TriggerType {#enum-triggertype}

- **STATUS_APPLIED** = `0` - When a status lands on the holder
- **STATUS_ENDED** = `1` - When a status ends on the holder

### enum StatusFilter {#enum-statusfilter}

- **ANY_STATUS** = `0` - Every status
- **BASE_TYPES** = `1` - Statuses of the base status types listed below (Incapacitate, Root ...)
- **SPECIFIC_STATUSES** = `2` - Only the status definitions listed below

## Property descriptions

*Status Trigger Settings*

### TriggerType trigger_on = TriggerType.STATUS_APPLIED {#prop-trigger-on}

Which moment of a status triggers this proc

### StatusFilter status_filter = StatusFilter.ANY_STATUS {#prop-status-filter}

Which statuses count

### Array[String] base_status_types = [] {#prop-base-status-types}

Base status types (for BASE_TYPES): "Incapacitate", "Root", "Silence", "Disarm", "Cripple", "Blind", "Flee", "Disorient"

### Array[int] specific_status_ids = [] {#prop-specific-status-ids}

Status effect definition ids (for SPECIFIC_STATUSES)

*Target Override*

### bool apply_to_inflicter = false {#prop-apply-to-inflicter}

Apply the child effects to whoever put the status on the holder instead of to the holder

## Method descriptions

### String get_effect_description() {#method-get-effect-description}

*No description yet.*

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

