# Requirements: how they are built

A requirement is a small `Resource` stored **inside** the resource that uses it (an ability, an item, a quest ...), in an `Array[Requirement]`. It is not in the [Database](/advanced/data-and-database/): it has no id and no file of its own, it is saved with its owner. The [Basic guide](/basic/shared-systems/requirements) explains how to use them.

## The base class

[Requirement](/advanced/shared-systems/requirements/requirement) extends `Resource` and is pure validation: it never changes anything.

| Member | What it does |
|---|---|
| `check(entity: Entity) -> bool` | Does the entity meet the requirement? The one function a type must implement |
| `get_failure_message(entity) -> String` | Why it is not met, with the entity's numbers: "Requires level 20 (you are level 12)" |
| `get_summary() -> String` | A short description for tooltips: "Requires level 20" |
| `connect_to_entity_signals(entity)` and `disconnect_from_entity_signals(entity)` | Connect to the signals of the entity that can change the answer (level up, stat change, equipment change, class change). Optional |
| `signal requirement_state_changed(requirement, entity)` | Emitted by a type when the answer may have changed |

## Checking a list

[RequirementChecker](/advanced/shared-systems/requirements/requirement-checker) is a static utility that works on an `Array[Requirement]`:

| Function | Returns |
|---|---|
| `check_all(entity, requirements)` | A dictionary: `passed` (bool), `failures` (an entry for each failed requirement with `requirement_type`, `failure_message` and `summary`), and `all_checked` |
| `meets_all_requirements(entity, requirements)` | `true` when every requirement passes (an empty list passes; a null entry is skipped) |
| `get_failure_message(entity, requirements)` | The messages of the failed requirements, one per line, or an empty string |
| `get_requirements_summary(requirements)` | The summaries, one per line, for a tooltip |

Every requirement in a list must pass. There is no "any": a different shape of rule is a [Condition](/advanced/shared-systems/conditions).

## Reactive requirements

An ability that has requirements watches them. When the ability is set up (`AbilityInstance.setup_requirement_monitoring`) each requirement connects itself to the signals of the user, and the ability listens to `requirement_state_changed`.
The answer is re-checked then (`check_and_update_requirement_state`): an ability whose requirements stop holding goes `INACTIVE`, and goes back to `READY` (or `ON_COOLDOWN`) when they hold again. A passive ability also removes its passive effects while it is inactive, and applies them again when it is active.
A type that wants this implements the two `connect_...` functions and emits the signal; the shipped ones do:

| Type | Signal it watches |
|---|---|
| Level | `entity_leveled_up` |
| Stat | `entity_stat_changed` (only for its own stat) |
| Equipment Slot | `equipment_changed` (only for its own slot) |
| Player Class | the class change signal of the player (Player entities only) |

## Where they are stored and checked

| Owner | Property | Checked by |
|---|---|---|
| `AbilityDefinition` | `requirements` | `ActiveAbilityDefinition` (through `RequirementChecker`) and the ability instance (reactive) |
| `Effect` | `requirements` | `Effect.check_requirements(entity)`: the first failed one rejects the effect and gives its message |
| `ItemDefinition` | `requirements` | `check_requirements`, `meets_requirements`, `get_requirement_failure_message` |
| `Quest` | `requirements` | `can_accept`, `get_failed_requirements`, `get_requirement_failure_messages` |
| `CraftingRecipeDefinition` | `requirements` | its craft check, which lists the failure messages of the unmet ones |
| `CraftSchoolDefinition` | `learning_requirements` | the check for learning the school |
| `ConversationResponse` | `response_requirements` | `ConversationInstance`, which offers only the responses that pass |

## Writing your own requirement

1. Make a script that `extends Requirement`, with `@tool` and a `class_name`, in `res://addons/chroniclenode/data_classes/requirements/types/`. The editor's add dialog lists every script of that folder, and the name in the list is made from the file name.
2. Add `@export` properties for its settings. They are the fields the dialog shows.
3. Implement `check`, `get_failure_message` and `get_summary`.
4. If the answer can change while the game runs, connect to the entity's signal in `connect_to_entity_signals` and emit `requirement_state_changed`.

```gdscript
@tool
class_name RequirementKills extends Requirement
## Requires the entity to have killed a number of enemies

@export var minimum_kills: int = 10

func check(entity: Entity) -> bool:
    return entity != null and int(entity.get_meta("kills", 0)) >= minimum_kills

func get_failure_message(entity: Entity) -> String:
    return "Requires %d kills" % minimum_kills

func get_summary() -> String:
    return "Requires %d kills" % minimum_kills
```

::: warning Known gap
`RequirementChecker.validate_requirements` calls `validate()` on each requirement, but the base class does not define it. Do not call it until it does.
:::

## The classes

<!-- classes:shared-systems/requirements -->
| Class | What it is |
|---|---|
| [Requirement](/advanced/shared-systems/requirements/requirement) | Base class for all requirement types in the game. |
| [RequirementChecker](/advanced/shared-systems/requirements/requirement-checker) | Utility class for checking requirements and generating feedback |
| [RequirementEquipmentSlot](/advanced/shared-systems/requirements/requirement-equipment-slot) | Requires entity to have equipment in specific slot |
| [RequirementFaction](/advanced/shared-systems/requirements/requirement-faction) | Requires entity to have a minimum reputation with a faction |
| [RequirementLevel](/advanced/shared-systems/requirements/requirement-level) | Requires the entity to be at or above a level, and optionally at or below another (a level range: a buff that only works up to level 60) |
| [RequirementPlayerClassDefinition](/advanced/shared-systems/requirements/requirement-player-class-definition) | Requires entity to be one of the specified player classes |
| [RequirementResponseSeen](/advanced/shared-systems/requirements/requirement-response-seen) | Requirement that checks if a player has seen/selected a specific response |
| [RequirementStat](/advanced/shared-systems/requirements/requirement-stat) | Requires entity to have a minimum value in a specific stat |
| [RequirementWeapon](/advanced/shared-systems/requirements/requirement-weapon) | Requires entity to have specific weapon types equipped |
<!-- /classes -->
