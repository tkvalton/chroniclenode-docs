<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LocalEventGizmoPlugin

**Inherits:** `EditorNode3DGizmoPlugin`

Draws the wires of a local event in the 3D viewport: a green line with an arrow from each thing that sets the rule off to the rule, a blue line from each thing it checks, an orange line with an arrow from the rule to each thing it does something to (a place of the ground is an orange cross). A row whose target is not in the scene is a red cross at the rule. The row chosen in the tab is white. Only the chosen rule is drawn, or every rule when the tab's Show all wires is on. The lines are built by build_lines so they can be tested without an editor.

## Variables

| | | |
|---|---|---|
| `Callable` | [state_provider](#var-state-provider) | `Callable()` |

## Methods

| | |
|---|---|
| `Dictionary` | [build_lines](#method-build-lines)( `rule: LocalEvent, scene_root: Node, to_local: Callable, focus_side: int = -1, focus_index: int = -1` ) *static* |

## Variable descriptions

### Callable state_provider = Callable() {#var-state-provider}

What to draw: a Callable that takes the rule and answers &#123;"scene", "chosen", "row_side", "row_index"&#125; (empty = draw nothing). The Local Events tab answers

## Method descriptions

### Dictionary build_lines( rule: LocalEvent, scene_root: Node, to_local: Callable, focus_side: int = -1, focus_index: int = -1 ) {#method-build-lines}

The lines of a rule: material name ("when", "if", "then", "bad", "focus", "hub") -&gt; the points of its lines. `to_local` turns a world point into the space of the drawing; `focus_side` / `focus_index` are the row the tab has chosen (-1 = none)

