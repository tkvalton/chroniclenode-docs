# Triggers, conditions and actions

A great deal of what happens in a ChronicleNode game is said in three words: **when**, **if**, **do**.

> **When** the party enters the old mill, **if** the mill has not been cleared, **do** spawn a ghost and play a whisper.

That sentence is made of three kinds of block, which the toolkit calls **triggers**, **conditions** and **actions** (TCA for short). They are separate classes, each with a long list of kinds, and they are **shared**: the same blocks are used by [events](/basic/events-and-quests/events), by [quests](/basic/events-and-quests/quests), by [behaviors](/basic/behaviors/combat-scripts), by [stat effects](/basic/entity-stats/stats), by [encounters](/basic/world/encounters) and by [effects](/basic/abilities-and-effects/effect-types#conditional). This page explains the three once, shows where each one is used, and tells which look-alikes are *not* part of this system.

## The three blocks

| | Trigger | Condition | Action |
|---|---|---|---|
| **Question it answers** | *When?* | *If?* | *Do what?* |
| **What it is** | Something the game can notice | A yes-or-no question about the game right now | A thing that is done to the game |
| **Changes the game?** | No. It only listens | No. It only reads | **Yes** |
| **How it runs** | It **waits** and fires by itself, any time, while the game is played | It is **asked** when a trigger has fired (or when a behavior needs to decide) | It is **run** in order, and can take time |
| **Count of kinds** | [80](/basic/events-and-quests/event-triggers) in 14 categories | [63](/basic/shared-systems/conditions) in 4 categories | [90](/basic/events-and-quests/event-actions) in 13 categories |
| **Base class** | [`EventTrigger`](/advanced/events-and-quests/bases/event-trigger) | [`Condition`](/advanced/shared-systems/condition-bases/condition) | [`EventAction`](/advanced/events-and-quests/bases/event-action) |
| **Chosen with** | **Add Trigger** | The add button next to **Conditions** | **Add Action** |

Each kind has its **own fields**. *Entity Death Unique* asks which entity; *Game Time* asks for an hour; *Spawn Entity* asks what and where. Every block also describes itself in one sentence in the editor ("Triggers when a specific unique entity is killed").

## Where each block is used

| Where | Triggers | Conditions | Actions |
|---|---|---|---|
| **[Events](/basic/events-and-quests/events)** | **When** the event starts. Any one fires it | **If** it goes ahead. All must pass | **Do**, in order |
| **[Quests](/basic/events-and-quests/quests)** | One for each **objective**: the objective is done when its trigger is. It counts (`3 / 5`), tracks, fails | The quest's [requirements](/basic/shared-systems/requirements) are another tool (see below) | **On start**, **on complete** and **on abandon** lists (they start all at once, see [Actions](#actions-do)) |
| **[Quest lines](/basic/events-and-quests/quest-lines)** | | | **On start** and **on complete** lists |
| **If and Switch actions** | | They **branch** inside an event | Each branch has its own list of actions |
| **[Behaviors](/basic/behaviors/combat-scripts)** | | Which attack an enemy picks, when it reacts, when it changes phase, when a schedule or task may start | |
| **[Stat effects](/basic/entity-stats/stats)** | | Whether a bonus applies ("+30 % against Undead") | |
| **[Conditional effects](/basic/abilities-and-effects/effect-types#conditional)** and procs | | Whether the child effects are applied | |
| **[Encounters](/basic/world/encounters)** | | Whether a reaction of the group happens | |

So **conditions** are everywhere, **triggers** are used by events and quest objectives, and **actions** are run by events, quests and quest lines. The pattern is always the same: a trigger **notices**, conditions **decide**, actions **act**.

## Triggers: when

A trigger is a **listener**. It is set up when the game starts and connects to what it watches: a death, a region, the clock, an item picked up, a quest. When it sees what it is for, it **fires**.

- An event can have **several triggers**. **Any one** of them starts it.
- Triggers are set up again **after every change of world** (a door, a teleport) and **do not forget what they counted**: *kill 5 wolves* keeps its tally across a map change and across a save.
- A trigger often has a **target** to pick: one unique NPC, any NPC of a type, a region, a player slot. A **player** trigger asks *which player*: the current one, any, or a numbered party slot.
- In a quest the same trigger is an **objective**. What it counts becomes the progress ("3 / 5"), and the objective can be **optional** or **hidden**.

All the kinds are on [Event triggers](/basic/events-and-quests/event-triggers).

## Conditions: if

A condition is a **question**. It never changes anything and it can be asked as often as needed.

- In every list, **all** conditions must be true. For "any of these", use the **Or** condition.
- Conditions come in four categories: **General** (world: quests, variables, time, regions, doors), **Entity** (one entity: health, level, effects, items, distance), **Encounter** (a group fight) and **Event variables** (the local values of one event).
- An **entity condition** asks *about whom*. In a behavior or a stat effect, *the argument entity* is the owner of the thing: the enemy whose script it is, the holder of the stat. **In an event there is no such entity**, so an entity condition there looks at the **current player**, the party (*any* or *all* players) or a **unique id**.
- Conditions that compare numbers share the same choices (equal, greater, less ...). See [Conditions](/basic/shared-systems/conditions).

## Actions: do

An action is a **step**. An event runs its actions **one after another, and each finishes before the next starts**.

- An action can take time: *Wait*, a *Popup* that waits until closed, a *Cutscene* that waits until it ends.
- An action that **cannot do its job fails** (a quest that cannot start, an object that is not there). The **event fails with it** and the actions after it do not run.
- **If** and **Switch** hold conditions and their own lists of actions: the way to say "do this, otherwise that" inside one event.
- A **player** action asks *which player*, as a player trigger does.
- The **action lists of a quest** (on start, on complete, on abandon) and of a **quest line** are different in one way: their actions all **start at once**. They do not wait for each other and one that fails does not stop the others, so do not rely on their order. Put the steps that must follow each other into an [event](/basic/events-and-quests/events) whose trigger is *Quest State Change* (activated, completed or failed).

All the kinds are on [Event actions](/basic/events-and-quests/event-actions).

## How the three work together

```text
the game ─► TRIGGER fires ─► the event is not running and is enabled? ─► CONDITIONS all true? ─► ACTIONS run in order ─► done
              (when)                                                        (if)                      (do)
                                                       no: nothing happens ◄──────┘                    a step fails: the event fails
```

- An event that is **already running** does not start again.
- By default an event runs **every time**. **Run once** keeps it from running again once it has completed. An event that failed is not used up.
- Everything is **saved**: the events that ran, the step an event was on, the tallies of the objectives. A loaded game goes on from there.

## Look-alikes that are not this system

The same words appear in other tools, which have **their own lists**. They are not the blocks above, and the lists do not mix.

| Tool | What it has | How it differs |
|---|---|---|
| **[Conversations](/basic/behaviors/conversations)** | *Response actions* (go to a chat, end, give a reward, set a response state, roll a dice, start another interaction) and **[requirements](/basic/shared-systems/requirements)** on responses | Their own action list, made for dialogue. A response cannot run an event action |
| **[Behaviors and combat scripts](/basic/behaviors/combat-scripts)** | *Combat actions* (move, retreat, call for help, spawn) and *reactions* with a "trigger" such as *Damage taken* | The "trigger" of a reaction is one choice in a list, not an event trigger. **Conditions are the real ones** |
| **[Encounters](/basic/world/encounters)** | *Reactions* (a trigger such as *a member dies*, conditions, an action) | Same shape, own lists of actions |
| **[Requirements](/basic/shared-systems/requirements)** | What an **entity** needs to use or receive something | A requirement comes with a **message for the player** ("Requires level 20"). A condition does not |
| **[Rewards](/basic/shared-systems/rewards)** | Something **given**: experience, an item, currency | A reward is only given. An action can do much more |

### The bridge: *Trigger Event*

The tools above meet the event system through **Trigger Event**: a combat script action and an encounter action both have it. It **starts an event** you made: a camp's last guard falls, the reaction runs *Trigger Event*, and the event opens the gate, shows a message and advances a quest. It does **not check that event's conditions**, so the reaction decides whether it goes ahead (the event must still be enabled and not already running).

## Which tool for which job

| You want to | Use |
|---|---|
| React to something that happens, once or every time | An **event**: a trigger |
| Make a thing depend on a fact (a bonus, a door, an attack) | A **condition** in that list |
| Do several things in a row, with waits | An **event**: actions |
| Stop the player using or taking something unless they are strong enough | A **requirement** |
| Give the player something for a job | A **reward** (on a quest or a conversation) |
| Count something the player must do | A **quest objective** (a trigger) |
| Run something when a quest starts, ends or is given up | The quest's **on start / on complete / on abandon** actions |

## Examples

**The mill (an event).** Trigger: *Region Detection Player*, the old mill, enters. Condition: *Global Variable* `mill_cleared` is false. Actions: *Spawn Entity* (ghost), *Popup* ("You hear a cold whisper..."), *Set Global Variable* `mill_haunted` = true.

**Kill five wolves (a quest objective).** The objective's trigger is *Entity Death Type* (Wolf, 5). It counts, shows `3 / 5`, and completes the objective. The quest's **on complete** action runs *Activate Quest* for the next one.

**Do this or that (If).** Inside an event: *If* the condition *Has item* (the red key) is true, the *true* list runs *Control Door* (open); the *false* list shows a *Popup* ("It is locked").

**A boss fight opens a gate (the bridge).** An encounter reaction on *a member dies*, with the condition *Group members alive* is 0, runs *Trigger Event*. The event's actions open the gate and complete an objective.

## Making your own

Each block is a script in a folder that the editor scans, so a new trigger, condition or action appears in the lists by itself. How the classes work (the lifecycle of a trigger, the state of an action, the argument a condition gets) is on [Events & Quests: how it is built](/advanced/events-and-quests/#extending).

## See also

- [Events](/basic/events-and-quests/events), [Event triggers](/basic/events-and-quests/event-triggers), [Event actions](/basic/events-and-quests/event-actions)
- [Conditions](/basic/shared-systems/conditions), [Requirements](/basic/shared-systems/requirements), [Rewards](/basic/shared-systems/rewards)
- [Quests](/basic/events-and-quests/quests)
- [Keywords](/basic/keywords#argument-entity)
