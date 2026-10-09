# Event actions

<!-- generated from the code comments by scripts/event-lists.mjs: change the comments in the code, not this page -->

An **action** is the *do* of an [event](/basic/events-and-quests/events). An event runs its actions **in order, and each one finishes before the next one starts**: a Wait action really waits, and a Popup action can wait until the popup is closed. An action that cannot do what it was asked (a quest that cannot start, an object that does not exist) **fails**, and so does its event. There are 86 kinds, in 13 categories. Choose one with **Add Action** in the event editor.

## Audio

Play or stop music, ambience and sounds.

| Action | What it does |
|---|---|
| [**Play SFX At Position**](/advanced/events-and-quests/actions-audio/play-sfx-at-position-action) (`PlaySFXAtPositionAction`) | Play a sound effect at a 3D position |
| [**Play SFX Global**](/advanced/events-and-quests/actions-audio/play-sfx-global-action) (`PlaySFXGlobalAction`) | Play a sound effect globally (2D audio) |
| [**Set Ambient Track**](/advanced/events-and-quests/actions-audio/set-ambient-track-action) (`SetAmbientTrackAction`) | Control ambient track playback |
| [**Set Music Track**](/advanced/events-and-quests/actions-audio/set-music-track-action) (`SetMusicTrackAction`) | Control music track playback |

## Encounter

Change what an [encounter](/basic/world/encounters) is doing.

| Action | What it does |
|---|---|
| [**Change Encounter Behavior**](/advanced/events-and-quests/actions-encounter/change-encounter-behavior-action) (`ChangeEncounterBehaviorAction`) | Dynamically change a Encounter's formation and behavior |
| [**Kill All Encounter Entities**](/advanced/events-and-quests/actions-encounter/kill-all-encounter-entities-action) (`KillAllEncounterEntitiesAction`) | Kill all entities in a Encounter |
| [**Set Pack Active State**](/advanced/events-and-quests/actions-encounter/set-pack-active-state-action) (`SetPackActiveStateAction`) | Activate or deactivate an encounter (it hides and stops its members while it is off) |
| [**Force Encounter Combat**](/advanced/events-and-quests/actions-encounter/force-encounter-combat-action) (`ForceEncounterCombatAction`) | Force a Encounter into or out of combat |

## Entity

Spawn, move, activate, heal, kill, or change the behavior of NPCs.

| Action | What it does |
|---|---|
| [**Grant Effect To Entity**](/advanced/events-and-quests/actions-entity/grant-effect-to-entity-action) (`GrantEffectToEntityAction`) | Grant an effect to a specific entity |
| [**Kill Entity**](/advanced/events-and-quests/actions-entity/kill-entity-action) (`KillEntityAction`) | Instantly kill a specific entity |
| [**Remove All Effects From Entity**](/advanced/events-and-quests/actions-entity/remove-all-effects-from-entity-action) (`RemoveAllEffectsFromEntityAction`) | Remove all effects from a specific entity |
| [**Remove Effect From Entity**](/advanced/events-and-quests/actions-entity/remove-effect-from-entity-action) (`RemoveEffectFromEntityAction`) | Remove an effect from a specific entity |
| [**Set Entity Active State**](/advanced/events-and-quests/actions-entity/set-entity-active-state-action) (`SetEntityActiveStateAction`) | Activate or deactivate an entity |
| [**Set Entity Behavior Script**](/advanced/events-and-quests/actions-entity/set-entity-behavior-script-action) (`SetEntityBehaviorScriptAction`) | Change an entity's behavior script at runtime |
| [**Set Entity Combat Script**](/advanced/events-and-quests/actions-entity/set-entity-combat-script-action) (`SetEntityCombatScriptAction`) | Change an entity's combat script at runtime |
| [**Set Entity Faction**](/advanced/events-and-quests/actions-entity/set-entity-faction-action) (`SetEntityFactionAction`) | Change the faction of a specific placed NPC, so it can turn friendly or hostile in the middle of a story |
| [**Set Entity Position**](/advanced/events-and-quests/actions-entity/set-entity-position-action) (`SetEntityPositionAction`) | Teleport/move an entity to a specific position |
| [**Spawn Entity**](/advanced/events-and-quests/actions-entity/spawn-entity-action) (`SpawnEntityAction`) | Spawn a new entity (NPC) at a specific position |

## Environment

Change the weather and the time, sun, sky and environment configs, and spawn visual and world effects.

