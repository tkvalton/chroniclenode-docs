<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AssetThumbnails

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The pictures of the files of an Assets library (meshes, scenes), kept as PNG files in a folder of their own (named by a hash of the path of the file) and in memory. The editor makes them: resources and meshes by its own previewer, scenes drawn here in a viewport added to a node of the editor, from a corner above, lit by a sun, because the previewer gives nothing for most scenes. Connect to `made` to hear each picture arrive. var pictures := AssetThumbnails.new("res://src/data/foliage/.thumbnails/") pictures.request(paths, false, self, func(path): return path.get_extension() == "tscn")

## Variables

| | | |
|---|---|---|
| `String` | [folder](#var-folder) |  |
| `Dictionary` | [cache](#var-cache) | `{}` |

## Methods

| | |
|---|---|
| `String` | [thumbnail_path](#method-thumbnail-path)( `path: String` ) |
| `Texture2D` | [get_thumbnail](#method-get-thumbnail)( `path: String` ) |
| `bool` | [has_thumbnail](#method-has-thumbnail)( `path: String` ) |
| `void` | [store](#method-store)( `path: String, image: Image` ) |
| `void` | [clear](#method-clear)( `clear_disk: bool = false` ) |
| `void` | [on_preview](#method-on-preview)( `path: String, preview: Texture2D, _thumbnail: Texture2D, _userdata: Variant` ) |
| `int` | [request](#method-request)( `paths: Array[String], force: bool = false, host: Node = null, is_scene: Callable = Callable(), warmup_frames: int = 0` ) |
| `Image` | [render_scene](#method-render-scene)( `host: Node, path: String, size: int = 256, warmup_frames: int = 0` ) *static* |

## Signals

### made( path: String ) {#signal-made}

A picture was made (or loaded) for this file.

## Variable descriptions

### String folder {#var-folder}

The folder the pictures are kept in (res://, ends with a slash).

### Dictionary cache =  {#var-cache}

*No description yet.*

## Method descriptions

### String thumbnail_path( path: String ) {#method-thumbnail-path}

Where the picture of a file is kept.

### Texture2D get_thumbnail( path: String ) {#method-get-thumbnail}

The picture of a file (null while it has not been made).

### bool has_thumbnail( path: String ) {#method-has-thumbnail}

Has the picture of this file been made.

### void store( path: String, image: Image ) {#method-store}

Keeps the picture of a file (on disk and in memory) and tells the listeners.

### void clear( clear_disk: bool = false ) {#method-clear}

Forgets the pictures that are kept in memory (and on disk when asked).

### void on_preview( path: String, preview: Texture2D, _thumbnail: Texture2D, _userdata: Variant ) {#method-on-preview}

Receives the pictures of the editor's previewer.

### int request( paths: Array[String], force: bool = false, host: Node = null, is_scene: Callable = Callable(), warmup_frames: int = 0 ) {#method-request}

Asks the editor for the pictures of these files (the ones that have none, or all of them when `force` is set). They arrive one by one (`made`). Files for which `is_scene` says true are drawn here in a viewport added to `host` (`warmup_frames` frames pass before the picture is taken); the others go to the editor's previewer. Returns how many were asked for. Only in the editor.

### Image render_scene( host: Node, path: String, size: int = 256, warmup_frames: int = 0 ) {#method-render-scene}

Draws a scene from a corner above, lit by a sun, on a clear background: an Image (null when the scene cannot be drawn).

