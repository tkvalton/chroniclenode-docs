<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MeshDatabaseEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

## Variables

| | | |
|---|---|---|
| `Vector3Control` | [position_offset_control](#var-position-offset-control) |  |
| `Vector3Control` | [rotation_offset_control](#var-rotation-offset-control) |  |
| `Vector3Control` | [enchant_vfx_control](#var-enchant-vfx-control) |  |
| `Vector3Control` | [projectile_spawn_control](#var-projectile-spawn-control) |  |
| `Dictionary` | [equipment_data](#var-equipment-data) | `{}` |
| `Dictionary` | [materials_data](#var-materials-data) | `{}` |
| `Dictionary` | [expanded_categories](#var-expanded-categories) | `{}` |
| `String` | [selected_mesh_category](#var-selected-mesh-category) | `""` |
| `String` | [selected_mesh_type](#var-selected-mesh-type) | `""` |
| `String` | [selected_mesh_tag](#var-selected-mesh-tag) | `""  # Tag for body parts/attachments` |
| `String` | [selected_mesh_name](#var-selected-mesh-name) | `""` |
| `String` | [selected_mesh_path](#var-selected-mesh-path) | `""` |
| `String` | [selected_mesh_skin_path](#var-selected-mesh-skin-path) | `""  # Path to skin file if detected` |
| `Mesh` | [current_mesh](#var-current-mesh) | `null` |
| `int` | [current_surface_index](#var-current-surface-index) | `0` |
| `Dictionary` | [surface_constraints](#var-surface-constraints) | `{}  # surface_index -> {allowed: [], preferred: ""}` |
| `String` | [current_tree_filter](#var-current-tree-filter) | `"all"  # "all", "weapons", or a tag name` |
| `FileDialog` | [file_dialog](#var-file-dialog) |  |
| `Dictionary` | [current_import_context](#var-current-import-context) | `{}` |

## Methods

| | |
|---|---|
| `void` | [cleanup_remove_global_metadata](#method-cleanup-remove-global-metadata)() |
| `void` | [refresh_database](#method-refresh-database)() |
| `String` | [get_selected_mesh_name](#method-get-selected-mesh-name)() |
| `String` | [get_selected_mesh_path](#method-get-selected-mesh-path)() |
| `Mesh` | [get_selected_mesh](#method-get-selected-mesh)() |
| `int` | [get_current_surface_index](#method-get-current-surface-index)() |
| `int` | [get_surface_count](#method-get-surface-count)() |

## Variable descriptions

### Vector3Control position_offset_control {#var-position-offset-control}

*No description yet.*

### Vector3Control rotation_offset_control {#var-rotation-offset-control}

*No description yet.*

### Vector3Control enchant_vfx_control {#var-enchant-vfx-control}

*No description yet.*

### Vector3Control projectile_spawn_control {#var-projectile-spawn-control}

*No description yet.*

### Dictionary equipment_data =  {#var-equipment-data}

*No description yet.*

### Dictionary materials_data =  {#var-materials-data}

*No description yet.*

### Dictionary expanded_categories =  {#var-expanded-categories}

*No description yet.*

### String selected_mesh_category = "" {#var-selected-mesh-category}

*No description yet.*

### String selected_mesh_type = "" {#var-selected-mesh-type}

*No description yet.*

### String selected_mesh_tag = ""  # Tag for body parts/attachments {#var-selected-mesh-tag}

*No description yet.*

### String selected_mesh_name = "" {#var-selected-mesh-name}

*No description yet.*

### String selected_mesh_path = "" {#var-selected-mesh-path}

*No description yet.*

### String selected_mesh_skin_path = ""  # Path to skin file if detected {#var-selected-mesh-skin-path}

*No description yet.*

### Mesh current_mesh = null {#var-current-mesh}

*No description yet.*

### int current_surface_index = 0 {#var-current-surface-index}

*No description yet.*

### Dictionary surface_constraints =   # surface_index -&gt; allowed: [], preferred: "" {#var-surface-constraints}

*No description yet.*

### String current_tree_filter = "all"  # "all", "weapons", or a tag name {#var-current-tree-filter}

*No description yet.*

### FileDialog file_dialog {#var-file-dialog}

*No description yet.*

### Dictionary current_import_context =  {#var-current-import-context}

*No description yet.*

## Method descriptions

### void cleanup_remove_global_metadata() {#method-cleanup-remove-global-metadata}

*No description yet.*

### void refresh_database() {#method-refresh-database}

*No description yet.*

### String get_selected_mesh_name() {#method-get-selected-mesh-name}

*No description yet.*

### String get_selected_mesh_path() {#method-get-selected-mesh-path}

*No description yet.*

### Mesh get_selected_mesh() {#method-get-selected-mesh}

*No description yet.*

### int get_current_surface_index() {#method-get-current-surface-index}

*No description yet.*

### int get_surface_count() {#method-get-surface-count}

*No description yet.*

