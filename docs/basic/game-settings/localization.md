# Localization

**Localization** is making the game playable in more than one language: the names and descriptions you write, the words of the interface, the text the toolkit makes itself ("Your bag is full") and the voice lines.

You write your game in **one language**, the **source language** (English by default). Every other language is a **translation** of it, kept in tables apart from your data. Nothing about an ability, an item or a quest changes, and the editors do not get longer: the name you type is the source text.

| Part | What it is |
|---|---|
| **The text in your data stays a plain text** | A name, a description, a chat of a conversation is written once, in the source language |
| **A key for every text** | Each text has a stable key made of what it belongs to: `item/1204/display_name`, `quest/777/objective/2/custom_description`, `conversation/9/chat/4/text`. Every entry has an id, so the keys do not change when you rename things |
| **Tables** | One table for each system (items, quests, conversations ...) and one for the words of the interface. A table holds, for every key, the source text and a column for each language. They are files in `src/data/localization/tables/` |
| **Looked up when the text is shown** | The property that holds the text (`display_name`, `description` ...) gives the translation when the game is played in another language. A text with no translation shows the source text: a missing translation is never an empty gap |
| **A changed source text is noticed** | A translation belongs to the source text it was written for. When you change the source text, the editor marks the translation **Needs review** |

## The Localization tab

**Settings > Localization.** It has five sections.

### Languages

The **source language** is the language you write in. Add the other languages of the game from the list (French, German, Japanese ...), or remove one (its translations stay in the tables). A language can have a **font**: Chinese, Japanese, Korean, Cyrillic, Arabic and Thai need a font that has their characters. A language with no font uses the default font of the theme, which falls back to a system font on a desktop computer.

### What is translated

The names and descriptions the player reads are **always** in the tables. Some text is only collected when your game shows it, because the toolkit does not show it itself (the name of a quest line, the description of a damage type, the name of a trainer). They are listed with a check box each: turn on the ones your game shows.

The **folders of your own interface** (for example `res://src/ui/`) are read for the words of your scenes (the text of Labels, Buttons, tooltips) and for the texts in your code that you wrap in [`Localization.t("...")`](/advanced/game-settings/localization/localization). The toolkit's own scenes are always read. **Words to leave out** lists words the generator should not collect (a name your code sets, a test text).

### Tables

**Update Tables From The Data** reads every text of the data and of the interface and writes the source texts into the tables. It runs as often as you want: it **adds** new texts, **keeps** the translations that are still right and **marks** the ones whose source text changed. The report says how many texts are new, changed or gone. The **coverage** below it lists each table with how much of each language is translated and how many translations need review.

### Translate

Choose a table and a language. The list shows every text of the table with its **state**:

| State | Meaning |
|---|---|
| **Missing** | No translation. The game shows the source text |
| **Needs review** | The source text changed after the translation was written. The game shows the old translation until you save it again (or change it) |
| **OK** | Translated for the current source text |

Filter by state, or search a key, a source text or a translation. Select a text to see its source and write the translation, then **Save Translation**. If a text has **holes** (`{name}`, `%s`, `%d`, `<Effect1>`), the translation must keep them (you may move them); the editor warns when a translation loses or adds a hole.

### Import and export

The tables go out as **CSV files** that a translator opens in a spreadsheet. A file holds one table: the columns are `key`, `source` and one column for each language. **Export This Table** writes the table shown, **Export Every Table** writes one file for each table, **Export All In One File** writes `all.csv` with a first column `collection`. **Import CSV Files** reads files back: the name of a file is its table (`item.csv`), unless the file has the column `collection`. A translation is written for the source text that was in the file; when the data changed since, it is marked Needs review. A language in a file that the game does not have yet is added.

## What is translated

