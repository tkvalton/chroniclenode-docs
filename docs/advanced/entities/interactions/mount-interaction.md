<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MountInteraction

**Inherits:** [EntityInteraction](/advanced/entities/interactions/entity-interaction) < [Interaction](/advanced/entities/interactions/interaction) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Lets the player get on this NPC: a horse, a griffin, a cart, a tank, a boat. The NPC is a normal NPC (or pet) with its health and stats; while it is ridden the player steers it with the keys from a seat that steers, and its own behavior waits. What the mount is (how it moves, how it is steered, its seats and the abilities of each seat) is a Mount of the Database (Entities &gt; Mounts). The model of the NPC should have a mount seat (the skeleton has "Has mount seat" and a MountSeatRemote) or the seats name markers in the model; a seat without one uses its Seat offset.

## Description

The player takes the first seat that is free, so a second character that uses the interaction takes the next seat. The rider gets off with the dismount key, when it or the mount dies, or (if the mount says so) when it is hurt.

## Properties

| | | |
|---|---|---|
| `int` | [mount_id](#prop-mount-id) | `0` |

## Methods

| | |
|---|---|
| `bool` | [can_interact](#method-can-interact)( `player: Player` ) |
| `String` | [get_block_reason](#method-get-block-reason)( `_entity: Entity` ) |
| `void` | [start_interaction](#method-start-interaction)( `player: Player` ) |

## Property descriptions

### int mount_id = 0 {#prop-mount-id}

The mount (Entities &gt; Mounts): how this NPC moves when it is ridden, how it is steered and where riders sit

## Method descriptions

### bool can_interact( player: Player ) {#method-can-interact}

Only a creature that is alive and has a free seat can be ridden, by a player that is not riding

### String get_block_reason( _entity: Entity ) {#method-get-block-reason}

Why the interaction cannot start now ("" = it can, or it says nothing): the user is told when `can_interact` is false *(from [Interaction](/advanced/entities/interactions/interaction))*

### void start_interaction( player: Player ) {#method-start-interaction}

The player gets on

