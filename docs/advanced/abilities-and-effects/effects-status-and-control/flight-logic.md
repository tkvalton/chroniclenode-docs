<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# FlightLogic

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

How an entity moves while a Flight effect holds it in the air. This base class is the **floating** flight: the entity moves the way it swims, in 3D, straight where the keys, the camera or its path say, and hangs where it is when it gives no input. Make your own by extending this class and overriding `shape_velocity` (a momentum flight, a glide, a wobble): the logic gets the velocity the entity asked for in every physics frame, just before it is moved, and changes `entity.velocity`. Choose it in the **Flight logic** field of the Flight effect. A script that extends FlightLogic in the folder data_classes/effects/status_and_control/flight_logic/ is found by the Flight effect editor and its exported variables appear there.

## Description

Every entity that flies gets its own copy of the logic, so it may keep a state in its variables.

## Variables

| | | |
|---|---|---|
| `Entity` | [entity](#var-entity) |  |
| `MovementClaim` | [claim](#var-claim) |  |

## Methods

| | |
|---|---|
| `Dictionary` | [get_field_descriptions](#method-get-field-descriptions)() |
| `String` | [get_flight_type_name](#method-get-flight-type-name)() |
| `String` | [get_flight_type_description](#method-get-flight-type-description)() |
| `void` | [begin](#method-begin)( `p_entity: Entity, p_claim: MovementClaim` ) |
| `void` | [shape_velocity](#method-shape-velocity)( `_delta: float` ) |
| `void` | [end](#method-end)() |

## Variable descriptions

### Entity entity {#var-entity}

The entity this copy of the logic flies (set by `begin`)

### MovementClaim claim {#var-claim}

The claim on the movement of the entity (speed, vertical speed ...), so the logic can read what the effect asked for

## Method descriptions

### Dictionary get_field_descriptions() {#method-get-field-descriptions}

The sentences the editor shows as tooltips: &#123;name of an exported variable: text&#125;. A logic of your own adds its variables (call super and merge)

### String get_flight_type_name() {#method-get-flight-type-name}

What this logic is called in the editor list

### String get_flight_type_description() {#method-get-flight-type-description}

A sentence about how this logic moves the entity, for the editor

### void begin( p_entity: Entity, p_claim: MovementClaim ) {#method-begin}

The entity took off. Override to set up a state

### void shape_velocity( _delta: float ) {#method-shape-velocity}

Every physics frame while the entity flies, just before it is moved: `entity.velocity` holds the velocity it asked for (the keys, the camera, its path, hovering). Change it here to give the flight a feel of its own (keep part of the last velocity for momentum, add a glide). Does nothing here: the entity floats as it asked.

### void end() {#method-end}

The flight ended (the effect ran out, was dispelled, or the entity was told to land). Override to clean up

