<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# FormationSystem

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

## Variables

| | | |
|---|---|---|
| `FormationType` | [current_formation](#var-current-formation) | `FormationType.TIGHT` |
| `float` | [base_spacing](#var-base-spacing) | `2.0` |
| `float` | [randomization_factor](#var-randomization-factor) | `0.3` |

## Methods

| | |
|---|---|
| `Dictionary` | [calculate_formation_positions](#method-calculate-formation-positions)( `units: Array[Entity], target_position: Vector3, formation_direction: Vector3` ) |
| `float` | [calculate_spacing](#method-calculate-spacing)( `unit_count: int` ) |
| `void` | [cycle_formation](#method-cycle-formation)() |
| `void` | [set_formation](#method-set-formation)( `formation: FormationType` ) |

## Enumerations

### enum FormationType {#enum-formationtype}

- **TIGHT** = `0`
- **SPREAD** = `1`
- **V_SHAPE** = `2`
- **LINE** = `3`
- **WEDGE** = `4`

## Variable descriptions

### FormationType current_formation = FormationType.TIGHT {#var-current-formation}

*No description yet.*

### float base_spacing = 2.0 {#var-base-spacing}

*No description yet.*

### float randomization_factor = 0.3 {#var-randomization-factor}

*No description yet.*

## Method descriptions

### Dictionary calculate_formation_positions( units: Array[Entity], target_position: Vector3, formation_direction: Vector3 ) {#method-calculate-formation-positions}

*No description yet.*

### float calculate_spacing( unit_count: int ) {#method-calculate-spacing}

*No description yet.*

### void cycle_formation() {#method-cycle-formation}

*No description yet.*

### void set_formation( formation: FormationType ) {#method-set-formation}

*No description yet.*

