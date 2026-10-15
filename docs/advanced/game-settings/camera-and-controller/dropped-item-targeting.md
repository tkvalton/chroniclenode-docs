<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DroppedItemTargeting

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Finds the dropped item that the mouse or the crosshair is on, lights it up and shows its name, and picks it up when the Gameplay Config says so.

## Description

When the mouse is free (a visible pointer) the item under the pointer counts, and a click picks it up: Dropped Items &gt; Pickup by mouse over. When the mouse is captured for mouse-look (first person, over the shoulder) the item under the crosshair counts, and the interact key picks it up: Pickup by look at. Both need the item to be within the mouse range of the character, and the world in between not to block the view. The PlayerController owns one and calls it.

## Methods

| | |
|---|---|
| `DroppedItem` | [get_item](#method-get-item)() |
| `void` | [update](#method-update)( `delta: float` ) |
| `bool` | [handle_input](#method-handle-input)( `event: InputEvent` ) |

## Constants

- `float` **CHECK_INTERVAL** = `0.05` - How many seconds between looks at what is under the pointer

## Method descriptions

### DroppedItem get_item() {#method-get-item}

The dropped item that is hovered or looked at now (null when none)

### void update( delta: float ) {#method-update}

Called every frame: looks at what is under the pointer (or the crosshair) a few times a second and lights it up

### bool handle_input( event: InputEvent ) {#method-handle-input}

Called with the input events the interface did not use. True when the event picked an item up (the controller then does not use it)

