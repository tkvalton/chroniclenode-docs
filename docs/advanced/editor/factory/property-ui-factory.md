<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PropertyUIFactory

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Factory for creating UI controls with consistent styling and behavior Uses class-based controls for complex components

## Methods

| | |
|---|---|
| `HBoxContainer` | [create_property_row](#method-create-property-row)( `label_text: String, control: Control, target_container: Control = null, tooltip: String = ""` ) *static* |
| `VBoxContainer` | [create_section_header](#method-create-section-header)( `title: String, target_container: Control` ) *static* |
| `SpinBox` | [create_spinbox](#method-create-spinbox)( `initial_value: float, options: Dictionary = {}, callback: Callable = Callable()` ) *static* |
| `LineEdit` | [create_line_edit](#method-create-line-edit)( `initial_value: String, placeholder: String = "", callback: Callable = Callable()` ) *static* |
| `TextEdit` | [create_text_edit](#method-create-text-edit)( `initial_text: String = "", callback: Callable = Callable()` ) *static* |
| `CheckBox` | [create_checkbox](#method-create-checkbox)( `initial_value: bool, callback: Callable = Callable()` ) *static* |
| `OptionButton` | [create_option_button](#method-create-option-button)( `options: PackedStringArray, initial_index: int = 0, callback: Callable = Callable()` ) *static* |
| `Button` | [create_button](#method-create-button)( `text: String, callback: Callable = Callable()` ) *static* |
| `DatabaseOptionButton` | [create_database_option_button](#method-create-database-option-button)( `database: String, initial_id: int = 0, callback: Callable = Callable(), options: Dictionary = {}` ) *static* |
| `DatabaseResourceButton` | [create_resource_selector](#method-create-resource-selector)( `database: String, initial_id: int, dialog_manager: DialogManager, callback: Callable = Callable(), options: Dictionary = {}` ) *static* |
| `Vector2Control` | [create_vector2_control](#method-create-vector2-control)( `initial_value: Vector2 = Vector2.ZERO, options: Dictionary = {}, callback: Callable = Callable()` ) *static* |
| `Vector3Control` | [create_vector3_control](#method-create-vector3-control)( `initial_value: Vector3 = Vector3.ZERO, options: Dictionary = {}, callback: Callable = Callable()` ) *static* |
| `BBCodeTextControl` | [create_bbcode_text_control](#method-create-bbcode-text-control)( `initial_text: String, dialog_manager: DialogManager, callback: Callable = Callable()` ) *static* |
| `Button` | [create_sfx_selection_button](#method-create-sfx-selection-button)( `initial_selection: SFXSelection, dialog_manager: DialogManager, callback: Callable = Callable(), button_text: String = "Select SFX"` ) *static* |
| `Button` | [create_vfx_selection_button](#method-create-vfx-selection-button)( `initial_selection: VFXSelection, dialog_manager: DialogManager, callback: Callable = Callable(), button_text: String = "Select VFX"` ) *static* |
| `Button` | [create_shape_selection_button](#method-create-shape-selection-button)( `initial_shape: Shape3D, dialog_manager: DialogManager, callback: Callable = Callable(), button_text: String = "Configure Shape", context: String = ""` ) *static* |
| `Button` | [create_animation_selection_button](#method-create-animation-selection-button)( `initial_selection: AnimationSelection, dialog_manager: DialogManager, callback: Callable = Callable(), button_text: String = "Select Animation"` ) *static* |
| `DatabaseArrayControl` | [create_option_button_array](#method-create-option-button-array)( `database: String, initial_ids: Array[int], callback: Callable = Callable(), options: Dictionary = {}` ) *static* |
| `DatabaseArrayControl` | [create_resource_button_array](#method-create-resource-button-array)( `database: String, initial_ids: Array[int], dialog_manager: DialogManager, callback: Callable = Callable(), options: Dictionary = {}` ) *static* |
| `Button` | [create_unified_resource_button](#method-create-unified-resource-button)( `category: String, ## "reward" or "requirement" current_resource: Resource, dialog_manager: DialogManager, callback: Callable = Callable()` ) *static* |
| `DynamicDictionaryEditor` | [create_dictionary_editor](#method-create-dictionary-editor)( `dialog_manager: DialogManager, initial_dictionary: Dictionary, dictionary_key: String = "items", ## "items" or "currency" database_type: String = "item", ## "item" or "currency" callback: Callable = Callable()` ) *static* |
| `HBoxContainer` | [create_spinbox_field](#method-create-spinbox-field)( `label_text: String, initial_value: float, options: Dictionary, callback: Callable, target_container: Control = null` ) *static* |
| `HBoxContainer` | [create_line_edit_field](#method-create-line-edit-field)( `label_text: String, initial_value: String, placeholder: String, tooltip: String, callback: Callable, target_container: Control = null` ) *static* |
| `HBoxContainer` | [create_text_edit_field](#method-create-text-edit-field)( `label_text: String, initial_text: String, tooltip: String, callback: Callable, target_container: Control = null` ) *static* |
| `HBoxContainer` | [create_checkbox_field](#method-create-checkbox-field)( `label_text: String, initial_value: bool, tooltip: String, callback: Callable, target_container: Control = null` ) *static* |
| `HBoxContainer` | [create_option_button_field](#method-create-option-button-field)( `label_text: String, options: PackedStringArray, initial_index: int, tooltip: String, callback: Callable, target_container: Control = null` ) *static* |
| `HBoxContainer` | [create_database_option_button_field](#method-create-database-option-button-field)( `label_text: String, database: String, initial_id: int, tooltip: String, callback: Callable, target_container: Control = null, options: Dictionary = {}` ) *static* |
| `HBoxContainer` | [create_resource_selector_field](#method-create-resource-selector-field)( `label_text: String, database: String, initial_id: int, dialog_manager: DialogManager, tooltip: String, callback: Callable, target_container: Control = null, options: Dictionary = {}` ) *static* |
| `HBoxContainer` | [create_vector2_field](#method-create-vector2-field)( `label_text: String, initial_value: Vector2, tooltip: String, callback: Callable, target_container: Control = null, options: Dictionary = {}` ) *static* |
| `HBoxContainer` | [create_vector3_field](#method-create-vector3-field)( `label_text: String, initial_value: Vector3, tooltip: String, callback: Callable, target_container: Control = null, options: Dictionary = {}` ) *static* |
| `HBoxContainer` | [create_bbcode_text_field](#method-create-bbcode-text-field)( `label_text: String, initial_text: String, dialog_manager: DialogManager, tooltip: String, callback: Callable, target_container: Control = null` ) *static* |
| `HBoxContainer` | [create_option_button_array_field](#method-create-option-button-array-field)( `label_text: String, database: String, initial_ids: Array[int], tooltip: String, callback: Callable, target_container: Control = null, options: Dictionary = {}` ) *static* |
| `HBoxContainer` | [create_resource_button_array_field](#method-create-resource-button-array-field)( `label_text: String, database: String, initial_ids: Array[int], dialog_manager: DialogManager, tooltip: String, callback: Callable, target_container: Control = null, options: Dictionary = {}` ) *static* |
| `HBoxContainer` | [create_sfx_selection_button_field](#method-create-sfx-selection-button-field)( `label_text: String, initial_selection: SFXSelection, dialog_manager: DialogManager, tooltip: String, callback: Callable, target_container: Control = null, button_text: String = "Select SFX"` ) *static* |
| `HBoxContainer` | [create_vfx_selection_button_field](#method-create-vfx-selection-button-field)( `label_text: String, initial_selection: VFXSelection, dialog_manager: DialogManager, tooltip: String, callback: Callable, target_container: Control = null, button_text: String = "Select VFX"` ) *static* |
| `HBoxContainer` | [create_shape_selection_button_field](#method-create-shape-selection-button-field)( `label_text: String, initial_shape: Shape3D, dialog_manager: DialogManager, tooltip: String, callback: Callable, target_container: Control = null, button_text: String = "Configure Shape", context: String = ""` ) *static* |
| `HBoxContainer` | [create_animation_selection_button_field](#method-create-animation-selection-button-field)( `label_text: String, initial_selection: AnimationSelection, dialog_manager: DialogManager, tooltip: String, callback: Callable, target_container: Control = null, button_text: String = "Select Animation"` ) *static* |
| `HBoxContainer` | [create_unified_resource_button_field](#method-create-unified-resource-button-field)( `label_text: String, category: String, current_resource: Resource, dialog_manager: DialogManager, tooltip: String, callback: Callable, target_container: Control = null` ) *static* |

## Method descriptions

### HBoxContainer create_property_row( label_text: String, control: Control, target_container: Control = null, tooltip: String = "" ) {#method-create-property-row}

*No description yet.*

### VBoxContainer create_section_header( title: String, target_container: Control ) {#method-create-section-header}

*No description yet.*

### SpinBox create_spinbox( initial_value: float, options: Dictionary = &#123;&#125;, callback: Callable = Callable() ) {#method-create-spinbox}

*No description yet.*

### LineEdit create_line_edit( initial_value: String, placeholder: String = "", callback: Callable = Callable() ) {#method-create-line-edit}

*No description yet.*

### TextEdit create_text_edit( initial_text: String = "", callback: Callable = Callable() ) {#method-create-text-edit}

*No description yet.*

### CheckBox create_checkbox( initial_value: bool, callback: Callable = Callable() ) {#method-create-checkbox}

*No description yet.*

### OptionButton create_option_button( options: PackedStringArray, initial_index: int = 0, callback: Callable = Callable() ) {#method-create-option-button}

*No description yet.*

### Button create_button( text: String, callback: Callable = Callable() ) {#method-create-button}

*No description yet.*

### DatabaseOptionButton create_database_option_button( database: String, initial_id: int = 0, callback: Callable = Callable(), options: Dictionary = &#123;&#125; ) {#method-create-database-option-button}

Creates a DatabaseOptionButton - auto-populated from database

### DatabaseResourceButton create_resource_selector( database: String, initial_id: int, dialog_manager: DialogManager, callback: Callable = Callable(), options: Dictionary = &#123;&#125; ) {#method-create-resource-selector}

Creates a DatabaseResourceButton - button that opens ListCatalog

### Vector2Control create_vector2_control( initial_value: Vector2 = Vector2.ZERO, options: Dictionary = &#123;&#125;, callback: Callable = Callable() ) {#method-create-vector2-control}

Creates a Vector2Control - X/Y spinboxes with clipboard paste

### Vector3Control create_vector3_control( initial_value: Vector3 = Vector3.ZERO, options: Dictionary = &#123;&#125;, callback: Callable = Callable() ) {#method-create-vector3-control}

Creates a Vector3Control - X/Y/Z spinboxes with clipboard paste

### BBCodeTextControl create_bbcode_text_control( initial_text: String, dialog_manager: DialogManager, callback: Callable = Callable() ) {#method-create-bbcode-text-control}

Creates a BBCodeTextControl - read-only text that opens BBCode editor

### Button create_sfx_selection_button( initial_selection: SFXSelection, dialog_manager: DialogManager, callback: Callable = Callable(), button_text: String = "Select SFX" ) {#method-create-sfx-selection-button}

Creates a button that opens the SFX Selection Dialog

### Button create_vfx_selection_button( initial_selection: VFXSelection, dialog_manager: DialogManager, callback: Callable = Callable(), button_text: String = "Select VFX" ) {#method-create-vfx-selection-button}

Creates a button that opens the VFX Selection Dialog

### Button create_shape_selection_button( initial_shape: Shape3D, dialog_manager: DialogManager, callback: Callable = Callable(), button_text: String = "Configure Shape", context: String = "" ) {#method-create-shape-selection-button}

Creates a button that opens the Shape Config Dialog

### Button create_animation_selection_button( initial_selection: AnimationSelection, dialog_manager: DialogManager, callback: Callable = Callable(), button_text: String = "Select Animation" ) {#method-create-animation-selection-button}

Creates a button that opens the Animation Selection Dialog

### DatabaseArrayControl create_option_button_array( database: String, initial_ids: Array[int], callback: Callable = Callable(), options: Dictionary = &#123;&#125; ) {#method-create-option-button-array}

Creates an OptionButtonArray - dropdown per entry

### DatabaseArrayControl create_resource_button_array( database: String, initial_ids: Array[int], dialog_manager: DialogManager, callback: Callable = Callable(), options: Dictionary = &#123;&#125; ) {#method-create-resource-button-array}

Creates a ResourceButtonArray - button per entry that opens ListCatalog

### Button create_unified_resource_button( category: String, ## "reward" or "requirement" current_resource: Resource, dialog_manager: DialogManager, callback: Callable = Callable() ) {#method-create-unified-resource-button}

Creates a button that opens UnifiedResourceDialog for Reward/Requirement resources

### DynamicDictionaryEditor create_dictionary_editor( dialog_manager: DialogManager, initial_dictionary: Dictionary, dictionary_key: String = "items", ## "items" or "currency" database_type: String = "item", ## "item" or "currency" callback: Callable = Callable() ) {#method-create-dictionary-editor}

Creates a DynamicDictionaryEditor for managing dictionary arrays (items/currency)

### HBoxContainer create_spinbox_field( label_text: String, initial_value: float, options: Dictionary, callback: Callable, target_container: Control = null ) {#method-create-spinbox-field}

*No description yet.*

### HBoxContainer create_line_edit_field( label_text: String, initial_value: String, placeholder: String, tooltip: String, callback: Callable, target_container: Control = null ) {#method-create-line-edit-field}

*No description yet.*

### HBoxContainer create_text_edit_field( label_text: String, initial_text: String, tooltip: String, callback: Callable, target_container: Control = null ) {#method-create-text-edit-field}

*No description yet.*

### HBoxContainer create_checkbox_field( label_text: String, initial_value: bool, tooltip: String, callback: Callable, target_container: Control = null ) {#method-create-checkbox-field}

*No description yet.*

### HBoxContainer create_option_button_field( label_text: String, options: PackedStringArray, initial_index: int, tooltip: String, callback: Callable, target_container: Control = null ) {#method-create-option-button-field}

*No description yet.*

### HBoxContainer create_database_option_button_field( label_text: String, database: String, initial_id: int, tooltip: String, callback: Callable, target_container: Control = null, options: Dictionary = &#123;&#125; ) {#method-create-database-option-button-field}

*No description yet.*

### HBoxContainer create_resource_selector_field( label_text: String, database: String, initial_id: int, dialog_manager: DialogManager, tooltip: String, callback: Callable, target_container: Control = null, options: Dictionary = &#123;&#125; ) {#method-create-resource-selector-field}

*No description yet.*

### HBoxContainer create_vector2_field( label_text: String, initial_value: Vector2, tooltip: String, callback: Callable, target_container: Control = null, options: Dictionary = &#123;&#125; ) {#method-create-vector2-field}

*No description yet.*

### HBoxContainer create_vector3_field( label_text: String, initial_value: Vector3, tooltip: String, callback: Callable, target_container: Control = null, options: Dictionary = &#123;&#125; ) {#method-create-vector3-field}

*No description yet.*

### HBoxContainer create_bbcode_text_field( label_text: String, initial_text: String, dialog_manager: DialogManager, tooltip: String, callback: Callable, target_container: Control = null ) {#method-create-bbcode-text-field}

*No description yet.*

### HBoxContainer create_option_button_array_field( label_text: String, database: String, initial_ids: Array[int], tooltip: String, callback: Callable, target_container: Control = null, options: Dictionary = &#123;&#125; ) {#method-create-option-button-array-field}

*No description yet.*

### HBoxContainer create_resource_button_array_field( label_text: String, database: String, initial_ids: Array[int], dialog_manager: DialogManager, tooltip: String, callback: Callable, target_container: Control = null, options: Dictionary = &#123;&#125; ) {#method-create-resource-button-array-field}

*No description yet.*

### HBoxContainer create_sfx_selection_button_field( label_text: String, initial_selection: SFXSelection, dialog_manager: DialogManager, tooltip: String, callback: Callable, target_container: Control = null, button_text: String = "Select SFX" ) {#method-create-sfx-selection-button-field}

*No description yet.*

### HBoxContainer create_vfx_selection_button_field( label_text: String, initial_selection: VFXSelection, dialog_manager: DialogManager, tooltip: String, callback: Callable, target_container: Control = null, button_text: String = "Select VFX" ) {#method-create-vfx-selection-button-field}

*No description yet.*

### HBoxContainer create_shape_selection_button_field( label_text: String, initial_shape: Shape3D, dialog_manager: DialogManager, tooltip: String, callback: Callable, target_container: Control = null, button_text: String = "Configure Shape", context: String = "" ) {#method-create-shape-selection-button-field}

*No description yet.*

### HBoxContainer create_animation_selection_button_field( label_text: String, initial_selection: AnimationSelection, dialog_manager: DialogManager, tooltip: String, callback: Callable, target_container: Control = null, button_text: String = "Select Animation" ) {#method-create-animation-selection-button-field}

*No description yet.*

### HBoxContainer create_unified_resource_button_field( label_text: String, category: String, current_resource: Resource, dialog_manager: DialogManager, tooltip: String, callback: Callable, target_container: Control = null ) {#method-create-unified-resource-button-field}

*No description yet.*

