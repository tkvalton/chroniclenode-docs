# Events

An **event** is a small script made of blocks: **when** this happens (triggers), **if** this is true (conditions), **do** this (actions). **Events > Events** is where you make them. The demo project has none: events are yours to build.

An event looks like this in the editor:

```text
Event: The mill is haunted
├─ Triggers     Region Detection Player: The Old Mill, enters
├─ Conditions   Global Variable: mill_cleared is false
└─ Actions      1. Spawn Entity: Ghost, at the mill door
                2. Popup: "You hear a cold whisper..." (wait until closed)
                3. Set Global Variable: mill_haunted = true
```

## The editor

The list on the left has every event. **Add** makes a new one. The right side has the properties and the tree.

| Field | What it does | Default |
|---|---|---|
| **Name**, **Description**, **Icon** | For you. The name shows in the list and in the debug tools | |
| **Enabled** | An event that is not enabled never starts | on |
| **Run once** | After the event has completed, its triggers no longer start it | off |
| **Local variables** | Named values that belong to this event only (see below) | none |
| **Triggers**, **Conditions**, **Actions** | The tree: right-click a heading to **Add** one; right-click an entry to **Edit**, **Duplicate** or delete it | none |

## Triggers: when

A trigger is something the game can notice: an NPC dies, the party enters a region, a quest completes, the clock reaches 06:00. [Event triggers](/basic/events-and-quests/event-triggers) lists all of them by category.

- An event can have **several triggers**. Any one of them starts it.
- Each trigger has its own fields (which NPC, which region, how many).
- Triggers are set up when the game starts and **set up again after every change of world**; a trigger does not forget what it counted.

## Conditions: if

When a trigger fires, the event checks its **conditions**. They are the same [conditions](/basic/shared-systems/conditions) you use elsewhere: *Is level*, *Quest completed*, *Has item*, *Game time*, *Global variable*, *Player region presence*. **All of them must be true** (use the *Or* condition to say "any of these"). If one is not true, the event does not start, and nothing else happens.

## Actions: do

The actions run **in order, one after another**: each one finishes before the next one starts. A *Wait* action really waits, a *Popup* action can wait until the player closes it, a *Cutscene* action waits until the cutscene ends. [Event actions](/basic/events-and-quests/event-actions) lists all of them by category.

- **If** and **Switch** actions branch: they hold conditions and their own lists of actions. An *If* has a "true" list and a "false" list; a *Switch* has a list for each case and a default.
- An action that **cannot do its job fails**: a quest that cannot start, an object that does not exist, an NPC that is not there. The event fails with it. The rest of its actions do not run.

## How often an event runs

By default an event runs **every time**: when it finishes, it is ready again, and the next time one of its triggers fires (and the conditions hold) it runs again from its first action. An event does not run while it is already running.

Tick **Run once** to make it happen one time only. Once the event has **completed**, its triggers no longer start it. An event that *failed* is not used up and can still run. The state is saved with the game, so a loaded game remembers that it is done, and a new game starts it fresh.

An event that is not "run once" can still be made to happen once by a condition that its own actions turn false: a *Global Variable* condition with a flag that one of the actions sets (*Set Global Variable: mill_haunted = true*). A *Game Start* trigger fires once per game on its own.

## Local variables

Each event has its own **local variables**: named values of type int, float, bool or string, with a starting value. Use them for what the event needs to remember between runs or between its actions: how many times it ran, whether the first wave came. Click **Add Variable** to make one; right-click to edit or delete.

- The *Local Variable* actions set, change or toggle one. The *Local Variable Change* and *Local Variable Reach* triggers fire when one changes.
- Local variables are saved with the game and are not visible to other events. For a value that several events, conditions or quests share, use a [global variable](/basic/events-and-quests/global-variables).

## Examples

**A door that opens when a switch is flipped.** Trigger: *Object Switch State Change* (the switch, turned on). Action: *Control Door* (the door, open).

**A trap on the road.** Trigger: *Region Detection Player* (the road, enters). Condition: *Global Variable* `ambush_done` is false. Actions: *Spawn Entity* (three bandits), *Popup* ("Ambush!"), *Set Global Variable* `ambush_done` = true.

**Hand out a quest at sunrise.** Trigger: *Game Time* 06:00. Action: *Activate Quest* (the daily quest). A quest that is already running, or that cannot be taken again yet, refuses to start: the action fails and nothing else happens.

**The king's death changes the world.** Trigger: *Entity Death Unique* (the king). Actions: *Set Global Variable* `king_dead` = true; *Set Entity [Faction](/basic/behaviors/factions)* (the guards, hostile); *Fail Quest* (Serve the Crown).

## See also

- [Event triggers](/basic/events-and-quests/event-triggers), [Event actions](/basic/events-and-quests/event-actions), [Conditions](/basic/shared-systems/conditions).
- [Quests](/basic/events-and-quests/quests) use the same triggers for their objectives.
- [How events are built](/advanced/events-and-quests/).
