---
title: ForgeAI
description: Text-to-MIDI. Describe music in plain language and get a MIDI file to drop into your DAW, powered by Google Gemini.
date: 2025-10-06
status: archived
kind: Prototype
stack: [Python, Django, JavaScript, Gemini API, MIDI]
repo: https://github.com/SafetImamovic/ForgeAI
demo: https://safetimamovic.github.io/ForgeAI/
---

A Django web prototype, with a VST plugin planned, that turns natural-language music prompts into downloadable MIDI files.

- Sends the prompt to Google Gemini, which returns structured JSON.
- Converts that JSON into MIDI, ready to use in a digital audio workstation.
