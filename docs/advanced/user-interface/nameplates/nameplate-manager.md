<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# NameplateManager

**Inherits:** [CanvasLayer](https://docs.godotengine.org/en/stable/classes/class_canvaslayer.html)

Manages the creation, positioning, and cleanup of UI nameplates for various entities in the game.

## Description

This class handles:

- Creating appropriate nameplates for different entity types (companions, minions, bosses, pets)
- Positioning nameplates in screen space based on entity's 3D position
- Scaling nameplates based on camera distance
- Draw order based on distance to camera (closer = on top)
- Priority drawing for targeted entities
- Safely handling entity/nameplate lifecycle to prevent freed instance errors
- Providing methods to add, remove, and clear nameplates

The manager uses a deferred removal system to prevent modifying collections during iteration and includes multiple validity checks to handle cases where entities or nameplates are freed.

## Variables

| | | |
|---|---|---|
| `Dictionary` | [nameplates](#var-nameplates) | `{}` |
| `Array` | [pending_removal](#var-pending-removal) | `[]` |
| `bool` | [combat_visibility_enabled](#var-combat-visibility-enabled) | `false  # Whether "show in combat only" is active` |
| `int` | [active_combat_count](#var-active-combat-count) | `0  # Track number of active encounters` |
| `CameraController` | [camera_controller](#var-camera-controller) |  |
| `WorldContainer` | [world_container](#var-world-container) |  |
| `PartyManager` | [party_manager](#var-party-manager) |  |

## Methods

| | |
|---|---|
| `void` | [connect_signals](#method-connect-signals)( `system_hub: GameHost.SystemHub` ) |
| `void` | [enable_processing](#method-enable-processing)() |
| `void` | [disable_processing](#method-disable-processing)() |
| `void` | [add_nameplate](#method-add-nameplate)( `owner: Variant` ) |
| `void` | [remove_nameplate](#method-remove-nameplate)( `owner: Variant` ) |
| `void` | [clear_all_nameplates](#method-clear-all-nameplates)() |
| `void` | [show_floating_text](#method-show-floating-text)( `owner: Variant, text: String, color: Color` ) |

## Signals

### effect_tooltip_requested( effect: EffectInstance ) {#signal-effect-tooltip-requested}

Tooltip signals - route from nameplates to UIManager

### hide_tooltip( force_hide: bool ) {#signal-hide-tooltip}

## Variable descriptions

### Dictionary nameplates =  {#var-nameplates}

Dictionary to store owner -&gt; nameplate mappings (Entity or InteractableObject)

### Array pending_removal = [] {#var-pending-removal}

Array for safely queuing owners for removal without modifying the dictionary during iteration

### bool combat_visibility_enabled = false  # Whether "show in combat only" is active {#var-combat-visibility-enabled}

Combat visibility tracking

### int active_combat_count = 0  # Track number of active encounters {#var-active-combat-count}

*No description yet.*

### CameraController camera_controller {#var-camera-controller}

SystemRefs

### WorldContainer world_container {#var-world-container}

*No description yet.*

### PartyManager party_manager {#var-party-manager}

*No description yet.*

## Method descriptions

### void connect_signals( system_hub: GameHost.SystemHub ) {#method-connect-signals}

Connect to the PartyManager's signal for entity being freed

### void enable_processing() {#method-enable-processing}

Enable nameplate processing - call this when level is fully loaded

### void disable_processing() {#method-disable-processing}

Disable nameplate processing - call this during loading

### void add_nameplate( owner: Variant ) {#method-add-nameplate}

Creates and adds a nameplate for the given owner (Entity or InteractableObject)

### void remove_nameplate( owner: Variant ) {#method-remove-nameplate}

Removes a nameplate for the specified owner (Entity or InteractableObject)

### void clear_all_nameplates() {#method-clear-all-nameplates}

Removes all nameplates and clears the dictionary

### void show_floating_text( owner: Variant, text: String, color: Color ) {#method-show-floating-text}

Floats `text` up from the owner's nameplate marker (Entity or InteractableObject)

