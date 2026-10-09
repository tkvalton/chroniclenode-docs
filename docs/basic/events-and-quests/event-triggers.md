# Event triggers

<!-- generated from the code comments by scripts/event-lists.mjs: change the comments in the code, not this page -->

A **trigger** is the *when* of an [event](/basic/events-and-quests/events) (and of the objectives of a [quest](/basic/events-and-quests/quests)). An event can have several triggers; any one of them can start it. There are 78 kinds, in 13 categories. Choose one with **Add Trigger** in the event editor; its own fields appear below. The class name is the name in the code, and the link goes to the page of the class.

## Encounter

An [encounter](/basic/world/encounters) starts or ends a fight.

| Trigger | What it does |
|---|---|
| [**Pack Active State Change**](/advanced/events-and-quests/triggers-encounter/pack-active-state-change-trigger) (`PackActiveStateChangeTrigger`) | Triggers when an encounter is activated or deactivated |
| [**Encounter Combat State Change**](/advanced/events-and-quests/triggers-encounter/encounter-combat-state-change-trigger) (`EncounterCombatStateChangeTrigger`) | Triggers when an Encounter changes state (enters combat, exits combat, or is defeated) |

## Entity

Something happens to or with an NPC or a character: it dies, takes damage, uses an ability, changes stats, is talked to.

| Trigger | What it does |
|---|---|
| [**Entity Ability Cast**](/advanced/events-and-quests/triggers-entity/entity-ability-cast-trigger) (`EntityAbilityCastTrigger`) | Triggers when a specific entity casts any ability |
| [**Entity Basic Attack Cast**](/advanced/events-and-quests/triggers-entity/entity-basic-attack-cast-trigger) (`EntityBasicAttackCastTrigger`) | Triggers when a specific entity casts their basic attack |
| [**Entity Casting**](/advanced/events-and-quests/triggers-entity/entity-casting-trigger) (`EntityCastingTrigger`) | Triggers when a specific entity starts casting an ability |
| [**Entity Combat State Change**](/advanced/events-and-quests/triggers-entity/entity-combat-state-change-trigger) (`EntityCombatStateChangeTrigger`) | Triggers when a specific entity enters or exits combat |
| [**Entity Damage Dealt**](/advanced/events-and-quests/triggers-entity/entity-damage-dealt-trigger) (`EntityDamageDealtTrigger`) | Triggers when a specific entity deals damage |
| [**Entity Damage Incoming**](/advanced/events-and-quests/triggers-entity/entity-damage-incoming-trigger) (`EntityDamageIncomingTrigger`) | Triggers when a specific entity is about to take damage (before mitigation) |
| [**Entity Damage Mitigated**](/advanced/events-and-quests/triggers-entity/entity-damage-mitigated-trigger) (`EntityDamageMitigatedTrigger`) | Triggers when a specific entity's defences (armor, block, dodge ...) reduce a hit it receives. |
| [**Entity Damage Taken**](/advanced/events-and-quests/triggers-entity/entity-damage-taken-trigger) (`EntityDamageTakenTrigger`) | Triggers when a specific entity takes a specific amount of damage |
| [**Entity Death Group**](/advanced/events-and-quests/triggers-entity/entity-death-group-trigger) (`EntityDeathGroupTrigger`) | Triggers when a group of specific unique entities are all killed |
| [**Entity Death Type**](/advanced/events-and-quests/triggers-entity/entity-death-type-trigger) (`EntityDeathTypeTrigger`) | Triggers when a certain amount of entities of a specific type are killed |
| [**Entity Death Unique**](/advanced/events-and-quests/triggers-entity/entity-death-unique-trigger) (`EntityDeathUniqueTrigger`) | Triggers when a specific unique entity is killed |
| [**Entity Effect**](/advanced/events-and-quests/triggers-entity/entity-effect-trigger) (`EntityEffectTrigger`) | Triggers when a specific entity gains or loses a specific effect |
| [**Entity Heal Cast**](/advanced/events-and-quests/triggers-entity/entity-heal-cast-trigger) (`EntityHealCastTrigger`) | Triggers when a specific entity casts a heal |
| [**Entity Healing Received**](/advanced/events-and-quests/triggers-entity/entity-healing-received-trigger) (`EntityHealingReceivedTrigger`) | Triggers when a specific entity receives healing |
| [**Entity Health Changed**](/advanced/events-and-quests/triggers-entity/entity-health-changed-trigger) (`EntityHealthChangedTrigger`) | Triggers when a specific entity's health changes to a specific value or meets certain conditions |
| [**Entity Interact**](/advanced/events-and-quests/triggers-entity/entity-interact-trigger) (`EntityInteractTrigger`) | Triggers when the player interacts with a specific NPC |
| [**Entity Interrupted**](/advanced/events-and-quests/triggers-entity/entity-interrupted-trigger) (`EntityInterruptedTrigger`) | Triggers when a specific entity is interrupted while casting |
| [**Entity Pet Gained**](/advanced/events-and-quests/triggers-entity/entity-pet-gained-trigger) (`EntityPetGainedTrigger`) | Triggers when a specific entity gains/summons a pet |
| [**Entity Resource Changed**](/advanced/events-and-quests/triggers-entity/entity-resource-changed-trigger) (`EntityResourceChangedTrigger`) | Triggers when a specific entity's resource changes to a specific value or meets certain conditions |
| [**Entity Special Defensive Effect**](/advanced/events-and-quests/triggers-entity/entity-special-defensive-effect-trigger) (`EntitySpecialDefensiveEffectTrigger`) | Triggers when a specific entity fires a defensive trigger (dodge, parry, block ...) while receiving a hit. |
| [**Entity Special Healing Received**](/advanced/events-and-quests/triggers-entity/entity-special-healing-received-trigger) (`EntitySpecialHealingReceivedTrigger`) | Triggers when a specific entity receives a heal on which a trigger fired (a critical heal ...). |
| [**Entity Special Offensive Effect**](/advanced/events-and-quests/triggers-entity/entity-special-offensive-effect-trigger) (`EntitySpecialOffensiveEffectTrigger`) | Triggers when a specific entity fires an offensive trigger (critical strike ...) on a hit that lands. |
| [**Entity Specific Ability Cast**](/advanced/events-and-quests/triggers-entity/entity-specific-ability-cast-trigger) (`EntitySpecificAbilityCastTrigger`) | Triggers when a specific entity casts a specific ability |
| [**Entity Stat Changed**](/advanced/events-and-quests/triggers-entity/entity-stat-changed-trigger) (`EntityStatChangedTrigger`) | Triggers when a specific entity's stat changes |
| [**Entity Target Changed**](/advanced/events-and-quests/triggers-entity/entity-target-changed-trigger) (`EntityTargetChangedTrigger`) | Triggers when a specific entity changes target |

