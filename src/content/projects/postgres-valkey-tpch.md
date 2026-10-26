---
title: PostgreSQL × Valkey on TPC-H
description: Reproducible benchmark crossing PostgreSQL indexing with a Valkey in-memory cache tier on analytical TPC-H queries.
date: 2026-06-15
status: shipped
kind: Research
stack: [Rust, PostgreSQL, Valkey, SQL, Docker Compose]
repo: https://github.com/SafetImamovic/postgres-valkey-tpch-benchmark
---

How do two independent system-level decisions, relational indexing and an external in-memory cache, interact under analytical workloads? This repository answers that with a 2×2 experimental design on the TPC-H benchmark.

- A Rust benchmark harness covering four configurations: indexes on or off × Valkey caching on or off.
- Docker Compose brings the whole pipeline up on one workstation.
- Ships a full **SF10** reference sweep: processed CSVs and figures, interpreted in a companion paper.
- Structured IMRaD-style, with documented methods and hardware/software manifests, so anyone can reproduce the results.
