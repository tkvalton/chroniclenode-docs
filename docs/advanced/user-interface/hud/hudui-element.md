<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# HUDUIElement

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

**Inherited by:** [ActionBarUI](/advanced/user-interface/hud/action-bar-ui), [CombatLog](/advanced/user-interface/hud/combat-log), [DamageMeterUI](/advanced/user-interface/hud/damage-meter-ui), [DamaterBarUI](/advanced/user-interface/hud/damater-bar-ui), [MiniMap](/advanced/user-interface/hud/mini-map), [MiniMenuUI](/advanced/user-interface/hud/mini-menu-ui), [PartyFramesUI](/advanced/user-interface/hud/party-frames-ui), [QuestTrackerUI](/advanced/user-interface/hud/quest-tracker-ui), [UnitFrame](/advanced/user-interface/hud/unit-frame)

Parent class for all HUD UI elements contains useful exports for ui scaling options. All huds elements are detected by the InGameUI class allowing ease of new HUD elements for your game. Make use of available signals and the system hub for your needs

## Properties

| | | |
|---|---|---|
| `bool` | [affected_by_ui_scaling](#prop-affected-by-ui-scaling) | `true` |
| `PivotPosition` | [pivot_type](#prop-pivot-type) | `PivotPosition.CENTER` |

## Variables

| | | |
|---|---|---|
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `p_system_hub: GameHost.SystemHub` ) |
| `void` | [apply_ui_scale](#method-apply-ui-scale)( `scale_value: float` ) |

## Signals

### ability_tooltip_requested( ability: AbilityInstance ) {#signal-ability-tooltip-requested}

### skill_node_tooltip_requested( node: SkillNode ) {#signal-skill-node-tooltip-requested}

### item_tooltip_requested( item: ItemInstance, definition: ItemDefinition, context: String, additional_data: Dictionary ) {#signal-item-tooltip-requested}

### effect_tooltip_requested( effect: EffectInstance ) {#signal-effect-tooltip-requested}

### description_tooltip_requested( object_name: String, description: String ) {#signal-description-tooltip-requested}

### hide_tooltip( force_hide: bool ) {#signal-hide-tooltip}

### message_requested( message: String ) {#signal-message-requested}

### warning_message_requested( message: String ) {#signal-warning-message-requested}

### ui_sfx_request( sound: AudioManager.UISound, volume_modifier: float ) {#signal-ui-sfx-request}

## Enumerations

### enum PivotPosition {#enum-pivotposition}

- **TOP_LEFT** = `0`
- **TOP_RIGHT** = `1`
- **BOTTOM_LEFT** = `2`
- **BOTTOM_RIGHT** = `3`
- **TOP** = `4`
- **BOTTOM** = `5`
- **LEFT** = `6`
- **RIGHT** = `7`
- **CENTER** = `8`
- **CUSTOM** = `9`

## Property descriptions

### bool affected_by_ui_scaling = true {#prop-affected-by-ui-scaling}

Whether this HUD element should be affected by UI scaling

### PivotPosition pivot_type = PivotPosition.CENTER {#prop-pivot-type}

Pivot position for scaling transformation

## Variable descriptions

### GameHost.SystemHub system_hub {#var-system-hub}

SystemHub reference

## Method descriptions

### void initialize_ui( p_system_hub: GameHost.SystemHub ) {#method-initialize-ui}

*No description yet.*

### void apply_ui_scale( scale_value: float ) {#method-apply-ui-scale}

Apply UI scale to this HUD element Called by InGameUI when settings change or HUD is initialized

