# Camera effects

The camera of the player does two things besides following the character: it changes **how the screen looks** (a red edge when hurt, a grey blurred picture when stunned, a tint under water) and it **shakes** (a hit, an explosion, a quake). Both are a small system called the **camera look**, and you ask it from effects, from events, from movement volumes and from your own scripts.

The **player** has the last word. Three video settings scale everything on this page (see [the settings of the player](#what-the-player-can-change)).

## The look of the screen

A **look** is a set of numbers; every number is `0` for "nothing":

| Part | What it does |
|---|---|
| **Tint** | A colour laid over the picture. Its alpha is how strong it is |
| **Vignette** | How dark the corners are, and their colour (a red vignette for pain, black for fear) |
| **Blur** | Blurs the whole picture (stunned, drunk, poisoned) |
| **Desaturate** | `0` the colours as they are, `1` black and white |
| **Aberration** | Colour fringes towards the edges of the screen (the void, a strong spell) |
| **Grain** | Film grain |
| **Field of view kick** | Degrees added to the field of view: wider for speed (sprinting, flying), narrower to zoom in |

All of it is drawn by **one pass over the finished 3D picture, under the interface**: the HUD, the nameplates and the windows stay sharp and readable. When no look is on, nothing is drawn at all (no cost).

### Layers

Looks come in **layers**. Several can be on at the same time (poisoned while under water in a flashback): they are added up. A layer has a **priority**; a look of a higher priority is laid over one of a lower priority:

| Who asks for a look | Priority |
|---|---|
| a [zone](/basic/world/zones) (planned) | `10` |
| a **Screen Look effect** | `20` (you can change it) |
| a **Screen Look event action** | `50` |
| the water of a [movement volume](/basic/world/movement-volumes) | `100` |

Each look fades in and out over a time you give.

## The Screen Look effect

In the **Status and control** group of the effect editor. It changes the screen **while the effect lasts**: a hurt look that lasts as long as the bleeding, a grey blurred picture while stunned.

| Field | What it does | Default |
|---|---|---|
| **Tint**, **Vignette**, **Vignette color**, **Blur**, **Desaturate**, **Aberration**, **Grain**, **Fov kick** | The look, as in the table above | all `0` |
| **Fade in**, **Fade out** | Seconds to come and to go | `0.4`, `0.6` |
| **Pulse seconds** | An **immediate** effect shows its look for this many seconds (a flash: a spell that blinds for a moment). Effects with a duration last as long as they do | `0.5` |
| **Layer priority** | Which look is laid over which | `20` |

Only the character the **player controls** changes the screen: an effect on an NPC, or on another member of the party, does nothing to it.

## The Camera Shake effect

Same group. The camera moves while the effect is on.

| Field | What it does | Default |
|---|---|---|
| **Shake mode** | **Once**: one shake each time the effect is applied (and at each tick of a periodic effect). **While it lasts**: the shake lasts as long as the effect (an earthquake, turbulence while flying; needs a duration or a persistent effect) | Once |
| **Amount** | `0.2` a bump, `0.5` a hit, `1` an explosion | `0.5` |
| **Shake duration** | Seconds a shake takes to die away | `0.5` |
| **Radius** | With `0`: the camera shakes when the **target** is the player's character (a hit on you). With a radius, in metres: it shakes for the player's camera **whoever the target is**, weaker the farther the target is, gone at the radius (an explosion on an NPC, a giant walking by) | `0` |

The shake is a *trauma*: several shakes **add up**, it dies away by itself, and the picture moves by the **square** of it, so a small shake is small and a big one is wild. The camera moves sideways, up and rolls a little; it never changes the position of the camera logic.

A hit shake is a Camera Shake effect that an ability applies to its target (on a damage hit, add it to the effects of the ability). A shake on the **caster** gives a cast shake.

## Event actions

Two actions are in the **Environment** group of the event editor.

| Action | What it does |
|---|---|
| **Camera Shake** | Shakes the camera: **amount**, **duration**, and, with **from position**, a **position** and a **radius** so it is weaker the farther the camera is (a quake in the valley while the party is at the edge) |
| **Screen Look** | **Set** a look with a **name** (the look numbers, **fade seconds**, and **hold seconds** to take it off by itself; `0` = until cleared), or **Clear** the look of that name. The same name again replaces the look. An event look is laid over the looks of effects (priority `50`) |

Use them for story: a flashback is a Screen Look with desaturate and a warm tint, cleared by another action when it ends.

## Water

The tint of a [movement volume](/basic/world/movement-volumes) (the camera under water) is a layer of the camera look. It is the one look that does **not** go away when the player turns screen effects off (it tells the player where they are). It is now drawn **under** the interface, where it used to cover it.

## What the player can change

In the settings menu, under **Display > Camera and Screen** (any of them can be hidden in [Game Settings](/basic/game-settings/settings)):

| Setting | What it does |
|---|---|
| **Camera shake** | `0` to `1`: how much the camera shakes. `0` = never |
| **Screen effects** | **Off** (only the water tint stays), **Reduced** (tints, grey and half of the vignette: no blur, colour fringes, grain or field of view kicks) or **Full** |
| **Field of view offset** | Degrees wider or narrower than the camera of the game, `-30` to `30`. The result stays between 30 and 120 degrees |

Plan for players who feel sick from motion: **Camera shake 0** and **Screen effects Reduced** remove the movement and the flashing.

## From a script

```gdscript
var look: CameraLook = CameraLook.current            # null when there is no game
look.shake(0.7, 1.5)                                  # amount, seconds
look.shake(1.0, 2.0, explosion_position, 40.0)        # weaker with distance, gone at 40 m
look.set_continuous_shake("quake", 0.4)               # until...
look.clear_continuous_shake("quake")

var hurt := ScreenLook.new()
hurt.vignette = 0.6
hurt.vignette_color = Color(0.45, 0.0, 0.0)
look.set_layer("my_hurt", hurt, CameraLook.PRIORITY_EFFECT, 0.3)   # key, look, priority, fade in
look.clear_layer("my_hurt", 0.6)                                      # fade out
```

## See also

- [World Configs](/basic/world/world-configs) for exposure, depth of field and the colour grade of a world.
- [Effect types](/basic/abilities-and-effects/effect-types) and [Event actions](/basic/events-and-quests/event-actions).
