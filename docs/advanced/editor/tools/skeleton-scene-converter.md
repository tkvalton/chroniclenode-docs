<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SkeletonSceneConverter

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Converts existing Skeleton3D scenes into GeneralSkeleton, ModularSkeleton, or CustomSkeleton Adds essential attachment points and weapon meshes based on skeleton type

## Methods

| | |
|---|---|
| `Dictionary` | [convert_skeleton_scene](#method-convert-skeleton-scene)( `source_path: String, target_name: String, skeleton_type: SkeletonType` ) *static* |
| `Dictionary` | [get_skeleton_conversion_info](#method-get-skeleton-conversion-info)() *static* |

## Enumerations

### enum SkeletonType {#enum-skeletontype}

- **GENERAL_SKELETON** = `0`
- **MODULAR_SKELETON** = `1`
- **CUSTOM_SKELETON** = `2`

## Constants

- `String` **SKELETONS_PATH** = `"res://src/data/meshes/skeletons/"`

## Method descriptions

### Dictionary convert_skeleton_scene( source_path: String, target_name: String, skeleton_type: SkeletonType ) {#method-convert-skeleton-scene}

Convert an existing Skeleton3D scene to our skeleton system

### Dictionary get_skeleton_conversion_info() {#method-get-skeleton-conversion-info}

Get info about skeleton conversion and requirements

