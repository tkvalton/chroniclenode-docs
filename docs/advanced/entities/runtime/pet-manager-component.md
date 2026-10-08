<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PetManagerComponent

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

PetManagerComponent manages the pets owned by an entity. It keeps track of active pets and integrates with a follow system to manage pet movement and behavior.

## Description

Key features:

- Maintains a list of active pets for an entity
- Integrates with a dynamic follower system for pet movement
- Handles adding and removing pets from the entity

## Variables

| | | |
|---|---|---|
| `Array[Pet]` | [active_pets](#var-active-pets) | `[]` |
| `DynamicFollowerSystem` | [follow_system](#var-follow-system) |  |

## Methods

| | |
|---|---|
| `void` | [add_pet](#method-add-pet)( `pet: Pet` ) |
| `void` | [remove_pet](#method-remove-pet)( `pet: Pet` ) |
| `void` | [lost_pet](#method-lost-pet)( `pet: Pet` ) |

## Signals

### pet_gained( pet: Pet ) {#signal-pet-gained}

========== SIGNALS ========== Signal emitted when a pet is gained/summoned

### pet_lost( pet: Pet ) {#signal-pet-lost}

Signal emitted when a pet is lost/dismissed

## Variable descriptions

### Array[Pet] active_pets = [] {#var-active-pets}

Array of currently active pets owned by the entity

### DynamicFollowerSystem follow_system {#var-follow-system}

Reference to the follow system used to manage pet movement

## Method descriptions

### void add_pet( pet: Pet ) {#method-add-pet}

Adds a new pet to the container and the follow system (a pet that is already here is not added again)

### void remove_pet( pet: Pet ) {#method-remove-pet}

Removes a pet from the container and the follow system (a pet that is not here is ignored, so dismissing twice is safe)

### void lost_pet( pet: Pet ) {#method-lost-pet}

The old name of remove_pet

