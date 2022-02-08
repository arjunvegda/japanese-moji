/**
 * Builds a regex character unicode range
 *
 * For example - [\\u1234-\\uFAFF]
 *
 * @param start - Valid unicode with escaped "\\u" unicode
 * @param end - Valid unicode value with escaped "\\u" unicode
 */
export declare const createRange: (start: string, end: string) => string;
