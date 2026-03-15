/**
 * Built-in Arcanean Prompts — ready to use examples
 *
 * These are not documentation. These are actual prompts you can
 * copy-paste into any AI model and get remarkable results.
 */
export interface APLExample {
    id: string;
    category: 'character' | 'image' | 'music' | 'scene' | 'world';
    title: string;
    /** The generic version most people would write */
    before: string;
    /** The SPARK.SHAPE.SHARPEN version */
    after: string;
    /** Which AI models this works best on */
    bestModels: string[];
}
export declare const EXAMPLES: APLExample[];
/**
 * Get examples by category
 */
export declare function getExamples(category?: APLExample['category']): APLExample[];
/**
 * Get a random example
 */
export declare function getRandomExample(): APLExample;
//# sourceMappingURL=examples.d.ts.map