| Action | What it does |
|---|---|
| [**Create VFX**](/advanced/events-and-quests/actions-environment/create-vfx-action) (`CreateVFXAction`) | Spawn a VFX at a specific position or on a target |
| [**Set Environment Config**](/advanced/events-and-quests/actions-environment/set-environment-config-action) (`SetEnvironmentConfigAction`) | Change the environment configuration at runtime |
| [**Set Sky Config**](/advanced/events-and-quests/actions-environment/set-sky-config-action) (`SetSkyConfigAction`) | Change the sky configuration at runtime |
| [**Set Sun Config**](/advanced/events-and-quests/actions-environment/set-sun-config-action) (`SetSunConfigAction`) | Change the sun configuration at runtime |
| [**Set Time Config**](/advanced/events-and-quests/actions-environment/set-time-config-action) (`SetTimeConfigAction`) | Change the time configuration at runtime |
| [**Set Weather**](/advanced/events-and-quests/actions-environment/set-weather-action) (`SetWeatherAction`) | Change the current map's weather at runtime |
| [**Spawn World Effect**](/advanced/events-and-quests/actions-environment/spawn-world-effect-action) (`SpawnWorldEffectAction`) | Spawn a world effect at a specific position World effects are environment-based and don't have a specific caster |

## General

Wait, branch (If and Switch), change world, play cutscenes and cinematics, move the camera, grant rewards, end the game.

| Action | What it does |
|---|---|
| [**Await**](/advanced/events-and-quests/actions-general/await-action) (`AwaitAction`) | A simple action that introduces a delay in the action execution sequence. |
| [**Manipulate Camera**](/advanced/events-and-quests/actions-general/manipulate-camera-action) (`ManipulateCameraAction`) | Manipulate the game camera through the CameraController. |
| [**Change World**](/advanced/events-and-quests/actions-general/change-world-action) (`ChangeWorldAction`) | Action for changing the current map while preserving game session state. |
| [**Cinematic**](/advanced/events-and-quests/actions-general/cinematic-action) (`CinematicAction`) | Play or stop a video cinematic |
| [**Cutscene**](/advanced/events-and-quests/actions-general/cutscene-action) (`CutsceneAction`) | Play or stop an in-game cutscene |
| [**Force Game Over**](/advanced/events-and-quests/actions-general/force-game-over-action) (`ForceGameOverAction`) | Ends the game now: the game over screen, whatever the death behaviour of the gameplay settings says |
| [**Grant Reward**](/advanced/events-and-quests/actions-general/grant-reward-action) (`GrantRewardAction`) | Grant a reward to the current player |
| [**If**](/advanced/events-and-quests/actions-general/if-action) (`IfAction`) | A conditional action that only executes its child actions if all conditions are met. |
| [**Switch**](/advanced/events-and-quests/actions-general/switch-action) (`SwitchAction`) | A multi-branch conditional action that executes different sets of actions based on which condition is met first. |

## Interactable objects

Open, close, lock, unlock, switch, repair, break or spawn doors, chests, switches and destructibles.