| Where | Texts |
|---|---|
| **Names and descriptions** | Every type the player reads: abilities, effects (that last), items and their kinds, stats, pools, status effects, proficiencies, damage types, schools, NPCs, classes, interactable objects, factions, mounts, worlds, regions, currencies, recipes, schools of crafting, skill pools and trees, vendors, trainers, equipment definitions (slots, types, classes, qualities, affixes, sets, sockets) |
| **Parts inside them** | The nodes of a skill tree, the levels of a faction, the lessons of a trainer, the tiers and specializations of a profession, the pages of a readable, the steps of a combo, the objectives of a quest |
| **Quests and conversations** | Quest text and hand-in text, objective descriptions, the chats and responses of conversations, popup titles and texts |
| **Messages** | The floating text and the log phrase of a trigger tag, the speech and menu line of an interaction, the requirement message of an interactable object, the title of a readable |
| **Settings** | The labels of the keybinds, the races and bodies of character creation (names, descriptions, voices, animations, sliders) |
| **The interface** | The words of the scenes, the warnings (*Not enough resources!*), the reasons things cannot be done, the lines of the tooltips that have words, and the requirement messages |

Texts that are **ids or data** (tags, variable keys, animation names, file names) are never translated. Editors, documentation and developer messages stay in English.

## What the player sees

Two settings, in the settings window when you make them available to the player ([Game Settings](/basic/game-settings/settings)):

| Setting | What it does |
|---|---|
| **Text language** | The language of the text. Empty = the language of the computer when the game has it, else the source language |
| **Voice language** | The language of the spoken voice lines. Empty = the language of the text |

The text and the voice are separate: a player can hear French and read English.

## Voice lines in other languages

A voice line is a character (a folder of `voicelines/`) and a file. To give it a French recording, put a file **with the same name** in a folder of that language:

```
voicelines/mira/greeting.wav          the default recording (the source language)
voicelines/mira/fr/greeting.wav       the same line in French
```

When the voice language is French, the French file plays; a line with no French file plays in the default recording. Nothing in a conversation or an interaction changes: it points at the line, not at a language.

In the **audio editor** (Assets > Audio), a selected voice line shows a **Language** list: each language of the game with a mark (has a file, or missing), a player for that recording, and warnings (no recording, a recording much longer than the default, a folder that is not a language of the game, a file that has no default). **Add / Replace File** imports a recording into the folder of the language under the name of the line.

### Subtitles

A voice line has a **subtitle**, the words that are said. The audio editor shows it under the language list: click it to edit it. In another language the box shows the translation of the subtitle (also in the Localization tab, table `voiceline`). The subtitle shows on the [Subtitles](/basic/user-interface/hud) element of the HUD while a voice line plays, when the player has **Subtitles enabled** on. A conversation shows its own text, so the subtitle is for the voice lines of speak interactions, quests, events and abilities.

Where a voice line plays decides its channel: in a conversation, a speak interaction, a quest or a **Play Voice Line** event action it is **speech** and uses the Voice channel; as the sound of an ability or an effect it is a sound effect and uses the SFX channel.

## Words of the interface

The words of the scenes need no change: Godot translates the text of a Label or a Button by the text itself. The generator lists them and the tables hold the translations. A word you make in code is wrapped: `Localization.t("Your bag is full")`. Keep the holes in the English text; the translator moves them: `Localization.t("Buy: %s") % price`. For named holes use `Localization.format(Localization.t("Kill {count} {target}"), {"count": 5, "target": name})`.

### The test language

The language code **`pseudo`** is a made-up language that turns every text into a longer, accented version, so you can see what does not fit and what is not translated. It needs no table.

## Limits of the first version

- The sentences the game builds from numbers (the description of an effect, the lines of a tooltip) are still written in English with their numbers; the words that frame them are translated where the interface has them. They become templates in a later version ([what is left](/planned/localization)).
- A text with a plural (a currency, a count) has **two forms**: the name and a plural name. Languages that need three or four forms need more.
- Number, money and date formats are the Godot ones, and the interface is not mirrored for right-to-left languages (Godot draws the text itself).
- A recording in a language folder that has **no default** recording plays for that language only; the audio editor warns about it.

## For programmers

- Reading `display_name` or `description` gives the **translated** text while a language other than the source is active. The editor and the saves read the stored text; code that saves resources at run time wraps the save in `Localization.save_raw(func(): ...)`.
- **Never use a shown text to find something.** To find a resource by the name the data refers to, use `Localization.source_text(resource)`; better, use its id.
- `Localization.set_text_language("fr")` and `Localization.set_voice_language("fr")` change the language; `Localization.events.language_changed` tells the interface to refresh text it read once.
- Parts that are not database resources (a node of a skill tree, a level of a faction) get a `loc_key` when their resource is loaded; their text properties use it.
