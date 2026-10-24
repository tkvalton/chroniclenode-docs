<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WorldTestLauncher

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Starts the game straight in one world (no main menu): the Test World button of the Worlds editor and the one in the 3D viewport next to Terrain and Add Object both use it. It leaves a small file in user:// that the GameHost reads (and deletes) when the game starts, then plays the project's main scene.

## Methods

| | |
|---|---|
| `Error` | [launch](#method-launch)( `world_id: int` ) *static* |

## Constants

- `String` **CONFIG_PATH** = `"user://.chroniclenode_world_test.tres"`

## Method descriptions

### Error launch( world_id: int ) {#method-launch}

Plays the project's main scene so that it opens the world with this id. Returns OK, or the error that stopped it (the file could not be written).

