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
| **Activation conditions** | [Entity conditions](/basic/shared-systems/conditions) that must hold for the schedule to be chosen: "it is between 7 and 19" (the **Time Of Day** condition), "the [quest](/basic/events-and-quests/quests) is active". **Require all conditions**: all (on) or any (off) | none, all |
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
| **Places** | **Relative to spawn**: the places of the task (patrol points, the place to walk to, the centre of a wander, the point of an ability) are distances from where the NPC is placed, so the same shape works wherever the NPC is put. Set it in the [Behaviour tab](#the-behaviour-tab-see-it-in-the-world) | off |
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
| **Say or Emote** | Say a line or do an emote (a guard yawns, a merchant calls out). See [Chat > Lines](/basic/game-settings/chat#lines) |
| **Use Ability** | Use an ability on the current target |
| **Use Ability at Point** | Use a ground-targeted ability at a position |
| **Interact with Object** | Walk to an [interactable](/basic/entities/interactables) and use it |
| **Open Container** | Open a chest and optionally take an item or put one in |
| **Use Ladder** | Walk to a ladder and climb it |
| **Use Rabbit Hole** | Walk to a rabbit hole and use it. Same-world teleports only for NPCs |
| **Equip Item** | Equip or unequip an item from its inventory |
| **Consume Item** | Use up a consumable from its inventory |
| **Create Item** | Create an item in its inventory (what the world does with it is for your game) |
| **Drop Item** | Put an item on the ground where the entity stands, taken from its inventory or made new: a farmer who leaves a crate, a thief who drops loot. See [Dropped items](/basic/items/dropped-items) |
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

**What works.** The triggers the game watches are **Player nearby** (the player comes within 10 m of the NPC), **Player left**, **Time changed**, **Health below percent**, **Quest accepted** and **Quest completed**. **Event started**, **Event ended**, **Item equipped** and **Item unequipped** are in the list but nothing in the game connects them yet, and the reaction type **Trigger task** does nothing yet; the Behaviour tab marks such reactions with a red (!). A reaction that **switches** the schedule is in charge until it gives it back: the schedule check every two seconds does not take the NPC back to the first schedule that fits. With **Return to previous** on, "Player nearby" gives it back the **Return delay** after the player has gone away; the other triggers after the delay from the moment they fired; when it returns, the NPC takes the schedule that fits then (the one before, unless the hour has moved on). With Return to previous off the switch stays. A schedule is looked up by **name** first, then by **number**.

## The Behaviour tab (see it in the world)

Select an NPC in the 3D viewport and open the **Behaviour** tab (it sits beside **Unique Object** in the bottom panel; the **Behaviour** button of the NPC's Unique Object panel jumps to it). It shows what the NPC does and draws it in the viewport.

| In the tab | What it shows |
|---|---|
| **Header** | The NPC, its script, and where the script comes from (*from its definition* or *this NPC's own*). **Used by** says who else has the script: changing a shared script changes all of them |
| **The list** | Each schedule (a colour of its own) with its time and kind, and under it its tasks, one line each ("Patrol: 4 points, loop, waits 2 s") |
| **The day** | 24 hours across, one bar per schedule from the hour its *Time Of Day* starts to the hour it ends. The schedules are checked from the top: the first whose time and conditions hold runs |
| **Details** | The schedule or task chosen in the list: its conditions and what it does |
| **Show paths**, **Only the chosen schedule** | Draw or hide the lines in the viewport; draw only the chosen schedule |
| **Refresh**, **Open script** | Read the script again; open it in the Behavior Scripts editor |

In the viewport, for the selected NPC only: a **patrol** is its points with arrows between them (a loop closes), a **move** is a point with an arrow for the way it faces, a **wander** is the circle it wanders in (round where the NPC is placed unless the task has a centre), and a task that talks to, uses or follows someone is a yellow line to them. Each schedule has the colour of its row; the chosen schedule is bright and the others dim; the chosen task is white. You can also edit the routes here, for an NPC that has **its own** script.

#### Editing in the viewport

A behaviour script of a definition is shared by every NPC of it, so the tab only changes the script that is **this NPC's own**. **Make this NPC's own** copies the script into a new behaviour script (named after the NPC, for instance "Town guard behaviour") and gives it to this placed NPC; **New behaviour for this NPC** does the same with an empty one. The copy is an ordinary script of the Behavior Scripts: **if you delete the NPC, the script stays** until you delete it there (its **Used by** says nobody), so you can place the NPC again and choose it. **Use the definition's script** goes back to the shared one without deleting the copy. Everything below can be undone with **Undo**.

| You want | Do |
|---|---|
| **Move a point** | Choose its schedule in the list: its points get handles. Drag one over the ground (a patrol point, the place of a move, the centre of a wander) |
| **Change a wander's radius** | Drag the small handle on its circle |
| **Add patrol points** | Press **Add patrol points** and click the ground: each click adds a point to the chosen patrol (or starts a patrol in the chosen schedule, or in a new one) |
| **Add a place to walk to** | **Add a place**, click the ground: a *Move to Point* task in the chosen schedule (or a new schedule) |
| **Add a wander area** | **Add a wander area**, click the ground: a *Wander* task, 5 m round the click |
| **Take off the last patrol point** | Choose the patrol, **Remove last point** |
| **Make the shape work anywhere** | Choose a task, tick **Relative to where the NPC is placed**: its places become distances from the NPC (move the NPC and the route moves with it) |

Escape turns an Add tool off.

#### Schedules, tasks and conditions

The list works like the lists of the [Behavior Scripts editor](#the-script) and opens the same windows. **Add Schedule** opens the *Create New Schedule* window (a name and a kind), **Add Task** the task window for the chosen schedule. **Right click** a row (or double click to edit):

| Row | Menu |
|---|---|
| **Schedule** | Edit (the schedule window), Add Task, Add Condition, Delete, Move Up, Move Down (the order is the order they are checked in) |
| **Task** | Edit (the task window), Add Condition, Delete, Move Up, Move Down |
| **Condition** ("Condition:" under a schedule, "Only when:" under a task) | Edit, Delete |

Reactions and the fallback are still edited in the Behavior Scripts editor. A change to a script that is not the NPC's own is refused with the reason, and the menu items are greyed.

#### The day

Drag on the strip of the day to set the time of a schedule: drag over an empty stretch of its row to make a time there, drag the bar to move it, drag its left or right edge to stretch it (to the quarter hour), right click the row to make it **any time**. It writes the schedule's *Time Of Day* condition (making it when there is none).

#### Targets

A task that is about someone (*Interact with Object*, *Follow Entity*, *Say* with a target) draws a yellow line to its target. Choose the task, press **Pick target** and click the NPC or object in the viewport (the nearest one to the click, within a few pixels): its unique id is set.

#### Checking the paths

With **Check paths** on (the default) the viewport also shows how the NPC would really walk the chosen schedule, using the navigation baked in the Terrain tab (the navigation of the NPC's size, and of its navigation domain: a land NPC does not walk through water):

| You see | It means |
|---|---|
| A **light green line** next to the coloured one | The real path between the places: round the rock, the house, the lake |
| A **red cross, a circle and a red line** | A place the NPC cannot reach. Either the place is not on ground it can walk on (water, a slope that is too steep, lava, a gap) or there is no way to it from the place before (a wall, water or a drop in between). The tab's row says which |
| A red **(!)** after a row of the list | That schedule or task has a problem; hover the row to read it |

A walk that cannot be done takes no time in the checks and the NPC stays where it was (the places after it are checked from there). Without baked navigation the walks are straight lines, the details say so, and nothing is called unreachable.

The details of a chosen schedule say how long **one round** takes ("about 1 min 20 s"; the speed is the NPC's Movement Speed, a third of it when it walks; effects and gear change the real time). It says "and more" when part of the round takes as long as things take: a random patrol, a wander with no time, talking, following. A patrol that loops or goes back and forth counts the walk back, and a schedule that loops counts the walk back to its first place.

The problems listed are: a patrol with no points, an *Interact with Object* or *Follow Entity* task with no target, a target that is not in this scene (a note, it may be in another one), a wander area with no radius, a schedule that never runs (the schedules above it already cover its whole time: the first schedule that fits is the one that runs), and a schedule with no tasks. The **last row** of the list (what it does when no schedule fits) says **(!) note** when some hours have no schedule, for example "From 18:00 to 08:00 no schedule applies, so the NPC wanders within 5 m".

#### The walker

Tick **Walker** to put a figure (a ring, a post and an arrow for the way it goes) in the viewport that does the chosen schedule from the beginning: it walks the real paths and waits where the tasks wait. Drag the **slider** to any moment of one round; the text says how far in it is and what it is doing. **Play** lets it walk (1x, 5x or 20x real time) and it goes round again at the end. A priority schedule's tasks are alternatives, so the walker shows each one in turn, starting where the NPC is placed.

#### Reactions in the tab

The **Reactions** group of the list has one row for each reaction ("Greet the player: when the player comes within 10 m, switch to Greet, back 3 s after") and its conditions under it ("Only when:"). **Add Reaction** opens the reaction window (the same as the Behavior Scripts editor), and the row's right-click menu has Edit, Add Condition, Delete, Move Up and Move Down. Each change is one step of Undo. A reaction that is chosen shows its schedule in bright colour and, for **Player nearby** and **Player left**, draws an amber **circle** round the NPC: how near the player has to come. A reaction with a problem has a red (!): the trigger is not watched yet, the type does nothing yet, or the schedule it switches to is not in the script. Moving or deleting a schedule keeps the reactions that switch by number pointing at the same schedule.

#### Templates and copies

**From template or copy...** opens a window with:

| Group | What it is |
|---|---|
| **Templates** | Guard patrol (a square of 8 m round the NPC, waits 3 s at each corner), Sentry (stands and looks at players), Wanderer (wanders within 8 m), Day and night (wanders 06:00 to 20:00, goes back to where it is placed and stands there 20:00 to 06:00), Errand (10 m ahead, wait, back, wait), Greeter (wanders; stops and looks at the player who comes near, wanders again 3 s after they leave: two schedules and a reaction) |
| **Your templates** | Templates you saved |
| **Other NPCs in this scene** | The schedules of the other placed NPCs that have a script |
| **Behaviour scripts** | The schedules of every other behaviour script of the database |

Choose one and press **Add**. A template is added at the end of the NPC's own script with its places **relative to where the NPC is placed**, so it fits wherever the NPC stands (the schedules get a new name if theirs is taken, and the reactions follow the new name). A schedule of another NPC or script is **copied**, and you choose what happens to its places: **keep them where they are in the world** (several guards walking the same wall) or **make them relative to where this NPC is placed** (the shape moves with the NPC; it counts from where the NPC you copied it from stands, so a script of the database, which has no NPC, can only be copied as it is). A copy is a copy: later changes to the source do not follow. Both are one step of Undo. The buttons need the NPC's own script (**Make this NPC's own** first).

**Save as template...** saves the chosen schedule, with the reactions that switch to it, as a template of your own: a record of the database (the category *behavior_template*, a small behaviour script), with its places turned into distances from the NPC, so it can be added to any NPC. Select your template in the window and press **Delete this template** to remove it; the NPCs that used it keep their copies.

### Time of day

A schedule that is for a time of day has a **Time Of Day** activation condition: it is met from one hour of the game day to another (8.5 is half past eight; 22 to 6 goes past midnight; the same hour twice is all day). Put the schedules in the order you want them checked: the guard's "Night" (22 to 6) above "Day round" (8 to 18) above a schedule with no time that is the rest of the day.

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
