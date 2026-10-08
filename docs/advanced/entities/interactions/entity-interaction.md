<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EntityInteraction

**Inherits:** [Interaction](/advanced/entities/interactions/interaction) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [JoinPartyInteraction](/advanced/entities/interactions/join-party-interaction), [LootInteraction](/advanced/entities/interactions/loot-interaction)

Only entities can use these interactions

## Methods

| | |
|---|---|
| `void` | [set_entity_reference](#method-set-entity-reference)( `new_entity: Variant, p_system_hub: GameHost.SystemHub` ) |
| `bool` | [can_interact](#method-can-interact)( `_player: Player` ) |

## Method descriptions

### void set_entity_reference( new_entity: Variant, p_system_hub: GameHost.SystemHub ) {#method-set-entity-reference}

Set the entity reference

### bool can_interact( _player: Player ) {#method-can-interact}

Check if the player can interact with this interaction *(from [Interaction](/advanced/entities/interactions/interaction))*

