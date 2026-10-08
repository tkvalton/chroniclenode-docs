<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GrantQuestInteraction

**Inherits:** [Interaction](/advanced/entities/interactions/interaction) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Interaction that instantly activates a Quest if player meets requirements

## Properties

| | | |
|---|---|---|
| `int` | [quest_id](#prop-quest-id) | `0` |
| `bool` | [disable_after_grant](#prop-disable-after-grant) | `true` |
| `bool` | [hide_if_quest_started](#prop-hide-if-quest-started) | `true` |
| `String` | [custom_interaction_name](#prop-custom-interaction-name) | `""` |

## Methods

| | |
|---|---|
| `bool` | [can_interact](#method-can-interact)( `player: Player` ) |
| `void` | [start_interaction](#method-start-interaction)( `player: Player` ) |
| `String` | [get_interaction_name](#method-get-interaction-name)() |
| `Dictionary` | [save_state](#method-save-state)() |
| `void` | [load_state](#method-load-state)( `state: Dictionary` ) |

## Property descriptions

### int quest_id = 0 {#prop-quest-id}

The quest to grant when interacted with

### bool disable_after_grant = true {#prop-disable-after-grant}

Whether to disable this interaction after quest is granted

### bool hide_if_quest_started = true {#prop-hide-if-quest-started}

Whether to hide this interaction if quest is already active or completed

### String custom_interaction_name = "" {#prop-custom-interaction-name}

Custom interaction name (if empty, uses quest display name)

## Method descriptions

### bool can_interact( player: Player ) {#method-can-interact}

Check if the player can interact with this interaction *(from [Interaction](/advanced/entities/interactions/interaction))*

### void start_interaction( player: Player ) {#method-start-interaction}

Start the interaction with the given player *(from [Interaction](/advanced/entities/interactions/interaction))*

### String get_interaction_name() {#method-get-interaction-name}

*No description yet.*

### Dictionary save_state() {#method-save-state}

What is saved of this interaction

### void load_state( state: Dictionary ) {#method-load-state}

*No description yet.*

