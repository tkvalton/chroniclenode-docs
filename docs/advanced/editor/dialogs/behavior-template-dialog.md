<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# BehaviorTemplateDialog

**Inherits:** `ConfirmationDialog`

The window of "Add from template or copy": a list of starting points (the templates that come with the toolkit and the ones you saved) and of the schedules of other NPCs and behaviour scripts. Choose one and press Add: a template is added with its places relative to where the NPC is placed; a schedule of another NPC or script is copied either keeping its places in the world or making them relative to the NPC. The window only chooses: it gives the choice to whoever listens to `chosen` (the Behaviour tab does the adding, as one step of Undo). kind "template"   &#123;"script": the template&#125; kind "copy"       &#123;"script": the source script, "index": the schedule, "origin": where the source NPC is placed, "places": BehaviorTemplates.Places&#125;

## Variables

| | | |
|---|---|---|
| `Tree` | [tree](#var-tree) |  |
| `Label` | [description_label](#var-description-label) |  |
| `Label` | [places_label](#var-places-label) |  |
| `OptionButton` | [places_option](#var-places-option) |  |
| `Button` | [delete_button](#var-delete-button) |  |

## Methods

| | |
|---|---|
| `void` | [open](#method-open)( `npc: Node, target: ModularBehaviorScript` ) |
| `void` | [fill](#method-fill)( `npc: Node, target: ModularBehaviorScript` ) |
| `Array[Dictionary]` | [other_npcs](#method-other-npcs)( `npc: Node, target: ModularBehaviorScript` ) *static* |
| `Dictionary` | [choice](#method-choice)() |

## Signals

### chosen( kind: String, data: Dictionary ) {#signal-chosen}

### template_delete_requested( template: ModularBehaviorScript ) {#signal-template-delete-requested}

The user wants a template of theirs deleted from the database

## Variable descriptions

### Tree tree {#var-tree}

*No description yet.*

### Label description_label {#var-description-label}

*No description yet.*

### Label places_label {#var-places-label}

*No description yet.*

### OptionButton places_option {#var-places-option}

*No description yet.*

### Button delete_button {#var-delete-button}

*No description yet.*

## Method descriptions

### void open( npc: Node, target: ModularBehaviorScript ) {#method-open}

Opens the window for an NPC: `target` is the script the choice will go into (the NPC's own), `npc` is the NPC (it is left out of the sources)

### void fill( npc: Node, target: ModularBehaviorScript ) {#method-fill}

Fills the list: the templates, then the other NPCs of the scene with the schedules of their scripts, then the other behaviour scripts of the database

### Array[Dictionary] other_npcs( npc: Node, target: ModularBehaviorScript ) {#method-other-npcs}

The other placed NPCs of the scene that have a script with schedules: [&#123;"name", "script", "origin"&#125;]

### Dictionary choice() {#method-choice}

What is chosen in the list: &#123;"kind", ...&#125; (see the top of the file), &#123;&#125; when nothing

