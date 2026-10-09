# Global Variables

A **global variable** is a named value that the whole game shares and that is **saved with the game**: `king_dead`, `bandits_killed`, `reputation_with_miller`, `chosen_path`. Events set them, conditions test them, and [quests](/basic/events-and-quests/quests) and conversations can react to them. They are how one part of the story tells another part what happened.

**Events > Global Variables** lists them, with their starting values.

## The editor

| Control | What it does |
|---|---|
| **Add** | Makes a variable: type its **key** and choose its **type** |
| **Edit** (double click, or right-click) | Changes the **starting value** |
| **Duplicate**, **Delete** | As they say |

Each line shows `key = value (type)`.

| Type | Holds | Example |
|---|---|---|
| **Int** | A whole number | `bandits_killed = 0` |
| **Float** | A number with decimals | `reputation = 12.5` |
| **Bool** | True or false | `king_dead = false` |
| **String** | Text | `chosen_path = "north"` |
| **Array**, **Dictionary** | A list, a set of named values | Edited in Godot's inspector (the editor says so) |

The **key** is the name you use everywhere; keep it short and without spaces (`king_dead`). A key must be unique.

## Using them

| Where | How |
|---|---|
| **Actions** | *Set Global Variable* sets a value. *Modify Global Variable* changes it: add, subtract, multiply or divide a number, append to text, or toggle a bool |
| **Conditions** | *Global Variable* is true when the variable compares the way you say with a value (equal, more than, less than...). The comparison fits the type |
| **Triggers** | *Global Variable* fires on any change, when the variable reaches a value, when it leaves a value, or when it crosses a number going up or down |
| **Code** | [`EventManager`](/advanced/events-and-quests/runtime/event-manager) holds them; see [How events are built](/advanced/events-and-quests/) |

## The starting value and the saved value

What you edit here is the **starting value**: a new game begins with it. While the game runs, the changes are made to a working copy and saved with the game; the file in the project is never changed. A new game starts from the starting values again. The **type is saved** with the value, so an int stays an int after a [save and load](/advanced/save-and-load).

## Event local variables

Variables that belong to a single event, and are not shared, are the [local variables of the event](/basic/events-and-quests/events#local-variables).

## See also

- [Events](/basic/events-and-quests/events), [Conditions](/basic/shared-systems/conditions).