## Faction

A standing with a [faction](/basic/behaviors/factions) changes.

| Trigger | What it does |
|---|---|
| [**Faction Standing Changed**](/advanced/events-and-quests/triggers-faction/faction-standing-changed-trigger) (`FactionStandingChangedTrigger`) | Triggers when standing changes between two factions |
| [**Player Standing Changed**](/advanced/events-and-quests/triggers-faction/player-standing-changed-trigger) (`PlayerStandingChangedTrigger`) | Triggers when the player's standing with a faction changes |

## Input

The player presses a key.

| Trigger | What it does |
|---|---|
| [**Player Input**](/advanced/events-and-quests/triggers-input/player-input-trigger) (`PlayerInputTrigger`) | Triggers when the player uses a specific input action |

## Interactable object

Something happens to a chest, door, switch, ladder, trap or other [interactable](/basic/entities/interactables).

| Trigger | What it does |
|---|---|
| [**Object Container State Change**](/advanced/events-and-quests/triggers-interactable-object/object-container-state-change-trigger) (`ObjectContainerStateChangeTrigger`) | Triggers when a specific container is opened or closed |
| [**Object Destructible Damaged**](/advanced/events-and-quests/triggers-interactable-object/object-destructible-damaged-trigger) (`ObjectDestructibleDamagedTrigger`) | Triggers when a specific destructible object takes damage |
| [**Object Destructible Destroyed**](/advanced/events-and-quests/triggers-interactable-object/object-destructible-destroyed-trigger) (`ObjectDestructibleDestroyedTrigger`) | Triggers when a specific destructible object is destroyed |
| [**Object Door State Change**](/advanced/events-and-quests/triggers-interactable-object/object-door-state-change-trigger) (`ObjectDoorStateChangeTrigger`) | Triggers when a specific door changes to a target state |
| [**Object Interact**](/advanced/events-and-quests/triggers-interactable-object/object-interact-trigger) (`ObjectInteractTrigger`) | Triggers when the player interacts with a specific object |
| [**Object Ladder Climb**](/advanced/events-and-quests/triggers-interactable-object/object-ladder-climb-trigger) (`ObjectLadderClimbTrigger`) | Triggers when an entity interacts with a ladder (starts climbing, finishes, or is interrupted) |
| [**Object Locked State Change**](/advanced/events-and-quests/triggers-interactable-object/object-locked-state-change-trigger) (`ObjectLockedStateChangeTrigger`) | Triggers when a specific object is locked or unlocked |
| [**Object Switch State Change**](/advanced/events-and-quests/triggers-interactable-object/object-switch-state-change-trigger) (`ObjectSwitchStateChangeTrigger`) | Triggers when a specific switch changes to a target state |
| [**Object Teleportation**](/advanced/events-and-quests/triggers-interactable-object/object-teleportation-trigger) (`ObjectTeleportationTrigger`) | Triggers when an entity uses a rabbit hole for teleportation |
| [**Object Trap**](/advanced/events-and-quests/triggers-interactable-object/object-trap-trigger) (`ObjectTrapTrigger`) | Triggers when a specific trap object is triggered |

