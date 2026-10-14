<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TrainerPanelUI

**Inherits:** [PanelUI](/advanced/user-interface/panels/panel-ui) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

The list of lessons of a trainer: what each teaches, what it costs, a Learn button, grey with the reason when a requirement is not met, "Known" when the character has all of it. It is built in code, so a game can replace it by its own panel (the TrainerInteraction gives the offers: get_offers, learn).

## Variables

| | | |
|---|---|---|
| `TrainerInteraction` | [interaction](#var-interaction) | `null` |
| `Player` | [learner](#var-learner) | `null` |

## Methods

| | |
|---|---|
| `void` | [setup_trainer_panel](#method-setup-trainer-panel)( `p_interaction: TrainerInteraction, player: Player` ) |
| `void` | [refresh](#method-refresh)() |
| `void` | [close_panel](#method-close-panel)() |

## Variable descriptions

### TrainerInteraction interaction = null {#var-interaction}

*No description yet.*

### Player learner = null {#var-learner}

*No description yet.*

## Method descriptions

### void setup_trainer_panel( p_interaction: TrainerInteraction, player: Player ) {#method-setup-trainer-panel}

Fill the panel for a trainer and the player in front of it

### void refresh() {#method-refresh}

Show the lessons again (after a purchase, or when something about the player changed)

### void close_panel() {#method-close-panel}

Signal handlers for UI elements *(from [PanelUI](/advanced/user-interface/panels/panel-ui))*

