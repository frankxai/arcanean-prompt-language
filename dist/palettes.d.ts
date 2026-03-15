/**
 * Five Sensory Palettes — the SHAPE layer of APL
 */
export interface Palette {
    id: string;
    name: string;
    element: string;
    feelsLike: string[];
    soundsLike: string[];
    looksLike: string[];
    keywords: string[];
}
export declare const PALETTES: Record<string, Palette>;
/**
 * Get a palette by ID
 */
export declare function getPalette(id: string): Palette | undefined;
/**
 * Blend two palettes — returns combined sensory descriptors
 */
export declare function blendPalettes(primary: string, secondary: string): {
    feelsLike: string[];
    soundsLike: string[];
    looksLike: string[];
    description: string;
};
/**
 * Auto-detect palette from text based on keyword matching
 */
export declare function detectPalette(text: string): {
    palette: string;
    confidence: number;
}[];
//# sourceMappingURL=palettes.d.ts.map