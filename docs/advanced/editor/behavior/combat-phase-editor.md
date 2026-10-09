<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CombatPhaseEditor

**Inherits:** [PanelContainer](https://docs.godotengine.org/en/stable/classes/class_panelcontainer.html)

Editor for managing BossPhase resources in a PhaseSystem

## Variables

| | | |
|---|---|---|
| `PhaseSystem` | [phase_system](#var-phase-system) |  |
| `int` | [current_phase_index](#var-current-phase-index) | `0` |
| `bool` | [is_loading](#var-is-loading) | `false` |
| `Array[Button]` | [phase_buttons](#var-phase-buttons) | `[]` |
| `Button` | [add_phase_button](#var-add-phase-button) |  |
| `ConditionalEditDialog` | [condition_dialog](#var-condition-dialog) |  |
| `DialogManager` | [dialog_manager](#var-dialog-manager) |  |

## Methods

| | |
|---|---|
| `void` | [load_phase_system](#method-load-phase-system)( `p_phase_system: PhaseSystem` ) |
| `PhaseSystem` | [get_phase_system](#method-get-phase-system)() |
| `AttackStateLogic` | [get_current_attack_logic](#method-get-current-attack-logic)() |
| `void` | [copy_attack_logic_to_phase](#method-copy-attack-logic-to-phase)( `attack_logic: AttackStateLogic` ) |

## Signals

### phase_switched( new_phase_index: int, new_attack_logic: AttackStateLogic ) {#signal-phase-switched}

### phases_modified() {#signal-phases-modified}

## Variable descriptions

### PhaseSystem phase_system {#var-phase-system}

*No description yet.*

### int current_phase_index = 0 {#var-current-phase-index}

*No description yet.*

### bool is_loading = false {#var-is-loading}

*No description yet.*

### Array[Button] phase_buttons = [] {#var-phase-buttons}

*No description yet.*

### Button add_phase_button {#var-add-phase-button}

*No description yet.*

### ConditionalEditDialog condition_dialog {#var-condition-dialog}

*No description yet.*

### DialogManager dialog_manager {#var-dialog-manager}

*No description yet.*

## Method descriptions

### void load_phase_system( p_phase_system: PhaseSystem ) {#method-load-phase-system}

*No description yet.*

### PhaseSystem get_phase_system() {#method-get-phase-system}

*No description yet.*

### AttackStateLogic get_current_attack_logic() {#method-get-current-attack-logic}

*No description yet.*

### void copy_attack_logic_to_phase( attack_logic: AttackStateLogic ) {#method-copy-attack-logic-to-phase}

Copy the current attack logic from the main script to the current phase

