# Conditions

A **condition** is a yes-or-no question about the game right now: *is this entity alive? has the [quest](/basic/events-and-quests/quests) been completed? are there three enemies within 10 meters? is it night?* A condition never changes anything. Other things use the answer to decide whether to happen.

## Where you add conditions

| Where | What the conditions decide |
|---|---|
| [Events](/basic/events-and-quests/events) | Whether an event runs, and the **If** action inside an event |
| [Behaviors](/basic/behaviors/combat-scripts) | Which attack an enemy picks, when it reacts, when it changes phase, when a schedule or a task may start |
| [Stat effects](/basic/entity-stats/stats) | Whether a stat bonus applies: "+30 % damage against Undead", "+20 % damage below 30 % health". All the conditions must be true |
| The [Condition conditional effect](/basic/abilities-and-effects/effect-types#conditional) | Whether its [child effects](/basic/abilities-and-effects/child-effects-and-auras) are applied, for the target or the user |
| [Encounters](/basic/world/encounters) | Whether a reaction of a group of enemies happens |

In every list, **all** the conditions must be true. For "any of these", use the **Or** condition, which holds other conditions and passes when a number of them pass (1 for "any", all of them for "and").

## Adding a condition

Click the add button next to the list of conditions. A dialog opens with a **Category**, a **Type** and its fields:

- **General** conditions are about the world: quests, events, global variables, the time of day, the party, trigger areas, doors and chests.
- **Spawner** conditions are about a [spawner](/basic/world/spawners): is it on, how many things of it are alive.
- **Entity** conditions are about one entity: its health, level, effects, items, distance, target.
- **Encounter** conditions are about a group fight: how long it has lasted, how many are alive.

The conditions on **event variables** (local boolean, number, text) are made inside the event editor, where those variables exist.

## Who does an entity condition look at?

An entity condition has an **Entity target**. It says which entity the question is about:

| Entity target | The entity |
|---|---|
| **Argument entity** | The entity the thing belongs to: the enemy whose behavior it is, the owner of the stat, the holder of the effect. This is the default. See [argument entity](/basic/keywords#argument-entity) |
| **Argument entity target** | What the argument entity is aiming at (its target) |
| **Current player** | The player character in control |
| **Summoner** | The owner of the argument entity, when it is a pet |
| **Unique ID** | A specific placed entity, by its [unique id](/basic/world/unique-object-tool) |
| **Opponent** | The other side of the hit being calculated. Only for conditions on stat effects: "damage against Undead" is the condition *opponent has the tag Undead* |
| **Any player** | The whole party: the condition is met when it holds for at least one member |
| **All player** | The whole party: the condition is met when it holds for every member |

An encounter condition has an **Encounter target** in the same way: the encounter itself, the current active one, the nearest one, or one by id.

## Comparing numbers

Conditions that compare a number offer the same choices: **equal**, **greater**, **less**, **greater or equal**, **less or equal**, **not equal**, and for text and lists **contains** and **not contains**.

## The condition types

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
| [GroundWeatherCondition](/advanced/shared-systems/general-conditions/ground-weather-condition) | Checks how wet the ground is or how much snow lies on it (what the terrain shows): "the snow is at least half" opens a pass, "the ground is dry" lets a fire be lit. |
| [InteractableHealthCondition](/advanced/shared-systems/general-conditions/interactable-health-condition) | Checks if a destructible interactable's health meets certain criteria. |
| [OrCondition](/advanced/shared-systems/general-conditions/or-condition) | A composite condition that passes if a specified number of its child conditions pass. |
| [PartyIncludesClassCondition](/advanced/shared-systems/general-conditions/party-includes-class-condition) | Checks if the party includes a specific character class. |
| [PartySizeCondition](/advanced/shared-systems/general-conditions/party-size-condition) | Checks if the party size meets certain criteria. |
| [PlayerInZoneCondition](/advanced/shared-systems/general-conditions/player-in-zone-condition) | Checks whether the party is in a zone. |
| [PlayerTriggerAreaPresenceCondition](/advanced/shared-systems/general-conditions/player-trigger-area-presence-condition) | Checks if players are present in a specific trigger area |
| [QuestActiveEntityCondition](/advanced/shared-systems/general-conditions/quest-active-entity-condition) | Checks if a specific quest is currently active |
| [QuestCompletedEntityCondition](/advanced/shared-systems/general-conditions/quest-completed-entity-condition) | Checks if a specific quest has been completed |
| [RandomChanceCondition](/advanced/shared-systems/general-conditions/random-chance-condition) | Checks if a random roll succeeds based on percentage chance. |
| [SwitchStateCondition](/advanced/shared-systems/general-conditions/switch-state-condition) | Check if a switch is in the desired state Evaluates switch-specific conditions like ON/OFF state |
| [TriggerAreaPresenceCondition](/advanced/shared-systems/general-conditions/trigger-area-presence-condition) | Checks if entities are present in a specific trigger area |
<!-- /classes -->

### Spawner

About a [spawner](/basic/world/spawners): whether it is on, and how many things it made are standing.

<!-- classes:shared-systems/spawner-conditions -->
| Class | What it is |
|---|---|
| [SpawnerActiveCondition](/advanced/shared-systems/spawner-conditions/spawner-active-condition) | Checks whether a spawner is switched on. |
| [SpawnerAliveCountCondition](/advanced/shared-systems/spawner-conditions/spawner-alive-count-condition) | Checks how many things a spawner made are standing now (NPCs that are alive, objects that are there, items that lie): "the wolves of the forest are all dead" is a count of 0. |
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

### Event variables

<!-- classes:shared-systems/event-conditions -->
| Class | What it is |
|---|---|
| [LocalVariableBoolCondition](/advanced/shared-systems/event-conditions/local-variable-bool-condition) | Checks if a local boolean variable in an event meets certain criteria |
| [LocalVariableFloatCondition](/advanced/shared-systems/event-conditions/local-variable-float-condition) | Checks if a local float variable in an event meets certain criteria |
| [LocalVariableIntCondition](/advanced/shared-systems/event-conditions/local-variable-int-condition) | Checks if a local integer variable in an event meets certain criteria |
| [LocalVariableStringCondition](/advanced/shared-systems/event-conditions/local-variable-string-condition) | Checks if a local string variable in an event meets certain criteria |
<!-- /classes -->

Each class page in the Advanced section lists the fields of the condition.

## Examples

| You want | Conditions |
|---|---|
| An enemy that heals itself only when hurt | Entity: **Health Percent** (below `40`) |
| A boss phase that starts when two of its three guards are dead | Encounter: **Group Members Alive** (less than `2`) |
| An event that runs once a quest is done and it is night | General: **Quest Completed** and **Game Time** |
| A bonus that applies only against beasts | On the stat effect: Entity: **Entity Has Tag** (target **Opponent**, tag Beast) |
| A buff that heals only while the target stands still | A ticking Condition conditional effect with the Entity condition **Movement State** (standing still) |

## See also

- [Requirements](/basic/shared-systems/requirements)
- [Conditions: how they are built](/advanced/shared-systems/conditions) (Advanced)
