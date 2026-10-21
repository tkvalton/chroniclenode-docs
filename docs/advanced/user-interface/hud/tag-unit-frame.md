<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TagUnitFrame

**Inherits:** [HUDUIElement](/advanced/user-interface/hud/hudui-element) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

A unit frame for an **entity tag** (Boss, Elite ...): a large frame that appears while the **target** of the player in control has the tag, and goes when it has not. Put one in the HUD of the in-game UI scene for each tag that deserves its own frame (the template has one for "boss" at the top of the screen), move and restyle it like any HUD element, and give it the key of the tag.

## Description

When the target has several tags that have a frame, the tag with the highest **priority** wins (see UITagDefinition.priority): only its frame is shown. The frame shows the name (in the color of the tag when the tag asks for it), the icon of the tag, the health pools of the target and, for an entity, its cast bar. It needs the tag to exist under Entity Tags; a target without the tag shows nothing.

## Properties

| | | |
|---|---|---|
| `String` | [ui_tag_key](#prop-ui-tag-key) | `"boss"` |
| `PackedScene` | [pool_bar_scene](#prop-pool-bar-scene) |  |
| `bool` | [show_cast_bar](#prop-show-cast-bar) | `true` |

## Variables

| | | |
|---|---|---|
| `Array[TagUnitFrame]` | [frames](#var-frames) | `[]` |
| `Variant` | [shown_target](#var-shown-target) | `null` |

## Methods

| | |
|---|---|
| `String` | [get_tag_key](#method-get-tag-key)() |
| `TagUnitFrame` | [frame_for](#method-frame-for)( `target: Variant` ) *static* |
| `void` | [initialize_ui](#method-initialize-ui)( `p_system_hub: GameHost.SystemHub` ) |
| `void` | [watch_player](#method-watch-player)( `player: Player` ) |
| `void` | [show_target](#method-show-target)( `target: Variant` ) |

## Property descriptions

### String ui_tag_key = "boss" {#prop-ui-tag-key}

The key of the entity tag this frame is for ("boss"): the key you gave the tag in the Entity Tags editor

### PackedScene pool_bar_scene {#prop-pool-bar-scene}

The scene of one pool bar (the health bars of the target)

### bool show_cast_bar = true {#prop-show-cast-bar}

Shows the cast bar of an entity target while it casts

## Variable descriptions

### Array[TagUnitFrame] frames = [] {#var-frames}

The frames in the scene (a frame registers itself while it is in the tree): they decide together which one a target gets

### Variant shown_target = null {#var-shown-target}

The target shown now (an entity or an object), or null

## Method descriptions

### String get_tag_key() {#method-get-tag-key}

The key without spaces and in lower case, as the tags compare it

### TagUnitFrame frame_for( target: Variant ) {#method-frame-for}

The frame a target gets: the frame of its tag with the highest priority (the first on a tie). Null when the target has no tag that has a frame.

### void initialize_ui( p_system_hub: GameHost.SystemHub ) {#method-initialize-ui}

Sets the frame up as a HUD element: it follows the target of the player in control

### void watch_player( player: Player ) {#method-watch-player}

Follows the target of a player (the player in control, normally): the frame shows when that target has the tag

### void show_target( target: Variant ) {#method-show-target}

Shows a target (an entity or an object) when this frame is the one for it, hides the frame otherwise

