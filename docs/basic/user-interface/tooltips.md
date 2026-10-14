# Tooltips

A **tooltip** is the small window that appears when the player points at something: an item, an ability, a buff, a node of a skill tree, a button. The toolkit has **five tooltips**, one for each kind of thing it describes. They are made once, when the game starts, and **one of each is reused** for every request.

| Tooltip | Root class | Shown for | Template (in `ui_scenes/in_game/tooltips/`) |
|---|---|---|---|
| **Item** | [`TooltipItem`](/advanced/user-interface/tooltips/tooltip-item) | An item in a bag, the equipment, a shop, a loot window | `items/tooltip_item_template.tscn` |
| **Ability** | [`TooltipAbility`](/advanced/user-interface/tooltips/tooltip-ability) | An ability in the spellbook, on the action bar, in a trainer's list | `abilites/tooltip_ability_template.tscn` |
| **Effect** | [`TooltipEffect`](/advanced/user-interface/tooltips/tooltip-effect) | A buff or a debuff icon | `tooltip_effect_template.tscn` |
| **Skill node** | [`TooltipSkillNode`](/advanced/user-interface/tooltips/tooltip-skill-node) | A node of a [skill tree](/basic/abilities-and-effects/skill-trees) (and the choices of a choice node) | `tooltip_skill_node_template.tscn` |
| **Description** | [`TooltipDescription`](/advanced/user-interface/tooltips/tooltip-description) | Anything with a name and a text: the buttons of the mini menu, a stat | `tooltip_description_template.tscn` |

They are set in [UI Settings](/basic/game-settings/ui-settings#tooltip-scenes). All five extend [`TooltipBase`](/advanced/user-interface/tooltips/tooltip-base), which brings the common look and the placement.

::: tip An entity tooltip is planned
Pointing at an NPC, a pet or an object does not show a tooltip yet. A sixth tooltip for **entities** (name, level, faction, what they are) is planned: [Entity tooltip](/planned/entity-tooltip).
:::

## How a tooltip is requested

Nothing in the interface shows a tooltip directly. A part (a slot, a button, an icon) **emits a signal**, and the signal travels up to the [UI manager](/advanced/managers/game-host/ui-manager), which tells the right tooltip to show:

```text
an item slot ─ item_tooltip_requested(item, definition, context, extra) ─► the in-game UI ─► the UI manager ─► the item tooltip
```

Every [HUD element](/basic/user-interface/hud) and every [panel](/basic/user-interface/ui-panels) has these signals already, so a part you make only has to emit them:

| Signal | Arguments |
|---|---|
| `item_tooltip_requested` | the item instance, its definition, a **context**, extra data |
| `ability_tooltip_requested` | the ability |
| `effect_tooltip_requested` | the effect |
| `skill_node_tooltip_requested` | the skill node |
| `description_tooltip_requested` | a name, a text |
| `hide_tooltip` | `force_hide` |

`hide_tooltip` hides all five. Emit it when the mouse leaves.

### The item tooltip's context

The item tooltip changes what it shows by the **context** it is asked for:

| Context | Shows |
|---|---|
| `inventory` | The value of the item |
| `vendor_buying` | What the player pays |
| `vendor_selling` | What the vendor pays the player |

An item **instance** shows full detail (the rolled affixes of a [generated item](/basic/items/item-generation), durability, charges, the sockets that are filled, the set pieces that are worn); an item **definition** alone (a shop's stock, a recipe's result) shows the basics.

## Placement

A tooltip appears **next to the mouse**, kept at least a few pixels inside the screen. It is a `MarginContainer` drawn above the rest of the interface.

## Styling

The five tooltips share the **label settings** of `TooltipBase`, set on the root node of each scene:

| Option | What it sets |
|---|---|
| **Font**, **Font size** | The text of every label (except the item name) |
| **Outline size** and **color** | The outline |
| **Shadow size**, **color** and **offset** | The shadow |

Beyond that, the look (backgrounds, borders, spacing) is plain scenes: restyle them as you like.

## Making your own

For each tooltip scene, keep the **root class** and the **unique names** its script reads (open the script to see them: each is a short `@onready` list at the top). You can add anything else. For example, to add a line to the ability tooltip, add a `Label` to the scene and fill it in a subclass: `class_name MyTooltipAbility extends TooltipAbility`, override `set_tooltip_data`.

Set the new scene in [UI Settings](/basic/game-settings/ui-settings#tooltip-scenes). The settings editor checks that the root of each is the right class.

## See also

- [UI Settings](/basic/game-settings/ui-settings)
- [HUD](/basic/user-interface/hud#adding-your-own) (the signals of an element)
- [Effects](/basic/abilities-and-effects/effects) (the description shown on an effect tooltip)
