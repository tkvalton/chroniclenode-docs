<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EncounterRecords

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

What the editor needs to know about the encounters of a world. An encounter is a record (UniqueEncounterData) and an NPC belongs to it through the Encounter field of its unique data. These functions list the encounters of a world, make a new one, and find the NPCs of one in a scene.

## Methods

| | |
|---|---|
| `Array[UniqueEncounterData]` | [list_for_world](#method-list-for-world)( `world: WorldData` ) *static* |
| `UniqueEncounterData` | [create_for_world](#method-create-for-world)( `world: WorldData, encounter_name: String = ""` ) *static* |
| `Array[NPC]` | [get_members](#method-get-members)( `scene_root: Node, encounter_id: int` ) *static* |
| `Vector3` | [get_center](#method-get-center)( `members: Array` ) *static* |
| `PackedStringArray` | [member_names](#method-member-names)( `encounter_id: int` ) *static* |
| `void` | [delete_record](#method-delete-record)( `record: UniqueEncounterData` ) *static* |

## Method descriptions

### Array[UniqueEncounterData] list_for_world( world: WorldData ) {#method-list-for-world}

The encounters of a world (the ones of WorldData.encounters that exist), in the order of the list.

### UniqueEncounterData create_for_world( world: WorldData, encounter_name: String = "" ) {#method-create-for-world}

Makes an encounter in a world (named "Encounter 1", "Encounter 2" ... unless a name is given), saves it, and adds it to the list of the world. Returns it, or null when it could not be made.

### Array[NPC] get_members( scene_root: Node, encounter_id: int ) {#method-get-members}

The NPCs of a scene that belong to an encounter (found anywhere in the scene).

### Vector3 get_center( members: Array ) {#method-get-center}

The average position of some nodes (the centre of a group); the origin for none.

### PackedStringArray member_names( encounter_id: int ) {#method-member-names}

The names of the NPCs that belong to an encounter, read from the records of the placed NPCs (every world): for the Uniques list.

### void delete_record( record: UniqueEncounterData ) {#method-delete-record}

Deletes an encounter: the NPCs that named it are let go (their unique data is saved), it leaves the list of its world, and the record is deleted.

