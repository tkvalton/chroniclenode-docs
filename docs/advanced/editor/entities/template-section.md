<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TemplateSection

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

The Template section of the NPC and interactable editors: which template the entity follows (and what it changed on top of it), or, when the resource is a template, who uses it. The entity keeps its own values (see EntityTemplates); this section links it to a template, stops it following, gives what it changed back and makes new templates.

## Variables

| | | |
|---|---|---|
| `Resource` | [holder](#var-holder) |  |

## Methods

| | |
|---|---|
| `bool` | [show_for](#method-show-for)( `p_holder: Resource` ) |

## Signals

### entity_changed() {#signal-entity-changed}

The entity (or its template) was changed by this section: the editor reloads what it shows and saves

### template_open_requested( template: Resource ) {#signal-template-open-requested}

A template was chosen to be edited

### template_created( template: Resource, followed: bool ) {#signal-template-created}

A template was made (`followed`: the entity it was made from follows it now)

### show_error_dialog( message: String ) {#signal-show-error-dialog}

## Constants

- `int` **MENU_NEW** = `1`
- `int` **MENU_FIRST_TEMPLATE** = `100`
- `int` **MAX_NAMES_SHOWN** = `12`

## Variable descriptions

### Resource holder {#var-holder}

The NPC or interactable being edited (a template or an entity)

## Method descriptions

### bool show_for( p_holder: Resource ) {#method-show-for}

Shows the section for an entity or a template. Brings an entity that follows a template up to date first (returns true when it changed and has to be saved)

