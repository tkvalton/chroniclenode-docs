<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# InputEventText

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The text of an input event for the screen: "Q", "Ctrl 2", "LMB", "Mouse 4", "Joy A". The interface labels (the keys of the action bar, the prompt of an object) use it so a slot or action bound to a mouse button or a gamepad button reads right, not only a key.

## Methods

| | |
|---|---|
| `String` | [describe](#method-describe)( `event: InputEvent` ) *static* |
| `String` | [describe_action](#method-describe-action)( `action_name: String` ) *static* |

## Method descriptions

### String describe( event: InputEvent ) {#method-describe}

The text of an input event for the screen ("Q", "Ctrl 2", "LMB").

### String describe_action( action_name: String ) {#method-describe-action}

The text of the first event of an action ("" when it has none)

