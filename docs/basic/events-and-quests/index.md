# Events & Quests

This is how the story and the rules of the world are told. Three systems work together:

- An **event** is "when this happens, if that is true, do these things". It is the general tool: open a door when the switch is flipped, spawn bandits when the party enters the forest road, set a flag when the king dies.
- A **quest** is something the player takes on: objectives to complete, rewards, requirements, what happens if it is failed or given up.
- A **conversation** (in [Behaviors](/basic/behaviors/conversations)) is how a quest is usually offered and handed in.

| Page | What it covers |
|---|---|
| [Events](/basic/events-and-quests/events) | The Events editor: triggers, conditions, actions, local variables |
| [Event triggers](/basic/events-and-quests/event-triggers) | Every trigger, by category |
| [Event actions](/basic/events-and-quests/event-actions) | Every action, by category |
| [Quests](/basic/events-and-quests/quests) | The Quests editor: objectives, rewards, requirements, repeating, failing, giving up |
| [Quest Lines](/basic/events-and-quests/quest-lines) | Quests in steps that make a story |
| [Global Variables](/basic/events-and-quests/global-variables) | Named values that events, conditions and quests share, and that are saved |
| [Popups](/basic/events-and-quests/popups) | Messages, tutorials and toasts built as scenes |

The conditions are in [Conditions](/basic/shared-systems/conditions), the requirements and rewards that quests use in [Requirements](/basic/shared-systems/requirements) and [Rewards](/basic/shared-systems/rewards).

## How they fit together

```text
          the world                        the game
   a region is entered ─┐
   an NPC dies ─────────┤   Event          Quest objective
   a timer runs out ────┼─► triggers ───►  (uses a trigger too:
   a quest completes ───┘     │             "kill 3 wolves")
                              ▼
                      conditions hold?  (the "if")
                              │ yes
                              ▼
                  actions, one after another
        spawn · open a door · start a quest · set a variable · show a popup
```

A **trigger** listens to something in the game. The same triggers are used by events (to start them) and by quest objectives (to complete them): "kill 3 wolves" is an objective with an *Entity Death Type* trigger and a count of 3. This is why there is one list of triggers, not two.

## The run-time state is separate from your data

The events, quests and quest lines you make in the editor are **definitions**; they are never changed while the game runs. When a game starts, the game makes working **copies** of them. The copies hold the state: which events have run, which quests are active, how many wolves have been killed. The state is saved with the game, and a new game starts from the definitions again. (This is the [definition and instance](/advanced/definitions-and-instances) split.)

## Good to know

- **A game start trigger fires once per game.** Not on a load, and not each time the party changes world.
- **Triggers survive a change of world.** They are taken off before the old world goes and put back in the new one, and a kill count keeps its count.
- **Time waits count on the running game clock.** A [cooldown](/basic/keywords#cooldown) of 24 hours takes 24 hours of game time, also if the time was skipped with an action.
- **An action that cannot do its job fails**, and its event with it. It does not wait for ever.
- **Words in text.** The texts of quests and conversations can use `<player name>`, `<npc name>`, `<quest name>` and a few more: see [Quests](/basic/events-and-quests/quests#words-in-the-texts).

## See also

- [How events and quests are built](/advanced/events-and-quests/).
- [Gameplay Config](/basic/game-settings/gameplay-config): the quest settings (how many at once, how failing and giving up work by default, quest levels).