| Action | What it does |
|---|---|
| [**Add Items To Interactable**](/advanced/events-and-quests/actions-interactable-objects/add-items-to-interactable-action) (`AddItemsToInteractableAction`) | Add items to a container's inventory |
| [**Clear Container**](/advanced/events-and-quests/actions-interactable-objects/clear-container-action) (`ClearContainerAction`) | Empty all items and currency from a container |
| [**Control Door**](/advanced/events-and-quests/actions-interactable-objects/control-door-action) (`ControlDoorAction`) | Open or close a door |
| [**Damage Interactable**](/advanced/events-and-quests/actions-interactable-objects/damage-interactable-action) (`DamageInteractableAction`) | Deal damage to a destructible object |
| [**Destroy Interactable**](/advanced/events-and-quests/actions-interactable-objects/destroy-interactable-action) (`DestroyInteractableAction`) | Instantly destroy a destructible object |
| [**Repair Interactable**](/advanced/events-and-quests/actions-interactable-objects/repair-interactable-action) (`RepairInteractableAction`) | Repair/heal a destructible object |
| [**Force Teleport Entity**](/advanced/events-and-quests/actions-interactable-objects/force-teleport-entity-action) (`ForceTeleportEntityAction`) | Force an entity to teleport through a rabbit hole programmatically |
| [**Grant Effect To Interactable**](/advanced/events-and-quests/actions-interactable-objects/grant-effect-to-interactable-action) (`GrantEffectToInteractableAction`) | Grant an effect to a specific interactable object |
| [**Lock Object**](/advanced/events-and-quests/actions-interactable-objects/lock-object-action) (`LockObjectAction`) | Lock or unlock an interactable object |
| [**Remove All Effects From Interactable**](/advanced/events-and-quests/actions-interactable-objects/remove-all-effects-from-interactable-action) (`RemoveAllEffectsFromInteractableAction`) | Remove all effects from an interactable object |
| [**Remove Effect From Interactable**](/advanced/events-and-quests/actions-interactable-objects/remove-effect-from-interactable-action) (`RemoveEffectFromInteractableAction`) | Remove a specific effect from an interactable object |
| [**Remove Items From Container**](/advanced/events-and-quests/actions-interactable-objects/remove-items-from-container-action) (`RemoveItemsFromContainerAction`) | Remove items from a container's inventory |
| [**Set Interactable Position**](/advanced/events-and-quests/actions-interactable-objects/set-interactable-position-action) (`SetInteractablePositionAction`) | Teleport/move an interactable to a specific position |
| [**Set Rabbit Hole Destination**](/advanced/events-and-quests/actions-interactable-objects/set-rabbit-hole-destination-action) (`SetRabbitHoleDestinationAction`) | Change a rabbit hole's destination at runtime |
| [**Set Rabbit Hole State**](/advanced/events-and-quests/actions-interactable-objects/set-rabbit-hole-state-action) (`SetRabbitHoleStateAction`) | Set a rabbit hole's state (ACTIVE/DISABLED/BROKEN) |
| [**Set Switch State**](/advanced/events-and-quests/actions-interactable-objects/set-switch-state-action) (`SetSwitchStateAction`) | Set a switch or light to a specific state (ON/OFF/BROKEN) |
| [**Set Trap State**](/advanced/events-and-quests/actions-interactable-objects/set-trap-state-action) (`SetTrapStateAction`) | Set a trap to ARMED state (ready to trigger) |
| [**Spawn Interactable**](/advanced/events-and-quests/actions-interactable-objects/spawn-interactable-action) (`SpawnInteractableAction`) | Spawn a new dynamic interactable at a specific position |
| [**Toggle Switch**](/advanced/events-and-quests/actions-interactable-objects/toggle-switch-action) (`ToggleSwitchAction`) | Toggle a switch between ON and OFF states |

## Interactions

Change the [interaction](/basic/entities/npcs) of an NPC or an object.

| Action | What it does |
|---|---|
| [**Set Conversation Response State**](/advanced/events-and-quests/actions-interactions/set-conversation-response-state-action) (`SetConversationResponseStateAction`) | Set the active state of a conversation response |
| [**Set Conversation Starting Chat**](/advanced/events-and-quests/actions-interactions/set-conversation-starting-chat-action) (`SetConversationStartingChatAction`) | Set which chat a conversation starts from on next interaction |
| [**Set Primary Interaction**](/advanced/events-and-quests/actions-interactions/set-primary-interaction-action) (`SetPrimaryInteractionAction`) | Set interaction |
| [**Set Responses By Tag**](/advanced/events-and-quests/actions-interactions/set-responses-by-tag-action) (`SetResponsesByTagAction`) | Enable/disable all responses with a specific tag |

## Party

Change the size of the party, or add and remove companions.

| Action | What it does |
|---|---|
| [**Add Player To Party**](/advanced/events-and-quests/actions-party/add-player-to-party-action) (`AddPlayerToPartyAction`) | Add a player to the party from a CharacterDefinition |
| [**Change Party Size**](/advanced/events-and-quests/actions-party/change-party-size-action) (`ChangePartySizeAction`) | Change the maximum party size (members beyond a smaller size wait in the reserve) |
| [**Remove Player From Party**](/advanced/events-and-quests/actions-party/remove-player-from-party-action) (`RemovePlayerFromPartyAction`) | Remove a player from the party |

## Player

Grant or remove effects, move or kill the player characters, change their combat script.

| Action | What it does |
|---|---|
| [**Grant Effect To Player**](/advanced/events-and-quests/actions-player/grant-effect-to-player-action) (`GrantEffectToPlayerAction`) | Grant an effect to player(s) |
| [**Kill Player**](/advanced/events-and-quests/actions-player/kill-player-action) (`KillPlayerAction`) | Kill player(s) (trigger death state) |
| [**Remove All Effects From Player**](/advanced/events-and-quests/actions-player/remove-all-effects-from-player-action) (`RemoveAllEffectsFromPlayerAction`) | Remove all effects from player(s) |
| [**Remove Effect From Player**](/advanced/events-and-quests/actions-player/remove-effect-from-player-action) (`RemoveEffectFromPlayerAction`) | Remove a specific effect from player(s) |
| [**Set Player Combat Script**](/advanced/events-and-quests/actions-player/set-player-combat-script-action) (`SetPlayerCombatScriptAction`) | Change player(s) combat script at runtime |
| [**Set Player Position**](/advanced/events-and-quests/actions-player/set-player-position-action) (`SetPlayerPositionAction`) | Teleport/move player(s) to a specific position |

