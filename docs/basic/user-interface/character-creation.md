# Character Creation screen

The **character creation screen** is where the player makes their hero, when the game uses it (*Use character creation UI* in the [Gameplay Config](/basic/game-settings/gameplay-config)). **What the player can choose** is set in the [Character Creation](/basic/game-settings/character-creation) editor: the templates, the profiles (races), the colours, the voices. This page is about the **scene** that shows those choices.

| | |
|---|---|
| **Set in** | [UI Settings](/basic/game-settings/ui-settings#ui-scene-paths) > *Ui scene character creation* |
| **Root class** | [`CharacterCreationUI`](/advanced/user-interface/scenes/character-creation-ui) (a [`CurrentUI`](/advanced/user-interface/scenes/current-ui)) |
| **Template** | `ui_scenes/menus/character_creation_menu/character_creation_ui_template.tscn` |

## How the scene works

The screen has **no fixed list of choices**. It is made of **containers** and **button scenes**: for every template, class, colour, blend shape and facial feature the settings define, the script makes one button from the scene you gave it and puts it in the matching container. A new class or a new colour appears without touching the scene.

On the root node, in two groups:

| Prefab scenes (one is made for each choice) | Expects |
|---|---|
| `template_button_scene` | A button; made for each template, and for *Custom Character* |
| `class_button_scene` | A [`ClassSelectionButton`](/advanced/user-interface/menus/class-selection-button) |
| `color_button_scene` | A [`ColorButton`](/advanced/user-interface/menus/color-button) |
| `blend_shape_slider_scene` | A [`CustomSlider`](/advanced/user-interface/menus/custom-slider): it reports its value as it moves |
| `facial_feature_selector_scene` | An arrow selector (previous / next) for one facial feature |

| UI containers (where they go) | What it holds |
|---|---|
| `templates_container` | The template buttons |
| `customization_panel` | Everything that only a custom character needs; hidden when a template is picked |
| `class_container` | The class buttons |
| body type, voice and animation selectors | [`ArrowSelectionButton`](/advanced/user-interface/menus/arrow-selection-button)s: *Male / Female*, the voice, the animation set |
| containers for blend shape sliders, skin, hair and eye colours, facial features | The controls above |
| the name field, the **Ready** button, the **Back** button | The name of the hero, confirm, and return to the menu |

A **3D preview** ([`CharacterCreation3DScene`](/advanced/user-interface/menus/character-creation3-d-scene)) shows the hero as the player changes things: the body type, the colours, the equipment of the class. A box (`CompanionInfoBox`) shows the description of the template or class that is selected.

## What the player does

1. Picks a **template** (the hero as it is) or **Custom Character**.
2. For a custom character: picks the body type, voice, animations, blend shape sliders, colours and facial features, which all come from the [profile](/basic/game-settings/character-creation#profiles).
3. Picks a **class**.
4. Types a **name** and presses **Ready**: the game starts with that hero (`character_confirmed`).

## Your own screen

Extend `CharacterCreationUI`, or extend `CurrentUI` and make the choices yourself: build a [`CustomCharacterDefinition`](/advanced/entities/definitions/custom-character-definition) and emit `new_game_requested` with it. See [Main Menu](/basic/user-interface/main-menu#your-own-main-menu) for the signals.

## See also

- [Character Creation](/basic/game-settings/character-creation) (the choices)
- [Playable Character](/basic/entities/playable-character)
