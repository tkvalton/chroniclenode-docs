# Conditions: how they are built

A condition is a `Resource` with one job: answer `true` or `false` for some part of the game state. Like a requirement it is stored inside the resource that uses it and has no id of its own. The [Basic guide](/basic/shared-systems/conditions) explains how to use them.

## The base class

[Condition](/advanced/shared-systems/condition-bases/condition) extends `Resource`:

| Member | What it does |
|---|---|
| `evaluate(argument: Variant = null) -> bool` | The question. `argument` is what the caller offers: usually an `Entity`, an `Encounter`, or a `StatConditionContext` |
| `get_description() -> String` | A readable description for the editor and for debugging |
| `get_function_description() -> String` | The same with `{field}` placeholders, used by the dialogs that edit a condition inline |
| `is_valid() -> bool` | Is it configured well enough to run? |
| `get_expected_argument_type() -> String` | What `evaluate` expects, for editor hints (`"Entity"`, `"Encounter"`, `"None"`) |
| `set_system_hub(hub)` | Gives the condition the systems of the game, for conditions that look things up by id. The caller sets it before `evaluate` |
| `CheckLogic` | The comparison enum shared by number conditions: `EQUAL`, `GREATER`, `LESS`, `GREATER_EQUAL`, `LESS_EQUAL`, `NOT_EQUAL`, `CONTAINS`, `NOT_CONTAINS` |

## The three families

| Family | Base class | Argument | Override |
|---|---|---|---|
| **General** | `Condition` | Whatever the caller gives, usually nothing | `evaluate` |
| **Entity** | [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) | An `Entity` | `evaluate_entity(entity)` |
| **Encounter** | [EncounterCondition](/advanced/shared-systems/condition-bases/encounter-condition) | An `Encounter` | `evaluate_encounter(encounter)` |

Do not override `evaluate` in an entity or encounter condition. The base class first picks the entity (or encounter) to ask about from the **target** setting, returns `false` when there is none, and only then calls your function.

### Entity targets

`EntityCondition.entity_target` chooses the entity from the argument. `get_target_entity(argument)` resolves it:

| `EntityTarget` | Resolves to |
|---|---|
| `ARGUMENT_ENTITY` | The argument itself, when it is an `Entity` |
| `ARGUMENT_ENTITY_TARGET` | `argument.target` |
| `CURRENT_PLAYER` | `PlayerUtility.get_current_player()` |
| `SUMMONER` | `argument.summoner`, when the argument is a `Pet` |
| `UNIQUE_ID` | The entity registered under `target_entity_id` in the object registry (needs the system hub) |
| `OPPONENT` | The other side of the hit, for conditions on stat effects (see below) |
| `ANY_PLAYER`, `ALL_PLAYER` | Not one entity but the whole party: `evaluate` asks every member of the party (`get_party_members`, from the system hub or the current player) and is true when at least one member passes (`ANY_PLAYER`) or every member passes (`ALL_PLAYER`). With no party it is `false` |

`EncounterCondition.encounter_target` works the same way: `ARGUMENT_ENCOUNTER` (an `Encounter`, or the encounter of an `Entity`), `CURRENT_ACTIVE`, `NEAREST` and `UNIQUE_ID` (`encounter_id`).

### Conditions on stat effects

A stat effect evaluates its conditions with a `StatConditionContext` as the argument: `owner` (the entity that has the stat), `opponent` (the other side of the hit being calculated, `null` outside a hit) and the system hub.
`EntityCondition` understands it: `ARGUMENT_ENTITY` is the owner and `OPPONENT` is the opponent, so "damage against Undead" is an `EntityHasTagCondition` with the target `OPPONENT`.

### Combining

[OrCondition](/advanced/shared-systems/general-conditions/or-condition) holds an `Array[Condition]` and passes when at least `min_required` of them pass. With `min_required` 1 it is "or", with as many as it holds it is "and". It gives its children the system hub.

## Where conditions are stored and evaluated

