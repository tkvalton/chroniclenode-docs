<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DiceRollPanel

**Inherits:** `MarginContainer`

UI panel for displaying dice rolls with animation and player interaction

## Properties

| | | |
|---|---|---|
| `float` | [roll_animation_duration](#prop-roll-animation-duration) | `2.0` |
| `float` | [roll_animation_update_interval](#prop-roll-animation-update-interval) | `0.1` |

## Variables

| | | |
|---|---|---|
| `ConversationDiceRoll` | [current_dice_roll](#var-current-dice-roll) | `null` |
| `Entity` | [current_player](#var-current-player) | `null` |
| `bool` | [is_rolling](#var-is-rolling) | `false` |
| `Dictionary` | [roll_result](#var-roll-result) | `{}` |
| `bool` | [has_rolled](#var-has-rolled) | `false` |
| `Timer` | [roll_timer](#var-roll-timer) | `null` |
| `float` | [animation_elapsed](#var-animation-elapsed) | `0.0` |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `_system_hub: GameHost.SystemHub` ) |
| `void` | [show_dice_roll](#method-show-dice-roll)( `dice_roll: ConversationDiceRoll, player: Entity` ) |
| `void` | [close_panel](#method-close-panel)() |

## Signals

### roll_completed( roll_result: Dictionary ) {#signal-roll-completed}

### panel_closed() {#signal-panel-closed}

## Property descriptions

### float roll_animation_duration = 2.0 {#prop-roll-animation-duration}

Duration of the roll animation in seconds

### float roll_animation_update_interval = 0.1 {#prop-roll-animation-update-interval}

How often to update the display during animation (in seconds)

## Variable descriptions

### ConversationDiceRoll current_dice_roll = null {#var-current-dice-roll}

*No description yet.*

### Entity current_player = null {#var-current-player}

*No description yet.*

### bool is_rolling = false {#var-is-rolling}

*No description yet.*

### Dictionary roll_result =  {#var-roll-result}

*No description yet.*

### bool has_rolled = false {#var-has-rolled}

*No description yet.*

### Timer roll_timer = null {#var-roll-timer}

*No description yet.*

### float animation_elapsed = 0.0 {#var-animation-elapsed}

*No description yet.*

## Method descriptions

### void initialize_ui( _system_hub: GameHost.SystemHub ) {#method-initialize-ui}

*No description yet.*

### void show_dice_roll( dice_roll: ConversationDiceRoll, player: Entity ) {#method-show-dice-roll}

Show the panel and prepare for dice roll

### void close_panel() {#method-close-panel}

Force close the panel

