---
title: EngineCV
description: Local-first resume builder. Live preview, ten export formats, GitHub/LinkedIn/Europass import, no account needed.
date: 2026-10-26
status: active
kind: Product
stack: [TypeScript, React, Next.js, Zustand, Zod, IndexedDB, Typst, Vitest, Playwright]
demo: https://enginecv.app
featured: true
---

EngineCV is a resume builder for people who are tired of resume SaaS hiding basic features behind a paywall. You can build as many resumes as you want for free, the editor works without an account, and your data stays in your browser unless you choose otherwise.

## What it does

- **Structured editor**: basics, experience, education, certificates, projects, skills and layout customisation, with a live preview drawn from the same state the editor uses.
- **Export anywhere**: PDF, DOCX, Markdown, plain text, HTML, PNG, SVG, JSON and encrypted JSON, or copy to the clipboard. Preview and PDF export share one Typst rendering pipeline.
- **Import instead of retyping**: JSON, LinkedIn data-export archives, Europass CVs (PDF/XML) and public GitHub profiles.
- **Version history**: bounded snapshots you can preview, restore, or duplicate into a new resume.
- **Five interface languages.**

## How it's built

State lives in a Zustand store and is validated against Zod schemas, then persisted locally to IndexedDB through Dexie. Because the core experience is client-side, there's no backend to break. Unit, integration and Playwright browser tests cover editing, persistence and export.

## Principles

- Local-first by default, useful without an account.
- Payment never gates basic editing, data access or export.
- A privacy policy you can actually understand. The app ships no analytics code; the site uses cookieless, aggregate page counts.
- Automation goes through explicit, validated, undoable product commands.

## What's next

**Agent integration over MCP.** A local terminal agent (Claude Code, Codex, Gemini CLI) will drive EngineCV in the browser, so *"make me a resume from my GitHub tailored to this job"* becomes create → import → tailor → export. The hard part is the harness: the tool surface has to be small enough to save tokens and still expressive enough to be useful.
