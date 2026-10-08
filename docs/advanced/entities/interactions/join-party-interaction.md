<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# JoinPartyInteraction

**Inherits:** [EntityInteraction](/advanced/entities/interactions/entity-interaction) < [Interaction](/advanced/entities/interactions/interaction) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Interaction grants a new Player to the party, interactee will be a NPC/Object So we will create a Player &amp; optionally disable/hide the Interactee.

## Properties

| | | |
|---|---|---|
| `int` | [character_definition_id](#prop-character-definition-id) | `0` |

## Methods

| | |
|---|---|
| `void` | [start_interaction](#method-start-interaction)( `_player: Player` ) |

## Property descriptions

### int character_definition_id = 0 {#prop-character-definition-id}

Character definition ID to create and add as a player

## Method descriptions

### void start_interaction( _player: Player ) {#method-start-interaction}

Start the interaction with the given player

