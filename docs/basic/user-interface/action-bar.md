# Action bar

The **action bar** is the HUD element the player fires abilities and items from. This page is about the **scene**: what it must contain, what you can set on it, and how it shows the slots. What goes **on** a slot, which key fires it, who may change it, and the recipes for a classic bar or a mouse-button game are on [Action bars and keybinds](/basic/game-settings/action-bars-and-keybinds).

| | |
|---|---|
| **Class** | [`ActionBarUI`](/advanced/user-interface/hud/action-bar-ui) (a [HUD element](/basic/user-interface/hud)) |
| **Template** | `ui_scenes/in_game/HUD/action_bar/action_bar_ui_template.tscn` |
| **Slot button** | [`ActionBarButton`](/advanced/user-interface/hud/action-bar-button), template `buttons/action_bar_button_template.tscn` |

## The data and the drawing are apart

A character's bar is **data**: 1 to 60 slots, set by *Action bar slot count* in the [Gameplay Config](/basic/game-settings/gameplay-config#action-bar). The scene is only **a way of drawing it**. A slot your scene does not draw still exists and still fires with its key. So you can draw ten slots, three, or none, without touching the character.

## What the scene must contain

The script finds these by **unique name**:

| Unique name | Node | What it is |
|---|---|---|
| `ButtonGrid` | `GridContainer` | Where the slot buttons are made. Set its **columns** to the number of slots in a row (the template uses 10) |
| `AddRow`, `RemoveRow` | any `Control` (a button) | Show another row of slots or one less. Optional: leave them out for a bar with one fixed size |
| `HealthBar`, `ResourceBar` | [`PoolBarUI`](/advanced/user-interface/nameplates/pool-bar-ui) | The health and the main resource of the current character |
| `BuffsGrid`, `DebuffsGrid` | `GridContainer` | The icons of the buffs and debuffs on the character |
| [`CastBar`](/advanced/user-interface/hud/cast-bar) | `CastBar` | The progress of a cast or of an activity (using an object) |

A part you do not want can be left out of the scene or turned off with the options below.

## Options on the bar

| Option | What it does | Default |
|---|---|---|
| **Action button scene** | The scene made for each slot (a button with an `ActionBarButton` script) | the template button |
| **Aura icon scene** | The scene made for each buff or debuff icon | the template icon |
| **Show health bar**, **Show resource bar** | Show or hide the two bars | on |
| **Health text mode**, **Resource text mode** | What is written on a bar: nothing, the current value, current / max, a percentage, or one of those with a percentage | current / max |
| **Show buffs**, **Show debuffs** | Show the icons | on |
| **Max buff icons**, **Max debuff icons** | How many icons fit | 8 each |
| **Allow rearranging** | Off: the bar only **shows**, the player cannot drag onto or off it | on |
| *Affected by UI scaling*, *Pivot type* | As every [HUD element](/basic/user-interface/hud#options-every-element-has) | |

Several of these also follow the **player's settings** (Game Settings > UI > Action Bar): cooldown text, global cooldown text, health and resource text, and the cast bar can be turned off by the player.

## Rows

Slots are drawn in **rows of 10**, as many rows as the slot count needs. The bar starts with the rows that hold something (so a character with slots 1 to 3 planned shows one row) and the **AddRow** and **RemoveRow** controls change how many rows are visible. The number of rows is not a limit on slots: a hidden row still fires.

## The slot button

Each slot is a scene with an `ActionBarButton` script. Its parts, by unique name, are yours to arrange and style:

| Unique name | What it shows |
|---|---|
| `ContentIcon` | The icon of the ability or the item |
| `KeyBind` | The key that fires the slot (**LMB**, `Q`, `Ctrl 2`...). It is read from the input action `action_slot_keybind_N`, so it follows the Input Map and a player's rebinding |
| `CooldownProgress`, `CooldownTimerText` | The cooldown, and the global cooldown, as a sweep and as a number |
| `DisabledTexture` | Shown when the content cannot be used now (not enough resource, wrong weapon, silenced) |
| `AlertEffect` | A flash when a proc or a ready alert happens |
| `ChargeCountLabel` | The charges of a charge ability, the uses left of an item, or the quantity of a stack |

**What the player does with a slot**: left-click uses it; right-click uses an item (a potion) directly; **press and hold** (a fifth of a second) picks up what is on it to move it, when the slot can be changed. Dropping on a slot puts the ability or item there; dropping it off the bar takes it off. A slot that is **locked** (by the project, the class plan or an effect) cannot be picked up or filled, and the player gets a message that says so.

## Making your own bar

- **Restyle it**: copy the template scene and change the look, keeping the unique names. Set the copy in your in-game scene's `HUD`.
- **A bar with no scene part for the bars** (health and resource are drawn elsewhere): delete `HealthBar` and `ResourceBar` from the copy, or turn them off with the options.
- **A different layout** (a circle, two bars, a bar down the side): the bar only needs a container to put the slot buttons in. Change `ButtonGrid` to another container, or make a bar of your own that extends [`HUDUIElement`](/advanced/user-interface/hud/hudui-element) and makes `ActionBarButton`s itself, giving each its `slot_number`.
- **No bar at all** (an action game where the mouse buttons are the attacks): remove the element from the `HUD`. The slots keep working by key. To show only some slots, draw them with a bar of your own and leave the others out.

## See also

- [Action bars and keybinds](/basic/game-settings/action-bars-and-keybinds) (what is on a slot, keys, plans, locks, recipes)
- [HUD](/basic/user-interface/hud)
- [Controller & Camera](/basic/game-settings/controller-and-camera) (mouse buttons are shared between slots and the camera)
- [Gameplay Config > Action Bar](/basic/game-settings/gameplay-config#action-bar)
