<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ViewDistance

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The View distance setting of the player (Game Settings &gt; Quality), as a number everything that has a distance of its own can use: the terrain, foliage and props that hide at a distance, the distance the AI of NPCs gets simpler at (when the Gameplay Config says it follows). The player's setting is a scale (1 = as the developer set the distances, 0.5 = half as far, 1.5 = half as far again); you choose the distances, the player scales them. var far: float = ViewDistance.scaled(300.0)   # 300 m for the default scale, 150 m when the player halved it

## Methods

| | |
|---|---|
| `float` | [get_scale](#method-get-scale)() *static* |
| `float` | [scaled](#method-scaled)( `metres: float` ) *static* |

## Method descriptions

### float get_scale() {#method-get-scale}

The scale the player chose (1 when there are no settings yet).

### float scaled( metres: float ) {#method-scaled}

A distance in metres scaled by the player's setting.

