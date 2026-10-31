<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ResourceListEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

A list of resources edited in place: a container for each item (titled with a line that says what it is) with buttons to move and remove it and a form for its fields, and an Add button below. It works on the array it is given (an exported Array of a config), so the owner only has to save the config when `changed` is sent. The generated forms of the config editors cannot do arrays; this is the control that does.

## Description

list.setup(config.exposed_effects, func() -&gt; Resource: return WeatherEffectEntry.new(), func(item: Resource) -&gt; String: return item.describe(), func(_item: Resource) -&gt; Control: return WeatherEffectEntryForm.new())

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `items: Array, make_item: Callable, describe: Callable, make_form: Callable, add_text: String = "Add", empty_text: String = "Nothing in the list."` ) |
| `void` | [rebuild](#method-rebuild)() |

## Signals

### changed() {#signal-changed}

An item was added, removed, moved or edited

## Method descriptions

### void setup( items: Array, make_item: Callable, describe: Callable, make_form: Callable, add_text: String = "Add", empty_text: String = "Nothing in the list." ) {#method-setup}

Shows `items` (the array of the config: it is changed in place). `make_item` makes a new item, `describe` gives the title of an item, `make_form` makes the form of an item (a control with load_config(item) and a config_changed signal: a BaseConfigEditor that is embedded is one)

### void rebuild() {#method-rebuild}

Draws the rows again from the array

