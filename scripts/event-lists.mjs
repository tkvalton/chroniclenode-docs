// Writes the two reference pages of the event system, docs/basic/events-and-quests/event-triggers.md and event-actions.md:
// one table for each category folder of the addon, with the name and the first sentence of the comment of every class.
// The words come from the `##` comments of the code, like the class pages: correct a description by correcting the comment.
//
//   npm run events
import fs from 'node:fs'
import path from 'node:path'
import { parseClass, briefOf } from './gdscript-doc.mjs'

const ADDON = process.env.CHRONICLENODE_ADDON ?? 'C:/Users/Rhys/Documents/rpg-toolkit/addons/chroniclenode'
const OUT = path.join(path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1')), '..', 'docs', 'basic', 'events-and-quests')

const kebab = name => name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2').toLowerCase()
const slugOf = d => d.replace(/_/g, '-').replace('enviromental', 'environment')
const titleOf = d => d.replace(/_/g, ' ').replace('enviromental', 'environment').replace(/^./, c => c.toUpperCase())

// "EntityDeathTypeTrigger" -> "Entity Death Type"
const prettyName = (name, suffix) => name.replace(new RegExp(suffix + '$'), '').replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')

// the first sentence of the comment: the comments of the actions run on into notes ("Uses ...", "NOTE: ...")
const firstSentence = text => {
  let t = text.split(/(?<=[.!?])\s|\s(?=Uses |NOTE|Updated |Works |When |Can |Applies |Creates |Clears |Bypasses |Pauses |Replaces )/)[0].trim()
  t = t.replace(/^(Universal )?[Aa]ction to /, "")
  return t.charAt(0).toUpperCase() + t.slice(1)
}

const escapeCell = text => text.replace(/\|/g, '\\|').replace(/\r?\n/g, ' ').replace(/</g, '&lt;').replace(/\{/g, '&#123;')

const CATEGORY_NOTES = {
  triggers: {
    encounter: 'An [encounter](/basic/world/encounters) starts or ends a fight.',
    entity: 'Something happens to or with an NPC or a character: it dies, takes damage, uses an ability, changes stats, is talked to.',
    faction: 'A standing with a [faction](/basic/behaviors/factions) changes.',
    input: 'The player presses a key.',
    interactable_object: 'Something happens to a chest, door, switch, ladder, trap or other [interactable](/basic/entities/interactables).',
    item: 'The party gains, loses, equips or uses an [item](/basic/items/items).',
    party: 'The party changes: it grows, shrinks, or someone joins or leaves.',
    player: 'Something happens to a player character: it levels up, dies, gains experience, learns a skill.',
    quest: 'A [quest](/basic/events-and-quests/quests) changes state.',
    region: 'Something enters or leaves a [region](/basic/world/regions).',
    time: 'A time of day arrives, a timer runs out, or the game starts.',
    user_interface: 'A [popup](/basic/events-and-quests/popups) closes.',
    variable: 'A [global variable](/basic/events-and-quests/global-variables) changes.',
  },
  actions: {
    audio: 'Play or stop music, ambience and sounds.',
    encounter: 'Change what an [encounter](/basic/world/encounters) is doing.',
    entity: 'Spawn, move, activate, heal, kill, or change the behavior of NPCs.',
    enviromental: 'Change the weather and the time, sun, sky and environment configs, and spawn visual and world effects.',
    general: 'Wait, branch (If and Switch), change world, play cutscenes and cinematics, move the camera, grant rewards, end the game.',
    interactable_objects: 'Open, close, lock, unlock, switch, repair, break or spawn doors, chests, switches and destructibles.',
    interactions: 'Change the [interaction](/basic/entities/npcs) of an NPC or an object.',
    party: 'Change the size of the party, or add and remove companions.',
    player: 'Grant or remove effects, move or kill the player characters, change their combat script.',
    quest: 'Start, finish, fail or give up [quests](/basic/events-and-quests/quests) and quest lines, and complete their objectives.',
    time: 'Skip ahead to a time of day, or advance the clock.',
    user_interface: 'Show or hide a [popup](/basic/events-and-quests/popups).',
    variable: 'Set, change and read [global variables](/basic/events-and-quests/global-variables) and the variables of the event.',
  },
}

function section(kind, suffix) {
  const root = path.join(ADDON, 'data_classes', 'events', kind === 'triggers' ? 'event_triggers' : 'event_actions')
  const dirs = fs.readdirSync(root, { withFileTypes: true }).filter(e => e.isDirectory()).map(e => e.name).sort()
  const out = []
  let total = 0
  for (const d of dirs) {
    const files = fs.readdirSync(path.join(root, d)).filter(f => f.endsWith('.gd')).sort()
    const rows = []
    for (const f of files) {
      const info = parseClass(path.join(root, d, f))
      if (!info?.name) continue
      const brief = escapeCell(firstSentence(briefOf(info) || ''))
      const link = `/advanced/events-and-quests/${kind}-${slugOf(d)}/${kebab(info.name)}`
      rows.push(`| [**${prettyName(info.name, suffix)}**](${link}) (\`${info.name}\`) | ${brief} |`)
    }
    total += rows.length
    out.push(`## ${titleOf(d)}\n\n${CATEGORY_NOTES[kind][d] ?? ''}\n\n| ${suffix} | What it does |\n|---|---|\n${rows.join('\n')}\n`)
  }
  return { text: out.join('\n'), total }
}

const trig = section('triggers', 'Trigger')
const act = section('actions', 'Action')

fs.writeFileSync(path.join(OUT, 'event-triggers.md'), `# Event triggers

<!-- generated from the code comments by scripts/event-lists.mjs: change the comments in the code, not this page -->

A **trigger** is the *when* of an [event](/basic/events-and-quests/events) (and of the objectives of a [quest](/basic/events-and-quests/quests)). An event can have several triggers; any one of them can start it. There are ${trig.total} kinds, in ${trig.text.split('\n## ').length} categories. Choose one with **Add Trigger** in the event editor; its own fields appear below. The class name is the name in the code, and the link goes to the page of the class.

${trig.text}
## See also

- [Events](/basic/events-and-quests/events), [Event actions](/basic/events-and-quests/event-actions), [Conditions](/basic/shared-systems/conditions).
`)

fs.writeFileSync(path.join(OUT, 'event-actions.md'), `# Event actions

<!-- generated from the code comments by scripts/event-lists.mjs: change the comments in the code, not this page -->

An **action** is the *do* of an [event](/basic/events-and-quests/events). An event runs its actions **in order, and each one finishes before the next one starts**: a Wait action really waits, and a Popup action can wait until the popup is closed. An action that cannot do what it was asked (a quest that cannot start, an object that does not exist) **fails**, and so does its event. There are ${act.total} kinds, in ${act.text.split('\n## ').length} categories. Choose one with **Add Action** in the event editor.

${act.text}
## See also

- [Events](/basic/events-and-quests/events), [Event triggers](/basic/events-and-quests/event-triggers), [Conditions](/basic/shared-systems/conditions).
`)
console.log('triggers', trig.total, 'actions', act.total)
