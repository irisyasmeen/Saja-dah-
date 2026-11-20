export type AppLanguage = 'en' | 'id' | 'ms';

export type TafsirLens = 'all' | 'ibn_kathir' | 'jalalayn' | 'sadi';

export type ThematicSectionId = 'all' | 'revelation' | 'resurrection' | 'prostration' | 'patience';

export type ReciterId = 'alafasy' | 'husary' | 'abdul_basit';

export type PlaybackMode = 'arabic_only' | 'bilingual_ar_en' | 'english_only';

export interface RootWord {
  arabic: string;
  transliteration: string;
  root: string;
  meaningEn: string;
  meaningId: string;
  meaningMs: string;
}

export interface LocalizedText {
  en: string;
  id: string;
  ms: string;
}

export interface AyahTafsir {
  number: number;
  section: Exclude<ThematicSectionId, 'all'>;
  isSajdah?: boolean;
  arabic: string;
  transliteration: string;
  translation: LocalizedText;
  summary: LocalizedText;
  tafsir: {
    ibn_kathir: LocalizedText;
    jalalayn: LocalizedText;
    sadi: LocalizedText;
  };
  linguisticNote: LocalizedText;
  roots: RootWord[];
  crossReferences: string[];
}

export interface ThematicSectionInfo {
  id: Exclude<ThematicSectionId, 'all'>;
  roman: string;
  ayahRange: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  coreTheme: LocalizedText;
  keyTakeaway: LocalizedText;
}

export interface VerseStudyNote {
  ayahNumber: number;
  bookmarked: boolean;
  note: string;
  updatedAt: string;
}

export interface HadithEntry {
  id: string;
  title: LocalizedText;
  narrator: LocalizedText;
  source: string;
  grading: LocalizedText;
  relatedAyahs: number[];
  arabic: string;
  translation: LocalizedText;
  insight: LocalizedText;
}

export interface HistoricalContextItem {
  id: string;
  indexLabel: string;
  eraLabel: LocalizedText;
  title: LocalizedText;
  relatedAyahs: number[];
  narrative: LocalizedText;
  scholarlyNote: LocalizedText;
}

export interface ReciterInfo {
  id: ReciterId;
  name: string;
  style: string;
  folder: string;
}
