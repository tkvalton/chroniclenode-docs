<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MeshCatalog

**Inherits:** [GridCatalog](/advanced/editor/catalogs/grid-catalog) < `ConfirmationDialog`

## Variables

| | | |
|---|---|---|
| `DatabaseMeshes.MeshType` | [current_mesh_type](#var-current-mesh-type) | `DatabaseMeshes.MeshType.WEAPON` |
| `String` | [current_mesh_category](#var-current-mesh-category) | `""` |
| `bool` | [show_all_categories](#var-show-all-categories) | `false  # Flag for two-mode system` |

## Methods

| | |
|---|---|
| `void` | [show_catalog](#method-show-catalog)( `mesh_type: DatabaseMeshes.MeshType, category: String` ) |
| `void` | [show_all_categories_for_type](#method-show-all-categories-for-type)( `mesh_type: DatabaseMeshes.MeshType` ) |
| `void` | [open](#method-open)( `mesh_type: DatabaseMeshes.MeshType, category: String` ) |
| `void` | [open_for_weapons](#method-open-for-weapons)( `category: String` ) |
| `void` | [open_for_body_parts](#method-open-for-body-parts)( `category: String` ) |
| `void` | [open_for_attachments](#method-open-for-attachments)( `category: String` ) |
| `void` | [open_all_weapons](#method-open-all-weapons)() |
| `void` | [open_all_body_parts](#method-open-all-body-parts)() |
| `void` | [open_all_attachments](#method-open-all-attachments)() |
| `Array[String]` | [get_available_categories](#method-get-available-categories)( `mesh_type: DatabaseMeshes.MeshType` ) |
| `void` | [filter_by_category](#method-filter-by-category)( `category: String` ) |
| `void` | [search_meshes](#method-search-meshes)( `search_text: String` ) |
| `Dictionary` | [get_current_context](#method-get-current-context)() |
| `bool` | [is_showing_all_categories](#method-is-showing-all-categories)() |
| `DatabaseMeshes.MeshType` | [get_current_mesh_type](#method-get-current-mesh-type)() |
| `String` | [get_current_category](#method-get-current-category)() |
| `void` | [refresh](#method-refresh)() |
| `int` | [get_displayed_mesh_count](#method-get-displayed-mesh-count)() |
| `int` | [get_total_mesh_count](#method-get-total-mesh-count)() |

## Signals

### selection_made( mesh_path: String ) {#signal-selection-made}

## Variable descriptions

### DatabaseMeshes.MeshType current_mesh_type = DatabaseMeshes.MeshType.WEAPON {#var-current-mesh-type}

*No description yet.*

### String current_mesh_category = "" {#var-current-mesh-category}

*No description yet.*

### bool show_all_categories = false  # Flag for two-mode system {#var-show-all-categories}

*No description yet.*

## Method descriptions

### void show_catalog( mesh_type: DatabaseMeshes.MeshType, category: String ) {#method-show-catalog}

Mode 1: Show only meshes from ONE specific category

### void show_all_categories_for_type( mesh_type: DatabaseMeshes.MeshType ) {#method-show-all-categories-for-type}

Mode 2: Show ALL meshes from ALL categories of a mesh type

### void open( mesh_type: DatabaseMeshes.MeshType, category: String ) {#method-open}

Show the mesh catalog for specific type and category

### void open_for_weapons( category: String ) {#method-open-for-weapons}

Convenience methods for specific categories

### void open_for_body_parts( category: String ) {#method-open-for-body-parts}

*No description yet.*

### void open_for_attachments( category: String ) {#method-open-for-attachments}

*No description yet.*

### void open_all_weapons() {#method-open-all-weapons}

All categories convenience methods

### void open_all_body_parts() {#method-open-all-body-parts}

*No description yet.*

### void open_all_attachments() {#method-open-all-attachments}

*No description yet.*

### Array[String] get_available_categories( mesh_type: DatabaseMeshes.MeshType ) {#method-get-available-categories}

Get all available categories for a mesh type

### void filter_by_category( category: String ) {#method-filter-by-category}

Filter meshes by specific category

### void search_meshes( search_text: String ) {#method-search-meshes}

Search for meshes by text

### Dictionary get_current_context() {#method-get-current-context}

Get the current mesh type and category

### bool is_showing_all_categories() {#method-is-showing-all-categories}

Check if currently in all categories mode

### DatabaseMeshes.MeshType get_current_mesh_type() {#method-get-current-mesh-type}

Get current mesh type

### String get_current_category() {#method-get-current-category}

Get current category (empty if showing all categories)

### void refresh() {#method-refresh}

Refresh the catalog data (useful after database changes)

### int get_displayed_mesh_count() {#method-get-displayed-mesh-count}

Get count of currently displayed meshes

### int get_total_mesh_count() {#method-get-total-mesh-count}

Get total mesh count for current context

