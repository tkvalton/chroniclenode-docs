<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# BehaviorGizmoPlugin

**Inherits:** `EditorNode3DGizmoPlugin`

Draws the behaviour of the selected NPC in the 3D viewport: for each schedule of its behaviour script a route with arrows (patrol points, the places it walks to), the circle it wanders in, and lines to the people and objects it talks to, uses or follows. One colour per schedule (the Behaviour tab shows the same colours); the schedule the tab has chosen is bright, the others dim; the task chosen in the tab is white. Only the selected NPC is drawn, and nothing when the tab's Show paths is off. The drawing itself is BehaviorRoute.build_lines. When the script is the NPC's own and a schedule is chosen, its points have **handles**: drag one to move it over the ground (a patrol point, the place of a move, the centre of a wander), and the small handle on the circle of a wander sets its radius. One drag is one step of Undo (BehaviorPanel keeps it).

## Variables

| | | |
|---|---|---|
| `Callable` | [state_provider](#var-state-provider) | `Callable()` |
| `BehaviorPanel` | [panel](#var-panel) | `null` |

## Variable descriptions

### Callable state_provider = Callable() {#var-state-provider}

What to draw: a Callable that takes the NPC and answers &#123;"script", "focus_schedule", "focus_task", "only_focus", "editable"&#125; (empty = draw nothing). The Behaviour tab (BehaviorPanel) is the one that answers

### BehaviorPanel panel = null {#var-panel}

The Behaviour tab: it keeps a drag as one step of Undo

