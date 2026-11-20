import React from 'react';
import { SAJDAH_TILAWAH_GUIDE } from '../data';
import { AppLanguage } from '../types/tafsir';
import { pickText } from '../utils/i18n';

interface SajdahGuideSectionProps {
  language: AppLanguage;
}

export const SajdahGuideSection: React.FC<SajdahGuideSectionProps> = ({
  language,
}) => {
  return (
    <section
      id="sajdah-guide"
      className="border-t border-[#E5DFD3] dark:border-[#2C2824] bg-[#FBF9F5] dark:bg-[#121110] py-14 lg:py-18 scroll-mt-12"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Explanation & Legal Rulings */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#78350F] dark:text-[#D4AF37]">
                {pickText(language, {
                  en: 'Ayah 32:15 · Practical Jurisprudence',
                  id: 'Ayat 32:15 · Panduan Fikih Praktis',
                  ms: 'Ayat 32:15 · Panduan Fiqh Praktikal',
                })}
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-[#1C1917] dark:text-[#F2EFE9] text-balance">
                {SAJDAH_TILAWAH_GUIDE.title[language]}
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#44403C] dark:text-[#D6D0C6]">
                {SAJDAH_TILAWAH_GUIDE.intro[language]}
              </p>
            </div>

            {/* Steps */}
            <div className="pt-4 border-t border-[#E5DFD3] dark:border-[#2C2824]">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-[#78716C] dark:text-[#A8A29E]">
                {pickText(language, {
                  en: 'How to Perform Sujud al-Tilawah',
                  id: 'Tata Cara Sujud Tilawah',
                  ms: 'Tatacara Sujud Tilawah',
                })}
              </h3>
              <ol className="mt-4 space-y-3">
                {SAJDAH_TILAWAH_GUIDE.steps[language].map((step, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm leading-relaxed text-[#44403C] dark:text-[#D6D0C6]"
                  >
                    <span className="font-semibold text-xs text-[#1E3A8A] dark:text-[#D4AF37] tabular-nums mt-0.5 shrink-0">
                      0{index + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Scholarly Schools */}
            <div className="pt-4 border-t border-[#E5DFD3] dark:border-[#2C2824] space-y-3">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-[#78716C] dark:text-[#A8A29E]">
                {pickText(language, {
                  en: 'Ruling Across Legal Schools',
                  id: 'Hukum Menurut Mazhab Fikih',
                  ms: 'Hukum Mengikut Mazhab Fiqh',
                })}
              </h3>
              {SAJDAH_TILAWAH_GUIDE.madhhabRulings.map((item) => (
                <div
                  key={item.school}
                  className="p-4 rounded-lg bg-[#F5F1E8] dark:bg-[#171512] border border-[#E5DFD3] dark:border-[#2C2824]"
                >
                  <p className="text-xs font-semibold text-[#1C1917] dark:text-[#F2EFE9]">
                    {item.school}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#57534E] dark:text-[#B8B2A8]">
                    {item.ruling[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Prophetic Supplications */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-xl border border-[#D4C3A3] dark:border-[#4A3D28] bg-[#F5F1E8] dark:bg-[#171512]">
              <p className="text-xs uppercase tracking-widest font-semibold text-[#78350F] dark:text-[#D4AF37]">
                {pickText(language, {
                  en: 'Primary Prophetic Supplication in Sujud Tilawah',
                  id: 'Doa Utama Sujud Tilawah (Riwayat Shahih)',
                  ms: 'Doa Utama Sujud Tilawah (Riwayat Sahih)',
                })}
              </p>

              <p
                dir="rtl"
                lang="ar"
                className="mt-5 font-arabic text-2xl sm:text-3xl leading-[2.15] text-right text-[#1C1917] dark:text-[#F5F2EB]"
              >
                {SAJDAH_TILAWAH_GUIDE.duaArabic}
              </p>

              <p className="mt-4 text-sm italic text-[#78716C] dark:text-[#A8A29E] leading-relaxed">
                {SAJDAH_TILAWAH_GUIDE.duaTransliteration}
              </p>

              <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-[#44403C] dark:text-[#D6D0C6]">
                {SAJDAH_TILAWAH_GUIDE.duaMeaning[language]}
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-xl border border-[#E5DFD3] dark:border-[#2C2824] bg-[#FBF9F5] dark:bg-[#171512]">
              <p className="text-xs uppercase tracking-widest font-semibold text-[#78716C] dark:text-[#A8A29E]">
                {pickText(language, {
                  en: 'Complementary Prophetic Supplication',
                  id: 'Doa Tambahan yang Dianjurkan',
                  ms: 'Doa Tambahan yang Dianjurkan',
                })}
              </p>

              <p
                dir="rtl"
                lang="ar"
                className="mt-5 font-arabic text-2xl sm:text-[1.75rem] leading-[2.15] text-right text-[#1C1917] dark:text-[#F5F2EB]"
              >
                {SAJDAH_TILAWAH_GUIDE.altDuaArabic}
              </p>

              <p className="mt-4 text-sm italic text-[#78716C] dark:text-[#A8A29E] leading-relaxed">
                {SAJDAH_TILAWAH_GUIDE.altDuaTranslit}
              </p>

              <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-[#44403C] dark:text-[#D6D0C6]">
                {SAJDAH_TILAWAH_GUIDE.altDuaMeaning[language]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
