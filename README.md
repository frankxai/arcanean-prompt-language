<div align="center">

# arcanean-prompt-language

### SPARK. SHAPE. SHARPEN.

**The three-word system that turns generic AI output into work you're proud of.**

[![npm](https://img.shields.io/npm/v/arcanean-prompt-language.svg)](https://www.npmjs.com/package/arcanean-prompt-language)
[![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg)](LICENSE)

[Try It Live](https://arcanea.ai/apl) · [Full Spec](ARCANEA-PROMPT-LANGUAGE.md) · [Templates](templates/)

</div>

---

## What This Is

APL turns any AI — Claude, GPT, Gemini, Grok, Midjourney, Suno — into something that produces work you're proud of. Not by adding complexity. By asking one better question.

Three words. Learnable in 60 seconds. No mythology required.

## Install

```bash
npm install arcanean-prompt-language
```

## Quick Start

```typescript
import { enhance, detectSlop, formatPrompt, PALETTES } from 'arcanean-prompt-language';

// Analyze a prompt for quality
const result = enhance('Write a story about a lonely king');
console.log(result.qualityLevel);  // 'generic'
console.log(result.suggestions);   // ['SPARK: Add one specific detail...']

// Detect AI slop in text
const slop = detectSlop('In a world where magic is real, a hauntingly beautiful princess...');
console.log(slop);  // [{ name: 'The Opener', match: 'In a world where', fix: '...' }, ...]

// Format a SPARK.SHAPE.SHARPEN prompt
const prompt = formatPrompt({
  spark: 'A king who pours wine for his dead wife every night',
  shape: { palette: 'tide', description: 'Echoing hall, rain on glass, silver and cold' },
  sharpen: ['a noble king mourning nobly', 'a dramatic monologue', 'a neat resolution'],
  prompt: 'Write the scene. Start with the sound of wine hitting the glass.',
});
```

## The System

### SPARK — The one detail that makes it yours

Not a description. A **truth**. The detail so specific it could only come from you.

```
Generic:  "Write a story about a lonely king"
Sparked:  "A king who eats dinner alone and sets a place for
           his dead wife every night — including pouring her wine"
```

### SHAPE — The sensory world

Five palettes to choose from:

| Palette | Feels Like | Element |
|---------|-----------|---------|
| **Forge** | Heat, rough metal, heartbeat | Fire |
| **Tide** | Cool stone, mist, deep breath | Water |
| **Root** | Packed earth, bark, weight | Earth |
| **Drift** | Wind, electric tingle | Wind |
| **Void** | Weightlessness, silence | Spirit |

### SHARPEN — What it must NOT be

Seven defaults to cut:

| Default | Fix |
|---------|-----|
| The Opener ("In a world where...") | Start in the middle |
| The Avalanche ("hauntingly beautiful ethereal") | One strong word beats five |
| The Slop ("I'd be happy to help!") | Respond AS the thing |
| The Explanation (telling what the metaphor means) | Trust the reader |
| The Perfection (flawless heroes) | Scars > polish |
| The Resolution (neat ending) | Leave a door open |
| The Safety (generic output) | Make them feel something |

## API

### `enhance(prompt, options?)`

Analyzes a prompt and returns quality assessment + suggestions.

```typescript
const result = enhance('Create a beautiful landscape');
// {
//   qualityLevel: 'generic',
//   qualityPercent: 20,
//   slopScore: 0.3,
//   slopMatches: [...],
//   detectedPalettes: [{ palette: 'root', confidence: 0.5 }],
//   suggestions: ['SPARK: Add one specific detail...']
// }
```

### `detectSlop(text)`

Scans text for the Seven Defaults and returns matches.

### `slopScore(text)`

Returns a 0-1 score (0 = clean, 1 = maximum slop).

### `formatPrompt(apl)`

Formats a structured APL prompt into a string for any AI model.

### `parsePrompt(text)`

Parses a text prompt to extract SPARK/SHAPE/SHARPEN structure.

### `getPalette(id)` / `blendPalettes(primary, secondary)`

Access and blend sensory palettes.

### `detectPalette(text)`

Auto-detect palette affinity from text content.

### `buildWorldDNA(dna)`

Build a world prefix that every prompt inherits.

## Templates

10 ready-to-use templates in [`templates/`](templates/):

| Template | What It Does |
|----------|-------------|
| `character.md` | People with contradictions and voices |
| `location.md` | Places you can smell and feel |
| `magic-system.md` | Power systems where cost matters |
| `visual-style.md` | Images with atmosphere |
| `music-direction.md` | Tracks with emotional architecture |
| `name-generator.md` | Names that sound ancient |
| `creature.md` | Beings that are ideas made flesh |
| `scene.md` | Moments where something shifts |
| `world-seed.md` | Worlds from one radical premise |
| `lore-consistency.md` | Canon audit checklist |

## Works on Every Model

APL changes what YOU ask, not what the AI does:

- **Claude Opus 4.6** — Permission to be brave
- **GPT-5.4** — SHARPEN is incredibly effective
- **Gemini 3.1 Pro** — Palettes translate to multimodal
- **Grok Imagine** — SPARK prevents generic output
- **Midjourney / DALL-E** — Direct to image prompts
- **Suno / Udio** — Tell music what NOT to do

## The Quality Ladder

| Level | What | Time | Beats |
|-------|------|------|-------|
| 1 | SPARK only | 10 sec | 80% |
| 2 | SPARK + SHARPEN | 30 sec | 95% |
| 3 | SPARK + SHAPE + SHARPEN | 60 sec | 99% |

## Part of Arcanea

APL was born in the [Arcanea](https://arcanea.ai) creative multiverse. The full ecosystem includes:

- **Interactive showcase**: [arcanea.ai/apl](https://arcanea.ai/apl)
- **Academy course**: Learn SPARK.SHAPE.SHARPEN step by step
- **Prompt Books**: Save and organize your APL prompts
- **200K+ words** of world-building reference material

## License

MIT — use it everywhere, improve everything.
