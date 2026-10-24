# Tutorial: your first quest

::: info Status
Written from the editor's fields and the reference pages. Not yet checked step by step in the editor.
:::

In this tutorial you build **Wolves at the Farm**: a farmer asks the player to kill three wolves, and pays when they come back. You will make the quest, the conversation that offers and takes it in, the farmer, and the wolves, and then play it.

**Time:** about 20 minutes.

**Before you start:** the [template project](/general/template), or a project with a world scene and a player class. You need an enemy NPC called *Wolf*. If you have none, make a plain one in **Entities > NPCs** (a name and a level are enough, see [NPCs](/basic/entities/npcs)).

## Part 1: the quest

1. Click the **Database** tab. In the category drop-down choose **Events & Quests**, then click the **Quests** tab.
2. Click **Add** above the list, name the quest `Wolves at the Farm` and confirm. It opens on the right.
3. Write a **Description** the player will read in the quest log: *The wolves have been at my sheep. Drive off three of them.*

### The objective

4. Right-click **Objectives** in the tree and choose **Add Objective**.
5. For the **trigger** choose **Entity Death Type**. Set the type to your **Wolf** and the amount to `3`. This is "kill three wolves": the objective shows **0 / 3** and counts up. See [Objectives](/basic/events-and-quests/quests#objectives).
6. Leave **Progress display** on **X / Y**.

### The reward

7. Click **Add Reward**, choose **Experience** and give `100`. Add a second reward of **Currency** if you have a currency (a few coins). See [Rewards](/basic/shared-systems/rewards).

### The hand-in

8. Turn on **Requires hand in**. The quest will not finish when the third wolf dies; it waits at "ready to hand in" until the player goes back to the farmer.
9. Write the **Turn-in text**: *Good work. Here is your pay.*

An orange warning under the text says that no conversation takes this quest in. That is right for now: you make that conversation next.

## Part 2: the conversation

10. Go to **Behaviors > Conversations**. Click **Add** and name it `farmer_talk`.
11. Click **Add Chat** and write the text: *The wolves keep taking my sheep. Will you drive them off?*
12. Click **Create Start** and connect it to the chat, so the conversation opens there.
13. Click **Add Response** twice and connect both to the chat. Write the first `I will deal with them.` and the second `Not now.`
14. Give the second response the action **End chat**. A response with no action also ends the line, but an explicit action is clearer.
15. Click **Show Quests**. Right-click in **Offer quests** and add **Wolves at the Farm**. Right-click in **Hand-in quests** and add it there too.
16. Click **Validate**. It should report nothing.

The offer list shows the quest to players who meet its requirements, and the hand-in list is what makes the orange warning go away: go back to the quest and check that the warning is gone. See [Conversations](/basic/behaviors/conversations#quests-in-a-conversation).

## Part 3: the farmer and the wolves

17. In **Entities > NPCs**, click **Add** and make a `Farmer`. A level and a name are enough. Make sure he is not hostile: a faction that is friendly to the player (or none) does it.
18. Open a **world scene** in the 3D editor. In the viewport toolbar, click the **NPCs** button, pick the **Farmer** in the bar at the bottom and click where you want him. See [Add Object](/basic/world/add-object).
19. With the farmer selected, open the **Unique Object** panel. Under **Interactions** choose the **Conversation** interaction and set the conversation to `farmer_talk`. See [Uniques](/basic/world/uniques).
20. Choose the **Wolf** in the NPC bar and click to place three or four **Wolf** NPCs a little way from the farm. Save the scene.

## Part 4: try it

21. Play the world. Walk to the farmer and talk to him: the chat shows, and with it the response *I will deal with them.* Choose it to accept the quest.
22. Open the **quest log**. The quest is there, with *Kill 3 Wolf  0 / 3*, and the tracker shows it.
23. Kill three wolves. The objective ticks up with each, and when it reaches `3 / 3` the quest says it is **ready to hand in**.
24. Talk to the farmer again. The turn-in text shows, the reward is given, and the quest completes.

## If something does not work

| What you see | Why |
|---|---|
| The farmer has nothing to offer | The quest is not in the **Offer quests** of the conversation, or the player does not meet a **requirement** of the quest |
| The objective does not count | The objective names one **type** of NPC: kill the one you chose. Wolves of another definition do not count |
| The quest never completes | It **requires hand in** and no conversation takes it in: check the hand-in list, and the [troubleshooting](/general/troubleshooting#a-quest-never-completes) page |
| The farmer attacks you | His faction is hostile to the player's |

## Where to go next

- **Make it a chain:** give the quest a *requirement* of another quest, or start the next one from the hand-in. See [Quest lines](/basic/events-and-quests/quest-lines).
- **Make it cost something:** add a [hand-in cost](/basic/events-and-quests/quests#hand-in-cost) (*bring 5 wolf pelts*).
- **React to the world:** an [event](/basic/events-and-quests/events) can give, complete or fail the quest from a trigger area, a timer or a death.
