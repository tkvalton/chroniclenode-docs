# Shared systems

Some tools are not a system of their own: you meet them in many editors. A level check on an ability, on an item and on a [quest](/basic/events-and-quests/quests) is the same tool. A quest, a level-up and a conversation can all give the same kind of prize.
This section explains those tools once, so the chapter of each system can simply say "add a requirement" or "give a reward".

| Shared system | What it is | Where you meet it |
|---|---|---|
| [Requirements](/basic/shared-systems/requirements) | What an entity must be or have: a level, a class, a stat, a reputation, a weapon | Abilities, effects, items, quests, crafting recipes, conversation responses |
| [Conditions](/basic/shared-systems/conditions) | A yes-or-no question about the game right now: is it alive, is a quest done, are three enemies near | Events, behaviors, stat effects, the Condition conditional effect, encounters |
| [Rewards](/basic/shared-systems/rewards) | Something given to the player: experience, an item, an ability, currency, reputation | Quests, level-ups, [skill trees](/basic/abilities-and-effects/skill-trees), conversations, events, the Grant Reward effect |
| [Groups](/basic/shared-systems/groups) | A label that makes effects, abilities and items interact: one Seal at a time, potions that share a [cooldown](/basic/keywords#cooldown) | Effects, abilities, items |
| [Text tokens](/basic/shared-systems/text-tokens) | Words in angle brackets that are filled in when text is shown: `<player name>` | Quests, conversations, popups |
| [Formulas](/basic/shared-systems/formulas) | How stat points turn into a value: armor, crit chance, growth per level | Stat effects, stat and pool growth |

## Requirements or conditions?

They look alike, and the difference is small:

- A **requirement** is about an **entity** and says what it needs to *use* something (an ability, an item) or *receive* it (a quest, an effect). It comes with a message for the player: "Requires level 20 (you are level 12)".
- A **condition** is a general **question**, asked while the game runs, to decide whether something happens: whether an event goes on, which attack an enemy picks, whether a bonus applies. Conditions can ask about almost anything, not only about one entity.

If the editor shows a **Requirements** list, add requirements. If it shows **Conditions**, add conditions.

## Small mechanics

The words these pages use for small mechanics, such as [argument entity](/basic/keywords#argument-entity) and [pending reward](/basic/keywords#pending-reward), are explained on the [Keywords](/basic/keywords) page.
