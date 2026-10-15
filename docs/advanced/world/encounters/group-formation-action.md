<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GroupFormationAction

**Inherits:** [EncounterAction](/advanced/world/encounters/encounter-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Organizes group members into specific formations

## Properties

| | | |
|---|---|---|
| `UniqueEncounterData.Formation` | [formation_type](#prop-formation-type) | `UniqueEncounterData.Formation.CIRCLE_TARGET` |
| `float` | [formation_radius](#prop-formation-radius) | `0.0  # 0 = use automatic radius based on group size` |
| `bool` | [maintain_formation](#prop-maintain-formation) | `true` |
| `float` | [movement_speed_modifier](#prop-movement-speed-modifier) | `1.0` |

## Property descriptions

### UniqueEncounterData.Formation formation_type = UniqueEncounterData.Formation.CIRCLE_TARGET {#prop-formation-type}

The formation the group takes.

### float formation_radius = 0.0  # 0 = use automatic radius based on group size {#prop-formation-radius}

The size of the formation (0 = the default).

### bool maintain_formation = true {#prop-maintain-formation}

Whether to continuously maintain formation

### float movement_speed_modifier = 1.0 {#prop-movement-speed-modifier}

Speed modifier when moving to formation

