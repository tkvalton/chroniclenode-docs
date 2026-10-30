# 4. Can everyone see your world?

::: info Status
Written from the editor's fields and the reference pages. Not yet checked step by step in the editor.
:::

Roughly one man in twelve, and a smaller share of women, sees colours differently. In this tutorial you look at your world as they do, fix what cannot be told apart, and find the setting that gives the player a correction.

**Time:** about 10 minutes.

**Before you start:** a world with something that matters in colour (enemies, loot, a danger).

## Part 1: look through their eyes

1. Open your world and click **Environment** in the 3D toolbar.
2. In the bar open **Colour blindness** and choose **Deuteranopia (no green)**. The viewport shows what a player without green sees. Then try **Protanopia (no red)** and **Tritanopia (no blue)**.
3. Ask: can I still tell the poisonous mushroom from the safe one? The friendly camp from the enemy camp? The lava from the path? Choose **Normal vision** to go back.

This is only a view for you. The game shows what the player chose.

## Part 2: fix what you found

Red against green is the usual trouble. Do not rely on colour alone:

4. **Change the brightness, not only the colour.** Make danger darker or brighter than its surroundings: that survives every kind of colour blindness.
5. **Add a shape or a glow.** A hostile camp with a banner, loot with a glint, a danger with a light of its own.
6. **Keep the grade gentle.** A strong tint or a grade that squeezes the colours together (see [tutorial 2](/basic/world/tutorials/colour-grading-with-a-lut)) hides differences. Check it again in the view after each change.

## Part 3: the player's correction

7. In the game open the settings menu, **Display > Camera and Screen**. **Colour-blind mode** (None, Protanopia, Deuteranopia, Tritanopia) and **Colour-blind strength** correct the colours of the world: they move the colours that are hard to tell apart so that they differ more. It is baked into the same table as your grade, so it costs nothing.
8. In **Game Settings > Settings** you can hide it if your game does not want it. Leave it on: it is the cheapest accessibility option you have.

The interface (nameplates, health bars) has its own colours in the **Accessibility** settings, which the player can change. The correction does **not** change the interface.

## Going further

| You want | Do this |
|---|---|
| **A second signal on the interface** | Planned for the interface audit: shapes and symbols next to the colours |
| **To read more** | [Camera effects](/basic/world/camera-effects) and [World Configs](/basic/world/world-configs#colour-blindness) |
