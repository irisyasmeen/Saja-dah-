import React, { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  NotebookPen,
  Pause,
  Play,
  RotateCcw,
  Shuffle,
} from 'lucide-react';
import {
  DAILY_REFLECTIONS,
  getDailyAyahNumber,
  SURAH_SAJDAH_AYAHS,
} from '../data';
import { AppLanguage, VerseStudyNote } from '../types/tafsir';
import { pickText } from '../utils/i18n';

interface DailyReflectionSectionProps {
  language: AppLanguage;
  playingAyah: number | null;
  isPlaying: boolean;
  studyNotes: Record<number, VerseStudyNote>;
  onPlayAyah: (ayahNumber: number) => void;
  onJumpToAyah: (ayahNumber: number) => void;
  onSaveNote: (ayahNumber: number, noteText: string) => void;
}

export const DailyReflectionSection: React.FC<DailyReflectionSectionProps> = ({
  language,
  playingAyah,
  isPlaying,
  studyNotes,
  onPlayAyah,
  onJumpToAyah,
  onSaveNote,
}) => {
  const dailyAyahNumber = useMemo(() => getDailyAyahNumber(), []);
  const [selectedAyahNumber, setSelectedAyahNumber] =
    useState<number>(dailyAyahNumber);
  const [isJournaling, setIsJournaling] = useState(false);
  const [journalDraft, setJournalDraft] = useState('');
  const [justSaved, setJustSaved] = useState(false);

  const ayah = useMemo(
    () =>
      SURAH_SAJDAH_AYAHS.find((a) => a.number === selectedAyahNumber) ??
      SURAH_SAJDAH_AYAHS[0],
    [selectedAyahNumber]
  );

  const reflection = useMemo(
    () =>
      DAILY_REFLECTIONS.find((r) => r.ayahNumber === ayah.number) ??
      DAILY_REFLECTIONS[0],
    [ayah.number]
  );

  const formattedDate = useMemo(() => {
    const locale =
      language === 'id' ? 'id-ID' : language === 'ms' ? 'ms-MY' : 'en-US';
    try {
      return new Intl.DateTimeFormat(locale, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }).format(new Date());
    } catch {
      return new Date().toLocaleDateString();
    }
  }, [language]);

  const isDailyDefault = selectedAyahNumber === dailyAyahNumber;
  const isThisAyahPlaying = playingAyah === ayah.number && isPlaying;
  const existingNote = studyNotes[ayah.number]?.note ?? '';

  const handleDrawAnother = () => {
    let next = Math.floor(Math.random() * 30) + 1;
    if (next === selectedAyahNumber) {
      next = (selectedAyahNumber % 30) + 1;
    }
    setSelectedAyahNumber(next);
    setIsJournaling(false);
    setJustSaved(false);
  };

  const handleResetToToday = () => {
    setSelectedAyahNumber(dailyAyahNumber);
    setIsJournaling(false);
    setJustSaved(false);
  };

  const handleOpenJournal = () => {
    setJournalDraft(existingNote);
    setIsJournaling((prev) => !prev);
    setJustSaved(false);
  };

  const handleSaveJournal = () => {
    onSaveNote(ayah.number, journalDraft.trim());
    setIsJournaling(false);
    setJustSaved(true);
  };

  return (
    <section
      id="daily-reflection"
      aria-labelledby="daily-reflection-heading"
      className="border-b border-[#E5DFD3] dark:border-[#2C2824] bg-[#FBF9F5] dark:bg-[#121110]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-9 lg:py-11">
        <div className="rounded-xl border border-[#E5DFD3] dark:border-[#2C2824] bg-[#F5F1E8] dark:bg-[#171512] p-6 sm:p-8">
          {/* Top quiet unboxed metadata & shuffle controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#E5DFD3] dark:border-[#2C2824]">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs uppercase tracking-widest text-[#78716C] dark:text-[#A8A29E] tabular-nums">
              <span
                id="daily-reflection-heading"
                className="font-semibold text-[#78350F] dark:text-[#D4AF37]"
              >
                {isDailyDefault
                  ? pickText(language, {
                      en: 'Daily Reflection',
                      id: 'Renungan Harian',
                      ms: 'Renungan Harian',
                    })
                  : pickText(language, {
                      en: 'Contemplative Study',
                      id: 'Renungan Ayat Pilihan',
                      ms: 'Renungan Ayat Pilihan',
                    })}
              </span>
              <span aria-hidden="true">·</span>
              <span className="font-semibold text-[#1E3A8A] dark:text-[#F2EFE9]">
                {language === 'en'
                  ? `Ayah 32:${ayah.number}`
                  : `Ayat 32:${ayah.number}`}
              </span>
              <span aria-hidden="true">·</span>
              <span>{reflection.themeLabel[language]}</span>
              {isDailyDefault && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{formattedDate}</span>
                </>
              )}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {!isDailyDefault && (
                <button
                  type="button"
                  onClick={handleResetToToday}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-[#D6CEBE] dark:border-[#332E29] text-[#57534E] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-[#F2EFE9] hover:bg-[#EAE4D7] dark:hover:bg-[#23201C] transition-colors whitespace-nowrap shrink-0"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>
                    {pickText(language, {
                      en: "Today's Verse",
                      id: 'Ayat Hari Ini',
                      ms: 'Ayat Hari Ini',
                    })}
                  </span>
                </button>
              )}

              <button
                type="button"
                onClick={handleDrawAnother}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-[#D6CEBE] dark:border-[#332E29] bg-[#FBF9F5] dark:bg-[#121110] text-[#1C1917] dark:text-[#F2EFE9] hover:bg-[#EAE4D7] dark:hover:bg-[#23201C] transition-colors whitespace-nowrap shrink-0"
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>
                  {pickText(language, {
                    en: 'Another Verse',
                    id: 'Ayat Lain',
                    ms: 'Ayat Lain',
                  })}
                </span>
              </button>
            </div>
          </div>

          {/* Asymmetric Editorial Split: Selected Verse + Guided Question */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Verse Arabic & Translation */}
            <div className="lg:col-span-6 space-y-4">
              <p
                dir="rtl"
                lang="ar"
                className="font-arabic text-2xl sm:text-[1.85rem] leading-[2.15] text-right text-[#1C1917] dark:text-[#F5F2EB]"
              >
                {ayah.arabic}
              </p>

              <p className="text-xs italic text-[#78716C] dark:text-[#A8A29E] leading-relaxed">
                {ayah.transliteration}
              </p>

              <p className="text-[15px] sm:text-base leading-relaxed text-[#292524] dark:text-[#E7E2D8]">
                {ayah.translation[language]}
              </p>
            </div>

            {/* Right: Guided Contemplative Question & Practice Cue */}
            <div className="lg:col-span-6 lg:border-l lg:border-[#E5DFD3] dark:lg:border-[#2C2824] lg:pl-8 space-y-5">
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold text-[#78716C] dark:text-[#A8A29E]">
                  {pickText(language, {
                    en: 'Contemplative Question',
                    id: 'Pertanyaan Renungan (Tadabur)',
                    ms: 'Soalan Tadabbur',
                  })}
                </p>
                <p className="mt-2 font-display text-xl sm:text-[1.4rem] leading-[1.45] text-[#1C1917] dark:text-[#F2EFE9]">
                  {reflection.question[language]}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#FBF9F5] dark:bg-[#121110] border border-[#E5DFD3] dark:border-[#2C2824]">
                <p className="text-xs uppercase tracking-widest font-semibold text-[#78350F] dark:text-[#D4AF37]">
                  {pickText(language, {
                    en: 'Daily Spiritual Practice',
                    id: 'Amalan Praktis Hari Ini',
                    ms: 'Amalan Rohani Hari Ini',
                  })}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-[#44403C] dark:text-[#D6D0C6]">
                  {reflection.practiceCue[language]}
                </p>
              </div>

              {/* Action Strip */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => onPlayAyah(ayah.number)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                    isThisAyahPlaying
                      ? 'bg-[#1E3A8A] text-white dark:bg-[#D4AF37] dark:text-[#121110]'
                      : 'border border-[#D6CEBE] dark:border-[#332E29] bg-[#FBF9F5] dark:bg-[#121110] text-[#1C1917] dark:text-[#F2EFE9] hover:bg-[#EAE4D7] dark:hover:bg-[#23201C]'
                  }`}
                >
                  {isThisAyahPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 fill-current" />
                      <span>
                        {pickText(language, {
                          en: 'Pause Verse',
                          id: 'Jeda Ayat',
                          ms: 'Jeda Ayat',
                        })}
                      </span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>
                        {pickText(language, {
                          en: 'Listen to Verse',
                          id: 'Dengar Ayat',
                          ms: 'Dengar Ayat',
                        })}
                      </span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => onJumpToAyah(ayah.number)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium border border-[#D6CEBE] dark:border-[#332E29] bg-[#FBF9F5] dark:bg-[#121110] text-[#1C1917] dark:text-[#F2EFE9] hover:bg-[#EAE4D7] dark:hover:bg-[#23201C] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>
                    {pickText(language, {
                      en: 'Open Full Tafsir',
                      id: 'Buka Tafsir Lengkap',
                      ms: 'Buka Tafsir Penuh',
                    })}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={handleOpenJournal}
                  aria-expanded={isJournaling}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium bg-[#1E3A8A] text-white hover:bg-[#172E6E] dark:bg-[#D4AF37] dark:text-[#121110] dark:hover:bg-[#E2C258] transition-colors whitespace-nowrap shrink-0"
                >
                  <NotebookPen className="w-3.5 h-3.5" />
                  <span>
                    {existingNote
                      ? pickText(language, {
                          en: 'Edit Reflection Note',
                          id: 'Ubah Catatan Renungan',
                          ms: 'Sunting Catatan Renungan',
                        })
                      : pickText(language, {
                          en: 'Write Reflection',
                          id: 'Tulis Renungan',
                          ms: 'Tulis Renungan',
                        })}
                  </span>
                </button>

                {justSaved && !isJournaling && (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-[#1E3A8A] dark:text-[#D4AF37]">
                    <Check className="w-3.5 h-3.5" />
                    <span>
                      {pickText(language, {
                        en: 'Saved to Study Notes',
                        id: 'Tersimpan di Catatan',
                        ms: 'Disimpan dalam Catatan',
                      })}
                    </span>
                  </span>
                )}
              </div>

              {/* Inline Reflection Journal Editor */}
              {isJournaling && (
                <div className="p-4 rounded-lg border border-[#D6CEBE] dark:border-[#332E29] bg-[#FBF9F5] dark:bg-[#121110]">
                  <label
                    htmlFor={`daily-journal-${ayah.number}`}
                    className="block text-xs font-semibold uppercase tracking-widest text-[#57534E] dark:text-[#A8A29E]"
                  >
                    {pickText(language, {
                      en: `Personal Reflection · Ayah 32:${ayah.number}`,
                      id: `Renungan Pribadi · Ayat 32:${ayah.number}`,
                      ms: `Renungan Peribadi · Ayat 32:${ayah.number}`,
                    })}
                  </label>
                  <textarea
                    id={`daily-journal-${ayah.number}`}
                    rows={3}
                    value={journalDraft}
                    onChange={(e) => setJournalDraft(e.target.value)}
                    placeholder={pickText(language, {
                      en: 'Record your response to today’s contemplative question...',
                      id: 'Tuliskan jawaban Anda atas pertanyaan renungan hari ini...',
                      ms: 'Catatkan jawapan anda terhadap soalan tadabbur hari ini...',
                    })}
                    className="mt-2 w-full rounded-lg border border-[#D6CEBE] dark:border-[#332E29] bg-white dark:bg-[#1C1A17] px-3 py-2 text-sm text-[#1C1917] dark:text-[#F2EFE9] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] dark:focus:ring-[#D4AF37]"
                  />
                  <div className="mt-3 flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsJournaling(false)}
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
                      onClick={handleSaveJournal}
                      className="px-4 py-1.5 text-xs font-medium rounded-lg bg-[#1E3A8A] text-white hover:bg-[#172E6E] dark:bg-[#D4AF37] dark:text-[#121110]"
                    >
                      {pickText(language, {
                        en: 'Save Reflection',
                        id: 'Simpan Renungan',
                        ms: 'Simpan Renungan',
                      })}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
