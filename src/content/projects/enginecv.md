---
title: EngineCV
description: Browser-based resume builder with structured data, swappable templates, and GitHub import.
date: 2026-10-26
status: active
stack: [TypeScript, Web]
featured: true
---

EngineCV builds resumes from structured data. You fill in personal info and sections (Education, Projects, Skills) with entries inside each one, choose a template to render them, and export the result.

## Highlights

- **GitHub import**: pulls in project and profile data, so you don't have to type it by hand.
- **Template-driven rendering**: one data model, many layouts.

## What's next

Agent integration over MCP. A local terminal agent would drive EngineCV in the browser, so a request like *"make me a resume from my GitHub tailored for this job"* turns into real actions in the app. The hard part is the harness: the tool surface has to be small enough to save tokens and still expressive enough to be useful.
