<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFXProjectileMesh

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The PROJECTILE MESH of a projectile effect: an effect that flies (an arrow, a spear, a thrown axe or knife) has a node called "ProjectileMesh" (a MeshInstance3D) with the mesh it was made with. A VFX selection of the loop kind can say where the mesh of the projectile comes from instead (VFXSelectionLoop.ProjectileMeshSource): the mesh of an item, the weapon the user holds, or the ammo the ability spends (an arrow for a bow). The mesh is put in that node, turned so its tip points along +Y (the way the effects fly) with the rotation the item gives (ItemDefinition.projectile_rotation), scaled to the length of the mesh the effect was made with (or left at its own size) and centred on the node, so the layers of the effect (the glow round it, the trail behind it) stay where they are. A pooled effect is given its mesh again every time it plays: without a source it goes back to the mesh it was made with. The node keeps the length of the mesh the effect was made with in the meta `projectile_slot_length` (metres); the generators of the library write it.

## Methods

| | |
|---|---|
| `MeshInstance3D` | [find_slot](#method-find-slot)( `root: Node` ) *static* |
| `bool` | [apply](#method-apply)( `root: Node, selection: VFXSelection, projectile: Variant = null` ) *static* |
| `Dictionary` | [resolve](#method-resolve)( `selection: VFXSelectionLoop, originator: Variant, projectile: Variant = null` ) *static* |
| `void` | [fit](#method-fit)( `slot: MeshInstance3D, mesh: Mesh, rotation: Vector3, fit_length: bool, keep_materials: bool, materials: Array = []` ) *static* |
| `float` | [slot_length](#method-slot-length)( `slot: MeshInstance3D` ) *static* |

## Constants

- `String` **SLOT_NAME** = `"ProjectileMesh"` - The name of the node that holds the projectile mesh
- `String` **SLOT_LENGTH_META** = `"projectile_slot_length"` - The meta of the slot with the length (along +Y, metres) of the mesh the effect was made with
- `String` **DEFAULT_META** = `"projectile_slot_default"` - Where the slot keeps what the effect was made with (to put back)

## Method descriptions

### MeshInstance3D find_slot( root: Node ) {#method-find-slot}

The node of the effect that holds the projectile mesh (null: the effect has none)

### bool apply( root: Node, selection: VFXSelection, projectile: Variant = null ) {#method-apply}

Puts the mesh the selection asks for in the projectile node of the effect (or puts back the mesh the effect was made with). `projectile` is what the effect is attached to (the projectile of the ability). True when the effect has a projectile node and it now shows a mesh from the source.

### Dictionary resolve( selection: VFXSelectionLoop, originator: Variant, projectile: Variant = null ) {#method-resolve}

What the selection asks for: &#123;"mesh": Mesh, "rotation": Vector3 (degrees), "materials": Array&#125; or &#123;&#125; when the source has no mesh to give

### void fit( slot: MeshInstance3D, mesh: Mesh, rotation: Vector3, fit_length: bool, keep_materials: bool, materials: Array = [] ) {#method-fit}

Puts `mesh` in the node: turned by `rotation` (degrees, the tip to +Y), scaled to the length of the slot (`fit_length`) or at its own size, centred, with its own materials or the ones of the effect

### float slot_length( slot: MeshInstance3D ) {#method-slot-length}

The length (metres, along +Y) of the mesh the effect was made with: the meta, or the size of that mesh

