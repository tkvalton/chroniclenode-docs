<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MountCrew

**Inherits:** [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

The AI crew of a vehicle: it keeps a ride (a MountSession with no rider) on every seat that has an AI that acts when the seat is empty, so a tank drives and shoots by itself without any NPC sitting in it. It watches the mount: a crew works while the mount lives and no player rides it. When a player (or a companion) sits in the mount the crew steps back; when they are all gone it returns. A seat that somebody sits in is that rider's, whether or not the seat has an AI.

## Description

It is made for an NPC whose Mount interaction has such seats (see Npc.setup_mount_crew).

## Variables

| | | |
|---|---|---|
| `Entity` | [mount](#var-mount) |  |
| `MountDefinition` | [definition](#var-definition) |  |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `p_mount: Entity, p_definition: MountDefinition` ) |

## Constants

- `float` **CHECK_INTERVAL** = `0.25` - How often (seconds) the crew looks at who sits where

## Variable descriptions

### Entity mount {#var-mount}

*No description yet.*

### MountDefinition definition {#var-definition}

*No description yet.*

## Method descriptions

### void setup( p_mount: Entity, p_definition: MountDefinition ) {#method-setup}

*No description yet.*

