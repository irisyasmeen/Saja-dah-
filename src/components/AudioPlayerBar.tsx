import React from 'react';
import { Pause, Play, SkipBack, SkipForward, X } from 'lucide-react';
import { RECITERS, SURAH_SAJDAH_AYAHS } from '../data';
import { AppLanguage, PlaybackMode, ReciterId } from '../types/tafsir';
import { pickText } from '../utils/i18n';

interface AudioPlayerBarProps {
  language: AppLanguage;
  playingAyah: number | null;
  isPlaying: boolean;
  reciterId: ReciterId;
  playbackMode: PlaybackMode;
  activeTrackPhase: 'arabic' | 'english';
  audioError: string | null;
  onTogglePlayPause: () => void;
  onPrevAyah: () => void;
  onNextAyah: () => void;
  onClose: () => void;
}

export const AudioPlayerBar: React.FC<AudioPlayerBarProps> = ({
  language,
  playingAyah,
  isPlaying,
  reciterId,
  playbackMode,
  activeTrackPhase,
  audioError,
  onTogglePlayPause,
  onPrevAyah,
  onNextAyah,
  onClose,
}) => {
  if (playingAyah === null) return null;

  const ayahData = SURAH_SAJDAH_AYAHS.find((a) => a.number === playingAyah);
  const reciter = RECITERS.find((r) => r.id === reciterId) ?? RECITERS[0];

  const trackLabel =
    playbackMode === 'english_only' ||
    (playbackMode === 'bilingual_ar_en' && activeTrackPhase === 'english')
      ? 'English Translation · Ibrahim Walk'
      : reciter.name;

  return (
    <div
      role="region"
      aria-label="Quran recitation player"
      className="fixed bottom-0 inset-x-0 z-40 border-t border-[#D6CEBE] dark:border-[#2C2824] bg-[#FBF9F5]/95 dark:bg-[#171512]/95 backdrop-blur-md"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-2.5 flex items-center justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 text-xs sm:text-sm font-medium text-[#1C1917] dark:text-[#F2EFE9] tabular-nums">
            <span className="truncate">
              {pickText(language, {
                en: `Ayah 32:${playingAyah} of 30`,
                id: `Ayat 32:${playingAyah} dari 30`,
                ms: `Ayat 32:${playingAyah} daripada 30`,
              })}
            </span>
            <span aria-hidden="true" className="text-[#A8A29E]">
              ·
            </span>
            <span className="text-xs text-[#78350F] dark:text-[#D4AF37] truncate">
              {trackLabel}
            </span>
          </div>

          {audioError ? (
            <p className="text-xs text-[#991B1B] dark:text-[#FCA5A5] truncate">
              {audioError}
            </p>
          ) : (
            <p className="text-xs text-[#57534E] dark:text-[#A8A29E] truncate">
              {ayahData?.translation.en}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onPrevAyah}
            disabled={playingAyah <= 1}
            aria-label="Previous ayah"
            className="p-2 rounded-lg text-[#57534E] dark:text-[#A8A29E] hover:bg-[#EAE4D7] dark:hover:bg-[#23201C] disabled:opacity-40 disabled:pointer-events-none"
          >
            <SkipBack className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onTogglePlayPause}
            aria-label={isPlaying ? 'Pause recitation' : 'Resume recitation'}
            className="p-2.5 rounded-lg bg-[#1E3A8A] text-white hover:bg-[#172E6E] dark:bg-[#D4AF37] dark:text-[#121110] dark:hover:bg-[#E2C258]"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-current" />
            ) : (
              <Play className="w-4 h-4 fill-current" />
            )}
          </button>

          <button
            type="button"
            onClick={onNextAyah}
            disabled={playingAyah >= 30}
            aria-label="Next ayah"
            className="p-2 rounded-lg text-[#57534E] dark:text-[#A8A29E] hover:bg-[#EAE4D7] dark:hover:bg-[#23201C] disabled:opacity-40 disabled:pointer-events-none"
          >
            <SkipForward className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close audio player"
            className="p-2 rounded-lg text-[#78716C] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-[#F2EFE9]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
