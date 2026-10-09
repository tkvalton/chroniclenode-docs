# Pooling

Making and freeing objects costs time, and in a fight the same few things are made hundreds of times: the effect of a hit, a projectile, a spark of VFX, a timer for a cooldown, a sound. ChronicleNode keeps ready-made ones in **pools**, hands them out, and takes them back.

A pool works on [instances](/advanced/definitions-and-instances), never on definitions: a definition is shared and never changes, so there is nothing to reuse. An instance is reset on its way back to the pool, which is why instances must hold nothing but state.

| Pool | Holds | Where | Size |
|---|---|---|---|
| [Effect instances](#effect-instances) | `EffectInstance` objects | `EffectInstancePool` | 50 made at start, up to 500 kept |
| [Projectiles](#projectiles) | `PhysicalProjectileInstance`, `NonPhysicalProjectileInstance` | `EffectInstancePool` | up to 400 of each kind kept |
| [VFX](#vfx) | `VFX` scenes, one pool for every effect in the VFX library | `VFXManager` | Every VFX made once at loading, up to 500 kept |
| [Timers](#timers) | `Timer` nodes | `ChronoManager` | 300 made at start, grows by 100 |
| [Audio players](#audio-players) | `AudioStreamPlayer3D`, `AudioStreamPlayer` | `AudioManager` | 50 3D, 20 2D, 5 for the interface |

## The pattern

Every pool has the same four steps:

1. **Fill** at loading, so playing does not make anything (and, for VFX, so shaders are compiled behind the loading screen).
2. **Get**: take one out of the pool; if the pool is empty, make a new one (timers also warn; audio players do not).
3. **Use** it.
4. **Return**: reset it (stop it, disconnect its signals, clear its state) and put it back. If the pool is full, free it.

What differs is **who returns it**.

## Effect instances

`EffectInstancePool` (reached as `combat_manager.effect_instance_pool`) makes 50 `EffectInstance` objects at start.

```gdscript
var instance: EffectInstance = combat_manager.effect_instance_pool.get_effect_instance(effect, originator, target)
instance.start_effect()
# ...
combat_manager.effect_instance_pool.return_effect_instance(instance)   # optional, see below
```

`get_effect_instance` takes one from the pool (or makes one), calls `initialize(system_hub, effect, originator, target)` and counts it. `return_effect_instance` calls `EffectInstance.reset()`, which cleans up whatever the instance was doing (timers, registration, signal connections) and puts every field back to its start value, then keeps it unless 500 are already waiting. The pool counts the instances made, recycled and the peak in use, for tuning.

::: info Not every instance goes back
An `EffectInstance` is a `RefCounted`, so an instance that is not returned is freed when the last reference goes. Most effects end by being released this way (the effect finishes, the component forgets it); the explicit return is used where the game hands an instance back deliberately: today that is a saved effect whose originator is gone when a game is loaded. The pool is therefore always safe, but it mostly acts as a fast factory with a few reused instances rather than a full recycler. Instances are only worth returning when the code that ends an effect is sure nothing else (a passive's effect list, a channel's tracking, a signal handler) still points at it.
:::

When you write code that creates effects, use the pool to make them, not `EffectInstance.new()`, so the instance gets its `system_hub`.

## Projectiles

`get_physical_projectile()` and `get_non_physical_projectile()` return projectiles that are Node3Ds parked in the world container. A projectile knows how to give itself back: the pool sets a **return callback** on every projectile it makes (`set_pool_return_callback`), and the projectile calls it when it hits, expires or is cancelled. Returning resets it (`reset_projectile`), hides it, stops its processing and parks it. If 400 are already parked, it is freed. `get_*` brings it back, shows it, starts its processing and makes sure it is in the world container.

## VFX

`VFXManager` pre-instantiates **every VFX of the library** during loading, adds each to the scene tree for one frame (which compiles its shaders, so there is no hitch the first time it plays), then takes it out and files it under its cache key (`"type/name"`, such as `oneshot/fire_burst`).

```gdscript
var spawned: Array[VFX] = vfx_selection.spawn_vfx(combat_manager.vfx_manager, target, originator)
```

`play_vfx_from_selection` gets one from the pool for the selection, falls back to making one if the pool is empty, attaches it and plays it. When the VFX ends it calls the **return callback** that the manager set, which removes it from the active list, resets it and files it again. At most 500 VFX are pooled; past that the oldest pooled one is freed. Telegraphs and material effects are made at run time (they are not in the library) but follow the same return.

`stop_vfx` and `stop_vfx_array` end an effect early and return it the same way. `cleanup_everything` (called when a loading starts) stops everything that is playing and frees the pools; they are filled again when the next world has loaded.

## Timers

Timers are everywhere in the toolkit: cooldowns, effect durations, ticks, respawns, restocks. `ChronoManager` keeps 300 `Timer` nodes ready.

```gdscript
var timer: Timer = chrono_manager.get_timer("Respawn_%s" % name, 30.0, true)   # name, seconds, one shot
timer.timeout.connect(_on_done)
timer.start()
# when it fires or is no longer needed:
chrono_manager.return_timer(timer)
```

`return_timer` stops the timer, **disconnects every connection of `timeout`**, resets its name and wait time and files it. `get_timer` never fails: an empty pool grows by 100 and a warning is printed. If you see that warning, something borrowed timers and did not return them.

**The one rule of the timer pool: return every timer you get.** A leaked timer is never freed or reused. Every class that borrows timers returns them in its `cleanup()` or `_exit_tree`.

## Audio players

`AudioManager` makes 50 `AudioStreamPlayer3D` for positional sound, 20 `AudioStreamPlayer` for global sound and 5 for the interface. A request (`request_3d_audio_player` with an `AudioPlayerRequest`, or `AudioComponent.play_effect` / `play_sfx_selection` for entities) takes a free player, plays it, and the `finished` signal returns it. **When there is no free player the sound is skipped**: audio does not grow its pool, because a missing footstep is better than a hitch. An entity's `AudioComponent` tracks the requests it made so it can stop them (`stop_all_audio`) when the entity goes.

## Writing code that works with the pools

| Do | Why |
|---|---|
| Make effect instances, projectiles and VFX with the pool or manager, never with `.new()` | They need the references the factory sets |
| Return what you borrow, in the same class that borrowed it | A timer that is not returned is lost |
| Reset your own state in `reset()` / `cleanup()` | A returned object is reused as if it were new |
| Do not keep a reference to a pooled object after you returned it | It may already be somebody else's |
| Do not store a pooled VFX or timer in a save | They are not state; the effect that owns them makes them again on load |

## See also

- [Definitions and instances](/advanced/definitions-and-instances), [Abilities & Effects: how it is built](/advanced/abilities-and-effects/), [Visual effects](/basic/assets/vfx)
