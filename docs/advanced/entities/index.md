# Entities: how they are built

The [Entities chapter](/basic/entities/) explains the editors. This page explains the code: how a node becomes an entity, what it is made of, and what happens when it fights, dies, is summoned or is used.

## Definitions

| Class | Editor | Notes |
|---|---|---|
| [`EntityDefinition`](/advanced/entities/definitions/entity-definition) | (base) | The model scene and scale, the collision shape, the animation type and packages, the voice and footstep audio, `entity_tags` |
| [`NPCDefinition`](/advanced/entities/definitions/npc-definition) | NPCs | `default_level`, `experience_worth`, `faction`, `stats_data`, `loot_table` with `loot_table_logic`, `inventory`, the abilities and AI scripts, the animation tags |
| [`CharacterDefinition`](/advanced/entities/definitions/character-definition) | Playable Character | A `player_class`, `starting_level`, `equipment_override`, `inventory` |
| [`CustomCharacterDefinition`](/advanced/entities/definitions/custom-character-definition) | (character creation) | A character made in the creation window: the profile, body type, voice, facial meshes, colors and blend shapes |
| [`PlayerClassDefinition`](/advanced/entities/definitions/player-class-definition) | Player Classes | `stats_data`, `starter_equipment`, `level_rewards`, `locked_equipment_slots`, `skill_trees`, the abilities, the AI scripts. Not an `EntityDefinition`: a character *has* a class |
| [`InteractableDefinition`](/advanced/entities/definitions/interactable-definition) | Interactables | The scene, targeting flags, `stats_data`, the lock, the cooldown, **one** `interaction` |

A definition is a [`DatabaseResource`](/advanced/data-and-database/database-classes/database-resource) and is never changed while the game runs. A placed NPC carries a [`UniqueEntityData`](/advanced/world/world-data/unique-entity-data) with overrides (level, scale, faction, experience, scripts, loot, inventory, stats, spawn delay, respawn timer, an interaction); [`UniqueInteractableData`](/advanced/world/world-data/unique-interactable-data) does the same for objects.

## From a node to an entity

1. A scene node (`Player`, `NPC`, `Pet`, `InteractableObject`) is made and its `definition` (and `unique_data`) is set.
2. `initialize_entity(system_hub)` builds everything. `EntityComponentRegistry.setup` creates the rig, collision, audio, stats, effects, pets, inventory, equipment, abilities, the nameplate marker, the state component and the map marker; `create_mediator` then wires the components together.
3. Placed NPCs are initialized by [`ObjectRegistry.register_entity`](/advanced/world/runtime/object-registry); players by the party manager. `ObjectRegistry.spawn_npc`, `spawn_pet` and `spawn_interactable` register what they spawn, so events, encounters and summons produce working entities.

An NPC with a **spawn delay** is hidden and out of the physics world until the delay is over; its components are built then.

## NPC levels and experience

`NpcLevels` ([`runtime_classes/entity/npc_levels.gd`](/advanced/entities/runtime/npc-levels)) decides the level of an NPC and what it is worth.

