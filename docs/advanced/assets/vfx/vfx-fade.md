<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFXFade

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

THE FADE of a visual effect (2026-11-14, the user: every effect and every material can fade in and out, as a fade or a dissolve, for a time the effect sets). How much of an effect is there (1 all of it, 0 none) is put on every node of it: meshes and particles   the instance uniforms vfx_fade and vfx_fade_style of the effect shaders (assets/vfx/vfx_shaders/fx_fade.gdshaderinc), so pooled effects that share materials fade on their own; a node drawn with another material (a StandardMaterial3D, a shader of your own) fades by its `transparency` instead lights                 their energy decals                 the alpha of their modulate VFX uses it when an effect starts (fade_in) and when it is stopped (fade_out); VFXMaterial fades a material put on a body or a weapon with the layer_fade of its own copy of the material.

## Methods

| | |
|---|---|
| `void` | [apply](#method-apply)( `root: Node, amount: float, style: int = Style.FADE` ) *static* |
| `float` | [amount_of](#method-amount-of)( `root: Node` ) *static* |
| `Tween` | [tween](#method-tween)( `root: Node, from: float, to: float, seconds: float, style: int = Style.FADE` ) *static* |
| `bool` | [drawn_by_effect_shaders](#method-drawn-by-effect-shaders)( `node: GeometryInstance3D` ) *static* |
| `bool` | [material_has_fade](#method-material-has-fade)( `material: Material` ) *static* |
| `bool` | [material_has_layer_fade](#method-material-has-layer-fade)( `material: Material` ) *static* |
| `void` | [set_layer_fade](#method-set-layer-fade)( `material: Material, amount: float, style: int` ) *static* |

## Enumerations

### enum Style {#enum-style}

How an effect fades

- **FADE** = `0` - The whole effect gets fainter (a solid mesh: a fine dither).
- **DISSOLVE** = `1` - The effect breaks up in patches that grow, with a soft edge (a solid mesh: cut in patches).

## Constants

- `StringName` **BASE_META** = `&"vfx_fade_base"` - The meta where a light keeps its energy and a decal its modulate, as they were made
- `StringName` **LAYER_PARAM** = `&"layer_fade"` - The shader parameter of a material's own fade (VFXMaterial), and of its style
- `StringName` **LAYER_STYLE_PARAM** = `&"layer_fade_style"`
- `Dictionary` **DEFAULTS** = `{` - The fade of each kind of effect when its own is -1: [in, out] in seconds (a loop or a beam with an end animation fades out over that animation instead)

## Method descriptions

### void apply( root: Node, amount: float, style: int = Style.FADE ) {#method-apply}

Puts the fade on the effect `root` and everything under it (1: as made, 0: gone)

### float amount_of( root: Node ) {#method-amount-of}

The fade on the effect (1 when it has none): read from its first mesh or particle node

### Tween tween( root: Node, from: float, to: float, seconds: float, style: int = Style.FADE ) {#method-tween}

Fades the effect from `from` to `to` over `seconds` (a tween of the node `root`, which it stops when the node goes); null when there is nothing to fade (no time: set at once)

### bool drawn_by_effect_shaders( node: GeometryInstance3D ) {#method-drawn-by-effect-shaders}

True when every material that draws the node is an effect shader (it has the fade; asked each time: a node can be given another mesh, the projectile mesh of an item)

### bool material_has_fade( material: Material ) {#method-material-has-fade}

True when the material is drawn by a shader with the fade (fx_fade.gdshaderinc, or a shader that includes one of the effect includes, which have it)

### bool material_has_layer_fade( material: Material ) {#method-material-has-layer-fade}

True when the material has its own fade (a material made to be put on a body: layer_fade)

### void set_layer_fade( material: Material, amount: float, style: int ) {#method-set-layer-fade}

Sets the material's own fade on it and on its next passes (the passes that have one)

