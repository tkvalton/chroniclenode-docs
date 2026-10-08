<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TextTokens

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Words in &lt;angle brackets&gt; that are filled in when text is shown: "Well met, &lt;player name&gt;!" or "Bring me &lt;target&gt; wolf pelts, &lt;player class&gt;". Quest names and descriptions, objectives, hand-in text and conversation text can use them (the editor says which in the tooltips of those fields).

## Description

A token is a name in angle brackets. Capital letters, underscores and spaces do not matter (&lt;Player Name&gt; is &lt;player_name&gt;). Something in angle brackets that is not a token is left as it is. What a token says depends on what the text belongs to (the context): the player is the one in control unless a player is given, an NPC token needs the NPC the player talks to, and so on. A token that has nothing to say in the place it is shown gets a plain fallback ("Adventurer"), never an empty gap.

## Methods

| | |
|---|---|
| `void` | [register](#method-register)( `token: String, resolver: Callable, description: String` ) *static* |
| `void` | [unregister](#method-unregister)( `token: String` ) *static* |
| `bool` | [is_token](#method-is-token)( `token: String` ) *static* |
| `Dictionary` | [get_all_tokens](#method-get-all-tokens)() *static* |
| `String` | [get_help_text](#method-get-help-text)() *static* |
| `String` | [format](#method-format)( `text: String, context: Dictionary = {}` ) *static* |
| `PackedStringArray` | [find_unknown](#method-find-unknown)( `text: String` ) *static* |

## Constants

- `Dictionary` **BUILT_IN** = `{` - The tokens the toolkit has: name -&gt; (what it says, and where)
- `Dictionary` **FALLBACKS** = `{` - What a token says when it has nothing to say where it is shown

## Method descriptions

### void register( token: String, resolver: Callable, description: String ) {#method-register}

Add a token of the game. The resolver gets the context (a Dictionary with what the text belongs to: "player", "npc", "quest", "objective") and gives the text ("" when it has nothing to say here)

### void unregister( token: String ) {#method-unregister}

Remove a token that a game added

### bool is_token( token: String ) {#method-is-token}

Is this a token (the toolkit's or one the game added)?

### Dictionary get_all_tokens() {#method-get-all-tokens}

All tokens with what they say (for the tooltips of the editor)

### String get_help_text() {#method-get-help-text}

The text of a tooltip that lists the tokens: put it on a text field that can use them

### String format( text: String, context: Dictionary = {} ) {#method-format}

The text with every token filled in. Context: "player" (an Entity; the one in control when not given), "npc" (an Entity), "quest" (a Quest), "objective" (a QuestObjective)

### PackedStringArray find_unknown( text: String ) {#method-find-unknown}

The things in angle brackets that are not tokens (a typo: "&lt;player nane&gt;"), for the warnings of the editor

