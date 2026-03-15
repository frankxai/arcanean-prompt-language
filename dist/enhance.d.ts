/**
 * APL Enhance — transforms a generic prompt into a SPARK.SHAPE.SHARPEN prompt
 *
 * This is the core engine. Given a plain prompt, it:
 * 1. Detects likely palette from content
 * 2. Checks for slop patterns
 * 3. Builds enhancement suggestions
 * 4. Returns a structured APL prompt
 */
import { type SlopMatch } from './anti-slop';
export interface EnhanceOptions {
    /** Force a specific palette */
    palette?: string;
    /** Force a secondary palette */
    secondaryPalette?: string;
    /** Additional sharpen constraints */
    extraSharpen?: string[];
    /** World DNA prefix to inherit */
    worldPrefix?: string;
}
export interface EnhanceResult {
    /** The original prompt */
    original: string;
    /** Detected slop patterns */
    slopMatches: SlopMatch[];
    /** Slop score (0 = clean, 1 = maximum slop) */
    slopScore: number;
    /** Detected palette affinity */
    detectedPalettes: {
        palette: string;
        confidence: number;
    }[];
    /** Suggestions for improvement */
    suggestions: string[];
    /** Quality level estimate */
    qualityLevel: 'generic' | 'clear' | 'vivid' | 'resonant';
}
/**
 * Analyze a prompt and return enhancement suggestions
 */
export declare function enhance(prompt: string, options?: EnhanceOptions): EnhanceResult;
//# sourceMappingURL=enhance.d.ts.map