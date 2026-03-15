/**
 * Anti-Slop Engine — the SHARPEN layer of APL
 *
 * Detects the Seven Defaults in text and suggests fixes.
 */
export interface SlopPattern {
    id: string;
    name: string;
    description: string;
    patterns: RegExp[];
    fix: string;
}
export interface SlopMatch {
    id: string;
    name: string;
    match: string;
    fix: string;
    position: number;
}
export declare const ANTI_SLOP: SlopPattern[];
/**
 * Scan text for slop patterns and return matches
 */
export declare function detectSlop(text: string): SlopMatch[];
/**
 * Calculate a slop score (0 = clean, 1 = maximum slop)
 */
export declare function slopScore(text: string): number;
//# sourceMappingURL=anti-slop.d.ts.map