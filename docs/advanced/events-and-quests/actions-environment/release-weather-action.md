<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ReleaseWeatherAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Takes away the weather that Set Weather actions set, so the weather goes back to what the zones and the world say (a zone's weather or table, the default weather or table of the world). See docs: World &gt; Weather &gt; Events.

## Properties

| | | |
|---|---|---|
| `Scope` | [scope](#prop-scope) | `Scope.ALL` |
| `float` | [transition_duration](#prop-transition-duration) | `5.0` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |

## Enumerations

### enum Scope {#enum-scope}

What is taken away: the weather set for the whole world, the weather set for the zone the party is in (or the nearest zone above it that has one), or everything that events set

- **WORLD** = `0`
- **CURRENT_ZONE** = `1`
- **ALL** = `2`

## Property descriptions

### Scope scope = Scope.ALL {#prop-scope}

What is taken away

### float transition_duration = 5.0 {#prop-transition-duration}

Seconds the weather takes to change back (0 = at once)

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name of this Action

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

