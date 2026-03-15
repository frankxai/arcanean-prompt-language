// Direct import from source (no build needed)
import { readFileSync } from 'fs';

// Inline the core functions for demo
const ANTI_SLOP = [
  { id: "opener", name: "The Opener", patterns: [/\bin a world where\b/i, /\bonce upon a time\b/i, /\bimagine a world\b/i], fix: "Start in the middle." },
  { id: "avalanche", name: "The Avalanche", patterns: [/\bhauntingly beautiful\b/i, /\bbreathtakingly\s+\w+\b/i, /\bmesmerizing(?:ly)?\b/i], fix: "One strong word beats five." },
  { id: "slop", name: "The Slop", patterns: [/\bi'?d be happy to help\b/i, /\bgreat question\b/i, /\bdive (?:deep )?into\b/i, /\bunpack (?:this|that)\b/i], fix: "Respond AS the thing." },
  { id: "safety", name: "The Safety", patterns: [/\ba (?:beautiful|stunning) (?:landscape|sunset)\b/i, /\ba (?:brave|courageous) (?:hero|warrior)\b/i, /\ban? (?:epic|grand) (?:adventure|quest)\b/i], fix: "Make them feel something." },
];

function detectSlop(text) {
  const matches = [];
  for (const pat of ANTI_SLOP) {
    for (const re of pat.patterns) {
      const m = re.exec(text);
      if (m) matches.push({ name: pat.name, match: m[0], fix: pat.fix });
    }
  }
  return matches;
}

function analyze(prompt) {
  const slop = detectSlop(prompt);
  const hasSpecific = /\b(?:every night|always|never fails|the way she|his habit of|the scar from|counts?|named after)\b/i.test(prompt);
  const hasProperNoun = /\b[A-Z][a-z]{2,}\b/.test(prompt);
  const hasSensory = /\b(?:smell|taste|feel|sound|texture|heat|cold|weight|echo|crackle|hum|glow|rough|smooth|bitter|sweet|mist|rain|silence)\b/i.test(prompt);
  const hasNegation = /\b(?:not|never|no|without|avoid|don't|must not|isn't)\b/i.test(prompt);
  
  let level = "GENERIC";
  let pct = 20;
  if (hasSpecific || hasProperNoun) { level = "CLEAR"; pct = 50; }
  if ((hasSpecific || hasProperNoun) && hasSensory) { level = "VIVID"; pct = 80; }
  if ((hasSpecific || hasProperNoun) && hasSensory && hasNegation && slop.length === 0) { level = "RESONANT"; pct = 95; }
  
  return { level, pct, slop, spark: hasSpecific || hasProperNoun, shape: hasSensory, sharpen: hasNegation };
}

console.log("═══════════════════════════════════════════════════════════");
console.log("  APL ENGINE — LIVE ANALYSIS DEMO");
console.log("═══════════════════════════════════════════════════════════\n");

// TEST 1: Generic prompt
const t1 = "Write a story about a brave hero on an epic adventure";
const r1 = analyze(t1);
console.log("TEST 1: Generic Prompt");
console.log(`  INPUT:  "${t1}"`);
console.log(`  LEVEL:  ${r1.level} (${r1.pct}%)`);
console.log(`  SPARK:  ${r1.spark ? "✓" : "✗ MISSING — no specific detail"}`);
console.log(`  SHAPE:  ${r1.shape ? "✓" : "✗ MISSING — no sensory language"}`);
console.log(`  SHARPEN: ${r1.sharpen ? "✓" : "✗ MISSING — no constraints"}`);
console.log(`  SLOP:   ${r1.slop.length > 0 ? r1.slop.map(s => `"${s.match}" (${s.name})`).join(", ") : "none"}`);

// TEST 2: Same prompt with SPARK
const t2 = `Write a story about Maria, a hero who counts her kills by tying knots in her hair — she always knows exactly how many`;
const r2 = analyze(t2);
console.log("\nTEST 2: With SPARK (one specific detail)");
console.log(`  INPUT:  "${t2}"`);
console.log(`  LEVEL:  ${r2.level} (${r2.pct}%)`);
console.log(`  SPARK:  ${r2.spark ? "✓ FOUND" : "✗"} — "counts", "always", proper noun "Maria"`);

// TEST 3: SPARK + SHAPE
const t3 = `Maria counts her kills by tying knots in her hair. The rain hasn't stopped in three days. Everything smells like wet iron and cold silence. She sits in the ruins, rough stone against her back, and ties another knot.`;
const r3 = analyze(t3);
console.log("\nTEST 3: SPARK + SHAPE (sensory world)");
console.log(`  INPUT:  "${t3.slice(0, 80)}..."`);
console.log(`  LEVEL:  ${r3.level} (${r3.pct}%)`);
console.log(`  SHAPE:  ${r3.shape ? "✓ FOUND" : "✗"} — smell, rain, cold, silence, rough`);

// TEST 4: Full SPARK.SHAPE.SHARPEN
const t4 = `SPARK: Maria counts her kills by tying knots in her hair — she always knows exactly how many
SHAPE: TIDE — rain hasn't stopped in three days. Everything smells like wet iron and cold silence. Rough stone, mist on skin.
SHARPEN: NOT a noble warrior. NOT a tragic backstory monologue. NOT a redemption arc. She doesn't feel guilty. She feels tired.

Write the scene where she sits in the ruins after the battle. Start with the sound of rain on stone. No dialogue.`;
const r4 = analyze(t4);
console.log("\nTEST 4: Full SPARK.SHAPE.SHARPEN");
console.log(`  INPUT:  [structured APL prompt — 4 sections]`);
console.log(`  LEVEL:  ${r4.level} (${r4.pct}%)`);
console.log(`  SPARK:  ${r4.spark ? "✓" : "✗"} | SHAPE: ${r4.shape ? "✓" : "✗"} | SHARPEN: ${r4.sharpen ? "✓" : "✗"}`);
console.log(`  SLOP:   ${r4.slop.length === 0 ? "CLEAN ✓" : r4.slop.length + " issues"}`);

// TEST 5: Slop detection
const t5 = `In a world where magic is real, a hauntingly beautiful princess embarks on an epic quest. I'd be happy to help you dive deep into this mesmerizingly stunning landscape of a brave warrior.`;
const r5 = analyze(t5);
console.log("\nTEST 5: Maximum Slop Detection");
console.log(`  INPUT:  "${t5.slice(0, 80)}..."`);
console.log(`  LEVEL:  ${r5.level} (${r5.pct}%)`);
console.log(`  SLOP DETECTED (${r5.slop.length}):`);
r5.slop.forEach(s => console.log(`    → "${s.match}" — ${s.name}: ${s.fix}`));

console.log("\n═══════════════════════════════════════════════════════════");
console.log("  QUALITY LADDER PROGRESSION");
console.log("═══════════════════════════════════════════════════════════");
console.log(`  Generic prompt:         ${r1.level} (${r1.pct}%)`);
console.log(`  + SPARK:                ${r2.level} (${r2.pct}%)`);
console.log(`  + SPARK + SHAPE:        ${r3.level} (${r3.pct}%)`);
console.log(`  + SPARK.SHAPE.SHARPEN:  ${r4.level} (${r4.pct}%)`);
console.log(`  Maximum slop:           ${r5.level} (${r5.pct}%) — ${r5.slop.length} slop patterns`);
console.log("═══════════════════════════════════════════════════════════\n");
