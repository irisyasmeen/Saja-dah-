import { AppLanguage, LocalizedText } from '../types/tafsir';

export function pickText(language: AppLanguage, copy: LocalizedText): string {
  return copy[language];
}