## Item

The party gains, loses, equips or uses an [item](/basic/items/items).

| Trigger | What it does |
|---|---|
| [**Player Equipment Change**](/advanced/events-and-quests/triggers-item/player-equipment-change-trigger) (`PlayerEquipmentChangeTrigger`) | Triggers when a specific player's equipment changes |
| [**Player Has X Items**](/advanced/events-and-quests/triggers-item/player-has-x-items-trigger) (`PlayerHasXItemsTrigger`) | Triggers when target player(s) have X amount of a specific item |
| [**Player Item Consumed**](/advanced/events-and-quests/triggers-item/player-item-consumed-trigger) (`PlayerItemConsumedTrigger`) | Triggers when target player(s) consumes an item |
| [**Player Item Received**](/advanced/events-and-quests/triggers-item/player-item-received-trigger) (`PlayerItemReceivedTrigger`) | Triggers when target player(s) receives an item |
| [**Player Item Used**](/advanced/events-and-quests/triggers-item/player-item-used-trigger) (`PlayerItemUsedTrigger`) | Triggers when target player(s) uses an item |

## Party

The party changes: it grows, shrinks, or someone joins or leaves.

| Trigger | What it does |
|---|---|
| [**Player Added To Party**](/advanced/events-and-quests/triggers-party/player-added-to-party-trigger) (`PlayerAddedToPartyTrigger`) | Triggers when a player is added to the party |
| [**Player Removed From Party**](/advanced/events-and-quests/triggers-party/player-removed-from-party-trigger) (`PlayerRemovedFromPartyTrigger`) | Triggers when a player is removed from the party |

## Player

Something happens to a player character: it levels up, dies, gains experience, learns a skill.

| Trigger | What it does |
|---|---|
| [**Player Ability Cast**](/advanced/events-and-quests/triggers-player/player-ability-cast-trigger) (`PlayerAbilityCastTrigger`) | Triggers when target player(s) cast any ability |
| [**Player Basic Attack Cast**](/advanced/events-and-quests/triggers-player/player-basic-attack-cast-trigger) (`PlayerBasicAttackCastTrigger`) | Triggers when target player(s) cast basic attack |
| [**Player Became Current**](/advanced/events-and-quests/triggers-player/player-became-current-trigger) (`PlayerBecameCurrentTrigger`) | Triggers when a player becomes the current/active player (character switching) |
| [**Player Combat State Changed**](/advanced/events-and-quests/triggers-player/player-combat-state-changed-trigger) (`PlayerCombatStateChangedTrigger`) | Triggers when target player(s) enter or exit combat |
| [**Player Damage Dealt**](/advanced/events-and-quests/triggers-player/player-damage-dealt-trigger) (`PlayerDamageDealtTrigger`) | Triggers when target player(s) deal damage |
| [**Player Damage Taken**](/advanced/events-and-quests/triggers-player/player-damage-taken-trigger) (`PlayerDamageTakenTrigger`) | Triggers when target player(s) take damage |
| [**Player Death**](/advanced/events-and-quests/triggers-player/player-death-trigger) (`PlayerDeathTrigger`) | Triggers when target player(s) die |
| [**Player Effect**](/advanced/events-and-quests/triggers-player/player-effect-trigger) (`PlayerEffectTrigger`) | Triggers when target player(s) gain or lose a specific effect |
| [**Player Experience Gained**](/advanced/events-and-quests/triggers-player/player-experience-gained-trigger) (`PlayerExperienceGainedTrigger`) | Triggers when a player gains a specific amount of experience |
| [**Player Heal Cast**](/advanced/events-and-quests/triggers-player/player-heal-cast-trigger) (`PlayerHealCastTrigger`) | Triggers when target player(s) cast a heal |
| [**Player Healing Received**](/advanced/events-and-quests/triggers-player/player-healing-received-trigger) (`PlayerHealingReceivedTrigger`) | Triggers when target player(s) receive healing |
| [**Player Health Changed**](/advanced/events-and-quests/triggers-player/player-health-changed-trigger) (`PlayerHealthChangedTrigger`) | Triggers when target player(s) health changes |
| [**Player Level Up**](/advanced/events-and-quests/triggers-player/player-level-up-trigger) (`PlayerLevelUpTrigger`) | Triggers when a player reaches a specific level or levels up |
| [**Player Resource Changed**](/advanced/events-and-quests/triggers-player/player-resource-changed-trigger) (`PlayerResourceChangedTrigger`) | Triggers when target player(s) resource changes |
| [**Player Special Defensive Effect**](/advanced/events-and-quests/triggers-player/player-special-defensive-effect-trigger) (`PlayerSpecialDefensiveEffectTrigger`) | Triggers when target player(s) fire a defensive trigger (dodge, parry, block ...) while receiving a hit |
| [**Player Special Healing Received**](/advanced/events-and-quests/triggers-player/player-special-healing-received-trigger) (`PlayerSpecialHealingReceivedTrigger`) | Triggers when target player(s) receive a heal on which a trigger fired (a critical heal ...) |
| [**Player Special Offensive Effect**](/advanced/events-and-quests/triggers-player/player-special-offensive-effect-trigger) (`PlayerSpecialOffensiveEffectTrigger`) | Triggers when target player(s) fire an offensive trigger (critical strike ...) on a hit that lands |
| [**Player Specific Ability Cast**](/advanced/events-and-quests/triggers-player/player-specific-ability-cast-trigger) (`PlayerSpecificAbilityCastTrigger`) | Triggers when target player(s) cast a specific ability |
| [**Player Stat Changed**](/advanced/events-and-quests/triggers-player/player-stat-changed-trigger) (`PlayerStatChangedTrigger`) | Triggers when target player(s) stat changes |

