# Local Events

**Local events** are the small events of a place: *step on the plate and the door opens, pull the lever and the bridge comes down, the trap goes off and an ambush begins.* You make them with the **world open**, by clicking things in the 3D view, and the viewport draws the wires from what sets a rule off to what it does.

## Events and local events

| | **Event** (Database > Events) | **Local event** (Local Events tab) |
|---|---|---|
| For | The story and the rules of the game: quests, cutscenes, the clock, factions, global variables | The furniture of a place: plates, doors, levers, traps, alarms, ambushes |
| Made | In the Database tab, away from the world | In the **Local Events** tab with the world open, by clicking |
| Belongs to | The whole game | One world: it is a node of the world scene and is saved with it |
| Loaded | Always | Only while its world is loaded |
| State (done, switched off, variables) | The save game | The world's save, so the **persistence of the world** applies (Persistent, Instance, Timed reset, Session only) |
| What you can use | Every trigger, condition and action | Short menus of the common ones, and **More...** for the full lists |
| Can reach | Anything | The things of its place. It can **run** a global event, and a global event can run it |

Use a local event for something that belongs to one place. When a rule needs quests, other worlds or global variables, **promote** it to an event (below), or let it **Run Event** a global one.

## The Local Events tab

The tab sits in the bottom panel beside Behaviour and Unique Object and shows the rules of the world scene you have open (it is empty for a scene that is not a world). Choose a rule and it is chosen in the viewport too, with its wires.

| Button | What it does |
|---|---|
| **New local event** | An empty rule, or a **recipe**: *A plate opens a door*, *A lever opens a door*, *A trap starts an ambush*, *An alarm wakes the guards*, *A chest springs a surprise*. The pieces are in place; you point them at things |
| **Duplicate**, **Delete**, **Promote to event** | Copy the rule, take it out of the world, make a global event of it |
| **Once**, **On** (right of the name) | Run only once; switch the rule off |
| **Add When**, **Add If**, **Add Then** | A menu of the common things (below), then **More...** for the full list |
| **Pick target** | Click the thing in the 3D view that the chosen row is about |
| **Edit...** | All the settings of the chosen row (the same window as the Events editor) |
| **Up**, **Down**, **Remove row** | Order the rows (the *Then* rows run in order) |
| **Show all wires** | Draw the wires of every rule, not only the chosen one |

Every change is one step of **Undo** and marks the scene as changed. The name and the **On** box of the rule are on the right: a rule that is off ignores what sets it off.

### A rule

A rule has three parts:

- **When**: what sets it off. Any of its *When* rows does.
- **If**: what must be true at that moment (optional; all of them must hold).
- **Then**: what it does, one row after the other; each finishes before the next starts.

A row about something shows the name of what it points at ("Open door 602 -> Castle gate"). A row that is about nothing yet is amber, a row about something that is not in the scene is red, and a rule with a problem has a **(!)** (hover for the reason, and read the details on the right).

### Pointing a row at something

Adding a row that is about a thing starts **Pick target** by itself: click the **switch**, **door**, **trap**, **container**, **object**, **NPC**, **trigger area**, **spawner** or **local event** in the 3D view (the one nearest to the click; a switch row accepts only a switch). A row about a **place** (spawn at, move the player to) takes the ground. **Escape** stops. The first *When* row you point moves the rule to that thing, so the rule is easy to find. Rows in the Local Events tab use the numbers the events system already uses (the unique number of the object), so they keep working when you rename or move things.

## The short menus

**When**

| Entry | What sets it off |
|---|---|
| A switch is turned on / off | A switch changes position |
| A door opens / closes | A door changes state |
| Someone uses an object | An object is interacted with |
| The player steps into / leaves an area | A trigger area (a plate on the floor is a small trigger area) |
| Anything steps into an area | Any character enters a trigger area |
| A trap goes off | A trap triggers |
| A destructible is destroyed | An object with health is destroyed |
| A container is opened | A chest or crate is opened |
| An object is unlocked | A lock opens |
| An NPC dies | A placed NPC dies |
| A timer ends / Every few seconds | After a time, or again and again |

