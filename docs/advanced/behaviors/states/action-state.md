<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ActionState

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [AttackingState](/advanced/behaviors/states/attacking-state), [ChasingState](/advanced/behaviors/states/chasing-state), [DeadState](/advanced/behaviors/states/dead-state), [DisorientedState](/advanced/behaviors/states/disoriented-state), [FleeState](/advanced/behaviors/states/flee-state), [FollowingState](/advanced/behaviors/states/following-state), [InactiveState](/advanced/behaviors/states/inactive-state), [IncapacitatedState](/advanced/behaviors/states/incapacitated-state), [PlayerCommandState](/advanced/behaviors/states/player-command-state), [TargetSearchState](/advanced/behaviors/states/target-search-state)

ActionState is the base class for all combat action states. It defines the interface and common functionality for action-related states.

## Description

States are now owned by ModularCombatScript and reference it directly.

## Variables

| | | |
|---|---|---|
| `ModularCombatScript` | [combat_script](#var-combat-script) | `null` |
| `ChronoManager` | [chrono_manager](#var-chrono-manager) |  |
| `Entity` | [entity](#var-entity) | `null` |

## Methods

| | |
|---|---|
| `void` | [set_combat_script](#method-set-combat-script)( `script: ModularCombatScript, state_entity: Entity` ) |
| `void` | [enter](#method-enter)() |
| `void` | [exit](#method-exit)() |
| `void` | [update](#method-update)( `_delta: float` ) |
| `void` | [return_all_timer](#method-return-all-timer)() |

## Variable descriptions

### ModularCombatScript combat_script = null {#var-combat-script}

Reference to the combat script that owns this state

### ChronoManager chrono_manager {#var-chrono-manager}

ChronoManager ref

### Entity entity = null {#var-entity}

Reference to the entity (convenience, duplicates combat_script.entity)

## Method descriptions

### void set_combat_script( script: ModularCombatScript, state_entity: Entity ) {#method-set-combat-script}

Sets the combat script reference

### void enter() {#method-enter}

Called when entering the state

### void exit() {#method-exit}

Called when exiting the state

### void update( _delta: float ) {#method-update}

Called every frame to update the state

### void return_all_timer() {#method-return-all-timer}

Timer clean up method

