<div align="center">

# arcanean-prompt-language

### SPARK. SHAPE. SHARPEN.

**Stop getting generic AI output. Start getting work that haunts people.**

[![npm](https://img.shields.io/npm/v/arcanean-prompt-language.svg)](https://www.npmjs.com/package/arcanean-prompt-language)
[![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg)](LICENSE)

[Try It Live](https://arcanea.ai/apl) · [Full Spec](ARCANEA-PROMPT-LANGUAGE.md) · [Templates](templates/) · [Examples](#built-in-examples)

</div>

---

## Why This Exists

90% of AI prompts produce 90% identical output. Not because the AI is bad — because the prompt gave it nothing real to work with.

**"Write a story about a lonely king"** → generic medieval sadness that could come from any AI, any day, any person.

**"A king who eats dinner alone and sets a place for his dead wife every night — including pouring her wine"** → something that makes you stop scrolling.

The difference is one sentence. APL teaches you to find that sentence every time.

## The Proof

```
═════════════════════════════════════════════════
  QUALITY LADDER — MEASURED BY APL ENGINE
═════════════════════════════════════════════════
  "Write a story about a brave hero"     → GENERIC  (20%)  ← 2 slop patterns detected
  + SPARK (one unique detail)            → CLEAR    (50%)
  + SPARK + SHAPE (sensory world)        → VIVID    (80%)
  + SPARK + SHAPE + SHARPEN (anti-slop)  → RESONANT (95%)  ← zero slop, all three layers
═════════════════════════════════════════════════
```

That's not marketing. That's the actual engine output. Install it and run it yourself.

## Install

```bash
npm install arcanean-prompt-language
```

## What You Get

### 1. Prompt Analysis Engine

```typescript
import { enhance } from 'arcanean-prompt-language';

// Analyze any prompt — get quality score + specific fixes
const result = enhance('Write a story about a brave hero on an epic adventure');

console.log(result.qualityLevel);   // "generic"
console.log(result.slopMatches);    // [{ name: "The Safety", match: "a brave hero" }, ...]
console.log(result.suggestions);    // ["SPARK: Add one specific detail...", ...]
```

### 2. Anti-Slop Scanner

```typescript
import { detectSlop, slopScore } from 'arcanean-prompt-language';

// Catch the Seven Defaults that make AI output forgettable
const slop = detectSlop('In a world where hauntingly beautiful ethereal magic flows...');
// → [
//   { name: "The Opener", match: "In a world where", fix: "Start in the middle." },
//   { name: "The Avalanche", match: "hauntingly beautiful", fix: "One strong word beats five." }
// ]

const score = slopScore(text);  // 0 = clean, 1 = maximum slop
```

### 3. SPARK.SHAPE.SHARPEN Formatter

```typescript
import { formatPrompt } from 'arcanean-prompt-language';

// Structure any prompt for maximum quality
const prompt = formatPrompt({
  spark: 'A warrior whose armor is covered in children\'s handprints',
  shape: {
    palette: 'forge',
    description: 'Heat distortion in the air. Ember-gold light from cracks in her gauntlets.'
  },
  sharpen: ['clean fantasy armor', 'battle pose', 'symmetrical composition'],
  prompt: 'Portrait. Rembrandt lighting. Burnt sienna and aged gold. Oil painting texture.'
});

// → Ready to paste into Midjourney, DALL-E, Grok Imagine, or any image AI
```

### 4. Sensory Palettes

```typescript
import { PALETTES, detectPalette, blendPalettes } from 'arcanean-prompt-language';

// Five palettes for instant atmosphere
// FORGE (fire) | TIDE (water) | ROOT (earth) | DRIFT (wind) | VOID (spirit)

// Auto-detect palette from content
detectPalette('the ancient forest grew slowly, patient as stone');
// → [{ palette: "root", confidence: 0.67 }]

// Blend two for complexity
blendPalettes('forge', 'tide');
// → { description: "Forge + Tide: Fire meets Water", feelsLike: [...], ... }
```

### 5. World DNA

```typescript
import { buildWorldDNA } from 'arcanean-prompt-language';

// Create a prefix that makes EVERY prompt inherit your world
const worldPrefix = buildWorldDNA({
  name: 'Ashenmere',
  spark: 'Memories are literally flammable here — grief counselors are called fire wardens',
  primaryPalette: 'forge',
  secondaryPalette: 'tide',
  shapeDescription: 'Air smells like heated copper and salt water. Buildings sweat.',
  sharpen: ['medieval Europe', 'chosen one narrative', 'magic without cost'],
});

// Now paste this prefix before ANY prompt and the world shapes everything
```

### 6. Built-In Examples

```typescript
import { EXAMPLES, getExamples, getRandomExample } from 'arcanean-prompt-language';

// 7 ready-to-use SPARK.SHAPE.SHARPEN prompts
// Characters, images, music, scenes, worlds

const imagePrompts = getExamples('image');
// → [{ title: "The Living Library", before: "...", after: "..." }, ...]
// Copy-paste the `after` into any AI. Compare to the `before`. Feel the difference.
```

## The System (60 Seconds)

### SPARK — The one detail that makes it yours
Close your eyes. See the thing. Find the detail that surprises YOU. That's your SPARK.

### SHAPE — The sensory world
Pick a palette: **Forge** (heat, metal, heartbeat) · **Tide** (mist, echo, silver) · **Root** (earth, weight, hum) · **Drift** (wind, tingle, whistle) · **Void** (silence, starfield, nothing)

### SHARPEN — What it must NOT be
Name the obvious so the AI goes somewhere interesting. Seven defaults to cut:

| Cut This | Because |
|----------|---------|
| "In a world where..." | Start in the middle |
| "Hauntingly beautiful ethereal" | One strong word > five weak ones |
| "I'd be happy to help!" | BE the thing, don't talk ABOUT it |
| Explaining the metaphor | Trust them. They're smart. |
| Flawless heroes | Scars > polish |
| Neat endings | Leave a door open |
| Generic anything | If you don't feel it, it's not done |

## Works on Every Model

APL changes what YOU ask, not what the AI does. That's why it works everywhere:

| Model | What APL Does For It |
|-------|---------------------|
| **Claude Opus 4.6** | Gives permission to be weird, specific, brave |
| **GPT-5.4** | Follows SHARPEN constraints precisely |
| **Gemini 3.1 Pro** | Sensory palettes translate beautifully to multimodal |
| **Grok Imagine** | SPARK prevents generic image output |
| **Midjourney / DALL-E** | Concrete visual anchors from SHAPE |
| **Suno / Udio** | Telling music what NOT to do > what to do |
| **Stable Diffusion** | Palettes → color grading + atmosphere |

## Connection to Arcanea Design System

APL's five palettes map directly to the [Arcanea Design System](https://arcanea.ai):

| APL Palette | Design Token | CSS Variable | Hex |
|-------------|-------------|-------------|-----|
| **Forge** | `--accent-warm` | `var(--forge)` | `#f59e0b` amber |
| **Tide** | `--accent-cool` | `var(--tide)` | `#06b6d4` cyan |
| **Root** | `--accent-earth` | `var(--root)` | `#22c55e` green |
| **Drift** | `--accent-air` | `var(--drift)` | `#a78bfa` violet |
| **Void** | `--accent-void` | `var(--void)` | `#6366f1` indigo |

When you SHAPE a prompt with a palette, the visual output aligns with the design system. A FORGE character gets warm lighting. A VOID interface gets near-black with iridescence. The prompt language and the design language speak the same vocabulary.

## 10 Craft Templates

Ready-to-use in [`templates/`](templates/):

| Template | For |
|----------|-----|
| **character.md** | People with contradictions and voices you'd recognize in a crowd |
| **location.md** | Places you can smell, hear, and feel under your feet |
| **magic-system.md** | Power systems where the cost is as interesting as the power |
| **visual-style.md** | Images with atmosphere, not just subjects |
| **music-direction.md** | Tracks with emotional architecture and anchor moments |
| **name-generator.md** | Names that sound like they've existed for centuries |
| **creature.md** | Beings that are ideas made flesh, not animals with powers |
| **scene.md** | Moments where something genuinely shifts |
| **world-seed.md** | An entire world from one radical premise |
| **lore-consistency.md** | Canon audit checklist |

## How to Use APL Right Now

**If you write one sentence:** Add a SPARK. Find the detail no one else would choose. This alone beats 80% of AI output.

**If you write three sentences:** Add SPARK + SHARPEN. Tell the AI what to avoid. 95%.

**If you write a paragraph:** Full SPARK.SHAPE.SHARPEN. Pick a palette. Cut the defaults. 99%.

**If you're building a world:** Write a World DNA prefix. Use it for every prompt. Your world shapes everything automatically.

**If you're building software:** Import the engine. Run `enhance()` on user prompts before sending to AI. Run `detectSlop()` on AI output before showing to users. Your product just got better.

## Part of Arcanea

APL was born in the [Arcanea](https://arcanea.ai) creative multiverse — a framework for building AI-powered worlds with 200K+ words of reference material, ten Gates of progression, and a mythology designed to teach the system by being the system.

- **Live showcase**: [arcanea.ai/apl](https://arcanea.ai/apl) — interactive before/after + prompt analyzer
- **Academy course**: 5 lessons teaching SPARK.SHAPE.SHARPEN step by step
- **Prompt Books**: Save and organize your APL prompts
- **MCP Server**: `apl_enhance`, `apl_anti_slop`, `apl_format` tools for AI agents

## License

MIT — use it everywhere, improve everything.

---

*SPARK. SHAPE. SHARPEN. That's the whole system. Everything else is practice.*
