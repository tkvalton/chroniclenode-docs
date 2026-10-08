# Behavior Scripts

<Shot name="behavior-scripts-editor" caption="The Behavior Scripts editor (Behaviors > Behavior Scripts)." />

A **behavior script** says what an NPC does when it is **not in a fight**: the guard that patrols, the baker who opens the shop at 7 and walks home at 20, the rabbit that wanders, the thief who steals from a chest and runs up a ladder. A fight is handled by the [combat script](/basic/behaviors/combat-scripts); when the fight is over the entity goes back to its behavior.

You give a script to an NPC, a placed NPC or a [class](/basic/entities/player-classes#ai-scripts). Several NPCs that share one script each follow it on their own.

## How a script is built

```text
Behavior script
  ├─ Schedule 1 (highest priority)    "Work":  conditions: it is day
  │    ├─ Task: Move to the forge
  │    ├─ Task: Perform animation (hammer), 30 s
  │    └─ Task: Idle, 10 s
  ├─ Schedule 2                       "Sleep": conditions: it is night
  │    └─ Task: Move to bed ... Idle
  └─ Fallback: wander near the spawn point
```

A **script** has **schedules**. A **schedule** has **tasks**. A **task** is one thing to do. The entity runs the **first schedule whose conditions hold** (the list is in priority order, the top is the most important) and runs its tasks.

## The script

| Field | What it does | Default |
|---|---|---|
| **Enabled** | Switch the whole script off | on |
| **Schedules** (*Add*) | The schedules, **in priority order**: index 0 is the most important | none |
| **Schedule reactions** (*Add Reaction*) | Events that switch the schedule: see [Reactions](#reactions) | none |
| **Fallback type** | What to do when no schedule is valid: **Wander** (a wander schedule of the given radius), **Move to spawn** (go to the spawn point, then idle), **Idle at current** (stand still with its idle animations), **Follow nearest ally** (for pets with no orders) | Wander |
| **Wander radius** | For the wander fallback | `5` |
| **Return to spawn** | Go back to the spawn point | on |

## Schedules

| Kind | What it does |
|---|---|
| **Ordered schedule** | Runs its tasks one after another: 1, then 2, then 3, then 1 again if it loops |
| **Priority schedule** | Re-evaluates its tasks and runs the **highest-priority task that can run**. For reactive behavior, where conditions change often |
| **Wander schedule** | A ready-made ordered schedule with one wander task: a character who strolls around |

Every schedule has:

| Field | What it does | Default |
|---|---|---|
| **Schedule name** | For you and for reactions | |
| **Task sequence** | The [tasks](#tasks) | none |
| **Loop sequence** | Start again after the last task | on |
| **Cooldown time** | Seconds before the schedule may start again | `0` |
| **Activation conditions** | [Entity conditions](/basic/shared-systems/conditions) that must hold for the schedule to be chosen: "it is between 7 and 19", "the [quest](/basic/events-and-quests/quests) is active". **Require all conditions**: all (on) or any (off) | none, all |
| **Failure handling** | What to do when a task fails: **Skip to next**, **Retry the task**, **Restart the schedule** or **Abort the schedule** | Skip to next |
| **Randomize order** | Shuffle the tasks | off |

A priority schedule also has **Priority evaluation interval** (how often it looks again, `1` s), **Allow task interruption** (a better task may cut in), and **Interruption priority threshold** (how much better it must be, `10`). A wander schedule has the **Wander radius** (`5`), **Use walk speed**, and the **Min / Max idle time** at each stop (`3` to `8` s).

## Tasks

Every task has these common settings:

| Group | Fields |
|---|---|
| **General** | **Interruptible** (a reaction may stop it), **Priority** (in a priority schedule) |
| **Timing** | **Completion criteria** (when the task is complete: when its action finishes, when its **Task duration** ends, or whichever is first), **Task duration** (`0` = no limit), **Cooldown time**, **Minimum runtime** |
| **Movement** | **Path failure strategy** when it cannot get there: *Retry original*, *Find nearby* (default), *Teleport close* (last resort, only if **Allow teleport recovery**), *Skip gracefully*, *Wait and retry*; **Max recovery attempts** (`3`), **Recovery attempt delay**, **Nearby search radius** |
| **Conditions** | **Execution conditions** for this task, and **Max distance from start** (`-1` = unlimited) |
| **Error handling** | **Max retry attempts**, **Retry delay** |

The kinds of task:

| Task | What it does |
|---|---|
| **Idle** | Go to a place (or stay), face a direction, wait. Can look at nearby players with a chance |
| **Move to Point** | Walk or run to a position, optionally face a direction on arrival, with a movement style |
| **Wander** | Move at random within a radius of a point, pausing between moves |
| **Patrol** | Walk a list of waypoints: loop, ping-pong, random or once; wait at each |
| **Follow Entity** | Follow an entity by its unique id, keeping a distance (or its formation spot) |
| **Perform Animation** | Play a social animation (sit, drink, wave), optionally looped or at a position |
| **Use Ability** | Use an ability on the current target |
| **Use Ability at Point** | Use a ground-targeted ability at a position |
| **Interact with Object** | Walk to an [interactable](/basic/entities/interactables) and use it |
| **Open Container** | Open a chest and optionally take an item or put one in |
| **Use Ladder** | Walk to a ladder and climb it |
| **Use Rabbit Hole** | Walk to a rabbit hole and use it. Same-world teleports only for NPCs |
| **Equip Item** | Equip or unequip an item from its inventory |
| **Consume Item** | Use up a consumable from its inventory |
| **Create Item** | Create an item in its inventory (what the world does with it is for your game) |
| **Set Metadata** | Write a value on the entity (set, add, remove ...). Conditions can read it, so a task can leave a note for another |

Tasks that point at an object or an entity (*Interact with Object*, *Follow Entity*, *Use Ladder*, *Open Container*) use the unique id of the placed object.

## Reactions

A **schedule reaction** watches for something and changes what the entity is doing.

| Field | What it does | Default |
|---|---|---|
| **Reaction name** | For you | |
| **Trigger event** | **Player nearby**, **Player left**, **Time changed** (with a target hour and minute), **Health below percent**, **Event started**, **Event ended**, **Quest accepted**, **Quest completed**, **Item equipped**, **Item unequipped** | Player nearby |
| **Conditions**, **Reaction cooldown** | Extra conditions and a wait before it can fire again | none, `0` |
| **Reaction type** | **Switch schedule** (to one by index or by name), **Pause behavior**, **Resume behavior**, **Reset schedule**, **Trigger task** (run one task now) | Switch schedule |
| **Return to previous**, **Return delay** | Go back to the previous schedule when the trigger is over, after a delay | on, `2` s |

"When the player comes near, switch to the Greet schedule, and 2 seconds after they leave, go back."

## Examples

| You want | Build |
|---|---|
| **A villager who just wanders** | No script, or a script with no schedules and the Wander fallback |
| **A guard patrol** | One ordered schedule: a *Patrol* task |
| **A daily routine** | Three schedules with *Activation conditions* on the time of day |
| **A shopkeeper who greets** | A schedule "Stand at the counter" and a reaction *Player nearby* that switches to "Greet" and returns |
| **A thief** | An ordered schedule: *Move to Point* to the chest, *Open Container* (take the key), *Use Ladder* up, *Idle* |

## Level of detail

An NPC far from the player thinks less often, and one very far away does not think at all. The settings are in the [Gameplay Config](/basic/game-settings/gameplay-config) under **NPC LOD System**. Your schedules do not need to know.

## See also

- [Combat Scripts](/basic/behaviors/combat-scripts), [Conditions](/basic/shared-systems/conditions), [NPCs](/basic/entities/npcs), [Uniques](/basic/world/uniques)
- [Behaviors: how they are built](/advanced/behaviors/) (Advanced)
