import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
} from 'lucide-react';
import {
  FULL_SURAH_AUDIO_URL,
  RECITERS,
  SURAH_SAJDAH_AYAHS,
} from '../data';
import {
  AppLanguage,
  PlaybackMode,
  ReciterId,
} from '../types/tafsir';
import { pickText } from '../utils/i18n';

interface RecitationStudioSectionProps {
  language: AppLanguage;
  reciterId: ReciterId;
  onChangeReciter: (id: ReciterId) => void;
  playbackMode: PlaybackMode;
  onChangePlaybackMode: (mode: PlaybackMode) => void;
  playingAyah: number | null;
  activeTrackPhase: 'arabic' | 'english';
  isPlaying: boolean;
  audioError: string | null;
  onPlayAyahInMode: (ayahNumber: number, continuous: boolean) => void;
  onTogglePlayPause: () => void;
  onJumpToAyah: (ayahNumber: number) => void;
}

export const RecitationStudioSection: React.FC<RecitationStudioSectionProps> = ({
  language,
  reciterId,
  onChangeReciter,
  playbackMode,
  onChangePlaybackMode,
  playingAyah,
  activeTrackPhase,
  isPlaying,
  audioError,
  onPlayAyahInMode,
  onTogglePlayPause,
  onJumpToAyah,
}) => {
  const [showFullTranscript, setShowFullTranscript] = useState(false);

  const displayedAyahNumber = playingAyah ?? 1;
  const currentAyah =
    SURAH_SAJDAH_AYAHS.find((a) => a.number === displayedAyahNumber) ??
    SURAH_SAJDAH_AYAHS[0];

  const activeReciter =
    RECITERS.find((r) => r.id === reciterId) ?? RECITERS[0];

  const handlePrimaryPlay = () => {
    if (playingAyah !== null) {
      onTogglePlayPause();
    } else {
      onPlayAyahInMode(1, true);
    }
  };

  return (
    <section
      id="recitation-studio"
      className="border-b border-[#E5DFD3] dark:border-[#2C2824] bg-[#F5F1E8] dark:bg-[#171512] py-12 lg:py-14 scroll-mt-10"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E5DFD3] dark:border-[#2C2824]">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-[#78350F] dark:text-[#D4AF37]">
              {pickText(language, {
                en: 'Audio Recitation & Spoken English Translation',
                id: 'Murotal Audio & Terjemahan Bahasa Inggris',
                ms: 'Bacaan Audio & Terjemahan Bahasa Inggeris',
              })}
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-[#1C1917] dark:text-[#F2EFE9] text-balance">
              {pickText(language, {
                en: 'Listen to Surah As-Sajdah with Synchronized Translation',
                id: 'Dengarkan Surah As-Sajdah Beserta Terjemahan Suara Inggris',
                ms: 'Dengarkan Surah As-Sajdah Berserta Terjemahan Suara Inggeris',
              })}
            </h2>
            <p className="mt-2 text-sm text-[#57534E] dark:text-[#B8B2A8] leading-relaxed">
              {pickText(language, {
                en: 'Stream verse-by-verse Arabic recitation paired sequentially with spoken English audio translation (Ibrahim Walk · Sahih International), or listen to the uninterrupted full surah recording.',
                id: 'Putar bacaan Arab ayat demi ayat yang disambung langsung dengan audio terjemahan bahasa Inggris (Ibrahim Walk · Sahih International), atau dengarkan rekaman penuh satu surah tanpa jeda.',
                ms: 'Mainkan bacaan Arab ayat demi ayat yang disambung terus dengan audio terjemahan bahasa Inggeris (Ibrahim Walk · Sahih International), atau dengarkan rakaman penuh satu surah tanpa henti.',
              })}
            </p>
          </div>

          {/* Playback Mode Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 shrink-0">
            <span className="text-xs font-medium text-[#78716C] dark:text-[#A8A29E] whitespace-nowrap">
              {pickText(language, {
                en: 'Audio Mode:',
                id: 'Mode Audio:',
                ms: 'Mod Audio:',
              })}
            </span>
            <div className="flex items-center gap-1 p-1 rounded-lg bg-[#EAE4D7] dark:bg-[#23201C] overflow-x-auto">
              {(
                [
                  {
                    id: 'bilingual_ar_en',
                    label: pickText(language, {
                      en: 'Arabic + English Audio',
                      id: 'Arab + Audio Inggris',
                      ms: 'Arab + Audio Inggeris',
                    }),
                  },
                  {
                    id: 'arabic_only',
                    label: pickText(language, {
                      en: 'Arabic Only',
                      id: 'Arab Saja',
                      ms: 'Arab Sahaja',
                    }),
                  },
                  {
                    id: 'english_only',
                    label: pickText(language, {
                      en: 'English Audio Only',
                      id: 'Audio Inggris Saja',
                      ms: 'Audio Inggeris Sahaja',
                    }),
                  },
                ] as { id: PlaybackMode; label: string }[]
              ).map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => onChangePlaybackMode(m.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    playbackMode === m.id
                      ? 'bg-[#FBF9F5] dark:bg-[#121110] text-[#1E3A8A] dark:text-[#D4AF37] shadow-xs'
                      : 'text-[#57534E] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-[#F2EFE9]'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Recitation Stage */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 8 cols: Synchronized Verse & Translation Stage */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-xl border border-[#E5DFD3] dark:border-[#2C2824] bg-[#FBF9F5] dark:bg-[#121110] flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#EAE4D7] dark:border-[#24211D]">
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs uppercase tracking-widest text-[#78716C] dark:text-[#A8A29E] tabular-nums">
                  <span className="font-semibold text-[#1E3A8A] dark:text-[#D4AF37]">
                    {language === 'en' ? 'Ayah' : 'Ayat'} 32:{currentAyah.number} / 30
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>
                    {playbackMode === 'english_only' ||
                    (playbackMode === 'bilingual_ar_en' &&
                      activeTrackPhase === 'english' &&
                      playingAyah !== null)
                      ? 'Spoken English (Ibrahim Walk)'
                      : activeReciter.name}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onJumpToAyah(currentAyah.number)}
                  className="text-xs font-semibold text-[#1E3A8A] dark:text-[#D4AF37] hover:underline underline-offset-4 whitespace-nowrap shrink-0"
                >
                  {pickText(language, {
                    en: 'Open Verse Tafsir',
                    id: 'Buka Tafsir Ayat',
                    ms: 'Buka Tafsir Ayat',
                  })}
                </button>
              </div>

              {/* Arabic Text */}
              <p
                dir="rtl"
                lang="ar"
                className="mt-6 font-arabic text-2xl sm:text-[2rem] leading-[2.15] text-right text-[#1C1917] dark:text-[#F5F2EB]"
              >
                {currentAyah.arabic}
              </p>

              {/* Transliteration */}
              <p className="mt-3 text-sm italic text-[#78716C] dark:text-[#A8A29E] leading-relaxed">
                {currentAyah.transliteration}
              </p>

              {/* English Translation of Recitation + Active Local Language */}
              <div className="mt-5 p-4 rounded-lg bg-[#F5F1E8] dark:bg-[#171512] border border-[#E5DFD3] dark:border-[#2C2824]">
                <p className="text-xs uppercase tracking-widest font-semibold text-[#78716C] dark:text-[#A8A29E]">
                  English Translation of Recitation
                </p>
                <p className="mt-1.5 text-base sm:text-[17px] leading-[1.7] text-[#1C1917] dark:text-[#F2EFE9]">
                  “{currentAyah.translation.en}”
                </p>
                {language !== 'en' && (
                  <p className="mt-2 pt-2 border-t border-[#E5DFD3] dark:border-[#2C2824] text-sm leading-relaxed text-[#57534E] dark:text-[#B8B2A8]">
                    {currentAyah.translation[language]}
                  </p>
                )}
              </div>

              {audioError && (
                <p className="mt-4 text-xs text-[#991B1B] dark:text-[#FCA5A5]">
                  {audioError}
                </p>
              )}
            </div>

            {/* Transport Controls */}
            <div className="mt-6 pt-5 border-t border-[#EAE4D7] dark:border-[#24211D] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const prev =
                      displayedAyahNumber > 1 ? displayedAyahNumber - 1 : 1;
                    onPlayAyahInMode(prev, true);
                  }}
                  disabled={displayedAyahNumber <= 1}
                  aria-label="Previous verse recitation"
                  className="p-2.5 rounded-lg border border-[#D6CEBE] dark:border-[#332E29] text-[#44403C] dark:text-[#D6D0C6] hover:bg-[#EAE4D7] dark:hover:bg-[#23201C] disabled:opacity-40 disabled:pointer-events-none"
                >
                  <SkipBack className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handlePrimaryPlay}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-[#1E3A8A] text-white hover:bg-[#172E6E] dark:bg-[#D4AF37] dark:text-[#121110] dark:hover:bg-[#E2C258] transition-colors whitespace-nowrap shrink-0"
                >
                  {isPlaying && playingAyah !== null ? (
                    <>
                      <Pause className="w-4 h-4 fill-current" />
                      <span>
                        {pickText(language, {
                          en: 'Pause',
                          id: 'Jeda',
                          ms: 'Jeda',
                        })}
                      </span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>
                        {playingAyah !== null
                          ? pickText(language, {
                              en: 'Resume',
                              id: 'Lanjutkan',
                              ms: 'Sambung',
                            })
                          : pickText(language, {
                              en: 'Start Continuous Recitation',
                              id: 'Mulai Murotal Beruntun',
                              ms: 'Mula Bacaan Berterusan',
                            })}
                      </span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const next =
                      displayedAyahNumber < 30 ? displayedAyahNumber + 1 : 30;
                    onPlayAyahInMode(next, true);
                  }}
                  disabled={displayedAyahNumber >= 30}
                  aria-label="Next verse recitation"
                  className="p-2.5 rounded-lg border border-[#D6CEBE] dark:border-[#332E29] text-[#44403C] dark:text-[#D6D0C6] hover:bg-[#EAE4D7] dark:hover:bg-[#23201C] disabled:opacity-40 disabled:pointer-events-none"
                >
                  <SkipForward className="w-4 h-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => setShowFullTranscript((prev) => !prev)}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#57534E] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-[#F2EFE9] whitespace-nowrap shrink-0"
              >
                <span>
                  {showFullTranscript
                    ? pickText(language, {
                        en: 'Hide Full English Transcript',
                        id: 'Tutup Transkrip Inggris Lengkap',
                        ms: 'Tutup Transkrip Inggeris Penuh',
                      })
                    : pickText(language, {
                        en: 'Show Full English Recitation Transcript (1–30)',
                        id: 'Tampilkan Transkrip Inggris Lengkap (1–30)',
                        ms: 'Papar Transkrip Inggeris Penuh (1–30)',
                      })}
                </span>
                {showFullTranscript ? (
                  <ChevronUp className="w-3.5 h-3.5" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* Right 4 cols: Reciter Selection + Uninterrupted Full Surah Stream */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-5">
            <div className="p-5 rounded-xl border border-[#E5DFD3] dark:border-[#2C2824] bg-[#FBF9F5] dark:bg-[#121110]">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-[#78716C] dark:text-[#A8A29E]">
                {pickText(language, {
                  en: 'Select Arabic Reciter',
                  id: 'Pilih Qari (Pembaca Arab)',
                  ms: 'Pilih Qari (Pembaca Arab)',
                })}
              </h3>
              <div className="mt-3 space-y-2">
                {RECITERS.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => onChangeReciter(r.id)}
                    className={`w-full text-left p-3 rounded-lg border transition-colors ${
                      reciterId === r.id
                        ? 'border-[#1E3A8A] dark:border-[#D4AF37] bg-[#F5F1E8] dark:bg-[#1C1A17]'
                        : 'border-[#E5DFD3] dark:border-[#2C2824] hover:bg-[#F5F1E8]/60 dark:hover:bg-[#1C1A17]/60'
                    }`}
                  >
                    <p className="text-sm font-semibold text-[#1C1917] dark:text-[#F2EFE9]">
                      {r.name}
                    </p>
                    <p className="text-xs text-[#78716C] dark:text-[#A8A29E]">
                      {r.style}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Uninterrupted Full Surah MP3 Player */}
            <div className="p-5 rounded-xl border border-[#E5DFD3] dark:border-[#2C2824] bg-[#FBF9F5] dark:bg-[#121110]">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#78350F] dark:text-[#D4AF37]">
                <Volume2 className="w-4 h-4" />
                <span>
                  {pickText(language, {
                    en: 'Full Surah Track (Uninterrupted)',
                    id: 'Rekaman Penuh 1 Surah Tanpa Jeda',
                    ms: 'Rakaman Penuh 1 Surah Tanpa Henti',
                  })}
                </span>
              </div>
              <p className="mt-1.5 text-xs text-[#57534E] dark:text-[#B8B2A8] leading-relaxed">
                {pickText(language, {
                  en: 'Complete Surah As-Sajdah (Ayat 1–30) continuous audio by Mishary Al-Afasy.',
                  id: 'Murotal utuh Surah As-Sajdah (Ayat 1–30) oleh Syaikh Misyari Rasyid Al-Afasy.',
                  ms: 'Bacaan lengkap Surah As-Sajdah (Ayat 1–30) oleh Syeikh Mishary Rashid Al-Afasy.',
                })}
              </p>
              <audio
                controls
                preload="none"
                src={FULL_SURAH_AUDIO_URL}
                className="mt-3 w-full h-10"
              >
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>

        {/* Expandable Synchronized 30-Verse English Recitation Transcript */}
        {showFullTranscript && (
          <div className="mt-8 p-6 sm:p-8 rounded-xl border border-[#E5DFD3] dark:border-[#2C2824] bg-[#FBF9F5] dark:bg-[#121110]">
            <div className="flex flex-wrap items-baseline justify-between gap-4 pb-4 border-b border-[#E5DFD3] dark:border-[#2C2824]">
              <h3 className="font-display text-2xl font-semibold text-[#1C1917] dark:text-[#F2EFE9]">
                Complete English Translation of Surah As-Sajdah (32:1–30)
              </h3>
              <span className="text-xs text-[#78716C] dark:text-[#A8A29E]">
                Click any verse to play its recitation & audio translation
              </span>
            </div>

            <div className="mt-4 divide-y divide-[#EAE4D7] dark:divide-[#24211D]">
              {SURAH_SAJDAH_AYAHS.map((v) => {
                const isThisPlaying = playingAyah === v.number;
                return (
                  <div
                    key={v.number}
                    className={`py-3.5 flex flex-col sm:flex-row sm:items-start justify-between gap-4 ${
                      isThisPlaying
                        ? 'bg-[#F5F1E8] dark:bg-[#1C1A17] px-3 -mx-3 rounded-lg'
                        : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <button
                        type="button"
                        onClick={() => onPlayAyahInMode(v.number, true)}
                        aria-label={`Play recitation for ayah ${v.number}`}
                        className="mt-0.5 px-2.5 py-1 rounded-md text-xs font-semibold tabular-nums bg-[#EAE4D7] dark:bg-[#23201C] text-[#1E3A8A] dark:text-[#D4AF37] hover:bg-[#1E3A8A] hover:text-white dark:hover:bg-[#D4AF37] dark:hover:text-[#121110] transition-colors shrink-0"
                      >
                        32:{v.number}
                      </button>
                      <p className="text-sm leading-relaxed text-[#292524] dark:text-[#E7E2D8]">
                        {v.translation.en}
                      </p>
                    </div>
                    <p
                      dir="rtl"
                      lang="ar"
                      className="font-arabic text-lg text-[#57534E] dark:text-[#A8A29E] sm:max-w-xs text-right shrink-0"
                    >
                      {v.arabic}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