- **Level.** `Entity.initialize_entity` takes the level of the definition (or the `level_override` of the placed NPC) and passes it to `NpcLevels.scaled_level(npc, base_level, party_manager)`. That calls [`GameplayConfig.get_scaled_npc_level(base_level, reference_level, rank_types)`](/advanced/game-settings/config/gameplay-config): with `npc_level_scaling` off, or no party (reference 0), the level is unchanged; an [`EntityTagDefinition`](/advanced/entity-stats/definitions/entity-tag-definition) with `FIXED_OFFSET` gives `reference + level_offset` (the first one in the NPC's type list), `NEVER_SCALES` keeps the level, otherwise the level is raised to `reference - scale_up_within_levels` if lower (scale up) or lowered to `reference + scale_down_within_levels` if higher (scale down). The result is clamped to `1..max_level` and set once; [`StatsComponent.set_level`](/advanced/entity-stats/runtime/stats-component) then applies the growth. A saved NPC loads its saved `current_level`. `NpcLevels.reference_level` is the average (rounded), the highest or the current player's level, by `scaling_reference`.
- **Experience.** `NPC.get_experience_worth()` is `NpcLevels.kill_experience(npc)`: `GameplayConfig.get_kill_experience(level, fixed_worth)` (the worth of the NPC itself in `FIXED` mode, or when above 0 in the other modes; else the `kill_experience_table` row with the largest level not above the NPC's, or the `kill_experience_formula` evaluated at the level) times `NPCDefinition.experience_multiplier`, `UniqueEntityData.experience_multiplier` and the `experience_multiplier` of each entity type, rounded. [`CombatManager`](/advanced/entity-stats/combat/combat-manager) emits `experience_grant_requested` with it when the last enemy of a fight that included a player dies; `PartyManager.grant_party_experience` gives it to the party and the reserve share to the reserve. `NPC.get_fixed_experience_worth()` is the raw worth (the override of the placed NPC, else the definition). With `kill_experience_falloff` on, the amount is also multiplied by `GameplayConfig.get_kill_experience_falloff_factor(reference_level - npc.current_level)`: `1 - clamp(formula(levels_below - kill_experience_falloff_grace), 0, 100) / 100`, or 1 at or under the grace.
- **Rescaling.** `NpcLevels.rescale(npc, party_manager)` recomputes `scaled_level(npc, base_level_of(npc), party)` for a living NPC: an NPC in a fight sets `rescale_pending` and `Entity.exit_combat` applies it; the health share of the master pool is kept; `NPC.level_rescaled(old, new)` is emitted. Triggers: `NPC._respawn_entity` (`rescale_npcs_on_respawn`) and `ObjectRegistry._on_party_changed`, connected (on the first registered entity) to `PartyManager.party_levels_changed` (a member emitted `entity_leveled_up`), `player_added`, `player_removed` and `new_current_player` (`rescale_npcs_on_party_change`). The registry rescales every NPC only when `NpcLevels.reference_level` differs from the one it last scaled to.

## Components

Reached through `entity.components`: `stats()`, `effects()`, `abilities()`, `equipment()`, `inventory()`, `audio()`, `rig()`, `animation()`, `states()`, `pets()`, `mediator()`.

The **mediator** forwards the signals of the components as the public signals of `Entity`: `entity_taken_damage`, `entity_hit_dealt`, `entity_hit_received`, `entity_ability_cast`, `effect_gained`, `entity_healing_applied`, `entity_leveled_up`, `equipment_changed`, `entity_item_used` and more. Listen to the entity, not to its components.

## The state component

[`EntityStateComponent`](/advanced/behaviors/states/entity-state-component) owns what an NPC (or a controlled-by-AI member) does:

- the **behavior script**: schedules and tasks, run every `behavior_interval` seconds (the level of detail sets the interval; a paused entity processes nothing),
- the **combat script**, a state machine: Inactive, Target search, Chasing, Attacking, Following, Flee, Disoriented, Incapacitated, Player command, Dead (see [Behaviors](/advanced/behaviors/#the-combat-state-machine)),
- the **movement states** (idle, moving, falling, turning, directional, climbing) and the [`NavigationController`](/advanced/behaviors/states/navigation-controller),
- three detection areas: pull range, attack range and player detection, sized from the *Sight Range* stat.

If a definition has no combat script, `_create_default_combat_script()` makes a simple one.

## Hostility

`FactionDefinition.is_hostile_to`, `is_friendly_to`, `is_neutral_to` and `can_target_as_enemy` answer every "who is an enemy?" question. An entity with no faction is neutral. A neutral NPC that is attacked fights back and is neutral again when the fight ends (the *temporary hostility* of the threat table). See [Factions](/advanced/behaviors/factions/faction-definition).

## Death

`entity_dying` is emitted first (procs run, a resurrection can step in), then `entity_died`. What happens next depends on the kind:

| Kind | Then |
|---|---|
| NPC | A **corpse** with a `LootInteraction` that replaces the living interaction if there is loot (it goes when the corpse is empty or the NPC is resurrected). It respawns after `respawn_timer`, or is removed with `despawn_on_death`. A respawn goes through `resurrect()` |
| Pet | Leaves its summoner (`PetManagerComponent.remove_pet`) |
| Player | Handled by the party manager, by the death behavior of the Gameplay Config |
| Destructible object | `InteractableObject._on_master_pool_depleted`: plays `destroyed` and refuses interaction |

A dead entity leaves combat. Corpses and their loot are saved.

## Pets

A `Pet` is an NPC with a `summoner`. It is registered in the summoner's `PetManagerComponent` and its `DynamicFollowerSystem`, which gives each follower a formation position. Following is the [`FollowingState`](/advanced/behaviors/states/following-state); the follow task asks the follower system for the spot. A summoned interactable takes its summoner's faction and leaves when the summoner dies.

## Players and the party

`PartyManager` holds the active party (`players`), the reserve, and who is the current player.

| Call | What it does |
|---|---|
| `get_party_members()`, `get_main_character()` | The active party; slot 0 |
| `set_current_player(player)` | Control passes to a member; every other member gets the state of a companion (`refresh_control_state`) |
| `try_switch_to(player)` | Switch, or refuse with a reason (`switch_denied`: not allowed, dead, in combat); `switch_to_next(±1)` cycles |
| `recruit_player`, `move_to_reserve`, `move_to_party`, `swap_with_reserve`, `remove_player`, `set_max_party_size` | Party management; a recruit goes into the party, else the reserve, else is refused. The reserve is saved |

With **Has main character** off (and character switching allowed) `get_main_character()` returns `null`: slot 0 can be moved to the reserve and only a party wipe ends the game. `GameplayConfig.main_character_exists()` is `has_main_character or not allow_character_switching`.

A companion follows with `FollowingState` at `companion_follow_distance`, joins a fight within `companion_assist_range`, attacks with the basic attack and ([`CompanionAttackLogic`](/advanced/behaviors/combat-scripts/companion-attack-logic)) its abilities: an enemy-targeting ability on the target, an ally-targeting ability on the most hurt member under 70 %. The main character's death (or the whole party's) ends the game under *Game over* and *Permadeath*; a companion's death does not.

`Player.get_proficiencies()` is the [proficiency tracker](/advanced/entity-stats/proficiencies); levels, experience, skill points and skill trees are saved with the player.

## Interactions

An `InteractableObject` (a `StaticBody3D`) is made from an `InteractableDefinition`. Its own copy of the `Interaction` is made on initialization and told which object it belongs to (`set_entity_reference`, then `setup_for_interactable_objects`).

`process_interaction(entity)` is what the interact key calls: the interaction cooldown, the lock (a key in the bag unlocks it, `consume_key_on_unlock`), then `interaction.can_interact` and `start_interaction`. An interaction can implement callbacks: `on_locked_reaction`, `on_unlocked`, `on_object_destroyed`, `save_state` and `load_state`, `cleanup`.

| Base | Works on | Types |
|---|---|---|
| `InteractableObjectInteraction` | Objects | Door, Container, Switch (Light), Ladder, Rabbit Hole, Trap, Readable |
| `EntityInteraction` | Entities | Loot, Join Party |
| `Interaction` | Both | Speak, Conversation, Vendor, Crafting, Grant Quest, Show UI Panel |

A custom interaction is a new script that extends one of the bases. `get_interaction_by_type(name)` lets one interaction find another (a rabbit hole finds the interaction of its destination).

## Saving

An entity saves its stats and pools, effects, inventory, equipment, abilities with cooldowns, threat table, position and meta data (`Entity.meta_data`). A player adds its levels, experience, proficiencies, skill trees and pending rewards. An interactable saves its state (open, on, armed) and not its cooldown.

## The classes

### Definitions

<!-- classes:entities/definitions -->
| Class | What it is |
|---|---|
| [CharacterDefinition](/advanced/entities/definitions/character-definition) | Character Definition - Unique template for creating player characters References a PlayerClassDefinition and inherits visual/audio from EntityDefinition |
| [CustomCharacterDefinition](/advanced/entities/definitions/custom-character-definition) | CustomCharacterDefinition - Extended character template with full customization support Stores facial feature configurations, shader color parameters, blend shape weights, and voice selection for creating unique, customizable player characters |
| [EntityDefinition](/advanced/entities/definitions/entity-definition) | EntityDefinition contains all visual, audio, and display configuration for entities This serves as the base class for NPCDefinition and CharacterDefinition |
| [InteractableDefinition](/advanced/entities/definitions/interactable-definition) | Core data definition for interactable objects. |
| [NPCDefinition](/advanced/entities/definitions/npc-definition) | NPCDefinition extends EntityDefinition with combat stats, AI behavior, and loot systems Used for creating NPC entities with full combat and inventory capabilities |
| [PlayerClassDefinition](/advanced/entities/definitions/player-class-definition) | PlayerClassDefinition defines the template and progression for player character classes This is a class archetype (like "Warrior", "Mage") not tied to specific entity models |
<!-- /classes -->

### Interactions

<!-- classes:entities/interactions -->
| Class | What it is |
|---|---|
| [ContainerInteraction](/advanced/entities/interactions/container-interaction) | Container interaction - manages inventory storage in world objects Uses InteractableObject's InventoryComponent (created if this interaction is present) |
| [ConversationInteraction](/advanced/entities/interactions/conversation-interaction) | Interaction for dialogue/conversations with NPCs Uses the Conversation resource system with ConversationInstance for runtime state |
| [CraftingInteraction](/advanced/entities/interactions/crafting-interaction) | Crafting interaction that opens the crafting interface when activated Can be attached to NPCs, Crafting Tables, or other interactive objects Updated to use CraftingJob's existing timer system instead of redundant timers |
| [DoorInteraction](/advanced/entities/interactions/door-interaction) | Door interaction - opens/closes doors with animations Uses available_animations from InteractableDefinition for animation selection |
| [EntityInteraction](/advanced/entities/interactions/entity-interaction) | Only entities can use these interactions |
| [GrantQuestInteraction](/advanced/entities/interactions/grant-quest-interaction) | Interaction that instantly activates a Quest if player meets requirements |
| [InteractableObjectInteraction](/advanced/entities/interactions/interactable-object-interaction) | Only interactable objects can use these interactions |
| [Interaction](/advanced/entities/interactions/interaction) | Base class for all entity interactions Provides the foundation for different types of NPC interactions |
| [JoinPartyInteraction](/advanced/entities/interactions/join-party-interaction) | Interaction grants a new Player to the party, interactee will be a NPC/Object So we will create a Player &amp; optionally disable/hide the Interactee. |
| [LadderInteraction](/advanced/entities/interactions/ladder-interaction) | Ladder interaction - climbing system using Path3D Discovers scene structure by name: "LadderPath", "StartMarker", "EndMarker" |
| [LightInteraction](/advanced/entities/interactions/light-interaction) | Light interaction - extends SwitchInteraction to control lighting Creates Light3D node (OmniLight3D or SpotLight3D) at runtime |
| [LootInteraction](/advanced/entities/interactions/loot-interaction) | Loot Interaction for NPCs Allows players to access a dead entity's inventory Works similarly to InteractableContainer but uses entity.components.inventory() |
| [RabbitHoleInteraction](/advanced/entities/interactions/rabbit-hole-interaction) | Rabbit hole teleportation system - supports both local and inter-map teleportation Used by players: local teleportation (same map) and inter-map teleportation (NPCs and pets using a rabbit hole is a future option, through the behaviour tasks) |
| [ReadableInteraction](/advanced/entities/interactions/readable-interaction) | Readable interaction - displays multi-page text content in UI panel Used for signs, books, plaques, notes, etc. |
| [ShowUIPanelInteraction](/advanced/entities/interactions/show-ui-panel-interaction) | Calls for a UI Panel to be shown, can be used for custome UI panels Or built panels that you may want accessed through an interaction rather than always avialable through the InGameUI |
| [SpeakInteraction](/advanced/entities/interactions/speak-interaction) | Simple interaction that displays text and optionally plays a voice line |
| [SwitchInteraction](/advanced/entities/interactions/switch-interaction) | Switch interaction - handles ON/OFF toggle with lock mechanics and audio feedback Base class for LightInteraction and other toggle-based interactions |
| [TrapInteraction](/advanced/entities/interactions/trap-interaction) | Trap interaction - triggers effects through proximity, interaction, or events Integrates with combat system through effect application |
| [VendorInteraction](/advanced/entities/interactions/vendor-interaction) | Vendor interaction that opens the shop interface when activated |
<!-- /classes -->

### Entities (runtime)

<!-- classes:entities/runtime -->
| Class | What it is |
|---|---|
| [DynamicFollowerSystem](/advanced/entities/runtime/dynamic-follower-system) |  |
| [Entity](/advanced/entities/runtime/entity) | Entity is the base class for all characters and creatures in the game world. |
| [EntityComponentMediator](/advanced/entities/runtime/entity-component-mediator) | Internal signal bus for Entity component coordination |
| [EntityComponentRegistry](/advanced/entities/runtime/entity-component-registry) | Unified component manager for Entity - combines registry and factory Provides type-safe access to all entity components with lazy initialization Eliminates timing issues by ensuring components exist when accessed |
| [FormationSystem](/advanced/entities/runtime/formation-system) |  |
| [InteractableObject](/advanced/entities/runtime/interactable-object) | Unified interactable object class - uses InteractableDefinition + Interactions All specialized logic is now in Interaction subclasses |
| [NPC](/advanced/entities/runtime/npc) | NPC represents a non-player character in the game. |
| [NpcLevels](/advanced/entities/runtime/npc-levels) | The level of an NPC and the experience it gives, by the settings of the project (Gameplay Config: NPC Level Scaling and Kill Experience). |
| [PartyManager](/advanced/entities/runtime/party-manager) | PartyManager manages the physical containers and setup for the player party system. |
| [Pet](/advanced/entities/runtime/pet) |  |
| [PetManagerComponent](/advanced/entities/runtime/pet-manager-component) | PetManagerComponent manages the pets owned by an entity. |
| [Player](/advanced/entities/runtime/player) | Player represents a player-controlled character in the game. |
<!-- /classes -->
