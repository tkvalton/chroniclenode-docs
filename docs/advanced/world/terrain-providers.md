# Terrain providers: how they are built

This page is for developers. For the features and the setup, see [Using another terrain plugin](/basic/world/terrain-plugins).

## The interface

`TerrainService` answers the questions about the ground for the rest of the toolkit (`get_height`, `get_normal`, `get_ground`, `raycast_ground`, `is_hole`, `is_ground_solid`, `is_navigable`, `get_surface_type`, `get_texture_weights`). It asks the **provider** registered for the world (`TerrainProvider`). The base class answers by the **physics** of the world (rays against the ground layers); a provider overrides what it knows better.

## Features

`TerrainProvider.supports(feature)` says honestly what the provider answers from the data of its terrain. The features are constants of the class: `HEIGHTS`, `NORMALS`, `HOLES`, `SURFACE_TYPES`, `TEXTURE_WEIGHTS`, `PAINT_LAYERS`, `STREAMING`, `WEATHER`; `get_features()` lists them and `TerrainService.supports(context, feature)` asks the provider of a world (a world with no provider supports nothing). The base class supports none. `ChronicleTerrainProvider` supports all eight.

A plugin provider that supports `HEIGHTS` overrides `_data_height(x, z)` (NAN = no ground there); the base class then answers `get_height` from it, falls back on the physics where it is NAN, makes `get_normal` from the heights round the place when it also supports `NORMALS` (a difference over 0.5 m), and `get_ground` as the higher of the data ground (within reach) and what the physics found.

| Provider | Supports | From |
|---|---|---|
| `Terrain3DProvider` | heights, normals, surface types, texture weights | `terrain.data.get_height(Vector3)`, `get_texture_id(Vector3)` (base, overlay, blend) |
| `HTerrainProvider` | heights, normals, surface types | `terrain.get_data().get_interpolated_height_at(local)` in the space of the node |
| `TerraBrushProvider`, `VoxelTerrainProvider` | surface types | the plugin; the ground is the physics of the world |

Each call checks `has_method` first and falls back on the physics, so a plugin version that names things differently degrades instead of failing.

## What needs the toolkit terrain

The paint layers (`ZoneTracker` reads `ChronicleTerrain.get_zone_at`, a Painted `Spawner` reads `layers`), streaming and the weather of the ground are things of `ChronicleTerrain`; with another terrain, zones use `ZoneVolume`s (and the default zone) and a Painted spawner shows an editor warning when its scene has no `ChronicleTerrain`.

## Tests

`tests/terrain_providers_audit.gd` (20 checks): the features of every provider, and the heights, normals, ground within reach, mask handling, texture weights and service registration of the Terrain3D and HTerrain providers against small stand-ins for the plugin data.