| Owner | Property | Type |
|---|---|---|
| `Event` | `conditions` | `Array[Condition]`: all must be true. `get_failed_conditions` lists the failed ones |
| `IfAction` (event action) | `conditions` | `Array[Condition]` |
| `StatEffect` | `conditions` | `Array[Condition]`: all must be true, on top of the active trigger. Evaluated with a `StatConditionContext` |
| `ConditionConditionalEffect` | `conditions`, `logic`, `check_on` | `Array[Condition]`, all or any, on the target or the originator. The effect instance gives them the system hub |
| `CombatAction`, `BehaviorReaction`, `CombatReaction`, `PhaseTransition` | `conditions` | `Array[EntityCondition]` |
| `TaskSchedule` | `activation_conditions` | `Array[EntityCondition]` |
| `BehaviorTask` | `execution_conditions` | `Array[EntityCondition]` |
| `EncounterReaction`, `EncounterAction` | `conditions` | `Array[EncounterCondition]` |

## How the editors list them

- The add-condition dialog (`ConditionalEditDialog`) has three categories, **General**, **Entity** and **Encounter**, and lists every script of the matching folder under `res://addons/chroniclenode/data_classes/conditions/` (`general/`, `entity/`, `encounter/`). The name in the list is the file name without `_condition`.
- The list of a **stat effect** shows the entity conditions of `conditions/entity/` and of the project folder `res://src/stat_conditions/` (`StatClassScanner.find_conditions`), so a condition you write there is offered without touching the addon.
- The event variable conditions in `conditions/event/` are made by the event editor, which is where those variables exist.

## Writing your own condition

1. Make a script in the project (for entity conditions used by stat effects: `res://src/stat_conditions/`) that extends `EntityCondition`, with `@tool` and a `class_name`.
2. Add `@export` properties for its settings.
3. Override `evaluate_entity(entity)`, and `get_entity_description()` for the text the editor shows.

The list of a stat effect finds a script in `res://src/stat_conditions/` by itself. The add-condition dialog of the other editors (events, behaviors, encounters) only lists the folders of the addon, so a condition you write appears there only when its script is placed in one of those folders.

```gdscript
@tool
class_name HasManyKillsCondition extends EntityCondition
## Checks that the entity has killed a number of enemies

@export var minimum_kills: int = 10

func evaluate_entity(entity: Entity) -> bool:
    return int(entity.get_meta("kills", 0)) >= minimum_kills

func get_entity_description() -> String:
    return "Has at least %d kills" % minimum_kills
```

## The classes

### Base classes

<!-- classes:shared-systems/condition-bases -->
| Class | What it is |
|---|---|
| [Condition](/advanced/shared-systems/condition-bases/condition) | Base class for all conditions that evaluate game state. |
| [EncounterCondition](/advanced/shared-systems/condition-bases/encounter-condition) | Base class for conditions that evaluate encounter state. |
| [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) | Base class for conditions that evaluate entity state. |
<!-- /classes -->

### Entity

