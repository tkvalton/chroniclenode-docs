# 2. Colour grading with a LUT

::: info Status
Written from the editor's fields and the reference pages. Not yet checked step by step in the editor.
:::

In this tutorial you give a world a **look**: first with a few numbers, then with a **LUT**, a small picture you make in any image editor that says what every colour becomes. A LUT is how films and games get a teal-and-orange evening, a faded flashback or a cold dungeon.

**Time:** about 20 minutes.

**Before you start:** finish [tutorial 1](/basic/world/tutorials/a-day-in-the-valley) or have any world with an Environment config of its own. You need an image editor that works with layers and adjustments (Krita, GIMP, Photoshop).

## Part 1: the numbers

1. Open your world and click **Environment** in the 3D toolbar, then **World Configs > Environment** and select your config.
2. Open **Colour Grade**. Set **Grade saturation** to `0`: the world is black and white. Put it to `1.2`: the colours are stronger. Leave it at `0.8`.
3. Set **Grade tint** to a warm orange and **Grade tint amount** to `0.25`. Raise **Grade contrast** to `1.1`.

That is a grade, and it costs nothing: the renderer applies it while it tonemaps. Put every number back to `1` and the tint to `0` and the grade is gone without a trace.

## Part 2: a picture of the look

4. Click the **Play** button of the editor and take a screenshot of the game in the place you want to grade (the Windows key + Shift + S, or your screenshot key).
5. In your image editor open the screenshot. Open `addons/chroniclenode/assets/color_grading/neutral_lut_16.png` too and **paste it into the screenshot** in a corner. It is a strip of 16 coloured squares, 256 x 16 pixels. Do not resize it.
6. Grade the **whole image**, the strip included, with adjustments: curves, colour balance, hue and saturation, a colour overlay. Make the shadows cool and the highlights warm, for example. Keep to adjustments that act on each colour the same way everywhere (not a blur, not a gradient across the image).
7. **Cut the strip out** at exactly 256 x 16 pixels and save it as a PNG (`evening.png`) in your project, for example in `res://assets/`.
8. In Godot select `evening.png` and in the **Import** dock keep **Compress mode** on **Lossless**. Click **Reimport**.

## Part 3: give it to the world

9. In the Environment config, in **Colour Grade**, set **Grade lut** to `evening.png`. The world takes the look at once.
10. Set **Grade lut strength** to `0.6` to mix the look with the original. Set the numbers of part 1 back to `1` or keep them: the numbers are applied **after** the LUT.
11. Click **Use for this world** in the bar, then **Test World**.

## Good to know

- A strip must be **N squares of N by N** (256 x 16 for 16). Another size is refused with a warning and the LUT is ignored.
- The player's own **Brightness, Contrast and Saturation** (video settings) are applied first, your grade after them. The player's **colour-blind** correction is baked into the same table: [tutorial 4](/basic/world/tutorials/can-everyone-see-your-world).
- LUT packs made for other engines work if they are a horizontal strip of 16 squares.

## Going further

| You want | Do this |
|---|---|
| **A different look at night** | Make a second Environment with its own LUT for the night place (a cave, a dungeon) and give it to that world |
| **A flash of a look in a cutscene** | Use a [Screen Look event action](/basic/world/camera-effects#event-actions) for tints and greys that come and go |
| **Check what you made** | Use the **Colour blindness** view in the Environment bar, [tutorial 4](/basic/world/tutorials/can-everyone-see-your-world) |
