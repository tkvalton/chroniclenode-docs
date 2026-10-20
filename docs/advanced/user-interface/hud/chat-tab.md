<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ChatTab

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A tab of the chat box: a name, the channels it shows and, for the combat channels, the kinds of event it shows. A tab is a filter on the messages: nothing is copied.

## Properties

| | | |
|---|---|---|
| `String` | [tab_name](#prop-tab-name) | `"General"` |
| `Array[String]` | [channels](#prop-channels) | `[]` |
| `int` | [kinds](#prop-kinds) | `0` |

## Methods

| | |
|---|---|
| `bool` | [accepts](#method-accepts)( `message: ChatMessage` ) |

## Property descriptions

### String tab_name = "General" {#prop-tab-name}

The name on the tab

### Array[String] channels = [] {#prop-channels}

The channels the tab shows (pick them in the list). A message that belongs to one of them is shown

### int kinds = 0 {#prop-kinds}

The kinds of combat event the tab shows. None ticked = all of them. A message that is not a combat event is not filtered by this

## Method descriptions

### bool accepts( message: ChatMessage ) {#method-accepts}

Does the tab show this message?

