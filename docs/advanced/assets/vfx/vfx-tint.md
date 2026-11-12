<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFXTint

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The TINT of a visual effect: one colour put on a whole effect (every mesh and particle node of it, and its lights), so a neutral (white, grey, steel) effect becomes any colour and an effect that was made in a colour can be given another one. It is used by the effect (VFX.activate_vfx: the tint of the selection that plays it, or the tint the scene was saved with) and by the preview of the VFX tab (the colour button). The tint is an INSTANCE uniform of the effect shaders (assets/vfx/vfx_shaders/fx_tint.gdshaderinc: vfx_tint and vfx_tint_mode), so effects that are pooled and share their materials can be a different colour each time. A shader that does not have the uniform (a shader you wrote yourself) is not changed; lights are tinted too.

## Methods

| | |
|---|---|
| `void` | [apply](#method-apply)( `root: Node, color: Color, strength: float, mode: int = Mode.MULTIPLY` ) *static* |
| `void` | [clear](#method-clear)( `root: Node` ) *static* |

## Enumerations

### enum Mode {#enum-mode}

How the tint is put on: multiply the colours of the effect (for neutral effects), or keep the brightness and replace the colour (for effects that have their own colours).

- **MULTIPLY** = `0` - The colours of the effect are multiplied by the tint. A white effect becomes the colour.
- **COLORIZE** = `1` - The brightness of the effect is kept, the colour is replaced by the tint. A fire becomes a blue fire.

## Constants

- `String` **LIGHT_BASE_META** = `"vfx_tint_light_base"` - The name of the meta where a light keeps the colour it was made with

## Method descriptions

### void apply( root: Node, color: Color, strength: float, mode: int = Mode.MULTIPLY ) {#method-apply}

Puts the tint on the effect `root` and everything under it. `strength` 0 takes the tint off (the effect is as it was made), 1 is the full tint; between them mixes the two.

### void clear( root: Node ) {#method-clear}

Takes the tint off the effect (the same as a tint of strength 0)

