<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DatabaseResource

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [AbilityDefinition](/advanced/abilities-and-effects/abilities/ability-definition), [DamageTypeDefinition](/advanced/entity-stats/definitions/damage-type-definition), [Effect](/advanced/abilities-and-effects/effects-base/effect), [EntityTagDefinition](/advanced/entity-stats/definitions/entity-tag-definition), [GroupDefinition](/advanced/shared-systems/groups/group-definition), [ImmunityDefinition](/advanced/entity-stats/definitions/immunity-definition), [PoolDefinition](/advanced/entity-stats/stats-and-pools/pool-definition), [SchoolTypeDefinition](/advanced/entity-stats/definitions/school-type-definition), [StatDefinition](/advanced/entity-stats/stats-and-pools/stat-definition), [StatGroupDefinition](/advanced/entity-stats/definitions/stat-group-definition), [StatusEffectDefinition](/advanced/entity-stats/definitions/status-effect-definition), [TriggerTagDefinition](/advanced/entity-stats/triggers/trigger-tag-definition)

The base of everything the database stores. A DatabaseResource has an id, a name, an icon and a description; the id is what other resources use to refer to it.

## Description

Every resource of the REGISTRY of the Database extends this class: abilities, effects, NPCs, items, quests, factions, stats, vendors, popups and so on. It is saved as the file `<id>.tres` in the folder of its type under `res://src/data/`.

## Properties

| | | |
|---|---|---|
| `int` | [id](#prop-id) |  |
| `String` | [display_name](#prop-display-name) | `""` |
| `CompressedTexture2D` | [icon](#prop-icon) |  |
| `String` | [description](#prop-description) | `""` |

## Property descriptions

### int id {#prop-id}

Unique identifier for this entity

### String display_name = "" {#prop-display-name}

Display name shown in UI and nameplates

### CompressedTexture2D icon {#prop-icon}

Icon displayed in UI elements

### String description = "" {#prop-description}

Optional description or background

