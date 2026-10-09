# Quest Lines

A **quest line** is a story told in several quests: *The Missing Caravan* (find the tracks, follow them to the camp, free the prisoners), a [faction](/basic/behaviors/factions)'s chain of favours, a tutorial. **Events > Quest Lines** puts quests in order, in **steps**.

## Steps

A quest line is a list of **steps**, numbered from 1. Each step holds one or more quests.

```text
Quest line: The Missing Caravan
  Step 1   ├─ Ask the innkeeper
  Step 2   ├─ Follow the tracks
           └─ Find the lost guard        ← two quests at once
  Step 3   └─ Free the prisoners
```

- When the line starts, **every quest of the first step starts**.
- When **every quest of a step is completed**, the next step starts, and all of its quests start together.
- When the last step is completed, the **quest line is completed** and its bonus rewards are given.

A line also starts by itself when the player takes one of its quests.

## The editor

| Part | What it does |
|---|---|
| **Name**, **Description**, **Icon** | What the player sees in the log |
| **Add Step** | Adds a new step at the end |
| **A step** | Right-click a step to **add a quest** to it (a catalog opens) or to remove a quest. A step may hold quests from anywhere: the quest line only refers to them |
| **Add Completion Reward** | A bonus [reward](/basic/shared-systems/rewards) for finishing the whole line, on top of the rewards of each quest. Right-click to edit, remove, move or clear |
| **On Start Actions**, **On Complete Actions** | [Event actions](/basic/events-and-quests/event-actions) that run when the line starts and when it completes |

When you create a quest while a step is open, the new quest goes into that step.

## Things to know

- **A quest of a step does not have to be offered by an NPC.** The line starts the quests of the step for you. Give the quest a hand-in or objectives that the player can do, or use an *Activate Quest* action in an event, if you want the quest handed out some other way: the quest line starts it either way.
- **A quest that fails for good fails the line.** When a quest of the line fails and its *When it fails* is **Final** (or the project default is final), the quest line fails: it can no longer be finished. A quest that **can be retried** keeps the line waiting; the step continues when the quest is completed after all.
- **Quests that must be done in order** belong in different steps. **Quests that can be done in any order** belong in the same step.
- A quest line is a **definition**: the game works on a copy, and the state is saved with the game.

## See also

- [Quests](/basic/events-and-quests/quests), [Events](/basic/events-and-quests/events).
- [How quest lines are built](/advanced/events-and-quests/).
