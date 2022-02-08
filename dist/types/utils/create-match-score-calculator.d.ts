import type { CreateValidatorOptions, ThresholdCalculator } from '../types';
/**
 * Creates a function that calculates the score for a match with `pattern`
 *
 * @param options - Check {@link CreateValidatorOptions} for all the available options
 */
export declare const createMatchScoreCalculator: (options: CreateValidatorOptions) => ThresholdCalculator;
