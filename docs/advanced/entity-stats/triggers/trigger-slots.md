<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TriggerSlots

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The slots of the trigger tags: a trigger tag (Trigger Tags tab) can give the creatures that it fires on a **voice call** (a folder in their voice, listed in Audio &gt; Entity Voices) and an **animation** (a list in their animation map, in the Triggers section of Assets &gt; Animations), and can play a **sound** at the target. A slot has a stable name (the trigger's Slot name, or its tag in snake_case) that the voice folder and the animation map are keyed by, and a trigger can name another slot to use when a creature has nothing for its own (parry -&gt; dodge). See docs: Audio &gt; Entity Voices.

## Methods

| | |
|---|---|
| `String` | [normalize](#method-normalize)( `text: String` ) *static* |
| `Array[TriggerTagDefinition]` | [definitions](#method-definitions)() *static* |
| `Array[TriggerTagDefinition]` | [with_voice](#method-with-voice)() *static* |
| `Array[TriggerTagDefinition]` | [with_animation](#method-with-animation)() *static* |
| `TriggerTagDefinition` | [find](#method-find)( `slot_name: String` ) *static* |
| `PackedStringArray` | [chain](#method-chain)( `slot_name: String` ) *static* |

## Method descriptions

### String normalize( text: String ) {#method-normalize}

The tag turned into a name that is safe in a folder or a key: lower case, letters and numbers, underscores between words ("Critical Strike" -&gt; "critical_strike")

### Array[TriggerTagDefinition] definitions() {#method-definitions}

Every trigger tag of the project, by name

### Array[TriggerTagDefinition] with_voice() {#method-with-voice}

The triggers that give the creature a voice call

### Array[TriggerTagDefinition] with_animation() {#method-with-animation}

The triggers that give the creature an animation

### TriggerTagDefinition find( slot_name: String ) {#method-find}

The trigger that owns a slot (null when none does)

### PackedStringArray chain( slot_name: String ) {#method-chain}

The slot, then the slots it falls back to, in order (a loop is cut)

