# 6. Music that follows the story

::: info Status
Written from the fields of the editors and the reference pages. Not yet checked step by step in the editor, and the music has not been listened to in a game.
:::

In this guide the music of a village turns tense when a quest begins, a stinger marks a discovery, and the music relaxes when the quest is done: all from [events](/basic/events-and-quests/events), with no fight.

**Time:** about 25 minutes.

**Before you start:** the Dynamic Music from the [previous guide](/basic/audio/guides/a-boss-fight-with-dynamic-music), or any Dynamic Music with a calm state, a tense state and a stinger. Here we use one called `Village` with the states `Calm` and `Tense`, a layer of strings that plays from intensity `0.5`, and a stinger `Discovery`.

## Part 1: the village plays it

1. Open the **zone** of the village ([Zones](/basic/world/zones#music-and-ambient-sound)). Set its **Music** to **Dynamic**, choose *Village* and the start state *Calm*.
2. Run the game and walk into the village.

**You should see** (hear) the calm music. When a fight starts here the music goes to a state called **Combat** if the Dynamic Music has one; otherwise it stays.

## Part 2: the quest turns it tense

3. Open the [event](/basic/events-and-quests/events) that starts your quest (or any event). Add the action **Set Music State** with **State name** `Tense`. Leave **Dynamic music** empty: it changes the music that plays now.
4. Add **Set Music Intensity** with **Intensity** `0.8` if you want the strings in.

**You should see** the music change on the next bar, by the rule for *Calm to Tense* (or the default transition), and the strings fade in over the layer fade.

## Part 3: a stinger

5. In the event of the discovery add **Play Stinger** with **Stinger name** `Discovery`.

**You should see** the sound over the music, with the music lowered while it plays.

## Part 4: back to calm

6. In the event that ends the quest add **Set Music State** `Calm`.

## Starting the music from an event

If the music that plays is something else (an album, say) a **Set Music State** that **names the Dynamic Music** starts it, in that state, as the music of the event; the music of the place comes back when you take the event's music off with **Set Music Track > Clear**.

## Good to know

- **Set Music State needs a state that exists** in the Dynamic Music; a name that does not exist is refused (the output says so).
- **Intensity** moves all the layers; a state can also set it when it starts (**Intensity** of the state), so you may not need the action.
- The same three actions exist as **combat actions**, for the phases of a boss.

## What next

You have the pieces. The reference pages: [Dynamic Music](/basic/audio/dynamic-music), [Music Albums](/basic/audio/music-albums), [Event actions](/basic/events-and-quests/event-actions).
