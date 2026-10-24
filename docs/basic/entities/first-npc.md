# Tutorial: an NPC who talks and sells

::: info Status
Written from the editor's fields and the reference pages. Not yet checked step by step in the editor.
:::

In this tutorial you build **Marta the herbalist**: a friendly NPC the player can talk to, who can open a shop. You will make the NPC, the shop, and the conversation that ties them together, and place her in a world.

**Time:** about 20 minutes.

**Before you start:** the [template project](/general/template), or a project with a world scene and a player class. You need at least one [item](/basic/items/items) to sell: if you have none, the tutorial [your first item](/basic/items/first-item) makes one.

## Part 1: the NPC

1. Click the **Database** tab. In the category drop-down choose **Entities**, then click the **NPCs** tab.
2. Click **Add** above the list. In the dialog type the name `Marta` (leave the template on **No Template**) and confirm.
3. Under **Basic Properties** set **Default level** to `1`. Choose a **Faction** that is friendly to the player (or leave it empty for a neutral creature that only fights back when attacked). See [Factions](/basic/behaviors/factions).
4. Under **Visual Properties** choose a **skeleton** (the model) with **Select Skeleton**. Without one she has no body in the world.
5. Under **Stats Properties** give her a health pool, so she can be targeted and can take a hit. A pool, with the maximum, is enough.

She has no abilities and no AI script, which is what you want for a shopkeeper: she stands where you put her. See [NPCs](/basic/entities/npcs) for everything else she can have.

## Part 2: the shop

6. Go to **Items > Vendors**. Click **Add**, name it `Marta's Herbs`.
7. Set the **Preferred currency** to your currency (the one the player holds). **Vendor start amount** `-1` means she always has the money to buy.
8. Click **Add Stock Item**, choose an item, and set **Start quantity** to `-1` (the shop never runs out of it). Add two or three more lines. See [Vendors](/basic/items/vendors#stock-items).
9. Leave **Vendor buys items** on, so the player can sell to her, and keep the **Buy value multiplier** at `0.5`.

## Part 3: the conversation

10. Go to **Behaviors > Conversations**. Click **Add** and name it `marta_talk`.
11. Click **Add Chat** and write: *Welcome. Herbs for the sick, roots for the hungry. What do you need?* Click **Create Start** and connect it to the chat.
12. Click **Add Response** three times and connect them to the chat: `Show me what you have.`, `Who are you?` and `Goodbye.`
13. Give **Show me what you have.** the action **Trigger new interaction**, and choose the **Vendor** interaction with `Marta's Herbs`. The conversation ends and the shop opens.
14. Add a second chat for **Who are you?**: *Marta. I have grown these herbs since before the village had a name.* Give the response the action **Proceed to chat** to that chat, and give that chat a response `Back.` that goes to the first chat.
15. Give **Goodbye.** the action **End chat**.
16. Click **Validate**. See [Conversations](/basic/behaviors/conversations).

## Part 4: place her

17. Open a **world scene**. In the viewport toolbar click the **NPCs** button and pick **Marta** in the bar at the bottom. She is on your mouse: click where she should stand.
18. With her selected, open the **Unique Object** panel. Under **Interactions** choose the **Conversation** interaction and set it to `marta_talk`. Save the scene. See [Uniques](/basic/world/uniques).

## Part 5: try it

19. Play the world and walk to Marta. Use her (the interact key): the chat opens.
20. Choose **Who are you?**, then **Back.**. Choose **Show me what you have.**: the shop window opens with her stock.
21. Buy something. The price is the item's value times the vendor's sell multiplier. Sell something back: she pays half.

## If something does not work

| What you see | Why |
|---|---|
| She has no body | The NPC has no skeleton (the model) |
| Nothing happens when you use her | No interaction was set in the **Unique Object** panel for this placed NPC |
| The shop opens empty | The vendor has no stock lines, or they are all at `0` |
| She sells nothing she should | A stock line's **Start quantity** is `0` |

## Where to go next

- **Quests:** offer a quest from her conversation: [your first quest](/basic/events-and-quests/first-quest).
- **A shop that changes:** set the **restock interval** and give a stock line a **Start quantity** of `3` and a **Restock quantity**.
- **Her own look:** change **model scale**, animations and voice in the NPC editor.