**If**: a switch is on / off, a door is open / closed, the player is / is not in an area, a spawner has nothing alive, random chance.

**Then**: open / close a door, lock / unlock an object, turn a switch on / off / flip it, destroy / damage a destructible, arm / disarm a trap, turn a spawner on / off / reset it, spawn from a spawn table at a place, kill an NPC, wake / put an NPC to sleep, show a popup, shake the camera, wait a few seconds, move the player to a place, **run a global event**, **run / switch on / switch off / reset a local event**.

**More...** in each menu opens the full list of triggers, conditions or actions of the Events editor, so nothing is out of reach.

## Running other events

Two actions connect the two systems:

- **Run Event** starts a global event (Database > Events). It uses that event's own conditions unless you turn *Check conditions* off, and it either goes on at once or (*Wait until done*) waits until the event is over. *The trap goes off, the ambush event starts, the quest moves on.*
- **Run Local Event** works on a local event of the world the party is in: *Run*, *Enable*, *Disable* or *Reset*. A global event can use it to reset a puzzle room; a local event can chain to another.

Use them in the full **Event actions** list too ([Run Event](/advanced/events-and-quests/actions-general/run-event-action), [Run Local Event](/advanced/events-and-quests/actions-general/run-local-event-action)). A local event is named by its **number** (shown in the tab: "1. Plate").

## The wires

With a rule chosen (or **Show all wires**) the 3D view draws, from the rule's gold marker:

| Colour | What it is |
|---|---|
| **Green**, with an arrow into the rule | A thing that sets the rule off |
| **Blue** | A thing that the rule checks (If) |
| **Orange**, with an arrow out of the rule | A thing that the rule does something to; a place of the ground is an orange cross |
| **White** | The row chosen in the list |
| **Red cross** over the rule | A row about a thing that is not in the scene |

## Checks

The list marks a rule with a **(!)** when:

- nothing sets it off (no *When*, and no other rule runs it) or it does nothing (no *Then*);
- a row is about nothing yet, or about a thing that is not in the world (it was deleted, or it is in another world), or about the wrong kind of thing ("Gate" is a switch, not a door);
- a **Run Event** row has no event, or an event that is not in the database;
- the rule is off and nothing switches it on (a note), or rules start each other round and round (a note).

## Saving, loading and the world's persistence

A local event is saved with its world scene (the rules, their rows and their targets). While the game runs, its state (done, switched off, its variables) is saved with the **world**, so it follows the persistence of that world:

| World persistence | What the rules do when you come back |
|---|---|
| Persistent | They are as you left them (a **Run once** rule that has run stays done) |
| Instance | They start over |
| Timed reset | As you left them until the time is up, then they start over |
| Session only | As you left them while the game runs, never saved |

With **partial persistence** on the world, the local events are kept with the interactables (the furniture keeps its state), so a plate that was stepped on does not fire again against a door that is already open.

A rule listens only after the world has put back what it remembers, so a switch that is restored in the position it was saved in does not set a rule off. A rule exists only while its world is loaded.

The **Once** box next to the name makes a rule run only once: after it has run, what sets it off no longer starts it, and the world's save remembers that it has run (with *Persistent*, for good). Without it the rule runs every time.

## Promote to event

**Promote to event** makes a global event (Database > Events) with copies of the rule's triggers, conditions and actions (the same numbers) and takes the rule out of the world (Undo brings it back; the event stays in the database). Rows that run local events only work while that world is loaded, so in another world they fail; the window says so.

## See also

- [Events](/basic/events-and-quests/events): the Events editor, the triggers, conditions and actions
- [Event triggers](/basic/events-and-quests/event-triggers) and [Event actions](/basic/events-and-quests/event-actions)
- [Behaviors](/basic/behaviors/behavior-scripts): what an NPC does by itself
