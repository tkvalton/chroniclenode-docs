# Nameplates

A **nameplate** is the small panel floating over an entity or an object: its name, its health, what it is casting and the buffs and debuffs on it. A nameplate is made for **every entity** (the party, NPCs, pets) and for every **object that has stats and a nameplate marker** (a training dummy, a destructible barrel).

| | |
|---|---|
| **Set in** | [UI Settings](/basic/game-settings/ui-settings#ui-scene-paths) > *Ui scene nameplate* |
| **Root class** | [`Nameplate`](/advanced/user-interface/nameplates/nameplate) |
| **Template** | `ui_scenes/in_game/HUD/components/nameplates/nameplate_template.tscn` |
| **Made by** | The [`NameplateManager`](/advanced/user-interface/nameplates/nameplate-manager), which the in-game interface creates. One nameplate for each owner |

The nameplate is **not** part of the [HUD](/basic/user-interface/hud): it lives in 3D space and follows its owner, drawn on its own layer.

## Where it is placed

The plate is positioned over the **NameplateMarker** of the owner's [model scene](/basic/assets/model-scenes) (a point you place above the head). An entity or object **without a marker has no nameplate**. An object also needs [stats](/basic/entity-stats/) (something to show) to get one: with a marker but no stats it has none, and an object with stats and a marker gets a simpler plate (name and health, no casting or auras).

The manager also:

- **Scales** the plate down with distance (it is full size up to a distance and shrinks to 70% far away).
- **Orders** the plates by distance: the closer one is drawn on top, and the **target** is always on top.
- **Hides** the plate of an entity that dies, and shows it again when it is brought back.
- Hides plates by the player's settings (below) and for entities **in the fog of war** (see the *Fog hide nameplates* option of the [Gameplay Config](/basic/game-settings/gameplay-config)).

## What the scene must contain

The nameplate script finds its parts by **unique name**:

| Unique name | Node | What it shows |
|---|---|---|
| `NameLabel` | `Label` | The name of the owner |
| `HealthContainer` | `MarginContainer` | The health bars (made from the owner's pools: the bar scene is the **Nameplate pool bar scene** option of the root) |
| `CastBar` | `CastBar` | What the owner is casting, or the activity of an object |
| `BuffGrid`, `DebuffGrid` | `GridContainer` | The icons of the effects that are shown as [buffs and debuffs](/basic/abilities-and-effects/status-effects). Pointing at an icon shows the [effect tooltip](/basic/user-interface/tooltips) |
| `Borders` | `MarginContainer` | A highlight shown when the owner is hovered or targeted |

## What the player controls

The **UI > Nameplates** options of the player's [Game Settings](/basic/game-settings/settings#ui) decide what the plates show: friendly, enemy and pet plates on or off, only in combat, which auras, health text, the resource bar, the cast bar, the colour by class, and the maximum distance (`0` = unlimited). You choose the defaults and which options the player may change.

## Colours

The health bar colour comes from the relationship of the owner to the current player:

| Owner | Colour |
|---|---|
| A party member | The **class colour** (if the player turned *class colours* on), otherwise the **player** colour |
| A friendly NPC or pet | The **friendly** or **pet** colour |
| A hostile entity (and a hostile pet) | The **hostile** colour |
| Neutral | The **neutral** colour |

The colours are the **Accessibility** options of the player's settings, so a colour-blind player can choose their own.

## Floating text

Damage numbers, heals, *Dodge* and *Immune* float up from the nameplate marker as a short text that fades out. They are made by the same manager from the results of combat and **do not need the nameplate**: they still show if the player turns nameplates off.

## Making your own

Make a scene whose root script extends `Nameplate` and keep the unique names above (leave out the ones you do not want: a plate with no cast bar is fine). Set it in UI Settings. The pieces are the same as the action bar's: the same [`PoolBarUI`](/advanced/user-interface/nameplates/pool-bar-ui) and the same [`CastBar`](/advanced/user-interface/hud/cast-bar).

## An entity that has no plate, but a frame

The target of the player is also shown in the HUD in the unit frame of the target. The unit frames are being reworked.

## See also

- [Model scenes](/basic/assets/model-scenes) (the NameplateMarker)
- [Settings](/basic/game-settings/settings#ui)
- [HUD](/basic/user-interface/hud)