<!-- classes:shared-systems/entity-conditions -->
| Class | What it is |
|---|---|
| [AbilityCooldownReadyCondition](/advanced/shared-systems/entity-conditions/ability-cooldown-ready-condition) | Checks if a specific ability is off cooldown and ready to use. |
| [AlliesInRangeCondition](/advanced/shared-systems/entity-conditions/allies-in-range-condition) | Checks if a minimum number of allies are within a specified range. |
| [AlliesInRangeHealthCondition](/advanced/shared-systems/entity-conditions/allies-in-range-health-condition) | Checks if minimum number of allies in range are above/below health threshold Consolidates HealthAbove and HealthBelow conditions with encounter support. |
| [AlliesInRangeWithEffectCondition](/advanced/shared-systems/entity-conditions/allies-in-range-with-effect-condition) | Checks if minimum number of allies in range have/don't have specific effect Now supports encounter-aware searching and inverted logic. |
| [CastingStateCondition](/advanced/shared-systems/entity-conditions/casting-state-condition) | Checks if the entity or target is currently casting/not casting. |
| [CombatStateCondition](/advanced/shared-systems/entity-conditions/combat-state-condition) | Checks if the target entity is in combat or not. |
| [EncounterDurationCondition](/advanced/shared-systems/entity-conditions/encounter-duration-condition) | Checks if the current encounter has been running for a specific duration. |
| [EncounterFactionBalanceCondition](/advanced/shared-systems/entity-conditions/encounter-faction-balance-condition) | Checks the faction balance in the current encounter. |
| [EnemiesInRangeCondition](/advanced/shared-systems/entity-conditions/enemies-in-range-condition) | Checks if a minimum number of enemies are within a specified range. |
| [EnemiesInRangeHealthCondition](/advanced/shared-systems/entity-conditions/enemies-in-range-health-condition) | Checks if minimum number of enemies in range are above/below health threshold Consolidates HealthAbove and HealthBelow conditions with encounter support. |
| [EnemiesInRangeWithEffectCondition](/advanced/shared-systems/entity-conditions/enemies-in-range-with-effect-condition) | Checks if minimum number of enemies in range have/don't have specific effect Now supports encounter-aware searching and inverted logic. |
| [EntitiesInRangeHealthCondition](/advanced/shared-systems/entity-conditions/entities-in-range-health-condition) | Checks if minimum number of entities in range are above/below health threshold |
| [EntitiesInRangeWithEffectCondition](/advanced/shared-systems/entity-conditions/entities-in-range-with-effect-condition) | Checks if minimum number of entities in range have/don't have specific effect |
| [EntityDistanceToEntityCondition](/advanced/shared-systems/entity-conditions/entity-distance-to-entity-condition) | Checks distance between the target entity and another specific entity. |
| [EntityDistanceToInteractableCondition](/advanced/shared-systems/entity-conditions/entity-distance-to-interactable-condition) | Checks distance between the target entity and a specific interactable object. |
| [EntityHasTagCondition](/advanced/shared-systems/entity-conditions/entity-has-tag-condition) | Checks the type tags of an entity ("Undead", "Beast" ...). |
| [HasEffectCondition](/advanced/shared-systems/entity-conditions/has-effect-condition) | Checks if the entity or target has a specific effect active. |
| [HasEquippedCondition](/advanced/shared-systems/entity-conditions/has-equipped-condition) | Check if entity has specific equipment items equipped Evaluates whether the entity has the required equipment items currently equipped |
| [HasItemCondition](/advanced/shared-systems/entity-conditions/has-item-condition) | Check if entity has specific items in their inventory Evaluates whether the entity has the required items and quantities |
| [HasTargetCondition](/advanced/shared-systems/entity-conditions/has-target-condition) | Checks if the entity has a valid target. |
| [HealthPercentCondition](/advanced/shared-systems/entity-conditions/health-percent-condition) | Checks if the entity's health is above/below a specified percentage. |
| [IsAliveCondition](/advanced/shared-systems/entity-conditions/is-alive-condition) | Checks if the target entity is alive or dead. |
| [IsLevelCondition](/advanced/shared-systems/entity-conditions/is-level-condition) | Checks if the target entity meets a level requirement. |
| [IsPlayerClassCondition](/advanced/shared-systems/entity-conditions/is-player-class-condition) | Checks if the target entity is a Player with a specific class ID. |
| [MetadataCondition](/advanced/shared-systems/entity-conditions/metadata-condition) | Check entity metadata with flexible operations and type handling |
| [MovementStateCondition](/advanced/shared-systems/entity-conditions/movement-state-condition) | Checks whether the entity is standing still, moving, in the air or on the ground. |
| [TargetDistanceBetweenCondition](/advanced/shared-systems/entity-conditions/target-distance-between-condition) | Checks if the target is within a specified distance range (between min and max). |
| [TargetDistanceCondition](/advanced/shared-systems/entity-conditions/target-distance-condition) | Checks if the target is closer/farther than a specified range. |
| [TargetIsPlayerCondition](/advanced/shared-systems/entity-conditions/target-is-player-condition) | Checks if the target is a player entity. |
| [WorldPositionDistanceBetweenCondition](/advanced/shared-systems/entity-conditions/world-position-distance-between-condition) | Checks if the entity is within a specified distance range from a world position. |
| [WorldPositionDistanceCondition](/advanced/shared-systems/entity-conditions/world-position-distance-condition) | Checks if the entity is within range or farther than a world position. |
<!-- /classes -->

### Encounter

