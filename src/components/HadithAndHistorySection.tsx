import React, { useState } from 'react';
import { HISTORICAL_CONTEXT, SURAH_HADITHS } from '../data';
import { AppLanguage } from '../types/tafsir';
import { pickText } from '../utils/i18n';

interface HadithAndHistorySectionProps {
  language: AppLanguage;
  onJumpToAyah: (ayahNumber: number) => void;
}

export const HadithAndHistorySection: React.FC<
  HadithAndHistorySectionProps
> = ({ language, onJumpToAyah }) => {
  const [activeTab, setActiveTab] = useState<'hadith' | 'history'>('hadith');

  return (
    <section
      id="hadith-history"
      className="border-t border-[#E5DFD3] dark:border-[#2C2824] bg-[#FBF9F5] dark:bg-[#121110] py-14 lg:py-18 scroll-mt-10"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        {/* Section Heading & Tab Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E5DFD3] dark:border-[#2C2824]">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-[#78350F] dark:text-[#D4AF37]">
              {pickText(language, {
                en: 'Prophetic Narrations & Seerah Background',
                id: 'Hadis Shahih & Konteks Sejarah Turunnya Surah',
                ms: 'Hadis Sahih & Latar Sejarah Penurunan Surah',
              })}
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-[#1C1917] dark:text-[#F2EFE9] text-balance">
              {pickText(language, {
                en: 'Authentic Hadiths & Historical Context',
                id: 'Hadis-Hadis Utama & Konteks Historis Surah As-Sajdah',
                ms: 'Hadis-Hadis Sahih & Konteks Sejarah Surah As-Sajdah',
              })}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#57534E] dark:text-[#B8B2A8] leading-relaxed">
              {pickText(language, {
                en: 'Explore the authentic prophetic traditions preserving Surah As-Sajdah’s weekly and nightly role, alongside the historical circumstances of Middle Meccan revelation.',
                id: 'Telaah riwayat-riwayat shahih yang merekam kedudukan Surah As-Sajdah dalam praktik Nabi, disertai latar sejarah dan asbabun nuzul pada periode Mekah.',
                ms: 'Telusuri riwayat-riwayat sahih yang merakam kedudukan Surah As-Sajdah dalam amalan Nabi, bersama latar sejarah dan asbabun nuzul pada tempoh Makkah.',
              })}
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Hadith and historical context tabs"
            className="flex items-center gap-1 p-1 rounded-lg bg-[#EAE4D7] dark:bg-[#23201C] self-start lg:self-end shrink-0"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'hadith'}
              onClick={() => setActiveTab('hadith')}
              className={`px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 tabular-nums ${
                activeTab === 'hadith'
                  ? 'bg-[#FBF9F5] dark:bg-[#121110] text-[#1E3A8A] dark:text-[#D4AF37] shadow-xs'
                  : 'text-[#57534E] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-[#F2EFE9]'
              }`}
            >
              {pickText(language, {
                en: `Authentic Hadiths (${SURAH_HADITHS.length})`,
                id: `Hadis Shahih (${SURAH_HADITHS.length})`,
                ms: `Hadis Sahih (${SURAH_HADITHS.length})`,
              })}
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'history'}
              onClick={() => setActiveTab('history')}
              className={`px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 tabular-nums ${
                activeTab === 'history'
                  ? 'bg-[#FBF9F5] dark:bg-[#121110] text-[#1E3A8A] dark:text-[#D4AF37] shadow-xs'
                  : 'text-[#57534E] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-[#F2EFE9]'
              }`}
            >
              {pickText(language, {
                en: `Historical Context (${HISTORICAL_CONTEXT.length})`,
                id: `Konteks Sejarah (${HISTORICAL_CONTEXT.length})`,
                ms: `Konteks Sejarah (${HISTORICAL_CONTEXT.length})`,
              })}
            </button>
          </div>
        </div>

        {/* Authentic Hadiths Panel */}
        {activeTab === 'hadith' && (
          <div className="mt-8 divide-y divide-[#E5DFD3] dark:divide-[#2C2824]">
            {SURAH_HADITHS.map((hadith) => (
              <article key={hadith.id} className="py-8 first:pt-2 last:pb-2">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs uppercase tracking-widest text-[#78716C] dark:text-[#A8A29E]">
                    <span className="font-semibold text-[#1E3A8A] dark:text-[#D4AF37]">
                      {hadith.source}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{hadith.grading[language]}</span>
                    <span aria-hidden="true">·</span>
                    <span>{hadith.narrator[language]}</span>
                  </div>

                  {/* Related Ayat jump buttons */}
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    {hadith.relatedAyahs.map((ayahNum) => (
                      <button
                        key={ayahNum}
                        type="button"
                        onClick={() => onJumpToAyah(ayahNum)}
                        className="text-xs font-semibold text-[#78350F] dark:text-[#D4AF37] hover:underline underline-offset-4 tabular-nums whitespace-nowrap shrink-0"
                      >
                        {language === 'en'
                          ? `Ayah 32:${ayahNum}`
                          : `Ayat 32:${ayahNum}`}
                      </button>
                    ))}
                  </div>
                </div>

                <h3 className="mt-3 font-display text-2xl font-semibold text-[#1C1917] dark:text-[#F2EFE9]">
                  {hadith.title[language]}
                </h3>

                <p
                  dir="rtl"
                  lang="ar"
                  className="mt-4 font-arabic text-xl sm:text-2xl leading-[2.1] text-right text-[#1C1917] dark:text-[#F5F2EB]"
                >
                  {hadith.arabic}
                </p>

                <p className="mt-4 text-base leading-[1.7] text-[#292524] dark:text-[#E7E2D8] max-w-[70ch]">
                  {hadith.translation[language]}
                </p>

                <div className="mt-4 p-4 rounded-lg bg-[#F5F1E8] dark:bg-[#171512] border border-[#E5DFD3] dark:border-[#2C2824] max-w-[70ch]">
                  <p className="text-xs uppercase tracking-widest font-semibold text-[#78716C] dark:text-[#A8A29E]">
                    {pickText(language, {
                      en: 'Scholarly Insight',
                      id: 'Hikmah & Penjelasan Ulama',
                      ms: 'Hikmah & Huraian Ulama',
                    })}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#44403C] dark:text-[#D6D0C6]">
                    {hadith.insight[language]}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Historical Context & Asbabun Nuzul Panel */}
        {activeTab === 'history' && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {HISTORICAL_CONTEXT.map((ctx) => (
              <article
                key={ctx.id}
                className="p-6 rounded-xl border border-[#E5DFD3] dark:border-[#2C2824] bg-[#F5F1E8] dark:bg-[#171512] flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-widest text-[#78716C] dark:text-[#A8A29E] tabular-nums">
                    <span className="font-semibold text-[#78350F] dark:text-[#D4AF37]">
                      {ctx.indexLabel}. {ctx.eraLabel[language]}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-semibold text-[#1C1917] dark:text-[#F2EFE9]">
                    {ctx.title[language]}
                  </h3>

                  <p className="mt-3 text-sm leading-[1.75] text-[#292524] dark:text-[#E7E2D8]">
                    {ctx.narrative[language]}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#E5DFD3] dark:border-[#2C2824] space-y-3">
                  <p className="text-xs leading-relaxed text-[#57534E] dark:text-[#B8B2A8]">
                    <span className="font-semibold text-[#1C1917] dark:text-[#F2EFE9]">
                      {pickText(language, {
                        en: 'Exegetical Note: ',
                        id: 'Catatan Sejarah Tafsir: ',
                        ms: 'Catatan Sejarah Tafsir: ',
                      })}
                    </span>
                    {ctx.scholarlyNote[language]}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                    <span className="text-[#78716C] dark:text-[#A8A29E]">
                      {pickText(language, {
                        en: 'Related Ayat:',
                        id: 'Ayat Terkait:',
                        ms: 'Ayat Berkaitan:',
                      })}
                    </span>
                    {ctx.relatedAyahs.map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => onJumpToAyah(num)}
                        className="font-semibold text-[#1E3A8A] dark:text-[#D4AF37] hover:underline underline-offset-4 tabular-nums"
                      >
                        32:{num}
                      </button>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
