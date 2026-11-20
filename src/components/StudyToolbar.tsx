import React from 'react';
import { Moon, Search, Sun, X } from 'lucide-react';
import { THEMATIC_SECTIONS } from '../data';
import {
  AppLanguage,
  TafsirLens,
  ThematicSectionId,
} from '../types/tafsir';
import { pickText } from '../utils/i18n';

interface StudyToolbarProps {
  language: AppLanguage;
  onChangeLanguage: (lang: AppLanguage) => void;
  activeSection: ThematicSectionId;
  onChangeSection: (section: ThematicSectionId) => void;
  tafsirLens: TafsirLens;
  onChangeTafsirLens: (lens: TafsirLens) => void;
  searchQuery: string;
  onChangeSearchQuery: (q: string) => void;
  showTransliteration: boolean;
  onToggleTransliteration: () => void;
  arabicSize: 'md' | 'lg' | 'xl';
  onChangeArabicSize: (size: 'md' | 'lg' | 'xl') => void;
  isDark: boolean;
  onToggleDark: () => void;
}

export const StudyToolbar: React.FC<StudyToolbarProps> = ({
  language,
  onChangeLanguage,
  activeSection,
  onChangeSection,
  tafsirLens,
  onChangeTafsirLens,
  searchQuery,
  onChangeSearchQuery,
  showTransliteration,
  onToggleTransliteration,
  arabicSize,
  onChangeArabicSize,
  isDark,
  onToggleDark,
}) => {
  const scholarOptions: { id: TafsirLens; label: string }[] = [
    {
      id: 'all',
      label: pickText(language, {
        en: 'All Scholars',
        id: 'Semua Mufasir',
        ms: 'Semua Mufasir',
      }),
    },
    { id: 'ibn_kathir', label: 'Ibn Kathir' },
    { id: 'jalalayn', label: 'Al-Jalalayn' },
    { id: 'sadi', label: 'As-Sa‘di' },
  ];

  const languageOptions: { id: AppLanguage; label: string }[] = [
    { id: 'en', label: 'English' },
    { id: 'ms', label: 'Bahasa Melayu' },
    { id: 'id', label: 'Bahasa Indonesia' },
  ];

  return (
    <div className="border-b border-[#E5DFD3] dark:border-[#2C2824] bg-[#F5F1E8] dark:bg-[#171512]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-4 space-y-4">
        {/* Row 1: Thematic Section Tabs + Search */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div
            role="tablist"
            aria-label="Thematic sections"
            className="flex items-center gap-1 p-1 rounded-lg bg-[#EAE4D7] dark:bg-[#23201C] overflow-x-auto"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeSection === 'all'}
              onClick={() => onChangeSection('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeSection === 'all'
                  ? 'bg-[#FBF9F5] dark:bg-[#121110] text-[#1C1917] dark:text-[#F2EFE9] shadow-xs'
                  : 'text-[#57534E] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-[#F2EFE9]'
              }`}
            >
              {pickText(language, {
                en: 'All Ayat (1–30)',
                id: 'Semua Ayat (1–30)',
                ms: 'Semua Ayat (1–30)',
              })}
            </button>

            {THEMATIC_SECTIONS.map((sec) => (
              <button
                key={sec.id}
                type="button"
                role="tab"
                aria-selected={activeSection === sec.id}
                onClick={() => onChangeSection(sec.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 tabular-nums ${
                  activeSection === sec.id
                    ? 'bg-[#FBF9F5] dark:bg-[#121110] text-[#1C1917] dark:text-[#F2EFE9] shadow-xs'
                    : 'text-[#57534E] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-[#F2EFE9]'
                }`}
              >
                {sec.roman}. Ayat {sec.ayahRange}
              </button>
            ))}
          </div>

          {/* Search input */}
          <div className="relative w-full lg:w-72 shrink-0">
            <Search className="w-4 h-4 text-[#78716C] dark:text-[#A8A29E] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onChangeSearchQuery(e.target.value)}
              placeholder={pickText(language, {
                en: 'Search verse # (1–30), keyword, root...',
                id: 'Cari nomor ayat (1–30), kata, akar...',
                ms: 'Cari nombor ayat (1–30), kata, akar...',
              })}
              aria-label={pickText(language, {
                en: 'Search verses or tafsir',
                id: 'Cari ayat atau tafsir',
                ms: 'Cari ayat atau tafsir',
              })}
              className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm rounded-lg border border-[#D6CEBE] dark:border-[#332E29] bg-[#FBF9F5] dark:bg-[#121110] text-[#1C1917] dark:text-[#F2EFE9] placeholder:text-[#8C857D] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] dark:focus:ring-[#D4AF37]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onChangeSearchQuery('')}
                aria-label="Clear search"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#78716C] hover:text-[#1C1917] dark:hover:text-[#F2EFE9]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Row 2: Tafsir Lens, Language, Reading Controls, Theme */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#E5DFD3] dark:border-[#2C2824]">
          {/* Mufassir Selector */}
          <div className="flex items-center gap-2 overflow-x-auto">
            <span className="text-xs font-medium text-[#78716C] dark:text-[#A8A29E] whitespace-nowrap shrink-0">
              {pickText(language, {
                en: 'Tafsir Lens:',
                id: 'Sumber Tafsir:',
                ms: 'Sumber Tafsir:',
              })}
            </span>
            <div className="flex items-center gap-1 p-1 rounded-lg bg-[#EAE4D7] dark:bg-[#23201C]">
              {scholarOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => onChangeTafsirLens(opt.id)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    tafsirLens === opt.id
                      ? 'bg-[#FBF9F5] dark:bg-[#121110] text-[#1E3A8A] dark:text-[#D4AF37] shadow-xs'
                      : 'text-[#57534E] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-[#F2EFE9]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right reading preferences */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Language Switch: English | Bahasa Melayu | Bahasa Indonesia */}
            <div
              role="group"
              aria-label="Language toggle"
              className="flex items-center gap-1 p-1 rounded-lg bg-[#EAE4D7] dark:bg-[#23201C] overflow-x-auto"
            >
              {languageOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  aria-pressed={language === opt.id}
                  onClick={() => onChangeLanguage(opt.id)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    language === opt.id
                      ? 'bg-[#FBF9F5] dark:bg-[#121110] text-[#1E3A8A] dark:text-[#D4AF37] shadow-xs'
                      : 'text-[#57534E] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-[#F2EFE9]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Transliteration Toggle */}
            <button
              type="button"
              onClick={onToggleTransliteration}
              aria-pressed={showTransliteration}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 ${
                showTransliteration
                  ? 'border-[#1E3A8A] text-[#1E3A8A] bg-[#1E3A8A]/5 dark:border-[#D4AF37] dark:text-[#D4AF37] dark:bg-[#D4AF37]/10'
                  : 'border-[#D6CEBE] dark:border-[#332E29] text-[#57534E] dark:text-[#A8A29E]'
              }`}
            >
              {pickText(language, {
                en: 'Transliteration',
                id: 'Transliterasi',
                ms: 'Transliterasi',
              })}
            </button>

            {/* Arabic Font Size */}
            <div
              className="flex items-center gap-1 p-1 rounded-lg bg-[#EAE4D7] dark:bg-[#23201C]"
              aria-label="Arabic font scale"
            >
              {(['md', 'lg', 'xl'] as const).map((sz) => (
                <button
                  key={sz}
                  type="button"
                  onClick={() => onChangeArabicSize(sz)}
                  className={`px-2 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    arabicSize === sz
                      ? 'bg-[#FBF9F5] dark:bg-[#121110] text-[#1C1917] dark:text-[#F2EFE9] shadow-xs'
                      : 'text-[#57534E] dark:text-[#A8A29E]'
                  }`}
                >
                  {sz === 'md' ? 'A' : sz === 'lg' ? 'A+' : 'A++'}
                </button>
              ))}
            </div>

            {/* Light / Dark Theme Toggle */}
            <button
              type="button"
              onClick={onToggleDark}
              aria-label={
                isDark
                  ? 'Switch to light archival theme'
                  : 'Switch to dark manuscript theme'
              }
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-[#D6CEBE] dark:border-[#332E29] text-[#1C1917] dark:text-[#F2EFE9] hover:bg-[#EAE4D7] dark:hover:bg-[#23201C] transition-colors whitespace-nowrap shrink-0"
            >
              {isDark ? (
                <>
                  <Sun className="w-3.5 h-3.5" />
                  <span>
                    {pickText(language, {
                      en: 'Light',
                      id: 'Terang',
                      ms: 'Cerah',
                    })}
                  </span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5" />
                  <span>
                    {pickText(language, {
                      en: 'Dark',
                      id: 'Gelap',
                      ms: 'Gelap',
                    })}
                  </span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
