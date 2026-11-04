<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SetMusicStateCombatAction

**Inherits:** [CombatAction](/advanced/behaviors/combat-actions/combat-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Changes the state of the Dynamic Music that plays during a fight: a boss phase starts and the music goes to its Phase 2 state. Put it in the enter actions of a boss phase. The music is the combat music of the encounter (Dynamic Music), so it ends with the fight. See docs: Audio &gt; Dynamic Music.

## Properties

| | | |
|---|---|---|
| `String` | [state_name](#prop-state-name) | `""` |

## Property descriptions

### String state_name = "" {#prop-state-name}

The name of the state to go to (a state of the Dynamic Music that plays)