<!-- classes:shared-systems/encounter-conditions -->
| Class | What it is |
|---|---|
| [CombatDurationCondition](/advanced/shared-systems/encounter-conditions/combat-duration-condition) | Checks if the group has been in combat for a specified duration |
| [DistanceFromPositionCondition](/advanced/shared-systems/encounter-conditions/distance-from-position-condition) | Checks if group is within certain distance of a position |
| [EncounterActiveStateCondition](/advanced/shared-systems/encounter-conditions/encounter-active-state-condition) | Checks if an encounter is in a specific active state. |
| [EncounterCombatStateCondition](/advanced/shared-systems/encounter-conditions/encounter-combat-state-condition) | Checks if an encounter is in a specific combat state. |
| [EncounterEntityCountCondition](/advanced/shared-systems/encounter-conditions/encounter-entity-count-condition) | Checks if an encounter has a specific number of entities alive/dead. |
| [GroupHealthPercentageCondition](/advanced/shared-systems/encounter-conditions/group-health-percentage-condition) | Checks if the group's average health percentage meets specified criteria |
| [GroupMembersAliveCondition](/advanced/shared-systems/encounter-conditions/group-members-alive-condition) | Checks if the number of alive group members meets specified criteria |
| [PlayersInAreaCondition](/advanced/shared-systems/encounter-conditions/players-in-area-condition) | Checks if a minimum number of players are within the encounter area |
<!-- /classes -->

### Events

<!-- classes:shared-systems/event-conditions -->
| Class | What it is |
|---|---|
| [LocalVariableBoolCondition](/advanced/shared-systems/event-conditions/local-variable-bool-condition) | Checks if a local boolean variable in an event meets certain criteria |
| [LocalVariableFloatCondition](/advanced/shared-systems/event-conditions/local-variable-float-condition) | Checks if a local float variable in an event meets certain criteria |
| [LocalVariableIntCondition](/advanced/shared-systems/event-conditions/local-variable-int-condition) | Checks if a local integer variable in an event meets certain criteria |
| [LocalVariableStringCondition](/advanced/shared-systems/event-conditions/local-variable-string-condition) | Checks if a local string variable in an event meets certain criteria |
<!-- /classes -->

### General

<!-- classes:shared-systems/general-conditions -->
| Class | What it is |
|---|---|
| [ChestContainsItemCondition](/advanced/shared-systems/general-conditions/chest-contains-item-condition) | Check if a container contains specific items Evaluates whether a chest/container has the required items and quantities |
| [DoorStateCondition](/advanced/shared-systems/general-conditions/door-state-condition) | Check door state and accessibility Evaluates door-specific conditions like open/closed state and lock status |
| [EventActiveEntityCondition](/advanced/shared-systems/general-conditions/event-active-entity-condition) | Checks if a specific event is currently active |
| [EventCompletedEntityCondition](/advanced/shared-systems/general-conditions/event-completed-entity-condition) | Checks if a specific event has been completed |
| [GameTimeCondition](/advanced/shared-systems/general-conditions/game-time-condition) | Checks if the current game time meets specified criteria. |
| [GlobalVariableCondition](/advanced/shared-systems/general-conditions/global-variable-condition) | Universal condition for checking global variables of any type |
| [InteractableHealthCondition](/advanced/shared-systems/general-conditions/interactable-health-condition) | Checks if a destructible interactable's health meets certain criteria. |
| [OrCondition](/advanced/shared-systems/general-conditions/or-condition) | A composite condition that passes if a specified number of its child conditions pass. |
| [PartyIncludesClassCondition](/advanced/shared-systems/general-conditions/party-includes-class-condition) | Checks if the party includes a specific character class. |
| [PartySizeCondition](/advanced/shared-systems/general-conditions/party-size-condition) | Checks if the party size meets certain criteria. |
| [PlayerRegionPresenceCondition](/advanced/shared-systems/general-conditions/player-region-presence-condition) | Checks if players are present in a specific region |
| [QuestActiveEntityCondition](/advanced/shared-systems/general-conditions/quest-active-entity-condition) | Checks if a specific quest is currently active |
| [QuestCompletedEntityCondition](/advanced/shared-systems/general-conditions/quest-completed-entity-condition) | Checks if a specific quest has been completed |
| [RandomChanceCondition](/advanced/shared-systems/general-conditions/random-chance-condition) | Checks if a random roll succeeds based on percentage chance. |
| [RegionPresenceCondition](/advanced/shared-systems/general-conditions/region-presence-condition) | Checks if entities are present in a specific region |
| [SwitchStateCondition](/advanced/shared-systems/general-conditions/switch-state-condition) | Check if a switch is in the desired state Evaluates switch-specific conditions like ON/OFF state |
<!-- /classes -->
