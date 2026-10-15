<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ChainMovement

**Inherits:** [ProjectileMovement](/advanced/abilities-and-effects/effects-projectiles-and-shots/projectile-movement) < [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Chain movement strategy - bounces between multiple targets Updated to support both Entity and InteractableObject targets

## Variables

| | | |
|---|---|---|
| `int` | [max_chains](#var-max-chains) | `3` |
| `int` | [current_chain_count](#var-current-chain-count) | `0` |
| `float` | [chain_range](#var-chain-range) | `5.0` |
| `Variant` | [current_target](#var-current-target) |  |
| `Array[Variant]` | [previous_targets](#var-previous-targets) | `[]` |
| `bool` | [allow_repeat_targets](#var-allow-repeat-targets) | `false` |
| `ChainEffect.ChainTargetType` | [chain_target_filter](#var-chain-target-filter) | `ChainEffect.ChainTargetType.ENAMY` |
| `float` | [arrival_threshold](#var-arrival-threshold) | `1.0` |
| `bool` | [chain_finished](#var-chain-finished) | `false` |

## Methods

| | |
|---|---|
| `void` | [set_max_chains](#method-set-max-chains)( `max_count: int` ) |
| `void` | [set_chain_range](#method-set-chain-range)( `range: float` ) |
| `void` | [set_chain_target_filter](#method-set-chain-target-filter)( `filter: ChainEffect.ChainTargetType` ) |
| `void` | [set_allow_repeat_targets](#method-set-allow-repeat-targets)( `allow: bool` ) |
| `void` | [set_arrival_threshold](#method-set-arrival-threshold)( `threshold: float` ) |
| `int` | [get_current_chain_count](#method-get-current-chain-count)() |
| `Variant` | [get_current_chain_target](#method-get-current-chain-target)() |
| `Array[Variant]` | [get_previous_targets](#method-get-previous-targets)() |
| `bool` | [is_chain_finished](#method-is-chain-finished)() |
| `int` | [get_remaining_chains](#method-get-remaining-chains)() |
| `float` | [get_distance_to_target](#method-get-distance-to-target)() |
| `Vector3` | [get_target_position](#method-get-target-position)() |
| `bool` | [wants_to_continue](#method-wants-to-continue)() |
| `void` | [cleanup](#method-cleanup)() |

## Variable descriptions

### int max_chains = 3 {#var-max-chains}

Maximum number of chain bounces

### int current_chain_count = 0 {#var-current-chain-count}

Current chain count

### float chain_range = 5.0 {#var-chain-range}

Range to find next chain target

### Variant current_target {#var-current-target}

Current target in the chain

### Array[Variant] previous_targets = [] {#var-previous-targets}

Previous targets hit (to avoid infinite loops)

### bool allow_repeat_targets = false {#var-allow-repeat-targets}

Whether to allow hitting the same target multiple times

### ChainEffect.ChainTargetType chain_target_filter = ChainEffect.ChainTargetType.ENAMY {#var-chain-target-filter}

Team filter for chain targets

### float arrival_threshold = 1.0 {#var-arrival-threshold}

Distance threshold to consider target reached

### bool chain_finished = false {#var-chain-finished}

Whether chain movement is finished

## Method descriptions

### void set_max_chains( max_count: int ) {#method-set-max-chains}

Set maximum number of chains

### void set_chain_range( range: float ) {#method-set-chain-range}

Set chain range

### void set_chain_target_filter( filter: ChainEffect.ChainTargetType ) {#method-set-chain-target-filter}

Set target filter ("Enemy", "Ally", "All")

### void set_allow_repeat_targets( allow: bool ) {#method-set-allow-repeat-targets}

Set whether to allow repeat targets

### void set_arrival_threshold( threshold: float ) {#method-set-arrival-threshold}

Set arrival threshold

### int get_current_chain_count() {#method-get-current-chain-count}

Get current chain count

### Variant get_current_chain_target() {#method-get-current-chain-target}

Get current target in chain

### Array[Variant] get_previous_targets() {#method-get-previous-targets}

Get previous targets hit

### bool is_chain_finished() {#method-is-chain-finished}

Check if chain is finished

### int get_remaining_chains() {#method-get-remaining-chains}

Get remaining chains

### float get_distance_to_target() {#method-get-distance-to-target}

Override distance calculation to use current chain target

### Vector3 get_target_position() {#method-get-target-position}

Override target position to use current chain target

### bool wants_to_continue() {#method-wants-to-continue}

Check if chain movement wants to continue

### void cleanup() {#method-cleanup}

Override cleanup to reset chain state

