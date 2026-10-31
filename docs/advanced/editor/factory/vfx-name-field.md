<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VfxNameField

**Inherits:** [ConfigField](/advanced/editor/factory/config-field) < [HBoxContainer](https://docs.godotengine.org/en/stable/classes/class_hboxcontainer.html)

A string property that is the name of an effect of the VFX library, picked from a drop-down of the effects of one kind (the Weather effects: the scenes in src/data/vfx/weather/) with an entry for none. A name that is not in the library any more stays chosen and reads "Missing: name", so opening a config loses nothing. `refresh_library()` reads the library again (a scene may have been added).

## Properties

| | | |
|---|---|---|
| `String` | [vfx_type](#prop-vfx-type) | `"weather"` |
| `String` | [none_text](#prop-none-text) | `"(no particles)"` |

## Methods

| | |
|---|---|
| `void` | [refresh_library](#method-refresh-library)() |

## Property descriptions

### String vfx_type = "weather" {#prop-vfx-type}

The kind of effect offered (a folder of src/data/vfx/): weather, loop, oneshot ...

### String none_text = "(no particles)" {#prop-none-text}

What the first entry says: no effect

## Method descriptions

### void refresh_library() {#method-refresh-library}

Reads the library again and shows the value of the property

