# Localization: what is left

The localization tool is built, with the templates for the sentences the game builds, plural forms and the names of the weight steps: see [Localization](/basic/game-settings/localization). These are the parts that are not done.

## Names of entities when the language changes

An entity gets its name when it is made, so a language chosen while playing applies to the entities made afterwards. The plan is to let the nameplates, unit frames, party frames and damage meter read the name again when the language changes (a refresh hook on the interface elements).

## More plural forms for money

A currency has a name and a plural name. Languages with three or four forms would need the other forms in the currency too.

## Smaller leftovers

- The name of the object a combat script spawns ("Spawn Interactable" action) is not in the tables yet.
- Recipe categories have a translated label in the tables, but the crafting window does not list categories yet.
- Numbers, money and dates use the Godot formats, and the interface is not mirrored for right-to-left languages.
