import React, { useState } from 'react';
import { BookOpen, Play, Square } from 'lucide-react';
import { SURAH_META } from '../data';
import { AppLanguage } from '../types/tafsir';
import { pickText } from '../utils/i18n';

interface HeroOverviewProps {
  language: AppLanguage;
  isPlayingSurah: boolean;
  onPlaySurah: () => void;
  onJumpToAyah: (ayahNumber: number) => void;
}

export const HeroOverview: React.FC<HeroOverviewProps> = ({
  language,
  isPlayingSurah,
  onPlaySurah,
  onJumpToAyah,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="overview"
      className="border-b border-[#E5DFD3] dark:border-[#2C2824] bg-[#FBF9F5] dark:bg-[#121110]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Editorial Column */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Quiet unboxed metadata line */}
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs uppercase tracking-widest text-[#78716C] dark:text-[#A8A29E] tabular-nums">
                <span>
                  {pickText(language, {
                    en: 'Surah 32',
                    id: 'Surah ke-32',
                    ms: 'Surah ke-32',
                  })}
                </span>
                <span aria-hidden="true">·</span>
                <span>{SURAH_META.revelationPeriod[language]}</span>
                <span aria-hidden="true">·</span>
                <span>{SURAH_META.ayahCount} Ayat</span>
                <span aria-hidden="true">·</span>
                <span>{SURAH_META.juz}</span>
              </div>

              <div className="mt-4 flex flex-wrap items-baseline justify-between gap-4">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.08] tracking-tight text-[#1C1917] dark:text-[#F2EFE9] text-balance">
                  Tafsir Surah As-Sajdah
                </h1>
                <span
                  dir="rtl"
                  lang="ar"
                  className="font-arabic text-3xl sm:text-4xl text-[#78350F] dark:text-[#D4AF37]"
                >
                  {SURAH_META.arabicTitle}
                </span>
              </div>

              <p className="mt-2 font-display italic text-xl text-[#57534E] dark:text-[#C7C0B5]">
                {pickText(language, {
                  en: `“${SURAH_META.englishTitle}” — Classical Exegesis & Linguistic Study`,
                  id: `“${SURAH_META.indonesianTitle}” — Kajian Tafsir Klasik & Tadabur Ayat`,
                  ms: `“${SURAH_META.malayTitle}” — Kajian Tafsir Klasik & Tadabbur Ayat`,
                })}
              </p>

              <p className="mt-6 text-[15px] sm:text-base leading-relaxed text-[#44403C] dark:text-[#D6D0C6] max-w-[65ch]">
                {SURAH_META.heroOverview[language]}
              </p>

              {/* Prophetic Friday Fajr Tradition */}
              <div className="mt-6 p-5 rounded-xl bg-[#F3EFE6] dark:bg-[#1C1A17] border border-[#E5DFD3] dark:border-[#2C2824]">
                <p className="text-xs uppercase tracking-widest font-semibold text-[#78350F] dark:text-[#D4AF37]">
                  {pickText(language, {
                    en: 'Prophetic Practice · Friday Fajr Recitation',
                    id: 'Sunnah Nabi · Bacaan Subuh Hari Jumat',
                    ms: 'Sunnah Nabi · Bacaan Subuh Hari Jumaat',
                  })}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#44403C] dark:text-[#D6D0C6]">
                  {SURAH_META.propheticTradition[language]}
                </p>
              </div>
            </div>

            {/* Action strip */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onPlaySurah}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg text-sm font-medium bg-[#1E3A8A] text-white hover:bg-[#172E6E] dark:bg-[#D4AF37] dark:text-[#121110] dark:hover:bg-[#E2C258] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1E3A8A]"
              >
                {isPlayingSurah ? (
                  <>
                    <Square className="w-4 h-4 fill-current" />
                    <span>
                      {pickText(language, {
                        en: 'Stop Recitation',
                        id: 'Hentikan Murotal',
                        ms: 'Hentikan Bacaan',
                      })}
                    </span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>
                      {pickText(language, {
                        en: 'Listen to Surah (Al-Afasy)',
                        id: 'Putar Murotal (Al-Afasy)',
                        ms: 'Dengar Bacaan Surah (Al-Afasy)',
                      })}
                    </span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => onJumpToAyah(15)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border border-[#D6CEBE] dark:border-[#3A342E] text-[#1C1917] dark:text-[#F2EFE9] hover:bg-[#F3EFE6] dark:hover:bg-[#1C1A17] transition-colors whitespace-nowrap shrink-0"
              >
                <BookOpen className="w-4 h-4" />
                <span>
                  {pickText(language, {
                    en: 'Jump to Ayat Sajdah (32:15)',
                    id: 'Buka Ayat Sajdah (32:15)',
                    ms: 'Terus ke Ayat Sajdah (32:15)',
                  })}
                </span>
              </button>
            </div>
          </div>

          {/* Right Manuscript Frontispiece Visual */}
          <div className="lg:col-span-5 flex flex-col">
            <figure className="h-full flex flex-col justify-between rounded-xl overflow-hidden border border-[#E5DFD3] dark:border-[#2C2824] bg-[#F3EFE6] dark:bg-[#1C1A17]">
              <div className="relative flex-1 min-h-[240px] lg:min-h-[340px] overflow-hidden">
                {!imageError ? (
                  <img
                    src="/src/assets/images/sajdah_manuscript_frontispiece_1795136355916.jpg"
                    alt="Classical Islamic geometric manuscript illumination on warm parchment with lapis lazuli and gold border"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover lg:h-full"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#EFE9DC] to-[#E2D9C5] dark:from-[#1E1B17] dark:to-[#141210] text-center">
                    <span
                      dir="rtl"
                      lang="ar"
                      className="font-arabic text-4xl text-[#78350F] dark:text-[#D4AF37]"
                    >
                      {SURAH_META.arabicTitle}
                    </span>
                    <span className="mt-2 text-xs uppercase tracking-widest text-[#78716C] dark:text-[#A8A29E]">
                      32 · As-Sajdah
                    </span>
                  </div>
                )}
              </div>
              <figcaption className="px-5 py-4 border-t border-[#E5DFD3] dark:border-[#2C2824] bg-[#FBF9F5] dark:bg-[#171512]">
                <p
                  dir="rtl"
                  lang="ar"
                  className="font-arabic text-xl text-center text-[#1C1917] dark:text-[#F2EFE9]"
                >
                  {SURAH_META.bismillah}
                </p>
                <p className="mt-1 text-xs text-center font-serif italic text-[#78716C] dark:text-[#A8A29E]">
                  {SURAH_META.bismillahMeaning[language]}
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
