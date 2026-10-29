# Your own volumes

A **volume** is a space in a world given by the shape of its `CollisionShape3D` child: water, lava, an audio zone, a zone. The toolkit has a base class for them, `SpaceVolume` (an `Area3D`), and a script that extends it gets what the volumes of the toolkit get: the Volumes palette, the Unique Object panel, the handles that resize its shape, and (if it asks) a call when an entity comes in or goes out.

## The smallest volume

Make `res://src/volumes/slow_zone.gd`:

```gdscript
@tool
class_name SlowZone extends SpaceVolume
## Takes a share of the health of whoever stands in it, every second.

## The share of the maximum health taken each second, in percent
@export_range(0.0, 100.0, 0.5) var percent_per_second: float = 2.0

func _watches_entities() -> bool:
	return true

func _on_entity_entered(entity: Entity) -> void:
	print("%s came in" % entity.name)

func _on_entity_exited(entity: Entity) -> void:
	print("%s went out" % entity.name)
```

That is all. The Volumes palette lists **Slow Zone**. Place it, and the Unique Object panel shows *Percent per second* with the comment as its tooltip. Nothing of it is in the Godot Inspector (the settings of a volume are in the panel).

## What the base class gives

| | What it is |
|---|---|
| `_watches_entities()` | Return `true` to be told about the **players, NPCs and pets** that come in and go out (nothing else is watched). The base class sets the collision layers and listens for you. Default `false` |
| `_on_entity_entered(entity)` | An entity came into the volume |
| `_on_entity_exited(entity)` | An entity went out, or was removed from the world while inside |
| `entities_inside` | The entities in the volume now |
| `contains_point(point)`, `is_camera_inside()`, `get_surface_y()` | Where a point, the camera or the surface is, for a box, sphere, cylinder or capsule shape |
| `debug_color` | The colour of the shape in the editor (it is in the *Editor* page) |

The base class does **nothing in the editor** with these hooks: they run in the game only.

## What the editor gives

- **The palette.** Every script of `res://src/volumes/` (and the folders in it) that extends `SpaceVolume` is an entry of the Volumes palette. A script that does not extend it is left out, and so is a spawner (it has a record of its own).
- **The panel.** The exports of the script are in the [Unique Object panel](/basic/world/unique-object-tool): a number, a switch, a colour, a list of ids and the other usual types get their inputs, grouped by `@export_group`, and the comment above an export is its tooltip. Several volumes of one script selected together are set together. Each change is one step of Undo.
- **Selecting and resizing.** A click in the viewport selects the volume, and the handles on it resize its shape.
- **Presets of the whole volume.** *Save selected as preset...* in the palette keeps it with its shape.

## Tips

- Add `@tool` to the script (and to what it extends) so the volume works in the editor, as the toolkit's do.
- Keep the game logic in `_on_entity_entered` and the like, and guard editor-only code with `Engine.is_editor_hint()`.
- A volume that needs a **look** can use `VolumeLook` as the movement volume does (a mesh made from the box shape, with any material).
- To pass the numbers of a volume to a shader, set them on the material (`set_shader_parameter`), as the river does with its flow.

## See also

- [Movement volumes: how they are built](/advanced/world/movement-volumes), [Audio zones: how they are built](/advanced/world/audio-zones)
- [Placing objects](/basic/world/add-object)
