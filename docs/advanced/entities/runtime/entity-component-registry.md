<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EntityComponentRegistry

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Unified component manager for Entity - combines registry and factory Provides type-safe access to all entity components with lazy initialization Eliminates timing issues by ensuring components exist when accessed

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `system_hub: GameHost.SystemHub, owner_entity: Entity` ) |
| `Variant` | [get_component](#method-get-component)( `type: ComponentType` ) |
| `bool` | [has_component](#method-has-component)( `type: ComponentType` ) |
| `void` | [create_mediator](#method-create-mediator)( `system_hub: GameHost.SystemHub, owner_entity: Entity` ) |
| `StatsComponent` | [stats](#method-stats)() |
| `EffectsComponent` | [effects](#method-effects)() |
| `AbilityComponent` | [abilities](#method-abilities)() |
| `EquipmentInventoryComponent` | [equipment](#method-equipment)() |
| `InventoryComponent` | [inventory](#method-inventory)() |
| `AudioComponent` | [audio](#method-audio)() |
| `EntityRigComponent` | [rig](#method-rig)() |
| `EntityAnimationPlayer` | [animation](#method-animation)() |
| `EntityStateComponent` | [states](#method-states)() |
| `PetManagerComponent` | [pets](#method-pets)() |
| `EntityComponentMediator` | [mediator](#method-mediator)() |
| `Nameplate` | [nameplate](#method-nameplate)() |
| `void` | [set_nameplate](#method-set-nameplate)( `value: Nameplate` ) |
| `Marker3D` | [nameplate_marker](#method-nameplate-marker)() |
| `void` | [cleanup](#method-cleanup)() |

## Enumerations

### enum ComponentType {#enum-componenttype}

- **STATS** = `0`
- **EFFECTS** = `1`
- **ABILITIES** = `2`
- **EQUIPMENT** = `3`
- **INVENTORY** = `4`
- **AUDIO** = `5`
- **RIG** = `6`
- **ANIMATION** = `7`
- **STATES** = `8`
- **PETS** = `9`
- **MEDIATOR** = `10`

## Method descriptions

### void setup( system_hub: GameHost.SystemHub, owner_entity: Entity ) {#method-setup}

Initialize manager with entity reference

### Variant get_component( type: ComponentType ) {#method-get-component}

Get a component by type with safety check

### bool has_component( type: ComponentType ) {#method-has-component}

Check if component exists

### void create_mediator( system_hub: GameHost.SystemHub, owner_entity: Entity ) {#method-create-mediator}

*No description yet.*

### StatsComponent stats() {#method-stats}

Get stats component (convenience)

### EffectsComponent effects() {#method-effects}

Get effects component (convenience)

### AbilityComponent abilities() {#method-abilities}

Get abilities component (convenience)

### EquipmentInventoryComponent equipment() {#method-equipment}

Get equipment component (convenience)

### InventoryComponent inventory() {#method-inventory}

Get inventory component (convenience)

### AudioComponent audio() {#method-audio}

Get audio component (convenience)

### EntityRigComponent rig() {#method-rig}

Get rig component (convenience)

### EntityAnimationPlayer animation() {#method-animation}

Get animation component (convenience)

### EntityStateComponent states() {#method-states}

Get states component (convenience)

### PetManagerComponent pets() {#method-pets}

Get pets container (convenience)

### EntityComponentMediator mediator() {#method-mediator}

Get mediator (convenience)

### Nameplate nameplate() {#method-nameplate}

Get nameplate reference (assigned by external HUD system)

### void set_nameplate( value: Nameplate ) {#method-set-nameplate}

Set nameplate reference (called by external HUD system)

### Marker3D nameplate_marker() {#method-nameplate-marker}

Get nameplate positioning marker

### void cleanup() {#method-cleanup}

Cleanup all components

