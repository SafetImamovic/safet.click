---
title: world-backup
description: Standalone Rust CLI for timestamped Minecraft server backups, with scheduling, retention rules and hooks.
date: 2026-03-29
status: shipped
kind: CLI tool
stack: [Rust, CLI, GitHub Actions]
repo: https://github.com/SafetImamovic/world-backup
---

I needed reliable backups for my own All the Mods 10 server, and the modpack's server files no longer ship a backup mod. So I wrote a standalone backup tool that doesn't depend on the modpack, a panel, or the server's own health.

- Timestamped, staged snapshots in several archive formats.
- Interval and cron scheduling, explicit retention rules, and pre/post hooks for server workflows.
- Native binaries for Windows, Linux and macOS, built by GitHub Actions.
