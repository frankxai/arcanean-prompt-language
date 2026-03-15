/**
 * Quick smoke test for APL engine
 * Run: node test.mjs (after build)
 */

import { enhance, detectSlop, slopScore, formatPrompt, PALETTES, getPalette, blendPalettes, detectPalette, buildWorldDNA, parsePrompt, ARCANEA_WORLD_DNA } from './dist/index.mjs';

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    passed++;
    console.log(`  ✓ ${name}`);
  } catch (e) {
    failed++;
    console.log(`  ✗ ${name}: ${e.message}`);
  }
}

function assert(condition, msg) {
  if (!condition) throw new Error(msg || 'Assertion failed');
}

console.log('\nAPL Engine Tests\n');

// Palettes
test('PALETTES has 5 entries', () => assert(Object.keys(PALETTES).length === 5));
test('getPalette returns forge', () => assert(getPalette('forge')?.name === 'Forge'));
test('blendPalettes returns combined', () => {
  const blend = blendPalettes('forge', 'tide');
  assert(blend.feelsLike.length === 5);
  assert(blend.description.includes('Forge + Tide'));
});
test('detectPalette finds fire keywords', () => {
  const result = detectPalette('the forge burned with transformation energy');
  assert(result[0]?.palette === 'forge');
});

// Anti-slop
test('detectSlop finds opener', () => {
  const matches = detectSlop('In a world where magic exists');
  assert(matches.length > 0);
  assert(matches[0].id === 'opener');
});
test('detectSlop finds avalanche', () => {
  const matches = detectSlop('A hauntingly beautiful castle');
  assert(matches.length > 0);
});
test('slopScore returns 0 for clean text', () => {
  assert(slopScore('The king poured wine into the empty glass.') === 0);
});
test('slopScore returns >0 for sloppy text', () => {
  assert(slopScore("In a world where hauntingly beautiful ethereal I'd be happy to help") > 0);
});

// Enhance
test('enhance detects generic quality', () => {
  const result = enhance('Write a story about a hero');
  assert(result.qualityLevel === 'generic');
});
test('enhance detects clear quality with specifics', () => {
  const result = enhance('Write a story about Maria, who counts ceiling tiles when nervous');
  assert(result.qualityLevel === 'clear' || result.qualityLevel === 'vivid');
});
test('enhance provides suggestions', () => {
  const result = enhance('Write a poem about the ocean');
  assert(result.suggestions.length > 0);
});

// Format
test('formatPrompt produces SPARK line', () => {
  const out = formatPrompt({
    spark: 'A king who pours wine for his dead wife',
    prompt: 'Write the scene.',
  });
  assert(out.includes('SPARK:'));
  assert(out.includes('Write the scene.'));
});
test('formatPrompt includes SHAPE and SHARPEN', () => {
  const out = formatPrompt({
    spark: 'test',
    shape: { palette: 'tide', description: 'cold and echoing' },
    sharpen: ['generic fantasy', 'happy ending'],
    prompt: 'Go.',
  });
  assert(out.includes('SHAPE: TIDE'));
  assert(out.includes('NOT generic fantasy'));
});
test('parsePrompt extracts structure', () => {
  const parsed = parsePrompt('SPARK: A detail\nSHAPE: FORGE — hot\nSHARPEN: NOT boring.\nWrite it.');
  assert(parsed.spark === 'A detail');
});

// World DNA
test('buildWorldDNA produces prefix', () => {
  const dna = buildWorldDNA({
    spark: 'memories are flammable',
    primaryPalette: 'forge',
    secondaryPalette: 'tide',
    shapeDescription: 'hot and wet',
    sharpen: ['medieval Europe'],
  });
  assert(dna.includes('[WORLD DNA]'));
  assert(dna.includes('FORGE + TIDE'));
});
test('ARCANEA_WORLD_DNA exists', () => {
  assert(ARCANEA_WORLD_DNA.name === 'Arcanea');
  assert(ARCANEA_WORLD_DNA.primaryPalette === 'void');
});

console.log(`\n${passed} passed, ${failed} failed\n`);
process.exit(failed > 0 ? 1 : 0);
