<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LightInteraction

**Inherits:** [SwitchInteraction](/advanced/entities/interactions/switch-interaction) < [InteractableObjectInteraction](/advanced/entities/interactions/interactable-object-interaction) < [Interaction](/advanced/entities/interactions/interaction) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Light interaction - extends SwitchInteraction to control lighting Creates Light3D node (OmniLight3D or SpotLight3D) at runtime

## Properties

| | | |
|---|---|---|
| `LightType` | [light_type](#prop-light-type) | `LightType.OMNI` |
| `Color` | [light_color](#prop-light-color) | `Color.WHITE` |
| `float` | [light_energy](#prop-light-energy) | `1.0` |
| `float` | [light_indirect_energy](#prop-light-indirect-energy) | `1.0` |
| `bool` | [shadow_enabled](#prop-shadow-enabled) | `false` |
| `float` | [shadow_bias](#prop-shadow-bias) | `0.1` |
| `float` | [shadow_normal_bias](#prop-shadow-normal-bias) | `2.0` |
| `float` | [omni_range](#prop-omni-range) | `5.0` |
| `float` | [omni_attenuation](#prop-omni-attenuation) | `1.0` |
| `OmniLight3D.ShadowMode` | [omni_shadow_mode](#prop-omni-shadow-mode) | `OmniLight3D.ShadowMode.SHADOW_CUBE` |
| `float` | [spot_range](#prop-spot-range) | `5.0` |
| `float` | [spot_attenuation](#prop-spot-attenuation) | `1.0` |
| `float` | [spot_angle](#prop-spot-angle) | `45.0` |
| `float` | [spot_angle_attenuation](#prop-spot-angle-attenuation) | `1.0` |
| `VFXSelection` | [light_vfx](#prop-light-vfx) |  |

## Variables

| | | |
|---|---|---|
| `Light3D` | [light_node](#var-light-node) |  |
| `Node3D` | [vfx_instance](#var-vfx-instance) |  |

## Methods

| | |
|---|---|
| `void` | [setup_for_interactable_objects](#method-setup-for-interactable-objects)( `interactable: InteractableObject` ) |
| `void` | [set_switch_state](#method-set-switch-state)( `new_state: SwitchState, triggering_entity: Entity = null` ) |
| `void` | [turn_on_light](#method-turn-on-light)( `triggering_entity: Entity = null` ) |
| `void` | [turn_off_light](#method-turn-off-light)( `triggering_entity: Entity = null` ) |
| `SwitchState` | [get_light_state](#method-get-light-state)() |
| `bool` | [is_light_on](#method-is-light-on)() |
| `bool` | [is_light_off](#method-is-light-off)() |
| `void` | [break_light](#method-break-light)() |
| `Light3D` | [get_light_node](#method-get-light-node)() |
| `void` | [set_light_color](#method-set-light-color)( `color: Color` ) |
| `void` | [set_light_energy](#method-set-light-energy)( `energy: float` ) |
| `void` | [set_light_range](#method-set-light-range)( `range_value: float` ) |
| `void` | [set_shadows_enabled](#method-set-shadows-enabled)( `enabled: bool` ) |
| `void` | [toggle_shadows](#method-toggle-shadows)( `enabled: bool` ) |
| `Dictionary` | [save_state](#method-save-state)() |
| `void` | [load_state](#method-load-state)( `state: Dictionary` ) |
| `void` | [cleanup](#method-cleanup)() |

## Signals

### light_turned_on( entity: Entity ) {#signal-light-turned-on}

### light_turned_off( entity: Entity ) {#signal-light-turned-off}

### light_state_changed( is_on: bool, entity: Entity ) {#signal-light-state-changed}

## Enumerations

### enum LightType {#enum-lighttype}

- **OMNI** = `0` - OmniLight3D - emits in all directions
- **SPOT** = `1` - SpotLight3D - emits in cone shape

## Property descriptions

*Light Type*

### LightType light_type = LightType.OMNI {#prop-light-type}

*No description yet.*

*Light Properties*

### Color light_color = Color.WHITE {#prop-light-color}

Light color

### float light_energy = 1.0 {#prop-light-energy}

Light energy/intensity multiplier

### float light_indirect_energy = 1.0 {#prop-light-indirect-energy}

Indirect lighting multiplier (for GI)

### bool shadow_enabled = false {#prop-shadow-enabled}

Whether light casts shadows

### float shadow_bias = 0.1 {#prop-shadow-bias}

Shadow bias (prevents shadow acne)

### float shadow_normal_bias = 2.0 {#prop-shadow-normal-bias}

Shadow normal bias

*Omni Light Settings*

### float omni_range = 5.0 {#prop-omni-range}

Range of the omni light (only used if light_type is OMNI)

### float omni_attenuation = 1.0 {#prop-omni-attenuation}

Attenuation curve for omni light (2.0 = physically accurate)

### OmniLight3D.ShadowMode omni_shadow_mode = OmniLight3D.ShadowMode.SHADOW_CUBE {#prop-omni-shadow-mode}

Shadow mode for omni lights

*Spot Light Settings*

### float spot_range = 5.0 {#prop-spot-range}

Range of the spot light (only used if light_type is SPOT)

### float spot_attenuation = 1.0 {#prop-spot-attenuation}

Attenuation curve for spot light (2.0 = physically accurate)

### float spot_angle = 45.0 {#prop-spot-angle}

Spotlight cone angle in degrees

### float spot_angle_attenuation = 1.0 {#prop-spot-angle-attenuation}

Spotlight angular attenuation curve

*Visual Effects*

### VFXSelection light_vfx {#prop-light-vfx}

Optional VFX selection to play when light is on (sparks, particles, etc.)

## Variable descriptions

### Light3D light_node {#var-light-node}

*No description yet.*

### Node3D vfx_instance {#var-vfx-instance}

*No description yet.*

## Method descriptions

### void setup_for_interactable_objects( interactable: InteractableObject ) {#method-setup-for-interactable-objects}

*Overrides this function of [SwitchInteraction](/advanced/entities/interactions/switch-interaction).*

### void set_switch_state( new_state: SwitchState, triggering_entity: Entity = null ) {#method-set-switch-state}

Force the state: the light signals follow the switch signals

### void turn_on_light( triggering_entity: Entity = null ) {#method-turn-on-light}

Turn the light on

### void turn_off_light( triggering_entity: Entity = null ) {#method-turn-off-light}

Turn the light off

### SwitchState get_light_state() {#method-get-light-state}

Get the current light state

### bool is_light_on() {#method-is-light-on}

Check if light is currently on

### bool is_light_off() {#method-is-light-off}

Check if light is currently off

### void break_light() {#method-break-light}

Break the light (set to BROKEN state)

### Light3D get_light_node() {#method-get-light-node}

Get the Light3D node (for advanced control)

### void set_light_color( color: Color ) {#method-set-light-color}

Update light color at runtime

### void set_light_energy( energy: float ) {#method-set-light-energy}

Update light energy at runtime

### void set_light_range( range_value: float ) {#method-set-light-range}

Update light range at runtime

### void set_shadows_enabled( enabled: bool ) {#method-set-shadows-enabled}

Enable/disable shadows at runtime

### void toggle_shadows( enabled: bool ) {#method-toggle-shadows}

Toggle shadows (for settings system integration)

### Dictionary save_state() {#method-save-state}

*Overrides this function of [SwitchInteraction](/advanced/entities/interactions/switch-interaction).*

### void load_state( state: Dictionary ) {#method-load-state}

*Overrides this function of [SwitchInteraction](/advanced/entities/interactions/switch-interaction).*

### void cleanup() {#method-cleanup}

*Overrides this function of [SwitchInteraction](/advanced/entities/interactions/switch-interaction).*

