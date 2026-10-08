# 2. A cost and a cooldown

::: info Status
Written from the editor's fields and the demo. Not yet checked step by step in the editor.
:::

In this tutorial you make **Spark** a *builder*: it gives the user a resource each time it is used. Then you make a stronger copy, **Spark Overload**, that *spends* that resource and has a longer [cooldown](/basic/keywords#cooldown). Using the first to afford the second is the heart of many classes.

**Time:** about 15 minutes.

**Before you start:** finish [tutorial 1](/basic/abilities-and-effects/tutorials/first-damage-attack). The demo's class has a **Rage** resource pool, which this tutorial uses. If you use your own class, any resource pool the class has will do (you define pools in *[Entity Stats](/basic/entity-stats/) > Pool*).

## Part 1: Spark gives rage

1. In **Abilities & Effects > Abilities**, select **Spark**.
2. Under **Pool actions**, set the *gain* side:
   - **Gain pool type** to **Resource Pool**;
   - **Gain pool** to **Rage**;
   - **Gain amount** to `10`.

   The gain is given when the ability completes, so an interrupted use gives nothing.
3. Leave the cost side as **No Cost** for now.

<Shot name="tutorial2-gain-rage" caption="Spark gives 10 rage when it completes." />

## Part 2: a stronger copy that costs rage

4. In the list of abilities, right-click **Spark** and choose **Duplicate Ability**. Name the copy `spark_overload` and confirm. The copy opens, with the same settings as Spark.
5. Set its **Display name** to `Spark Overload`.
6. Under **Pool actions**, set the *cost* side:
   - **Cost pool type** to **Resource Pool**;
   - **Cost pool** to **Rage**;
   - **Cost amount** to `30`.
7. Clear the gain: set **Gain pool type** back to **No Cost**. Overload spends rage, it does not give it.
8. Set **Cooldown duration** to `8`.

The copy still uses the same effect as Spark, so it would hit just as hard. Give it its own, stronger effect:

9. Go to the **Effects** tab, right-click **Spark Hit** and choose **Duplicate Effect**. Name the copy `spark_overload_hit`, set its **Display name** to `Overload Hit`, and set **Base Damage** to `40`.
10. Back in the **Abilities** tab, open **Spark Overload**. In its **On Use Effects** tree, remove **Spark Hit** (select it and click **Remove Effect**) and click **Add Effect** to add **Overload Hit**.
11. Check the **Description** preview. If you copied it from Spark it reads "Zaps an enemy. Deals 40 damage." Change the text to `Spends your rage on a huge zap. <Effect1>`.

<Shot name="tutorial2-overload" caption="Spark Overload: costs 30 rage, hits for 40." />

12. Give **Spark Overload** to the class the way you gave Spark: **Entities > Player Classes**, your class, **Abilities > Active Abilities > Add Ability**.

## Part 3: try it

13. Press **Play**, start a new game, open the spellbook with **P** and put **Spark** on action bar slot 1 and **Spark Overload** on slot 2.
14. Target a dummy. Press **2**: nothing happens, because you have no rage. The game shows a warning that the cost cannot be paid.
15. Press **1** three times (waiting out the 3-second cooldown between uses). Watch the rage bar fill by 10 each time.
16. With 30 rage, press **2**. The dummy takes 40 damage, the rage drops to 0 and the slot starts its 8-second cooldown.

## What you learned

- **Pool actions** let an ability **cost** a resource and **give** one back. The cost is paid when the ability starts, and the gain is given when it completes.
- An ability cannot be used when the user cannot pay.
- **Duplicate** copies an ability or effect, so a variant starts from what you already built.
- A **cooldown** is a number you tune per ability. **On global cooldown** also makes it share a short pause with other abilities.

## Next

[3. Cast time and interrupts](/basic/abilities-and-effects/tutorials/cast-time-and-interrupts) makes an ability take time.