## Quest

Start, finish, fail or give up [quests](/basic/events-and-quests/quests) and quest lines, and complete their objectives.

| Action | What it does |
|---|---|
| [**Abandon Quest**](/advanced/events-and-quests/actions-quest/abandon-quest-action) (`AbandonQuestAction`) | Takes a quest off the player as if they had given it up (the quest goes back to the start and can be taken again; it is not a failure). |
| [**Activate Quest**](/advanced/events-and-quests/actions-quest/activate-quest-action) (`ActivateQuestAction`) | Starts a quest (as when an NPC offers it and the player accepts). |
| [**Activate Quest Line**](/advanced/events-and-quests/actions-quest/activate-quest-line-action) (`ActivateQuestLineAction`) | Starts a quest line (its first step). |
| [**Complete Quest**](/advanced/events-and-quests/actions-quest/complete-quest-action) (`CompleteQuestAction`) | Completes a running quest at once, whatever its objectives (and gives its rewards). |
| [**Complete Quest Objective**](/advanced/events-and-quests/actions-quest/complete-quest-objective-action) (`CompleteQuestObjectiveAction`) | Completes one objective of a running quest (for an objective that nothing in the world measures: "talk to the king" decided by an event). |
| [**Fail Quest**](/advanced/events-and-quests/actions-quest/fail-quest-action) (`FailQuestAction`) | Fails a running quest (the deadline passed, the one to protect died). |
| [**Fail Quest Objective**](/advanced/events-and-quests/actions-quest/fail-quest-objective-action) (`FailQuestObjectiveAction`) | Fails one objective of a running quest. |

## Time

Skip ahead to a time of day, or advance the clock.

| Action | What it does |
|---|---|
| [**Advance Time**](/advanced/events-and-quests/actions-time/advance-time-action) (`AdvanceTimeAction`) | Advance the game time by a specified number of minutes using ChronoManager |
| [**Set Time Of Day**](/advanced/events-and-quests/actions-time/set-time-of-day-action) (`SetTimeOfDayAction`) | Set the game time of day using ChronoManager with formatted string |

## User interface

Show or hide a [popup](/basic/events-and-quests/popups).

| Action | What it does |
|---|---|
| [**Popup**](/advanced/events-and-quests/actions-user-interface/popup-action) (`PopupAction`) | Shows or hides a popup (a scene built on PopupUI: a tutorial, a message, a toast, an achievement). |

## Variable

Set, change and read [global variables](/basic/events-and-quests/global-variables) and the variables of the event.

| Action | What it does |
|---|---|
| [**Modify Global Variable**](/advanced/events-and-quests/actions-variable/modify-global-variable-action) (`ModifyGlobalVariableAction`) | Modify a global variable (numeric operations and string manipulation) |
| [**Set Global Variable**](/advanced/events-and-quests/actions-variable/set-global-variable-action) (`SetGlobalVariableAction`) | Set a global variable to a specific value |
| [**Manipulate Local Float Variable**](/advanced/events-and-quests/actions-variable/manipulate-local-float-variable-action) (`ManipulateLocalFloatVariableAction`) | Manipulate a local float variable |
| [**Manipulate Local Int Variable**](/advanced/events-and-quests/actions-variable/manipulate-local-int-variable-action) (`ManipulateLocalIntVariableAction`) | Manipulate a local integer variable |
| [**Manipulate Local String Variable**](/advanced/events-and-quests/actions-variable/manipulate-local-string-variable-action) (`ManipulateLocalStringVariableAction`) | Manipulate a local string variable |
| [**Set Local Bool Variable**](/advanced/events-and-quests/actions-variable/set-local-bool-variable-action) (`SetLocalBoolVariableAction`) | Set a local boolean variable to a specific value |
| [**Set Local Float Variable**](/advanced/events-and-quests/actions-variable/set-local-float-variable-action) (`SetLocalFloatVariableAction`) | Set a local float variable to a specific value |
| [**Set Local Int Variable**](/advanced/events-and-quests/actions-variable/set-local-int-variable-action) (`SetLocalIntVariableAction`) | Set a local integer variable to a specific value |
| [**Set Local String Variable**](/advanced/events-and-quests/actions-variable/set-local-string-variable-action) (`SetLocalStringVariableAction`) | Set a local string variable to a specific value |
| [**Toggle Local Variable**](/advanced/events-and-quests/actions-variable/toggle-local-variable-action) (`ToggleLocalVariableAction`) | Toggle a local boolean variable |

## See also

- [Events](/basic/events-and-quests/events), [Event triggers](/basic/events-and-quests/event-triggers), [Conditions](/basic/shared-systems/conditions).
