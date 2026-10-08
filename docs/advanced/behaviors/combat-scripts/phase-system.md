<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PhaseSystem

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

PhaseSystem manages phase transitions for boss encounters. Phases can be triggered by health thresholds, time elapsed, or custom events.

## Description

Each phase can have:

- Different attack logic
- Entry/exit actions
- Modified stats
- Visual changes

Example 3-phase boss:

- Phase 1 (100-70% HP): Melee attacks
- Phase 2 (70-30% HP): Summons adds, uses AOE
- Phase 3 (30-0% HP): Enrage mode, faster attacks

## Properties

| | | |
|---|---|---|
| `Array[BossPhase]` | [phases](#prop-phases) | `[]` |

## Variables

| | | |
|---|---|---|
| `Entity` | [entity](#var-entity) |  |
| `ModularCombatScript` | [combat_script](#var-combat-script) |  |
| `int` | [current_phase_index](#var-current-phase-index) | `-1` |
| `bool` | [is_active](#var-is-active) | `false` |
| `bool` | [combat_started](#var-combat-started) | `false` |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `system_hub: GameHost.SystemHub, entity_ref: Entity, script: ModularCombatScript` ) |
| `void` | [start_combat](#method-start-combat)() |
| `void` | [check_phase_transition](#method-check-phase-transition)( `delta: float` ) |
| `BossPhase` | [get_current_phase](#method-get-current-phase)() |
| `void` | [force_phase_transition](#method-force-phase-transition)( `phase_index: int` ) |
| `void` | [cleanup](#method-cleanup)() |

## Property descriptions

### Array[BossPhase] phases = [] {#prop-phases}

All phases in this system

## Variable descriptions

### Entity entity {#var-entity}

Reference to the entity

### ModularCombatScript combat_script {#var-combat-script}

Reference to the combat script

### int current_phase_index = -1 {#var-current-phase-index}

Current active phase index

### bool is_active = false {#var-is-active}

Whether phase system is active

### bool combat_started = false {#var-combat-started}

*No description yet.*

## Method descriptions

### void setup( system_hub: GameHost.SystemHub, entity_ref: Entity, script: ModularCombatScript ) {#method-setup}

Setup the phase system

### void start_combat() {#method-start-combat}

Start the phase system when combat begins

### void check_phase_transition( delta: float ) {#method-check-phase-transition}

Check if we should transition to a new phase

### BossPhase get_current_phase() {#method-get-current-phase}

Get the current active phase

### void force_phase_transition( phase_index: int ) {#method-force-phase-transition}

Force transition to a specific phase (for scripted events)

### void cleanup() {#method-cleanup}

Cleanup

