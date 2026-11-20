import React from 'react';
import { AppLanguage } from '../types/tafsir';
import { pickText } from '../utils/i18n';

interface HeaderProps {
  language: AppLanguage;
  notesCount: number;
  onOpenNotes: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  notesCount,
  onOpenNotes,
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

        {/* Zone 3: 1 primary action */}
        <div className="shrink-0">
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
