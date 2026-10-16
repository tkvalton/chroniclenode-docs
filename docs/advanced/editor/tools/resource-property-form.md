<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ResourcePropertyForm

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Builds the fields of a resource from its exported variables, so a class that someone adds (a TurretSeat, a HoverDrive) is editable without an editor of its own: a switch for a bool, a number box for an int or a float (with the range of the export), a line for a String, a list for an enum, a color button, three boxes for a Vector3. Arrays and resources are left to the editor that uses the form. Give the class a `get_field_descriptions()` that returns &#123;variable name: sentence&#125; and the sentences are the tooltips.

## Methods

| | |
|---|---|
| `void` | [build](#method-build)( `container: Container, resource: Resource, on_changed: Callable, skip: Array[String] = []` ) *static* |

## Method descriptions

### void build( container: Container, resource: Resource, on_changed: Callable, skip: Array[String] = [] ) {#method-build}

Adds the fields of `resource` to `container`. `on_changed` is called after every change. `skip` lists variables that the caller draws itself

