<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GrowthOverridesEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

The list of growth entries of a StatsData (an NPC's Level Growth Overrides) or of a GrowthProfile: one growth editor for each stat or pool that grows differently, a Remove button for each, and a picker to add one more. The holder is any resource with `growth_overrides` and the three calls get_growth_override / set_growth_override / remove_growth_override, so both share this one control.

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `holder: Resource, hint: String` ) |
| `String` | [target_name](#method-target-name)( `target_id: int` ) *static* |

## Signals

### changed() {#signal-changed}

## Method descriptions

### void setup( holder: Resource, hint: String ) {#method-setup}

Shows the entries of `holder`. `hint` is the text above the list

### String target_name( target_id: int ) {#method-target-name}

"Stat: Strength", "Pool: Health" or "Unknown (id)"

