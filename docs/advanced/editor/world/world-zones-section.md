<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WorldZonesSection

**Inherits:** `FoldableContainer`

The **Zones** section of the Worlds editor: the named places of ONE world (Elderwood, its sub-zone The Old Mill, the Sunken Caves ...) and the default zone of the world. A zone belongs to the world whose list it is in (WorldData.zones); the terrain tool paints with the zones of the world of the scene, and an event or a condition can name any zone. A zone has a name, a description, a colour, a parent (a sub-zone is a part of its parent), a banner (on or off, with a line under the name), how much rain and snow reach the ground, and its look (a sky and an environment of its own, or the ones of the zone it is a part of and of the world). See docs: World &gt; Zones.

## Variables

| | | |
|---|---|---|
| `WorldData` | [world](#var-world) | `null` |
| `Tree` | [zone_tree](#var-zone-tree) |  |
| `Button` | [add_button](#var-add-button) |  |
| `Button` | [add_sub_button](#var-add-sub-button) |  |
| `Button` | [delete_button](#var-delete-button) |  |
| `OptionButton` | [default_option](#var-default-option) |  |
| `LineEdit` | [name_edit](#var-name-edit) |  |
| `TextEdit` | [description_edit](#var-description-edit) |  |
| `ColorPickerButton` | [color_button](#var-color-button) |  |
| `OptionButton` | [parent_option](#var-parent-option) |  |
| `CheckBox` | [banner_check](#var-banner-check) |  |
| `LineEdit` | [subtitle_edit](#var-subtitle-edit) |  |
| `SpinBox` | [wetness_scale_spin](#var-wetness-scale-spin) |  |
| `SpinBox` | [snow_scale_spin](#var-snow-scale-spin) |  |
| `OptionButton` | [sky_option](#var-sky-option) |  |
| `OptionButton` | [environment_option](#var-environment-option) |  |
| `SpinBox` | [blend_spin](#var-blend-spin) |  |
| `CheckBox` | [replace_check](#var-replace-check) |  |
| `VBoxContainer` | [fields_box](#var-fields-box) |  |
| `Label` | [hint_label](#var-hint-label) |  |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `panel_style: StyleBox = null` ) |
| `void` | [show_world](#method-show-world)( `world_data: WorldData` ) |
| `Array[Dictionary]` | [get_rows](#method-get-rows)() |
| `int` | [get_selected_zone_id](#method-get-selected-zone-id)() |
| `void` | [select_zone](#method-select-zone)( `zone_id: int` ) |
| `ZoneDefinition` | [add_zone](#method-add-zone)( `parent_id: int = 0, zone_name: String = "New zone"` ) |
| `bool` | [delete_zone](#method-delete-zone)( `zone_id: int` ) |

## Signals

### world_changed() {#signal-world-changed}

Something of the world changed (the zone list, the default zone): the editor saves the world.

## Variable descriptions

### WorldData world = null {#var-world}

*No description yet.*

### Tree zone_tree {#var-zone-tree}

*No description yet.*

### Button add_button {#var-add-button}

*No description yet.*

### Button add_sub_button {#var-add-sub-button}

*No description yet.*

### Button delete_button {#var-delete-button}

*No description yet.*

### OptionButton default_option {#var-default-option}

*No description yet.*

### LineEdit name_edit {#var-name-edit}

*No description yet.*

### TextEdit description_edit {#var-description-edit}

*No description yet.*

### ColorPickerButton color_button {#var-color-button}

*No description yet.*

### OptionButton parent_option {#var-parent-option}

*No description yet.*

### CheckBox banner_check {#var-banner-check}

*No description yet.*

### LineEdit subtitle_edit {#var-subtitle-edit}

*No description yet.*

### SpinBox wetness_scale_spin {#var-wetness-scale-spin}

*No description yet.*

### SpinBox snow_scale_spin {#var-snow-scale-spin}

*No description yet.*

### OptionButton sky_option {#var-sky-option}

*No description yet.*

### OptionButton environment_option {#var-environment-option}

*No description yet.*

### SpinBox blend_spin {#var-blend-spin}

*No description yet.*

### CheckBox replace_check {#var-replace-check}

*No description yet.*

### VBoxContainer fields_box {#var-fields-box}

*No description yet.*

### Label hint_label {#var-hint-label}

*No description yet.*

## Method descriptions

### void setup( panel_style: StyleBox = null ) {#method-setup}

Builds the section. `panel_style` is the style of the other sections of the editor.

### void show_world( world_data: WorldData ) {#method-show-world}

Shows the zones of a world (null: nothing).

### Array[Dictionary] get_rows() {#method-get-rows}

The zones of the world in tree order: [&#123;"id", "depth", "zone"&#125;]. A zone whose parent is not one of the world's zones counts as a zone of its own.

### int get_selected_zone_id() {#method-get-selected-zone-id}

*No description yet.*

### void select_zone( zone_id: int ) {#method-select-zone}

Selects a zone of the list (and shows its fields).

### ZoneDefinition add_zone( parent_id: int = 0, zone_name: String = "New zone" ) {#method-add-zone}

Makes a zone in this world (a sub-zone of `parent_id` when it is not 0) and selects it. Returns it.

### bool delete_zone( zone_id: int ) {#method-delete-zone}

Deletes a zone of this world: its sub-zones become part of its parent, and the default zone goes when it was this one.

