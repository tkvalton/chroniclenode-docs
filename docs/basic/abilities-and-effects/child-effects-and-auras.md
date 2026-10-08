# Child effects and auras

Some effects hold other effects. The **Composite** effect is the plain one, and the conditional, delayed, chain, projectile, area, movement and proc effects work the same way. This page explains how such a chain looks to the player and how its text is written, so you can decide which effect of the chain the player sees.

## Every effect in a chain is its own running effect

When a composite effect is applied, each of its child effects starts as a separate running effect on its target. Each has its own timer, its own stacks and its own settings. This matters for three things:

- **What the player sees.** A running effect is shown on the interface (the buff and debuff bars, the nameplates, the unit frames) only if its **Show as buff/debuff** is on. You choose per effect.
- **What ends it.** A composite can take its children with it. With **Remove child effects on end** on, the children are removed when the composite ends, by its duration or because something removed it (a dispel). With it off, the children carry on until their own ends, even after the composite is gone.
- **Who it lands on.** Each child has its own **Applies to**. A composite on an ally can hold one child that lands on the ally and one that lands on the caster.

## Deciding which effect is the aura

You decide, effect by effect. The usual choice is to show the one effect that stands for the whole bundle, and to leave the rest unmarked.

**Example: Blessing of Vigor.** A buff that heals over time and raises Strength, which the player can see and have dispelled as one thing.

| Effect | Type | Time strategy | Show as buff/debuff | Notes |
|---|---|---|---|---|
| **Blessing of Vigor** | Composite | Temporary, 30 s | **on**, Buff | **Remove child effects on end** on. Its children are the two below |
| Vigor Regeneration | Heal | Temporary ticking, 30 s, tick 2 s | off | Heals every 2 seconds |
| Vigor Strength | Stat Modifier | Temporary, 30 s | off | +10 Strength |

The player sees one icon, *Blessing of Vigor*, with one 30-second timer. Dispelling it removes the heal and the stat bonus with it, because the composite takes its children along.

If you also turn on **Show as buff/debuff** for the two children, the player sees three icons for what is one blessing. Do that only when it is useful: for example when the Strength bonus has its own stacks that the player should watch.

::: tip Give the bundle a duration
A composite with the **Immediate** time strategy ends the moment it is applied, and with **Remove child effects on end** on that would remove its children at once. Use **Temporary** (or **Persistent**) for a buff that holds children.
:::

## What the tooltip says

When the player points at an effect on the interface, the tooltip shows its name and a text. The text is one of two things:

- **The Description you wrote** in the effect's *Description* field, when there is one.
- **The text the effect type writes itself** when the Description is empty. For a damage effect that reads like "deals 10 damage"; for a composite it only says how many effects it triggers.

The generated text is right for simple effects, because it follows the numbers you set. For a composite it says little, so write a Description for a composite that is an aura.

### Using the text of the child effects in a Description

In the Description of an effect, two placeholders bring in the text of its child effects:

| Placeholder | Replaced by |
|---|---|
| `<Effect1>`, `<Effect2>`, ... | The text the child effect's type writes itself, so it follows that effect's numbers |
| `<EffectText1>`, `<EffectText2>`, ... | The *Description* written on the child effect (its own text when it has none) |

The numbers count the child effects in order, and the children of the children after their parent. For *Blessing of Vigor* above, `<Effect1>` is the heal and `<Effect2>` the stat modifier, so its Description could be:

```
Blessed with vigor: <Effect1> and <Effect2>.
```

The tooltip then reads something like "Blessed with vigor: heals 5 every 2s for 30s and raises Strength by 10 for 30s.", and it stays right when you change a number in a child.

### In an ability's description

The same two placeholders work in an *ability's* Description, with one difference: they count the ability's on-use effects, then its passive effects, and the children of each. Use `<Effect1>` for the built-in text, which is what you want most of the time, and `<EffectText1>` when you have written your own words for that effect and want them in the ability's tooltip.

## See also

- [Effects](/basic/abilities-and-effects/effects)
- [Effect types](/basic/abilities-and-effects/effect-types)
- [Abilities](/basic/abilities-and-effects/abilities)
