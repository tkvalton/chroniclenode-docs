<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFXEnchant

**Inherits:** [VFXLoop](/advanced/assets/vfx/vfx-loop) < [VFX](/advanced/assets/vfx/vfx) < [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

An ENCHANT on a weapon (2026-11-14). It is made along a straight blade: +Y from its origin, `authored_length` long, reaching `authored_width` from the line. When it plays it is FITTED to the enchant segment of the weapon it is on (the start, end and width set on the mesh in Entity Assets &gt; Equipment Meshes, the Enchant tool), so one effect suits a dagger, a sword, a polearm and, with start and end together (a SPOT), a hammer head: the effect then gathers round the point.

## Description

The ROLE of each child (its metadata "enchant_role") says how it is fitted: stretch   stretched along the segment and widened to its width (a sheath, an edge glow, a ribbon). Its default for meshes and holders. fill      kept round (not stretched); the emission box of its particles is made as long and as wide as the segment (motes, flames, smoke along the blade). Its default for particles. section   kept round, placed along the segment where it was along the blade (a rune at the middle; a ring that slides up and down keeps sliding, its animation is in the blade's frame). Its default for lights. ends      kept round, placed at the start or the end of the segment, whichever it was made nearer (a glow at the tip, a flare at the guard). A node that is kept round is scaled by the width (a thin dagger gets smaller motes), within 0.5 to 2 times. Animations may move the children; they must not turn or scale the kept-round ones (their basis is set by the fit).

It follows the weapon NODE it is on (a weapon slot of the skeleton), refits when the mesh in that slot changes, and hides while the slot is empty (a sheathed or unequipped weapon).

## Properties

| | | |
|---|---|---|
| `float` | [authored_length](#prop-authored-length) | `1.1` |
| `float` | [authored_width](#prop-authored-width) | `0.06` |
| `float` | [spot_size](#prop-spot-size) | `2.0` |
| `Vector2` | [round_scale_range](#prop-round-scale-range) | `Vector2(0.5, 2.0)` |

## Variables

| | | |
|---|---|---|
| `Vector3` | [segment_start](#var-segment-start) | `Vector3.ZERO` |
| `Vector3` | [segment_end](#var-segment-end) | `Vector3(0, 1.1, 0)` |
| `float` | [segment_width](#var-segment-width) | `0.06` |
| `Transform3D` | [fit_transform](#var-fit-transform) | `Transform3D.IDENTITY` |
| `Node3D` | [weapon_node](#var-weapon-node) | `null` |
| `Hand` | [hand](#var-hand) | `Hand.ITEM` |
| `Object` | [item](#var-item) | `null` |
| `Dictionary` | [segment_override](#var-segment-override) | `{}` |

## Methods

| | |
|---|---|
| `void` | [activate_vfx](#method-activate-vfx)( `selection: VFXSelection = null` ) |
| `void` | [attach_to_weapon_of](#method-attach-to-weapon-of)( `entity: Node` ) |
| `void` | [set_item](#method-set-item)( `enchanted_item: Object` ) |
| `void` | [attach_to_node](#method-attach-to-node)( `node: Node3D` ) |
| `void` | [preview_on](#method-preview-on)( `node: Node3D, start: Vector3, end: Vector3, width: float` ) |
| `void` | [stop_preview](#method-stop-preview)() |
| `void` | [fit](#method-fit)( `start: Vector3, end: Vector3, width: float` ) |
| `String` | [role_of](#method-role-of)( `node: Node` ) *static* |

## Enumerations

### enum Hand {#enum-hand}

Which weapon it goes on.

- **ITEM** = `0` - The weapon the enchanted item is (the hand its equipment slot puts it in); the main hand when that is not known.
- **MAIN_HAND** = `1` - The weapon in the main hand.
- **OFF_HAND** = `2` - The weapon in the off hand.

## Constants

- `String` **ROLE_META** = `"enchant_role"` - The metadata that names the role of a child.
- `Array[String]` **ROLES** = `["stretch", "fill", "section", "ends"]` - The roles a child can have.

## Property descriptions

*Enchant*

### float authored_length = 1.1 {#prop-authored-length}

How long the blade the effect was made along is (from its origin up +Y).

### float authored_width = 0.06 {#prop-authored-width}

How far from the blade's line the effect was made to reach.

### float spot_size = 2.0 {#prop-spot-size}

A segment shorter than this many times its width is a SPOT: the effect gathers into a ball of that length round the middle.

### Vector2 round_scale_range = Vector2(0.5, 2.0) {#prop-round-scale-range}

How much the kept-round parts may grow or shrink with the width.

## Variable descriptions

### Vector3 segment_start = Vector3.ZERO {#var-segment-start}

The segment it is fitted to (in the weapon mesh's space).

### Vector3 segment_end = Vector3(0, 1.1, 0) {#var-segment-end}

*No description yet.*

### float segment_width = 0.06 {#var-segment-width}

*No description yet.*

### Transform3D fit_transform = Transform3D.IDENTITY {#var-fit-transform}

The fit: from the blade the effect was made along to the segment (in the weapon's space). The effect is put at weapon * fit_transform.

### Node3D weapon_node = null {#var-weapon-node}

The weapon node it follows (null: it stays where it is, as in a preview).

### Hand hand = Hand.ITEM {#var-hand}

The hand it goes on (from the selection that plays it).

### Object item = null {#var-item}

The enchanted item (the owner of the effect), to find its hand.

### Dictionary segment_override =  {#var-segment-override}

A segment to fit to instead of the one on the weapon's mesh (the editor's preview).

## Method descriptions

### void activate_vfx( selection: VFXSelection = null ) {#method-activate-vfx}

Loop VFX should NOT auto-cleanup by default (manual control) *(from [VFXLoop](/advanced/assets/vfx/vfx-loop))*

### void attach_to_weapon_of( entity: Node ) {#method-attach-to-weapon-of}

Put it on the weapon of an entity (the hand says which); it is found again when the weapon changes.

### void set_item( enchanted_item: Object ) {#method-set-item}

The enchanted item: the hand of its slot is the hand the effect goes on (with Hand ITEM). The weapon is looked for again.

### void attach_to_node( node: Node3D ) {#method-attach-to-node}

Put it on a weapon node directly (a weapon held by something that is not an entity).

### void preview_on( node: Node3D, start: Vector3, end: Vector3, width: float ) {#method-preview-on}

SHOW it on a weapon node in the editor (the Enchant tool of Equipment Meshes) without playing it as the game does: it follows the node, fitted to the segment given (the values of the tool, not saved on the mesh yet). Call again when they change.

### void stop_preview() {#method-stop-preview}

Stops a preview: the effect lets go of the weapon and stands as it was made (a blade of authored_length from where it stands)

### void fit( start: Vector3, end: Vector3, width: float ) {#method-fit}

FIT the effect to a segment (in the weapon's space): the root gets the stretch, the kept-round children get it taken back.

### String role_of( node: Node ) {#method-role-of}

The role of a child: its metadata, or the default for its kind.

