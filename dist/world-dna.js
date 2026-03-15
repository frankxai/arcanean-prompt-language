"use strict";
/**
 * World DNA — prefix system that makes every prompt inherit a world's identity
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ARCANEA_WORLD_DNA = void 0;
exports.buildWorldDNA = buildWorldDNA;
/**
 * Build a world DNA prefix string
 */
function buildWorldDNA(dna) {
    const palette = dna.secondaryPalette
        ? `${dna.primaryPalette.toUpperCase()} + ${dna.secondaryPalette.toUpperCase()}`
        : dna.primaryPalette.toUpperCase();
    const header = dna.name ? `[WORLD: ${dna.name}]` : '[WORLD DNA]';
    return [
        header,
        `SPARK: ${dna.spark}`,
        `SHAPE: ${palette} — ${dna.shapeDescription}`,
        `SHARPEN: ${dna.sharpen.map((s) => `NOT ${s}`).join('. ')}.`,
        '',
        '— Every prompt below inherits this world. —',
        '',
    ].join('\n');
}
/**
 * The Arcanea reference world DNA (the first world in the multiverse)
 */
exports.ARCANEA_WORLD_DNA = {
    name: 'Arcanea',
    spark: 'Creation itself is conscious here. Every act of making ripples through the Weave — and the Weave remembers.',
    primaryPalette: 'void',
    secondaryPalette: 'forge',
    shapeDescription: 'Starfield silence broken by forge-heat. The air tastes of ozone and old bronze. Light comes from within things, not above them.',
    sharpen: [
        'medieval Europe analog',
        'chosen one narrative',
        'magic without cost',
        'pure good vs pure evil',
        'technology as separate from magic',
    ],
};
//# sourceMappingURL=world-dna.js.map