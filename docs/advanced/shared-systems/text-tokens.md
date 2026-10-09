# Text tokens: how they are built

Text tokens are handled by one static class, [TextTokens](/advanced/shared-systems/text-tokens/text-tokens). A token is a name in angle brackets; `TextTokens.format(text, context)` replaces every token it knows. The [Basic guide](/basic/shared-systems/text-tokens) lists the tokens and where they work.

## Using it

```gdscript
var text: String = TextTokens.format("Well met, <player name>!", {"player": player})
var title: String = TextTokens.format(quest.display_name, {"quest": quest, "player": player})
```

`format` returns the text unchanged when it contains no `<`. Anything in angle brackets that is not a token stays as it is.

### The context

A dictionary with what the text belongs to:

| Key | Type | Used by |
|---|---|---|
| `"player"` | [`Entity`](/advanced/entities/runtime/entity) | `player name`, `player class`, `player level`, `party size`, `world name`. When not given, the current player ([`PlayerUtility.get_current_player()`](/advanced/managers/utilities/player-utility)) |
| `"npc"` | `Entity` | `npc name` |
| `"quest"` | [`Quest`](/advanced/events-and-quests/events/quest) | `quest name`, `quest level` (empty when the quest has no level) |
| `"objective"` | [`QuestObjective`](/advanced/events-and-quests/events/quest-objective) | `progress` (`current_progress`) and `target` (`target_progress`) |

A token that resolves to an empty string gets its entry of `FALLBACKS` ("Adventurer", "this land", "someone" ...), so a gap never shows.

### Matching

`<Player Name>`, `<player_name>` and `<player name>` are the same token: the name is lowercased, underscores become spaces, and runs of spaces are collapsed (`_normalise`). A token name starts with a letter and holds letters, digits, spaces and underscores (`<([A-Za-z][A-Za-z0-9 _]*)>`).

## The functions

| Function | What it does |
|---|---|
| `format(text, context = {})` | The text with every token filled in |
| `is_token(name)` | Is it a token of the toolkit or one the game added? |
| `get_all_tokens()` | A dictionary of every token and what it says, for tooltips |
| `get_help_text()` | A ready tooltip that lists the tokens. The editors put it on the fields that take tokens |
| `find_unknown(text)` | The names in angle brackets that are not tokens (a typo), for the warnings of the editor |
| `register(token, resolver, description)` | Adds a token of the game |
| `unregister(token)` | Removes one the game added |

## Adding your own token

`register` takes a name, a `Callable` that gets the context and returns the text, and a description. Call it once when the game starts.

```gdscript
func _ready() -> void:
    TextTokens.register("guild name", func(context: Dictionary) -> String:
        var player: Entity = context.get("player") as Entity
        return GuildManager.guild_of(player).name if player else "", "The name of the player's guild")
```

The resolver returns an empty string when it has nothing to say; a token you add has no fallback, so give it one in the resolver. A token added this way appears in the tooltips of the editor (`get_help_text`) and does not raise the unknown-token warning.

## Where the shipped code calls it

| Place | Text |
|---|---|
| `Quest.get_display_title` and `get_display_description` | Quest name and description, with `quest` and `player` |
| `QuestObjective.update_description` | Objective text, with the objective |
| `ConversationPanelUI` | Conversation chat and response texts, with the NPC and the player |
| `DefaultPopupUI` | The title and text of the default popup |

## Not to be confused with

`EffectTextUtil` fills in `<Effect1>` and `<EffectText1>` in the description of an ability or effect from the effects the text belongs to. It is a separate class with its own pattern; see [Child effects and auras](/basic/abilities-and-effects/child-effects-and-auras#using-the-text-of-the-child-effects-in-a-description).

## The classes

<!-- classes:shared-systems/text-tokens -->
| Class | What it is |
|---|---|
| [EffectTextUtil](/advanced/shared-systems/text-tokens/effect-text-util) | The words of an effect inside a text: the `<Effect1>` and `<EffectText1>` placeholders of the description of an ability, and of an effect with child effects. |
| [TextTokens](/advanced/shared-systems/text-tokens/text-tokens) | Words in &lt;angle brackets&gt; that are filled in when text is shown: "Well met, &lt;player name&gt;!" or "Bring me &lt;target&gt; wolf pelts, &lt;player class&gt;". |
<!-- /classes -->
