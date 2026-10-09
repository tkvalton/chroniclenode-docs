<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EditorThemeManager

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Centralized theme and icon management for the Event System Provides consistent theming across all UI components and handles editor integration

## Variables

| | | |
|---|---|---|
| `float` | [editor_scale](#var-editor-scale) | `1.0` |
| `EditorSettings` | [editor_settings](#var-editor-settings) |  |
| `Dictionary` | [icon_cache](#var-icon-cache) | `{}` |
| `Dictionary` | [icon_paths](#var-icon-paths) | `{ ... }` |
| `Dictionary` | [editor_icon_fallbacks](#var-editor-icon-fallbacks) | `{ ... }` |

## Methods

| | |
|---|---|
| `void` | [initialize](#method-initialize)() *static* |
| `Texture2D` | [get_icon](#method-get-icon)( `icon_name: String` ) *static* |
| `bool` | [add_custom_icon](#method-add-custom-icon)( `icon_name: String, icon_path: String` ) *static* |
| `Color` | [get_color](#method-get-color)( `color_name: String` ) *static* |
| `void` | [apply_button_theme](#method-apply-button-theme)( `button: Button` ) *static* |
| `void` | [apply_panel_theme](#method-apply-panel-theme)( `panel: Panel, color_name: String = "dark_color"` ) *static* |
| `void` | [apply_panel_container_theme](#method-apply-panel-container-theme)( `panel: PanelContainer, color_name: String = "dark_color"` ) *static* |
| `void` | [apply_line_edit_theme](#method-apply-line-edit-theme)( `line_edit: LineEdit` ) *static* |
| `void` | [apply_label_theme](#method-apply-label-theme)( `label: Label` ) *static* |
| `void` | [apply_rich_text_label_theme](#method-apply-rich-text-label-theme)( `rich_text_label: RichTextLabel` ) *static* |
| `void` | [apply_text_edit_theme](#method-apply-text-edit-theme)( `text_edit: TextEdit` ) *static* |
| `void` | [apply_menu_button_theme](#method-apply-menu-button-theme)( `menu_button: MenuButton` ) *static* |
| `void` | [apply_tree_theme](#method-apply-tree-theme)( `tree: Tree` ) *static* |
| `void` | [apply_item_list_theme](#method-apply-item-list-theme)( `item_list: ItemList` ) *static* |
| `void` | [apply_spin_box_theme](#method-apply-spin-box-theme)( `spin_box: SpinBox` ) *static* |
| `void` | [apply_option_button_theme](#method-apply-option-button-theme)( `option_button: OptionButton` ) *static* |
| `StyleBox` | [get_style](#method-get-style)( `style_name: String, component_type: String = ""` ) *static* |
| `float` | [get_editor_scale](#method-get-editor-scale)() *static* |
| `Vector2` | [get_themed_size](#method-get-themed-size)( `base_size: Vector2` ) *static* |
| `int` | [get_themed_margin](#method-get-themed-margin)( `base_margin: int` ) *static* |
| `ConfirmationDialog` | [create_themed_confirmation_dialog](#method-create-themed-confirmation-dialog)( `title: String, text: String` ) *static* |
| `AcceptDialog` | [create_themed_accept_dialog](#method-create-themed-accept-dialog)( `title: String, text: String` ) *static* |
| `void` | [apply_event_editor_preset](#method-apply-event-editor-preset)( `main_view: Control` ) *static* |

## Variable descriptions

### float editor_scale = 1.0 {#var-editor-scale}

*No description yet.*

### EditorSettings editor_settings {#var-editor-settings}

*No description yet.*

### Dictionary icon_cache =  {#var-icon-cache}

*No description yet.*

### Dictionary icon_paths {#var-icon-paths}

*No description yet.*

### Dictionary editor_icon_fallbacks {#var-editor-icon-fallbacks}

*No description yet.*

## Method descriptions

### void initialize() {#method-initialize}

Initialize the theme manager - call this once at startup

### Texture2D get_icon( icon_name: String ) {#method-get-icon}

Get an icon by name with automatic fallback

### bool add_custom_icon( icon_name: String, icon_path: String ) {#method-add-custom-icon}

Add custom icon path

### Color get_color( color_name: String ) {#method-get-color}

Get theme color by semantic name

### void apply_button_theme( button: Button ) {#method-apply-button-theme}

Apply common button styles to a button

### void apply_panel_theme( panel: Panel, color_name: String = "dark_color" ) {#method-apply-panel-theme}

Apply panel theme

### void apply_panel_container_theme( panel: PanelContainer, color_name: String = "dark_color" ) {#method-apply-panel-container-theme}

Apply panel theme with color variant support

### void apply_line_edit_theme( line_edit: LineEdit ) {#method-apply-line-edit-theme}

Apply line edit theme

### void apply_label_theme( label: Label ) {#method-apply-label-theme}

Apply label theme

### void apply_rich_text_label_theme( rich_text_label: RichTextLabel ) {#method-apply-rich-text-label-theme}

Apply rich text label theme

### void apply_text_edit_theme( text_edit: TextEdit ) {#method-apply-text-edit-theme}

Apply text edit theme

### void apply_menu_button_theme( menu_button: MenuButton ) {#method-apply-menu-button-theme}

Apply menu button theme

### void apply_tree_theme( tree: Tree ) {#method-apply-tree-theme}

Apply tree theme

### void apply_item_list_theme( item_list: ItemList ) {#method-apply-item-list-theme}

Apply item list theme

### void apply_spin_box_theme( spin_box: SpinBox ) {#method-apply-spin-box-theme}

Apply spin box theme (simple version - treats as LineEdit)

### void apply_option_button_theme( option_button: OptionButton ) {#method-apply-option-button-theme}

Apply option button theme

### StyleBox get_style( style_name: String, component_type: String = "" ) {#method-get-style}

Get style box by semantic name (for FunctionBuilder compatibility)

### float get_editor_scale() {#method-get-editor-scale}

Get current editor scale

### Vector2 get_themed_size( base_size: Vector2 ) {#method-get-themed-size}

Get themed size (multiplied by scale)

### int get_themed_margin( base_margin: int ) {#method-get-themed-margin}

Get themed margin (multiplied by scale)

### ConfirmationDialog create_themed_confirmation_dialog( title: String, text: String ) {#method-create-themed-confirmation-dialog}

Create simple themed confirmation dialog (replaces the complex one)

### AcceptDialog create_themed_accept_dialog( title: String, text: String ) {#method-create-themed-accept-dialog}

Create simple themed accept dialog

### void apply_event_editor_preset( main_view: Control ) {#method-apply-event-editor-preset}

Apply event editor theme preset (simplified)

