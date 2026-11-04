<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VoiceCalls

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The voice calls: the names of the sounds an entity makes by itself, which every voice (entity_voices/&lt;entity type&gt;/&lt;variant&gt;/&lt;call&gt;/) should have. The game calls them by these names when something happens to the entity (it is hit, it dies, it avoids a hit ...); the Entity Voices editor (Audio &gt; Entity Voices) lines the folders of a voice up with this list, and the ability's voice sound offers the same names. Abilities can use any name for their own voice sound (the ability asks for "shout"), these are only the ones the toolkit plays on its own. A call a voice does not have falls back to the next call of its chain (death -&gt; pain -&gt; hit); a call with no sound at all is silent. See docs: Audio &gt; Entity Voices.

## Methods

| | |
|---|---|
| `Dictionary` | [get_call](#method-get-call)( `call_name: String` ) *static* |
| `bool` | [is_call](#method-is-call)( `call_name: String` ) *static* |
| `Array[String]` | [get_names](#method-get-names)() *static* |
| `Array[Dictionary]` | [get_group](#method-get-group)( `group: String` ) *static* |
| `PackedStringArray` | [lookup_chain](#method-lookup-chain)( `call_name: String` ) *static* |
| `String` | [call_of_folder](#method-call-of-folder)( `folder_name: String` ) *static* |
| `Array[String]` | [get_action_names](#method-get-action-names)() *static* |

## Constants

- `String` **HIT** = `"hit"`
- `String` **HIT_HEAVY** = `"hit_heavy"`
- `String` **DEATH** = `"death"`
- `String` **DODGE** = `"dodge"`
- `String` **PARRY** = `"parry"`
- `String` **BLOCK** = `"block"`
- `String` **CRIT** = `"crit"`
- `String` **AGGRO** = `"aggro"`
- `String` **JUMP_START** = `"jump_start"`
- `String` **JUMP_END** = `"jump_end"`
- `String` **PAIN** = `"pain"`
- `Array[String]` **GROUPS** = `["Combat reactions", "Combat", "Awareness", "Movement"]` - The groups, in the order the editor shows them
- `Array[Dictionary]` **CALLS** = `[` - The calls the toolkit plays: name, group, what it is, when it plays, whether a voice should have it (required), the calls to try when the voice has none (fallbacks) and the older names of the same call (legacy: a voice that has a folder with the old name still works)
- `Array[String]` **COMMON_ACTIONS** = `["attack", "shout", "roar", "taunt", "laugh", "grunt", "effort", "cast", "hel...` - Names that abilities, events and conversations often use for their own voice sound (suggestions: any name works, the entity's voice just needs a folder with it)

## Method descriptions

### Dictionary get_call( call_name: String ) {#method-get-call}

The description of a call (empty when the name is not one of the calls)

### bool is_call( call_name: String ) {#method-is-call}

*No description yet.*

### Array[String] get_names() {#method-get-names}

The names of the calls

### Array[Dictionary] get_group( group: String ) {#method-get-group}

The calls of a group

### PackedStringArray lookup_chain( call_name: String ) {#method-lookup-chain}

The names to look for, in order, when a call is wanted: the call, its older names, then the same for each call it falls back to. A name that is not a call is only itself

### String call_of_folder( folder_name: String ) {#method-call-of-folder}

Is this folder name one of the names a call is known by (the call or an older name)? Gives the call, else ""

### Array[String] get_action_names() {#method-get-action-names}

The names the ability's voice sound offers: the calls, then the common action names

