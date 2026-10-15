<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SkillTreeListEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

The list of skill trees of something that can hold trees (a character, and later a profession or a faction): the trees are listed, Add picks one from the catalog and Remove takes the selected one out. The list is an Array[int] of skill tree ids of the resource, changed in place

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `ids: Array[int], dialog_manager: DialogManager` ) |

## Signals

### changed() {#signal-changed}

A tree was added or removed

### show_error_dialog( message: String ) {#signal-show-error-dialog}

## Method descriptions

### void setup( ids: Array[int], dialog_manager: DialogManager ) {#method-setup}

`ids` is the list to edit (it is changed in place); null shows an empty list

