# Localization

::: warning Not built yet
This page describes a planned feature. Today the toolkit is written in one language. The **Localization** editor tab is a placeholder, the *Language* setting does nothing, and the only text that holds more than one language is the text of [conversations](/basic/behaviors/conversations), their voice lines and the hand-in text of [quests](/basic/events-and-quests/quests), which are lists with one entry for each language.
:::

**Localization** is making the game playable in more than one language: the names and descriptions you write, the text the toolkit makes itself ("Your bag is full", the tooltips), the labels of the interface and, where you have them, the voice lines.

## The idea

You write your game in **one language**, the **authoring language** (English for the toolkit's own text). Everything else is a **translation** of it, kept in a table apart from your data:

| Part | What it is |
|---|---|
| **The text in your data stays a plain string** | A [database](/basic/database) entry keeps its name and description as they are. They are the source text. Nothing about an ability, an item or a quest changes, and the editor does not get longer |
| **A key for every string** | Each string has a stable key built from what it belongs to: `ability/12345/display_name`, `quest/777/objective/2`, `conversation/9/chat/4`. Every entry already has an id, so the keys do not change when you rename things |
| **One table for the translations** | A table of *key, source text, and a column for each language*, kept as a CSV file. Translators can work in a spreadsheet, a PO editor or an online service, and the table can be edited in the editor |
| **Looked up when the text is shown** | The game asks for the translation of a key and shows the source text when there is none. A missing translation is never an empty gap |
| **A changed source text is noticed** | A translation belongs to the source text it was made from. When you change the English, the old translation is not shown with the wrong meaning: the game shows the English until the translation is updated, and the editor marks it **needs review** |

### The arrays of conversations and quests

The entries that hold one text for each language today (conversation text, voice lines, the hand-in text of a quest) become part of the same table. Their first entry is the source text; the others become columns. The editors that show them keep a language switch.

## The tool

The **Localization** tab of the [Game Settings](/basic/game-settings/localization) gets the following.

- **Languages.** The list of languages of the game: a code (`en`, `fr`, `ja`), the name, the name in that language, an optional font for it (a language with many characters needs a different font) and whether it is shown to the player.
- **A generator.** One button writes the CSV file with every string that can be translated: the strings of your database, and the strings of the toolkit itself. It runs again whenever you want: it **adds** new strings, **keeps** the translations that are still right and **flags** the rest.
- **Coverage.** How much of each language is translated, by system (abilities, items, quests, interface), and what is missing or needs review.
- **A table editor.** Key, source text, translation, one language at a time, with a filter for *missing* and *needs review*.
- **Import and export.** The CSV in, the CSV out.
- **Pseudo-localization.** A test language that turns every text into a longer, accented version (*[Ŝţàŕţ ĝàmè!!!]*). A string that is **not** in the table stays plain, so you see at a glance what is not translated, and the long text shows which windows overflow.
- **The player's choice.** The *Language* setting becomes a list of the languages of the game, saved with the player's settings. The first time, the language of the computer is used when the game has it. **Text language** and **voice language** can be set apart, with a fallback when a language has no voice.

## What it must handle

Text that is made by the game, not written, needs its own care.

| Text | The problem | The plan |
|---|---|---|
| **Generated item names** | "Heavy Hood of the Monkey": the order of the words is different in other languages | The name is a template ("{prefix} {item} {suffix}") that each language can reorder |
| **Counts** | "Defeat 5 wolves", "1 wolf" | Texts with a number get a plural form for each language (the table supports *one*, *few*, *many*) |
| **Descriptions made from data** | The description of an effect is built from its numbers and its type | Each sentence is a translatable template with the numbers as named holes |
| **Text tokens** | `<player name>` and the other [tokens](/basic/shared-systems/text-tokens) | The token names stay as they are in every language, and the table checks that a translation kept them |
| **Numbers, money and dates** | The thousands mark, the decimal mark, the order of a date | Taken from the language |
| **Fonts** | A font without the glyphs of a language | A font for each language, in the list of languages |
| **Voice lines** | Already one for each language | Chosen by the voice language |

## What is there today

- Conversation text, conversation responses and the hand-in text of a quest as lists with one entry for each language.
- Voice lines as a list with one entry for each language.
- The [text tokens](/basic/shared-systems/text-tokens).
- Godot's own translation system, which the plan builds on: the labels of a scene are translated for free when their text is in the table.

## To do before the build

The text of the toolkit has to be **gone through, system by system**, to make the list of what is to be translated and to find the text that is written in the code and in the scenes. That list is part of the work, not of this page.

1. Settings, keybinds and the settings menu.
2. The interface scenes: labels, panels, tooltips.
3. Text made by the game: tooltips, effect descriptions, warnings, combat log.
4. Database fields of each editor: names, descriptions, texts.
5. Quests, conversations, popups, readables.
6. The generated names of items and the objective descriptions of quests.

## Still to decide

- Whether the table is **one file or one file for each system** (a large game has a large table).
- Whether the editor edits the CSV **directly** or reads and writes it.
- Which languages the toolkit ships with besides English.
- Whether **right-to-left** languages are in the first version.
