import React from 'react';
import { THEMATIC_SECTIONS } from '../data';
import { AppLanguage, ThematicSectionId } from '../types/tafsir';
import { pickText } from '../utils/i18n';

interface ThematicArcSectionProps {
  language: AppLanguage;
  onSelectSection: (section: Exclude<ThematicSectionId, 'all'>) => void;
}

export const ThematicArcSection: React.FC<ThematicArcSectionProps> = ({
  language,
  onSelectSection,
}) => {
  return (
    <section
      id="thematic-arc"
      className="border-t border-[#E5DFD3] dark:border-[#2C2824] bg-[#F5F1E8] dark:bg-[#171512] py-14 lg:py-18 scroll-mt-12"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-[#78716C] dark:text-[#A8A29E]">
            {pickText(language, {
              en: 'Structural Architecture · Four Movements',
              id: 'Arsitektur Surah · Empat Babak Tema',
              ms: 'Struktur Surah · Empat Bahagian Tema',
            })}
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-[#1C1917] dark:text-[#F2EFE9] text-balance">
            {pickText(language, {
              en: 'The Thematic Arc of Surah As-Sajdah',
              id: 'Alur Tema & Kesatuan Pesan Surah As-Sajdah',
              ms: 'Alur Tema & Kesatuan Mesej Surah As-Sajdah',
            })}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#57534E] dark:text-[#B8B2A8] leading-relaxed">
            {pickText(language, {
              en: 'Classical exegetes note a deliberate symmetry: the surah opens by anchoring Revelation in cosmic and human creation, rises to the humility of prostration at its center (Ayah 15), and closes by pairing historical reflection with rain-revived earth.',
              id: 'Para ulama tafsir mencatat keserasian struktur surah ini: dibuka dengan peneguhan wahyu melalui penciptaan semesta dan manusia, memuncak pada sujud ketundukan di tengah surah (Ayat 15), lalu ditutup dengan cermin sejarah dan penghidupan tanah tandus oleh hujan.',
              ms: 'Para ulama tafsir mencatatkan keserasian struktur surah ini: dimulakan dengan peneguhan wahyu melalui penciptaan alam dan manusia, memuncak pada sujud ketundukan di pertengahan surah (Ayat 15), dan diakhiri dengan pengajaran sejarah serta penghidupan bumi gersang oleh hujan.',
            })}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {THEMATIC_SECTIONS.map((sec) => (
            <div
              key={sec.id}
              className="p-6 rounded-xl border border-[#E5DFD3] dark:border-[#2C2824] bg-[#FBF9F5] dark:bg-[#121110] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-widest text-[#78716C] dark:text-[#A8A29E] tabular-nums">
                  <span>
                    {pickText(language, {
                      en: `Movement ${sec.roman}`,
                      id: `Bagian ${sec.roman}`,
                      ms: `Bahagian ${sec.roman}`,
                    })}
                  </span>
                  <span>Ayat {sec.ayahRange}</span>
                </div>

                <h3 className="mt-3 font-display text-2xl font-semibold text-[#1C1917] dark:text-[#F2EFE9]">
                  {sec.title[language]}
                </h3>
                <p className="mt-1 text-sm italic text-[#78350F] dark:text-[#D4AF37]">
                  {sec.subtitle[language]}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-[#44403C] dark:text-[#D6D0C6]">
                  {sec.coreTheme[language]}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#EAE4D7] dark:border-[#24211D] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-xs leading-relaxed text-[#57534E] dark:text-[#A8A29E]">
                  {sec.keyTakeaway[language]}
                </p>
                <button
                  type="button"
                  onClick={() => onSelectSection(sec.id)}
                  className="text-xs font-semibold text-[#1E3A8A] dark:text-[#D4AF37] hover:underline underline-offset-4 whitespace-nowrap shrink-0 self-start sm:self-center"
                >
                  {pickText(language, {
                    en: 'Study Section',
                    id: 'Pelajari Bagian',
                    ms: 'Pelajari Bahagian',
                  })}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
