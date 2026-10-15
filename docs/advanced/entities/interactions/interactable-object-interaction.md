<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# InteractableObjectInteraction

**Inherits:** [Interaction](/advanced/entities/interactions/interaction) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [ContainerInteraction](/advanced/entities/interactions/container-interaction), [DoorInteraction](/advanced/entities/interactions/door-interaction), [GatherInteraction](/advanced/entities/interactions/gather-interaction), [LadderInteraction](/advanced/entities/interactions/ladder-interaction), [RabbitHoleInteraction](/advanced/entities/interactions/rabbit-hole-interaction), [ReadableInteraction](/advanced/entities/interactions/readable-interaction), [SwitchInteraction](/advanced/entities/interactions/switch-interaction), [TrapInteraction](/advanced/entities/interactions/trap-interaction)

Only interactable objects can use these interactions

## Methods

| | |
|---|---|
| `void` | [set_entity_reference](#method-set-entity-reference)( `new_entity: Variant, p_system_hub: GameHost.SystemHub` ) |
| `void` | [setup_for_interactable_objects](#method-setup-for-interactable-objects)( `interactable: InteractableObject` ) |
| `bool` | [can_interact](#method-can-interact)( `_player: Player` ) |

## Method descriptions

### void set_entity_reference( new_entity: Variant, p_system_hub: GameHost.SystemHub ) {#method-set-entity-reference}

Set the entity reference

### void setup_for_interactable_objects( interactable: InteractableObject ) {#method-setup-for-interactable-objects}

Sets the interaction up on its object.

### bool can_interact( _player: Player ) {#method-can-interact}

Only an interactable object can use this interaction.

