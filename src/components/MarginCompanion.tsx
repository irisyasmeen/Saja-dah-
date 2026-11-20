import React from 'react';
import { AppLanguage, AyahTafsir, VerseStudyNote } from '../types/tafsir';
import { SURAH_SAJDAH_AYAHS } from '../data';
import { pickText } from '../utils/i18n';

interface MarginCompanionProps {
  language: AppLanguage;
  activeAyah: AyahTafsir;
  studyNotes: Record<number, VerseStudyNote>;
  onJumpToAyah: (ayahNumber: number) => void;
}

export const MarginCompanion: React.FC<MarginCompanionProps> = ({
  language,
  activeAyah,
  studyNotes,
  onJumpToAyah,
}) => {
  return (
    <aside
      aria-label="Verse lexical and index companion"
      className="lg:sticky lg:top-6 space-y-6"
    >
      {/* Active Verse Arabic Roots (Mufradat) */}
      <div className="p-5 rounded-xl border border-[#E5DFD3] dark:border-[#2C2824] bg-[#F5F1E8] dark:bg-[#171512]">
        <div className="flex items-baseline justify-between gap-2 pb-3 border-b border-[#E5DFD3] dark:border-[#2C2824]">
          <h2 className="text-xs uppercase tracking-widest font-semibold text-[#78716C] dark:text-[#A8A29E]">
            {pickText(language, {
              en: 'Lexical Roots',
              id: 'Akar Kata (Mufradat)',
              ms: 'Akar Kata (Mufradat)',
            })}
          </h2>
          <span className="text-xs font-semibold text-[#1E3A8A] dark:text-[#D4AF37] tabular-nums">
            32:{activeAyah.number}
          </span>
        </div>

        <div className="mt-4 space-y-4">
          {activeAyah.roots.map((item, idx) => (
            <div
              key={`${activeAyah.number}-root-${idx}`}
              className={
                idx > 0
                  ? 'pt-3 border-t border-[#E5DFD3] dark:border-[#2C2824]'
                  : ''
              }
            >
              <div className="flex items-baseline justify-between gap-3">
                <span
                  dir="rtl"
                  lang="ar"
                  className="font-arabic text-2xl text-[#1C1917] dark:text-[#F2EFE9]"
                >
                  {item.arabic}
                </span>
                <span
                  dir="rtl"
                  lang="ar"
                  className="font-arabic text-sm text-[#78350F] dark:text-[#D4AF37]"
                >
                  {item.root}
                </span>
              </div>
              <p className="text-xs italic text-[#78716C] dark:text-[#A8A29E]">
                {item.transliteration}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#44403C] dark:text-[#D6D0C6]">
                {language === 'en'
                  ? item.meaningEn
                  : language === 'ms'
                    ? item.meaningMs
                    : item.meaningId}
              </p>
            </div>
          ))}
        </div>

        {/* Cross-references */}
        <div className="mt-5 pt-4 border-t border-[#E5DFD3] dark:border-[#2C2824]">
          <p className="text-xs uppercase tracking-widest text-[#78716C] dark:text-[#A8A29E]">
            {pickText(language, {
              en: 'Qur’anic Cross-References',
              id: 'Ayat Terkait (Munasabah)',
              ms: 'Rujukan Silang Ayat (Munasabah)',
            })}
          </p>
          <p className="mt-1.5 text-xs font-medium text-[#1C1917] dark:text-[#F2EFE9] tabular-nums">
            {activeAyah.crossReferences.join(' · ')}
          </p>
        </div>
      </div>

      {/* 30-Verse Quick Navigator Grid */}
      <div className="p-5 rounded-xl border border-[#E5DFD3] dark:border-[#2C2824] bg-[#FBF9F5] dark:bg-[#171512]">
        <div className="flex items-baseline justify-between gap-2 pb-3 border-b border-[#E5DFD3] dark:border-[#2C2824]">
          <h2 className="text-xs uppercase tracking-widest font-semibold text-[#78716C] dark:text-[#A8A29E]">
            {pickText(language, {
              en: 'Verse Index (1–30)',
              id: 'Indeks Ayat (1–30)',
              ms: 'Indeks Ayat (1–30)',
            })}
          </h2>
          <span className="text-[11px] text-[#78350F] dark:text-[#D4AF37]">
            15 = Sajdah
          </span>
        </div>

        <div className="mt-4 grid grid-cols-6 gap-1.5">
          {SURAH_SAJDAH_AYAHS.map((v) => {
            const isSelected = v.number === activeAyah.number;
            const hasSaved =
              studyNotes[v.number]?.bookmarked ||
              Boolean(studyNotes[v.number]?.note?.trim());

            return (
              <button
                key={v.number}
                type="button"
                onClick={() => onJumpToAyah(v.number)}
                title={
                  v.isSajdah
                    ? `Ayah ${v.number} (Ayat Sajdah)`
                    : `Ayah ${v.number}`
                }
                className={`relative h-9 rounded-md text-xs font-medium tabular-nums transition-colors ${
                  isSelected
                    ? 'bg-[#1E3A8A] text-white dark:bg-[#D4AF37] dark:text-[#121110]'
                    : v.isSajdah
                      ? 'bg-[#EFE6D2] dark:bg-[#2E2618] text-[#78350F] dark:text-[#E2C258] border border-[#D4C3A3] dark:border-[#4A3D28]'
                      : 'bg-[#F3EFE6] dark:bg-[#211E1A] text-[#44403C] dark:text-[#D6D0C6] hover:bg-[#E5DFD3] dark:hover:bg-[#2C2824]'
                }`}
              >
                {v.number}
                {hasSaved && !isSelected && (
                  <span
                    aria-hidden="true"
                    className="absolute top-1 right-1 w-1 h-1 rounded-full bg-[#1E3A8A] dark:bg-[#D4AF37]"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
