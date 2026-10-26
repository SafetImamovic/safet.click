---
title: Multi-Agent Robot Coordination
description: Cooperative cleaning robots trained with multi-agent RL. The code behind my Springer LNNS paper.
date: 2026-06-03
status: shipped
kind: Research
stack: [Python, PyTorch, Stable-Baselines3, PPO, Pygame]
repo: https://github.com/SafetImamovic/MultiAgentRobot
links:
  - { label: Paper, href: "https://safet.click/publications" }
---

A simulation of cooperative cleaning robots sharing a room, used to compare centralised and decentralised multi-agent reinforcement learning.

- Centralised PPO and joint DQN via Stable-Baselines3; IDQN, MAPPO and QMIX implemented from scratch in PyTorch.
- Tracks room coverage and agent steps, with visualisations of policy behaviour at different training checkpoints.
- Published as *Multi-agent Reinforcement Learning for Autonomous Mobile Robot Coordination* (IAT 2026, Springer LNNS 2278). See [publications](/publications).
