# 3. A scary dungeon

::: info Status
Written from the editor's fields and the reference pages. Not yet checked step by step in the editor.
:::

In this tutorial a dungeon gets a mood of its own (dark, close, a little cold), and at the door of its boss the screen goes red at the edges and the camera shakes.

**Time:** about 20 minutes.

**Before you start:** a world for the dungeon (any room with a floor will do) and a [trigger area](/basic/world/trigger-areas) placed in front of the boss door. Finish [tutorial 1](/basic/world/tutorials/a-day-in-the-valley) so the Environment bar is familiar.

## Part 1: no sun, no sky

1. Open **World > World Configs > Sky** and click **Create New**: `Dungeon sky`. Set **Background mode** to **Custom Color** and the **Background color** to near black. There is no sky shader to draw.
2. Open the **Environment** tab, **Create New**: `Dungeon mood`.
3. In **Sun Light** untick **Sun enabled**. There is no sun underground: no sunlight and no sun shadows, only what you light yourself (the torches, the ambient light below).
4. In **Ambient Light** set the **Ambient light source** to a colour (a dim blue-grey) and **Ambient light energy** to `0.4`.
5. In **Fog Settings** set **Fog density** to `0.03`, the colour dark blue-grey and **Fog sky affect** to `1`.

## Part 2: the feel

6. In **Glow and Occlusion** set **Glow amount** to `1.5` (torches glow) and **SSAO amount** to `2` (corners go dark). These need the player's Glow and Ambient occlusion video settings to be on: they are the switch, you say how much.
7. In **Colour Grade** set **Grade saturation** to `0.7` and **Grade tint** to a cold blue with **Grade tint amount** `0.15`.
8. In **Camera** set **Exposure** to `1.2` so it is dark and still readable.

Look at it in the Environment bar: choose `Dungeon sky` and `Dungeon mood`. When it is right, open **World > Worlds**, select the dungeon and under [Config overrides](/basic/world/worlds#config-overrides) set the **Sky** and **Environment** (or click **Use for this world** in the bar).

## Part 3: fear at the boss door

9. Open **Events & Quests > Events** and create an event, `Boss door scare`. As the **trigger** choose **Trigger Area Detection Player**, pick your trigger area and make it fire when the player **enters**. See [Event triggers](/basic/events-and-quests/event-triggers#trigger-area).
10. Add the action **Screen Look**: **Look name** `fear`, **Hold seconds** `4`, **Fade seconds** `0.8`. In **Look** set **Vignette** to `0.7` with a dark red **Vignette color**, **Desaturate** to `0.3`, **Aberration** to `0.3`.
11. Add the action **Camera Shake**: **Amount** `0.6`, **Duration** `1.5`. Put it **before** the Screen Look so the shake starts with the red.
12. Save the event.

## Part 4: try it

13. Click **Test World** and walk into the trigger area. The edges of the screen go red and the picture drains, the camera shakes, and after four seconds the look fades away.
14. Open the settings menu, **Display > Camera and Screen**, and set **Screen effects** to **Reduced** and **Camera shake** to `0`: the same door now has half the red at the edges, no colour fringes and no shake. This is what a player who gets sick from motion sees: they can always turn it down.

## Going further

| You want | Do this |
|---|---|
| **The fear lasts as long as a monster is near** | Make a [Screen Look effect](/basic/world/camera-effects#the-screen-look-effect) and a **Camera Shake effect** (mode *While it lasts*) and give them to the player with an aura |
| **Rumbling in the whole dungeon** | A **Camera Shake** action with a **position** and a **radius** from the boss room: the farther the party is, the weaker it is |
| **A look you can switch off from another event** | Give the Screen Look a name and send a **Screen Look** action with the operation **Clear** and the same name |
