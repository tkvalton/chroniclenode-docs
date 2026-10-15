<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# Interaction

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [ConversationInteraction](/advanced/entities/interactions/conversation-interaction), [CraftingInteraction](/advanced/entities/interactions/crafting-interaction), [EntityInteraction](/advanced/entities/interactions/entity-interaction), [GrantQuestInteraction](/advanced/entities/interactions/grant-quest-interaction), [InteractableObjectInteraction](/advanced/entities/interactions/interactable-object-interaction), [ShowUIPanelInteraction](/advanced/entities/interactions/show-ui-panel-interaction), [SpeakInteraction](/advanced/entities/interactions/speak-interaction), [TrainerInteraction](/advanced/entities/interactions/trainer-interaction), [VendorInteraction](/advanced/entities/interactions/vendor-interaction)

Base class for all entity interactions Provides the foundation for different types of NPC interactions

## Variables

| | | |
|---|---|---|
| `float` | [interaction_distance](#var-interaction-distance) | `2.0` |
| `Variant` | [entity](#var-entity) |  |
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |

## Methods

| | |
|---|---|
| `void` | [set_entity_reference](#method-set-entity-reference)( `new_entity: Variant, p_system_hub: GameHost.SystemHub` ) |
| `void` | [setup_for_interactable_objects](#method-setup-for-interactable-objects)( `interactable: InteractableObject` ) |
| `bool` | [can_interact](#method-can-interact)( `player: Player` ) |
| `String` | [get_block_reason](#method-get-block-reason)( `_entity: Entity` ) |
| `bool` | [needs_use_time](#method-needs-use-time)( `_entity: Entity` ) |
| `void` | [start_interaction](#method-start-interaction)( `_player: Player` ) |
| `void` | [end_interaction](#method-end-interaction)() |

## Variable descriptions

### float interaction_distance = 2.0 {#var-interaction-distance}

Range needed for interaction

### Variant entity {#var-entity}

Reference to the entity this interaction belongs to

### GameHost.SystemHub system_hub {#var-system-hub}

Refrence to the combat manager

## Method descriptions

### void set_entity_reference( new_entity: Variant, p_system_hub: GameHost.SystemHub ) {#method-set-entity-reference}

Set the entity reference

### void setup_for_interactable_objects( interactable: InteractableObject ) {#method-setup-for-interactable-objects}

Sets the interaction up on its object. Nothing by default.

### bool can_interact( player: Player ) {#method-can-interact}

Check if the player can interact with this interaction

### String get_block_reason( _entity: Entity ) {#method-get-block-reason}

Why the interaction cannot start now ("" = it can, or it says nothing): the user is told when `can_interact` is false

### bool needs_use_time( _entity: Entity ) {#method-needs-use-time}

Does this use take the time the object asks for (its use time) right now? An interaction that is only a second look at something that is already there (a loot window with loot waiting) says no

### void start_interaction( _player: Player ) {#method-start-interaction}

Start the interaction with the given player

### void end_interaction() {#method-end-interaction}

End the current interaction

