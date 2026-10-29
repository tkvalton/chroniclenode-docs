<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PlacedPickGizmoPlugin

**Inherits:** `EditorNode3DGizmoPlugin`

A pick shape for what is placed in the 3D editor, so that a click on an NPC, an object or a spawner always selects it.

## Description

The viewport selects a node by the shapes of the gizmos, and the preview model of an NPC (and the stand-in of a spawner) is a child that the scene does not own, which the viewport can never select: a click on the model found nothing at all. So each placed NPC, object and spawner gets an invisible box around its model (never smaller than a person-sized minimum), and the model itself takes no part in the picking (EditorPickHelper). The box draws nothing: it only takes part in the picking.

## Methods

| | |
|---|---|
| `AABB` | [pick_box](#method-pick-box)( `node: Node3D` ) *static* |

## Constants

- `float` **MIN_WIDTH** = `0.7`
- `float` **MIN_HEIGHT** = `1.2`

## Method descriptions

### AABB pick_box( node: Node3D ) {#method-pick-box}

The box of what stands there, in the space of the node: the meshes of its preview model, or a person-sized default (a spawner: the size of its stand-in)

