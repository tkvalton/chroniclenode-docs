<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MaterialLayers

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

THE MATERIAL LAYERS OF A MESH (2026-11-14, the user: an enchant can put a material on its weapon next to its particles; barkskin, ironskin, burning ... on bodies). One place decides what a MeshInstance3D shows, from what was put on it, so taking one thing off never takes the others with it: the BASE      the mesh's own material (the equipment's, set by the skeleton when the mesh is put on): material_override REPLACE       layers that replace the surface (a skin: barkskin, stone skin); the newest of the highest priority wins: material_override OVERLAY       layers drawn over the surface (burning, a glow, veins), all of them, oldest first: material_overlay, chained by next_pass the OUTLINE   the selection outline, over everything: the end of the overlay chain A layer can be BOUND to the mesh resource it was put on (an enchanted weapon): when the slot shows another mesh (a weapon swapped), the layer is gone. The layers live in metadata on the MeshInstance3D, so any code can add to or take from them. A layer can be FADING (VFXMaterial, 2026-11-14): its `fade` below 1. A replace layer that is fading is drawn over the surface (the base stays under it) until it is all there, so a skin spreads over the body and goes the same way. A material made by own_copy is the layer's own: it is chained as it is (not copied), so the fade set on it is the fade that is drawn.

## Methods

| | |
|---|---|
| `void` | [add](#method-add)( `node: MeshInstance3D, key: String, material: Material, replace: bool = false, bound_mesh: Mesh = null, priority: int = 0, fade: float = 1.0` ) *static* |
| `void` | [remove](#method-remove)( `node: MeshInstance3D, key: String` ) *static* |
| `void` | [set_fade](#method-set-fade)( `node: MeshInstance3D, key: String, fade: float` ) *static* |
| `Material` | [own_copy](#method-own-copy)( `material: Material` ) *static* |
| `bool` | [has](#method-has)( `node: MeshInstance3D, key: String` ) *static* |
| `Array[String]` | [keys](#method-keys)( `node: MeshInstance3D` ) *static* |
| `void` | [set_base](#method-set-base)( `node: MeshInstance3D, material: Material` ) *static* |
| `void` | [set_outline](#method-set-outline)( `node: MeshInstance3D, material: Material` ) *static* |
| `void` | [rebuild](#method-rebuild)( `node: MeshInstance3D` ) *static* |

## Constants

- `StringName` **LAYERS_META** = `&"vfx_material_layers"`
- `StringName` **BASE_META** = `&"vfx_material_base"`
- `StringName` **OUTLINE_META** = `&"vfx_material_outline"`
- `StringName` **OWN_META** = `&"vfx_material_own_passes"` - On a material made by own_copy: how many passes are its own (its next passes after them are links of the chain)

## Method descriptions

### void add( node: MeshInstance3D, key: String, material: Material, replace: bool = false, bound_mesh: Mesh = null, priority: int = 0, fade: float = 1.0 ) {#method-add}

Puts a layer on (or replaces the layer with the same key). `bound_mesh`: the layer is only for that mesh (null: any mesh the node shows). `fade`: how much of it is on (below 1: fading, see above).

### void remove( node: MeshInstance3D, key: String ) {#method-remove}

Takes a layer off (by its key)

### void set_fade( node: MeshInstance3D, key: String, fade: float ) {#method-set-fade}

How much of a layer is on (1: all of it); a replace layer that is fading is drawn over the surface, and replaces it again at 1. The fade drawn is set on the layer's material by its owner (VFXFade.set_layer_fade).

### Material own_copy( material: Material ) {#method-own-copy}

A copy of the material (and of its next passes) that is one layer's own, so its fade is its own and it is chained as it is

### bool has( node: MeshInstance3D, key: String ) {#method-has}

True when the node has a layer with this key (for its present mesh)

### Array[String] keys( node: MeshInstance3D ) {#method-keys}

The keys of the layers on the node, for its present mesh (oldest first)

### void set_base( node: MeshInstance3D, material: Material ) {#method-set-base}

The mesh's own material (what the equipment gives it); what was put on stays on (the layers bound to an old mesh drop off)

### void set_outline( node: MeshInstance3D, material: Material ) {#method-set-outline}

The selection outline (null: none), drawn over the layers

### void rebuild( node: MeshInstance3D ) {#method-rebuild}

Shows what the layers say: the base or the top replace layer as the override, the overlays and the outline chained as the overlay

