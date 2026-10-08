# 1. Your first ability: a damage attack

::: info Status
Written from the editor's fields and the demo. Not yet checked step by step in the editor.
:::

In this tutorial you build **Spark**, an ability that hits an enemy for 10 damage, and try it on a target dummy.

You will make two things, because that is how ChronicleNode works: an **effect** that does the damage, and an **ability** that decides when and how it is used. See the [overview](/basic/abilities-and-effects/) if you want the idea first.

**Time:** about 10 minutes.

**Before you start:** the [template project](/general/template) open in Godot, or a project with a world and a player class.

## Part 1: the effect

1. Click the **Database** tab at the top of Godot. In the category drop-down choose **Abilities & Effects**, then click the **Effects** tab.
2. Click **Add** above the list. The [effect type](/basic/abilities-and-effects/effect-types) dialog opens.
3. In the dialog, type the name `spark_hit`. Choose the category **Damage And Healing** and the type **DamageEffect**, then confirm. The new effect appears in the list and opens on the right.

<Shot name="tutorial1-effect-type-dialog" caption="Creating the effect: name, category and type." />

4. Set **Display name** to `Spark Hit`.
5. Leave **Time strategy** on **Immediate**. A hit happens once and is over.
6. Under **Specific Properties**, find **Base Damage** and set it to `10`.

<Shot name="tutorial1-damage-effect" caption="The finished Spark Hit effect." />

That is the whole effect. It is saved as soon as you change it.

## Part 2: the ability

7. Click the **Abilities** tab, then **Add**. Type the name `spark` and confirm. The new ability opens.
8. Set **Display name** to `Spark`.
9. Set **Ability type** to **Active**. An active ability is one the player uses.
10. In **Description**, type `Zaps an enemy. <Effect1>`. The **Preview** underneath replaces `<Effect1>` with the description of the first effect you add in step 13, so the tooltip always shows the real number.
11. Under **General properties**, leave **On global cooldown** on, and set **Cooldown duration** to `3`.
12. Set up the targeting and use style. They are two drop-downs named **Strategy Type**:
    - in the targeting section choose **Enemy**, and set **Max Range** to `10`;
    - in the use section choose **Instant**.
13. In the **On Use Effects** tree, click **Add Effect**. The effect catalog opens: find **Spark Hit** and choose it. It appears in the tree. Check the **Preview** under the description: it should now read something like "Zaps an enemy. Deals 10 damage."

<Shot name="tutorial1-ability" caption="The finished Spark ability." />

## Part 3: give it to a class and try it

An ability does nothing until an entity has it. Here you give it to the class you play.

14. Switch the category to **Entities** and click **Player Classes**. Select the class you play (the demo has one).
15. In the **Abilities** section, next to **Active Abilities**, click **Add Ability**. Choose **Spark**.

<Shot name="tutorial1-class-abilities" caption="Spark in the class's active abilities." />

16. Press **Play** (**F5**). From the main menu start a new game with that class.
17. Find a target dummy in the demo world. Press **P** to open the **spellbook**, and drag **Spark** onto the first slot of the action bar.
18. **Left-click** the dummy to target it, then press **1**.

The dummy loses 10 health, and the action bar slot starts its 3-second [cooldown](/basic/keywords#cooldown). Press **1** again straight away: nothing happens until the cooldown ends.

::: tip If nothing happens
Make sure the dummy is within 10 metres (the **Max Range** you set) and that you can see it. Out of range, the ability tells you instead of firing. If the ability is not in the spellbook, check step 15 and start a *new* game, because a running game keeps the abilities its character started with.
:::

## What you learned

- An **effect** does something (here, damage). An **ability** lists effects and decides *when and how* they happen: who it targets, how it is carried out, and how long before it can be used again.
- The **Description** can show the real numbers with `<Effect1>`, so you change a value in one place.
- An entity only has an ability once you add it, here through its class.

## Next

[2. A cost and a cooldown](/basic/abilities-and-effects/tutorials/cost-and-cooldown) gives Spark a price.
