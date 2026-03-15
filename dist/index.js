"use strict";
/**
 * Arcanean Prompt Language — Programmatic Engine
 *
 * SPARK. SHAPE. SHARPEN.
 *
 * Transforms any prompt from generic to genius.
 * Used by: chat API, image enhance, author system, MCP, Academy.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomExample = exports.getExamples = exports.EXAMPLES = exports.parsePrompt = exports.formatPrompt = exports.ARCANEA_WORLD_DNA = exports.buildWorldDNA = exports.slopScore = exports.detectSlop = exports.ANTI_SLOP = exports.detectPalette = exports.blendPalettes = exports.getPalette = exports.PALETTES = exports.enhance = void 0;
var enhance_1 = require("./enhance");
Object.defineProperty(exports, "enhance", { enumerable: true, get: function () { return enhance_1.enhance; } });
var palettes_1 = require("./palettes");
Object.defineProperty(exports, "PALETTES", { enumerable: true, get: function () { return palettes_1.PALETTES; } });
Object.defineProperty(exports, "getPalette", { enumerable: true, get: function () { return palettes_1.getPalette; } });
Object.defineProperty(exports, "blendPalettes", { enumerable: true, get: function () { return palettes_1.blendPalettes; } });
Object.defineProperty(exports, "detectPalette", { enumerable: true, get: function () { return palettes_1.detectPalette; } });
var anti_slop_1 = require("./anti-slop");
Object.defineProperty(exports, "ANTI_SLOP", { enumerable: true, get: function () { return anti_slop_1.ANTI_SLOP; } });
Object.defineProperty(exports, "detectSlop", { enumerable: true, get: function () { return anti_slop_1.detectSlop; } });
Object.defineProperty(exports, "slopScore", { enumerable: true, get: function () { return anti_slop_1.slopScore; } });
var world_dna_1 = require("./world-dna");
Object.defineProperty(exports, "buildWorldDNA", { enumerable: true, get: function () { return world_dna_1.buildWorldDNA; } });
Object.defineProperty(exports, "ARCANEA_WORLD_DNA", { enumerable: true, get: function () { return world_dna_1.ARCANEA_WORLD_DNA; } });
var format_1 = require("./format");
Object.defineProperty(exports, "formatPrompt", { enumerable: true, get: function () { return format_1.formatPrompt; } });
Object.defineProperty(exports, "parsePrompt", { enumerable: true, get: function () { return format_1.parsePrompt; } });
var examples_1 = require("./examples");
Object.defineProperty(exports, "EXAMPLES", { enumerable: true, get: function () { return examples_1.EXAMPLES; } });
Object.defineProperty(exports, "getExamples", { enumerable: true, get: function () { return examples_1.getExamples; } });
Object.defineProperty(exports, "getRandomExample", { enumerable: true, get: function () { return examples_1.getRandomExample; } });
//# sourceMappingURL=index.js.map