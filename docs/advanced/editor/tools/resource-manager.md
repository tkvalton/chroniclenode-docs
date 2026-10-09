<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ResourceManager

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

THE resource manager - handles ALL resource types and operations Live editing - no save logic needed

## Variables

| | | |
|---|---|---|
| `String` | [resource_type](#var-resource-type) | `"Universal"` |
| `String` | [file_extension](#var-file-extension) | `".tres"` |
| `String` | [default_resource_path](#var-default-resource-path) | `"res://src/data/"` |
| `Dictionary` | [open_buffers](#var-open-buffers) | `{}  # {path: {resource: Resource}}` |
| `int` | [max_recent_files](#var-max-recent-files) | `10` |
| `String` | [recent_files_setting_key](#var-recent-files-setting-key) | `"universal_recent_files"` |

## Methods

| | |
|---|---|
| `Resource` | [create_resource](#method-create-resource)( `type: String, name: String, extra_params: Dictionary = {}` ) |
| `bool` | [delete_resource](#method-delete-resource)( `type: String, identifier` ) |
| `Resource` | [get_resource](#method-get-resource)( `type: String, identifier` ) |
| `Array` | [get_all_resources](#method-get-all-resources)( `type: String` ) |
| `void` | [handle_file_moved](#method-handle-file-moved)( `old_path: String, new_path: String` ) |
| `void` | [handle_file_deleted](#method-handle-file-deleted)( `path: String` ) |

## Signals

### resource_created( path: String, resource: Resource ) {#signal-resource-created}

### resource_opened( path: String, resource: Resource ) {#signal-resource-opened}

### resource_deleted( path: String ) {#signal-resource-deleted}

### resource_moved( old_path: String, new_path: String ) {#signal-resource-moved}

## Variable descriptions

### String resource_type = "Universal" {#var-resource-type}

*No description yet.*

### String file_extension = ".tres" {#var-file-extension}

*No description yet.*

### String default_resource_path = "res://src/data/" {#var-default-resource-path}

*No description yet.*

### Dictionary open_buffers =   # path: resource: Resource {#var-open-buffers}

*No description yet.*

### int max_recent_files = 10 {#var-max-recent-files}

*No description yet.*

### String recent_files_setting_key = "universal_recent_files" {#var-recent-files-setting-key}

*No description yet.*

## Method descriptions

### Resource create_resource( type: String, name: String, extra_params: Dictionary = &#123;&#125; ) {#method-create-resource}

*No description yet.*

### bool delete_resource( type: String, identifier ) {#method-delete-resource}

*No description yet.*

### Resource get_resource( type: String, identifier ) {#method-get-resource}

*No description yet.*

### Array get_all_resources( type: String ) {#method-get-all-resources}

*No description yet.*

### void handle_file_moved( old_path: String, new_path: String ) {#method-handle-file-moved}

*No description yet.*

### void handle_file_deleted( path: String ) {#method-handle-file-deleted}

*No description yet.*

