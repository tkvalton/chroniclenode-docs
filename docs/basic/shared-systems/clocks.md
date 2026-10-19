# Clocks

The game keeps **three clocks**. Anything that waits for hours and has to remember across a save or a closed game (a [quest cooldown](/basic/events-and-quests/quests), the restock of a [vendor](/basic/items/vendors)) lets you choose which one it counts on.

| Clock | Counts | Fits |
|---|---|---|
| **Game time** (default) | Hours of the game world. It follows the length of the day set in the time config and the *Advance Time* action, and it stops when the game is paused | "Resets at dawn", sleeping through a cooldown, a shop that restocks every game day |
| **Play time** | Hours you actually play. Real time, but only while the game runs and is not paused | "After 2 hours of play", unaffected by time skips |
| **Real time** | The real clock, in UTC. It keeps counting while the game is closed | Real daily and weekly quests, a weekly shop, a server |

A day of **game time** is as long as your time config says (3 real hours by default), so a "daily" quest on game time is not a real day. Use **real time** for a real day.

## Where you choose

| Where | Field |
|---|---|
| **Quest editor** > Repeatable | **Cooldown Clock**, with the cooldown type (Duration, or Reset at Time) |
| **Vendor editor** > Stock | **Restock Clock**, with the restock interval |

Everything else that waits (the *Timer* trigger, *Wait* action, NPC respawns, ability and effect timers) counts real seconds of play and stays as it is.

**Reset at time** reads the hour of the clock you picked: the hour of the game day on game time, the **UTC hour** on real time. Play time has no hour of the day, so it uses the game's.

## Real time: what to know

- **A player can change the clock of the computer.** In a single player game, setting the clock forward skips every real time cooldown and restock. That is fine for a daily reward and wrong for anything that must be fair.
- **The real clock never goes back.** If the clock of the computer is set back (or a save moves to a computer that is behind), no time passes until the clock catches up. The last time seen is saved.
- **Time passes while the game is closed**, so a vendor can be fully restocked after a weekend away.
- **UTC.** Daily resets are at the same moment for every player, at the UTC hour you set.
- **A server.** A multiplayer game does not use the clock of the player's computer. Give the [chrono manager](/advanced/managers/managers/chrono-manager) a function that returns the time of your server and every real time feature follows it:

```gdscript
chrono_manager.real_time_provider = func() -> float:
    return my_server.get_unix_time()   # seconds since 1970
```

## If you change the clock after release

A saved cooldown or restock time belongs to the clock it was saved on. If you change the clock of a quest or a vendor, a cooldown saved on the old clock is treated as over and a vendor starts its wait again, instead of mixing two clocks.
