<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CorePackageEditor

**Inherits:** `ScrollContainer`

Dynamic editor for AnimationCoreMap properties Automatically builds UI based on property structure and available animations

## Variables

| | | |
|---|---|---|
| `AnimationCoreMap` | [animation_map](#var-animation-map) |  |
| `String` | [entity_type](#var-entity-type) |  |
| `String` | [parent_entity](#var-parent-entity) | `""` |
| `Dictionary` | [property_controls](#var-property-controls) | `{}  # property_name -> Control` |
| `VBoxContainer` | [content_container](#var-content-container) |  |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `map: AnimationCoreMap, entity: String` ) |
| `void` | [refresh](#method-refresh)() |

## Signals

### property_changed( property_name: String, new_value: Variant ) {#signal-property-changed}

## Constants

- `const` **COLOR_LOCAL** = `Color(0.4, 1.0, 0.4)      # Green - exists locally`
- `const` **COLOR_PARENT** = `Color(1.0, 0.8, 0.2)     # Yellow - from parent`
- `const` **COLOR_MISSING** = `Color(1.0, 0.3, 0.3)    # Red - missing`

## Variable descriptions

### AnimationCoreMap animation_map {#var-animation-map}

*No description yet.*

### String entity_type {#var-entity-type}

*No description yet.*

### String parent_entity = "" {#var-parent-entity}

*No description yet.*

### Dictionary property_controls =   # property_name -&gt; Control {#var-property-controls}

*No description yet.*

### VBoxContainer content_container {#var-content-container}

*No description yet.*

## Method descriptions

### void setup( map: AnimationCoreMap, entity: String ) {#method-setup}

Setup the editor with animation map and entity

### void refresh() {#method-refresh}

Refresh the entire UI (call after external changes)

