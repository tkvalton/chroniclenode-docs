<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# BossPhase

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

BossPhase represents a single phase in a boss encounter.

## Properties

| | | |
|---|---|---|
| `String` | [phase_name](#prop-phase-name) | `"Phase 1"` |
| `AttackStateLogic` | [phase_attack_logic](#prop-phase-attack-logic) |  |
| `PhaseTransition` | [phase_transition](#prop-phase-transition) |  |
| `Array[CombatAction]` | [on_enter_actions](#prop-on-enter-actions) | `[]` |
| `Array[CombatAction]` | [on_exit_actions](#prop-on-exit-actions) | `[]` |

## Variables

| | | |
|---|---|---|
| `Entity` | [entity](#var-entity) |  |
| `ModularCombatScript` | [combat_script](#var-combat-script) |  |
| `bool` | [has_entered](#var-has-entered) | `false` |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `system_hub: GameHost.SystemHub, entity_ref: Entity, script: ModularCombatScript` ) |
| `void` | [on_enter](#method-on-enter)() |
| `void` | [on_exit](#method-on-exit)() |
| `bool` | [should_transition](#method-should-transition)() |
| `bool` | [is_start_phase](#method-is-start-phase)() |
| `void` | [cleanup](#method-cleanup)() |

## Property descriptions

*Phase Settings*

### String phase_name = "Phase 1" {#prop-phase-name}

Display name for this phase (for debugging)

### AttackStateLogic phase_attack_logic {#prop-phase-attack-logic}

Attack logic to use during this phase

*Transition Settings*

### PhaseTransition phase_transition {#prop-phase-transition}

Transition conditions for this phase

*Phase Actions*

### Array[CombatAction] on_enter_actions = [] {#prop-on-enter-actions}

Actions to execute when entering this phase

### Array[CombatAction] on_exit_actions = [] {#prop-on-exit-actions}

Actions to execute when exiting this phase

## Variable descriptions

### Entity entity {#var-entity}

Reference to the entity

### ModularCombatScript combat_script {#var-combat-script}

Reference to the combat script

### bool has_entered = false {#var-has-entered}

Whether this phase has been entered

## Method descriptions

### void setup( system_hub: GameHost.SystemHub, entity_ref: Entity, script: ModularCombatScript ) {#method-setup}

Setup the phase

### void on_enter() {#method-on-enter}

Called when entering this phase

### void on_exit() {#method-on-exit}

Called when exiting this phase

### bool should_transition() {#method-should-transition}

Check if we should transition to next phase

### bool is_start_phase() {#method-is-start-phase}

Check if this is a start phase (no transition conditions)

### void cleanup() {#method-cleanup}

Cleanup

