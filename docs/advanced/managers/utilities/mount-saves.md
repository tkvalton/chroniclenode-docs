<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MountSaves

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Puts the rides back after a game is loaded. Every entity that was riding a creature or a vehicle saved which mount, which seat and what the seat kept (see MountSession.to_save_data). When all the entities are loaded (the players and the placed and spawned NPCs) this finds each mount by its id and sits the rider on its seat again, as it was: no checks, no change of faction, nothing announced, no animation but the pose it was holding. A mount that is not found (a spawned NPC has no id to find it by, or it was removed) leaves its rider standing where it was saved, which is the seat.

## Methods

| | |
|---|---|
| `int` | [restore_all](#method-restore-all)( `system_hub: GameHost.SystemHub` ) *static* |

## Method descriptions

### int restore_all( system_hub: GameHost.SystemHub ) {#method-restore-all}

Puts all the saved rides back. Called by SaveLoadUtil once the state of the players and the world is restored

