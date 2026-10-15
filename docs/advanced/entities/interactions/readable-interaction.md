<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ReadableInteraction

**Inherits:** [InteractableObjectInteraction](/advanced/entities/interactions/interactable-object-interaction) < [Interaction](/advanced/entities/interactions/interaction) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Readable interaction - displays multi-page text content in UI panel Used for signs, books, plaques, notes, etc.

## Properties

| | | |
|---|---|---|
| `Array[String]` | [pages_text](#prop-pages-text) | `[]` |
| `String` | [readable_title](#prop-readable-title) | `""` |
| `Texture2D` | [background_texture](#prop-background-texture) |  |

## Methods

| | |
|---|---|
| `void` | [setup_for_interactable_objects](#method-setup-for-interactable-objects)( `interactable: InteractableObject` ) |
| `bool` | [can_interact](#method-can-interact)( `player: Player` ) |
| `void` | [start_interaction](#method-start-interaction)( `player: Player` ) |
| `void` | [end_interaction](#method-end-interaction)() |
| `String` | [get_interaction_prompt](#method-get-interaction-prompt)() |
| `void` | [add_page](#method-add-page)( `page_text: String` ) |
| `bool` | [remove_page](#method-remove-page)( `index: int` ) |
| `void` | [clear_pages](#method-clear-pages)() |
| `int` | [get_page_count](#method-get-page-count)() |
| `String` | [get_page_text](#method-get-page-text)( `index: int` ) |
| `bool` | [set_page_text](#method-set-page-text)( `index: int, text: String` ) |
| `bool` | [has_content](#method-has-content)() |
| `Dictionary` | [save_state](#method-save-state)() |
| `void` | [load_state](#method-load-state)( `state: Dictionary` ) |
| `void` | [cleanup](#method-cleanup)() |

## Property descriptions

### Array[String] pages_text = [] {#prop-pages-text}

Array of text content for each page Each string represents one page - supports BBCode rich text formatting Example: ["Page 1 content...", "Page 2 content...", "Final page..."]

### String readable_title = "" {#prop-readable-title}

Optional title for the readable content (displayed in UI header)

### Texture2D background_texture {#prop-background-texture}

Optional background texture for the readable panel

## Method descriptions

### void setup_for_interactable_objects( interactable: InteractableObject ) {#method-setup-for-interactable-objects}

Sets the readable up on its object.

### bool can_interact( player: Player ) {#method-can-interact}

Can the player read it now?

### void start_interaction( player: Player ) {#method-start-interaction}

Opens the reading window with the pages.

### void end_interaction() {#method-end-interaction}

Does nothing: the reading window closes itself.

### String get_interaction_prompt() {#method-get-interaction-prompt}

The text of the prompt above the object ("Read", or "Empty" when it has no pages).

### void add_page( page_text: String ) {#method-add-page}

Add a page to the readable content

### bool remove_page( index: int ) {#method-remove-page}

Remove a page by index

### void clear_pages() {#method-clear-pages}

Clear all pages

### int get_page_count() {#method-get-page-count}

Get page count

### String get_page_text( index: int ) {#method-get-page-text}

Get specific page text

### bool set_page_text( index: int, text: String ) {#method-set-page-text}

Set specific page text

### bool has_content() {#method-has-content}

Check if has any content

### Dictionary save_state() {#method-save-state}

The pages and the title for a save.

### void load_state( state: Dictionary ) {#method-load-state}

Restores the pages and the title from a save.

### void cleanup() {#method-cleanup}

Does nothing: it has no timers.

