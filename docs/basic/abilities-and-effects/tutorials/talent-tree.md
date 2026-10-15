# 4. A talent tree

::: info Status
Written from the editor's fields and the reference pages. Not yet checked step by step in the editor.
:::

In this tutorial you build a small **talent tree** for your player class: the player earns a talent point at every level and spends it on talents. The second row is locked until the player has spent points in the first. You will learn the three pieces of a tree (a **point pool**, **nodes** and **connections**) and how a class gets its tree.

**Time:** about 25 minutes.

**Before you start:** finish [tutorial 1](/basic/abilities-and-effects/tutorials/first-damage-attack): you use the ability *Spark* it makes as a talent. Any passive or active ability will do. You need a player class.

## Part 1: the points

1. Click the **Database** tab. In the category drop-down choose **Abilities & Effects**, then click the **Skill Trees** tab.
2. Click **Pool Manager** in the toolbar above the editor. Click **Add**, name the pool `Talent Points` and close the window. Leave **Points belong to** on **Each character**: the points are the character's. See [Whose points they are](/basic/abilities-and-effects/skill-trees#whose-points-they-are).

## Part 2: the tree

3. Click **Add** above the list of trees and name it `Warrior Talents`. It opens on the right.
4. Click **Add Node** and choose **Ranked node**. A ranked node can be taken more than once. Name it `Spark`.
5. In its properties set the **Point pool** to `Talent Points`, **Max ranks** `1` and the **cost** to `1`. Under **Rewards**, select rank 1 and click **Add Reward**: choose **Ability** and pick **Spark**. Unlocking this node gives the ability.
6. Add a second ranked node, `Spark Mastery`. Point pool `Talent Points`, **Max ranks** `3`, **cost per rank** `1`. Under **Rewards**, select each rank and give it an **Ability Rank** reward for **Spark**: the three ranks make the ability stronger. See [Ability ranks](/basic/abilities-and-effects/ability-ranks#where-ranks-come-from).
7. Add a third node, `Second Wind`, ranked, one rank, cost `1`, with whatever ability you want it to give. Set its **Required points in tree** to `2`: the player must have spent two points in the tree before this talent opens.

## Part 3: the connections

8. Click **Add Connection**, choose `Spark` as the **from** node and `Spark Mastery` as the **to** node, and the type **Prerequisite**. You need Spark before you can take its mastery. The line points the way.
9. Click **Auto Layout** to arrange the nodes, or drag them in the **Visual editor** where you want them.
10. Click **Validate**. It should report nothing. See [Nodes](/basic/abilities-and-effects/skill-trees#nodes) and [Connections](/basic/abilities-and-effects/skill-trees#connections).

## Part 4: give it to the class

11. Go to **Entities > Player Classes** and open your class.
12. In the **Skill Trees** section click **Add** and choose `Warrior Talents`.
13. In the **Level Rewards** section, give each level a **Skill Point** reward: pool `Talent Points`, `1` point. See [Level rewards](/basic/entities/player-classes#level-rewards).

## Part 5: try it

14. Play and level up. The character gets one **Talent Point** per level.
15. Open the **spellbook** and switch to the **skill tree** view. The tree shows with the points you have.
16. Click `Spark` to unlock it: the ability is yours and a point is spent. Click `Spark Mastery` to take its first rank.
17. Right-click `Spark` to take it back. Because `Spark Mastery` needs it, the window refunds **both** and says so, and the two points come back.
18. Unlock `Spark` and `Spark Mastery` again (that is two points spent). `Second Wind` now opens, because it needs 2 points in the tree: click it.
19. Right-click `Spark` once more. This time it is **refused**: taking Spark and its mastery away would leave `Second Wind` without the two points it asks for. Take `Second Wind` back first.

## Going further

| You want | Do this |
|---|---|
| **A choice instead of a talent** | Add a **Choice node**: one option per ability, one cost |
| **Three trees for a class** | Make three trees with one pool and a **Required points in tree** on each row. Read [Three ways to build a talent system](/basic/abilities-and-effects/skill-trees#three-ways-to-build-a-talent-system) |
| **Pick a specialization first** | Give the trees a **Dedication group**, or use a choice node and tree requirements |
| **A tree for a profession or a faction** | List the tree in the craft school or the faction, and make a pool that belongs to the owner of the professions or to the party |
