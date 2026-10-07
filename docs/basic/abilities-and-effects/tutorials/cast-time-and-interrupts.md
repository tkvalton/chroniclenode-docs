# 3. Cast time and interrupts

::: info Status
Written from the editor's fields and the demo. Not yet checked step by step in the editor.
:::

In this tutorial you build **Frost Bolt**, a spell that takes two seconds to cast. You will see what happens when the caster moves, when the cast is interrupted, and how to let a caster move while casting.

**Time:** about 15 minutes.

**Before you start:** finish [tutorial 1](/basic/abilities-and-effects/tutorials/first-damage-attack). You know how to make an effect, an ability, and give it to a class.

## Part 1: the effect and the ability

1. In **Abilities & Effects > Effects**, click **Add**. Name it `frost_bolt_hit`, choose the category **Damage And Healing** and the type **DamageEffect**, and confirm.
2. Set its **Display name** to `Frost Bolt Hit` and **Base Damage** to `25`. Leave **Time strategy** on **Immediate**.
3. In **Abilities & Effects > Abilities**, click **Add**, name it `frost_bolt`, and set:
   - **Display name** `Frost Bolt`, **Ability type** **Active**;
   - **Description** `Hurls a bolt of frost. <Effect1>`;
   - **Cooldown duration** `0`, and leave **On global cooldown** on;
   - in the targeting section, **Strategy Type** **Enemy** and **Max Range** `20`.
4. In the **On Use Effects** tree, click **Add Effect** and choose **Frost Bolt Hit**.

## Part 2: make it a cast

5. In the use section, set **Strategy Type** to **Cast**. The settings of the Cast strategy appear:
   - **Cast Duration** `2` (this is the default);
   - leave **Immobile During Cast** on, and **Interruptable Cast** on;
   - leave **Speed Source** on **Cast Speed**.

<Shot name="tutorial3-cast-settings" caption="The Cast strategy settings for Frost Bolt." />

6. Give Frost Bolt to your class (**Entities > Player Classes**, your class, **Abilities > Active Abilities > Add Ability**).

## Part 3: try it

7. Play, start a new game, and put **Frost Bolt** on an action bar slot (spellbook **P**, then drag).
8. Target a dummy and use Frost Bolt. The character stops and casts for two seconds. The bolt hits when the cast ends.
9. Use it again, and use another ability before the cast ends. The first cast is **cancelled**: nothing is spent and no cooldown starts.

::: info Cancelled is not the same as interrupted
When the *user* cancels (or the target is lost), the cost is **given back**. When an *effect* interrupts the cast (a stun, an interrupt effect), the cost is **kept** and the cooldown starts. See [Using an ability](/basic/abilities-and-effects/using-an-ability#cancelling-and-interrupting).
:::

## Part 4: moving while casting

A caster who is rooted to the spot is easy to hit. You can let them move more slowly instead.

10. Back in **Frost Bolt**, switch **Immobile During Cast** **off**.
11. Set **Movement Speed While Casting** to `0.5`. The caster now walks at half speed while casting.
12. Try it: you can walk during the cast, at half speed.

## Part 5: a cast that is hard to interrupt

13. Set **Interrupt Shield Level** to `1`. The first interrupt that hits Frost Bolt while it is being cast is blocked, and the cast carries on. The second one stops it. An enemy with an interrupt, or an *Interrupt* effect of your own (see [Effect types](/basic/abilities-and-effects/effect-types)), lets you test it.
14. Set **Interruptable Cast** **off** to make the cast impossible to interrupt at all.

## What you learned

- The **use strategy** decides how an ability is carried out over time. **Cast** adds a cast time before the effects apply.
- **Immobile During Cast** and **Movement Speed While Casting** decide whether the caster can move.
- **Interruptable Cast** and **Interrupt Shield Level** decide how hard the cast is to stop.
- A cancelled cast gives the cost back; an interrupted one does not.

## Next

More tutorials will build areas, projectiles, damage over time, critical hits, buffs and potions with shared cooldowns, and a bow.
