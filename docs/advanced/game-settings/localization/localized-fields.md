<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LocalizedFields

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Which text of which type of database resource is translated. The audit (docs/systems/localization-audit.md) decided each field:

## Description

- **T** (translate): text the player reads, always in the tables.
- **S** (if shown): text the toolkit does not show today but a game might; in the tables only when the Localization tab has it switched on (`LocalizationConfig.shown_fields`).

A type that is not here has no text for the player (events, conversations (their own text is a part), loot tables, scripts, growth profiles ...). The parts inside a resource (skill nodes, reputation levels, quest objectives ...) are collected by `LocalizationGenerator`, and given their keys by `assign_keys`.

## Methods

| | |
|---|---|
| `bool` | [is_collected](#method-is-collected)( `type: String, field: String, config: LocalizationConfig` ) *static* |
| `Array[String]` | [shown_field_ids](#method-shown-field-ids)() *static* |
| `bool` | [effect_name_is_shown](#method-effect-name-is-shown)( `effect: Effect, config: LocalizationConfig` ) *static* |
| `void` | [assign_keys](#method-assign-keys)( `resource: DatabaseResource` ) *static* |
| `void` | [assign_action_keys](#method-assign-action-keys)( `prefix: String, actions: Array` ) *static* |
| `void` | [assign_config_keys](#method-assign-config-keys)( `config: GameplayConfig` ) *static* |
| `Array[SpeechLine]` | [find_lines](#method-find-lines)( `resource: Resource` ) *static* |
| `void` | [assign_chat_keys](#method-assign-chat-keys)( `config: ChatConfig` ) *static* |

## Constants

- `String` **T** = `"T"`
- `String` **S** = `"S"`
- `Dictionary` **FIELDS** = `{` - type -&gt; &#123; field -&gt; T or S &#125;

## Method descriptions

### bool is_collected( type: String, field: String, config: LocalizationConfig ) {#method-is-collected}

Is this field of this type collected, with the choices of the config about the "if shown" text?

### Array[String] shown_field_ids() {#method-shown-field-ids}

The "if shown" fields of every type: "type.field" (the Localization tab lists them).

### bool effect_name_is_shown( effect: Effect, config: LocalizationConfig ) {#method-effect-name-is-shown}

Is the name of this effect translated? Only an effect that lasts (a buff, a debuff, an aura, a status) is on the buff bar; for the others the name is "if shown".

### void assign_keys( resource: DatabaseResource ) {#method-assign-keys}

Gives the parts inside a resource their keys (skill nodes, reputation levels ...): `Localization.key_of` needs the prefix of the owner. Called for every resource when the database loads it, and by the generator.

### void assign_action_keys( prefix: String, actions: Array ) {#method-assign-action-keys}

Gives the actions of a list (and the actions inside an If or a Switch) their keys: the prefix and the position, `<prefix>/action/<index>` (`<index>/true/<index>` inside an If)

### void assign_config_keys( config: GameplayConfig ) {#method-assign-config-keys}

The inventory styles of the Gameplay Config (the characters, the NPCs and the containers): the names of their encumbrance steps are translated

### Array[SpeechLine] find_lines( resource: Resource ) {#method-find-lines}

Every line (SpeechLine) inside a resource, found by walking its properties, always in the same order (so the key of a line stays the same while the data does not change)

### void assign_chat_keys( config: ChatConfig ) {#method-assign-chat-keys}

Gives the channels of the chat settings the keys of their name and text: chat/&lt;id&gt;/display_name and chat/&lt;id&gt;/template

