import React, { useState } from 'react';
import {
  Bookmark,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  NotebookPen,
  Pause,
  Play,
} from 'lucide-react';
import {
  AppLanguage,
  AyahTafsir,
  TafsirLens,
  VerseStudyNote,
} from '../types/tafsir';
import { getWordByWordTokens, THEMATIC_SECTIONS } from '../data';
import { pickText } from '../utils/i18n';
import { ShareButton } from './ShareButton';

interface VerseCardProps {
  ayah: AyahTafsir;
  language: AppLanguage;
  tafsirLens: TafsirLens;
  showTransliteration: boolean;
  wordByWord: boolean;
  arabicSize: 'md' | 'lg' | 'xl';
  translationFontSize: number;
  isActive: boolean;
  isCurrentlyPlaying: boolean;
  studyNote?: VerseStudyNote;
  onFocusAyah: (ayahNumber: number) => void;
  onPlayAyah: (ayahNumber: number) => void;
  onToggleBookmark: (ayahNumber: number) => void;
  onSaveNote: (ayahNumber: number, noteText: string) => void;
  onJumpToSajdahGuide: () => void;
  onOpenQuiz: (ayahNumber: number) => void;
}

export const VerseCard: React.FC<VerseCardProps> = ({
  ayah,
  language,
  tafsirLens,
  showTransliteration,
  wordByWord,
  arabicSize,
  translationFontSize,
  isActive,
  isCurrentlyPlaying,
  studyNote,
  onFocusAyah,
  onPlayAyah,
  onToggleBookmark,
  onSaveNote,
  onJumpToSajdahGuide,
  onOpenQuiz,
}) => {
  const [expandedTafsir, setExpandedTafsir] = useState(
    ayah.number === 1 || ayah.number === 15
  );
  const [editingNote, setEditingNote] = useState(false);
  const [noteDraft, setNoteDraft] = useState(studyNote?.note ?? '');

  const sectionInfo = THEMATIC_SECTIONS.find((s) => s.id === ayah.section);

  const arabicSizeClasses = {
    md: 'text-2xl sm:text-[1.75rem] leading-[2.15]',
    lg: 'text-3xl sm:text-[2.1rem] leading-[2.2]',
    xl: 'text-3xl sm:text-[2.45rem] leading-[2.25]',
  }[arabicSize];

  const translationSizeClass =
    (
      {
        14: 'text-[14px]',
        15: 'text-[15px]',
        16: 'text-[16px]',
        17: 'text-[17px]',
        18: 'text-[18px]',
        19: 'text-[19px]',
        20: 'text-[20px]',
        21: 'text-[21px]',
        22: 'text-[22px]',
        23: 'text-[23px]',
        24: 'text-[24px]',
      } as Record<number, string>
    )[translationFontSize] ?? 'text-[17px]';

  const wordTokens = wordByWord ? getWordByWordTokens(ayah) : [];

  const wordArabicSizeClasses = {
    md: 'text-xl sm:text-2xl leading-[1.9]',
    lg: 'text-2xl sm:text-[1.85rem] leading-[1.95]',
    xl: 'text-3xl sm:text-[2.15rem] leading-[2]',
  }[arabicSize];

  const handleOpenNoteEditor = () => {
    setNoteDraft(studyNote?.note ?? '');
    setEditingNote((prev) => !prev);
  };

  const handleCommitNote = () => {
    onSaveNote(ayah.number, noteDraft.trim());
    setEditingNote(false);
  };

  const scholarsToDisplay: {
    key: 'ibn_kathir' | 'jalalayn' | 'sadi';
    title: string;
    subtitle: string;
  }[] = [
    {
      key: 'ibn_kathir',
      title: 'Tafsir Ibn Kathir',
      subtitle: pickText(language, {
        en: 'Classical Narration & Hadith Exegesis',
        id: 'Tafsir Bil-Ma’tsur & Riwayat Klasik',
        ms: 'Tafsir Bil-Ma’thur & Riwayat Hadis Klasik',
      }),
    },
    {
      key: 'jalalayn',
      title: 'Tafsir Al-Jalalayn',
      subtitle: pickText(language, {
        en: 'Concise Lexical & Grammatical Reading',
        id: 'Penjelasan Makna Lafaz & Nahwu Ringkas',
        ms: 'Huraian Makna Lafaz & Nahu Ringkas',
      }),
    },
    {
      key: 'sadi',
      title: 'Tafsir As-Sa‘di',
      subtitle: pickText(language, {
        en: 'Spiritual Wisdom & Thematic Reflection',
        id: 'Hikmah Spiritual & Tadabur Makna',
        ms: 'Hikmah Rohani & Tadabbur Makna',
      }),
    },
  ];

  const visibleScholars =
    tafsirLens === 'all'
      ? scholarsToDisplay
      : scholarsToDisplay.filter((s) => s.key === tafsirLens);

  const isBookmarked = Boolean(studyNote?.bookmarked);
  const hasNote = Boolean(studyNote?.note?.trim());

  return (
    <article
      id={`ayah-${ayah.number}`}
      onClick={() => onFocusAyah(ayah.number)}
      className={`py-8 border-b border-[#E5DFD3] dark:border-[#2C2824] scroll-mt-24 transition-colors ${
        ayah.isSajdah
          ? 'px-5 sm:px-7 my-4 rounded-xl bg-[#F4EFE4] dark:bg-[#1B1814] border border-[#D4C3A3] dark:border-[#4A3D28]'
          : isActive
            ? 'bg-[#F7F3EA]/60 dark:bg-[#171512]/60 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-xl'
            : ''
      }`}
    >
      {/* Top quiet unboxed metadata & action bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs uppercase tracking-widest text-[#78716C] dark:text-[#A8A29E] tabular-nums">
          <span className="font-semibold text-[#1E3A8A] dark:text-[#D4AF37]">
            {language === 'en' ? `Ayah 32:${ayah.number}` : `Ayat 32:${ayah.number}`}
          </span>
          {sectionInfo && (
            <>
              <span aria-hidden="true">·</span>
              <span>
                {sectionInfo.roman}. {sectionInfo.title[language]}
              </span>
            </>
          )}
          {ayah.isSajdah && (
            <>
              <span aria-hidden="true">·</span>
              <span className="font-semibold text-[#78350F] dark:text-[#E2C258]">
                {pickText(language, {
                  en: 'Ayat Sajdah Tilawah (Prostration)',
                  id: 'Ayat Sajdah Tilawah (Disunnahkan Sujud)',
                  ms: 'Ayat Sajdah Tilawah (Disunatkan Sujud)',
                })}
              </span>
            </>
          )}
        </div>

        {/* Functional interactive affordances */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPlayAyah(ayah.number);
            }}
            aria-label={
              isCurrentlyPlaying
                ? `Pause ayah ${ayah.number}`
                : `Play ayah ${ayah.number}`
            }
            className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
              isCurrentlyPlaying
                ? 'bg-[#1E3A8A] text-white dark:bg-[#D4AF37] dark:text-[#121110]'
                : 'text-[#57534E] dark:text-[#A8A29E] hover:bg-[#EAE4D7] dark:hover:bg-[#23201C]'
            }`}
          >
            {isCurrentlyPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span>
                  {pickText(language, {
                    en: 'Playing',
                    id: 'Diputar',
                    ms: 'Dimainkan',
                  })}
                </span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>
                  {pickText(language, {
                    en: 'Listen',
                    id: 'Dengar',
                    ms: 'Dengar',
                  })}
                </span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onFocusAyah(ayah.number);
              onOpenQuiz(ayah.number);
            }}
            aria-label={pickText(language, {
              en: `Quick quiz for ayah ${ayah.number}`,
              id: `Kuis singkat untuk ayat ${ayah.number}`,
              ms: `Kuiz ringkas untuk ayat ${ayah.number}`,
            })}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-[#57534E] dark:text-[#A8A29E] hover:bg-[#EAE4D7] dark:hover:bg-[#23201C] transition-colors whitespace-nowrap shrink-0"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>
              {pickText(language, {
                en: 'Quiz',
                id: 'Kuis',
                ms: 'Kuiz',
              })}
            </span>
          </button>

          <ShareButton
            language={language}
            variant="card"
            ayahNumber={ayah.number}
            title={
              language === 'en'
                ? `Surah As-Sajdah · Ayah 32:${ayah.number}`
                : `Surah As-Sajdah · Ayat 32:${ayah.number}`
            }
            shareText={`${ayah.arabic}\n\n“${ayah.translation[language]}” — Qur’an 32:${ayah.number}`}
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(ayah.number);
            }}
            aria-label={
              isBookmarked
                ? `Remove bookmark on ayah ${ayah.number}`
                : `Bookmark ayah ${ayah.number}`
            }
            aria-pressed={isBookmarked}
            className={`p-2 rounded-lg transition-colors ${
              isBookmarked
                ? 'text-[#78350F] dark:text-[#D4AF37] bg-[#EAE4D7] dark:bg-[#2A251E]'
                : 'text-[#78716C] dark:text-[#A8A29E] hover:bg-[#EAE4D7] dark:hover:bg-[#23201C]'
            }`}
          >
            <Bookmark
              className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`}
            />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleOpenNoteEditor();
            }}
            aria-label={`Add study note for ayah ${ayah.number}`}
            className={`p-2 rounded-lg transition-colors ${
              hasNote || editingNote
                ? 'text-[#1E3A8A] dark:text-[#93C5FD] bg-[#EAE4D7] dark:bg-[#23201C]'
                : 'text-[#78716C] dark:text-[#A8A29E] hover:bg-[#EAE4D7] dark:hover:bg-[#23201C]'
            }`}
          >
            <NotebookPen className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Arabic Calligraphy or Word-by-Word Mode */}
      {wordByWord ? (
        <div className="mt-6" aria-label="Word-by-word Arabic and literal translation">
          <div dir="rtl" className="flex flex-wrap items-stretch gap-2.5 sm:gap-3">
            {wordTokens.map((token, idx) => {
              const rootMeaning = token.rootInfo
                ? language === 'en'
                  ? token.rootInfo.meaningEn
                  : language === 'ms'
                    ? token.rootInfo.meaningMs
                    : token.rootInfo.meaningId
                : undefined;

              return (
                <div
                  key={`${ayah.number}-wbw-${idx}`}
                  title={
                    token.rootInfo
                      ? `${token.rootInfo.transliteration} (${token.rootInfo.root}) — ${rootMeaning}`
                      : token.literal[language]
                  }
                  className={`inline-flex flex-col items-center justify-between text-center px-3 py-2.5 rounded-lg border transition-colors min-w-[4.75rem] max-w-[11.5rem] ${
                    token.rootInfo
                      ? 'border-[#D4C3A3] dark:border-[#4A3D28] bg-[#F5EFE2] dark:bg-[#1E1A14]'
                      : 'border-[#E5DFD3] dark:border-[#2C2824] bg-[#FBF9F5] dark:bg-[#161411]'
                  }`}
                >
                  <span
                    lang="ar"
                    className={`font-arabic text-[#1C1917] dark:text-[#F5F2EB] ${wordArabicSizeClasses}`}
                  >
                    {token.arabic}
                  </span>

                  <div dir="ltr" className="mt-1.5 pt-1.5 border-t border-[#E5DFD3]/80 dark:border-[#2C2824] w-full space-y-0.5">
                    {showTransliteration && token.rootInfo?.transliteration && (
                      <p className="text-[11px] italic text-[#78716C] dark:text-[#A8A29E] leading-tight">
                        {token.rootInfo.transliteration}
                      </p>
                    )}
                    <p className="text-xs leading-snug text-[#292524] dark:text-[#E7E2D8]">
                      {token.literal[language]}
                    </p>
                    {token.rootInfo && (
                      <p
                        dir="rtl"
                        lang="ar"
                        className="font-arabic text-[11px] text-[#78350F] dark:text-[#D4AF37] pt-0.5"
                      >
                        {token.rootInfo.root}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <p
          dir="rtl"
          lang="ar"
          className={`mt-6 font-arabic text-right text-[#1C1917] dark:text-[#F5F2EB] tracking-normal ${arabicSizeClasses}`}
        >
          {ayah.arabic}
        </p>
      )}

      {/* Optional Transliteration */}
      {showTransliteration && (
        <p className="mt-3 text-sm italic text-[#78716C] dark:text-[#A8A29E] leading-relaxed">
          {ayah.transliteration}
        </p>
      )}

      {/* Translation */}
      <p
        className={`mt-4 ${translationSizeClass} leading-[1.7] text-[#292524] dark:text-[#E7E2D8] max-w-[68ch] transition-[font-size] duration-150`}
      >
        {ayah.translation[language]}
      </p>

      {/* Sajdah Tilawah contextual callout on Ayah 15 */}
      {ayah.isSajdah && (
        <div className="mt-5 p-4 rounded-lg border border-[#D6C5A3] dark:border-[#4A3D28] bg-[#FBF9F5] dark:bg-[#121110] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-xs sm:text-sm text-[#57534E] dark:text-[#C7C0B5] leading-relaxed">
            {pickText(language, {
              en: 'This is the prostration verse (Ayat Sajdah) from which the surah takes its name. Perform one prostration upon reciting or listening attentively.',
              id: 'Inilah ayat sajdah yang menjadi nama surah ini. Disyariatkan bersujud tilawah satu kali setelah membaca atau menyimaknya dengan saksama.',
              ms: 'Inilah ayat sajdah yang menjadi nama surah ini. Disunatkan sujud tilawah satu kali setelah membaca atau mendengarnya dengan penuh perhatian.',
            })}
          </p>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onJumpToSajdahGuide();
            }}
            className="text-xs font-semibold text-[#78350F] dark:text-[#D4AF37] hover:underline underline-offset-4 whitespace-nowrap shrink-0 self-start sm:self-center"
          >
            {pickText(language, {
              en: 'Read Sujud Guide & Dua',
              id: 'Baca Panduan & Doa Sujud',
              ms: 'Baca Panduan & Doa Sujud',
            })}
          </button>
        </div>
      )}

      {/* Concise Exegetical Summary + Expand Toggle */}
      <div className="mt-5 pt-4 border-t border-[#EAE4D7] dark:border-[#24211D]">
        <div className="flex items-start justify-between gap-4">
          <p className="text-sm text-[#57534E] dark:text-[#B8B2A8] leading-relaxed max-w-[68ch]">
            <span className="font-semibold text-[#1C1917] dark:text-[#F2EFE9]">
              {pickText(language, {
                en: 'Core Meaning: ',
                id: 'Intisari: ',
                ms: 'Inti Sari: ',
              })}
            </span>
            {ayah.summary[language]}
          </p>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setExpandedTafsir((prev) => !prev);
            }}
            aria-expanded={expandedTafsir}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[#1E3A8A] dark:text-[#D4AF37] hover:bg-[#EAE4D7] dark:hover:bg-[#23201C] transition-colors whitespace-nowrap shrink-0"
          >
            <span>
              {expandedTafsir
                ? pickText(language, {
                    en: 'Hide Tafsir',
                    id: 'Tutup Tafsir',
                    ms: 'Tutup Tafsir',
                  })
                : pickText(language, {
                    en: 'Read Tafsir',
                    id: 'Buka Tafsir',
                    ms: 'Buka Tafsir',
                  })}
            </span>
            {expandedTafsir ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Expanded Classical Tafsir Commentary */}
        {expandedTafsir && (
          <div className="mt-5 space-y-5 pt-2">
            {visibleScholars.map((scholar) => (
              <div key={scholar.key} className="space-y-1.5 max-w-[68ch]">
                <div className="flex flex-wrap items-baseline gap-x-2 text-xs">
                  <h3 className="font-semibold text-[#1C1917] dark:text-[#F2EFE9] tracking-wide">
                    {scholar.title}
                  </h3>
                  <span aria-hidden="true" className="text-[#A8A29E]">
                    ·
                  </span>
                  <span className="text-[#78716C] dark:text-[#A8A29E]">
                    {scholar.subtitle}
                  </span>
                </div>
                <p className="text-[15px] leading-[1.75] text-[#44403C] dark:text-[#D6D0C6]">
                  {ayah.tafsir[scholar.key][language]}
                </p>
              </div>
            ))}

            {/* Linguistic / Balaghah Note */}
            <div className="p-4 rounded-lg bg-[#F3EFE6] dark:bg-[#1C1A17] border border-[#E5DFD3] dark:border-[#2C2824] max-w-[68ch]">
              <p className="text-xs uppercase tracking-widest font-semibold text-[#78716C] dark:text-[#A8A29E]">
                {pickText(language, {
                  en: 'Linguistic & Rhetorical Note',
                  id: 'Catatan Bahasa & Balaghah',
                  ms: 'Catatan Bahasa & Balaghah',
                })}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-[#44403C] dark:text-[#D6D0C6]">
                {ayah.linguisticNote[language]}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Inline Saved Note Display or Editor */}
      {hasNote && !editingNote && (
        <div className="mt-4 p-4 rounded-lg bg-[#F5F1E8] dark:bg-[#1C1A17] border border-[#E5DFD3] dark:border-[#2C2824] flex items-start justify-between gap-4 max-w-[68ch]">
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold text-[#1E3A8A] dark:text-[#93C5FD]">
              {pickText(language, {
                en: 'Personal Reflection',
                id: 'Catatan Pribadi',
                ms: 'Catatan Peribadi',
              })}
            </p>
            <p className="mt-1 text-sm text-[#44403C] dark:text-[#D6D0C6] whitespace-pre-wrap">
              {studyNote?.note}
            </p>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleOpenNoteEditor();
            }}
            className="text-xs font-medium text-[#57534E] dark:text-[#A8A29E] hover:underline whitespace-nowrap shrink-0"
          >
            {pickText(language, {
              en: 'Edit',
              id: 'Ubah',
              ms: 'Sunting',
            })}
          </button>
        </div>
      )}

      {editingNote && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="mt-4 p-4 rounded-lg border border-[#D6CEBE] dark:border-[#332E29] bg-[#FBF9F5] dark:bg-[#121110] max-w-[68ch]"
        >
          <label
            htmlFor={`note-input-${ayah.number}`}
            className="block text-xs font-semibold uppercase tracking-widest text-[#57534E] dark:text-[#A8A29E]"
          >
            {pickText(language, {
              en: `Study Note · Ayah 32:${ayah.number}`,
              id: `Catatan Tadabur · Ayat 32:${ayah.number}`,
              ms: `Catatan Tadabbur · Ayat 32:${ayah.number}`,
            })}
          </label>
          <textarea
            id={`note-input-${ayah.number}`}
            rows={3}
            value={noteDraft}
            onChange={(e) => setNoteDraft(e.target.value)}
            placeholder={pickText(language, {
              en: 'Write a reflection, linguistic insight, or action item...',
              id: 'Tulis perenungan, faedah tafsir, atau pelajaran amal...',
              ms: 'Tulis renungan, faedah tafsir, atau pengajaran amal...',
            })}
            className="mt-2 w-full rounded-lg border border-[#D6CEBE] dark:border-[#332E29] bg-white dark:bg-[#1C1A17] px-3 py-2 text-sm text-[#1C1917] dark:text-[#F2EFE9] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] dark:focus:ring-[#D4AF37]"
          />
          <div className="mt-3 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => setEditingNote(false)}
              className="px-3 py-1.5 text-xs font-medium rounded-lg text-[#57534E] dark:text-[#A8A29E] hover:bg-[#EAE4D7] dark:hover:bg-[#23201C]"
            >
              {pickText(language, {
                en: 'Cancel',
                id: 'Batal',
                ms: 'Batal',
              })}
            </button>
            <button
              type="button"
              onClick={handleCommitNote}
              className="px-4 py-1.5 text-xs font-medium rounded-lg bg-[#1E3A8A] text-white hover:bg-[#172E6E] dark:bg-[#D4AF37] dark:text-[#121110]"
            >
              {pickText(language, {
                en: 'Save Note',
                id: 'Simpan Catatan',
                ms: 'Simpan Catatan',
              })}
            </button>
          </div>
        </div>
      )}
    </article>
  );
};
