/**
 * APL Prompt Formatter — structures prompts in SPARK.SHAPE.SHARPEN format
 */
export interface APLPrompt {
    /** The unique detail that makes this creation yours */
    spark: string;
    /** Sensory palette(s) — what it feels/sounds/looks like */
    shape?: {
        palette: string;
        secondaryPalette?: string;
        description: string;
    };
    /** What it must NOT be — anti-slop constraints */
    sharpen?: string[];
    /** The actual prompt in plain language */
    prompt: string;
    /** Optional world DNA prefix */
    worldDNA?: {
        spark: string;
        shape: string;
        sharpen: string[];
    };
}
/**
 * Format an APL prompt into a string ready for any AI model
 */
export declare function formatPrompt(apl: APLPrompt): string;
/**
 * Parse a text prompt to extract APL structure (best-effort)
 */
export declare function parsePrompt(text: string): Partial<APLPrompt>;
//# sourceMappingURL=format.d.ts.map