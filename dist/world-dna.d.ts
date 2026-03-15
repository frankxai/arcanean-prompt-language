/**
 * World DNA — prefix system that makes every prompt inherit a world's identity
 */
export interface WorldDNA {
    /** The one thing true here that is false everywhere else */
    spark: string;
    /** Primary sensory palette */
    primaryPalette: string;
    /** Optional secondary palette for complexity */
    secondaryPalette?: string;
    /** Shape description — what the world feels/sounds/looks like */
    shapeDescription: string;
    /** The cliches this world refuses */
    sharpen: string[];
    /** Optional world name */
    name?: string;
}
/**
 * Build a world DNA prefix string
 */
export declare function buildWorldDNA(dna: WorldDNA): string;
/**
 * The Arcanea reference world DNA (the first world in the multiverse)
 */
export declare const ARCANEA_WORLD_DNA: WorldDNA;
//# sourceMappingURL=world-dna.d.ts.map