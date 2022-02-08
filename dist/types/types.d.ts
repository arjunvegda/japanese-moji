export declare enum CharacterSet {
    CJKPunctuations = "CJKPunctuations",
    Hiragana = "Hiragana",
    Katakana = "Katakana",
    KatakanaPhoneticExtension = "KatakanaPhoneticExtension",
    RareKanji = "RareKanji",
    KanjiCompatibilityIdeographs = "KanjiCompatibilityIdeographs",
    CommonUncommonKanji = "CommonUncommonKanji",
    RomanHalfwidthKatakana = "RomanHalfwidthKatakana"
}
export declare type CharacterDict = Record<CharacterSet, string>;
export interface UnicodeRange {
    start: string;
    end: string;
}
export interface CreateValidatorOptions {
    characterSets: CharacterSet[];
    customRanges?: UnicodeRange[];
    customUnicodes?: string[];
}
export declare type StrictValidator = (arg: string) => boolean;
export declare type ThresholdBasedValidator = (arg: string, threshold?: number) => boolean;
export declare type ThresholdCalculator = (arg: string) => number;
