import React from 'react';
import { Mail, Moon, Sun } from 'lucide-react';
import { AppLanguage } from '../types/tafsir';
import { pickText } from '../utils/i18n';
import { ShareButton } from './ShareButton';

interface HeaderProps {
  language: AppLanguage;
  notesCount: number;
  onOpenNotes: () => void;
  isDark: boolean;
  onToggleDark: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  notesCount,
  onOpenNotes,
  isDark,
  onToggleDark,
}) => {
  const navLabels = {
    overview: pickText(language, {
      en: 'Overview',
      id: 'Ringkasan',
      ms: 'Ringkasan',
    }),
    recitation: pickText(language, {
      en: 'Recitation',
      id: 'Murotal',
      ms: 'Bacaan',
    }),
    verses: pickText(language, {
      en: 'Verse Tafsir',
      id: 'Tafsir Ayat',
      ms: 'Tafsir Ayat',
    }),
    hadith: pickText(language, {
      en: 'Hadith & History',
      id: 'Hadis & Sejarah',
      ms: 'Hadis & Sejarah',
    }),
    sajdah: pickText(language, {
      en: 'Sajdah Guide',
      id: 'Panduan Sujud',
      ms: 'Panduan Sujud',
    }),
    notes: pickText(language, {
      en: `Study Notes (${notesCount})`,
      id: `Catatan (${notesCount})`,
      ms: `Catatan (${notesCount})`,
    }),
  };

  return (
    <header className="border-b border-[#E5DFD3] dark:border-[#2C2824] bg-[#FBF9F5]/95 dark:bg-[#121110]/95 backdrop-blur-sm">
      {/* Slim Top Creator Attribution Bar */}
      <div className="border-b border-[#E5DFD3]/80 dark:border-[#2C2824]/80 bg-[#F5F1E8] dark:bg-[#171512]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-1.5 flex items-center justify-end gap-2 text-xs text-[#78716C] dark:text-[#A8A29E]">
          <span>
            {pickText(language, {
              en: 'Creator:',
              id: 'Pembuat:',
              ms: 'Pencipta:',
            })}
          </span>
          <a
            href="mailto:drfendiameen@gmail.com"
            className="inline-flex items-center gap-1.5 font-medium text-[#1E3A8A] dark:text-[#D4AF37] hover:underline underline-offset-4 transition-colors whitespace-nowrap"
          >
            <Mail className="w-3.5 h-3.5 shrink-0" />
            <span>drfendiameen@gmail.com</span>
          </a>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#overview"
          className="font-display text-2xl font-semibold tracking-tight text-[#1C1917] dark:text-[#F2EFE9] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] dark:focus-visible:ring-[#D4AF37] rounded-sm"
        >
          As-Sajdah
        </a>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-[#57534E] dark:text-[#A8A29E]"
        >
          <a
            href="#overview"
            className="hover:text-[#1C1917] dark:hover:text-[#F2EFE9] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            {navLabels.overview}
          </a>
          <a
            href="#recitation-studio"
            className="hover:text-[#1C1917] dark:hover:text-[#F2EFE9] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            {navLabels.recitation}
          </a>
          <a
            href="#verse-tafsir"
            className="hover:text-[#1C1917] dark:hover:text-[#F2EFE9] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            {navLabels.verses}
          </a>
          <a
            href="#hadith-history"
            className="hover:text-[#1C1917] dark:hover:text-[#F2EFE9] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            {navLabels.hadith}
          </a>
          <a
            href="#sajdah-guide"
            className="hover:text-[#1C1917] dark:hover:text-[#F2EFE9] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            {navLabels.sajdah}
          </a>
        </nav>

        {/* Zone 3: Theme, Share & Study Notes */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onToggleDark}
            aria-label={pickText(language, {
              en: isDark ? 'Switch to light theme' : 'Switch to dark theme',
              id: isDark ? 'Ganti ke tema terang' : 'Ganti ke tema gelap',
              ms: isDark ? 'Tukar ke tema cerah' : 'Tukar ke tema gelap',
            })}
            aria-pressed={isDark}
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[#D6CEBE] dark:border-[#332E29] text-[#57534E] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-[#F2EFE9] hover:bg-[#EAE4D7] dark:hover:bg-[#23201C] transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] dark:focus-visible:ring-[#D4AF37]"
          >
            {isDark ? (
              <Sun className="w-4 h-4" aria-hidden="true" />
            ) : (
              <Moon className="w-4 h-4" aria-hidden="true" />
            )}
          </button>
          <ShareButton
            language={language}
            variant="header"
            title={pickText(language, {
              en: 'Tafsir Surah As-Sajdah (32:1–30)',
              id: 'Tafsir Surah As-Sajdah (32:1–30)',
              ms: 'Tafsir Surah As-Sajdah (32:1–30)',
            })}
            shareText={pickText(language, {
              en: 'Explore Tafsir Surah As-Sajdah (32:1–30) — Classical Exegesis, Word-by-Word Study, Hadiths & Bilingual Audio Recitation.',
              id: 'Pelajari Tafsir Surah As-Sajdah (32:1–30) — Tafsir Klasik, Kata per Kata, Hadis Shahih & Audio Terjemahan.',
              ms: 'Hayati Tafsir Surah As-Sajdah (32:1–30) — Tafsir Klasik, Kata demi Kata, Hadis Sahih & Bacaan Audio.',
            })}
          />
          <button
            type="button"
            onClick={onOpenNotes}
            className="px-4 py-2 text-xs sm:text-sm font-medium rounded-lg bg-[#1E3A8A] text-white hover:bg-[#172E6E] dark:bg-[#D4AF37] dark:text-[#121110] dark:hover:bg-[#E2C258] transition-colors whitespace-nowrap shrink-0 tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1E3A8A] dark:focus-visible:ring-[#D4AF37]"
          >
            {navLabels.notes}
          </button>
        </div>
      </div>
    </header>
  );
};
