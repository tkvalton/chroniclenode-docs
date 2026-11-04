# 6. A storm rolls in

::: info Status
Written from the editor's fields and the reference pages. Not yet checked step by step in the editor.
:::

In this tutorial a storm comes over your valley: the sky darkens, rain falls, the screen turns grey at the edges, you hear the rain, and when the party steps into a cabin the rain is on the roof and the burn of the storm stops.

**Time:** about 25 minutes.

**Before you start:** a world with a ground and a small hut or any building with a roof, and an audio file of rain (a loop of a minute or so; a second one for the rain on a roof is nicer). Finish [tutorial 1](/basic/world/tutorials/a-day-in-the-valley) so the World Configs are familiar.

## Part 1: the storm

1. Open **World > Weather**. In the list choose **Thunderstorm** (it comes with the toolkit) and click **Duplicate** in its right-click menu: `Valley storm`.
2. In **Look** the **Weather effect** is `thunderstorm` and the **Intensity** `1`. Drag the **Intensity** slider of the preview down and up to see the rain thin out and thicken.
3. In **Fog** set **Fog added** to `0.01` so the valley fills with a little mist.
4. Press **Fade in** in the preview to see the storm arrive, then leave the tab.

## Part 2: what the player sees

5. In the **Screen** container set **Screen tint** to a grey-blue with alpha `0.12`, **Screen vignette** to `0.35` and **Screen desaturate** to `0.3`. The preview shows it at once.
6. Look at the preview with the **Intensity** at `0.5`: the screen look is half as strong. Everything follows the intensity.

## Part 3: what the player hears

7. In **Sound** type `rain` in **Kinds of sound**.
8. Use the **+** next to **Ambient sound** and choose your rain loop. Leave the volume at `0`: it is 6 dB quieter at half the intensity by itself.
9. The weather lists no **Music**: the music of the zone and the world plays on, and the rain is added to it.

## Part 4: a cabin

10. Open the world scene. In the placement palette click **Volumes**, choose **Shelter volume** and click inside the hut. Resize its box over the room (the `CollisionShape3D` inside it).
11. In the **Unique Object panel** choose the preset **Wooden cabin**: it keeps all the weather off, muffles the outside and has the rain on the roof.
12. In the **Sound** page use the **Weather sounds** list: change the `rain` line, **Track** your rain-on-the-roof file, **Volume** `-3`.
13. Use **Save as preset...** and name it `Valley cabin` to use the same cabin in other huts.

## Part 5: a burn in the storm

14. Make an effect that hurts a little over time and lasts until it is taken off (see [Effects](/basic/abilities-and-effects/effects)), called `Storm chill`.
15. Back in **World > Weather** open `Valley storm`. In **Exposed Effects** click **Add an exposed effect**: choose `Storm chill`, **How it is given** `Held`, **Who gets it** `Party`. The Warnings container stays empty: a held effect with no duration is right.
16. Make it a Refreshed Wet debuff instead if you like: an effect of a minute, **How it is given** `Refreshed` with an **Interval** of `5`. It is renewed while the party is out in the rain and wears off a minute after it comes in.

## Part 6: try it

17. Set `Valley storm` as the **Default weather** of the world (**World > Worlds**), or use a **Set Weather** event, and click **Test World**.
18. The sky darkens, the rain falls, the edges of the screen go grey and the rain is heard. The party takes the chill.
19. Walk into the hut. Over a second the screen clears, the rain on the roof replaces the rain, the world outside is muffled and **the chill stops**. Walk out and everything comes back.
20. Try a **Sheltered** [condition](/basic/world/shelter#asking-whether-the-party-is-sheltered) in an event: *only let the party make camp while sheltered*.

## What you learned

- A weather is one resource that changes the picture, the sound and the people.
- A shelter keeps it off by amount and has the sound of the inside for each kind of weather.
- [Sound layers](/basic/world/sound-layers) decide which music and ambient sound win.

The pages behind it: [Weather](/basic/world/weather), [Shelters](/basic/world/shelter), [Sound layers](/basic/world/sound-layers).
