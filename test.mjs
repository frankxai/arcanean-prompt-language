/**
 * Basic smoke tests for arcanean-prompt-language
 */

import { enhance, detectSlop, slopScore, PALETTES, getPalette, blendPalettes, detectPalette, formatPrompt, parsePrompt, buildWorldDNA, ARCANEA_WORLD_DNA, EXAMPLES, getExamples, getRandomExample } from './dist/index.js';

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
  } else {
    failed++;
    console.error(`  FAIL: ${message}`);
  }
}

console.log('--- enhance ---');
const result = enhance('Write a story about a lonely king');
assert(result.original === 'Write a story about a lonely king', 'preserves original');
assert(result.slopScore >= 0 && result.slopScore <= 1, 'slopScore in range');
assert(result.suggestions.length > 0, 'produces suggestions');
assert(['generic', 'clear', 'vivid', 'resonant'].includes(result.qualityLevel), 'valid quality level');

console.log('--- anti-slop ---');
const slop = detectSlop("In a world where magic exists, I'd be happy to help you explore");
assert(slop.length >= 2, 'detects multiple slop patterns');
assert(slop.some(m => m.id === 'opener'), 'detects opener');
assert(slop.some(m => m.id === 'slop'), 'detects slop tics');
assert(slopScore('Clean specific text with no cliches') < 0.5, 'clean text has low score');

console.log('--- palettes ---');
assert(Object.keys(PALETTES).length === 5, 'five palettes');
assert(getPalette('forge') !== undefined, 'getPalette works');
assert(getPalette('nonexistent') === undefined, 'getPalette returns undefined for unknown');
const blend = blendPalettes('forge', 'tide');
assert(blend.feelsLike.length === 5, 'blend produces 5 feelsLike');
assert(blend.description.includes('Forge'), 'blend description mentions primary');
const detected = detectPalette('fire burn energy transformation forge');
assert(detected.length > 0 && detected[0].palette === 'forge', 'detects forge palette');

console.log('--- format ---');
const prompt = formatPrompt({
  spark: 'Test spark',
  shape: { palette: 'forge', description: 'hot and bright' },
  sharpen: ['generic fantasy', 'cliches'],
  prompt: 'Write the scene.',
});
assert(prompt.includes('SPARK: Test spark'), 'format includes spark');
assert(prompt.includes('FORGE'), 'format includes palette');
assert(prompt.includes('NOT generic fantasy'), 'format includes sharpen');

// Extended formatPrompt testing
const promptSecondary = formatPrompt({
  spark: 'Dual spark',
  shape: { palette: 'forge', secondaryPalette: 'tide', description: 'hot but wet' },
  prompt: 'Dual prompt.',
});
assert(promptSecondary.includes('FORGE + TIDE — hot but wet'), 'format handles secondaryPalette');

const promptMinimal = formatPrompt({
  spark: 'Minimal spark',
  prompt: 'Minimal prompt.',
});
assert(promptMinimal.includes('SPARK: Minimal spark'), 'format minimal includes spark');
assert(!promptMinimal.includes('SHAPE:'), 'format minimal omits shape');
assert(!promptMinimal.includes('SHARPEN:'), 'format minimal omits sharpen');

const promptWorld = formatPrompt({
  spark: 'World spark',
  prompt: 'World prompt.',
  worldDNA: {
    spark: 'World DNA spark',
    shape: 'VOID',
    sharpen: ['world cliches']
  }
});
assert(promptWorld.includes('[WORLD]'), 'format handles worldDNA header');
assert(promptWorld.includes('WORLD SPARK: World DNA spark'), 'format handles worldDNA spark');
assert(promptWorld.includes('WORLD SHARPEN: NOT world cliches'), 'format handles worldDNA sharpen');

// Extended parsePrompt testing
const parsed = parsePrompt(prompt);
assert(parsed.spark === 'Test spark', 'parse extracts spark');
assert(parsed.sharpen?.includes('generic fantasy'), 'parse extracts sharpen');

const parseShape = parsePrompt('SPARK: Test\nSHAPE: void — deep space\nTest prompt');
assert(parseShape.shape?.palette === 'void', 'parse extracts palette');
assert(parseShape.shape?.description === 'deep space', 'parse extracts shape description');

const multiLineText = `[WORLD]
WORLD SPARK: world spark
WORLD SHAPE: void
WORLD SHARPEN: NOT things

SPARK: The real spark
SHAPE: forge — hot

This is line 1
This is line 2`;

const parseMultiline = parsePrompt(multiLineText);
assert(parseMultiline.spark === 'The real spark', 'parse ignores world text for spark');
assert(parseMultiline.shape?.palette === 'forge', 'parse extracts palette amidst world text');
assert(parseMultiline.prompt === 'This is line 1\nThis is line 2', 'parse extracts multiline prompt and ignores WORLD lines');

console.log('--- world-dna ---');
const dna = buildWorldDNA(ARCANEA_WORLD_DNA);
assert(dna.includes('[WORLD: Arcanea]'), 'world DNA has name');
assert(dna.includes('VOID + FORGE'), 'world DNA has blended palettes');

console.log('--- examples ---');
assert(EXAMPLES.length >= 7, 'at least 7 examples');
assert(getExamples('image').length >= 2, 'at least 2 image examples');
const rand = getRandomExample();
assert(rand.id && rand.before && rand.after, 'random example has required fields');

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
