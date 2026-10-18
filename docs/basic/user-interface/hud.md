# HUD

The **HUD** (heads-up display) is the part of the interface that is always on screen while the player plays: the action bar, the party frames, the minimap, the quest tracker and so on. It is the container named `HUD` in the [in-game scene](/basic/user-interface/in-game), and **every child of it is a HUD element**.

HUD elements are **self-sufficient**. The interface does not know what an element shows; it only hands it the [system hub](/basic/user-interface/#the-system-hub) when the game starts and looks after scaling. So you can **add, remove and rearrange** them freely: delete the minimap and nothing else notices.

## The elements of the template

| Element | Class | What it shows |
|---|---|---|
| **Mini menu** | [`MiniMenuUI`](/advanced/user-interface/hud/mini-menu-ui) | A row of buttons that open the [UI panels](/basic/user-interface/ui-panels), with the key written on each. Made from the panels that have a [panel key number](/basic/game-settings/panel-keys) |
| **Action bar** | [`ActionBarUI`](/advanced/user-interface/hud/action-bar-ui) | The slots for abilities and items, the health and resource bars, buffs and debuffs, the cast bar. See [Action bar](/basic/user-interface/action-bar) |
| **Party frames** | [`PartyFramesUI`](/advanced/user-interface/hud/party-frames-ui) | One frame for each party member (up to five): health, resource, the selected member |
| **Minimap** | [`MiniMap`](/advanced/user-interface/hud/mini-map) | A top-down view of the surroundings with markers for quest givers, enemies, objects, treasure (the icons are set in [UI Settings](/basic/game-settings/ui-settings#minimap-icons)) |
| **Quest tracker** | [`QuestTrackerUI`](/advanced/user-interface/hud/quest-tracker-ui) | The tracked quests and their objectives, updated as they are done |
| **Combat log** | [`CombatLog`](/advanced/user-interface/hud/combat-log) | A log of what happens in combat, with tabs for the damage dealt and the damage taken. A rework into a **chat box** is planned: [Chat box and combat log](/planned/chat-box) |
| **Breath bar** | [`BreathBarUI`](/advanced/user-interface/hud/breath-bar-ui) | The breath of the current player while it is not full (under water), in another color while the player drowns. See [Breath](/basic/game-settings/gameplay-config#breath) |
| **Subtitles** | [`SubtitlesUI`](/advanced/user-interface/hud/subtitles-ui) | A line at the bottom of the screen with the name of the speaker and the words said, while a line is shown to it. It shows nothing when the player has **Subtitles enabled** off ([Settings](/basic/game-settings/settings)). Style it in its scene: the panel and the two labels |
| **Damage meter** | [`DamageMeterUI`](/advanced/user-interface/hud/damage-meter-ui) | Damage and healing done by each party member, as bars with a share |

The folder also holds parts that are used **inside** elements and are not placed in the HUD themselves: the buff and debuff icons (`aura`), the **cast bar** ([`CastBar`](/advanced/user-interface/hud/cast-bar), used by the action bar and the nameplates), the pool bars, and the **unit frames** (the target and the current player), which are being reworked.

## Options every element has

An element that extends [`HUDUIElement`](/advanced/user-interface/hud/hudui-element) has two options in the inspector:

| Option | What it does |
|---|---|
| **Affected by UI scaling** | The element follows the player's **UI scale** setting. Turn it off for something that must keep its size |
| **Pivot type** | The point the element grows from when it is scaled: a corner, an edge, the centre, or **Custom** (keep the pivot you set by hand) |

Without this class an element still works, but it does not scale with the setting and it is not given the signals below. A node in `HUD` that is not a [`HUDUIElement`](/advanced/user-interface/hud/hudui-element) is reported by the [UI Settings editor](/basic/game-settings/ui-settings#the-interface-at-a-glance).

## Adding your own

A HUD element is a scene whose root script **extends `HUDUIElement`**. That is the whole recipe:

1. Make a scene with a `Control` root. Give it a script: `class_name MyElement extends HUDUIElement`.
2. Add the scene as a child of the **`HUD`** node of your in-game scene. Place it with anchors like any `Control`.
3. Override `initialize_ui(p_system_hub)`, call `super`, and connect to whatever you want from the hub.

```gdscript
class_name GoldCounter extends HUDUIElement

@onready var label: Label = $Label

func initialize_ui(p_system_hub: GameHost.SystemHub) -> void:
	super.initialize_ui(p_system_hub)
	system_hub.party_manager.new_current_player.connect(_on_new_current_player)

func _on_new_current_player(player: Player) -> void:
	player.components.inventory().currency_changed.connect(_on_currency_changed)

func _on_currency_changed(currency_id: int, new_amount: int) -> void:
	label.text = str(new_amount)
```

`system_hub` is the **hub**: it holds the managers of the game (`party_manager`, `combat_manager`, `event_manager`, `faction_manager`, `world_container`, `audio_manager`, `settings_manager`, `ui_manager` ...), each with the signals you would expect. Start from the manager of the thing you want to show, and see [the system hub](/advanced/game-host) for the list.

Every HUD element also has signals it can **emit upward**, which the in-game interface relays for you, so a new element does not need to know about tooltips or messages:

| Signal | What the interface does |
|---|---|
| `item_tooltip_requested`, `ability_tooltip_requested`, `effect_tooltip_requested`, `skill_node_tooltip_requested`, `description_tooltip_requested`, `hide_tooltip` | Shows or hides the [tooltip](/basic/user-interface/tooltips) |
| `message_requested(text)`, `warning_message_requested(text)` | Shows a [message](/basic/user-interface/messages-and-popups) at the top of the screen |
| `ui_sfx_request(sound, volume)` | Plays a UI sound |

An element that has a signal `ability_drag_requested` or `item_drag_requested` (like the action bar) takes part in dragging.

::: tip A tutorial is planned
A step-by-step tutorial that builds a HUD element from nothing (a gold counter, a compass) is planned for the tutorials of this chapter.
:::

## Removing or replacing an element

Delete the node from the `HUD`, or replace it with your own scene. If you remove the **mini menu**, panels can still be opened with their keys. If you remove the **action bar**, the slots still exist on the character and keys still fire them (an action game that has no bar on screen is a valid design).

## See also

- [Action bar](/basic/user-interface/action-bar)
- [In Game](/basic/user-interface/in-game)
- [Nameplates](/basic/user-interface/nameplates) (the bars over entities are not part of the HUD)
