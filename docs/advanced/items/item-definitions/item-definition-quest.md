<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ItemDefinitionQuest

**Inherits:** [ItemDefinition](/advanced/items/item-definitions/item-definition) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Quest-related items that trigger quests or serve as quest objectives. These items integrate with the quest system for story progression and player objectives.

## Description

Quest items can:

- Grant a quest when used (triggers_quest = true)
- Be required for quest objectives (quest_id set, triggers_quest = false)
- Auto-remove when their associated quest is completed
- Drop (from loot) and exist only while their quest is running (availability)

## Properties

| | | |
|---|---|---|
| `int` | [quest_id](#prop-quest-id) | `0` |
| `bool` | [auto_use_on_pickup](#prop-auto-use-on-pickup) | `false` |
| `bool` | [triggers_quest](#prop-triggers-quest) | `false` |
| `bool` | [remove_on_quest_complete](#prop-remove-on-quest-complete) | `true` |
| `Availability` | [availability](#prop-availability) | `Availability.ALWAYS` |

## Methods

| | |
|---|---|
| `bool` | [is_quest_completed](#method-is-quest-completed)( `system_hub: GameHost.SystemHub` ) |
| `bool` | [is_quest_active](#method-is-quest-active)( `system_hub: GameHost.SystemHub` ) |
| `bool` | [is_quest_running](#method-is-quest-running)( `system_hub: GameHost.SystemHub` ) |
| `bool` | [can_drop_now](#method-can-drop-now)( `system_hub: GameHost.SystemHub` ) |
| `bool` | [must_leave_now](#method-must-leave-now)( `system_hub: GameHost.SystemHub` ) |
| `bool` | [should_auto_remove](#method-should-auto-remove)( `system_hub: GameHost.SystemHub` ) |
| `bool` | [can_use](#method-can-use)( `user: Entity, item_instance: ItemInstance = null` ) |
| `String` | [get_quest_usage_failure_reason](#method-get-quest-usage-failure-reason)( `user: Entity, item_instance: ItemInstance` ) |
| `bool` | [execute_use](#method-execute-use)( `user: Entity, item_instance: ItemInstance` ) |
| `String` | [get_use_action_name](#method-get-use-action-name)( `_item_instance: ItemInstance` ) |
| `void` | [on_quest_item_used](#method-on-quest-item-used)( `item_instance: ItemInstance, user: Entity` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Enumerations

### enum Availability {#enum-availability}

When the item can drop and how long it may stay in a bag

- **ALWAYS** = `0`
- **DROPS_WHILE_QUEST_ACTIVE** = `1`
- **EXISTS_WHILE_QUEST_ACTIVE** = `2`

## Property descriptions

### int quest_id = 0 {#prop-quest-id}

ID of the quest this item relates to in the quest database

### bool auto_use_on_pickup = false {#prop-auto-use-on-pickup}

Whether to automatically use/trigger this item when picked up by the player

### bool triggers_quest = false {#prop-triggers-quest}

Whether using this item starts a new quest

### bool remove_on_quest_complete = true {#prop-remove-on-quest-complete}

Whether to auto-remove this item when the associated quest is completed

### Availability availability = Availability.ALWAYS {#prop-availability}

When the item can drop, and whether it only exists while the quest is running

## Method descriptions

### bool is_quest_completed( system_hub: GameHost.SystemHub ) {#method-is-quest-completed}

Check if the associated quest is completed

### bool is_quest_active( system_hub: GameHost.SystemHub ) {#method-is-quest-active}

Check if the associated quest is active

### bool is_quest_running( system_hub: GameHost.SystemHub ) {#method-is-quest-running}

Is the quest running now (accepted, or done and waiting to be handed in)? Read from the quest itself, so it is already true while the start actions of the quest run (a quest that gives its own item when it starts). With no quest set, or no event manager (the editor), the answer is "yes": nothing is held back

### bool can_drop_now( system_hub: GameHost.SystemHub ) {#method-can-drop-now}

Can loot give this item now? (see Availability)

### bool must_leave_now( system_hub: GameHost.SystemHub ) {#method-must-leave-now}

Must this item leave the bag now? True for an item that only exists while its quest runs, when it does not run

### bool should_auto_remove( system_hub: GameHost.SystemHub ) {#method-should-auto-remove}

Check if this item should be removed (quest completed)

### bool can_use( user: Entity, item_instance: ItemInstance = null ) {#method-can-use}

Check if quest item can be used

### String get_quest_usage_failure_reason( user: Entity, item_instance: ItemInstance ) {#method-get-quest-usage-failure-reason}

Get why quest item can't be used (for UI feedback)

### bool execute_use( user: Entity, item_instance: ItemInstance ) {#method-execute-use}

Execute quest item usage - handle quest triggers

### String get_use_action_name( _item_instance: ItemInstance ) {#method-get-use-action-name}

Get display name for quest action

### void on_quest_item_used( item_instance: ItemInstance, user: Entity ) {#method-on-quest-item-used}

Virtual method for quest-specific logic when item is used Called by ItemInstance after successful usage

### Array[Dictionary] validate() {#method-validate}

*No description yet.*