## Quest

A [quest](/basic/events-and-quests/quests) changes state.

| Trigger | What it does |
|---|---|
| [**Quest State Change**](/advanced/events-and-quests/triggers-quest/quest-state-change-trigger) (`QuestStateChangeTrigger`) | Triggers when a specific quest changes state (activated, completed, or failed) |

## Region

Something enters or leaves a [region](/basic/world/regions).

| Trigger | What it does |
|---|---|
| [**Region Detection Any Entity**](/advanced/events-and-quests/triggers-region/region-detection-any-entity-trigger) (`RegionDetectionAnyEntityTrigger`) | Triggers when any entity enters or exits a detection region |
| [**Region Detection Faction**](/advanced/events-and-quests/triggers-region/region-detection-faction-trigger) (`RegionDetectionFactionTrigger`) | Triggers when an entity of a specific faction enters or exits a detection region |
| [**Region Detection Player**](/advanced/events-and-quests/triggers-region/region-detection-player-trigger) (`RegionDetectionPlayerTrigger`) | Triggers when a player-controlled entity enters or exits a detection region |
| [**Region Detection Unique Entity**](/advanced/events-and-quests/triggers-region/region-detection-unique-entity-trigger) (`RegionDetectionUniqueEntityTrigger`) | Triggers when a specific entity (by unique_id) enters or exits a detection region |

## Time

A time of day arrives, a timer runs out, or the game starts.

| Trigger | What it does |
|---|---|
| [**Game Start**](/advanced/events-and-quests/triggers-time/game-start-trigger) (`GameStartTrigger`) | Triggers when the game starts |
| [**Game Time**](/advanced/events-and-quests/triggers-time/game-time-trigger) (`GameTimeTrigger`) | Triggers when a specific game time is reached |
| [**Timer**](/advanced/events-and-quests/triggers-time/timer-trigger) (`TimerTrigger`) | Triggers after a specific time has elapsed |

## User interface

A [popup](/basic/events-and-quests/popups) closes.

| Trigger | What it does |
|---|---|
| [**Popup Closed**](/advanced/events-and-quests/triggers-user-interface/popup-closed-trigger) (`PopupClosedTrigger`) | Triggers when a popup is closed (the player read the tutorial, the message was dismissed) |

## Variable

A [global variable](/basic/events-and-quests/global-variables) changes.

| Trigger | What it does |
|---|---|
| [**Global Variable**](/advanced/events-and-quests/triggers-variable/global-variable-trigger) (`GlobalVariableTrigger`) | Universal trigger for global variable changes |
| [**Local Variable Change**](/advanced/events-and-quests/triggers-variable/local-variable-change-trigger) (`LocalVariableChangeTrigger`) | Triggers when a specific local variable changes to any new value |
| [**Local Variable Reach**](/advanced/events-and-quests/triggers-variable/local-variable-reach-trigger) (`LocalVariableReachTrigger`) | Triggers when a local variable reaches or leaves a specific value |

## See also

- [Events](/basic/events-and-quests/events), [Event actions](/basic/events-and-quests/event-actions), [Conditions](/basic/shared-systems/conditions).
