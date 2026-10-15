# Tutorial: your first item and its loot

::: info Status
Written from the editor's fields and the reference pages. Not yet checked step by step in the editor.
:::

In this tutorial you make two things a wolf can drop: a **Wolf Pelt** (a plain material, sold to vendors) and a **Healing Potion** (a consumable the player drinks). Then you make the **loot table** that decides what a wolf carries, and give it to the wolf with a **loot rule**.

**Time:** about 20 minutes.

**Before you start:** the [template project](/general/template), or a project with a player class, a [currency](/basic/items/currency) and an enemy NPC called *Wolf*.

## Part 1: the pelt

1. Click the **Database** tab. In the category drop-down choose **Items**, then click the **Items** tab.
2. Click **Add** above the list. In the dialog type the name `Wolf Pelt`, choose the kind **Material** and confirm. It opens on the right.
3. Under **Basic properties**: tick **Stackable** and set **Max stack size** to `99`, so the pelts share a slot. Set **Vendor value** to `5` and choose an **Icon**.
4. Under **Material**, set **Material type** to `leather` (a word that groups materials for recipes).

A material cannot be used. It is something to sell or to craft with. See [Items](/basic/items/items#basic-properties) for every field.

## Part 2: the potion

The potion needs an **effect** to apply when it is drunk.

5. Go to **Abilities & Effects > Effects**, click **Add**, name it `healing_potion_heal`, choose the category **Damage And Healing** and the type **HealEffect**, and confirm. Set **Display name** to `Healing Potion Heal`, leave **Time strategy** on **Immediate**, and under **Specific Properties** give the heal an amount of `40`. See [The amount of an effect](/basic/abilities-and-effects/effect-amount).
6. Back in **Items > Items**, click **Add**, name it `Healing Potion`, choose the kind **Consumable** and confirm.
7. Tick **Stackable** with a **Max stack size** of `20`, and set a **Vendor value**.
8. Under **Consumable**, set **Effect** to `Healing Potion Heal` (the button opens the catalog).
9. Tick **Has cooldown** and set **Cooldown duration** to `30`. To make all potions share that cooldown, put the item in a [group](/basic/shared-systems/groups#shared-cooldown) later.

## Part 3: the loot table

10. Go to **Items > Loot Tables**. Click **Add** and name it `wolf_loot`.
11. Under the guaranteed entries click **Add Loot Entry**, choose **Wolf Pelt**, and set **Min quantity** `1` and **Max quantity** `2`. A guaranteed entry always drops.
12. Under the rolled entries, add **Healing Potion** with **Weight** `10`, and add a **Currency** entry with **Weight** `30` (a few coins). The weights are shares: the coins drop three times as often as the potion.
13. Set **Min items** `0` and **Max items** `1`, and **Nothing weight** `20`. Each wolf then rolls the random list once at most, and often finds nothing.

See [Loot Tables](/basic/items/loot-tables) for the weights, the chance and the level bands.

## Part 4: give the table to the wolf

A loot table says *what*. A **loot rule** on the NPC says *when*.

14. Go to **Entities > NPCs** and open the **Wolf**. Open the **Inventory & Loot** section.
15. Click **Add a rule (shared table)**. Set **When** to **On Death** and **Table** to `wolf_loot`. Leave **Item level** as it is.

Now a wolf that dies has the pelts, and maybe more, on its body. See [Loot rules](/basic/items/loot-rules).

## Part 5: try it

16. Play the world and kill a wolf. A **corpse** is left: use it to open the loot window. The pelt is there. Every wolf has `1` or `2` pelts, and about one in three has something else.
17. Take the loot. The pelts are in one slot of the bag.
18. Drink a potion if you got one: it applies the heal, and the cooldown runs.
19. Sell the pelts to a vendor: the vendor pays half the **Vendor value** by default ([Vendors](/basic/items/vendors#prices)).

## If something does not work

| What you see | Why |
|---|---|
| The wolf drops nothing | The wolf has no loot rule, or the rule is on the wrong trigger. **On Death** puts it on the body |
| Pelts do not stack | **Stackable** is off, or **Max stack size** is `1` |
| The potion does nothing | The item has no **Effect**, or the effect has no amount |
| The pelt cannot be sold | **Is key item** is on, which stops selling |

## Where to go next

- **Items that scale:** an equipment item can be [generated](/basic/items/item-generation) at the level of the loot instead of being fixed.
- **Crafting:** make the pelts the material of a [craft recipe](/basic/items/craft-recipes).
- **A quest item:** a pelt the quest asks for can be kept apart from the bag: see [Quest items](/basic/items/quest-items).
