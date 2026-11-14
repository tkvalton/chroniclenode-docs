<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SkeletonsEditor

**Inherits:** [SceneListEditor](/advanced/editor/assets/scene-list-editor) < `HSplitContainer`

THE SKELETONS TAB (Entity Assets &gt; Skeletons; 2026-11-14, Model Scenes split in two): the skeleton scenes of entities (res://src/data/meshes/skeletons/) as a list, and the POINTS of the selected one set with the Points tool: the skeleton in a large 3D view playing an animation you choose, its points as dots, the move gizmo on the picked one (ScenePointsTools, SkeletonPoints). The points are where effects, shots and the eyes of an entity are (Head, Chest, the hands, Overhead, Feet ...) and where weapons are held (the grips); each is on a bone. See docs: Entity Assets &gt; Skeletons. Create Skeleton converts a scene with a Skeleton3D (SkeletonSceneConverter): it gets the points too.

## Variables

| | | |
|---|---|---|
| `Label` | [type_label](#var-type-label) | `null` |
| `ScenePointsTools` | [points_tools](#var-points-tools) | `null` |

## Variable descriptions

### Label type_label = null {#var-type-label}

*No description yet.*

### ScenePointsTools points_tools = null {#var-points-tools}

*No description yet.*

