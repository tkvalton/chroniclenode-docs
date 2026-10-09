<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LevelGapEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

The editor of "Level Gap Mode" in the Gameplay Config (Hit Rules): how the levels of the attacker and the target change the chance to hit. The mode is a choice of four; each shows only its own fields (points per level, a table of gaps, or a formula). It writes straight to the config and tells the Gameplay Config editor to save. A small table at the bottom shows what the setting does to the chance for a few gaps, so it can be checked without playing.

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `config: GameplayConfig` ) |

## Signals

### changed() {#signal-changed}

## Constants

- `Array[String]` **MODE_NAMES** = `[`

## Method descriptions

### void setup( config: GameplayConfig ) {#method-setup}

*No description yet.*

