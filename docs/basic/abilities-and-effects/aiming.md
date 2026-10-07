# Aiming

Some abilities go where the player looks, not at a selected target: a bow, a gun, a thrown knife. ChronicleNode supports this with the **Aimed** targeting strategy, together with **draw and release** casting and **charge** scaling. They work with tab-targeting, free aiming and point-and-click games alike, so you switch on what your game needs.

## How aiming works

An entity has an **aim**: where it is aiming from (the muzzle), the direction, the point the aim hits, and the entity under it.

- For the **player in control**, the aim is a ray from the centre of the screen while the mouse is captured for mouse-look, and otherwise a ray under the mouse pointer. So a shoulder-camera shooter and a point-and-click game both shoot where the player is pointing.
- For **NPCs and companions**, the aim is their current target.

The shot flies from the muzzle towards the aimed point, so even with a camera over the shoulder it goes where the camera looks.

## The Aimed strategy

<Shot name="aiming-aimed-settings" caption="The settings of the Aimed strategy." />

Choose **Aimed** with **Strategy Type** in the targeting section of the [Abilities](/basic/abilities-and-effects/abilities) editor. It resolves to an entity when it can, and otherwise to the point the aim hits.

The ability picks its target in this order, and uses the first that gives an answer:

1. the entity the user has **locked on** to (if **Prefer Locked Target** is on);
2. the entity **under the aim**;
3. the entity **closest to the aim line**, within the **assist angle**;
4. the **selected** target (if **Fallback To Selected Target** is on);
5. the **point the aim hits**, a free shot (if **Free Fire** is on).

It works this out again for every use, and again when a cast completes, so a shot goes where the player aims when it is loosed, not where they aimed when the draw began.

| Field | What it does | Default |
|---|---|---|
| **Filter** | Which entities the aim can pick: **Enemies** (hostile, and neutral ones the user can attack), **Allies** (a healing arrow) or **Anyone** | Enemies |
| **Aim Assist Angle** | Aim assist in degrees. An entity this close to the aim line counts as aimed at. `0` means exactly under the aim | `6` |
| **Free Fire** | With nothing aimed at, shoot at the point the aim hits. Off means the shot needs an entity | on |
| **Prefer Locked Target** | A target the user has locked on to wins over whatever the aim says | on |
| **Fallback To Selected Target** | With nothing aimed at, a selected (not locked) target is still the target before a free shot. Tab-target players keep their target | on |

The strategy also has the settings shared by all targeting strategies: range, line of sight, markers. See [Targeting](/basic/abilities-and-effects/targeting).

## Draw and release

A **Cast** use style can make the player hold the shot at full draw and let go when ready. The fields are on the Cast strategy, under **Draw and Release**: **Release To Fire**, **Min Hold** and **Max Hold**. They are described in [Using an ability](/basic/abilities-and-effects/using-an-ability#draw-and-release).

Letting go early fires at part of the charge.

## Charge

The time a shot is held is its **charge**. Effects can use it:

- **Damage** and **Heal** effects have **Scales With Charge** and a minimum share: a short draw does less than a full one.
- **Projectile** effects have **Charge Scales Speed**: a full draw flies faster.
- A **Power-up** ability's tiers also follow the draw, since the held time counts as the cast time. See [Abilities](/basic/abilities-and-effects/abilities#power-up).

## Hitscan

A **Hitscan** effect is an instant line from the muzzle towards the target (or the aimed point), up to a maximum range. The effects inside it are applied to the entities the line meets. Nothing flies, so nothing can be dodged. It can pierce a number of entities, and walls stop it unless you say otherwise. Hitscan is an effect type, described with the other types in the Effects chapter.

## In the demo

The demo's **Hunting Bow** uses all of this. Its basic attack, **Bow Shot**, is an aimed cast: it works with a selected target and with free aim. **Power Shot** is a draw-and-release shot that hits harder and flies faster the longer you hold it, and cancels if you release too soon.

## See also

- [Targeting](/basic/abilities-and-effects/targeting)
- [Using an ability](/basic/abilities-and-effects/using-an-ability)
