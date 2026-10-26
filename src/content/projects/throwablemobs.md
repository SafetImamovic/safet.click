---
title: Throwable Mobs
description: Pick up mobs and throw them. Creepers explode on impact, endermen blink away, slimes bounce and split, chickens float.
date: 2026-10-25
status: active
kind: Minecraft mod
stack: [Java, Fabric, NeoForge, Mixins, GitHub Actions]
repo: https://github.com/SafetImamovic/ThrowableMobs
links:
  - { label: CurseForge, href: "https://www.curseforge.com/minecraft/mc-mods/throwablemobs" }
  - { label: Modrinth, href: "https://modrinth.com/mod/throwablemobs" }
  - { label: Docs, href: "https://safetimamovic.github.io/ThrowableMobs/" }
image: https://raw.githubusercontent.com/SafetImamovic/ThrowableMobs/master/docs/public/banner.png
imageAlt: "Throwable Mobs: pick them up, throw them"
kofi: true
featured: true
---

Sneak and right-click a mob to pick it up, charge the throw while a trajectory preview shows where it will land, then let go. Different mobs react differently: creepers explode where they land, endermen teleport mid-flight, slimes bounce and split, chickens float down. In multiplayer you can catch your friends' throws mid-air.

Supports Minecraft Java **1.21.1** and **26.3** on both **Fabric** and **NeoForge**. MIT licensed, currently in beta.

![Picking up a pig and throwing it across a beach](https://raw.githubusercontent.com/SafetImamovic/ThrowableMobs/master/docs/public/screenshots/throw-pig.gif)

## Highlights

- **Per-mob profiles**: every mob type can have its own carry, throw and landing behaviour, all configurable.
- **Behaviours**: for example the *chicken radar*, where a carried chicken panics when a monster is near.
- **Compatibility tested** with YACL, Carry On and Ragdollified (thrown mobs go limp in flight on NeoForge).
- **Release pipeline**: pushing a `v*` tag builds the GitHub Release with source jars and publishes the Modrinth versions automatically.

![Another player throws a creeper and it explodes on landing](https://raw.githubusercontent.com/SafetImamovic/ThrowableMobs/master/docs/public/screenshots/creeper-throw.gif)
