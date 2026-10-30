# Flying

An entity flies because of an **effect**. Nothing else: there is no "can fly" tick on an NPC or a character. Give an entity the **Flight effect** (for a while, or for ever) and it floats in the air; take the effect away, or use the **Land effect**, and it comes down. Because flight is an effect, everything an effect can do works with it: a spell that lets you fly for a minute, a potion, an aura, a passive ability of a dragon that is always on, an item that gives wings, a trap that grounds a flyer.

The flight of the demo is **floating**: the entity moves in 3D the way a swimmer moves in the water, with nothing pulling it down. It is the same movement as in a [Weightless movement volume](/basic/world/movement-volumes), and a flying [mount](/basic/entities/mounts) uses the same thing.

## How it moves

- **The player:** forward goes where the camera looks (up and down included, as in the water: a camera that looks up and W rises). **Jump** goes straight up, **crouch** goes straight down. With no key pressed the entity hangs where it is.
- **NPCs:** a flying NPC goes **straight at where it is going**, up and down included, and follows a target the same way. There is no navigation mesh in the air, so it does not walk round a hill: it flies over it only if its goal is above it.
- **Wind:** a [Fly volume](/basic/world/movement-volumes#flow) with a flow carries a flyer like wind.
- **Ending it:** when the flight ends the entity falls and lands like after any other fall, with the usual landing animation.

## The Flight effect

It is in the **Status and control** group of the effect editor. It needs a **duration** or must be **persistent** (an immediate flight ends at once and the editor warns about it).

| Field | What it does | Default |
|---|---|---|
| **Flight logic** | How the entity flies (see [your own flight](#your-own-flight)). Empty = it floats | empty |
| **Speed multiplier** | How fast it moves compared with how fast it moves on the ground | `1` |
| **Vertical speed** | How fast it goes up and down, in metres per second | `5` |
| **Follows camera pitch** | Forward goes up when the camera looks up. Off: only jump and crouch go up and down | on |
| **Hover when idle** | Hangs where it is when no key is pressed. Off: it sinks slowly | on |
| **Priority** | Which flight wins when two are on: a flight effect is `5`, a mount `10`, a volume `0`. A flying mount wins while it is ridden and the flight is back when the rider gets off | `5` |
| **Use flying animations** | Plays the fly animations of the entity (below) | on |
| **Animation override** | The name of **one** animation that plays the whole time the effect lasts, whichever way the entity moves: a floating pose. Empty = none | empty |

Two flights on one entity (two potions) end independently; the one with the higher priority decides while both last.

## The Land effect

The **Land** effect (same group) ends the Flight effects on its target. Leave **Flight effect id** at `0` to end every flight, or give the id of one Flight effect to end only that one. It does nothing to flight that is not a Flight effect (a mount or a volume decides for itself). Use it in an ability that lets a flyer land, in a spell that grounds one, or as the end of a flying quest.

## Animations of flying

The [animation map](/basic/assets/animations) of an entity type has a **Fly** group: **idle fly**, eight directions (**fly f, b, l, r, fl, fr, bl, br**), **fly up** and **fly down**. A fly animation that is empty uses the swimming one, so a creature with no fly animations flies with its swim animations until you add them.

Swimming got the missing two as well: **swim up** and **swim down**. They play when the entity moves up or down in the water or in the air, and blend with the others when it also moves forward or sideways. With no swim up animation the entity keeps its idle swim.

If the effect has an **Animation override**, that one animation replaces all of them for as long as the effect lasts (a floating pose, wings held out). The animation is looked up by its name in the animation folders of the entity type; if it is not found the usual animations play.

## Your own flight

The Flight effect only starts and ends the flight. **How it feels** is its **Flight logic**, a small script. The default one floats. Write your own to give flight a feel of its own: momentum that keeps the entity moving after you let go of the keys, a glide that drifts forward, a wobble. The logic gets every physics frame the velocity the entity asked for and changes it before the entity is moved.

```gdscript
@tool
class_name MomentumFlightLogic extends FlightLogic
## How much of the last speed it keeps every frame (0 = none, 0.95 = a lot)
@export_range(0.0, 0.99, 0.01) var momentum: float = 0.9
var _last: Vector3 = Vector3.ZERO

func get_flight_type_name() -> String:
	return "Momentum"

func shape_velocity(_delta: float) -> void:
	entity.velocity = _last * momentum + entity.velocity * (1.0 - momentum)
	_last = entity.velocity
```

Save it in `addons/chroniclenode/data_classes/effects/status_and_control/flight_logic/` and it appears in the **Flight logic** list of the Flight effect (Floating is the first choice), with its exported variables as fields under the list. Every flying entity gets its **own copy** of the logic, so it may keep a state in its variables. `begin(entity, claim)` and `end()` tell it when the flight starts and ends. More in [How it is built](/advanced/world/movement-volumes#giving-an-entity-flight).

## Not built yet

See [Flying: what is planned](/planned/flying): a ceiling, no-fly places, a flight resource, NPCs that avoid trees and cliffs in the air, perching.

## See also

- [Movement volumes](/basic/world/movement-volumes): water, weightless, lava and rivers; the same movement without an effect.
- [Mounts](/basic/entities/mounts): a flying mount.
- [Effect types](/basic/abilities-and-effects/effect-types#status-and-control): the Flight and Land rows.
- [Animations](/basic/assets/animations): the animation map.
