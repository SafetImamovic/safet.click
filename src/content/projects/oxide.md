---
title: Oxide
description: 3D render engine in Rust on wgpu. Runs natively and in the browser via WebAssembly and WebGPU. My bachelor's thesis.
date: 2025-09-17
status: shipped
kind: Bachelor's thesis
stack: [Rust, wgpu, WebGPU, WebAssembly, winit, glTF]
repo: https://github.com/SafetImamovic/oxide
demo: https://safetimamovic.github.io/oxide/
image: https://raw.githubusercontent.com/SafetImamovic/oxide/master/docs/images/auto.png
imageAlt: A Porsche 911 Turbo model rendered in Oxide
featured: true
---

Oxide is the render engine I wrote for my bachelor's thesis in Computer Graphics at the Polytechnic Faculty in Zenica. It's built in **Rust** on **wgpu**, so one codebase runs natively (windowing through winit) and in the browser, compiled to **WebAssembly** and rendering through **WebGPU**.

## What it does

- Camera controls, transformations and render-pass management.
- glTF model and texture loading.
- A vertex/wireframe view mode for inspecting meshes.
- Browser examples you can [open right now](https://safetimamovic.github.io/oxide/), given a WebGPU-capable browser.

![de_dust2 rendered in Oxide](https://raw.githubusercontent.com/SafetImamovic/oxide/master/docs/images/dust2.png)

![A Minecraft-style forest scene rendered in Oxide](https://raw.githubusercontent.com/SafetImamovic/oxide/master/docs/images/mc.png)

Models: *1975 Porsche 911 Turbo* by Lionsharp Studios, *de_dust2* by pancakesbassoondonut, *Forest 2* by CreeperCoastal (all on Sketchfab).
