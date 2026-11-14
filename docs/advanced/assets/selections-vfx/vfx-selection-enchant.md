<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFXSelectionEnchant

**Inherits:** [VFXSelection](/advanced/assets/selections-vfx/vfx-selection) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

An ENCHANT effect on a weapon (2026-11-14): a VFXEnchant from the enchant folder, fitted to the enchant segment of the weapon (Entity Assets &gt; Equipment Meshes, the Enchant tool). Picked as the "applied" visual effect of the enchant's effect; it is on as long as the enchant is on the worn item, and moves to the new weapon when the mesh in the hand changes.

## Properties

| | | |
|---|---|---|
| `VFXEnchant.Hand` | [hand](#prop-hand) | `VFXEnchant.Hand.ITEM` |

## Methods

| | |
|---|---|
| `String` | [get_description](#method-get-description)() |
| `String` | [get_vfx_type](#method-get-vfx-type)() |
| `String` | [get_vfx_name](#method-get-vfx-name)() |

## Property descriptions

### VFXEnchant.Hand hand = VFXEnchant.Hand.ITEM {#prop-hand}

Which weapon it goes on: the enchanted item (the hand its slot puts it in), or a hand.

## Method descriptions

### String get_description() {#method-get-description}

A short text about the visual effect, for the editor.

### String get_vfx_type() {#method-get-vfx-type}

The kind of visual effect: an enchant.

### String get_vfx_name() {#method-get-vfx-name}

The name of the visual effect that is picked.

