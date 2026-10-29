<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EntityTemplates

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Entities that follow a template. An NPC or an interactable object can use a **template** (an NPCDefinition or an InteractableDefinition saved as one): the stats, the pools, the immunities, the growth and (for an NPC) the abilities of the template are its own, and a change of the template reaches it.

## Description

The entity keeps its **own full values** as always (so the editors are the editors they were) and, next to them, a **baseline**: what the template was when the entity last looked at it. When the template has changed, the difference (the template now minus the baseline) is added to the entity: an NPC that has 50 more health than its template and a template that gains 100 gives an NPC that has 150 more. What an entity changed for itself stays. A stat the entity marks as **always this value** never follows.

- numbers (stat base values, pool maximums, the core stat values): the difference is added
- lists (abilities, pools, immunities): what the template added is added, what it took away is taken away
- the growth is the entity's own: its growth profile and its growth entries are chosen on the entity. The template only suggests (an entity that has no profile of its own grows like

the profile of its template, and the entries of the template that the entity has no entry for apply too), see `suggest_growth` The game asks `resolve` for the definition to use, and the editors call `sync` when they open an entity, so what is saved is always up to date.

## Methods

| | |
|---|---|
| `String` | [template_type_of](#method-template-type-of)( `holder: Resource` ) *static* |
| `String` | [user_type_of](#method-user-type-of)( `template: Resource` ) *static* |
| `bool` | [has_abilities](#method-has-abilities)( `holder: Resource` ) *static* |
| `bool` | [is_unique](#method-is-unique)( `holder: Resource` ) *static* |
| `Resource` | [get_template](#method-get-template)( `holder: Resource` ) *static* |
| `bool` | [is_linked](#method-is-linked)( `holder: Resource` ) *static* |
| `bool` | [can_follow](#method-can-follow)( `holder: Resource` ) *static* |
| `Array[Resource]` | [users_of](#method-users-of)( `template: Resource` ) *static* |
| `String` | [display_name_of](#method-display-name-of)( `template: Resource` ) *static* |
| `Array[Resource]` | [templates_of_type](#method-templates-of-type)( `type: String` ) *static* |
| `TemplateBaseline` | [capture](#method-capture)( `template: Resource` ) *static* |
| `void` | [link](#method-link)( `holder: Resource, template: Resource, take_values: bool = false` ) *static* |
| `void` | [link_unique](#method-link-unique)( `unique: Resource, definition: Resource` ) *static* |
| `StatsData` | [unique_stats](#method-unique-stats)( `unique: Resource` ) *static* |
| `void` | [detach](#method-detach)( `holder: Resource` ) *static* |
| `Resource` | [resolve](#method-resolve)( `holder: Resource` ) *static* |
| `Array[String]` | [sync](#method-sync)( `holder: Resource` ) *static* |
| `bool` | [is_out_of_date](#method-is-out-of-date)( `holder: Resource` ) *static* |
| `Array[String]` | [warnings_of](#method-warnings-of)( `holder: Resource` ) *static* |
| `int` | [sync_users](#method-sync-users)( `template: Resource` ) *static* |
| `Array[Dictionary]` | [overrides_of](#method-overrides-of)( `holder: Resource` ) *static* |
| `void` | [reset_override](#method-reset-override)( `holder: Resource, row: Dictionary` ) *static* |
| `void` | [suggest_growth](#method-suggest-growth)( `own: StatsData, theirs: StatsData` ) *static* |

## Constants

- `Array[String]` **CORE_VALUES** = `["movement_speed_base", "attack_speed_base", "global_cooldown_duration_base",...` - The core stat values of a StatsData that follow like numbers
- `float` **EPSILON** = `0.0001` - The difference below which two numbers count as equal when a value is compared with its template.

## Method descriptions

### String template_type_of( holder: Resource ) {#method-template-type-of}

The database type of the templates of an entity (an NPC, an interactable object or a player class)

### String user_type_of( template: Resource ) {#method-user-type-of}

The database type of the entities that follow templates of this kind

### bool has_abilities( holder: Resource ) {#method-has-abilities}

Does the definition have abilities (an NPC, a player class)?

### bool is_unique( holder: Resource ) {#method-is-unique}

Is this a placed (unique) NPC or interactable? It follows its **definition** (the definition as it is with its own template added) instead of a template, through its stats override

### Resource get_template( holder: Resource ) {#method-get-template}

What the holder follows: the template of a definition, or the definition (resolved) of a unique that has a stats override. Null when it follows nothing

### bool is_linked( holder: Resource ) {#method-is-linked}

Does the entity follow a template that exists?

### bool can_follow( holder: Resource ) {#method-can-follow}

Can a resource follow a template?

### Array[Resource] users_of( template: Resource ) {#method-users-of}

The entities (NPCs, or interactables) that follow a template

### String display_name_of( template: Resource ) {#method-display-name-of}

The name of a template (templates made before they had names show "Template" and their number)

### Array[Resource] templates_of_type( type: String ) {#method-templates-of-type}

The templates of a kind ("npc_template" / "interactable_template"), by name

### TemplateBaseline capture( template: Resource ) {#method-capture}

A copy of what the template is now: the baseline

### void link( holder: Resource, template: Resource, take_values: bool = false ) {#method-link}

The entity follows the template from now on. Its own values stay (what differs from the template is what it added); its growth stays its own (the template suggests one). With `take_values` the entity takes the template's stats, pools, immunities and abilities instead of its own (a new, blank entity)

### void link_unique( unique: Resource, definition: Resource ) {#method-link-unique}

A placed (unique) NPC or interactable takes its stats override from its definition: it follows the definition from now on (a change of the definition, or of the template of the definition, is added to the override; what was changed in the override stays)

### StatsData unique_stats( unique: Resource ) {#method-unique-stats}

The stats a placed unique uses in the game: its stats override with the changes of its definition added (nothing is saved). Null when it has no stats override

### void detach( holder: Resource ) {#method-detach}

The entity stops following: it keeps the values it has

### Resource resolve( holder: Resource ) {#method-resolve}

The definition the game uses: the entity itself, or (when it follows a template) a copy with the changes of the template added. Nothing is saved

### Array[String] sync( holder: Resource ) {#method-sync}

Adds the changes of the template to the entity itself and takes a new baseline. Returns what could not be followed (a stat the entity changed that the template took away ...)

### bool is_out_of_date( holder: Resource ) {#method-is-out-of-date}

Has the template changed since the entity looked at it? (so that sync would change the entity)

### Array[String] warnings_of( holder: Resource ) {#method-warnings-of}

What is wrong, without changing anything (the warnings of a sync)

### int sync_users( template: Resource ) {#method-sync-users}

Brings every entity that follows the template up to date and saves the ones that changed. Returns how many changed

### Array[Dictionary] overrides_of( holder: Resource ) {#method-overrides-of}

What the entity has that its template does not, as rows: &#123;"kind", "id", "name", "template", "value", "offset"&#125; for numbers, &#123;"kind", "id", "name", "state": "added"|"removed"&#125; for lists. Compared with the template as it is now (sync first)

### void reset_override( holder: Resource, row: Dictionary ) {#method-reset-override}

Gives one row of overrides_of back to the template (the entity has the value of the template again)

### void suggest_growth( own: StatsData, theirs: StatsData ) {#method-suggest-growth}

What a template suggests for the growth of an entity: when the entity has no growth profile of its own it takes the one of the template, and the growth entries of the template that the entity has no entry for are added. The entity's own profile and entries always come first. Works on a copy (the game's copy, or the one a preview is worked out from): it is never saved

