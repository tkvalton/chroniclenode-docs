# Tooltips

A **tooltip** is the small window that appears when the player points at something: an item, an ability, a buff, a node of a skill tree, a button. The toolkit has **six tooltips**, one for each kind of thing it describes. They are made once, when the game starts, and **one of each is reused** for every request.

| Tooltip | Root class | Shown for | Template (in `ui_scenes/in_game/tooltips/`) |
|---|---|---|---|
| **Item** | [`TooltipItem`](/advanced/user-interface/tooltips/tooltip-item) | An item in a bag, the equipment, a shop, a loot window | `items/tooltip_item_template.tscn` |
| **Ability** | [`TooltipAbility`](/advanced/user-interface/tooltips/tooltip-ability) | An ability in the spellbook, on the action bar, in a trainer's list | `abilites/tooltip_ability_template.tscn` |
| **Effect** | [`TooltipEffect`](/advanced/user-interface/tooltips/tooltip-effect) | A buff or a debuff icon | `tooltip_effect_template.tscn` |
| **Skill node** | [`TooltipSkillNode`](/advanced/user-interface/tooltips/tooltip-skill-node) | A node of a [skill tree](/basic/abilities-and-effects/skill-trees) (and the choices of a choice node) | `tooltip_skill_node_template.tscn` |
| **Description** | [`TooltipDescription`](/advanced/user-interface/tooltips/tooltip-description) | Anything with a name and a text: the buttons of the mini menu, a stat | `tooltip_description_template.tscn` |
| **Entity** | [`TooltipEntity`](/advanced/user-interface/tooltips/tooltip-entity) | An NPC, a pet, a party member or an object under the pointer | `tooltip_entity_template.tscn` |

They are set in [UI Settings](/basic/game-settings/ui-settings#tooltip-scenes). All five extend [`TooltipBase`](/advanced/user-interface/tooltips/tooltip-base), which brings the common look and the placement.

## The entity tooltip

Pointing at an **NPC, a pet, a party member or an object** (its body or its [nameplate](/basic/user-interface/nameplates)) shows the entity tooltip. It is deliberately short:

| Line | Where it comes from |
|---|---|
| **Name** | The name of the entity, in the color of a tag that asks for it |
| **Tags** | The [entity tags](/basic/types-and-groups/entity-tags) it has that want to be listed (*Show the tag in the tooltip*), the highest priority first, in the color of the first |
| **Type** | Its [entity types](/basic/types-and-groups/entity-types) (Humanoid, Undead). Hidden when it has none |
| **Level** | `Level 12`. Hidden for an object |
| **Quests** | The active [quest](/basic/events-and-quests/quests) objectives that are about it: the NPC to defeat or talk to, the chest to open, the gathering node. Each line is the quest, the objective and its progress (`Hunt for glory: Defeat 3 Wolves (1/3)`). Hidden when none is |

An entity tag can also put **art** at the top of the tooltip (*Tooltip art*), for a boss crest or a banner.

The tooltip is set in [UI Settings](/basic/game-settings/ui-settings#tooltip-scenes) (*Entity tooltip*). **Leave the setting empty and no tooltip is shown** for entities. To show it from your own part of the interface, emit `entity_tooltip_requested(target)` and `hide_tooltip(false)` like the others; the in-game interface already does it when the pointer goes over an entity or an object.

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
| `entity_tooltip_requested` | an entity or an object |
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

The tooltips share the **label settings** of `TooltipBase`, set on the root node of each scene:

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
